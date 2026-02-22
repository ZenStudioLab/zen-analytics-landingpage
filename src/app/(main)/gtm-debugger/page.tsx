import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { EXTENSION_URLS } from '@zen-analytics/constants';

export const metadata: Metadata = {
  title: 'GTM Debugger Chrome Extension — Debug dataLayer & Google Tag Manager Events',
  description: 'Free Chrome extension to debug Google Tag Manager (GTM) events and dataLayer in real time. Inspect GTM containers, dataLayer pushes, and tag firing — alongside 25+ other platforms.',
  alternates: {
    canonical: 'https://zenanalytics.online/gtm-debugger',
  },
  openGraph: {
    title: 'GTM Debugger Chrome Extension — Zen Analytics',
    description: 'Debug Google Tag Manager dataLayer events in real time. Free Chrome extension — 5-star rated, 500+ installs.',
    url: 'https://zenanalytics.online/gtm-debugger',
    siteName: 'Zen Analytics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Debugger Chrome Extension — Zen Analytics',
    description: 'Debug Google Tag Manager events and dataLayer in real time. Free, 5-star rated Chrome extension.',
  },
};

const gtmFaqItems = [
  {
    question: 'How does Zen Analytics debug Google Tag Manager?',
    answer: 'Zen Analytics automatically intercepts GTM network requests and reads the dataLayer object in real time. It displays all GTM container IDs, tag firing events, variable values, and dataLayer push history — directly in the DevTools panel, SidePanel, or popup, without needing to open GTM Preview mode.',
  },
  {
    question: 'Can I inspect the dataLayer without GTM Preview mode?',
    answer: 'Yes. Zen Analytics captures dataLayer pushes directly from the browser runtime. You can see every dataLayer.push() call, its payload, and timestamp — without needing to enter GTM Preview / Debug mode or share a preview link.',
  },
  {
    question: 'Does it work with GTM server-side containers?',
    answer: 'Zen Analytics debugs client-side GTM implementations (web containers). For server-side GTM, it captures companion client-side pixel fires that reach the browser. Pure server-to-server calls are not visible since they never touch the browser.',
  },
  {
    question: 'Is Zen Analytics a replacement for Google Tag Assistant?',
    answer: 'Yes — and it goes further. While Google Tag Assistant only covers Google properties, Zen Analytics inspects GTM alongside 25+ other platforms (Meta Pixel, TikTok, LinkedIn, Microsoft Ads, Snapchat, and more) in a single unified interface.',
  },
  {
    question: 'Which browsers support the GTM debugger?',
    answer: 'The Zen Analytics GTM debugger extension works on Chrome, Microsoft Edge, Brave, and Vivaldi — any Chromium-based browser that supports Chrome Extension Manifest V3.',
  },
];

export default function GTMDebuggerPage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": gtmFaqItems.map(item => ({
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
              GTM Debugger Chrome Extension
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mt: 2, mb: 4, lineHeight: 1.7 }}>
              Debug <strong>Google Tag Manager events</strong> and <strong>dataLayer</strong> in real time —
              alongside Meta Pixel, GA4, TikTok, and 25+ other platforms. No GTM Preview mode required.
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
              What Zen Analytics Does for GTM Debugging
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
              Google Tag Manager is the backbone of most modern tag implementations — but debugging it
              requires juggling GTM Preview mode, the browser console, and platform-specific helpers.
              Zen Analytics replaces all of them with a single unified debugger.
            </Typography>
            <Box component="ul" sx={{ pl: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                'Dedicated dataLayer Inspector — see every dataLayer.push() call with payload and timestamp',
                'GTM Container ID detection — identifies all active GTM containers on the page',
                'Real-time tag firing — confirms which tags fire on each user interaction',
                'Variable value inspection — view the resolved values of GTM variables at any moment',
                'Structured Tag Assistant — organizes tracker attributes logically for easy scanning',
                'Works alongside 25+ other platforms — inspect GTM and Meta Pixel simultaneously',
                'Available in DevTools panel (F12), SidePanel, popup, and in-page overlay',
                'Session recording — capture the full browsing session and export findings',
              ].map((feat) => (
                <Box key={feat} component="li" sx={{ color: 'text.secondary' }}>
                  <Typography variant="body1">{feat}</Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Why better than GTM Preview */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h4" fontWeight={700} gutterBottom>
              Why Use Zen Analytics Instead of GTM Preview Mode?
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mt: 3 }}>
              {[
                {
                  title: 'No Preview Link Required',
                  desc: 'GTM Preview mode requires sharing a preview URL. Zen Analytics works on any live page instantly.',
                },
                {
                  title: 'Multi-Platform in One View',
                  desc: 'GTM Preview only shows GTM events. Zen Analytics shows GTM + Meta + GA4 + TikTok + 22 more — all at once.',
                },
                {
                  title: 'In-Page Live Overlay',
                  desc: 'See pixel and tag firing notifications directly on the page as you browse, without switching tabs.',
                },
                {
                  title: '50+ Themes & Custom UI',
                  desc: 'Comfortable debugging experience with Dracula, Monokai, GitHub, Nord, Solarized, and more.',
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
              GTM Debugger — Frequently Asked Questions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {gtmFaqItems.map((item) => (
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
              Start Debugging GTM for Free
            </Typography>
            <Typography variant="h6" color="primary.contrastText" sx={{ opacity: 0.9, mb: 4 }}>
              Install Zen Analytics and inspect GTM, dataLayer, and 25+ ad platforms — all in one extension.
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
