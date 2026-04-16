"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="bg-navy text-white"
    >
      {/* Stats ribbon */}
      <div className="border-t border-white/5 bg-navy-mid">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-[var(--font-heading)] font-extrabold text-3xl text-coral">23%</p>
            <p className="text-xs text-white/40 mt-1">Écart tarif moyen constaté</p>
          </div>
          <div>
            <p className="font-[var(--font-heading)] font-extrabold text-3xl text-gold">15 min</p>
            <p className="text-xs text-white/40 mt-1">vs 3 jours en méthode manuelle</p>
          </div>
          <div>
            <p className="font-[var(--font-heading)] font-extrabold text-3xl text-teal">+8%/an</p>
            <p className="text-xs text-white/40 mt-1">Inflation médicale zone CIMA</p>
          </div>
          <div>
            <p className="font-[var(--font-heading)] font-extrabold text-3xl text-gold-light">100%</p>
            <p className="text-xs text-white/40 mt-1">Données sous votre contrôle</p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-[var(--font-heading)] font-extrabold text-lg text-gold">PrimeActuaire</p>
          <p className="text-xs text-white/30 mt-2 leading-relaxed">
            Gouvernance technique et aide à la décision pour l&apos;assurance santé collective en zone CIMA.
          </p>
        </div>

        {/* Pages */}
        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">Pages</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="#solution" className="hover:text-gold transition-colors">Solution</a></li>
            <li><a href="#piliers" className="hover:text-gold transition-colors">Expertises</a></li>
            <li><a href="#cas-usage" className="hover:text-gold transition-colors">Cas d&apos;usage</a></li>
            <li><a href="#insights" className="hover:text-gold transition-colors">Insights</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">Entreprise</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="#methode" className="hover:text-gold transition-colors">Méthode</a></li>
            <li><a href="#apropos" className="hover:text-gold transition-colors">À propos</a></li>
            <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[11px] font-semibold text-gold/40 uppercase tracking-widest mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li>
              <a href="mailto:contact@primeactuaire.com" className="hover:text-gold transition-colors">
                contact@primeactuaire.com
              </a>
            </li>
            <li>+225 01 70 90 33 54</li>
            <li className="text-xs text-white/30">WhatsApp : +1 (514) 578-8207</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5 text-center text-[11px] text-white/20">
        © {new Date().getFullYear()} PrimeActuaire. Tous droits réservés.
      </div>
    </motion.footer>
  );
}
