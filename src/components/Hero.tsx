"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";
import ScreenshotFrame from "./ScreenshotFrame";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1628] via-[#122240] to-[#0E1A34] pointer-events-none" />

      {/* Decorative glows — animate in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-coral/[0.04] blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.p variants={fadeUp} className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-6">
              {t.hero.eyebrow}
            </motion.p>

            {/* Title */}
            <motion.h1 variants={fadeUp} className="font-[var(--font-heading)] font-extrabold text-[clamp(2.2rem,4.2vw,3.6rem)] text-white leading-[1.1] tracking-tight">
              {t.hero.titleStart}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                {t.hero.titleHighlight}
              </span>
              {t.hero.titleEnd}
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeUp} className="mt-6 text-lg text-white/45 leading-relaxed max-w-xl font-light">
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-coral text-white font-semibold text-[15px] hover:bg-coral-dark transition-colors duration-200 shadow-lg shadow-coral/20"
              >
                {t.hero.cta1}
              </a>
              <a
                href="#piliers"
                className="px-7 py-3.5 rounded-full border border-gold/20 text-gold/70 font-medium text-[15px] hover:text-gold hover:border-gold/40 transition-all duration-200"
              >
                {t.hero.cta2}
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.p variants={fadeUp} className="mt-14 text-[12px] text-white/45 tracking-wide">
              {t.hero.trustLine}
            </motion.p>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 2 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1200 }}
            className="hidden lg:flex lg:items-center self-center relative"
          >
            <div className="rounded-xl ring-1 ring-white/10 shadow-[0_32px_80px_-12px_rgba(0,0,0,0.7),0_0_0_1px_rgba(197,150,58,0.08)] overflow-hidden">
              <ScreenshotFrame
                src="/screenshots/dashboard-kpis.png"
                alt={t.screenshots.dashboardKpis.alt}
                caption={t.screenshots.dashboardKpis.caption}
                variant="dark"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-navy border border-gold/20 text-gold px-4 py-2 rounded-full text-[12px] font-semibold shadow-xl"
            >
              {t.solution.badge}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] text-white/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
