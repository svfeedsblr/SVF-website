import { testimonials } from "./content";

export default function TestimonialsSection() {
  const items = [...testimonials, ...testimonials];
  return (
    <section className="section-block section-light px-6 py-18 md:px-10 md:py-22">
      <div className="section-inner mx-auto max-w-7xl">
        <div className="reveal-up mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
            Client Stories
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--light-foreground)] md:text-4xl">
            Trusted by Market Leaders
          </h2>
        </div>
        <div className="logo-marquee reveal-up">
          <div className="logo-marquee-track gap-4">
            {items.map((item, index) => (
              <article
                key={`${item.author}-${index}`}
                className="panel-light group min-w-[20rem] max-w-[20rem] rounded-[1.2rem] p-5 transition md:min-w-[22rem] md:max-w-[22rem]"
              >
                <div className="mb-3 text-2xl leading-none text-[var(--brand-green)] opacity-40 group-hover:opacity-70 transition">
                  &ldquo;
                </div>
                <p className="text-sm leading-6 text-[var(--light-muted)]">{item.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--ring-soft)] text-xs font-bold text-[var(--brand-green)]">
                    {item.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--light-foreground)]">{item.author}</p>
                    <p className="text-xs text-[var(--light-muted)]">{item.org}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
