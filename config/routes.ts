import { siteConfig } from "@/config/site";
import { blogArticles } from "@/config/blog";
export type RouteType =
  | "home"
  | "money"
  | "device"
  | "app"
  | "guide"
  | "support"
  | "comparison"
  | "legal"
  | "blog";

export interface RouteDefinition {
  slug: string;
  type: RouteType;
  intent: string;
  pillar: string;
  primaryKeyword: string;
  title: string;
  description: string;
  canonical: string;
  indexable: boolean;
  follow: boolean;
  parent?: string;
  children?: string[];
  relatedPages?: string[];
  schema: string[];
  image?: string;
  publishedAt?: string;
}

const base = siteConfig.url;
const route = (slug: string) => `${base}${slug === "/" ? "/" : slug}`;

const define = (
  slug: string,
  type: RouteType,
  primaryKeyword: string,
  title: string,
  description: string,
  parent = "/",
  intent = "informational",
): RouteDefinition => ({
  slug,
  type,
  intent,
  pillar: type,
  primaryKeyword,
  title,
  description,
  canonical: route(slug),
  indexable: true,
  follow: true,
  parent,
  schema: ["WebPage", "BreadcrumbList"],
});

export const routes: RouteDefinition[] = [
  {
    slug: "/",
    type: "home",
    intent: "navigational-commercial",
    pillar: "iptv-portugal",
    primaryKeyword: "iptv portugal",
    title: "IPTV em Portugal",
    description: "IPTV em Portugal com 34.000 canais, guias de instalação e apoio 24/7 em português.",
    canonical: route("/"),
    indexable: true,
    follow: true,
    children: ["/iptv-portugal/", "/precos/", "/dispositivos/", "/apps/", "/guias/", "/suporte/"],
    schema: ["Organization", "WebSite", "WebPage"],
  },
  define("/iptv-portugal/", "money", "iptv portugal", "IPTV em Portugal com apoio a qualquer hora", "34.000 canais, +130.000 filmes e séries, guia TV e apoio 24/7 em português, sem fidelização.", "/", "commercial-investigational"),
  define("/subscricao-iptv/", "money", "subscrição iptv", "Como funciona a subscrição IPTV", "Duração, ecrãs em simultâneo, renovação e o que está incluído em cada plano.", "/iptv-portugal/", "commercial"),
  define("/comprar-iptv/", "money", "comprar iptv", "Comprar IPTV em Portugal em três passos", "Escolhe o plano, confirma pelo WhatsApp e instala com o guia do teu equipamento.", "/iptv-portugal/", "transactional"),
  define("/precos/", "money", "preços iptv", "Preços IPTV: escolhe duração e ecrãs", "Preço final para 1, 2 ou 3 ecrãs e de 1 a 12 meses, sem fidelização nem custos escondidos.", "/iptv-portugal/", "commercial-investigational"),
  define("/reseller/", "money", "revenda iptv portugal", "Programa de revenda IPTV em Portugal", "Condições de parceria para revender IPTV em Portugal com apoio 24/7.", "/iptv-portugal/", "commercial"),
  define("/teste-iptv/", "money", "teste iptv", "Teste IPTV grátis de 24 horas", "Experimenta o serviço completo no teu equipamento durante 24 horas, grátis e sem compromisso.", "/iptv-portugal/", "transactional"),
  define("/lista-iptv-portugal/", "money", "lista iptv portugal", "Lista IPTV Portugal: o que é e o que evitar", "Como funciona uma lista IPTV, porque as listas grátis deixam de funcionar e como testar um serviço estável.", "/iptv-portugal/", "commercial-informational"),

  define("/dispositivos/", "device", "dispositivos iptv", "Dispositivos IPTV", "Compare dispositivos compatíveis com IPTV e encontre guias de configuração para Smart TV, Fire TV, Android, Apple TV, Windows e mobile.", "/", "commercial-informational"),
  define("/dispositivos/iptv-firestick/", "device", "iptv firestick", "IPTV no Fire TV Stick", "Guia sobre IPTV no Fire TV Stick, instalação, aplicações e resolução de problemas.", "/dispositivos/", "informational-commercial"),
  define("/dispositivos/iptv-smart-tv/", "device", "iptv smart tv", "IPTV na Smart TV", "Informação para utilizar IPTV em Smart TV e escolher o fluxo de configuração adequado.", "/dispositivos/", "informational-commercial"),
  define("/dispositivos/iptv-samsung/", "device", "iptv samsung", "IPTV na Samsung TV", "Guia para configurar IPTV numa Samsung Smart TV, escolher uma aplicação compatível e resolver problemas frequentes de reprodução.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-lg/", "device", "iptv lg", "IPTV na LG Smart TV", "Guia para configurar IPTV numa LG Smart TV com webOS, avaliar aplicações compatíveis e melhorar a ligação e a reprodução.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-android-tv/", "device", "iptv android tv", "IPTV no Android TV", "Aprenda a configurar IPTV no Android TV, escolher uma aplicação adequada e otimizar a rede, o comando e a reprodução de conteúdos.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-google-tv/", "device", "iptv google tv", "IPTV no Google TV", "Guia para instalar e configurar IPTV no Google TV, escolher aplicações compatíveis e diagnosticar dificuldades de rede ou reprodução.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-apple-tv/", "device", "iptv apple tv", "IPTV no Apple TV", "Descubra como utilizar IPTV no Apple TV, comparar aplicações compatíveis e preparar a rede e o equipamento para uma reprodução estável.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-iphone-ipad/", "device", "iptv iphone ipad", "IPTV no iPhone e iPad", "Guia para configurar IPTV no iPhone e iPad, escolher uma aplicação compatível e gerir Wi-Fi, dados móveis e transmissão para a TV.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-pc/", "device", "iptv pc", "IPTV no PC e Windows", "Saiba como configurar IPTV num computador Windows, comparar aplicações, preparar a ligação à internet e resolver falhas de reprodução.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-roku/", "device", "iptv roku portugal", "IPTV no Roku: Compatibilidade e Alternativas", "Guia para perceber as limitações do Roku, aplicações disponíveis e alternativas seguras para ver IPTV em Portugal.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-chromecast/", "device", "iptv chromecast", "IPTV no Chromecast: Como Transmitir para a TV", "Como usar Chromecast e Google Cast com uma aplicação compatível, rede estável e controlo pelo telemóvel.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-nvidia-shield/", "device", "iptv nvidia shield", "IPTV na NVIDIA Shield TV", "Configuração de IPTV na NVIDIA Shield TV com foco em aplicações Android TV, 4K, rede e desempenho.", "/dispositivos/", "informational-commercial"),
  define("/dispositivos/iptv-windows/", "device", "iptv windows", "IPTV no Windows: Apps, Rede e Configuração", "Guia para configurar IPTV no Windows com aplicações adequadas, reprodução em ecrã completo e diagnóstico de rede.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-android/", "device", "iptv android telemóvel", "IPTV no Android: Guia para Telemóvel e Tablet", "Como escolher uma aplicação IPTV para Android, configurar o acesso e gerir dados móveis, bateria e segurança.", "/dispositivos/", "informational"),
  define("/dispositivos/iptv-formuler/", "device", "iptv formuler", "IPTV no Formuler: Guia de Configuração", "Guia para preparar uma box Formuler, compreender a aplicação MyTVOnline e organizar rede, EPG e comando.", "/dispositivos/", "informational-commercial"),
  define("/dispositivos/iptv-telemovel/", "device", "iptv telemóvel", "IPTV no Telemóvel: Android, iPhone e Tablet", "Guia móvel para ver IPTV com Wi-Fi ou dados, controlar consumo e ligar o telemóvel a um ecrã maior.", "/dispositivos/", "informational"),

  define("/apps/", "app", "apps iptv", "Aplicações IPTV", "Guias e informação sobre aplicações IPTV e configuração em diferentes dispositivos.", "/", "informational-commercial"),
  define("/apps/iptv-smarters-pro/", "app", "iptv smarters pro", "IPTV Smarters Pro: Guia de Configuração", "Guia informativo para compreender a configuração do IPTV Smarters Pro.", "/apps/", "informational"),
  define("/apps/tivimate/", "app", "tivimate", "TiviMate: Guia de IPTV", "Guia do TiviMate para Android TV e Fire TV com passos de configuração, organização de listas, EPG, interface e diagnóstico básico.", "/apps/", "informational"),
  define("/apps/ibo-player/", "app", "ibo player", "IBO Player: Guia de IPTV", "Guia do IBO Player com passos gerais de instalação, ativação da aplicação, configuração do acesso e resolução de problemas frequentes.", "/apps/", "informational"),
  define("/apps/smart-iptv/", "app", "smart iptv", "Smart IPTV: Guia de Configuração", "Guia da aplicação Smart IPTV para televisores compatíveis, incluindo instalação, configuração, listas, rede e diagnóstico de reprodução.", "/apps/", "informational"),

  define("/guias/", "guide", "guias iptv", "Guias IPTV", "Guias práticos sobre IPTV, instalação, aplicações, EPG, M3U e configuração.", "/", "informational"),
  define("/guias/o-que-e-iptv/", "guide", "o que é iptv", "O Que é IPTV?", "Explicação clara sobre IPTV, conceitos básicos e diferenças entre tecnologia e direitos de conteúdo.", "/guias/", "informational"),
  define("/guias/como-funciona-iptv/", "guide", "como funciona iptv", "Como Funciona o IPTV?", "Entenda o funcionamento do IPTV, os componentes envolvidos e o fluxo de reprodução.", "/guias/", "informational"),
  define("/guias/como-instalar-iptv/", "guide", "como instalar iptv", "Como Instalar IPTV", "Guia geral de instalação e configuração, com ligações para guias específicos por dispositivo.", "/guias/", "informational"),
  define("/guias/instalar-iptv-no-firestick/", "guide", "instalar iptv no firestick", "Como Instalar IPTV no Fire TV Stick", "Guia passo a passo para organizar a instalação de IPTV no Fire TV Stick.", "/guias/", "informational"),
  define("/guias/m3u/", "guide", "m3u iptv", "M3U IPTV: O Que é e Como Funciona", "Explicação sobre listas M3U, estrutura e utilização em aplicações compatíveis.", "/guias/", "informational"),
  define("/guias/xtream-codes/", "guide", "xtream codes", "Xtream Codes: Guia de Configuração", "Explicação sobre os dados de acesso usados por aplicações que suportam o formato Xtream.", "/guias/", "informational"),
  define("/guias/epg/", "guide", "epg iptv", "EPG IPTV: Guia do Guia de Programação", "Explique o que é EPG, como é usado e como diagnosticar problemas de programação.", "/guias/", "informational"),
  define("/guias/velocidade-internet-iptv/", "guide", "velocidade internet iptv", "Que Velocidade de Internet é Precisa para IPTV?", "Guia para avaliar ligação de Internet, estabilidade e fatores que influenciam a reprodução.", "/guias/", "informational"),
  define("/guias/iptv-buffering/", "guide", "iptv buffering", "IPTV com Buffering: Causas e Soluções", "Guia para diagnosticar buffering e distinguir problemas de rede, aplicação e dispositivo.", "/guias/", "informational"),
  define("/guias/iptv-e-legal-em-portugal/", "guide", "iptv legal em portugal", "IPTV é Legal em Portugal?", "Guia informativo que distingue a tecnologia IPTV da autorização para distribuir conteúdos protegidos.", "/guias/", "informational"),

  define("/canais/", "guide", "canais iptv", "Canais IPTV", "Categorias de canais disponíveis na IPTV Listas e como organizar favoritos e grupos na tua app IPTV.", "/", "informational-commercial"),
  define("/canais/canais-portugueses/", "guide", "canais portugueses iptv", "Canais Portugueses e IPTV", "Informação sobre a procura de canais portugueses e como validar a oferta real de um serviço.", "/canais/", "commercial-informational"),
  define("/canais/desporto/", "guide", "iptv desporto", "IPTV e Desporto", "Guia sobre necessidades de streaming desportivo e fatores a verificar num serviço.", "/canais/", "commercial-informational"),
  define("/canais/filmes-series/", "guide", "iptv filmes series", "IPTV para Filmes e Séries", "Guia sobre reprodução de filmes e séries e critérios para avaliar uma oferta IPTV.", "/canais/", "commercial-informational"),

  define("/suporte/", "support", "suporte iptv", "Suporte IPTV", "Encontre caminhos claros para resolver problemas de IPTV, aplicações, dispositivos e reprodução.", "/", "support"),
  define("/suporte/iptv-nao-funciona/", "support", "iptv não funciona", "IPTV Não Funciona: Diagnóstico", "Diagnóstico passo a passo para perceber por que motivo o IPTV não funciona e separar problemas de rede, aplicação, dispositivo ou acesso.", "/suporte/", "support"),
  define("/suporte/buffering/", "support", "iptv buffering solução", "IPTV com Buffering: Como Resolver", "Checklist para resolver buffering no IPTV, testar a ligação, comparar Wi-Fi e Ethernet e identificar limitações da aplicação ou do dispositivo.", "/suporte/", "support"),
  define("/suporte/canais-nao-carregam/", "support", "canais iptv não carregam", "Canais IPTV Não Carregam", "Passos para diagnosticar canais IPTV que não iniciam, ficam a carregar ou param, verificando rede, aplicação, acesso e disponibilidade.", "/suporte/", "support"),
  define("/suporte/epg-nao-funciona/", "support", "epg não funciona", "EPG Não Funciona", "Guia para resolver problemas de EPG, atualizar o guia de programação, rever a fonte de dados e corrigir horários ou categorias em falta.", "/suporte/", "support"),
  define("/suporte/erro-credenciais/", "support", "erro credenciais iptv", "Erro de Credenciais IPTV", "Checklist para resolver erros de utilizador, palavra-passe, URL do servidor e dados de acesso sem expor credenciais confidenciais.", "/suporte/", "support"),
  define("/suporte/problemas-firestick/", "support", "problemas firestick iptv", "Problemas de IPTV no Fire TV Stick", "Resolva problemas frequentes de IPTV no Fire TV Stick relacionados com aplicação, armazenamento, atualização, comando, Wi-Fi e reprodução.", "/suporte/", "support"),
  define("/suporte/problemas-smart-tv/", "support", "problemas smart tv iptv", "Problemas de IPTV na Smart TV", "Diagnóstico de IPTV na Smart TV para falhas da aplicação, ligação à internet, memória, atualização, listas e reprodução de conteúdos.", "/suporte/", "support"),
  define("/suporte/problemas-app/", "support", "problemas app iptv", "Problemas com a App IPTV", "Guia para diagnosticar falhas numa aplicação IPTV, rever configuração, permissões, cache, atualizações, ligação e compatibilidade do dispositivo.", "/suporte/", "support"),

  define("/comparar/", "comparison", "comparar iptv", "Comparar IPTV", "Critérios práticos para comparar serviços IPTV em Portugal antes de escolher: preço, apoio, teste e condições.", "/", "commercial-investigational"),
  define("/comparar/como-escolher-iptv-portugal/", "comparison", "como escolher iptv portugal", "Como Escolher IPTV em Portugal", "Checklist para comparar opções de IPTV, dispositivos, suporte, preço e transparência.", "/comparar/", "commercial-investigational"),
  define("/comparar/iptv-barato-vs-premium/", "comparison", "iptv barato vs premium", "IPTV Barato vs Premium", "Comparação de critérios para avaliar preço, suporte, experiência e transparência.", "/comparar/", "commercial-investigational"),
  define("/comparar/iptv-vs-tv-tradicional/", "comparison", "iptv vs tv tradicional", "IPTV vs TV Tradicional", "Comparação informativa entre modelos de distribuição e experiência de televisão.", "/comparar/", "informational"),

  define("/legalidade/", "legal", "legalidade iptv", "Legalidade do IPTV", "Informação sobre tecnologia IPTV, direitos de autor e necessidade de autorização para conteúdos protegidos.", "/", "informational"),
  define("/sobre-nos/", "legal", "sobre iptvlistas", "Sobre a IPTV Listas", "Quem somos e como trabalhamos: preços claros, instalação acompanhada e apoio 24/7.", "/", "navigational"),
  define("/contacto/", "legal", "contacto iptv", "Fala com a IPTV Listas", "Apoio 24/7 em português pelo WhatsApp para planos, testes e instalação.", "/", "navigational"),
  define("/termos/", "legal", "termos iptvlistas", "Termos e Condições", "Termos e condições de utilização do site e dos serviços IPTV Listas: encomendas, planos, ecrãs e responsabilidades.", "/", "legal"),
  define("/politica-privacidade/", "legal", "politica privacidade iptv", "Política de Privacidade", "Como a IPTV Listas trata os dados que partilhas connosco pelo WhatsApp e no site, e como exercer os teus direitos.", "/", "legal"),
  define("/politica-reembolso/", "legal", "politica reembolso iptv", "Política de Reembolso", "Condições de reembolso da IPTV Listas, início imediato do serviço e teste grátis de 24 horas para decidires antes.", "/", "legal"),
  define("/politica-cookies/", "legal", "política de cookies iptvlistas", "Política de Cookies", "Informação sobre cookies, armazenamento técnico e escolhas de privacidade no site IPTV Listas.", "/", "legal"),
  define("/aviso-legal/", "legal", "aviso legal iptvlistas", "Aviso Legal e Isenção de Responsabilidade", "Limites da informação publicada, marcas de terceiros e responsabilidade do utilizador no site IPTV Listas.", "/", "legal"),

  { ...define("/blog/", "blog", "blog iptv portugal", "Blog IPTV Portugal", "Artigos e atualizações sobre IPTV em Portugal, dispositivos, aplicações, tecnologia e suporte.", "/", "informational"), image: "/images/site/og-iptvlistas.jpg" },
  ...blogArticles.map((a) => ({ ...define(a.slug, "blog", a.keyword, a.title, a.description, "/blog/", "informational"), image: a.image, publishedAt: a.publishedAt })),
];

export function isRoutePublished(item: RouteDefinition, now = new Date()) {
  return !item.publishedAt || new Date(item.publishedAt).getTime() <= now.getTime();
}

export function getRoute(slug: string, now = new Date()) {
  return routes.find((item) => item.slug === slug && isRoutePublished(item, now));
}

export function getChildRoutes(parent: string, now = new Date()) {
  return routes.filter((item) => item.parent === parent && isRoutePublished(item, now));
}
