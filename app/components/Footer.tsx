import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="section py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-400 to-brand-green-700">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
                <path
                  d="M12 3c4 4 6 8 6 11a6 6 0 1 1-12 0c0-3 2-7 6-11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            <div>
              <div className="text-sm font-semibold">Green Pir Panjal R&amp;D</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand-green-300">
                Research Lab
              </div>
            </div>
          </Link>
          <p className="mt-5 max-w-sm text-sm text-white/60 leading-relaxed">
            A research lab building biodegradable materials and food processing technologies from the Pir Panjal — for the planet, for the people.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-brand-green-300">About</Link></li>
            <li><Link href="/research" className="hover:text-brand-green-300">Research</Link></li>
            <li><Link href="/bio-bags" className="hover:text-brand-green-300">Bio Bags</Link></li>
            <li><Link href="/food-tech" className="hover:text-brand-green-300">Food Tech</Link></li>
            <li><Link href="/investors" className="hover:text-brand-green-300">Investors</Link></li>
            <li><Link href="/contact" className="hover:text-brand-green-300">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40">Get in touch</div>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">Investor relations</div>
              <a href="mailto:invest@greenpirpanjal.com" className="hover:text-brand-green-300">invest@greenpirpanjal.com</a>
            </li>
            <li>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">Research partnerships</div>
              <a href="mailto:lab@greenpirpanjal.com" className="hover:text-brand-green-300">lab@greenpirpanjal.com</a>
            </li>
            <li>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">Location</div>
              <span>Pir Panjal Range, Jammu &amp; Kashmir, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="section flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Green Pir Panjal R&amp;D. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="hover:text-brand-green-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
