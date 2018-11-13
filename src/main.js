// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import url from './global/url'
import './style/style.css'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false

import './mockjs/app-mock';

Vue.prototype.$url = url;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
