"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const valeurs = [
  {
    icon: "📐",
    title: "Rigueur actuarielle",
    desc: "Chaque chiffre que nous produisons est traçable, testable, et défendable en comité. Les hypothèses sont documentées.",
  },
  {
    icon: "🎯",
    title: "Focus exclusif",
    desc: "Santé collective en zone CIMA. Pas d'assurance auto, pas d'IARD, pas de diversification. Un seul métier, maîtrisé en profondeur.",
  },
  {
    icon: "⚡",
    title: "Vitesse de décision",
    desc: "15 minutes pour un diagnostic complet vs 3 jours en méthode manuelle. Le DT ne devrait pas attendre pour décider.",
  },
  {
    icon: "🔒",
    title: "Souveraineté des données",
    desc: "Vos données restent sous votre contrôle. Serveur dédié, pas de cloud partagé, conformité CIMA intégrale.",
  },
];

const parcours = [
  {
    periode: "Fondation",
    title: "D'actuaire à bâtisseur",
    desc: "Après des années de missions en tarification santé collective, un constat récurrent : les DT prennent des décisions majeures avec des outils inadaptés. Excel, intuition, pression commerciale. PrimeActuaire naît de ce constat.",
  },
  {
    periode: "Conviction",
    title: "Le marché CIMA mérite ses propres outils",
    desc: "Les solutions venues d'Europe ne conviennent pas. L'inflation médicale locale, les spécificités des contrats groupe, la réglementation CIMA — tout exige un outil calibré sur les réalités du terrain.",
  },
  {
    periode: "Aujourd'hui",
    title: "Outil + Expertise = Gouvernance",
    desc: "PrimeActuaire combine une plateforme technologique (Tarif Santé Pro) et un accompagnement expert. L'outil sans le conseil est un tableau de bord. Le conseil sans l'outil est une opinion. Les deux ensemble, c'est une gouvernance technique.",
  },
];

export default function AProposPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1628] via-[#122240] to-[#0E1A34]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-teal/[0.04] blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-6">
                  À propos
                </p>
                <h1 className="font-[var(--font-heading)] font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-[1.1] tracking-tight">
                  Un actuaire qui construit les outils qu&apos;il aurait voulu avoir.
                </h1>
                <p className="mt-6 text-lg text-white/45 leading-relaxed max-w-xl font-light">
                  PrimeActuaire est né d&apos;un constat terrain : les directions techniques
                  en zone CIMA manquent d&apos;outils adaptés pour défendre leurs décisions tarifaires.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8">
                  <blockquote className="font-[var(--font-heading)] font-bold text-xl text-white leading-snug">
                    &ldquo;Un tarif technique doit être une position défendable — pas une opinion ajustée à la marge.&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <span className="font-[var(--font-heading)] font-extrabold text-gold text-lg">S</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-[14px]">Sidibé</p>
                      <p className="text-white/40 text-[12px]">Fondateur · Actuaire</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-bg-light py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-[13px] font-semibold text-teal uppercase tracking-[4px] mb-4">
                Mission
              </p>
              <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy max-w-2xl mx-auto">
                Donner aux directions techniques les moyens de décider avec des données.
              </h2>
              <p className="mt-6 text-text-muted text-[16px] max-w-xl mx-auto leading-relaxed">
                Pas avec des intuitions. Pas sous la pression du commercial.
                Avec des analyses traçables, des chiffres défendables, et des outils
                conçus pour le terrain CIMA.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valeurs.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-7 hover:shadow-xl transition-shadow duration-300"
                >
                  <span className="text-3xl">{v.icon}</span>
                  <h3 className="mt-4 font-[var(--font-heading)] font-bold text-lg text-navy">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-text-muted leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Parcours */}
        <section className="bg-navy py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-4">
                Parcours
              </p>
              <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-white">
                Pourquoi PrimeActuaire existe.
              </h2>
            </motion.div>

            <div className="space-y-12">
              {parcours.map((p, i) => (
                <motion.div
                  key={p.periode}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <span className="w-3 h-3 rounded-full bg-gold/60 shrink-0 mt-2" />
                    {i < parcours.length - 1 && <div className="w-px h-full bg-gold/10 mt-2" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-[12px] font-semibold text-gold/50 uppercase tracking-widest">
                      {p.periode}
                    </span>
                    <h3 className="mt-1 font-[var(--font-heading)] font-bold text-xl text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-white/40 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise tags */}
        <section className="bg-bg-light py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <p className="text-[13px] font-semibold text-navy/40 uppercase tracking-[4px] mb-6">
              Domaines d&apos;expertise
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Tarification santé collective",
                "Provisions ENR (article 334-8)",
                "Stress tests Monte Carlo",
                "Segmentation portefeuille",
                "Gouvernance technique",
                "Conformité réglementaire CIMA",
                "Suivi S/P et dérives",
                "Détection de fraude",
                "Analyse par poste de soins",
                "Accompagnement DT / DG",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-[13px] font-medium text-navy bg-navy/5 rounded-full hover:bg-gold/10 hover:text-gold transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto px-6 text-center"
          >
            <h2 className="font-[var(--font-heading)] font-extrabold text-3xl text-white">
              Travaillons ensemble sur votre portefeuille.
            </h2>
            <p className="mt-4 text-white/40 text-[16px]">
              Un échange de 20 minutes suffit pour voir où se trouvent les leviers.
            </p>
            <div className="mt-8">
              <a href="/#contact" className="px-8 py-4 rounded-full bg-coral text-white font-semibold text-[16px] hover:bg-coral-dark transition-colors duration-200 shadow-xl shadow-coral/25">
                Planifier un échange
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
