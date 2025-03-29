<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const route = useRoute()

// Monitor route changes to update page title
onMounted(() => {
  updatePageTitle(route.name as string)
})

// Watch for route changes to update title
watch(() => route.name, (newName) => {
  updatePageTitle(newName as string)
})

// Function to update page title based on route
const updatePageTitle = (routeName: string) => {
  const titles: Record<string, string> = {
    home: 'Align | Outsource with Intelligence',
    services: 'Services | Align',
    howItWorks: 'How It Works | Align',
    whyAlign: 'Why Align | Align',
    contact: 'Contact | Align'
  }

  document.title = titles[routeName] || 'Align | Outsource with Intelligence'
}
</script>

<style lang="scss">
/* Global styles */
:root {
  --primary-color: #0085FF;
  --primary-dark: #0066CC;
  --secondary-color: #00C875;
  --text-color: #333333;
  --text-light: #666666;
  --bg-color: #FFFFFF;
  --bg-light: #F8F9FA;
  --border-color: #E9ECEF;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  font-size: 16px;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  margin-top: 80px; /* Height of fixed header */
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Global button classes */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  &.btn-primary {
    background-color: var(--primary-color);
    color: white;

    &:hover {
      background-color: var(--primary-dark);
    }
  }

  &.btn-secondary {
    background-color: var(--secondary-color);
    color: white;

    &:hover {
      filter: brightness(0.9);
    }
  }

  &.btn-outline {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);

    &:hover {
      background-color: var(--primary-color);
      color: white;
    }
  }
}

/* Route transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive styles */
h1 {
  font-size: 2.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
}

h2 {
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
}

h3 {
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
}

h4 {
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

/* Utility classes */
.text-center {
  text-align: center;
}

.mb-1 {
  margin-bottom: 0.5rem;
}

.mb-2 {
  margin-bottom: 1rem;
}

.mb-3 {
  margin-bottom: 1.5rem;
}

.mb-4 {
  margin-bottom: 2rem;
}

.mb-5 {
  margin-bottom: 2.5rem;
}

.mt-1 {
  margin-top: 0.5rem;
}

.mt-2 {
  margin-top: 1rem;
}

.mt-3 {
  margin-top: 1.5rem;
}

.mt-4 {
  margin-top: 2rem;
}

.mt-5 {
  margin-top: 2.5rem;
}

.py-1 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-2 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.py-3 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.py-4 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.py-5 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.px-1 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-2 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-3 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.px-4 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.px-5 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

/* Sections */
.section {
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }

  &.section-light {
    background-color: var(--bg-light);
  }
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-light);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
