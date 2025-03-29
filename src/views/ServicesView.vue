<template>
  <div class="services-page">
    <!-- Page Header - Título mais impactante -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1>Elevate Your Business with Specialized Services</h1>
          <p>We offer a wide range of expertly-crafted solutions designed to accelerate growth, optimize operations, and deliver exceptional value.</p>
        </div>
      </div>
    </section>

    <!-- Services filter -->
    <section class="services-filter">
      <div class="container">
        <div class="filter-tabs">
          <button
            class="filter-tab"
            :class="{ active: activeFilter === 'all' }"
            @click="setFilter('all')"
          >
            All Services
          </button>
          <button
            v-for="category in categories"
            :key="category.id"
            class="filter-tab"
            :class="{ active: activeFilter === category.id }"
            @click="setFilter(category.id)"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Main services (visible when filter is "all") -->
    <section v-if="activeFilter === 'all'" class="services-list section">
      <div class="container">
        <div class="services-grid main-services-grid">
          <div
            v-for="service in mainServices"
            :key="service.id"
            class="service-card main-service-card"
            :id="service.slug"
          >
            <div class="service-icon" :class="`service-icon-${service.category}`">
              <component :is="service.icon" />
            </div>
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="(feature, index) in service.features" :key="index">
                {{ feature }}
              </li>
            </ul>
            <button class="btn btn-outline" @click="setFilter(service.category)">
              Learn More <span class="arrow-icon">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Sub-services (visible when a specific filter is active) -->
    <section v-else class="services-list section">
      <div class="container">
        <div class="section-header">
          <h2>{{ getCategoryName(activeFilter) }}</h2>
          <p>Explore all our specialized {{ getCategoryName(activeFilter).toLowerCase() }} services</p>
        </div>

        <div class="services-grid sub-services-grid">
          <!-- Display services filtered by selected category -->
          <div
            v-for="service in filteredSubServices"
            :key="service.id"
            class="service-card sub-service-card"
            :id="service.slug"
            :class="{ 'highlighted': service.highlighted }"
          >
            <div class="service-icon" :class="`service-icon-${activeFilter}`">
              <component :is="service.icon" />
            </div>
            <h3>{{ service.title }}</h3>
            <p class="service-short-desc">{{ service.shortDescription }}</p>
            <button class="service-link" @click="showDetails(service)">
              Learn More <span class="arrow-icon">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Details Modal -->
    <div class="service-modal" v-if="selectedService" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <div class="modal-header">
            <div class="modal-service-icon" :class="`service-icon-${selectedService.category}`">
              <component :is="selectedService.icon" />
            </div>
            <div class="modal-title">
              <h2>{{ selectedService.title }}</h2>
              <span class="category-tag">{{ getCategoryName(selectedService.category) }}</span>
            </div>
          </div>

          <p class="modal-description">{{ selectedService.description }}</p>

          <div class="modal-features">
            <h3>Key Features</h3>
            <ul>
              <li v-for="(feature, index) in selectedService.features" :key="index">
                {{ feature }}
              </li>
            </ul>
          </div>

          <div class="modal-benefits" v-if="selectedService.benefits">
            <h3>Benefits</h3>
            <p>{{ selectedService.benefits }}</p>
          </div>

          <div class="modal-process" v-if="selectedService.process">
            <h3>How It Works</h3>
            <ol>
              <li v-for="(step, index) in selectedService.process" :key="index">
                {{ step }}
              </li>
            </ol>
          </div>

          <div class="modal-cta">
            <router-link to="/contact" class="btn btn-primary">
              Request a Proposal
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section - Texto melhorado e mais positivo -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Customize Your Perfect Solution</h2>
          <p>Let's discuss your unique requirements and design a tailored service package that maximizes your business potential.</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="btn btn-primary">Talk to an Expert</router-link>
            <a href="tel:+15551234567" class="btn btn-outline">Call Now: (555) 123-4567</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import { categories, mainServices, subServices, type Service } from '@/data/servicesData';

// Active filter state
const activeFilter = ref('all');

// Selected service for modal
const selectedService = ref<Service | null>(null);

// Set filter function
const setFilter = (filter: string) => {
  activeFilter.value = filter;

  // Scroll to the services list
  setTimeout(() => {
    const servicesList = document.querySelector('.services-list') as HTMLElement;
    if (servicesList) {
      window.scrollTo({
        top: servicesList.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  }, 100);
};

// Get category name
const getCategoryName = (categoryId: string) => {
  const category = categories.find(c => c.id === categoryId);
  return category ? category.name : '';
};

// Filtered sub-services based on selected category
const filteredSubServices = computed(() => {
  const categoryServices = subServices.filter(service => service.category === activeFilter.value);

  // If no sub-services for this category, show the main service
  if (categoryServices.length === 0) {
    return mainServices.filter(service => service.category === activeFilter.value);
  }

  return categoryServices;
});

// Modal functions
const showDetails = (service: Service) => {
  selectedService.value = service;
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  selectedService.value = null;
  document.body.classList.remove('modal-open');
};
</script>
<style lang="scss" scoped>
// Page Header - Correção do espaço excessivo
.page-header {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9f5ff 100%);
  padding: 3rem 0 3.5rem; // Reduzido de 7rem 0 5rem
  margin-top: 0; // Removido margin-top de 80px
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
      font-size: 3.25rem; // Ligeiramente reduzido
      font-weight: 800;
      margin-bottom: 1.25rem; // Reduzido
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
      font-size: 1.2rem; // Reduzido
      line-height: 1.6;

      @media (max-width: 768px) {
        font-size: 1.05rem;
      }
    }
  }
}

// Services Filter
.services-filter {
  background-color: white;
  padding: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 80px; // Header height
  z-index: 100;

  .filter-tabs {
    display: flex;
    overflow-x: auto;
    padding: 1rem 0;
    scroll-padding: 1rem;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary-color);
      border-radius: 10px;
      opacity: 0.7;
    }

    .filter-tab {
      white-space: nowrap;
      padding: 0.75rem 1.5rem; // Reduzido
      margin-right: 0.75rem;
      border: none;
      background: none;
      color: var(--text-light);
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        color: var(--primary-color);
        background-color: rgba(0, 133, 255, 0.05);
        transform: translateY(-2px);
      }

      &.active {
        color: var(--primary-color);
        background-color: rgba(0, 133, 255, 0.1);
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 133, 255, 0.1);
      }

      &:first-child {
        margin-left: 0.5rem;
      }

      &:last-child {
        margin-right: 0.5rem;
      }
    }
  }
}

// Espaçamento da seção reduzido
.section {
  padding: 3.5rem 0; // Reduzido de 5rem
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem; // Reduzido de 3.5rem

  h2 {
    font-size: 2.5rem; // Reduzido de 2.75rem
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-color);
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-color) 0%, #00c4ff 100%);
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: var(--text-light);
    font-size: 1.15rem; // Reduzido de 1.25rem
    max-width: 800px;
    margin: 1.5rem auto 0;

    @media (max-width: 768px) {
      font-size: 1.05rem;
    }
  }
}

// Main Services Grid - Mais compacta
.services-grid {
  display: grid;
  gap: 1.5rem; // Reduzido de 2rem

  &.main-services-grid {
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &.sub-services-grid {
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
}

// Main Service Card - Mais compacto, sem o destaque "Popular"
.main-service-card {
  background-color: white;
  border-radius: 12px;
  padding: 2rem; // Reduzido de 2.5rem
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color) 0%, #00c4ff 100%);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    &::before {
      transform: translateY(0);
    }

    .service-icon {
      transform: scale(1.1);
      background-color: var(--primary-color);
      color: white;
    }

    .btn .arrow-icon {
      transform: translateX(5px);
    }
  }

  /* Destaque "Popular" removido */
  /* A classe featured ainda pode ser usada para estilização alternativa se necessário */
  &.featured {
    border: 1px solid rgba(0, 133, 255, 0.2);
    box-shadow: 0 15px 35px rgba(0, 133, 255, 0.1);
  }

  .service-icon {
    width: 72px; // Reduzido de 80px
    height: 72px; // Reduzido de 80px
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem; // Reduzido de 2rem
    transition: all 0.4s ease;
    background-color: rgba(0, 133, 255, 0.1);
    color: var(--primary-color);

    &.service-icon-development {
      background-color: rgba(0, 133, 255, 0.1);
      color: var(--primary-color);
    }

    &.service-icon-support {
      background-color: rgba(0, 200, 117, 0.1);
      color: #00c875;
    }

    &.service-icon-management {
      background-color: rgba(255, 153, 0, 0.1);
      color: #ff9900;
    }

    &.service-icon-marketing {
      background-color: rgba(255, 71, 87, 0.1);
      color: #ff4757;
    }

    &.service-icon-design {
      background-color: rgba(156, 39, 176, 0.1);
      color: #9c27b0;
    }

    &.service-icon-accounting {
      background-color: rgba(84, 110, 122, 0.1);
      color: #546e7a;
    }
  }

  h2 {
    font-size: 1.65rem; // Reduzido de 1.75rem
    font-weight: 700;
    margin-bottom: 1rem; // Reduzido de 1.25rem
    color: var(--text-color);
  }

  p {
    color: var(--text-light);
    margin-bottom: 1.5rem; // Reduzido de 1.75rem
    line-height: 1.6; // Ligeiramente reduzido de 1.7
    flex-grow: 1;
    font-size: 0.95rem; // Adicionado para reduzir tamanho do texto
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0; // Reduzido de 2rem

    li {
      position: relative;
      padding-left: 1.5rem; // Reduzido de 1.75rem
      margin-bottom: 0.6rem; // Reduzido de 0.75rem
      color: var(--text-light);
      font-size: 0.9rem; // Reduzido de 0.95rem

      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--primary-color);
        font-weight: bold;
      }
    }
  }

  .btn {
    margin-top: auto;
    padding: 0.75rem 1.5rem; // Reduzido de 0.85rem 1.75rem
    font-weight: 600;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    font-size: 0.95rem; // Reduzido de 1rem

    &.btn-outline {
      background-color: transparent;
      border: 2px solid var(--primary-color);
      color: var(--primary-color);

      &:hover {
        background-color: rgba(0, 133, 255, 0.1);
      }

      .arrow-icon {
        margin-left: 0.5rem;
        transition: transform 0.3s ease;
      }
    }
  }
}

// Sub-service Card - Mais compacto
.sub-service-card {
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem; // Reduzido de 1.75rem
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

    .service-icon {
      transform: scale(1.1);
    }

    .service-link .arrow-icon {
      transform: translateX(5px);
    }
  }

  &.highlighted {
    border: 1px solid rgba(0, 133, 255, 0.15);
    box-shadow: 0 10px 25px rgba(0, 133, 255, 0.08);

    &::after {
      content: 'Popular'; // Mantido apenas para os cards menores
      position: absolute;
      top: 1rem;
      right: -2rem;
      background: linear-gradient(90deg, #00c875 0%, #00a65a 100%);
      color: white;
      padding: 0.35rem 2.5rem; // Reduzido
      font-size: 0.8rem; // Reduzido
      font-weight: 600;
      transform: rotate(45deg);
      z-index: 1;
    }
  }

  .service-icon {
    width: 56px; // Reduzido de 60px
    height: 56px; // Reduzido de 60px
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem; // Reduzido de 1.5rem
    transition: all 0.3s ease;
    background-color: rgba(0, 133, 255, 0.1);
    color: var(--primary-color);

    &.service-icon-development {
      background-color: rgba(0, 133, 255, 0.1);
      color: var(--primary-color);
    }

    &.service-icon-support {
      background-color: rgba(0, 200, 117, 0.1);
      color: #00c875;
    }

    &.service-icon-management {
      background-color: rgba(255, 153, 0, 0.1);
      color: #ff9900;
    }

    &.service-icon-marketing {
      background-color: rgba(255, 71, 87, 0.1);
      color: #ff4757;
    }

    &.service-icon-design {
      background-color: rgba(156, 39, 176, 0.1);
      color: #9c27b0;
    }

    &.service-icon-accounting {
      background-color: rgba(84, 110, 122, 0.1);
      color: #546e7a;
    }
  }

  h3 {
    font-size: 1.15rem; // Reduzido de 1.25rem
    font-weight: 700;
    margin-bottom: 0.85rem; // Reduzido de 1rem
    color: var(--text-color);
    line-height: 1.4;
  }

  .service-short-desc {
    color: var(--text-light);
    margin-bottom: 1.25rem; // Reduzido de 1.5rem
    line-height: 1.6;
    font-size: 0.9rem; // Reduzido de 0.95rem
    flex-grow: 1;
  }

  .service-link {
    display: inline-flex;
    align-items: center;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.9rem; // Reduzido de 0.95rem
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    margin-top: auto;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      color: var(--primary-dark);
    }

    .arrow-icon {
      margin-left: 0.5rem;
      transition: transform 0.3s ease;
    }
  }
}

// Service Modal - Mais compacto
.service-modal {
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
  padding: 1.5rem;
  backdrop-filter: blur(5px);

  .modal-content {
    background-color: white;
    border-radius: 12px;
    width: 100%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary-color);
      border-radius: 10px;
      opacity: 0.7;
    }

    .close-btn {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 10;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: var(--text-light);
      transition: all 0.3s ease;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: var(--text-color);
        transform: rotate(90deg);
      }
    }

    .modal-body {
      padding: 2.5rem; // Reduzido de 3rem

      @media (max-width: 576px) {
        padding: 1.75rem; // Reduzido de 2rem
      }

      .modal-header {
        display: flex;
        align-items: center;
        margin-bottom: 1.75rem; // Reduzido de 2rem
        gap: 1.5rem;

        @media (max-width: 576px) {
          flex-direction: column;
          align-items: flex-start;
        }

        .modal-service-icon {
          width: 64px; // Reduzido de 70px
          height: 64px; // Reduzido de 70px
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 133, 255, 0.1);
          color: var(--primary-color);
        }

        .modal-title {
          h2 {
            font-size: 1.85rem; // Reduzido de 2rem
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: var(--text-color);
          }

          .category-tag {
            display: inline-block;
            padding: 0.4rem 0.9rem; // Reduzido de 0.5rem 1rem
            background-color: rgba(0, 133, 255, 0.1);
            color: var(--primary-color);
            border-radius: 20px;
            font-size: 0.825rem; // Reduzido de 0.875rem
            font-weight: 600;
          }
        }
      }

      .modal-description {
        font-size: 1.05rem; // Reduzido de 1.1rem
        color: var(--text-light);
        margin-bottom: 2rem; // Reduzido de 2.5rem
        line-height: 1.7;
      }

      .modal-features, .modal-benefits, .modal-process {
        margin-bottom: 2rem; // Reduzido de 2.5rem

        h3 {
          font-size: 1.4rem; // Reduzido de 1.5rem
          font-weight: 700;
          margin-bottom: 1.1rem; // Reduzido de 1.25rem
          color: var(--text-color);
          position: relative;
          padding-left: 1.5rem;

          &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 5px;
            height: 25px;
            background: linear-gradient(to bottom, var(--primary-color), #00c4ff);
            border-radius: 3px;
          }
        }

        ul, ol {
          padding-left: 1.5rem;
          margin-bottom: 0;

          li {
            margin-bottom: 0.65rem; // Reduzido de 0.75rem
            color: var(--text-light);
            line-height: 1.6;
            font-size: 0.95rem; // Adicionado para texto mais compacto
          }
        }

        p {
          color: var(--text-light);
          line-height: 1.7;
          font-size: 0.95rem; // Adicionado para texto mais compacto
        }
      }

      .modal-cta {
        text-align: center;
        margin-top: 2.5rem; // Reduzido de 3rem

        .btn-primary {
          background: linear-gradient(90deg, var(--primary-color) 0%, #00c4ff 100%);
          color: white;
          padding: 0.9rem 2.25rem; // Reduzido de 1rem 2.5rem
          font-size: 1.1rem; // Reduzido de 1.125rem
          font-weight: 600;
          border-radius: 8px;
          border: none;
          transition: all 0.3s ease;
          display: inline-block;

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 133, 255, 0.2);
          }
        }
      }
    }
  }
}

// CTA Section - Mais compacta
.cta-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 4rem 0; // Reduzido de 5rem

  .cta-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;

    h2 {
      font-size: 2.35rem; // Reduzido de 2.5rem
      font-weight: 800;
      margin-bottom: 1.25rem; // Reduzido de 1.5rem
      color: white;

      @media (max-width: 768px) {
        font-size: 1.9rem; // Reduzido de 2rem
      }
    }

    p {
      font-size: 1.15rem; // Reduzido de 1.25rem
      margin-bottom: 2rem; // Reduzido de 2.5rem
      opacity: 0.9;

      @media (max-width: 768px) {
        font-size: 1.05rem; // Reduzido de 1.1rem
      }
    }

    .cta-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.25rem; // Reduzido de 1.5rem

      @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        padding: 0.9rem 1.75rem; // Reduzido de 1rem 2rem
        font-size: 1.1rem; // Reduzido de 1.125rem
        font-weight: 600;
        border-radius: 8px;
        transition: all 0.3s ease;

        &.btn-primary {
          background-color: white;
          color: var(--primary-color);
          border: none;

          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          }
        }

        &.btn-outline {
          background-color: transparent;
          border: 2px solid white;
          color: white;

          &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-5px);
          }
        }
      }
    }
  }
}

.modal-open {
  overflow: hidden;
}

// Container
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
</style>
