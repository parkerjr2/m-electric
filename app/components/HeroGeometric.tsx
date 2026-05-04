"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { linkify } from "@/lib/inline-links";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(220,38,38,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

interface HeroGeometricProps {
  badge?: string;
  title1?: string;
  title2?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function HeroGeometric({
  badge = "Tulsa, Oklahoma · Family-Owned Since 1999",
  title1 = "Get Wired Up.",
  title2 = "Tulsa's Trusted Electrician.",
  subtitle = "The Tulsa electrician families and businesses have called for 25 years. Owned and operated by US Army veteran Marshall Morgan, with residential, commercial, and 24/7 emergency electrical service across the Tulsa metro.",
  primaryCta,
  secondaryCta,
}: HeroGeometricProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* base wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.08] via-transparent to-red-900/[0.10] blur-3xl" />

      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
      />

      {/* floating gradient ellipses (red-only palette for M Electric) */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-red-500/[0.18]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-red-700/[0.18]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-orange-500/[0.12]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-red-400/[0.18]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-white/[0.08]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* foreground content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-red-500/80 text-red-500/80" />
            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 md:mb-8 tracking-tight leading-[0.95]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-300">
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/65 mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              {linkify(subtitle, { currentPath: "/" })}
            </p>
          </motion.div>

          {(primaryCta || secondaryCta) && (
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                >
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-semibold text-lg px-7 py-4 rounded-md transition-colors duration-200 cursor-pointer"
                >
                  {secondaryCta.label}
                </a>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* top + bottom fade so the hero blends into surrounding sections */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
