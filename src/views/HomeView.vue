<template>
  <div class="home">
    <!-- Hero Section - Otimizado para melhor uso de espaço e conversão -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>
              <span class="text-primary">Fuel</span> Your Growth with
              <span class="text-primary">Expert</span> Outsourcing Solutions
            </h1>
            <p class="hero-description">
              Accelerate your business without the burden of soaring fixed costs with specialized teams for development, support, and management.
            </p>

            <!-- Hero CTAs com hierarquia clara -->
            <div class="hero-cta">
              <router-link to="/contact" class="btn btn-primary cta-main">
                Request a Proposal
                <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </router-link>
              <router-link to="/how-it-works" class="btn btn-outline cta-secondary">How It Works</router-link>
            </div>

            <!-- Key Metrics -->
            <div class="key-metrics">
              <div class="metric">
                <div class="metric-value">40%</div>
                <div class="metric-label">Cost Savings</div>
              </div>
              <div class="metric">
                <div class="metric-value">15</div>
                <div class="metric-label">Days to Launch</div>
              </div>
              <div class="metric">
                <div class="metric-value">92%</div>
                <div class="metric-label">Team Retention</div>
              </div>
            </div>
          </div>

          <!-- Formulário de Contato Simplificado -->
          <div class="hero-form">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <h3>Request a Proposal</h3>
              <p>Get a personalized cost savings estimate for your business</p>

              <div class="form-row">
                <div class="form-group">
                  <input type="text" id="name" v-model="formData.name" placeholder="Full Name *" required>
                </div>
                <div class="form-group">
                  <input type="email" id="email" v-model="formData.email" placeholder="Corporate Email *" required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <input type="tel" id="phone" v-model="formData.phone" placeholder="Phone Number *" required>
                </div>
                <div class="form-group">
                  <input type="text" id="company" v-model="formData.company" placeholder="Company *" required>
                </div>
              </div>

              <div class="form-group service-select">
                <select id="service" v-model="formData.primaryService" required>
                  <option value="" disabled selected>Service of Interest *</option>
                  <option v-for="(service, index) in services" :key="index" :value="service">
                    {{ service }}
                  </option>
                </select>
              </div>

              <div class="form-group checkbox-group">
                <div class="checkbox-option">
                  <input type="checkbox" id="privacy-policy" v-model="formData.privacyPolicy" required>
                  <label for="privacy-policy">
                    I agree to the <a href="/privacy-policy">Privacy Policy</a>
                  </label>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-block">
                <span v-if="!submitting">Submit</span>
                <span v-else class="loading-spinner"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section - Redesenhada para ser mais concisa -->
    <section class="section benefits-section">
      <div class="container">
        <div class="section-title">
          <h2>A Global On-Demand Team</h2>
          <p>We connect global tech talent to your business with tailored solutions.</p>
        </div>

        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 2v10M19 12 5 22l-2-4 16-8-16-8 2-4z"></path>
              </svg>
            </div>
            <h3>Cut Costs, Not Quality</h3>
            <p>Save up to 40% on operational expenses while maintaining top-notch performance and service quality.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3>Fast & Dedicated Teams</h3>
            <p>Get your specialized team ready to go in as little as 15 business days—tailored to your specific needs.</p>
          </div>

          <div class="benefit-card">
            <div class="benefit-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Scalable Solutions</h3>
            <p>Adapt seamlessly to changing demands with the flexibility to scale up or down as your business evolves.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Metrics Section - Movido da página HowItWorksView -->
    <section class="section metrics-section section-light">
      <div class="container">
        <div class="section-title">
          <h2>Our Process Delivers Results</h2>
          <p>Concrete metrics that demonstrate the efficiency of our methodology</p>
        </div>

        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div class="metric-value">15</div>
            <h3>Days to Implementation</h3>
            <p>Our process delivers teams in just 15 days, 5x faster than the industry standard of 45-60 days</p>
          </div>

          <div class="metric-card highlight">
            <div class="metric-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div class="metric-value">40%</div>
            <h3>Average Cost Reduction</h3>
            <p>This methodology consistently achieves 40% cost reduction compared to traditional in-house operations</p>
          </div>

          <div class="metric-card">
            <div class="metric-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div class="metric-value">92%</div>
            <h3>Team Retention Rate</h3>
            <p>Our structured approach maintains a 92% team retention rate, ensuring stability and reducing knowledge loss</p>
          </div>

          <div class="metric-card">
            <div class="metric-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div class="metric-value">24/7</div>
            <h3>Global Operations</h3>
            <p>With a streamlined process, we deliver 24/7 global operations across different time zones</p>
          </div>
        </div>

        <div class="metrics-cta">
          <router-link to="/how-it-works" class="btn btn-primary">
            See How It Works
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Services Section - Cards mais compactos e focados com título melhorado -->
    <section class="section services-section section-light">
      <div class="container">
        <div class="section-title">
          <h2>Accelerate Growth with Strategic Solutions</h2>
          <p>Discover tailored services that transform challenges into opportunities and deliver measurable results.</p>
        </div>

        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in serviceDetails" :key="index">
            <div class="service-icon" :class="`service-icon-${index + 1}`">
              <component :is="service.icon" />
            </div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <ul class="service-features">
                <li v-for="(feature, fIndex) in service.features.slice(0, 3)" :key="fIndex">
                  {{ feature }}
                </li>
              </ul>
              <router-link :to="`/services#${service.slug}`" class="service-link">
                Learn more <span>&rarr;</span>
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <router-link to="/services" class="btn btn-outline btn-lg">View all services</router-link>
        </div>
      </div>
    </section>

    <!-- "Why choose Align" Section - Design mais limpo -->
    <section class="section why-section">
      <div class="container">
        <div class="section-title">
          <h2>Why Choose Align?</h2>
          <p>Our work model provides competitive advantages for your business.</p>
        </div>

        <div class="why-grid">
          <div class="why-card">
            <div class="why-number">01</div>
            <h3>Rigorous Talent Selection</h3>
            <p>Only 3% of candidates pass our selection process, ensuring you work with the very best talent available.</p>
          </div>

          <div class="why-card">
            <div class="why-number">02</div>
            <h3>Exceptional Value</h3>
            <p>Access to high-level professionals for a fraction of direct hiring costs, without compromising quality.</p>
          </div>

          <div class="why-card">
            <div class="why-number">03</div>
            <h3>Transparent Process</h3>
            <p>Detailed reports and constant communication about project progress and team performance.</p>
          </div>

          <div class="why-card">
            <div class="why-number">04</div>
            <h3>24/7 Support</h3>
            <p>Our management team is always available to ensure all projects are delivered with excellence.</p>
          </div>
        </div>

        <div class="section-cta">
          <router-link to="/why-align" class="btn btn-primary">
            Discover Why Align
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Bridging Section - Integração da seção da imagem enviada -->
    <section class="section bridge-section section-light">
      <div class="container">
        <div class="bridge-content">
          <div class="bridge-text">
            <h2>Want to see the concrete results our process delivers?</h2>
            <p>Learn why clients choose our methodology for sustainable growth and discover the impact we've made for businesses like yours.</p>
            <div class="bridge-cta">
              <router-link to="/why-align" class="btn btn-primary">
                Discover Why Align
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </router-link>
            </div>
          </div>
          <div class="bridge-preview">
            <div class="preview-metrics">
              <div class="preview-metric">
                <div class="preview-value">40%</div>
                <p>Cost Savings</p>
              </div>
              <div class="preview-metric">
                <div class="preview-value">15</div>
                <p>Days to Team Ready</p>
              </div>
              <div class="preview-metric">
                <div class="preview-value">92%</div>
                <p>Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section - Mais impactante e focado na conversão -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Get a personalized proposal with cost savings estimate for your company.</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="btn btn-light btn-lg">
              Request a Proposal
              <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
            <a href="tel:+15551234567" class="btn btn-outline-light">Call us: (555) 123-4567</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, h } from 'vue'
import '@/assets/styles/home.css'

// Componente: HomeView
// Status de submissão do formulário
const submitting = ref(false)

// Dados do formulário
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  primaryService: '',
  message: '',
  privacyPolicy: false
})

// Lista de serviços para o select
const services = [
  'Development',
  'Customer Support',
  'Project Management',
  'Marketing',
  'Design',
  'Accounting',
  'Administrative'
]

// SVG components para ícones
const DevIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M16 18h6' }),
  h('path', { d: 'M2 6h6' }),
  h('path', { d: 'M2 12h18' }),
  h('path', { d: 'M18 6l3 3-3 3' }),
  h('path', { d: 'M6 18l-3-3 3-3' })
])

const SupportIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: '19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-8 3v7c0 5.2 3.3 10 8 11 1.9-.4 3.6-1.4 5-2.7' }),
  h('path', { d: '14.6 15h1.8a2 2 0 0 1 1.9 2.4l-1 5' }),
  h('path', { d: '5 10h14' }),
  h('path', { d: '21 22l-3-3m0 3 3-3' })
])

const ProjectIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1' }),
  h('path', { d: 'M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1' }),
  h('path', { d: 'M2 12h20' }),
  h('path', { d: 'M20 3h2' }),
  h('path', { d: 'M2 3h2' }),
  h('path', { d: 'M7 21h10' }),
  h('path', { d: 'M12 12v9' })
])

// Detalhes dos principais serviços
const serviceDetails = [
  {
    title: 'Development Solutions',
    slug: 'development',
    description: 'Custom software solutions to accelerate your business.',
    icon: DevIcon,
    features: [
      'Web & Mobile Development',
      'Software Architecture',
      'Systems Integration',
      'Custom Applications'
    ]
  },
  {
    title: 'Customer Support',
    slug: 'support',
    description: 'Exceptional customer service that delights your clients across multiple channels.',
    icon: SupportIcon,
    features: [
      '24/7 Support',
      'Multilingual Service',
      'Chat, Email & Phone',
      'Rapid Problem Resolution'
    ]
  },
  {
    title: 'Project Management',
    slug: 'management',
    description: 'Maximize results with efficient management of your projects.',
    icon: ProjectIcon,
    features: [
      'Agile Methodologies',
      'Strategic Planning',
      'Quality Control',
      'Detailed Reporting'
    ]
  }
]

// Função para lidar com o envio do formulário
const handleSubmit = () => {
  // Ativar estado de carregamento
  submitting.value = true

  // Simulação de chamada de API com delay
  setTimeout(() => {
    // Ocultar estado de carregamento
    submitting.value = false

    // Exibir mensagem de sucesso
    alert('Thank you for your interest! Our team will contact you shortly with a personalized proposal.')

    // Redefinir o formulário após o envio
    Object.assign(formData, {
      name: '',
      email: '',
      phone: '',
      company: '',
      primaryService: '',
      message: '',
      privacyPolicy: false
    })
  }, 1500)
}
</script>

<style lang="scss" scoped>
/* Estilos específicos para a página inicial */

/* Hero Section */
.hero-section {
  padding: 3rem 0 3.5rem; /* Padding significativamente reduzido */
  background: linear-gradient(135deg, #ffffff 0%, #f5f8fc 100%);
  position: relative;
  overflow: hidden;
  margin-top: 0; /* Removido completamente para eliminar o espaço excessivo */
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 133, 255, 0.1) 0%, rgba(0, 133, 255, 0.05) 60%, transparent 70%);
  z-index: 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2.5rem; /* Gap reduzido */
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

.hero-text {
  h1 {
    font-size: 3.2rem; /* Tamanho ligeiramente reduzido */
    line-height: 1.2;
    margin-bottom: 1.25rem; /* Espaçamento reduzido */
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
}

.hero-description {
  font-size: 1.15rem; /* Tamanho ligeiramente reduzido */
  color: var(--text-light);
  margin-bottom: 1.5rem; /* Espaçamento reduzido */
  max-width: 600px;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  .cta-main {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .btn-icon {
      transition: transform 0.2s ease;
    }

    &:hover .btn-icon {
      transform: translateX(3px);
    }
  }

  .cta-secondary {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
  }
}

/* Key Metrics na Hero */
.key-metrics {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0.5rem;

  .metric {
    background-color: rgba(0, 133, 255, 0.08);
    padding: 0.75rem 1.25rem;
    border-radius: 8px;
    min-width: 90px;

    .metric-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
      line-height: 1;
    }

    .metric-label {
      font-size: 0.8rem;
      color: var(--text-light);
      margin-top: 0.25rem;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.75rem;

    .metric {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .metric-value {
        font-size: 1.25rem;
      }

      .metric-label {
        margin-top: 0;
      }
    }
  }
}

/* Formulário na Hero - Otimizado */
.hero-form {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 1.75rem; /* Padding reduzido */
  max-width: 450px;
  width: 100%;
  align-self: flex-start;

  @media (max-width: 992px) {
    max-width: 100%;
    align-self: center;
  }
}

.contact-form h3 {
  margin-top: 0;
  font-size: 1.4rem; /* Tamanho reduzido */
  margin-bottom: 0.35rem; /* Espaçamento reduzido */
}

.contact-form p {
  color: var(--text-light);
  margin-bottom: 1.25rem; /* Espaçamento reduzido */
  font-size: 0.9rem;
}

.form-row {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.75rem;
  }
}

.form-group {
  flex: 1;
  margin-bottom: 0.75rem;

  input, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 0.95rem;
    transition: all 0.3s ease;

    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(0, 133, 255, 0.15);
      outline: none;
    }
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.5rem center;
    background-size: 16px;
    padding-right: 2.5rem;
  }
}

.checkbox-group {
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;

  .checkbox-option {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    input[type="checkbox"] {
      width: auto;
      margin-top: 0.25rem;
    }

    label {
      font-size: 0.85rem;
      color: var(--text-light);

      a {
        color: var(--primary-color);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.btn-block {
  width: 100%;
  padding: 0.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  font-size: 1rem;
}

/* Loading spinner */
.loading-spinner {
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Seção de Benefícios */
.benefits-section {
  padding: 4rem 0; /* Padding reduzido */
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem; /* Gap reduzido */

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.benefit-card {
  background-color: white;
  border-radius: 10px;
  padding: 1.75rem; /* Padding reduzido */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

    .benefit-icon {
      background-color: var(--primary-color);
      color: white;
      transform: scale(1.08);
    }
  }
}

.benefit-icon {
  width: 64px; /* Tamanho reduzido */
  height: 64px; /* Tamanho reduzido */
  background-color: rgba(0, 133, 255, 0.08);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 1.25rem; /* Espaçamento reduzido */
  transition: all 0.3s ease;
}

.benefit-card h3 {
  font-size: 1.25rem; /* Tamanho reduzido */
  margin-bottom: 0.75rem; /* Espaçamento reduzido */
  font-weight: 700;
  color: var(--text-color);
}

.benefit-card p {
  color: var(--text-light);
  font-size: 0.95rem;
  margin-bottom: 0; /* Removido margin-bottom */
  line-height: 1.6;
}

/* Process Metrics Section */
.metrics-section {
  position: relative;
  padding: 4rem 0; /* Reduzido para manter consistência com outras seções */

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(0, 133, 255, 0.05) 0%, rgba(0, 133, 255, 0.02) 60%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem; /* Reduzido para manter consistência */
    margin-bottom: 2.5rem; /* Reduzido */

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    .metric-card {
      background-color: white;
      border-radius: 10px; /* Ajustado para manter consistência */
      padding: 1.75rem; /* Reduzido */
      text-align: center;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06); /* Adaptado ao estilo da página */
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      height: 100%;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color) 0%, var(--primary-dark) 100%);
        transform: translateY(-100%);
        transition: transform 0.3s ease;
      }

      &:hover {
        transform: translateY(-7px); /* Ajustado para manter consistência */
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

        &::before {
          transform: translateY(0);
        }

        .metric-icon {
          background-color: var(--primary-color);
          color: white;
          transform: scale(1.08);
        }
      }

      &.highlight {
        border: 2px solid rgba(0, 133, 255, 0.1);

        .metric-value {
          color: var(--primary-color);
        }
      }

      .metric-icon {
        width: 70px; /* Reduzido */
        height: 70px; /* Reduzido */
        border-radius: 50%;
        background-color: rgba(0, 133, 255, 0.08);
        color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.25rem; /* Reduzido */
        transition: all 0.3s ease;
      }

      .metric-value {
        font-size: 3rem; /* Reduzido */
        font-weight: 800;
        line-height: 1;
        margin-bottom: 0.75rem; /* Reduzido */
        color: var(--text-color);
      }

      h3 {
        font-size: 1.2rem; /* Reduzido */
        margin-bottom: 0.75rem; /* Reduzido */
        font-weight: 700;
      }

      p {
        font-size: 0.9rem; /* Reduzido para manter consistência */
        color: var(--text-light);
        line-height: 1.6;
        margin-bottom: 0;
      }
    }
  }

  .metrics-cta {
    text-align: center;

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.75rem;
      font-weight: 600;
      border-radius: 6px;

      .btn-icon {
        transition: transform 0.2s ease;
      }

      &:hover {
        transform: translateY(-3px);

        .btn-icon {
          transform: translateX(3px);
        }
      }
    }
  }
}

/* Seção de Serviços */
.services-section {
  background-color: var(--bg-light);
  padding: 4rem 0; /* Padding reduzido */
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem; /* Gap reduzido */

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

.service-card {
  display: flex;
  background-color: white;
  border-radius: 10px;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

    .service-icon {
      transform: scale(1.08);
    }

    .service-link span {
      transform: translateX(3px);
    }
  }
}

.service-icon {
  width: 80px;
  min-width: 80px;
  background-color: rgba(0, 133, 255, 0.08);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &.service-icon-2 {
    background-color: rgba(0, 200, 117, 0.08);
    color: #00c875;
  }

  &.service-icon-3 {
    background-color: rgba(255, 153, 0, 0.08);
    color: #ff9900;
  }
}

.service-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.service-card h3 {
  font-size: 1.2rem; /* Tamanho reduzido */
  margin-bottom: 0.6rem; /* Espaçamento reduzido */
  font-weight: 700;
  color: var(--text-color);
}

.service-card p {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1rem; /* Espaçamento reduzido */
  line-height: 1.5;
}

.service-features {
  list-style-type: none;
  padding: 0;
  margin: 0 0 1rem 0; /* Espaçamento reduzido */

  li {
    position: relative;
    padding-left: 1.25rem;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    color: var(--text-light);

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: var(--primary-color);
      font-weight: bold;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.service-link {
  margin-top: auto;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  span {
    margin-left: 0.25rem;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: var(--primary-dark);
  }
}

/* Why Align Section */
.why-section {
  padding: 4rem 0; /* Padding reduzido */
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem; /* Gap reduzido */

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.why-card {
  background-color: white;
  border-radius: 10px;
  padding: 1.75rem; /* Padding reduzido */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);

    .why-number {
      color: var(--primary-color);
    }
  }
}

.why-number {
  font-size: 2rem; /* Tamanho reduzido */
  font-weight: 800;
  color: rgba(0, 133, 255, 0.15);
  margin-bottom: 0.75rem; /* Espaçamento reduzido */
  line-height: 1;
  transition: color 0.3s ease;
}

.why-card h3 {
  font-size: 1.1rem; /* Tamanho reduzido */
  margin-bottom: 0.6rem; /* Espaçamento reduzido */
  font-weight: 700;
  color: var(--text-color);
}

.why-card p {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 0; /* Removido margin-bottom */
  line-height: 1.6;
}

.section-cta {
  text-align: center;
  margin-top: 2.5rem; /* Espaçamento reduzido */

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    font-weight: 600;

    .btn-icon {
      transition: transform 0.2s ease;
    }

    &:hover .btn-icon {
      transform: translateX(3px);
    }
  }
}

/* Bridging Section - Nova seção */
.bridge-section {
  padding: 4rem 0;
  background-color: var(--bg-light);

  .bridge-content {
    display: flex;
    align-items: center;
    gap: 3.5rem;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 2rem;
    }

    .bridge-text {
      flex: 1;

      h2 {
        font-size: 2.25rem;
        margin-bottom: 1.25rem;
        text-align: left;

        @media (max-width: 768px) {
          font-size: 1.75rem;
        }
      }

      p {
        margin-bottom: 1.75rem;
        text-align: left;
        color: var(--text-light);
      }

      .bridge-cta {
        .btn-primary {
          background-color: var(--primary-color);
          color: white;
          padding: 0.85rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;

          svg {
            transition: transform 0.3s ease;
          }

          &:hover {
            background-color: var(--primary-dark);
            transform: translateY(-3px);

            svg {
              transform: translateX(5px);
            }
          }
        }
      }
    }

    .bridge-preview {
      flex: 1;

      .preview-metrics {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;

        @media (max-width: 576px) {
          grid-template-columns: 1fr;
        }

        .preview-metric {
          background-color: white;
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          }

          .preview-value {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
          }

          p {
            margin: 0;
            font-size: 0.95rem;
            color: var(--text-light);
          }
        }
      }
    }
  }
}

/* Compare Section - Para o título único */
.compare-section {
  padding: 4rem 0;
}

/* CTA Final */
.cta-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 4rem 0; /* Padding reduzido */
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-section h2 {
  color: white;
  font-size: 2.25rem; /* Tamanho reduzido */
  margin-bottom: 1rem; /* Espaçamento reduzido */
  font-weight: 700;
}

.cta-section p {
  font-size: 1.15rem; /* Tamanho reduzido */
  opacity: 0.9;
  margin-bottom: 1.75rem; /* Espaçamento reduzido */
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.25rem;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .btn-light {
    background-color: white;
    color: var(--primary-color);
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.85rem 1.75rem;

    .btn-icon {
      transition: transform 0.2s ease;
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);

      .btn-icon {
        transform: translateX(3px);
      }
    }
  }

  .btn-outline-light {
    border: 2px solid rgba(255, 255, 255, 0.7);
    color: white;
    background-color: transparent;
    font-weight: 600;
    padding: 0.85rem 1.75rem;
    transition: all 0.3s ease;
    text-decoration: none;
    border-radius: 6px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
      border-color: white;
      transform: translateY(-3px);
    }
  }
}

/* Utilitários */
.btn-lg {
  padding: 0.85rem 2rem;
  font-size: 1.05rem;
}

.text-center {
  text-align: center;
}

.mt-5 {
  margin-top: 2rem; /* Reduzido de 3rem */
}

/* Adaptações responsivas */
@media (max-width: 992px) {
  .hero-section {
    padding: 4.5rem 0 3.5rem;
  }

  .section {
    padding: 3.5rem 0;
  }

  .hero-text h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding: 4rem 0 3rem;
  }

  .section {
    padding: 3rem 0;
  }

  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .section-title h2 {
    font-size: 1.75rem;
  }
}
</style>
