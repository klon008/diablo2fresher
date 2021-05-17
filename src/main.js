import Vue from 'vue'
import App from './App.vue'
import "normalize.css"
import router from './router'
import BackToTop from 'vue-backtotop'

Vue.config.productionTip = false
Vue.use(BackToTop)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
