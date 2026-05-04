import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import {
  ArrowRightIcon,
  PhoneIcon,
} from "../../components/icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { PostSectionRenderer } from "../components/PostSectionRenderer";
import type { PostContent } from "../posts-data";

const UNSPLASH = (id: string, w = 1920, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

function heroSrc(idOrPath: string, w = 1920) {
  return idOrPath.startsWith("/") ? idOrPath : UNSPLASH(idOrPath, w);
}

function formatDate(iso: string): string {
  // Render as e.g. "May 3, 2026" without pulling a date library.
  // ISO format YYYY-MM-DD parses as UTC; format in UTC to avoid off-by-one
  // from the user's local timezone.
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const PILLAR_LABEL: Record<PostContent["pillar"], string> = {
  "panel-load": "Panel & Load",
  lighting: "Lighting",
  "ev-generator": "EV & Generators",
  "older-home": "Older Homes",
  "code-safety": "Code & Safety",
};

export function PostContentView({ post }: { post: PostContent }) {
  const dateLabel = formatDate(post.datePublished);

  return (
    <main className="bg-black text-white">
      <SiteHeader active="/blog" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-900">
        {/* Background photo */}
        <div aria-hidden className="absolute inset-0">
          <Image
            src={heroSrc(post.heroImageId, 1920)}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-28">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-widest text-neutral-500 mb-8 flex items-center gap-2"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-red-500 truncate">{PILLAR_LABEL[post.pillar]}</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            {PILLAR_LABEL[post.pillar]}
          </div>

          <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-white">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-400">
            <span>
              By{" "}
              <Link
                href="/about"
                className="text-white hover:text-red-400 transition-colors font-semibold"
              >
                Marshall Morgan
              </Link>
              {" · "}M Electric, LLC
            </span>
            <span aria-hidden className="text-neutral-700">
              ·
            </span>
            <time dateTime={post.datePublished}>{dateLabel}</time>
            <span aria-hidden className="text-neutral-700">
              ·
            </span>
            <span>{Math.round(post.wordCount / 225)} min read</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="border-b border-neutral-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 -mt-12 relative z-10">
          <figure className="relative aspect-[16/9] rounded-lg overflow-hidden border border-neutral-800 shadow-2xl shadow-red-900/20">
            <Image
              src={heroSrc(post.heroImageId, 1920)}
              alt={post.heroImageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="space-y-7 sm:space-y-8">
          {post.body.map((section, i) => (
            <PostSectionRenderer key={i} section={section} />
          ))}
        </div>

        {/* FAQ */}
        {post.faqs.length > 0 && (
          <section
            id="faq"
            className="mt-16 sm:mt-20 pt-10 border-t border-neutral-900 scroll-mt-24"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
              <span className="h-px w-8 bg-red-600" />
              Common Questions
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
              Frequently asked questions.
            </h2>
            <div className="mt-10 space-y-4">
              {post.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-neutral-950 border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors"
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer text-white font-semibold list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg leading-snug">{faq.q}</h3>
                    <span className="text-red-500 transition-transform duration-200 group-open:rotate-45 text-2xl leading-none shrink-0">
                      +
                    </span>
                  </summary>
                  {/* linkify-skip: FAQ answers are plain prose with no link markup; matches the FAQPage schema text exactly. */}
                  <p className="px-6 pb-6 text-neutral-300 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Sources */}
        {post.sources && post.sources.length > 0 && (
          <section className="mt-16 pt-10 border-t border-neutral-900">
            <div className="text-xs uppercase tracking-widest text-red-500 font-semibold mb-4">
              Sources &amp; Further Reading
            </div>
            <ul className="space-y-2 text-sm text-neutral-400">
              {post.sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-neutral-700 underline-offset-2 hover:decoration-red-500 hover:text-white transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-700"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:40px_40px]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white">
            STORM DAMAGE OR NEED HELP NOW?
            <br />
            CALL US.
          </h2>
          <p className="mt-5 text-white/90 text-lg max-w-xl mx-auto">
            24/7 emergency dispatch across the Tulsa metro. Marshall answers
            the line personally.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white font-bold text-2xl sm:text-3xl px-8 py-5 rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <PhoneIcon className="size-7" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white border-2 border-white/40 hover:border-white font-semibold px-6 py-4 rounded-md transition-colors duration-200 cursor-pointer"
            >
              Request Free Estimate
              <ArrowRightIcon className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
