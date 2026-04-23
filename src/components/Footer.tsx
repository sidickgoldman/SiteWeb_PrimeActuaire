"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="bg-navy text-white"
    >
      {/* Séparateur — rupture visuelle claire entre CTA et footer utilitaire */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10 relative">
          <span className="absolute left-0 top-0 w-16 h-[1px] bg-gold" />
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Col 1 — Marque + promesse */}
        <div className="md:col-span-1">
          <p className="font-[var(--font-heading)] font-extrabold text-lg text-gold">PrimeActuaire</p>
          <p className="text-sm text-white/55 mt-3 leading-relaxed">
            Sécurisez la rentabilité de vos portefeuilles santé collective.
          </p>
        </div>

        {/* Col 2 — Explorer */}
        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">Explorer</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="/plateforme" className="hover:text-gold transition-colors">Plateforme</a></li>
            <li><a href="/#piliers" className="hover:text-gold transition-colors">Expertises</a></li>
            <li><a href="/#cas-usage" className="hover:text-gold transition-colors">Cas d&apos;usage</a></li>
            <li><a href="/insights" className="hover:text-gold transition-colors">Insights</a></li>
          </ul>
        </div>

        {/* Col 3 — PrimeActuaire (institutionnel) */}
        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">PrimeActuaire</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="/#methode" className="hover:text-gold transition-colors">Méthode</a></li>
            <li><a href="/a-propos" className="hover:text-gold transition-colors">À propos</a></li>
            <li><a href="/#contact" className="hover:text-gold transition-colors">Contact</a></li>
            <li><a href="/mentions-legales" className="hover:text-gold transition-colors">{t.footer.links.mentionsLegales}</a></li>
            <li><a href="/confidentialite" className="hover:text-gold transition-colors">{t.footer.links.confidentialite}</a></li>
          </ul>
        </div>

        {/* Col 4 — Contact actif */}
        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">Contact</p>
          <p className="text-sm text-white/70 mb-4 leading-snug">Parlons de votre portefeuille.</p>
          <ul className="space-y-3 text-sm text-white/50">
            <li>
              <a href="mailto:contact@primeactuaire.com" className="hover:text-gold transition-colors">
                contact@primeactuaire.com
              </a>
            </li>
            <li>
              <a href="tel:+2250170903354" className="hover:text-gold transition-colors">
                +225 01 70 90 33 54
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/5 py-5 text-center text-[11px] text-white/40">
        © {new Date().getFullYear()} {t.footer.copyright}
      </div>
    </motion.footer>
  );
}
