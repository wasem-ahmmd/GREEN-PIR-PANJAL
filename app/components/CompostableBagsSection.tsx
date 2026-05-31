"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const items = [
  {
    tag: "// Our Technology",
    title: "Corn Starch",
    highlight: "Technology",
    image: "/images/corn-starch.jpg",
    imageAlt: "Corn starch technology for biodegradable bags",
    badge: { label: "Plant-Based", value: "Corn Starch Core" },
    imageOnLeft: true,
    desc: "Our corn starch technology transforms natural maize starch into high-performance biodegradable polymers — a clean, renewable alternative to petroleum-based plastics.",
    points: [
      "Renewable corn starch as core raw material",
      "Zero toxic additives — safe for soil",
      "Scalable for industrial production",
    ],
  },
  {
    tag: "// Our Product",
    title: "Eco-Friendly",
    highlight: "Compostable Bags",
    image: "/images/compostable-bags.jpg",
    imageAlt: "Eco-friendly compostable bags by Green Pir Panjal R&D",
    badge: { label: "100% Compostable", value: "180-Day Breakdown" },
    imageOnLeft: false,
    desc: "We engineer compostable bags from plant-based polymers and regional agricultural by-products — durable, plastic-free bags that safely return to the earth.",
    points: [
      "Plant-derived biodegradable polymers",
      "Fully compostable within 180 days",
      "Strong, flexible and plastic-free",
    ],
  },
];

function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    const timer = window.setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            observer?.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
      );
      observer.observe(el);
    }, delayMs);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [delayMs]);

  return ref;
}

function ItemImage({
  image,
  imageAlt,
  badge,
  imageOnLeft,
  delayMs,
}: {
  image: string;
  imageAlt: string;
  badge: { label: string; value: string };
  imageOnLeft: boolean;
  delayMs: number;
}) {
  const ref = useReveal<HTMLDivElement>(delayMs);

  return (
    <div
      ref={ref}
      className={`reveal flex ${imageOnLeft ? "justify-center md:justify-start" : "justify-center md:justify-end"}`}
    >
      <div className="group relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
        <div
          className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-brand-green-600/25 via-brand-green-500/10 to-transparent opacity-70 blur-xl transition duration-700 group-hover:opacity-100 group-hover:scale-105"
          aria-hidden
        />
        <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-brand-green-900/30 transition duration-500 group-hover:border-brand-green-500/40 group-hover:shadow-brand-green-500/20 animate-float">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center transition duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/55 via-transparent to-brand-green-900/10" />
          <div className="absolute bottom-3 left-3 rounded-lg border border-brand-green-500/30 bg-brand-black/70 px-3 py-1.5 backdrop-blur-sm transition duration-500 group-hover:border-brand-green-400/50 group-hover:bg-brand-black/85">
            <div className="text-[8px] uppercase tracking-[0.14em] text-brand-green-300">{badge.label}</div>
            <div className="text-xs font-semibold text-white">{badge.value}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemContent({
  tag,
  title,
  highlight,
  desc,
  points,
  delayMs,
}: {
  tag: string;
  title: string;
  highlight: string;
  desc: string;
  points: string[];
  delayMs: number;
}) {
  const ref = useReveal<HTMLDivElement>(delayMs);

  return (
    <div ref={ref} className="reveal">
      <div className="text-xs uppercase tracking-[0.25em] text-brand-green-300">{tag}</div>
      <h2 className="font-display mt-3 text-2xl leading-tight md:text-3xl lg:text-4xl">
        {title} <span className="text-gradient-green">{highlight}</span>
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{desc}</p>

      <ul className="mt-5 space-y-2.5">
        {points.map((point, i) => (
          <li
            key={point}
            className="flex items-start gap-3 text-sm text-white/75 transition hover:translate-x-1"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green-500/20 text-brand-green-300">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                <path
                  d="M5 12l4 4 10-10"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {point}
          </li>
        ))}
      </ul>

      <Link
        href="/bio-bags"
        className="btn-primary mt-7 inline-flex transition hover:gap-3"
      >
        Read More
        <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}

export default function CompostableBagsSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" aria-hidden />
      <div className="section relative space-y-14 md:space-y-20">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="grid items-center gap-5 md:grid-cols-2 md:gap-6 lg:gap-8"
          >
            <div className={item.imageOnLeft ? "order-1" : "order-1 md:order-2"}>
              <ItemImage
                image={item.image}
                imageAlt={item.imageAlt}
                badge={item.badge}
                imageOnLeft={item.imageOnLeft}
                delayMs={index * 80}
              />
            </div>
            <div className={item.imageOnLeft ? "order-2" : "order-2 md:order-1"}>
              <ItemContent
                tag={item.tag}
                title={item.title}
                highlight={item.highlight}
                desc={item.desc}
                points={item.points}
                delayMs={index * 80 + 120}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
