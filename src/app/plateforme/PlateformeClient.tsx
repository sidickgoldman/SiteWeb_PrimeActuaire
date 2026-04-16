"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    category: "Tarification",
    color: "border-gold",
    accent: "text-gold",
    bg: "bg-gold/5",
    items: [
      {
        title: "Scénarios de renouvellement",
        desc: "Simulez l'impact d'une hausse, d'une remise ou d'un changement de périmètre avant de vous engager.",
      },
      {
        title: "Backtesting du tarif",
        desc: "Comparez le tarif technique à la sinistralité réelle. Mesurez l'écart. Ajustez les hypothèses.",
      },
      {
        title: "Segmentation par groupe",
        desc: "Identifiez les groupes déficitaires qui tirent le portefeuille vers le bas.",
      },
    ],
  },
  {
    category: "Pilotage",
    color: "border-teal",
    accent: "text-teal",
    bg: "bg-teal/5",
    items: [
      {
        title: "Suivi S/P en cours d'année",
        desc: "Pas besoin d'attendre la clôture. Visualisez les dérives dès qu'elles apparaissent.",
      },
      {
        title: "Analyse par poste de soins",
        desc: "Pharmacie, hospitalisation, optique, dentaire — isolez la cause de la dérive.",
      },
      {
        title: "Détection de fraude et atypies",
        desc: "Identifiez les prestataires et les assurés aux comportements anormaux.",
      },
    ],
  },
  {
    category: "Provisions & conformité",
    color: "border-coral",
    accent: "text-coral",
    bg: "bg-coral/5",
    items: [
      {
        title: "ENR estimatif (provisions)",
        desc: "Provisions conformes à l'article 334-8 CIMA. Traçables, auditables, justifiées.",
      },
      {
        title: "Stress tests Monte Carlo",
        desc: "Fourchette de confiance sur le tarif. Le tarif n'est plus une opinion — c'est une position chiffrée.",
      },
      {
        title: "Traçabilité des hypothèses",
        desc: "Chaque paramètre, chaque choix est documenté. Idéal pour les audits et les comités.",
      },
    ],
  },
];

const workflow = [
  { step: "01", title: "Import des bordereaux", desc: "CSV, Excel, ou extraction directe. Même des données incomplètes." },
  { step: "02", title: "Nettoyage automatique", desc: "Détection des doublons, des anomalies, des champs manquants." },
  { step: "03", title: "Analyse actuarielle", desc: "Modèles calibrés sur votre historique. Segmentation automatique." },
  { step: "04", title: "Dashboards interactifs", desc: "Visualisez les résultats. Filtrez par groupe, poste, période." },
  { step: "05", title: "Export & restitution", desc: "Rapports PDF, PowerPoint, Excel. Prêts pour le comité." },
];

export default function PlateformeClient() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1628] via-[#122240] to-[#0E1A34]" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-6">
                Tarif Santé Pro
              </p>
              <h1 className="font-[var(--font-heading)] font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-[1.1] tracking-tight">
                La plateforme qui structure vos décisions tarifaires.
              </h1>
              <p className="mt-6 text-lg text-white/45 leading-relaxed max-w-xl font-light">
                Conçue par un actuaire, pour des actuaires et des décideurs.
                Chaque vue répond à une question que le DT ou DG se pose avant
                un renouvellement, un comité ou une négociation.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="/#contact" className="px-7 py-3.5 rounded-full bg-coral text-white font-semibold text-[15px] hover:bg-coral-dark transition-colors duration-200 shadow-lg shadow-coral/20">
                  Demander une démo
                </a>
                <a href="#fonctionnalites" className="px-7 py-3.5 rounded-full border border-gold/20 text-gold/70 font-medium text-[15px] hover:text-gold hover:border-gold/40 transition-all duration-200">
                  Voir les fonctionnalités
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key numbers */}
        <section className="bg-navy-mid border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "15 min", label: "pour une analyse complète", color: "text-gold" },
              { value: "3 jours", label: "en méthode manuelle traditionnelle", color: "text-white/30" },
              { value: "100%", label: "des données sous votre contrôle", color: "text-teal" },
              { value: "Article 334-8", label: "Provisions conformes CIMA", color: "text-coral" },
            ].map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className={`font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl ${s.color}`}>{s.value}</p>
                <p className="mt-2 text-[13px] text-white/35">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features grid */}
        <section className="bg-bg-light py-24" id="fonctionnalites">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-4">
                Fonctionnalités
              </p>
              <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy">
                Tout ce dont un DT a besoin. Rien de superflu.
              </h2>
            </motion.div>

            <div className="space-y-16">
              {features.map((cat, ci) => (
                <div key={cat.category}>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`font-[var(--font-heading)] font-bold text-xl ${cat.accent} mb-6`}
                  >
                    {cat.category}
                  </motion.h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cat.items.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`rounded-2xl p-7 border-l-4 ${cat.color} ${cat.bg} hover:shadow-lg transition-shadow duration-300`}
                      >
                        <h4 className="font-[var(--font-heading)] font-bold text-lg text-navy">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-[14px] text-text-muted leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
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
                Parcours utilisateur
              </p>
              <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-white">
                Du bordereau au rapport. En 5 étapes.
              </h2>
            </motion.div>

            <div className="space-y-8">
              {workflow.map((w, i) => (
                <motion.div
                  key={w.step}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-5 group"
                >
                  <div className="flex flex-col items-center">
                    <span className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-[14px] font-bold text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                      {w.step}
                    </span>
                    {w.step !== "05" && <div className="w-px h-full bg-gold/10 mt-2" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="font-[var(--font-heading)] font-bold text-lg text-white">{w.title}</h3>
                    <p className="mt-1 text-[14px] text-white/40 leading-relaxed">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-bg-solution py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto px-6 text-center"
          >
            <h2 className="font-[var(--font-heading)] font-extrabold text-3xl text-navy">
              Prêt à voir Tarif Santé Pro en action ?
            </h2>
            <p className="mt-4 text-text-muted text-[16px]">
              20 minutes suffisent pour un diagnostic sur votre portefeuille.
            </p>
            <div className="mt-8">
              <a href="/#contact" className="px-8 py-4 rounded-full bg-coral text-white font-semibold text-[16px] hover:bg-coral-dark transition-colors duration-200 shadow-xl shadow-coral/25">
                Planifier une démo
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
