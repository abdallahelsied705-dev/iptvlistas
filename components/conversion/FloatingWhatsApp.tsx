import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/conversion/WhatsAppButton";
import { offer } from "@/config/offer";

/** Botão flutuante do WhatsApp, à direita, com o ícone e a cor oficiais. */
export function FloatingWhatsApp() {
  return (
    <a
      className="floating-wa"
      href={buildWhatsAppUrl("Olá! Vim do site IPTV Listas (iptvlistas.pt) e tenho uma pergunta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com a IPTV Listas no WhatsApp (${offer.whatsappDisplay}), apoio ${offer.support}`}
    >
      <span className="floating-wa-label" aria-hidden="true">Fala connosco · {offer.support}</span>
      <span className="floating-wa-icon"><WhatsAppIcon size={30} /></span>
    </a>
  );
}
