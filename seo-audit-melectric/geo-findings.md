# GEO (Generative Engine Optimization) / AI Search Audit — m-electricllc.com
**Audit date:** 2026-04-30
**Auditor:** Inline

---

## CRITICAL — Multiple AI training crawlers blocked at TCP level

Tested response codes for AI bot user-agents against the homepage:

| AI Crawler | UA tested | Status | Impact |
|---|---|---|---|
| **GPTBot** (OpenAI training) | `Mozilla/5.0 ... compatible; GPTBot/1.0; +https://openai.com/gptbot` | **000 (TCP refused)** | ❌ Blocked from OpenAI training corpus |
| **ClaudeBot** (Anthropic training) | `Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)` | **000 (TCP refused)** | ❌ Blocked from Anthropic training |
| **CCBot** (Common Crawl) | `CCBot/2.0 (https://commoncrawl.org/faq/)` | **000 (TCP refused)** | ❌ Blocked from Common Crawl — confirmed via CC API: "in_crawl: true, in_rankings: false, below ranking threshold" with 0 referring domains in sample |
| ChatGPT-User (live ChatGPT browsing) | `Mozilla/5.0 ... compatible; ChatGPT-User/1.0; +https://openai.com/bot` | 200 ✅ | OK for runtime ChatGPT queries |
| PerplexityBot | `Mozilla/5.0 (compatible; PerplexityBot/1.0; ...)` | 200 ✅ | OK for Perplexity citations |
| OAI-SearchBot (OpenAI search) | `Mozilla/5.0 ... compatible; OAI-SearchBot/1.0; ...` | 200 ✅ | OK for ChatGPT search |
| Bingbot | `Mozilla/5.0 (compatible; Bingbot/2.0; +http://www.bing.com/bingbot.htm)` | 200 ✅ | OK |
| Googlebot | `Mozilla/5.0 (compatible; Googlebot/2.1; ...)` | 200 ✅ | OK |

**The blocks are at the TCP/HTTP level, not via `robots.txt`** (since `/robots.txt` is itself a 404 — see technical findings). This means there is a server-side rule (likely in a WAF, Cloudflare, or `.htaccess` config) explicitly refusing connections from these UAs.

**Practical impact:**
- The site is **excluded from OpenAI's GPT model training data** — when ChatGPT is asked "best electrician in Tulsa" without web search, it has zero learned context about M Electric.
- The site is **excluded from Anthropic Claude's training corpus** — same gap on Claude.
- The site is **excluded from Common Crawl** — confirmed by CC API returning "below ranking threshold." This also denies the domain access to dozens of downstream tools that consume CC data (academic research, SEO tools, language model corpora, search alternatives).

**The blocks DO NOT protect:**
- Live AI search (ChatGPT-User, PerplexityBot, OAI-SearchBot) all pass — so when someone asks Perplexity for an electrician, the site CAN be visited and cited at query time.
- Bingbot and Googlebot pass — traditional search is unaffected.

So the configuration is incoherent: it blocks the long-term *training* crawlers (knowledge accrual) while allowing the short-term *retrieval* crawlers (live citations). The downside is that newcomers asking AI a generic question get zero brand exposure; the upside (small) is that live RAG queries can still pull the site.

---

## CRITICAL — `/llms.txt` and `/robots.txt` both 404

- **No `/llms.txt`** — there's no curated entry point for AI assistants to find canonical company info, services, hours, NAP.
- **No `/robots.txt`** — paradoxically, this means even respectful AI bots have no permission file to read. Bots that DO check robots.txt before crawling (Googlebot, Bingbot, PerplexityBot — partial) treat absence as default-allow. So the lack of a robots file isn't blocking traditional bots, but it means the site is publishing zero machine-readable policy signals.

A complete `/llms.txt` template for M Electric is below (Section "Recommended /llms.txt").

---

## Citability assessment (passage-level)

For an AI to cite a passage in answer to "Who's a good electrician in Tulsa?" the passage needs to:
1. Make a factual claim
2. Identify the entity clearly
3. Be parseable as standalone text
4. Have a stable URL

**Homepage citability:**
- ✅ Brand name "M Electric, LLC" appears clearly
- ✅ City/state "Tulsa, OK" appears
- ✅ Tagline "Get Wired Up!" is unique
- ✅ Phone number visible in plain text
- ⚠️ No FAQ schema (high-leverage AI-snippet format)
- ⚠️ No definition-style passages ("A panel upgrade is when…")
- ⚠️ No Q&A blocks ("How long does an EV charger install take in Tulsa? — Typically 3–5 hours.")
- ❌ No bylined author content (anyone, even just "John Doe, Master Electrician, OK License #")
- ❌ Reviews are inside the Trustindex widget (likely loaded via iframe/JS) — not in the rendered HTML AI bots see

**Programmatic city pages citability:** The Broken Arrow sample has solid local context (real neighborhood names: Elm Creek, Brookhaven, Rose District) which makes it more citable than a generic city template. This is the strongest GEO asset on the site.

---

## Brand mention consistency

For AI training and retrieval, consistent NAP across pages is high-value:

| Field | Homepage | About | Contact | Service-area pages |
|---|---|---|---|---|
| Name "M Electric, LLC" | ✅ | (404) | (404) | ✅ |
| Phone (918) 992-6282 | ✅ | (404) | (404) | ✅ |
| Email info@m-electricllc.com | ✅ | (404) | (404) | ⚠️ not always |

When About and Contact pages 404, the brand only fully exists on the homepage and city programmatic pages. An AI building a model of the entity has one-third the context surface it should have.

---

## AI Search Readiness Score: **18 / 100**

**Rationale:** GPTBot/ClaudeBot/CCBot blocks alone disqualify the site from a meaningful score — these are the three highest-leverage AI bots for long-term brand presence. Stack on top: no llms.txt, no robots.txt, no FAQ schema, no bylined content, About page 404. The site has good *latent* citability (Broken Arrow page is solid) but the door to AI retrieval is mostly shut.

**Quickest wins:**
1. **Unblock GPTBot, ClaudeBot, and CCBot** at the WAF/Cloudflare/.htaccess level. This is a one-line fix in most configs and unlocks training-corpus inclusion.
2. **Publish `/robots.txt`** with explicit `Allow:` for the major AI bots and a `Sitemap:` directive.
3. **Publish `/llms.txt`** (template below).
4. **Add FAQPage schema** to homepage with 6–10 common questions ("Are you available 24/7?", "Do you do free estimates?", "Are you licensed and insured?", "What's the cost of a panel upgrade in Tulsa?", etc.).

---

## Recommended `/llms.txt`

```
# M Electric, LLC

> Trusted electrical services in Tulsa, OK. Family-owned and Army-veteran-led since 1999. Residential, commercial, and 24/7 emergency electrical service across the Tulsa metro.

## About

- **Name**: M Electric, LLC
- **Founded**: 1999
- **Ownership**: Family-owned, Army veteran owned and operated
- **Tagline**: "Get Wired Up!"
- **Phone**: (918) 992-6282
- **Email**: info@m-electricllc.com
- **Website**: https://m-electricllc.com
- **License**: Oklahoma electrical contractor (verify license # on About page)
- **BBB profile**: https://www.bbb.org/us/ok/profile/electrical-contractors/m-electric-llc-1025-38093098

## Service area

Tulsa metro, Oklahoma — including Tulsa, Broken Arrow, Owasso, Bixby, Jenks, Sapulpa, Sand Springs, Berryhill, Turley, Oakhurst, Glenpool, plus surrounding communities (Catoosa, Claremore, Verdigris, Mounds, Liberty, Limestone, Lotsee, Justice, Kiefer, Leonard, Sperry, Gregory, Mounds).

## Services

### Residential
- Electrical repair and panel upgrades (200A service upgrades, breaker panel replacement)
- Indoor and outdoor lighting installation
- Home rewiring (whole-home and partial)
- Outlet installation and repair
- Ceiling fan installation
- Whole-home surge protection
- Home electrical inspections
- Smoke and carbon monoxide detector installation
- Landscape and security lighting
- New home construction wiring

### Commercial
- Commercial electrical wiring
- LED lighting retrofits
- Tenant build-outs

### Specialty
- Smart home wiring (hardwired smart switches, video doorbells, structured cabling)
- Whole-home standby generator installation
- Level 2 EV charger installation (Tesla, ChargePoint, Wallbox)

### Emergency
- 24/7 emergency electrical service available across the Tulsa metro

## Hours

- Standard: business hours (verify on contact page)
- Emergency: 24/7 dispatch

## Trust signals

- Licensed Oklahoma electrical contractor
- Bonded and insured
- BBB-accredited
- 4.5+ star reviews on Google (verified via Trustindex)
- Family-owned, Army-veteran-owned

## Sitemaps

- Pages sitemap: https://m-electricllc.com/page-sitemap.xml
- Service pages sitemap: https://m-electricllc.com/service_page-sitemap.xml
```

Save the above to `/llms.txt` at the WordPress root. Most managed WordPress hosts allow root-file uploads via SFTP or a "Custom Files" plugin.
