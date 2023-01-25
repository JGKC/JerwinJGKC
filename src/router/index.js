import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Home | JerwinJGKC' },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'About | JerwinJGKC' },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/works',
      name: 'works',
      meta: { title: 'Works | JerwinJGKC' },
      component: () => import('../views/Works.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      meta: { title: 'Contacts | JerwinJGKC' },
      component: () => import('../views/Contacts.vue')
    },
    {
      path: '/works/ecozean',
      name: 'ecozean',
      meta: { title: 'Ecozean | JerwinJGKC' },
      component: () => import('../views/Works/Ecozean.vue')
    },
    {
      path: '/works/thh',
      name: 'the hidden heritage',
      meta: { title: 'The Hidden Heritage | JerwinJGKC' },
      component: () => import('../views/Works/THH.vue')
    },
    {
      path: '/works/skyFoodie',
      name: 'sky foodie',
      meta: { title: 'Sky Foodie | JerwinJGKC' },
      component: () => import('../views/Works/SkyFoodie.vue')
    },
    {
      path: '/works/introWeiqi',
      name: 'intro to weiqi',
      meta: { title: 'Intro To Weiqi | JerwinJGKC' },
      component: () => import('../views/Works/IntroWeiqi.vue')
    },
    {
      path: '/works/sizgrill',
      name: 'sizgrill',
      meta: { title: 'SizGrill | JerwinJGKC' },
      component: () => import('../views/Works/SizGrill.vue')
    },
    {
      path: '/works/asianCompletionist',
      name: 'asian completionlist',
      meta: { title: 'Asian Completionlist | JerwinJGKC' },
      component: () => import('../views/Works/AsianCompletionist.vue')
    },
    {
      path: '/works/cafennie',
      name: 'cafennie',
      meta: { title: 'Cafennie | JerwinJGKC' },
      component: () => import('../views/Works/Cafennie.vue')
    },
    {
      path: '/works/meditime',
      name: 'meditime',
      meta: { title: 'Meditime | JerwinJGKC' },
      component: () => import('../views/Works/Meditime.vue')
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      meta: { title: 'Not Found | JerwinJGKC' },
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
  beforeEach(to, from, next){
    Vue.nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
  });
  }
})

export default router
