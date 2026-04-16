"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Solution", href: "#solution" },
  { label: "Expertises", href: "#piliers" },
  { label: "Cas d'usage", href: "#cas-usage" },
  { label: "Méthode", href: "#methode" },
  { label: "Insights", href: "#insights" },
  { label: "À propos", href: "#apropos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/5">
      <div className="h-[3px] bg-gradient-to-r from-gold via-coral to-gold" />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
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
            Demander une démo
          </a>
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
        <nav className="lg:hidden bg-navy border-t border-white/5 px-6 py-6 flex flex-col gap-4">
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
            Demander une démo
          </a>
        </nav>
      )}
    </header>
  );
}
