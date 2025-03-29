<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <div class="logo-text">
              <span class="logo-primary">A</span><span class="logo-secondary">lign</span>
            </div>
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <nav class="desktop-menu">
          <ul class="nav-links">
            <li v-for="(item, index) in menuItems" :key="index">
              <router-link :to="item.path" class="nav-link">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Primary and Secondary CTAs -->
        <div class="header-actions">
          <router-link to="/contact" class="btn btn-primary cta-primary">
            Request a Proposal
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <button class="mobile-menu-button" @click="toggleMobileMenu" aria-label="Toggle Menu">
          <div class="hamburger" :class="{ active: mobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
        <ul class="mobile-nav-links">
          <li v-for="(item, index) in menuItems" :key="index">
            <router-link :to="item.path" class="mobile-nav-link" @click="closeMobileMenu">
              {{ item.label }}
            </router-link>
          </li>
          <li class="mobile-cta-container">
            <router-link to="/contact" class="btn btn-primary mobile-cta-button" @click="closeMobileMenu">
              Request a Proposal
              <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
// Componente: AppHeader
import { ref } from 'vue'

// Unified menu items array for both desktop and mobile menus
const menuItems = [
  { label: 'Services', path: '/services' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Why Align', path: '/why-align' },
  { label: 'Contact', path: '/contact' }
]

// Mobile menu state
const mobileMenuOpen = ref(false)

// Mobile menu toggle function
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
}

// Close mobile menu function
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.classList.remove('no-scroll')
}
</script>

<style lang="scss" scoped>
/* Header component styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  z-index: 100;
  height: 70px; /* Reduced height from 80px */

  .container {
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  /* Logo styles */
  .logo {
    .logo-text {
      font-size: 1.7rem; /* Slightly reduced from 1.8rem */
      font-weight: 700;
      letter-spacing: -0.5px;

      .logo-primary {
        color: #0085FF;
      }

      .logo-secondary {
        color: #0066CC;
      }
    }
  }

  /* Desktop menu styles */
  .desktop-menu {
    display: none;

    @media (min-width: 992px) { /* Changed from 768px for better visibility */
      display: block;
    }

    .nav-links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin: 0 1rem;
      }

      .nav-link {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        position: relative;
        padding: 0.5rem 0;
        font-size: 0.95rem; /* Slightly smaller for better fit */
        transition: color 0.2s ease;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #0085FF;
          transition: width 0.2s ease;
        }

        &:hover {
          color: #0085FF;
        }

        &:hover::after,
        &.router-link-active::after {
          width: 100%;
        }
      }
    }
  }

  /* Header actions (CTAs) */
  .header-actions {
    display: none;

    @media (min-width: 992px) { /* Changed from 768px */
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .btn {
      border-radius: 6px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .cta-primary {
      background-color: #0085FF;
      color: white;
      padding: 0.65rem 1.25rem; /* Slightly smaller padding */
      box-shadow: 0 4px 10px rgba(0, 133, 255, 0.2);

      .btn-icon {
        transition: transform 0.2s ease;
      }

      &:hover {
        background-color: #0066CC;
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 133, 255, 0.3);

        .btn-icon {
          transform: translateX(3px);
        }
      }
    }
  }

  /* Mobile menu button */
  .mobile-menu-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    margin-left: auto;

    @media (min-width: 992px) { /* Changed from 768px */
      display: none;
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 24px;
      height: 18px;
      transition: all 0.3s ease;

      span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: #333;
        transition: all 0.3s ease;
      }

      &.active {
        span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        span:nth-child(2) {
          opacity: 0;
        }

        span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    }
  }

  /* Mobile menu */
  .mobile-menu {
    position: absolute;
    top: 70px; /* Match header height */
    left: 0;
    width: 100%;
    max-height: 0;
    background-color: white;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.1);
    z-index: 99;

    &.active {
      max-height: 400px; /* Enough for all menu items */
      border-top: 1px solid #f0f0f0;
    }

    .mobile-nav-links {
      list-style: none;
      margin: 0;
      padding: 1.25rem 1.5rem;

      li {
        margin: 0.75rem 0;
      }

      .mobile-nav-link {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        font-size: 1.1rem;
        display: block;
        padding: 0.5rem 0;
        transition: all 0.2s ease;

        &:hover {
          color: #0085FF;
          transform: translateX(3px);
        }
      }

      .mobile-cta-container {
        margin-top: 1.25rem;
        padding-top: 1.25rem;
        border-top: 1px solid #f0f0f0;
      }

      .mobile-cta-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        background-color: #0085FF;
        color: white;
        padding: 0.75rem 1.25rem;
        border-radius: 6px;
        font-weight: 600;
        box-shadow: 0 4px 10px rgba(0, 133, 255, 0.2);

        .btn-icon {
          transition: transform 0.2s ease;
        }

        &:hover {
          background-color: #0066CC;
          transform: translateY(-2px);

          .btn-icon {
            transform: translateX(3px);
          }
        }
      }
    }

    @media (min-width: 992px) { /* Changed from 768px */
      display: none !important;
    }
  }
}

/* Helper class for body when mobile menu is open */
.no-scroll {
  overflow: hidden;
}
</style>
