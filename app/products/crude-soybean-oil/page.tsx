import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CircleGauge,
  Droplets,
  Factory,
  FlaskConical,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Crude Soybean Oil — Mechanically Extracted, Low Impurity",
  description:
    "SVF Soya's crude soybean oil extracted via cold-press mechanical process. Low impurity, no solvent residue. For downstream refining, biodiesel, and industrial applications. HS Code 1507. Bulk supply & export.",
  keywords: [
    "crude soybean oil manufacturer India",
    "crude soybean oil manufacturer Karnataka",
    "crude soybean oil exporter India",
    "crude soybean oil exporter from India",
    "crude soybean oil supplier India",
    "crude soyabean oil manufacturer India",
    "crude soyabean oil exporter India",
    "crude soyabean oil supplier India",
    "crude soya oil manufacturer India",
    "crude soya oil manufacturer Karnataka",
    "crude soya oil exporter India",
    "crude soya oil supplier India",
    "soybean oil manufacturer India",
    "soybean oil manufacturer Karnataka",
    "soybean oil exporter India",
    "soybean oil exporter from India",
    "soybean oil supplier India",
    "soyabean oil manufacturer India",
    "soyabean oil exporter India",
    "soyabean oil supplier India",
    "soya oil manufacturer India",
    "soya oil manufacturer Karnataka",
    "soya oil exporter India",
    "soya oil supplier India",
    "non GMO crude soybean oil manufacturer India",
    "non GMO crude soya oil manufacturer India",
    "non GMO soybean oil manufacturer India",
    "non GMO soybean oil exporter India",
    "cold press crude soybean oil manufacturer India",
    "cold press crude soybean oil exporter India",
    "mechanical extraction soybean oil India",
    "chemical-free soybean oil Karnataka",
    "bulk soybean oil supplier India",
    "crude soybean oil HS code 1507",
    "soybean oil for refining India",
    "soybean oil industrial use India",
  ],
  alternates: { canonical: "https://www.svfsoya.com/products/crude-soybean-oil" },
  openGraph: {
    title: "Crude Soybean Oil — Cold-Press, No Solvent | SVF Soya",
    description:
      "Mechanically extracted crude soybean oil with low impurity and zero hexane residue. For refining, biodiesel, and industrial use. HS 1507. Bulk & export supply.",
    url: "https://www.svfsoya.com/products/crude-soybean-oil",
    images: [{ url: "/cruid-oil.png", width: 1200, height: 800, alt: "SVF Crude Soybean Oil" }],
  },
};

const quickStats = [
  { label: "FFA", value: "2.5% Max" },
  { label: "Moisture", value: "0.20%" },
  { label: "Storage", value: "07 Days" },
  { label: "Solvent Use", value: "Zero" },
];

const flowCards = [
  {
    step: "01",
    title: "Bean Intake",
    text: "Approved soybean lots are screened before entering the press line.",
  },
  {
    step: "02",
    title: "Expeller Press",
    text: "Oil is separated through mechanical extraction without solvent use.",
  },
  {
    step: "03",
    title: "Crude Oil Handling",
    text: "Filtered and stabilized for dispatch into downstream refining chains.",
  },
  {
    step: "04",
    title: "Pure",
    text: "Chemical-free extraction supports a cleaner sourcing story.",
  },
];

const specRows = [
  ["FFA", "2.50% Max"],
  ["Moisture", "0.20% Max"],
  ["Impurities", "0.15% Max"],
  ["Peroxide Value", "3.2 Max"],
  ["Color", "Golden"],
  ["Specific Gravity", "0.91 - 0.93"],
];

const benefits = [
  {
    icon: Droplets,
    title: "Natural & Pure",
    text: "Mechanically extracted crude oil with a cleaner process profile.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    text: "Built for refining pipelines that need consistent handling discipline.",
  },
  {
    icon: ShieldCheck,
    title: "Oil Stability",
    text: "Managed for moisture, impurity, and short-term dispatch performance.",
  },
  {
    icon: CircleGauge,
    title: "Refinery-Ready",
    text: "Suited for buyers seeking predictable crude oil input material.",
  },
];

const applications = [
  { icon: Factory, title: "Refineries" },
  { icon: FlaskConical, title: "Industrial Use" },
  { icon: PackageCheck, title: "Bulk Supply" },
  { icon: Truck, title: "Interstate Dispatch" },
  { icon: Droplets, title: "Oil Trading" },
];

const reasons = [
  "Zero chemical solvent route from mechanical extraction.",
  "Structured moisture and impurity control before dispatch.",
  "Buyer-friendly quality story for premium sourcing discussions.",
  "Reliable plant-side handling and traceable batch flow.",
  "Suitable for scale-focused crude oil buyers and partners.",
];

export default function CrudeSoybeanOilPage() {
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

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="reveal-up overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-2)]">
              <div className="relative min-h-[28rem] md:min-h-[38rem]">
                <Image
                  src="/products-hero-banner.png"
                  alt="Crude soybean oil hero background"
                  fill
                  priority
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-3)]/92 via-[var(--surface)]/78 to-[var(--surface-2)]/52" />
                <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
                      Product Detail
                    </p>
                    <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] text-[var(--foreground)] md:text-6xl">
                      Non-GMO
                      <span className="block text-[var(--brand-green)]">Crude Soybean Oil</span>
                    </h1>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
                      Golden, mechanically extracted crude soybean oil for refinery buyers who
                      value zero-solvent processing and documented handling.
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

              <div className="panel-dark reveal-up rounded-[1.5rem] p-5 md:p-6" style={{ animationDelay: "100ms" }}>
                <div className="grid gap-3 sm:grid-cols-[1fr_0.95fr]">
                  <div className="relative min-h-[14rem] overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-white/5">
                    <Image src="/cruid-oil.png" alt="Crude soybean oil product" fill className="object-cover" />
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-[1rem] border border-[var(--line)] bg-white/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)]">
                        Logistics & Packaging
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                        Structured for dispatch-ready handoff into industrial storage and refining systems.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {["/hero-b.png", "/products-hero-banner.png"].map((src) => (
                        <div
                          key={src}
                          className="relative min-h-[5rem] overflow-hidden rounded-[0.95rem] border border-[var(--line)] bg-white/5"
                        >
                          <Image src={src} alt="Oil gallery" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-center text-2xl font-semibold text-[var(--light-foreground)] md:text-3xl">
            Mechanical Extraction Flow
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {flowCards.map((item, index) => (
              <div
                key={item.step}
                className={`panel-light reveal-up rounded-[1.2rem] p-5 ${item.step === "04" ? "bg-[linear-gradient(135deg,var(--field-green),var(--brand-green))] text-white" : ""}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${item.step === "04" ? "text-white/80" : "text-[var(--brand-green)]"}`}>
                  {item.step}
                </p>
                <p className={`mt-3 text-sm font-semibold ${item.step === "04" ? "text-white" : "text-[var(--light-foreground)]"}`}>
                  {item.title}
                </p>
                <p className={`mt-2 text-xs leading-6 ${item.step === "04" ? "text-white/80" : "text-[var(--light-muted)]"}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
            Technical Specifications
          </h2>
          <div className="panel-dark reveal-up mt-8 rounded-[1.5rem] p-6 md:p-7">
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
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="panel-light reveal-up rounded-[1.2rem] p-5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                    <Icon size={16} />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[var(--light-foreground)]">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 text-[var(--light-muted)]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
            Industrial Applications
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {applications.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="panel-dark reveal-up rounded-[1.15rem] p-4 text-center"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                    <Icon size={16} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-light reveal-up rounded-[1.5rem] p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-[var(--light-foreground)] md:text-3xl">
              Why SVF Crude Oil?
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {reasons.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-[var(--line)] bg-[var(--background-soft)] px-4 py-3 text-sm text-[var(--light-foreground)]"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel-light reveal-up overflow-hidden rounded-[1.5rem] p-4 md:p-5" style={{ animationDelay: "120ms" }}>
            <div className="relative min-h-[20rem] overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-[var(--background-soft)]">
              <Image src="/products-hero-banner.png" alt="Crude oil plant image" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="panel-dark reveal-up rounded-[1.6rem] p-8 text-center md:p-10">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-4xl">
              Need a refinery-ready crude soybean oil source?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              Connect with SVF for bulk pricing, supply schedules, and documentation support.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#cta"
                className="gold-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
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
