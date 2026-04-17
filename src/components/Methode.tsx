"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const nums = ["01", "02", "03", "04", "05"];

export default function Methode() {
  const { t } = useI18n();
  return (
    <section className="bg-bg-light py-24" id="methode">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[13px] font-semibold text-teal uppercase tracking-[4px] mb-4">
              {t.methode.eyebrow}
            </p>
            <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.75rem] text-navy leading-tight">
              {t.methode.titleLine1}
              <span className="block text-text-muted font-normal text-xl lg:text-2xl mt-2">
                {t.methode.titleLine2}
              </span>
            </h2>
            <p className="mt-6 text-[16px] text-text-muted leading-relaxed">
              {t.methode.desc}
            </p>

            {/* Conformité CIMA */}
            <div className="mt-10 p-5 rounded-xl bg-navy/5 border border-navy/10">
              <p className="text-[12px] font-semibold text-navy uppercase tracking-[2px] mb-2">
                {t.methode.compliance.label}
              </p>
              <p className="text-[14px] text-text-muted leading-relaxed">
                {t.methode.compliance.text}
              </p>
            </div>
          </motion.div>

          {/* Right — Steps */}
          <div className="space-y-6">
            {t.methode.steps.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 group"
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-10 h-10 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center text-[13px] font-bold text-teal group-hover:bg-teal group-hover:text-white transition-all duration-300">
                    {nums[i]}
                  </span>
                  {i < 4 && (
                    <div className="w-px flex-1 min-h-[24px] bg-teal/15 mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-[var(--font-heading)] font-bold text-lg text-navy">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-text-muted leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
