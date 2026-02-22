'use client';

import React, { useEffect } from 'react';

interface GTMProps {
  gtmId: string;
}

const GTM: React.FC<GTMProps> = ({ gtmId }) => {
  useEffect(() => {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s) as HTMLScriptElement,
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;

      if (f && f.parentNode) {
        f.parentNode.insertBefore(j, f);
      }
    })(window, document, 'script', 'dataLayer', gtmId);

  }, [gtmId]);

  return null;
};

export default GTM;

export const GTMBody: React.FC<GTMProps> = ({ gtmId }) => {
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      {/* End Google Tag Manager (noscript) */}
    </>
  );
};

