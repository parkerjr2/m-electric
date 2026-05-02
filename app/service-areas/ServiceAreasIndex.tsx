"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import {
  ArrowRightIcon,
  BoltIcon,
  PhoneIcon,
} from "../components/icons";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { linkify } from "@/lib/inline-links";
import type { ServiceArea } from "./areas-data";

export function ServiceAreasIndex({ areas }: { areas: ServiceArea[] }) {
  return (
    <main className="bg-black text-white">
      <SiteHeader active="/service-areas" />

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
            <span className="text-red-500">Service Areas</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 font-semibold"
          >
            <span className="h-px w-8 bg-red-600" />
            Tulsa Metro Coverage
            <span className="h-px w-8 bg-red-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-[family-name:var(--font-display)] text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95]"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              SERVICE
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-300">
              AREAS.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            {linkify(
              "M Electric serves the entire greater Tulsa metro — 16 cities, every zip code in Tulsa, plus Broken Arrow, Owasso, Bixby, Jenks, Sapulpa, Sand Springs, Berryhill, Turley, Oakhurst, Glenpool, Mounds, Kiefer, Kellyville, Leonard, and Liberty. Licensed, bonded, insured. No travel surcharge anywhere in the metro.",
              { currentPath: "/service-areas" }
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
              Free Estimate
              <ArrowRightIcon className="size-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Coverage overview — 200w answer block for AI citation */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20 sm:py-24">
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[0.95] text-center">
          One electrician, the whole Tulsa metro.
        </h2>
        <p className="mt-8 text-neutral-300 text-lg leading-relaxed">
          {linkify(
            "M Electric is owned and operated by US Army veteran Marshall Morgan, who founded the company in 1999. We cover a 16-city service area across Tulsa, Wagoner, and Creek counties. That area includes every Tulsa neighborhood plus all of the surrounding metro. Our base of operations is inside Tulsa city limits, which keeps response times tight. Inside the loop, emergencies are typically reached in under 60 minutes. Broken Arrow, Owasso, Bixby, and Jenks are 60–90 minutes. Sapulpa, Sand Springs, Glenpool, Mounds, Kiefer, Kellyville, and the smaller unincorporated communities of Berryhill, Turley, Oakhurst, Leonard, and Liberty are 60–120 minutes. We do not charge a travel surcharge anywhere in our standard service area. The same crew handles every job.",
            { currentPath: "/service-areas" }
          )}
        </p>
        <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
          {linkify(
            "The Tulsa metro spans three counties: Tulsa, Wagoner, and Creek. It also spans three different utility territories: PSO, OEC, and VVEC in some rural Bixby acreage. M Electric is licensed for residential and light-commercial work across all of them. We pull permits with whichever city or county jurisdiction applies. We coordinate directly with the appropriate utility for any service-entrance work. Each of the 11 city pages below covers what's specifically true about that area — neighborhoods we work in, common electrical issues for the local housing stock, response time, and city-specific FAQs.",
            { currentPath: "/service-areas" }
          )}
        </p>
      </section>

      {/* City grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20 sm:pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
            >
              <Link
                href={`/service-areas/${a.slug}`}
                className="group block h-full bg-neutral-950 border border-neutral-800 hover:border-red-600 rounded-lg p-7 transition-colors duration-200"
                aria-label={`Electrician services in ${a.city}, ${a.state}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-md bg-red-600/10 border border-red-600/30 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <BoltIcon className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {a.city}, {a.state}
                  </h3>
                </div>
                <p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                  {a.county} · {a.population} residents · {a.driveTimeFromTulsa}
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
            service available across all 16 service areas.
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
