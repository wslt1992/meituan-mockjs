var url = {
  /**
   * 数据访问路径
   */
  index: '/data/index',
  indexSwiper: '/data/indexSwiper',
  indexClass1: '/data/indexClass1',
  indexClass2: '/data/indexClass2',

  listing: '/data/listing',
  users:'/data/users', //用户信息
  shops:'/data/shops', //收藏商家列表
  goods:'/data/goods', //收藏商品列表
  login:'/data/login', //收藏商品列表
  order:'/data/order', //收藏商品列表
  discounts:'/data/discounts', //狠优惠列表
  leisures:'/data/leisures', //有格调列表
  scenerys:'/data/scenerys', //周末去哪儿
  /**
   * 数据访问路径---结束
   */
  /**
   * 导航路径
   */
  navigator: {
    mainPage: {
      selfpath: '/mainpage',
      children:{
        indexPath: 'index',
        indexFullPath:'/mainpage/index',
        mapPath:'/map',
        mapFullPath:'/mainpage/map',
        orderPath: 'order',
        orderFullPath:'/mainpage/order',
        discoveryPath: 'discovery',
        discoveryFullPath:'/mainpage/discovery',
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
    discountPricePath:'/discount-price', //狠优惠
    leisurePath:'/leisure', //有格调
    sceneryPath:'/scenery', //去哪儿

  },
  /**
     * 导航路径 ---结束
     */
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
