import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import ModeSwitch from '@/components/ModeSwitch';
import MetaPixel from '@/components/tracker-network/Meta';
import type { Metadata } from 'next';
import TiktokPixel from '@/components/tracker-network/Tiktok';
import Taboola from '@/components/tracker-network/Taboola';
import GTM, { GTMBody } from '@/components/tracker-network/GTM';
import { AnalyticsProviderConfig } from '@/global/config';
import { AnalyticsProvider } from '@zen-analytics/constants';
import GA4 from '@/components/tracker-network/GA4';
import Microsoft from '@/components/tracker-network/Microsoft';
import Appsflyer from '@/components/tracker-network/Appsflyer';
import Plausible from '@/components/tracker-network/Plausible';
import Mixpanel from '@/components/tracker-network/Mixpanel';
import { softwareApplicationSchema, organizationSchema, personSchema } from '@/utils/schemas';

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
        <link rel="canonical" href="https://zenanalytics.online" />        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/images/128.svg" />
        <link rel="preload" href="/images/carousel/webp/1.webp" as="image" />
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
        <Mixpanel />
        <TiktokPixel /> 
        <Taboola />       
        <GTM gtmId={AnalyticsProviderConfig[AnalyticsProvider.GTM].id} />
        <GA4 accountId={AnalyticsProviderConfig[AnalyticsProvider.GA4].id} />
        <Microsoft trackingId={AnalyticsProviderConfig[AnalyticsProvider.Microsoft].id} />        
        <Appsflyer webAppId={AnalyticsProviderConfig[AnalyticsProvider.Appsflyer].id} />
        <Plausible domain="zenanalytics.online"/>
      </head>
      <body>
        <MetaPixel />
        <GTMBody gtmId={AnalyticsProviderConfig[AnalyticsProvider.GTM].id} />
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
