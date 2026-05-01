#!/usr/bin/env node
/**
 * Build-time verification: walks every prerendered HTML file in the
 * Next.js build output and asserts that for every dictionary phrase
 * mentioned in body prose on a page, a corresponding inline <a href="...">
 * exists in body prose.
 *
 * Run AFTER `next build`. Wired into `npm run verify:links`.
 *
 * Dictionary mirrored from lib/inline-links.tsx — keep the two in sync.
 */

import { readFile, readdir, stat } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";

const __filename = fileURLToPath(import.meta.url);
const PROJECT_ROOT = join(__filename, "..", "..");
const BUILD_DIR = join(PROJECT_ROOT, ".next", "server", "app");

// Mirror of SERVICE_LINK_DICT in lib/inline-links.tsx
const DICT = [
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
    pattern: /\b(smart[-\s]home wiring|smart[-\s]home installations?|structured cabling)\b/i,
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
    pattern: /\b(outdoor lighting|landscape lighting|exterior lighting|security lighting)\b/i,
  },
  {
    url: "/services/indoor-lighting",
    pattern: /\b(indoor lighting|interior lighting|recessed lighting|under[-\s]cabinet lighting)\b/i,
  },
  {
    url: "/services/surge-protection",
    pattern:
      /\b(whole[-\s]home surge protection|whole[-\s]house surge protection|surge protectors?|surge protection)\b/i,
  },
  {
    url: "/services/outlet-installation",
    pattern: /\b(outlet (?:installation|repair|replacement)s?|GFCI installations?)\b/i,
  },
  {
    url: "/services/panel-upgrades",
    pattern: /\b(electrical panel upgrades?|panel upgrades?|sub-panels?|breaker (?:panel|box) upgrades?)\b/i,
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

async function walkHtml(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir);
  } catch (err) {
    if (err.code === "ENOENT") return out;
    throw err;
  }
  for (const entry of entries) {
    const full = join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) {
      out.push(...(await walkHtml(full)));
    } else if (entry.endsWith(".html")) {
      out.push(full);
    }
  }
  return out;
}

function fileToRoute(file) {
  // .next/server/app/services/panel-upgrades.html -> /services/panel-upgrades
  // .next/server/app/index.html -> /
  // .next/server/app/about.html -> /about
  const rel = relative(BUILD_DIR, file).replace(/\\/g, "/");
  let route = "/" + rel.replace(/\.html$/, "");
  if (route === "/index") route = "/";
  return route;
}

async function main() {
  const files = await walkHtml(BUILD_DIR);
  if (files.length === 0) {
    console.error(
      `No HTML files found in ${BUILD_DIR}. Did you run \`next build\` first?`
    );
    process.exit(2);
  }

  const failures = [];
  const summary = [];
  let totalChecks = 0;
  let totalLinks = 0;

  for (const file of files) {
    const html = await readFile(file, "utf8");
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    // Strip header/footer/nav/script/style/breadcrumbs to isolate body prose.
    [
      "header",
      "footer",
      "nav",
      "script",
      "style",
      "[aria-label='Breadcrumb']",
    ].forEach((sel) => {
      doc.querySelectorAll(sel).forEach((n) => n.remove());
    });

    const body = doc.body;
    if (!body) continue;

    // Build prose text WITHOUT text that cannot host inline links:
    //   <a>          — wrapping anchors (card links); nested anchors invalid
    //   <button>     — interactive elements; nested anchors invalid
    //   <blockquote> — customer testimonials; original wording preserved
    const clone = body.cloneNode(true);
    clone.querySelectorAll("a, button, blockquote").forEach((n) => n.remove());
    const proseText = clone.textContent || "";
    const route = fileToRoute(file);

    for (const entry of DICT) {
      if (entry.url === route) continue;
      if (!entry.pattern.test(proseText)) continue;
      totalChecks += 1;
      const a = body.querySelector(`a[href="${entry.url}"]`);
      if (!a) {
        failures.push({ page: route, missing: entry.url });
      } else {
        totalLinks += 1;
      }
    }
    summary.push({ route });
  }

  if (failures.length) {
    console.error(`\n❌ Inline-link verification FAILED: ${failures.length} missing link(s)\n`);
    console.table(failures);
    console.error(
      "\nFor each row: the page mentions a dictionary phrase in body prose"
    );
    console.error(
      "but does not contain an inline <a href> to the matching service URL."
    );
    console.error(
      "Fix: ensure the corresponding source string is wrapped in linkify(...).\n"
    );
    process.exit(1);
  }

  console.log(
    `✅ Inline-link verification OK — ${files.length} HTML pages walked, ${totalChecks} dictionary mentions, ${totalLinks} matching inline links found.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
