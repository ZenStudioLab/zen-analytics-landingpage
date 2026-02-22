# ADR-0002: Consolidated SEO FAQ Schema Placement

## Status

Accepted

## Context

Google Search Console reported "Duplicate field FAQPage" errors. This occurred because FAQ schema (JSON-LD) was being injected multiple times: once globally in the root layout and once on individual feature/landing pages.

## Decision Drivers

- **SEO Health**: Must resolve duplicate schema errors to maintain ranking.
- **Maintainability**: Centralized control of global schema vs. page-specific schema.
- **Performance**: Minimizing DOM payload for crawler efficiency.

## Decision

We decided to **remove global FAQ schema injection** from the root layout and instead **consolidate it on specific, high-intent landing pages** (e.g., product details, main landing page).

## Rationale

- FAQ schema is most relevant on pages specifically designed to answer user queries.
- Moving it from the root layout prevents redundant injection on administrative (about, privacy policy) and purely technical debugger pages.
- This ensures each page has a single, unique, and highly relevant `FAQPage` schema object.

## Consequences

### Positive
- Resolved Google Search Console validation errors.
- Better keyword-to-content alignment for rich snippets.

### Negative
- Minor manual effort to ensure new landing pages include the FAQ schema if needed.
