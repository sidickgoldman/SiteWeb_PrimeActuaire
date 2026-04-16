"use client";

import { motion } from "framer-motion";

const etapes = [
  {
    num: "01",
    title: "Diagnostic technique",
    desc: "Analyse de la structure du portefeuille, de la sinistralité, et des hypothèses tarifaires en place.",
  },
  {
    num: "02",
    title: "Analyse portefeuille",
    desc: "Segmentation par groupe, par poste de soins, par profil de risque. Identification des poches déficitaires.",
  },
  {
    num: "03",
    title: "Modélisation & scénarios",
    desc: "Stress tests, projections, calibration des provisions ENR. Chaque hypothèse est traçable et testable.",
  },
  {
    num: "04",
    title: "Recommandations décisionnelles",
    desc: "Des recommandations chiffrées, pas des opinions. Adaptées au contexte du comité, du renouvellement, de l'AO.",
  },
  {
    num: "05",
    title: "Restitution claire",
    desc: "Rapport auditable, dashboards interactifs, support pour l'arbitrage en comité direction.",
  },
];

export default function Methode() {
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
              Notre méthode
            </p>
            <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.75rem] text-navy leading-tight">
              Un processus structuré.
              <span className="block text-text-muted font-normal text-xl lg:text-2xl mt-2">
                Conçu pour rassurer les directions techniques et générales.
              </span>
            </h2>
            <p className="mt-6 text-[16px] text-text-muted leading-relaxed">
              Chaque mission suit une progression claire. De l&apos;analyse initiale à la restitution,
              chaque étape produit un livrable exploitable — pas un document de plus.
            </p>

            {/* Conformité CIMA */}
            <div className="mt-10 p-5 rounded-xl bg-navy/5 border border-navy/10">
              <p className="text-[12px] font-semibold text-navy uppercase tracking-[2px] mb-2">
                Conformité CIMA
              </p>
              <p className="text-[14px] text-text-muted leading-relaxed">
                Provisions conformes à l&apos;article 334-8. ENR estimatif traçable.
                Données sous votre contrôle, serveur dédié.
              </p>
            </div>
          </motion.div>

          {/* Right — Steps */}
          <div className="space-y-6">
            {etapes.map((e, i) => (
              <motion.div
                key={e.num}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-5 group"
              >                <div className="flex flex-col items-center">
                  <span className="w-10 h-10 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center text-[13px] font-bold text-teal group-hover:bg-teal group-hover:text-white transition-all duration-300">
                    {e.num}
                  </span>
                  {e.num !== "05" && (
                    <div className="w-px h-full bg-teal/10 mt-2" />
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
