import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, Factory, FlaskConical, Mail, Paperclip, Truck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at SVF Soya — Join Our Soya Processing Team in Karnataka",
  description:
    "Explore career opportunities at SVF Soya Pvt. Ltd. We are hiring for production, quality control, sales and logistics roles at our 180 TPD soya processing plant in Karnataka.",
  keywords: [
    "careers SVF Soya",
    "jobs soya processing plant Karnataka",
    "quality control jobs soya manufacturer",
    "food manufacturing jobs Bangalore",
  ],
  alternates: { canonical: "https://www.svfsoya.com/careers" },
  openGraph: {
    title: "Career Opportunities at SVF Soya — Join Our Growing Team",
    description:
      "Manufacturing, quality, logistics, and sales roles at a fast-growing soya processing company in Karnataka. Apply now.",
    url: "https://www.svfsoya.com/careers",
  },
};

const metrics = [
  { value: "22,000", label: "Square feet facility" },
  { value: "100+", label: "Skilled industrial experts" },
  { value: "180", label: "TPD processing capacity" },
];

const pillars = [
  {
    title: "Zero-Compromise Purity",
    text: "Every role supports a precision-first process model and disciplined quality culture.",
  },
  {
    title: "Continuous Innovation",
    text: "We adopt practical improvements in processing, testing, and operational visibility.",
  },
  {
    title: "Farmer-First Sourcing",
    text: "Our teams collaborate across sourcing and production for traceable quality outcomes.",
  },
];

const teams = [
  {
    icon: Factory,
    title: "Manufacturing & Engineering",
    text: "Operate and optimize expeller, extrusion, and mechanical maintenance workflows.",
  },
  {
    icon: FlaskConical,
    title: "QC / Lab",
    text: "Run product and process-level testing with documented release standards.",
  },
  {
    icon: Truck,
    title: "Logistics",
    text: "Coordinate domestic and interstate movement with dispatch reliability.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Sales & Strategy",
    text: "Build growth channels and partner-led expansion across B2B markets.",
  },
  {
    icon: Users,
    title: "Admin & HR",
    text: "Enable a healthy, safe, and accountable work culture across all departments.",
  },
];

const openings = [
  {
    role: "Senior Process Engineer",
    tag: "Manufacturing · Full-Time",
    location: "Hubli, Karnataka",
  },
  {
    role: "Analytical Chemist (Lecithin Focus)",
    tag: "QC Lab · Expert Role",
    location: "Hubli, Karnataka",
  },
  {
    role: "Regional Supply Chain Manager",
    tag: "Logistics · Managerial",
    location: "Bangalore / Hubli",
  },
];

export default function CareersPage() {
  return (
    <main className="page-shell">
      <section className="section-block section-dark px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36">
        <div className="section-inner mx-auto grid max-w-7xl gap-7 lg:grid-cols-[1fr_0.95fr]">
          <div className="reveal-up">
            <p className="chip inline-flex px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
              Career Opportunities
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.03] text-[var(--foreground)] md:text-7xl">
              Join India&apos;s
              <span className="block text-[var(--brand-green)]">Purity Revolution</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
              We do not just process seeds. We engineer the future of nutrition with structured
              discipline, measurable quality, and real industrial impact.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#openings" className="gold-button rounded-full px-6 py-3 text-sm font-semibold">
                View Current Openings
              </a>
              <a href="#application" className="outline-button rounded-full px-6 py-3 text-sm font-semibold">
                Submit General Resume
              </a>
            </div>
          </div>

          <div className="panel-dark reveal-up relative min-h-[18rem] overflow-hidden rounded-[1.4rem] md:min-h-[30rem]">
            <Image src="/Carreres.png" alt="Careers at SVF Soya" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-10 md:px-10 md:py-12">
        <div className="section-inner mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {metrics.map((item, index) => (
            <article
              key={item.label}
              className="panel-light reveal-up rounded-[1.1rem] p-5 md:p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-4xl font-semibold text-[var(--brand-green)]">{item.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.17em] text-[var(--light-muted)]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-3xl font-semibold text-[var(--foreground)] md:text-5xl">
            Engineered for Excellence
          </h2>
          <p className="reveal-up mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)] md:text-base">
            Our culture mirrors our product standards: clean systems, accountable execution, and
            constant progress with purpose.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pillars.map((item, index) => (
              <article
                key={item.title}
                className="panel-dark reveal-up rounded-[1.2rem] p-5 md:p-6"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--brand-green)]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-7xl">
          <h2 className="reveal-up text-center text-3xl font-semibold text-[var(--light-foreground)] md:text-5xl">
            Where Do You Fit?
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((item, index) => {
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
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-dark px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="panel-dark reveal-up rounded-[1.3rem] p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-[var(--foreground)] md:text-5xl">Life at SVF Soya</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-[var(--line)] bg-white/5 p-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">Uncompromising Safety</p>
                <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                  Strict plant safety standards and training modules for every department.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--line)] bg-white/5 p-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">Global Learning Programs</p>
                <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                  Technical workshops and operational upskilling for high-growth career paths.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--line)] bg-white/5 p-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">Community Impact</p>
                <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                  Rural employment, responsible sourcing, and practical sustainability participation.
                </p>
              </div>
            </div>
          </article>
          <article className="panel-dark reveal-up overflow-hidden rounded-[1.3rem]" style={{ animationDelay: "120ms" }}>
            <div className="relative h-full min-h-[19rem]">
              <Image src="/hero-b.png" alt="Team collaboration at SVF Soya" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <blockquote className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/30 p-4 text-sm font-semibold text-white backdrop-blur-sm md:text-base">
                &ldquo;Purity in work, purity in output.&rdquo;
              </blockquote>
            </div>
          </article>
        </div>
      </section>

      {/* ── CV / Application section ── */}
      <section id="application" className="section-block section-light px-6 py-14 md:px-10 md:py-18">
        <div className="section-inner mx-auto max-w-4xl">
          <div className="reveal-up rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                <Mail size={26} />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-[var(--light-foreground)] md:text-4xl">
                Send Us Your CV
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--light-muted)] md:text-base">
                Don&apos;t see your role listed? We&apos;re always open to exceptional talent. Send your CV and a short note about the opportunity you&apos;re looking for — we&apos;ll be in touch.
              </p>

              <div className="mt-8 w-full max-w-sm rounded-xl border border-[var(--line)] bg-[var(--background-soft)] p-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)]/10 text-[var(--brand-green)]">
                    <Paperclip size={15} />
                  </span>
                  <div className="text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--light-muted)]">Email your CV to</p>
                    <p className="mt-0.5 text-sm font-bold text-[var(--light-foreground)]">support@svfsoya.com</p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:support@svfsoya.com?subject=Job Application — SVF Soya&body=Hi SVF Soya Team,%0A%0APlease find my CV attached. I am interested in exploring career opportunities at SVF Soya.%0A%0AName:%0ARole of Interest:%0AExperience:%0A%0AThank you."
                className="gold-button mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
              >
                <Mail size={15} />
                Apply via Email
              </a>

              <p className="mt-4 text-xs text-[var(--light-muted)]">
                Attach your CV/Resume · Subject: Job Application — SVF Soya
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
