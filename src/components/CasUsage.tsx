"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

// Unsplash images for all 6 cards (w=800 for perf)
const caseImages = [
  // Card 1 – Renouvellement : hands reviewing contract documents
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=70",
  // Card 2 – Groupes : multi-screen analytics dashboard
  "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=800&q=70",
  // Card 3 – Remise / Simulation : financial charts
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=70",
  // Card 4 – Diagnostic : Black female doctor reviewing data
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=70",
  // Card 5 – Stress test : risk / data analytics
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=70",
  // Card 6 – Stratégie : chess board
  "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=800&q=70",
];

export default function CasUsage({ teaser = false }: { teaser?: boolean }) {
  const { t } = useI18n();
  const cases = teaser ? t.casUsage.cases.slice(0, 3) : t.casUsage.cases;
  const title = teaser ? t.casUsage.titleTeaser : t.casUsage.title;
  const eyebrow = teaser ? t.casUsage.eyebrowTeaser : t.casUsage.eyebrow;
  const subtitle = teaser ? t.casUsage.subtitleTeaser : t.casUsage.subtitle;

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
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-white text-center mb-4"
        >
          {title}
        </motion.h2>
        <p className="text-center text-white/55 text-[16px] mb-16 max-w-xl mx-auto">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-gold/25 hover:bg-white/[0.05] transition-all duration-300"
            >
              {caseImages[i] && (
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={caseImages[i]}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                </div>
              )}
              <div className="p-7">
                <span className="inline-block px-3 py-1 text-[11px] font-semibold text-gold/70 bg-gold/[0.08] rounded-full mb-4 tracking-wide uppercase">
                  {c.tag}
                </span>
                <h3 className="font-[var(--font-heading)] font-bold text-lg text-white leading-snug">
                  {c.title}
                </h3>
                <div className="mt-3 space-y-2.5 text-[14px] text-white/60 leading-relaxed">
                  {c.desc.split("\n").filter((p) => p.trim().length > 0).map((para, pi) => (
                    <p key={pi}>{para}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          {teaser ? (
            <a
              href="/cas-usage"
              className="inline-flex items-center gap-2 text-white font-semibold text-[15px] hover:text-gold transition-colors border-b-2 border-gold/40 hover:border-gold pb-1"
            >
              {t.casUsage.ctaTeaser}
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <a
              href="/#contact"
              className="inline-block px-7 py-3.5 rounded-full bg-coral text-white font-semibold text-[15px] hover:bg-coral-dark transition-colors duration-200 shadow-lg shadow-coral/20"
            >
              {t.casUsage.cta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
