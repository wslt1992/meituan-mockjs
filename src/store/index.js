
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
import user from './user'
import shoppingCart from './shopping-cart;'

const store = new Vuex.Store({
    modules: {
        user,
        shoppingCart
    }
  })
  export default store;