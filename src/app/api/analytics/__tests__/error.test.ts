/**
 * Test Perspective Table: Analytics Error API
 *
 * | Case ID | Input / Precondition | Perspective | Expected Result | Notes |
 * |---------|----------------------|-------------|-----------------|-------|
 * | TC-N-01 | Valid error data     | Normal      | ss_server_error | Logged to Mixpanel with details |
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '../error/route';
import { mixpanelServer } from '@/lib/mixpanelServer';

// Mock mixpanelServer
vi.mock('@/lib/mixpanelServer', () => ({
  mixpanelServer: {
    track: vi.fn(),
  },
}));

describe('/api/analytics/error', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('TC-N-01: should log server error to Mixpanel', async () => {
    const errorBody = {
      error_type: '500',
      message: 'Database connection failed',
      path: '/api/data',
      stack: 'Error: Database connection failed\n    at ...',
    };

    const request = new Request('http://localhost/api/analytics/error', {
      method: 'POST',
      body: JSON.stringify(errorBody),
      headers: {
        'x-forwarded-for': '5.6.7.8',
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);

    expect(mixpanelServer?.track).toHaveBeenCalledWith('ss_server_error', expect.objectContaining({
      error_type: '500',
      error_message: 'Database connection failed',
      request_path: '/api/data',
      $ip: '5.6.7.8',
      mp_source: 'server_side_error_logger',
    }));
  });
});
