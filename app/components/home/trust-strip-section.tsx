const trustItems = [
  { label: "FSSAI", icon: "🛡" },
  { label: "ISO Certified", icon: "✅" },
  { label: "Non-GMO Verified", icon: "🌿" },
  { label: "APEDA Registered", icon: "📋" },
  { label: "Export Licensed", icon: "✈️" },
  { label: "Chemical-Free", icon: "🧪" },
];

export default function TrustStripSection() {
  const items = [...trustItems, ...trustItems];
  return (
    <section className="section-block section-light border-b border-[var(--line)] px-6 py-10 md:px-10 md:py-12">
      <div className="section-inner mx-auto max-w-7xl">
        <p className="reveal-up mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--field-green)]">
          Certified &amp; Compliant — Domestic &amp; Export Markets
        </p>
        <div className="logo-marquee reveal-up">
          <div className="logo-marquee-track gap-3 py-4">
            {items.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="panel-light flex min-w-max items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--light-muted)] transition hover:text-[var(--brand-green)]"
              >
                <span className="text-sm">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
