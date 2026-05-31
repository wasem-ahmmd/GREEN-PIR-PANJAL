export default function Contact() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="section">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-brand-green-300">
            // Get in Touch
          </div>
          <h1 className="font-display mt-4 text-4xl md:text-5xl leading-tight">
            Let&apos;s build a{" "}
            <span className="text-gradient-green">greener future</span> together.
          </h1>
          <p className="mt-6 text-white/70 leading-relaxed">
            Whether you&apos;re an investor, research partner or industry collaborator — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Investor relations",
              value: "invest@greenpirpanjal.com",
              href: "mailto:invest@greenpirpanjal.com",
            },
            {
              label: "Research partnerships",
              value: "lab@greenpirpanjal.com",
              href: "mailto:lab@greenpirpanjal.com",
            },
            {
              label: "Location",
              value: "Pir Panjal Range, Jammu & Kashmir, India",
              href: null,
            },
          ].map((item) => (
            <div key={item.label} className="glass rounded-2xl p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                {item.label}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-3 block text-sm text-white/80 transition hover:text-brand-green-300"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="mailto:invest@greenpirpanjal.com" className="btn-primary glow-green">
            Email Us
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="/investors" className="btn-outline">
            View Investor Info
          </a>
        </div>
      </div>
    </section>
  );
}
