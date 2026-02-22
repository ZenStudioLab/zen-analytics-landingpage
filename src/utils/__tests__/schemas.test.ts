import { describe, it, expect } from 'vitest';
import { softwareApplicationSchema, faqSchema, organizationSchema, personSchema, getBreadcrumbSchema } from '../schemas';

describe('SEO Schemas', () => {
  it('should have a valid SoftwareApplication schema', () => {
    expect(softwareApplicationSchema['@type']).toBe('SoftwareApplication');
    expect(softwareApplicationSchema.name).toBe('Zen Analytics');
    expect(softwareApplicationSchema.offers['@type']).toBe('Offer');
    expect(softwareApplicationSchema.aggregateRating.ratingValue).toBe('5');
    expect(softwareApplicationSchema.review.length).toBeGreaterThan(0);
  });

  it('should have a valid FAQ schema', () => {
    expect(faqSchema['@type']).toBe('FAQPage');
    expect(Array.isArray(faqSchema.mainEntity)).toBe(true);
    expect(faqSchema.mainEntity.length).toBeGreaterThan(0);
    expect(faqSchema.mainEntity[0]['@type']).toBe('Question');
    expect(faqSchema.mainEntity[0].acceptedAnswer['@type']).toBe('Answer');
  });

  it('should have a valid Organization schema', () => {
    expect(organizationSchema['@type']).toBe('Organization');
    expect(organizationSchema.name).toBe('Zen Studio');
    expect(organizationSchema.url).toBe('https://zenanalytics.online');
  });

  it('should have a valid Person schema', () => {
    expect(personSchema['@type']).toBe('Person');
    expect(personSchema.name).toBe('Toan Nguyen');
    expect(Array.isArray(personSchema.sameAs)).toBe(true);
  });

  it('should generate a valid BreadcrumbList schema', () => {
    const items = [
      { name: 'Home', item: '/' },
      { name: 'About', item: '/about' }
    ];
    const breadcrumb = getBreadcrumbSchema(items);
    expect(breadcrumb['@type']).toBe('BreadcrumbList');
    expect(breadcrumb.itemListElement.length).toBe(2);
    expect(breadcrumb.itemListElement[0].name).toBe('Home');
    expect(breadcrumb.itemListElement[0].item).toBe('https://zenanalytics.online/');
    expect(breadcrumb.itemListElement[1].position).toBe(2);
  });
});
