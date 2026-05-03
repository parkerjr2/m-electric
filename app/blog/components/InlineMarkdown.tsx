import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Tiny markdown subset for blog body content. Handles:
 *
 *   [text](url)        → <Link> for internal (`/...`) or <a target="_blank"> for external
 *   **bold text**      → <strong>
 *
 * No nesting (e.g., bold inside a link is rendered as plain text inside the
 * link). Posts are author-curated; if a future post needs more, extend here.
 */

type Token =
  | { kind: "text"; value: string }
  | { kind: "link"; label: string; url: string }
  | { kind: "bold"; value: string };

const PATTERN = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let cursor = 0;
  for (const match of input.matchAll(PATTERN)) {
    const start = match.index ?? 0;
    if (start > cursor) {
      tokens.push({ kind: "text", value: input.slice(cursor, start) });
    }
    if (match[1] !== undefined) {
      tokens.push({ kind: "bold", value: match[1] });
    } else if (match[2] !== undefined && match[3] !== undefined) {
      tokens.push({ kind: "link", label: match[2], url: match[3] });
    }
    cursor = start + match[0].length;
  }
  if (cursor < input.length) {
    tokens.push({ kind: "text", value: input.slice(cursor) });
  }
  return tokens;
}

const LINK_CLASS =
  "underline decoration-red-600/40 underline-offset-2 hover:decoration-red-500 hover:text-white transition-colors";

export function InlineMarkdown({ text }: { text: string }) {
  const tokens = tokenize(text);
  const out: ReactNode[] = [];

  tokens.forEach((tok, i) => {
    if (tok.kind === "text") {
      out.push(tok.value);
      return;
    }
    if (tok.kind === "bold") {
      out.push(
        <strong key={i} className="text-white font-semibold">
          {tok.value}
        </strong>,
      );
      return;
    }
    // link
    const isInternal = tok.url.startsWith("/") || tok.url.startsWith("#");
    if (isInternal && tok.url.startsWith("/")) {
      out.push(
        <Link key={i} href={tok.url} className={LINK_CLASS}>
          {tok.label}
        </Link>,
      );
    } else if (isInternal) {
      // hash link to in-page anchor — plain anchor, no Link
      out.push(
        <a key={i} href={tok.url} className={LINK_CLASS}>
          {tok.label}
        </a>,
      );
    } else {
      out.push(
        <a
          key={i}
          href={tok.url}
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          {tok.label}
        </a>,
      );
    }
  });

  return <>{out}</>;
}
