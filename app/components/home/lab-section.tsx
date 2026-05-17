import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { labChecks } from "./content";
import Image from "next/image";

export default function LabSection() {
  return (
    <section id="quality" className="section-block section-light px-6 py-18 md:px-10 md:py-22">
      <div className="section-inner mx-auto max-w-7xl">
        <div className="reveal-up mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
            Quality Assurance
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--light-foreground)] md:text-4xl">
            Rigorous Lab Validation
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel-light reveal-up rounded-[1.2rem] p-5">
            <p className="mb-4 text-sm text-[var(--light-muted)]">Every batch tested before dispatch</p>
            <div className="grid gap-2.5">
              {labChecks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--background-soft)] px-4 py-3 transition hover:border-[var(--brand-green)]/40"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-[var(--brand-green)]" />
                  <span className="text-sm text-[var(--light-foreground)]">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link href="/contact" className="gold-button rounded-full px-4 py-2.5 text-xs font-semibold">
                Request Sample CoA
              </Link>
              <Link href="/contact" className="outline-button rounded-full px-4 py-2.5 text-xs font-semibold">
                Talk to QA Team
              </Link>
            </div>
          </div>

          <div className="relative reveal-up overflow-hidden rounded-[1.2rem] min-h-[260px] md:min-h-[360px]" style={{ animationDelay: "120ms" }}>
            <Image
              src="/lab.png"
              alt="SVF Soya manufacturing facility"
              fill
              sizes="(max-width: 768px) 90vw, 550px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
