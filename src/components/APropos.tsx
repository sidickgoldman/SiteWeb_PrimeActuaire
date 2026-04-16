"use client";

import { motion } from "framer-motion";

export default function APropos() {
  return (
    <section className="bg-bg-light py-24" id="apropos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Identity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-4">
              À propos
            </p>
            <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.75rem] text-navy leading-tight">
              Un actuaire.
              <span className="block text-text-muted font-normal text-xl lg:text-2xl mt-2">
                Un outil. Une mission claire.
              </span>
            </h2>
            <p className="mt-6 text-[16px] text-text-muted leading-relaxed">
              PrimeActuaire est né d&apos;un constat simple : les directions techniques
              en zone CIMA prennent des décisions tarifaires majeures — souvent sans
              les outils adaptés pour les défendre.
            </p>
            <p className="mt-4 text-[16px] text-text-muted leading-relaxed">
              J&apos;ai construit cette plateforme après des années à modéliser des
              portefeuilles santé collective, à constater les mêmes dérives, les mêmes
              angles morts. L&apos;objectif : donner aux DT et DG les moyens de décider
              avec des données, pas des intuitions.
            </p>

            {/* Key facts */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="font-[var(--font-heading)] font-extrabold text-2xl text-gold">
                  Zone CIMA
                </p>
                <p className="text-[13px] text-text-muted mt-1">
                  Marché de spécialisation
                </p>
              </div>
              <div>
                <p className="font-[var(--font-heading)] font-extrabold text-2xl text-teal">
                  Santé collective
                </p>
                <p className="text-[13px] text-text-muted mt-1">
                  Focus exclusif
                </p>
              </div>
              <div>
                <p className="font-[var(--font-heading)] font-extrabold text-2xl text-coral">
                  Actuaire
                </p>
                <p className="text-[13px] text-text-muted mt-1">
                  Fondateur & praticien
                </p>
              </div>
              <div>
                <p className="font-[var(--font-heading)] font-extrabold text-2xl text-navy">
                  Outil + conseil
                </p>
                <p className="text-[13px] text-text-muted mt-1">
                  Approche intégrée
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Philosophy card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-navy rounded-2xl p-10 text-white">
              <p className="text-[13px] font-semibold text-gold/60 uppercase tracking-[3px] mb-6">
                Philosophie
              </p>
              <blockquote className="font-[var(--font-heading)] font-bold text-xl lg:text-2xl leading-snug">
                &ldquo;Un tarif technique doit être une position défendable —
                pas une opinion ajustée à la marge.&rdquo;
              </blockquote>
              <p className="mt-6 text-white/40 text-[14px] leading-relaxed">
                Chaque fonctionnalité de la plateforme, chaque mission de conseil,
                répond à cette exigence : produire des analyses que le DT peut poser
                sur la table en comité et défendre face au courtier.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[13px] text-white/30 uppercase tracking-widest mb-3">
                  Domaines d&apos;expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Tarification santé",
                    "Provisions ENR",
                    "Stress tests",
                    "Segmentation",
                    "Gouvernance technique",
                    "Conformité CIMA",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-[12px] font-medium text-gold/70 bg-gold/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
