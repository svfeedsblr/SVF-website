import type { Metadata } from "next";
import { BadgeCheck, FlaskConical, Leaf, ShieldCheck, ClipboardList, Factory, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Policy — SVF Soya Pvt. Ltd.",
  description:
    "SVF Soya's Quality Policy outlines our commitment to producing chemical-free, non-GMO Soya Meal, Crude Soybean Oil and Full Fat Soya that meets FSSAI, APEDA and international quality standards.",
  keywords: [
    "soya meal quality policy India",
    "non-GMO soya quality standards",
    "FSSAI certified soya manufacturer",
    "APEDA registered soya exporter",
    "chemical-free soya processing quality",
    "soya meal quality control Karnataka",
    "soybean meal quality assurance India",
    "SVF Soya quality policy",
    "soya meal lab testing India",
    "urease activity soya meal test",
    "protein content soya meal quality",
    "ISO quality soya processing India",
  ],
  alternates: { canonical: "https://www.svfsoya.com/quality-policy" },
  openGraph: {
    title: "Quality Policy — SVF Soya Pvt. Ltd.",
    description:
      "Our commitment to chemical-free, non-GMO soya processing with rigorous quality control, FSSAI & APEDA certification, and consistent nutritional standards.",
    url: "https://www.svfsoya.com/quality-policy",
  },
};

const commitments = [
  {
    icon: Leaf,
    title: "Non-GMO Raw Material",
    body: "We source 100% non-GMO soybeans directly from verified farmers across Madhya Pradesh, Rajasthan, and Maharashtra. Every incoming lot is tested for GMO markers before entering our processing line, ensuring full traceability from farm to dispatch.",
  },
  {
    icon: FlaskConical,
    title: "In-House Laboratory Testing",
    body: "Our on-site laboratory tests every production batch for crude protein (target ≥48%), moisture (≤9.8%), urease activity (0.05–0.20 pH rise), and crude fibre. No batch is released for dispatch until it clears all parameter thresholds.",
  },
  {
    icon: ShieldCheck,
    title: "Chemical-Free Processing",
    body: "SVF Soya operates exclusively on mechanical expeller (cold-press) extraction — no hexane, no chemical solvents, and no additives. This guarantees zero solvent residue in our Soya Meal and Crude Soybean Oil, making them safe for all livestock and export markets.",
  },
  {
    icon: Factory,
    title: "Controlled Manufacturing Environment",
    body: "Our 180 TPD plant maintains strict hygiene standards at every stage: cleaning, grinding, extrusion, oil extraction, cooling, and packaging. Equipment is calibrated regularly and production staff trained on GMP (Good Manufacturing Practices) protocols.",
  },
  {
    icon: ClipboardList,
    title: "Regulatory Compliance",
    body: "We hold active certifications from FSSAI (Food Safety and Standards Authority of India) and are registered with APEDA (Agricultural and Processed Food Products Export Development Authority). All export consignments are accompanied by Phytosanitary Certificates, Certificate of Origin, and quality analysis reports.",
  },
  {
    icon: Users,
    title: "Customer-Focused Quality",
    body: "We customise product specifications — protein content, moisture levels, packaging — to meet the exact requirements of each buyer. Our quality team is available for pre-shipment inspection coordination and can provide third-party lab test facilitation upon request.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    body: "Quality at SVF Soya is not a destination but a process. We review production data weekly, incorporate buyer feedback into our QC protocols, and invest in equipment upgrades to maintain consistent improvement in product quality and nutritional value.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Documentation",
    body: "Every order ships with a complete quality dossier: Certificate of Analysis (CoA), moisture report, protein & urease test results, batch production record, and applicable regulatory certificates. We believe transparency builds the long-term supply partnerships our clients depend on.",
  },
];

const parameters = [
  { product: "Soya Meal (DOC)", param: "Crude Protein", value: "≥ 48%", note: "Dry basis" },
  { product: "Soya Meal (DOC)", param: "Moisture", value: "≤ 9.8%", note: "" },
  { product: "Soya Meal (DOC)", param: "Urease Activity", value: "0.05 – 0.20 pH rise", note: "AOCS method" },
  { product: "Soya Meal (DOC)", param: "Crude Fibre", value: "≤ 7%", note: "" },
  { product: "Soya Meal (DOC)", param: "Crude Fat", value: "1 – 2%", note: "" },
  { product: "Crude Soybean Oil", param: "Free Fatty Acid (FFA)", value: "≤ 2%", note: "As oleic acid" },
  { product: "Crude Soybean Oil", param: "Moisture & Impurity", value: "≤ 0.5%", note: "" },
  { product: "Crude Soybean Oil", param: "Colour (Lovibond)", value: "Max 40R / 4Y", note: "" },
  { product: "Full Fat Soya Meal", param: "Crude Protein", value: "≥ 38%", note: "" },
  { product: "Full Fat Soya Meal", param: "Crude Fat", value: "18 – 22%", note: "Naturally retained" },
  { product: "Full Fat Soya Meal", param: "Moisture", value: "≤ 10%", note: "" },
];

export default function QualityPolicyPage() {
  return (
    <main className="page-shell">

      {/* ── Hero ── */}
      <section className="section-block section-dark px-6 pb-14 pt-28 md:px-10 md:pb-18 md:pt-34">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
              Quality Policy
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.02] text-[var(--foreground)] md:text-6xl">
              Quality Is Not a Step —
              <span className="block text-[var(--brand-green)]">It&apos;s the Entire Process</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              At SVF Soya Pvt. Ltd., every kilogram of product that leaves our plant has passed through
              rigorous quality controls. Our policy covers raw material sourcing, in-process checks,
              final product testing, and documentation — ensuring buyers receive exactly what they expect,
              every time.
            </p>
          </div>

          {/* ── Cert badges ── */}
          <div className="mt-10 flex flex-wrap gap-3 reveal-up">
            {["FSSAI Certified", "APEDA Registered", "Non-GMO Verified", "Chemical-Free Process", "Lab Tested Every Batch"].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-2 text-xs font-semibold text-[var(--brand-green)]">
                <BadgeCheck size={13} />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Policy Statement ── */}
      <section className="section-block section-light px-6 py-14 md:px-10 md:py-20">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">Policy Statement</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] md:text-4xl">Our Commitment to You</h2>
          </div>
          <div className="reveal-up panel-light rounded-[1.6rem] border-l-4 border-[var(--brand-green)] p-8 md:p-10">
            <p className="text-base leading-8 text-[var(--foreground)] md:text-lg">
              SVF Soya Pvt. Ltd. is committed to manufacturing and supplying{" "}
              <strong>chemical-free, non-GMO Soya Meal, Crude Soybean Oil, Full Fat Soya Meal, and Raw Soybeans</strong>{" "}
              that consistently meet or exceed the nutritional and safety requirements of our customers — whether they are
              domestic poultry farmers, animal feed manufacturers, or international importers.
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">
              We achieve this through disciplined raw material procurement, a fully mechanical (solvent-free) extraction
              process, in-house laboratory testing of every batch, and strict adherence to FSSAI and APEDA standards.
              Our quality system is reviewed continuously and improved in response to customer feedback, regulatory
              updates, and advances in soya processing technology.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quality Commitments Grid ── */}
      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-20">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">Our Commitments</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] md:text-4xl">Eight Pillars of Quality</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
            {commitments.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="panel-dark reveal-up rounded-[1.4rem] p-6 md:p-7"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-green)]/15">
                    <Icon size={18} className="text-[var(--brand-green)]" />
                  </div>
                  <h3 className="mb-3 text-base font-semibold text-[var(--foreground)]">{item.title}</h3>
                  <p className="text-sm leading-7 text-[var(--muted)]">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quality Parameters Table ── */}
      <section className="section-block section-light px-6 py-14 md:px-10 md:py-20">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">Specifications</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] md:text-4xl">Key Quality Parameters</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              These are the minimum guaranteed specifications for each product. Certificate of Analysis (CoA) with actual
              batch values is provided with every order.
            </p>
          </div>
          <div className="reveal-up overflow-hidden rounded-[1.4rem] border border-[var(--line)]">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--line)] bg-[var(--brand-green)]/8">
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-green)]">Product</th>
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-green)]">Parameter</th>
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-green)]">Specification</th>
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand-green)]">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {parameters.map((row, i) => (
                    <tr
                      key={`${row.product}-${row.param}`}
                      className={`border-b border-[var(--line)] transition hover:bg-[var(--ring-soft)] ${i % 2 === 0 ? "" : "bg-[var(--ring-soft)]/40"}`}
                    >
                      <td className="px-5 py-3.5 font-medium text-[var(--foreground)]">{row.product}</td>
                      <td className="px-5 py-3.5 text-[var(--muted)]">{row.param}</td>
                      <td className="px-5 py-3.5 font-semibold text-[var(--brand-green)]">{row.value}</td>
                      <td className="px-5 py-3.5 text-[var(--muted)]">{row.note || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-20">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">Quality Process</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--foreground)] md:text-4xl">How We Ensure Quality at Every Stage</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { step: "01", title: "Inbound Raw Material Check", body: "Every soybean lot is tested for moisture, foreign matter, GMO markers, and aflatoxin before being accepted into storage. Rejected lots are returned to the supplier." },
              { step: "02", title: "In-Process Monitoring", body: "Temperature, pressure, and throughput are monitored continuously during extrusion and oil extraction. Any deviation triggers an immediate line review." },
              { step: "03", title: "Final Product Lab Test", body: "Before packing, each batch is tested for protein, moisture, urease activity, and fibre. Results are logged and attached to the batch record." },
              { step: "04", title: "Packaging & Labelling", body: "Products are packed in moisture-proof HDPE bags (50 kg) or bulk bags (800–1000 kg) with full batch traceability codes and nutritional declarations." },
              { step: "05", title: "CoA Issuance", body: "A Certificate of Analysis with actual batch test values is issued for every order. Export orders additionally include APEDA, Phytosanitary, and CoO certificates." },
              { step: "06", title: "Post-Dispatch Feedback", body: "We follow up with buyers post-delivery to confirm receipt quality. Feedback is incorporated into our next production review cycle within 7 days." },
            ].map((item, i) => (
              <div key={item.step} className="panel-dark reveal-up rounded-[1.4rem] p-6" style={{ animationDelay: `${i * 60}ms` }}>
                <span className="text-3xl font-bold text-[var(--brand-green)]/30">{item.step}</span>
                <h3 className="mt-3 text-sm font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-block section-light px-6 py-14 md:px-10 md:py-16">
        <div className="section-inner mx-auto max-w-3xl text-center">
          <div className="reveal-up">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">Need Quality Documentation?</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Request a sample CoA, product specification sheet, or certification copies. Our team responds within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="/contact" className="gold-button inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
                Request Documentation
              </a>
              <a href="/products" className="outline-button inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
