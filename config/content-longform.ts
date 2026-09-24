import type { ContentSection, FAQEntry } from "@/config/content";

export type LongformContent = {
  sections: ContentSection[];
  faq: FAQEntry[];
};

const link = (label: string, href: string) => ({ label, href });

export const longformContent: Record<string, LongformContent> = {
  "/suporte/iptv-nao-funciona/": {
    sections: [
      { heading: "Começa pelo sintoma que estás a ver", paragraphs: ["Quando o IPTV deixa de funcionar, começa por descrever exatamente o sintoma: a aplicação não abre, a lista não aparece, um canal não inicia ou a reprodução interrompe-se.", "O mesmo resultado pode ter causas diferentes. Separar o sintoma evita reinstalações e alterações aleatórias."], links: [link("Centro de suporte", "/suporte/"), link("Problemas de aplicação", "/suporte/problemas-app/")] },
      { heading: "Verificações por camadas", paragraphs: ["Confirma primeiro a ligação de rede e o comportamento de outros serviços no mesmo dispositivo. Depois verifica a aplicação e, por fim, os dados de configuração. Se o problema ocorrer apenas num dispositivo, essa pista também é importante.", "Mantém uma alteração de cada vez e regista o resultado. Isso torna o diagnóstico mais curto e repetível."], links: [link("Velocidade da Internet", "/guias/velocidade-internet-iptv/"), link("Buffering", "/suporte/buffering/")] },
      { heading: "Quando pedir ajuda", paragraphs: ["Se as verificações básicas não resolverem o problema, envia pelo canal privado apenas o contexto necessário para descrever o caso. Nunca publiques credenciais, URLs pessoais ou outros dados sensíveis.", "Fala connosco pelo WhatsApp, 24/7, e continuamos o diagnóstico contigo."] }
    ],
    faq: [
      { question: "O que devo testar primeiro?", answer: "Identifica o sintoma e verifica rede, aplicação, dispositivo e configuração separadamente." },
      { question: "Devo reinstalar tudo?", answer: "Não como primeira medida. Diagnostica primeiro para não perder pistas sobre a causa." }
    ]
  },

  "/suporte/buffering/": {
    sections: [
      { heading: "Buffering é um sintoma, não uma causa", paragraphs: ["Buffering pode aparecer por razões relacionadas com estabilidade da rede, congestionamento, aplicação, dispositivo ou outra etapa da reprodução. O primeiro objetivo é descobrir onde o comportamento muda.", "Evita concluir que a velocidade nominal da ligação explica automaticamente o problema."], links: [link("Guia de buffering", "/guias/iptv-buffering/"), link("Velocidade da Internet", "/guias/velocidade-internet-iptv/")] },
      { heading: "Faz testes controlados", paragraphs: ["Compara horários, dispositivos ou condições de rede quando possível. Se um vídeo funcionar noutro serviço na mesma rede, isso fornece contexto, mas não elimina todas as outras causas.", "Muda uma variável de cada vez e anota o resultado para não criar um ciclo de tentativas contraditórias."], links: [link("Dispositivos", "/dispositivos/"), link("Problemas Firestick", "/suporte/problemas-firestick/")] },
      { heading: "Quando escalar o problema", paragraphs: ["Se o buffering persistir depois das verificações básicas, prepara uma descrição do dispositivo, aplicação, horário e sintoma. Essa informação é mais útil do que uma lista longa de alterações feitas sem registo."] }
    ],
    faq: [
      { question: "Buffering significa Internet lenta?", answer: "Não necessariamente. A estabilidade, congestionamento, aplicação e dispositivo também podem influenciar a reprodução." },
      { question: "O que devo fazer primeiro?", answer: "Compara o comportamento da rede e testa uma variável de cada vez." }
    ]
  },

  "/suporte/canais-nao-carregam/": {
    sections: [
      { heading: "Descobre se o problema é geral ou isolado", paragraphs: ["Quando um canal não carrega, verifica se o problema acontece apenas nesse canal ou em vários. Essa diferença ajuda a separar um caso isolado de uma falha mais ampla.", "Também observa se a lista aparece corretamente antes de concluir que existe um problema de acesso."], links: [link("Suporte", "/suporte/"), link("IPTV não funciona", "/suporte/iptv-nao-funciona/")] },
      { heading: "Verifica aplicação, fonte e rede", paragraphs: ["Se a aplicação abre e a lista aparece, testa outras entradas disponíveis. Se várias falharem, verifica rede e configuração. Se apenas uma falhar, regista esse comportamento antes de alterar definições.", "Não publiques dados de acesso para demonstrar o problema."], links: [link("Problemas de app", "/suporte/problemas-app/") ] },
      { heading: "Próximo passo", paragraphs: ["Depois de identificar o padrão, segue o guia específico ou contacta o suporte com o sintoma exato, o dispositivo e a aplicação utilizados."] }
    ],
    faq: [
      { question: "Devo testar outros canais?", answer: "Sim. Comparar diferentes entradas ajuda a distinguir um problema isolado de uma falha mais ampla." },
      { question: "Posso enviar a minha password ao suporte público?", answer: "Não. Mantém credenciais e URLs pessoais privados." }
    ]
  },

  "/suporte/epg-nao-funciona/": {
    sections: [
      { heading: "EPG pode falhar sem impedir a reprodução", paragraphs: ["O EPG é uma camada de informação de programação. Uma falha no guia não significa automaticamente que os streams também estejam indisponíveis.", "Começa por confirmar se o problema está apenas no EPG ou se a reprodução falha em paralelo."], links: [link("Guia EPG", "/guias/epg/")] },
      { heading: "Verifica configuração e correspondência", paragraphs: ["Confirma a configuração usada pela aplicação e verifica se a fonte de programação corresponde aos identificadores usados pelos canais. A forma de configurar pode variar entre aplicações.", "Atualiza ou reaplica a configuração apenas depois de identificar qual etapa está a falhar."] },
      { heading: "Escalação", paragraphs: ["Se o guia continuar vazio ou desalinhado, regista a aplicação, dispositivo, sintoma e momento da falha. Isso permite distinguir um problema de dados de um problema geral de reprodução."] }
    ],
    faq: [
      { question: "EPG e canais são a mesma coisa?", answer: "Não. O EPG é informação de programação; a reprodução dos canais é uma camada diferente." },
      { question: "O que devo verificar primeiro?", answer: "Confirma a configuração do EPG e se o problema afeta apenas a programação ou também a reprodução." }
    ]
  },

  "/suporte/erro-credenciais/": {
    sections: [
      { heading: "Confirma o tipo de erro", paragraphs: ["Quando aparecem erros de credenciais, observa se o problema é uma mensagem de login, dados inválidos, servidor incorreto ou outro campo. Um erro específico ajuda a reduzir o diagnóstico.", "Não partilhes a password publicamente para pedir ajuda."], links: [link("Xtream Codes", "/guias/xtream-codes/"), link("Problemas de app", "/suporte/problemas-app/")] },
      { heading: "Revê os dados sem os expor", paragraphs: ["Confirma espaços acidentais, maiúsculas e minúsculas quando aplicável, e se o servidor ou método de configuração corresponde ao que a aplicação pede. Faz estas verificações num contexto privado.", "Se o problema persistir, contacta o suporte com o texto do erro e sem publicar os valores secretos."] },
      { heading: "Quando pedir correção", paragraphs: ["Se os dados não forem aceites depois de uma verificação cuidadosa, pode ser necessário confirmar a informação com o canal comercial ou de suporte que forneceu a configuração."] }
    ],
    faq: [
      { question: "Posso publicar as minhas credenciais para receber ajuda?", answer: "Não. Usa um canal privado e partilha apenas o contexto necessário." },
      { question: "O que devo confirmar primeiro?", answer: "Verifica o tipo de erro, o método de configuração e os campos introduzidos, sem expor os valores." }
    ]
  },

  "/dispositivos/iptv-firestick/": {
    sections: [
      { heading: "Antes de configurar o Fire TV Stick", paragraphs: ["Confirma que o Fire TV Stick está ligado à rede e identifica a geração ou modelo que estás a utilizar. A configuração pode variar conforme a aplicação disponível e a versão instalada.", "O objetivo é preparar o dispositivo primeiro e só depois escolher uma aplicação e um método de configuração que façam sentido para o ambiente real."], links: [link("Guia de instalação", "/guias/instalar-iptv-no-firestick/"), link("Problemas Firestick", "/suporte/problemas-firestick/")] },
      { heading: "Aplicação e método de configuração", paragraphs: ["A aplicação escolhida deve ser compatível com o dispositivo e com o método de configuração que vais utilizar. Algumas aplicações trabalham com playlist; outras apresentam campos de acesso estruturados.", "Não copies instruções de uma versão antiga para a interface atual sem confirmar os menus. Um pequeno detalhe diferente pode mudar completamente a sequência de passos."], links: [link("Aplicações IPTV", "/apps/"), link("M3U", "/guias/m3u/"), link("Xtream Codes", "/guias/xtream-codes/")] },
      { heading: "Teste e diagnóstico", paragraphs: ["Depois de configurar, testa a reprodução antes de alterar outras definições. Se existir buffering, compara primeiro a rede e o comportamento noutro contexto quando isso for possível.", "Se surgirem erros de credenciais ou a aplicação não carregar, consulta o fluxo de suporte específico em vez de repetir a instalação sem identificar a causa."] }
    ],
    faq: [
      { question: "O Fire TV Stick é compatível com qualquer aplicação IPTV?", answer: "Não. Depende do modelo, da app e da versão. Diz-nos o teu modelo pelo WhatsApp e confirmamos." },
      { question: "Qual é o primeiro passo?", answer: "Prepara a ligação de rede, identifica o dispositivo e confirma a aplicação e o método de configuração suportados." }
    ]
  },

  "/dispositivos/iptv-smart-tv/": {
    sections: [
      { heading: "Identifica o sistema da tua Smart TV", paragraphs: ["Smart TV não é um sistema único. A marca, o modelo e o sistema operativo influenciam as aplicações disponíveis e o percurso de configuração.", "Antes de escolher uma aplicação, confirma o ambiente real da televisão e evita assumir que uma instrução de outro fabricante será idêntica."], links: [link("Samsung", "/dispositivos/iptv-samsung/"), link("LG", "/dispositivos/iptv-lg/")] },
      { heading: "Escolhe o caminho de configuração", paragraphs: ["Depois de identificar o sistema, verifica a aplicação e o método de configuração disponíveis. Mantém as credenciais privadas e segue apenas instruções correspondentes à versão que está efetivamente instalada.", "Se a reprodução funcionar mas alguma função secundária falhar, trata esse problema separadamente para evitar diagnósticos confusos."], links: [link("Aplicações", "/apps/"), link("Como instalar IPTV", "/guias/como-instalar-iptv/")] },
      { heading: "Quando a Smart TV apresenta problemas", paragraphs: ["Se a aplicação fechar, não carregar ou apresentar buffering, separa primeiro rede, aplicação e dispositivo. Reiniciar tudo em simultâneo pode apagar pistas úteis.", "O centro de suporte organiza os problemas por sintoma para reduzir tentativas aleatórias."] }
    ],
    faq: [
      { question: "Todas as Smart TVs usam o mesmo método?", answer: "Não. O sistema operativo, o modelo e as aplicações disponíveis podem mudar o processo." },
      { question: "Onde encontro ajuda?", answer: "Consulta o guia da marca e, quando necessário, o suporte específico para Smart TV." }
    ]
  },

  "/dispositivos/iptv-samsung/": {
    sections: [
      { heading: "Samsung TV: confirma o ambiente primeiro", paragraphs: ["Antes de seguir qualquer tutorial, identifica o modelo e o sistema da Samsung TV. A disponibilidade de aplicações pode variar e as interfaces são atualizadas ao longo do tempo.", "Se não encontrares a app na loja da tua Samsung, diz-nos o modelo e indicamos a alternativa mais simples."], links: [link("Smart TV", "/dispositivos/iptv-smart-tv/"), link("Aplicações", "/apps/")] },
      { heading: "Configuração e teste", paragraphs: ["Depois de instalares uma aplicação compatível, segue o método de configuração que ela apresenta. Testa a reprodução e anota o sintoma se alguma etapa falhar.", "Se o problema estiver relacionado com uma aplicação específica, passa para o guia dessa aplicação e evita misturar instruções de diferentes plataformas."], links: [link("Guia de instalação", "/guias/como-instalar-iptv/") ] }
    ],
    faq: [
      { question: "A mesma aplicação funciona em todos os modelos Samsung?", answer: "Não deve ser assumido. A disponibilidade depende do modelo, sistema e da aplicação em questão." },
      { question: "O que devo confirmar antes de configurar?", answer: "Modelo, sistema operativo, aplicação disponível e método de configuração suportado." }
    ]
  },

  "/dispositivos/iptv-lg/": {
    sections: [
      { heading: "LG Smart TV e a importância do modelo", paragraphs: ["O primeiro passo é verificar o modelo e o sistema utilizado pela televisão. Aplicações e menus podem mudar, por isso um tutorial deve ser ligado à versão que foi realmente testada.", "Se a app que precisas não existir na loja da tua televisão, uma box ou stick externo costuma ser a solução mais simples."], links: [link("Smart TV", "/dispositivos/iptv-smart-tv/"), link("Aplicações", "/apps/")] },
      { heading: "Depois da instalação", paragraphs: ["Adiciona a configuração suportada pela aplicação e testa a reprodução. Se a aplicação abrir mas os dados não carregarem, verifica a configuração e a rede antes de reinstalar repetidamente.", "O suporte pode ajudar a separar problemas de aplicação de problemas do dispositivo."] }
    ],
    faq: [
      { question: "Qual é o primeiro passo numa LG TV?", answer: "Confirma o modelo, sistema e aplicações disponíveis antes de iniciar a configuração." },
      { question: "Uma falha de reprodução significa que a TV é incompatível?", answer: "Não necessariamente. É preciso separar rede, aplicação, configuração e dispositivo antes de concluir que existe incompatibilidade." }
    ]
  },

  "/apps/iptv-smarters-pro/": {
    sections: [
      { heading: "O papel do IPTV Smarters Pro", paragraphs: ["Uma aplicação de reprodução não é o mesmo que um fornecedor de conteúdo. O Smarters Pro funciona como interface para organizar e reproduzir uma fonte que o utilizador configurou.", "O percurso exato pode mudar conforme a versão e o dispositivo, por isso um guia profissional deve indicar a interface realmente testada."], links: [link("Aplicações IPTV", "/apps/"), link("Dispositivos", "/dispositivos/")] },
      { heading: "Configuração sem expor credenciais", paragraphs: ["Ao configurar a aplicação, os dados recebidos devem ser tratados como informação privada. Não os publiques em screenshots ou pedidos de suporte públicos.", "Escolhe o método disponível na versão instalada e introduz apenas os dados necessários. Depois verifica se a fonte aparece e se a reprodução funciona."], links: [link("Xtream Codes", "/guias/xtream-codes/"), link("M3U", "/guias/m3u/")] },
      { heading: "Diagnóstico", paragraphs: ["Se a aplicação abrir mas a lista não aparecer, verifica primeiro os dados e o método de configuração. Se a lista existir mas houver buffering, passa para o diagnóstico de rede e reprodução."] }
    ],
    faq: [
      { question: "A aplicação fornece o conteúdo?", answer: "A aplicação é a interface de reprodução; a origem e os direitos do conteúdo são questões separadas." },
      { question: "Posso publicar as minhas credenciais para pedir ajuda?", answer: "Não. Mantém username, password e URLs pessoais privados." }
    ]
  },

  "/apps/tivimate/": {
    sections: [
      { heading: "TiviMate como ferramenta de reprodução", paragraphs: ["O TiviMate é uma aplicação que organiza fontes IPTV em dispositivos suportados. A experiência depende da versão, dispositivo e configuração adicionada.", "Antes de seguir um tutorial, confirma a interface que tens instalada e o tipo de fonte que pretendes utilizar."], links: [link("Aplicações", "/apps/"), link("Android TV", "/dispositivos/iptv-android-tv/")] },
      { heading: "Playlist e EPG", paragraphs: ["O método de configuração disponível determina como adicionas a fonte. Se estiveres a utilizar uma playlist, verifica se o formato é aceite. Se houver EPG, trata a programação como uma camada separada da reprodução.", "Um EPG vazio não significa necessariamente que os streams estejam indisponíveis."], links: [link("M3U", "/guias/m3u/"), link("EPG", "/guias/epg/")] },
      { heading: "Quando a reprodução não funciona", paragraphs: ["Primeiro identifica se a fonte aparece na aplicação. Depois verifica se o problema ocorre num canal específico ou em vários. Esta distinção ajuda a decidir se deves investigar configuração, rede ou aplicação."] }
    ],
    faq: [
      { question: "TiviMate é um fornecedor IPTV?", answer: "Não. É uma aplicação utilizada para organizar e reproduzir fontes configuradas pelo utilizador." },
      { question: "O que faço se o EPG não aparecer?", answer: "Verifica a configuração e trata o EPG separadamente dos problemas de reprodução." }
    ]
  },

  "/apps/ibo-player/": {
    sections: [
      { heading: "Entender o IBO Player", paragraphs: ["O IBO Player funciona como uma aplicação de reprodução e a experiência pode variar conforme o dispositivo e a versão instalada.", "O guia deve concentrar-se no caminho de configuração suportado pela versão testada e não em instruções genéricas que podem ficar desatualizadas."], links: [link("Aplicações", "/apps/"), link("Guias", "/guias/")] },
      { heading: "Dados de configuração", paragraphs: ["Usa apenas os campos pedidos pela aplicação e mantém as credenciais privadas. Depois de guardar a configuração, verifica se a lista aparece corretamente antes de fazer alterações adicionais.", "Se existir um erro, regista o texto apresentado e a etapa em que aparece; essa informação torna o diagnóstico mais preciso."], links: [link("Problemas de app", "/suporte/problemas-app/")] }
    ],
    faq: [
      { question: "Os menus do IBO Player são sempre iguais?", answer: "Não necessariamente. Versões e dispositivos diferentes podem apresentar interfaces diferentes." },
      { question: "O que fazer quando a configuração falha?", answer: "Confirma o método suportado, os dados introduzidos e a etapa exata em que o erro aparece." }
    ]
  },

  "/apps/smart-iptv/": {
    sections: [
      { heading: "Smart IPTV e o contexto do dispositivo", paragraphs: ["Antes de configurar o Smart IPTV, identifica o sistema do dispositivo e confirma que a aplicação disponível corresponde ao caminho que pretendes seguir.", "Evita aplicar um tutorial escrito para outro sistema sem verificar se os menus e requisitos são iguais."], links: [link("Smart TV", "/dispositivos/iptv-smart-tv/"), link("Aplicações", "/apps/")] },
      { heading: "Adicionar e testar a configuração", paragraphs: ["Segue o método suportado pela versão instalada e trata os dados de acesso como informação privada. Depois testa a reprodução e verifica se o comportamento esperado aparece no dispositivo.", "Se a lista não carregar ou a aplicação apresentar erro, separa a falha de configuração da falha de rede e utiliza o suporte adequado."] }
    ],
    faq: [
      { question: "O Smart IPTV funciona em qualquer televisão?", answer: "Não deve ser assumido. A disponibilidade e o método dependem do dispositivo, sistema e versão da aplicação." },
      { question: "Onde devo guardar os meus dados de acesso?", answer: "Mantém-nos privados e não os publiques em screenshots ou páginas públicas." }
    ]
  },

  "/guias/como-instalar-iptv/": {
    sections: [
      {
        heading: "Começa por identificar o dispositivo antes da instalação",
        paragraphs: [
          "Não existe um único método de instalação de IPTV que funcione exatamente da mesma forma em todos os equipamentos. O primeiro passo é identificar se estás a usar uma Smart TV, Fire TV Stick, Android TV, Google TV, Apple TV, iPhone/iPad ou PC.",
          "Depois, identifica o sistema operativo e as aplicações realmente disponíveis no dispositivo. Isso evita começar com instruções que não correspondem à interface que tens à frente."
        ],
        links: [link("Dispositivos", "/dispositivos/"), link("Aplicações", "/apps/")]
      },
      {
        heading: "Instala a aplicação adequada e usa o método de configuração suportado",
        paragraphs: [
          "Algumas aplicações utilizam playlists como M3U, enquanto outras apresentam campos estruturados como server, username e password. Os nomes dos menus podem variar conforme a aplicação e a versão.",
          "Por isso, as instruções devem refletir a versão que foi efetivamente testada. Se a interface mudar, o guia deve ser atualizado em vez de deixar o utilizador à procura de botões que já não existem."
        ],
        links: [link("M3U", "/guias/m3u/"), link("Xtream Codes", "/guias/xtream-codes/"), link("EPG", "/guias/epg/")]
      },
      {
        heading: "Testa o resultado antes de considerar a instalação concluída",
        paragraphs: [
          "Depois de adicionar a configuração, testa a reprodução no ambiente que estás a utilizar. Se a imagem funcionar mas o guia de programação apresentar falhas, não assumes que é o mesmo problema: o EPG pode ter causas diferentes das falhas de reprodução.",
          "Se aparecer buffering, separa a qualidade da rede do comportamento da aplicação e do dispositivo. Um teste organizado é mais útil do que alterar várias variáveis ao mesmo tempo."
        ],
        links: [link("Buffering", "/guias/iptv-buffering/"), link("Velocidade da Internet", "/guias/velocidade-internet-iptv/"), link("Suporte", "/suporte/")]
      },
      {
        heading: "Mantém os dados de acesso privados",
        paragraphs: [
          "Qualquer username, password ou URL de playlist pessoal deve ser tratado como informação privada. Não o publiques numa captura de ecrã, comentário público ou página de suporte pública.",
          "Se precisares de ajuda, partilha apenas a informação necessária para descrever o problema e utiliza um canal privado quando forem necessários dados da conta para a verificação."
        ],
        links: [link("Problemas de credenciais", "/suporte/erro-credenciais/")]
      }
    ],
    faq: [
      { question: "Qual é a primeira coisa a fazer antes da instalação?", answer: "Identifica o dispositivo e o sistema operativo e confirma a aplicação e o método de configuração que ela suporta." },
      { question: "M3U e Xtream Codes são a mesma coisa?", answer: "Não. São formas diferentes de configuração que algumas aplicações suportam de maneiras diferentes." },
      { question: "O que faço se aparecer buffering?", answer: "Começa por diagnosticar a rede e depois a aplicação e o dispositivo separadamente, sem alterar várias variáveis ao mesmo tempo." }
    ]
  },

};
