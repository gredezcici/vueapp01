// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
new Vue({

  router,

  render: h => h(App)
}).$mount('#app')

