"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n";

const valeurIcons = [
  // Confidentialité — lock-closed
  <div key={0} className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
    <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  </div>,
  // Rigueur — shield-check
  <div key={1} className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
    <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  </div>,
  // Clarté — magnifying-glass
  <div key={2} className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
    <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  </div>,
  // Engagement — arrow-trending-up
  <div key={3} className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
    <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.281 5.941" />
    </svg>
  </div>,
  // Indépendance — flag
  <div key={4} className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
    <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
    </svg>
  </div>,
];

export default function AProposClient() {
  const { t } = useI18n();
  const p = t.aProposPage;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1628] via-[#122240] to-[#0E1A34]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-teal/[0.04] blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                <p className="mt-6 text-lg text-white/45 leading-relaxed max-w-xl font-light whitespace-pre-line">
                  {p.heroDesc}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8">
                  <blockquote className="font-[var(--font-heading)] font-bold text-xl text-white leading-snug whitespace-pre-line">
                    &ldquo;{p.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <span className="font-[var(--font-heading)] font-extrabold text-gold text-lg">Z</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-[14px]">{p.quoteAuthor}</p>
                      <p className="text-white/40 text-[12px]">{p.quoteRole}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-bg-light pt-24 pb-16">
          <div className="max-w-[1440px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-[13px] font-semibold text-teal uppercase tracking-[4px] mb-4">
                {p.missionEyebrow}
              </p>
              <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy max-w-2xl mx-auto">
                {p.missionTitle}
              </h2>
              <p className="mt-6 text-text-muted text-[16px] max-w-xl mx-auto leading-relaxed whitespace-pre-line">
                {p.missionDesc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="bg-bg-light pt-8 pb-24">
          <div className="max-w-[1440px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-[13px] font-semibold text-teal uppercase tracking-[4px] mb-4">
                {p.valeursEyebrow}
              </p>
              <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy max-w-3xl mx-auto">
                {p.valeursTitle}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {p.valeurs.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 border-t-2 border-teal/40 hover:border-teal hover:shadow-lg transition-all duration-300"
                >
                  {valeurIcons[i]}
                  <h3 className="mt-4 font-[var(--font-heading)] font-bold text-base text-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Promesse */}
        <section className="bg-bg-light py-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-[12px] font-bold text-teal uppercase tracking-[5px] mb-10"
            >
              {p.promesseEyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-5xl leading-[1.2] text-navy whitespace-pre-line"
            >
              {p.promesse}
            </motion.h2>
          </div>
        </section>

        {/* Parcours */}
        <section className="bg-bg-light py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-[13px] font-semibold text-teal uppercase tracking-[4px] mb-4">
                {p.parcoursEyebrow}
              </p>
              <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy">
                {p.parcoursTitle}
              </h2>
            </motion.div>

            <div className="space-y-12">
              {p.parcours.map((pr, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <span className="w-3 h-3 rounded-full bg-teal shrink-0 mt-2" />
                    {i < p.parcours.length - 1 && <div className="w-px h-full bg-teal/20 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-[12px] font-semibold text-teal uppercase tracking-widest">
                      {pr.periode}
                    </span>
                    <h3 className="mt-1 font-[var(--font-heading)] font-bold text-xl text-navy">
                      {pr.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-text-muted leading-relaxed whitespace-pre-line">
                      {pr.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-light py-20">
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
