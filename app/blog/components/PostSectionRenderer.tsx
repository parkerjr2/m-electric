import Image from "next/image";
import type { PostSection } from "../posts-data";
import { InlineMarkdown } from "./InlineMarkdown";
import { QuickAnswerBox } from "./QuickAnswerBox";
import { PowerOutageDecisionChart } from "./PowerOutageDecisionChart";
import { StormSafetyChecklist } from "./StormSafetyChecklist";
import { SurgeProtectionCoverage } from "./SurgeProtectionCoverage";
import { PanelUpgradeWarningSigns } from "./PanelUpgradeWarningSigns";

/**
 * Maps `embed.component` string keys to actual React components. Keeping the
 * data file (posts-data.ts) free of React imports ensures it stays pure data
 * and can be safely consumed by sitemap.ts, llms.txt builders, etc.
 */
const EMBEDS = {
  PowerOutageDecisionChart,
  StormSafetyChecklist,
  SurgeProtectionCoverage,
  PanelUpgradeWarningSigns,
} as const;

const UNSPLASH = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

function imgSrc(idOrPath: string, w = 1600) {
  return idOrPath.startsWith("/") ? idOrPath : UNSPLASH(idOrPath, w);
}

export function PostSectionRenderer({ section }: { section: PostSection }) {
  switch (section.kind) {
    case "paragraph":
      return (
        <p className="text-neutral-300 text-lg leading-relaxed">
          <InlineMarkdown text={section.body} />
        </p>
      );

    case "h2":
      return (
        <h2
          id={section.id}
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95] scroll-mt-24"
        >
          {section.text}
        </h2>
      );

    case "h3":
      return (
        <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
          {section.text}
        </h3>
      );

    case "bullets":
      return (
        <div className="space-y-3">
          {section.lead && (
            <p className="text-neutral-300 text-lg leading-relaxed">
              <InlineMarkdown text={section.lead} />
            </p>
          )}
          <ul className="space-y-2.5 text-neutral-300 leading-relaxed">
            {section.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-red-500"
                />
                <span>
                  <InlineMarkdown text={b} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "ordered":
      return (
        <div className="space-y-3">
          {section.lead && (
            <p className="text-neutral-300 text-lg leading-relaxed">
              <InlineMarkdown text={section.lead} />
            </p>
          )}
          <ol className="space-y-2.5 text-neutral-300 leading-relaxed list-decimal list-outside ml-6 marker:text-red-500 marker:font-semibold">
            {section.items.map((item, i) => (
              <li key={i} className="pl-2">
                <InlineMarkdown text={item} />
              </li>
            ))}
          </ol>
        </div>
      );

    case "callout":
      return (
        <QuickAnswerBox
          variant={section.variant}
          title={section.title}
          // linkify-skip: parsed via InlineMarkdown inside QuickAnswerBox
          body={section.body}
          jumpLinks={section.jumpLinks}
        />
      );

    case "embed": {
      const Embed = EMBEDS[section.component];
      if (!Embed) return null;
      return (
        <figure className="not-prose">
          <Embed />
          {section.caption && (
            <figcaption className="mt-3 text-center text-sm text-neutral-500 italic">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case "image":
      return (
        <figure className="not-prose">
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-neutral-800">
            <Image
              src={imgSrc(section.src, 1600)}
              alt={section.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>
          {section.caption && (
            <figcaption className="mt-3 text-sm text-neutral-500 italic">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    default: {
      // exhaustiveness check
      const _exhaustive: never = section;
      void _exhaustive;
      return null;
    }
  }
}
