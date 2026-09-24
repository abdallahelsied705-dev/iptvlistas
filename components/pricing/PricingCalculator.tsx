"use client";

import { useState } from "react";
import { offer, formatCount } from "@/config/offer";
import { durationLabel, formatEuro, monthlyPrice, planBadges, planMessage, priceFor, type ScreenCount } from "@/config/pricing";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/conversion/WhatsAppButton";

export function PricingCalculator({ compact = false }: { compact?: boolean }) {
  const [screens, setScreens] = useState<ScreenCount>(1);

  return (
    <div className={`pricing${compact ? " pricing-compact" : ""}`} id="planos">
      <div className="screens-picker">
        <span id="screens-label">Ecrãs a ver ao mesmo tempo</span>
        <div role="radiogroup" aria-labelledby="screens-label">
          {offer.screens.map((count) => (
            <button
              key={count}
              type="button"
              role="radio"
              aria-checked={screens === count}
              className={screens === count ? "is-active" : undefined}
              onClick={() => setScreens(count)}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      <div className="plan-grid" aria-live="polite">
        {offer.durations.map((months) => {
          const badge = planBadges[months];
          return (
            <article className={`plan${months === 12 ? " plan-best" : ""}`} key={months}>
              <header>
                <h3>{durationLabel(months)}</h3>
                {badge ? <span className="plan-badge">{badge}</span> : null}
              </header>
              <p className="plan-price">{formatEuro(priceFor(screens, months))}</p>
              <p className="plan-monthly">
                {months === 1 ? "pagamento único" : `${formatEuro(monthlyPrice(screens, months))} por mês`}
              </p>
              <a
                className={`button ${months === 12 ? "button-primary" : "button-outline"} button-wa`}
                href={buildWhatsAppUrl(planMessage(screens, months))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={17} />
                <span>Encomendar</span>
              </a>
            </article>
          );
        })}
      </div>

      <p className="pricing-note">
        Preço final para {screens === 1 ? "1 dispositivo" : `${screens} dispositivos`} em simultâneo. O WhatsApp abre com a duração, os dispositivos e o preço já escritos.
      </p>
      <a className="pricing-wa" href={buildWhatsAppUrl("Olá! Vim do site IPTV Listas (iptvlistas.pt) e tenho uma pergunta sobre os planos.")} target="_blank" rel="noopener noreferrer">
        <span className="pricing-wa-icon"><WhatsAppIcon size={22} /></span>
        <span><small>Encomendas e dúvidas pelo WhatsApp</small><strong>{offer.whatsappDisplay}</strong></span>
      </a>
    </div>
  );
}

export function IncludedList() {
  const items = [
    `${formatCount(offer.channels)} canais organizados por categorias`,
    `Mais de ${formatCount(offer.vod)} filmes e séries`,
    `Qualidade ${offer.quality}, conforme o canal e a tua ligação`,
    "Guia de programação (EPG)",
    "Atualizações gratuitas e automáticas",
    "VPN integrada para mais privacidade",
    `Apoio ${offer.support} em português pelo WhatsApp`,
    "Sem fidelização",
  ];
  return (
    <ul className="included">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
