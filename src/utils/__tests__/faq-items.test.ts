import { describe, it, expect } from 'vitest';
import { faqItems } from '../faq-items';

describe('FAQ Items', () => {
  it('should be an array of FAQ items', () => {
    expect(Array.isArray(faqItems)).toBe(true);
    expect(faqItems.length).toBeGreaterThan(0);
  });

  it('should have question and answer for each item', () => {
    faqItems.forEach(item => {
      expect(item).toHaveProperty('question');
      expect(item).toHaveProperty('answer');
      expect(typeof item.question).toBe('string');
      expect(typeof item.answer).toBe('string');
      expect(item.question.length).toBeGreaterThan(0);
      expect(item.answer.length).toBeGreaterThan(0);
    });
  });

  it('should cover essential categories (GA4, GTM, Privacy, etc.)', () => {
    const questions = faqItems.map(item => item.question.toLowerCase());
    
    const hasGA4 = questions.some(q => q.includes('ga4') || q.includes('google analytics 4'));
    const hasGTM = questions.some(q => q.includes('gtm') || q.includes('google tag manager'));
    const hasPrivacy = questions.some(q => q.includes('privacy') || q.includes('gdpr'));
    const hasInstallation = questions.some(q => q.includes('install'));

    expect(hasGA4).toBe(true);
    expect(hasGTM).toBe(true);
    expect(hasPrivacy).toBe(true);
    expect(hasInstallation).toBe(true);
  });
});
