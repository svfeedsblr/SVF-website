import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Ship, Stamp, Warehouse, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Exports & International Supply — Soya Meal & Oil",
  description:
    "SVF Soya exports high-protein Soya Meal and Crude Soybean Oil to the Middle East, South East Asia, and global markets. APEDA registered, phytosanitary certified. FOB, CIF, CNF Incoterms. HS 2304 & HS 1507.",
  keywords: [
    "soya meal exporter India",
    "soybean oil exporter India",
    "APEDA soya exporter Karnataka",
    "non-GMO soya meal export",
    "soya meal Middle East export",
    "soya meal South East Asia",
    "soya meal FOB CIF India",
    "HS 2304 soya meal",
    "HS 1507 soybean oil",
  ],
  alternates: { canonical: "https://www.svfsoya.com/exports" },
  openGraph: {
    title: "SVF Soya Exports — Soya Meal & Oil to Middle East, SEA & Beyond",
    description:
      "APEDA registered exporter. Phytosanitary certified. FOB, CIF, CNF. 20FT FCL: 18–20 MT. High-protein soya meal (48%+) and crude soybean oil for global markets.",
    url: "https://www.svfsoya.com/exports",
  },
};

const corridors = [
  { region: "Western India Hub", route: "Origin: Mangalore / Mundra", lead: "Main dispatch corridor" },
  { region: "Middle East Cluster", route: "Hub: Jebel Ali", lead: "Fast transit market coverage" },
  { region: "South East Asia", route: "Key: Singapore", lead: "High-volume recurring contracts" },
];

const compliance = [
  {
    icon: ShieldCheck,
    title: "APEDA Certified",
    text: "Full registration for agricultural and processed food product exports.",
    code: "Reg: IND-APEDA-77291",
  },
  {
    icon: Stamp,
    title: "Phytosanitary",
    text: "Mandatory NPPO inspection and fumigation certification for each shipment.",
    code: "Compliance: IPPC-1SPNLS",
  },
  {
    icon: Waves,
    title: "HS Code: Meal",
    text: "Oil-cake and related residues for feed and processing use.",
    code: "HS 2304",
  },
  {
    icon: Ship,
    title: "HS Code: Oil",
    text: "Soybean oil and fractions, non-refined or refined.",
    code: "HS 1507",
  },
];

const logistics = [
  { id: "01", title: "20FT FCL Capacity", value: "18-20 MT" },
  { id: "02", title: "40FT FCL Capacity", value: "26-28 MT" },
  { id: "03", title: "Bagging Options", value: "PP / Jute (50KG)" },
  { id: "04", title: "Incoterms", value: "FOB, CIF, CNF" },
];

const docs = [
  "Certificate of Analysis (COA) for every batch",
  "Clean shipped on board Bill of Lading",
  "Health and sanitary certificates",
  "Non-GMO declaration and origin status",
];

export default function ExportsPage() {
  return (
    <main className="page-shell">
      <section className="section-block section-dark relative overflow-hidden px-6 pb-14 pt-28 md:px-10 md:pb-20 md:pt-36">
        <div className="absolute inset-0">
          <Image src="/Logistic-product.png" alt="Export shipping operations" fill priority className="object-cover opacity-35" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/30" />
        <div className="section-inner relative z-10 mx-auto max-w-7xl">
          <p className="chip inline-flex px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
            Global Logistics Network
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.04] text-white md:text-7xl">
            Export Ready.
            <span className="block text-[var(--brand-green)]">India to the World.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 md:text-base">
            Strategic maritime corridors, production discipline, and validated documentation for
            high-protein soya meal and premium crude oil export programs.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#inquiry" className="gold-button rounded-full px-6 py-3 text-sm font-semibold">
              Start Export Inquiry
            </a>
            <a href="#compliance" className="outline-button rounded-full px-6 py-3 text-sm font-semibold text-white">
              Technical Specs
            </a>
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
                Operational Reach
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] md:text-5xl">
                Global Export Corridors
              </h2>
            </div>
            <div className="flex gap-3">
              <div className="panel-dark rounded-xl px-4 py-3 text-center">
                <p className="text-3xl font-semibold text-[var(--brand-green)]">45+</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Active Ports
                </p>
              </div>
              <div className="panel-dark rounded-xl px-4 py-3 text-center">
                <p className="text-3xl font-semibold text-[var(--brand-green)]">12K</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  MT Monthly Volume
                </p>
              </div>
            </div>
          </div>

          <div className="panel-dark mt-8 rounded-[1.3rem] p-5 md:p-8">
            <div className="relative min-h-[15rem] overflow-hidden rounded-[1rem] border border-[var(--line)] md:min-h-[22rem]">
              <Image src="/Logistic-product.png" alt="Map of export corridors" fill className="object-cover opacity-55" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/35 to-black/20" />
              <div className="absolute bottom-4 left-4 right-4 grid gap-3 md:grid-cols-3">
                {corridors.map((corridor) => (
                  <article key={corridor.region} className="rounded-xl border border-white/15 bg-black/35 p-3 backdrop-blur-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-green)]">
                      {corridor.route}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">{corridor.region}</p>
                    <p className="mt-1 text-xs text-white/70">{corridor.lead}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="compliance" className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-3xl font-semibold text-[var(--light-foreground)] md:text-5xl">
            Technical Compliance Hub
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {compliance.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="panel-light reveal-up rounded-[1.1rem] p-5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                    <Icon size={18} />
                  </span>
                  <p className="mt-4 text-lg font-semibold text-[var(--light-foreground)]">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--light-muted)]">{item.text}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-green)]">
                    {item.code}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="panel-dark reveal-up rounded-[1.3rem] p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-[var(--foreground)] md:text-4xl">Logistics Architecture</h3>
            <div className="mt-6 space-y-3">
              {logistics.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-white/5 px-4 py-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--foreground)]">
                    <span className="mr-2 text-[var(--brand-green)]">{item.id}</span>
                    {item.title}
                  </p>
                  <p className="text-sm font-semibold text-[var(--muted)]">{item.value}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="panel-dark reveal-up rounded-[1.3rem] p-6 md:p-8" style={{ animationDelay: "120ms" }}>
            <h3 className="text-2xl font-semibold text-[var(--foreground)] md:text-4xl">Documentation Checklist</h3>
            <ul className="mt-6 space-y-4">
              {docs.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-[var(--line)] bg-white/5 p-4">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--brand-green)]" />
                  <span className="text-sm leading-7 text-[var(--muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-block section-dark px-6 pb-2 pt-4 md:px-10">
        <div className="section-inner mx-auto mb-8 grid max-w-7xl gap-4 md:grid-cols-3">
          <article className="panel-dark rounded-[1rem] p-4">
            <Warehouse size={17} className="text-[var(--brand-green)]" />
            <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">Dedicated export staging</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Pre-dispatch checks and lot-level handling controls.</p>
          </article>
          <article className="panel-dark rounded-[1rem] p-4">
            <Ship size={17} className="text-[var(--brand-green)]" />
            <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">Port coordination team</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Container allocation and timeline-aware documentation.</p>
          </article>
          <article className="panel-dark rounded-[1rem] p-4">
            <CheckCircle2 size={17} className="text-[var(--brand-green)]" />
            <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">Quality-backed shipment assurance</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Certificate-backed dispatch with rapid client communication.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
