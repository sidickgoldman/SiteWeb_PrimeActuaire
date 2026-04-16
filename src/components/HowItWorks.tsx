const steps = [
  {
    num: "01",
    title: "Importez vos bordereaux",
    desc: "Même incomplets. Nous travaillons à partir de vos données réelles de sinistres.",
  },
  {
    num: "02",
    title: "La plateforme analyse",
    desc: "Tarification, segmentation, dérives, provisions ENR — calibré sur votre portefeuille.",
  },
  {
    num: "03",
    title: "Vous décidez",
    desc: "Avec un tarif chiffré, défendable, auditable. En comité, face au courtier, en renouvellement.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] text-center mb-4">
          Comment ça marche
        </p>
        <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-white text-center mb-16">
          Trois étapes. Aucune complexité.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:border-gold/20 transition-colors duration-300"
            >
              <span className="font-[var(--font-heading)] font-extrabold text-6xl text-gold/15">
                {step.num}
              </span>
              <h3 className="mt-4 font-[var(--font-heading)] font-bold text-xl text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] text-white/40 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting line (desktop) */}
        <div className="hidden md:flex justify-center mt-8">
          <div className="flex items-center gap-0">
            <div className="w-3 h-3 rounded-full bg-gold/40" />
            <div className="w-40 h-px bg-gradient-to-r from-gold/40 to-gold/10" />
            <div className="w-3 h-3 rounded-full bg-gold/30" />
            <div className="w-40 h-px bg-gradient-to-r from-gold/30 to-gold/10" />
            <div className="w-3 h-3 rounded-full bg-gold/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
