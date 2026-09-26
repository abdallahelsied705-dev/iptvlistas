import type { ContentSection, FAQEntry } from "@/config/content";
import { offer, formatCount, trialPhrase } from "@/config/offer";
import { formatEuro, priceFor, durationLabel } from "@/config/pricing";

/**
 * Artigos do blog. Cada artigo abre com uma resposta direta (answer box),
 * usa perguntas como títulos de secção e termina com FAQ e fontes —
 * formato que funciona para o Google e para motores de resposta com IA.
 */
export type BlogArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  keyword: string;
  publishedAt: string;
  updatedAt: string;
  image: string;
  imageAlt: string;
  summary: string;
  sections: ContentSection[];
  faq: FAQEntry[];
  sources?: { label: string; href: string }[];
};

const link = (label: string, href: string) => ({ label, href });
const trial = trialPhrase;
const ch = formatCount(offer.channels);

export const blogArticles: BlogArticle[] = [
  {
    slug: "/blog/melhor-iptv-portugal/",
    title: "Melhor IPTV em Portugal em 2026: 8 critérios para escolher sem arrependimentos",
    seoTitle: "Melhor IPTV Portugal 2026: 8 Critérios",
    description: "Como escolher o melhor IPTV em Portugal com 8 critérios que consegues verificar: teste real, preço final por ecrã, fidelização, apoio e condições escritas.",
    keyword: "melhor iptv portugal",
    publishedAt: "2026-09-23T08:00:00Z",
    updatedAt: "2026-09-24T08:00:00Z",
    image: "/images/blog/melhor-iptv-portugal.webp",
    imageAlt: "Homem no sofá a comparar serviços IPTV no telemóvel, com uma lista de verificação na mesa e a televisão ligada",
    summary: "O melhor IPTV em Portugal não é o que anuncia mais canais. É o que passa num teste no teu equipamento à hora de maior audiência, publica o preço final para o número de ecrãs que precisas, não exige fidelização e responde quando algo falha. Os 8 critérios abaixo servem para comparar qualquer serviço, incluindo o nosso.",
    sections: [
      { heading: "Porque é que o número de canais não decide nada?", paragraphs: [
        "Os serviços que aparecem no Google anunciam entre 10.000 e 45.000 canais. Numa casa normal, vêem-se algumas dezenas por semana. A diferença entre dois serviços está na forma como esses canais chegam ao teu ecrã: se abrem depressa, se aguentam a noite de domingo e se o guia de programação está certo.",
        "Um número alto também não se consegue verificar antes de pagar, e muitas listas enchem o total com versões repetidas do mesmo canal em qualidades diferentes. Os critérios que importam, esses sim, verificam-se em poucas horas.",
      ] },
      { heading: "Quais são os 8 critérios que deves verificar?", paragraphs: ["Usa esta lista pela ordem. Se um serviço falha num dos três primeiros, não vale a pena continuar a avaliá-lo."],
        list: [
          "Teste no teu equipamento: um teste curto, feito na tua televisão e na tua internet, vale mais do que qualquer análise escrita por terceiros. O que funciona no telemóvel de outra pessoa pode não funcionar na tua Smart TV.",
          "Estabilidade à noite: testa entre as 20h e as 23h, quando os servidores têm mais utilizadores ligados. Um serviço que só funciona bem de manhã não serve para o uso real.",
          "Preço final publicado por ecrã: o total para 2 ou 3 ecrãs deve estar escrito antes de encomendares. \"Preço sob consulta\" significa que o valor pode mudar consoante quem pergunta.",
          "Sem fidelização nem renovação automática: o plano deve terminar no fim do período pago. Se renovar sozinho, tens de saber como e quando cancelar.",
          "Apoio com horário claro e em português: confirma a que horas respondem e faz uma pergunta real durante o teste. A primeira resposta mostra como vai ser o resto da relação.",
          "Guia de programação (EPG): sem ele, fazer zapping é adivinhar o que está a dar. Confirma que o guia mostra os programas certos à hora certa nos canais que vês.",
          "Apps das lojas oficiais: um serviço sério indica apps disponíveis na loja do teu equipamento e nunca te pede para desativar proteções ou instalar ficheiros enviados por chat.",
          "Condições escritas: reembolso, início do serviço e o que acontece se algo falhar devem estar publicados. Se não estão escritos, não existem.",
        ], ordered: true },
      { heading: "Como verificar cada critério na prática?", paragraphs: ["A tabela resume onde procurar a informação e qual é o sinal de alerta em cada caso."],
        table: { head: ["Critério", "Como verificar", "Sinal de alerta"], rows: [
          ["Teste", "Pede-o e usa-o na televisão principal", "Só há vídeos de demonstração"],
          ["Estabilidade", "Vê um direto entre as 20h e as 23h", "Cortes repetidos no mesmo canal, mesmo por cabo"],
          ["Preço por ecrã", "Procura a tabela no site", "Preço só por mensagem privada"],
          ["Fidelização", "Lê os termos", "Renovação automática sem aviso"],
          ["Apoio", "Envia uma pergunta durante o teste", "Resposta só no dia seguinte"],
          ["EPG", "Abre o guia nos canais que mais vês", "Guia vazio ou com horas erradas"],
          ["Apps", "Confirma se a app está na loja oficial", "Pedido para instalar ficheiros enviados por chat"],
          ["Condições", "Procura a política de reembolso", "Nenhuma página de condições"],
        ] } },
      { heading: "Como comparar dois serviços lado a lado?", paragraphs: [
        "Se estás indeciso entre dois serviços, dá uma nota de 0 a 2 a cada critério: 0 se falha, 1 se é aceitável, 2 se é bom. Multiplica a nota pelo peso de cada critério e soma. Os pesos refletem o impacto no dia a dia.",
      ], table: { head: ["Critério", "Peso", "Porquê este peso"], rows: [
        ["Teste no teu equipamento", "3", "É a única prova direta de que funciona na tua casa"],
        ["Estabilidade à noite", "3", "É quando mais vais usar o serviço"],
        ["Preço final por ecrã", "2", "Evita surpresas no pagamento"],
        ["Apoio", "2", "Decide quanto tempo ficas sem televisão quando algo falha"],
        ["Fidelização", "1", "Importa sobretudo se o serviço piorar"],
        ["EPG", "1", "Conforto diário"],
        ["Apps oficiais", "1", "Segurança do equipamento"],
        ["Condições escritas", "1", "Proteção em caso de problema"],
      ] }, links: [] },
      { heading: "Que perguntas deves fazer antes de pagar?", paragraphs: ["Envia estas perguntas por escrito. As respostas, e o tempo que demoram a chegar, dizem muito sobre o serviço."],
        list: [
          "Qual é o preço total para o número de ecrãs que preciso, e a partir de quando conta o plano?",
          "Que app recomendam para o meu modelo exato de televisão ou box?",
          "O plano renova sozinho? Como é que cancelo?",
          "Em que condições há reembolso, e onde estão escritas?",
          "A que horas funciona o apoio, e por que canal?",
          "Posso testar no meu equipamento antes de escolher um plano longo?",
        ] },
      { heading: "Que erros se cometem mais ao escolher IPTV?", paragraphs: ["Estes são os erros que levam a trocar de serviço ao fim de poucas semanas:"],
        list: [
          "Escolher pelo número de canais em vez de testar os canais que realmente vês.",
          "Comprar o plano anual sem teste, só porque o preço por mês parece baixo.",
          "Testar no telemóvel, junto ao router, e depois usar na televisão do quarto por Wi-Fi.",
          "Testar de manhã, quando os servidores estão tranquilos, e não à noite.",
          "Contratar 1 ecrã numa casa onde duas pessoas vêem ao mesmo tempo.",
          "Pagar a alguém que só responde por mensagem privada e não publica condições.",
        ], links: [] },
      { heading: "Quando é que o IPTV não é a melhor opção?", paragraphs: [
        "O IPTV depende da tua ligação à internet. Se a tua casa tem uma ligação instável ou abaixo de 10 Mbps reais na televisão, vais ter cortes com qualquer serviço, e o problema não se resolve a trocar de fornecedor.",
        "Também não é a opção certa para quem precisa de um contrato com técnico em casa, equipamento incluído e reembolso garantido em qualquer situação. Nesses casos, os pacotes dos operadores fazem mais sentido, apesar do preço e da fidelização.",
      ], links: [link("Velocidade de internet para IPTV", "/guias/velocidade-internet-iptv/"), link("IPTV vs TV tradicional", "/comparar/iptv-vs-tv-tradicional/")] },
      { heading: "E a IPTV Listas, passa nestes critérios?", paragraphs: [
        `Publicamos as respostas para poderes confirmar: ${ch} canais com guia de programação, preços de ${formatEuro(priceFor(1, 1))} a ${formatEuro(priceFor(3, 12))} consoante duração e ecrãs, sem fidelização, apoio ${offer.support} em português e um ${trial}.`,
        "Não há reembolso depois da ativação, e dizemos isso na política de reembolso. É por isso que o teste existe: decides depois de ver o serviço na tua casa, com os teus canais e à tua hora.",
      ], links: [link("Ver preços", "/precos/"), link("Teste grátis 24h", "/teste-iptv/"), link("Política de reembolso", "/politica-reembolso/")] },
    ],
    faq: [
      { question: "Qual é o melhor IPTV em Portugal?", answer: "O que passa num teste feito no teu equipamento à noite, publica o preço final por ecrã, não tem fidelização e responde quando precisas. Nenhum ranking substitui esse teste." },
      { question: "Mais canais significa melhor serviço?", answer: "Não. A estabilidade, a rapidez a mudar de canal e o guia de programação pesam mais do que o total anunciado." },
      { question: "Quanto tempo deve durar um teste?", answer: "24 horas chegam, desde que incluam uma noite de maior audiência." },
      { question: "Vale a pena confiar em rankings de 'melhores IPTV'?", answer: "Com cuidado. Muitos rankings são escritos pelos próprios vendedores. Usa-os para conhecer nomes e decide com o teu próprio teste." },
      { question: "Que velocidade de internet preciso?", answer: "Como referência, cerca de 10 Mbps estáveis por ecrã em Full HD e 25 Mbps por ecrã em 4K, medidos junto à televisão." },
    ],
  },

  {
    slug: "/blog/quanto-custa-iptv-portugal/",
    title: "Quanto custa IPTV em Portugal em 2026? Preços reais do mercado",
    seoTitle: "Quanto Custa IPTV em Portugal em 2026?",
    description: "Preços de IPTV em Portugal por duração e número de ecrãs, custos escondidos a contar e comparação com os pacotes de TV dos operadores em 2026.",
    keyword: "quanto custa iptv portugal",
    publishedAt: "2026-09-23T08:00:00Z",
    updatedAt: "2026-09-24T08:00:00Z",
    image: "/images/blog/quanto-custa-iptv-portugal.webp",
    imageAlt: "Calculadora, nota de 50 euros, moedas e comando sobre a mesa da sala, com a televisão ao fundo",
    summary: "Em setembro de 2026, uma subscrição IPTV para 1 ecrã custa em Portugal entre 10€ e 13€ por um mês e entre 30€ e 60€ por 12 meses. Cada ecrã adicional custa entre 65% e 90% do preço base. O IPTV não inclui internet: compara-o com a parte de televisão do teu pacote, não com o pacote inteiro.",
    sections: [
      { heading: "Quanto custa uma subscrição para 1 ecrã?", paragraphs: [
        "Analisámos as tabelas publicadas por oito serviços IPTV que aparecem nas pesquisas em Portugal em setembro de 2026. Estes são os intervalos e as médias arredondadas:",
      ], table: { head: ["Duração", "Intervalo no mercado", "Média", "Custo por mês na média"], rows: [
        ["1 mês", "10€ a 13€", "cerca de 11€", "cerca de 11€"],
        ["3 meses", "17€ a 23€", "cerca de 20€", "cerca de 6,70€"],
        ["6 meses", "30€ a 40€", "cerca de 35€", "cerca de 5,80€"],
        ["12 meses", "30€ a 60€", "cerca de 46€", "cerca de 3,80€"],
      ] } },
      { heading: "Porque é que os preços variam tanto?", paragraphs: [
        "A diferença entre 30€ e 60€ por um ano não se explica só pela margem do vendedor. Há quatro fatores que mexem no preço:",
      ], list: [
        "Duração: quanto mais longo o plano, menor o custo por mês. Entre 1 e 12 meses, o preço mensal cai para cerca de um terço.",
        "Número de ecrãs: cada ecrã em simultâneo exige mais capacidade de servidor, e o preço sobe em conformidade.",
        "Apoio: responder a qualquer hora, em português, custa dinheiro. Serviços sem apoio real conseguem preços mais baixos.",
        "Revenda: muitos serviços revendem o mesmo acesso com marcas diferentes. O preço muda, o serviço por trás pode ser igual.",
      ] },
      { heading: "Quanto custa para 2 ou 3 ecrãs?", paragraphs: [
        "Aqui os serviços divergem muito. Alguns dão 10% de desconto no segundo ecrã, outros aplicam um multiplicador que não publicam. No mercado, cada ecrã adicional custa entre 65% e 90% do preço de um ecrã.",
        "Os nossos preços para comparares:",
      ], table: { head: ["Ecrãs", ...offer.durations.map(durationLabel)], rows: offer.screens.map((s) => [
        s === 1 ? "1 ecrã" : `${s} ecrãs`, ...offer.durations.map((m) => formatEuro(priceFor(s, m))),
      ]) }, links: [link("Calcular o meu plano", "/precos/")] },
      { heading: "Quanto gastas num ano, em três cenários reais?", paragraphs: [
        "O preço de tabela só diz metade. O que interessa é quanto sai do teu bolso ao fim de 12 meses, incluindo apps. Três exemplos com os preços da IPTV Listas:",
      ], table: { head: ["Cenário", "Plano", "Subscrição", "Extras possíveis", "Total no ano"], rows: [
        ["Uma pessoa, uma televisão com app gratuita", "12 meses, 1 ecrã", formatEuro(priceFor(1, 12)), "0€", formatEuro(priceFor(1, 12))],
        ["Casal, sala e quarto", "12 meses, 2 ecrãs", formatEuro(priceFor(2, 12)), "App paga na 2.ª televisão: cerca de 10€", `cerca de ${formatEuro(priceFor(2, 12) + 10)}`],
        ["Família com três ecrãs", "12 meses, 3 ecrãs", formatEuro(priceFor(3, 12)), "Um stick para a televisão antiga: cerca de 40€", `cerca de ${formatEuro(priceFor(3, 12) + 40)}`],
      ] } },
      { heading: "Que custos escondidos deves contar?", paragraphs: ["O preço da subscrição não é tudo. Antes de decidir, soma estes valores:"],
        list: [
          "App da televisão: algumas apps cobram ativação por equipamento. O IBO Player, por exemplo, tem 7 dias de teste e depois uma licença paga, anual ou vitalícia, de cerca de 7€ a 10€.",
          "Equipamento: se a tua televisão não tem uma app compatível, precisas de um stick ou box.",
          "Ecrãs extra: se em casa vêem duas pessoas ao mesmo tempo, o plano de 1 ecrã não chega e acabas por pagar a diferença a meio.",
          "Renovar mês a mês: doze planos de um mês custam cerca de três vezes mais do que um plano anual.",
        ], links: [link("Stick, box ou Smart TV?", "/blog/firestick-box-ou-smart-tv/")] },
      { heading: "Plano mensal ou anual: qual compensa?", paragraphs: [
        "O plano de um mês faz sentido em duas situações: quando queres usar o serviço só durante um período curto, ou quando ainda não confias no fornecedor e queres mais do que um teste de 24 horas.",
        "Depois de um teste que correu bem, o plano de 6 ou 12 meses é quase sempre a escolha mais económica. Se tens dúvidas entre os dois, o de 3 meses é um meio-termo: já tem desconto e não prende o teu dinheiro durante um ano.",
      ] },
      { heading: "Como pagar menos sem cair em armadilhas?", paragraphs: ["Há formas legítimas de baixar o custo anual sem trocar qualidade por preço:"],
        list: [
          "Testa primeiro e escolhe logo o plano longo: o desconto do plano anual é a maior poupança disponível.",
          "Ajusta o número de ecrãs à realidade: pagar 3 ecrãs quando só usas 2 ao mesmo tempo é dinheiro perdido.",
          "Aproveita a televisão que já tens: antes de comprar um stick, confirma se há uma app compatível na loja da televisão.",
          "Paga a licença das apps só no site oficial: as revendas de ativações cobram mais e não dão garantias.",
          "Desconfia de descontos que dependem de pagar hoje: um preço justo continua justo amanhã.",
        ] },
      { heading: "É mais barato do que a MEO, NOS ou Vodafone?", paragraphs: [
        "A comparação honesta tem um pormenor: os pacotes dos operadores incluem internet, e o IPTV precisa de internet para funcionar. Não substitui o teu contrato de internet, substitui a parte de televisão.",
        "Segundo o Comparamais, o pacote TV + Net + Voz + Móvel mais barato da NOS, Vodafone e MEO custa 49,49€ por mês, normalmente com fidelização de 24 meses. A 4gnews noticiou que, depois das promoções de 2026, pacotes como o MEO M4 passam a 62,99€ e o NOS 4+ a 65,99€ por mês a partir de janeiro de 2027.",
        `Quem já tem internet e só quer televisão paga, no máximo, ${formatEuro(priceFor(1, 12))} por ano com um plano IPTV de 1 ecrã. A poupança real depende de conseguires baixar o teu pacote para um tarifário só de internet, o que vale a pena confirmar com o teu operador antes de mudar.`,
      ], links: [link("IPTV vs TV tradicional", "/comparar/iptv-vs-tv-tradicional/")] },
      { heading: "Quando é que um preço é baixo demais?", paragraphs: [
        "Um plano anual muito abaixo de 30€, ou uma oferta \"vitalícia\", deve pôr-te de pé atrás. Manter servidores e apoio custa dinheiro todos os meses, e quem vende muito abaixo desse custo normalmente compensa de outra forma: servidores sobrelotados, ausência de apoio ou um serviço que desaparece.",
      ], links: [link("Sinais de alerta antes de pagar", "/blog/burlas-iptv/")] },
    ],
    faq: [
      { question: "Qual é o preço médio de IPTV em Portugal?", answer: "Cerca de 11€ por um mês e cerca de 46€ por 12 meses para 1 ecrã, segundo as tabelas publicadas por oito serviços em setembro de 2026." },
      { question: "O plano anual compensa?", answer: "Se o teste correu bem, sim. O custo mensal no plano anual é normalmente três vezes menor do que no plano de um mês." },
      { question: "O IPTV inclui internet?", answer: "Não. Precisas de uma ligação à internet em casa, que continuas a pagar ao teu operador." },
      { question: "As apps IPTV são pagas?", answer: "Algumas sim. Há apps gratuitas e apps com licença paga por equipamento, normalmente de poucos euros." },
      { question: "Quanto custa um segundo ecrã?", answer: "No mercado, entre 65% e 90% do preço do primeiro. Na IPTV Listas, o total para cada combinação está na página de preços." },
    ],
    sources: [
      { label: "Comparamais — simulador TV Net Voz", href: "https://www.comparamais.pt/tv-net-voz/" },
      { label: "4gnews — pacotes a 0€ na MEO e NOS", href: "https://4gnews.pt/pacotes-a-0-na-meo-e-nos-promocao-imperdivel-ou-ilusao-a-longo-prazo/" },
      { label: "IBO Player — site oficial", href: "https://iboplayer.io/en/" },
    ],
  },

  {
    slug: "/blog/teste-iptv-o-que-verificar/",
    title: "Teste IPTV de 24 horas: o que verificar antes de subscrever",
    seoTitle: "Teste IPTV: O Que Verificar em 24 Horas",
    description: "Um plano hora a hora para aproveitar um teste IPTV de 24 horas: estabilidade à noite, zapping, EPG, Wi-Fi ou cabo e resposta do apoio.",
    keyword: "teste iptv",
    publishedAt: "2026-09-23T08:00:00Z",
    updatedAt: "2026-09-24T08:00:00Z",
    image: "/images/blog/teste-iptv-o-que-verificar.webp",
    imageAlt: "Pessoa a tomar notas durante um direto na televisão, com um teste de velocidade aberto no portátil",
    summary: "Num teste IPTV de 24 horas verifica seis coisas: estabilidade entre as 20h e as 23h, tempo de mudança de canal, guia de programação nos canais que vês, imagem por Wi-Fi e por cabo, filmes e séries, e quanto tempo o apoio demora a responder. Anota o que vês: decides com dados, não com impressões.",
    sections: [
      { heading: "O que preparar antes de começar?", paragraphs: ["Cinco minutos de preparação evitam culpar o serviço por um problema da tua casa."],
        list: [
          "Faz um teste de velocidade na televisão ou perto dela, não no telemóvel ao lado do router.",
          "Instala a app pela loja oficial do equipamento que vais usar todos os dias.",
          "Se puderes, tem um cabo de rede à mão para comparar com o Wi-Fi.",
          "Escreve os canais e programas que mais vês: são esses que vais testar, não os 34.000.",
          "Fecha outras apps de vídeo e downloads grandes na casa durante os momentos de teste.",
        ] },
      { heading: "Como medir a velocidade da forma certa?", paragraphs: [
        "O número que interessa é a velocidade que chega à televisão, não a do contrato. Abre um teste de velocidade no navegador da televisão ou num telemóvel colado a ela, e repete à noite: a diferença entre manhã e noite mostra quanto a tua rede sofre nas horas de maior uso.",
        "Como referência, conta cerca de 10 Mbps estáveis para Full HD e 25 Mbps para 4K. Se a televisão recebe menos do que isso por Wi-Fi, qualquer serviço vai cortar, e a solução passa pela rede da casa.",
      ], links: [link("Velocidade de internet para IPTV", "/guias/velocidade-internet-iptv/")] },
      { heading: "Que canais deves escolher para o teste?", paragraphs: [
        "Escolhe cinco a dez canais que vês de facto: os generalistas que tens sempre ligados, um canal de notícias para ver à noite e os canais de que mais gostas. São esses que vais usar depois de pagar, não os milhares que nunca vais abrir.",
        "Junta um canal em alta qualidade, se a tua televisão for 4K, para confirmares se a rede da casa aguenta o débito mais exigente. Se esse canal cortar e os outros não, a limitação é de largura de banda, não do serviço.",
      ] },
      { heading: "Como distribuir o teste pelas 24 horas?", paragraphs: ["Não precisas de estar 24 horas à frente da televisão. Três momentos chegam:"],
        table: { head: ["Momento", "O que testar", "Quanto tempo"], rows: [
          ["Logo após receber os acessos", "Instalação, arranque da app, guia de programação", "15 minutos"],
          ["Noite (20h–23h)", "Um direto longo, zapping entre 10 canais, Wi-Fi vs cabo", "45 minutos"],
          ["Dia seguinte", "Filmes e séries, retomar onde paraste, pergunta ao apoio", "20 minutos"],
        ] } },
      { heading: "Que problemas são normais e quais não são?", paragraphs: ["Nem tudo o que parece falha é um mau sinal. Esta tabela ajuda a separar o normal do preocupante:"],
        table: { head: ["O que vês", "É normal?", "O que significa"], rows: [
          ["1 a 3 segundos a abrir um canal", "Sim", "Tempo de ligação ao servidor"],
          ["Primeira abertura da app lenta", "Sim", "A app está a descarregar a lista e o guia"],
          ["Guia vazio nos primeiros minutos", "Sim", "O EPG ainda está a carregar"],
          ["Cortes só por Wi-Fi", "Depende", "Problema provável da rede da casa"],
          ["Cortes por cabo, no mesmo canal, à mesma hora", "Não", "Limitação do serviço"],
          ["Imagem pixelizada durante minutos", "Não", "Débito insuficiente no servidor ou na rede"],
        ] } },
      { heading: "Que pontos deves anotar?", paragraphs: ["Usa esta lista e marca cada ponto como bom, aceitável ou mau. Copia-a para o telemóvel antes de começar:"],
        list: [
          "O canal abre em menos de 3 segundos?",
          "Houve cortes durante 30 minutos seguidos de um direto à noite?",
          "O guia mostra o programa certo à hora certa?",
          "A imagem mantém a qualidade em ecrã inteiro?",
          "Os filmes e séries abrem sem esperar muito?",
          "Consegues pausar e retomar um filme onde paraste?",
          "O apoio respondeu, e em quanto tempo?",
        ] },
      { heading: "Como testar filmes e séries?", paragraphs: [
        "O catálogo a pedido comporta-se de forma diferente dos canais em direto. Abre um filme recente e um antigo, avança e recua na barra de tempo e sai a meio para ver se a app retoma no mesmo ponto.",
        "Procura também uma série que conheças e confirma se os episódios estão pela ordem certa e com o áudio e legendas que precisas. São pormenores que só notas depois de pagar, se não os testares antes.",
      ] },
      { heading: "Como avaliar o apoio durante o teste?", paragraphs: [
        "Faz uma pergunta concreta sobre o teu equipamento, por exemplo como mudar o idioma do áudio ou como pôr um canal nos favoritos. Uma boa resposta é específica para o teu caso, não um texto copiado.",
        "Repara em três coisas: quanto tempo demorou, se resolveu a dúvida à primeira e se a pessoa percebeu o teu equipamento. Se fizeres a pergunta à noite, também ficas a saber se o horário anunciado é real.",
      ] },
      { heading: "Como registar o teste de forma simples?", paragraphs: ["Uma tabela como esta, preenchida em três momentos, chega para decidir:"],
        table: { head: ["Ponto", "Tarde", "Noite", "Dia seguinte"], rows: [
          ["Tempo a abrir um canal", "", "", ""],
          ["Cortes num direto de 30 minutos", "", "", ""],
          ["Guia de programação certo", "", "", ""],
          ["Filme retomado no ponto certo", "", "", ""],
          ["Tempo de resposta do apoio", "", "", ""],
        ] } },
      { heading: "Como interpretar os resultados?", paragraphs: [
        "Se os cortes só acontecem por Wi-Fi e desaparecem por cabo, o problema é a rede da casa, não o serviço. Um cabo, um repetidor bem colocado ou um sistema Mesh resolve.",
        "Se os cortes acontecem também por cabo, no mesmo canal e à mesma hora, o problema está no serviço. É exatamente isto que o teste serve para descobrir antes de pagares um plano longo.",
        "Se tudo correu bem mas tens dúvidas, escolhe um plano de 3 meses em vez de 12. Pagas um pouco mais por mês, mas confirmas a estabilidade durante mais tempo.",
      ], links: [link("Resolver buffering", "/suporte/buffering/")] },
      { heading: "O que acontece depois do teste na IPTV Listas?", paragraphs: [
        `O nosso teste é grátis e dá acesso ao serviço completo durante ${offer.trial.hours} horas, sem cartão e sem compromisso. Se o teste correr bem, escolhes o plano; se não, não pagas nada.`,
      ], links: [link("Pedir teste", "/teste-iptv/")] },
    ],
    faq: [
      { question: "24 horas chegam para testar IPTV?", answer: "Sim, desde que incluam uma noite entre as 20h e as 23h, quando os servidores têm mais utilizadores." },
      { question: "Devo testar por Wi-Fi ou por cabo?", answer: "Pelos dois, se puderes. Assim sabes se um corte vem do serviço ou da rede da tua casa." },
      { question: "Posso testar em vários equipamentos?", answer: "Testa no equipamento que vais usar mais. Um teste é normalmente para um equipamento." },
      { question: "O teste é igual ao serviço pago?", answer: "Deve ser. Um teste com menos canais ou qualidade inferior não te diz como vai ser o serviço que pagas." },
      { question: "O que faço se o teste correr mal?", answer: "Primeiro confirma por cabo. Se os cortes continuarem, não subscrevas: é esse o objetivo do teste." },
    ],
  },

  {
    slug: "/blog/iptv-varios-ecras/",
    title: "IPTV em vários ecrãs: quantos precisas e quanto custa",
    seoTitle: "IPTV em Vários Ecrãs: Quantos Precisas?",
    description: "A diferença entre equipamentos instalados e ecrãs em simultâneo, como contar os ecrãs da tua casa, a internet necessária e o preço para 1 a 4 ecrãs.",
    keyword: "iptv vários ecrãs",
    publishedAt: "2026-09-23T08:00:00Z",
    updatedAt: "2026-09-24T08:00:00Z",
    image: "/images/blog/iptv-varios-ecras.webp",
    imageAlt: "Família numa casa portuguesa a ver IPTV na televisão da sala, num tablet na cozinha e num telemóvel nas escadas",
    summary: "O número de ecrãs de um plano IPTV é o número de equipamentos que podem estar a ver ao mesmo tempo, não quantos podes instalar. Conta quantas pessoas vêem em simultâneo no momento mais ocupado da semana: esse é o número de ecrãs que precisas.",
    sections: [
      { heading: "Qual é a diferença entre instalar e ver em simultâneo?", paragraphs: [
        "Podes instalar a app na televisão da sala, na do quarto, no tablet e no telemóvel. Um plano de 2 ecrãs deixa dois desses equipamentos reproduzir ao mesmo tempo. Se um terceiro começar a ver, esse ecrã não reproduz enquanto os outros dois estiverem ligados.",
        "É como ter duas chaves para uma porta com dois lugares: qualquer pessoa da casa pode usar uma, mas só duas entram de cada vez.",
      ] },
      { heading: "Como contar os ecrãs de que precisas?", paragraphs: ["Pensa no momento mais ocupado da semana, não num dia normal:"],
        table: { head: ["Situação", "Ecrãs recomendados"], rows: [
          ["Uma pessoa ou casal que vê junto", "1"],
          ["Casal com horários ou gostos diferentes", "2"],
          ["Família com crianças ou adolescentes", "2 a 3"],
          ["Casa principal e casa de férias usadas ao mesmo tempo", "2"],
        ] } },
      { heading: "Como fica em três casas reais?", paragraphs: ["Três exemplos ajudam a perceber a lógica:"],
        list: [
          "Ana e Rui veem televisão juntos na sala quase todas as noites. Ao fim de semana, o Rui vê futebol no tablet enquanto a Ana vê uma série. Precisam de 2 ecrãs, porque o momento mais ocupado tem duas pessoas a ver coisas diferentes.",
          "A família Costa tem televisão na sala, no quarto dos pais e no quarto do filho, que também vê no telemóvel. À noite, raramente estão os três ecrãs ligados ao mesmo tempo, mas ao domingo acontece. Precisam de 3 ecrãs.",
          "O Pedro vive sozinho e tem a app na televisão, no portátil e no telemóvel. Nunca vê em dois ao mesmo tempo. Um ecrã chega, mesmo com três equipamentos instalados.",
        ] },
      { heading: "Que internet precisas para vários ecrãs?", paragraphs: [
        "A internet necessária soma-se ecrã a ecrã: cada ecrã em Full HD pede à volta de 10 Mbps estáveis e cada ecrã em 4K cerca de 25 Mbps. Três ecrãs em Full HD precisam, assim, de uns 30 Mbps livres, além do que o resto da casa usa ao mesmo tempo.",
        "Na maioria das casas com fibra isto não é problema. O ponto fraco costuma ser o Wi-Fi nas divisões mais afastadas do router.",
      ], links: [link("Velocidade de internet para IPTV", "/guias/velocidade-internet-iptv/")] },
      { heading: "Como preparar o Wi-Fi para vários ecrãs?", paragraphs: ["Quatro medidas resolvem a maior parte dos problemas numa casa com vários ecrãs:"],
        list: [
          "Liga por cabo a televisão que mais usas. Liberta o Wi-Fi para os restantes equipamentos.",
          "Usa a rede de 5 GHz nas divisões próximas do router: é mais rápida, embora chegue menos longe.",
          "Numa casa grande ou com paredes grossas, um sistema Mesh distribui o sinal melhor do que um repetidor simples.",
          "Coloca o router num ponto central e alto, longe de armários metálicos e do micro-ondas.",
        ] },
      { heading: "Como gerir os ecrãs no dia a dia?", paragraphs: [
        "Uma app deixada em pausa numa televisão pode continuar a ocupar um ecrã. Habitua a casa a sair da app, e não só a desligar o ecrã com o comando, quando deixa de ver.",
        "Se um ecrã não reproduz, verifica primeiro se há outro equipamento com a app aberta: um tablet esquecido no quarto é a causa mais comum. Só depois vale a pena suspeitar da rede ou do serviço.",
      ] },
      { heading: "E na casa de férias ou em viagem?", paragraphs: [
        "O plano não está preso a uma morada: podes usar os acessos na casa de férias ou no hotel, desde que a internet do local aguente o vídeo. O limite continua a ser o número de ecrãs em simultâneo, contando os de todas as casas.",
        "Se a família fica numa casa e tu estás noutra ao mesmo tempo, contas os ecrãs das duas. Antes de viajar, testa a app no equipamento que vais levar, com a internet do destino se possível.",
      ] },
      { heading: "Que erros se cometem ao escolher o número de ecrãs?", paragraphs: ["Estes enganos repetem-se e custam dinheiro ou paciência:"],
        list: [
          "Contar equipamentos em vez de pessoas: ter cinco equipamentos não significa precisar de cinco ecrãs.",
          "Pensar num dia normal e esquecer o domingo à noite ou as férias escolares, quando todos estão em casa.",
          "Escolher mais ecrãs “por segurança” sem olhar para a internet: três ecrãs em 4K exigem uma ligação à altura.",
          "Esquecer os telemóveis dos filhos, que contam como ecrã enquanto estão a reproduzir.",
        ] },
      { heading: "Como saber se o plano atual chega?", paragraphs: [
        "Durante uma ou duas semanas, repara nas vezes em que alguém não consegue ver porque os ecrãs estão ocupados. Se acontece uma vez por mês, aguenta-se com alguma organização. Se acontece todas as semanas, vale a pena passar para mais um ecrã na próxima renovação.",
        "O inverso também conta: se nunca tens todos os ecrãs ocupados ao mesmo tempo, podes descer um nível na renovação e poupar sem perder nada.",
      ] },
      { heading: "Quanto custa cada ecrã adicional?", paragraphs: ["Quanto mais ecrãs, menor o custo por ecrã. No plano anual da IPTV Listas fica assim:"],
        table: { head: ["Plano de 12 meses", "Total", "Por mês", "Por ecrã e por mês"], rows: offer.screens.map((s) => [
          s === 1 ? "1 ecrã" : `${s} ecrãs`, formatEuro(priceFor(s, 12)), formatEuro(priceFor(s, 12) / 12), formatEuro(priceFor(s, 12) / 12 / s),
        ]) }, links: [link("Ver todas as durações", "/precos/")] },
    ],
    faq: [
      { question: "Posso instalar em mais equipamentos do que os ecrãs do plano?", answer: "Sim. O limite é de equipamentos a ver ao mesmo tempo, não de equipamentos instalados." },
      { question: "O que acontece se ligar um ecrã a mais?", answer: "Esse ecrã não reproduz enquanto os outros estiverem a ver. Desliga um deles ou passa para um plano com mais ecrãs." },
      { question: "Posso aumentar os ecrãs mais tarde?", answer: "Sim, na renovação escolhes outro número de ecrãs." },
      { question: "Uma app em pausa conta como ecrã?", answer: "Pode contar. Sai da app quando deixas de ver para libertar o ecrã." },
      { question: "Posso usar um ecrã na casa de férias?", answer: "Sim, desde que o total de ecrãs a ver ao mesmo tempo, em todas as casas, não ultrapasse o do plano." },
    ],
  },

  {
    slug: "/blog/melhor-app-iptv-smart-tv/",
    title: "Melhor app IPTV para Smart TV Samsung e LG em 2026",
    seoTitle: "Melhor App IPTV para Samsung e LG em 2026",
    description: "Que apps IPTV funcionam em Samsung (Tizen), LG (webOS) e Android TV em 2026, quanto custam, e o que fazer se a app que queres não estiver na loja.",
    keyword: "melhor app iptv smart tv",
    publishedAt: "2026-09-23T08:00:00Z",
    updatedAt: "2026-09-24T08:00:00Z",
    image: "/images/blog/melhor-app-iptv-smart-tv.webp",
    imageAlt: "Mão a apontar o comando a uma Smart TV com a grelha de aplicações aberta no ecrã",
    summary: "Em Samsung (Tizen) e LG (webOS), as escolhas mais seguras são apps da loja oficial da televisão como o IBO Player e o Smart IPTV. A disponibilidade do IPTV Smarters Pro muda consoante o modelo e a região, e o TiviMate só existe em Android TV e Fire TV. Se a app que queres não estiver na loja, um stick ou box resolve.",
    sections: [
      { heading: "Que sistema tem a tua televisão?", paragraphs: [
        "A app certa depende do sistema, não da marca do painel. Samsung usa Tizen, LG usa webOS, e Sony, Philips, TCL e Hisense usam muitas vezes Android TV ou Google TV.",
        "Encontras o sistema no menu de definições, normalmente em \"Suporte\", \"Sobre\" ou \"Informação do produto\". Anota também a versão do software: algumas apps exigem versões recentes e não aparecem na loja de televisões mais antigas.",
      ] },
      { heading: "Que apps funcionam em cada sistema?", paragraphs: ["Resumo das apps mais usadas em Portugal:"],
        table: { head: ["App", "Samsung / LG", "Android TV / Fire TV", "Custo", "Ponto forte"], rows: [
          ["IBO Player", "Sim, na loja oficial", "Sim", "7 dias de teste, depois licença de cerca de 7€–10€ por equipamento", "Interface pensada para o comando"],
          ["Smart IPTV", "Sim, na loja oficial", "Varia", "Ativação paga, única, por televisão", "Leve e simples"],
          ["IPTV Smarters Pro", "Depende do modelo e da região", "Sim", "Gratuita, com versão paga", "Igual em todos os equipamentos"],
          ["TiviMate", "Não existe", "Sim", "Gratuita, com Premium pago", "Melhor guia de programação"],
        ] } },
      { heading: "Qual escolher conforme o teu perfil?", paragraphs: ["Não há uma app melhor para toda a gente. Estas são as combinações que funcionam melhor:"],
        list: [
          "Queres algo simples numa Samsung ou LG: IBO Player. A licença paga-se uma vez por equipamento e a navegação com o comando é das mais fáceis.",
          "Tens uma televisão mais antiga ou lenta: Smart IPTV. É leve, mas o aspeto é básico e a gestão da lista faz-se num site, não na televisão.",
          "Usas a mesma app no telemóvel, tablet e televisão: IPTV Smarters Pro, se estiver na loja do teu modelo. O aspeto é igual em todos os equipamentos.",
          "Dás muito valor ao guia de programação e tens Android TV, Google TV ou um stick: TiviMate.",
        ] },
      { heading: "Xtream ou M3U: como deves entrar na app?", paragraphs: [
        "A maioria das apps aceita duas formas de introduzir os acessos. Com Xtream, escreves o servidor, o utilizador e a palavra-passe; a app organiza sozinha os canais, filmes, séries e guia de programação. Com M3U, colas um único link que contém a lista.",
        "Sempre que a app aceitar, escolhe Xtream. Carrega mais depressa, separa melhor as categorias e costuma trazer o guia de programação sem configuração extra.",
      ], links: [link("M3U explicado", "/guias/m3u/"), link("Xtream Codes explicado", "/guias/xtream-codes/")] },
      { heading: "Porque é que algumas apps pedem o endereço MAC?", paragraphs: [
        "Apps como o IBO Player e o Smart IPTV não pedem os acessos na televisão. Mostram um endereço MAC ou código do equipamento, e és tu que introduzes a lista no site oficial da app, associada a esse código.",
        "Isto evita escrever links longos com o comando, mas tem uma consequência: a licença fica presa àquela televisão. Se mudares de televisão, precisas de nova ativação.",
      ] },
      { heading: "Como instalar uma app IPTV na Smart TV?", paragraphs: ["Os passos são quase iguais em qualquer marca:"],
        list: [
          "Liga a televisão à internet, de preferência por cabo.",
          "Abre a loja oficial: Samsung Apps ou LG Content Store.",
          "Pesquisa o nome exato da app e confirma o programador antes de instalar.",
          "Abre a app e anota o endereço MAC ou código que aparece no ecrã, se pedir.",
          "Introduz os teus acessos (Xtream ou M3U) na app ou no site oficial da app.",
          "Abre o guia de programação e espera que carregue antes de avaliar os canais.",
        ], ordered: true, links: [link("Guia Samsung", "/dispositivos/iptv-samsung/"), link("Guia LG", "/dispositivos/iptv-lg/")] },
      { heading: "Como pôr o guia de programação a funcionar?", paragraphs: [
        "Com acessos Xtream, a maioria das apps carrega o guia de programação sozinha. Na primeira abertura pode demorar alguns minutos: deixa a app aberta no guia até aparecerem os programas.",
        "Se as horas aparecerem desfasadas, procura nas definições da app a opção de fuso horário ou de desvio do EPG e ajusta em horas inteiras até coincidir. Se o guia ficar vazio num canal específico, esse canal pode não ter guia disponível, o que é diferente de uma falha geral.",
      ], links: [link("O que é o EPG", "/guias/epg/")] },
      { heading: "Vale a pena pagar a licença de uma app?", paragraphs: [
        "Uma licença de poucos euros por equipamento compensa se a app for a que funciona melhor na tua televisão e se a vais usar durante meses. Paga só depois de usares o período de teste da própria app com os teus acessos.",
        "Se tens várias televisões, soma o custo das licenças antes de escolher: em três televisões, uma app paga por equipamento pode custar mais do que um stick com uma app gratuita.",
      ] },
      { heading: "Que problemas aparecem mais na Smart TV?", paragraphs: ["A maior parte resolve-se sem trocar de app:"],
        table: { head: ["Problema", "Causa mais comum", "O que fazer"], rows: [
          ["A app fecha sozinha", "Pouca memória livre na televisão", "Fecha outras apps e reinicia a televisão da tomada"],
          ["A lista não carrega", "Acessos mal escritos ou lista associada ao MAC errado", "Confirma letra a letra e o código no site da app"],
          ["Guia com horas erradas", "Fuso horário da app ou da televisão", "Ajusta o fuso nas definições da app"],
          ["Som sem imagem", "Formato de vídeo não suportado pelo leitor", "Muda o leitor interno nas definições da app"],
          ["Canais lentos a abrir", "Wi-Fi fraco", "Testa por cabo antes de mudar outras definições"],
        ] }, links: [link("Problemas na Smart TV", "/suporte/problemas-smart-tv/")] },
      { heading: "Que cuidados deves ter?", paragraphs: ["Há muitos sites a vender ativações de apps em nome delas. Paga a licença apenas no site oficial da app, nunca a terceiros que te contactam por chat.",
        "Nunca instales ficheiros enviados por desconhecidos nem ativos modos de programador a pedido de alguém. Se a app que precisas não existe na loja da tua televisão, a solução segura é um stick ou box externo."],
        links: [link("Stick, box ou Smart TV?", "/blog/firestick-box-ou-smart-tv/")] },
    ],
    faq: [
      { question: "Qual é a melhor app IPTV para Samsung?", answer: "Uma que esteja na loja oficial do teu modelo. O IBO Player e o Smart IPTV costumam estar disponíveis; o IPTV Smarters Pro depende do modelo e da região." },
      { question: "O TiviMate funciona em LG ou Samsung?", answer: "Não. O TiviMate só existe para Android TV, Google TV e Fire TV. Numa Samsung ou LG, usa-o através de um stick ou box." },
      { question: "A app inclui canais?", answer: "Não. A app é só o leitor; os canais vêm da tua subscrição." },
      { question: "Se mudar de televisão perco a licença da app?", answer: "Nas apps ativadas por endereço MAC, a licença fica associada à televisão antiga. Precisas de nova ativação na nova televisão." },
      { question: "Xtream ou M3U, qual é melhor?", answer: "Xtream, sempre que a app aceitar: organiza melhor as categorias e traz o guia de programação." },
    ],
    sources: [
      { label: "IBO Player — site oficial", href: "https://iboplayer.io/en/" },
    ],
  },

  {
    slug: "/blog/firestick-box-ou-smart-tv/",
    title: "Fire TV Stick, box Android ou Smart TV: o que usar para IPTV",
    seoTitle: "Fire TV Stick, Box Android ou Smart TV?",
    description: "Quando basta a app da Smart TV, quando compensa um Fire TV Stick ou uma box Android TV, quanto custam e o detalhe do Vega OS que deves confirmar antes de comprar.",
    keyword: "firestick ou box android iptv",
    publishedAt: "2026-09-23T08:00:00Z",
    updatedAt: "2026-09-24T08:00:00Z",
    image: "/images/blog/firestick-box-ou-smart-tv.webp",
    imageAlt: "Stick de streaming, box de televisão com cabo de rede, dois comandos e um cabo HDMI sobre uma superfície escura",
    summary: "Começa pela Smart TV: se tem uma app IPTV compatível na loja oficial, não gastas nada. Compra um stick ou box se a televisão não tem app, é antiga ou é lenta. Antes de comprar um Fire TV Stick, confirma o sistema: os modelos com Vega OS, como o 4K Select, só instalam apps da loja da Amazon.",
    sections: [
      { heading: "Quando basta a app da Smart TV?", paragraphs: [
        "Se a tua televisão tem menos de cinco anos e encontras uma app IPTV compatível na loja oficial, começa por aí. Não gastas nada, usas um só comando e não ocupas uma porta HDMI.",
        "O limite aparece em televisões mais antigas: menos memória, apps que fecham sozinhas, lojas com menos opções e deixam de receber atualizações. Nesses casos, um equipamento externo de 30€ ou 40€ muda completamente a experiência.",
      ], links: [link("Apps para Smart TV", "/blog/melhor-app-iptv-smart-tv/")] },
      { heading: "Como se comparam as três opções?", paragraphs: ["Resumo para decidir:"],
        table: { head: ["Opção", "Custo aproximado", "Apps disponíveis", "Para quem"], rows: [
          ["App na Smart TV", "0€", "As da loja da televisão", "Televisões recentes com app compatível"],
          ["Fire TV Stick", "Cerca de 30€ a 80€, com promoções frequentes", "Loja da Amazon; mais apps nos modelos Fire OS", "Quem quer simplicidade e preço baixo"],
          ["Box Android TV / Google TV", "Cerca de 40€ a 150€", "Google Play completo", "Quem quer TiviMate, cabo de rede e mais desempenho"],
        ] } },
      { heading: "O que é o Vega OS e porque importa?", paragraphs: [
        "A Amazon lançou o Fire TV Stick 4K Select com um sistema novo, o Vega OS, em vez do Fire OS baseado em Android. Nestes modelos só instalas apps disponíveis na loja da Amazon.",
        "Se a app que queres usar não estiver lá, o stick não serve para ti. Confirma o sistema na página do produto antes de comprar, sobretudo em promoções, onde os modelos aparecem lado a lado com preços parecidos.",
      ] },
      { heading: "Que especificações importam num stick ou box?", paragraphs: ["Não precisas do modelo mais caro, mas há quatro pontos que fazem diferença no IPTV:"],
        list: [
          "Memória RAM: 2 GB ou mais. Com menos, as apps demoram a abrir e o guia de programação fica lento.",
          "Wi-Fi 5 ou Wi-Fi 6: aguentam melhor o vídeo contínuo do que as versões antigas.",
          "Porta de rede (Ethernet): as boxes costumam ter; nos sticks precisas de um adaptador.",
          "Suporte HEVC (H.265) e 4K com HDR, se a tua televisão for 4K. Sem isso, alguns canais em alta qualidade não abrem.",
        ] },
      { heading: "Wi-Fi ou cabo: como ligar cada equipamento?", paragraphs: [
        "O cabo de rede é sempre mais estável do que o Wi-Fi, sobretudo à noite. As boxes Android TV trazem normalmente porta Ethernet, por isso ligar por cabo é imediato.",
        "Nos Fire TV Stick, a solução é um adaptador Ethernet compatível, que liga à alimentação do stick. Se o router está longe da televisão, um adaptador de rede elétrica (PLC) leva o cabo até lá sem obras.",
      ], links: [link("Velocidade de internet para IPTV", "/guias/velocidade-internet-iptv/")] },
      { heading: "E se a televisão for antiga ou não for Smart TV?", paragraphs: [
        "Qualquer televisão com entrada HDMI pode receber IPTV através de um stick ou box. É a forma mais barata de dar uma segunda vida a uma televisão que já não recebe atualizações.",
        "Se a televisão não tem HDMI, precisas de um conversor HDMI para vídeo analógico. Funciona, mas a imagem perde qualidade, e muitas vezes compensa mais usar outra televisão.",
      ] },
      { heading: "Como instalar a app IPTV num stick ou box?", paragraphs: ["O processo é curto e igual na maioria dos equipamentos:"],
        list: [
          "Liga o equipamento à porta HDMI e à corrente, de preferência com o transformador original.",
          "Liga-o à internet, por cabo se puderes, e instala as atualizações de sistema propostas.",
          "Abre a loja do equipamento (Amazon Appstore ou Google Play) e pesquisa a app pelo nome exato.",
          "Instala, abre a app e introduz os acessos Xtream ou o link M3U.",
          "Espera que o guia de programação carregue antes de avaliar os canais.",
        ], ordered: true },
      { heading: "Como usar um só comando?", paragraphs: [
        "A maioria das televisões e equipamentos recentes suporta HDMI-CEC, que a Samsung chama Anynet+ e a LG chama SimpLink. Com a função ativa, o comando do stick liga a televisão e controla o volume, e a televisão muda sozinha para a entrada certa.",
        "Ativa a função nas definições da televisão e nas do stick ou box. Se o volume não responder, procura nas definições do equipamento a opção de controlo de equipamentos por infravermelhos ou CEC.",
      ] },
      { heading: "Qual escolher, em quatro perguntas?", paragraphs: ["Responde por ordem e pára na primeira resposta afirmativa:"],
        list: [
          "A tua Smart TV tem uma app IPTV compatível na loja oficial? Usa a televisão.",
          "Queres a opção mais barata e a app está na loja da Amazon? Fire TV Stick.",
          "Queres TiviMate ou ligar por cabo de rede sem adaptadores? Box Android TV ou Google TV.",
          "A televisão não tem HDMI? Precisas de um conversor ou de outra televisão.",
        ], ordered: true, links: [link("Guia Fire TV Stick", "/dispositivos/iptv-firestick/"), link("Guia Android TV", "/dispositivos/iptv-android-tv/")] },
      { heading: "Que erros evitar na compra?", paragraphs: ["Estes enganos custam dinheiro e tempo:"],
        list: [
          "Comprar uma box genérica sem certificação Google: muitas não recebem atualizações e algumas trazem software duvidoso.",
          "Escolher pelo preço mais baixo sem confirmar o sistema operativo do Fire TV Stick.",
          "Comprar um stick 4K para uma televisão Full HD, a pensar que melhora a imagem. Não melhora.",
          "Esquecer que o stick ocupa uma porta HDMI e precisa de tomada ou de uma porta USB com energia suficiente.",
        ] },
    ],
    faq: [
      { question: "Fire TV Stick ou box Android: qual é melhor para IPTV?", answer: "O Fire TV Stick é mais barato e simples. Uma box Android TV dá acesso ao Google Play completo, incluindo o TiviMate, e costuma ter porta de rede." },
      { question: "Preciso de comprar um stick se tenho Smart TV?", answer: "Só se a tua televisão não tiver uma app compatível ou se for lenta a abrir canais." },
      { question: "Todos os Fire TV Stick instalam as mesmas apps?", answer: "Não. Os modelos com Vega OS, como o 4K Select, só instalam apps da loja da Amazon." },
      { question: "Posso ligar um Fire TV Stick por cabo?", answer: "Sim, com um adaptador Ethernet compatível com o teu modelo." },
      { question: "Um stick 4K melhora a imagem numa televisão Full HD?", answer: "Não. A imagem fica limitada pela resolução da televisão." },
    ],
    sources: [
      { label: "4gnews — Fire TV Stick 4K Select e Vega OS", href: "https://4gnews.pt/amazon-surpreende-com-fire-tv-stick-4k-select-a-preco-irresistivel/" },
    ],
  },

  {
    slug: "/blog/burlas-iptv/",
    title: "Burlas IPTV: 9 sinais de alerta antes de pagar",
    seoTitle: "Burlas IPTV: 9 Sinais de Alerta Antes de Pagar",
    description: "Os 9 sinais que indicam uma burla ou um serviço IPTV que vai desaparecer, como pagar com mais segurança e o que fazer se já pagaste.",
    keyword: "burla iptv",
    publishedAt: "2026-09-23T08:00:00Z",
    updatedAt: "2026-09-24T08:00:00Z",
    image: "/images/blog/burlas-iptv.webp",
    imageAlt: "Mãos a segurar um telemóvel com uma conversa e um aviso de alerta, com um cartão bancário e um comando na mesa",
    summary: "Desconfia de um serviço IPTV que não publica preços nem condições, promete funcionamento perfeito, chama grátis a algo que cobra, vende planos vitalícios, pede para instalar ficheiros ou desativar proteções, ou pressiona para pagar já. Antes de pagar, confirma por escrito o plano, o total e as condições.",
    sections: [
      { heading: "Quais são os 9 sinais de alerta?", paragraphs: ["Um sinal isolado pode ter explicação. Dois ou mais juntos são motivo para parar."],
        list: [
          "Preços só por mensagem privada: se o preço não está publicado, pode mudar consoante quem pergunta e é difícil provar o que foi combinado.",
          "Nenhuma página de condições: sem termos nem política de reembolso escritos, não há nada a que te agarrar se algo correr mal.",
          "Promessas absolutas: \"zero cortes\" ou \"100% estável\" são impossíveis em qualquer serviço de streaming, incluindo os das grandes plataformas.",
          "\"Grátis\" que afinal se paga: se o teste anunciado como grátis pede pagamento, a primeira informação que te deram já era falsa.",
          "Planos vitalícios: um serviço que paga servidores todos os meses não consegue garantir funcionamento \"para sempre\" por um pagamento único.",
          "Ficheiros enviados por chat: um serviço sério indica apps das lojas oficiais do teu equipamento.",
          "Pedidos para desativar proteções do equipamento ou ativar modos de programador: abrem a porta a software que não controlas.",
          "Pressão para pagar já: \"só hoje\" ou \"últimas vagas\" servem para não teres tempo de pensar nem de comparar.",
          "Pedido de códigos de confirmação do banco: nenhum vendedor precisa dos códigos que o teu banco te envia por SMS ou na app.",
        ], ordered: true },
      { heading: "Que burlas aparecem mais no WhatsApp?", paragraphs: ["Como muitos serviços funcionam por WhatsApp, os burlões também. Estes padrões repetem-se:"],
        list: [
          "Falso apoio técnico: alguém de um número desconhecido diz ser do teu fornecedor e pede um código \"para reativar a conta\". Esse código é quase sempre de confirmação bancária ou de acesso ao teu WhatsApp.",
          "Mudança de dados de pagamento: uma mensagem avisa que o fornecedor \"mudou de conta\" e pede o próximo pagamento para outro destino.",
          "Renovação com desconto: uma oferta de renovação muito barata chega de um número que não é o habitual.",
          "Pedido de acesso remoto: pedem para instalares uma app de controlo remoto \"para configurar a televisão\".",
        ] },
      { heading: "O que é normal pedirem-te e o que não é?", paragraphs: ["Esta tabela ajuda a decidir em segundos:"],
        table: { head: ["Pedido", "Normal?", "Porquê"], rows: [
          ["Marca e modelo do teu equipamento", "Sim", "Serve para indicar a app certa"],
          ["O teu nome para identificar a encomenda", "Sim", "Organização do pedido"],
          ["Plano, número de ecrãs e total por escrito", "Sim, e deves exigir", "É a tua prova do que foi combinado"],
          ["Códigos recebidos por SMS", "Não", "Dão acesso ao banco ou às tuas contas"],
          ["Fotografia do cartão bancário", "Não", "Permite usar o cartão sem ti"],
          ["Acesso remoto ao equipamento", "Não", "Dá controlo total a terceiros"],
        ] } },
      { heading: "Como verificar um vendedor antes de pagar?", paragraphs: [
        "Pesquisa o nome do serviço seguido de \"burla\" ou \"opiniões\" e vê se aparecem queixas recentes. Confirma se o site tem preços, termos e política de reembolso publicados, e se os valores do site coincidem com os que te dão por mensagem.",
        "Faz uma pergunta técnica antes de pagar. Um vendedor sério responde de forma concreta; quem só quer receber costuma responder com pressa e pedir o pagamento de seguida.",
      ] },
      { heading: "Porque é que tantos serviços desaparecem de um dia para o outro?", paragraphs: [
        "Muitos vendedores não gerem servidores próprios: revendem acessos de terceiros sob uma marca criada em poucos dias. Quando o fornecedor por trás falha ou deixa de pagar, o serviço pára para todos os clientes, e o vendedor muitas vezes deixa simplesmente de responder.",
        "Por isso, um plano longo muito barato de alguém sem site, sem condições e sem historial é um risco maior do que parece: se o serviço desaparecer ao fim de dois meses, o “desconto” do plano anual transforma-se em perda.",
      ] },
      { heading: "Que verificação podes fazer em 60 segundos?", paragraphs: ["Antes de pagar, responde a estas perguntas. Se alguma resposta for “não”, pára e pergunta:"],
        list: [
          "Tenho o preço total e o plano por escrito?",
          "Há termos e política de reembolso publicados?",
          "O número que me escreve é o mesmo de sempre?",
          "Fiz ou posso fazer um teste no meu equipamento?",
          "Ninguém me pediu códigos, fotos de cartões ou acesso remoto?",
        ] },
      { heading: "Como pagar com mais segurança?", paragraphs: ["Antes de enviares dinheiro:"],
        list: [
          "Confirma por escrito o plano, o número de ecrãs, o total e quando começa o serviço.",
          "Guarda a conversa e o comprovativo de pagamento.",
          "Usa um meio de pagamento que deixe registo.",
          "Nunca partilhes códigos de confirmação, palavras-passe do banco ou acesso remoto ao teu equipamento.",
          "Paga sempre para o mesmo destino. Se te pedirem para mudar, confirma pelo contacto que já conhecias.",
        ] },
      { heading: "E se já pagaste a um serviço suspeito?", paragraphs: [
        "Contacta o teu banco de imediato: quanto mais depressa, maior a hipótese de travar ou contestar o pagamento. Se partilhaste alguma palavra-passe ou código, muda as palavras-passe e ativa a verificação em dois passos no WhatsApp.",
        "Guarda todas as provas, denuncia o número na própria app de mensagens e apresenta queixa às autoridades.",
      ] },
      { heading: "Como trabalhamos na IPTV Listas?", paragraphs: [
        `Os preços estão publicados, a mensagem de encomenda leva o plano e o total escritos, e a política de reembolso diz claramente que não há reembolso depois da ativação. Por isso existe um ${trial}, sem pagamento.`,
        "Nunca te pedimos códigos do banco, fotografias de cartões nem acesso remoto ao teu equipamento. Se alguém o fizer em nosso nome, não é a IPTV Listas.",
      ], links: [link("Ver preços", "/precos/"), link("Política de reembolso", "/politica-reembolso/"), link("Teste grátis 24h", "/teste-iptv/")] },
    ],
    faq: [
      { question: "Como sei se um serviço IPTV é de confiança?", answer: "Procura preços e condições publicados, um teste real no teu equipamento e apoio que responde. Desconfia de promessas absolutas e de pressão para pagar." },
      { question: "Os planos IPTV vitalícios são seguros?", answer: "São um sinal de alerta. Um serviço com custos mensais de servidores não consegue garantir funcionamento para sempre." },
      { question: "Devo dar códigos do banco a um vendedor?", answer: "Nunca. Nenhum vendedor precisa dos códigos de confirmação que o teu banco envia." },
      { question: "Recebi uma mensagem do 'apoio' de outro número. O que faço?", answer: "Não respondas nem envies códigos. Confirma pelo contacto que já usavas com o teu fornecedor." },
      { question: "O que faço primeiro se fui burlado?", answer: "Contacta o banco de imediato, muda palavras-passe partilhadas e guarda as provas para apresentar queixa." },
    ],
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((a) => a.slug === slug);
}
