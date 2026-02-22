import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeRegistry from '@/components/ThemeRegistry';
import SupportFab from '@/components/ui/support-fab';
import { softwareApplicationSchema, organizationSchema, personSchema } from '@/utils/schemas';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zen Analytics — Debug GA4, GTM & 25+ Ad Pixels in One Extension',
  description: 'Free browser extension to debug Google Analytics 4, GTM, Meta Pixel, TikTok, LinkedIn, and 25+ tracking platforms simultaneously. 5-star rated on Chrome Web Store. Works on Chrome, Edge, Brave, and Vivaldi.',
  alternates: {
    canonical: 'https://zenanalytics.online',
  },
  openGraph: {
    title: 'Zen Analytics — Unified Analytics & Pixel Tracker Debugger',
    description: 'Stop switching between tools. Debug GA4, GTM, Meta Pixel, TikTok and 20+ platforms at once. Free Chrome extension — 5 stars.',
    url: 'https://zenanalytics.online',
    siteName: 'Zen Analytics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zen Analytics — Debug 25+ Analytics Platforms At Once',
    description: 'Free Chrome extension. Debug GA4, GTM, Meta Pixel, TikTok and more simultaneously. 5-star rating on Chrome Web Store.',
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="google-site-verification" content="LC-sGMf03ki4dfJ9JKdOuSSuYJp-6lxy91Y-t9eMlLE" />
        <link rel="icon" href="/images/128.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        {/* <InitColorSchemeScript attribute="class" /> */}
        <ThemeRegistry>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            {props.children}
            <SupportFab />
          </AppRouterCacheProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
