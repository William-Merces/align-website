<template>
  <div class="contact-page">
    <!-- Page Header - Optimized with more impactful title -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1>Start Your Success Journey Today</h1>
          <p>Connect with our experts to create a tailored solution that drives your business growth.</p>
        </div>
      </div>
    </section>

    <!-- Main contact section - Optimized layout -->
    <section class="section contact-section">
      <div class="container">
        <div class="contact-content">
          <!-- Contact form - More compact and user-friendly -->
          <div class="contact-form-container">
            <h2>Request a Proposal</h2>
            <p>Receive a personalized analysis with cost savings estimate for your company</p>

            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    :class="{ 'input-error': submitted && !formData.name }"
                    placeholder="Your full name"
                    required
                  >
                  <span v-if="submitted && !formData.name" class="error-message">Please enter your name</span>
                </div>

                <div class="form-group">
                  <label for="email">Corporate Email *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    :class="{ 'input-error': submitted && !formData.email }"
                    placeholder="your.email@company.com"
                    required
                  >
                  <span v-if="submitted && !formData.email" class="error-message">Please enter your email</span>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="company">Company *</label>
                  <input
                    type="text"
                    id="company"
                    v-model="formData.company"
                    :class="{ 'input-error': submitted && !formData.company }"
                    placeholder="Your company name"
                    required
                  >
                  <span v-if="submitted && !formData.company" class="error-message">Please enter your company name</span>
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="formData.phone"
                    placeholder="(555) 123-4567"
                  >
                </div>
              </div>

              <!-- Services of interest - Compact grid layout -->
              <div class="form-group">
                <label>Services of Interest *</label>
                <div class="service-interests">
                  <div class="interest-options">
                    <div
                      v-for="(service, index) in services"
                      :key="index"
                      class="interest-option"
                      :class="{ selected: formData.interests.includes(service) }"
                      @click="toggleInterest(service)"
                    >
                      <span class="interest-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </span>
                      <span class="interest-name">{{ service }}</span>
                      <span class="interest-check" v-if="formData.interests.includes(service)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <span v-if="submitted && formData.interests.length === 0" class="error-message">Please select at least one service</span>
                </div>
              </div>

              <!-- Message field with reduced height -->
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="3"
                  placeholder="Tell us about your needs and objectives..."
                ></textarea>
              </div>

              <!-- Privacy policy with improved layout -->
              <div class="form-group privacy-group">
                <label class="checkbox-container">
                  <input
                    type="checkbox"
                    v-model="formData.privacyPolicy"
                    :class="{ 'input-error': submitted && !formData.privacyPolicy }"
                    required
                  >
                  <span class="checkmark"></span>
                  <span class="label-text">
                    I agree to the processing of my data in accordance with the <a href="/privacy-policy">Privacy Policy</a>
                  </span>
                </label>
                <span v-if="submitted && !formData.privacyPolicy" class="error-message">You must agree to the Privacy Policy</span>
              </div>

              <!-- Submit button with visual feedback -->
              <div class="form-actions">
                <button type="submit" class="btn btn-primary btn-block">
                  <span v-if="!submitting">Submit Request</span>
                  <span v-else class="loading-spinner"></span>
                </button>
              </div>
            </form>
          </div>

          <!-- Contact information - Optimized details -->
          <div class="contact-info-container">
            <div class="contact-info">
              <h2>Contact Information</h2>

              <div class="contact-methods">
                <div class="contact-method">
                  <div class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div class="contact-details">
                    <h3>Phone</h3>
                    <p><a href="tel:+15551234567">(555) 123-4567</a></p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div class="contact-details">
                    <h3>Email</h3>
                    <p><a href="mailto:contact@align.com">contact@align.com</a></p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div class="contact-details">
                    <h3>Address</h3>
                    <p>
                      1000 Park Avenue - Financial District<br>
                      New York, NY 10000
                    </p>
                  </div>
                </div>
              </div>

              <!-- Business hours with more compact layout -->
              <div class="availability-info">
                <h3>Business Hours</h3>
                <p>Monday to Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Weekend support available for existing clients</p>
              </div>

              <!-- Highlighted benefits for better conversion -->
              <div class="contact-benefits">
                <div class="benefit-item">
                  <div class="benefit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div class="benefit-text">
                    <strong>40% cost savings</strong> compared to in-house operations
                  </div>
                </div>

                <div class="benefit-item">
                  <div class="benefit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div class="benefit-text">
                    Team ready in <strong>as little as 15 days</strong>
                  </div>
                </div>

                <div class="benefit-item">
                  <div class="benefit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div class="benefit-text">
                    <strong>Fast response guarantee</strong> within 24 hours
                  </div>
                </div>
              </div>

              <!-- More persuasive contact CTA -->
              <div class="contact-cta">
                <p class="cta-text">Take the first step toward smarter outsourcing—enjoy a complimentary consultation this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ section with FaqAccordion component -->
    <section class="section section-light faq-section">
      <div class="container">
        <div class="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about our contact process and next steps</p>
        </div>

        <FaqAccordion
          :items="contactFaqs"
          :categories="faqCategories"
          initial-category="contact"
          :show-categories="true"
          :max-items="4"
          :show-view-all="true"
          @view-all="navigateToFaqPage"
        />
      </div>
    </section>

    <!-- Successful submission modal - Improved success modal -->
    <div v-if="showSuccessModal" class="modal-overlay" @click.self="closeSuccessModal">
      <div class="success-modal">
        <div class="modal-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h2>Thank You!</h2>
        <p>Your message has been sent successfully. Our team will contact you within 24 hours.</p>
        <div class="modal-benefits">
          <div class="modal-benefit">
            <div class="benefit-number">40%</div>
            <div class="benefit-label">Average Cost Savings</div>
          </div>
          <div class="modal-benefit">
            <div class="benefit-number">15</div>
            <div class="benefit-label">Days to Team Setup</div>
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn btn-primary" @click="closeSuccessModal">Close</button>
          <router-link to="/services" class="btn btn-outline">Explore Our Services</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import FaqAccordion from '@/components/shared/FaqAccordion.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form data
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  interests: [] as string[],
  message: '',
  privacyPolicy: false
})

// List of services for checkboxes
const services = [
  'Development',
  'Customer Support',
  'Project Management',
  'Marketing',
  'Design',
  'Accounting',
  'Administrative'
]

// State for form submission
const submitted = ref(false)
const submitting = ref(false)
const showSuccessModal = ref(false)

// FAQ categories
const faqCategories = [
  { id: 'contact', name: 'Contact Process', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>' },
  { id: 'proposal', name: 'Proposals', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>' },
  { id: 'services', name: 'Our Services', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>' }
]

// FAQ data with appropriate categories
const contactFaqs = [
  {
    question: 'How long does it take to receive a proposal?',
    answer: 'After submitting the form, our team will contact you within 24 business hours. A personalized proposal will be sent within 3 business days after this initial conversation.',
    category: 'contact',
    actions: [
      {
        text: 'View Proposal Process',
        link: '/how-it-works',
        primary: false
      }
    ]
  },
  {
    question: 'Can I request a demonstration before hiring?',
    answer: 'Yes, we offer demonstrations and presentation meetings so you can better understand our services and see how we can help your business before making a decision.',
    category: 'proposal',
    actions: [
      {
        text: 'Schedule a Demo',
        link: '/contact?demo=true',
        primary: true
      }
    ]
  },
  {
    question: 'Do you work with companies of all sizes?',
    answer: 'Yes, we work with companies of all sizes, from startups to large corporations. Our model is flexible and adaptable to the specific needs of each business.',
    category: 'services'
  },
  {
    question: 'What is the minimum contract length?',
    answer: 'Our contracts have a minimum term of 3 months, with the possibility of adjustments and renewals. We also offer options for specific projects with defined timeframes.',
    category: 'proposal'
  },
  {
    question: 'How does your pricing model work?',
    answer: 'Our pricing is transparent and based on the services you need and the team size required. We offer savings of up to 40% compared to traditional in-house solutions, with flexible packages to fit your budget.',
    category: 'proposal',
    actions: [
      {
        text: 'See Pricing Options',
        link: '/services#pricing',
        primary: false
      }
    ]
  },
  {
    question: 'What services do you specialize in?',
    answer: 'We specialize in development, customer support, project management, marketing, design, and accounting services. Each department is staffed with professionals who are experts in their fields.',
    category: 'services',
    actions: [
      {
        text: 'Explore Our Services',
        link: '/services',
        primary: false
      }
    ]
  }
]

// Function to toggle interests in services
const toggleInterest = (service: string) => {
  const index = formData.interests.indexOf(service)
  if (index === -1) {
    formData.interests.push(service)
  } else {
    formData.interests.splice(index, 1)
  }
}

// Function to handle form submission
const handleSubmit = () => {
  // Mark form as submitted for validation
  submitted.value = true

  // Check if all required fields are filled
  if (
    !formData.name ||
    !formData.email ||
    !formData.company ||
    formData.interests.length === 0 ||
    !formData.privacyPolicy
  ) {
    // Scroll to first error
    setTimeout(() => {
      const firstError = document.querySelector('.error-message')
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
    return
  }

  // Show loading state
  submitting.value = true

  // Simulate API call with delay
  setTimeout(() => {
    // Hide loading state
    submitting.value = false

    // Show success modal
    showSuccessModal.value = true

    // Reset the form
    submitted.value = false
    Object.assign(formData, {
      name: '',
      email: '',
      phone: '',
      company: '',
      interests: [],
      message: '',
      privacyPolicy: false
    })
  }, 1500)
}

// Function to close the success modal
const closeSuccessModal = () => {
  showSuccessModal.value = false
}

// Function to navigate to FAQ page
const navigateToFaqPage = () => {
  router.push('/faq')
}

// Check for URL parameters to pre-select services
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const serviceParam = urlParams.get('service')

  if (serviceParam && services.includes(serviceParam)) {
    formData.interests.push(serviceParam)
  }

  if (urlParams.get('demo') === 'true') {
    formData.message = 'I would like to schedule a demonstration of your services.'
  }
})
</script>
<style lang="scss" scoped>
/* ======================================================
 * OPTIMIZED STYLES FOR CONTACTVIEW.VUE
 * ------------------------------------------------------
 * Optimized layout and spacing for better conversion
 * More compact and better organized form
 * Highlighted benefits and value points
 * ====================================================== */

:root {
  --primary-color: #0085ff;
  --primary-dark: #0066cc;
  --primary-light: #e9f5ff;
  --secondary-color: #00c875;
  --text-color: #333;
  --text-light: #666;
  --border-color: #eaeaea;
  --error-color: #ff3b3b;
  --success-color: #00c875;
  --bg-light: #f8f9fa;
}

/* Optimized page header - more compact */
.page-header {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9f5ff 100%);
  padding: 3.5rem 0 2rem; /* Reduced from 4rem 0 2.5rem */
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
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    h1 {
      font-size: 2.75rem;
      font-weight: 700;
      margin-bottom: 1rem;
      background: linear-gradient(90deg, var(--text-color) 0%, var(--primary-color) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      @media (max-width: 768px) {
        font-size: 2.25rem;
      }
    }

    p {
      color: var(--text-light);
      font-size: 1.2rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
}

/* Main contact section - Optimized layout */
.contact-section {
  padding: 3.5rem 0; /* Reduced from 4rem 0 */
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -200px;
    left: -200px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 133, 255, 0.05) 0%, rgba(0, 133, 255, 0.02) 60%, transparent 70%);
    z-index: -1;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem; /* Reduced from 2rem */

    @media (min-width: 992px) {
      grid-template-columns: 3fr 2fr;
    }
  }

  .contact-form-container, .contact-info-container {
    background-color: white;
    border-radius: 10px; /* Reduced from 12px */
    padding: 1.75rem 1.5rem; /* Reduced from 2rem 1.75rem */
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05); /* Reduced */
    height: 100%;

    @media (max-width: 768px) {
      padding: 1.25rem; /* Reduced from 1.5rem */
    }
  }

  .contact-form-container {
    h2 {
      font-size: 1.5rem; /* Reduced from 1.65rem */
      margin-bottom: 0.4rem; /* Reduced from 0.5rem */
      color: var(--text-color);
    }

    p {
      color: var(--text-light);
      margin-bottom: 1.25rem; /* Reduced from 1.5rem */
      font-size: 0.925rem; /* Reduced from 0.95rem */
    }

    .contact-form {
      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem; /* Reduced from 1.25rem */

        @media (max-width: 768px) {
          grid-template-columns: 1fr;
          gap: 0;
        }
      }

      .form-group {
        margin-bottom: 1rem; /* Reduced from 1.25rem */

        label {
          display: block;
          margin-bottom: 0.35rem; /* Reduced from 0.375rem */
          font-weight: 500;
          font-size: 0.875rem; /* Reduced from 0.9rem */
          color: var(--text-color);
        }

        input, textarea {
          width: 100%;
          padding: 0.7rem 0.9rem; /* Reduced from 0.75rem 1rem */
          border: 1px solid var(--border-color);
          border-radius: 6px; /* Reduced from 8px */
          font-family: inherit;
          font-size: 0.925rem; /* Reduced from 0.95rem */
          transition: all 0.3s ease;

          &:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(0, 133, 255, 0.1);
          }

          &.input-error {
            border-color: var(--error-color);

            &:focus {
              box-shadow: 0 0 0 3px rgba(255, 59, 59, 0.1);
            }
          }
        }

        .error-message {
          display: block;
          color: var(--error-color);
          font-size: 0.775rem; /* Reduced from 0.8rem */
          margin-top: 0.35rem; /* Reduced from 0.375rem */
        }

        /* Services of interest - More compact and responsive layout */
        .service-interests {
          margin-top: 0.4rem; /* Reduced from 0.5rem */

          .interest-options {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.6rem; /* Reduced from 0.75rem */

            @media (max-width: 768px) {
              grid-template-columns: 1fr;
            }

            .interest-option {
              display: flex;
              align-items: center;
              padding: 0.6rem 0.75rem; /* Reduced from 0.625rem 0.875rem */
              border: 1px solid var(--border-color);
              border-radius: 6px; /* Reduced from 8px */
              cursor: pointer;
              transition: all 0.2s ease;

              &:hover {
                border-color: var(--primary-color);
                background-color: rgba(0, 133, 255, 0.03);
              }

              &.selected {
                background-color: var(--primary-light);
                border-color: var(--primary-color);
              }

              .interest-icon {
                margin-right: 0.5rem;
                color: var(--primary-color);
                display: flex;
                align-items: center;
              }

              .interest-name {
                flex: 1;
                font-size: 0.875rem; /* Reduced from 0.9rem */
              }

              .interest-check {
                color: var(--primary-color);
                display: flex;
                align-items: center;
                animation: scaleIn 0.2s ease;
              }
            }
          }
        }
      }

      /* Privacy policy group - Improved and more compact style */
      .privacy-group {
        margin-bottom: 1.25rem; /* Reduced from 1.5rem */

        .checkbox-container {
          display: flex;
          padding: 0.2rem; /* Reduced from 0.25rem */
          position: relative;
          cursor: pointer;

          input[type="checkbox"] {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;

            &:checked ~ .checkmark {
              background-color: var(--primary-color);
              border-color: var(--primary-color);

              &:after {
                display: block;
              }
            }
          }

          .checkmark {
            position: relative;
            top: 0;
            left: 0;
            height: 18px;
            width: 18px;
            min-width: 18px;
            background-color: #fff;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            margin-right: 0.75rem;
            margin-top: 0.1rem;
            transition: all 0.2s ease;

            &:after {
              content: "";
              position: absolute;
              display: none;
              left: 6px;
              top: 2px;
              width: 5px;
              height: 10px;
              border: solid white;
              border-width: 0 2px 2px 0;
              transform: rotate(45deg);
            }
          }

          .label-text {
            font-size: 0.875rem; /* Reduced from 0.9rem */
            color: var(--text-light);

            a {
              color: var(--primary-color);
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            }
          }

          &:hover .checkmark {
            border-color: var(--primary-color);
          }
        }
      }

      .form-actions {
        .btn-block {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 2.85rem; /* Reduced from 3rem */
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          border: none;
          border-radius: 6px; /* Reduced from 8px */
          font-size: 1rem; /* Reduced from 1.05rem */
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 133, 255, 0.2); /* Reduced from 0 5px 15px */

          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 133, 255, 0.3); /* Reduced from 0 8px 25px */
          }

          &:active {
            transform: translateY(-1px);
          }

          .loading-spinner {
            display: inline-block;
            width: 1.4rem; /* Reduced from 1.5rem */
            height: 1.4rem; /* Reduced from 1.5rem */
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        }
      }
    }
  }

  /* Contact information container - Optimized and more compact layout */
  .contact-info-container {
    .contact-info {
      height: 100%;
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 1.5rem; /* Reduced from 1.65rem */
        margin-bottom: 1.25rem; /* Reduced from 1.5rem */
        color: var(--text-color);
      }

      .contact-methods {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.25rem; /* Reduced from 1.5rem */
        gap: 1rem; /* Reduced from 1.25rem */
      }

      .contact-method {
        display: flex;
        align-items: flex-start;

        .contact-icon {
          color: var(--primary-color);
          margin-right: 0.9rem; /* Reduced from 1rem */
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-details {
          h3 {
            font-size: 0.95rem; /* Reduced from 1rem */
            margin-bottom: 0.3rem; /* Reduced from 0.375rem */
            color: var(--text-color);
          }

          p {
            margin-bottom: 0;
            font-size: 0.925rem; /* Reduced from 0.95rem */
            color: var(--text-light);
          }

          a {
            color: var(--text-color);
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
              color: var(--primary-color);
            }
          }
        }
      }

      /* Availability info - More compact */
      .availability-info {
        margin-bottom: 1.25rem; /* Reduced from 1.5rem */
        padding-bottom: 1.25rem; /* Reduced from 1.5rem */
        border-bottom: 1px solid var(--border-color);

        h3 {
          font-size: 0.95rem; /* Reduced from 1rem */
          margin-bottom: 0.6rem; /* Reduced from 0.75rem */
          color: var(--text-color);
        }

        p {
          margin-bottom: 0.4rem; /* Reduced from 0.5rem */
          font-size: 0.925rem; /* Reduced from 0.95rem */
          color: var(--text-light);

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      /* Contact benefits - More compact layout */
      .contact-benefits {
        margin-bottom: 1.25rem; /* Reduced from 1.5rem */
        display: flex;
        flex-direction: column;
        gap: 0.9rem; /* Reduced from 1rem */

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.6rem; /* Reduced from 0.75rem */

          .benefit-icon {
            width: 22px; /* Reduced from 24px */
            height: 22px; /* Reduced from 24px */
            display: flex;
            color: var(--secondary-color);
          }

          .benefit-text {
            font-size: 0.925rem; /* Reduced from 0.95rem */
            color: var(--text-light);

            strong {
              color: var(--text-color);
              font-weight: 600;
            }
          }
        }
      }

      /* Contact CTA - More compact and impactful */
      .contact-cta {
        margin-top: auto;
        padding-top: 1.25rem; /* Reduced from 1.5rem */

        .cta-text {
          color: var(--primary-color);
          font-size: 0.95rem; /* Reduced from 1rem */
          font-weight: 500;
          background-color: var(--primary-light);
          padding: 0.9rem; /* Reduced from 1rem */
          border-radius: 6px; /* Reduced from 8px */
          text-align: center;
          margin-bottom: 0;
        }
      }
    }
  }
}

/* FAQ section - Optimized to use reusable component */
.faq-section {
  padding: 3.5rem 0; /* Reduced from 4rem 0 */
  background-color: var(--bg-light);

  .section-title {
    text-align: center;
    margin-bottom: 2.25rem; /* Reduced from 2.5rem */

    h2 {
      font-size: 2.15rem; /* Reduced from 2.25rem */
      margin-bottom: 0.65rem; /* Reduced from 0.75rem */
      color: var(--text-color);

      @media (max-width: 768px) {
        font-size: 1.75rem; /* Reduced from 1.85rem */
      }
    }

    p {
      color: var(--text-light);
      font-size: 1rem; /* Reduced from 1.05rem */
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

/* Success modal - More compact and impactful layout */
.modal-overlay {
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
  padding: 1rem; /* Reduced from 1.25rem */
  backdrop-filter: blur(3px);
}

.success-modal {
  background-color: white;
  border-radius: 10px; /* Reduced from 12px */
  padding: 2.25rem; /* Reduced from 2.5rem */
  text-align: center;
  max-width: 480px; /* Reduced from 500px */
  width: 100%;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.25); /* Reduced from 0 20px 40px */
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  }

  @media (max-width: 576px) {
    padding: 1.75rem 1.25rem; /* Reduced from 2rem 1.5rem */
  }

  .modal-icon {
    margin-bottom: 1.25rem; /* Reduced from 1.5rem */
    color: var(--success-color);
    animation: scaleIn 0.5s ease;

    svg {
      width: 58px; /* Reduced from 64px */
      height: 58px; /* Reduced from 64px */
    }
  }

  h2 {
    font-size: 1.75rem; /* Reduced from 1.85rem */
    margin-bottom: 0.65rem; /* Reduced from 0.75rem */
    color: var(--text-color);
  }

  p {
    color: var(--text-light);
    font-size: 1rem; /* Reduced from 1.05rem */
    margin-bottom: 1.25rem; /* Reduced from 1.5rem */
    line-height: 1.6;
  }

  /* Modal benefits - More compact layout */
  .modal-benefits {
    display: flex;
    justify-content: center;
    gap: 1.75rem; /* Reduced from 2rem */
    margin-bottom: 1.75rem; /* Reduced from 2rem */

    .modal-benefit {
      text-align: center;

      .benefit-number {
        font-size: 2.25rem; /* Reduced from 2.5rem */
        font-weight: 800;
        color: var(--primary-color);
        line-height: 1;
        margin-bottom: 0.4rem; /* Reduced from 0.5rem */
      }

      .benefit-label {
        font-size: 0.8rem; /* Reduced from 0.85rem */
        color: var(--text-light);
      }
    }
  }

  /* Modal actions - More compact layout */
  .modal-actions {
    display: flex;
    justify-content: center;
    gap: 0.9rem; /* Reduced from 1rem */

    @media (max-width: 576px) {
      flex-direction: column;
    }

    .btn {
      padding: 0.8rem 1.6rem; /* Reduced from 0.85rem 1.75rem */
      border-radius: 6px; /* Reduced from 8px */
      font-weight: 600;
      transition: all 0.3s ease;

      &.btn-primary {
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
        color: white;
        border: none;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 133, 255, 0.2); /* Reduced from 0 8px 20px */
        }
      }

      &.btn-outline {
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
        background: transparent;

        &:hover {
          background-color: rgba(0, 133, 255, 0.05);
          transform: translateY(-3px);
        }
      }
    }
  }
}

/* Animations */
@keyframes scaleIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* General utilities - More compact */
.container {
  max-width: 1180px; /* Reduced from 1200px */
  margin: 0 auto;
  padding: 0 1.25rem; /* Reduced from 1.5rem */
}

.section {
  padding: 3.5rem 0; /* Reduced from 4rem 0 */

  &.section-light {
    background-color: var(--bg-light);
  }
}

/* Improved responsiveness */
@media (max-width: 576px) {
  .page-header {
    padding: 3rem 0 1.75rem; /* Reduced from 3.5rem 0 2rem */
  }

  .contact-section,
  .faq-section {
    padding: 2.75rem 0; /* Reduced from 3rem 0 */
  }

  .container {
    padding: 0 0.9rem; /* Reduced from 1rem */
  }

  .contact-form-container,
  .contact-info-container {
    padding: 1.35rem 1.1rem; /* Reduced from 1.5rem 1.25rem */
  }
}
</style>
