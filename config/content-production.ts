export type ProductionContent = {
  depth: "core" | "supporting";
  entities: string[];
  takeaways: string[];
  steps?: string[];
};

export const productionContent: Record<string, ProductionContent> = {
  "/iptv-portugal/": {
    depth: "core",
    entities: ["IPTV", "Portugal", "subscrição", "dispositivos", "aplicações", "suporte"],
    takeaways: [
      "Começa por definir o que procuras: informação, subscrição, configuração ou suporte.",
      "Confirma sempre preço, compatibilidade e condições comerciais antes de pagar.",
      "Mantém as questões técnicas separadas das questões sobre direitos de conteúdo."
    ],
    steps: ["Definir o objetivo", "Verificar dispositivo e aplicação", "Confirmar condições comerciais", "Avançar para suporte ou contacto"]
  },
  "/subscricao-iptv/": {
    depth: "core",
    entities: ["subscrição IPTV", "plano", "pagamento", "dispositivo", "suporte"],
    takeaways: [
      "Uma subscrição deve explicar claramente a duração e as condições aplicáveis.",
      "A compatibilidade deve ser confirmada com dados reais do serviço.",
      "O utilizador deve saber qual é o percurso entre contacto e pagamento."
    ],
    steps: ["Escolher duração", "Confirmar compatibilidade", "Esclarecer condições", "Receber instruções de pagamento pelo canal definido"]
  },
  "/comprar-iptv/": {
    depth: "core",
    entities: ["compra IPTV", "WhatsApp", "pagamento", "subscrição"],
    takeaways: [
      "O fluxo comercial atual passa primeiro pelo WhatsApp.",
      "O preço final e as condições devem ser confirmados antes do pagamento.",
      "Não é necessário confundir informação técnica com a etapa de compra."
    ],
    steps: ["Consultar a oferta", "Contactar pelo WhatsApp", "Confirmar condições", "Receber o link de pagamento"]
  },
  "/precos/": {
    depth: "core",
    entities: ["preços IPTV", "plano", "duração", "benchmark"],
    takeaways: [
      "Os valores atualmente no projeto são benchmarks e não uma oferta comercial verificada.",
      "Antes da publicação final, os preços reais devem ser confirmados numa única fonte de dados.",
      "Qualquer mudança de preço deve atualizar a página, CTAs e dados estruturados relevantes."
    ],
    steps: ["Comparar duração", "Confirmar preço real", "Ver condições", "Contactar antes do pagamento"]
  },
  "/dispositivos/": {
    depth: "core",
    entities: ["Smart TV", "Fire TV Stick", "Android TV", "Google TV", "Apple TV", "iPhone", "iPad", "PC"],
    takeaways: [
      "O dispositivo é o primeiro filtro para escolher um caminho de configuração.",
      "A aplicação disponível pode variar conforme o sistema operativo.",
      "A compatibilidade definitiva deve ser baseada em testes ou confirmação do serviço."
    ],
    steps: ["Identificar o dispositivo", "Escolher o tipo de aplicação", "Seguir o guia correspondente", "Usar suporte se houver erro"]
  },
  "/dispositivos/iptv-firestick/": {
    depth: "core",
    entities: ["Fire TV Stick", "aplicação IPTV", "configuração", "rede"],
    takeaways: [
      "Começa por confirmar o modelo e o estado de ligação do Fire TV Stick.",
      "Usa apenas instruções compatíveis com a versão da aplicação realmente testada.",
      "Quando houver falha, separa problema de rede, aplicação e credenciais."
    ],
    steps: ["Preparar Fire TV Stick", "Instalar aplicação adequada", "Inserir dados fornecidos", "Testar reprodução"]
  },
  "/dispositivos/iptv-smart-tv/": {
    depth: "core",
    entities: ["Smart TV", "Samsung", "LG", "aplicação IPTV", "rede doméstica"],
    takeaways: [
      "O sistema da Smart TV influencia as opções de aplicação disponíveis.",
      "Antes de configurar, confirma o modelo e o sistema operativo da televisão.",
      "Se a reprodução falhar, testa o problema antes de trocar várias definições."
    ],
    steps: ["Identificar sistema", "Escolher aplicação", "Configurar acesso", "Testar e diagnosticar"]
  },
  "/apps/": {
    depth: "core",
    entities: ["IPTV Smarters Pro", "TiviMate", "IBO Player", "Smart IPTV"],
    takeaways: [
      "A escolha da aplicação depende do dispositivo e do método de configuração suportado.",
      "As interfaces podem mudar entre versões.",
      "Um guia de aplicação deve indicar claramente onde começa a configuração e onde termina."
    ],
    steps: ["Identificar dispositivo", "Escolher aplicação", "Ver método de configuração", "Seguir o guia específico"]
  },
  "/apps/iptv-smarters-pro/": {
    depth: "core",
    entities: ["IPTV Smarters Pro", "login", "playlist", "dispositivo"],
    takeaways: [
      "A aplicação pode apresentar diferentes fluxos de configuração conforme a versão e o dispositivo.",
      "Os dados de acesso devem ser mantidos privados.",
      "Se o fluxo mudar, o guia deve ser revisto em vez de repetir passos antigos."
    ],
    steps: ["Abrir a aplicação", "Escolher o método suportado", "Inserir os dados recebidos", "Validar a reprodução"]
  },
  "/apps/tivimate/": {
    depth: "core",
    entities: ["TiviMate", "Android TV", "Google TV", "playlist", "EPG"],
    takeaways: [
      "O TiviMate deve ser tratado como aplicação, não como fornecedor de conteúdo.",
      "O formato de configuração disponível depende da fonte e da própria aplicação.",
      "EPG e reprodução podem falhar por motivos diferentes."
    ],
    steps: ["Preparar o dispositivo", "Adicionar a fonte suportada", "Configurar EPG quando disponível", "Testar canais"]
  },
  "/guias/o-que-e-iptv/": {
    depth: "core",
    entities: ["IPTV", "IP", "streaming", "conteúdo"],
    takeaways: [
      "IPTV é uma tecnologia de distribuição de vídeo sobre redes IP.",
      "A tecnologia não determina, por si só, os direitos de distribuição de qualquer conteúdo.",
      "É útil separar arquitetura técnica de oferta comercial e de direitos."
    ],
    steps: ["Definir IPTV", "Entender o fluxo de entrega", "Distinguir tecnologia de conteúdo", "Ligar ao guia de funcionamento"]
  },
  "/guias/como-funciona-iptv/": {
    depth: "core",
    entities: ["stream", "playlist", "EPG", "aplicação", "rede"],
    takeaways: [
      "A reprodução envolve fonte, rede, aplicação e dispositivo.",
      "Um problema em qualquer etapa pode aparecer ao utilizador como falha de reprodução.",
      "Diagnosticar por camadas é mais útil do que alterar várias definições em simultâneo."
    ],
    steps: ["Identificar a fonte", "Verificar a rede", "Verificar a aplicação", "Verificar o dispositivo"]
  },
  "/guias/como-instalar-iptv/": {
    depth: "core",
    entities: ["instalação IPTV", "dispositivo", "aplicação", "dados de configuração"],
    takeaways: [
      "O primeiro passo é identificar o dispositivo antes de escolher a aplicação.",
      "O método de configuração deve corresponder ao que a aplicação suporta.",
      "O processo termina apenas depois de testar a reprodução e saber como diagnosticar um erro."
    ],
    steps: ["Identificar dispositivo", "Instalar aplicação", "Adicionar configuração", "Testar reprodução"]
  },
  "/guias/instalar-iptv-no-firestick/": {
    depth: "core",
    entities: ["Fire TV Stick", "aplicação", "configuração", "Wi-Fi"],
    takeaways: [
      "Prepara o Fire TV Stick e a ligação de rede antes de instalar a aplicação.",
      "Segue o método de configuração que a aplicação realmente suporta.",
      "Guarda os dados de acesso de forma privada."
    ],
    steps: ["Ligar e atualizar o dispositivo", "Instalar a aplicação", "Configurar a fonte", "Testar reprodução"]
  },
  "/guias/m3u/": {
    depth: "core",
    entities: ["M3U", "playlist", "stream", "EPG"],
    takeaways: [
      "Uma playlist M3U é uma forma de organizar referências de reprodução.",
      "A capacidade de importar M3U depende da aplicação utilizada.",
      "Uma playlist válida não garante, por si só, que cada referência estará disponível."
    ],
    steps: ["Confirmar suporte M3U", "Adicionar a playlist", "Verificar itens", "Configurar EPG quando suportado"]
  },
  "/guias/xtream-codes/": {
    depth: "core",
    entities: ["Xtream Codes", "username", "password", "server", "application"],
    takeaways: [
      "Aplicações que suportam Xtream normalmente pedem campos estruturados de acesso.",
      "Os nomes dos campos podem variar entre aplicações.",
      "Credenciais não devem aparecer em screenshots, artigos ou mensagens públicas."
    ],
    steps: ["Abrir a aplicação", "Selecionar o método", "Inserir servidor e dados", "Testar a lista"]
  },
  "/guias/epg/": {
    depth: "core",
    entities: ["EPG", "Electronic Program Guide", "programação", "canais"],
    takeaways: [
      "EPG acrescenta informação de programação quando a aplicação e a fonte conseguem associá-la corretamente.",
      "EPG pode falhar mesmo quando a reprodução dos canais funciona.",
      "O diagnóstico deve separar dados de programação de dados de reprodução."
    ],
    steps: ["Confirmar suporte EPG", "Verificar configuração", "Atualizar a fonte", "Comparar o resultado com a programação esperada"]
  },
  "/guias/velocidade-internet-iptv/": {
    depth: "core",
    entities: ["velocidade", "latência", "Wi-Fi", "Ethernet", "estabilidade"],
    takeaways: [
      "Velocidade é apenas uma parte da experiência de streaming.",
      "Estabilidade e congestionamento da rede também importam.",
      "É útil comparar o comportamento em diferentes horários e dispositivos."
    ],
    steps: ["Testar a ligação", "Comparar Wi-Fi e cabo quando possível", "Verificar congestionamento", "Repetir o teste em condições diferentes"]
  },
  "/guias/iptv-buffering/": {
    depth: "core",
    entities: ["buffering", "rede", "aplicação", "dispositivo", "reprodução"],
    takeaways: [
      "Buffering pode ter origem na rede, no dispositivo, na aplicação ou noutra etapa da reprodução.",
      "Mudar várias definições ao mesmo tempo dificulta encontrar a causa.",
      "O melhor diagnóstico compara variáveis uma de cada vez."
    ],
    steps: ["Verificar rede", "Comparar outro dispositivo", "Comparar outra aplicação", "Registar quando o problema acontece"]
  },
  "/suporte/iptv-nao-funciona/": {
    depth: "core",
    entities: ["IPTV", "rede", "aplicação", "dispositivo", "credenciais"],
    takeaways: [
      "Começa pelo sintoma e identifica a camada onde aparece a falha.",
      "Confirma rede, aplicação, dispositivo e dados de acesso em sequência.",
      "Evita partilhar credenciais publicamente ao pedir ajuda."
    ],
    steps: ["Definir o sintoma", "Testar a rede", "Testar aplicação/dispositivo", "Contactar suporte com contexto"]
  },
  "/suporte/buffering/": {
    depth: "core",
    entities: ["buffering", "Wi-Fi", "Ethernet", "aplicação", "reprodução"],
    takeaways: [
      "Começa pela estabilidade da ligação e não apenas pelo número da velocidade.",
      "Testa uma variável de cada vez.",
      "Regista em que horários e dispositivos o problema aparece."
    ],
    steps: ["Testar rede", "Reiniciar dispositivo", "Comparar aplicação", "Escalar com contexto"]
  },
  "/comparar/como-escolher-iptv-portugal/": {
    depth: "core",
    entities: ["preço", "compatibilidade", "suporte", "transparência", "condições"],
    takeaways: [
      "Compara preço juntamente com compatibilidade e suporte.",
      "Distingue factos verificáveis de slogans comerciais.",
      "Confirma condições antes de efetuar qualquer pagamento."
    ],
    steps: ["Definir prioridades", "Comparar critérios", "Verificar dados", "Confirmar condições"]
  },
  "/comparar/iptv-barato-vs-premium/": {
    depth: "supporting",
    entities: ["preço", "suporte", "experiência", "transparência"],
    takeaways: [
      "Preço mais baixo não descreve sozinho a experiência de um serviço.",
      "Compara o que está efetivamente incluído e confirmado.",
      "Evita decisões baseadas em números de canais ou garantias não verificadas."
    ],
    steps: ["Comparar preço", "Comparar suporte", "Comparar compatibilidade", "Confirmar condições"]
  },
  "/comparar/iptv-vs-tv-tradicional/": {
    depth: "supporting",
    entities: ["IPTV", "televisão tradicional", "internet", "dispositivo"],
    takeaways: [
      "IPTV depende de uma rede IP e de dispositivos/aplicações adequados.",
      "Televisão tradicional e IPTV podem ter modelos de distribuição diferentes.",
      "A comparação deve considerar custo, flexibilidade, equipamento e disponibilidade real."
    ],
    steps: ["Definir o uso", "Comparar infraestrutura", "Comparar experiência", "Confirmar condições"]
  },
  "/legalidade/": {
    depth: "core",
    entities: ["IPTV", "direito de autor", "autorização", "conteúdo protegido"],
    takeaways: [
      "IPTV é uma tecnologia e não uma autorização automática para distribuir qualquer conteúdo.",
      "Direitos de autor e autorizações devem ser avaliados separadamente da tecnologia.",
      "Afirmações sobre licenças devem ser apoiadas por documentação verificável."
    ],
    steps: ["Separar tecnologia de conteúdo", "Identificar a afirmação", "Procurar evidência", "Evitar conclusões baseadas apenas em marketing"]
  },
  "/sobre-nos/": {
    depth: "supporting",
    entities: ["IPTV Listas", "Portugal", "conteúdo", "suporte"],
    takeaways: [
      "O projeto organiza informação sobre IPTV em português de Portugal.",
      "O conteúdo procura separar informação verificada de dados ainda pendentes.",
      "A arquitectura liga descoberta, configuração, suporte e informação comercial."
    ]
  },
  "/contacto/": {
    depth: "supporting",
    entities: ["WhatsApp", "IPTV Listas", "suporte", "condições comerciais"],
    takeaways: [
      "O canal de contacto definido para o projeto é o WhatsApp.",
      "As perguntas comerciais devem ser confirmadas antes do pagamento.",
      "Não partilhes credenciais em áreas públicas."
    ],
    steps: ["Abrir o WhatsApp", "Descrever a necessidade", "Confirmar condições", "Seguir a orientação recebida"]
  },

  "/dispositivos/iptv-samsung/": {
    depth: "supporting",
    entities: ["Samsung TV", "Smart TV", "aplicação IPTV"],
    takeaways: ["O sistema da televisão influencia as aplicações disponíveis.", "Confirma o modelo e a aplicação antes de seguir um guia.", "Problemas de reprodução devem ser isolados por rede, aplicação e dispositivo."],
    steps: ["Identificar modelo", "Confirmar aplicação", "Configurar", "Testar"]
  },
  "/dispositivos/iptv-lg/": {
    depth: "supporting",
    entities: ["LG Smart TV", "Smart TV", "aplicação IPTV"],
    takeaways: ["O sistema da LG determina o caminho de instalação.", "Evita assumir que todos os modelos têm a mesma interface.", "Usa suporte quando o problema não for resolvido com verificações básicas."],
    steps: ["Identificar sistema", "Escolher aplicação", "Configurar acesso", "Testar reprodução"]
  },
  "/dispositivos/iptv-android-tv/": {
    depth: "supporting",
    entities: ["Android TV", "aplicação", "playlist", "EPG"],
    takeaways: ["Android TV oferece um ecossistema de aplicações, mas o suporte deve ser confirmado por aplicação.", "Os dados de configuração variam consoante a fonte e o método suportado.", "EPG e reprodução devem ser diagnosticados separadamente."],
    steps: ["Preparar Android TV", "Instalar aplicação", "Adicionar configuração", "Testar"]
  },
  "/dispositivos/iptv-google-tv/": {
    depth: "supporting",
    entities: ["Google TV", "Android TV", "aplicação IPTV"],
    takeaways: ["Google TV pode partilhar conceitos de instalação com Android TV, mas a interface pode variar.", "Escolhe a aplicação de acordo com o dispositivo e o método suportado.", "Mantém os dados de acesso privados."],
    steps: ["Identificar sistema", "Escolher aplicação", "Configurar", "Testar"]
  },
  "/dispositivos/iptv-apple-tv/": {
    depth: "supporting",
    entities: ["Apple TV", "tvOS", "aplicação IPTV"],
    takeaways: ["A disponibilidade de uma aplicação depende do ecossistema e da compatibilidade real.", "Confirma o método de configuração antes de iniciar.", "Se não houver aplicação adequada, o caminho deve ser claramente explicado."],
    steps: ["Confirmar tvOS", "Verificar aplicação", "Configurar", "Testar"]
  },
  "/dispositivos/iptv-iphone-ipad/": {
    depth: "supporting",
    entities: ["iPhone", "iPad", "iOS", "iPadOS", "aplicação IPTV"],
    takeaways: ["O caminho de configuração pode variar entre iPhone e iPad.", "Usa uma aplicação e um método realmente compatíveis.", "Evita guardar ou partilhar credenciais em locais públicos."],
    steps: ["Identificar dispositivo", "Escolher aplicação", "Adicionar configuração", "Testar reprodução"]
  },
  "/dispositivos/iptv-pc/": {
    depth: "supporting",
    entities: ["PC", "Windows", "browser", "player"],
    takeaways: ["Num PC, a escolha pode envolver uma aplicação compatível ou outro método suportado.", "Verifica a origem do conteúdo e os requisitos antes da configuração.", "Problemas de reprodução podem estar relacionados com rede, aplicação ou sistema."],
    steps: ["Identificar ambiente", "Escolher método", "Configurar", "Testar"]
  },
  "/apps/ibo-player/": {
    depth: "supporting",
    entities: ["IBO Player", "aplicação", "dispositivo", "configuração"],
    takeaways: ["A interface e os campos disponíveis podem variar por versão.", "Confirma o método de configuração suportado pela versão em uso.", "Não publiques dados de acesso em screenshots ou páginas."],
    steps: ["Abrir aplicação", "Escolher método", "Inserir configuração", "Testar"]
  },
  "/apps/smart-iptv/": {
    depth: "supporting",
    entities: ["Smart IPTV", "Smart TV", "playlist", "aplicação"],
    takeaways: ["Smart IPTV deve ser explicado a partir do dispositivo e da versão realmente testados.", "O método de carregamento pode depender do cenário utilizado.", "Mantém as credenciais privadas."],
    steps: ["Identificar dispositivo", "Confirmar aplicação", "Adicionar configuração", "Testar"]
  },
  "/guias/": {
    depth: "core",
    entities: ["IPTV", "instalação", "M3U", "Xtream Codes", "EPG", "suporte"],
    takeaways: ["Os guias cobrem descoberta, configuração, tecnologia e resolução de problemas.", "Cada guia aponta para outros conteúdos do mesmo cluster.", "A estrutura evita criar artigos duplicados para a mesma intenção."],
    steps: ["Escolher o tema", "Seguir o guia", "Validar o resultado", "Abrir suporte se necessário"]
  },
  "/guias/iptv-e-legal-em-portugal/": {
    depth: "core",
    entities: ["IPTV", "direito de autor", "autorização", "Portugal"],
    takeaways: ["Tecnologia IPTV e autorização de conteúdos são questões distintas.", "Afirmações sobre licenças devem ser acompanhadas por documentação verificável.", "Marketing, por si só, não prova direitos de distribuição."],
    steps: ["Identificar a afirmação", "Separar tecnologia e direitos", "Procurar evidência", "Consultar fonte institucional"]
  },
  "/canais/": {
    depth: "supporting",
    entities: ["canais IPTV", "categorias", "conteúdo", "Portugal"],
    takeaways: ["Esta área organiza a procura por tipo de conteúdo sem inventar um catálogo.", "A oferta efetiva deve ser confirmada antes de a apresentar como facto.", "As páginas de canais ligam naturalmente a preço, suporte e legalidade quando relevante."],
    steps: ["Escolher categoria", "Verificar oferta", "Confirmar condições", "Avançar"]
  },
  "/canais/canais-portugueses/": {
    depth: "supporting",
    entities: ["canais portugueses", "Portugal", "IPTV", "oferta"],
    takeaways: ["A procura por canais portugueses deve ser avaliada pela oferta real do serviço.", "Evita publicar listas de canais não verificadas.", "Distingue disponibilidade técnica de autorização para distribuir conteúdos."],
    steps: ["Definir canais procurados", "Confirmar oferta", "Verificar condições", "Contactar"]
  },
  "/canais/desporto/": {
    depth: "supporting",
    entities: ["desporto", "streaming", "canais", "eventos"],
    takeaways: ["O streaming desportivo exige atenção à estabilidade e à origem do conteúdo.", "Não prometas eventos ou direitos sem confirmação.", "Usa suporte para investigar problemas de reprodução."],
    steps: ["Definir conteúdo", "Confirmar disponibilidade", "Verificar reprodução", "Pedir suporte"]
  },
  "/canais/filmes-series/": {
    depth: "supporting",
    entities: ["filmes", "séries", "streaming", "VOD"],
    takeaways: ["Filmes e séries devem ser tratados como conteúdo sujeito a disponibilidade e direitos.", "Não inventes números de VOD ou catálogos.", "Compara qualidade da experiência sem transformar benchmarks em factos."],
    steps: ["Definir preferência", "Confirmar catálogo", "Ver condições", "Contactar"]
  },
  "/suporte/": {
    depth: "core",
    entities: ["suporte IPTV", "rede", "aplicação", "dispositivo", "credenciais"],
    takeaways: ["O suporte começa pela identificação do sintoma.", "Depois separa rede, aplicação, dispositivo e credenciais.", "O contacto deve receber contexto suficiente sem expor dados privados."],
    steps: ["Descrever sintoma", "Testar camada", "Consultar solução", "Contactar se necessário"]
  },
  "/suporte/canais-nao-carregam/": {
    depth: "supporting",
    entities: ["canais", "reprodução", "rede", "aplicação"],
    takeaways: ["Um canal que não carrega pode ter causas diferentes de um serviço totalmente indisponível.", "Compara canais e dispositivos quando possível.", "Regista quando o problema ocorre antes de escalar o caso."],
    steps: ["Testar outro canal", "Verificar rede", "Comparar dispositivo", "Escalar contexto"]
  },
  "/suporte/epg-nao-funciona/": {
    depth: "supporting",
    entities: ["EPG", "programação", "aplicação", "fonte de dados"],
    takeaways: ["EPG pode falhar enquanto a reprodução continua a funcionar.", "Verifica a configuração e a associação entre fonte e aplicação.", "Não alteres várias variáveis ao mesmo tempo"],
    steps: ["Confirmar sintoma", "Verificar configuração", "Atualizar fonte", "Testar"]
  },
  "/suporte/erro-credenciais/": {
    depth: "supporting",
    entities: ["credenciais", "utilizador", "palavra-passe", "acesso"],
    takeaways: ["Confirma cuidadosamente os campos introduzidos.", "Não partilhes credenciais em tickets públicos ou screenshots.", "Se o erro persistir, fornece apenas o contexto necessário ao suporte."],
    steps: ["Rever campos", "Verificar espaço/maiúsculas", "Testar novamente", "Contactar suporte"]
  },
  "/suporte/problemas-firestick/": {
    depth: "supporting",
    entities: ["Fire TV Stick", "aplicação", "rede", "reprodução"],
    takeaways: ["Reiniciar o percurso de diagnóstico antes de reinstalar tudo.", "Verifica a rede e a aplicação separadamente.", "Usa o guia Firestick para passos de configuração."],
    steps: ["Verificar rede", "Verificar aplicação", "Testar reprodução", "Escalar"]
  },
  "/suporte/problemas-smart-tv/": {
    depth: "supporting",
    entities: ["Smart TV", "aplicação", "rede", "modelo"],
    takeaways: ["Confirma o sistema e o modelo da televisão.", "Se a aplicação abrir mas a reprodução falhar, separa configuração de rede.", "Evita instruções de outro sistema operativo sem confirmação."],
    steps: ["Identificar modelo", "Verificar aplicação", "Testar rede", "Contactar"]
  },
  "/suporte/problemas-app/": {
    depth: "supporting",
    entities: ["aplicação IPTV", "versão", "configuração", "dispositivo"],
    takeaways: ["As versões podem apresentar interfaces diferentes.", "Registra a versão da aplicação e o dispositivo antes de pedir ajuda.", "Reinstalação só deve ser uma etapa depois de confirmar a causa provável."],
    steps: ["Identificar versão", "Reproduzir erro", "Testar configuração", "Escalar"]
  },
  "/comparar/": {
    depth: "core",
    entities: ["IPTV", "preço", "compatibilidade", "suporte", "transparência"],
    takeaways: ["Comparações devem usar critérios verificáveis.", "Evita rankings automáticos baseados em slogans.", "A informação comercial deve refletir dados confirmados."],
    steps: ["Definir critérios", "Comparar opções", "Verificar dados", "Tomar a próxima ação"]
  },
  "/termos/": {
    depth: "supporting",
    entities: ["termos", "condições", "site", "serviço"],
    takeaways: ["Os termos publicados devem corresponder às condições reais do site e do serviço.", "Qualquer cláusula comercial pendente deve ser validada antes da publicação final.", "Não apresentar placeholders como política definitiva."],
    steps: ["Validar identidade", "Validar condições", "Rever política", "Publicar versão confirmada"]
  },
  "/politica-privacidade/": {
    depth: "supporting",
    entities: ["privacidade", "dados pessoais", "cookies", "contacto"],
    takeaways: ["A política deve refletir os dados realmente tratados pelo site.", "Ferramentas de analytics, formulários e integrações devem aparecer apenas quando realmente utilizadas.", "O texto final deve corresponder à configuração real do site."],
    steps: ["Inventariar dados", "Inventariar ferramentas", "Validar bases legais", "Publicar versão final"]
  },
  "/politica-reembolso/": {
    depth: "supporting",
    entities: ["reembolso", "condições comerciais", "subscrição"],
    takeaways: ["A política de reembolso permanece pendente de confirmação comercial.", "Nenhuma condição específica deve ser inventada a partir de concorrentes.", "A página só deve tornar-se uma política comercial final depois de validação."],
    steps: ["Confirmar termos", "Definir elegibilidade", "Definir processo", "Publicar versão confirmada"]
  },

  "/": {
    depth: "core",
    entities: ["IPTV", "Portugal", "dispositivos", "aplicações", "guias", "suporte"],
    takeaways: ["A página inicial distribui o utilizador pelos principais clusters do site.", "Cada caminho é apresentado com uma intenção clara e sem promessas comerciais não verificadas.", "As áreas comercial, técnica e de suporte estão ligadas por uma rede contextual."],
    steps: ["Identificar a necessidade", "Escolher o cluster", "Validar informação", "Avançar"]
  },
  "/teste-iptv/": {
    depth: "supporting",
    entities: ["teste IPTV", "trial", "condições"],
    takeaways: ["A existência e as condições de qualquer teste continuam sujeitas a confirmação.", "Não apresentar duração, elegibilidade ou benefícios como factos sem validação.", "A página pode ser ativada comercialmente quando o Business Truth for confirmado."],
    steps: ["Confirmar existência", "Definir condições", "Publicar oferta validada", "Rever regularmente"]
  },
  "/blog/": {
    depth: "core",
    entities: ["IPTV Portugal", "dispositivos", "aplicações", "tecnologia", "suporte"],
    takeaways: ["O blog deve cobrir dúvidas reais sem duplicar as páginas principais.", "Cada artigo tem uma intenção própria e liga-se ao cluster adequado.", "Conteúdo editorial não substitui as páginas comerciais, de suporte ou legais."],
    steps: ["Escolher tema", "Ler artigo", "Aprofundar no cluster", "Consultar suporte"]
  },
};
