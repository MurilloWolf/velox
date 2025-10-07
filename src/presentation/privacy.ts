export type PrivacyBullet = {
  strong?: string;
  text?: string;
  note?: string;
};

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: PrivacyBullet[];
  closing?: string;
};

export type PrivacyPageContent = {
  lastUpdate: string;
  hero: {
    title: string;
    subtitleLabel: string;
  };
  sections: PrivacySection[];
  contact: {
    email: {
      label: string;
      value: string;
    };
    instagram: {
      label: string;
      value: string;
      href: string;
    };
  };
  footer: string;
};

export const privacyPageContent: PrivacyPageContent = {
  lastUpdate: "2025-09-30",
  hero: {
    title: "Política de Privacidade",
    subtitleLabel: "Última atualização:",
  },
  sections: [
    {
      id: "introduction",
      title: "1. Introdução",
      paragraphs: [
        "A sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, utilizamos e protegemos os dados fornecidos pelos usuários ao interagir com o Velox Bot no Telegram, seja em conversas privadas ou em grupos. Ao utilizar nosso bot, você declara estar ciente e de acordo com os termos descritos abaixo.",
      ],
    },
    {
      id: "data-collection",
      title: "2. Dados que Coletamos",
      paragraphs: [
        "Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:",
      ],
      bullets: [
        {
          strong: "Informações do Telegram:",
          text: "ID do usuário, nome de usuário (nome público escolhido pelo usuário).",
        },
        {
          strong: "Mensagens enviadas ao bot em conversas privadas;",
          text: "Interações com o bot, comandos utilizados, mensagens enviadas e recebidas",
        },
        {
          strong: "Mensagens e interações realizadas em grupos nos quais o bot esteja associado;",
          text: "Interações com o bot, comandos utilizados, mensagens enviadas e recebidas",
        },
        {
          strong: "Datas e horários de envio das mensagens",
          note: "para melhor entendimento do contexto",
        },
        {
          strong: "Interações realizadas dentro do bot",
          text: ", incluindo cliques em botões e comandos executados.",
        },
        {
          strong: "Dados de Pagamento:",
          text: "Informações de assinatura e transações (processadas por terceiros seguros)",
        },
      ],
    },
    {
      id: "legal-basis",
      title: "3. Base Legal para o Tratamento de Dados",
      paragraphs: [
        "O tratamento dos dados pessoais realizado pelo Velox Bot fundamenta-se nas seguintes hipóteses previstas na LGPD:",
      ],
      bullets: [
        {
          strong: "Consentimento do usuário (art. 7º, I)",
          text: ", ao utilizar o bot e aceitar esta Política de Privacidade;",
        },
        {
          strong: "Legítimo interesse do controlador (art. 7º, IX)",
          text: ", para possibilitar o funcionamento adequado do serviço, análise de uso e melhoria contínua da experiência.",
        },
      ],
    },
    {
      id: "information-sharing",
      title: "4. Compartilhamento de Informações",
      paragraphs: [
        "Não utilizamos os dados para fins comerciais, nem vendemos ou compartilhamos informações com terceiros sem consentimento expresso. Podemos compartilhar dados apenas nas seguintes situações:",
      ],
      bullets: [
        {
          strong: "Organizadores de Corridas:",
          text: "Informações agregadas e anônimas para fins estatísticos",
        },
        {
          strong: "Parceiros e Patrocinadores:",
          text: "Dados demográficos agregados sem identificação pessoal",
        },
        {
          strong: "Provedores de Serviço:",
          text: "Empresas que nos auxiliam (hospedagem, pagamentos, análise)",
        },
        {
          strong: "Requisitos Legais:",
          text: "Quando exigido por lei ou para proteger direitos legais",
        },
      ],
    },
    {
      id: "data-retention",
      title: "5. Retenção dos Dados",
      paragraphs: [
        "Os dados serão armazenados apenas pelo tempo necessário para atender às finalidades descritas nesta política, ou até que o usuário solicite sua exclusão.",
      ],
    },
    {
      id: "storage-security",
      title: "6. Armazenamento e Segurança",
      bullets: [
        {
          text: "Os dados são armazenados em ambiente seguro, adotando medidas técnicas e organizacionais adequadas para prevenir acessos não autorizados.",
        },
        {
          text: "O acesso às informações é restrito apenas à equipe responsável pelo funcionamento do Velox Bot.",
        },
        {
          text: "Caso sejam utilizados servidores localizados fora do Brasil, poderá haver transferência internacional de dados, sempre em conformidade com a LGPD e com garantias de proteção adequadas.",
        },
      ],
    },
    {
      id: "user-rights",
      title: "7. Direitos do Usuário",
      paragraphs: ["Nos termos da LGPD, o usuário tem direito a:"],
      bullets: [
        { text: "Confirmar a existência de tratamento de dados pessoais" },
        { text: "Solicitar acesso, correção ou exclusão de suas informações;" },
        { text: "Revogar o consentimento a qualquer momento;" },
        {
          text: "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD",
        },
      ],
      closing:
        "Para exercer seus direitos, entre em contato conosco através do email ou Telegram indicados na seção 11.",
    },
    {
      id: "cookies",
      title: "8. Cookies e Tecnologias Similares",
      paragraphs: [
        "Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso da plataforma e personalizar conteúdo. Você pode controlar o uso de cookies através das configurações do seu navegador.",
      ],
    },
    {
      id: "minors",
      title: "9. Menores de Idade",
      paragraphs: [
        "Nossos serviços não são direcionados a menores de 13 anos. Não coletamos intencionalmente informações de crianças. Se você acredita que coletamos dados de um menor, entre em contato conosco imediatamente.",
      ],
    },
    {
      id: "policy-changes",
      title: "10. Alterações nesta Política",
      paragraphs: [
        "Esta Política de Privacidade pode ser alterada a qualquer momento, sendo a versão mais recente sempre publicada em nossa homepage. Recomendamos a revisão periódica deste documento.",
      ],
    },
    {
      id: "contact",
      title: "11. Contato",
      paragraphs: [
        "Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco:",
      ],
    },
  ],
  contact: {
    email: {
      label: "Email",
      value: "velox.running.app@gmail.com",
    },
    instagram: {
      label: "Instagram",
      value: "@runningvelox",
      href: "https://t.me/veloxsupport",
    },
  },
  footer:
    "Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e regulamentações internacionais de privacidade.",
};
