import { NextResponse } from 'next/server';
import { mixpanelServer } from '@/lib/mixpanelServer';

/**
 * Server-Side Error Tracking Route
 * 
 * Specifically designed to capture 404s, 500s, or other server-side 
 * exceptions and log them to Mixpanel with the 'ss_server_error' event.
 */
export async function POST(request: Request) {
  if (!mixpanelServer) {
    return NextResponse.json({ error: 'Mixpanel SS not configured' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { error_type, message, path, stack } = body;

    mixpanelServer.track('ss_server_error', {
      error_type: error_type || 'Unknown',
      error_message: message,
      request_path: path,
      error_stack: stack, // Be careful with stack trace size in production
      $ip: request.headers.get('x-forwarded-for') || '0.0.0.0',
      mp_source: 'server_side_error_logger',
    });

    return NextResponse.json({ success: true, logged: 'ss_server_error' });
  } catch (error) {
    console.error('Mixpanel SS Error Logger Failure:', error);
    return NextResponse.json({ error: 'Failed to log error' }, { status: 400 });
  }
}
