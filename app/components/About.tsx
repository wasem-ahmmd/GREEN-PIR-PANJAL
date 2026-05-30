export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section grid gap-16 md:grid-cols-2 md:gap-20 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-brand-green-300">
            // About the Lab
          </div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl leading-tight">
            A research lab rooted in the{" "}
            <span className="text-gradient-green">Pir Panjal</span>, built for the planet.
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed">
            Born in the heart of the Pir Panjal range, our laboratory blends indigenous knowledge with modern materials science. We focus on two transformative verticals — biodegradable bag materials that replace single-use plastics, and food processing technologies that preserve nutrition, reduce waste and unlock value for local growers.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            We are a venture-ready R&amp;D house. Every formulation, every prototype, every pilot is engineered to scale — from lab bench to industrial line.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Material Science", "Food Engineering", "Pilot Manufacturing", "IP Portfolio"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-2 gap-6">
              {[
                { n: "01", t: "Mission", d: "Replace plastic and reduce post-harvest loss with bio-engineered solutions." },
                { n: "02", t: "Vision", d: "Make Pir Panjal a global hub for sustainable materials and food tech." },
                { n: "03", t: "Approach", d: "Rigorous research, fast prototyping, transparent partnerships." },
                { n: "04", t: "Impact", d: "Cleaner ecosystems, healthier food chains, empowered farmers." },
              ].map((c) => (
                <div key={c.n} className="group">
                  <div className="font-display text-2xl text-brand-green-300/80 group-hover:text-brand-green-300 transition">
                    {c.n}
                  </div>
                  <div className="mt-2 text-sm font-semibold">{c.t}</div>
                  <p className="mt-1 text-xs text-white/60 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-green-700/40 via-transparent to-brand-green-500/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
