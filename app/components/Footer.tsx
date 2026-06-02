import Link from "next/link";
import { contactItems } from "../data/contact";

const exploreLinks = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/bio-bags", label: "Bio Bags" },
  { href: "/food-tech", label: "Food Tech" },
  { href: "/shop", label: "Shop" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/5 sm:mt-20">
      <div className="section py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-400 to-brand-green-700">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
                  <path
                    d="M12 3c4 4 6 8 6 11a6 6 0 1 1-12 0c0-3 2-7 6-11Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <span className="text-sm font-semibold leading-snug sm:text-base">
                Green Pir Panjal R&amp;D
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:mt-5">
              A research lab building biodegradable materials and food processing technologies from
              the Pir Panjal — for the planet, for the people.
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">Explore</div>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1 sm:gap-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-0.5 text-sm text-white/70 transition hover:text-brand-green-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">Get in touch</div>
            <ul className="mt-4 space-y-4 sm:space-y-3">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    {item.label}
                  </div>
                  {item.type === "text" ? (
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{item.value}</p>
                  ) : (
                    <a
                      href={item.href}
                      className="mt-1 inline-block max-w-full break-all text-sm text-white/70 transition hover:text-brand-green-300 sm:break-normal"
                    >
                      {item.value}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="section flex flex-col items-center gap-3 px-5 py-5 text-center sm:flex-row sm:justify-between sm:gap-4 sm:py-6 sm:text-left">
          <p className="text-[11px] leading-relaxed text-white/40 sm:text-xs">
            © {new Date().getFullYear()} Green Pir Panjal R&amp;D. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-xs text-white/50 transition hover:text-brand-green-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
