"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n";

const navHrefs = [
  "/plateforme",
  "/#piliers",
  "/#cas-usage",
  "/#methode",
  "/insights",
  "/a-propos",
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, locale, toggleLocale } = useI18n();

  const navLinks = [
    { label: t.nav.plateforme, href: navHrefs[0] },
    { label: t.nav.expertises, href: navHrefs[1] },
    { label: t.nav.casUsage, href: navHrefs[2] },
    { label: t.nav.methode, href: navHrefs[3] },
    { label: t.nav.insights, href: navHrefs[4] },
    { label: t.nav.aPropos, href: navHrefs[5] },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${
        scrolled
          ? "bg-navy/98 border-white/10 shadow-lg shadow-black/20"
          : "bg-navy/95 border-white/5"
      }`}
    >
      <div className={`bg-gradient-to-r from-gold via-coral to-gold transition-all duration-500 ${scrolled ? "h-[2px]" : "h-[3px]"}`} />

      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14" : "h-16"}`}>
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="PrimeActuaire" width={36} height={36} className="rounded" />
          <span className="font-[var(--font-heading)] font-extrabold text-white text-lg tracking-wide">
            PrimeActuaire
          </span>
          <span className="text-[11px] text-gold/50 hidden sm:inline">
            Conseil actuariel · Zone CIMA
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-white/50 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 text-[13px] font-semibold rounded-full bg-coral text-white hover:bg-coral-dark transition-colors duration-200"
          >
            {t.nav.cta}
          </a>
          <button
            onClick={toggleLocale}
            className="ml-2 px-3 py-1.5 text-[12px] font-bold rounded-full border border-gold/20 text-gold/70 hover:text-gold hover:border-gold/40 transition-all duration-200"
            aria-label="Toggle language"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white/60 hover:text-white"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-navy border-t border-white/5 px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/60 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-coral text-white text-center"
          >
            {t.nav.cta}
          </a>
          <button
            onClick={() => { toggleLocale(); setOpen(false); }}
            className="mt-2 px-5 py-2.5 text-sm font-bold rounded-full border border-gold/20 text-gold/70 text-center"
          >
            {locale === "fr" ? "🇬🇧 English" : "🇫🇷 Français"}
          </button>
        </motion.nav>
      )}
    </motion.header>
  );
}
