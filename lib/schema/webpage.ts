import type { RouteDefinition } from "@/config/routes";
import { siteConfig } from "@/config/site";

export function webPageSchema(route: RouteDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: route.title,
    description: route.description,
    url: route.canonical,
    inLanguage: siteConfig.language,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
