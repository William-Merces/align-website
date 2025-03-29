/**
 * Dados das etapas do processo de trabalho da Align
 */

export interface ProcessStep {
  title: string;
  duration: string;
  description: string;
  details: string[];
  completion?: number;
}

export interface WorkflowStage {
  title: string;
  icon: string;
  description: string;
  checklist: string[];
}

// Etapas condensadas do processo da Align
export const processSteps: ProcessStep[] = [
  {
    title: 'Consultoria e Planejamento',
    duration: '1-2 semanas',
    completion: 100,
    description: 'Análise das suas necessidades e desenvolvimento de uma solução personalizada para seu negócio.',
    details: [
      'Análise detalhada de requisitos e processos atuais',
      'Identificação de oportunidades de otimização',
      'Composição da equipe ideal para seu projeto',
      'Roteiro detalhado de implementação',
      'Estrutura de custos e projeção de economias'
    ]
  },
  {
    title: 'Implementação e Transição',
    duration: '2-3 semanas',
    completion: 85,
    description: 'Montagem da equipe dedicada, treinamento e início da operação em tempo recorde.',
    details: [
      'Montagem e integração da equipe em apenas 15 dias',
      'Transferência de conhecimento e treinamento',
      'Documentação e refinamento de processos',
      'Configuração de acesso e segurança',
      'Transição gradual com acompanhamento especializado'
    ]
  },
  {
    title: 'Gestão e Crescimento',
    duration: 'Contínuo',
    completion: 70,
    description: 'Monitoramento contínuo, otimização e escalabilidade para acompanhar o crescimento do seu negócio.',
    details: [
      'Dashboards de desempenho em tempo real',
      'Reuniões regulares de revisão e ajustes',
      'Iniciativas de melhoria contínua',
      'Escalabilidade sob demanda conforme seu crescimento',
      'Desenvolvimento de parceria de longo prazo'
    ]
  }
];

// Versão simplificada do fluxo de trabalho
export const workflowStages: WorkflowStage[] = [
  {
    title: "Descoberta",
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
    description: "Avaliação completa das suas operações, desafios e objetivos de negócio.",
    checklist: [
      "Análise de requisitos do negócio",
      "Avaliação de processos atuais",
      "Identificação de oportunidades",
      "Verificação de alinhamento estratégico",
      "Recomendações preliminares"
    ]
  },
  {
    title: "Planejamento",
    icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
    description: "Desenvolvimento da estratégia personalizada para seus objetivos específicos.",
    checklist: [
      "Planejamento da composição da equipe",
      "Criação do roteiro de implementação",
      "Projeção de custos e economias",
      "Avaliação e mitigação de riscos",
      "Definição dos KPIs de sucesso"
    ]
  },
  {
    title: "Execução",
    icon: '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
    description: "Montagem da equipe dedicada e implementação com transição suave.",
    checklist: [
      "Montagem e treinamento da equipe",
      "Transferência de conhecimento",
      "Documentação de processos",
      "Integração de sistemas",
      "Implementação em fases"
    ]
  }
];
