"use client";

import { motion } from "framer-motion";

const piliers = [
  {
    num: "01",
    label: "Tarification",
    title: "Construire des primes techniquement justifiées",
    desc: "Backtester un tarif sur l'historique réel. Identifier les groupes déficitaires. Simuler l'impact d'une remise avant de la concéder.",
    color: "border-gold",
    accent: "text-gold",
    bg: "bg-gold/5",
  },
  {
    num: "02",
    label: "Pilotage technique",
    title: "Voir plus vite où le portefeuille se dégrade",
    desc: "Suivi S/P par groupe et par poste. Détection de fraude et prestataires atypiques. Analyse des dérives en cours d'année, pas à la clôture.",
    color: "border-teal",
    accent: "text-teal",
    bg: "bg-teal/5",
  },
  {
    num: "03",
    label: "Technologie décisionnelle",
    title: "Industrialiser les analyses avec Tarif Santé Pro",
    desc: "Une plateforme qui structure la décision tarifaire. Scénarios de renouvellement, stress tests, ENR estimatif, traçabilité des hypothèses.",
    color: "border-coral",
    accent: "text-coral",
    bg: "bg-coral/5",
  },
];

export default function Piliers() {
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
          Ce que fait PrimeActuaire
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy text-center mb-16"
        >
          Trois piliers. Une gouvernance technique complète.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {piliers.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-2xl p-8 border-l-4 ${p.color} ${p.bg} hover:shadow-xl transition-shadow duration-300`}
            >
              <span className={`text-[13px] font-semibold uppercase tracking-[3px] ${p.accent}`}>
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
      </div>
    </section>
  );
}
