"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/bio-bags", label: "Bio Bags" },
  { href: "/food-tech", label: "Food Tech" },
  { href: "/shop", label: "Shop" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-brand-black/70 border-b border-white/5" : ""
      }`}
    >
      <div className="section flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-400 to-brand-green-700 shadow-lg shadow-brand-green-700/40">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
              <path
                d="M12 3c4 4 6 8 6 11a6 6 0 1 1-12 0c0-3 2-7 6-11Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M12 8v8M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">Green Pir Panjal</div>
            <div className="text-[12px] text-center uppercase tracking-[0.2em] text-brand-green-300">R&amp;D</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand-green-400 hover:after:w-full after:transition-all ${
                pathname === l.href
                  ? "text-white after:w-full"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/investors" className="btn-primary !py-2 !px-5 text-xs">
            Invest With Us
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10"
          aria-label="Menu"
        >
          <span className="i-bars">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-brand-black/95 backdrop-blur-xl">
          <div className="section flex flex-col gap-2 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-lg px-3 py-2 text-sm hover:bg-white/5 ${
                  pathname === l.href ? "text-white bg-white/5" : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/investors" className="btn-primary mt-2">
              Invest With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
