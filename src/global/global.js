var global ={
    amapKey: '333de0fe7b5b7a11ef892c00f4b967a1',
    install(Vue, options){
        Vue.prototype.$global = global;
      }
}

export default global;