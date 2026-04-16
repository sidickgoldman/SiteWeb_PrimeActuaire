"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

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
            <motion.h1 variants={fadeUp} className="font-[var(--font-heading)] font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] text-white leading-[1.08] tracking-tight">
              {t.hero.titleStart}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                {t.hero.titleHighlight}
              </span>
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
            <motion.p variants={fadeUp} className="mt-14 text-[12px] text-white/20 tracking-wide">
              {t.hero.trustLine}
            </motion.p>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl shadow-2xl shadow-gold/10 border border-white/10 p-5 aspect-[4/3] flex flex-col">
              {/* Title bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-coral/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-gold/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-teal/50" />
                <span className="ml-3 text-[10px] text-white/30 font-medium">{t.hero.dashTitle} — Dashboard</span>
              </div>

              {/* Mock content */}
              <div className="flex-1 grid grid-cols-3 gap-3">
                <div className="col-span-2 bg-white/[0.04] rounded-xl p-4">
                  <div className="h-2.5 w-20 bg-white/10 rounded mb-3" />
                  <div className="flex items-end gap-1.5 h-28">
                    {[60, 80, 45, 90, 70, 85, 55, 75, 95, 65, 88, 72].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.6, delay: 1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 rounded-t bg-gradient-to-t from-gold/50 to-gold/15"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.4 }}
                    className="bg-white/[0.04] rounded-xl p-3 flex-1"
                  >
                    <div className="h-2 w-10 bg-coral/20 rounded mb-2" />
                    <p className="font-[var(--font-heading)] font-extrabold text-xl text-coral">94%</p>
                    <p className="text-[9px] text-white/30 mt-0.5">{t.hero.dashLabel1}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.4 }}
                    className="bg-white/[0.04] rounded-xl p-3 flex-1"
                  >
                    <div className="h-2 w-10 bg-teal/20 rounded mb-2" />
                    <p className="font-[var(--font-heading)] font-extrabold text-xl text-teal">1 247</p>
                    <p className="text-[9px] text-white/30 mt-0.5">{t.hero.dashLabel2}</p>
                  </motion.div>
                </div>
              </div>
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
        <span className="text-[11px] text-white/15 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
