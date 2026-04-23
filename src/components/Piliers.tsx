"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/i18n";

// Chaque pilier : même accent gold unifié (sobriété premium B2B).
// Images Unsplash : mains, mouvements, gestes pro — jamais de visage.
const accents = [
  {
    href: "/plateforme#tarification",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Analyse de données actuarielles sur écran",
  },
  {
    href: "/plateforme#pilotage",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Écran de pilotage avec indicateurs S/P",
  },
  {
    href: "/plateforme#tarif-sante-pro",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Vue aérienne d'une table de travail avec documents et ordinateurs",
  },
];

// Visuel humain (sans visage) — style photo éditoriale conseil, traitement homogène.
// Voile navy léger pour cohérence chromatique sur les 3 cartes.
function PilierVisual({
  src,
  alt,
  word,
}: {
  src: string;
  alt: string;
  word: string;
}) {
  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[14px] bg-navy/[0.04]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
      />
      {/* Voile navy unifié pour les 3 cartes */}
      <div className="absolute inset-0 bg-navy/25 mix-blend-multiply" />
      {/* Vignette douce du bas pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />

      {/* Micro-label en bas, italique serif — ancre verbale en gold */}
      <span className="absolute left-5 bottom-5 font-[var(--font-heading)] italic text-gold text-[15px] tracking-tight drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]">
        <span className="text-white/80 mr-1.5">—</span>
        {word}
      </span>
    </div>
  );
}

export default function Piliers({ teaser = false }: { teaser?: boolean }) {
  const { t } = useI18n();
  const title = teaser ? t.piliers.titleTeaser : t.piliers.title;
  const eyebrow = teaser ? t.piliers.eyebrowTeaser : t.piliers.eyebrow;

  return (
    <section className="bg-bg-light py-28" id="piliers">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-semibold text-gold uppercase tracking-[4px] text-center mb-5"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.5rem] text-navy text-center leading-tight max-w-3xl mx-auto mb-20"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.piliers.items.map((p, i) => {
            const a = accents[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={a.href}
                  className="group relative flex flex-col h-full bg-white rounded-[20px] px-8 lg:px-10 pt-10 pb-10 shadow-[0_1px_2px_rgba(11,22,40,0.04),0_8px_24px_-12px_rgba(11,22,40,0.08)] hover:shadow-[0_4px_12px_rgba(11,22,40,0.06),0_24px_48px_-16px_rgba(11,22,40,0.18)] hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Barre d'accent gold qui s'étire au hover */}
                  <span className="absolute top-0 left-0 h-[3px] w-16 bg-gold transition-all duration-500 group-hover:w-full" />

                  {/* Top : numéro + label */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-[var(--font-heading)] font-semibold text-[12px] text-navy/25 tracking-[2px]">
                      0{i + 1} / 03
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-[3px] text-gold">
                      {p.label}
                    </p>
                  </div>

                  {/* Visuel humain (sans visage) — hero de la card */}
                  <div className="mb-8">
                    <PilierVisual
                      src={a.image}
                      alt={a.imageAlt}
                      word={p.label}
                    />
                  </div>

                  {/* Titre */}
                  <h3 className="font-[var(--font-heading)] font-extrabold text-[1.45rem] lg:text-[1.6rem] text-navy leading-[1.2] tracking-tight mb-5 text-center">
                    {p.title}
                  </h3>

                  {/* Description — un paragraphe par idée */}
                  <div className="text-[14.5px] text-text-muted leading-relaxed text-center mb-10 flex-1 space-y-2">
                    {p.desc.split("\n").filter((para) => para.trim().length > 0).map((para, pi) => (
                      <p key={pi}>{para}</p>
                    ))}
                  </div>

                  {/* CTA — flèche qui slide au hover */}
                  <div className="flex items-center justify-center gap-2 text-[12px] font-bold text-gold uppercase tracking-[3px]">
                    <span>Découvrir</span>
                    <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {teaser && (
          <div className="mt-16 text-center">
            <Link
              href="/expertises"
              className="inline-flex items-center gap-2 text-navy font-semibold text-[15px] hover:text-gold transition-colors border-b-2 border-gold/40 hover:border-gold pb-1"
            >
              {t.piliers.ctaTeaser}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
