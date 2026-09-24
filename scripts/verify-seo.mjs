import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, ".next/server/app");
const errors = [];
const warnings = [];

if (!fs.existsSync(appDir)) {
  console.error("SEO audit requires a production build. Run `npm run build` first.");
  process.exit(1);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function decode(value = "") {
  return value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
}

function first(html, regex) {
  return decode(html.match(regex)?.[1]?.trim() ?? "");
}

function routeFromFile(file) {
  const relative = path.relative(appDir, file).replaceAll(path.sep, "/").replace(/\.html$/, "");
  return relative === "index" ? "/" : `/${relative}/`;
}

// Ignora ficheiros gerados por pedidos a caminhos internos (ex.: /_vercel/…) durante testes locais.
const htmlFiles = walk(appDir).filter((file) => file.endsWith(".html") && !file.endsWith("_not-found.html") && !file.endsWith("_global-error.html") && !path.relative(appDir, file).startsWith("_"));
const knownRoutes = new Set(htmlFiles.map(routeFromFile));
const seenTitles = new Map();
const seenDescriptions = new Map();
const seenCanonicals = new Map();

for (const file of htmlFiles) {
  const route = routeFromFile(file);
  const html = fs.readFileSync(file, "utf8");
  const title = first(html, /<title>([\s\S]*?)<\/title>/i);
  const description = first(html, /<meta name="description" content="([^"]*)"/i);
  const canonical = first(html, /<link rel="canonical" href="([^"]+)"/i);
  const robots = first(html, /<meta name="robots" content="([^"]+)"/i);
  const ogTitle = first(html, /<meta property="og:title" content="([^"]+)"/i);
  const ogDescription = first(html, /<meta property="og:description" content="([^"]+)"/i);
  const ogImage = first(html, /<meta property="og:image" content="([^"]+)"/i);
  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;

  if (first(html, /<html lang="([^"]+)"/i) !== "pt-PT") errors.push(`${route}: html lang must be pt-PT`);
  if (!title || title.length < 20 || title.length > 65) errors.push(`${route}: title length is ${title.length}; expected 20–65`);
  if (!description || description.length < 70 || description.length > 170) errors.push(`${route}: description length is ${description.length}; expected 70–170`);
  if (!(canonical === "https://iptvlistas.pt" || canonical.startsWith("https://iptvlistas.pt/"))) errors.push(`${route}: missing or invalid canonical`);
  if (canonical && canonical !== "https://iptvlistas.pt" && !canonical.endsWith("/")) errors.push(`${route}: canonical must end with a trailing slash`);
  if (h1Count !== 1) errors.push(`${route}: expected exactly one H1, found ${h1Count}`);
  if (!ogTitle || !ogDescription || !ogImage) errors.push(`${route}: incomplete Open Graph metadata`);
  if (robots.includes("noindex") && route !== "/teste-iptv/") warnings.push(`${route}: intentionally noindex`);

  for (const [regex, label] of [[/<img\b(?![^>]*\balt=)[^>]*>/gi, "image without alt"], [/<a\b(?![^>]*\bhref=)[^>]*>/gi, "anchor without href"]]) {
    if (regex.test(html)) errors.push(`${route}: ${label}`);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(decode(match[1])); } catch { errors.push(`${route}: invalid JSON-LD`); }
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/gi)) {
    const href = decode(match[1]).split("#")[0].split("?")[0];
    if (!href || href.startsWith("/_next/") || href.includes(".")) continue;
    const normalized = href === "/" ? "/" : `${href.replace(/\/+$/, "")}/`;
    if (!knownRoutes.has(normalized)) errors.push(`${route}: broken internal link ${href}`);
  }

  for (const [value, map, label] of [[title, seenTitles, "title"], [description, seenDescriptions, "description"], [canonical, seenCanonicals, "canonical"]]) {
    if (value && map.has(value)) errors.push(`${route}: duplicate ${label} also used by ${map.get(value)}`);
    else if (value) map.set(value, route);
  }
}

const sitemapPath = path.join(appDir, "sitemap.xml.body");
const robotsPath = path.join(appDir, "robots.txt.body");
if (!fs.existsSync(sitemapPath)) errors.push("Missing generated sitemap.xml");
if (!fs.existsSync(robotsPath)) errors.push("Missing generated robots.txt");
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  for (const [canonical, route] of seenCanonicals) {
    const html = fs.readFileSync(htmlFiles.find((file) => routeFromFile(file) === route), "utf8");
    const noindex = first(html, /<meta name="robots" content="([^"]+)"/i).includes("noindex");
    const sitemapCanonical = canonical === "https://iptvlistas.pt" ? "https://iptvlistas.pt/" : canonical;
    if (!noindex && !sitemap.includes(`<loc>${sitemapCanonical}</loc>`)) errors.push(`${route}: canonical missing from sitemap`);
  }
}
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, "utf8");
  if (!robots.includes("Sitemap: https://iptvlistas.pt/sitemap.xml")) errors.push("robots.txt does not advertise sitemap");
}

console.log(`SEO audit: ${htmlFiles.length} indexable/rendered pages checked.`);
for (const warning of warnings) console.warn(`WARN ${warning}`);
if (errors.length) {
  for (const error of [...new Set(errors)]) console.error(`ERROR ${error}`);
  console.error(`SEO audit failed with ${new Set(errors).size} unique issue(s).`);
  process.exit(1);
}
console.log("SEO audit passed: metadata, canonicals, headings, images, structured data, internal links, sitemap and robots are valid.");
