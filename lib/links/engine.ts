import { getChildRoutes, getRoute, routes, type RouteDefinition } from "@/config/routes";
import { getContentRecord } from "@/config/content";

export type LinkRecommendation = {
  href: string;
  label: string;
  reason: "same-cluster" | "parent" | "child" | "journey";
  priority: number;
};

function scoreCandidate(source: RouteDefinition, candidate: RouteDefinition) {
  if (source.slug === candidate.slug) return -Infinity;
  let score = 0;

  if (source.pillar === candidate.pillar) score += 40;
  if (candidate.parent === source.slug) score += 35;
  if (source.parent === candidate.slug) score += 35;
  if (source.type === candidate.type) score += 10;

  const sourceWords = new Set(source.primaryKeyword.toLowerCase().split(/\s+/));
  const candidateWords = new Set(candidate.primaryKeyword.toLowerCase().split(/\s+/));
  const overlap = [...sourceWords].filter((word) => candidateWords.has(word) && word.length > 2).length;
  score += overlap * 5;

  if (source.type === "money" && ["device", "app", "support", "guide"].includes(candidate.type)) score += 12;
  if (source.type === "device" && ["app", "guide", "support"].includes(candidate.type)) score += 15;
  if (source.type === "app" && ["guide", "support", "device"].includes(candidate.type)) score += 15;
  if (source.type === "support" && ["guide", "device", "app"].includes(candidate.type)) score += 15;

  return score;
}

export function getRecommendedLinks(source: RouteDefinition, limit = 6): LinkRecommendation[] {
  return routes
    .filter((candidate) => candidate.indexable && candidate.slug !== source.slug)
    .map((candidate) => {
      const score = scoreCandidate(source, candidate);
      const reason: LinkRecommendation["reason"] =
        candidate.parent === source.slug ? "child" :
        source.parent === candidate.slug ? "parent" :
        source.pillar === candidate.pillar ? "same-cluster" :
        "journey";

      return {
        href: candidate.slug,
        label: candidate.title,
        reason,
        priority: score,
      };
    })
    .filter((item) => Number.isFinite(item.priority) && item.priority > 0)
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit);
}

export function buildIncomingLinkMap() {
  const incoming = new Map<string, Set<string>>();

  for (const route of routes) incoming.set(route.slug, new Set());

  for (const route of routes) {
    for (const child of getChildRoutes(route.slug)) {
      incoming.get(child.slug)?.add(route.slug);
    }
    for (const related of route.relatedPages ?? []) {
      if (incoming.has(related)) incoming.get(related)?.add(route.slug);
    }
    for (const section of getContentRecord(route).sections) {
      for (const link of section.links ?? []) {
        if (incoming.has(link.href)) incoming.get(link.href)?.add(route.slug);
      }
    }
  }

  return incoming;
}

export function findOrphanRoutes() {
  const incoming = buildIncomingLinkMap();
  return routes.filter((route) => route.indexable && route.slug !== "/" && (incoming.get(route.slug)?.size ?? 0) === 0);
}

export function getRouteGraphStats() {
  const incoming = buildIncomingLinkMap();
  const indexable = routes.filter((route) => route.indexable);
  const inboundCounts = indexable.map((route) => incoming.get(route.slug)?.size ?? 0);

  return {
    totalRoutes: routes.length,
    indexableRoutes: indexable.length,
    orphanRoutes: findOrphanRoutes().length,
    routesWithInboundLinks: inboundCounts.filter((count) => count > 0).length,
    averageInboundLinks: inboundCounts.length
      ? Number((inboundCounts.reduce((sum, count) => sum + count, 0) / inboundCounts.length).toFixed(2))
      : 0,
  };
}

export function resolveRelatedRoute(href: string) {
  return getRoute(href);
}
