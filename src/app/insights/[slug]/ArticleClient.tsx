"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Article } from "../data";
import { useI18n } from "@/i18n";

export default function ArticleClient({ article }: { article: Article }) {
  const { t, locale } = useI18n();
  const p = t.articlePage;
  const dateLang = locale === "fr" ? "fr-FR" : "en-US";

  return (
    <>
      <Header />
      <main>
        <article>
          {/* Hero */}
          <section className="relative bg-navy pt-32 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1628] via-[#122240] to-[#0E1A34]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/[0.04] blur-3xl" />

            <div className="relative max-w-3xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-[13px] text-gold/60 hover:text-gold transition-colors duration-200 mb-8"
                >
                  {p.backLink}
                </Link>

                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block px-3 py-1 text-[11px] font-semibold text-gold bg-gold/10 rounded-full">
                    {article.tag}
                  </span>
                  <span className="text-[12px] text-white/30">
                    {article.readingTime}
                  </span>
                  <span className="text-[12px] text-white/30">
                    {new Date(article.date).toLocaleDateString(dateLang, {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h1 className="font-[var(--font-heading)] font-extrabold text-[clamp(1.8rem,4vw,3rem)] text-white leading-[1.15] tracking-tight">
                  {article.title}
                </h1>
                <p className="mt-6 text-lg text-white/45 leading-relaxed font-light">
                  {article.excerpt}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Content */}
          <section className="bg-bg-light py-20">
            <div className="max-w-3xl mx-auto px-6">
              {article.content.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="text-[16px] text-navy/80 leading-[1.9] mb-6 last:mb-0"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </section>

          {/* Author + CTA */}
          <section className="bg-white py-16 border-t border-navy/5">
            <div className="max-w-3xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-bg-light rounded-2xl"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <span className="font-[var(--font-heading)] font-extrabold text-gold text-xl">
                    S
                  </span>
                </div>
                <div>
                  <p className="font-[var(--font-heading)] font-bold text-navy">
                    {p.authorName}
                  </p>
                  <p className="mt-1 text-[14px] text-text-muted">
                    {p.authorBio}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-12 text-center"
              >
                <p className="text-text-muted text-[15px] mb-4">
                  {p.ctaLine}
                </p>
                <a
                  href="/#contact"
                  className="inline-block px-8 py-4 rounded-full bg-coral text-white font-semibold text-[15px] hover:bg-coral-dark transition-colors duration-200 shadow-lg shadow-coral/20"
                >
                  {p.ctaButton}
                </a>
              </motion.div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
