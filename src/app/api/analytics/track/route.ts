import { NextResponse } from 'next/server';
import { mixpanelServer } from '@/lib/mixpanelServer';

/**
 * Concierge Track Proxy (Testing Phase)
 * 
 * This route receives events from the client and forwards them to Mixpanel 
 * via the server-side SDK. Events are prefixed with 'ss_' to distinguish 
 * them from direct client-side events in the dashboard.
 */
export async function POST(request: Request) {
  if (!mixpanelServer) {
    return NextResponse.json(
      { error: 'Mixpanel Server-Side is not configured' }, 
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { event, properties } = body;

    if (!event) {
      return NextResponse.json({ error: 'Event name is required' }, { status: 400 });
    }

    // Concierge Logic: Forward real IP and add source metadata
    const enrichedProperties = {
      ...properties,
      $ip: request.headers.get('x-forwarded-for') || '0.0.0.0',
      mp_source: 'server_side_proxy',
      ss_timestamp: new Date().toISOString(),
    };

    // Track with 'ss_' prefix
    mixpanelServer.track(`ss_${event}`, enrichedProperties);

    return NextResponse.json({ 
      success: true, 
      tracked: `ss_${event}`,
      note: 'Dual-tracking active (Server-side relay)' 
    });
  } catch (error) {
    console.error('Mixpanel SS Proxy Error:', error);
    return NextResponse.json({ error: 'Failed to process tracking request' }, { status: 400 });
  }
}
