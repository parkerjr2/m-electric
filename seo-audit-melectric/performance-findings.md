# Performance / Core Web Vitals Audit — m-electricllc.com
**Audit date:** 2026-04-30
**Auditor:** Inline (lab-only, no field data — no GSC/CrUX credentials available)

**Caveat:** Could not run PageSpeed Insights v5 (no Google API key) and Lighthouse not installed locally for this session. All metrics below are estimated from HTML structure and asset analysis. Field data (real-user CrUX) would require GSC access.

---

## Homepage payload analysis

**Source:** Cached Googlebot fetch, 117,456 bytes HTML.

| Resource type | Count | Notes |
|---|---|---|
| External `<script src>` | 7 | jQuery, GTM, theme JS, Trustindex widget |
| Inline `<script>` | 15 | High — likely WordPress `wp_head` action stack |
| Stylesheets | 6 | Theme CSS, plugin CSS, font CSS |
| `<iframe>` | 2 | Google Maps + reCAPTCHA likely |
| `<img>` | 10 | All have `alt` text ✅ |
| Lazy-loaded `<img>` | **1 / 10** | ⚠️ Only 1 of 10 images uses `loading="lazy"` |
| Third-party hosts | 3 | `cdn.trustindex.io`, `www.googletagmanager.com`, `www.google.com` |

**Text-to-HTML ratio: 4.0%** (4,702 characters of body text vs. 117 KB total). Indicates heavy templating, inline CSS, and JS payloads dominate the document. Target is 15–25%.

---

## Estimated CWV (lab) — homepage

These are *estimates* from HTML/asset analysis; treat as ±30% directional.

| Metric | Estimate | Status |
|---|---|---|
| **LCP** (Largest Contentful Paint, mobile 4G) | ~3.5–4.5s | Poor (target <2.5s) |
| **INP** (Interaction to Next Paint) | ~250–400ms | Needs Improvement (target <200ms) |
| **CLS** (Cumulative Layout Shift) | ~0.10–0.20 | Needs Improvement (target <0.1) |

**LCP driver:** Hero image is likely the LCP element. Without `fetchpriority="high"` on the hero `<img>` tag, and with 7 external scripts in the head, render-blocking is significant.

**INP risk:** 15 inline scripts + Trustindex widget + GTM container all run on first interaction. Heavy WordPress sites typically score INP >200ms on mid-tier mobile devices.

**CLS risk:** Trustindex widget injects content asynchronously; without reserved space (`min-height` declaration), expect a layout shift when the rating badge loads. Same risk for the floating phone-call icon visible in screenshots.

---

## Sample sub-page payload

| URL | HTTP | Size | Notes |
|---|---|---|---|
| `/service-areas/broken-arrow/` | 200 | 92 KB | Real content; large because of repeated theme assets |
| `/about/` | 404 | 46 KB | 404 template still loads full theme bundle (waste) |
| `/contactus/` | 404 | 46 KB | Same |
| `/residential-services/tulsa-ok/electrical-repair/` | 200 (sampled) | not measured | Programmatic page |

The 404 pages still ship the full ~46 KB theme bundle including the broken "Gym Website" footer. So users hitting any of the 24 dead URLs in the page-sitemap pay the full payload cost for a useless page.

---

## Top performance wins

1. **Add `loading="lazy"` to 9 of 10 homepage images** (currently only 1 is lazy). One-field-per-image fix in WordPress.
2. **Add `fetchpriority="high"` to the hero/LCP image** to force eager loading. Counter-intuitive but worth more than lazy-loading the rest combined.
3. **Defer / async non-critical JS.** GTM and Trustindex widget should both have `defer`. WordPress plugins like "Async JavaScript" or "Autoptimize" handle this in 2 minutes.
4. **Reserve dimensions for the Trustindex widget** to prevent CLS on load.
5. **Swap any oversized theme JPGs to WebP** — every modern WordPress optimization plugin (ShortPixel, Smush, Imagify) does this in a few clicks.
6. **Remove the dead 404 pages from the sitemap and add 301 redirects** — saves crawl-budget bandwidth on the dozens of bot requests per day to URLs that don't exist.

---

## Performance Score: **48 / 100**

**Rationale:** Lab-estimated CWV likely fail two of three thresholds (LCP, INP). 1/10 lazy-loaded images. Heavy script stack typical of un-optimized WordPress. 4% text-to-HTML ratio.

**Mitigating factors:** TLS is current, HTTP→HTTPS 301 is in place, theme is responsive, sitemap is small (no infinite pagination), no excessive third-party tracking pixels. The site isn't catastrophically slow — it's just unoptimized at the level a typical WordPress site is when no perf work has been done.

**Recommend:** Get real CrUX data via Google Search Console (free, no API needed for the GSC web UI) before investing in major optimization work. Then run a single PageSpeed Insights pass on homepage + one programmatic page to validate the fix priorities above.
