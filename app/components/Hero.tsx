export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      <div className="absolute top-1/3 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-green-700/30 blur-3xl" />
      <div className="absolute bottom-0 -right-32 -z-10 h-96 w-96 rounded-full bg-brand-green-500/20 blur-3xl" />

      <div className="section text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-green-500/30 bg-brand-green-700/10 px-4 py-1.5 text-xs font-medium text-brand-green-200">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green-400" />
          </span>
          Pioneering Sustainable Innovation from Pir Panjal
        </div>

        <h1 className="font-display mx-auto mt-8 max-w-5xl text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
          Engineering a{" "}
          <span className="text-gradient-green italic">Greener</span>
          <br />
          Tomorrow,
          <span className="text-white/60"> Today.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
          Green Pir Panjal R&amp;D is a research lab developing{" "}
          <span className="text-white">biodegradable bag materials</span> and{" "}
          <span className="text-white">next-generation food processing technologies</span> — turning regional bio-resources into world-class sustainable products.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#investors" className="btn-primary glow-green">
            Become an Investor
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#research" className="btn-outline">
            Explore Our Research
          </a>
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { k: "100%", v: "Biodegradable" },
            { k: "2", v: "R&D Verticals" },
            { k: "0", v: "Plastic Waste Goal" },
            { k: "∞", v: "Scalable Impact" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl px-4 py-5 text-center">
              <div className="font-display text-3xl md:text-4xl text-brand-green-300">{s.k}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/60">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
