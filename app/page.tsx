import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/conversion/WhatsAppButton";
import { PricingCalculator, IncludedList } from "@/components/pricing/PricingCalculator";
import { FAQ } from "@/components/faq/FAQ";
import { buildOrganizationSchema, faqSchema } from "@/lib/schema";
import { routes } from "@/config/routes";
import { MonitorSmartphone, Wrench, Gauge, ShieldAlert, Check, ArrowRight, ListChecks, MessageCircle, Tv } from "lucide-react";
import { featuredArticles } from "@/config/internal-links";
import { siteConfig } from "@/config/site";
import { offer, facts, formatCount, trialShort } from "@/config/offer";
import { formatEuro, lowestMonthly, priceFor, trialMessage } from "@/config/pricing";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: siteConfig.defaultTitle },
  description: siteConfig.defaultDescription,
  alternates: { canonical: "/" },
};

const trialLabel = trialShort;

const steps = [
  { icon: ListChecks, title: "Escolhe o plano", text: "Seleciona a duração e o número de ecrãs. O preço final aparece logo, sem custos escondidos." },
  { icon: MessageCircle, title: "Confirma pelo WhatsApp", text: "A mensagem já vai preenchida com o teu plano. Combinamos o pagamento e enviamos os acessos." },
  { icon: Tv, title: "Instala com o nosso guia", text: "Dizes-nos o teu equipamento e enviamos o guia certo. Se algo não correr bem, ajudamos-te na hora." },
];

const reasons = [
  { img: "feature-setup", alt: "Mão a segurar o comando em frente a uma televisão com o ecrã de configuração", title: "Instalação guiada", text: "Não te enviamos só um login. Enviamos o passo a passo para o teu equipamento e acompanhamos até funcionar." },
  { img: "feature-support", alt: "Assistente de apoio com auscultadores a responder a um cliente, com Lisboa ao fundo", title: `Apoio humano ${offer.support}`, text: "Falas com uma pessoa pelo WhatsApp, em português, a qualquer hora. Não com um formulário." },
  { img: "feature-multiscreen", alt: "Família em casa a ver IPTV na televisão, no tablet e no telemóvel ao mesmo tempo", title: "Vários ecrãs, preço claro", text: "Sala, quarto e telemóvel ao mesmo tempo, com o total calculado antes de encomendares." },
  { img: "feature-network", alt: "Router ligado por cabo a uma box de televisão com o menu de canais no ecrã", title: "Privacidade e boa ligação", text: "A VPN já vem integrada no serviço, e os nossos guias ajudam-te a escolher entre Wi-Fi, cabo ou Mesh." },
];

const devices = [
  ["Samsung", "/dispositivos/iptv-samsung/"], ["LG", "/dispositivos/iptv-lg/"], ["Fire TV Stick", "/dispositivos/iptv-firestick/"],
  ["Android TV", "/dispositivos/iptv-android-tv/"], ["Google TV", "/dispositivos/iptv-google-tv/"], ["Apple TV", "/dispositivos/iptv-apple-tv/"],
  ["iPhone e iPad", "/dispositivos/iptv-iphone-ipad/"], ["Telemóvel Android", "/dispositivos/iptv-android/"], ["PC e Windows", "/dispositivos/iptv-pc/"],
];

const helpHubs = [
  { icon: MonitorSmartphone, title: "Guias por dispositivo", text: "Instalação passo a passo para a tua televisão, box ou telemóvel.", href: "/dispositivos/" },
  { icon: Wrench, title: "Apps IPTV", text: "Smarters, TiviMate, IBO Player e Smart IPTV comparadas.", href: "/apps/" },
  { icon: Gauge, title: "Resolver buffering", text: "Separar rede, app e equipamento antes de mudar definições.", href: "/suporte/buffering/" },
  { icon: ShieldAlert, title: "Evitar burlas", text: "Nove sinais de alerta antes de pagar um serviço IPTV.", href: "/blog/burlas-iptv/" },
];

const faq = [
  { question: "Quanto custa a IPTV Listas?", answer: `Desde ${formatEuro(priceFor(1, 1))} por 1 mês até ${formatEuro(priceFor(1, 12))} por 12 meses para 1 ecrã. Para 2 ou 3 ecrãs em simultâneo, a calculadora mostra o total antes de encomendares.` },
  { question: "Posso experimentar antes de pagar um plano?", answer: `Sim. O teste de ${offer.trial.hours} horas é grátis, dá acesso ao serviço completo e não te obriga a nada.` },
  { question: "Como pago?", answer: "Todas as encomendas são confirmadas pelo WhatsApp, onde combinamos o pagamento e enviamos os acessos." },
  { question: "Há fidelização?", answer: "Não. O plano termina no fim do período pago e só renovas se quiseres." },
  { question: "Funciona na minha televisão?", answer: "Funciona na maioria das Smart TV, boxes e telemóveis. Diz-nos o modelo no WhatsApp e confirmamos antes de encomendares." },
  { question: "Quantos ecrãs posso usar ao mesmo tempo?", answer: "Depende do plano: 1, 2 ou 3 ecrãs em simultâneo. Podes instalar em mais equipamentos, mas só vês ao mesmo tempo no número de ecrãs contratado." },
  { question: "Os canais têm guia de programação?", answer: "Sim. O guia de programação (EPG) está incluído, para veres o que está a dar e o que vem a seguir sem sair da app." },
  { question: "Preciso de instalar uma VPN?", answer: "Não. A VPN já está integrada no serviço, por isso não precisas de instalar nem pagar uma à parte." },
];

export default function HomePage() {
  const latest = featuredArticles.slice(0, 6);
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: `${siteConfig.url}/`, inLanguage: siteConfig.language };
  const hasFreeListGuide = routes.some((r) => r.slug === "/lista-iptv-portugal/");

  return (
    <main id="main-content" className="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([buildOrganizationSchema(), websiteSchema, faqSchema(faq)]) }} />

      <section className="hero">
        <picture className="hero-media">
          <source media="(max-width: 760px)" srcSet="/images/site/hero-mobile-640.webp 640w, /images/site/hero-mobile-800.webp 800w, /images/site/hero-mobile.webp 1000w" sizes="100vw" />
          <source media="(max-width: 1280px)" srcSet="/images/site/hero-desktop-1280.webp" />
          <img src="/images/site/hero-desktop.webp" alt="" width={1672} height={941} fetchPriority="high" />
        </picture>
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker"><span className="live-dot" aria-hidden="true" />IPTV em Portugal com {facts.channels}</p>
            <h1>A tua lista IPTV, instalada contigo do início ao fim.</h1>
            <p className="hero-sub">
              {facts.channels} e mais de {formatCount(offer.vod)} filmes e séries, com guia de programação, na Smart TV, Firestick ou telemóvel. Apoio {offer.support} em português. Sem fidelização.
            </p>
            <div className="hero-actions">
              <Button href="/precos/">Ver preços e planos</Button>
              <Button href="/teste-iptv/" variant="on-dark">{trialLabel}</Button>
            </div>
            <ul className="hero-checks">
              <li><Check aria-hidden="true" size={16} />Desde {formatEuro(lowestMonthly)}/mês no plano anual</li>
              <li><Check aria-hidden="true" size={16} />Teste grátis, sem cartão</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <dl className="hero-facts">
            <div><dt>Canais</dt><dd>{formatCount(offer.channels)}</dd></div>
            <div><dt>Filmes e séries</dt><dd>+{formatCount(offer.vod)}</dd></div>
            <div><dt>Apoio em português</dt><dd>{offer.support}</dd></div>
            <div><dt>Fidelização</dt><dd>Nenhuma</dd></div>
          </dl>
        </div>
      </section>

      <section className="section steps-section" aria-labelledby="como-funciona">
        <div className="container">
          <div className="section-head section-head-center" data-reveal>
            <p className="eyebrow">Como funciona</p>
            <h2 id="como-funciona">Da escolha ao primeiro canal em três passos</h2>
          </div>
          <ol className="steps">
            {steps.map((step, i) => (
              <li key={step.title} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                <span className="step-icon" aria-hidden="true"><step.icon size={22} /></span>
                <span className="step-num" aria-hidden="true">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section pricing-section" id="precos" aria-labelledby="precos-title">
        <div className="container">
          <div className="section-head section-head-light section-head-center" data-reveal>
            <p className="eyebrow eyebrow-light">Preços</p>
            <h2 id="precos-title">Preços simples, sem letras miúdas</h2>
            <p>Escolhe a duração e o número de ecrãs. O valor que vês é o valor que pagas.</p>
          </div>
          <div data-reveal><PricingCalculator /></div>
          <div className="included-wrap" data-reveal>
            <h3>Incluído em todos os planos</h3>
            <IncludedList />
          </div>
        </div>
      </section>

      <section className="section trial-section" aria-labelledby="teste-title">
        <div className="container">
          <div className="trial-panel" data-reveal>
            <div>
              <p className="eyebrow">Sem risco</p>
              <h2 id="teste-title">Experimenta grátis durante {offer.trial.hours} horas</h2>
              <p>Testa no teu próprio equipamento, à hora do jogo ou do teu programa favorito. Só decides depois de ver.</p>
              <ul className="trial-checks">
                <li><Check aria-hidden="true" size={18} />Serviço completo</li>
                <li><Check aria-hidden="true" size={18} />Sem pagamento nem cartão</li>
                <li><Check aria-hidden="true" size={18} />Termina sozinho</li>
              </ul>
            </div>
            <div className="trial-actions">
              <WhatsAppButton message={trialMessage()} label="Pedir teste grátis de 24h" variant="primary" />
              <Link href="/teste-iptv/">Como funciona o teste <ArrowRight aria-hidden="true" size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section reasons-section" aria-labelledby="porque-title">
        <div className="container">
          <div className="section-head section-head-center" data-reveal>
            <p className="eyebrow">Porquê nós</p>
            <h2 id="porque-title">O que muda quando há alguém do outro lado</h2>
          </div>
          <div className="reasons">
            {reasons.map((r, i) => (
              <article className="reason" key={r.title} data-reveal style={{ ["--d" as string]: `${(i % 2) * 90}ms` }}>
                <div className="reason-media">
                  <Image src={`/images/site/${r.img}.webp`} alt={r.alt} width={960} height={720} sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 580px" />
                </div>
                <div className="reason-body"><h3>{r.title}</h3><p>{r.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section devices-section" aria-labelledby="dispositivos-title">
        <div className="container devices-layout">
          <div className="devices-media" data-reveal>
            <Image className="devices-image" src="/images/site/devices-lineup.webp" alt="Televisão, box, stick de streaming, tablet e telemóvel lado a lado" width={1400} height={876} sizes="(max-width: 900px) 100vw, 55vw" />
          </div>
          <div data-reveal style={{ ["--d" as string]: "90ms" }}>
            <p className="eyebrow">Compatibilidade</p>
            <h2 id="dispositivos-title">Funciona nos ecrãs que já tens em casa</h2>
            <p>Na maioria dos casos não precisas de comprar equipamento novo. Escolhe o teu e vê o guia de instalação.</p>
            <ul className="device-links">
              {devices.map(([label, href]) => <li key={href}><Link href={href}>{label}<ArrowRight aria-hidden="true" size={15} /></Link></li>)}
            </ul>
          </div>
        </div>
      </section>

      {hasFreeListGuide ? (
        <section className="section free-lists" aria-labelledby="listas-title">
          <div className="container">
            <div className="section-head section-head-center" data-reveal>
              <p className="eyebrow">Listas grátis</p>
              <h2 id="listas-title">Porque as listas IPTV grátis deixam de funcionar</h2>
            </div>
            <div className="free-lists-compare">
              <div data-reveal>
                <h3>Lista grátis partilhada</h3>
                <ul>
                  <li>Publicada para milhares de pessoas ao mesmo tempo</li>
                  <li>Costuma cair em poucos dias</li>
                  <li>Pode pedir apps de origem desconhecida</li>
                  <li>Ninguém a quem perguntar quando falha</li>
                </ul>
              </div>
              <div data-reveal style={{ ["--d" as string]: "90ms" }}>
                <span className="compare-badge">Recomendado</span>
                <h3>IPTV Listas</h3>
                <ul>
                  <li>Acesso próprio, com {facts.channels}</li>
                  <li>Atualizações gratuitas e automáticas</li>
                  <li>Apps das lojas oficiais do teu equipamento</li>
                  <li>Apoio {offer.support} em português</li>
                </ul>
              </div>
            </div>
            <p className="center-link"><Link className="text-link" href="/lista-iptv-portugal/">Ler o guia completo sobre listas IPTV <ArrowRight aria-hidden="true" size={16} /></Link></p>
          </div>
        </section>
      ) : null}

      <section className="section help-section" aria-labelledby="ajuda-title">
        <div className="container">
          <div className="section-head section-head-center" data-reveal>
            <p className="eyebrow">Ajuda</p>
            <h2 id="ajuda-title">Tudo o que precisas para configurar e resolver</h2>
          </div>
          <div className="hubs">
            {helpHubs.map((h, i) => (
              <Link className="hub" href={h.href} key={h.href} data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
                <span className="hub-icon" aria-hidden="true"><h.icon size={22} /></span>
                <strong>{h.title}</strong>
                <span>{h.text}</span>
              </Link>
            ))}
          </div>
          {latest.length ? (
            <div className="latest">
              <div className="section-head-row" data-reveal>
                <h3>Guias para decidir antes de pagar</h3>
                <Link className="text-link" href="/blog/">Ver todos os artigos <ArrowRight aria-hidden="true" size={16} /></Link>
              </div>
              <div className="latest-grid">
                {latest.map((post, i) => (
                  <Link className="post-card" href={post.slug} key={post.slug} data-reveal style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}>
                    <span className="post-media"><Image src={post.image} alt="" width={640} height={360} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 380px" /></span>
                    <strong>{post.title}</strong>
                    <span>{post.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="container faq-layout">
          <div data-reveal>
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 id="faq-title">Ainda com dúvidas?</h2>
            <p className="faq-aside">Se a tua pergunta não estiver aqui, o apoio responde {offer.support} pelo WhatsApp.</p>
          </div>
          <div data-reveal style={{ ["--d" as string]: "90ms" }}><FAQ items={faq} /></div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="tile-band" aria-hidden="true" />
        <div className="container final-cta-inner" data-reveal>
          <h2 id="cta-title">Pronto para começar?</h2>
          <p>Escolhe o teu plano ou experimenta grátis durante {offer.trial.hours} horas.</p>
          <div className="hero-actions">
            <Button href="/precos/">Ver preços</Button>
            <Button href="/teste-iptv/" variant="on-dark">{trialLabel}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
