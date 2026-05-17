"use client";

import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import GoogleTranslate from "./google-translate";

const products = [
  { label: "Soya Meal", href: "/products/soya-meal" },
  { label: "Full Fat Soya Meal", href: "/products/full-fat-soya" },
  { label: "Crude Soybean Oil", href: "/products/crude-soybean-oil" },
  { label: "Soybean", href: "/products/raw-soybeans" },
];

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Market Insights", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "Products", href: "/products" },
    { label: "Manufacturing Process", href: "/manufacturing-process" },
    { label: "Exports", href: "/exports" },
    { label: "Retailer", href: "/retailer" },    
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer id="contact" className="section-block section-light text-[var(--light-foreground)]">
      <div className="section-inner mx-auto grid max-w-7xl gap-10 px-6 pb-8 pt-20 md:grid-cols-2 xl:grid-cols-4">
        <div className="reveal-up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--field-green)]">
            Products
          </p>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            {products.map((product) => (
              <li key={product.label}>
                <Link href={product.href} className="transition hover:text-[var(--brand-green)]">
                  {product.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal-up" style={{ animationDelay: "100ms" }}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--field-green)]">
            Quick Links
          </p>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-[var(--brand-green)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal-up" style={{ animationDelay: "200ms" }}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--field-green)]">
            Contact Details
          </p>
          <div className="space-y-4 text-sm text-[var(--muted)]">
            <p className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--harvest-gold)]" />
              SVF Soya Pvt. Ltd.
                Plot No. 4/4, Bande Bommasandra,
                Beside Anjaneya Swamy Temple,
                Dodda Gubbi, Karnataka - 560077.
                INDIA.
            </p>
            <p className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-[var(--harvest-gold)]" />
              +91 90195 21992
            </p>
            <p className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-[var(--harvest-gold)]" />
                support@svfsoya.com
            </p>
            <p className="flex items-center gap-3">
              <Clock3 size={16} className="shrink-0 text-[var(--harvest-gold)]" />
              Mon – Sat · 09:30 am – 06:30 pm (GMT+5:30)
            </p>
            <a
              href="https://maps.google.com/maps?ll=13.080804,77.682941&z=20&t=h&hl=en&gl=IN&mapclient=embed&cid=2362954893093776042"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-[var(--light-foreground)] transition hover:text-[var(--brand-green)]"
            >
              View on Google Maps ↗
            </a>
          </div>
        </div>

        <div className="reveal-up" style={{ animationDelay: "300ms" }}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--field-green)]">
            Social + Newsletter
          </p>
          <div className="space-y-4 text-sm text-[var(--muted)]">
            {/* Social icons row */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {/* YouTube */}
              <a href="https://www.youtube.com/@svfsoya1" target="_blank" rel="noopener noreferrer"
                title="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--muted)] transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/svfsoya/" target="_blank" rel="noopener noreferrer"
                title="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--muted)] transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/svfsoya/" target="_blank" rel="noopener noreferrer"
                title="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--muted)] transition hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              {/* Threads */}
              <a href="https://www.threads.net/@svfsoya" target="_blank" rel="noopener noreferrer"
                title="Threads"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--muted)] transition hover:border-[var(--light-foreground)]/50 hover:bg-[var(--background-soft)] hover:text-[var(--light-foreground)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.74-1.75-.467-.537-1.148-.82-2.043-.838l-.092-.002c-.735 0-1.983.2-2.7 1.397l-1.759-1.07C8.425 3.96 10.006 3.244 12.168 3.244h.103c3.226.045 5.146 1.923 5.49 5.371.7.284 1.347.68 1.924 1.18 1.122.963 1.896 2.274 2.198 3.727.477 2.257-.02 5.062-2.275 7.269C17.796 22.84 15.353 23.97 12.186 24z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://x.com/svfsoya" target="_blank" rel="noopener noreferrer"
                title="X (Twitter)"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--muted)] transition hover:border-[var(--light-foreground)]/50 hover:bg-[var(--background-soft)] hover:text-[var(--light-foreground)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/svf-soya/" target="_blank" rel="noopener noreferrer"
                title="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--muted)] transition hover:border-blue-600/50 hover:bg-blue-600/10 hover:text-blue-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p>Monthly plant updates, quality bulletins, and product availability notes.</p>

            {/* Language selector */}
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] px-4 py-3">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                🌐 Translate Page
              </p>
              <GoogleTranslate containerId="google_translate_footer" className="w-full" />
            </div>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Business email"
                className="rounded-2xl border border-[var(--line)] bg-[var(--background-soft)] px-4 py-3 text-[var(--light-foreground)] outline-none placeholder:text-[var(--muted)]"
              />
              <button
                type="submit"
                className="gold-button rounded-2xl px-4 py-3 font-semibold transition"
              >
                Join Updates
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="section-inner mx-auto flex max-w-7xl flex-col gap-3 border-t border-[var(--line)] px-6 py-6 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>© 2026 SVF Soya Pvt. Ltd. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
          Response within 24 hours
        </p>
      </div>
    </footer>
  );
}
