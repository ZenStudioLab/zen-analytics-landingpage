# Landing Page Testing Infrastructure Setup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Establish a complete testing infrastructure (Vitest for Unit/Integration, Playwright for E2E) for the Next.js `landing-page` workspace.

**Architecture:** Use Vitest with `jsdom` for fast component/logic testing and Playwright for real browser SEO and interaction verification.

**Tech Stack:** Vitest, Playwright, React Testing Library, Next.js.

---

### Task 1: Phase 0 — Infrastructure Bootstrap

**Files:**
- Modify: `landing-page/package.json`
- Create: `landing-page/vitest.config.ts`
- Create: `landing-page/playwright.config.ts`

**Step 1: Install dev dependencies in the `landing-page` workspace**

Run: `yarn workspace landing-page add -D vitest @vitejs/plugin-react @testing-library/react @testing-library/dom @testing-library/jest-dom jsdom @playwright/test`

**Step 2: Create Vitest Configuration**

Create: `landing-page/vitest.config.ts`
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
});
```

**Step 3: Create Playwright Configuration**

Create: `landing-page/playwright.config.ts`
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
  ],
  webServer: {
    command: 'yarn build && yarn start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

**Step 4: Update package.json scripts**

Update: `landing-page/package.json`
```json
"scripts": {
  "test": "vitest",
  "test:coverage": "vitest run --coverage",
  "test:e2e": "playwright test"
}
```

**Step 5: Create a dummy test to verify setup**

Create: `landing-page/src/utils/dummy.test.ts`
```typescript
import { expect, test } from 'vitest';

test('setup is working', () => {
  expect(1 + 1).toBe(2);
});
```

**Step 6: Run Vitest to verify**

Run: `yarn workspace landing-page test run`
Expected: 1 PASS

**Step 7: Commit**

```bash
git add landing-page/package.json landing-page/vitest.config.ts landing-page/playwright.config.ts landing-page/src/utils/dummy.test.ts
git commit -m "feat(landing-page): scaffold vitest and playwright infrastructure"
```

---

### Task 2: Phase 1 — Implement SEO Unit Tests

**Files:**
- Create: `landing-page/src/utils/__tests__/schemas.test.ts`
- Modify: `landing-page/src/utils/schemas.ts` (if needed for fixes)

**Step 1: Write a unit test for `generateSchema` (or equivalent in `schemas.ts`)**

```typescript
import { generateSchema } from '../schemas';

describe('SEO Schemas', () => {
  it('should generate valid SoftwareApplication JSON-LD', () => {
    const schema = generateSchema();
    expect(schema['@type']).toBe('SoftwareApplication');
    expect(schema.name).toBe('Zen Analytics Pixel Tracker');
  });
});
```

**Step 2: Run test to verify it fails (or passes if already correct)**

Run: `yarn workspace landing-page test run`

**Step 3: Fix implementation to meet test requirements**

**Step 4: Commit**

```bash
git add landing-page/src/utils/__tests__/schemas.test.ts
git commit -m "test(landing-page): add unit tests for SEO schemas"
```

---

### Task 3: Consolidate Documentation

**Files:**
- Create: `docs/test-strategy.md`
- Delete: `docs/test-extension.md`
- Delete: `docs/test-landing-page.md`

**Step 1: Merge content into `docs/test-strategy.md`**

**Step 2: Delete old files**

**Step 3: Commit**

```bash
git add docs/test-strategy.md
git rm docs/test-extension.md docs/test-landing-page.md
git commit -m "docs: consolidate monorepo testing strategy into a single document"
```

---

### Task 4: Identify Component TestIDs

**Files:**
- Modify: `landing-page/src/components/layout/Header.tsx`
- Modify: `landing-page/src/components/sections/Hero.tsx`
- Modify: `landing-page/src/components/sections/FAQ.tsx`

**Step 1: Add `data-testid` to key interactive elements**

- Header: `nav-logo`, `nav-link-features`, `nav-link-docs`, `nav-button-install`
- Hero: `hero-title`, `hero-cta-button`
- FAQ: `faq-section`, `faq-item-*`

**Step 2: Commit**

```bash
git add landing-page/src/components/
git commit -m "feat(landing-page): add data-testid attributes to key components for E2E testing"
```
