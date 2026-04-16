const features = [
  "Scénarios de renouvellement",
  "Segmentation par groupe et poste",
  "Suivi S/P en cours d'année",
  "Analyse des poches déficitaires",
  "Stress tests Monte Carlo",
  "ENR estimatif (provisions)",
  "Détection de fraude et atypies",
  "Traçabilité des hypothèses",
];

export default function Solution() {
  return (
    <section className="bg-bg-solution py-24" id="solution">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-[13px] font-semibold text-gold uppercase tracking-[4px] mb-4">
              Tarif Santé Pro
            </p>
            <h2 className="font-[var(--font-heading)] font-extrabold text-3xl lg:text-[2.75rem] text-navy leading-tight">
              Une solution conçue pour structurer la décision tarifaire.
            </h2>
            <p className="mt-6 text-[16px] text-text-muted leading-relaxed">
              Pas un logiciel de plus. Un outil construit par un actuaire, pour des actuaires
              et des décideurs. Chaque vue répond à une question que le DT ou le DG se pose
              avant un renouvellement, un comité, ou une négociation.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-[14px] text-text">{f}</span>
                </div>
              ))}
            </div>

            {/* Mid-page CTA — Correction 4 */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-coral text-white font-semibold text-[15px] hover:bg-coral-dark transition-colors duration-200 shadow-lg shadow-coral/20"
              >
                Voir une démo en 20 min
              </a>
              <a
                href="#cas-usage"
                className="px-7 py-3.5 rounded-full border border-navy/10 text-text font-medium text-[15px] hover:border-navy/25 transition-all duration-200"
              >
                Voir les cas d&apos;usage
              </a>
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gold/10 border border-gold/10 p-6 aspect-[4/3] flex flex-col">
              {/* Title bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-coral/40" />
                <div className="w-3 h-3 rounded-full bg-gold/40" />
                <div className="w-3 h-3 rounded-full bg-teal/40" />
                <span className="ml-3 text-[11px] text-text-muted font-medium">Tarif Santé Pro — Dashboard</span>
              </div>

              {/* Mock content */}
              <div className="flex-1 grid grid-cols-3 gap-3">
                <div className="col-span-2 bg-bg-light rounded-xl p-4">
                  <div className="h-3 w-24 bg-navy/10 rounded mb-3" />
                  <div className="flex items-end gap-2 h-32">
                    {[60, 80, 45, 90, 70, 85, 55, 75, 95, 65, 88, 72].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-gold/40 to-gold/10"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="bg-bg-light rounded-xl p-4 flex-1">
                    <div className="h-2 w-12 bg-coral/20 rounded mb-2" />
                    <p className="font-[var(--font-heading)] font-extrabold text-2xl text-coral">94%</p>
                    <p className="text-[10px] text-text-muted mt-1">S/P actuel</p>
                  </div>
                  <div className="bg-bg-light rounded-xl p-4 flex-1">
                    <div className="h-2 w-12 bg-teal/20 rounded mb-2" />
                    <p className="font-[var(--font-heading)] font-extrabold text-2xl text-teal">1 247</p>
                    <p className="text-[10px] text-text-muted mt-1">Adhérents</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-navy text-gold px-5 py-2.5 rounded-full text-[13px] font-semibold shadow-xl">
              Calibré sur votre portefeuille
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
