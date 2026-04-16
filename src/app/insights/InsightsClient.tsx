"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "./data";

export default function InsightsClient() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1628] via-[#122240] to-[#0E1A34]" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-6">
                Insights
              </p>
              <h1 className="font-[var(--font-heading)] font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-[1.1] tracking-tight">
                Perspectives sur la santé collective.
              </h1>
              <p className="mt-6 text-lg text-white/45 leading-relaxed max-w-xl font-light">
                Analyses, retours terrain et réflexions sur la tarification, la gouvernance
                technique et le pilotage de portefeuille en zone CIMA.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles grid */}
        <section className="bg-bg-light py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((a, i) => (
                <motion.div
                  key={a.slug}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link href={`/insights/${a.slug}`} className="block group">
                    <article className="bg-white rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-gold/5 border border-transparent hover:border-gold/15 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="inline-block px-3 py-1 text-[11px] font-semibold text-gold bg-gold/10 rounded-full">
                          {a.tag}
                        </span>
                        <span className="text-[12px] text-text-muted">
                          {a.readingTime}
                        </span>
                      </div>
                      <h2 className="font-[var(--font-heading)] font-bold text-lg text-navy leading-snug group-hover:text-gold transition-colors duration-200">
                        {a.title}
                      </h2>
                      <p className="mt-3 text-[14px] text-text-muted leading-relaxed">
                        {a.excerpt}
                      </p>
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-[12px] text-text-muted">
                          {new Date(a.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span className="text-[13px] font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Lire →
                        </span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
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
              Un sujet vous parle ?
            </h2>
            <p className="mt-4 text-white/40 text-[16px]">
              Échangeons sur votre portefeuille. 20 minutes suffisent pour un premier diagnostic.
            </p>
            <div className="mt-8">
              <a
                href="/#contact"
                className="px-8 py-4 rounded-full bg-coral text-white font-semibold text-[16px] hover:bg-coral-dark transition-colors duration-200 shadow-xl shadow-coral/25"
              >
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
