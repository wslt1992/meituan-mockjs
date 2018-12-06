import router from '../router/index'
import store from '../store/index'
import url from '../global/url'
var global ={
    /**
     * 高德地图key
     */
    amapKey: '333de0fe7b5b7a11ef892c00f4b967a1',
    /**
     * 跳转到搜索结果页 
     * @param {*} searchKeyword 搜索关键字
     */
    toSearchResult(searchKeyword){
      let params ={
        searchKeyword
      }
      store.commit('changeSearchKeyword',searchKeyword);
      router.push({name:'SearchResult'})
    },
    /**
     * 跳转到搜索页 
     * @param {*} searchKeyword 搜索关键字
     */
    toSearch(searchKeyword){
      let params ={
        searchKeyword
      }
      router.push({name:'Search',params})
    },

    /**
     * 路由动画的标记，前进还是后退，false表示后退，true表示前进
     * 默认值必须为true
     */
    isRouterForward : true,

    install(Vue, options){
        Vue.prototype.$global = global;
      }
}

export default global;