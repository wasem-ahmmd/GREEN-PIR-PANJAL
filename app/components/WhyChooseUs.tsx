"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

const reasons = [
  {
    title: "Rooted in the Pir Panjal",
    desc: "We turn regional agricultural residues and mountain bio-resources into world-class sustainable materials — innovation built where it matters.",
    icon: (
      <path
        d="M12 3l2.5 7.5H22l-6 4.5 2.5 7.5L12 18l-6.5 4.5L8 15 2 10.5h7.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "True Bio-Polymer Science",
    desc: "Custom formulations engineered in our lab — plastic-grade performance with zero petroleum and full biodegradability.",
    icon: (
      <path d="M4 12c4-8 12-8 16 0s-4 8-8 8-12-2-8-8Z" stroke="currentColor" strokeWidth="1.5" />
    ),
  },
  {
    title: "Lab to Industry Ready",
    desc: "From molecular R&D to pilot-scale production — we design processes that partners can scale across South Asian markets.",
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
    title: "Dual R&D Verticals",
    desc: "Bio-degradable bags and next-gen food processing under one roof — diversified science, unified sustainability mission.",
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
    title: "Measured Impact",
    desc: "Lifecycle assessments and carbon accounting guide every product — transparent, data-backed environmental claims.",
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
  {
    title: "Built for Partnership",
    desc: "Investors, brands and research partners work with us from prototype to market — clear pathways, open collaboration.",
    icon: (
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm14 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const stats = [
  { value: "100%", label: "Biodegradable focus" },
  { value: "2", label: "R&D verticals" },
  { value: "2 yr", label: "Compost timeline" },
  { value: "0", label: "Petroleum in bags" },
];

function ReasonCard({
  title,
  desc,
  icon,
  index,
  show,
}: {
  title: string;
  desc: string;
  icon: ReactNode;
  index: number;
  show: boolean;
}) {
  return (
    <div
      className={`group relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-700 ease-out sm:p-6 ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: show ? `${index * 80}ms` : "0ms" }}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-green-500/0 blur-2xl transition duration-500 group-hover:bg-brand-green-500/15"
        aria-hidden
      />
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-green-500/20 bg-brand-green-700/25 text-brand-green-200 transition group-hover:border-brand-green-400/40 group-hover:bg-brand-green-600/30">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          {icon}
        </svg>
      </div>
      <div className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
        0{index + 1}
      </div>
      <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const [showCards, setShowCards] = useState(false);
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const cardsTimer = window.setTimeout(() => setShowCards(true), 1000);
    const restTimer = window.setTimeout(() => setShowRest(true), 1400);

    return () => {
      window.clearTimeout(cardsTimer);
      window.clearTimeout(restTimer);
    };
  }, []);

  return (
    <section id="why-choose-us" className="relative border-t border-white/5 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-40" aria-hidden />
      <div className="section relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-brand-green-300">
            // Why Green Pir Panjal
          </div>
          <h2 className="font-display mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
            Why <span className="text-gradient-green">Choose Us?</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
            Science-led, region-rooted and built for partners who want real biodegradable products —
            not greenwashing.
          </p>
        </div>

        {/* All cards — one centered container, auto show after 1s */}
        <div className="mt-10 flex justify-center lg:mt-14">
          <div
            className={`grid w-full max-w-5xl grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 ${
              showCards ? "visible" : "invisible"
            }`}
          >
            {reasons.map((reason, i) => (
              <ReasonCard key={reason.title} {...reason} index={i} show={showCards} />
            ))}
          </div>
        </div>

    

       
      </div>
    </section>
  );
}
