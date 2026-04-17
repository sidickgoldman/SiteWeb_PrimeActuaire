"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

const COOKIE_KEY = "pa_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    // Update GA consent
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "granted" });
    }
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    // Disable GA
    window[`ga-disable-G-81H4EP21FM`] = true;
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto bg-navy/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-[0_-8px_40px_rgba(0,0,0,0.3)]">
            <p className="text-sm text-text-light/80 leading-relaxed flex-1">
              Ce site utilise des cookies analytiques pour améliorer votre expérience.{" "}
              <a
                href="/confidentialite"
                className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors"
              >
                En savoir plus
              </a>
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-5 py-2.5 text-sm text-text-muted hover:text-text-light border border-white/10 hover:border-white/20 rounded-full transition-all duration-200"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="px-5 py-2.5 text-sm font-500 bg-gold text-navy rounded-full hover:shadow-[0_0_20px_rgba(197,150,58,0.25)] transition-all duration-200"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
