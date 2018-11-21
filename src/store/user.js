const user = {
    /**
     * 开启命名空间
     */
    namespaced: true,
    state: {
        token:'',
        userId:'',
        username:'长风破浪',
        /**
         * 登录状态
         */
        loginState:400
      },
      getters: {
        loginState: state => {
              return state.loginState===200?true:false;
          }
      },
    mutations: {
        changeLoginState(state,data){
            console.log(data,'data')
            state.loginState =data.state;
            let user = data.user;
            state.userId = user.userId;
            state.username = user.username;
        }
    },
    actions: {  }
  }
  export default user;