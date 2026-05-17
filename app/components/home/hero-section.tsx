"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import type { Settings } from "react-slick";
import { heroStats } from "./content";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function HeroSection() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    dotsClass: "hero-dots",
  };

  const images = [
    "/hero-banner-1.png",
    "/hero-banner-3.png",
    "/hero-banner-4.png",
  ];

  return (
    /*
     * Box section: horizontally padded, rounded corners.
     * aspect-[3/2] matches the exact native image ratio (1536 × 1024)
     * so object-cover has nowhere to crop — full image always visible.
     * On mobile: aspect-[4/3] still shows the full width comfortably.
     */
    <section className="w-full">
      <div className="relative mx-auto w-full overflow-hidden mt-24 md:mt-0 mx-4 md:px-0 max-h-[740px] aspect-[3/2] md:aspect-[3/2]">

        {/* ── Carousel ── */}
        <div className="absolute inset-0">
          <Slider {...settings} className="h-full">
            {images.map((src, i) => (
              <div key={i} className="relative h-full w-full">
                <Image
                  src={src}
                  alt="SVF Soya facility"
                  fill
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 95vw, 1280px"
                  className="object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* ── Overlays ── */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-black/40 to-black/20" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/45 via-transparent to-transparent" />

        {/* ── Content centered ── */}
        <div className="absolute inset-0 z-[10] flex flex-col justify-center px-5 md:px-8 lg:px-10">

          {/* Badge */}
          <p className="mb-3 inline-flex items-center w-fit gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
            Chemical-Free · Non-GMO · Karnataka
          </p>

          {/* Headline */}
          <h1 className="font-display text-2xl font-bold leading-[1.06] text-white drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            India&apos;s Premium
            <br />
            <span style={{
              background: "linear-gradient(135deg, #5fd46a 0%, #b6eabc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Non-GMO Soya
            </span>
          </h1>

          <p className="mt-2 text-xs text-white/70 md:mt-3 md:text-sm">
            180 TPD Mechanical Processing · Karnataka
          </p>

          {/* Stats — hidden on very small screens */}
          <div className="mt-4 hidden grid-cols-3 gap-2 sm:grid sm:max-w-sm md:mt-5 md:max-w-md">
            {heroStats.map((item) => (
              <div key={item.label}
                className="rounded-xl border border-white/20 bg-black/40 px-3 py-2.5 backdrop-blur-md md:px-4 md:py-3">
                <p className="text-sm font-bold text-[#5fd46a] md:text-base">{item.label}</p>
                <p className="mt-0.5 text-[10px] text-white/60 md:text-[11px]">{item.caption}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
