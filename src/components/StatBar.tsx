"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "23%", label: "Écart tarif moyen constaté", color: "text-coral" },
  { value: "15 min", label: "vs 3 jours en méthode manuelle", color: "text-gold" },
  { value: "+8%/an", label: "Inflation médicale zone CIMA", color: "text-teal" },
  { value: "112% → 94%", label: "S/P corrigé après diagnostic", color: "text-gold-light" },
];

export default function StatBar() {
  return (
    <section className="bg-navy-mid border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className={`font-[var(--font-heading)] font-extrabold text-4xl lg:text-5xl ${s.color}`}>
              {s.value}
            </p>
            <p className="mt-2 text-[13px] text-white/35 leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
