import axios from 'axios';
import url from '../global/url'
var https={
    listing:{
        request(){
            return axios.get(url.listing).then((res)=>res.data)
        }
    },
    login:{
        request(username,password){
            // return axios.get(url.login).then((res)=>res.data)
            return axios.post(url.login,{username,password}).then((res)=>res.data)
        }
    },
    // registerInVue(Vue){
    //     Vue.prototype.$https = https
    // },
    install(Vue, options) {
        // 1. 添加全局方法或属性
        // Vue.myGlobalMethod = function () {
        //   // 逻辑...
        // }
      
        // 2. 添加全局资源
        // Vue.directive('my-directive', {
        //   bind (el, binding, vnode, oldVnode) {
        //     // 逻辑...
        //   }
        //   ...
        // })
      
        // 3. 注入组件
        // Vue.mixin({
        //   created: function () {
        //     // 逻辑...
        //   }
        //   ...
        // })
      
        // 4. 添加实例方法
        // Vue.prototype.$myMethod = function (methodOptions) {
        //   // 逻辑...
        // }
        Vue.prototype.$https = https
      },
      users:{
          request(){
              return axios.get(url.users).then((res)=>res.data);
          }
      }
}

export default https;