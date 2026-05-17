"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  Send,
  XCircle,
} from "lucide-react";

const channels = [
  {
    icon: MessageCircleMore,
    title: "WhatsApp",
    lines: ["+91 90195 21992", "Tap to chat instantly"],
    href: "https://wa.me/919019521992?text=Hi%20SVF%20Soya%2C%20I%27d%20like%20to%20get%20a%20quote.",
    highlight: true,
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 90195 21992", "+91 99899 11154"],
    href: "tel:+919019521992",
    highlight: false,
  },
  {
    icon: Mail,
    title: "Corporate Email",
    lines: ["support@svfsoya.com", "exports@svfsoya.com"],
    href: "mailto:support@svfsoya.com",
  },
  {
    icon: Clock3,
    title: "Business Hours",
    lines: ["Mon – Sat", "09:30 – 18:30 IST"],
    href: "#",
  },
];

const assurances = [
  { title: "Response within 24h", text: "Direct turnaround on quotes and procurement queries." },
  { title: "Free samples", text: "Commercial sample batches ready for first-time buyers." },
  { title: "Pan-India & Export ready", text: "Dispatch support for domestic and export-oriented sourcing." },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const body = {
      name: fd.get("name"),
      company: fd.get("company"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      product: fd.get("product"),
      quantity: fd.get("quantity"),
      inquiry_type: fd.get("inquiry_type"),
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.error ?? "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  return (
    <main className="page-shell">

      {/* ── Header ── */}
      <section className="section-block section-dark px-6 pb-14 pt-28 md:px-10 md:pb-18 md:pt-34">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">
              Contact Us
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] text-[var(--foreground)] md:text-6xl">
              Let&apos;s Start Your
              <span className="block text-[var(--brand-green)]">Supply Partnership</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              Request a quotation, ask for a sample, or get in touch. We respond to every genuine
              enquiry within 24 hours.
            </p>
          </div>

          {/* ── Two-column layout ── */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left — channels + map pin */}
            <div className="grid gap-5">
              <div className="panel-dark reveal-up rounded-[1.4rem] p-5 md:p-6">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                  Direct Channels
                </p>
                <div className="space-y-3">
                  {channels.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        target={item.href.startsWith("https") ? "_blank" : undefined}
                        rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}
                        className={`flex items-start gap-3 rounded-[1rem] border p-4 transition ${
                          item.highlight
                            ? "border-green-500/40 bg-green-500/10 hover:bg-green-500/15"
                            : "border-[var(--line)] bg-white/5 hover:border-[var(--brand-green)]/40 hover:bg-white/10"
                        }`}
                      >
                        <Icon size={17} className={`mt-0.5 shrink-0 ${item.highlight ? "text-green-400" : "text-[var(--brand-green)]"}`} />
                        <div>
                          <p className={`text-sm font-semibold ${item.highlight ? "text-green-400" : "text-[var(--foreground)]"}`}>{item.title}</p>
                          {item.lines.map((l) => (
                            <p key={l} className="mt-0.5 text-sm text-[var(--muted)]">{l}</p>
                          ))}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="panel-dark reveal-up rounded-[1.4rem] p-5 md:p-6" style={{ animationDelay: "100ms" }}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                  Manufacturing Plant
                </p>
                <div className="flex items-start gap-3 rounded-[1rem] border border-[var(--line)] bg-white/5 p-4">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-[var(--brand-green)]" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">Plant Location</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      Plot No. 4/4, Bande Bommasandra,<br />
                      Dodda Gubbi, Karnataka – 560077
                    </p>
                    <a
                      href="https://maps.google.com/maps?ll=13.080804,77.682941&z=20&t=h&hl=en&gl=IN&mapclient=embed&cid=2362954893093776042"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-[var(--brand-green)] hover:underline"
                    >
                      Open in Maps ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="reveal-up flex items-center gap-3" style={{ animationDelay: "180ms" }}>
                {[
                  { href: "https://www.linkedin.com", icon: Building2 },
                  { href: "https://wa.me/919019521992", icon: MessageCircleMore },
                  { href: "mailto:support@svfsoya.com", icon: Mail },
                ].map(({ href, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="panel-dark flex h-10 w-10 items-center justify-center rounded-full text-[var(--muted)] transition hover:border-[var(--brand-green)]/40 hover:text-[var(--brand-green)]"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="panel-dark reveal-up rounded-[1.6rem] p-6 md:p-8" style={{ animationDelay: "120ms" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                Get a Quotation
              </p>

              {status === "success" ? (
                <div className="mt-6 form-success">
                  <CheckCircle2 size={40} className="mx-auto text-[var(--brand-green)]" />
                  <p className="mt-4 text-base font-semibold text-[var(--foreground)]">
                    Enquiry sent successfully!
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    We&apos;ll get back to you within 24 hours. Check your inbox for confirmation.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-5 gold-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-5 md:grid-cols-2">

                  <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Full Name *</span>
                    <input type="text" name="name" required placeholder="John Doe"
                      className="mt-2 w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/50 focus:border-[var(--brand-green)]" />
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Company Name</span>
                    <input type="text" name="company" placeholder="Global Trade Inc."
                      className="mt-2 w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/50" />
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Phone Number *</span>
                    <input type="tel" name="phone" required placeholder="+91 90000 00000"
                      className="mt-2 w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/50" />
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Email Address *</span>
                    <input type="email" name="email" required placeholder="exports@company.com"
                      className="mt-2 w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/50" />
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Product Needed</span>
                    <select name="product"
                      className="mt-2 w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none">
                      <option value="Soya Meal">Soya Meal</option>
                      <option value="Full Fat Soya Meal">Full Fat Soya Meal</option>
                      <option value="Crude Soybean Oil">Crude Soybean Oil</option>
                      <option value="Soybeans">Soybeans</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Quantity</span>
                    <input type="text" name="quantity" placeholder="50 MT"
                      className="mt-2 w-full border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/50" />
                  </label>

                  <div className="md:col-span-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Inquiry Type</span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Bulk Purchase", "Sample Request", "Custom Processing"].map((item) => (
                        <label key={item}
                          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--brand-green)]/50">
                          <input type="radio" name="inquiry_type" value={item} className="accent-[var(--brand-green)]" />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  <label className="block md:col-span-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Your Message</span>
                    <textarea rows={4} name="message" placeholder="Tell us about your requirements..."
                      className="mt-2 w-full resize-none border-0 border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/50" />
                  </label>

                  {status === "error" && (
                    <div className="md:col-span-2 flex items-center gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      <XCircle size={16} className="shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <div className="md:col-span-2">
                    <button type="submit" disabled={status === "loading"}
                      className={`gold-button inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold ${status === "loading" ? "btn-loading" : ""}`}>
                      {status === "loading" ? "Sending…" : "Submit Enquiry"}
                      {status !== "loading" && <Send size={15} />}
                    </button>
                  </div>

                  <div className="md:col-span-2">
                    <Link href="https://wa.me/919019521992" target="_blank" rel="noopener noreferrer"
                      className="outline-button inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold">
                      <MessageCircleMore size={15} />
                      WhatsApp Us
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="section-block section-light px-4 pb-4 pt-10 md:px-8 md:pt-14 md:pb-6">
        <div className="section-inner mx-auto max-w-7xl">
          <div className="reveal-up mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-green)]">Find Us</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)] md:text-3xl">Manufacturing Plant</h2>
          </div>
          <div className="reveal-up relative overflow-hidden rounded-[1.6rem] border border-[var(--line)] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <iframe
              src="https://maps.google.com/maps?ll=13.080804,77.682941&z=20&t=h&hl=en&gl=IN&cid=2362954893093776042&output=embed"
              className="h-[320px] w-full md:h-[420px]"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SVF Soya Plant Location"
            />
            <div className="absolute left-4 top-4 max-w-[200px] rounded-[1rem] border border-[var(--line)] bg-[var(--card-light)] p-4 shadow-xl md:left-6 md:top-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-green)]">SVF SOYA PVT. LTD.</p>
              <p className="mt-2 text-xs leading-5 text-[var(--foreground)]">
                Plot No. 4/4, Bande Bommasandra,<br />Dodda Gubbi, Karnataka<br />– 560077, INDIA
              </p>
              <a href="https://maps.google.com/maps?ll=13.080804,77.682941&z=20&t=h&hl=en&gl=IN&mapclient=embed&cid=2362954893093776042"
                target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex text-[11px] font-semibold text-[var(--brand-green)] hover:underline">
                Open in Maps ↗
              </a>
            </div>
            <div className="absolute bottom-4 right-4 rounded-[0.75rem] border border-[var(--line)] bg-[var(--card-light)] px-3 py-2 shadow-lg md:bottom-6 md:right-6">
              <p className="text-[10px] font-semibold text-[var(--foreground)]">Mon – Sat</p>
              <p className="text-[10px] text-[var(--muted)]">09:30 – 18:30 IST</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Assurances ── */}
      <section className="section-block section-light px-6 py-12 md:px-10 md:py-14">
        <div className="section-inner mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {assurances.map((item, index) => (
            <div key={item.title} className="panel-light reveal-up rounded-[1.2rem] p-5"
              style={{ animationDelay: `${index * 80}ms` }}>
              <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
