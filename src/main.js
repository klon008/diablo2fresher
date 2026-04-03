import { createApp } from 'vue'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import './floating-vue-overrides.css'
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import './assets/styles/common.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(FloatingVue, {
  strategy: 'fixed',
  overflowPadding: 12,
  preventOverflow: false,
  disposeTimeout: 0,
})
app.mount('#app')
