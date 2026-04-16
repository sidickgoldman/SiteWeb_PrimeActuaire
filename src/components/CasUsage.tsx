"use client";

import { motion } from "framer-motion";

const cases = [
  {
    title: "Renouvellement sous tension",
    desc: "Un portefeuille de 1 200 adhérents avec un S/P à 112%. Le courtier impose une remise de 5%. La plateforme simule l'impact : déficit garanti à 18 mois. Le DT arrive en comité avec les chiffres. La remise ne passe pas.",
    accent: "border-coral",
    tag: "Renouvellement",
  },
  {
    title: "Groupes qui détruisent la marge",
    desc: "Sur 15 groupes du portefeuille, 3 concentrent 70% des pertes. Sans segmentation, la hausse s'applique à tous. Avec le diagnostic : hausse ciblée sur les 3 groupes, maintien ailleurs. Le courtier conserve le contrat.",
    accent: "border-gold",
    tag: "Segmentation",
  },
  {
    title: "Remise commerciale sans mesure d'impact",
    desc: "Le commercial concède 8% sur un nouveau groupe. La plateforme montre immédiatement : cette remise transforme un groupe rentable en groupe déficitaire dès l'année 2. Le DG a les données pour arbitrer.",
    accent: "border-teal",
    tag: "Simulation",
  },
  {
    title: "Analyse par poste de soins",
    desc: "Le poste pharmacie explose sur un groupe. Surprescription ? Surfacturation ? Abus prestataire ? L'analyse poste par poste isole la cause — et permet une action ciblée au lieu d'une hausse globale.",
    accent: "border-coral",
    tag: "Diagnostic",
  },
  {
    title: "Lecture du risque avant décision",
    desc: "Avant un appel d'offres, le DT doit défendre un tarif technique. Les stress tests Monte Carlo donnent une fourchette de confiance. Le tarif n'est plus une opinion — c'est une position chiffrée.",
    accent: "border-gold",
    tag: "Stress test",
  },
];

export default function CasUsage() {
  return (
    <section className="bg-navy py-24" id="cas-usage">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold text-gold uppercase tracking-[4px] text-center mb-4"
        >
          Cas d&apos;usage
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-white text-center mb-4"
        >
          Des situations que vous connaissez.
        </motion.h2>
        <p className="text-center text-white/40 text-[16px] mb-16 max-w-xl mx-auto">
          Chaque cas est issu de missions réelles en zone CIMA. Les données sont anonymisées.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-white/[0.04] border-l-4 ${c.accent} rounded-2xl p-7 hover:bg-white/[0.07] transition-colors duration-300`}
            >
              <span className="inline-block px-3 py-1 text-[11px] font-semibold text-gold/60 bg-gold/[0.08] rounded-full mb-4">
                {c.tag}
              </span>
              <h3 className="font-[var(--font-heading)] font-bold text-lg text-white leading-snug">
                {c.title}
              </h3>
              <p className="mt-3 text-[14px] text-white/40 leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mid CTA — Correction 4: double CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-7 py-3.5 rounded-full bg-coral text-white font-semibold text-[15px] hover:bg-coral-dark transition-colors duration-200 shadow-lg shadow-coral/20"
          >
            Échangeons sur un de vos portefeuilles
          </a>
        </div>
      </div>
    </section>
  );
}
