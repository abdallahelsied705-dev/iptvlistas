import type { RouteDefinition } from "@/config/routes";
import { getBlogArticle } from "@/config/blog";
import { siteConfig } from "@/config/site";

export function articleSchema(route: RouteDefinition) {
  const article = getBlogArticle(route.slug);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: route.title,
    description: route.description,
    mainEntityOfPage: route.canonical,
    url: route.canonical,
    image: route.image ? `${siteConfig.url}${route.image}` : `${siteConfig.url}/images/site/og-iptvlistas.jpg`,
    datePublished: route.publishedAt ?? "2026-09-23",
    dateModified: article?.updatedAt ?? route.publishedAt ?? "2026-09-23",
    inLanguage: siteConfig.language,
    about: route.primaryKeyword,
    author: { "@type": "Organization", name: `Equipa ${siteConfig.name}`, url: `${siteConfig.url}/sobre-nos/` },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url, logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.png` } },
    ...(article?.sources?.length ? { citation: article.sources.map((s) => s.href) } : {}),
  };
}
