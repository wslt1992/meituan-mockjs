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
    loginPath:'/login'
  }

}
export default url;
