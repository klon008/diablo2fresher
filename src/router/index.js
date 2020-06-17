import Vue from 'vue'
import VueRouter from 'vue-router'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
