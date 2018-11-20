// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import url from './global/url'
import './style/style.css'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false
/**自动注册components中的组件,为index.js文件 */
import './components/index.js'

/**模拟数据 */
import './mockjs/app-mock';
import './mockjs/my-mock'; //我的页面数据

/**
 * 可以在子vue中通过 this.$url调用
 */
// url.registerInVue(Vue);
Vue.use(url);

/**https访问数据,为index.js文件
 * 可以在子vue中通过 this.$url调用
 */
import https from  './https/index.js'
Vue.use(https)
// https.registerInVue(Vue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
