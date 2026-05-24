import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bolt,
  CircleGauge,
  Drumstick,
  Factory,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Full Fat Soya Meal — 38%+ Protein, High Energy Feed Ingredient",
  description:
    "SVF Soya's mechanically processed Full Fat Soya Meal with 38%+ protein and naturally retained oil. High energy content for poultry, swine, and aqua feed. Non-GMO, chemical-free, bulk supply available.",
  keywords: [
    "full fat soya meal manufacturer India",
    "full fat soya meal manufacturer Karnataka",
    "full fat soya meal exporter India",
    "full fat soya meal supplier India",
    "full fat soya supplier India",
    "full fat soya exporter India",
    "non GMO full fat soya meal India",
    "full fat soybean meal manufacturer India",
    "full fat soya for poultry feed",
    "full fat soya for broiler",
    "full fat soya for swine feed",
    "full fat soya for aqua feed",
    "full fat soya for animal feed",
    "full fat soya 38% protein",
    "high energy soya meal India",
    "full fat soya meal bulk supplier",
    "mechanically processed full fat soya",
    "chemical-free full fat soya India",
  ],
  alternates: { canonical: "https://www.svfsoya.com/products/full-fat-soya" },
  openGraph: {
    title: "Full Fat Soya Meal — 38%+ Protein | SVF Soya",
    description:
      "Non-GMO, chemical-free Full Fat Soya with 38%+ protein and retained oil. High energy feed ingredient for poultry, swine & aqua. Bulk supply, Pan-India & export.",
    url: "https://www.svfsoya.com/products/full-fat-soya",
    images: [{ url: "/full-fat-soya.png", width: 1200, height: 800, alt: "SVF Full Fat Soya" }],
  },
};

const quickStats = [
  { label: "Protein", value: "38-40%" },
  { label: "Oil", value: "18-20%" },
  { label: "Digestibility", value: "93%+" },
  { label: "Fiber", value: "5-6% Max" },
];

const specRows = [
  ["Crude Protein", "38.0 - 40.0%"],
  ["Oil", "18.0 - 20.0%"],
  ["Moisture", "10.0% Max"],
  ["Crude Fiber", "5.0 - 6.0%"],
  ["Ash", "6.0% Max"],
  ["Sand / Silica", "2.5% Max"],
  ["Urease Activity", "0.20 Max"],
];

const benefits = [
  {
    title: "High Protein Density",
    text: "Supports nutrient-dense formulations for poultry and feed manufacturing teams.",
  },
  {
    title: "Excellent Energy Value",
    text: "Retained oil improves metabolizable energy contribution in balanced feed programs.",
  },
  {
    title: "Rich in Natural Oils",
    text: "Preserves the natural value of soybean oil through controlled processing.",
  },
  {
    title: "Strong Digestibility",
    text: "Well-processed full fat soya supports consistent performance in end use.",
  },
];

const applications = [
  { icon: Drumstick, title: "Animal Feed", text: "Energy-rich ingredient for poultry, aqua, and cattle formulations." },
  { icon: ShieldCheck, title: "Pet Food", text: "Used where controlled protein and fat contribution are important." },
  { icon: Factory, title: "Feed Manufacturers", text: "Suitable for plants targeting value-added feed blends." },
  { icon: Truck, title: "Bulk Traders", text: "Structured dispatch support for regional and interstate movement." },
];

const storageCards = [
  "Packed and handled to preserve freshness and oil value.",
  "Dispatch planning aligned for contract buyers and repeat schedules.",
  "Batch-linked records available for quality review and supply discussions.",
];

export default function FullFatSoyaPage() {
  return (
    <main className="page-shell">
      <section className="section-block section-dark flex min-h-[100svh] items-center px-6 py-24 md:px-10 md:py-28">
        <div className="section-inner mx-auto max-w-7xl">
          <Link
            href="/products"
            className="reveal-up outline-button inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
          >
            <ArrowLeft size={14} />
            Back to Products
          </Link>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal-up overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-2)]">
              <div className="relative min-h-[28rem] md:min-h-[38rem]">
                <Image
                  src="/products-hero-banner.png"
                  alt="Full fat soya hero background"
                  fill
                  priority
                  className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-3)]/94 via-[var(--surface)]/82 to-[var(--surface-2)]/52" />
                <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
                      Product Detail
                    </p>
                    <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] text-[var(--foreground)] md:text-6xl">
                      Full Fat
                      <span className="block text-[var(--brand-green)]">Soya Meal</span>
                    </h1>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
                      Energy-rich non-GMO soya meal with retained oil, designed for high-performance
                      feed formulations and process-led procurement teams.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
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

              <div
                className="panel-dark reveal-up grid gap-4 rounded-[1.5rem] p-5 md:grid-cols-[1.05fr_0.95fr] md:p-6"
                style={{ animationDelay: "100ms" }}
              >
                <div className="relative min-h-[15rem] overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-white/5">
                  <Image src="/full-fat-soya.png" alt="Full fat soya product visual" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-between gap-3">
                  <div className="rounded-[1rem] border border-[var(--line)] bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)]">
                      Press Process
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      The retained oil profile comes from controlled mechanical processing, not
                      solvent stripping.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["/hero-b.png", "/products-hero-banner.png"].map((src) => (
                      <div
                        key={src}
                        className="relative min-h-[4.6rem] overflow-hidden rounded-[0.95rem] border border-[var(--line)] bg-white/5"
                      >
                        <Image src={src} alt="Full fat soya gallery" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="panel-dark reveal-up rounded-[1.5rem] p-5 md:p-6" style={{ animationDelay: "180ms" }}>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="gold-button flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
                  >
                    Request Quote for This Product
                  </Link>
                  <Link
                    href="/contact"
                    className="outline-button flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
                  >
                    Request Technical Sheet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel-light reveal-up overflow-hidden rounded-[1.5rem] p-4 md:p-5">
            <div className="relative min-h-[18rem] overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-[var(--background-soft)]">
              <Image src="/full-fat-soya.png" alt="Full fat soya process image" fill className="object-cover" />
            </div>
          </div>

          <div className="panel-light reveal-up rounded-[1.5rem] p-6 md:p-8" style={{ animationDelay: "90ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
              Process Story
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--light-foreground)] md:text-4xl">
              The Purest Press Process.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--light-muted)] md:text-base">
              Full fat soya from SVF is built through mechanical extraction and controlled handling
              so the product keeps its natural oil contribution while staying aligned with quality
              checkpoints and buyer confidence expectations.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--brand-green)]">
              <Leaf size={16} />
              Non-solvent process advantage for cleaner sourcing conversations
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-center text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
            Technical Specifications
          </h2>
          <div className="panel-dark reveal-up mx-auto mt-8 max-w-4xl rounded-[1.5rem] p-6 md:p-7">
            <div className="overflow-hidden rounded-[1.1rem] border border-[var(--line)]">
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
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-center text-2xl font-semibold text-[var(--light-foreground)] md:text-3xl">
            Key Nutritional Benefits
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className="panel-light reveal-up rounded-[1.2rem] p-5"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                  <Bolt size={16} />
                </div>
                <p className="mt-4 text-sm font-semibold text-[var(--light-foreground)]">{item.title}</p>
                <p className="mt-2 text-xs leading-6 text-[var(--light-muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="reveal-up text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
              Industrial Applications
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {applications.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="panel-dark reveal-up rounded-[1.2rem] p-5"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                      <Icon size={17} />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-2 text-xs leading-6 text-[var(--muted)]">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="panel-dark reveal-up rounded-[1.5rem] p-6 md:p-7" style={{ animationDelay: "110ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-green)]">
              Storage & Logistics
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              SVF supports commercial buyers with planned dispatch, batch traceability, and a
              product profile built for energy-forward feed conversations.
            </p>
            <div className="mt-5 space-y-3">
              {storageCards.map((item) => (
                <div key={item} className="rounded-[1rem] border border-[var(--line)] bg-white/5 p-4 text-sm text-[var(--muted)]">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--brand-green)]">
              <CircleGauge size={16} />
              Suited for scale-driven feed manufacturers and traders
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="panel-light reveal-up rounded-[1.6rem] bg-[linear-gradient(135deg,var(--field-green),var(--brand-green))] p-8 text-center md:p-10">
            <h2 className="text-2xl font-semibold text-white md:text-4xl">
              Want maximum energy and growth in your feed?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 md:text-base">
              Talk to SVF for full fat soya pricing, supply planning, and application-focused
              product support.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-green)]"
              >
                Request Quote Today
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
