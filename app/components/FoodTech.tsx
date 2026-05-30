const tech = [
  {
    label: "Smart Drying",
    title: "Solar-Hybrid Dehydration",
    desc: "Energy-efficient drying that preserves micronutrients in apples, walnuts, saffron and more.",
  },
  {
    label: "Cold-Free Storage",
    title: "Natural Edible Coatings",
    desc: "Plant-extract coatings that extend shelf life of produce without refrigeration.",
  },
  {
    label: "Value Addition",
    title: "Functional Food Products",
    desc: "From Himalayan herbs to fermented goods — building branded SKUs from regional crops.",
  },
];

export default function FoodTech() {
  return (
    <section id="food" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="section">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-md">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-brand-green-700/40 via-transparent to-brand-green-400/10 blur-2xl" />
              <div className="relative h-full w-full rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-ink to-brand-black overflow-hidden p-8">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-brand-green-300">
                      Live Pipeline
                    </div>
                    <div className="mt-2 font-display text-3xl">12 Active Projects</div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { n: "Dehydrated Apple Crisps", p: 88 },
                      { n: "Saffron Infused Oil", p: 64 },
                      { n: "Walnut Protein Isolate", p: 45 },
                      { n: "Herbal Functional Tea", p: 72 },
                    ].map((r) => (
                      <div key={r.n}>
                        <div className="flex justify-between text-xs text-white/70">
                          <span>{r.n}</span>
                          <span className="text-brand-green-300">{r.p}%</span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-brand-green-500 to-brand-green-300"
                            style={{ width: `${r.p}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-green-300">
              // Vertical 02 — Food Processing
            </div>
            <h2 className="font-display mt-4 text-4xl md:text-5xl leading-tight">
              From farm to formula —{" "}
              <span className="text-gradient-green">smarter food technologies.</span>
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              We engineer food processing systems that minimise waste, maximise nutrition and unlock economic value for Himalayan farmers. Every project ships with documented IP, pilot data and a clear path to commercialisation.
            </p>

            <div className="mt-10 space-y-4">
              {tech.map((t) => (
                <div
                  key={t.title}
                  className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-brand-green-500/40"
                >
                  <div className="shrink-0 rounded-xl bg-brand-green-700/30 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-brand-green-200 font-semibold">
                    {t.label}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-white/60">{t.desc}</p>
                  </div>
                  <svg className="ml-auto h-5 w-5 text-white/30 group-hover:text-brand-green-300 transition" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
