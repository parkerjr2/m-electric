"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import {
  ArrowRightIcon,
  BoltIcon,
  CheckIcon,
  PhoneIcon,
  StarIcon,
} from "../../components/icons";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_AREAS,
  TULSA_NEIGHBORHOODS,
} from "@/lib/site";
import { reviewsForService, type ReviewServiceTag } from "@/lib/reviews";
import { linkify } from "@/lib/inline-links";
import {
  getService,
  type ServiceContent,
  type ServiceSection,
} from "../services-data";

const unsplash = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export function ServiceContentView({ service }: { service: ServiceContent }) {
  const currentPath = `/services/${service.slug}`;
  return (
    <main className="bg-black text-white">
      <SiteHeader active="/services" />

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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-widest text-neutral-500 mb-10 flex items-center gap-2"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-red-500">{service.serviceType}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold"
              >
                <span className="h-px w-8 bg-red-600" />
                {service.heroEyebrow}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-6 font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95]"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  {service.h1Top}
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-300">
                  {service.h1Bottom}
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-7 text-neutral-300 text-lg leading-relaxed"
              >
                {linkify(service.heroLead, { currentPath })}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
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

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative aspect-[4/5] lg:aspect-[5/6] rounded-lg overflow-hidden border border-neutral-800 shadow-2xl shadow-red-900/20"
            >
              <Image
                src={unsplash(service.heroImageId, 1200)}
                alt={service.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-red-900/40 via-black/10 to-transparent"
              />
              <div
                aria-hidden
                className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Body sections */}
      {service.body.map((section, i) => (
        <Section
          key={i}
          section={section}
          index={i}
          currentPath={currentPath}
        />
      ))}

      {/* Process */}
      {service.process && (
        <section className="border-y border-neutral-900 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
            <SectionHeader title={service.process.heading} />
            <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.process.steps.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                  className="bg-black border border-neutral-800 hover:border-red-600 rounded-lg p-6 transition-colors duration-200"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-[family-name:var(--font-display)] text-3xl text-red-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold text-white">{step.title}</h3>
                  </div>
                  {step.body && (
                    <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                      {linkify(step.body, { currentPath })}
                    </p>
                  )}
                </motion.li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Why choose */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <SectionHeader title={service.whyChoose.heading} />
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {service.whyChoose.bullets.map((b, i) => (
            <motion.li
              key={b}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
              className="flex items-start gap-3 bg-neutral-950 border border-neutral-800 rounded-md px-5 py-4"
            >
              <CheckIcon className="size-4 mt-1 shrink-0 text-red-500" />
              <span className="text-neutral-200 leading-snug">{b}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Service area pills */}
      <section className="border-y border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
              <span className="h-px w-8 bg-red-600" />
              Service Area
              <span className="h-px w-8 bg-red-600" />
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl tracking-tight text-white">
              {service.serviceType} across the Tulsa metro.
            </h3>
            <p className="mt-5 text-neutral-400 text-base max-w-3xl mx-auto leading-relaxed">
              We cover{" "}
              <span className="text-neutral-200">
                {TULSA_NEIGHBORHOODS.slice(0, 6).join(", ")}
              </span>
              , and {TULSA_NEIGHBORHOODS.slice(6).join(", ")} — plus every
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
      {(() => {
        const tag = service.slug as ReviewServiceTag;
        const matched = reviewsForService(tag, 3);
        if (matched.length === 0) return null;
        return (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
                <span className="h-px w-8 bg-red-600" />
                Verified Google Reviews
                <span className="h-px w-8 bg-red-600" />
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
                What Tulsa neighbors say.
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
              {matched.map((r, i) => (
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
        );
      })()}

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-24">
          <SectionHeader title="Frequently asked questions" />
          <div className="mt-12 space-y-3">
            {service.faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group bg-neutral-950 border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer text-white font-semibold list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
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

      {/* Related services */}
      {service.related.length > 0 && (
        <section className="border-t border-neutral-900 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold">
                <span className="h-px w-8 bg-red-600" />
                Explore More
                <span className="h-px w-8 bg-red-600" />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl tracking-tight text-white">
                More residential electrical services in Tulsa.
              </h3>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.related
                .map((slug) => getService(slug))
                .filter((s): s is ServiceContent => Boolean(s))
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group bg-black border border-neutral-800 hover:border-red-600 rounded-lg p-6 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <BoltIcon className="size-5" />
                      </div>
                      <h3 className="font-semibold text-white">
                        {s.serviceType}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                      {s.metaDescription}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm text-red-500 font-semibold">
                      Learn more <ArrowRightIcon className="size-4" />
                    </div>
                  </Link>
                ))}
            </div>
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
            READY FOR {service.serviceType.toUpperCase()}?
            <br />
            CALL US RIGHT NOW.
          </h2>
          <p className="mt-5 text-white/90 text-lg max-w-xl mx-auto">
            Live dispatch around the clock for the entire Tulsa metro. Same-day
            service available.
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

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
        {title}
      </h2>
    </div>
  );
}

function Section({
  section,
  index,
  currentPath,
}: {
  section: ServiceSection;
  index: number;
  currentPath: string;
}) {
  const isAlt = index % 2 === 1;
  const sectionClass = isAlt
    ? "border-y border-neutral-900 bg-neutral-950"
    : "";

  return (
    <section className={sectionClass}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95]">
            {section.heading}
          </h2>
          {section.kind === "paragraph" && (
            <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
              {linkify(section.body, { currentPath })}
            </p>
          )}
          {section.kind === "bullets" && (
            <>
              {section.lead && (
                <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
                  {linkify(section.lead, { currentPath })}
                </p>
              )}
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {section.bullets.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.35, delay: (i % 4) * 0.04 }}
                    className="group flex items-start gap-3 bg-black border border-neutral-800 hover:border-red-600 rounded-md px-5 py-4 transition-colors duration-200"
                  >
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-red-600/10 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                      <BoltIcon className="size-3.5" />
                    </div>
                    <span className="text-neutral-200 leading-snug">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </>
          )}
          {section.kind === "feature-bullets" && (
            <>
              {section.lead && (
                <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
                  {linkify(section.lead, { currentPath })}
                </p>
              )}
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                {section.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                    className="bg-black border border-neutral-800 hover:border-red-600 rounded-lg p-6 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 text-red-500">
                        <BoltIcon className="size-5" />
                      </div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                      {linkify(item.body, { currentPath })}
                    </p>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
