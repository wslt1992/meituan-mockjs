
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
import user from './user'
import shoppingCart from './shopping-cart;'
import common from './common'

const store = new Vuex.Store({
    modules: {
        user,
        shoppingCart,
        common
    }
  })
  export default store;