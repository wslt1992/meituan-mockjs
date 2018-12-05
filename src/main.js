// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import url from './global/url'
import global from './global/global.js'
import './style/style.css'
import './style/theme-style.scss';
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false
//引入lodash
import _ from 'lodash';
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

// 注册全局变量
Vue.use(global);
/**https访问数据,为index.js文件
 * 可以在子vue中通过 this.$url调用
 */
import https from  './https/index.js'
Vue.use(https)
// https.registerInVue(Vue);

/**
 * 引入element-mint饿了么框架
 * 
 */
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
/**
 * 引入element饿了么框架
 * 
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* eslint-disable no-new */
import store from './store/index'

// require('./h5+/h5+.js');
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

