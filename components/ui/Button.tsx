import Link from "next/link";
import type { ReactNode } from "react";

export function Button({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "outline" | "on-dark" }) {
  return <Link className={`button button-${variant === "secondary" ? "outline" : variant}`} href={href}>{children}</Link>;
}
