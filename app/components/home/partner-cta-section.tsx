import Link from "next/link";
import { ArrowRight, MessageCircleMore } from "lucide-react";

export default function PartnerCtaSection() {
  return (
    <section id="cta" className="section-block section-light">
      <div className="section-inner mx-auto">
        <div className="reveal-up relative overflow-hidden bg-gradient-to-br from-[var(--brand-green)] via-[#1a8a26] to-[var(--field-green)] p-8 text-center shadow-[0_24px_60px_rgba(32,158,46,0.35)] md:p-14">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/5" />

          <p className="relative text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
            Start Today
          </p>
          <h2 className="relative mt-3 text-3xl font-bold text-white md:text-5xl">
            Ready to Partner?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80 md:text-base">
            Response within 24 hours · Free commercial samples · Pan-India &amp; export delivery
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#000] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Request Bulk Quote
              <ArrowRight size={15} />
            </Link>
            <Link
              href="https://wa.me/919019521992"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/25 px-7 py-3.5 text-sm font-semibold text-[#fff] backdrop-blur-sm transition hover:bg-white/25"
            >
              <MessageCircleMore size={15} />
              WhatsApp Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
