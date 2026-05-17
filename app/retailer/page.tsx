import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Handshake,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Become a Retailer — SVF Soya Dealer & Distribution Partner",
  description:
    "Partner with SVF Soya as a dealer or distributor. Attractive margins, exclusive territorial rights, marketing support, and reliable supply. Apply now to grow with India's leading non-GMO soya manufacturer.",
  keywords: [
    "SVF Soya retailer",
    "soya meal dealer India",
    "SVF Soya distributor",
    "soya product channel partner",
    "non-GMO soya dealer Karnataka",
    "soya meal distribution India",
  ],
  alternates: { canonical: "https://www.svfsoya.com/retailer" },
  openGraph: {
    title: "Become a Retailer — SVF Soya Dealer Program",
    description:
      "Join SVF Soya's dealer network. Attractive margins, territorial rights, and full supply chain support for retailers and distributors across India.",
    url: "https://www.svfsoya.com/retailer",
  },
};

const whyCards = [
  {
    icon: Handshake,
    title: "Attractive dealer margins",
    text: "Structured pricing with channel-friendly margins built for sustainable retailer growth.",
  },
  {
    icon: ShieldCheck,
    title: "Exclusive territorial rights",
    text: "Regional alignment support to help active partners build long-term presence.",
  },
  {
    icon: PackageCheck,
    title: "Standard packaging",
    text: "Consistent, market-ready packs with reliable dispatch and batch traceability.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Marketing support",
    text: "Retail-facing collateral and launch assistance for high-potential territories.",
  },
  {
    icon: Truck,
    title: "Technical training",
    text: "Product orientation and usage training support for partner teams.",
  },
];

const stories = [
  {
    quote:
      "SVF Soya enabled us to hit dealer demand faster by doubling monthly volumes. The pricing and support helped us scale confidently.",
    name: "Ravi Nair",
    company: "Bengaluru Retail Hub",
  },
  {
    quote:
      "The channel onboarding gave us territory clarity and faster response from dispatch teams. Our buyers noticed the quality consistency.",
    name: "Santosh Rao",
    company: "Mysuru Agro Trade",
  },
];

const steps = [
  { step: "01", title: "Apply & Discuss", text: "Submit your interest and share city, segment, and expected throughput." },
  { step: "02", title: "Verification", text: "We review business profile, local demand fit, and operational readiness." },
  { step: "03", title: "Authorization", text: "Qualified partners receive onboarding support and launch guidance." },
];

const support = [
  "+91 90195 21992",
  "partners@svfsoya.com",
  "Mon - Sat, 09:30 to 18:30",
];

export default function RetailerPage() {
  return (
    <main className="page-shell">
      <section className="section-block section-dark px-6 pb-14 pt-28 md:px-10 md:pb-18 md:pt-34">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up overflow-hidden rounded-[1.7rem] border border-[var(--line)]">
            <div className="relative min-h-[24rem] md:min-h-[30rem]">
              <Image
                src="/products-hero-banner.png"
                alt="Retail warehouse background"
                fill
                priority
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-3)]/92 via-[var(--surface)]/78 to-[var(--surface-2)]/55" />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
                    Distribution Network
                  </p>
                  <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] text-[var(--foreground)] md:text-6xl">
                    Become an SVF Soya
                    <span className="block text-[var(--brand-green)]">Retail Partner</span>
                  </h1>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
                    Accelerate your business growth with our trusted soya sourcing, operational
                    backing, and retailer-focused support model.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="#retail-form" className="gold-button rounded-full px-6 py-3 text-sm font-semibold">
                    Apply Now
                  </Link>
                  <Link href="/contact" className="outline-button rounded-full px-6 py-3 text-sm font-semibold">
                    Download Brochure
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-3xl font-semibold text-[var(--light-foreground)] md:text-4xl">
            Why Choose SVF Soya?
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whyCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="panel-light reveal-up rounded-[1.2rem] p-5"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                    <Icon size={17} />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[var(--light-foreground)]">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--light-muted)]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            Retail Success Stories
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {stories.map((story, index) => (
              <div
                key={story.name}
                className="panel-dark reveal-up rounded-[1.3rem] p-6"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-4 inline-flex gap-1 text-[var(--brand-green)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <BadgeCheck key={i} size={14} />
                  ))}
                </div>
                <p className="text-sm leading-7 text-[var(--muted)]">{story.quote}</p>
                <p className="mt-5 text-sm font-semibold text-[var(--foreground)]">{story.name}</p>
                <p className="text-xs text-[var(--muted)]">{story.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-center text-3xl font-semibold text-[var(--light-foreground)] md:text-4xl">
            How to Become a Partner
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="panel-light reveal-up rounded-[1.3rem] p-6 text-center"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ring-soft)] text-sm font-semibold text-[var(--brand-green)]">
                  {step.step}
                </p>
                <p className="mt-4 text-sm font-semibold text-[var(--light-foreground)]">{step.title}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--light-muted)]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="retail-form" className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="panel-dark reveal-up rounded-[1.5rem] p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-[var(--foreground)]">Retail Enquiry Form</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Submit your details and our partnerships team will get in touch.
            </p>
            <form className="mt-6 grid gap-5 md:grid-cols-2">
              <input type="text" placeholder="Full Name" className="rounded-xl border border-[var(--line)] bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" />
              <input type="text" placeholder="Business Name" className="rounded-xl border border-[var(--line)] bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" />
              <input type="tel" placeholder="Phone" className="rounded-xl border border-[var(--line)] bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" />
              <input type="email" placeholder="Email" className="rounded-xl border border-[var(--line)] bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" />
              <input type="text" placeholder="City / State" className="rounded-xl border border-[var(--line)] bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" />
              <select className="rounded-xl border border-[var(--line)] bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none">
                <option>Preferred Product</option>
                <option>Soya Meal</option>
                <option>Full Fat Soya</option>
                <option>Crude Soybean Oil</option>
                <option>Raw Soybeans</option>
              </select>
              <textarea rows={4} placeholder="Message" className="md:col-span-2 rounded-xl border border-[var(--line)] bg-white/5 px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]" />
              <button type="submit" className="gold-button md:col-span-2 rounded-full px-6 py-3 text-sm font-semibold">
                Submit Partnership Application
              </button>
            </form>
          </div>

          <div className="grid gap-4">
            <div className="panel-dark reveal-up rounded-[1.5rem] p-6 md:p-7" style={{ animationDelay: "100ms" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                Dedicated Retail Support
              </p>
              <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                {support.map((line) => (
                  <p key={line} className="rounded-xl border border-[var(--line)] bg-white/5 px-4 py-3">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="panel-dark reveal-up rounded-[1.5rem] p-6 md:p-7" style={{ animationDelay: "160ms" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                Why SVF Retail?
              </p>
              <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                <p>Responsive supply communication</p>
                <p>Product and channel support</p>
                <p>Territory-focused growth outlook</p>
              </div>
              <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-[var(--brand-green)]">
                Talk to partnerships team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-10 md:px-10 md:py-12">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up rounded-[1.4rem] bg-[linear-gradient(135deg,var(--field-green),var(--brand-green))] px-6 py-7 text-center md:px-10">
            <p className="text-2xl font-semibold text-white md:text-3xl">Limited territories still available</p>
            <p className="mt-2 text-sm text-white/85">Ready to distribute with SVF Soya? Let&apos;s talk.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
