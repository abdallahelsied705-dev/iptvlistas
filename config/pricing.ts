import { offer, type DurationMonths, type ScreenCount } from "@/config/offer";

export type { DurationMonths, ScreenCount };

export function priceFor(screens: ScreenCount, months: DurationMonths) {
  return offer.prices[screens][months];
}

export function monthlyPrice(screens: ScreenCount, months: DurationMonths) {
  return priceFor(screens, months) / months;
}

export function durationLabel(months: DurationMonths) {
  return months === 1 ? "1 mês" : `${months} meses`;
}

export function screensLabel(screens: ScreenCount) {
  return screens === 1 ? "1 ecrã" : `${screens} ecrãs`;
}

export function formatEuro(value: number) {
  return new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR", minimumFractionDigits: 2 }).format(value);
}

export const planBadges: Partial<Record<DurationMonths, string>> = {
  6: "Mais escolhido",
  12: "Melhor valor",
};

/** Mensagem pré-preenchida enviada para o WhatsApp ao escolher um plano. */
export function planMessage(screens: ScreenCount, months: DurationMonths) {
  return [
    "Olá! Quero subscrever pelo site IPTV Listas (iptvlistas.pt).",
    "",
    `• Duração: ${durationLabel(months)}`,
    `• Dispositivos: ${screens}`,
    `• Preço: ${formatEuro(priceFor(screens, months))}`,
    "",
    "Confirmo que quero o início imediato do serviço após o pagamento.",
  ].join("\n");
}

export function trialMessage() {
  return `Olá! Vim do site IPTV Listas (iptvlistas.pt) e quero pedir o teste grátis de ${offer.trial.hours}h. O meu equipamento é: `;
}

export const lowestMonthly = Math.min(...offer.durations.map((m) => monthlyPrice(1, m)));
