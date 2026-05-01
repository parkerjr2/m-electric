/**
 * Inline contextual auto-linker.
 *
 * Wrap any prose string with `linkify(text, { currentPath })` to convert
 * service-name mentions (e.g., "panel upgrade", "EV charger") into inline
 * `<Link>` elements pointing at the corresponding `/services/[slug]` page.
 *
 * Behavior:
 *   - First-occurrence per service URL per call (no duplicate links).
 *   - Self-skip: never auto-links the page's own URL (panel-upgrades page
 *     mentioning "panel upgrade" will NOT link to itself).
 *   - Longest-match-first: dictionary is sorted by specificity so
 *     "whole-home surge protection" beats bare "surge protection".
 *   - Length guard: strings shorter than 50 chars are returned unchanged
 *     (avoids linking 3-word card captions / micro-copy).
 *   - Word-boundaried: regex `\b` anchors prevent matching inside other words.
 *
 * Coverage of all prose render points is enforced by:
 *   1. The static grep in `npm run verify:links:static`
 *   2. The build-time HTML walker `npm run verify:links`
 *
 * When adding a new service, add a SERVICE_LINK_DICT entry below AND
 * update the duplicate dictionary in scripts/verify-inline-links.mjs.
 */

import Link from "next/link";
import type { ReactNode } from "react";

export const DEFAULT_LINK_CLASS =
  "underline decoration-red-600/40 underline-offset-2 hover:decoration-red-500 hover:text-white transition-colors";

export type DictEntry = {
  url: string;
  pattern: RegExp;
};

/**
 * Phrase → URL dictionary, sorted longest/most-specific first.
 * Keep mirrored with scripts/verify-inline-links.mjs.
 */
export const SERVICE_LINK_DICT: readonly DictEntry[] = [
  {
    url: "/services/ev-charger-installation",
    pattern:
      /\b(EV[-\s]charger(?:\s+installation)?s?|electric vehicle chargers?|Level 2 chargers?)\b/i,
  },
  {
    url: "/services/generator-installation",
    pattern:
      /\b(whole[-\s]home generators?|standby generators?|generator installations?|transfer switches?)\b/i,
  },
  {
    url: "/services/smart-home-wiring",
    pattern:
      /\b(smart[-\s]home wiring|smart[-\s]home installations?|structured cabling)\b/i,
  },
  {
    url: "/services/ceiling-fan-installation",
    pattern: /\b(ceiling[-\s]fan installations?|ceiling fans?)\b/i,
  },
  {
    url: "/services/commercial-lighting",
    pattern: /\b(commercial lighting|LED retrofits?|tenant lighting)\b/i,
  },
  {
    url: "/services/commercial-wiring",
    pattern:
      /\b(commercial wiring|commercial electrical wiring|tenant build[-\s]outs?|tenant improvements?)\b/i,
  },
  {
    url: "/services/outdoor-lighting",
    pattern:
      /\b(outdoor lighting|landscape lighting|exterior lighting|security lighting)\b/i,
  },
  {
    url: "/services/indoor-lighting",
    pattern:
      /\b(indoor lighting|interior lighting|recessed lighting|under[-\s]cabinet lighting)\b/i,
  },
  {
    url: "/services/surge-protection",
    pattern:
      /\b(whole[-\s]home surge protection|whole[-\s]house surge protection|surge protectors?|surge protection)\b/i,
  },
  {
    url: "/services/outlet-installation",
    pattern:
      /\b(outlet (?:installation|repair|replacement)s?|GFCI installations?)\b/i,
  },
  {
    url: "/services/panel-upgrades",
    pattern:
      /\b(electrical panel upgrades?|panel upgrades?|sub-panels?|breaker (?:panel|box) upgrades?)\b/i,
  },
  {
    url: "/services/home-rewiring",
    pattern:
      /\b(whole[-\s]home rewiring|home rewiring|house rewiring|aluminum wiring|knob[-\s]and[-\s]tube wiring)\b/i,
  },
  {
    url: "/services/wiring-repair",
    pattern: /\b(wiring repairs?|electrical wiring repairs?|faulty wiring)\b/i,
  },
  {
    url: "/services/electrical-repair",
    pattern: /\b(electrical repairs?|electrical troubleshooting)\b/i,
  },
];

type LinkifyOptions = {
  currentPath?: string;
  cssClass?: string;
};

type Match = { start: number; end: number; url: string; text: string };

function overlaps(m: Match, all: Match[]): boolean {
  for (const x of all) {
    if (m.start < x.end && m.end > x.start) return true;
  }
  return false;
}

export function linkify(
  input: string | null | undefined,
  opts: LinkifyOptions = {}
): ReactNode {
  if (!input || typeof input !== "string") return input ?? "";
  if (input.length < 50) return input;

  const { currentPath, cssClass } = opts;
  const seenUrls = new Set<string>();
  if (currentPath) seenUrls.add(currentPath);

  const matches: Match[] = [];
  for (const entry of SERVICE_LINK_DICT) {
    if (seenUrls.has(entry.url)) continue;
    if (entry.url === currentPath) continue;
    // Each pattern is a non-/g regex — exec returns the FIRST match only.
    const m = entry.pattern.exec(input);
    if (m && typeof m.index === "number") {
      const candidate: Match = {
        start: m.index,
        end: m.index + m[0].length,
        url: entry.url,
        text: m[0],
      };
      if (!overlaps(candidate, matches)) {
        matches.push(candidate);
        seenUrls.add(entry.url);
      }
    }
  }

  if (matches.length === 0) return input;
  matches.sort((a, b) => a.start - b.start);

  const out: ReactNode[] = [];
  let cursor = 0;
  for (const m of matches) {
    if (m.start > cursor) out.push(input.slice(cursor, m.start));
    out.push(
      <Link
        key={`lk-${m.start}`}
        href={m.url}
        className={cssClass ?? DEFAULT_LINK_CLASS}
      >
        {m.text}
      </Link>
    );
    cursor = m.end;
  }
  if (cursor < input.length) out.push(input.slice(cursor));

  return out;
}
