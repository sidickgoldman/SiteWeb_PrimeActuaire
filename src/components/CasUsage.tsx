"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const accents = ["border-coral", "border-gold", "border-teal", "border-coral", "border-gold"];

export default function CasUsage() {
  const { t } = useI18n();
  return (
    <section className="bg-navy py-24" id="cas-usage">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold text-gold uppercase tracking-[4px] text-center mb-4"
        >
          {t.casUsage.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-white text-center mb-4"
        >
          {t.casUsage.title}
        </motion.h2>
        <p className="text-center text-white/40 text-[16px] mb-16 max-w-xl mx-auto">
          {t.casUsage.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.casUsage.cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-white/[0.04] border-l-4 ${accents[i]} rounded-2xl p-7 hover:bg-white/[0.07] transition-colors duration-300`}
            >
              <span className="inline-block px-3 py-1 text-[11px] font-semibold text-gold/60 bg-gold/[0.08] rounded-full mb-4">
                {c.tag}
              </span>
              <h3 className="font-[var(--font-heading)] font-bold text-lg text-white leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 text-[14px] text-white/40 leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-7 py-3.5 rounded-full bg-coral text-white font-semibold text-[15px] hover:bg-coral-dark transition-colors duration-200 shadow-lg shadow-coral/20"
          >
            {t.casUsage.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
