import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Market Insights — Soya Commodity & Industry Updates",
  description:
    "SVF Soya's market insights blog covering soya meal prices, commodity trends, poultry feed industry updates, export market analysis, and non-GMO soya news in India.",
  keywords: [
    "soya meal price India",
    "soybean commodity market India",
    "soya meal market insights",
    "poultry feed ingredient market",
    "non-GMO soya market India",
    "soybean price Karnataka",
  ],
  alternates: { canonical: "https://www.svfsoya.com/blog" },
  openGraph: {
    title: "SVF Soya Market Insights — Commodity & Industry Updates",
    description:
      "Soya meal prices, commodity trends, export market analysis, and non-GMO soya news from SVF Soya's Karnataka processing facility.",
    url: "https://www.svfsoya.com/blog",
  },
};

const insightCards = [
  {
    title: "Non-GMO Soybeans vs. GMO: Does It Actually Matter for Your Feed Mill?",
    image: "/full-soya.png",
    category: "Feed Integrity",
    meta: "March 22, 2026",
  },
  {
    title: "How to Read a Soya Meal Certificate of Analysis - A Buyer's Guide",
    image: "/hero-b.png",
    category: "How To",
    meta: "March 18, 2026",
  },
  {
    title: "India Soya Market Update - NCDEX Prices and Supply Outlook",
    image: "/products-hero-banner.png",
    category: "Markets",
    meta: "March 15, 2026",
  },
];

const tags = ["Market Prices", "Feed Industry", "Quality & Testing", "Processing", "Export"];

export default function BlogPage() {
  return (
    <main className="page-shell">
      <section className="section-block section-dark px-6 pb-16 pt-28 md:px-10 md:pb-18 md:pt-34">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="reveal-up max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--harvest-gold)]">
                Editorial
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.02] text-[var(--foreground)] md:text-6xl">
                Soya Market Insights
              </h1>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)] md:text-base">
                The definitive resource for global soya supply chains. We provide technical depth,
                price transparency, and logistics orchestration data for modern agriculture.
              </p>
            </div>
            <div className="reveal-up flex flex-wrap gap-2" style={{ animationDelay: "90ms" }}>
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="rounded-full border border-[var(--line)] bg-white/5 px-4 py-2 text-xs font-semibold text-[var(--muted)]"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="panel-dark reveal-up overflow-hidden rounded-[1.5rem] p-4 md:p-5">
              <div className="relative min-h-[19rem] overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-white/5 md:min-h-[26rem]">
                <Image src="/soya-meal.png" alt="Featured market insight" fill className="object-cover" />
              </div>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)]">
                  Feed Integrity
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
                  Why Mechanical Soya Extraction Produces Better Animal Feed Than Solvent Methods
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                  Explore the nutritional divergence between mechanical expulsion and chemical
                  solvent extraction. We break down protein preservation levels and the residual oil
                  benefits for feed formulations.
                </p>
                <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-[var(--brand-green)]">
                  Read Analysis →
                </Link>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="panel-dark reveal-up overflow-hidden rounded-[1.4rem] p-4" style={{ animationDelay: "90ms" }}>
                <div className="relative min-h-[11rem] overflow-hidden rounded-[1rem] border border-[var(--line)] bg-white/5">
                  <Image src="/hero-b.png" alt="Urease insight" fill className="object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                  Understanding Urease Activity in Soya Meal - What Every Poultry Farmer Should Know
                </h3>
              </div>

              <div className="panel-dark reveal-up rounded-[1.4rem] p-5" style={{ animationDelay: "160ms" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)]">
                  Precision Alerts
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Weekly technical newsletters on pricing, procurement, and compliance shifts.
                </p>
                <button type="button" className="gold-button mt-5 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {insightCards.map((item, index) => (
              <article
                key={item.title}
                className="panel-dark reveal-up overflow-hidden rounded-[1.4rem] p-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative min-h-[12rem] overflow-hidden rounded-[1rem] border border-[var(--line)] bg-white/5">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)]">
                  {item.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted)]">
                  <span>{item.meta}</span>
                  <Link href="/contact" className="font-semibold text-[var(--harvest-gold)]">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="panel-dark reveal-up mt-12 rounded-[1.6rem] p-8 text-center md:p-10" style={{ animationDelay: "160ms" }}>
            <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-5xl">
              Require Specific Technical Data or a Volume Quote?
            </h2>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="gold-button rounded-full px-6 py-3 text-sm font-semibold">
                Start Enquiry
              </Link>
              <Link href="/faqs" className="outline-button rounded-full px-6 py-3 text-sm font-semibold">
                Download Media Kit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
