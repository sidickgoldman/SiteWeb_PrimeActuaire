"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const colors = ["text-coral", "text-gold", "text-teal", "text-gold-light"];
const borderColors = ["border-coral", "border-gold", "border-teal", "border-[#C5B06A]"];

const isNumericAnchor = (v: string) => /^[\d+\-\u2212]/.test(v.trim());

export default function StatBar() {
  const { t } = useI18n();
  return (
    <section className="bg-[#0c1b33] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
        {t.statBar.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`border-l-[3px] pl-5 pr-6 ${borderColors[i]}`}
          >
            <p className={`font-[var(--font-heading)] font-extrabold whitespace-nowrap leading-none ${colors[i]} ${
              isNumericAnchor(s.value)
                ? "text-4xl lg:text-[2.75rem]"
                : "text-[1.1rem] lg:text-[1.3rem]"
            }`}>
              {s.value}
            </p>
            <p className="mt-3 text-[12px] text-white/45 leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
