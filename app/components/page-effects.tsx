"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-up"));

    body.classList.remove("reveal-enabled");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    let observer: IntersectionObserver | null = null;
    const startReveal = () => {
      elements.forEach((element) => {
        element.classList.remove("is-visible");
      });

      body.classList.add("reveal-enabled");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.28) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: [0.28, 0.45],
          rootMargin: "0px 0px -10% 0px",
        },
      );

      elements.forEach((element) => observer?.observe(element));
    };

    const timer = window.setTimeout(startReveal, 560);

    return () => {
      window.clearTimeout(timer);
      body.classList.remove("reveal-enabled");
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
