"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n";
import ScreenshotFrame from "@/components/ScreenshotFrame";

const categoryStyles = [
  { color: "border-gold", accent: "text-gold", bg: "bg-gold/5" },
  { color: "border-teal", accent: "text-teal", bg: "bg-teal/5" },
  { color: "border-coral", accent: "text-coral", bg: "bg-coral/5" },
];

const numberColors = ["text-gold", "text-white/30", "text-teal", "text-coral"];

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
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="/#contact" className="px-7 py-3.5 rounded-full bg-coral text-white font-semibold text-[15px] hover:bg-coral-dark transition-colors duration-200 shadow-lg shadow-coral/20">
                    {p.heroCta1}
                  </a>
                  <a href="#fonctionnalites" className="px-7 py-3.5 rounded-full border border-gold/20 text-gold/70 font-medium text-[15px] hover:text-gold hover:border-gold/40 transition-all duration-200">
                    {p.heroCta2}
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
        </section>

        {/* Key numbers */}
        <section className="bg-navy-mid border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {p.keyNumbers.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className={`font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl ${numberColors[i]}`}>{s.value}</p>
                <p className="mt-2 text-[13px] text-white/35">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features grid */}
        <section className="bg-bg-light py-24" id="fonctionnalites">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-4">
                {p.featuresEyebrow}
              </p>
              <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy">
                {p.featuresTitle}
              </h2>
            </motion.div>

            <div className="space-y-16">
              {p.categories.map((cat, ci) => {
                const style = categoryStyles[ci];
                return (
                  <div key={ci}>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={`font-[var(--font-heading)] font-bold text-xl ${style.accent} mb-6`}
                    >
                      {cat.label}
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {cat.items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className={`rounded-2xl p-7 border-l-4 ${style.color} ${style.bg} hover:shadow-lg transition-shadow duration-300`}
                        >
                          <h4 className="font-[var(--font-heading)] font-bold text-lg text-navy">
                            {item.title}
                          </h4>
                          <p className="mt-3 text-[14px] text-text-muted leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
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
