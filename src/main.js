import Vue from 'vue'
import App from './App.vue'
import "normalize.css"
import router from './router'
import VScrollToTop from 'v-scroll-to-top'




Vue.config.productionTip = false
Vue.use(VScrollToTop)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
