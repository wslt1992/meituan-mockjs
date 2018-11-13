import Vue from 'vue'
import Router from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'
import MainPage from '@/views/MainPage'
import My from '@/views/my'
import Order from '@/views/order'
import ClasstifyAll from '@/views/ClasstifyAll'
import Search from '@/views/search'
import url from '../global/url'
import Login from '@/views/login'
Vue.use(Mint)
Vue.use(Router)

let nav = url.navigator;
export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      redirect:'/mainpage/index'
    },
    /**
     * mainpage页，主页
     */
    {
      path: nav.mainPage.selfpath,
      name: 'MainPage',
      component: MainPage,
      children:[
        {
          path: nav.mainPage.children.indexPath,
          name: 'index',
          component: Index
        },
        {
          path: nav.mainPage.children.myPath,
          name: 'my',
          component: My
        },
        {
          path: nav.mainPage.children.orderPath,
          name: 'order',
          component: Order
        }
      ]
    },
    /**
     * classtifyAll页，全部分类页
     */
    {
      path: nav.classtifyAll,
      name: 'classtifyAll',
      component: ClasstifyAll,
    },
    {
      path: nav.searchPath,
      name: 'Search',
      component: Search,
    },
    /**
     * my页子页面
     */
    {
      path:nav.loginPath,
      name:"login",
      component:Login,
    }
    
  ]
})
