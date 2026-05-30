const pillars = [
  {
    title: "Bio-Polymer Formulation",
    desc: "Plant-based polymers engineered for strength, flexibility and complete soil biodegradability.",
    icon: (
      <path d="M4 12c4-8 12-8 16 0s-4 8-8 8-12-2-8-8Z" stroke="currentColor" strokeWidth="1.5" />
    ),
  },
  {
    title: "Food Preservation Science",
    desc: "Cold-chain free preservation, natural antimicrobials and shelf-life extension research.",
    icon: (
      <path
        d="M6 3v6a3 3 0 0 0 3 3v9M14 3v6a3 3 0 0 0 3 3v9M10 3h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Agro-Industrial Scaling",
    desc: "Pilot lines that translate lab breakthroughs into market-ready processes for industry.",
    icon: (
      <path
        d="M3 21V8l9-5 9 5v13M9 21V12h6v9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Sustainability Analytics",
    desc: "Lifecycle assessments and carbon accounting baked into every product we ship.",
    icon: (
      <path
        d="M4 19h16M6 16l4-6 4 3 4-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Research() {
  return (
    <section id="research" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="section">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-brand-green-300">
              // Research Pillars
            </div>
            <h2 className="font-display mt-4 text-4xl md:text-5xl leading-tight">
              Four pillars. <span className="text-gradient-green">One planet.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60">
            Our work spans the entire value chain — from molecular research to industrial pilots, designed for the realities of South Asian markets.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-brand-green-500/40 hover:bg-white/[0.04]"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-green-500/0 group-hover:bg-brand-green-500/20 blur-2xl transition" />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-700/30 text-brand-green-200">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  {p.icon}
                </svg>
              </div>
              <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-white/40">
                0{i + 1}
              </div>
              <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
