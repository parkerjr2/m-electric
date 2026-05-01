"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  ArrowRightIcon,
  BoltIcon,
  PhoneIcon,
} from "../components/icons";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { linkify } from "@/lib/inline-links";
import type { ServiceContent } from "./services-data";

const HERO_IMG = "photo-1520975661595-6453be3f7070";

const unsplash = (id: string, w = 1920, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export function ServicesIndex({ services }: { services: ServiceContent[] }) {
  return (
    <main className="bg-black text-white">
      <SiteHeader active="/services" />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-900">
        {/* Background photo */}
        <div aria-hidden className="absolute inset-0">
          <Image
            src={unsplash(HERO_IMG, 1920)}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Darkening + brand wash */}
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
            className="text-xs uppercase tracking-widest text-neutral-500 mb-8 flex items-center justify-center gap-2"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-red-500">Services</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold"
          >
            <span className="h-px w-8 bg-red-600" />
            Tulsa Electrical Services
            <span className="h-px w-8 bg-red-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-[family-name:var(--font-display)] text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              RESIDENTIAL
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-300">
              ELECTRICAL SERVICES.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            {linkify(
              "From a flickering light to a full home rewire, M Electric handles every residential electrical job in the Tulsa metro. Owned and operated by US Army veteran Marshall Morgan since 1999. Licensed by the Oklahoma Construction Industries Board, bonded, and insured. Same-day service is available for most non-emergency calls placed before 11 a.m., and 24/7 emergency dispatch covers the entire Tulsa metro from Broken Arrow to Sand Springs, Owasso to Glenpool. Marshall personally answers the emergency line — there is no call center.",
              { currentPath: "/services" }
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

      {/* Service grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group block h-full bg-neutral-950 border border-neutral-800 hover:border-red-600 rounded-lg p-7 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <BoltIcon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {s.serviceType}
                  </h3>
                </div>
                {/* linkify-skip: card body is inside a wrapping <Link>; nested anchors not allowed */}
                <p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                  {s.metaDescription}
                </p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm text-red-500 font-semibold">
                  Learn more <ArrowRightIcon className="size-4" />
                </div>
              </Link>
            </motion.div>
          ))}
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
            ELECTRICAL TROUBLE?
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
