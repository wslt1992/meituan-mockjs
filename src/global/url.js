var url = {
  index: '/data/index',
  indexSwiper: '/data/indexSwiper',
  indexClass1: '/data/indexClass1',
  indexClass2: '/data/indexClass2',

  listing: '/data/listing',

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
    loginPath:'/login',
    settingPath:'/setting',
    myCollectionPath:'/my-collection'
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
