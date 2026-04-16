export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Gradient overlay — deep navy like carousel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1628] via-[#122240] to-[#0E1A34] pointer-events-none" />

      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-coral/[0.04] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-6">
            Santé collective · Zone CIMA
          </p>

          {/* Title — gold gradient accent */}
          <h1 className="font-[var(--font-heading)] font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] text-white leading-[1.08] tracking-tight">
            Décidez mieux vos primes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              santé collective.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-white/45 leading-relaxed max-w-xl font-light">
            PrimeActuaire aide les assureurs à renforcer leur performance technique
            grâce à la tarification, au pilotage et à la technologie.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-coral text-white font-semibold text-[15px] hover:bg-coral-dark transition-colors duration-200 shadow-lg shadow-coral/20"
            >
              Demander une démo
            </a>
            <a
              href="#piliers"
              className="px-7 py-3.5 rounded-full border border-gold/20 text-gold/70 font-medium text-[15px] hover:text-gold hover:border-gold/40 transition-all duration-200"
            >
              Découvrir l&apos;approche
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-14 text-[12px] text-white/20 tracking-wide">
            Tarification · Pilotage portefeuille · Gouvernance technique · Outil + Expertise
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[11px] text-white/15 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent" />
      </div>
    </section>
  );
}
