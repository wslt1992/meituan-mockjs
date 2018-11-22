import store from '../store/index'
import {Toast} from 'mint-ui'
var guard = {
  /**
   * user守卫
   */
  userGuard:(to, from, next) => {
    if(store.getters['user/loginState']){
      next();
    }else{
      Toast({
        message: '请先登录',
        position: 'bottom',
        duration: 3000
    });
      // next({ path: '/login' })
      next(false)
    }
  }
}

  export default guard;