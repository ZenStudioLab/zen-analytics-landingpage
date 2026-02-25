# ADR-0003: Mixpanel Server-Side Tracking Proxy (Concierge) with Dual-Tracking

## Status

Accepted

## Context

We need to improve the reliability and security of our analytics tracking. Traditional client-side tracking is often blocked by ad-blockers and privacy-focused browsers, leading to data loss ("dark data"). Additionally, we want to ensure sensitive data can be scrubbed on our own infrastructure before being forwarded to third-party providers.

The landing page (`zap-pixel.web.app` / `zenanalytics.online`) serves as a test page for tracking verification.

## Decision Drivers

- **Data Accuracy**: Bypass client-side restrictions (ad-blockers, ITP).
- **Security**: Centralized scrubbing/enrichment of event data.
- **Verification**: Ability to compare client-side vs. server-side data in real-time.
- **Maintainability**: Unified backend logic for all tracking events.

## Decision

We will implement a **Server-Side Tracking Proxy ("Concierge")** using the following architecture:
1.  **Server SDK**: Integrate the `mixpanel` Node.js SDK in the Next.js backend.
2.  **API Proxy**: Create a `/api/analytics/track` route to receive events from the client and forward them to Mixpanel.
3.  **Dual-Tracking**: Configure the client-side `mixpanel-browser` to send events **directly** to Mixpanel *and* **duplicate** them via the proxy for a verification period.
4.  **Event Prefixing**: Server-side events will be prefixed with `ss_` (e.g., `ss_page_view`) to distinguish them from direct client events.
5.  **Error Tracking**: Implement a dedicated `/api/analytics/error` route to log server-side 404/500 errors to Mixpanel.

## Rationale

- **Next.js Full-Stack**: Leveraging the built-in backend of Next.js avoids the need for a separate tracking server.
- **Verification Strategy**: Dual-tracking allows us to benchmark the data quality gap. Since the landing page is a test site, we must **never disable client tracking** during this phase.
- **Proxy Pattern**: This "Concierge" approach allows us to add metadata (like real IP from headers) and eventually remove the client-side direct calls once the proxy is verified.

## Consequences

### Positive
- Increased visibility into events normally blocked by browser extensions.
- Better error logging for backend failures.
- Path towards a fully server-side, privacy-compliant tracking architecture.

### Negative
- Increased server-side load (minimal for current traffic).
- Duplicate event volume in Mixpanel (expected for testing).

## Related Decisions

- ADR-0002 (Root): Tiered Testing Strategy (includes TDD for new tracking routes).
