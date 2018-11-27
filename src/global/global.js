import router from '../router/index'
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
      router.push({name:'SearchResult',params})
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
    install(Vue, options){
        Vue.prototype.$global = global;
      }
}

export default global;