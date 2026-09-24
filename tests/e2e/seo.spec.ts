import { expect, test } from "@playwright/test";

test("homepage exposes essential SEO signals", async ({ request }) => {
  const response = await request.get("/");
  expect(response.ok()).toBeTruthy();
  const html = await response.text();
  expect(html).toMatch(/<title>[^<]*IPTV[^<]*<\/title>/i);
  expect(html.match(/<h1(?:\s|>)/gi)).toHaveLength(1);
  expect(html).toMatch(/<link rel="canonical" href="https:\/\/iptvlistas\.pt\/"/i);
  expect(html).toMatch(/<meta name="description" content="[^"]+"/i);
});

test("canonical URLs answer 200 directly, without redirects", async ({ request }) => {
  for (const path of ["/precos/", "/teste-iptv/", "/lista-iptv-portugal/", "/sobre-nos/", "/contacto/", "/politica-reembolso/"]) {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status(), `${path} must not redirect`).toBe(200);
  }
});

test("robots.txt and sitemap.xml respond", async ({ request }) => {
  for (const path of ["/robots.txt", "/sitemap.xml"]) {
    const response = await request.get(path);
    expect(response.ok(), `${path} should respond successfully`).toBeTruthy();
  }
});
