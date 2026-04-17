"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #C5963A 0%, transparent 70%)" }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #2E8B6C 0%, transparent 70%)" }}
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        {/* 404 number */}
        <motion.p
          className="font-heading text-[8rem] md:text-[12rem] font-800 leading-none tracking-tighter"
          style={{
            background: "linear-gradient(135deg, #C5963A 0%, #D4A843 40%, #2E8B6C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          404
        </motion.p>

        {/* Message */}
        <motion.h1
          className="font-heading text-2xl md:text-3xl font-600 text-text-light mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
        >
          Cette page n&apos;existe pas
        </motion.h1>

        <motion.p
          className="text-text-muted mt-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.35 }}
        >
          La page que vous cherchez a été déplacée, supprimée, ou n&apos;a jamais existé.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.45 }}
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-heading font-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,150,58,0.3)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg className="relative w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="relative">Retour à l&apos;accueil</span>
          </Link>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-text-light font-heading font-500 rounded-full transition-all duration-300 hover:border-gold/40 hover:text-gold"
          >
            Lire nos insights
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #C5963A, transparent)" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.6 }}
      />
    </div>
  );
}
