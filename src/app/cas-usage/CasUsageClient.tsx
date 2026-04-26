"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CasUsage from "@/components/CasUsage";
import CTAFinal from "@/components/CTAFinal";
import { useI18n } from "@/i18n";

export default function CasUsageClient() {
  const { t } = useI18n();
  const p = t.casUsagePage;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1628] via-[#122240] to-[#0E1A34]" />
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-coral/[0.04] blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-6">
                {p.eyebrow}
              </p>
              <h1 className="font-[var(--font-heading)] font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] text-white leading-[1.1] tracking-tight">
                {p.title}
              </h1>
              <p className="mt-6 text-lg text-white/45 leading-relaxed max-w-2xl font-light">
                {p.desc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 5 cas complets */}
        <CasUsage />

        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
