"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgeCheck,
  Factory,
  Home,
  Menu,
  MessageCircleMore,
  PlaneTakeoff,
  BriefcaseBusiness,
  Users,
  Shield,
  X,
  ChevronDown,
  ClipboardList,
  Rss,
  ShieldCheck,
} from "lucide-react";
import ThemeSwitch from "./theme-switch";

const allNavLinks = [
  { name: "Home", key: "home", icon: Home },
  { name: "About Us", key: "about", icon: Users },
  { name: "Products", key: "products", icon: BadgeCheck },
  { name: "Process", key: "process", icon: Factory },
  { name: "Blog", key: "blog", icon: Rss },
  { name: "Quality", key: "quality", icon: ShieldCheck },
  { name: "Exports", key: "exports", icon: PlaneTakeoff },
  { name: "Careers", key: "careers", icon: BriefcaseBusiness },
  { name: "Contact", key: "contact", icon: MessageCircleMore },
] as const;

const DESKTOP_PRIMARY_COUNT = 4;
const MOBILE_PRIMARY_COUNT = 4;

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const getLink = (key: (typeof allNavLinks)[number]["key"]) => {
    if (key === "home") return pathname === "/" ? "#hero" : "/";
    if (key === "products") return "/products";
    if (key === "about") return "/about-us";
    if (key === "process") return "/manufacturing-process";
    if (key === "exports") return "/exports";
    if (key === "careers") return "/careers";
    if (key === "blog") return "/blog";
    if (key === "quality") return "/quality-policy";
    if (key === "contact") return "/contact";
    return "/";
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMoreOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMoreOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMoreOpen]);

  const desktopPrimary = allNavLinks.slice(0, DESKTOP_PRIMARY_COUNT);
  const desktopOverflow = allNavLinks.slice(DESKTOP_PRIMARY_COUNT);
  const mobilePrimary = allNavLinks.slice(0, MOBILE_PRIMARY_COUNT);
  const mobileOverflow = allNavLinks.slice(MOBILE_PRIMARY_COUNT);
  const overflowLinks = Array.from(
    new Map([...desktopOverflow, ...mobileOverflow].map((item) => [item.key, item])).values(),
  );

  return (
    <>
      {/* ── Desktop navbar ── */}
      <header className="fixed inset-x-0 top-0 z-50 hidden justify-center px-2 pt-2 md:flex">
        <div className="nav-shell nav-shell-scrolled flex w-full max-w-8xl items-center justify-between rounded-3xl px-2 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="SVF Soya"
              width={128}
              height={40}
              priority
              data-navbar-logo="1"
              className="logo-on-light h-auto w-30 object-contain"
            />
            <Image
              src="/logo-dark-theme.png"
              alt="SVF Soya"
              width={128}
              height={40}
              priority
              data-navbar-logo="1"
              className="logo-on-dark h-auto w-30 object-contain"
            />
          </Link>

          <nav className="flex items-center gap-7 text-sm font-medium text-[var(--light-foreground)]">
            {desktopPrimary.map((item) => (
              <Link
                key={item.name}
                href={getLink(item.key)}
                className="transition hover:text-[var(--brand-green)]"
              >
                {item.name}
              </Link>
            ))}
            {desktopOverflow.length > 0 && (
              <button
                type="button"
                onClick={() => setIsMoreOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-[var(--brand-green)]"
                aria-label="Open more links"
              >
                <Menu size={15} />
                More
              </button>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeSwitch className="h-9 w-9 border border-[var(--line)] text-[var(--light-foreground)] hover:bg-[var(--ring-soft)]" />

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsQuoteOpen((v) => !v)}
                className="gold-button inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition"
              >
                Request a Quote
                <ChevronDown size={14} className={`transition-transform duration-200 ${isQuoteOpen ? "rotate-180" : ""}`} />
              </button>

              {isQuoteOpen && (
                <>
                  <button
                    type="button"
                    className="fixed inset-0 z-[5]"
                    onClick={() => setIsQuoteOpen(false)}
                    aria-label="Close dropdown"
                  />
                  <div className="absolute right-0 top-full z-[10] mt-2 w-52 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card-light)] shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                    <a
                      href="https://wa.me/919019521992?text=Hi%20SVF%20Soya%2C%20I%27d%20like%20to%20request%20a%20quote."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsQuoteOpen(false)}
                      className="flex items-center gap-3 px-4 py-3.5 text-sm font-semibold text-[var(--light-foreground)] transition hover:bg-[var(--ring-soft)]"
                    >
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-500">
                        <MessageCircleMore size={14} />
                      </span>
                      Chat on WhatsApp
                    </a>
                    <div className="mx-4 h-px bg-[var(--line)]" />
                    <a
                      href="/contact"
                      onClick={() => setIsQuoteOpen(false)}
                      className="flex items-center gap-3 px-4 py-3.5 text-sm font-semibold text-[var(--light-foreground)] transition hover:bg-[var(--ring-soft)]"
                    >
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                        <ClipboardList size={14} />
                      </span>
                      Fill Request Form
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile top logo ── */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 pt-4 md:hidden">
        <Link
          href="/"
          className="nav-shell nav-shell-scrolled inline-flex items-center rounded-full border p-2"
        >
          <Image
            src="/logo.png"
            alt="SVF Soya"
            width={62}
            height={26}
            priority
            data-navbar-logo="1"
            className="logo-on-light h-auto w-28 object-contain"
          />
          <Image
            src="/logo-dark-theme.png"
            alt="SVF Soya"
            width={62}
            height={26}
            priority
            data-navbar-logo="1"
            className="logo-on-dark h-auto w-28 object-contain"
          />
        </Link>
      </div>

      {/* ── Mobile bottom dock ── */}
      <nav className="fixed inset-x-0 bottom-0 z-50 md:hidden">
        <div className="mobile-dock mx-auto grid max-w-xl grid-cols-[repeat(4,minmax(0,1fr))_auto_2.5rem] rounded-t-[2rem] border border-[var(--line)] px-1 py-2 shadow-[0_-18px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          {mobilePrimary.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={getLink(item.key)}
                className="flex flex-col items-center gap-1 rounded-2xl px-1 py-2 text-center text-[10px] font-semibold text-[var(--light-foreground)] transition"
              >
                <Icon size={18} className="text-[var(--light-foreground)]" />
                <span>{item.name}</span>
              </Link>
            );
          })}

          {mobileOverflow.length > 0 && (
            <button
              type="button"
              onClick={() => setIsMoreOpen(true)}
              className="flex flex-col items-center gap-1 rounded-2xl px-1 py-2 text-center text-[10px] font-semibold text-[var(--light-foreground)] transition"
              aria-label="Open more links"
            >
              <Shield size={18} className="text-[var(--light-foreground)]" />
              <span>More</span>
            </button>
          )}

          {/* Theme toggle */}
          <ThemeSwitch className="h-full w-full text-[var(--light-foreground)] hover:bg-[var(--ring-soft)]" />
        </div>
      </nav>

      {/* ── More drawer ── */}
      {isMoreOpen && (
        <div className="fixed inset-0 z-[90]">
          <button
            type="button"
            onClick={() => setIsMoreOpen(false)}
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            aria-label="Close more links drawer"
          />
          <div className="absolute inset-x-0 bottom-0 rounded-t-[1.8rem] border border-[var(--line)] bg-[var(--card-light)] p-5 shadow-[0_-24px_60px_rgba(0,0,0,0.35)]">
            <div className="mx-auto w-full max-w-xl">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                  More Links
                </p>
                <button
                  type="button"
                  onClick={() => setIsMoreOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--light-foreground)]"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {overflowLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.key}
                      href={getLink(item.key)}
                      onClick={() => setIsMoreOpen(false)}
                      className="panel-light flex items-center gap-3 rounded-[1rem] px-4 py-3 text-sm font-semibold text-[var(--light-foreground)]"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ring-soft)] text-[var(--brand-green)]">
                        <Icon size={15} />
                      </span>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
