"use client";

import { useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    __svfTranslateReady?: boolean;
    __svfTranslateBooting?: boolean;
    google?: {
      translate?: {
        TranslateElement?: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            layout?: number;
            autoDisplay?: boolean;
          },
          elementId: string,
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const GOOGLE_TRANSLATE_SCRIPT_ID = "google-translate-script";
const GOOGLE_TRANSLATE_SELECTOR = "[data-google-translate-container='1']";

function initTranslateContainer(id: string) {
  const container = document.getElementById(id);
  if (!container || !window.google?.translate?.TranslateElement) {
    return false;
  }

  if (container.querySelector("select.goog-te-combo")) {
    container.dataset.inited = "1";
    return true;
  }

  container.innerHTML = "";

  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      autoDisplay: false,
    },
    id,
  );

  container.dataset.inited = "1";
  return true;
}

function initAllTranslateContainers() {
  if (!window.google?.translate?.TranslateElement) {
    return false;
  }

  const nodes = Array.from(document.querySelectorAll<HTMLElement>(GOOGLE_TRANSLATE_SELECTOR));
  nodes.forEach((node) => {
    if (node.id) {
      initTranslateContainer(node.id);
    }
  });

  return true;
}

export default function GoogleTranslate({
  containerId = "google_translate_element",
  className = "",
}: {
  containerId?: string;
  className?: string;
}) {
  const pathname = usePathname();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const initializeTranslate = () => {
      if (initAllTranslateContainers()) {
        window.__svfTranslateReady = true;
      }
    };

    window.googleTranslateElementInit = initializeTranslate;

    if (window.google?.translate?.TranslateElement) {
      initializeTranslate();
    } else if (!document.getElementById(GOOGLE_TRANSLATE_SCRIPT_ID) && !window.__svfTranslateBooting) {
      window.__svfTranslateBooting = true;
      const script = document.createElement("script");
      script.id = GOOGLE_TRANSLATE_SCRIPT_ID;
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    const retries = [0, 180, 500, 1000];
    const timers = retries.map((delay) =>
      window.setTimeout(() => {
        if (window.__svfTranslateReady || window.google?.translate?.TranslateElement) {
          initializeTranslate();
        }
      }, delay),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [containerId, pathname, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`google-translate-shell ${className}`}>
      <div id={containerId} data-google-translate-container="1" />
    </div>
  );
}
