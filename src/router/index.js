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
      path: '/test',
      name: 'test',
      component: () => import('../views/ContactUsView.vue')
    }
  ]
})

export default router
