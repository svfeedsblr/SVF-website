import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCards } from "./content";

const hrefMap: Record<string, string> = {
  "High-GMV Soya Meal": "/products/soya-meal",
  "Mechanical Soya Oil": "/products/crude-soybean-oil",
  "Full Fat Soya": "/products/full-fat-soya",
  "Raw Soybean": "/products/raw-soybeans",
};

export default function ProductsSection() {
  return (
    <section id="products" className="section-block section-light px-6 py-18 md:px-10 md:py-22">
      <div className="section-inner mx-auto max-w-7xl">
        <div className="reveal-up mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
              What We Produce
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--light-foreground)] md:text-4xl">
              Our Product Portfolio
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-green)] transition hover:gap-2.5"
          >
            View all products <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {productCards.map((item, index) => (
            <article
              key={item.title}
              className="panel-light reveal-up group rounded-[1.2rem] p-3 transition"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[10rem] overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--background-soft)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 90vw, 300px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <span className="inline-flex rounded-full bg-[var(--ring-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-green)]">
                      {item.spec}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-[var(--light-foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--light-muted)]">{item.text}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href={hrefMap[item.title] ?? "/products"}
                      className="outline-button rounded-full px-3.5 py-2 text-xs font-semibold"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="gold-button rounded-full px-3.5 py-2 text-xs font-semibold"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
