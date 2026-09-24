"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gift } from "lucide-react";
import { trialShort } from "@/config/offer";

/** Botão flutuante à esquerda para o teste grátis (escondido na própria página do teste). */
export function FloatingTrial() {
  const pathname = usePathname();
  if (pathname === "/teste-iptv/" || pathname === "/teste-iptv") return null;
  return (
    <Link className="floating-trial" href="/teste-iptv/">
      <Gift aria-hidden="true" size={18} />
      <span>{trialShort}</span>
    </Link>
  );
}
