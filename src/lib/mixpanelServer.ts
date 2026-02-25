import Mixpanel from 'mixpanel';

// For testing purposes, we use the public token on the server as well
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

/**
 * Mixpanel Server-Side Client
 * Used for the "Concierge" tracking proxy and server-side error logging.
 * Events tracked via this client will be prefixed with 'ss_' for testing.
 */
export const mixpanelServer = MIXPANEL_TOKEN 
  ? Mixpanel.init(MIXPANEL_TOKEN) 
  : null;

if (!mixpanelServer && process.env.NODE_ENV !== 'production') {
  console.warn('Mixpanel Server-Side Client: NEXT_PUBLIC_MIXPANEL_TOKEN is missing!');
}
