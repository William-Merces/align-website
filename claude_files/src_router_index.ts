import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/how-it-works',
      name: 'howItWorks',
      component: () => import('../views/HowItWorksView.vue')
    },
    {
      path: '/why-align',
      name: 'whyAlign',
      component: () => import('../views/WhyAlignView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    // Add redirects from old Portuguese routes to new English routes
    {
      path: '/servicos',
      redirect: '/services'
    },
    {
      path: '/como-funciona',
      redirect: '/how-it-works'
    },
    {
      path: '/por-que-align',
      redirect: '/why-align'
    },
    {
      path: '/contato',
      redirect: '/contact'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
