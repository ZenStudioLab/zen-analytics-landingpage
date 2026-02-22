import { describe, it, expect } from 'vitest';
import { softwareApplicationSchema, faqSchema, organizationSchema } from '../schemas';

describe('SEO Schemas', () => {
  it('should have a valid SoftwareApplication schema', () => {
    expect(softwareApplicationSchema['@type']).toBe('SoftwareApplication');
    expect(softwareApplicationSchema.name).toBe('Zen Analytics');
    expect(softwareApplicationSchema.offers['@type']).toBe('Offer');
  });

  it('should have a valid FAQ schema', () => {
    expect(faqSchema['@type']).toBe('FAQPage');
    expect(Array.isArray(faqSchema.mainEntity)).toBe(true);
    if (faqSchema.mainEntity.length > 0) {
        expect(faqSchema.mainEntity[0]['@type']).toBe('Question');
    }
  });

  it('should have a valid Organization schema', () => {
    expect(organizationSchema['@type']).toBe('Organization');
    expect(organizationSchema.name).toBe('Zen Studio');
    expect(organizationSchema.url).toBe('https://zenanalytics.online');
  });
});
