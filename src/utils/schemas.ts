import { faqItems } from '@/utils/faq-items';

const CWS_URL = "https://chromewebstore.google.com/detail/zen-analytics-pixel-track/gknigcbhlammoakmmdddkblknanpjiac";
const SITE_URL = "https://zenanalytics.online";

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Zen Analytics",
  "alternateName": "Zen Analytics — Unified Analytics & Ad Tracker Inspector",
  "applicationCategory": "DeveloperApplication",
  "applicationSubCategory": "Browser Extension",
  "operatingSystem": "Chrome, Edge, Vivaldi",
  "description": "Simultaneously monitor, debug, and validate pixel tracking for Google Analytics 4, Google Tag Manager, Meta Ads, TikTok Ads, and 25+ other platforms — all in one browser extension. Supports DevTools panel, SidePanel, in-page live tracking, session recording, and Google Consent Mode inspection.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free during beta — all premium features included"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "ratingCount": "5",
    "reviewCount": "2"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jared S***" },
      "datePublished": "2025-09-26",
      "reviewBody": "Absolutely top tier! I've been looking for an extension like this for so long. I don't know how this doesn't have more users.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Pete L***" },
      "datePublished": "2025-05-08",
      "reviewBody": "Great tool if you manage GTM/GA4 implementations.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }
  ],
  "featureList": [
    "Unified debugger for 25+ analytics and ad platforms",
    "Google Tag Manager dataLayer Inspector",
    "Google Consent Mode Inspector",
    "In-Page Live Tracking",
    "Session Capture & Activity Recorder",
    "DevTools Panel, SidePanel, Popup, and In-Page views",
    "50+ syntax themes (Dracula, Monokai, GitHub, Nord, Solarized)",
    "Flexible filtering and grouping by platform, time, status",
    "CTRL + Shift + Space keyboard shortcut"
  ],
  "screenshot": [
    `${SITE_URL}/images/carousel/webp/1.webp`,
    `${SITE_URL}/images/carousel/webp/2.webp`,
    `${SITE_URL}/images/carousel/webp/3.webp`,
    `${SITE_URL}/images/carousel/webp/4.webp`,
    `${SITE_URL}/images/carousel/webp/5.webp`
  ],
  "fileSize": "2MB",
  "softwareVersion": "0.4.1",
  "author": {
    "@type": "Person",
    "name": "Toan Nguyen",
    "url": "https://www.upwork.com/freelancers/~01ab0d8d6efd33201c"
  },
  "creator": {
    "@type": "Organization",
    "name": "Zen Studio",
    "url": SITE_URL
  },
  "url": SITE_URL,
  "downloadUrl": CWS_URL,
  "installUrl": CWS_URL
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zen Studio",
  "url": SITE_URL,
  "sameAs": [
    "https://github.com/ZenStudioLab"
  ],
  "description": "Zen Studio is the development team behind Zen Analytics — a unified browser extension for debugging web analytics and ad tracking across 25+ platforms including Google Analytics 4, Google Tag Manager, Meta Pixel, and TikTok Pixel. Available for Chrome, Edge, Brave, and Vivaldi."
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Toan Nguyen",
  "jobTitle": "Software Developer",
  "url": "https://www.upwork.com/freelancers/~01ab0d8d6efd33201c",
  "sameAs": [
    "https://github.com/ZenStudioLab",
    "https://www.upwork.com/freelancers/~01ab0d8d6efd33201c",
    "https://web.facebook.com/canh.toan.nguyen.2101",
    "https://www.reddit.com/user/Prior-Switch-9099/"
  ]
};
