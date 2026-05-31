import Link from "next/link";

const features = [
  { t: "Plant-derived polymers", d: "Engineered from agricultural by-products and natural starches." },
  { t: "180-day composting", d: "Returns to soil safely within 180 days under home compost conditions." },
  { t: "Industrial strength", d: "Load-bearing performance matching conventional polyethylene bags." },
  { t: "Water & heat resistant", d: "Built to perform across retail, food service and industrial use cases." },
];

export default function BioBags() {
  return (
    <section id="biobags" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="section grid gap-16 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="text-xs uppercase tracking-[0.25em] text-brand-green-300">
            // Vertical 01 — Bio Bags
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl leading-tight">
            Bags that <span className="text-gradient-green">return to the earth.</span>
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            Our flagship bio-bag platform replaces single-use plastic with bio-polymers derived from regional crop residues. Designed to feel, stretch and carry like plastic — but disappear like a leaf.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.t} className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green-500/20 text-brand-green-300">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">{f.t}</div>
                  <p className="text-xs text-white/60 mt-0.5">{f.d}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/investors" className="btn-primary mt-10">
            Partner on this product
          </Link>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-green-700/40 via-brand-green-500/10 to-transparent blur-2xl" />
            <div className="relative h-full w-full rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-brand-ink to-brand-black overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />

              <div className="absolute inset-0 flex items-center justify-center animate-float">
                <svg viewBox="0 0 200 200" className="h-3/4 w-3/4">
                  <defs>
                    <linearGradient id="leaf" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#6DBF83" />
                      <stop offset="100%" stopColor="#0C5424" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 20c40 30 60 60 60 90a60 60 0 1 1-120 0c0-30 20-60 60-90Z"
                    fill="url(#leaf)"
                    opacity="0.9"
                  />
                  <path
                    d="M100 30v140M100 60c-20 5-35 20-45 40M100 90c-15 5-25 18-32 35M100 60c20 5 35 20 45 40M100 90c15 5 25 18 32 35"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 backdrop-blur px-4 py-3">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">Carbon Footprint</div>
                  <div className="text-lg font-semibold text-brand-green-300">−82% vs Plastic</div>
                </div>
                <div className="text-3xl">🌱</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
