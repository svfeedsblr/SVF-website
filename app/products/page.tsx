"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "meal",
    name: "Soya Meal",
    subtitle: "High-protein meal for poultry, aqua, and cattle feed applications.",
    image: "/soya-meal.png",
    overview: [
      ["Protein", "48% min"],
      ["Moisture", "10% max"],
      ["Fiber", "6.5% max"],
      ["Urease", "0.2 max"],
    ],
    quality: [
      ["Protein", "48.2"],
      ["Moisture", "9.8"],
      ["Fat", "1.42"],
      ["Fiber", "6.15"],
      ["Urease", "0.12"],
    ],
  },
  {
    id: "ffs",
    name: "Full Fat Soya",
    subtitle: "Energy-rich extruded ingredient with retained oil nutrition value.",
    image: "/full-fat-soya.png",
    overview: [
      ["Protein", "38% min"],
      ["Oil", "18% min"],
      ["Moisture", "10% max"],
      ["Sand/Silica", "0.3% max"],
    ],
    quality: [
      ["Protein", "38.4"],
      ["Oil", "18.9"],
      ["Moisture", "9.1"],
      ["Fiber", "5.8"],
      ["FFA", "0.9"],
    ],
  },
  {
    id: "oil",
    name: "Crude Oil",
    subtitle: "Mechanically extracted crude soybean oil for refining pipelines.",
    image: "/cruid-oil.png",
    overview: [
      ["FFA", "2.5% max"],
      ["Moisture", "0.2% max"],
      ["Impurities", "0.15% max"],
      ["Color", "Golden"],
    ],
    quality: [
      ["FFA", "1.84"],
      ["Moisture", "0.10"],
      ["Impurities", "0.08"],
      ["PV", "3.2"],
      ["Color", "Golden"],
    ],
  },
  {
    id: "whole",
    name: "Whole Soya",
    subtitle: "Clean-sourced beans with traceable lot consistency for processors.",
    image: "/full-soya.png",
    overview: [
      ["Moisture", "12% max"],
      ["Broken", "2% max"],
      ["Foreign Matter", "1% max"],
      ["Damage", "2% max"],
    ],
    quality: [
      ["Moisture", "10.9"],
      ["Broken", "1.2"],
      ["Foreign Matter", "0.5"],
      ["Damage", "1.1"],
      ["Uniformity", "High"],
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="page-shell">

      <section
  id="products"
  className="relative section-block section-dark flex min-h-[100svh] items-center overflow-hidden px-6 py-24 md:px-10 md:py-28"
>

  {/* CONTENT */}
  <div className="section-inner mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.72fr] p-10">
    
    <div className="reveal-up flex flex-col justify-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--foreground)]">
        Product Portfolio
      </p>

      <h1 className="mt-4 text-4xl font-semibold leading-[1.05] text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl">
        Four Products.
        <br />
        One Standard.
      </h1>

      <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
        Clean, consistent, and process-backed soya ingredients built for feed buyers who
        need commercial reliability.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="#contact" className="gold-button rounded-full px-7 py-3 text-sm font-semibold">
          Request Price Sheet
        </Link>

        <Link href="/manufacturing-process" className="outline-button rounded-full px-7 py-3 text-sm font-semibold">
          View Manufacturing Process
        </Link>
      </div>
    </div>

    <div className="panel-dark reveal-up flex flex-col justify-center rounded-[1.3rem] p-6 md:p-8 backdrop-blur-md bg-black/30 border border-white/10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
        Standard Promise
      </p>

      <p className="mt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
        Chemical-free mechanical extraction, documented quality checkpoints, and dispatch
        discipline across each product category.
      </p>
    </div>

  </div>
</section>

      {/* PRODUCTS */}
      {products.map((product, index) => (
        <section
          key={product.id}
          className="section-block section-dark border-t border-[var(--line)] px-6 py-12 md:px-10 md:py-16"
        >
          <div className="section-inner mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">

            <div className={index % 2 === 1 ? "reveal-up lg:order-2" : "reveal-up"}>
              <div className="relative min-h-[18rem] overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-black/20 md:min-h-[24rem]">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
            </div>

            <div className={index % 2 === 1 ? "reveal-up lg:order-1" : "reveal-up"}>
              <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
                {product.name}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">
                {product.subtitle}
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="panel-dark rounded-[1rem] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                    Product Overview
                  </p>
                  <div className="mt-3 space-y-2">
                    {product.overview.map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-[var(--line)] pb-2 text-xs">
                        <span className="text-[var(--muted)]">{k}</span>
                        <span className="font-semibold text-[var(--foreground)]">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="panel-dark rounded-[1rem] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]">
                    Guaranteed Specs
                  </p>
                  <div className="mt-3 space-y-2">
                    {product.quality.map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-[var(--line)] pb-2 text-xs">
                        <span className="text-[var(--muted)]">{k}</span>
                        <span className="font-semibold text-[var(--foreground)]">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <Link href="#contact" className="gold-button rounded-full px-5 py-2.5 text-sm font-semibold">
                  Request Quote
                </Link>
                <Link
                  href={
                    product.id === "meal"
                      ? "/products/soya-meal"
                      : product.id === "ffs"
                        ? "/products/full-fat-soya"
                        : product.id === "oil"
                          ? "/products/crude-soybean-oil"
                          : "/products/raw-soybeans"
                  }
                  className="outline-button rounded-full px-5 py-2.5 text-sm font-semibold"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* LOGISTICS */}
      <section className="relative section-block section-dark px-6 py-16 md:px-10 md:py-20 overflow-hidden">
  {/* CONTENT */}
  <div className="relative z-20 section-inner mx-auto max-w-7xl">

    <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] items-center">

      {/* LEFT CONTENT */}
      <div className="panel-dark backdrop-blur-md bg-black/40 border border-white/10 rounded-[1.5rem] p-6 md:p-10">

        <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-5xl leading-tight">
          Scalable Logistics for Global Demand
        </h2>

        <p className="mt-5 text-sm leading-7 text-[var(--muted)] md:text-base max-w-xl">
          With controlled dispatch planning and quality records, SVF supports both regional and
          interstate buyers with reliable turnaround.
        </p>

        {/* STATS */}
        <div className="mt-8 grid grid-cols-2 gap-5">

          <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition">
            <p className="text-4xl font-semibold text-[var(--foreground)]">50K+</p>
            <p className="mt-2 text-xs text-[var(--muted)]">
              MT annualized handling support
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition">
            <p className="text-4xl font-semibold text-[var(--foreground)]">24/7</p>
            <p className="mt-2 text-xs text-[var(--muted)]">
              Dispatch coordination coverage
            </p>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>
    </main>
  );
}
