"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  width: number;
  height: number;
};

/**
 * Draggable before/after image comparison slider.
 *
 * - Pointer-event-based (mouse + touch) for cross-device support.
 * - Initial position 50%, with arrow-key support for keyboard a11y.
 * - The "after" image is always full-width; the "before" image is clipped
 *   from the left edge to the slider position.
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  width,
  height,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, next)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateFromClientX(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updateFromClientX(e.clientX);
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  };

  // Cleanup if the user releases the pointer outside the container
  useEffect(() => {
    if (!isDragging) return;
    const onUp = () => setIsDragging(false);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-lg select-none cursor-ew-resize border border-neutral-800 shadow-2xl shadow-red-900/20"
      style={{ aspectRatio: `${width} / ${height}` }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* AFTER (full width, base layer) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover pointer-events-none"
      />

      {/* BEFORE (clipped from left to position%) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover"
        />
      </div>

      {/* BEFORE / AFTER labels */}
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-xs uppercase tracking-widest font-bold text-red-500 pointer-events-none">
        Before
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-xs uppercase tracking-widest font-bold text-white pointer-events-none">
        After
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-red-500 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <button
          type="button"
          onKeyDown={handleKeyDown}
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full bg-red-500 border-2 border-white shadow-xl flex items-center justify-center text-white pointer-events-auto cursor-ew-resize focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
            aria-hidden
          >
            <path d="M9 6L3 12l6 6M15 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
