import { test, expect } from '@playwright/test';

/**
 * Test Perspective Table: Homepage SEO & Schema
 *
 * | Case ID | Input / Precondition | Perspective | Expected Result | Notes |
 * |---------|----------------------|-------------|-----------------|-------|
 * | TC-SEO-01 | Load Homepage        | SEO         | Meta tags present| Title, Description, Canonical |
 * | TC-SEO-02 | Load Homepage        | Schema      | JSON-LD valid   | SoftwareApplication, FAQPage |
 */

test.describe('Homepage SEO & Schema', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-SEO-01: verify basic SEO meta tags', async ({ page }) => {
    // Title
    await expect(page).toHaveTitle(/Zen Analytics — Debug GA4, GTM & 25\+ Ad Pixels in One Extension/i);

    // Description
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /Free browser extension to debug Google Analytics 4/i);

    // Canonical
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', 'https://zenanalytics.online');
  });

  test('TC-SEO-02: verify JSON-LD schemas are present and valid', async ({ page }) => {
    // Get all script tags with type="application/ld+json"
    const schemas = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
      return scripts.map(s => JSON.parse(s.innerHTML));
    });

    expect(schemas.length).toBeGreaterThan(0);

    const types = schemas.map(s => s['@type']);
    
    // Check for essential schemas
    expect(types).toContain('SoftwareApplication');
    expect(types).toContain('FAQPage');
    expect(types).toContain('Organization');
    expect(types).toContain('Person');

    // Verify SoftwareApplication specifics
    const softApp = schemas.find(s => s['@type'] === 'SoftwareApplication');
    expect(softApp.name).toBe('Zen Analytics');
    expect(softApp.applicationCategory).toBe('DeveloperApplication');

    // Verify FAQPage specifics
    const faqPage = schemas.find(s => s['@type'] === 'FAQPage');
    expect(faqPage.mainEntity.length).toBeGreaterThan(0);
  });
});
