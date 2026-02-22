import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeRegistry from '@/components/ThemeRegistry';
import SupportFab from '@/components/ui/support-fab';
import { softwareApplicationSchema, organizationSchema, personSchema } from '@/utils/schemas';


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://zenanalytics.online" />
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
