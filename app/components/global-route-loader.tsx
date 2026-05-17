"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LoaderCanvas from "./LoaderCanvas";
import gsap from "gsap";

export default function GlobalRouteLoader() {
  const pathname = usePathname();
  const logoRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const fallbackTimerRef = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [showBg, setShowBg] = useState(true);

  const showLoader = useCallback(() => {
    if (fallbackTimerRef.current) {
      window.clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }

    setProgress(0);
    setShowBg(true);
    setIsVisible(true);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const update = () => {
      const t = document.documentElement.getAttribute("data-theme");
      setTheme(t === "dark" ? "dark" : "light");
    };

    update();

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onLinkClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      const url = new URL(link.href, window.location.href);
      const isHttpLink = url.protocol === "http:" || url.protocol === "https:";
      const isInternalLink = url.origin === window.location.origin;
      const isSameDocument =
        url.pathname === window.location.pathname && url.search === window.location.search;

      if (!isHttpLink || !isInternalLink || isSameDocument) {
        return;
      }

      showLoader();

      fallbackTimerRef.current = window.setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "";
        fallbackTimerRef.current = null;
      }, 8000);
    };

    document.addEventListener("click", onLinkClick, true);

    return () => {
      document.removeEventListener("click", onLinkClick, true);
      if (fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
      }
    };
  }, [showLoader]);

  useLayoutEffect(() => {
    showLoader();
    setAnimationKey((key) => key + 1);
  }, [pathname, showLoader]);

  useLayoutEffect(() => {
    if (animationKey === 0) return;

    let mounted = true;

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        if (!mounted) return;
        // immediately hide wrapper via DOM — no React render gap
        if (wrapperRef.current) wrapperRef.current.style.display = "none";
        setIsVisible(false);
        document.body.style.overflow = "";
      },
    });

    requestAnimationFrame(() => {
      if (mounted) {
        setShowBg(false);
      }
    });

    gsap.set(logoRef.current, {
      opacity: 0,
      scale: 0.9,
    });

    gsap.killTweensOf(logoRef.current);
    gsap.to(logoRef.current, {
      scale: 1.05,
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    // 1. Logo fades IN quickly
    tl.to(logoRef.current, { opacity: 1, duration: 0.35, ease: "power2.out" });

    // 2. Logo fades OUT — fully gone before smear begins
    tl.to(logoRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" });

    // 3. Smear runs — logo is already invisible
    tl.to(
      {},
      {
        duration: 2.5,
        ease: "power3.inOut",
        onUpdate: function () {
          setProgress(this.progress());
        },
      }
    );

    return () => {
      mounted = false;
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [animationKey]);

  if (!isVisible) return null;

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999999,
        pointerEvents: "none",
      }}
    >
      {showBg && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              theme === "dark" ? "#050b08" : "#edf4ea",
            zIndex: 1,
          }}
        />
      )}

      <LoaderCanvas
        progress={progress}
        colorTop={theme === "dark" ? "#edf4ea" : "#000"}
        colorBottom={theme === "dark" ? "#f7faf5" : "#000"}
      />

      <div
        ref={logoRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 20,
        }}
      >
        <Image src={theme === "light" ? "/logo-dark-theme.png" : "/logo.png"} width={220} height={100} alt="logo" priority />
      </div>
    </div>
  );
}
