<template>
  <section class="roi-calculator">
    <div class="roi-calculator__container">
      <!-- Cabeçalho e introdução -->
      <div class="roi-calculator__header">
        <h2 class="roi-calculator__title">Calcule o seu ROI com a Align</h2>
        <p class="roi-calculator__subtitle">
          Descubra quanto sua empresa pode economizar e crescer implementando nossas soluções
        </p>
      </div>

      <!-- Card principal -->
      <div class="roi-calculator__card">
        <!-- Barra de progresso -->
        <div class="roi-calculator__progress">
          <div class="progress-bar">
            <div
              class="progress-bar__fill"
              :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
            ></div>
          </div>
          <div class="progress-bar__label">
            Etapa {{ currentStep }} de {{ totalSteps }}
          </div>
        </div>

        <!-- Conteúdo do formulário -->
        <div class="roi-calculator__content">
          <!-- Etapa 1: Tamanho da Empresa -->
          <div v-if="currentStep === 1" class="step-content step-company-size">
            <h3 class="step-title">Qual o tamanho da sua empresa?</h3>

            <div class="company-size-grid">
              <button
                v-for="option in companySize"
                :key="option.value"
                @click="selectCompanySize(option)"
                class="company-size-option"
                :class="{ 'is-selected': formData.companySize === option.value }"
                type="button"
              >
                <div class="company-size-option__icon" :class="`icon-${option.value}`">
                  <span v-if="option.value === 'micro'">XS</span>
                  <span v-else-if="option.value === 'small'">S</span>
                  <span v-else-if="option.value === 'medium'">M</span>
                  <span v-else-if="option.value === 'large'">L</span>
                </div>
                <span class="company-size-option__label">{{ option.label }}</span>
                <div v-if="formData.companySize === option.value" class="company-size-option__check">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <!-- Etapa 2: Desafios -->
          <div v-if="currentStep === 2" class="step-content step-challenges">
            <h3 class="step-title">Quais são seus principais desafios?</h3>

            <div class="challenges-grid">
              <button
                v-for="challenge in challenges"
                :key="challenge.value"
                @click="selectChallenge(challenge)"
                class="challenge-option"
                :class="{ 'is-selected': formData.challenge === challenge.value }"
                type="button"
              >
                <div class="challenge-option__icon" :class="`icon-${challenge.value}`">
                  <span v-if="challenge.value === 'efficiency'">⚡</span>
                  <span v-else-if="challenge.value === 'costs'">💰</span>
                  <span v-else-if="challenge.value === 'quality'">⭐</span>
                  <span v-else-if="challenge.value === 'scaling'">📈</span>
                </div>
                <span class="challenge-option__label">{{ challenge.label }}</span>
                <p class="challenge-option__description">{{ challenge.description }}</p>
                <div v-if="formData.challenge === challenge.value" class="challenge-option__check">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>

            <div class="navigation-controls">
              <button
                @click="goBack"
                class="button button--back"
                type="button"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button__icon">
                  <path d="M19 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Voltar</span>
              </button>
            </div>
          </div>

          <!-- Etapa 3: Números Atuais -->
          <div v-if="currentStep === 3" class="step-content step-metrics">
            <h3 class="step-title">Conte-nos sobre suas métricas atuais</h3>

            <div class="metrics-form">
              <div class="form-field">
                <label class="form-field__label">
                  Número de funcionários
                  <div class="tooltip">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="tooltip__icon">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span class="tooltip__text">Número total de funcionários em tempo integral na sua empresa</span>
                  </div>
                </label>
                <div class="form-field__input-wrapper">
                  <input
                    type="number"
                    v-model.number="formData.employees"
                    min="1"
                    class="form-field__input"
                    placeholder="ex: 10"
                  />
                  <span class="form-field__suffix">funcionários</span>
                </div>
              </div>

              <div class="form-field">
                <label class="form-field__label">
                  Receita mensal
                  <div class="tooltip">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="tooltip__icon">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span class="tooltip__text">Receita média mensal do seu negócio</span>
                  </div>
                </label>
                <div class="form-field__input-wrapper">
                  <span class="form-field__prefix">$</span>
                  <input
                    type="number"
                    v-model.number="formData.revenue"
                    min="0"
                    class="form-field__input form-field__input--with-prefix"
                    placeholder="ex: 200000"
                  />
                  <span class="form-field__suffix">/mês</span>
                </div>
              </div>

              <div class="form-field">
                <label class="form-field__label">
                  Horas gastas em processos manuais
                  <div class="tooltip">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="tooltip__icon">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span class="tooltip__text">Média de horas diárias gastas em processos que poderiam ser automatizados</span>
                  </div>
                </label>
                <div class="form-field__input-wrapper">
                  <input
                    type="number"
                    v-model.number="formData.manualHours"
                    min="0"
                    max="24"
                    class="form-field__input"
                    placeholder="ex: 4"
                  />
                  <span class="form-field__suffix">horas/dia</span>
                </div>
              </div>
            </div>

            <div class="navigation-controls">
              <button
                @click="goBack"
                class="button button--back"
                type="button"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button__icon">
                  <path d="M19 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Voltar</span>
              </button>
            </div>
          </div>

          <!-- Etapa 4: Simulação -->
          <div v-if="currentStep === 4" class="step-content step-simulation">
            <h3 class="step-title step-title--animated">Resultados da Simulação</h3>

            <div class="simulation-results">
              <!-- Cenário Atual -->
              <div class="result-card result-card--current">
                <h4 class="result-card__title">Seu Cenário Atual</h4>
                <div class="metrics-grid">
                  <div class="metric-item">
                    <div class="metric-item__icon icon-employees"></div>
                    <p class="metric-item__label">Funcionários</p>
                    <p class="metric-item__value">{{ formData.employees }}</p>
                  </div>
                  <div class="metric-item">
                    <div class="metric-item__icon icon-revenue"></div>
                    <p class="metric-item__label">Receita Mensal</p>
                    <p class="metric-item__value">${{ formatCurrency(formData.revenue) }}</p>
                  </div>
                  <div class="metric-item">
                    <div class="metric-item__icon icon-productivity"></div>
                    <p class="metric-item__label">Produtividade</p>
                    <p class="metric-item__value">{{ formatPercent(currentProductivity) }}%</p>
                  </div>
                </div>
              </div>

              <!-- Simulador Interativo -->
              <div class="result-card result-card--simulation">
                <h4 class="result-card__title">Simule com a Align</h4>

                <div class="slider-control">
                  <label class="slider-control__label">
                    Adicionar funcionários com Align
                    <span class="slider-control__value">+{{ formData.newEmployees }}</span>
                  </label>
                  <div class="slider-container">
                    <input
                      type="range"
                      v-model.number="formData.newEmployees"
                      min="0"
                      :max="maxNewEmployees"
                      step="1"
                      class="slider-control__input"
                    />
                    <div class="slider-control__markers">
                      <span>+0</span>
                      <span>+{{ Math.floor(maxNewEmployees / 2) }}</span>
                      <span>+{{ maxNewEmployees }}</span>
                    </div>
                  </div>
                </div>

                <div class="metrics-grid">
                  <div class="metric-item metric-item--projected">
                    <div class="metric-item__icon icon-employees-new"></div>
                    <p class="metric-item__label">Novos Funcionários</p>
                    <p class="metric-item__value">
                      {{ formData.employees + formData.newEmployees }}
                      <span class="metric-item__delta">+{{ formData.newEmployees }}</span>
                    </p>
                  </div>
                  <div class="metric-item metric-item--projected">
                    <div class="metric-item__icon icon-revenue-new"></div>
                    <p class="metric-item__label">Nova Receita</p>
                    <p class="metric-item__value">
                      ${{ formatCurrency(projectedRevenue) }}
                      <span class="metric-item__delta">+{{ formatPercent(revenueIncrease) }}%</span>
                    </p>
                  </div>
                  <div class="metric-item metric-item--projected">
                    <div class="metric-item__icon icon-productivity-new"></div>
                    <p class="metric-item__label">Nova Produtividade</p>
                    <p class="metric-item__value">
                      {{ formatPercent(newProductivity) }}%
                      <span class="metric-item__delta">+{{ formatPercent(productivityIncrease) }}%</span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Resultado Final ROI -->
              <div class="result-card result-card--roi">
                <h4 class="result-card__title">Seu Retorno sobre Investimento</h4>
                <div class="roi-metrics">
                  <div class="roi-metric">
                    <div class="roi-metric__icon icon-savings"></div>
                    <p class="roi-metric__label">Economia Mensal Estimada</p>
                    <p class="roi-metric__value">${{ formatCurrency(monthlySavings) }}</p>
                  </div>
                  <div class="roi-metric">
                    <div class="roi-metric__icon icon-roi"></div>
                    <p class="roi-metric__label">ROI Anual Projetado</p>
                    <p class="roi-metric__value">{{ formatPercent(annualROI) }}%</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="navigation-controls navigation-controls--multi">
              <button
                @click="goBack"
                class="button button--back"
                type="button"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button__icon">
                  <path d="M19 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Voltar</span>
              </button>

              <button
                @click="restartCalculator"
                class="button button--secondary"
                type="button"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button__icon">
                  <path d="M23 4v6h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Recalcular</span>
              </button>

              <button
                @click="nextStep"
                class="button button--primary"
                type="button"
              >
                <span>Ver Recomendações</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button__icon">
                  <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Etapa 5: Recomendações e CTA -->
          <div v-if="currentStep === 5" class="step-content step-recommendations">
            <h3 class="step-title">Recomendações Personalizadas</h3>
            <p class="step-description">
              Com base na sua avaliação, preparamos uma análise personalizada para o seu negócio.
            </p>

            <div class="recommendations-container">
              <div class="recommendation-card">
                <div class="recommendation-card__icon icon-company-size"></div>
                <div class="recommendation-card__content">
                  <h4 class="recommendation-card__title">Com base no tamanho da sua empresa</h4>
                  <p class="recommendation-card__text">{{ companySizeRecommendation }}</p>
                </div>
              </div>

              <div class="recommendation-card">
                <div class="recommendation-card__icon icon-challenge-solution"></div>
                <div class="recommendation-card__content">
                  <h4 class="recommendation-card__title">Para seus desafios específicos</h4>
                  <p class="recommendation-card__text">{{ challengeRecommendation }}</p>
                </div>
              </div>

              <div class="recommendation-card recommendation-card--highlight">
                <div class="recommendation-card__icon icon-growth"></div>
                <div class="recommendation-card__content">
                  <h4 class="recommendation-card__title">Oportunidade de crescimento</h4>
                  <p class="recommendation-card__text">
                    Com base nos seus dados, estimamos que seu negócio pode
                    <span class="highlight-text">aumentar a receita em {{ formatPercent(revenueIncrease) }}%</span>
                    e <span class="highlight-text">economizar até ${{ formatCurrency(monthlySavings) }} por mês</span>
                    com nossas soluções.
                  </p>
                </div>
              </div>
            </div>

            <div class="cta-container">
              <button
                @click="downloadReport"
                class="cta-button cta-button--download"
                type="button"
              >
                <span>Baixar Relatório Completo</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cta-button__icon">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <button
                @click="contactSpecialist"
                class="cta-button cta-button--contact"
                type="button"
              >
                <span>Falar com um Especialista</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cta-button__icon">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>

            <div class="navigation-controls">
              <button
                @click="goBack"
                class="button button--back"
                type="button"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button__icon">
                  <path d="M19 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Voltar</span>
              </button>
            </div>
          </div>

          <!-- Botão de Próxima Etapa -->
          <div v-if="currentStep < 5 && currentStep !== 4" class="next-button-container">
            <button
              @click="nextStep"
              class="button button--primary button--large"
              :class="{'button--disabled': !canProceed}"
              :disabled="!canProceed"
              type="button"
            >
              <span>{{ currentStep === totalSteps - 1 ? 'Ver Resultados' : 'Continuar' }}</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button__icon">
                <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
/**
 * ROI Calculator Script - v3.0
 *
 * Este arquivo contém toda a lógica de negócio da calculadora de ROI.
 * Gerencia interações do usuário, cálculos, validações e animações.
 *
 * Última atualização: 29/03/2025
 * Autor: Equipe Align
 */

import { ref, computed, watch, onMounted, nextTick } from 'vue';

// ==========================================
// DADOS DO FORMULÁRIO E CONFIGURAÇÕES
// ==========================================

/**
 * Estado do formulário
 * Mantém todos os dados inseridos pelo usuário ou calculados
 */
const formData = ref({
  // Dados selecionados pelo usuário
  companySize: null,
  challenge: null,
  employees: 10,
  revenue: 200000,
  manualHours: 4,
  newEmployees: 3,

  // Flags de estado interno
  hasInteracted: false,
  animationActive: false
});

/**
 * Opções de tamanho de empresa
 * Cada opção contém um valor, rótulo e descrição
 */
const companySize = [
  {
    value: 'micro',
    label: '1-10 funcionários',
    description: 'Pequenos negócios e startups'
  },
  {
    value: 'small',
    label: '11-50 funcionários',
    description: 'Empresas de pequeno porte'
  },
  {
    value: 'medium',
    label: '51-200 funcionários',
    description: 'Empresas de médio porte'
  },
  {
    value: 'large',
    label: '200+ funcionários',
    description: 'Grandes empresas e corporações'
  }
];

/**
 * Opções de desafios
 * Cada desafio contém um valor, rótulo e descrição
 */
const challenges = [
  {
    value: 'efficiency',
    label: 'Eficiência operacional',
    description: 'Otimizar processos e reduzir gargalos operacionais'
  },
  {
    value: 'costs',
    label: 'Custos elevados',
    description: 'Reduzir despesas operacionais e maximizar recursos'
  },
  {
    value: 'quality',
    label: 'Qualidade de serviço',
    description: 'Melhorar consistência e satisfação do cliente'
  },
  {
    value: 'scaling',
    label: 'Dificuldades de escala',
    description: 'Expandir operações sem comprometer a performance'
  }
];

// ==========================================
// CONTROLE DE ETAPAS
// ==========================================

/**
 * Controle de navegação entre etapas
 */
const currentStep = ref(1);
const totalSteps = 5;

/**
 * Avança para a próxima etapa
 * Inclui transições CSS para animação
 */
const nextStep = async () => {
  if (currentStep.value < totalSteps && canProceed.value) {
    formData.value.animationActive = true;

    // Atualizar a etapa
    currentStep.value++;

    // Aguardar o DOM atualizar e definir classes de animação
    await nextTick();

    // Desativar animação após transição
    setTimeout(() => {
      formData.value.animationActive = false;
    }, 500);
  }
};

/**
 * Retorna para a etapa anterior
 * Inclui transições CSS para animação
 */
const goBack = async () => {
  if (currentStep.value > 1) {
    formData.value.animationActive = true;

    // Atualizar a etapa
    currentStep.value--;

    // Aguardar o DOM atualizar
    await nextTick();

    // Desativar animação após transição
    setTimeout(() => {
      formData.value.animationActive = false;
    }, 500);
  }
};

/**
 * Reinicia a calculadora para a etapa 3
 * Mantém os dados já inseridos, mas permite ajustar novos funcionários
 */
const restartCalculator = async () => {
  formData.value.animationActive = true;

  // Reset dos novos funcionários
  formData.value.newEmployees = 3;

  // Voltar para a etapa 3
  currentStep.value = 3;

  // Aguardar o DOM atualizar
  await nextTick();

  // Desativar animação após transição
  setTimeout(() => {
    formData.value.animationActive = false;
  }, 500);
};

// ==========================================
// MÉTODOS DE SELEÇÃO
// ==========================================

/**
 * Seleciona o tamanho da empresa
 * @param option A opção selecionada
 */
const selectCompanySize = (option) => {
  formData.value.companySize = option.value;
  formData.value.hasInteracted = true;

  // Ajustar automaticamente o número de funcionários com base no tamanho da empresa
  adjustEmployeesByCompanySize(option.value);
};

/**
 * Seleciona o desafio principal
 * @param challenge O desafio selecionado
 */
const selectChallenge = (challenge) => {
  formData.value.challenge = challenge.value;
  formData.value.hasInteracted = true;
};

// ==========================================
// VALIDAÇÃO
// ==========================================

/**
 * Verifica se o usuário pode prosseguir para a próxima etapa
 * Cada etapa tem suas próprias regras de validação
 */
const canProceed = computed(() => {
  switch (currentStep.value) {
    case 1:
      return formData.value.companySize !== null;
    case 2:
      return formData.value.challenge !== null;
    case 3:
      return formData.value.employees > 0 &&
             formData.value.revenue > 0 &&
             formData.value.manualHours >= 0 &&
             formData.value.manualHours <= 24;
    default:
      return true;
  }
});

// ==========================================
// CÁLCULOS DE NEGÓCIO
// ==========================================

/**
 * Produtividade atual com base no tamanho da empresa
 * Empresas menores geralmente têm produtividade menor
 */
const currentProductivity = computed(() => {
  const baseProd = {
    'micro': 65,
    'small': 70,
    'medium': 75,
    'large': 78
  };

  return formData.value.companySize
    ? baseProd[formData.value.companySize]
    : 70; // Valor padrão
});

/**
 * Número máximo de novos funcionários permitido na simulação
 * Baseado no número atual de funcionários
 */
const maxNewEmployees = computed(() => {
  // Máximo de 50% a mais ou pelo menos 5 novos funcionários
  return Math.max(5, Math.ceil(formData.value.employees * 0.5));
});

/**
 * Fator de eficiência baseado no desafio selecionado
 * Cada desafio tem um impacto diferente na melhoria de eficiência
 */
const efficiencyFactor = computed(() => {
  const factors = {
    'efficiency': 1.25, // Maior ganho para quem busca eficiência
    'costs': 1.15,
    'quality': 1.1,
    'scaling': 1.2
  };

  return formData.value.challenge
    ? factors[formData.value.challenge]
    : 1.15; // Valor padrão
});

/**
 * Nova produtividade após implementação da Align
 * Calculado com base na produtividade atual e no fator de eficiência
 */
const newProductivity = computed(() => {
  // Aumento de produtividade com Align (limitado a 98%)
  return Math.min(98, currentProductivity.value * efficiencyFactor.value);
});

/**
 * Aumento percentual de produtividade
 */
const productivityIncrease = computed(() => {
  return newProductivity.value - currentProductivity.value;
});

/**
 * Receita projetada após implementação da Align
 * Considera novos funcionários e aumento de produtividade
 */
const projectedRevenue = computed(() => {
  // Fórmula: receita atual * (1 + % novos funcionários) * fator de produtividade
  const currentEmployees = formData.value.employees;
  const newEmployees = formData.value.newEmployees;
  const employeeRatio = 1 + (newEmployees / currentEmployees);

  // Produtividade também afeta a receita
  const productivityRatio = newProductivity.value / currentProductivity.value;

  return formData.value.revenue * employeeRatio * productivityRatio;
});

/**
 * Aumento percentual de receita
 */
const revenueIncrease = computed(() => {
  return ((projectedRevenue.value / formData.value.revenue) - 1) * 100;
});

/**
 * Economia mensal estimada com a implementação da Align
 * Baseado nas horas economizadas e valor horário do trabalho
 */
const monthlySavings = computed(() => {
  // Taxa horária aproximada
  const hourlyRate = formData.value.revenue / (formData.value.employees * 22 * 8);

  // 70% das horas manuais são economizadas
  const hoursSavedPerDay = formData.value.manualHours * 0.7;

  // Economia mensal total
  const monthlySaved = hoursSavedPerDay * hourlyRate * 22 * formData.value.employees;

  return monthlySaved;
});

/**
 * ROI anual projetado
 * Considera economia anual vs. custo estimado da solução
 */
const annualROI = computed(() => {
  // Custo estimado da Align (valores hipotéticos para demonstração)
  const baseCost = {
    'micro': 3000,
    'small': 5000,
    'medium': 10000,
    'large': 20000
  };

  const monthlyCost = formData.value.companySize ? baseCost[formData.value.companySize] : 5000;
  const annualCost = monthlyCost * 12;
  const annualSavings = monthlySavings.value * 12;

  return (annualSavings / annualCost) * 100;
});

// ==========================================
// RECOMENDAÇÕES PERSONALIZADAS
// ==========================================

/**
 * Recomendação baseada no tamanho da empresa
 */
const companySizeRecommendation = computed(() => {
  const recommendations = {
    'micro': 'Nossas soluções são perfeitamente dimensionadas para pequenos negócios, permitindo automatizar processos essenciais sem investimentos excessivos. A implementação é rápida e o retorno imediato.',
    'small': 'Para empresas do seu tamanho, nossa plataforma oferece o equilíbrio ideal entre personalização e facilidade de implementação. Você terá acesso a recursos avançados com uma curva de aprendizado suave.',
    'medium': 'Negócios de médio porte como o seu se beneficiam da nossa capacidade de integração com sistemas existentes, permitindo uma transição suave e preservando seus investimentos anteriores em tecnologia.',
    'large': 'Nossa solução empresarial foi projetada para grandes organizações, oferecendo escalabilidade, governança avançada e possibilidade de personalização profunda para atender às necessidades específicas do seu negócio.'
  };

  return formData.value.companySize ? recommendations[formData.value.companySize] : '';
});

/**
 * Recomendação baseada no desafio principal
 */
const challengeRecommendation = computed(() => {
  const recommendations = {
    'efficiency': 'Nossa plataforma foi projetada para eliminar gargalos operacionais, reduzindo o tempo gasto em processos manuais em até 70%. Automatizamos tarefas repetitivas e implementamos fluxos de trabalho otimizados que aumentam a produtividade de toda a equipe.',
    'costs': 'Nossos clientes relatam uma redução média de 30% nos custos operacionais após 6 meses de implementação. Nossa solução elimina desperdícios, otimiza recursos e permite um controle preciso sobre gastos em tempo real.',
    'quality': 'Garantimos a padronização e qualidade dos processos com ferramentas de verificação automática, trilhas de auditoria e relatórios detalhados. Isso resulta em uma experiência consistente para seus clientes e redução de erros em até 90%.',
    'scaling': 'Nossa plataforma cresce com seu negócio, permitindo adicionar usuários e processos sem perda de desempenho. A arquitetura escalável garante que você possa expandir globalmente mantendo a mesma eficiência operacional.'
  };

  return formData.value.challenge ? recommendations[formData.value.challenge] : '';
});

// ==========================================
// FUNÇÕES UTILITÁRIAS
// ==========================================

/**
 * Formata valores monetários
 * @param value Valor a ser formatado
 */
const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR').format(Math.round(value));
};

/**
 * Formata valores percentuais
 * @param value Valor a ser formatado
 */
const formatPercent = (value) => {
  return Math.round(value * 10) / 10;
};

/**
 * Ajusta o número de funcionários com base no tamanho da empresa
 * @param size Tamanho da empresa
 */
const adjustEmployeesByCompanySize = (size) => {
  switch (size) {
    case 'micro':
      // 1-10 funcionários
      formData.value.employees = Math.min(formData.value.employees, 10);
      if (formData.value.employees < 1) formData.value.employees = 5;
      break;

    case 'small':
      // 11-50 funcionários
      formData.value.employees = Math.min(Math.max(formData.value.employees, 11), 50);
      break;

    case 'medium':
      // 51-200 funcionários
      formData.value.employees = Math.min(Math.max(formData.value.employees, 51), 200);
      break;

    case 'large':
      // 201+ funcionários
      formData.value.employees = Math.max(formData.value.employees, 201);
      break;
  }
};

// ==========================================
// AÇÕES FINAIS
// ==========================================

/**
 * Download do relatório de ROI
 * Em produção, geraria um PDF ou documento
 */
const downloadReport = () => {
  // Em produção, isso geraria um PDF ou documento
  alert('Seu relatório está sendo gerado e ficará disponível para download em instantes.');
};

/**
 * Contato com um especialista
 * Em produção, abriria um modal ou redirecionaria
 */
const contactSpecialist = () => {
  // Em produção, poderia abrir um modal de contato ou redirecionar para uma página
  window.location.href = '/contact?source=roi-calculator';
};

// ==========================================
// LIFECYCLE HOOKS & WATCHERS
// ==========================================

/**
 * Observa mudanças no tamanho da empresa para ajustar o número de funcionários
 */
watch(() => formData.value.companySize, (newSize) => {
  if (newSize) {
    adjustEmployeesByCompanySize(newSize);
  }
});

/**
 * Hook executado quando o componente é montado
 */
onMounted(() => {
  // Inicializar com valores padrão
  if (!formData.value.companySize) {
    formData.value.companySize = 'small';
    adjustEmployeesByCompanySize('small');
  }
});
</script>
<style scoped>
/**
 * ROI Calculator Styles - v3.0
 *
 * Estilos modernos, elegantes e interativos para a calculadora de ROI
 * Utiliza animações CSS e transições para uma experiência premium
 *
 * Última atualização: 29/03/2025
 * Autor: Equipe Align
 */

/* ==========================================
 * CONFIGURAÇÃO GERAL E VARIÁVEIS
 * ========================================== */

.roi-calculator {
  --primary: #4f46e5;
  --primary-light: #6366f1;
  --primary-dark: #4338ca;
  --secondary: #06b6d4;
  --secondary-light: #22d3ee;
  --secondary-dark: #0891b2;
  --success: #10b981;
  --success-light: #34d399;
  --success-dark: #059669;
  --warning: #f59e0b;
  --danger: #ef4444;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  --primary-gradient: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  --success-gradient: linear-gradient(135deg, var(--success) 0%, var(--secondary) 100%);
  --card-radius: 16px;
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
  --easing-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ==========================================
 * SEÇÃO PRINCIPAL E CONTAINER
 * ========================================== */

.roi-calculator {
  position: relative;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%);
  overflow: hidden;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.roi-calculator::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: var(--primary-gradient);
  z-index: 1;
}

.roi-calculator::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
  z-index: 0;
}

.roi-calculator__container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* ==========================================
 * CABEÇALHO E TÍTULOS
 * ========================================== */

.roi-calculator__header {
  text-align: center;
  margin-bottom: 3rem;
}

.roi-calculator__title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--gray-900);
  margin-bottom: 1rem;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  display: inline-block;
  position: relative;
}

.roi-calculator__title::after {
  content: '';
  position: absolute;
  width: 80px;
  height: 4px;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-gradient);
  border-radius: 2px;
}

.roi-calculator__subtitle {
  font-size: 1.25rem;
  color: var(--gray-600);
  max-width: 700px;
  margin: 1.5rem auto 0;
  line-height: 1.6;
}

.step-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--gray-900);
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.step-title::after {
  content: '';
  position: absolute;
  width: 60px;
  height: 4px;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-gradient);
  border-radius: 2px;
}

.step-title--animated {
  animation: titlePulse 3s ease-in-out infinite alternate;
}

@keyframes titlePulse {
  0% {
    text-shadow: 0 0 5px rgba(79, 70, 229, 0);
  }
  100% {
    text-shadow: 0 0 15px rgba(79, 70, 229, 0.3);
  }
}

.step-description {
  font-size: 1.125rem;
  color: var(--gray-600);
  text-align: center;
  max-width: 700px;
  margin: -1.5rem auto 2rem;
  line-height: 1.6;
}

/* ==========================================
 * CARD PRINCIPAL
 * ========================================== */

.roi-calculator__card {
  background: white;
  border-radius: var(--card-radius);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto;
  transition: var(--transition-normal);
  border: 1px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 5;
}

.roi-calculator__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.15);
}

.roi-calculator__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(79, 70, 229, 0.08), transparent 70%),
              radial-gradient(circle at bottom left, rgba(6, 182, 212, 0.08), transparent 70%);
  z-index: -1;
}

.roi-calculator__content {
  padding: 2.5rem;
}

/* ==========================================
 * BARRA DE PROGRESSO
 * ========================================== */

.roi-calculator__progress {
  padding: 1.5rem 2.5rem 0.75rem;
  background: linear-gradient(to right, rgba(79, 70, 229, 0.03), rgba(6, 182, 212, 0.03));
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.progress-bar {
  height: 8px;
  border-radius: 4px;
  background-color: var(--gray-200);
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.progress-bar__fill {
  height: 100%;
  border-radius: 4px;
  background: var(--primary-gradient);
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);
}

.progress-bar__label {
  text-align: right;
  font-size: 0.875rem;
  color: var(--gray-500);
  margin-top: 0.5rem;
  font-weight: 500;
}

/* ==========================================
 * ANIMAÇÕES DE CONTEÚDO
 * ========================================== */

.step-content {
  animation: fadeInUp 0.6s var(--easing-bounce);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* ==========================================
 * OPÇÕES DE TAMANHO DA EMPRESA
 * ========================================== */

.company-size-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.company-size-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  background: white;
  border: 2px solid var(--gray-200);
  transition: all var(--transition-normal);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  text-align: center;
}

.company-size-option:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.company-size-option.is-selected {
  border-color: var(--primary);
  background: linear-gradient(to bottom right, rgba(79, 70, 229, 0.05), rgba(6, 182, 212, 0.05));
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.2);
}

.company-size-option__icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-gradient);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  transition: all var(--transition-normal);
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3);
}

.company-size-option:hover .company-size-option__icon {
  transform: scale(1.1);
}

.company-size-option__label {
  font-weight: 600;
  color: var(--gray-800);
  font-size: 1.125rem;
  transition: all var(--transition-normal);
}

.company-size-option.is-selected .company-size-option__label {
  color: var(--primary);
}

.company-size-option__check {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 20px;
  height: 20px;
  color: var(--primary);
  animation: fadeIn 0.3s var(--easing-bounce);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ==========================================
 * OPÇÕES DE DESAFIOS
 * ========================================== */

.challenges-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.challenge-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  background: white;
  border: 2px solid var(--gray-200);
  transition: all var(--transition-normal);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  text-align: center;
}

.challenge-option:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.challenge-option.is-selected {
  border-color: var(--primary);
  background: linear-gradient(to bottom right, rgba(79, 70, 229, 0.05), rgba(6, 182, 212, 0.05));
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.2);
}

.challenge-option__icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.75rem;
  transition: all var(--transition-normal);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
}

.icon-efficiency {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
}

.icon-costs {
  background: linear-gradient(135deg, var(--secondary-dark), var(--secondary));
}

.icon-quality {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
}

.icon-scaling {
  background: linear-gradient(135deg, #7c3aed, #8b5cf6);
}

.challenge-option:hover .challenge-option__icon {
  transform: scale(1.1);
}

.challenge-option__label {
  font-weight: 600;
  color: var(--gray-800);
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  transition: all var(--transition-normal);
}

.challenge-option.is-selected .challenge-option__label {
  color: var(--primary);
}

.challenge-option__description {
  font-size: 0.875rem;
  color: var(--gray-500);
  margin-top: 0.5rem;
  line-height: 1.5;
}

.challenge-option__check {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 20px;
  height: 20px;
  color: var(--primary);
  animation: fadeIn 0.3s var(--easing-bounce);
}

/* ==========================================
 * FORMULÁRIO DE MÉTRICAS
 * ========================================== */

.metrics-form {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  max-width: 600px;
  margin: 0 auto;
}

.form-field {
  position: relative;
}

.form-field__label {
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 0.625rem;
  color: var(--gray-700);
  font-size: 0.95rem;
}

.tooltip {
  margin-left: 0.5rem;
  position: relative;
  display: inline-block;
  cursor: help;
}

.tooltip__icon {
  width: 16px;
  height: 16px;
  color: var(--gray-400);
  transition: color var(--transition-fast);
}

.tooltip:hover .tooltip__icon {
  color: var(--primary);
}

.tooltip__text {
  visibility: hidden;
  position: absolute;
  width: 240px;
  background-color: var(--gray-800);
  color: white;
  text-align: center;
  padding: 0.75rem;
  border-radius: 6px;
  z-index: 10;
  bottom: 150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity var(--transition-normal), transform var(--transition-normal);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.4;
  box-shadow: var(--shadow-lg);
  pointer-events: none;
}

.tooltip__text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -8px;
  border-width: 8px;
  border-style: solid;
  border-color: var(--gray-800) transparent transparent transparent;
}

.tooltip:hover .tooltip__text {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(-5px);
}

.form-field__input-wrapper {
  position: relative;
  display: flex;
}

.form-field__input {
  width: 100%;
  padding: 1rem 5rem 1rem 1.25rem;
  border: 2px solid var(--gray-200);
  border-radius: 8px;
  font-size: 1rem;
  transition: all var(--transition-normal);
  color: var(--gray-900);
  font-weight: 500;
  background: white;
  box-shadow: var(--shadow-sm);
  line-height: 1.5;
}

.form-field__input--with-prefix {
  padding-left: 3rem;
}

.form-field__input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
}

.form-field__prefix {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  color: var(--gray-600);
  font-weight: 500;
  background: rgba(243, 244, 246, 0.5);
  border-right: 1px solid var(--gray-200);
  border-radius: 8px 0 0 8px;
  font-size: 1rem;
}

.form-field__suffix {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  color: var(--gray-600);
  font-weight: 500;
  background: rgba(243, 244, 246, 0.5);
  border-left: 1px solid var(--gray-200);
  border-radius: 0 8px 8px 0;
  font-size: 0.875rem;
}

/* Remove spinner dos inputs numéricos */
.form-field__input::-webkit-outer-spin-button,
.form-field__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-field__input[type="number"] {
  appearance: textfield;
  -moz-appearance: textfield;
}

/* ==========================================
 * BOTÕES DE NAVEGAÇÃO
 * ========================================== */

.navigation-controls {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.navigation-controls--multi {
  justify-content: space-between;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all var(--transition-normal);
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.button__icon {
  width: 20px;
  height: 20px;
  transition: transform var(--transition-normal);
}

.button--back {
  background: var(--gray-100);
  color: var(--gray-600);
}

.button--back .button__icon {
  margin-right: 0.5rem;
}

.button--back:hover {
  background: var(--gray-200);
  color: var(--gray-800);
  transform: translateX(-3px);
}

.button--back:hover .button__icon {
  transform: translateX(-3px);
}

.button--secondary {
  background: var(--gray-100);
  color: var(--gray-700);
  box-shadow: var(--shadow-sm);
}

.button--secondary .button__icon {
  margin-right: 0.5rem;
}

.button--secondary:hover {
  background: var(--gray-200);
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.button--primary {
  background: var(--primary-gradient);
  color: white;
  box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3);
}

.button--primary .button__icon {
  margin-left: 0.5rem;
}

.button--primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 20px -3px rgba(79, 70, 229, 0.4);
}

.button--primary:hover .button__icon {
  transform: translateX(3px);
}

.button--large {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
}

.button--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.button--disabled:hover {
  transform: none !important;
  box-shadow: none !important;
}

.button--disabled .button__icon {
  transform: none !important;
}

.next-button-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

/* ==========================================
 * SIMULAÇÃO DE RESULTADOS
 * ========================================== */

.simulation-results {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.result-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--gray-200);
  transition: all var(--transition-normal);
}

.result-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.result-card__title {
  padding: 1.25rem;
  background: linear-gradient(to right, rgba(79, 70, 229, 0.05), rgba(6, 182, 212, 0.05));
  font-weight: 700;
  color: var(--gray-800);
  border-bottom: 1px solid var(--gray-200);
  text-align: center;
  font-size: 1.125rem;
}

.result-card--current {
  background: linear-gradient(to bottom right, #ffffff, #f9fafb);
}

.result-card--simulation {
  background: linear-gradient(to bottom right, #f8fafc, #eff6ff);
  border-color: rgba(79, 70, 229, 0.2);
}

.result-card--roi {
  background: linear-gradient(to bottom right, #f0f9ff, #ecfdf5);
  border-color: rgba(6, 182, 212, 0.2);
}

/* ==========================================
 * MÉTRICAS E INDICADORES
 * ========================================== */

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1.25rem;
}

.metric-item {
  background: white;
  border-radius: 8px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--gray-200);
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.metric-item:hover {
  box-shadow: var(--shadow);
  transform: translateY(-3px);
}

.metric-item--projected {
  background: linear-gradient(to bottom right, rgba(79, 70, 229, 0.03), rgba(6, 182, 212, 0.03));
  border-color: rgba(79, 70, 229, 0.2);
}

.metric-item__icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.2);
}

.icon-employees {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
}

.icon-revenue {
  background: linear-gradient(135deg, var(--secondary-dark), var(--secondary));
  color: white;
}

.icon-productivity {
  background: linear-gradient(135deg, var(--primary-dark), var(--success));
  color: white;
}

.icon-employees-new {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
  position: relative;
}

.icon-employees-new::after {
  content: "+";
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background: var(--success);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.icon-revenue-new {
  background: linear-gradient(135deg, var(--secondary-dark), var(--secondary));
  color: white;
  position: relative;
}

.icon-revenue-new::after {
  content: "↑";
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background: var(--success);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.icon-productivity-new {
  background: linear-gradient(135deg, var(--primary-dark), var(--success));
  color: white;
  position: relative;
}

.icon-productivity-new::after {
  content: "↑";
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background: var(--success);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  /* CONTINUAÇÃO DO ARQUIVO DE ESTILO */

box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.metric-item__label {
  font-size: 0.875rem;
  color: var(--gray-500);
  margin-bottom: 0.5rem;
}

.metric-item__value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--gray-900);
  position: relative;
  display: inline-block;
}

.metric-item--projected .metric-item__value {
  color: var(--primary);
}

.metric-item__delta {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--success);
  margin-left: 0.5rem;
  background-color: rgba(16, 185, 129, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  animation: pulse 2s infinite;
}

/* ==========================================
 * CONTROLE DESLIZANTE (SLIDER)
 * ========================================== */

.slider-control {
  margin-bottom: 2rem;
  padding: 0 1.25rem;
}

.slider-control__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--gray-700);
}

.slider-control__value {
  font-size: 1.125rem;
  color: var(--primary);
  font-weight: 700;
  background-color: rgba(79, 70, 229, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  display: inline-block;
  transition: all var(--transition-normal);
}

.slider-container {
  position: relative;
  width: 100%;
  padding: 0.5rem 0;
}

.slider-control__input {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: var(--gray-200);
  outline: none;
  transition: all var(--transition-normal);
}

.slider-control__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--primary-gradient);
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
  transition: all var(--transition-normal);
}

.slider-control__input::-moz-range-thumb {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--primary-gradient);
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
  transition: all var(--transition-normal);
}

.slider-control__input::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(79, 70, 229, 0.4);
}

.slider-control__input::-moz-range-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(79, 70, 229, 0.4);
}

.slider-control__input:focus {
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
}

.slider-control__markers {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding: 0 0.25rem;
  color: var(--gray-500);
  font-size: 0.75rem;
  font-weight: 500;
}

/* ==========================================
 * MÉTRICAS DE ROI
 * ========================================== */

.roi-metrics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 1.5rem;
}

.roi-metric {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: var(--shadow);
  border: 1px solid rgba(6, 182, 212, 0.2);
  transition: all var(--transition-normal);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom right, rgba(6, 182, 212, 0.03), rgba(16, 185, 129, 0.03));
}

.roi-metric:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.roi-metric__icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
}

.icon-savings {
  background: linear-gradient(135deg, var(--secondary), var(--success));
}

.icon-roi {
  background: linear-gradient(135deg, var(--success), var(--success-light));
}

.roi-metric__label {
  font-size: 1rem;
  color: var(--gray-600);
  margin-bottom: 0.75rem;
}

.roi-metric__value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--success-dark);
  text-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);
  animation: gentle-pulse 3s infinite alternate;
}

@keyframes gentle-pulse {
  0% {
    transform: scale(1);
    text-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);
  }
  100% {
    transform: scale(1.05);
    text-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
  }
}

/* ==========================================
 * RECOMENDAÇÕES
 * ========================================== */

.recommendations-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.recommendation-card {
  display: flex;
  align-items: flex-start;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  transition: all var(--transition-normal);
  border: 1px solid var(--gray-200);
}

.recommendation-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.recommendation-card--highlight {
  background: linear-gradient(to bottom right, rgba(79, 70, 229, 0.05), rgba(6, 182, 212, 0.05));
  border-color: rgba(79, 70, 229, 0.2);
}

.recommendation-card__icon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 12px;
  margin-right: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.2);
}

.icon-company-size {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
}

.icon-company-size::before {
  content: "🏢";
}

.icon-challenge-solution {
  background: linear-gradient(135deg, var(--secondary-dark), var(--secondary));
}

.icon-challenge-solution::before {
  content: "🎯";
}

.icon-growth {
  background: linear-gradient(135deg, var(--success), var(--secondary));
}

.icon-growth::before {
  content: "📈";
}

.recommendation-card__content {
  flex: 1;
}

.recommendation-card__title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: 0.5rem;
}

.recommendation-card__text {
  color: var(--gray-600);
  line-height: 1.6;
  font-size: 0.95rem;
}

.highlight-text {
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
  padding: 0 0.25rem;
  position: relative;
  white-space: nowrap;
}

.highlight-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: rgba(79, 70, 229, 0.1);
  z-index: -1;
  border-radius: 2px;
}

/* ==========================================
 * BOTÕES DE CALL-TO-ACTION
 * ========================================== */

.cta-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all var(--transition-normal);
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.cta-button:hover::before {
  transform: translateX(100%);
}

.cta-button__icon {
  width: 24px;
  height: 24px;
  margin-left: 0.75rem;
  transition: transform var(--transition-normal);
}

.cta-button--download {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
}

.cta-button--download:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px -5px rgba(79, 70, 229, 0.4);
}

.cta-button--download:hover .cta-button__icon {
  transform: translateY(3px);
}

.cta-button--contact {
  background: linear-gradient(135deg, var(--success), var(--secondary));
  color: white;
}

.cta-button--contact:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 25px -5px rgba(16, 185, 129, 0.4);
}

.cta-button--contact:hover .cta-button__icon {
  transform: rotate(15deg);
}

/* ==========================================
 * RESPONSIVIDADE
 * ========================================== */

@media (max-width: 992px) {
  .roi-calculator__title {
    font-size: 2rem;
  }

  .roi-calculator__subtitle {
    font-size: 1.125rem;
  }

  .step-title {
    font-size: 1.5rem;
  }

  .company-size-grid,
  .challenges-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .roi-calculator__content {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .roi-calculator {
    padding: 3rem 1.5rem;
  }

  .roi-calculator__card {
    max-width: 100%;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .roi-metrics {
    grid-template-columns: 1fr;
  }

  .navigation-controls--multi {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .navigation-controls--multi .button {
    width: 100%;
  }

  .cta-container {
    flex-direction: column;
  }

  .cta-button {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .roi-calculator__title {
    font-size: 1.75rem;
  }

  .step-title {
    font-size: 1.25rem;
  }

  .company-size-grid,
  .challenges-grid {
    grid-template-columns: 1fr;
  }

  .roi-calculator__content {
    padding: 1.5rem;
  }

  .recommendation-card {
    flex-direction: column;
  }

  .recommendation-card__icon {
    margin-bottom: 1rem;
    margin-right: 0;
  }

  .button {
    width: 100%;
  }
}

/* ==========================================
 * ACESSIBILIDADE
 * ========================================== */

@media (prefers-reduced-motion) {
  .roi-calculator__card,
  .company-size-option,
  .challenge-option,
  .metric-item,
  .roi-metric,
  .recommendation-card,
  .step-content,
  .button,
  .cta-button {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }

  .button:hover,
  .cta-button:hover {
    transform: none !important;
  }

  .roi-metric__value,
  .metric-item__delta {
    animation: none !important;
  }
}

/* Foco acessível para teclado */
.button:focus-visible,
.cta-button:focus-visible,
.company-size-option:focus-visible,
.challenge-option:focus-visible,
.form-field__input:focus-visible,
.slider-control__input:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
}

/* ==========================================
 * ANIMAÇÕES ADICIONAIS E REFINAMENTOS
 * ========================================== */

/* Efeito de destaque pulsante para indicadores importantes */
.metric-item--projected .metric-item__value::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: rgba(79, 70, 229, 0.1);
  top: 0;
  left: 0;
  z-index: -1;
  animation: pulse-bg 2s ease infinite;
  opacity: 0;
}

@keyframes pulse-bg {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

/* Animação suave para feedback visual imediato */
.result-card--simulation:hover .slider-control__value {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.3);
}

/* Transição suave para todas as cores de hover */
.button:hover,
.challenge-option:hover,
.company-size-option:hover {
  transition: all 0.3s var(--easing-bounce);
}

/* Efeito de foco para formulário */
.form-field__input:focus ~ .form-field__suffix,
.form-field__input:focus ~ .form-field__prefix {
  color: var(--primary);
  border-color: var(--primary);
}
</style>
