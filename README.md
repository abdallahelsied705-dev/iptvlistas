# IPTV Listas — iptvlistas.pt

Site em Next.js 16 (App Router) + TypeScript, publicado na Vercel a partir do branch `main`.

## Onde alterar o quê

| Quero mudar… | Ficheiro |
|---|---|
| Preços, canais, VOD, teste, WhatsApp, apoio | `config/offer.ts` (fonte única — todo o site lê daqui) |
| Título/descrição SEO de uma página | `config/seo-overrides.ts` |
| Páginas, URLs, datas de publicação dos artigos | `config/routes.ts` |
| Texto das páginas comerciais e legais | `config/content-core.ts` |
| Ligações internas entre páginas e artigos | `config/internal-links.ts` |
| Artigos do blog | `config/blog.ts` |
| Cores e estilos | `styles/globals.css` (3 cores: `--noite`, `--azulejo`, `--ambar`) |

## Artigos agendados
Um artigo com `publishedAt` no futuro devolve 404 e fica fora do sitemap até essa data; depois aparece sozinho (ISR, sem novo deploy).

## Verificação antes de publicar
```bash
npm ci
npm run verify      # lint + typecheck + build + auditoria SEO + teia de ligações + contrato Vercel
npm run test:e2e    # opcional, requer Playwright
```

## Depois do primeiro deploy
1. Ligar o domínio `iptvlistas.pt` ao projeto na Vercel.
2. Search Console: propriedade `https://iptvlistas.pt/`, copiar o código de verificação para a variável `GOOGLE_SITE_VERIFICATION` na Vercel (Production) e fazer redeploy.
3. Submeter `https://iptvlistas.pt/sitemap.xml`.
