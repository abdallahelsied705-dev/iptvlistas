import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { RouteDefinition } from "@/config/routes";
import { getSeoOverride } from "@/config/seo-overrides";
import { isPreview } from "@/lib/seo/environment";
import { getImageAlt } from "@/config/image-seo";

const defaultOgImage = "/images/site/og-iptvlistas.jpg";

export function buildMetadata(route: RouteDefinition): Metadata {
  const override = getSeoOverride(route);
  const title = override.seoTitle ?? route.title;
  const description = override.metaDescription ?? route.description;
  const ogTitle = override.ogTitle ?? title;
  const ogDescription = override.ogDescription ?? description;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical: route.canonical,
    },
    robots: {
      index: isPreview ? false : route.indexable,
      follow: isPreview ? false : route.follow,
      googleBot: {
        index: isPreview ? false : route.indexable,
        follow: isPreview ? false : route.follow,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: route.type === "blog" && route.slug !== "/blog/" ? "article" : "website",
      locale: siteConfig.locale.replace("-", "_"),
      siteName: siteConfig.name,
      title: ogTitle,
      description: ogDescription,
      url: route.canonical,
      images: [{
        url: route.image ?? defaultOgImage,
        alt: getImageAlt(route),
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [route.image ?? defaultOgImage],
    },
  };
}
