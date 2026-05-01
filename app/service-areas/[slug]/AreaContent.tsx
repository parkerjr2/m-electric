"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import {
  ArrowRightIcon,
  BoltIcon,
  PhoneIcon,
  StarIcon,
} from "../../components/icons";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { linkify } from "@/lib/inline-links";
import type { ServiceArea } from "../areas-data";
import type { Review } from "@/lib/reviews";

const RESIDENTIAL_SERVICES = [
  { name: "Electrical Repair", slug: "electrical-repair" },
  { name: "Panel Upgrades", slug: "panel-upgrades" },
  { name: "Home Rewiring", slug: "home-rewiring" },
  { name: "Outlet Installation & Repair", slug: "outlet-installation" },
  { name: "Indoor Lighting", slug: "indoor-lighting" },
  { name: "Outdoor Lighting", slug: "outdoor-lighting" },
  { name: "Ceiling Fan Installation", slug: "ceiling-fan-installation" },
  { name: "Whole-Home Surge Protection", slug: "surge-protection" },
  { name: "Wiring Repair", slug: "wiring-repair" },
];

const COMMERCIAL_SERVICES = [
  { name: "Commercial Lighting", slug: "commercial-lighting" },
  { name: "Commercial Wiring", slug: "commercial-wiring" },
];

export function AreaContentView({
  area,
  reviews,
}: {
  area: ServiceArea;
  reviews: Review[];
}) {
  const currentPath = `/service-areas/${area.slug}`;
  return (
    <main className="bg-black text-white">
      <SiteHeader active="/service-areas" />

      {/* Hero — text-only with red gradient + grid backdrop */}
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
            <Link
              href="/service-areas"
              className="hover:text-white transition-colors"
            >
              Service Areas
            </Link>
            <span>/</span>
            <span className="text-red-500">{area.city}</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold"
          >
            <span className="h-px w-8 bg-red-600" />
            {area.heroEyebrow}
            <span className="h-px w-8 bg-red-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              {area.h1Top}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-300">
              {area.h1Bottom}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            {linkify(area.heroLead, { currentPath })}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              <PhoneIcon className="size-5" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-semibold text-lg px-7 py-4 rounded-md transition-colors duration-200 cursor-pointer"
            >
              Free Estimate
              <ArrowRightIcon className="size-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* City-specific intro paragraph (134-167w answer block for AI citation) */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-24">
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95] text-center">
          M Electric in {area.city}, {area.state}.
        </h2>
        <p className="mt-8 text-neutral-300 text-lg leading-relaxed">
          {linkify(area.introParagraph, { currentPath })}
        </p>
      </section>

      {/* Service-area facts grid */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FactItem label="Population" value={area.population} />
            <FactItem label="County" value={area.county} short />
            <FactItem label="Drive Time" value={area.driveTimeFromTulsa} short />
            <FactItem label="Utility" value={area.utilities.join(" / ")} short />
          </div>
          <div className="mt-8 text-center text-sm text-neutral-400">
            <span className="text-red-500 font-semibold">
              {area.responseTime}
            </span>
          </div>
        </div>
      </section>

      {/* What we work on in this city — varies per city */}
      {area.commonWork.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
          <SectionHeader
            title={`Common electrical work in ${area.city}.`}
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {area.commonWork.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                className="bg-neutral-950 border border-neutral-800 hover:border-red-600 rounded-lg p-7 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 text-red-500">
                    <BoltIcon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-white text-lg">
                    {w.title}
                  </h3>
                </div>
                <p className="mt-3 text-neutral-400 leading-relaxed">
                  {linkify(w.body, { currentPath })}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Neighborhoods — only if cited */}
      {area.neighborhoods && area.neighborhoods.length > 0 && (
        <section className="border-y border-neutral-900 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
                <span className="h-px w-8 bg-red-600" />
                Neighborhoods
                <span className="h-px w-8 bg-red-600" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl tracking-tight text-white">
                Where we work in {area.city}.
              </h3>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              {area.neighborhoods.map((n, i) => (
                <motion.span
                  key={n}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="px-5 py-2.5 rounded-full bg-black border border-neutral-800 text-neutral-200 text-sm hover:border-red-600 hover:text-white transition-colors duration-200"
                >
                  {n}
                </motion.span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services we provide — links into service detail pages */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <SectionHeader title={`Electrical services we provide in ${area.city}.`} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[...RESIDENTIAL_SERVICES, ...COMMERCIAL_SERVICES].map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group flex items-start gap-3 bg-neutral-950 border border-neutral-800 hover:border-red-600 rounded-md px-5 py-4 transition-colors duration-200"
                aria-label={`${s.name} in ${area.city}`}
              >
                <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-red-600/10 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                  <BoltIcon className="size-3.5" />
                </div>
                <span className="text-neutral-200 leading-snug">{s.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      {reviews.length > 0 && (
        <section className="border-y border-neutral-900 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
                <span className="h-px w-8 bg-red-600" />
                Verified Google Reviews
                <span className="h-px w-8 bg-red-600" />
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
                Trusted by Tulsa-area neighbors.
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
                  className="bg-black border border-neutral-800 rounded-lg p-7"
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
          </div>
        </section>
      )}

      {/* FAQs */}
      {area.faqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
              <span className="h-px w-8 bg-red-600" />
              Common Questions
              <span className="h-px w-8 bg-red-600" />
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
              {area.city} electrical FAQs.
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {area.faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group bg-neutral-950 border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer text-white font-semibold list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg">{faq.q}</h3>
                  <span className="text-red-500 transition-transform duration-200 group-open:rotate-45 text-2xl leading-none shrink-0">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-neutral-300 leading-relaxed">
                  {linkify(faq.a, { currentPath })}
                </p>
              </motion.details>
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
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            ELECTRICAL TROUBLE IN {area.city.toUpperCase()}?
            <br />
            CALL US RIGHT NOW.
          </h2>
          <p className="mt-5 text-white/90 text-lg max-w-xl mx-auto">
            Live dispatch around the clock for the entire Tulsa metro.
            Same-day service available across {area.city}.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-3 bg-black hover:bg-neutral-900 text-white font-bold text-2xl sm:text-3xl px-8 py-5 rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <PhoneIcon className="size-7" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-white border-2 border-white/40 hover:border-white font-semibold px-6 py-4 rounded-md transition-colors duration-200 cursor-pointer"
            >
              Email Us
              <ArrowRightIcon className="size-5" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function FactItem({
  label,
  value,
  short,
}: {
  label: string;
  value: string;
  short?: boolean;
}) {
  return (
    <div className="text-center">
      <div className="text-xs uppercase tracking-widest text-neutral-500">
        {label}
      </div>
      <div
        className={
          short
            ? "mt-2 text-base sm:text-lg font-semibold text-white"
            : "mt-2 font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-white tracking-wide"
        }
      >
        {value}
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
        {title}
      </h2>
    </div>
  );
}

