import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getBreadcrumbSchema } from '@/utils/schemas';
import { EXTENSION_URLS } from '@zen-analytics/constants';

export const metadata: Metadata = {
  title: 'GA4 Debugger Chrome Extension — Debug Google Analytics 4 Events in Real Time',
  description: 'Free Chrome extension to debug Google Analytics 4 (GA4) events in real time. Inspect measurement protocol parameters, event names, user properties, and consent mode signals — no DebugView required.',
  alternates: {
    canonical: 'https://zenanalytics.online/ga4-debugger',
  },
  openGraph: {
    title: 'GA4 Debugger Chrome Extension — Zen Analytics',
    description: 'Debug Google Analytics 4 events in real time. Free Chrome extension — 5-star rated, 500+ installs.',
    url: 'https://zenanalytics.online/ga4-debugger',
    siteName: 'Zen Analytics',
    type: 'website',
    images: [
      {
        url: 'https://zenanalytics.online/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zen Analytics GA4 Debugger'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GA4 Debugger Chrome Extension — Zen Analytics',
    description: 'Debug Google Analytics 4 events, parameters, and consent signals in real time. Free, 5-star rated.',
  },
};

const ga4FaqItems = [
  {
    question: 'How does Zen Analytics debug Google Analytics 4 events?',
    answer: 'Zen Analytics intercepts all outgoing GA4 network requests and decodes the measurement protocol parameters into human-readable event names and properties. You can see events like "purchase", "add_to_cart", or "page_view" firing in real time — with all parameters — without needing GA4 DebugView or the GA4 Chrome extension.',
  },
  {
    question: 'Can I debug GA4 events on Single Page Applications (SPAs)?',
    answer: 'Yes. Zen Analytics listens to History API changes and network requests, so virtual pageviews and dynamic events in React, Next.js, Vue, and Angular SPAs are captured accurately without requiring a page reload.',
  },
  {
    question: 'Does Zen Analytics support Google Consent Mode v2 for GA4?',
    answer: 'Yes. Zen Analytics includes a Google Consent Mode Inspector that reads gcs and gcd signals sent to Google services, so you can verify the consent state (analytics_storage, ad_storage) for each GA4 request and ensure GDPR/DMA compliance.',
  },
  {
    question: 'Is it better than GA4 DebugView?',
    answer: 'For local debugging, yes. GA4 DebugView requires sending events to the GA4 property and waiting for them to appear — with up to a 30-second delay. Zen Analytics shows events instantly in the browser, with full parameter details, alongside all other trackers (Meta Pixel, GTM, TikTok) simultaneously.',
  },
  {
    question: 'Does it affect GA4 data collection or inflate my analytics?',
    answer: 'No. Zen Analytics passively monitors network traffic. It does not modify or block GA4 requests, and it does not inject events into your data stream. Your GA4 property receives exactly the same data as if the extension were not installed.',
  },
];

export default function GA4DebuggerPage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "GA4 Debugger", item: "/ga4-debugger" }
          ]))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": ga4FaqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": { "@type": "Answer", "text": item.answer },
            })),
          }),
        }}
      />
      <Header />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero */}
        <Box sx={{ bgcolor: 'background.paper', pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 8 }, mt: 5 }}>
          <Container maxWidth="md" sx={{ textAlign: 'center' }}>
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.2 }}
            >
              GA4 Debugger Chrome Extension
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mt: 2, mb: 4, lineHeight: 1.7 }}>
              Debug <strong>Google Analytics 4</strong> events and measurement protocol parameters in real time —
              with <strong>Google Consent Mode v2</strong> inspection built in. No DebugView delays.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                href={EXTENSION_URLS.CHROME}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ px: 4, py: 1.5, fontWeight: 600, borderRadius: '28px', backgroundColor: '#F37022' }}
              >
                Install Free on Chrome
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/#features"
                sx={{ px: 4, py: 1.5, fontWeight: 600, borderRadius: '28px' }}
              >
                See All Features
              </Button>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              ★★★★★ 5.0 · 500+ installs · Free during beta
            </Typography>
          </Container>
        </Box>

        {/* What it does */}
        <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'grey.50' }}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h4" fontWeight={700} gutterBottom>
              What Zen Analytics Does for GA4 Debugging
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              Google Analytics 4 uses the measurement protocol — a compact, encoded format that is hard
              to read in the browser Network tab. Zen Analytics decodes every GA4 request instantly,
              showing you exactly what events and parameters are being sent.
            </Typography>
            <Box component="ul" sx={{ pl: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                'Real-time GA4 event capture — see events fire instantly as users interact with the page',
                'Measurement protocol decoder — human-readable event names, parameters, and values',
                'User property inspection — view user_id, client_id, session_id, and custom dimensions',
                'Google Consent Mode v2 Inspector — verify gcs/gcd consent signals per request',
                'Enhanced Ecommerce support — inspect purchase, add_to_cart, view_item, begin_checkout events',
                'SPA support — captures virtual pageviews in React, Next.js, Vue, Angular without reload',
                'Side-by-side with GTM, Meta, TikTok — debug your full stack at once',
                'Keyboard shortcut: CTRL + Shift + Space to open popup instantly',
              ].map((feat) => (
                <Box key={feat} component="li" sx={{ color: 'text.secondary' }}>
                  <Typography variant="body1">{feat}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Comparison */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h4" fontWeight={700} gutterBottom>
              Zen Analytics vs GA4 DebugView
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mt: 3 }}>
              {[
                {
                  title: 'Instant — No 30s Delay',
                  desc: 'GA4 DebugView can take up to 30 seconds to show events. Zen Analytics shows them in under 1 second, in the browser.',
                },
                {
                  title: 'Full Parameter Details',
                  desc: 'See every event parameter decoded — including custom dimensions and ecommerce items — without leaving the browser.',
                },
                {
                  title: 'Consent Mode Visibility',
                  desc: 'Inspect gcs and gcd consent signals on every GA4 request to verify GDPR/DMA compliance inline.',
                },
                {
                  title: 'No GA4 Property Access Needed',
                  desc: 'Debug GA4 on any website — even ones you don\'t own — without needing Google Analytics account access.',
                },
              ].map((item) => (
                <Box key={item.title} sx={{ p: 3, border: 1, borderColor: 'divider', borderRadius: 2 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        <Divider />

        {/* FAQ */}
        <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h4" fontWeight={700} gutterBottom sx={{ mb: 4 }}>
              GA4 Debugger — Frequently Asked Questions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {ga4FaqItems.map((item) => (
                <Box key={item.question}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>{item.question}</Typography>
                  <Typography variant="body1" color="text.secondary">{item.answer}</Typography>
                  <Divider sx={{ mt: 3 }} />
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* CTA */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'primary.main', textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h4" fontWeight={700} color="primary.contrastText" gutterBottom>
              Debug GA4 for Free — Right in Your Browser
            </Typography>
            <Typography variant="h6" color="primary.contrastText" sx={{ opacity: 0.9, mb: 4 }}>
              Install Zen Analytics and get instant GA4 event inspection, Consent Mode visibility, and 25+ other trackers in one extension.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href={EXTENSION_URLS.CHROME}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 5, py: 1.5, fontWeight: 700, borderRadius: '28px',
                bgcolor: 'white', color: 'primary.main',
                '&:hover': { bgcolor: 'grey.100' },
              }}
            >
              Add to Chrome — It&apos;s Free
            </Button>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
