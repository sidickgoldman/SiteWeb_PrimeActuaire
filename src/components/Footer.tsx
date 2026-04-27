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
              <a href="mailto:contact@primeactuaire.com" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                contact@primeactuaire.com
              </a>
            </li>
            <li>
              <a href="tel:+2250170903354" className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                +225 01 70 90 33 54
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/primeactuaire"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                PrimeActuaire
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-[11px] text-white/40">
        <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
        <span className="hidden sm:inline text-white/20">·</span>
        <a
          href="mailto:contact@primeactuaire.com?subject=Signalement%20site%20web"
          className="underline underline-offset-2 decoration-white/20 hover:text-gold/70 hover:decoration-gold/40 transition-colors"
        >
          Signaler un problème
        </a>
      </div>
    </motion.footer>
  );
}
