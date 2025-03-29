<template>
  <div class="how-it-works">
    <!-- Hero Section -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1>Transform Your Business with Our Streamlined Process</h1>
          <p>Discover our 3-step methodology that delivers exceptional results in as little as 15 business days</p>
          <div class="header-cta">
            <router-link to="/contact" class="btn btn-primary">
              Request a Proposal
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
            <router-link to="/why-align" class="btn btn-outline">See Our Results</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Timeline Section -->
    <section class="process-section section">
      <div class="container">
        <!-- Componente ProcessTimeline -->
        <ProcessTimeline
          :steps="processSteps"
          :initial-active-step="0"
          cta-text="Start your project now"
          @action-click="scrollToContact"
        />
      </div>
    </section>

    <!-- Detailed Process Steps - Mantidas sem alterações -->
    <section class="detailed-process section section-light">
      <div class="container">
        <div class="process-steps">
          <div v-for="(step, index) in detailedSteps" :key="index" class="detailed-step" :id="`step-${index + 1}`">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <div class="step-header">
                <h3>{{ step.title }}</h3>
                <span class="step-duration">{{ step.duration }}</span>
              </div>
              <p class="step-description">{{ step.description }}</p>

              <div class="step-details">
                <div class="detail-column">
                  <h4>What Happens</h4>
                  <ul class="detail-list">
                    <li v-for="(item, i) in step.whatHappens" :key="i">{{ item }}</li>
                  </ul>
                </div>

                <div class="detail-column">
                  <h4>Deliverables</h4>
                  <ul class="detail-list">
                    <li v-for="(item, i) in step.deliverables" :key="i">{{ item }}</li>
                  </ul>
                </div>

                <div class="detail-column">
                  <h4>Benefits</h4>
                  <ul class="detail-list">
                    <li v-for="(item, i) in step.benefits" :key="i">{{ item }}</li>
                  </ul>
                </div>
              </div>

              <div class="case-study">
                <div class="quote-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <blockquote>{{ step.caseStudy.quote }}</blockquote>
                <div class="client-info">
                  <p class="client-name">{{ step.caseStudy.client }}</p>
                  <p class="client-company">{{ step.caseStudy.company }}</p>
                </div>
              </div>

              <div class="step-cta">
                <router-link :to="step.ctaLink" class="btn btn-secondary">{{ step.ctaText }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bridging Section - Movida para depois dos três passos detalhados conforme solicitado -->
    <section class="bridge-section section section-light">
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

    <!-- Process FAQ Section - Mantida sem alterações -->
    <section id="faq" class="faq-section section">
      <div class="container">
        <div class="section-title">
          <h2>Common Questions About Our Process</h2>
          <p>Answers to frequently asked questions about how our methodology works</p>
        </div>

        <div class="faq-list">
          <div
            class="faq-item"
            v-for="(faq, index) in processFaqs"
            :key="index"
            :class="{ active: activeFaq === index }"
          >
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <div class="faq-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12" class="vertical-line"></line>
                </svg>
              </div>
            </div>
            <div class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section - Mantida sem alterações -->
    <section id="contact" class="cta-section section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to transform your business?</h2>
          <p>Take the first step toward a more efficient, economical, and scalable operation with our proven process.</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="btn btn-primary">
              Talk to an Expert
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
            <a href="tel:+15551234567" class="btn btn-outline">Call Now: (555) 123-4567</a>
          </div>
          <div class="cta-calculator">
            <button @click="showCalculator = true" class="calculator-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <line x1="12" y1="4" x2="12" y2="20"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
              </svg>
              Calculate Your Potential Savings
            </button>
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
import { ref } from 'vue'
import ProcessTimeline from '@/components/process/ProcessTimeline.vue'
import RoiCalculator from '@/components/sections/RoiCalculator.vue'

// States
const activeFaq = ref(-1)
const showCalculator = ref(false)

// Process Steps for Timeline Component
import type { Step } from '../types' // Update the path to the correct location of the 'types' file

// Simplificação dos processSteps conforme solicitado
const processSteps: Step[] = [
  {
    title: 'Consultation & Planning',
    icon: 'chat',
    description: 'We assess your needs, analyze your business requirements, and develop a personalized strategy.',
    duration: '1-2 weeks',
    highlights: [
      'Business needs assessment',
      'Resource planning',
      'Custom solution design'
    ],
    details: 'This step involves understanding your business needs and creating a tailored plan.'
  },
  {
    title: 'Implementation & Transition',
    icon: 'rocket',
    description: 'We set up your team, systems, and processes with minimal disruption to your operations.',
    duration: '2-4 weeks',
    highlights: [
      'Team onboarding & training',
      'Systems integration',
      'Seamless transition management'
    ],
    details: 'This step ensures a smooth transition with minimal disruption to your operations.'
  },
  {
    title: 'Management & Growth',
    icon: 'chart',
    description: 'Ongoing optimization, reporting, and scaling to achieve continuous improvement.',
    duration: 'Ongoing',
    highlights: [
      'Real-time performance dashboards',
      'Continuous quality assurance',
      'Flexible team scaling'
    ],
    details: 'This step focuses on continuous improvement and scaling for long-term success.'
  }
]

// Detailed process steps mantidos sem alterações
const detailedSteps = [
  {
    title: 'Consultation & Planning',
    duration: '1-2 weeks',
    description: 'We dive deep into understanding your business needs, challenges, and goals to create a tailored solution.',
    whatHappens: [
      'Initial discovery meeting to understand your business',
      'Analysis of current processes and pain points',
      'Resource planning and team composition design',
      'Development of customized implementation roadmap'
    ],
    deliverables: [
      'Comprehensive needs assessment report',
      'Custom solution proposal with detailed pricing',
      'Implementation timeline and milestones',
      'ROI projection and success metrics'
    ],
    benefits: [
      'Solutions tailored to your specific business challenges',
      'Clear understanding of costs and expected outcomes',
      'Strategic alignment with your business objectives',
      'Risk mitigation through careful planning'
    ],
    caseStudy: {
      quote: "The consultation phase was incredibly thorough. Align truly took the time to understand our unique challenges and design a solution that addressed our specific needs, not just a one-size-fits-all approach.",
      client: "Michael Thompson",
      company: "CTO, FinTech Innovations"
    },
    ctaLink: "/contact",
    ctaText: "Schedule a Consultation"
  },
  {
    title: 'Implementation & Transition',
    duration: '2-4 weeks',
    description: 'We build and onboard your dedicated team, establish workflows, and ensure a smooth transition with minimal disruption.',
    whatHappens: [
      'Selection and onboarding of your dedicated team',
      'Knowledge transfer and comprehensive training',
      'Systems and tools setup and integration',
      'Progressive transition with overlapping support'
    ],
    deliverables: [
      'Fully trained dedicated team',
      'Documented processes and workflows',
      'Integrated systems and communication tools',
      'Initial KPI tracking dashboard'
    ],
    benefits: [
      'Minimal disruption to your current operations',
      'Rapid team deployment (as fast as 15 days)',
      'Secure and efficient knowledge transfer',
      'Clear communication channels and reporting structure'
    ],
    caseStudy: {
      quote: "I was amazed at how smooth the transition was. Within 3 weeks, we had a fully operational team that understood our business almost as well as our internal staff. The implementation team at Align made what could have been a complex process remarkably simple.",
      client: "Jennifer Williams",
      company: "Operations Director, E-commerce Solutions"
    },
    ctaLink: "/case-studies",
    ctaText: "View Implementation Case Studies"
  },
  {
    title: 'Management & Growth',
    duration: 'Ongoing',
    description: 'We provide continuous support, optimization, and scalability to ensure long-term success and adaptability to changing needs.',
    whatHappens: [
      'Regular performance reviews and optimization',
      'Continuous training and skill development',
      'Proactive capacity planning and scaling',
      'Strategic business reviews and roadmapping'
    ],
    deliverables: [
      'Real-time performance dashboards',
      'Monthly service review meetings',
      'Continuous improvement recommendations',
      'Flexible team scaling as needed'
    ],
    benefits: [
      'Data-driven decision making and transparency',
      'Continuous quality improvement',
      'Flexibility to scale up or down as needs change',
      'Long-term strategic partnership'
    ],
    caseStudy: {
      quote: "The ongoing management phase is where Align truly shines. They're constantly looking for ways to improve efficiency and effectiveness. Our team has scaled from 3 to 12 members in 18 months, and the growth has been seamless. The regular insights and analytics have helped us make better business decisions.",
      client: "Robert Chen",
      company: "CEO, SaaS Platform"
    },
    ctaLink: "/services",
    ctaText: "Explore Our Services"
  }
]

// Process FAQs mantidos sem alterações
const processFaqs = [
  {
    question: "How long does it take to get my team operational?",
    answer: "We can have your dedicated team fully operational in as little as 15 business days, depending on the complexity of your requirements. Our expedited process is 3-4 times faster than traditional outsourcing methods. The consultation phase typically takes 1-2 weeks, followed by implementation in 2-4 weeks, with the most straightforward projects ready in just 15 days from initial contact."
  },
  {
    question: "What happens during the implementation phase?",
    answer: "During implementation, we select and onboard your dedicated team members, conduct thorough training specific to your business, set up all necessary systems and tools, and manage a progressive transition to ensure continuity. We establish clear communication channels, document all processes, and implement monitoring systems to track performance from day one. This phase includes overlap with your existing operations to ensure a smooth handover."
  },
  {
    question: "Can I scale my team up or down during our partnership?",
    answer: "Absolutely. One of the key benefits of our process is flexibility. You can scale your team up or down with just 2 weeks' notice in most cases. Our capacity planning approach ensures we have pre-vetted talent ready to join your team when you need to scale up, and our resource allocation system makes it easy to adjust when you need to scale down. This flexibility is built into our contracts and process from the beginning."
  },
  {
    question: "What ongoing support do you provide after implementation?",
    answer: "After implementation, we provide comprehensive ongoing support including regular performance reviews, continuous training and development for your team, real-time monitoring and reporting through customized dashboards, monthly service review meetings, and strategic business reviews. Our dedicated account managers ensure any issues are promptly addressed, and our continuous improvement methodology identifies optimization opportunities throughout our partnership."
  },
  {
    question: "How do you ensure quality and consistency throughout the process?",
    answer: "Quality and consistency are ensured through our rigorous selection process (only 3% of candidates qualify), comprehensive training programs, documented standard operating procedures, real-time performance monitoring, regular quality assurance reviews, and continuous feedback mechanisms. We also implement redundancy protocols to maintain service levels even during absences, and conduct regular calibration sessions to ensure alignment with your expectations and standards."
  }
]

// Methods
const toggleFaq = (index: number) => {
  if (activeFaq.value === index) {
    activeFaq.value = -1
  } else {
    activeFaq.value = index
  }
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<style lang="scss" scoped>
// Page Header
.page-header {
  background-color: #f8f9fa;
  background-image: linear-gradient(135deg, #f8f9fa 0%, #e9f5ff 100%);
  padding: 5rem 0 3rem;
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

  .header-content {
    text-align: center;
    max-width: 850px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--text-color);

      @media (max-width: 768px) {
        font-size: 2.25rem;
      }
    }

    p {
      color: var(--text-light);
      font-size: 1.25rem;
      margin-bottom: 2rem;

      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }

    .header-cta {
      display: flex;
      justify-content: center;
      gap: 1rem;

      @media (max-width: 576px) {
        flex-direction: column;
      }

      .btn {
        padding: 1rem 1.5rem;
        border-radius: 6px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;

        &.btn-primary {
          background-color: var(--primary-color);
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;

          svg {
            transition: transform 0.3s ease;
          }

          &:hover {
            background-color: var(--primary-dark);

            svg {
              transform: translateX(5px);
            }
          }
        }

        &.btn-outline {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);

          &:hover {
            background-color: rgba(0, 133, 255, 0.1);
          }
        }
      }
    }
  }
}

// Common section styles
.section {
  padding: 5rem 0;

  &.section-light {
    background-color: var(--bg-light);
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text-color);

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      color: var(--text-light);
      font-size: 1.1rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

// Detailed Process Steps
.detailed-process {
  .process-steps {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .detailed-step {
    display: flex;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    .step-number {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      font-weight: 800;
      color: white;
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
      min-width: 100px;
      padding: 2rem;

      @media (max-width: 768px) {
        min-height: 100px;
        font-size: 2.5rem;
      }
    }

    .step-content {
      flex: 1;
      padding: 2rem;

      .step-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;

        @media (max-width: 576px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
        }

        h3 {
          font-size: 1.75rem;
          margin: 0;
        }

        .step-duration {
          background-color: rgba(0, 133, 255, 0.1);
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.875rem;
        }
      }

      .step-description {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        color: var(--text-light);
      }

      .step-details {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-bottom: 2rem;

        @media (max-width: 992px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }

        .detail-column {
          h4 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
            color: var(--text-color);
            display: flex;
            align-items: center;

            &::before {
              content: '';
              display: inline-block;
              width: 8px;
              height: 8px;
              background-color: var(--primary-color);
              border-radius: 50%;
              margin-right: 0.75rem;
            }
          }

          .detail-list {
            list-style-type: none;
            padding: 0;
            margin: 0;

            li {
              position: relative;
              padding-left: 1.5rem;
              margin-bottom: 0.75rem;
              color: var(--text-light);

              &::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: var(--primary-color);
                font-weight: bold;
              }
            }
          }
        }
      }

      .case-study {
        background-color: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
        margin-bottom: 2rem;
        position: relative;

        .quote-icon {
          color: rgba(0, 133, 255, 0.1);
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        blockquote {
          font-style: italic;
          padding: 0 0 0 2.5rem;
          margin: 0 0 1rem 0;
          color: var(--text-color);
        }

        .client-info {
          margin-left: 2.5rem;

          .client-name {
            font-weight: 600;
            margin-bottom: 0.25rem;
          }

          .client-company {
            font-size: 0.875rem;
            color: var(--text-light);
          }
        }
      }

      .step-cta {
        .btn-secondary {
          background: linear-gradient(135deg, #00c875 0%, #00a65a 100%);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 200, 117, 0.2);
          }
        }
      }
    }
  }
}

// Bridging Section
.bridge-section {
  .bridge-content {
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 2rem;
    }

    .bridge-text {
      flex: 1;

      h2 {
        font-size: 2.25rem;
        margin-bottom: 1.5rem;
        text-align: left;

        @media (max-width: 768px) {
          font-size: 1.75rem;
        }
      }

      p {
        margin-bottom: 2rem;
        text-align: left;
      }

      .bridge-cta {
        .btn-primary {
          background-color: var(--primary-color);
          color: white;
          padding: 1rem 1.5rem;
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
        gap: 1.5rem;

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

// FAQ Section
.faq-section {
  .faq-list {
    max-width: 800px;
    margin: 0 auto;
  }

  .faq-item {
    background-color: white;
    border-radius: 12px;
    margin-bottom: 1rem;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    .faq-question {
      padding: 1.5rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        font-size: 1.2rem;
        margin: 0;
        font-weight: 600;
      }

      .faq-icon {
        transition: all 0.3s ease;

        .vertical-line {
          transition: transform 0.3s ease;
        }
      }
    }

    .faq-answer {
      padding: 0 1.5rem;
      max-height: 0;
      overflow: hidden;
      transition: all 0.3s ease;
      opacity: 0;

      p {
        margin-bottom: 1.5rem;
        line-height: 1.7;
      }
    }

    &.active {
      .faq-icon {
        .vertical-line {
          transform: scaleY(0);
        }
      }

      .faq-answer {
        padding: 0 1.5rem 1.5rem;
        max-height: 1000px;
        opacity: 1;
      }
    }
  }
}

// CTA Section
.cta-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;

  .cta-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;

    h2 {
      font-size: 2.5rem;
      color: white;
      margin-bottom: 1.5rem;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1.25rem;
      opacity: 0.9;
      margin-bottom: 2rem;

      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;

      @media (max-width: 576px) {
        flex-direction: column;
      }

      .btn {
        padding: 1rem 1.5rem;
        border-radius: 6px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;

        &.btn-primary {
          background-color: white;
          color: var(--primary-color);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;

          svg {
            transition: transform 0.3s ease;
          }

          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

            svg {
              transform: translateX(5px);
            }
          }
        }

        &.btn-outline {
          border: 2px solid white;
          color: white;

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-3px);
          }
        }
      }
    }

    .cta-calculator {
      .calculator-btn {
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        border: none;
        padding: 0.75rem 1.25rem;
        border-radius: 6px;
        font-weight: 500;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;

        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
}

// Calculator Modal
.calculator-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;

  .modal-content {
    background-color: white;
    border-radius: 12px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    padding: 2rem;

    .close-modal {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      transition: all 0.3s ease;

      &:hover {
        background-color: #f5f5f5;
      }
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }

    p {
      color: var(--text-light);
      margin-bottom: 2rem;
    }
  }
}

// Utility
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
