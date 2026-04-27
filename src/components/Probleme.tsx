"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n";

const momentColors = [
  { dotBg: "bg-teal",    pulseBg: "bg-teal",    labelText: "text-teal",    border: "border-teal",    subText: "text-teal" },
  { dotBg: "bg-gold",    pulseBg: "bg-gold",    labelText: "text-gold",    border: "border-gold",    subText: "text-gold" },
  { dotBg: "bg-coral",   pulseBg: "bg-coral",   labelText: "text-coral",   border: "border-coral",   subText: "text-coral" },
  { dotBg: "bg-red-700", pulseBg: "bg-red-700", labelText: "text-red-700", border: "border-red-700", subText: "text-red-700" },
];

export default function Probleme() {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-bg-light py-12 overflow-hidden" id="probleme">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold text-teal uppercase tracking-[4px] mb-4"
        >
          {t.probleme.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.75rem] text-navy leading-tight max-w-3xl"
        >
          {t.probleme.titleLine1}
          <span className="block mt-2 text-text-muted font-normal text-xl lg:text-2xl">
            {t.probleme.titleLine2}
          </span>
        </motion.h2>

        {/* Timeline */}
        <div ref={containerRef} className="mt-20 relative">
          {/* Ligne de fond */}
          <div className="hidden md:block absolute top-[22px] left-[6%] right-[6%] h-[2px] bg-navy/10 rounded-full" />
          {/* Ligne animée au scroll */}
          <motion.div
            style={{ width: lineWidth }}
            className="hidden md:block absolute top-[22px] left-[6%] h-[2px] bg-gradient-to-r from-teal via-gold via-coral to-red-700 rounded-full origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative items-stretch">
            {t.probleme.tensions.map((tension, i) => {
              const m = momentColors[i];
              const moment = t.probleme.moments[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center md:items-stretch"
                >
                  {/* Dot + pulse */}
                  <div className="relative h-11 flex items-center justify-center md:justify-start w-full mb-2">
                    <span className={`relative w-[12px] h-[12px] rounded-full ${m.dotBg} ring-[6px] ring-bg-light shadow-md z-10`}>
                      <motion.span
                        animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                        className={`absolute inset-0 rounded-full ${m.pulseBg}`}
                        style={{ pointerEvents: "none" }}
                      />
                    </span>
                  </div>

                  {/* Card */}
                  <div className={`w-full h-full bg-white rounded-xl p-6 border-t-2 ${m.border} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                    <div className="flex items-baseline justify-between mb-3">
                      <span className={`text-[11px] font-bold uppercase tracking-[3px] ${m.labelText}`}>
                        {moment.label}
                      </span>
                      <span className="text-[10px] text-text-muted/60 uppercase tracking-[2px]">
                        0{i + 1}/04
                      </span>
                    </div>
                    <p className={`text-[13px] font-semibold ${m.subText} mb-3 italic`}>
                      « {moment.sub} »
                    </p>
                    <h3 className="font-[var(--font-heading)] font-bold text-[17px] text-navy leading-snug mb-2">
                      {tension.title}
                    </h3>
                    <p className="text-[14px] text-text-muted leading-relaxed whitespace-pre-line">
                      {tension.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Conclusion narrative */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center text-[15px] text-text-muted max-w-2xl mx-auto italic"
        >
          En décembre, le S/P dépasse 110 %. Le sujet n&apos;était pas seulement le tarif. C&apos;était aussi ce que le portefeuille cachait encore.
        </motion.p>
      </div>
    </section>
  );
}
