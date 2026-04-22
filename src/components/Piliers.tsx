"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/i18n";

const accents = [
  { text: "text-gold",  stroke: "#C5963A", glow: "group-hover:shadow-gold/20",  bar: "bg-gold",  href: "/plateforme#tarification" },
  { text: "text-teal",  stroke: "#2E8B6C", glow: "group-hover:shadow-teal/20",  bar: "bg-teal",  href: "/plateforme#pilotage" },
  { text: "text-coral", stroke: "#D4654A", glow: "group-hover:shadow-coral/20", bar: "bg-coral", href: "/plateforme#tarif-sante-pro" },
];

// Cercle outline épais + 3 petits accents arrondis sur le tracé.
// Rotation très lente et continue pour donner vie au bloc sans distraire.
function RotatingCircle({ color, word }: { color: string; word: string }) {
  const r = 78;
  const cx = 100;
  const cy = 100;
  // Positions angulaires des 3 accents (en degrés), placées harmonieusement
  const accentAngles = [25, 145, 265];

  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Cercle principal, outline épais et propre */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="4"
        />
        {/* Petits accents arrondis sur le tracé */}
        {accentAngles.map((deg, idx) => {
          const rad = (deg * Math.PI) / 180;
          const x = cx + r * Math.cos(rad);
          const y = cy + r * Math.sin(rad);
          return (
            <circle
              key={idx}
              cx={x}
              cy={y}
              r={idx === 0 ? 4.5 : 3.5}
              fill={color}
            />
          );
        })}
      </motion.svg>
      {/* Mot central en italique serif, fixe (ne tourne pas avec le cercle).
          Taille adaptative : plus petit si le label est long (> 1 mot / > 10 car). */}
      <span
        className={`absolute font-[var(--font-heading)] italic text-navy/90 tracking-tight text-center leading-tight max-w-[62%] ${
          word.length > 12 ? "text-[1rem] lg:text-[1.1rem]" : "text-[1.35rem] lg:text-[1.5rem]"
        }`}
      >
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

                  {/* Cercle animé — hero visuel de la card */}
                  <div className="px-6 lg:px-8 py-4 mb-10">
                    <RotatingCircle color={a.stroke} word={p.label} />
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
