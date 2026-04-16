"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

export default function Probleme() {
  const { t } = useI18n();
  const nums = ["01", "02", "03", "04"];
  return (
    <section className="bg-bg-light py-24" id="probleme">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold text-coral-dark uppercase tracking-[4px] mb-4"
        >
          {t.probleme.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.75rem] text-navy leading-tight max-w-2xl"
        >
          {t.probleme.titleLine1}
          <span className="block mt-2 text-text-muted font-normal text-xl lg:text-2xl">
            {t.probleme.titleLine2}
          </span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.probleme.tensions.map((tension, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-2xl p-8 border border-transparent hover:border-coral/20 hover:shadow-lg hover:shadow-coral/5 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <span className="font-[var(--font-heading)] font-extrabold text-2xl text-coral/30 group-hover:text-coral/60 transition-colors">
                  {nums[i]}
                </span>
                <div>
                  <h3 className="font-[var(--font-heading)] font-bold text-lg text-navy">
                    {tension.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-text-muted leading-relaxed">
                    {tension.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
