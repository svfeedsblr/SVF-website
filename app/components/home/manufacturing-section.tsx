import Image from "next/image";
import Link from "next/link";
import StatsCounter from "../stats-counter";
import { manufacturingHighlights } from "./content";

export default function ManufacturingSection() {
  return (
    <section id="facility" className="section-block section-light px-6 py-18 md:px-10 md:py-22">
      <div className="section-inner mx-auto max-w-7xl">
        <div className="reveal-up mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
            How We Do It
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--light-foreground)] md:text-4xl">
            Precision-Led Manufacturing
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Features + image */}
          <div className="panel-light reveal-up rounded-[1.4rem] p-5 md:p-6">
            <div className="relative mb-5 h-44 overflow-hidden rounded-xl border border-[var(--line)] md:h-52">
              <Image
                src="/factory.png"
                alt="SVF Soya manufacturing facility"
                fill
                sizes="(max-width: 768px) 90vw, 550px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-3 left-4 text-sm font-semibold text-white">
                Karnataka Facility
              </p>
            </div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--field-green)]">
              Process Highlights
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {manufacturingHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--background-soft)] px-4 py-3 text-sm text-[var(--light-muted)] transition hover:border-[var(--brand-green)]/40"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-green)]" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/manufacturing-process"
                className="outline-button inline-flex rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                Full Process Tour →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="panel-light reveal-up rounded-[1.4rem] p-6" style={{ animationDelay: "120ms" }}>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--field-green)]">
              By the Numbers
            </p>
            <div className="space-y-6">
              <div className="border-b border-[var(--line)] pb-6">
                <p className="text-5xl font-bold text-[var(--brand-green)]">
                  <StatsCounter end={120} suffix="K+" />
                </p>
                <p className="mt-1.5 text-sm text-[var(--light-muted)]">Metric tonnes monthly output capability</p>
              </div>
              <div className="border-b border-[var(--line)] pb-6">
                <p className="text-5xl font-bold text-[var(--brand-green)]">
                  <StatsCounter end={15} suffix="+" />
                </p>
                <p className="mt-1.5 text-sm text-[var(--light-muted)]">States served via partner logistics</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[var(--brand-green)]">
                  <StatsCounter end={24} suffix="/7" />
                </p>
                <p className="mt-1.5 text-sm text-[var(--light-muted)]">Dispatch coordination cadence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
