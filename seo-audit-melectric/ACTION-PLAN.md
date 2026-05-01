# Action Plan — m-electricllc.com

**Generated:** 2026-04-30
**Site:** https://m-electricllc.com
**Current SEO Health Score:** 34 / 100
**Target after Critical+High fixes:** 65–72 / 100 (estimated)

Items are prioritized by `(impact × revenue exposure) / effort`. "Effort" assumes a WordPress admin user with Yoast and basic plugin access; some items need a developer or hosting-level access.

---

## CRITICAL — fix immediately (this week)

These actively damage SEO right now and harm real-user conversion. None take more than 30–60 minutes.

### C1. Restore the editorial pages or 301-redirect them

**Status:** 24 of 34 URLs in `page-sitemap.xml` return real 404s. Includes /about/, /contactus/, /job-gallery/, /emergency-services-tulsa/, all `/residential-services-tulsa/*`, `/commercial-services-tulsa/*`, `/specialized-services-tulsa/*`, `/service-areas/`, /service-areas/glenpool/, /service-areas/sapulpa/.

**Action (pick one path per URL):**
- **Path A:** Republish the page with current content (highest value for /about/, /contactus/, /job-gallery/).
- **Path B:** Add a 301 redirect to the closest equivalent in the new structure. Use a plugin like "Redirection" (free, by John Godley) — bulk-import all 24 mappings from a CSV.

Suggested mappings:

| Old URL | New target |
|---|---|
| `/about/` | rebuild — needed for E-E-A-T |
| `/contactus/` | rebuild — required trust page |
| `/job-gallery/` | rebuild — Experience signal |
| `/emergency-services-tulsa/` | new emergency landing page or homepage anchor |
| `/residential-services-tulsa/` | 301 → `/residential-services/` |
| `/residential-services-tulsa/panel-upgrades-tulsa/` | 301 → `/residential-services/tulsa-ok/electrical-panel-upgrades/` |
| `/residential-services-tulsa/electrical-repairs-tulsa/` | 301 → `/residential-services/tulsa-ok/electrical-repair/` |
| `/residential-services-tulsa/lighting-indoor-tulsa-2/` | 301 → `/residential-services/tulsa-ok/indoor-lighting-installation/` |
| `/residential-services-tulsa/lighting-outdoor-tulsa/` | 301 → `/residential-services/tulsa-ok/outdoor-lighting-services/` |
| `/residential-services-tulsa/outlet-installation-tulsa/` | 301 → `/residential-services/tulsa-ok/outlet-installation-repair/` |
| `/residential-services-tulsa/ceiling-fan-installation-tulsa/` | 301 → `/residential-services/tulsa-ok/ceiling-fan-installation/` |
| `/residential-services-tulsa/surge-protection-tulsa/` | 301 → `/residential-services/tulsa-ok/whole-home-surge-protection/` |
| `/residential-services-tulsa/home-rewiring-tulsa/` | 301 → `/residential-services/tulsa-ok/home-rewiring/` |
| `/residential-services-tulsa/electrical-rewiring/` | 301 → `/residential-services/tulsa-ok/home-rewiring/` |
| `/commercial-services-tulsa/` | 301 → `/commercial-services/` |
| `/commercial-services-tulsa/lighting-tulsa/` | 301 → `/commercial-services/tulsa-ok/commercial-lighting-solutions/` |
| `/commercial-services-tulsa/wiring-tulsa/` | 301 → `/commercial-services/tulsa-ok/commercial-electrical-wiring/` |
| `/specialized-services-tulsa/` | 301 → new specialty services hub |
| `/specialized-services-tulsa/ev-charging-tulsa/` | 301 → `/residential-services/tulsa-ok/ev-charger-installation/` |
| `/specialized-services-tulsa/generators-tulsa/` | 301 → `/residential-services/tulsa-ok/generator-installation/` |
| `/specialized-services-tulsa/smart-home-tulsa/` | 301 → `/residential-services/tulsa-ok/smart-home-wiring-services/` |
| `/service-areas/` | rebuild — index page linking to all 9 working city pages |
| `/service-areas/glenpool/` | rebuild OR 301 → `/residential-services/glenpool-ok/` |
| `/service-areas/sapulpa/` | rebuild OR 301 → `/residential-services/sapulpa-ok/` |

**Effort:** ~3 hours total (rebuild 4 pages with original copy reproduced; 20 redirect rules in plugin).

### C2. Replace the broken 404 template

**Status:** WordPress 404 template renders "Gym Website / Join our tribe / TRY FREE FOR 3 DAYS / © 2020 Fitness & Gym Website" — placeholder content from theme installation.

**Action:** In the active theme, edit `404.php` (or the corresponding Elementor / theme builder template). Replace with M Electric branding and helpful navigation (link to homepage, services, contact, sitemap). This will mostly stop being seen once C1's redirects are in place — but it should still be fixed.

**Effort:** 15 minutes if the theme exposes the 404 template in the theme builder; 1 hour if it requires PHP file edit.

### C3. Update homepage navigation menu to live URLs

**Status:** Header menu has 13 links; 11 of them go to 404 pages. Even after redirects (C1) are added, the nav should point directly at live URLs to avoid 301 hops.

**Action:** WordPress admin → Appearance → Menus → update each link's URL. Replace `/residential-services-tulsa/...` with `/residential-services/...`, etc.

**Effort:** 20 minutes.

### C4. Replace Organization schema with Electrician schema

**Status:** Yoast emits `Organization` (wrong type for a local SAB). Missing NAP, `areaServed`, hours, services.

**Action:** Install **WPCode** plugin → add a new site-wide JSON-LD snippet → paste the `Electrician` schema from `schema-findings.md` Section 5A. Keep Yoast running but add this snippet that references the same `@id`s for entity unification.

**Effort:** 30 minutes including testing in Google Rich Results Test.

### C5. Unblock GPTBot, ClaudeBot, CCBot

**Status:** All three return TCP 000 (connection refused). This is at the host/WAF level, not robots.txt.

**Action:** Identify the block source — likely Cloudflare's "AI Bots" protection rule, a `.htaccess` rule, or a security plugin (Wordfence, iThemes Security). Toggle off the AI-blocking ruleset. If Cloudflare WAF, in the Cloudflare dashboard: Security → WAF → Custom Rules → disable "Block AI Scrapers" or equivalent. Note: this is a values judgment — some businesses prefer to block training crawlers to protect content. For an electrician business that wants AI assistants to recommend them, the answer is unblock.

**Effort:** 10 minutes if you have admin access to whatever's blocking; 1 hour if you need to figure out which layer is doing it.

### C6. Create /robots.txt

**Action:** Create `robots.txt` at WordPress root with:

```txt
User-agent: *
Allow: /
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

# AI crawlers — explicit allow for both training and live retrieval
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: https://m-electricllc.com/sitemap_index.xml
```

Yoast can manage this — Yoast → Tools → File editor → robots.txt.

**Effort:** 5 minutes.

### C7. Fix sitemap http→https declarations

**Status:** Sitemap index declares child sitemaps with `http://` URLs. Same for image declarations.

**Action:** WordPress admin → Settings → General → change `WordPress Address (URL)` and `Site Address (URL)` from `http://m-electricllc.com` to `https://m-electricllc.com`. Yoast regenerates the sitemap on next request. Verify by re-fetching `/sitemap_index.xml`.

**Effort:** 1 minute admin change + 5 minutes verification.

---

## HIGH — fix this month

### H1. Add trust badges above the fold

"Veteran-Owned" + "Licensed" + "Bonded" + "Insured" + "Since 1999" + "★★★★★ Trustindex". This is the single highest-leverage UX change for both conversion and SXO.

**Effort:** 1 hour for design + WordPress block edit.

### H2. Add FAQPage schema to homepage

10 questions, JSON-LD format. Suggested:
- Are you available 24/7?
- Do you offer free estimates?
- Are you licensed and insured?
- What does an electrical panel upgrade cost in Tulsa?
- How long does an EV charger installation take?
- Do you serve Broken Arrow / Owasso / Bixby?
- What payment methods do you accept?
- Do you provide a workmanship warranty?
- Are you a veteran-owned business?
- How do I schedule emergency service?

**Effort:** 2 hours including writing answers.

### H3. Embed Google Map of service area on homepage

Embed `g.page/m-electric-llc?share` map with the metro service radius highlighted. Major LocalBusiness signal.

**Effort:** 30 minutes.

### H4. Surface license # site-wide

Add Oklahoma electrical contractor license # to header (or footer) on every page. Trust + local-pack signal.

**Effort:** 10 minutes (WordPress widget).

### H5. Claim "Veteran-Owned" attribute on Google Business Profile

Free GBP attribute — adds a badge to your local-pack listing.

**Effort:** 5 minutes.

### H6. Bring Trustindex review widget above the fold

Currently rendered below the fold. Move it into the hero area.

**Effort:** 30 minutes.

### H7. Add primary CTA button alongside phone link

"Request Free Estimate" button (linking to a real `/contactus/` form once C1 is done) next to the phone number in the header. Doubles the CTA surface.

**Effort:** 1 hour.

### H8. Lazy-load the other 9 of 10 homepage images

Add `loading="lazy"` to non-LCP images. Add `fetchpriority="high"` to the hero/LCP image.

**Effort:** 30 minutes.

### H9. Add `Service` schema to each programmatic city × service page

The schema-findings.md has the JSON-LD template (Section 5B). Apply via Yoast custom blocks or WPCode for the 355 programmatic pages.

**Effort:** 4 hours including testing on a sample.

### H10. Publish /llms.txt

Use the template in `geo-findings.md`. Upload to site root.

**Effort:** 15 minutes.

---

## MEDIUM — fix this quarter

### M1. Audit small-town programmatic pages for content uniqueness

For 5–10 small-population cities (Verdigris, Lotsee, Liberty, Justice, Kiefer, Leonard, Sperry, Gregory, Mounds), verify each variant has unique content. If they're city-swap templates, consider noindexing or consolidating.

### M2. Add HSTS, X-Frame-Options, X-Content-Type-Options security headers

In nginx config or via WordPress security plugin (Wordfence, Really Simple SSL).

### M3. Fix the WordPress slug `-2` collisions

5 `-2` URLs flagged in sitemap-findings.md. Delete the duplicates, update internal links.

### M4. Build genuine review velocity

Solicit 2–3 Google Business Profile reviews per month. Existing 4.5+ Trustindex score is good but volume matters in local-pack ranking.

### M5. Citation hygiene pass

Top 11 citations from local-findings.md. Allocate 10 hours to claim/optimize each. Highest leverage: SBA VetCert (veteran-owned), Tulsa Chamber of Commerce, Angi, NextDoor Business, Houzz Pro.

### M6. Add a homepage hero photo of the actual team

Replace the stock-feeling current hero with a real M Electric team / van / job-site photo. E-E-A-T (Experience) signal.

### M7. Add bylined author content

"From John Doe, Master Electrician, OK License #XXXX" on the About page when restored. Strong E-E-A-T signal for AI citation and Google's QRG.

### M8. Run real PageSpeed Insights + GSC audit

Verify lab CWV estimates with field data. Open free Search Console → set up the property → review URL Inspection on the broken pages → start the indexation cleanup.

---

## LOW — backlog

### L1. Twitter Card metadata expansion

Add `twitter:title`, `twitter:description`, `twitter:image` (currently only `twitter:card` is set).

### L2. Improve text-to-HTML ratio

Currently 4%. Trim inline scripts/styles where possible. Side-effect of a perf optimization pass.

### L3. Add internal linking from homepage to top programmatic pages

Currently the homepage links to a few service pages but most internal links go nowhere useful (the dead /residential-services-tulsa/* paths). Once redirects are in place this self-corrects, but consider hand-curating a "Popular Services" block.

### L4. Build 1–2 long-form pillar pages

E.g. "Complete Guide to Electrical Panel Upgrades in Tulsa" — 1,500+ words, original photography, embedded FAQ. Anchors the cluster of city × panel-upgrade variants.

---

## Estimated impact

| Fix tier | Items | Estimated effort | SEO score lift |
|---|---|---|---|
| Critical (C1–C7) | 7 items | 6–10 hours total | +20 to +28 points |
| High (H1–H10) | 10 items | 12–15 hours total | +8 to +12 points |
| Medium (M1–M8) | 8 items | 30–40 hours total | +5 to +8 points |
| Low (L1–L4) | 4 items | 8–10 hours total | +1 to +3 points |

After all Critical + High items (≈18–25 hours of work), the site would land in the **65–72 / 100 range** — solid for a local SAB site.
