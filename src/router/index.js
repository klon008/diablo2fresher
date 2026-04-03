import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Diablo 2 Resurrected — База данных',
      description: 'Главная страница — уникальные предметы, сеты, рунные слова, руны, рецепты куба и крафта',
    },
  },
  {
    path: '/uniq_items',
    name: 'uniq_items',
    component: () => import('../views/UniqItems.vue'),
    meta: {
      title: 'Уникальные предметы — Diablo 2 Resurrected',
      description: 'База уникальных предметов Diablo 2 Resurrected. Фильтры по типу, классу. Поиск по названию.',
    },
  },
  {
    path: '/rune_words',
    name: 'rune_words',
    component: () => import('../views/RuneWords.vue'),
    meta: {
      title: 'Рунные слова — Diablo 2 Resurrected',
      description: 'Все рунные слова (runewords) в Diablo 2 Resurrected. Рецепты, требования, бонусы.',
    },
  },
  {
    path: '/runes',
    name: 'runes',
    component: () => import('../views/Runes.vue'),
    meta: {
      title: 'Руны — Diablo 2 Resurrected',
      description: 'Список всех рун в Diablo 2 Resurrected. Характеристики, где выпадают, комбинации.',
    },
  },
  {
    path: '/sets',
    name: 'sets',
    component: () => import('../views/SetItems.vue'),
    meta: {
      title: 'Сетовые предметы — Diablo 2 Resurrected',
      description: 'База сетовых предметов Diablo 2 Resurrected. Полные комплекты и бонусы.',
    },
  },
  {
    path: '/crafting',
    name: 'crafting',
    component: () => import('../views/Crafting.vue'),
    meta: {
      title: 'Крафтинг — Diablo 2 Resurrected',
      description: 'Рецепты крафтинга в Diablo 2 Resurrected. Амулеты, кольца, перчатки, ботинки, пояс, оружие.',
    },
  },
  {
    path: '/bases',
    name: 'bases',
    component: () => import('../views/Bases.vue'),
    meta: {
      title: 'Базовые предметы — Diablo 2 Resurrected',
      description: 'База базовых (обычных) предметов Diablo 2 Resurrected. Оружие, броня, щиты.',
    },
  },
  {
    path: '/cube',
    name: 'cube',
    component: () => import('../views/Cube.vue'),
    meta: {
      title: 'Рецепты куба — Diablo 2 Resurrected',
      description: 'Все рецептыstash куба в Diablo 2 Resurrected. Трансмутации, убер-ключи, предметы.',
    },
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

router.afterEach((to) => {
  NProgress.done()
  
  // Обновление title и meta description
  if (to.meta?.title) {
    document.title = to.meta.title
  }
  if (to.meta?.description) {
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', to.meta.description)
    }
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) {
      ogDesc.setAttribute('content', to.meta.description)
    }
  }
  if (to.meta?.title) {
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', to.meta.title)
    }
  }
})

export default router
