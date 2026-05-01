"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRightIcon } from "../components/icons";
import type { GalleryItem } from "@/lib/job-gallery";
import Link from "next/link";
import { linkify } from "@/lib/inline-links";

type Props = {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

export function Lightbox({ item, onClose, onPrev, onNext }: Props) {
  // Lock scroll + keyboard nav while open
  useEffect(() => {
    if (!item) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close gallery view"
            className="absolute top-4 right-4 size-10 rounded-full bg-black/60 hover:bg-red-600 border border-neutral-800 hover:border-red-500 flex items-center justify-center text-white transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
              aria-hidden
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {onPrev && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-6 size-12 rounded-full bg-black/60 hover:bg-red-600 border border-neutral-800 hover:border-red-500 flex items-center justify-center text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6"
                aria-hidden
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {onNext && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next photo"
              className="absolute right-2 sm:right-6 size-12 rounded-full bg-black/60 hover:bg-red-600 border border-neutral-800 hover:border-red-500 flex items-center justify-center text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6"
                aria-hidden
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          )}

          <motion.div
            key={item.id}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl max-h-full flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full rounded-lg overflow-hidden border border-neutral-800 shadow-2xl shadow-red-900/30"
              style={{
                aspectRatio: `${item.width} / ${item.height}`,
                maxHeight: "75vh",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
              />
            </div>
            <figcaption className="text-center max-w-3xl mx-auto">
              <p className="text-white text-base sm:text-lg leading-relaxed">
                {linkify(item.caption, { currentPath: "/job-gallery" })}
              </p>
              {item.service && (
                <Link
                  href={item.service}
                  className="mt-3 inline-flex items-center gap-1 text-sm text-red-500 hover:text-red-400 font-semibold transition-colors"
                >
                  Learn more about this service
                  <ArrowRightIcon className="size-4" />
                </Link>
              )}
            </figcaption>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
