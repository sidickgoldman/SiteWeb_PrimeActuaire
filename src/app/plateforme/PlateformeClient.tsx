"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n";
import ScreenshotFrame from "@/components/ScreenshotFrame";

const categoryStyles = [
  { accent: "text-gold",    num: "text-gold/[0.10]" },
  { accent: "text-gold",    num: "text-gold/[0.10]" },
  { accent: "text-gold",    num: "text-gold/[0.10]" },
];

const barColors = [
  "bg-teal",      // 15 min — résultat positif (vitesse)
  "bg-red-500",   // 3 jours — douleur de référence (lenteur manuelle)
  "bg-gold/80",   // 3 à 5 — insight neutre
  "bg-teal",      // −14 pts S/P — résultat positif
];

const isNumericAnchor = (v: string) => /^[\d+\-−]/.test(v.trim());

export default function PlateformeClient() {
  const { t } = useI18n();
  const p = t.plateformePage;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1628] via-[#122240] to-[#0E1A34]" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-6">
                  {p.heroEyebrow}
                </p>
                <h1 className="font-[var(--font-heading)] font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-[1.1] tracking-tight">
                  {p.heroTitle}
                </h1>
                <p className="mt-6 text-lg text-white/45 leading-relaxed max-w-xl font-light">
                  {p.heroDesc}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/20 bg-gold/[0.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/70 animate-pulse" />
                  <span className="text-[12px] font-medium text-gold/80 tracking-wide">{p.heroBadge}</span>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a href="/#contact" className="px-7 py-3.5 rounded-full bg-coral text-white font-semibold text-[15px] hover:bg-coral-dark transition-colors duration-200 shadow-lg shadow-coral/20">
                    {p.heroCta1}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -6 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block"
              >
                <ScreenshotFrame
                  src="/screenshots/dashboard-kpis.png"
                  alt={t.screenshots.dashboardKpis.alt}
                  caption={t.screenshots.dashboardKpis.caption}
                  variant="dark"
                />
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
            <span className="text-[11px] text-white/40 tracking-widest uppercase">{p.scrollLabel}</span>
            <motion.div
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent origin-top"
            />
          </motion.div>
        </section>

        {/* Key numbers */}
        <section className="bg-navy-mid border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:gap-x-4">
            {p.keyNumbers.map((s, i) => {
              const isNumeric = isNumericAnchor(s.value);
              return (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-6 pr-6"
              >
                <span className={`absolute left-0 top-1 bottom-1 w-[2px] ${barColors[i]}`} />
                <div className="h-14 flex items-center">
                  <p className={`font-[var(--font-heading)] font-extrabold whitespace-nowrap leading-none text-white ${
                    isNumeric ? "text-4xl lg:text-[2.75rem] tracking-tight" : "text-[1.1rem] lg:text-[1.25rem]"
                  }`}>{s.value}</p>
                </div>
                <p className="text-[12px] text-white/50 leading-snug mt-1">{s.label}</p>
              </motion.div>
              );
            })}
          </div>
        </section>

        {/* Features — 3 editorial capability rows */}
        <section className="bg-bg-light py-24" id="fonctionnalites">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >
              <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-4">
                {p.featuresEyebrow}
              </p>
              <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.5rem] text-navy max-w-xl leading-tight">
                {p.featuresTitle}
              </h2>
            </motion.div>

            <div className="divide-y divide-navy/[0.07]">
              {p.categories.map((cat, ci) => {
                const style = categoryStyles[ci];
                const pilierIds = ["tarification", "pilotage", "tarif-sante-pro"];
                return (
                  <motion.div
                    key={ci}
                    id={pilierIds[ci]}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: ci * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="scroll-mt-28 py-14 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 items-start"
                  >
                    {/* Left — number + label + benefit headline */}
                    <div>
                      <span className={`block font-[var(--font-heading)] font-extrabold text-[7rem] leading-none select-none ${style.num}`}>
                        0{ci + 1}
                      </span>
                      <p className={`text-[11px] font-bold uppercase tracking-[3.5px] ${style.accent} mt-1 mb-4`}>
                        {cat.label}
                      </p>
                      <h3 className="font-[var(--font-heading)] font-bold text-[1.35rem] text-navy leading-snug max-w-xs">
                        {(cat as { headline?: string }).headline}
                      </h3>
                    </div>

                    {/* Right — editorial body + result */}
                    <div className="lg:pt-10 max-w-2xl">
                      {((cat as { body?: string[] }).body ?? []).map((para, i) => (
                        <p
                          key={i}
                          className="text-[15px] lg:text-[16px] text-text-muted leading-[1.7] mb-5 last:mb-0"
                        >
                          {para}
                        </p>
                      ))}
                      {(cat as { result?: string }).result && (
                        <div className="mt-8 pt-6 border-t border-navy/[0.08] flex items-start gap-3">
                          <span className={`mt-1.5 w-6 h-px ${style.accent.replace("text-", "bg-")}`} />
                          <p className="text-[14px] text-navy font-semibold leading-snug">
                            <span className={`${style.accent} font-bold tracking-wide uppercase text-[11px] mr-2`}>Résultat</span>
                            {(cat as { result?: string }).result}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Screenshots showcase */}
        <section className="bg-bg-solution py-24" id="apercu">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-4">
                {p.screenshotsEyebrow}
              </p>
              <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy">
                {p.screenshotsTitle}
              </h2>
            </motion.div>

            <div className="space-y-12">
              {/* Dashboard KPIs — full width */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
              >
                <ScreenshotFrame
                  src="/screenshots/dashboard-kpis.png"
                  alt={t.screenshots.dashboardKpis.alt}
                  caption={t.screenshots.dashboardKpis.caption}
                  variant="light"
                />
              </motion.div>

              {/* S/P Evolution + Stress Test — side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                >
                  <ScreenshotFrame
                    src="/screenshots/sp-evolution.png"
                    alt={t.screenshots.spEvolution.alt}
                    caption={t.screenshots.spEvolution.caption}
                    variant="light"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <ScreenshotFrame
                    src="/screenshots/stress-test.png"
                    alt={t.screenshots.stressTest.alt}
                    caption={t.screenshots.stressTest.caption}
                    variant="light"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="bg-navy py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-4">
                {p.workflowEyebrow}
              </p>
              <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-white">
                {p.workflowTitle}
              </h2>
            </motion.div>

            <div className="space-y-8">
              {p.workflowSteps.map((w, i) => {
                const step = String(i + 1).padStart(2, "0");
                return (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-5 group"
                  >
                    <div className="flex flex-col items-center">
                      <span className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-[14px] font-bold text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                        {step}
                      </span>
                      {i < p.workflowSteps.length - 1 && <div className="w-px h-full bg-gold/10 mt-2" />}
                    </div>
                    <div className="pb-4">
                      <h3 className="font-[var(--font-heading)] font-bold text-lg text-white">{w.title}</h3>
                      <p className="mt-1 text-[14px] text-white/40 leading-relaxed">{w.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-solution py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto px-6 text-center"
          >
            <h2 className="font-[var(--font-heading)] font-extrabold text-3xl text-navy">
              {p.ctaTitle}
            </h2>
            <p className="mt-4 text-text-muted text-[16px]">
              {p.ctaDesc}
            </p>
            <div className="mt-8">
              <a href="/#contact" className="px-8 py-4 rounded-full bg-coral text-white font-semibold text-[16px] hover:bg-coral-dark transition-colors duration-200 shadow-xl shadow-coral/25">
                {p.ctaButton}
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
