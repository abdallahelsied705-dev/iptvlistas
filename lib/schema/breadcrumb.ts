import type { RouteDefinition } from "@/config/routes";
import { siteConfig } from "@/config/site";

export function breadcrumbSchema(route: RouteDefinition, parent?: RouteDefinition) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: `${siteConfig.url}/`,
    },
  ];

  if (parent && parent.slug !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: parent.title,
      item: parent.canonical,
    });
  }

  items.push({
    "@type": "ListItem",
    position: parent && parent.slug !== "/" ? 3 : 2,
    name: route.title,
    item: route.canonical,
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
