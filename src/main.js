import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './assets/js/router.js'
import './assets/iconfont/iconfont.css'
import './assets/css/base.css'
import './assets/css/animate.css'

import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint);

import axios from 'axios'
Vue.prototype.$http = axios

// 配置每个实例对象可以使用vue
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
