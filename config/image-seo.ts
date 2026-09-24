import type { RouteDefinition } from "@/config/routes";
import { getBlogArticle } from "@/config/blog";

export function getImageAlt(route: RouteDefinition) {
  return getBlogArticle(route.slug)?.imageAlt ?? route.title;
}
