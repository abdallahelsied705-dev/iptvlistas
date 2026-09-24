import { offer } from "@/config/offer";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${offer.whatsapp}?text=${encodeURIComponent(message)}`;
}
