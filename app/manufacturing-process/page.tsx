import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing Process — Chemical-Free Mechanical Soya Processing",
  description:
    "SVF Soya uses cold-press expeller technology for solvent-free, chemical-free soya processing. Learn about our 180 TPD facility, automated handling, in-house dispatch, and quality control in Karnataka.",
  keywords: [
    "soya mechanical processing India",
    "cold press soya expeller",
    "solvent-free soya processing",
    "soya processing plant Karnataka",
    "chemical-free soybean extraction",
    "soya processing technology India",
  ],
  alternates: { canonical: "https://www.svfsoya.com/manufacturing-process" },
  openGraph: {
    title: "SVF Soya Manufacturing — Cold-Press, Solvent-Free, 180 TPD",
    description:
      "Mechanical extraction process — zero hexane, zero chemical residue. 180 TPD capacity in Karnataka with automated handling and in-house dispatch control.",
    url: "https://www.svfsoya.com/manufacturing-process",
  },
};

const advantages = [
  {
    title: "Plant Automation",
    text: "Real-time process controls and checkpoint monitoring across the line.",
  },
  {
    title: "Manual Verification",
    text: "Critical quality points are validated by trained personnel.",
  },
  {
    title: "Trace Profile IDs",
    text: "Each batch is tracked with clear records from intake to dispatch.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Raw Soybean Intake & Inspection",
    text: "Moisture, visual quality, and contaminant checks before lot approval.",
    image: "/cleaning.png",
  },
  {
    step: "02",
    title: "Cleaning & Destoning",
    text: "Foreign matter is removed to stabilize process quality.",
    image: "/cleaning.png",
  },
  {
    step: "03",
    title: "Conditioning & Cracking",
    text: "Beans are conditioned for controlled pressing performance.",
    image: "/Grinding.png",
  },
  {
    step: "04",
    title: "Extrusion (FFS)",
    text: "Thermal process for full-fat soy workflow consistency.",
    image: "/Extruder Feeding.png",
  },
  {
    step: "05",
    title: "Mechanical Expeller Pressing",
    text: "Chemical-free extraction through controlled mechanical force.",
    image: "/Soya Oil Extraction.png",
  },
  {
    step: "06",
    title: "Cooling & Grinding",
    text: "Stabilization and size control for finished feed ingredient handling.",
    image: "/Cooling.png",
  },
  {
    step: "07",
    title: "In-House Laboratory Testing",
    text: "Protein, moisture, and contamination metrics validated before release.",
    image: "/lab.png",
  },
  {
    step: "08",
    title: "Hygiene Packaging & Dispatch",
    text: "Batch-coded packaging with dispatch verification and documentation.",
    image: "/Packaging.png",
  },
];

export default function ManufacturingProcessPage() {
  return (
    <main className="page-shell">
      <section className="section-block section-dark px-6 pb-14 pt-28 md:px-10 md:pb-18 md:pt-36">
        <div className="section-inner mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal-up">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--foreground)]">
              Manufacturing Process
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[var(--foreground)] md:text-6xl">
              Precision Orchestration of Chemical-Free Soya
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
              Zero-solvent processing backed by disciplined checkpoints, in-house testing, and
              production-grade dispatch controls.
            </p>
          </div>

          <div className="panel-dark reveal-up relative min-h-[17rem] overflow-hidden rounded-[1.4rem]">
            <Image
              src="/manufacturing-process.png"
              alt="Soybean process visual"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/50" />
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-dark reveal-up rounded-[1.3rem] p-6 md:p-7">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-4xl">
              From Bean to Certified Product
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
              Our process begins with strict raw material screening and follows a controlled
              sequence of cleaning, conditioning, mechanical extraction, and laboratory release.
              This integrated model minimizes risk, improves consistency, and supports high-trust
              supply for feed manufacturers and traders.
            </p>
          </div>

          <div className="panel-dark reveal-up rounded-[1.3rem] p-6 md:p-7" style={{ animationDelay: "120ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)]">
              System Advantages
            </p>
            <div className="mt-4 space-y-3">
              {advantages.map((item, index) => (
                <div key={item.title} className="rounded-xl border border-[var(--line)] bg-white/5 p-4">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {String(index + 1).padStart(2, "0")} · {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-6 text-[var(--muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-16 md:px-10 md:py-20">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-center text-3xl font-semibold uppercase tracking-[0.05em] text-[var(--foreground)] md:text-5xl">
            Precision Workflow
          </h2>
          <div className="relative mx-auto mt-10 max-w-6xl">
            <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[var(--line)]" />
            <div className="grid gap-8">
              {workflow.map((item, index) => (
                <div
                  key={item.step}
                  className="reveal-up grid grid-cols-[1fr_44px_1fr] items-center gap-3 md:grid-cols-[1fr_36px_1fr] md:gap-4"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {index % 2 === 0 ? (
                    <article className="panel-dark overflow-hidden rounded-[1.1rem] md:rounded-[1.2rem]">
                      <div className="relative h-56 w-full bg-black/30 md:h-64">
                        <Image src={item.image} alt={item.title} fill className="object-contain rounded-[1rem] p-2" />
                      </div>
                      <div className="p-3 md:p-5">
                        <div className="mb-2 inline-flex rounded-full border border-[var(--line)] bg-white/8 px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                          Step {item.step}
                        </div>
                        <h3 className="text-sm font-semibold text-[var(--foreground)] md:text-lg">{item.title}</h3>
                        <p className="mt-1 text-xs leading-6 text-[var(--muted)] md:mt-2 md:text-sm md:leading-7">{item.text}</p>
                      </div>
                    </article>
                  ) : (
                    <div />
                  )}

                  <div className="flex items-center justify-center">
                    <span className="h-9 w-9 rounded-lg border border-[var(--line)] bg-white/8 text-center text-[11px] font-semibold leading-9 text-[var(--foreground)] md:h-10 md:w-10 md:text-xs md:leading-10">
                      {item.step}
                    </span>
                  </div>

                  {index % 2 === 1 ? (
                    <article className="panel-dark overflow-hidden rounded-[1.1rem] md:rounded-[1.2rem]">
                      <div className="relative h-56 w-full bg-black/30 md:h-64">
                        <Image src={item.image} alt={item.title} fill className="object-contain p-2" />
                      </div>
                      <div className="p-3 md:p-5">
                        <div className="mb-2 inline-flex rounded-full border border-[var(--line)] bg-white/8 px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                          Step {item.step}
                        </div>
                        <h3 className="text-sm font-semibold text-[var(--foreground)] md:text-lg">{item.title}</h3>
                        <p className="mt-1 text-xs leading-6 text-[var(--muted)] md:mt-2 md:text-sm md:leading-7">{item.text}</p>
                      </div>
                    </article>
                  ) : (
                    <div />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-16 md:px-10 md:py-20">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="panel-dark reveal-up grid gap-5 rounded-[1.4rem] p-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
                Scale Your Production with Integrity.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)] md:text-base">
                Talk to our team for detailed process sheets, quality validation standards, and
                commercial dispatch planning.
              </p>
            </div>
            <Link href="#contact" className="gold-button inline-flex rounded-full px-6 py-3 text-sm font-semibold">
              Request Process Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
