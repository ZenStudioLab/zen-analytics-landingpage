'use client';
 
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

/**
 * Mixpanel Tracking Component (Concierge)
 * 
 * Handles initialization and automatic page view tracking with dual-tracking 
 * verification (Direct Client-side + Server-side relay).
 */
export default function Mixpanel() {
  const pathname = usePathname();
 
  useEffect(() => {
    if (!MIXPANEL_TOKEN) {
      console.warn('Mixpanel token is missing! Check your .env file.');
      return;
    }
 
    mixpanel.init(MIXPANEL_TOKEN, { autocapture: true });
  }, []);

  useEffect(() => {
    if (!pathname || !MIXPANEL_TOKEN) return;

    // 1. Client-side tracking (Direct to Mixpanel)
    mixpanel.track('page_view', { page: pathname });

    // 2. Server-side tracking (Duplicate via concierge proxy for testing)
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        event: 'page_view', 
        properties: { 
          page: pathname, 
          client_platform: 'web_browser',
          source: 'mixpanel_component'
        } 
      }),
    }).catch((err) => {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Mixpanel Dual-Tracking Proxy failed:', err);
      }
    });
  }, [pathname]);
 
  return null;
}