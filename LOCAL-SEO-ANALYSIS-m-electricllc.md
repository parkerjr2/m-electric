# Local SEO Analysis — m-electricllc.com

**Analyzed**: 2026-04-30
**Target URL**: http://localhost:3000/ (production-built artifact at `.next/server/app/index.html`, identical to `https://m-electricllc.com/`)
**Business**: M Electric, LLC — Marshall Morgan, Tulsa, OK

---

## Local SEO Score: 75/100

| Dimension | Weight | Score | Notes |
|---|---|---|---|
| GBP Signals | 25 | **16/25** | GBP linked, hours visible, Q&A migrated to FAQ; missing map embed, secondary categories not visible |
| Reviews & Reputation | 20 | **17/20** | 4.9★/90 reviews, recent activity, owner responses; only Google captured on-site |
| Local On-Page SEO | 20 | **17/20** | 9 dedicated service pages, full NAP (minus street, correct for SAB), keyword-rich titles/H1s |
| NAP Consistency & Citations | 15 | **10/15** | Page ↔ schema match perfectly; missing Yelp / Apple / Bing presence signals |
| Local Schema Markup | 10 | **10/10** | `Electrician` (correct subtype) + GeoCircle + aggregateRating + 12 Reviews + sameAs |
| Local Link & Authority | 10 | **5/10** | BBB + GBP + Facebook in `sameAs`; no Chamber, no "best of" placements detected |

---

## Business Type & Industry

- **Business type**: **Service Area Business (SAB)** — no physical street address advertised; "owned by Marshall Morgan, operates out of his home"; service area language ("serving Tulsa, Broken Arrow, Owasso…") and `areaServed` cities array without `streetAddress`.
- **Industry vertical**: **Home Services — Electrician**. Schema correctly uses `Electrician` (subtype of `LocalBusiness`).
- **Verticals NOT applicable**: brick-and-mortar map verification, multi-location doorway test, restaurant/healthcare/legal-specific patterns.

---

## GBP Optimization Checklist

| Signal | Status | Notes |
|---|---|---|
| GBP profile linked (footer) | ✓ | `https://maps.app.goo.gl/XMfj5yKsF9Dh6jm19` |
| GBP in schema `sameAs` | ✓ | Linked to GBP shortlink |
| Primary category likely correct | ✓ | "Electrical Contractor" / "Electrician" matches site content |
| Secondary categories | ⚠ | Not detectable from page; recommend 4 (e.g., Electrician + Generator Repair Service + Lighting Contractor + EV Charging Station Installation) |
| Map embed on page | ✗ | None present. SABs typically skip this, but a service-area heatmap or static `<img>` of the coverage radius would help |
| GBP posts cadence | ⚠ | Not detectable from website; recommend weekly posts (job photos, "Get Wired Up!" updates) |
| Photos | ⚠ | Site uses Unsplash stock; recommend uploading real job-site photos to GBP. Listings with photos get 45% more direction requests |
| Q&A → FAQ migration | ✓ | GBP Q&A deprecated Dec 2025; site has FAQ on every service page (5 Q&A per page on average), correctly future-proofed |
| Hours visible on page | ✓ | "24/7 Emergency" in red top bar + final CTA + schema `OpeningHoursSpecification` (Mon–Sun 00:00–23:59) |
| Click-to-call (`tel:`) | ✓ | 5 `tel:` links on home page |
| Google Verified eligibility | ⚠ | Not detectable; encourage applying — replaced Guaranteed/Screened in Oct 2025 |
| GBP link strategy | ⚠ | Strong recommendation: GBP "website" link should NOT point at homepage. Sterling Sky Diversity Update (2025) shows linking GBP to your strongest organic page risks suppression. Point GBP "website" link at `/services` or `/about`, not `/` |

---

## Review Health Snapshot

| Metric | Value | Benchmark | Status |
|---|---|---|---|
| Total Google reviews | 90 | 10+ for ranking lift (Sterling Sky) | ✓ Well above |
| Average rating | 4.9 ★ | 4.5+ filters out 31% of buyers | ✓ Excellent |
| Most-recent review | 5 days ago | 18-day cliff (Sterling Sky) | ✓ Healthy velocity |
| Owner response rate | ~100% (visible in source) | 88% prefer responses | ✓ Best-in-class |
| Review platforms covered | Google only | Avg buyer uses 6 sites | ✗ Single-platform |
| Review gating risk | None observed | Google policy / FTC ($43,792/violation) | ✓ Clean |
| `aggregateRating` schema | Present | – | ✓ |
| First-party review schema | 12 reviews with `Review` markup | – | ✓ |

**Review velocity** is the standout strength here — Marshall has reviews from 5 days ago, 2 weeks ago, 3 weeks ago, 1 month ago. The 18-day cadence rule is comfortably maintained.

**Single-platform risk**: All visible reviews are on Google. Buyers consult an average of 6 review sites in 2026 (BrightLocal LCRS). Recommend cross-posting / earning reviews on Yelp, BBB (already accredited), and one industry-specific platform (Angi or HomeAdvisor for electricians).

---

## NAP Consistency Audit

| Source | Name | Address | Phone | Email |
|---|---|---|---|---|
| Page footer | M Electric, LLC | Tulsa, Oklahoma | (918) 992-6282 | info@m-electricllc.com |
| `Electrician` schema | M Electric, LLC | Tulsa, OK, US (no street) | +1-918-992-6282 | info@m-electricllc.com |
| Top emergency bar | — | — | (918) 992-6282 | — |
| `tel:` links | — | — | +19189926282 | — |
| GBP profile (linked) | (likely consistent — verify) | – | – | – |

**Verdict**: ✓ Perfectly consistent across all rendered surfaces. Phone formatting matches schema convention (`+1-` for international, parens for display). No `streetAddress` is correct for SAB — keep it that way.

**Recommended check (off-page, can't verify from HTML)**:
- GBP listing matches "M Electric, LLC" exactly (not "M Electric" or "M-Electric LLC")
- BBB profile NAP matches
- Facebook page name matches

---

## Citation Presence Check

### Tier 1 (Critical)

| Directory | Status | Action |
|---|---|---|
| Google Business Profile | ✓ Linked | Already in `sameAs` and footer |
| Bing Places | ⚠ Not detected | **Critical claim** — powers ChatGPT, Copilot, Alexa |
| Apple Business Connect | ⚠ Not detected | **Recommended claim** — usage doubled to 27% in 2026 |
| BBB | ✓ Accredited & linked | Profile id `1025-38093098`, in `sameAs` |
| Yelp | ⚠ Not detected | **Important** — ChatGPT sources from Yelp |
| Facebook business page | ✓ Linked | In `sameAs` |

### Industry-Specific (Home Services Electrician)

| Directory | Status | Notes |
|---|---|---|
| Angi (formerly Angie's List) | ⚠ Not detected | Lead-gen value for residential electricians |
| HomeAdvisor | ⚠ Not detected | Owned by Angi |
| Houzz | ⚠ Not detected | Strong for high-end remodel work |
| Thumbtack | ⚠ Not detected | Volume lead source |
| Porch | ⚠ Not detected | Local electrician aggregator |
| Trade-association directories | ⚠ Not detected | NECA / IBEW Local 584 if applicable |

### Data Aggregators (Submit for downstream propagation)

- Data Axle (Infogroup)
- Foursquare
- Neustar / TransUnion (formerly LSSI)

These three feed dozens of downstream sites including Apple, Bing, and many AI training data sources.

---

## Local Schema Status

**Strongest part of the audit. Already best-in-class.**

✓ `Electrician` (correct industry subtype, not generic `LocalBusiness`)
✓ Required: `name`, `address` (locality + region, SAB-correct without street)
✓ All recommended properties:
  - `geo` with 7-decimal precision (36.1539816, -95.992775)
  - `openingHoursSpecification` (24/7)
  - `telephone`, `email`, `url`, `image`, `logo`
  - `priceRange: "$$"`
  - `foundingDate: "1999"`
  - `slogan: "Get Wired Up!"`
✓ SAB-specific:
  - `areaServed` with 11 named cities (City schema)
  - `serviceArea` as `GeoCircle` (Tulsa centroid + ~30mi/48280m radius)
✓ Reviews:
  - `aggregateRating` (4.9 / 90 reviews)
  - `review` array with 12 first-party reviews (real Google reviews, dated, attributed)
✓ Service catalog:
  - `hasOfferCatalog` with 9 service offers
✓ Authority:
  - `sameAs` to BBB, GBP, Facebook
✓ Companion schema:
  - `WebSite` schema with `publisher` reference back to `Electrician` `@id`
  - `BreadcrumbList` on service pages
  - per-service `Service` schema with `provider` reference + own `aggregateRating` + `GeoCircle` + `review` array
  - `FAQPage` on each service page

**Caveat**: First-party `review` schema mirrors Google reviews. Google's structured data policy expects reviews to be **first-party-collected**. To stay safely within policy:
- The reviews are real, dated, attributed, and visibly displayed on-page
- Each is labeled "Verified Google Review" — transparent attribution
- This is defensible. If Google ever flags it, the on-page testimonials remain unaffected; only the JSON-LD `review` array would need to be removed.

**One small upgrade to consider**: Add `numberOfEmployees: 1` (or current count) to clarify business scale — helps AI systems describe the business accurately.

---

## Location Page Quality (N/A)

Single-location business. Multi-location quality gates and doorway-page swap test do not apply.

---

## Top 10 Prioritized Actions

### 🔴 Critical (do first, biggest impact)

1. **Claim Bing Places of Business**. Powers ChatGPT, Copilot, and Alexa local recommendations. ChatGPT does NOT pull from GBP directly — Bing is the bridge. With ChatGPT local conversion at 15.9% vs Google organic at 1.76% (Seer Interactive), this is the highest-leverage missing channel. ~30 min to claim, hours to fully optimize.

2. **Claim Apple Business Connect**. Apple Maps usage doubled to 27% of local searches in 2026 (BrightLocal). Free; ~20 min.

3. **Audit GBP "website" link**. Per Sterling Sky's 2025 Diversity Update, pointing GBP at your strongest organic page (the homepage) can suppress organic rankings. Change the GBP "Website" field to point at `/services` or `/about`, not `/`. Pure-win, no downside.

### 🟠 High

4. **Establish review presence on Yelp + 1 industry platform** (Angi or Thumbtack). Buyers consult ~6 platforms; ChatGPT samples from Yelp directly. Even 5–10 reviews on each diversifies authority.

5. **Pursue 3–5 "best of" list placements** for 2026/2027 — Tulsa World "Best of Tulsa", local NextDoor neighborhood polls, BBB "Torch Award" nominees, KOTV Best of the Best. Whitespark 2026 ranks "best of" placements as the #1 AI-visibility citation factor.

6. **Replace Unsplash stock with real job photos on the GBP listing** (and ideally on service pages). Listings with photos get 45% more direction requests. Real Tulsa job-site photos also help establish E-E-A-T.

### 🟡 Medium

7. **Submit to the three data aggregators** — Data Axle, Foursquare, Neustar/TransUnion. Each feeds dozens of downstream directories including AI training data sources. ~1 hour total.

8. **Apply for/confirm Google Verified status** (replaced the old Guaranteed badge in Oct 2025). Adds a trust badge in the local pack. Free for licensed/insured contractors.

9. **Establish a Tulsa Chamber of Commerce listing** + chamber membership. Chamber link = high Trust Flow + ~80% more consumer visits (GlueUp). For an electrician serving Tulsa metro, also consider Broken Arrow Chamber + Owasso Chamber.

10. **Create a local "best of" or community-involvement page**. Examples: a "Tulsa Veterans Day discount" announcement, sponsorship of a Tulsa little-league team, free electrical inspection donation drives. These create natural press hooks and "best of" eligibility — and brand mentions correlate **3× more strongly** with AI visibility than backlinks (Ahrefs).

### 🟢 Low (nice-to-haves)

- Add a service-area coverage map graphic (static `<img>` showing the 30-mile radius), since map embeds aren't ideal for SABs
- Consider an `app/opengraph-image.tsx` to generate a custom branded OG image (currently uses an Unsplash photo)
- Add `numberOfEmployees` to the Electrician schema

---

## What This Analysis Could NOT Assess

This audit is grounded in the rendered HTML and on-page schema. It cannot directly evaluate:

- **Geo-grid ranking position** across the Tulsa metro (need a tool like LocalFalcon or Sterling Sky's Local Viking)
- **Real-time local pack position** for "Tulsa electrician" and related queries (need DataForSEO `google_local_pack_serp` or Bright Local)
- **Domain Authority / spam score** of inbound links (need Moz, Ahrefs, or Majestic)
- **Comprehensive backlink profile** and referring-domain quality (same)
- **GBP Insights data** — direction requests, calls, photo views, search queries (need GBP API access)
- **Citation accuracy across the long tail** of 100+ directories (need Yext, BrightLocal Local Search Audit, or Whitespark)
- **AI search visibility** — citation rate in ChatGPT/Perplexity/Google AI Overviews (recommend running `/seo geo http://localhost:3000/` for a comprehensive AI search audit)
- **Competitor analysis** — how M Electric ranks against Mister Sparky, Mr. Electric Tulsa, etc., for shared queries

If the user wants those gaps filled, recommend running these tools:
- DataForSEO MCP (`google_local_pack_serp`, `local_business_data`, `business_listings`) for live SERP and citation data
- LocalFalcon or Local Viking for geo-grid heatmaps
- BrightLocal for ongoing citation health
- Moz Local for citation submissions

---

## Summary

This site is **substantially above the median for local-electrician sites** in 2026. The schema is best-in-class, dedicated service pages are in place (the #1 local organic factor per Whitespark), review velocity passes the 18-day rule, and NAP is perfectly consistent across page and schema.

The 25-point gap to a perfect score sits almost entirely in **off-page factors** that can't be solved by website changes alone: Bing Places, Apple Business Connect, multi-platform reviews, "best of" list placements, Chamber membership, and real job-site photography. The on-page foundation is ready to capture whatever lift those off-page actions deliver.

If only one action is taken: **claim Bing Places**. ChatGPT's 15.9% local conversion rate is the single largest discoverable channel currently invisible to this site.
