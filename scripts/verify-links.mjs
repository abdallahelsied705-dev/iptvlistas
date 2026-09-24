// Verifica a teia de ligações internas: cada página indexável precisa de
// pelo menos MIN ligações contextuais (dentro de <main>, fora do menu e rodapé)
// vindas de outras páginas. Também verifica que a página inicial alcança todo o site em ≤3 cliques.
import fs from "node:fs";
import path from "node:path";

const MIN = 3;
const appDir = path.join(process.cwd(), ".next/server/app");
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  const full = path.join(dir, e.name);
  return e.isDirectory() ? walk(full) : [full];
});
const toRoute = (file) => {
  const rel = path.relative(appDir, file).replaceAll(path.sep, "/").replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}/`;
};
const files = walk(appDir).filter((f) => f.endsWith(".html") && !/_not-found|_global-error/.test(f) && !path.relative(appDir, f).startsWith("_"));
const pages = new Map();
for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  if (/<meta name="robots" content="noindex/i.test(html)) continue;
  pages.set(toRoute(f), html);
}
const linksIn = (html) => [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => (m[1].endsWith("/") ? m[1] : `${m[1]}/`));
const inbound = new Map([...pages.keys()].map((r) => [r, new Set()]));
const graph = new Map();
for (const [route, html] of pages) {
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
  for (const target of new Set(linksIn(main))) {
    if (target !== route && inbound.has(target)) inbound.get(target).add(route);
  }
  graph.set(route, new Set(linksIn(html).filter((t) => pages.has(t))));
}
// profundidade de clique a partir da página inicial
const depth = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const cur = queue.shift();
  for (const next of graph.get(cur) ?? []) if (!depth.has(next)) { depth.set(next, depth.get(cur) + 1); queue.push(next); }
}
const weak = [...inbound].filter(([r, s]) => r !== "/" && s.size < MIN);
const deep = [...pages.keys()].filter((r) => (depth.get(r) ?? 99) > 3);
const counts = [...inbound.values()].map((s) => s.size).sort((a, b) => a - b);
console.log(`Páginas indexáveis: ${pages.size}`);
console.log(`Ligações contextuais recebidas — mínimo ${counts[0]}, mediana ${counts[Math.floor(counts.length / 2)]}, máximo ${counts.at(-1)}`);
console.log(`Profundidade máxima a partir da página inicial: ${Math.max(...[...depth.values()])} cliques`);
for (const [r, s] of weak) console.log(`FRACA  ${r}: ${s.size} ligações contextuais`);
for (const r of deep) console.log(`FUNDA  ${r}: ${depth.get(r) ?? "inalcançável"} cliques`);
if (weak.length || deep.length) { console.error("Teia de ligações: FALHOU"); process.exit(1); }
console.log("Teia de ligações: OK");
