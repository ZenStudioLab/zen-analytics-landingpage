# Mixpanel Server-Side Tracking (Testing Guide)

This project is currently running **Dual-Tracking** for verification purposes. Every user action triggers two independent events to ensure data consistency between client and server.

## 1. How to Verify

### Network Tab
1. Open the Browser DevTools (F12).
2. Go to the **Network** tab and filter by `track` or `page_view`.
3. You should see two distinct requests:
   - **Request 1:** Destination `api-js.mixpanel.com/...` (Client-side directly).
   - **Request 2:** Destination `localhost:3000/api/analytics/track` (Our Server-side proxy).

### Mixpanel Dashboard
Login to your Mixpanel project and look for these event names:
- `page_view`: The standard client-side event.
- `ss_page_view`: The duplicate server-side event.

## 2. Interpreting the Data

| Property | Client-Side (`page_view`) | Server-Side (`ss_page_view`) |
| :--- | :--- | :--- |
| **IP Address** | Managed by browser. | Passed via `$ip` header in proxy. |
| **Source** | Direct from JS SDK. | Marked as `server_side_proxy`. |
| **Reliability** | May be blocked by ad-blockers. | Should bypass 99% of ad-blockers. |

## 3. Server-Side Errors
We have also added a route at `/api/analytics/error`. This is used to log backend issues like:
- Database connection failures.
- API timeouts.
- 404/500 responses from the Next.js server.

These will appear in Mixpanel as `ss_server_error`.

## 4. Transitioning to Full Server-Side
Once you are confident that `ss_page_view` matches the volume of `page_view`, we can disable the direct client-side call and move all tracking to the "Concierge" proxy.
