import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'
import MainPage from '@/views/MainPage'
import My from '@/views/my'
import Order from '@/views/order'
import discovery from '@/views/discovery'
import ClasstifyAll from '@/views/ClasstifyAll'
import Search from '@/views/search'
import SearchResult from '@/views/search-result'
import url from '../global/url'
import map from '@/views/map'
import Login from '@/views/login' //登录
import Setting from '@/views/setting' //个人设置
import MyCollection from '@/views/my-collection' //我的收藏
import LoginLerifyCode from '@/views/login-verify-code' //输入验证码
import RecentView from '@/views/recent-view' //最近浏览
import DiscountPrice from '@/views/discount-price' //狠优惠

Vue.use(Router)

let nav = url.navigator;
import guard from './guard.js'
export default new Router({
  mode:'history',
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
      name: 'mainpage',
      component: MainPage,
      children:[
        {
          path: nav.mainPage.children.indexPath,
          name: 'index',
          component: Index
        },
         /**
         * 附近页面,map
         */
        {
          path:nav.mainPage.children.mapFullPath,
          name:"map",
          component:map,
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
        },
        {
          path:nav.mainPage.children.discoveryFullPath,
          name:"discovery",
          component:discovery,
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
      meta: {
        keepAlive: false // 需要被缓存
      },
    },
    {
      path: nav.searchPath,
      name: 'Search',
      component: Search,
    },
    /**
     * login页面
     */
    {
      path:nav.loginPath,
      name:"login",
      component:Login,
    },
    {
      /**
     * 搜索的结果页/搜索的列表页
     */
      path:nav.SearchResultPath,
      name:"SearchResult",
      component:SearchResult,
    },
    /**
     * setting 个人设置页面
     */
    {
      path:nav.settingPath,
      name:"setting",
      component:Setting,
      beforeEnter: guard.userGuard
    },
     /**
     * my-collection 我的收藏页面
     */
    {
      path:nav.myCollectionPath,
      name:"my-collection",
      component:MyCollection,
      //路由守卫
      beforeEnter: guard.userGuard
    },
    
     /**
     * login-verify-code 验证码页面
     */
    {
      path:nav.loginLerifyCodePath,
      name:"login-verify-code",
      component:LoginLerifyCode,
    },
    /**
     * recent-view 最近浏览页面
     */
    {
      path:nav.recentViewPath,
      name:"recent-view",
      component:RecentView,
      beforeEnter: guard.userGuard
    },
    /**
     * discount-price 狠优惠页面
     */
    {
      path:nav.discountPricePath,
      name:"discount-price",
      component:DiscountPrice
    },
    
  ]
})
