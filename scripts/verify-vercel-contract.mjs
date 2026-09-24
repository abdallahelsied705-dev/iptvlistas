import { projectRoot } from "./project-root.mjs";
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const root = projectRoot;
const pkg = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'));
const nextConfig = readFileSync(path.join(root, 'next.config.ts'), 'utf8');
const robots = readFileSync(path.join(root, 'app/robots.ts'), 'utf8');
const sitemap = readFileSync(path.join(root, 'app/sitemap.ts'), 'utf8');
const results = [];
const check = (name, ok, detail) => results.push({ name, ok, detail });

check('build script', ['next build', 'node build.mjs'].includes(pkg.scripts?.build), pkg.scripts?.build ?? 'missing');
check('Node 22 engine', pkg.engines?.node === '22.x', pkg.engines?.node ?? 'missing');
check('Preview robots header', nextConfig.includes('X-Robots-Tag') && nextConfig.includes('noindex, nofollow'), 'next.config.ts');
check('Production origin declared', readFileSync(path.join(root, 'config/site.ts'), 'utf8').includes('https://iptvlistas.pt'), 'config/site.ts');
check('Sitemap uses route registry', sitemap.includes('routes') && sitemap.includes('filter'), 'app/sitemap.ts');
check('robots has production sitemap', robots.includes('sitemap.xml'), 'app/robots.ts');
check('No hard-coded Vercel production URL', !/(vercel\.app|vercel\.com)/i.test(nextConfig + sitemap + robots), 'seo/runtime config');
check('Trailing slash matches canonicals', nextConfig.includes('trailingSlash: true'), 'next.config.ts');
check('Playwright config present', existsSync(path.join(root, 'playwright.config.ts')), 'playwright.config.ts');

console.log('\n=== VERCEL CONTRACT ===');
for (const r of results) console.log(`${r.ok ? 'PASS' : 'FAIL'} | ${r.name} | ${r.detail}`);
const ok = results.every(r => r.ok);
console.log('\nVERCEL PREVIEW CONTRACT:', ok ? 'PASS' : 'FAIL');
process.exit(ok ? 0 : 1);