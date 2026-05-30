const points = [
  {
    k: "Dual Market Play",
    d: "Two high-growth verticals — sustainable packaging and food tech — under one R&D umbrella.",
  },
  {
    k: "Defensible IP",
    d: "Proprietary formulations and process patents protecting long-term margins.",
  },
  {
    k: "Regional Advantage",
    d: "Direct access to Pir Panjal bio-resources — apples, walnuts, saffron, herbs and agro-residues.",
  },
  {
    k: "Scalable Pilots",
    d: "Pilot plants designed for rapid replication across regions and product lines.",
  },
];

export default function Investors() {
  return (
    <section id="investors" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-grid-fade" />
      <div className="section">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-green-500/20 bg-gradient-to-br from-brand-green-900/40 via-brand-ink to-brand-black p-8 md:p-16">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-green-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-green-700/30 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-brand-green-300">
                // For Investors
              </div>
              <h2 className="font-display mt-4 text-4xl md:text-6xl leading-[1.05]">
                Fund the future of{" "}
                <span className="text-gradient-green">sustainable materials.</span>
              </h2>
              <p className="mt-6 max-w-lg text-white/70 leading-relaxed">
                We are raising to scale our pilot lines, expand IP coverage and bring our first commercial products to market. Join us in building a category-defining green technology company from the Pir Panjal.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary glow-green">
                  Request Investor Deck
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#contact" className="btn-outline">
                  Schedule a Call
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((p, i) => (
                <div key={p.k} className="glass rounded-2xl p-5">
                  <div className="font-display text-2xl text-brand-green-300/70">
                    0{i + 1}
                  </div>
                  <div className="mt-2 text-sm font-semibold">{p.k}</div>
                  <p className="mt-1 text-xs text-white/60 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
