"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckIcon,
  CheckShieldIcon,
  ClockIcon,
  DollarIcon,
  PhoneIcon,
  ShieldIcon,
  SparkleIcon,
  StarIcon,
} from "../components/icons";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_AREAS,
  TULSA_NEIGHBORHOODS,
} from "@/lib/site";
import { linkify } from "@/lib/inline-links";
import type { ServiceContent } from "../services/services-data";
import type { Review } from "@/lib/reviews";

const unsplash = (id: string, w = 1920, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

const SERVICES_OFFERED = [
  {
    title: "Commercial Wiring & Installations",
    bullets: [
      "New construction electrical systems",
      "Tenant improvement projects",
      "Office build-outs and renovations",
      "Code compliance upgrades",
      "Distribution panel installations",
      "Emergency backup systems",
    ],
  },
  {
    title: "Commercial Lighting Solutions",
    bullets: [
      "LED retrofits and upgrades",
      "Office and workplace lighting design",
      "Parking-lot and exterior lighting",
      "Emergency and exit lighting",
      "Motion sensor installations",
      "Energy-efficient controls",
    ],
  },
  {
    title: "Industrial & Heavy Commercial",
    bullets: [
      "Machine and equipment wiring",
      "Industrial control systems",
      "Power distribution",
      "Motor controls and VFDs",
      "Transformer installations",
      "High-voltage services",
    ],
  },
];

const WHY_CHOOSE = [
  {
    title: "Licensed & Certified Commercial Contractors",
    body: "Every M Electric technician is fully licensed, bonded, and insured in Oklahoma. We maintain current knowledge of commercial electrical codes and rigorous safety standards.",
    Icon: ShieldIcon,
  },
  {
    title: "24/7 Emergency Response",
    body: "Electrical problems don't wait for business hours. Our emergency response team handles urgent issues across the Tulsa metro to minimize costly downtime.",
    Icon: ClockIcon,
  },
  {
    title: "Cost-Effective Solutions",
    body: "Transparent pricing, detailed quotes, and energy-efficient options that reduce long-term operating costs. No surprise upsells.",
    Icon: DollarIcon,
  },
  {
    title: "Quality Workmanship Guaranteed",
    body: "All work backed by comprehensive warranties and our satisfaction guarantee. We prioritize reliable, long-lasting electrical solutions.",
    Icon: CheckShieldIcon,
  },
  {
    title: "Minimal Business Disruption",
    body: "Evening, overnight, and weekend work available. We coordinate site access, security, and cleanup with your facilities team in advance.",
    Icon: SparkleIcon,
  },
  {
    title: "Direct Owner Communication",
    body: "Marshall Morgan, US Army veteran and owner, runs every project. No call center, no project handoffs — direct line to the person doing the work.",
    Icon: BoltIcon,
  },
];

const PROCESS_STEPS = [
  {
    title: "Initial consultation",
    body: "Thorough site assessment, business needs review, code compliance check, and safety evaluation.",
  },
  {
    title: "Detailed proposal",
    body: "Transparent cost breakdown, project timeline, material specifications, and energy-efficiency recommendations.",
  },
  {
    title: "Permit & coordination",
    body: "We pull permits, coordinate with utility (PSO/OEC), inspections, and any other trades on site.",
  },
  {
    title: "Professional installation",
    body: "Licensed commercial electricians, minimal business disruption, regular progress updates, and quality control checks.",
  },
  {
    title: "Final inspection & turnover",
    body: "Comprehensive system testing, code compliance verification, operations demonstration, and full documentation.",
  },
];

export function CommercialIndex({
  heroImageId,
  services,
  faqs,
  reviews,
}: {
  heroImageId: string;
  services: ServiceContent[];
  faqs: { q: string; a: string }[];
  reviews: Review[];
}) {
  return (
    <main className="bg-black text-white">
      <SiteHeader active="/commercial" />

      {/* Hero — full-bleed background like /services index */}
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div aria-hidden className="absolute inset-0">
          <Image
            src={unsplash(heroImageId, 1920)}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-black/40"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-28 sm:py-36 text-center">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-widest text-neutral-400 mb-8 flex items-center justify-center gap-2"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-red-500">Commercial</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold"
          >
            <span className="h-px w-8 bg-red-600" />
            Tulsa Commercial Electrician
            <span className="h-px w-8 bg-red-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              COMMERCIAL ELECTRICAL
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-300">
              SERVICES IN TULSA.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-neutral-300 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            {linkify(
              "When your Tulsa business needs reliable commercial electrical service, M Electric delivers expertise you can count on. We serve businesses from single-tenant retail to industrial facilities with licensed commercial electricians, decades of combined experience, and 24/7 emergency response across the Tulsa metro.",
              { currentPath: "/commercial" }
            )}
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-semibold text-lg px-7 py-4 rounded-md transition-colors duration-200 cursor-pointer"
            >
              Free Consultation
              <ArrowRightIcon className="size-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted partner intro — 134-167w answer block */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-24">
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95] text-center">
          Trusted commercial electrical contractors serving Tulsa businesses.
        </h2>
        <p className="mt-8 text-neutral-300 text-lg leading-relaxed">
          {linkify(
            "M Electric has been the commercial electrician Tulsa businesses rely on since 1999. Marshall Morgan, a US Army veteran, founded the company. We've been family-owned for over 25 years. We work directly with general contractors, building owners, facility managers, and architects. Project scope ranges from single tenant improvements to ground-up commercial construction. Our licensed commercial electricians serve the full Tulsa metro: downtown Tulsa office space, Brookside retail, Broken Arrow industrial facilities, Owasso commercial centers, and beyond. Every project is fully permitted and code-compliant. We test every system to manufacturer specs. We document each install with as-built drawings, panel schedules, and circuit directories so future work is straightforward. We carry comprehensive insurance and can name additional insureds per your contract. Our 4.9-star rating across 90+ verified Google reviews reflects two and a half decades of upfront pricing, punctual service, and clean workmanship.",
            { currentPath: "/commercial" }
          )}
        </p>
      </section>

      {/* Services we provide */}
      <section
        id="services"
        className="border-y border-neutral-900 bg-neutral-950"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
          <SectionHeader title="Commercial electrical services we provide." />
          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {SERVICES_OFFERED.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-black border border-neutral-800 hover:border-red-600 rounded-lg p-7 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 pb-5 border-b border-neutral-800">
                  <div className="flex size-9 items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 text-red-500">
                    <BoltIcon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {cat.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckIcon className="size-4 mt-1 shrink-0 text-red-500" />
                      <span className="text-neutral-200 leading-snug text-sm">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail-page links */}
      {services.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
          <SectionHeader title="Explore our commercial services." />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group block h-full bg-neutral-950 border border-neutral-800 hover:border-red-600 rounded-lg overflow-hidden transition-colors duration-200"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={unsplash(s.heroImageId, 800)}
                      alt={s.heroImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <BoltIcon className="size-5" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white">
                        {s.serviceType}
                      </h3>
                    </div>
                    <p className="mt-4 text-neutral-400 leading-relaxed">
                      {s.metaDescription}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm text-red-500 font-semibold">
                      Learn more <ArrowRightIcon className="size-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Why choose */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
          <SectionHeader title="Why Tulsa businesses choose M Electric." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="bg-black border border-neutral-800 hover:border-red-600 rounded-lg p-6 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 text-red-500">
                    <d.Icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-white">{d.title}</h3>
                </div>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  {linkify(d.body, { currentPath: "/commercial" })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <SectionHeader title="Our commercial electrical process." />
        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCESS_STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="bg-neutral-950 border border-neutral-800 hover:border-red-600 rounded-lg p-6 transition-colors duration-200"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-[family-name:var(--font-display)] text-3xl text-red-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-white">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                {linkify(step.body, { currentPath: "/commercial" })}
              </p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Service area */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
              <span className="h-px w-8 bg-red-600" />
              Service Area
              <span className="h-px w-8 bg-red-600" />
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl tracking-tight text-white">
              Commercial electrical service across the Tulsa metro.
            </h3>
            <p className="mt-5 text-neutral-400 text-base max-w-3xl mx-auto leading-relaxed">
              We work with commercial customers in{" "}
              <span className="text-neutral-200">
                {TULSA_NEIGHBORHOODS.slice(0, 6).join(", ")}
              </span>
              , {TULSA_NEIGHBORHOODS.slice(6).join(", ")} — plus every
              surrounding city in the Tulsa metro.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {SERVICE_AREAS.map((area, i) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-5 py-2.5 rounded-full bg-black border border-neutral-800 text-neutral-200 text-sm hover:border-red-600 hover:text-white transition-colors duration-200"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      {reviews.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
              <span className="h-px w-8 bg-red-600" />
              Verified Google Reviews
              <span className="h-px w-8 bg-red-600" />
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
              What Tulsa-area customers say.
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

      {/* FAQ */}
      <section
        id="faq"
        className="border-y border-neutral-900 bg-neutral-950"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-24 sm:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
              <span className="h-px w-8 bg-red-600" />
              Common Questions
              <span className="h-px w-8 bg-red-600" />
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
              Tulsa commercial electrical FAQs.
            </h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group bg-black border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer text-white font-semibold list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg">{faq.q}</h3>
                  <span className="text-red-500 transition-transform duration-200 group-open:rotate-45 text-2xl leading-none shrink-0">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-neutral-300 leading-relaxed">
                  {linkify(faq.a, { currentPath: "/commercial" })}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
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
            COMMERCIAL ELECTRICAL TROUBLE?
            <br />
            CALL US RIGHT NOW.
          </h2>
          <p className="mt-5 text-white/90 text-lg max-w-xl mx-auto">
            Live dispatch around the clock for the entire Tulsa metro.
            Same-day commercial service available.
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

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
        {title}
      </h2>
    </div>
  );
}
