import type { MetadataRoute } from "next";

const SITE_URL = "https://m-electricllc.com";

/**
 * Explicit AI-crawler permissions. The wildcard rule already allows everything,
 * but listing AI crawlers by name signals intent and makes it harder for a
 * future tightening of the wildcard to accidentally block AI search visibility.
 *
 * Crawler reference (Feb 2026):
 *  - GPTBot, OAI-SearchBot, ChatGPT-User: OpenAI / ChatGPT
 *  - ClaudeBot, anthropic-ai: Anthropic / Claude
 *  - PerplexityBot: Perplexity
 *  - Google-Extended: Google's AI training opt-in (separate from Googlebot)
 *  - Applebot-Extended: Apple Intelligence training opt-in
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
