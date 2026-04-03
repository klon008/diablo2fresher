import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'

const routes = [
  {
    path: '/uniq_items',
    name: 'uniq_items',
    component: () => import('../views/UniqItems.vue'),
  },
  {
    path: '/rune_words',
    name: 'rune_words',
    component: () => import('../views/RuneWords.vue'),
  },
  {
    path: '/runes',
    name: 'runes',
    component: () => import('../views/Runes.vue'),
  },
  {
    path: '/sets',
    name: 'sets',
    component: () => import('../views/SetItems.vue'),
  },
  {
    path: '/crafting',
    name: 'crafting',
    component: () => import('../views/Crafting.vue'),
  },
  {
    path: '/bases',
    name: 'bases',
    component: () => import('../views/Bases.vue'),
  },
  {
    path: '/cube',
    name: 'cube',
    component: () => import('../views/Cube.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    const el = document.getElementById('app')
    if (el) el.scrollIntoView()
  },
})

router.beforeResolve((to) => {
  if (to.name) {
    NProgress.start()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
