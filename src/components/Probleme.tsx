const tensions = [
  {
    num: "01",
    title: "Renouvellements traités sous pression",
    desc: "Le courtier arrive avec le tarif du concurrent. Le DT a 48 heures pour répondre — sans analyse actualisée.",
  },
  {
    num: "02",
    title: "Dérives détectées trop lentement",
    desc: "Le S/P se dégrade pendant des mois avant que les suivis ne l'avouent. Quand c'est visible, c'est trop tard.",
  },
  {
    num: "03",
    title: "Poches déficitaires mal isolées",
    desc: "Le portefeuille perd de l'argent, mais personne ne sait quel groupe, quel poste, quelle cause.",
  },
  {
    num: "04",
    title: "Décisions sans appui technique",
    desc: "Le commercial lâche 8% de remise sans mesure d'impact. Le DT arrive en comité sans données opposables.",
  },
];

export default function Probleme() {
  return (
    <section className="bg-bg-light py-24" id="probleme">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[13px] font-semibold text-coral-dark uppercase tracking-[4px] mb-4">
          Le constat
        </p>
        <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.75rem] text-navy leading-tight max-w-2xl">
          Le sujet n&apos;est pas seulement de tarifer.
          <span className="block mt-2 text-text-muted font-normal text-xl lg:text-2xl">
            Le sujet est de décider avec une vision technique exploitable.
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tensions.map((t) => (
            <div
              key={t.num}
              className="group bg-white rounded-2xl p-8 border border-transparent hover:border-coral/20 hover:shadow-lg hover:shadow-coral/5 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <span className="font-[var(--font-heading)] font-extrabold text-2xl text-coral/30 group-hover:text-coral/60 transition-colors">
                  {t.num}
                </span>
                <div>
                  <h3 className="font-[var(--font-heading)] font-bold text-lg text-navy">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-text-muted leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
