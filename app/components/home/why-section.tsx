const solventPoints = [
  "Moderate chemical residue risk in end product",
  "Limited clean-label positioning for premium brands",
  "Higher process complexity & external dependency",
  "Variable buyer confidence in export markets",
];

const mechanicalPoints = [
  "Minimal chemical residue (Physical separation only)",
  "Strong clean-label story for retail and commercial use",
  "Controlled, auditable in-house mechanical process",
  "High buyer confidence & repeat global contracts",
];

export default function WhySection() {
  return (
    <section id="differentiator" className="section-block section-light px-6 pt-14 md:px-10">
      <div className="section-inner mx-auto max-w-7xl">

        {/* Header */}
        <div className="reveal-up mb-10">
          <h2 className="text-3xl font-bold text-[var(--light-foreground)] md:text-4xl lg:text-5xl">
            Why Chemical-Free Matters
          </h2>
          <p className="mt-3 text-sm text-[var(--light-muted)] md:text-base">
            Solvent vs Mechanical Extraction — The Difference Buyers Feel
          </p>
        </div>

        {/* Comparison cards */}
        <div className="reveal-up grid gap-4 md:grid-cols-2">

          {/* Solvent — left card */}
          <div className="rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-400 text-red-400">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M4.5 4.5L9.5 9.5M9.5 4.5L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
              <h3 className="text-lg font-bold text-[var(--light-foreground)] md:text-xl">
                Hexane Solvent Route
              </h3>
            </div>
            <ul className="space-y-4">
              {solventPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[var(--light-muted)]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-red-400/70">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2L8 8M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Mechanical — right card (green) */}
          <div className="rounded-2xl bg-[#2d6a35] p-6 md:p-8 dark:bg-[var(--brand-green)]">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#7ee88a] text-[#7ee88a]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M4.5 7L6.5 9L9.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h3 className="text-lg font-bold text-white md:text-xl">
                SVF Mechanical Press Route
              </h3>
            </div>
            <ul className="space-y-4">
              {mechanicalPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#7ee88a]">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                      <path d="M1 4.5L4 7.5L10 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="reveal-up mt-8 flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] p-6 md:p-8">
          <div className="w-1 shrink-0 rounded-full bg-[var(--brand-green)]" />
          <p className="text-sm italic leading-7 text-[var(--light-muted)] md:text-base md:leading-8">
            &ldquo;Our customers may never visit the extraction line, but they will notice the difference in every shipment. Zero solvent keeps your quality narrative defensible and your brand story cleaner.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
