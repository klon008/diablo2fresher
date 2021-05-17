import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/uniq_items',
    name: 'uniq_items',
    component: () => import(/* webpackChunkName: "about" */ '../views/UniqItems.vue')
  },
  {
    path: '/rune_words',
    name: 'rune_words',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RuneWords.vue')
  },
  {
    path: '/runes',
    name: 'runes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Runes.vue')
  },
  {
    path: '/sets',
    name: 'sets',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SetItems.vue')
  },
  {
    path: '/crafting',
    name: 'crafting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Crafting.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: 'diablo2fresher', //Удалить base если сайт будет на хостинге
  routes
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      Nprogress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  Nprogress.done()
})

export default router
