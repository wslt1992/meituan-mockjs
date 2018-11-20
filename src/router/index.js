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
import SearchResult from '@/views/search-result'
import url from '../global/url'
import Login from '@/views/login'
import Setting from '@/views/setting'
import MyCollection from '@/views/my-collection'
import map from '@/views/map'
import Login from '@/views/login' 
import Setting from '@/views/setting'
import MyCollection from '@/views/my-collection' 
import LoginLerifyCode from '@/views/login-verify-code' //输入验证码
import RecentView from '@/views/recent-view' //最近浏览
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
    },
     /**
     * my-collection 我的收藏页面
     */
    {
      path:nav.myCollectionPath,
      name:"my-collection",
      component:MyCollection,
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
      
    }
  ]
})
