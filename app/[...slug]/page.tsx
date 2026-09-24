import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoute, isRoutePublished, routes } from "@/config/routes";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageTemplate } from "@/components/templates/PageTemplate";

export const revalidate = 60;

export function generateStaticParams() {
  return routes
    .filter((route) => route.slug !== "/" && isRoutePublished(route))
    .map((route) => ({ slug: route.slug.split("/").filter(Boolean) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoute(`/${slug.join("/")}/`);
  return route ? buildMetadata(route) : {};
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const pageRoute = getRoute(`/${slug.join("/")}/`);
  if (!pageRoute) {
    notFound();
    return null;
  }
  return <PageTemplate route={pageRoute} />;
}
