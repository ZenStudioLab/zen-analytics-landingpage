/**
 * Test Perspective Table: Analytics Track API
 *
 * | Case ID | Input / Precondition | Perspective | Expected Result | Notes |
 * |---------|----------------------|-------------|-----------------|-------|
 * | TC-N-01 | Valid event & props  | Normal      | ss_ prefix added| Enriched with $ip and mp_source |
 * | TC-E-01 | Missing event name   | Error       | 400 Bad Request | Error message returned |
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '../track/route';
import { mixpanelServer } from '@/lib/mixpanelServer';

// Mock mixpanelServer
vi.mock('@/lib/mixpanelServer', () => ({
  mixpanelServer: {
    track: vi.fn(),
  },
}));

describe('/api/analytics/track', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('TC-N-01: should track event with ss_ prefix and enriched properties', async () => {
    const requestBody = {
      event: 'test_event',
      properties: { key: 'value' },
    };

    const request = new Request('http://localhost/api/analytics/track', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'x-forwarded-for': '1.2.3.4',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.tracked).toBe('ss_test_event');

    expect(mixpanelServer?.track).toHaveBeenCalledWith('ss_test_event', expect.objectContaining({
      key: 'value',
      $ip: '1.2.3.4',
      mp_source: 'server_side_proxy',
    }));
  });

  it('TC-E-01: should return 400 if event name is missing', async () => {
    const request = new Request('http://localhost/api/analytics/track', {
      method: 'POST',
      body: JSON.stringify({ properties: {} }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Event name is required');
  });
});
