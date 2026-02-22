'use client';

import { useEffect } from 'react';

// Type definition for the Meta Pixel (optional, but recommended)
interface Fbq {
  (action: 'init', pixelId: string): void;
  (action: 'track', eventName: string, data?: object): void;
  queue: any[];
  callMethod?: (...args: any[]) => void;
  push: (...args: any[]) => void;
  loaded: boolean;
  version: string;
}
declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

const FacebookPixel = () => {
  useEffect(() => {
    // Your Pixel ID
    const pixelId = '528040257004569';



    if (!window.fbq) {
      (function (
        f: Window & typeof globalThis,
        b: Document,
        e: string,
        v: string
      ) {
        if (f.fbq) return;
        const n = f.fbq = function () {
          n.callMethod
            ? (n as any).callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        } as unknown as Fbq;
        if (!f._fbq) f._fbq = n;
        n.push = n as any;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];

        const t = b.createElement(e) as HTMLScriptElement;
        t.async = true;
        t.src = v;

        const s = b.getElementsByTagName(e)[0];
        if (s && s.parentNode) {
          s.parentNode.insertBefore(t, s);
        }
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );
    }

    if (window.fbq) {
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }

    const handleRouteChange = () => {
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // No-script fallback (optional, but recommended)
  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=528040257004569&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
};

export default FacebookPixel;