const user = {
    /**
     * 开启命名空间
     */
    namespaced: true,
    state: {
        token:'',
        username:'长风破浪',
        /**
         * 登录状态
         */
        loginState:false
      },
      getters: {
        loginState: state => {
              return state.loginState;
          }
      },
    mutations: {
        changeLoginState(state,newLoginState){
            state.loginState =newLoginState;
        }
    },
    actions: {  }
  }
  export default user;