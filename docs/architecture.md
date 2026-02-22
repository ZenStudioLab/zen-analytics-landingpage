# Zen Analytics Landingpage Architecture

## Purpose
This document describes the architectural design of the Zen Analytics Landing Page, focusing on component interactions, design patterns, and architectural decisions.

## System Overview
Zen Analytics is a browser extension built with WXT that analyzes web analytics data across 25+ networks. This project is its landing page.

## Shared Packages
The project utilizes shared internal packages to ensure consistency and enable code reuse across the monorepo:
- **`@zen-analytics/constants`**: Shared runtime constants and enums (e.g., `AnalyticsNetwork`, `StorageKey`).
- **`@zen-analytics/types`**: Shared TypeScript interfaces and type definitions (e.g., `OptionState`, `PixelState`).
- **`@zen-analytics/ui`**: Shared UI components and theme configurations.

## Core Components

### Landing Page Components
1. **Header/Navbar** - Contains the logo, navigation links, and CTA button
2. **Hero Section** - Main banner with headline, subheadline, and primary CTA
3. **Features Section** - Highlights the key benefits of the extension with cards/icons
4. **Browser Compatibility** - Shows the extension working across major browsers
5. **Comparison Section** - Demonstrates the value proposition with before/after scenarios
6. **FAQ Section** - Answers common questions about the extension
7. **Footer** - Contains secondary links, copyright, and additional information

### UI Components
- **Card** - Reusable component for features and comparisons
- **Button** - Styled buttons for calls-to-action
- **Icon** - Visual indicators for features and benefits
- **Collapsible** - For FAQ accordion functionality
- **BrowserIcon** - Visual indicators for browser compatibility

## Technical Architecture
- **Next.js App Router** — Server-side rendering with colocation of layouts and pages.
- **Material UI (MUI)** — Base component library, overridden by a custom **Ethereal Technical** theme (`src/theme.ts`): Obsidian backgrounds, Neon Green accents, Space Grotesk / Space Mono typography.
- **React Hooks** — For state management within components
- **JSON-LD Schemas** — Page-specific structured data (FAQPage, SoftwareApplication) for SEO; injected per-page rather than globally to prevent duplicate schema errors.
- **Responsive Design** — For mobile-friendly layout

## Decision History
Significant technical decisions are documented as Architecture Decision Records (ADRs) to capture context and rationale.

See the [Landing Page ADR Index](adr/README.md) for the full list of decisions.

- [ADR-0001: "Ethereal Technical" Design Aesthetic](adr/0001-ui-aesthetic-standard.md)
- [ADR-0002: Consolidated SEO FAQ Schema Placement](adr/0002-seo-faq-placement.md)

## Directory Structure
```
├── packages/                  # Shared internal packages
│   ├── constants/             # Shared constants and enums
│   ├── types/                 # Shared TypeScript definitions
│   └── ui/                    # Shared UI components
├── landing-page/              # Next.js landing page (this project)
│   ├── src/                   # Source code
│   │   ├── app/                       # Next.js app directory
│   │   │   ├── page.tsx               # Main landing page
│   │   │   ├── layout.tsx             # Root layout component
│   │   │   └── about/                 # About page 
│   │   ├── components/                # Reusable UI components
│   │   │   ├── layout/                # Layout components 
│   │   │   │   ├── Header.tsx         # Site header with navigation
│   │   │   │   └── Footer.tsx         # Site footer
│   │   │   ├── sections/              # Major page sections
│   │   │   │   ├── Hero.tsx           # Hero banner section
│   │   │   │   ├── Features.tsx       # Features highlight section
│   │   │   │   ├── BrowserSupport.tsx # Browser compatibility section
│   │   │   │   ├── Comparison.tsx     # Before/after comparison section
│   │   │   │   └── FAQ.tsx            # Frequently asked questions section
│   │   │   └── ui/                    # Atomic UI components
│   │   │       ├── Card.tsx           # Card component for features
│   │   │       ├── Button.tsx         # CTA buttons
│   │   │       └── Collapsible.tsx    # Collapsible component for FAQ
│   │   ├── theme/                     # Theme configuration
│   │   └── utils/                     # Utility functions
│   └── docs/                  # Project documentation
├── extension/                 # WXT browser extension project
│   ├── src/                   # Source code
│   └── docs/                  # Project documentation
└── package.json               # Monorepo configuration
```
