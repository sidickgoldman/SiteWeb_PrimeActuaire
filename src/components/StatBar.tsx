"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const colors = ["text-coral", "text-gold", "text-teal", "text-gold-light"];

export default function StatBar() {
  const { t } = useI18n();
  return (
    <section className="bg-navy-mid border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {t.statBar.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className={`font-[var(--font-heading)] font-extrabold text-4xl lg:text-5xl ${colors[i]}`}>
              {s.value}
            </p>
            <p className="mt-2 text-[13px] text-white/35 leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
