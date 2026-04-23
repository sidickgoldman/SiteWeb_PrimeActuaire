"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

// Fine barre sémantique : rouge = problème constaté, gold = neutre, teal = résultat positif
const barColors = [
  "bg-red-500",    // 23% — écart constaté, situation problématique
  "bg-gold/80",    // Remises non chiffrées — neutre
  "bg-gold/80",    // Données réelles — neutre
  "bg-teal",       // −14 pts S/P — résultat positif
];

const isNumericAnchor = (v: string) => /^[\d+\-\u2212]/.test(v.trim());

export default function StatBar() {
  const { t } = useI18n();
  return (
    <section className="bg-[#0c1b33] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 lg:gap-x-4">
        {t.statBar.stats.map((s, i) => {
          const isNumeric = isNumericAnchor(s.value);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-6 pr-6"
            >
              {/* Fine barre sémantique */}
              <span className={`absolute left-0 top-1 bottom-1 w-[2px] ${barColors[i]}`} />

              <div className="h-14 flex items-center">
                <p
                  className={`font-[var(--font-heading)] font-extrabold whitespace-nowrap leading-none text-white ${
                    isNumeric
                      ? "text-4xl lg:text-[2.75rem] tracking-tight"
                      : "text-[1.1rem] lg:text-[1.25rem]"
                  }`}
                >
                  {s.value}
                </p>
              </div>
              <p className="text-[12px] text-white/50 leading-snug mt-1">
                {s.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
