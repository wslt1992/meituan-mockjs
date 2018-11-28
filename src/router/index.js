import Vue from 'vue'
import Router from 'vue-router'


const HelloWorld = ()=>import( '@/components/HelloWorld')
const Index = ()=>import( '@/views/index')
const MainPage = ()=>import( '@/views/MainPage')
const My = ()=>import( '@/views/my')
const Order = ()=>import( '@/views/order')
const discovery = ()=>import( '@/views/discovery')
const ClasstifyAll = ()=>import( '@/views/ClasstifyAll')
const Search = ()=>import( '@/views/search')
const SearchResult = ()=>import( '@/views/search-result')
const map = ()=>import( '@/views/map')
const Login = ()=>import( '@/views/login') //我的>登录
const Setting = ()=>import( '@/views/setting') //我的>个人设置
const MyCollection = ()=>import( '@/views/my-collection') //我的>我的收藏
const LoginLerifyCode = ()=>import( '@/views/login-verify-code') //我的>登录>输入验证码
const RecentView = ()=>import( '@/views/recent-view') //我的>最近浏览
const DiscountPrice = ()=>import( '@/views/discount-price') //首页>狠优惠
const Leisure = ()=>import( '@/views/leisure') //首页>有格调
const Scenery = ()=>import( '@/views/scenery') //去哪儿

Vue.use(Router)

import url from '../global/url.js'

let nav = url.navigator;
import guard from './guard.js'
export default new Router({
  // mode:'history',
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
    /**
     * leisure 有格调页面
     */
    {
      
      path:nav.leisurePath,
      name:"leisure",
      component:Leisure
    },
     /**
     * scenery 有格调页面
     */
    {
      
      path:nav.sceneryPath,
      name:"scenery",
      component:Scenery
    }
  ]
})
