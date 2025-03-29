<template>
  <div class="why-align">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Boost Your Bottom Line with Smart Hires</h1>
            <p>Unlock a 40% reduction in operational costs while maintaining top-quality service with our expert outsourcing solutions.</p>

            <div class="hero-cta">
              <router-link to="/contact" class="btn btn-primary">Request a Proposal</router-link>
              <button @click="showCalculator = true" class="btn btn-outline">Calculate Savings</button>
            </div>
          </div>

          <!-- Hero Image Placeholder -->
          <div class="hero-image">
            <div class="image-placeholder">
              <span>Image: Modern business professionals in a collaborative workspace - 800×500px</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Metrics Section - Clean design with clear metrics -->
    <section class="key-metrics-section">
      <div class="container">
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-value">40%</div>
            <h3>Cost Reduction</h3>
            <p>Average operational cost savings compared to in-house staffing</p>
          </div>

          <div class="metric-card">
            <div class="metric-value">15</div>
            <h3>Days to Implementation</h3>
            <p>Get your dedicated team operational 4x faster than industry standard</p>
          </div>

          <div class="metric-card">
            <div class="metric-value">92%</div>
            <h3>Team Retention</h3>
            <p>Long-term stability and consistent quality of service</p>
          </div>

          <div class="metric-card">
            <div class="metric-value">24/7</div>
            <h3>Global Operations</h3>
            <p>Round-the-clock availability across multiple time zones</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition Section - Simplificada -->
    <section class="value-section">
      <div class="container">
        <div class="section-header">
          <h2>Why Companies Choose Align</h2>
          <p>We deliver a triple advantage: significant cost savings, accelerated implementation, and exceptional talent</p>
        </div>

        <div class="values-grid">
          <!-- Value Card 1: Cost Efficiency - Simplificado -->
          <div class="value-card">
            <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3>Cut Costs, Not Quality</h3>
            <p>Save up to 40% on operational expenses while maintaining or improving service quality with our rigorously vetted talent.</p>
            <ul class="value-features">
              <li>Eliminate recruitment and onboarding costs</li>
              <li>Avoid employee benefits and overhead expenses</li>
              <li>Pay only for productive hours with optimized workflows</li>
            </ul>
          </div>

          <!-- Value Card 2: Speed - Simplificado -->
          <div class="value-card">
            <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 2v10M19 12 5 22l-2-4 16-8-16-8 2-4z"></path>
              </svg>
            </div>
            <h3>Fast & Dedicated Teams</h3>
            <p>Get your specialized team ready to go in as little as 15 business days—4x faster than traditional outsourcing models.</p>
            <ul class="value-features">
              <li>Pre-vetted talent pool ready for immediate assignment</li>
              <li>Streamlined onboarding and integration process</li>
              <li>24/7 implementation support for rapid deployment</li>
            </ul>
          </div>

          <!-- Value Card 3: Scalability - Simplificado -->
          <div class="value-card">
            <div class="value-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Scalable Solutions</h3>
            <p>Adapt seamlessly to changing demands with the flexibility to scale up or down as your business evolves.</p>
            <ul class="value-features">
              <li>Flexible team sizing with minimal notice period</li>
              <li>Access to diverse skill sets as needs change</li>
              <li>Rapid response to seasonal or project-based demands</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Results Section - Baseado no modelo fornecido -->
    <section class="process-results-section">
      <div class="container">
        <div class="results-content">
          <div class="results-text">
            <h2>Want to see the concrete results our process delivers?</h2>
            <p>Learn why clients choose our methodology for sustainable growth and discover the impact we've made for businesses like yours.</p>
            <div class="results-cta">
              <router-link to="/how-it-works" class="btn btn-primary">
                See How It Works
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </router-link>
            </div>
          </div>
          <div class="results-metrics">
            <div class="metrics-showcase">
              <div class="showcase-metric">
                <div class="metric-number">40%</div>
                <p>Cost Savings</p>
              </div>
              <div class="showcase-metric">
                <div class="metric-number">15</div>
                <p>Days to Team Ready</p>
              </div>
              <div class="showcase-metric">
                <div class="metric-number">92%</div>
                <p>Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section - Título removido para evitar duplicidade -->
    <section class="comparison-section section">
      <div class="container">
        <!-- ComparisonSection já contém seu próprio título e subtítulo -->
        <ComparisonSection />
      </div>
    </section>

    <!-- Client Success Stories - Versão mais compacta -->
    <section class="success-stories-section section section-light">
      <div class="container">
        <div class="section-header">
          <h2>Success Stories</h2>
          <p>Real results from companies that transformed their operations with Align</p>
        </div>

        <div class="stories-grid">
          <div class="story-card">
            <div class="story-content">
              <div class="story-header">
                <div class="story-logo">
                  <div class="logo-placeholder">
                    <span>Client Logo - 80x80px</span>
                  </div>
                </div>
                <div class="story-meta">
                  <h3>TechSolutions Inc</h3>
                  <p>Software Development</p>
                </div>
              </div>

              <div class="story-results">
                <div class="result-item">
                  <div class="result-value">42%</div>
                  <div class="result-label">Cost Reduction</div>
                </div>
                <div class="result-item">
                  <div class="result-value">3x</div>
                  <div class="result-label">Faster Delivery</div>
                </div>
              </div>

              <blockquote class="story-quote">
                "Align transformed our ability to deliver. We scaled our operation quickly without compromising quality, all while achieving a 42% reduction in operational costs."
              </blockquote>

              <div class="story-author">
                <p class="author-name">Ricardo Menezes</p>
                <p class="author-title">CEO, TechSolutions</p>
              </div>
            </div>
          </div>

          <div class="story-card">
            <div class="story-content">
              <div class="story-header">
                <div class="story-logo">
                  <div class="logo-placeholder">
                    <span>Client Logo - 80x80px</span>
                  </div>
                </div>
                <div class="story-meta">
                  <h3>Fintech Innovations</h3>
                  <p>Customer Support</p>
                </div>
              </div>

              <div class="story-results">
                <div class="result-item">
                  <div class="result-value">15</div>
                  <div class="result-label">Days to Launch</div>
                </div>
                <div class="result-item">
                  <div class="result-value">97%</div>
                  <div class="result-label">Customer Satisfaction</div>
                </div>
              </div>

              <blockquote class="story-quote">
                "The integration process was remarkably fast. In less than a month, we had a fully operational team aligned with our culture. The ongoing quality has exceeded our expectations."
              </blockquote>

              <div class="story-author">
                <p class="author-name">Ana Claudia</p>
                <p class="author-title">CTO, Fintech Innovations</p>
              </div>
            </div>
          </div>

          <div class="story-card">
            <div class="story-content">
              <div class="story-header">
                <div class="story-logo">
                  <div class="logo-placeholder">
                    <span>Client Logo - 80x80px</span>
                  </div>
                </div>
                <div class="story-meta">
                  <h3>E-commerce Express</h3>
                  <p>Operations Management</p>
                </div>
              </div>

              <div class="story-results">
                <div class="result-item">
                  <div class="result-value">35%</div>
                  <div class="result-label">Cost Savings</div>
                </div>
                <div class="result-item">
                  <div class="result-value">4x</div>
                  <div class="result-label">Team Growth</div>
                </div>
              </div>

              <blockquote class="story-quote">
                "Align's flexibility allowed us to adapt quickly to market changes. We scaled from 3 to 12 team members in 18 months with no bureaucracy or additional costs."
              </blockquote>

              <div class="story-author">
                <p class="author-name">Paulo Soares</p>
                <p class="author-title">COO, E-commerce Express</p>
              </div>
            </div>
          </div>
        </div>

        <div class="stories-cta">
          <router-link to="/contact" class="btn btn-outline">Talk to Our Experts</router-link>
        </div>
      </div>
    </section>

    <!-- ROI Calculator Section - Mais compacta -->
    <section class="calculator-section">
      <div class="container">
        <div class="calculator-content">
          <div class="calculator-header">
            <h2>Calculate Your Potential Savings</h2>
            <p>See how much your business could save with Align's outsourcing solutions</p>
          </div>

          <div class="calculator-widget">
            <!-- ROI Calculator Component -->
            <RoiCalculator :embedded="true" />
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Take the first step toward a more efficient, economical, and scalable operation.</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="btn btn-primary">Request a Proposal</router-link>
            <a href="tel:+15551234567" class="btn btn-outline">Call Now: (555) 123-4567</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ROI Calculator Modal -->
    <div v-if="showCalculator" class="calculator-modal" @click.self="showCalculator = false">
      <div class="modal-content">
        <button class="close-modal" @click="showCalculator = false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h3>Calculate Your Potential Savings</h3>
        <p>See how much your business could save with Align's expert outsourcing solutions.</p>

        <!-- Calculator Component -->
        <RoiCalculator />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import ComparisonSection from '@/components/sections/ComparisonSection.vue';
import RoiCalculator from '@/components/sections/RoiCalculator.vue';

// States
const showCalculator = ref(false);
</script>
<style lang="scss" scoped>
:root {
  --primary-color: #0085ff;
  --primary-dark: #0066cc;
  --secondary-color: #00c875;
  --text-color: #333;
  --text-light: #666;
  --bg-light: #f8f9fa;
  --border-color: #eaeaea;
}

// Hero Section - Espaçamento reduzido
.hero-section {
  padding: 3rem 0 3.5rem; // Reduzido drasticamente o padding-top
  margin-top: 0; // Removido qualquer margem superior
  background: linear-gradient(135deg, #f8f9fa 0%, #e9f5ff 100%);
  position: relative;
  overflow: hidden;

  &::before {
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    position: relative;
    z-index: 1;

    @media (max-width: 992px) {
      flex-direction: column;
    }

    .hero-text {
      flex: 1;
      max-width: 600px;

      @media (max-width: 992px) {
        text-align: center;
        max-width: 100%;
      }

      h1 {
        font-size: 3.5rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        background: linear-gradient(90deg, var(--text-color) 0%, var(--primary-color) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

        @media (max-width: 768px) {
          font-size: 2.5rem;
        }
      }

      p {
        font-size: 1.25rem;
        color: var(--text-color);
        margin-bottom: 2rem;
        line-height: 1.6;

        @media (max-width: 768px) {
          font-size: 1.1rem;
        }
      }

      .hero-cta {
        display: flex;
        gap: 1rem;

        @media (max-width: 992px) {
          justify-content: center;
        }

        @media (max-width: 576px) {
          flex-direction: column;
        }

        .btn {
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 0.5rem;
          transition: all 0.3s ease;

          &.btn-primary {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
            color: white;
            border: none;
            box-shadow: 0 10px 20px rgba(0, 133, 255, 0.2);

            &:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 30px rgba(0, 133, 255, 0.3);
            }
          }

          &.btn-outline {
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
            background: transparent;

            &:hover {
              background-color: rgba(0, 133, 255, 0.1);
              transform: translateY(-5px);
            }
          }
        }
      }
    }

    .hero-image {
      flex: 1;
      max-width: 600px;

      @media (max-width: 992px) {
        max-width: 100%;
        width: 100%;
      }

      .image-placeholder {
        background-color: rgba(0, 133, 255, 0.1);
        border: 2px dashed var(--primary-color);
        border-radius: 1rem;
        padding: 10rem 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--primary-color);
        font-size: 0.875rem;

        @media (max-width: 576px) {
          padding: 6rem 1rem;
        }
      }
    }
  }
}

// Key Metrics Section - Espaçamento reduzido
.key-metrics-section {
  padding: 3rem 0; // Reduzido
  background-color: white;

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem; // Reduzido

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    .metric-card {
      text-align: center;
      padding: 1.5rem; // Reduzido
      border-radius: 1rem;
      background-color: white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      border: 1px solid var(--border-color);

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      }

      .metric-value {
        font-size: 3rem; // Reduzido
        font-weight: 800;
        color: var(--primary-color);
        line-height: 1;
        margin-bottom: 0.75rem; // Reduzido
      }

      h3 {
        font-size: 1.25rem;
        margin-bottom: 0.75rem; // Reduzido
        color: var(--text-color);
      }

      p {
        color: var(--text-light);
        font-size: 0.9rem; // Reduzido
        line-height: 1.5;
        margin-bottom: 0;
      }
    }
  }
}

// Common section styles
.section-header {
  text-align: center;
  margin-bottom: 2.25rem; // Reduzido

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem; // Reduzido
    color: var(--text-color);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem; // Reduzido
    color: var(--text-light);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
      font-size: 1.05rem;
    }
  }
}

// Value Section - Mais compacta
.value-section {
  padding: 3.5rem 0; // Reduzido

  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem; // Reduzido

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .value-card {
      background-color: white;
      border-radius: 1rem;
      padding: 1.5rem; // Reduzido
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
      height: 100%;
      transition: all 0.3s ease;
      border: 1px solid var(--border-color);

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

        .value-icon {
          background-color: var(--primary-color);
          color: white;
          transform: scale(1.1);
        }
      }

      .value-icon {
        width: 64px; // Reduzido
        height: 64px; // Reduzido
        border-radius: 50%;
        background-color: rgba(0, 133, 255, 0.1);
        color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem; // Reduzido
        transition: all 0.3s ease;
      }

      h3 {
        font-size: 1.4rem; // Reduzido
        margin-bottom: 0.75rem; // Reduzido
        color: var(--text-color);
      }

      p {
        color: var(--text-light);
        margin-bottom: 1rem; // Reduzido
        line-height: 1.5;
        font-size: 0.95rem; // Reduzido
      }

      .value-features {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem; // Reduzido
          color: var(--text-light);
          font-size: 0.9rem; // Reduzido

          &::before {
            content: '✓';
            color: var(--primary-color);
            position: absolute;
            left: 0;
            font-weight: bold;
          }
        }
      }
    }
  }
}

// Novo estilo para a seção de resultados do processo
.process-results-section {
  padding: 3.5rem 0;
  background-color: var(--bg-light);

  .results-content {
    display: flex;
    align-items: center;
    gap: 3rem;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 2rem;
    }

    .results-text {
      flex: 1;

      h2 {
        font-size: 2.25rem;
        margin-bottom: 1rem;
        color: var(--text-color);

        @media (max-width: 768px) {
          font-size: 1.75rem;
          text-align: center;
        }
      }

      p {
        color: var(--text-light);
        margin-bottom: 1.5rem;
        font-size: 1.05rem;
        line-height: 1.6;

        @media (max-width: 768px) {
          text-align: center;
        }
      }

      .results-cta {
        @media (max-width: 768px) {
          text-align: center;
        }

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

    .results-metrics {
      flex: 1;

      .metrics-showcase {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;

        @media (max-width: 576px) {
          grid-template-columns: 1fr;
        }

        .showcase-metric {
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

          .metric-number {
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

// Comparison Section - Espaço reduzido
.comparison-section {
  padding: 3.5rem 0; // Reduzido
  background-color: white;
}

// Success Stories Section - Mais compacta
.success-stories-section {
  padding: 3.5rem 0; // Reduzido
  background-color: var(--bg-light);

  .stories-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem; // Reduzido
    margin-bottom: 2rem; // Reduzido

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .story-card {
      background-color: white;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); // Reduzido
      transition: all 0.3s ease;
      height: 100%;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      }

      .story-content {
        padding: 1.5rem; // Reduzido
      }

      .story-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem; // Reduzido

        .story-logo {
          .logo-placeholder {
            width: 60px; // Reduzido
            height: 60px; // Reduzido
            border-radius: 0.5rem;
            background-color: rgba(0, 133, 255, 0.1);
            border: 2px dashed var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.65rem; // Reduzido
            color: var(--primary-color);
            text-align: center;
          }
        }

        .story-meta {
          h3 {
            font-size: 1.2rem; // Reduzido
            margin: 0 0 0.25rem;
            color: var(--text-color);
          }

          p {
            margin: 0;
            color: var(--text-light);
            font-size: 0.85rem; // Reduzido
          }
        }
      }

      .story-results {
        display: flex;
        margin-bottom: 1rem; // Reduzido
        gap: 1.5rem; // Reduzido

        .result-item {
          .result-value {
            font-size: 1.8rem; // Reduzido
            font-weight: 800;
            color: var(--primary-color);
            line-height: 1;
            margin-bottom: 0.35rem; // Reduzido
          }

          .result-label {
            font-size: 0.85rem; // Reduzido
            color: var(--text-light);
          }
        }
      }

      .story-quote {
        font-style: italic;
        color: var(--text-color);
        margin: 0 0 1rem; // Reduzido
        padding: 0;
        position: relative;
        padding-left: 1.25rem; // Reduzido
        border-left: 3px solid var(--primary-color);
        line-height: 1.5;
        font-size: 0.9rem; // Reduzido
      }

      .story-author {
        .author-name {
          font-weight: 600;
          margin: 0 0 0.25rem;
          color: var(--text-color);
          font-size: 0.95rem; // Reduzido
        }

        .author-title {
          margin: 0;
          font-size: 0.8rem; // Reduzido
          color: var(--text-light);
        }
      }
    }
  }

  .stories-cta {
    text-align: center;

    .btn-outline {
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      background: transparent;
      padding: 0.75rem 1.5rem; // Reduzido
      font-size: 1rem; // Reduzido
      font-weight: 600;
      border-radius: 0.5rem;
      transition: all 0.3s ease;

      &:hover {
        background-color: rgba(0, 133, 255, 0.1);
        transform: translateY(-5px);
      }
    }
  }
}

// Calculator Section - Significativamente mais compacta
.calculator-section {
  padding: 3.5rem 0; // Reduzido
  background: linear-gradient(135deg, var(--text-color) 0%, #2c3e50 100%);
  color: white;

  .calculator-content {
    max-width: 900px;
    margin: 0 auto;

    .calculator-header {
      text-align: center;
      margin-bottom: 1.75rem; // Reduzido significativamente

      h2 {
        font-size: 2.25rem; // Reduzido
        margin-bottom: 0.5rem; // Reduzido

        @media (max-width: 768px) {
          font-size: 1.75rem;
        }
      }

      p {
        font-size: 1.1rem; // Reduzido
        opacity: 0.8;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }

    .calculator-widget {
      background-color: white;
      border-radius: 1rem;
      padding: 1.5rem; // Reduzido
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15); // Reduzido
    }
  }
}

// CTA Section - Mais impactante com ajustes de espaçamento
.cta-section {
  padding: 3.5rem 0; // Reduzido
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;

  .cta-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;

    h2 {
      font-size: 2.5rem; // Reduzido
      font-weight: 800;
      margin-bottom: 1rem; // Reduzido

      @media (max-width: 768px) {
        font-size: 2.25rem;
      }
    }

    p {
      font-size: 1.25rem; // Reduzido
      opacity: 0.9;
      margin-bottom: 1.75rem; // Reduzido

      @media (max-width: 768px) {
        font-size: 1.15rem;
      }
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1.25rem; // Reduzido

      @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      .btn {
        padding: 1rem 2rem; // Reduzido
        font-size: 1.15rem; // Reduzido
        font-weight: 600;
        border-radius: 0.5rem;
        transition: all 0.3s ease;

        &.btn-primary {
          background-color: white;
          color: var(--primary-color);
          border: none;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          }
        }

        &.btn-outline {
          border: 2px solid white;
          color: white;
          background: transparent;

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-5px);
          }
        }
      }
    }
  }
}

// Calculator Modal - Otimizada
.calculator-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.25rem; // Reduzido

  .modal-content {
    background-color: white;
    border-radius: 1rem;
    padding: 1.5rem; // Reduzido
    max-width: 800px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;

    .close-modal {
      position: absolute;
      top: 1.25rem; // Reduzido
      right: 1.25rem; // Reduzido
      background: none;
      border: none;
      color: var(--text-light);
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background-color: #f5f5f5;
        color: var(--text-color);
      }
    }

    h3 {
      font-size: 1.75rem; // Reduzido
      margin-bottom: 0.75rem; // Reduzido
      color: var(--text-color);
    }

    p {
      color: var(--text-light);
      margin-bottom: 1.5rem; // Reduzido
    }
  }
}

// General utility styles
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

// Common section
.section {
  padding: 3.5rem 0; // Reduzido

  &.section-light {
    background-color: var(--bg-light);
  }
}
</style>
