import { test, expect } from '@playwright/test';

/**
 * Test Perspective Table: Homepage UX & Navigation
 *
 * | Case ID | Input / Precondition | Perspective | Expected Result | Notes |
 * |---------|----------------------|-------------|-----------------|-------|
 * | TC-NAV-01 | Desktop View         | Navigation  | Header links visible | Features, FAQ, etc. |
 * | TC-NAV-02 | Mobile View          | Navigation  | Burger menu works | Toggle menu visibility |
 */

test.describe('Homepage UX & Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-NAV-01: verify desktop navigation links', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'This test is for desktop only');
    
    const logo = page.getByTestId('nav-logo');
    await expect(logo).toBeVisible();

    const featuresLink = page.getByTestId('nav-link-features');
    await expect(featuresLink).toBeVisible();
    await expect(featuresLink).toHaveAttribute('href', '/#features');

    const faqLink = page.getByTestId('nav-link-faq');
    await expect(faqLink).toBeVisible();
    await expect(faqLink).toHaveAttribute('href', '/#faq');

    const installBtn = page.getByTestId('nav-button-install');
    await expect(installBtn).toBeVisible();
    await expect(installBtn).toContainText('Get Extension');
  });

  test('TC-NAV-02: verify mobile menu toggle', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'This test is for mobile only');
    
    // Check if burger menu icon is visible
    const menuButton = page.locator('button[aria-controls="menu-appbar"]');
    await expect(menuButton).toBeVisible();

    // Click to open
    await menuButton.click();

    // Check if menu items are visible
    // MUI Menu usually renders at the root of the document
    const menu = page.locator('#menu-appbar');
    await expect(menu).toBeVisible();
    
    await expect(menu.getByText('Features', { exact: true })).toBeVisible();
    await expect(menu.getByText('FAQ', { exact: true })).toBeVisible();

    // Click backdrop to close (or click a link)
    await page.keyboard.press('Escape');
    await expect(menu).not.toBeVisible();
  });
});
