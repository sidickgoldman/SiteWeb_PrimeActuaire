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
        <div className="md:col-span-1">
          <p className="font-[var(--font-heading)] font-extrabold text-lg text-gold">PrimeActuaire</p>
          <p className="text-xs text-white/50 mt-2 leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">{t.footer.pagesTitle}</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="/plateforme" className="hover:text-gold transition-colors">{t.footer.links.plateforme}</a></li>
            <li><a href="/#piliers" className="hover:text-gold transition-colors">{t.nav.expertises}</a></li>
            <li><a href="/#cas-usage" className="hover:text-gold transition-colors">{t.nav.casUsage}</a></li>
            <li><a href="/insights" className="hover:text-gold transition-colors">{t.nav.insights}</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">{t.footer.entrepriseTitle}</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="/#methode" className="hover:text-gold transition-colors">{t.nav.methode}</a></li>
            <li><a href="/a-propos" className="hover:text-gold transition-colors">{t.nav.aPropos}</a></li>
            <li><a href="/#contact" className="hover:text-gold transition-colors">Contact</a></li>
            <li><a href="/mentions-legales" className="hover:text-gold transition-colors">{t.footer.links.mentionsLegales}</a></li>
            <li><a href="/confidentialite" className="hover:text-gold transition-colors">{t.footer.links.confidentialite}</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">{t.footer.contactTitle}</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li>
              <a href="mailto:contact@primeactuaire.com" className="hover:text-gold transition-colors">
                contact@primeactuaire.com
              </a>
            </li>
            <li>+225 01 70 90 33 54</li>

          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-[11px] text-white/40">
        © {new Date().getFullYear()} {t.footer.copyright}
      </div>
    </motion.footer>
  );
}
