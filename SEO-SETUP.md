# IPTV Listas — SEO and Google Search Console setup

## Implemented in this package

- Canonical metadata for all indexable routes.
- Open Graph and Twitter large-image cards.
- Organization, WebSite, WebPage, Article, BreadcrumbList and FAQPage JSON-LD.
- XML sitemap with priority, change frequency and last-modified values.
- Production robots rules for Google and AI search crawlers; previews remain blocked.
- Portuguese articles with dedicated cover images and contextual internal links.
- Google site-verification support through `GOOGLE_SITE_VERIFICATION`.

## Connect Google Search Console

1. Deploy this package to the production domain `https://iptvlistas.pt`.
2. In Google Search Console, create a URL-prefix property for `https://iptvlistas.pt/`.
3. Choose the HTML tag verification method and copy only the value inside `content="..."`.
4. In Vercel, add `GOOGLE_SITE_VERIFICATION` as a Production environment variable with that value.
5. Redeploy, open the page source and confirm the `google-site-verification` meta tag is present.
6. Complete verification in Search Console.
7. Submit `https://iptvlistas.pt/sitemap.xml` under Sitemaps.
8. Inspect the homepage and the ten new article URLs, then request indexing for the most important pages.

For a Domain property, use Google's DNS TXT record instead. That method must be configured at the DNS provider and does not need the environment variable above.

## Content-gap strategy

Competitors focus heavily on large channel counts, price claims and repeated “no buffering” promises. The new cluster targets practical decision and troubleshooting intent: hardware choice, home networking, VPN context, pre-purchase checks, app security, multi-device planning, 4K/HDR/codecs, parental controls, travel and app maintenance.

## Post-launch checks

- Validate structured data with Google Rich Results Test and Schema.org Validator.
- Watch Page Indexing, Core Web Vitals and HTTPS reports in Search Console.
- Compare impressions and clicks by query after 28 days; improve pages with impressions but low CTR.
- Update article dates only when the content receives a meaningful review.
- Keep prices, guarantees, catalog claims and licensing statements aligned with verified business facts.
