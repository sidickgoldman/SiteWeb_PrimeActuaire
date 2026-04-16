"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    slug: "degradation-sante-collective",
    tag: "Gouvernance",
    title: "Pourquoi la santé collective se dégrade avant que les suivis ne l'avouent",
    excerpt: "Les tableaux de bord classiques mesurent ce qui est passé. La dérive, elle, est déjà en cours.",
  },
  {
    slug: "hausse-pas-toujours-solution",
    tag: "Tarification",
    title: "Une hausse n'est pas toujours une solution",
    excerpt: "Augmenter la prime sans corriger la cause, c'est repousser la tension au cycle suivant.",
  },
  {
    slug: "hypotheses-pas-la-prime",
    tag: "Méthode",
    title: "Le vrai sujet n'est pas la prime, mais les hypothèses",
    excerpt: "Un tarif technique est aussi solide que les hypothèses qui le portent. Encore faut-il les tester.",
  },
];

export default function Insights() {
  return (
    <section className="bg-white py-24" id="insights">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold text-navy uppercase tracking-[4px] text-center mb-4"
        >
          Insights
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy text-center mb-16"
        >
          Perspectives sur la santé collective.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/insights/${a.slug}`} className="block group bg-bg-light rounded-2xl p-8 hover:shadow-xl hover:shadow-gold/5 border border-transparent hover:border-gold/15 transition-all duration-300">
                <span className="inline-block px-3 py-1 text-[11px] font-semibold text-gold bg-gold/10 rounded-full mb-5">
                  {a.tag}
                </span>
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-navy leading-snug group-hover:text-gold transition-colors duration-200">
                  {a.title}
                </h3>
                <p className="mt-3 text-[14px] text-text-muted leading-relaxed">
                  {a.excerpt}
                </p>
                <span className="inline-block mt-5 text-[13px] font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lire →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/insights"
            className="inline-block px-7 py-3.5 rounded-full border border-gold/20 text-gold/70 font-medium text-[15px] hover:text-gold hover:border-gold/40 transition-all duration-200"
          >
            Tous les articles →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
