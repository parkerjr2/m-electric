"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import {
  ArrowRightIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
} from "./icons";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Commercial", href: "/commercial" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery", href: "/job-gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function PulseDot() {
  return (
    <span className="relative inline-flex size-2.5">
      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
      <span className="relative inline-flex size-2.5 rounded-full bg-white" />
    </span>
  );
}

export function SiteHeader({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll + Esc-to-close while the mobile drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      {/* Top emergency bar */}
      <div className="bg-red-600 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 flex items-center justify-center sm:justify-between gap-4">
          <span className="hidden sm:inline-flex items-center gap-2 font-medium">
            <PulseDot />
            24/7 Emergency Service · Tulsa Metro
          </span>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 font-bold tracking-wide hover:underline cursor-pointer"
          >
            <PhoneIcon className="size-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/80 border-b border-neutral-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          {/*
            py-4 expands the tap target to the full header height (64px) so
            the logo is comfortably tappable on mobile, not just a 32px row.
          */}
          <Link
            href="/"
            className="flex items-center cursor-pointer py-4 -my-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/m-electric-logo.png"
              alt="M Electric, LLC — Tulsa electrician"
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            {NAV.map((item) => {
              const isActive = active === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "text-white"
                      : "hover:text-white transition-colors duration-200"
                  }
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              className="md:hidden inline-flex items-center justify-center size-11 rounded-md text-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              <MenuIcon className="size-6" />
            </button>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2.5 rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
            >
              <PhoneIcon className="size-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-50 bg-black flex flex-col overflow-y-auto"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none"
            />

            {/* Drawer header — mirrors the sticky header so closing is intuitive */}
            <div className="relative flex items-center justify-between px-4 sm:px-6 h-16 border-b border-neutral-900">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center cursor-pointer py-4 -my-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/m-electric-logo.png"
                  alt="M Electric, LLC — Tulsa electrician"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex items-center justify-center size-11 rounded-md text-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                <CloseIcon className="size-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav
              aria-label="Mobile site navigation"
              className="relative flex-1 px-4 sm:px-6 py-8"
            >
              <ul className="flex flex-col gap-1">
                {NAV.map((item, i) => {
                  const isActive = active === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`group flex items-center justify-between px-2 py-5 border-b border-neutral-900 font-[family-name:var(--font-display)] text-3xl tracking-tight transition-colors ${
                          isActive
                            ? "text-red-500"
                            : "text-white hover:text-red-400"
                        }`}
                      >
                        {item.label}
                        <ArrowRightIcon className="size-5 text-neutral-600 group-hover:text-red-500 transition-colors" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer CTAs */}
            <div className="relative px-4 sm:px-6 py-6 border-t border-neutral-900 flex flex-col gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-6 py-4 rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                <PhoneIcon className="size-5" />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200 cursor-pointer"
              >
                Request a Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
