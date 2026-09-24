import type { RouteDefinition, RouteType } from "@/config/routes";
import { productionContent } from "@/config/content-production";
import { longformContent } from "@/config/content-longform";
import { getCoreContent } from "@/config/content-core";
import { devicePages } from "@/config/device-pages";
import { getBlogArticle } from "@/config/blog";

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  ordered?: boolean;
  table?: { head: string[]; rows: string[][] };
  links?: { label: string; href: string }[];
};

export type FAQEntry = { question: string; answer: string };

export type ContentRecord = {
  eyebrow: string;
  intro: string;
  sections: ContentSection[];
  faq: FAQEntry[];
  ctaMessage: string;
  depth: "core" | "supporting";
  entities: string[];
  takeaways: string[];
  steps: string[];
  summary?: string;
  sources: { label: string; href: string }[];
  updatedAt?: string;
};

const labels: Record<RouteType, string> = {
  home: "IPTV em Portugal",
  money: "Área comercial",
  device: "Dispositivos",
  app: "Aplicações",
  guide: "Guia IPTV",
  support: "Suporte",
  comparison: "Comparação",
  legal: "Informação institucional",
  blog: "Artigo",
};

function links(...items: [string, string][]) {
  return items.map(([label, href]) => ({ label, href }));
}

function moneyContent(route: RouteDefinition): ContentSection[] {
  return [
    { heading: route.title, paragraphs: [route.description], links: links(["Ver preços", "/precos/"], ["Teste grátis 24h", "/teste-iptv/"], ["Contactar", "/contacto/"]) },
  ];
}

function deviceContent(_route: RouteDefinition): ContentSection[] {
  return [
    {
      heading: "Começar pelo dispositivo",
      paragraphs: [
        `Para usar IPTV aqui precisas de três coisas: uma app compatível instalada pela loja oficial do equipamento, os teus acessos (M3U ou Xtream) e uma ligação estável à internet.`,
        "Diz-nos o modelo exato pelo WhatsApp e confirmamos a app mais adequada antes de encomendares.",
      ],
      links: links(["Ver todos os dispositivos", "/dispositivos/"], ["Ver aplicações", "/apps/"], ["Guias de instalação", "/guias/como-instalar-iptv/"]),
    },
    {
      heading: "Quando algo não funciona",
      paragraphs: [
        "Separe problemas de aplicação, dispositivo, rede e dados de acesso antes de alterar várias variáveis ao mesmo tempo.",
        "A área de suporte contém fluxos específicos para buffering, canais que não carregam e problemas de credenciais.",
      ],
    },
  ];
}

function appContent(route: RouteDefinition): ContentSection[] {
  return [
    {
      heading: "Compreender a aplicação",
      paragraphs: [
        `O conteúdo sobre “${route.primaryKeyword}” deve explicar a função da aplicação, o tipo de dispositivo onde é utilizada e quais dados de configuração são necessários, sem assumir que todas as versões ou dispositivos são idênticos.`,
        "Os menus mudam entre versões da app. Se o teu ecrã for diferente, diz-nos a versão e ajudamos-te.",
      ],
      links: links(["Ver aplicações", "/apps/"], ["Guias", "/guias/como-instalar-iptv/"], ["Suporte", "/suporte/problemas-app/"]),
    },
    {
      heading: "Configuração responsável",
      paragraphs: [
        "Nunca publiques os teus dados de acesso em fóruns ou redes sociais. Trata-os como uma palavra-passe.",
        "Se a interface da aplicação ou os requisitos de configuração mudarem, o guia deve ser atualizado em vez de manter passos antigos apenas por terem existido anteriormente.",
      ],
    },
  ];
}

function guideContent(route: RouteDefinition): ContentSection[] {
  if (route.slug === "/guias/iptv-e-legal-em-portugal/") {
    return [
      {
        heading: "Tecnologia IPTV não é a mesma coisa que autorização de conteúdo",
        paragraphs: [
          "IPTV descreve uma forma de distribuir vídeo através de redes IP. A legalidade de um serviço específico depende também dos direitos e autorizações aplicáveis ao conteúdo que é distribuído.",
          "Por isso, este guia deve separar sempre o conceito tecnológico das questões de direito de autor, sem atribuir licenças ou autorizações que não tenham sido verificadas.",
        ],
        links: links(["Área de legalidade", "/legalidade/"], ["Sobre IPTV", "/guias/o-que-e-iptv/"], ["Como funciona", "/guias/como-funciona-iptv/"]),
      },
      {
        heading: "Como avaliar uma afirmação de legalidade",
        paragraphs: [
          "Procure informação institucional e documentação verificável quando uma empresa fizer afirmações sobre direitos, licenças ou autorização para determinados conteúdos.",
          "Não trate slogans comerciais como prova de direitos de distribuição.",
        ],
      },
    ];
  }

  return [
    {
      heading: "Passo a passo com contexto",
      paragraphs: [
        `Este guia existe para responder à intenção “${route.primaryKeyword}” e levar o utilizador de uma dúvida concreta para uma ação prática.`,
        "A estrutura deve apresentar pré-requisitos, passos, verificações e caminhos de recuperação quando alguma etapa falhar.",
      ],
      links: links(["Ver todos os guias", "/guias/"], ["Suporte", "/suporte/"], ["Dispositivos", "/dispositivos/"], ["Aplicações", "/apps/"]),
    },
    {
      heading: "Se o resultado não for o esperado",
      paragraphs: [
        "Não altere várias configurações em simultâneo. Primeiro identifique se o problema está no dispositivo, aplicação, rede, credenciais ou na própria fonte do conteúdo.",
        "Quando a causa provável estiver identificada, encaminhe para o artigo de suporte específico correspondente.",
      ],
    },
  ];
}

function supportContent(_route: RouteDefinition): ContentSection[] {
  return [
    {
      heading: "Diagnóstico antes da solução",
      paragraphs: [
        "Começa por separar o sintoma da causa: o mesmo problema pode vir da rede, da app, do equipamento ou dos dados de acesso.",
        "O objetivo do suporte é reduzir tentativas aleatórias e conduzir o utilizador por uma sequência curta de verificações.",
      ],
      links: links(["Centro de suporte", "/suporte/"], ["Guias", "/guias/"], ["Problemas de aplicação", "/suporte/problemas-app/"]),
    },
    {
      heading: "Quando pedir ajuda",
      paragraphs: [
        "Se as verificações básicas não resolverem o problema, o utilizador deve ter um caminho claro para fornecer contexto sem expor publicamente credenciais ou outros dados privados.",
        "O apoio IPTV Listas responde pelo WhatsApp, 24/7, e analisa o teu caso contigo.",
      ],
    },
  ];
}

function comparisonContent(_route: RouteDefinition): ContentSection[] {
  return [
    {
      heading: "Comparar por critérios, não por slogans",
      paragraphs: [
        `Para comparar serviços IPTV com segurança, olha para critérios que consegues verificar: preço, transparência, compatibilidade, experiência, suporte e condições comerciais.`,
        "O objetivo não é declarar automaticamente um vencedor, mas organizar os fatores que tornam uma decisão mais informada.",
      ],
      links: links(["Como escolher IPTV", "/comparar/como-escolher-iptv-portugal/"], ["Preços", "/precos/"], ["Suporte", "/suporte/"]),
    },
    {
      heading: "O que perguntar antes de pagar",
      paragraphs: [
        "Qual é o preço final para o número de ecrãs que precisas, se há fidelização, se podes testar antes e em que condições, e a que horas funciona o apoio.",
        "Na IPTV Listas as respostas estão publicadas: preços de 1 a 3 ecrãs, sem fidelização, teste grátis de 24 horas e apoio 24/7 em português.",
      ],
      links: links(["Ver preços", "/precos/"], ["Teste grátis 24h", "/teste-iptv/"]),
    },
  ];
}

function legalContent(route: RouteDefinition): ContentSection[] {
  const legalPages: Record<string, ContentSection[]> = {
    "/sobre-nos/": [
      { heading: "Quem somos", paragraphs: ["A IPTV Listas é um projeto orientado ao público em Portugal, criado para reunir informação sobre subscrições IPTV, dispositivos compatíveis, aplicações, instalação e suporte num percurso simples.", "A comunicação do site é preparada em português de Portugal e procura distinguir informação técnica, condições comerciais e temas relacionados com direitos de conteúdo."], links: links(["Falar connosco", "/contacto/"], ["Consultar a legalidade", "/legalidade/"]) },
      { heading: "Como trabalhamos", paragraphs: ["Publicamos guias práticos e ligamos cada tema às páginas de configuração ou suporte relevantes. Preços, compatibilidade e condições devem ser confirmados antes da contratação.", "Não apresentamos marcas de terceiros como nossas. As referências a dispositivos e aplicações servem apenas para explicar compatibilidade e utilização."] },
      { heading: "Compromisso com a transparência", paragraphs: ["O utilizador deve conseguir identificar o canal oficial de contacto, consultar as condições aplicáveis e compreender o percurso antes do pagamento.", "Se uma informação comercial mudar, prevalecem as condições confirmadas diretamente durante o atendimento."], links: links(["Ver termos", "/termos/"], ["Política de reembolso", "/politica-reembolso/"]) },
    ],
    "/contacto/": [
      { heading: "Canal oficial de contacto", paragraphs: ["O WhatsApp é o canal de contacto disponibilizado pela IPTV Listas para questões sobre planos, compatibilidade, configuração e acompanhamento de pedidos.", "Para obter uma resposta útil, indica o dispositivo, a aplicação utilizada e uma descrição breve da dúvida. Nunca publiques palavras-passe ou credenciais em páginas públicas."], links: links(["Ver suporte", "/suporte/"], ["Consultar preços", "/precos/"]) },
      { heading: "Antes de efetuar um pagamento", paragraphs: ["Confirma a duração do plano, o número de dispositivos, o preço final, o método de pagamento e as condições de reembolso aplicáveis ao teu pedido.", "Conserva a confirmação da conversa e o comprovativo da transação para facilitar qualquer pedido posterior de suporte."] },
      { heading: "Privacidade no atendimento", paragraphs: ["Partilha apenas os dados estritamente necessários para analisar o pedido. A IPTV Listas não solicita que publiques credenciais, códigos ou dados bancários no site.", "Consulta a política de privacidade para compreender os princípios aplicáveis ao tratamento de informações enviadas voluntariamente."], links: links(["Política de privacidade", "/politica-privacidade/"]) },
    ],
    "/termos/": [
      { heading: "Utilização do site", paragraphs: ["Ao utilizar este site, o visitante aceita fazê-lo de forma lícita e responsável. O conteúdo tem finalidade informativa e comercial e não deve ser usado para contornar direitos, restrições ou regras aplicáveis.", "É proibido tentar interferir com o funcionamento do site, explorar falhas técnicas ou utilizar os conteúdos de forma enganadora."] },
      { heading: "Informação comercial", paragraphs: ["A disponibilidade, o preço, a duração, a compatibilidade e as condições de cada opção devem ser confirmados no momento do pedido. Uma informação desatualizada ou um erro evidente não cria automaticamente uma obrigação comercial.", "O utilizador é responsável por confirmar se o dispositivo, a aplicação e a ligação à internet cumprem os requisitos necessários."], links: links(["Ver preços", "/precos/"], ["Política de reembolso", "/politica-reembolso/"]) },
      { heading: "Conteúdos e propriedade intelectual", paragraphs: ["Os textos, elementos visuais e identidade da IPTV Listas não podem ser copiados ou apresentados como pertencentes a terceiros sem autorização.", "Nomes e marcas de fabricantes ou aplicações pertencem aos respetivos titulares e são mencionados apenas para fins de identificação e compatibilidade."] },
    ],
    "/politica-privacidade/": [
      { heading: "Dados que podem ser fornecidos", paragraphs: ["Quando o visitante inicia voluntariamente uma conversa pelo WhatsApp, pode fornecer nome, contacto, dados do pedido, dispositivo e informação necessária ao suporte. O site não deve ser usado para enviar palavras-passe ou dados bancários sensíveis.", "A informação deve ser limitada ao necessário para responder à questão, acompanhar o pedido ou cumprir obrigações aplicáveis."] },
      { heading: "Finalidades e conservação", paragraphs: ["Os dados enviados podem ser usados para responder a pedidos, prestar suporte, confirmar condições comerciais, prevenir abuso e manter registos necessários da interação.", "A informação deve ser conservada apenas durante o período necessário à finalidade aplicável ou ao cumprimento de obrigações legais e depois eliminada ou anonimizada quando adequado."] },
      { heading: "Serviços externos e direitos", paragraphs: ["Ao abrir o WhatsApp ou outra ligação externa, aplicam-se também as políticas do respetivo fornecedor. O visitante deve rever essas condições antes de partilhar informação.", "Para pedir acesso, correção ou eliminação de dados associados a uma interação, utiliza o canal oficial de contacto e fornece elementos suficientes para localizar o pedido."], links: links(["Contactar", "/contacto/"], ["Política de cookies", "/politica-cookies/"]) },
    ],
    "/politica-reembolso/": [
      { heading: "Pedido de cancelamento ou reembolso", paragraphs: ["Qualquer pedido deve ser apresentado pelo canal oficial de contacto, identificando o plano, a data, o comprovativo e o motivo. Cada situação é analisada de acordo com a natureza do serviço, o estado da ativação e as condições confirmadas antes do pagamento.", "O envio de um pedido não significa aprovação automática. A equipa pode solicitar informação adicional estritamente necessária para verificar a transação."] },
      { heading: "Serviços digitais e ativação", paragraphs: ["Quando um serviço digital é configurado ou ativado a pedido do cliente, podem existir limitações ao cancelamento depois do início da execução, nos termos permitidos pela legislação aplicável.", "Antes de pagar, confirma quando começa a ativação, quais são as condições aplicáveis e se existe algum período específico para comunicar problemas."], links: links(["Termos e condições", "/termos/"], ["Contactar", "/contacto/"]) },
      { heading: "Como acelerar a análise", paragraphs: ["Guarda a conversa de confirmação, o plano escolhido e o comprovativo. Descreve o problema com datas e factos objetivos, sem partilhar publicamente credenciais.", "Quando um reembolso for aprovado, o prazo de processamento pode depender do método de pagamento e da instituição financeira utilizada."] },
    ],
    "/politica-cookies/": [
      { heading: "O que são cookies", paragraphs: ["Cookies e tecnologias semelhantes permitem guardar pequenas informações no navegador para assegurar funcionalidades, recordar escolhas ou compreender o desempenho de um site.", "Alguns elementos técnicos podem ser estritamente necessários; outros, se forem ativados, devem respeitar as escolhas de privacidade aplicáveis."] },
      { heading: "Controlo no navegador", paragraphs: ["O visitante pode bloquear, eliminar ou limitar cookies através das definições do navegador. O bloqueio de armazenamento estritamente necessário pode afetar algumas funcionalidades.", "Ligações externas, incluindo o WhatsApp, podem utilizar tecnologias próprias sob as políticas dos respetivos fornecedores."], links: links(["Política de privacidade", "/politica-privacidade/"], ["Contactar", "/contacto/"]) },
      { heading: "Alterações à utilização de cookies", paragraphs: ["Se forem adicionadas ferramentas de análise, publicidade ou personalização, esta página e o mecanismo de consentimento devem ser atualizados antes de essas ferramentas serem utilizadas quando a lei exigir consentimento."] },
    ],
    "/aviso-legal/": [
      { heading: "Natureza da informação", paragraphs: ["Os guias do site ajudam a compreender tecnologia, dispositivos, aplicações e diagnóstico. Não substituem aconselhamento jurídico e não constituem garantia universal de compatibilidade ou desempenho.", "A experiência depende, entre outros fatores, da rede, do dispositivo, da aplicação, da região e das condições efetivamente contratadas."] },
      { heading: "Marcas e serviços de terceiros", paragraphs: ["As marcas, nomes de aplicações e dispositivos mencionados pertencem aos respetivos titulares. A sua referência não implica patrocínio, associação ou aprovação, salvo indicação expressa e verificável.", "A IPTV Listas não controla alterações efetuadas por serviços externos, lojas de aplicações ou fabricantes."], links: links(["Legalidade do IPTV", "/legalidade/"], ["Termos", "/termos/"]) },
      { heading: "Utilização responsável", paragraphs: ["O utilizador deve garantir que possui autorização para aceder e utilizar os conteúdos e serviços escolhidos. A tecnologia IPTV, por si só, não determina a legalidade da distribuição de um conteúdo.", "Comunica erros ou informações desatualizadas através da página de contacto para que possam ser revistas."] },
    ],
  };

  if (legalPages[route.slug]) return legalPages[route.slug];

  return [
    { heading: route.title, paragraphs: [route.description], links: links(["Contacto", "/contacto/"], ["Termos", "/termos/"], ["Política de privacidade", "/politica-privacidade/"]) },
  ];
}

function getFAQ(route: RouteDefinition): FAQEntry[] {
  switch (route.type) {
    case "device":
      return [
        { question: "Como sei se o meu equipamento é compatível?", answer: "Diz-nos o modelo pelo WhatsApp e confirmamos antes de encomendares, indicando a app mais adequada." },
        { question: "Ajudam na instalação?", answer: "Sim. Enviamos o guia para o teu equipamento e o apoio 24/7 acompanha-te até estar a funcionar." },
      ];
    case "app":
      return [
        { question: "A configuração é igual em todas as versões da app?", answer: "Não necessariamente. Menus e opções mudam entre versões e equipamentos; se algo não coincidir, fala connosco." },
        { question: "Posso partilhar os meus dados de acesso?", answer: "Não. Trata as credenciais como uma palavra-passe e nunca as publiques." },
      ];
    case "support":
      return [
        { question: "Qual é o primeiro passo para resolver um problema?", answer: "Percebe se a falha vem da rede, do equipamento ou da app antes de mudar várias definições ao mesmo tempo." },
        { question: "Posso pedir ajuda pelo WhatsApp?", answer: "Sim. O apoio funciona 24/7 em português." },
      ];
    case "money":
      return [
        { question: "Há fidelização?", answer: "Não. O plano termina no fim do período pago." },
        { question: "Posso testar antes?", answer: "Sim, com o teste grátis de 24 horas, sem compromisso." },
      ];
    default:
      return [
        { question: "Onde encontro ajuda?", answer: "Na página de suporte ou pelo WhatsApp, 24/7 em português." },
        { question: "Onde vejo os preços?", answer: "Na página de preços, com o total calculado para 1 a 3 ecrãs." },
      ];
  }
}

function blogContent(_route: RouteDefinition): ContentSection[] {
  return [
    { heading: "Guias práticos sobre IPTV em Portugal", paragraphs: ["Artigos para escolher um serviço, preparar o teu equipamento e evitar erros comuns antes de pagar."], links: links(["Ver preços", "/precos/"], ["Guias", "/guias/"], ["Suporte", "/suporte/"]) },
  ];
}

export function getContentRecord(route: RouteDefinition): ContentRecord {
  let sections: ContentSection[];

  switch (route.type) {
    case "money": sections = moneyContent(route); break;
    case "device": sections = deviceContent(route); break;
    case "app": sections = appContent(route); break;
    case "guide": sections = guideContent(route); break;
    case "support": sections = supportContent(route); break;
    case "comparison": sections = comparisonContent(route); break;
    case "legal": sections = legalContent(route); break;
    case "blog": sections = blogContent(route); break;
    default:
      sections = [
        {
          heading: "Conteúdo organizado por intenção",
          paragraphs: [
            "A IPTV Listas reúne planos, guias de instalação e suporte num só lugar.",
            "O objetivo é permitir que cada pessoa encontre o próximo conteúdo adequado sem depender de uma única página sobrecarregada.",
          ],
        },
        {
          heading: "Próximos caminhos",
          paragraphs: [
            "Use a navegação e as ligações contextuais para aprofundar o tema necessário. Cada cluster foi desenhado para reforçar a relação entre descoberta, decisão, configuração e suporte.",
          ],
        },
      ];
  }

  const production = productionContent[route.slug] ?? {
    depth: "supporting" as const,
    entities: [route.primaryKeyword],
    takeaways: [
      "Usa esta página para responder à intenção principal antes de avançar para outro cluster.",
      "Confirma dados comerciais e de compatibilidade antes de os tratar como factos.",
      "Segue as ligações contextuais para aprofundar configuração, suporte ou informação comercial."
    ],
    steps: ["Definir a dúvida", "Verificar o contexto", "Consultar o guia relacionado", "Avançar para o próximo passo"]
  };

  const core = getCoreContent(route.slug);
  const blog = getBlogArticle(route.slug);
  const longform = core ?? blog ?? devicePages[route.slug] ?? longformContent[route.slug];

  return {
    eyebrow: labels[route.type],
    intro: core?.intro ?? route.description,
    summary: blog?.summary,
    sources: blog?.sources ?? [],
    updatedAt: blog?.updatedAt,
    sections: longform?.sections ?? sections,
    faq: longform?.faq ?? getFAQ(route),
    ctaMessage: `Olá, gostaria de obter informações sobre ${route.title}.`,
    depth: production.depth,
    entities: production.entities,
    takeaways: production.takeaways,
    steps: production.steps ?? ["Definir a necessidade", "Consultar a informação", "Validar o contexto", "Avançar para a etapa seguinte"],
  };
}
