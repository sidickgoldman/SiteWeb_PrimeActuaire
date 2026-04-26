"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAFinal from "@/components/CTAFinal";
import { useI18n } from "@/i18n";

type Pillar = {
  label: string;
  title: string;
  intro: string[];
  helpLabel: string;
  bullets: string[];
  outcomeLabel: string;
  outcome: string;
  toolNote: string;
};

type WhyItem = { title: string; desc: string };

export default function ExpertisesClient() {
  const { t } = useI18n();
  const p = t.expertisesPage;
  const pillars = p.pillars as Pillar[];
  const whyItems = p.whyItems as WhyItem[];

  return (
    <>
      <Header />
      <main>
        {/* Hero — tension d'ouverture */}
        <section className="relative bg-navy pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1628] via-[#122240] to-[#0E1A34]" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-6">
                {p.eyebrow}
              </p>
              <h1 className="font-[var(--font-heading)] font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-[1.1] tracking-tight">
                {p.title}
              </h1>
              <p className="mt-6 text-lg text-white/45 leading-relaxed max-w-2xl font-light">
                {p.desc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 3 Piliers */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy text-center mb-4"
            >
              {p.pillarsTitle}
            </motion.h2>
            <p className="text-center text-text-muted text-[16px] mb-20 max-w-2xl mx-auto">
              {p.pillarsSubtitle}
            </p>

            <div className="divide-y divide-navy/[0.07]">
              {pillars.map((pi, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start py-16 first:pt-0 last:pb-0"
                >
                  {/* Col gauche : label + titre */}
                  <div className="lg:col-span-1">
                    <span className="text-[12px] font-semibold uppercase tracking-[3px] text-gold">
                      0{i + 1} — {pi.label}
                    </span>
                    <h3 className="mt-3 font-[var(--font-heading)] font-bold text-2xl text-navy leading-snug">
                      {pi.title}
                    </h3>
                  </div>

                  {/* Col droite : intro + bullets + résultat */}
                  <div className="lg:col-span-2">
                    <div className="mb-8 space-y-3">
                      {pi.intro.map((line, k) => (
                        <p key={k} className="text-[16px] text-text-muted leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>

                    <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-navy/60 mb-4">
                      {pi.helpLabel}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {pi.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-[15px] text-navy/80">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 bg-gold" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Résultat callout */}
                    <div className="border-l-2 border-gold pl-5 py-1 mb-6">
                      <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-gold mb-1">
                        {pi.outcomeLabel}
                      </p>
                      <p className="text-[16px] text-navy font-medium leading-snug">
                        {pi.outcome}
                      </p>
                    </div>

                    {/* Tool note discret */}
                    <p className="text-[12px] italic text-text-muted">
                      {pi.toolNote}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous */}
        <section className="bg-bg-light py-24 border-t border-navy/[0.06]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy text-center mb-4"
            >
              {p.whyTitle}
            </motion.h2>
            <p className="text-center text-text-muted text-[16px] mb-16 max-w-2xl mx-auto">
              {p.whySubtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyItems.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white border border-navy/[0.07] p-8"
                >
                  <span className="text-[11px] font-bold text-gold uppercase tracking-[3.5px] mb-5 block">
                    0{i + 1}
                  </span>
                  <h3 className="font-[var(--font-heading)] font-bold text-[1.15rem] text-navy leading-snug mb-4">
                    {w.title}
                  </h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">
                    {w.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
