"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const styles = [
  { color: "border-gold", accent: "text-gold", bg: "bg-gold/5" },
  { color: "border-teal", accent: "text-teal", bg: "bg-teal/5" },
  { color: "border-coral", accent: "text-coral", bg: "bg-coral/5" },
];

export default function Piliers({ teaser = false }: { teaser?: boolean }) {
  const { t } = useI18n();
  const title = teaser ? t.piliers.titleTeaser : t.piliers.title;
  const eyebrow = teaser ? t.piliers.eyebrowTeaser : t.piliers.eyebrow;
  return (
    <section className="bg-bg-light py-24" id="piliers">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold text-gold uppercase tracking-[4px] text-center mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy text-center mb-16"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {t.piliers.items.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-2xl p-8 border-l-4 ${styles[i].color} ${styles[i].bg} hover:shadow-xl transition-shadow duration-300`}
            >
              <span className={`text-[13px] font-semibold uppercase tracking-[3px] ${styles[i].accent}`}>
                {p.label}
              </span>
              <h3 className="mt-4 font-[var(--font-heading)] font-bold text-xl text-navy leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {teaser && (
          <div className="mt-14 text-center">
            <a
              href="/expertises"
              className="inline-flex items-center gap-2 text-navy font-semibold text-[15px] hover:text-gold transition-colors border-b-2 border-gold/40 hover:border-gold pb-1"
            >
              {t.piliers.ctaTeaser}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
