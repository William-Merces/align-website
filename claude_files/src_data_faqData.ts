/**
 * Dados das perguntas frequentes da Align
 */

export interface FaqAction {
  text: string;
  link: string;
  primary?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
  actions?: FaqAction[];
}

export interface CategoryItem {
  id: string;
  name: string;
  icon?: string;
}

/**
 * Categorias de FAQ
 */
export const faqCategories: CategoryItem[] = [
  {
    id: 'process',
    name: 'Processo',
    icon: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>'
  },
  {
    id: 'pricing',
    name: 'Preços',
    icon: '<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>'
  },
  {
    id: 'support',
    name: 'Suporte',
    icon: '<path d="M9 18v3H5l4-7H6L10 3h4l-3 7h5l-5 8z"></path>'
  },
  {
    id: 'technical',
    name: 'Questões Técnicas',
    icon: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>'
  }
];

/**
 * Lista de perguntas frequentes
 */
export const faqItems: FaqItem[] = [
  {
    category: 'process',
    question: 'Quanto tempo leva para montar uma equipe?',
    answer: 'Normalmente, conseguimos montar uma equipe dedicada em até <strong>15 dias úteis</strong>, dependendo da complexidade e especificidade das habilidades necessárias. Para projetos com requisitos muito específicos, o prazo pode se estender até 21 dias.'
  },
  {
    category: 'process',
    question: 'Como funciona o processo de implementação de uma nova equipe?',
    answer: 'O processo começa com uma análise detalhada das suas necessidades, seguida por uma proposta personalizada. Após a aprovação, montamos uma equipe dedicada em até 15 dias úteis e iniciamos a implementação com monitoramento contínuo. Todo o processo é acompanhado por um gerente de contas dedicado que será seu ponto de contato principal durante todas as etapas.'
  },
  {
    category: 'process',
    question: 'Vocês oferecem serviços para empresas de qualquer tamanho?',
    answer: 'Sim, trabalhamos com empresas de todos os tamanhos, desde startups até grandes corporações. Nossas soluções são escaláveis e adaptáveis às necessidades específicas de cada negócio.'
  },
  {
    category: 'pricing',
    question: 'Como funciona o modelo de preços?',
    answer: 'Nosso modelo de preços é baseado em uma taxa mensal que varia de acordo com o tamanho da equipe, complexidade do serviço e carga de trabalho. Em média, nossos clientes economizam até <strong>40%</strong> em custos operacionais em comparação com equipes internas.',
    actions: [
      {
        text: 'Calcular Economia',
        link: '/por-que-align#calculadora',
        primary: true
      }
    ]
  },
  {
    category: 'pricing',
    question: 'Existe um período mínimo de contrato?',
    answer: 'Trabalhamos com contratos flexíveis, tipicamente com um período mínimo de 3 meses. Após esse período, você pode ajustar o tamanho da equipe ou cancelar o serviço com aviso prévio de 30 dias.'
  },
  {
    category: 'pricing',
    question: 'Vocês oferecem algum tipo de garantia?',
    answer: 'Sim, oferecemos garantia de satisfação. Se não entregarmos o serviço conforme acordado, você não paga. Estamos tão confiantes em nosso trabalho que sua satisfação é garantida.'
  },
  {
    category: 'support',
    question: 'Como funciona o suporte ao cliente?',
    answer: 'Oferecemos suporte 24/7 através de múltiplos canais: chat, email e telefone. Cada cliente tem um gerente de contas dedicado que acompanha o projeto e está sempre disponível para assistência.'
  },
  {
    category: 'support',
    question: 'Em quais idiomas vocês oferecem suporte?',
    answer: 'Atualmente, oferecemos suporte em português, inglês e espanhol. Nossas equipes são multilíngues e preparadas para atender clientes globais.'
  },
  {
    category: 'technical',
    question: 'Como vocês garantem a segurança dos dados?',
    answer: 'Seguimos protocolos rigorosos de segurança, incluindo conformidade com LGPD. Todos os dados são criptografados e armazenados em servidores seguros, com acesso restrito e monitoramento constante.'
  },
  {
    category: 'technical',
    question: 'Quais ferramentas de gestão vocês utilizam?',
    answer: 'Utilizamos várias ferramentas de gerenciamento de projetos como Jira, Trello, Asana, bem como ferramentas de comunicação como Slack e Microsoft Teams. Nos adaptamos às ferramentas que sua empresa já utiliza para facilitar a integração.'
  },
  {
    category: 'technical',
    question: 'Qual é o processo de integração dos colaboradores remotos?',
    answer: 'Nosso processo de integração inclui treinamento sobre os processos e cultura da sua empresa, configuração de ferramentas e ambientes de trabalho, e sessões de alinhamento. Implementamos também check-ins regulares durante o período inicial para garantir que tudo esteja funcionando conforme esperado.'
  },
  {
    category: 'process',
    question: 'É possível reduzir ou aumentar a equipe?',
    answer: 'Sim, nosso modelo foi projetado para ser escalável. Você pode aumentar ou reduzir o tamanho da equipe com um aviso prévio de 30 dias, sem multas ou penalidades contratuais.',
    actions: [
      {
        text: 'Ver casos de sucesso',
        link: '/por-que-align#depoimentos',
        primary: false
      }
    ]
  }
];
