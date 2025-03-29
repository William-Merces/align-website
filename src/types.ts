// Definições de tipos para o projeto Align

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  description?: string;
}

// Você pode adicionar mais tipos conforme necessário para o projeto
