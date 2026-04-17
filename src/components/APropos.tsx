"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const factColors = ["text-gold", "text-teal", "text-coral", "text-navy"];

export default function APropos() {
  const { t } = useI18n();
  return (
    <section className="bg-bg-light py-24" id="apropos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Identity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-4">
              {t.aPropos.eyebrow}
            </p>
            <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.75rem] text-navy leading-tight">
              {t.aPropos.titleLine1}
              <span className="block text-text-muted font-normal text-xl lg:text-2xl mt-2">
                {t.aPropos.titleLine2}
              </span>
            </h2>
            <p className="mt-6 text-[16px] text-text-muted leading-relaxed">
              {t.aPropos.p1}
            </p>
            <p className="mt-4 text-[16px] text-text-muted leading-relaxed">
              {t.aPropos.p2}
            </p>

            {/* Key facts */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {t.aPropos.facts.map((fact, i) => (
                <div key={i}>
                  <p className={`font-[var(--font-heading)] font-extrabold text-2xl ${factColors[i]}`}>
                    {fact.title}
                  </p>
                  <p className="text-[13px] text-text-muted mt-1">
                    {fact.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Philosophy card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-navy rounded-2xl p-10 text-white">
              <p className="text-[13px] font-semibold text-gold/60 uppercase tracking-[3px] mb-6">
                {t.aPropos.philosophyLabel}
              </p>
              <blockquote className="font-[var(--font-heading)] font-bold text-xl lg:text-2xl leading-snug">
                &ldquo;{t.aPropos.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-white/55 text-[14px] leading-relaxed">
                {t.aPropos.philosophyText}
              </p>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[13px] text-white/50 uppercase tracking-widest mb-3">
                  {t.aPropos.expertiseLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.aPropos.expertiseTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-[12px] font-medium text-gold/70 bg-gold/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
