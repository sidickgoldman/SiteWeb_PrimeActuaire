"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Importez vos bordereaux",
    desc: "Même incomplets. Nous travaillons à partir de vos données réelles de sinistres.",
  },
  {
    num: "02",
    title: "La plateforme analyse",
    desc: "Tarification, segmentation, dérives, provisions ENR — calibré sur votre portefeuille.",
  },
  {
    num: "03",
    title: "Vous décidez",
    desc: "Avec un tarif chiffré, défendable, auditable. En comité, face au courtier, en renouvellement.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold text-gold uppercase tracking-[4px] text-center mb-4"
        >
          Comment ça marche
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-white text-center mb-16"
        >
          Trois étapes. Aucune complexité.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-gold/20 transition-colors duration-300"
            >
              <span className="font-[var(--font-heading)] font-extrabold text-6xl text-gold/15">
                {step.num}
              </span>
              <h3 className="mt-4 font-[var(--font-heading)] font-bold text-xl text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] text-white/40 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Connecting line (desktop) */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex justify-center mt-8 origin-left"
        >
          <div className="flex items-center gap-0">
            <div className="w-3 h-3 rounded-full bg-gold/40" />
            <div className="w-40 h-px bg-gradient-to-r from-gold/40 to-gold/10" />
            <div className="w-3 h-3 rounded-full bg-gold/30" />
            <div className="w-40 h-px bg-gradient-to-r from-gold/30 to-gold/10" />
            <div className="w-3 h-3 rounded-full bg-gold/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
