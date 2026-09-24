import { blogArticles } from "@/config/blog";
import type { RouteDefinition } from "@/config/routes";

/**
 * Rede de ligações internas ("teia"):
 *  - cada página comercial, de dispositivo, app, guia, suporte ou legal aponta para artigos do mesmo tema;
 *  - cada artigo aponta para 3 artigos relacionados e para as páginas práticas do seu tema;
 *  - a página inicial e o rodapé apontam para todos os hubs e para os artigos principais.
 * Assim, nenhuma página fica órfã e a autoridade circula entre páginas do mesmo assunto.
 */

const A = {
  melhor: "/blog/melhor-iptv-portugal/",
  preco: "/blog/quanto-custa-iptv-portugal/",
  teste: "/blog/teste-iptv-o-que-verificar/",
  ecras: "/blog/iptv-varios-ecras/",
  apps: "/blog/melhor-app-iptv-smart-tv/",
  equip: "/blog/firestick-box-ou-smart-tv/",
  burlas: "/blog/burlas-iptv/",
} as const;

/** Artigos relacionados entre si (sempre 3, sem o próprio). */
const relatedArticles: Record<string, string[]> = {
  [A.melhor]: [A.teste, A.preco, A.burlas],
  [A.preco]: [A.ecras, A.melhor, A.equip],
  [A.teste]: [A.melhor, A.apps, A.burlas],
  [A.ecras]: [A.preco, A.equip, A.teste],
  [A.apps]: [A.equip, A.teste, A.ecras],
  [A.equip]: [A.apps, A.ecras, A.preco],
  [A.burlas]: [A.melhor, A.teste, A.preco],
};

/** Páginas práticas ligadas a cada artigo. */
const articlePages: Record<string, { label: string; href: string }[]> = {
  [A.melhor]: [
    { label: "Como escolher IPTV", href: "/comparar/como-escolher-iptv-portugal/" },
    { label: "IPTV em Portugal", href: "/iptv-portugal/" },
    { label: "Lista IPTV Portugal", href: "/lista-iptv-portugal/" },
    { label: "Categorias de canais", href: "/canais/" },
    { label: "IPTV é legal em Portugal?", href: "/guias/iptv-e-legal-em-portugal/" },
  ],
  [A.preco]: [
    { label: "Tabela de preços", href: "/precos/" },
    { label: "Como funciona a subscrição", href: "/subscricao-iptv/" },
    { label: "IPTV vs TV tradicional", href: "/comparar/iptv-vs-tv-tradicional/" },
    { label: "IPTV barato vs premium", href: "/comparar/iptv-barato-vs-premium/" },
  ],
  [A.teste]: [
    { label: "Pedir teste grátis", href: "/teste-iptv/" },
    { label: "Velocidade de internet", href: "/guias/velocidade-internet-iptv/" },
    { label: "Resolver buffering", href: "/suporte/buffering/" },
    { label: "Guia de programação (EPG)", href: "/guias/epg/" },
  ],
  [A.ecras]: [
    { label: "Preços por número de ecrãs", href: "/precos/" },
    { label: "Como funciona a subscrição", href: "/subscricao-iptv/" },
    { label: "Velocidade de internet", href: "/guias/velocidade-internet-iptv/" },
    { label: "Todos os dispositivos", href: "/dispositivos/" },
  ],
  [A.apps]: [
    { label: "IPTV na Samsung", href: "/dispositivos/iptv-samsung/" },
    { label: "IPTV na LG", href: "/dispositivos/iptv-lg/" },
    { label: "IBO Player", href: "/apps/ibo-player/" },
    { label: "IPTV Smarters Pro", href: "/apps/iptv-smarters-pro/" },
    { label: "Problemas na Smart TV", href: "/suporte/problemas-smart-tv/" },
  ],
  [A.equip]: [
    { label: "IPTV no Fire TV Stick", href: "/dispositivos/iptv-firestick/" },
    { label: "IPTV na Android TV", href: "/dispositivos/iptv-android-tv/" },
    { label: "TiviMate", href: "/apps/tivimate/" },
    { label: "Instalar IPTV no Firestick", href: "/guias/instalar-iptv-no-firestick/" },
  ],
  [A.burlas]: [
    { label: "Política de reembolso", href: "/politica-reembolso/" },
    { label: "Termos e condições", href: "/termos/" },
    { label: "Legalidade do IPTV", href: "/legalidade/" },
    { label: "IPTV é legal em Portugal?", href: "/guias/iptv-e-legal-em-portugal/" },
    { label: "Contacto", href: "/contacto/" },
  ],
};

/** Artigos mostrados em cada tipo de página. */
function articlesForRoute(route: RouteDefinition): string[] {
  const slug = route.slug;
  if (slug === "/teste-iptv/") return [A.teste, A.melhor, A.burlas];
  if (slug === "/lista-iptv-portugal/") return [A.burlas, A.melhor, A.apps];
  if (slug === "/precos/" || slug === "/subscricao-iptv/") return [A.preco, A.ecras, A.melhor];
  if (slug === "/comprar-iptv/") return [A.burlas, A.preco, A.teste];
  if (slug === "/reseller/") return [A.preco, A.melhor, A.burlas];
  if (slug.startsWith("/dispositivos/iptv-samsung") || slug.startsWith("/dispositivos/iptv-lg") || slug.startsWith("/dispositivos/iptv-smart-tv")) return [A.apps, A.equip, A.teste];
  switch (route.type) {
    case "money": return [A.melhor, A.preco, A.teste];
    case "device": return [A.equip, A.apps, A.ecras];
    case "app": return [A.apps, A.equip, A.teste];
    case "guide": return [A.teste, A.equip, A.apps];
    case "support": return [A.teste, A.equip, A.apps];
    case "comparison": return [A.melhor, A.preco, A.burlas];
    case "legal": return [A.burlas, A.teste, A.melhor];
    case "home": return [];
    default: return [A.melhor, A.teste, A.preco];
  }
}

const bySlug = new Map(blogArticles.map((a) => [a.slug, a]));
const toCards = (slugs: string[]) => slugs.map((s) => bySlug.get(s)).filter((a): a is (typeof blogArticles)[number] => Boolean(a));

export function getRelatedArticles(route: RouteDefinition) {
  if (route.slug === "/blog/") return [];
  const slugs = relatedArticles[route.slug] ?? articlesForRoute(route);
  return toCards(slugs.filter((s) => s !== route.slug));
}

export function getArticlePages(slug: string) {
  return articlePages[slug] ?? [];
}

/** Artigos em destaque no rodapé e na página inicial. */
export const featuredArticles = toCards([A.melhor, A.preco, A.teste, A.apps, A.equip, A.burlas, A.ecras]);

/** Rótulos curtos para menus e rodapé. */
export const articleShortLabels: Record<string, string> = {
  [A.melhor]: "Melhor IPTV em Portugal",
  [A.preco]: "Quanto custa IPTV",
  [A.teste]: "O que testar em 24h",
  [A.apps]: "Apps para Samsung e LG",
  [A.equip]: "Stick, box ou Smart TV",
  [A.burlas]: "Evitar burlas IPTV",
  [A.ecras]: "IPTV em vários ecrãs",
};
