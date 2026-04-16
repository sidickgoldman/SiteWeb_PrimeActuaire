"use client";

import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section className="bg-navy py-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        {/* Accent line — gold to coral */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-20 h-1 bg-gradient-to-r from-gold to-coral rounded-full mx-auto mb-10 origin-left"
        />

        <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.75rem] text-white leading-tight">
          Vous voulez voir comment PrimeActuaire peut structurer vos décisions tarifaires ?
        </h2>

        <p className="mt-6 text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
          Échangeons sur un de vos portefeuilles. 20 minutes suffisent pour voir
          où se trouvent les leviers.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:contact@primeactuaire.com"
            className="px-8 py-4 rounded-full bg-coral text-white font-semibold text-[16px] hover:bg-coral-dark transition-colors duration-200 shadow-xl shadow-coral/25"
          >
            Planifier un échange
          </a>
          <a
            href="mailto:contact@primeactuaire.com?subject=Demande%20de%20d%C3%A9mo%20Tarif%20Sant%C3%A9%20Pro"
            className="px-8 py-4 rounded-full border border-gold/20 text-gold/70 font-medium text-[16px] hover:text-gold hover:border-gold/40 transition-all duration-200"
          >
            Demander une démo
          </a>
        </div>

        {/* Contact info */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-[13px] text-white/25">
          <span>contact@primeactuaire.com</span>
          <span className="hidden sm:inline">·</span>
          <span>+225 01 70 90 33 54</span>
          <span className="hidden sm:inline">·</span>
          <span>WhatsApp : +1 (514) 578-8207</span>
        </div>
      </motion.div>
    </section>
  );
}
