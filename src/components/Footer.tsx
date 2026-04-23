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
      {/* Séparateur */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10" />
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Col 1 — Marque + promesse */}
        <div className="md:col-span-1">
          <p className="font-[var(--font-heading)] font-extrabold text-lg text-gold">PrimeActuaire</p>
          <p className="text-sm text-white/55 mt-3 leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        {/* Col 2 — Explorer */}
        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">{t.footer.explorerTitle}</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="/plateforme" className="hover:text-gold transition-colors">{t.footer.links.plateforme}</a></li>
            <li><a href="/#piliers" className="hover:text-gold transition-colors">{t.footer.links.expertises}</a></li>
            <li><a href="/#cas-usage" className="hover:text-gold transition-colors">{t.footer.links.casUsage}</a></li>
            <li><a href="/insights" className="hover:text-gold transition-colors">{t.footer.links.insights}</a></li>
          </ul>
        </div>

        {/* Col 3 — PrimeActuaire (institutionnel) */}
        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">PrimeActuaire</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="/#methode" className="hover:text-gold transition-colors">{t.footer.links.methode}</a></li>
            <li><a href="/a-propos" className="hover:text-gold transition-colors">{t.footer.links.aPropos}</a></li>
            <li><a href="/#contact" className="hover:text-gold transition-colors">{t.footer.links.contact}</a></li>
            <li><a href="/mentions-legales" className="hover:text-gold transition-colors">{t.footer.links.mentionsLegales}</a></li>
            <li><a href="/confidentialite" className="hover:text-gold transition-colors">{t.footer.links.confidentialite}</a></li>
          </ul>
        </div>

        {/* Col 4 — Contact actif */}
        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">{t.footer.contactTitle}</p>
          <p className="text-sm text-white/70 mb-4 leading-snug">{t.footer.contactTagline}</p>
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
