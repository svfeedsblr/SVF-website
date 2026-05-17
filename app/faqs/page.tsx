import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "../components/faq-accordion";

export const metadata: Metadata = {
  title: "FAQs — Soya Meal, Processing & Supply Questions",
  description:
    "Answers to the most common questions about SVF Soya's products, chemical-free mechanical processing, protein content, minimum order quantities, export procedures, and delivery terms.",
  keywords: [
    "soya meal FAQ",
    "soya processing questions India",
    "non-GMO soya FAQ",
    "soya meal protein content",
    "soya meal minimum order quantity",
    "soya export documentation India",
  ],
  alternates: { canonical: "https://www.svfsoya.com/faqs" },
  openGraph: {
    title: "FAQs — SVF Soya Product & Supply Questions Answered",
    description:
      "Common questions about soya meal protein content, chemical-free processing, MOQ, export docs, and delivery terms answered by SVF Soya.",
    url: "https://www.svfsoya.com/faqs",
  },
};

const categories = [
  "Products & Specs",
  "Ordering & Supply",
  "Quality Control",
  "International",
];

const faqs = [
  {
    question: "What is the minimum protein percentage in SVF Soya Meal?",
    answer:
      "Our standard soya meal maintains a precision threshold of minimum 48% protein content, optimized for high-performance feed applications.",
  },
  {
    question: "Do you provide Non-GMO certification?",
    answer:
      "Yes. SVF Soya specializes in identity-preserved Non-GMO soya products, supported by traceability and third-party audit certifications for every dispatch.",
  },
  {
    question: "Why is Urease Activity monitoring critical?",
    answer:
      "Urease activity is our primary marker for verifying proper heat treatment. We maintain a tightly controlled range to support digestibility and nutritional availability.",
  },
  {
    question: "Can you support export-focused procurement?",
    answer:
      "Yes. We support buyers with documentation discipline, batch-linked quality records, and dispatch coordination for export conversations.",
  },
];

const highlights = [
  { value: "15 MT", label: "FTL / spot shipment base lot" },
  { value: "Global", label: "buyer-ready documentation coverage" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqsPage() {
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="section-block section-dark px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-34">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--harvest-gold)]">
              Knowledge Base
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.02] text-[var(--foreground)] md:text-6xl">
              Frequently Asked
              <span className="block text-[var(--harvest-gold)]">Questions.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              Technical specifications, logistical frameworks, and quality assurance protocols for
              your global soya orchestration.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.38fr_1fr]">
            <div className="grid gap-4">
              <div className="panel-dark reveal-up rounded-[1.4rem] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--harvest-gold)]">
                  Request Lines
                </p>
                <div className="mt-4 space-y-2">
                  {categories.map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-[0.95rem] border px-4 py-3 text-sm font-semibold ${
                        index === 0
                          ? "border-[var(--brand-green)] bg-[var(--brand-green)] text-white"
                          : "border-[var(--line)] bg-white/5 text-[var(--muted)]"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel-dark reveal-up rounded-[1.4rem] p-5" style={{ animationDelay: "100ms" }}>
                <p className="text-sm font-semibold text-[var(--foreground)]">Need Direct Support?</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Connect with our engineering team for custom benchmarking and buyer guidance.
                </p>
                <Link href="/contact" className="mt-4 inline-flex text-sm font-semibold text-[var(--brand-green)]">
                  Technical Help →
                </Link>
              </div>
            </div>

            <div>
              <FaqAccordion items={faqs} />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {highlights.map((item, index) => (
                  <div
                    key={item.value}
                    className="panel-dark reveal-up rounded-[1.3rem] p-6"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      {index === 0 ? "Shipment Logic" : "Market Reach"}
                    </p>
                    <p className="mt-3 text-4xl font-semibold text-[var(--foreground)]">{item.value}</p>
                    <p className="mt-2 text-sm text-[var(--muted)]">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="panel-dark reveal-up mt-8 overflow-hidden rounded-[1.5rem] p-4 md:p-5" style={{ animationDelay: "140ms" }}>
                <div className="relative min-h-[18rem] overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-white/5">
                  <Image src="/products-hero-banner.png" alt="Quality orchestration visual" fill className="object-cover opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-3)] via-[var(--surface)]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h2 className="text-3xl font-semibold text-[var(--foreground)]">Quality Orchestration.</h2>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--muted)]">
                      Every grain undergoes a 12-point precision audit before global dispatch to
                      ensure sovereign quality standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
