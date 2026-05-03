import { InlineMarkdown } from "./InlineMarkdown";

type Variant = "quick-answer" | "warning" | "tip";

const VARIANT_STYLES: Record<
  Variant,
  { container: string; eyebrow: string; eyebrowText: string }
> = {
  "quick-answer": {
    container:
      "border border-red-600/40 bg-gradient-to-br from-red-950/40 via-neutral-950 to-neutral-950",
    eyebrow: "bg-red-600",
    eyebrowText: "Quick Answer",
  },
  warning: {
    container: "border border-red-600/30 bg-red-950/30",
    eyebrow: "bg-red-600",
    eyebrowText: "Warning",
  },
  tip: {
    container: "border border-neutral-700 bg-neutral-950",
    eyebrow: "bg-neutral-700",
    eyebrowText: "Tip",
  },
};

/**
 * Body text supports the same lightweight markdown subset as paragraphs
 * (links, **bold**) plus newline-separated content blocks:
 *
 *   `**Title:**`         → subheader (bold + nothing else on the line)
 *   `- text` / `* text`  → unordered list item
 *   `1. text`            → ordered list item
 *   anything else        → paragraph
 *
 * Consecutive items of the same kind are grouped into one list.
 */
type Block =
  | { kind: "subheader"; text: string }
  | { kind: "ul"; lines: string[] }
  | { kind: "ol"; lines: string[] }
  | { kind: "p"; text: string };

function classifyLine(line: string): Block {
  // Subheader: line is exactly `**Some Text:**` (optionally with trailing punctuation only)
  const headerMatch = line.match(/^\*\*([^*]+)\*\*\s*$/);
  if (headerMatch) return { kind: "subheader", text: headerMatch[1] };
  if (/^[-*]\s+/.test(line)) {
    return { kind: "ul", lines: [line.replace(/^[-*]\s+/, "")] };
  }
  if (/^\d+\.\s+/.test(line)) {
    return { kind: "ol", lines: [line.replace(/^\d+\.\s+/, "")] };
  }
  return { kind: "p", text: line };
}

function renderBody(body: string) {
  const lines = body.split("\n").map((l) => l.trim()).filter(Boolean);
  const blocks: Block[] = [];

  for (const line of lines) {
    const next = classifyLine(line);
    const last = blocks[blocks.length - 1];
    // Merge consecutive ul/ol blocks
    if (last && last.kind === "ul" && next.kind === "ul") {
      last.lines.push(...next.lines);
    } else if (last && last.kind === "ol" && next.kind === "ol") {
      last.lines.push(...next.lines);
    } else {
      blocks.push(next);
    }
  }

  return blocks.map((b, i) => {
    if (b.kind === "subheader") {
      return (
        <div
          key={i}
          className="text-xs uppercase tracking-widest text-red-400 font-bold pt-1"
        >
          {b.text}
        </div>
      );
    }
    if (b.kind === "ul") {
      return (
        <ul
          key={i}
          className="space-y-2 text-neutral-200 leading-relaxed"
        >
          {b.lines.map((line, j) => (
            <li key={j} className="flex gap-2.5">
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 rounded-full bg-red-500"
              />
              <span>
                <InlineMarkdown text={line} />
              </span>
            </li>
          ))}
        </ul>
      );
    }
    if (b.kind === "ol") {
      return (
        <ol
          key={i}
          className="space-y-3 list-decimal list-inside marker:text-red-500 marker:font-semibold text-neutral-200 leading-relaxed"
        >
          {b.lines.map((line, j) => (
            <li key={j}>
              <InlineMarkdown text={line} />
            </li>
          ))}
        </ol>
      );
    }
    return (
      <p key={i} className="text-neutral-200 leading-relaxed">
        <InlineMarkdown text={b.text} />
      </p>
    );
  });
}

export function QuickAnswerBox({
  variant,
  title,
  body,
  jumpLinks,
}: {
  variant: Variant;
  title?: string;
  body: string;
  jumpLinks?: { label: string; toId: string }[];
}) {
  const styles = VARIANT_STYLES[variant];
  return (
    <aside
      role={variant === "warning" ? "alert" : "note"}
      className={`relative rounded-lg p-7 sm:p-8 ${styles.container}`}
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white ${styles.eyebrow}`}
        >
          {styles.eyebrowText}
        </span>
        {title && variant !== "quick-answer" && (
          <span className="text-white font-semibold">{title}</span>
        )}
      </div>

      {title && variant === "quick-answer" && (
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-5 leading-snug">
          {title}
        </h2>
      )}

      <div className="space-y-4">{renderBody(body)}</div>

      {jumpLinks && jumpLinks.length > 0 && (
        <div className="mt-6 pt-5 border-t border-red-600/20">
          <div className="text-xs uppercase tracking-widest text-red-400 font-semibold mb-2">
            Jump to
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-neutral-300">
            {jumpLinks.map((j) => (
              <li key={j.toId}>
                <a
                  href={`#${j.toId}`}
                  className="underline decoration-red-600/40 underline-offset-2 hover:decoration-red-500 hover:text-white transition-colors"
                >
                  {j.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
