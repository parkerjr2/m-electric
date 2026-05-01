# GEO / AI Search Analysis — m-electricllc.com (Home Page)

**Analyzed**: 2026-05-01
**Target URL**: http://localhost:3000/ (production-built artifact at `.next/server/app/index.html`)
**Business**: M Electric, LLC — Tulsa-area Service Area Business

---

## GEO Readiness Score: 52/100

| Dimension | Weight | Score | Verdict |
|---|---|---|---|
| Citability | 25 | **10/25** | Paragraphs too short (14–44w typical) — below the 134–167w optimal citation block |
| Structural Readability | 20 | **12/20** | Clean H1→H2→H3 hierarchy, but only 1 of 15 headings is question-based; no tables; no `<details>` FAQ on home |
| Multi-Modal Content | 15 | **6/15** | 8 images present; no video, no infographics, no interactive tools |
| Authority & Brand Signals | 20 | **11/20** | Strong local trust signals (BBB, GBP, real reviews) but zero detectable Wikipedia/Reddit/YouTube presence |
| Technical Accessibility | 20 | **13/20** | Full SSG (excellent), robots permits AI crawlers implicitly, but no `llms.txt`, no RSL, no explicit AI directives |

---

## Platform Breakdown

| Platform | Score | Why |
|---|---|---|
| **Google AI Overviews** | ~70/100 | Schema-rich, dedicated service pages rank well, FAQ schema on subpages → strong passage candidates |
| **ChatGPT** | ~35/100 | ChatGPT cites Wikipedia (47.9%) and Reddit (11.3%) heavily. M Electric has neither. Bing Places not yet claimed (powers ChatGPT web search) |
| **Perplexity** | ~40/100 | Perplexity cites Reddit (46.7%) and Wikipedia. No community discussion footprint |
| **Bing Copilot** | ~50/100 | Site is in Bing's index; Bing Places not claimed (called out in `/seo-local` audit too) |

**Critical insight**: Only **11% of domains are cited by both ChatGPT and Google AIO** for the same query. This site is set up to win Google AIO, but barely shows up on ChatGPT/Perplexity.

---

## AI Crawler Access Status

```
User-Agent: *
Allow: /

Host: https://m-electricllc.com
Sitemap: https://m-electricllc.com/sitemap.xml
```

| Crawler | Implicit Status | Recommendation |
|---|---|---|
| GPTBot (OpenAI / ChatGPT) | ✓ Allowed via wildcard | Make explicit |
| OAI-SearchBot (OpenAI) | ✓ Allowed via wildcard | Make explicit |
| ChatGPT-User | ✓ Allowed via wildcard | Make explicit |
| ClaudeBot (Anthropic) | ✓ Allowed via wildcard | Make explicit |
| PerplexityBot | ✓ Allowed via wildcard | Make explicit |
| Bingbot | ✓ Allowed via wildcard | – (already implicit) |
| CCBot (Common Crawl) | ✓ Allowed | Optional: block to opt out of training datasets |
| Bytespider (TikTok/Douyin) | ✓ Allowed | Optional: block |

**Recommendation**: Make AI crawler permissions explicit in [app/robots.ts](app/robots.ts) so a future change to the wildcard rule doesn't accidentally block them. See "Top 5 Highest-Impact Changes" below.

---

## llms.txt Status

❌ **Not present.** No `/llms.txt` at the root or in [public/](public/).

This is the single fastest GEO win available — see ready-to-use template below.

---

## Brand Mention Analysis

| Platform | Detected | Citation Weight |
|---|---|---|
| Google Business Profile | ✓ (linked in `sameAs`) | Strong — but invisible to ChatGPT |
| BBB (accredited) | ✓ (linked in `sameAs`) | Strong — Google uses BBB for verification |
| Facebook | ✓ (linked in `sameAs`) | Moderate |
| Wikipedia | ✗ | **High weight for AI citations** — gap |
| Reddit | ✗ | **High weight for Perplexity/ChatGPT** — gap |
| YouTube | ✗ | **Strongest correlation with AI visibility (~0.737)** — gap |
| LinkedIn (company page) | ✗ | Moderate weight — gap |
| Industry directories (NECA, IBEW) | ✗ | Moderate weight — gap |

**The 3× rule**: Brand mentions correlate **3× more strongly** with AI visibility than backlinks (Ahrefs Dec 2025, n=75,000 brands). M Electric's authority profile is heavily weighted toward Google's local-pack ecosystem (GBP, BBB) and very thin on the channels that drive ChatGPT/Perplexity citations.

---

## Passage-Level Citability Analysis

**Target: 134–167 word self-contained answer blocks.**

| Paragraph | Word Count | Status |
|---|---|---|
| Hero subtitle | 30w | ✗ Too short |
| Residential section subtitle | 18w | ✗ Too short |
| Specialty card descriptions (4 cards) | 13–18w each | ✗ Too short |
| About section paragraph (Why M Electric) | 42w | ✗ Too short |
| Differentiator card bodies (4 cards) | 14–23w each | ✗ Too short |
| Service-area copy | 26w + 27w | ✗ Too short |
| Final CTA paragraph | 19w | ✗ Too short |
| Testimonial bodies | 25–37w each | ✗ Too short |
| **Combined testimonial figure (1 instance)** | 138w | ✓ Optimal |

**Verdict**: The home page is heavily marketing-optimized — punchy, scannable copy that converts visitors but provides almost no extractable answer blocks. Of ~20 paragraph-level chunks, only 1 hits the citation sweet spot (and that's a testimonial, not factual content).

By contrast, the service detail pages (e.g., [/services/electrical-repair](app/services/services-data.ts)) have several body sections in the 80–150w range plus 5-question FAQ accordions with full-prose answers — those are the pages most likely to be cited by AI, not the home page.

---

## Server-Side Rendering Check

✅ **Excellent.** Full Next.js 16 Static Site Generation:
- 656 visible words present in pre-rendered HTML
- All schema, all headings, all body copy server-rendered
- AI crawlers (which do NOT execute JavaScript) see everything

This is the strongest single GEO foundation. No remediation needed.

---

## Structural Detail

| Element | Count | AI-Friendly? |
|---|---|---|
| `<h1>` | 1 | ✓ |
| `<h2>` | 6 | ✓ Hierarchy clean |
| `<h3>` | 8 | ✓ |
| Question-based headings | 1 / 15 | ✗ Add 2–3 more |
| `<table>` | 0 | ✗ Add comparison table opportunity |
| `<ul>` | 3 | ⚠ Mostly footer; residential service grid renders as `<div>` not `<ul>` |
| `<ol>` | 0 | – |
| `<details>` (FAQ accordion) | 0 | ✗ Add a 3–5 question FAQ |
| `Schema.org FAQPage` | 0 on home (present on service pages) | ✗ Add 1 home-level FAQ |

---

## Top 5 Highest-Impact Changes

### 🔴 1. Create `/llms.txt` (5-minute task, biggest single GEO win)

Drop this file at [public/llms.txt](public/llms.txt):

```
# M Electric, LLC

> Family-owned, Army-veteran-led electrical contractor serving the Tulsa,
> Oklahoma metro since 1999. Licensed, bonded, and insured for residential,
> commercial, and 24/7 emergency electrical service.

Owner: Marshall Morgan (US Army veteran)
Phone: (918) 992-6282
Email: info@m-electricllc.com
Service area: Tulsa metro — Tulsa, Broken Arrow, Owasso, Bixby, Jenks,
Sapulpa, Sand Springs, Berryhill, Turley, Oakhurst, Glenpool

## Services
- [Electrical Repair](https://m-electricllc.com/services/electrical-repair): Same-day repair, 24/7 emergency
- [Electrical Panel Upgrades](https://m-electricllc.com/services/panel-upgrades): 100A–400A residential panel installation
- [Home Rewiring](https://m-electricllc.com/services/home-rewiring): Aluminum, knob-and-tube, full house rewires
- [Outlet Installation & Repair](https://m-electricllc.com/services/outlet-installation): GFCI, USB, 240V
- [Indoor Lighting Installation](https://m-electricllc.com/services/indoor-lighting): Recessed, LED, smart
- [Outdoor Lighting](https://m-electricllc.com/services/outdoor-lighting): Landscape, security, pathway
- [Ceiling Fan Installation](https://m-electricllc.com/services/ceiling-fan-installation)
- [Whole-Home Surge Protection](https://m-electricllc.com/services/surge-protection)
- [Wiring Repair](https://m-electricllc.com/services/wiring-repair)

## Authority & Verification
- BBB Accredited: https://www.bbb.org/us/ok/tulsa/profile/electrical-contractors/m-electric-llc-1025-38093098
- Google Business Profile: https://maps.app.goo.gl/XMfj5yKsF9Dh6jm19
- Average rating: 4.9/5 across 90+ reviews
- Family-owned and Army-veteran-led since 1999

## Key facts
- 24/7 emergency dispatch across the entire Tulsa metro
- Same-day service available for most repairs
- Free written estimates with no upsells
- All work warrantied
```

### 🔴 2. Add a "Common Questions" FAQ block to the home page

Add 5 question-based H2/H3s with 30–80w answers. Targets the question-pattern matching that AI uses for passage selection. Source the questions from the most-shared themes across the service pages:

- "How fast can a Tulsa electrician get to my house in an emergency?"
- "Are electrical estimates free?"
- "Is M Electric licensed and insured in Oklahoma?"
- "What areas around Tulsa do you serve?"
- "What's the difference between a 100-amp and 200-amp panel?"

Wrap them in a `FAQPage` JSON-LD on the home page (you already do this on service pages — same pattern).

### 🟠 3. Make AI crawler permissions explicit in [app/robots.ts](app/robots.ts)

Replace the wildcard with explicit allow rules. This signals intent to AI search systems and protects you if you ever add a wildcard `Disallow` later:

```ts
import type { MetadataRoute } from "next";

const SITE_URL = "https://m-electricllc.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
```

### 🟠 4. Convert 3–4 home-page paragraphs into 134–167w "answer blocks"

Pick the most informational sections and expand. Best candidates:

- The "About / Why M Electric" paragraph (currently 42w, expand to ~150w with specifics: "M Electric was founded in 1999 by Army veteran Marshall Morgan…")
- A new "What does a Tulsa electrician do?" introductory passage above the residential service grid
- A new "When should I call a 24/7 emergency electrician in Tulsa?" passage above the final CTA — useful for AI Overviews on emergency-intent queries

Each should:
- Open with a direct definition ("X is…" or "A Tulsa electrician handles…")
- Cite at least one specific fact (year founded, license type, service area radius)
- Be self-contained — readable without the rest of the page

### 🟡 5. Build entity presence outside the site (off-page, but the highest-leverage GEO move)

In priority order:

1. **Wikidata entry** for "M Electric, LLC" — free, lower bar than Wikipedia, feeds AI training data and Google's Knowledge Graph. ~30 min to create.
2. **YouTube channel** with 5–10 short videos: panel walkthroughs, EV charger install timelapses, "common signs you need rewiring" explainers. YouTube mentions correlate ~0.737 with AI citations — strongest signal in the Ahrefs study.
3. **Reddit presence** — answer electrical questions in r/tulsa, r/oklahoma, r/electricians (without spamming). Reddit drives ~47% of Perplexity citations.
4. **LinkedIn company page** for M Electric, LLC.

Wikipedia article is unlikely to pass notability for a small SAB — skip unless coverage materially grows.

---

## Schema Recommendations for AI Discoverability

Already comprehensive (best-in-class — see `/seo-local` audit). Two small additions specifically for AI:

1. **`Person` schema for Marshall Morgan** as the `founder` of the Electrician business. AI systems use Person entities to attribute expertise:

```jsonc
// Add to electricianSchema in app/layout.tsx
"founder": {
  "@type": "Person",
  "name": "Marshall Morgan",
  "jobTitle": "Master Electrician & Owner",
  "worksFor": { "@id": "https://m-electricllc.com#business" },
  "knowsAbout": [
    "Residential electrical systems",
    "Electrical panel upgrades",
    "Home rewiring",
    "Generator installation",
    "EV charger installation"
  ],
  "alumniOf": "United States Army"
}
```

2. **Home-page `FAQPage` schema** matching the new visible FAQ block (#2 above). You already do this on service pages — same pattern.

---

## Content Reformatting Suggestions

### Current → AI-Friendly Transformation Examples

**Hero subtitle (current, 30w)**:
> The Tulsa electrician families and businesses have called for 25 years. Family-owned, Army-veteran-led, with residential, commercial, and 24/7 emergency electrical service across the Tulsa metro.

**No change needed** — this is brand voice and converts well. AI will pull from the FAQ/About block instead.

**About paragraph (current, 42w)** → expand to ~150w:
> M Electric is the trusted Tulsa electrician families and small businesses have relied on since 1999. Founded by Marshall Morgan — a US Army veteran — and family-owned for over 25 years, M Electric serves the entire Tulsa metro: Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sapulpa, Sand Springs, Berryhill, Turley, Oakhurst, and Glenpool. The same crew that wires your living room is the one wiring the next strip mall down the road. Every job is licensed, bonded, and insured to Oklahoma standards, with all work warrantied and 24/7 emergency dispatch available across the metro. M Electric carries a 4.9-star rating across 90+ verified Google reviews — a reflection of the company's commitment to upfront pricing, punctual service, and clean workmanship that's earned the trust of Tulsa neighbors one job at a time.

That single paragraph hits ~155w, contains five extractable facts (founding year, founder name, service area, rating, review count), and is fully self-contained.

---

## What This Audit Could NOT Measure

- **Live AI citation rate** — whether ChatGPT, Perplexity, Google AIO actually cite the site for "Tulsa electrician" queries today. Need DataForSEO `ai_optimization_chat_gpt_scraper` or manual prompt testing.
- **AI Overview presence rate** — how often AIOs appear for the site's target queries. Need a SERP-tracking tool with AIO detection (Bright Local, Semrush AI Overview tracker, AlsoAsked).
- **LLM mention frequency over time** — whether brand mentions are growing. Need a brand-monitoring tool (Brandwatch, Mention.com, BuzzStream LLM tracker).
- **Bing index coverage** — whether the site's recent updates have been crawled by Bing (which feeds ChatGPT). Best signal: Bing Webmaster Tools.
- **Off-page entity strength** — Wikidata/Wikipedia/YouTube/Reddit footprint quantification. Ahrefs Brand Watch, Mention.com, or Diffbot.

---

## Summary

The site is **technically perfect** for AI crawlers — full SSG, comprehensive schema, real reviews, fast renders. But the **on-page content is marketing copy, not citation fodder**: paragraphs are 14–44 words when AI prefers 134–167 word answer blocks, and only 1 of 15 headings is question-shaped.

The two **5-minute** fixes that move the score most:
1. Drop the [llms.txt template](public/llms.txt) above into `public/`
2. Make AI crawler permissions explicit in [app/robots.ts](app/robots.ts)

The two **bigger** moves with the most long-run leverage:
3. Add a question-based home-page FAQ block + matching `FAQPage` schema
4. Build entity presence on YouTube and Reddit (the channels Ahrefs identifies as the strongest correlates of AI citation, ~0.737 and high)

If only one off-page action is taken: **start a YouTube channel with 5–10 educational videos**. Highest correlation with AI visibility (~0.737) of any signal in the 75,000-brand Ahrefs study, and electrician work is naturally video-friendly.
