import Link from "next/link";
import Image from "next/image";
import { getChildRoutes, getRoute, type RouteDefinition } from "@/config/routes";
import { getContentRecord } from "@/config/content";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { articleSchema, breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getRecommendedLinks } from "@/lib/links";
import { FAQ } from "@/components/faq/FAQ";
import { HubGrid } from "@/components/content/HubGrid";
import { PricingCalculator, IncludedList } from "@/components/pricing/PricingCalculator";
import { getImageAlt } from "@/config/image-seo";
import { DeviceLogo, deviceBrandForSlug } from "@/components/brand/DeviceLogo";
import { offer, trialShort } from "@/config/offer";
import { getArticlePages, getRelatedArticles } from "@/config/internal-links";
import { RelatedArticles } from "@/components/content/RelatedArticles";
import { trialMessage } from "@/config/pricing";

function sectionId(heading: string, index: number) {
  const value = heading.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return value || `secao-${index + 1}`;
}

/** Imagem de topo para páginas institucionais e comerciais. */
const pageImages: Record<string, { src: string; alt: string }> = {
  "/sobre-nos/": { src: "/images/site/about-team.webp", alt: "Equipa da IPTV Listas a trabalhar num escritório em Lisboa com painel de azulejos" },
  "/reseller/": { src: "/images/site/reseller-banner.webp", alt: "Parceiro de revenda a acompanhar clientes num portátil" },
  "/contacto/": { src: "/images/site/feature-support.webp", alt: "Assistente de apoio da IPTV Listas a responder a um cliente" },
  "/dispositivos/": { src: "/images/site/devices-lineup.webp", alt: "Televisão, box, stick de streaming, tablet e telemóvel lado a lado" },
  "/iptv-portugal/": { src: "/images/site/feature-multiscreen.webp", alt: "Família a ver IPTV na televisão, no tablet e no telemóvel" },
};

export function PageTemplate({ route }: { route: RouteDefinition }) {
  const content = getContentRecord(route);
  const children = getChildRoutes(route.slug);
  const parent = route.parent && route.parent !== "/" ? getRoute(route.parent) : undefined;
  const isArticle = route.type === "blog" && route.slug !== "/blog/";
  const isPricing = route.slug === "/precos/";
  const isTrial = route.slug === "/teste-iptv/";
  const words = [content.intro, ...content.sections.flatMap((s) => [s.heading, ...s.paragraphs])].join(" ").split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(3, Math.ceil(words / 210));
  const deviceBrand = route.type === "device" && route.slug !== "/dispositivos/" ? deviceBrandForSlug(route.slug) : null;
  const updated = content.updatedAt ? new Intl.DateTimeFormat("pt-PT", { day: "numeric", month: "long", year: "numeric" }).format(new Date(content.updatedAt)) : null;
  const heroImage = pageImages[route.slug];
  const schemas = [isArticle ? articleSchema(route) : webPageSchema(route), breadcrumbSchema(route, parent), faqSchema(content.faq)];
  const related = (children.length ? children : getRecommendedLinks(route, 6).map((item) => getRoute(item.href)).filter((item): item is RouteDefinition => Boolean(item)))
    .filter((item) => item.slug !== route.slug && (!isArticle || (item.slug !== "/blog/" && item.slug !== route.parent)))
    .slice(0, 6);
  const showToc = isArticle && content.sections.length > 2;
  const relatedArticles = getRelatedArticles(route);
  const siblings = parent && parent.slug !== "/blog/" ? getChildRoutes(parent.slug).filter((r) => r.slug !== route.slug) : [];
  const topicPages = isArticle ? getArticlePages(route.slug) : [];

  return (
    <main id="main-content" className={`page page-${route.type}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <section className={`page-hero${heroImage ? " page-hero-image" : ""}`}>
        <div className="container page-hero-inner">
          <div className="page-hero-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Início</Link>
              {parent ? <><span aria-hidden="true">/</span><Link href={parent.slug}>{parent.title}</Link></> : null}
              <span aria-hidden="true">/</span>
              <span aria-current="page">{route.title}</span>
            </nav>
            {deviceBrand ? <div className="device-badge"><DeviceLogo brand={deviceBrand} size={44} /></div> : null}
            <h1>{route.title}</h1>
            <p className="page-lead">{content.intro}</p>
            {isArticle ? <p className="article-meta">{updated ? <>Atualizado a <time dateTime={content.updatedAt}>{updated}</time> · </> : null}{readingMinutes} min de leitura · Equipa IPTV Listas</p> : null}
            <div className="hero-actions">
              {isTrial ? (
                <WhatsAppButton message={trialMessage()} label={`Pedir teste grátis de ${offer.trial.hours}h`} variant="primary" />
              ) : isPricing ? (
                <Button href="#planos">Escolher plano</Button>
              ) : (
                <Button href="/precos/">Ver preços</Button>
              )}
              {isTrial ? <Button href="/precos/" variant="on-dark">Ver preços</Button> : <Button href="/teste-iptv/" variant="on-dark">{trialShort}</Button>}
            </div>
          </div>
          {heroImage ? (
            <Image className="page-hero-img" src={heroImage.src} alt={heroImage.alt} width={960} height={620} sizes="(max-width: 900px) 100vw, 45vw" priority />
          ) : null}
        </div>
      </section>

      {isPricing ? (
        <section className="section pricing-section" aria-labelledby="planos-title">
          <div className="container">
            <h2 id="planos-title" className="sr-only">Planos e preços</h2>
            <PricingCalculator />
            <div className="included-wrap">
              <h2>Incluído em todos os planos</h2>
              <IncludedList />
            </div>
          </div>
        </section>
      ) : null}

      {isArticle && route.image ? (
        <div className="container article-cover">
          <Image src={route.image} alt={getImageAlt(route)} width={1200} height={675} sizes="(max-width: 900px) 100vw, 900px" priority />
        </div>
      ) : null}

      {children.length > 0 && route.type !== "home" ? (
        <Section title={route.type === "blog" ? "Todos os artigos" : "Nesta secção"} className="section-tinted">
          <HubGrid routes={children} />
        </Section>
      ) : null}

      <div className={`container content-layout${showToc ? "" : " content-single"}`}>
        {showToc ? (
          <aside className="page-aside">
            <nav className="toc" aria-label="Índice do artigo">
              <p>Neste artigo</p>
              {content.sections.map((s, i) => <Link href={`#${sectionId(s.heading, i)}`} key={`${s.heading}-${i}`}>{s.heading}</Link>)}
            </nav>
          </aside>
        ) : null}
        <article className="prose">
          {isArticle && content.summary ? (
            <aside className="answer-box" aria-label="Resposta rápida">
              <p className="answer-label">Resposta rápida</p>
              <p>{content.summary}</p>
            </aside>
          ) : null}
          {content.sections.map((section, index) => (
            <section id={sectionId(section.heading, index)} key={`${section.heading}-${index}`}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => <p key={p}>{p}</p>)}
              {section.list?.length ? (
                section.ordered
                  ? <ol className="prose-list">{section.list.map((item) => <li key={item}>{item}</li>)}</ol>
                  : <ul className="prose-list">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>
              ) : null}
              {section.table ? (
                <div className="table-wrap">
                  <table>
                    <thead><tr>{section.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
                    <tbody>{section.table.rows.map((row) => <tr key={row.join("|")}>{row.map((cell, ci) => ci === 0 ? <th key={ci} scope="row">{cell}</th> : <td key={ci} data-label={section.table!.head[ci]}>{cell || "—"}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              ) : null}
              {section.links?.length ? (
                <div className="link-row">
                  {section.links.map((l, li) => <Link className="chip-link" key={`${l.href}-${li}`} href={l.href}>{l.label}</Link>)}
                </div>
              ) : null}
              {isArticle && index === 1 ? (
                <div className="inline-cta">
                  <p><strong>Queres ver quanto custa para a tua casa?</strong> Escolhe a duração e os ecrãs e vê o preço final.</p>
                  <Button href="/precos/">Ver preços e planos</Button>
                </div>
              ) : null}
            </section>
          ))}
          {siblings.length ? (
            <nav className="topic-pages" aria-labelledby="siblings-title">
              <h2 id="siblings-title">Mais em {parent!.title}</h2>
              <div className="link-row">
                {siblings.map((r) => <Link className="chip-link" key={r.slug} href={r.slug}>{r.title}</Link>)}
              </div>
            </nav>
          ) : null}
          {topicPages.length ? (
            <section className="topic-pages" aria-labelledby="topic-pages-title">
              <h2 id="topic-pages-title">Páginas úteis sobre este tema</h2>
              <div className="link-row">
                {topicPages.map((p) => <Link className="chip-link" key={p.href} href={p.href}>{p.label}</Link>)}
              </div>
            </section>
          ) : null}
          {content.sources.length ? (
            <section className="external">
              <h2>Fontes</h2>
              <ul className="source-list">
                {content.sources.map((r) => (
                  <li key={r.href}><a href={r.href} target="_blank" rel="nofollow noopener noreferrer">{r.label}</a></li>
                ))}
              </ul>
            </section>
          ) : null}
          {isArticle ? (
            <div className="article-end-cta">
              <p>Pronto para escolher o teu plano?</p>
              <Button href="/precos/">Ver preços e planos</Button>
            </div>
          ) : null}
        </article>
      </div>

      {content.faq.length ? (
        <section className="section faq-section" aria-labelledby="faq-title">
          <div className="container faq-layout">
            <h2 id="faq-title">Perguntas frequentes</h2>
            <FAQ items={content.faq} />
          </div>
        </section>
      ) : null}

      <RelatedArticles articles={relatedArticles} title={isArticle ? "Continua a ler" : "Artigos sobre este tema"} />

      {related.length && children.length === 0 && !isArticle ? (
        <Section title="Também te pode ajudar">
          <HubGrid routes={related} />
        </Section>
      ) : null}

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="tile-band" aria-hidden="true" />
        <div className="container final-cta-inner">
          <h2 id="cta-title">{route.type === "support" ? "Continua sem funcionar?" : "Pronto para começar?"}</h2>
          <p>{route.type === "support" ? `Fala connosco pelo WhatsApp. O apoio responde ${offer.support}, em português.` : `Escolhe o teu plano ou experimenta grátis durante ${offer.trial.hours} horas.`}</p>
          <div className="hero-actions">
            {route.type === "support" ? (
              <>
                <WhatsAppButton message={content.ctaMessage} label="Falar com o apoio" variant="primary" />
                <Button href="/precos/" variant="on-dark">Ver preços</Button>
              </>
            ) : (
              <>
                <Button href="/precos/">Ver preços</Button>
                <WhatsAppButton message={content.ctaMessage} variant="on-dark" />
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
