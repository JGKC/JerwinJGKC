import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/works',
      name: 'Works',
      component: () => import('../views/Works.vue')
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('../views/Contacts.vue')
    },
    {
      path: '/works/ecozean',
      name: 'ecozean',
      component: () => import('../views/Works/Ecozean.vue')
    },
    {
      path: '/works/thh',
      name: 'the hidden heritage',
      component: () => import('../views/Works/THH.vue')
    },
    {
      path: '/works/skyFoodie',
      name: 'sky foodie',
      component: () => import('../views/Works/SkyFoodie.vue')
    },
    {
      path: '/works/introWeiqi',
      name: 'intro to weiqi',
      component: () => import('../views/Works/IntroWeiqi.vue')
    },
    {
      path: '/works/sizgrill',
      name: 'sizgrill',
      component: () => import('../views/Works/SizGrill.vue')
    },
    {
      path: '/works/asianCompletionist',
      name: 'asian completionlist',
      component: () => import('../views/Works/AsianCompletionist.vue')
    },
    // {
    //   path: '/works/cafennie',
    //   name: 'cafennie',
    //   component: () => import('../views/Works/Cafennie.vue')
    // },
    // {
    //   path: '/works/meditime',
    //   name: 'meditime',
    //   component: () => import('../views/Works/Meditime.vue')
    // },
    {
      path: '/works/iwp',
      name: 'iwp',
      component: () => import('../views/Works/IWP.vue')
    },
    {
      path: '/works/nutrigrade',
      name: 'nutrigrade',
      component: () => import('../views/Works/NutriGrade.vue')
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component:() => import('../views/NotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
