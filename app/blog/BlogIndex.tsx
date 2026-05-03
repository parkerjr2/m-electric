"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { ArrowRightIcon, PhoneIcon } from "../components/icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import type { PostContent } from "./posts-data";

const UNSPLASH = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

function thumbSrc(idOrPath: string, w = 800) {
  return idOrPath.startsWith("/") ? idOrPath : UNSPLASH(idOrPath, w);
}

function formatDate(iso: string): string {
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

export function BlogIndex({ posts }: { posts: PostContent[] }) {
  return (
    <main className="bg-black text-white">
      <SiteHeader active="/blog" />

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
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-24 sm:py-32 text-center">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-widest text-neutral-500 mb-8 flex items-center justify-center gap-2"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-red-500">Blog</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
            <span className="h-px w-8 bg-red-600" />
            From the Bench
            <span className="h-px w-8 bg-red-600" />
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              FIELD NOTES
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-300">
              FROM A TULSA ELECTRICIAN.
            </span>
          </h1>
          <p className="mt-7 text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Plain-English guides on electrical safety, storm prep, panel
            upgrades, EV chargers, and what every Tulsa homeowner should know
            before the next outage.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        {posts.length === 0 ? (
          <p className="text-center text-neutral-400">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full bg-neutral-950 border border-neutral-800 hover:border-red-600 rounded-lg overflow-hidden transition-colors duration-200"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={thumbSrc(post.heroImageId, 800)}
                      alt={post.heroImageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest">
                        {PILLAR_LABEL[post.pillar]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="text-xs uppercase tracking-widest text-neutral-500">
                      <time dateTime={post.datePublished}>
                        {formatDate(post.datePublished)}
                      </time>
                      <span aria-hidden> · </span>
                      <span>{Math.round(post.wordCount / 225)} min read</span>
                    </div>
                    <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-white leading-snug group-hover:text-red-100 transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-neutral-400 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm text-red-500 font-semibold">
                      Read post <ArrowRightIcon className="size-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </section>

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
            NEED A LICENSED
            <br />
            TULSA ELECTRICIAN?
          </h2>
          <p className="mt-5 text-white/90 text-lg max-w-xl mx-auto">
            24/7 emergency dispatch across the Tulsa metro. Free written
            estimates on non-emergency work.
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
