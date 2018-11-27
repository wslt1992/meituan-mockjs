import router from '../router/index'
import url from '../global/url'
var global ={
    amapKey: '333de0fe7b5b7a11ef892c00f4b967a1',
      toSearch(){
        router.push(url.navigator.SearchResultPath)
    },
    install(Vue, options){
        Vue.prototype.$global = global;
      }
}

export default global;