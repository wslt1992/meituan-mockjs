
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
import user from './user'

const store = new Vuex.Store({
    modules: {
        user
    }
  })
  export default store;