import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Beaker,
  ChartNoAxesColumn,
  CircleGauge,
  Factory,
  FlaskConical,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Soya Meal — 47%+ Protein, Non-GMO, Chemical-Free",
  description:
    "SVF Soya's mechanically extracted Soya Meal with 47%+ crude protein, low moisture (≤6%), and zero solvent residue. Ideal for poultry, aquaculture, and cattle feed. Available in bulk. Pan-India delivery & export.",
  keywords: [
    "soya meal manufacturer India",
    "soya meal manufacturer Karnataka",
    "soya meal manufacturer Bengaluru",
    "soya meal exporter India",
    "soya meal exporter Karnataka",
    "soya meal supplier India",
    "soya meal supplier Karnataka",
    "non GMO soya meal manufacturer India",
    "non GMO soya meal exporter India",
    "non GMO soya meal supplier India",
    "soy meal manufacturer India",
    "soy meal exporter India",
    "soya DOC manufacturer India",
    "soya DOC exporter India",
    "soyabean meal manufacturer India",
    "soyabean meal exporter India",
    "soybean meal manufacturer India",
    "soybean meal exporter India",
    "soybean meal supplier India",
    "soyabean oil cake manufacturer India",
    "soyabean oil cake exporter India",
    "soybean oil cake manufacturer India",
    "soybean oil cake supplier India",
    "non GMO soybean meal manufacturer India",
    "non GMO soyabean meal manufacturer India",
    "non GMO soybean oil cake manufacturer India",
    "soya meal for poultry feed",
    "soybean meal for poultry feed",
    "soya meal for broiler",
    "soybean meal for broiler",
    "soya meal for broiler breeder",
    "soya meal for weight layer birds",
    "soya meal for animal feed",
    "soybean meal for animal feed",
    "soya meal for horse feed",
    "soybean meal for horse feed",
    "soya meal for pig feed",
    "soya meal for swine feed",
    "soybean meal for swine feed",
    "soya meal for goat feed",
    "soybean meal for goat feed",
    "soya meal for aqua feed",
    "soybean meal for aqua feed",
    "non GMO soya meal for poultry feed",
    "non GMO soya meal for broiler",
    "non GMO soybean meal for animal feed",
    "soya meal 47% protein",
    "high protein soya meal Karnataka",
    "chemical-free soya meal",
    "mechanical soya extraction",
    "FSSAI certified soya meal",
    "APEDA registered soya meal",
  ],
  alternates: { canonical: "https://www.svfsoya.com/products/soya-meal" },
  openGraph: {
    title: "Soya Meal — 47%+ Protein | SVF Soya Pvt. Ltd.",
    description:
      "Mechanically extracted, chemical-free Soya Meal with 47%+ protein. For poultry, aqua, and cattle feed. Bulk supply, Pan-India & export. Request a free sample.",
    url: "https://www.svfsoya.com/products/soya-meal",
    images: [{ url: "/soya-meal.png", width: 1200, height: 800, alt: "SVF Soya Meal" }],
  },
};

const gallery = [
  { src: "/soya-meal.png", alt: "Soya meal product pile" },
  { src: "/hero-b.png", alt: "Mechanical extraction visual" },
  { src: "/hero.png", alt: "Soybean raw material visual" },
  { src: "/products-hero-banner.png", alt: "Plant document visual" },
];

const quickStats = [
  { label: "Min Protein", value: "47%" },
  { label: "Fiber", value: "6% Max" },
  { label: "Moisture", value: "6% Max" },
  { label: "Origin", value: "Karnataka" },
  { label: "Process", value: "Mechanical" },
];

const specRows = [
  ["Protein", "47% Min"],
  ["Fat", "6% Min"],
  ["Moisture", "6% Max"],
  ["Fibre", "6% Max"],
  ["Sand & Silica", "1% Max"],
  ["Total Ash", "0% Max"],
  ["Urease Activity", "3% Max"],
];

const flow = [
  {
    icon: Factory,
    title: "Raw Material Selection",
    text: "Clean non-GMO soybeans screened for moisture and foreign matter before intake.",
  },
  {
    icon: CircleGauge,
    title: "Mechanical Extraction",
    text: "Cold-press expeller route removes oil without solvent use or hexane residue risk.",
  },
  {
    icon: FlaskConical,
    title: "Process Conditioning",
    text: "Controlled heating, cooling, and grinding keep protein performance commercially stable.",
  },
  {
    icon: Beaker,
    title: "Laboratory Validation",
    text: "Each lot is tested for protein, fiber, moisture, and contamination before release.",
  },
];

const advantages = [
  {
    title: "Market Positioning",
    text: "A cleaner non-solvent story that supports premium feed and export conversations.",
  },
  {
    title: "Quality",
    text: "Better process discipline with consistent protein range and stable dispatch performance.",
  },
  {
    title: "Buyer Confidence",
    text: "Lower hesitation for customers seeking chemical-free sourcing narratives.",
  },
];

const applications = [
  { icon: BadgeCheck, label: "Poultry Feed" },
  { icon: ShieldCheck, label: "Aqua Feed" },
  { icon: ChartNoAxesColumn, label: "Cattle Feed" },
  { icon: Truck, label: "Bulk Trading" },
];

const reasons = [
  "High protein concentration designed for commercial feed formulations.",
  "Mechanical extraction with zero chemical solvent route.",
  "Laboratory-backed release discipline before dispatch.",
  "Reliable batch consistency for repeat procurement teams.",
];

export default function SoyaMealPage() {
  return (
    <main className="page-shell">
      <section className="section-block section-dark min-h-[100dvh] items-center px-6 py-24 md:px-10 md:py-28">
        <div className="">
          <Link
            href="/products"
            className="reveal-up outline-button inline-flex items-center gap-2 mb-4 rounded-full px-4 py-2 text-xs font-semibold"
          >
            <ArrowLeft size={14} />
            Back to Products
          </Link>

          <div className="reveal-up overflow-hidden w-full rounded-[1.6rem] border">
            <div className="relative min-h-[28rem] md:min-h-[38rem] w-full">
              <Image
                src="/products-hero-banner.png"
                alt="Soya meal hero background"
                fill
                priority
                className="object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-3)]/95 via-[var(--surface)]/88 to-[var(--surface-2)]/45" />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
                    Product Detail
                  </p>
                  <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] text-[var(--brand-green)] md:text-6xl">
                    Non-GMO Soya Meal
                    <span className="block text-[var(--brand-green)]">(Soya DOC)</span>
                  </h1>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
                    High-protein soya meal for poultry, aqua, and cattle feed buyers who need
                    commercial consistency with a cleaner process story.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/#cta"
                    className="gold-button inline-flex rounded-full px-5 py-3 text-sm font-semibold"
                  >
                    Request Pricing & Availability
                  </Link>
                  <Link
                    href="/manufacturing-process"
                    className="outline-button inline-flex rounded-full px-5 py-3 text-sm font-semibold"
                  >
                    View Production Process
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-6">

            <div className="grid gap-4">
              <div className="panel-dark reveal-up rounded-[1.5rem] p-5 md:p-6">
                <div className="grid grid-cols-2 gap-3">
                  {quickStats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[var(--line)] bg-white/5 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel-dark reveal-up rounded-[1.5rem] p-5 md:p-6" style={{ animationDelay: "110ms" }}>
                <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative min-h-[13rem] overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-white/5">
                    <Image src="/soya-meal.png" alt="Soya meal close-up" fill className="object-cover" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-2">
                    {gallery.slice(1).map((item) => (
                      <div
                        key={item.alt}
                        className="relative min-h-[4.7rem] overflow-hidden rounded-[1rem] border border-[var(--line)] bg-white/5"
                      >
                        <Image src={item.src} alt={item.alt} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="panel-dark reveal-up rounded-[1.5rem] p-5 md:p-6" style={{ animationDelay: "180ms" }}>
                <div className="space-y-3">
                  <Link
                    href="/#cta"
                    className="gold-button flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
                  >
                    Request Quote for This Product
                  </Link>
                  <Link
                    href="/#quality"
                    className="outline-button flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
                  >
                    Download Technical Sheet
                  </Link>
                  <Link
                    href="/manufacturing-process"
                    className="outline-button flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
                  >
                    Quality & Process Assurance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="panel-light reveal-up rounded-[1.5rem] p-6 md:p-8">
            <h2 className="text-center text-2xl font-semibold text-[var(--light-foreground)] md:text-3xl">
              Chemical-Free Production Flow
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {flow.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[1.2rem] border border-[var(--line)] bg-[var(--background-soft)] p-5"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-[var(--light-foreground)]">{item.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-[var(--light-muted)]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-dark reveal-up rounded-[1.5rem] p-6 md:p-7">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              Technical Specifications
            </h2>
            <div className="mt-5 overflow-hidden rounded-[1.1rem] border border-[var(--line)]">
              {specRows.map(([label, value], index) => (
                <div
                  key={label}
                  className={`flex items-center justify-between px-4 py-3 text-sm ${
                    index !== specRows.length - 1 ? "border-b border-[var(--line)]" : ""
                  }`}
                >
                  <span className="text-[var(--muted)]">{label}</span>
                  <span className="font-semibold text-[var(--foreground)]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="panel-dark reveal-up rounded-[1.5rem] p-6 md:p-7" style={{ animationDelay: "100ms" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-green)]">
                Batch Snapshot
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                SVF lots are tested for protein, moisture, fat, fiber, and urease before dispatch.
                Documentation is structured for buyer approval and repeat procurement review.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[var(--line)] bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-[var(--brand-green)]">47%+</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">Min Protein</p>
                </div>
                <div className="rounded-2xl border border-[var(--line)] bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-[var(--brand-green)]">0.12</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">Urease</p>
                </div>
              </div>
            </div>

            <div className="panel-dark reveal-up rounded-[1.5rem] p-6 md:p-7" style={{ animationDelay: "160ms" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-green)]">
                Dispatch Readiness
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <li>Lot-coded dispatch documentation</li>
                <li>Quality release aligned with B2B buyer checks</li>
                <li>Bulk inquiry support for domestic and export discussions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-center text-2xl font-semibold text-[var(--light-foreground)] md:text-3xl">
            The SVF Soya Advantage
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {advantages.map((item, index) => (
              <div
                key={item.title}
                className="panel-light reveal-up rounded-[1.3rem] p-5"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-sm font-semibold text-[var(--light-foreground)]">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--light-muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-center text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
            Global Feed Applications
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="panel-dark reveal-up rounded-[1.2rem] p-5 text-center"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                    <Icon size={18} />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal-up">
              <h2 className="text-2xl font-semibold text-[var(--light-foreground)] md:text-3xl">
                Why Choose SVF Soya Meal
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--light-muted)]">
                Built for buyers who care about measurable performance, clean sourcing narratives,
                and consistent operational follow-through.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((item, index) => (
                <div
                  key={item}
                  className="panel-light reveal-up rounded-[1.2rem] p-5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <p className="text-sm leading-7 text-[var(--light-foreground)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="panel-dark reveal-up rounded-[1.6rem] p-8 text-center md:p-10">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-4xl">
              Ready for consistent, high-performance soya meal?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              Connect with SVF for pricing, sample validation, and plant-backed supply discussions.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#cta"
                className="gold-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                Request Quote
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/manufacturing-process"
                className="outline-button inline-flex rounded-full px-6 py-3 text-sm font-semibold"
              >
                Explore Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
