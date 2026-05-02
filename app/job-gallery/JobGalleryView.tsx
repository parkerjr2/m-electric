"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  ArrowRightIcon,
  PhoneIcon,
  StarIcon,
} from "../components/icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { linkify } from "@/lib/inline-links";
import type { GalleryItem, featuredBeforeAfter } from "@/lib/job-gallery";
import type { Review } from "@/lib/reviews";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Lightbox } from "./Lightbox";

type Props = {
  items: GalleryItem[];
  beforeAfter: typeof featuredBeforeAfter;
  reviews: Review[];
};

export function JobGalleryView({ items, beforeAfter, reviews }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const activeItem = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <main className="bg-black text-white">
      <SiteHeader active="/job-gallery" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-widest text-neutral-500 mb-8 flex items-center justify-center gap-2"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-red-500">Job Gallery</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold"
          >
            <span className="h-px w-8 bg-red-600" />
            Job Gallery
            <span className="h-px w-8 bg-red-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              REAL WORK,
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-300">
              REAL TULSA HOMES.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            {linkify(
              "A small, growing collection of recent projects across the Tulsa metro — outdoor lighting, recessed lighting retrofits, and before-and-after work. Every photo is a real M Electric job, taken with the homeowner’s permission.",
              { currentPath: "/job-gallery" }
            )}
          </motion.p>
        </div>
      </section>

      {/* Featured Before/After — the centerpiece */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            Featured · Before / After
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[0.95]">
            Drag to compare.
          </h2>
          <p className="mt-5 text-neutral-400 text-base sm:text-lg leading-relaxed">
            {linkify(beforeAfter.context, { currentPath: "/job-gallery" })}
          </p>
        </div>
        <div className="mt-12 max-w-5xl mx-auto">
          <BeforeAfterSlider
            beforeSrc={beforeAfter.beforeSrc}
            afterSrc={beforeAfter.afterSrc}
            beforeAlt={beforeAfter.beforeAlt}
            afterAlt={beforeAfter.afterAlt}
            width={beforeAfter.width}
            height={beforeAfter.height}
          />
          <p className="mt-6 text-center text-neutral-500 text-sm">
            {linkify(beforeAfter.caption, { currentPath: "/job-gallery" })}{" "}
            {beforeAfter.service && (
              <Link
                href={beforeAfter.service}
                className="text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                See indoor lighting services →
              </Link>
            )}
          </p>
        </div>
      </section>

      {/* Featured Projects — masonry */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
              <span className="h-px w-8 bg-red-600" />
              Featured Projects
              <span className="h-px w-8 bg-red-600" />
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[0.95]">
              Recent Tulsa work.
            </h2>
          </div>

          {/* CSS columns masonry — handles mixed aspect ratios cleanly */}
          <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {items.map((item, idx) => (
              <motion.button
                type="button"
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                aria-label={`View ${item.caption}`}
                className="group relative mb-5 inline-block w-full overflow-hidden rounded-lg border border-neutral-800 hover:border-red-600 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-500 break-inside-avoid"
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: `${item.width} / ${item.height}` }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <div className="text-xs uppercase tracking-widest text-red-400 font-semibold">
                    {labelForCategory(item.category)}
                  </div>
                  {/* linkify-skip: caption is inside a <button>; nested interactive elements invalid */}
                  <p className="mt-2 text-white text-sm sm:text-base leading-snug line-clamp-3">
                    {item.caption}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-red-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View larger
                    <ArrowRightIcon className="size-3.5" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-neutral-500">
            More projects added as we wrap them up. Want to see specific
            work?{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-red-500 hover:text-red-400 font-semibold transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Reviews surface */}
      {reviews.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
              <span className="h-px w-8 bg-red-600" />
              Verified Google Reviews
              <span className="h-px w-8 bg-red-600" />
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
              Behind every photo, a satisfied Tulsa neighbor.
            </h2>
            <div className="mt-4 inline-flex items-center gap-2 text-neutral-400 text-sm">
              <span className="flex gap-0.5 text-red-500">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="size-4" />
                ))}
              </span>
              <span>4.9 average · 90+ reviews</span>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.figure
                key={r.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-neutral-950 border border-neutral-800 rounded-lg p-7"
              >
                <div
                  className="flex gap-1 text-red-500"
                  aria-label={`${r.rating} out of 5 stars`}
                >
                  {[...Array(r.rating)].map((_, idx) => (
                    <StarIcon key={idx} className="size-4" />
                  ))}
                </div>
                <blockquote className="mt-4 text-neutral-200 leading-relaxed">
                  &ldquo;{r.pullQuote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="text-white font-semibold">{r.author}</span>
                  <span className="text-neutral-500">
                    {" "}
                    · Verified Google Review
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
      )}

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
            READY FOR YOUR PROJECT?
            <br />
            CALL US TODAY.
          </h2>
          <p className="mt-5 text-white/90 text-lg max-w-xl mx-auto">
            Free estimates, transparent quotes, and the same crew on every
            job. Same-day service available across the Tulsa metro.
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

      {/* Lightbox */}
      <Lightbox
        item={activeItem}
        onClose={() => setLightboxIndex(null)}
        onPrev={
          lightboxIndex !== null && lightboxIndex > 0
            ? () => setLightboxIndex(lightboxIndex - 1)
            : undefined
        }
        onNext={
          lightboxIndex !== null && lightboxIndex < items.length - 1
            ? () => setLightboxIndex(lightboxIndex + 1)
            : undefined
        }
      />
    </main>
  );
}

function labelForCategory(c: GalleryItem["category"]): string {
  const map: Record<GalleryItem["category"], string> = {
    "outdoor-lighting": "Outdoor Lighting",
    "indoor-lighting": "Indoor Lighting",
    "recessed-lighting": "Recessed Lighting",
    "panel-upgrade": "Panel Upgrade",
    "before-after": "Before / After",
    "ceiling-fan": "Ceiling Fan",
    "ev-charger": "EV Charger",
    generator: "Generator",
    commercial: "Commercial",
  };
  return map[c];
}
