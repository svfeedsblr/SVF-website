import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  Factory,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Raw Soybeans — Clean Sourced, Non-GMO, Bulk Supply",
  description:
    "SVF Soya supplies clean-sourced, non-GMO raw soybeans for processors and traders across India. Consistent lot quality, moisture-controlled storage, and reliable dispatch. Bulk orders welcome.",
  keywords: [
    "raw soybeans supplier India",
    "non-GMO soybeans Karnataka",
    "soybeans for processing India",
    "bulk soybeans India",
    "soybean trader Karnataka",
    "soybean supplier Bangalore",
  ],
  alternates: { canonical: "https://www.svfsoya.com/products/raw-soybeans" },
  openGraph: {
    title: "Raw Soybeans — Non-GMO, Bulk Supply | SVF Soya",
    description:
      "Clean-sourced, non-GMO raw soybeans for processors and traders. Consistent quality, moisture-controlled storage, bulk supply across India.",
    url: "https://www.svfsoya.com/products/raw-soybeans",
    images: [{ url: "/full-soya.png", width: 1200, height: 800, alt: "SVF Raw Soybeans" }],
  },
};

const quickStats = [
  { label: "Origin", value: "Karnataka" },
  { label: "Moisture", value: "12% Max" },
  { label: "Purity", value: "98%+" },
  { label: "Sorting", value: "Lot Controlled" },
];

const specRows = [
  ["Moisture", "12.0% Max"],
  ["Broken", "2.0% Max"],
  ["Foreign Matter", "1.0% Max"],
  ["Damage", "2.0% Max"],
  ["Purity", "98.0% Min"],
  ["Uniform Size", "Yes"],
];

const applicationCards = [
  { icon: Factory, title: "Processors" },
  { icon: PackageCheck, title: "Feed Plants" },
  { icon: Building2, title: "Bulk Traders" },
  { icon: Boxes, title: "Warehousing" },
  { icon: Truck, title: "Distribution" },
  { icon: BadgeCheck, title: "Export Prep" },
];

const reasonCards = [
  "Consistent lot sorting and traceable inbound handling.",
  "Cleaner sourcing confidence for downstream processors.",
  "Suitable for repeat procurement with documented quality checks.",
  "Managed for moisture, broken grains, and foreign matter limits.",
  "Ready for trading, processing, and industrial dispatch programs.",
  "Backed by plant-side records and batch-level control discipline.",
];

const valueCards = [
  {
    icon: Leaf,
    title: "Natural Consistency",
    text: "Sourced and screened for buyers seeking stable raw soybean lots.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainable Farming",
    text: "Cleaner sourcing narrative for value-conscious supply programs.",
  },
  {
    icon: BadgeCheck,
    title: "Market Versatility",
    text: "Useful across processing, feed, trading, and distribution channels.",
  },
];

export default function RawSoybeansPage() {
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
                  src="/full-soya.png"
                  alt="Raw soybean hero background"
                  fill
                  priority
                  className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--surface-3)]/88 via-[var(--surface)]/62 to-[var(--surface-2)]/50" />
                <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
                      Product Detail
                    </p>
                    <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] text-[var(--foreground)] md:text-6xl">
                      Premium
                      <span className="block text-[var(--foreground)]">Non-GMO</span>
                      <span className="block text-[var(--brand-green)]">Indian Soybeans</span>
                    </h1>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--muted)] md:text-base">
                      Clean-sourced soybeans with traceable lot quality for processors, feed plants,
                      and commercial trading partners.
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
                <div className="grid gap-3 sm:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative min-h-[14rem] overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-white/5">
                    <Image src="/full-soya.png" alt="Raw soybeans close-up" fill className="object-cover" />
                  </div>
                  <div className="rounded-[1rem] border border-[var(--line)] bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)]">
                      What Are Non-GMO Soybeans?
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      These are soybeans sourced for natural grain integrity and commercial-grade
                      sorting, without reliance on modified input positioning in the supply story.
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-[var(--muted)]">
                      <li>Traceable lot sourcing</li>
                      <li>Sorted for industrial procurement</li>
                      <li>Ready for processing and trading channels</li>
                    </ul>
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
          <div className="panel-light reveal-up rounded-[1.5rem] p-6 md:p-8">
            <h2 className="text-center text-2xl font-semibold text-[var(--light-foreground)] md:text-3xl">
              Guaranteed Specifications
            </h2>
            <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[1.1rem] border border-[var(--line)]">
              {specRows.map(([label, value], index) => (
                <div
                  key={label}
                  className={`flex items-center justify-between px-4 py-3 text-sm ${
                    index !== specRows.length - 1 ? "border-b border-[var(--line)]" : ""
                  }`}
                >
                  <span className="text-[var(--light-muted)]">{label}</span>
                  <span className="font-semibold text-[var(--brand-green)]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            {valueCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="panel-dark reveal-up rounded-[1.2rem] p-5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                    <Icon size={16} />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 text-[var(--muted)]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-center text-2xl font-semibold text-[var(--light-foreground)] md:text-3xl">
            Vast Applications
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {applicationCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="panel-light reveal-up rounded-[1.15rem] p-4 text-center"
                  style={{ animationDelay: `${index * 65}ms` }}
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                    <Icon size={16} />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[var(--light-foreground)]">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
            Why SVF Soybeans?
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasonCards.map((item, index) => (
              <div
                key={item}
                className="panel-dark reveal-up rounded-[1.2rem] p-5"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <p className="text-sm leading-7 text-[var(--foreground)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-light reveal-up rounded-[1.5rem] p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-[var(--light-foreground)] md:text-3xl">
              Unmatched Traceability
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--light-muted)] md:text-base">
              With a clear inbound sourcing record, batch sorting logic, and plant-side control
              checkpoints, SVF soybeans are built for high-trust procurement.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--brand-green)]">
              <BadgeCheck size={16} />
              Documented lot confidence for repeat procurement cycles
            </div>
          </div>

          <div className="panel-light reveal-up overflow-hidden rounded-[1.5rem] p-4 md:p-5" style={{ animationDelay: "120ms" }}>
            <div className="relative min-h-[20rem] overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-[var(--background-soft)]">
              <Image src="/products-hero-banner.png" alt="Traceability plant image" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="panel-dark reveal-up rounded-[1.6rem] p-8 text-center md:p-10">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-4xl">
              Need sorted, traceable soybeans for scale?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              Talk to SVF for lot planning, commercial quantities, and quality-backed soybean supply.
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
