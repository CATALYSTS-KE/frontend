import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JoinUs from '../views/JoinUsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
      // component: () => import('../views/HomeView.vue')
    },
    {
      path: '/who-we-are',
      name: 'who-we-are',
      component: () => import('../views/WhoWeAreView.vue')
    },
    {
      path: '/what-we-do',
      name: 'what-we-do',
      component: () => import('../views/WhatWeDoView.vue')
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import('../views/UpdatesView.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/ResourcesView.vue')
    },
    {
      path: '/join-us',
      name: 'join-us',
      component: () => import('../views/JoinUsView.vue')
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUsView.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPage.vue')
    },
    {
      path: '/test',
      name: 'test',
      // component: () => import('../views/ContactUsView.vue')
      JoinUs
    }
  ]
  // scrollBehavior(to, from, savedPosition) {
  //   // Always scroll to top
  //   return { top: 0 }
  // }
})

// Add a navigation guard to handle smooth scrolling
// navigation guard that executes before each route transition.
router.beforeEach((to, from, next) => {
  next()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

export default router
