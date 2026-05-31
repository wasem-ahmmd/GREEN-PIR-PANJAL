import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const stats = [
    { k: "100%", v: "Biodegradable" },
    { k: "2", v: "R&D Verticals" },
    { k: "0", v: "Plastic Waste Goal" },
    { k: "∞", v: "Scalable Impact" },
  ];

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Pir Panjal green forest landscape"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={85}
      />

      {/* Brand overlay — keeps text readable & colors intact */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/85 via-brand-black/70 to-brand-green-900/90" />
      <div className="absolute inset-0 bg-brand-green-900/25" />

      <div className="section relative z-10 flex min-h-[100dvh] w-full flex-col px-5 pb-6 pt-[4.75rem] sm:px-6 md:px-10 md:pb-8 md:pt-28">
        {/* Main content */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="inline-flex max-w-[92vw] items-center gap-2 rounded-full border border-brand-green-500/40 bg-brand-black/40 px-3 py-1.5 text-[10px] font-medium text-brand-green-200 backdrop-blur-md sm:gap-2.5 sm:px-4 sm:py-2 sm:text-xs">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green-400" />
            </span>
            Pioneering Sustainable Innovation from Pir Panjal
          </div>

          <h1 className="font-display mt-5 max-w-4xl text-[2rem] leading-[1.1] tracking-tight sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">
            Engineering a{" "}
            <span className="text-gradient-green italic">Greener</span>
            <br />
            Tomorrow,
            <span className="text-white/60"> Today.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-6 sm:text-base md:text-lg">
            Green Pir Panjal R&amp;D is a research lab developing{" "}
            <span className="font-medium text-white">biodegradable bag materials</span> and{" "}
            <span className="font-medium text-white">next-generation food processing technologies</span>{" "}
            — turning regional bio-resources into world-class sustainable products.
          </p>

          <div className="mt-6 flex w-full max-w-sm flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center">
            <Link href="/investors" className="btn-primary glow-green w-full sm:w-auto">
              Become an Investor
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/research" className="btn-outline w-full sm:w-auto">
              Explore Our Research
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-4 w-full max-w-3xl shrink-0 sm:mt-6 md:max-w-4xl">
          <div className="grid grid-cols-4 divide-x divide-white/10 rounded-xl border border-white/10 bg-brand-black/40 backdrop-blur-md md:rounded-2xl">
            {stats.map((s) => (
              <div key={s.v} className="px-2 py-3 text-center sm:px-4 sm:py-4 md:py-5">
                <div className="font-display text-lg text-brand-green-300 sm:text-2xl md:text-3xl lg:text-4xl">
                  {s.k}
                </div>
                <div className="mt-1 text-[7px] uppercase leading-tight tracking-[0.14em] text-white/60 sm:text-[9px] md:text-[10px]">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-4 hidden shrink-0 justify-center sm:flex md:mt-6">
          <Link
            href="/about"
            className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-white/40 transition hover:text-brand-green-300"
          >
            <span>Discover</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 animate-bounce" fill="none">
              <path
                d="M12 5v14M6 13l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
