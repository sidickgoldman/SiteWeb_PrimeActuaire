"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/i18n";

// Chaque pilier : couleur d'accent + photo "humain sans visage" style conseil.
// Images Unsplash : mains, mouvements, gestes pro — jamais de visage.
const accents = [
  {
    text: "text-gold",
    tint: "rgba(197,150,58,0.28)",
    glow: "group-hover:shadow-gold/20",
    bar: "bg-gold",
    href: "/plateforme#tarification",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Analyse de données actuarielles sur écran",
  },
  {
    text: "text-teal",
    tint: "rgba(46,139,108,0.28)",
    glow: "group-hover:shadow-teal/20",
    bar: "bg-teal",
    href: "/plateforme#pilotage",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Écran de pilotage avec indicateurs S/P",
  },
  {
    text: "text-coral",
    tint: "rgba(212,101,74,0.28)",
    glow: "group-hover:shadow-coral/20",
    bar: "bg-coral",
    href: "/plateforme#tarif-sante-pro",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Vue aérienne d'une table de travail avec documents et ordinateurs",
  },
];

// Visuel humain (sans visage) — style photo éditoriale conseil.
// Image cadrée en 4/5, overlay teinté couleur-pilier + vignette douce du bas vers le haut.
function PilierVisual({
  src,
  alt,
  tint,
  word,
  textColor,
}: {
  src: string;
  alt: string;
  tint: string;
  word: string;
  textColor: string;
}) {
  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[14px] bg-navy/[0.04]">
      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
      />
      {/* Teinte couleur-pilier pour cohérence chromatique */}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{ backgroundColor: tint }}
      />
      {/* Vignette douce du bas pour lisibilité du mot */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Micro-label en bas, italique serif — ancre verbale */}
      <span
        className={`absolute left-5 bottom-5 font-[var(--font-heading)] italic ${textColor} text-[15px] tracking-tight drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]`}
      >
        <span className="text-white/90 mr-1.5">—</span>
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
                  className={`group relative flex flex-col h-full bg-white rounded-[20px] px-8 lg:px-10 pt-10 pb-10 shadow-[0_1px_2px_rgba(11,22,40,0.04),0_8px_24px_-12px_rgba(11,22,40,0.08)] hover:shadow-[0_4px_12px_rgba(11,22,40,0.06),0_24px_48px_-16px_rgba(11,22,40,0.18)] ${a.glow} transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
                >
                  {/* Barre d'accent qui s'étire au hover */}
                  <span className={`absolute top-0 left-0 h-[3px] w-16 ${a.bar} transition-all duration-500 group-hover:w-full`} />

                  {/* Top : numéro + label */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-[var(--font-heading)] font-semibold text-[12px] text-navy/25 tracking-[2px]">
                      0{i + 1} / 03
                    </span>
                    <p className={`text-[11px] font-bold uppercase tracking-[3px] ${a.text}`}>
                      {p.label}
                    </p>
                  </div>

                  {/* Visuel humain (sans visage) — hero de la card */}
                  <div className="mb-8">
                    <PilierVisual
                      src={a.image}
                      alt={a.imageAlt}
                      tint={a.tint}
                      word={p.label}
                      textColor={a.text}
                    />
                  </div>

                  {/* Titre */}
                  <h3 className="font-[var(--font-heading)] font-extrabold text-[1.45rem] lg:text-[1.6rem] text-navy leading-[1.2] tracking-tight mb-5 text-center">
                    {p.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14.5px] text-text-muted leading-relaxed text-center mb-10 flex-1">
                    {p.desc}
                  </p>

                  {/* CTA — flèche qui slide au hover */}
                  <div className={`flex items-center justify-center gap-2 text-[12px] font-bold ${a.text} uppercase tracking-[3px]`}>
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
