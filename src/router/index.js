import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'

Vue.use(Mint)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
