import { describe, it, expect } from 'vitest';
import sitemap from '../sitemap';

describe('Sitemap', () => {
  it('should generate a valid sitemap array', () => {
    const result = sitemap();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it('should include the homepage with highest priority', () => {
    const result = sitemap();
    const homepage = result.find(item => item.url === 'https://zenanalytics.online');
    expect(homepage).toBeDefined();
    expect(homepage?.priority).toBe(1);
  });

  it('should include key static routes', () => {
    const result = sitemap();
    const urls = result.map(item => item.url);
    expect(urls).toContain('https://zenanalytics.online/about');
    expect(urls).toContain('https://zenanalytics.online/ga4-debugger');
    expect(urls).toContain('https://zenanalytics.online/gtm-debugger');
  });
});
