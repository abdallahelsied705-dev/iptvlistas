/**
 * Fonte única dos factos comerciais da IPTV Listas.
 * Qualquer número mostrado no site (canais, preços, teste, apoio) vem daqui.
 * Para alterar uma condição comercial, altera apenas este ficheiro.
 */

export type ScreenCount = 1 | 2 | 3;
export type DurationMonths = 1 | 3 | 6 | 12;

export const offer = {
  whatsapp: "212710141872",
  /** Número formatado para mostrar no site. */
  whatsappDisplay: "+212 710 141 872",
  channels: 34000,
  vod: 130000,
  quality: "4K, Full HD e HD",
  epg: true,
  vpn: true,
  freeUpdates: true,
  support: "24/7",
  contract: "sem fidelização",
  payment: "Pagamento combinado pelo WhatsApp",
  refund: { available: false },
  /** Teste gratuito: 1 por pessoa e por equipamento. */
  trial: { hours: 24, free: true },
  durations: [1, 3, 6, 12] as DurationMonths[],
  screens: [1, 2, 3] as ScreenCount[],
  /** Preço total em euros por número de ecrãs em simultâneo e duração (meses). */
  prices: {
    1: { 1: 11.99, 3: 19.99, 6: 32.99, 12: 44.99 },
    2: { 1: 19.99, 3: 34.99, 6: 56.99, 12: 79.99 },
    3: { 1: 27.99, 3: 49.99, 6: 79.99, 12: 109.99 },
  } as Record<ScreenCount, Record<DurationMonths, number>>,
} as const;

const numberPt = new Intl.NumberFormat("pt-PT");
/** Formata com ponto de milhares ("34.000"), independente do motor Intl. */
export function formatCount(value: number) {
  return numberPt.format(value).replace(/\s/g, ".");
}

/** Etiquetas do teste gratuito usadas em botões e texto. */
export const trialShort = "Teste grátis 24h";
export const trialPhrase = "teste grátis de 24 horas";

export const facts = {
  channels: `${formatCount(offer.channels)} canais`,
  vod: `+${formatCount(offer.vod)} filmes e séries`,
};
