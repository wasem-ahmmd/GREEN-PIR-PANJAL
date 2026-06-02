import Link from "next/link";
import { contactItems } from "../data/contact";

export default function Contact() {
  const primaryEmail = contactItems.find((item) => item.type === "email");
  const phone = contactItems.find((item) => item.type === "phone");

  return (
    <section className="relative py-24 md:py-32">
      <div className="section">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-brand-green-300">
            // Get in Touch
          </div>
          <h1 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
            Let&apos;s build a{" "}
            <span className="text-gradient-green">greener future</span> together.
          </h1>
          <p className="mt-6 leading-relaxed text-white/70">
            Whether you&apos;re an investor, research partner or industry collaborator — we&apos;d
            love to hear from you.
          </p>
        </div>

        <div className="mt-14">
          <div className="text-xs uppercase tracking-[0.2em] text-white/40">Get in touch</div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {contactItems.map((item) => (
              <div key={item.label} className="glass rounded-2xl p-6">
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                  {item.label}
                </div>
                {item.type === "text" ? (
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{item.value}</p>
                ) : (
                  <a
                    href={item.href}
                    className="mt-3 inline-block max-w-full break-all text-sm text-white/80 transition hover:text-brand-green-300 sm:break-normal"
                  >
                    {item.value}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {primaryEmail && primaryEmail.type === "email" && (
            <a href={primaryEmail.href} className="btn-primary glow-green w-full sm:w-auto">
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
          )}
          {phone && phone.type === "phone" && (
            <a href={phone.href} className="btn-outline w-full sm:w-auto">
              Call Us
            </a>
          )}
          <Link href="/investors" className="btn-outline w-full sm:w-auto">
            View Investor Info
          </Link>
        </div>
      </div>
    </section>
  );
}
