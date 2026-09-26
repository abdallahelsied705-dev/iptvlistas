import type { RouteDefinition } from "@/config/routes";
import { getBlogArticle } from "@/config/blog";

export type SeoOverride = {
  seoTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
};

/**
 * Title e meta description das páginas comerciais principais.
 * O sufixo " | IPTV Listas" é acrescentado pelo template do layout.
 * O H1 continua a ser route.title.
 */
export const seoOverrides: Record<string, SeoOverride> = {
  "/iptv-portugal/": {
    seoTitle: "IPTV Portugal: 34.000 Canais e Apoio 24/7",
    metaDescription: "IPTV em Portugal com 34.000 canais, +130.000 filmes e séries, guia TV, VPN integrada e apoio 24/7 em português. Sem fidelização.",
  },
  "/precos/": {
    seoTitle: "Preços IPTV Portugal 2026: 1 a 4 Ecrãs",
    metaDescription: "Escolhe a duração e o número de ecrãs e vê o preço final antes de encomendar. Desde 12,99€/mês, sem fidelização nem custos escondidos.",
  },
  "/teste-iptv/": {
    seoTitle: "Teste IPTV Grátis 24h em Portugal",
    metaDescription: "Experimenta a IPTV Listas grátis durante 24 horas no teu equipamento: serviço completo, sem cartão e sem compromisso. Pedido pelo WhatsApp.",
  },
  "/comprar-iptv/": {
    seoTitle: "Comprar IPTV em Portugal: Como Funciona",
    metaDescription: "Escolhe o plano, confirma pelo WhatsApp e recebe os acessos com um guia para o teu equipamento. Ajudamos-te até funcionar.",
  },
  "/subscricao-iptv/": {
    seoTitle: "Subscrição IPTV em Portugal: Como Funciona",
    metaDescription: "Duração, ecrãs em simultâneo, renovação e tudo o que está incluído numa subscrição IPTV Listas. Sem fidelização.",
  },
  "/lista-iptv-portugal/": {
    seoTitle: "Lista IPTV Portugal: O Que É e o Que Evitar",
    metaDescription: "Como funciona uma lista IPTV, porque as listas grátis deixam de funcionar e que riscos trazem, e como testar grátis um serviço estável durante 24 horas.",
  },
  "/dispositivos/": {
    seoTitle: "IPTV em Qualquer Ecrã: Smart TV, Firestick e Mais",
    metaDescription: "Guias passo a passo para Samsung, LG, Fire TV, Android TV, Apple TV, iPhone e PC, com a app certa para cada equipamento.",
  },
  "/apps/": {
    seoTitle: "Melhores Apps IPTV 2026: Smarters, TiviMate e IBO",
    metaDescription: "Compara as apps IPTV mais usadas em Portugal: compatibilidade, EPG, facilidade e segurança. Guias de configuração incluídos.",
  },
  "/guias/": {
    seoTitle: "Guias IPTV: Instalar, Configurar e Usar",
    metaDescription: "Guias em português de Portugal sobre instalação, M3U, Xtream, EPG, velocidade de internet e configuração de IPTV.",
  },
  "/guias/m3u/": {
    seoTitle: "Lista M3U: Como Carregar no Teu Player",
    metaDescription: "O que é uma lista M3U, como a carregar no Smarters, TiviMate ou IBO Player e como resolver quando não carrega.",
  },
  "/suporte/": {
    seoTitle: "Suporte IPTV: Buffering, Erros e Ecrã Preto",
    metaDescription: "Diagnóstico por etapas para buffering, ecrã preto, som em falta, EPG errado e erros de login, e apoio 24/7 se precisares.",
  },
  "/comparar/iptv-vs-tv-tradicional/": {
    seoTitle: "IPTV vs MEO, NOS e Vodafone: Custos Reais 2026",
    metaDescription: "Comparação de custos anuais, fidelização, equipamento e flexibilidade entre IPTV e os pacotes dos operadores em Portugal.",
  },
  "/reseller/": {
    seoTitle: "Revenda IPTV em Portugal: Programa de Parceiros",
    metaDescription: "Queres revender IPTV em Portugal? Fala connosco sobre condições de parceria, créditos e apoio 24/7 para os teus clientes.",
  },
  "/legalidade/": {
    seoTitle: "Legalidade do IPTV em Portugal",
  },
  "/blog/": {
    seoTitle: "Blog IPTV Portugal: Guias, Soluções e Novidades",
    metaDescription: "Artigos práticos em português de Portugal sobre instalação, apps, rede e resolução de problemas IPTV.",
  },
};

export function getSeoOverride(route: RouteDefinition): SeoOverride {
  const article = getBlogArticle(route.slug);
  if (article) return { seoTitle: article.seoTitle, metaDescription: article.description };
  return seoOverrides[route.slug] ?? {};
}
