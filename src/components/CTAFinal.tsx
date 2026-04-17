"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useI18n } from "@/i18n";

export default function CTAFinal() {
  const { t } = useI18n();
  const [form, setForm] = useState({ nom: "", email: "", societe: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [honey, setHoney] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _honey: honey }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erreur");
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-navy py-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto px-6"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-20 h-1 bg-gradient-to-r from-gold to-coral rounded-full mx-auto mb-10 origin-left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-center lg:text-left">
            <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.75rem] text-white leading-tight">
              {t.ctaFinal.title}
            </h2>
            <p className="mt-6 text-lg text-white/40 max-w-md leading-relaxed">
              {t.ctaFinal.subtitle}
            </p>

            <div className="mt-10 space-y-4">
              <a href="mailto:contact@primeactuaire.com" className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors group">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <span className="text-[14px]">contact@primeactuaire.com</span>
              </a>
              <a href="tel:+2250170903354" className="flex items-center gap-3 text-white/40 hover:text-gold transition-colors group">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <span className="text-[14px]">+225 01 70 90 33 54</span>
              </a>

            </div>
          </div>

          <div>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/[0.04] border border-gold/20 rounded-2xl p-10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-heading)] font-bold text-xl text-white">
                  {t.ctaFinal.success.title}
                </h3>
                <p className="mt-2 text-white/40 text-[14px]">
                  {t.ctaFinal.success.text}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 space-y-5">
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="_honey"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                  className="absolute opacity-0 pointer-events-none h-0 w-0"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-semibold text-white/30 uppercase tracking-widest mb-2">
                      {t.ctaFinal.form.nom}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:border-gold/40 focus:outline-none transition-colors"
                      placeholder={t.ctaFinal.form.nomPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-white/30 uppercase tracking-widest mb-2">
                      {t.ctaFinal.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:border-gold/40 focus:outline-none transition-colors"
                      placeholder={t.ctaFinal.form.emailPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-white/30 uppercase tracking-widest mb-2">
                    {t.ctaFinal.form.societe}
                  </label>
                  <input
                    type="text"
                    value={form.societe}
                    onChange={(e) => setForm({ ...form, societe: e.target.value })}
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder={t.ctaFinal.form.societePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-white/30 uppercase tracking-widest mb-2">
                    {t.ctaFinal.form.message}
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:border-gold/40 focus:outline-none transition-colors resize-none"
                    placeholder={t.ctaFinal.form.messagePlaceholder}
                  />
                </div>
                {error && (
                  <p className="text-coral text-[13px] text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-8 py-4 rounded-full bg-coral text-white font-semibold text-[15px] hover:bg-coral-dark transition-colors duration-200 shadow-xl shadow-coral/25 disabled:opacity-50"
                >
                  {sending ? t.ctaFinal.form.sending : t.ctaFinal.form.send}
                </button>
                <p className="text-[11px] text-white/15 text-center">
                  {t.ctaFinal.directContact} contact@primeactuaire.com
                </p>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
