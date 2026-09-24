import { siWhatsapp } from "simple-icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/** Ícone oficial do WhatsApp (simple-icons). */
export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} focusable="false">
      <path fill="currentColor" d={siWhatsapp.path} />
    </svg>
  );
}

export function WhatsAppButton({
  message = "Olá! Vim do site IPTV Listas (iptvlistas.pt) e tenho uma pergunta.",
  label = "Falar no WhatsApp",
  variant = "outline",
}: { message?: string; label?: string; variant?: "primary" | "outline" | "on-dark" }) {
  return (
    <a className={`button button-${variant} button-wa`} href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon size={18} />
      <span>{label}</span>
    </a>
  );
}
