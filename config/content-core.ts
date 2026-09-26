import type { ContentSection, FAQEntry } from "@/config/content";
import { offer, facts, trialPhrase } from "@/config/offer";
import { formatEuro, lowestMonthly, priceFor } from "@/config/pricing";

/**
 * Conteúdo das páginas comerciais e institucionais.
 * Todos os números vêm de config/offer.ts, nunca escritos à mão aqui.
 */
export type CoreContent = { intro?: string; sections: ContentSection[]; faq: FAQEntry[] };

const link = (label: string, href: string) => ({ label, href });
const trial = trialPhrase;
const annual = formatEuro(priceFor(1, 12));
const fromMonthly = formatEuro(lowestMonthly);
const monthlyStart = formatEuro(priceFor(1, 1));

const orderFaq: FAQEntry[] = [
  { question: "Como pago?", answer: `Todas as encomendas são confirmadas pelo WhatsApp, onde combinamos o pagamento e enviamos os acessos. ${offer.payment}.` },
  { question: "Há fidelização?", answer: "Não. O plano termina no fim do período pago e só renovas se quiseres." },
  { question: "Há reembolso?", answer: `Como o serviço é digital e começa logo após o pagamento, não há reembolso depois da ativação. Por isso existe o ${trial}: experimentas primeiro, no teu equipamento, sem pagar nada.` },
];

export const coreContent: Record<string, CoreContent> = {
  "/iptv-portugal/": {
    intro: `IPTV em Portugal com ${facts.channels}, ${facts.vod}, guia de programação e apoio ${offer.support} em português. Sem fidelização.`,
    sections: [
      { heading: "O que recebes com a IPTV Listas", paragraphs: [
        `Uma subscrição dá-te acesso a ${facts.channels} organizados por categorias, ${facts.vod} a pedido e guia de programação (EPG) nos canais. A imagem chega em ${offer.quality}, conforme o canal e a tua ligação.`,
        "As atualizações são gratuitas e automáticas, e a VPN já vem integrada no serviço, por isso não precisas de instalar nem pagar uma à parte.",
      ], links: [link("Ver preços", "/precos/"), link("Teste grátis 24h", "/teste-iptv/")] },
      { heading: "Onde podes ver", paragraphs: [
        "Funciona na maioria das Smart TV Samsung e LG, Fire TV Stick, Android TV e Google TV, Apple TV, iPhone, iPad, telemóveis Android e computador.",
        "Dizes-nos o teu equipamento e enviamos o guia de instalação certo, com a app mais indicada para ele.",
      ], links: [link("Guias por dispositivo", "/dispositivos/"), link("Apps IPTV", "/apps/"), link("Categorias de canais", "/canais/")] },
      { heading: "Quanto custa", paragraphs: [
        `Os planos começam em ${monthlyStart} por um mês e descem até ${fromMonthly} por mês no plano anual de ${annual}. Para 2 ou 3 ecrãs em simultâneo, a calculadora mostra o total antes de encomendares.`,
      ], links: [link("Calcular o preço", "/precos/")] },
      { heading: "Como começar", paragraphs: [
        "Escolhe a duração e o número de ecrãs, confirma pelo WhatsApp e recebe os acessos com o guia do teu equipamento. Se algo não correr bem, o apoio responde a qualquer hora.",
      ], links: [link("Como comprar", "/comprar-iptv/"), link("Falar com o apoio", "/contacto/")] },
    ],
    faq: [
      { question: "Quantos canais tem a IPTV Listas?", answer: `${facts.channels}, nacionais e internacionais, com guia de programação.` },
      { question: "Posso experimentar antes?", answer: `Sim. O ${trial} dá acesso ao serviço completo, sem pagamento e sem compromisso.` },
      ...orderFaq,
    ],
  },

  "/subscricao-iptv/": {
    intro: "Como funciona uma subscrição IPTV Listas: duração, ecrãs em simultâneo, renovação e o que está incluído.",
    sections: [
      { heading: "Duração e ecrãs", paragraphs: [
        "Escolhes entre 1, 3, 6 ou 12 meses e entre 1, 2, 3 ou 4 ecrãs em simultâneo. Todos os planos têm os mesmos canais e funcionalidades; muda apenas o tempo e quantos ecrãs podem ver ao mesmo tempo.",
        "Podes instalar a app em vários equipamentos. O número de ecrãs define quantos podem estar a reproduzir ao mesmo tempo.",
      ], links: [link("Ver tabela de preços", "/precos/")] },
      { heading: "O que está incluído", paragraphs: [
        `${facts.channels}, ${facts.vod}, guia de programação, qualidade ${offer.quality}, atualizações gratuitas, VPN integrada e apoio ${offer.support} em português.`,
      ] },
      { heading: "Renovação sem surpresas", paragraphs: [
        "A subscrição não renova sozinha. Quando o período termina, falas connosco pelo WhatsApp se quiseres continuar e podes mudar de duração ou de número de ecrãs nessa altura.",
      ], links: [link("Falar no WhatsApp", "/contacto/")] },
    ],
    faq: [
      { question: "Posso mudar de plano mais tarde?", answer: "Sim. Na renovação escolhes outra duração ou outro número de ecrãs." },
      { question: "Quando começa o meu plano?", answer: "A partir do momento em que recebes os acessos. Ao encomendar, confirmas que queres o início imediato do serviço." },
      ...orderFaq,
    ],
  },

  "/comprar-iptv/": {
    intro: "Comprar IPTV em Portugal com a IPTV Listas demora poucos minutos: escolhes o plano, confirmas pelo WhatsApp e recebes os acessos com um guia para o teu equipamento.",
    sections: [
      { heading: "1. Escolhe o plano", paragraphs: [
        "Na página de preços seleciona a duração e o número de ecrãs. O preço final aparece logo, sem custos escondidos.",
      ], links: [link("Abrir a calculadora", "/precos/")] },
      { heading: "2. Confirma pelo WhatsApp", paragraphs: [
        "O botão abre o WhatsApp com a mensagem já preenchida com o teu plano. Combinamos o pagamento e confirmas que queres o início imediato do serviço.",
      ] },
      { heading: "3. Instala com o nosso guia", paragraphs: [
        "Dizes-nos o equipamento e enviamos o guia certo. Se algo não correr bem, ajudamos-te a qualquer hora até estar a funcionar.",
      ], links: [link("Guias por dispositivo", "/dispositivos/"), link("Resolver problemas", "/suporte/")] },
      { heading: "Ainda com dúvidas?", paragraphs: [
        `Faz primeiro o ${trial}. Não pagas nada e só escolhes um plano se o serviço funcionar bem na tua casa.`,
      ], links: [link("Pedir teste", "/teste-iptv/")] },
    ],
    faq: orderFaq,
  },

  "/precos/": {
    intro: `Todos os planos incluem os mesmos ${facts.channels} e ${facts.vod}. Só muda a duração e quantos ecrãs podem ver ao mesmo tempo. O preço que vês é o preço final.`,
    sections: [
      { heading: "Ecrãs em simultâneo, explicados", paragraphs: [
        "Podes instalar a app em vários equipamentos. O número de ecrãs define quantos podem estar a ver ao mesmo tempo.",
        "Exemplo: com 2 ecrãs, a sala e o quarto veem em simultâneo, e o telemóvel fica para quando um deles estiver desligado.",
      ] },
      { heading: "Como encomendar", paragraphs: [
        "Escolhe o plano na calculadora e carrega em encomendar. O WhatsApp abre com o plano e o total já escritos; combinamos o pagamento e enviamos os acessos com o guia do teu equipamento.",
      ], links: [link("Passo a passo da compra", "/comprar-iptv/")] },
      { heading: "Experimenta primeiro, grátis", paragraphs: [
        `O ${trial} dá acesso ao serviço completo, no teu equipamento, sem pagamento.`,
      ], links: [link("Pedir teste", "/teste-iptv/")] },
    ],
    faq: [
      { question: "Posso mudar de plano mais tarde?", answer: "Sim. Na renovação escolhes outra duração ou outro número de ecrãs." },
      { question: "Quando começa o meu plano?", answer: "A partir do momento em que recebes os acessos. Ao encomendar, confirmas que queres o início imediato do serviço." },
      ...orderFaq,
    ],
  },

  "/teste-iptv/": {
    intro: `A melhor forma de saber se um serviço funciona bem é testá-lo em tua casa, na tua internet e na tua televisão. Durante ${offer.trial.hours} horas tens acesso ao serviço completo, grátis e sem compromisso.`,
    sections: [
      { heading: "Como funciona", paragraphs: [
        "Envia-nos uma mensagem pelo WhatsApp com o teu equipamento e recebes os acessos de teste com o guia de instalação. Não pedimos pagamento nem cartão.",
        `A partir daí tens ${offer.trial.hours} horas para testar, com o apoio ${offer.support} disponível se precisares.`,
      ] },
      { heading: "O que testar nessas 24 horas", paragraphs: [
        "Vê à noite, quando mais pessoas estão ligadas, e repara no tempo de mudança entre canais.",
        "Confirma o guia de programação nos canais que mais vês e compara a imagem por Wi-Fi e, se puderes, por cabo.",
        "Faz uma pergunta ao apoio e vê quanto tempo demoramos a responder.",
      ], links: [] },
      { heading: "Condições do teste", paragraphs: [
        "Um teste por pessoa e por equipamento.",
        "O teste é gratuito e não renova sozinho: termina ao fim de 24 horas.",
        "Como não há reembolso depois de subscreveres, o teste é a tua forma de decidir com segurança antes de pagar.",
      ], links: [link("Ver preços", "/precos/"), link("Política de reembolso", "/politica-reembolso/")] },
    ],
    faq: [
      { question: "O teste é mesmo grátis?", answer: "Sim. Não pedimos pagamento nem cartão, e o teste termina sozinho ao fim de 24 horas." },
      { question: "O teste tem os mesmos canais?", answer: "Sim, o teste dá acesso ao serviço completo." },
      { question: "E se tiver dúvidas durante o teste?", answer: `O apoio ${offer.support} também está disponível durante o teste, a qualquer hora.` },
    ],
  },

  "/lista-iptv-portugal/": {
    intro: "O que é uma lista IPTV, porque as listas grátis que circulam na internet deixam de funcionar em poucos dias, que riscos trazem e como testar um serviço estável antes de pagar.",
    sections: [
      { heading: "O que é uma lista IPTV", paragraphs: [
        "Uma lista IPTV é o endereço que diz à tua app onde estão os canais. Pode chegar como um link M3U ou como dados Xtream (servidor, utilizador e palavra-passe). A app lê essa lista e organiza os canais por categorias.",
        "A lista em si não é um programa: é um acesso. Por isso, a qualidade depende de quem a fornece, dos servidores por trás e do apoio disponível quando algo falha.",
      ], links: [link("O que é M3U", "/guias/m3u/")] },
      { heading: "Porque as listas grátis deixam de funcionar", paragraphs: [
        "As listas partilhadas em fóruns, grupos e vídeos são publicadas para milhares de pessoas ao mesmo tempo. Os servidores ficam sobrecarregados e os links costumam ser desativados em poucos dias.",
        "Quando param, não há a quem perguntar. Voltas a procurar outra lista, e o ciclo repete-se.",
      ] },
      { heading: "Os riscos que ninguém menciona", paragraphs: [
        "Muitas listas grátis pedem para instalar apps de fontes desconhecidas ou para desativar proteções do equipamento. Isso pode expor os teus dados e as tuas contas.",
        "Nunca instales ficheiros enviados por desconhecidos e nunca partilhes as tuas credenciais em sites que prometem converter ou reparar listas.",
      ], links: [] },
      { heading: "Uma alternativa estável para testar", paragraphs: [
        `A IPTV Listas dá-te ${facts.channels} com guia de programação, apoio ${offer.support} em português e o guia de instalação para o teu equipamento.`,
        `Antes de pagar um plano, podes fazer um ${trial}, sem compromisso.`,
      ], links: [link("Pedir teste", "/teste-iptv/"), link("Ver preços", "/precos/")] },
    ],
    faq: [
      { question: "Uma lista IPTV funciona em qualquer app?", answer: "Funciona nas apps que aceitam M3U ou Xtream, como IPTV Smarters Pro, TiviMate ou IBO Player. Diz-nos o teu equipamento e indicamos a mais adequada." },
      { question: "Porque é que a minha lista grátis parou?", answer: "Normalmente porque foi partilhada com demasiadas pessoas e o servidor foi sobrecarregado ou desativado. Não há forma segura de a recuperar." },
      { question: "Posso testar antes de pagar um plano?", answer: `Sim. O ${trial} dá acesso ao serviço completo.` },
    ],
  },

  "/reseller/": {
    intro: "Informação para quem quer revender IPTV em Portugal com a IPTV Listas como parceiro.",
    sections: [
      { heading: "Para quem é", paragraphs: [
        "O programa destina-se a quem já tem ou quer criar uma base de clientes e prefere concentrar-se na venda e no acompanhamento, com um fornecedor que responde a qualquer hora.",
      ] },
      { heading: "Como começar", paragraphs: [
        "Fala connosco pelo WhatsApp com uma estimativa do número de clientes que pretendes servir. Explicamos as condições de parceria, o funcionamento dos créditos e o apoio disponível.",
      ], links: [link("Contactar", "/contacto/")] },
    ],
    faq: [
      { question: "Onde vejo as condições de revenda?", answer: "As condições dependem do volume e são enviadas pelo WhatsApp depois de conversarmos sobre o teu caso." },
    ],
  },

  "/guias/iptv-e-legal-em-portugal/": {
    sections: [
      { heading: "A tecnologia e o conteúdo são coisas diferentes", paragraphs: [
        "IPTV é apenas uma forma de transmitir televisão pela internet, usada também pelos operadores tradicionais. A tecnologia em si é legal.",
        "O que determina a legalidade é o conteúdo: transmitir canais ou filmes exige autorização de quem detém os direitos. Distribuir conteúdos protegidos sem essa autorização é ilegal em Portugal e na União Europeia.",
      ] },
      { heading: "O que isto significa para quem vê", paragraphs: [
        "As autoridades portuguesas e europeias atuam sobretudo contra quem distribui conteúdos sem autorização, mas a lei também protege os titulares de direitos contra o acesso a transmissões não autorizadas.",
        "Esta página é informativa e não substitui aconselhamento jurídico. Para uma situação concreta, consulta a legislação em vigor ou um profissional qualificado.",
      ], links: [link("Legalidade do IPTV", "/legalidade/"), link("Aviso legal", "/aviso-legal/")] },
      { heading: "Boas práticas de segurança", paragraphs: [
        "Instala apps apenas pelas lojas oficiais do teu equipamento, não desatives proteções a pedido de terceiros e não partilhes credenciais em sites desconhecidos.",
      ], links: [] },
    ],
    faq: [
      { question: "Usar uma app IPTV é ilegal?", answer: "Não. As apps e a tecnologia são legais; a questão legal está na autorização para os conteúdos transmitidos." },
    ],
  },

  "/legalidade/": {
    sections: [
      { heading: "Tecnologia legal, conteúdo com direitos", paragraphs: [
        "IPTV é uma tecnologia de transmissão legal e amplamente usada. A distribuição de canais, filmes e séries está sujeita aos direitos de autor e às licenças dos respetivos titulares.",
        "Cada utilizador é responsável por garantir que tem autorização para aceder aos conteúdos que vê.",
      ], links: [link("Guia completo sobre legalidade", "/guias/iptv-e-legal-em-portugal/"), link("Aviso legal", "/aviso-legal/")] },
      { heading: "Marcas de terceiros", paragraphs: [
        "Nomes de aplicações, fabricantes e canais mencionados no site pertencem aos respetivos titulares e são usados apenas para identificação e compatibilidade. A sua referência não implica qualquer associação.",
      ] },
    ],
    faq: [
      { question: "A IPTV Listas substitui aconselhamento jurídico?", answer: "Não. A informação publicada é geral; para um caso concreto consulta um profissional qualificado." },
    ],
  },

  "/sobre-nos/": {
    intro: "A IPTV Listas é um serviço de IPTV para Portugal com uma ideia simples: preços claros, instalação acompanhada e alguém do outro lado a qualquer hora.",
    sections: [
      { heading: "O que nos distingue", paragraphs: [
        "Mostramos o preço final antes de encomendares, explicamos o que significa cada ecrã em simultâneo e acompanhamos a instalação até funcionar no teu equipamento.",
        `O apoio funciona ${offer.support} em português pelo WhatsApp, durante o teste e depois da subscrição.`,
      ], links: [link("Ver preços", "/precos/"), link("Falar connosco", "/contacto/")] },
      { heading: "Transparência", paragraphs: [
        "Publicamos apenas condições que cumprimos: não há reembolso depois da ativação, por isso existe um teste grátis de 24 horas.",
      ], links: [link("Política de reembolso", "/politica-reembolso/"), link("Termos", "/termos/")] },
    ],
    faq: [
      { question: "Como falo com a IPTV Listas?", answer: `Pelo WhatsApp, ${offer.support}, em português.` },
    ],
  },

  "/contacto/": {
    intro: `Falamos contigo pelo WhatsApp (${offer.whatsappDisplay}), ${offer.support}, em português: planos, testes, instalação e apoio técnico.`,
    sections: [
      { heading: "Para uma resposta mais rápida", paragraphs: [
        "Indica o teu equipamento (por exemplo Samsung, LG, Fire TV Stick ou iPhone), a app que usas e uma descrição curta do que precisas.",
        "Nunca publiques palavras-passe ou dados de acesso em páginas públicas.",
      ], links: [link("Resolver problemas", "/suporte/"), link("Ver preços", "/precos/")] },
      { heading: "Privacidade no atendimento", paragraphs: [
        "Partilha apenas os dados necessários para tratarmos o teu pedido. Consulta a política de privacidade para saberes como os tratamos.",
      ], links: [link("Política de privacidade", "/politica-privacidade/")] },
    ],
    faq: [
      { question: "Qual é o horário do apoio?", answer: `O apoio funciona ${offer.support}, todos os dias.` },
    ],
  },

  "/politica-reembolso/": {
    intro: "Condições de reembolso da IPTV Listas, explicadas de forma direta.",
    sections: [
      { heading: "Não há reembolso depois da ativação", paragraphs: [
        "A subscrição é um serviço digital que começa imediatamente após o pagamento, a teu pedido. Ao encomendar, confirmas expressamente que queres o início imediato e reconheces que, a partir desse momento, perdes o direito de livre resolução previsto para contratos à distância.",
        "Por isso, depois de enviados os acessos, não há reembolso do valor pago.",
      ] },
      { heading: "Teste grátis antes de subscrever", paragraphs: [
        `Para decidires com segurança, disponibilizamos um ${trial}, com acesso ao serviço completo e sem qualquer pagamento.`,
      ], links: [link("Pedir teste", "/teste-iptv/")] },
      { heading: "Se tiveres um problema", paragraphs: [
        `Fala connosco pelo WhatsApp, ${offer.support}. Resolvemos problemas de instalação, acesso e reprodução contigo até o serviço funcionar como descrito.`,
      ], links: [link("Contactar", "/contacto/"), link("Termos e condições", "/termos/")] },
    ],
    faq: [
      { question: "Posso cancelar a meio do plano?", answer: "Podes deixar de usar o serviço quando quiseres, mas o período já pago não é reembolsado. Não há renovação automática." },
    ],
  },
};

export function getCoreContent(slug: string) {
  return coreContent[slug];
}
