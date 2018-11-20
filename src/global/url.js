var url = {
  index: '/data/index',
  indexSwiper: '/data/indexSwiper',
  indexClass1: '/data/indexClass1',
  indexClass2: '/data/indexClass2',

  listing: '/data/listing',
  users:'/data/users', //用户信息
  shops:'/data/shops', //收藏商家列表
  goods:'/data/goods', //收藏商品列表

  /**
   * 导航路径
   */
  navigator: {
    mainPage: {
      selfpath: '/mainpage',
      children:{
        indexPath: 'index',
        indexFullPath:'/mainpage/index',
        orderPath: 'order',
        orderFullPath:'/mainpage/order',
        myPath: 'my',
        myFullPath:'/mainpage/my',
      }
      
    },
    classtifyAll:'/classtifyall',
    searchPath:'/search',
    SearchResultPath:'/searchresult',
    loginPath:'/login', //登录
    settingPath:'/setting', //个人设置
    myCollectionPath:'/my-collection', //收藏
    loginLerifyCodePath:"/login-verify-code", //输入验证码
    recentViewPath:"/recent-view", //最近浏览

  },

  /**
   * 调用后，在子组件vue中，可以使用this.$url调用
   * @param {*} Vue 
   */
  // registerInVue:function(Vue){
  //   Vue.prototype.$url = url;
  // },
  install(Vue, options){
    Vue.prototype.$url = url;
  }
}
export default url;
