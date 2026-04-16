"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n";

export default function ConfidentialiteClient() {
  const { t } = useI18n();
  const c = t.confidentialite;

  return (
    <>
      <Header />
      <main className="bg-bg-light min-h-screen">
        <section className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy mb-2"
            >
              {c.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[13px] text-text-muted/60 mb-12"
            >
              {c.lastUpdated}
            </motion.p>

            <div className="space-y-10">
              {c.sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <h2 className="font-[var(--font-heading)] font-bold text-xl text-navy mb-3">
                    {section.title}
                  </h2>
                  <p className="text-[15px] text-text-muted leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
