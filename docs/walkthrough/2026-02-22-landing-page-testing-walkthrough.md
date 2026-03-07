# Walkthrough: Landing Page Testing Infrastructure & Suite

**Date:** 2026-02-22
**Status:** Completed
**Scope:** `landing-page` workspace

This document provides a comprehensive walkthrough of the testing infrastructure and test suites established for the Zen Analytics landing page, following the monorepo tiered testing strategy.

---

## 1. Infrastructure Bootstrap (Phase 0)

The first step was establishing the runners and environment for the Next.js application.

- **Vitest Configuration**: Created `landing-page/vitest.config.ts` using `jsdom` and `tsconfig-paths` to support absolute imports (`@/*`).
- **Playwright Configuration**: Created `landing-page/playwright.config.ts`.
    - Configured `webServer` to run `yarn build && yarn start` for E2E tests to ensure production-parity.
    - Added `Mobile Chrome` (Pixel 5) project to ensure mobile coverage alongside Desktop Chromium.
- **Mock Consolidation**: Moved and unified all Vitest mocks into `landing-page/src/test/setup.ts`.
    - Added mocks for `next/navigation` (Router, Pathname, SearchParams).
    - Added mocks for `next/font/google` to resolve `Plus_Jakarta_Sans` initialization errors during tests.
    - Mocked `window.matchMedia` for MUI component compatibility.

---

## 2. Unit Testing Suite (Phase 1)

Focused on critical business logic and SEO utilities that drive the "GEO" (Generative Engine Optimization) strategy.

- **SEO Schemas (`src/utils/__tests__/schemas.test.ts`)**: 
    - Verified `SoftwareApplication`, `FAQPage`, `Organization`, and `Person` JSON-LD structures.
    - Validated dynamic `BreadcrumbList` generation logic.
- **FAQ Items (`src/utils/__tests__/faq-items.test.ts`)**: 
    - Ensured all FAQ items have required content and cover essential categories (GA4, GTM, Privacy).
- **Sitemap (`src/app/__tests__/sitemap.test.ts`)**: 
    - Verified that the dynamic sitemap generation correctly prioritizes the homepage and includes all key routes.

---

## 3. Component Testing Suite (Phase 2)

Integrated React Testing Library (RTL) with Vitest to verify core UI components.

- **Header Component (`src/components/layout/__tests__/Header.test.tsx`)**:
    - Verified logo rendering and navigation link presence.
    - Verified the presence of the "Get Extension" CTA.
- **Hero Component (`src/components/sections/__tests__/Hero.test.tsx`)**:
    - Verified the primary H1 title and "Install Now" CTA button.
    - Verified social proof elements (Chrome Web Store ratings and testimonials).
    - Mocked `next/dynamic` for the `VideoPlayer` to ensure fast, isolated tests.

---

## 4. E2E Testing Suite (Phases 3 & 4)

Established real-browser validation using Playwright, following strict SEO and UX mandates.

- **SEO & Schema (`tests/e2e/seo.spec.ts`)**:
    - **TC-SEO-01**: Verified Meta Title, Description, and Canonical URL presence.
    - **TC-SEO-02**: Verified that all four JSON-LD schemas are correctly injected into the DOM and contain valid data.
    - **Bug Fix**: Identified and resolved a duplicate `link[rel="canonical"]` issue by removing manual tags and consolidating into Next.js `metadata`.
- **UX & Navigation (`tests/e2e/ux.spec.ts`)**:
    - **TC-NAV-01 (Desktop)**: Verified visibility and href attributes of all header navigation links and the primary install button.
    - **TC-NAV-02 (Mobile)**: Verified the mobile burger menu functionality—toggling visibility and ensuring items like "Features" and "FAQ" are accessible within the MUI Menu.

---

## 5. Summary of Verified Targets

| Target | Test Type | Status |
|---|---|---|
| SEO Schemas (JSON-LD) | Unit + E2E | ✅ Passed |
| Sitemap Generation | Unit | ✅ Passed |
| Header Navigation | Component + E2E | ✅ Passed |
| Mobile Menu (UX) | E2E | ✅ Passed |
| Hero Section (CTA) | Component | ✅ Passed |
| Metadata Consistency | E2E | ✅ Passed |

---

## How to Run Tests

From the monorepo root:

```bash
# Run all unit tests
yarn workspace landing-page test

# Run E2E tests (Chromium + Mobile Chrome)
yarn workspace landing-page test:e2e
```
