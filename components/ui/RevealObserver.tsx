"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Revela elementos com [data-reveal] quando entram no ecrã. Sem JS, tudo fica visível. */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    // Sinaliza ao script de segurança no <head> que as animações estão ativas.
    document.documentElement.dataset.reveal = "ready";
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
