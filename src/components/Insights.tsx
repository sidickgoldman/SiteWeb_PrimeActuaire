const articles = [
  {
    tag: "Gouvernance",
    title: "Pourquoi la santé collective se dégrade avant que les suivis ne l'avouent",
    excerpt: "Les tableaux de bord classiques mesurent ce qui est passé. La dérive, elle, est déjà en cours.",
  },
  {
    tag: "Tarification",
    title: "Une hausse n'est pas toujours une solution",
    excerpt: "Augmenter la prime sans corriger la cause, c'est repousser la tension au cycle suivant.",
  },
  {
    tag: "Méthode",
    title: "Le vrai sujet n'est pas la prime, mais les hypothèses",
    excerpt: "Un tarif technique est aussi solide que les hypothèses qui le portent. Encore faut-il les tester.",
  },
];

export default function Insights() {
  return (
    <section className="bg-white py-24" id="insights">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[13px] font-semibold text-navy uppercase tracking-[4px] text-center mb-4">
          Insights
        </p>
        <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-4xl text-navy text-center mb-16">
          Perspectives sur la santé collective.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <article
              key={i}
              className="group bg-bg-light rounded-2xl p-8 hover:shadow-xl hover:shadow-gold/5 border border-transparent hover:border-gold/15 transition-all duration-300 cursor-pointer"
            >
              <span className="inline-block px-3 py-1 text-[11px] font-semibold text-gold bg-gold/10 rounded-full mb-5">
                {a.tag}
              </span>
              <h3 className="font-[var(--font-heading)] font-bold text-lg text-navy leading-snug group-hover:text-gold transition-colors duration-200">
                {a.title}
              </h3>
              <p className="mt-3 text-[14px] text-text-muted leading-relaxed">
                {a.excerpt}
              </p>
              <span className="inline-block mt-5 text-[13px] font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Lire →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
