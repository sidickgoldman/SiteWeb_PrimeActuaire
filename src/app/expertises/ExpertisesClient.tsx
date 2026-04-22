"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Piliers from "@/components/Piliers";
import CTAFinal from "@/components/CTAFinal";
import { useI18n } from "@/i18n";

export default function ExpertisesClient() {
  const { t } = useI18n();
  const p = t.expertisesPage;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
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
        <Piliers />

        {/* Profondeur — détail par pilier */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy text-center mb-4"
            >
              {p.deepTitle}
            </motion.h2>
            <p className="text-center text-text-muted text-[16px] mb-20 max-w-2xl mx-auto">
              {p.deepSubtitle}
            </p>

            <div className="space-y-16">
              {p.details.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
                >
                  <div className="lg:col-span-1">
                    <span className={`text-[12px] font-semibold uppercase tracking-[3px] ${
                      i === 0 ? "text-gold" : i === 1 ? "text-teal" : "text-coral"
                    }`}>
                      0{i + 1} — {d.label}
                    </span>
                    <h3 className="mt-3 font-[var(--font-heading)] font-bold text-2xl text-navy leading-snug">
                      {d.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-[16px] text-text-muted leading-relaxed mb-6">
                      {d.desc}
                    </p>
                    <ul className="space-y-3">
                      {d.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-[15px] text-navy/80">
                          <span className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${
                            i === 0 ? "bg-gold" : i === 1 ? "bg-teal" : "bg-coral"
                          }`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
