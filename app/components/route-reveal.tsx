"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function RouteReveal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpening, setIsOpening] = useState(true);

  useEffect(() => {
    document.body.classList.remove("route-ready");

    const timer = window.setTimeout(() => {
      setIsOpening(false);
      document.body.classList.add("route-ready");
    }, 520);

    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("route-ready");
    };
  }, []);

  return (
    <div className="relative">
      {children}
      <div
        className={`pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-[var(--background)] transition-transform duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpening ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-5">
          <Image
            src="/svf-soya.png"
            alt="SVF Soya"
            width={210}
            height={72}
            priority
            className="h-auto w-40 object-contain md:w-52"
          />
          <div className="h-px w-28 overflow-hidden rounded-full bg-white/10">
            <div className="route-reveal-line h-full w-full origin-left bg-[var(--harvest-gold)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
