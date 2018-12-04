const shoppingCart = {
    /**
     * 开启命名空间
     */
    namespaced: true,
    state: {
        /**
         * footid,
            footname:'烧烤面包',
            price:24,
            num:1,//数量
         */
        gouwucheArr:[]
      },
      getters: {
        // loginState: state => {
        //       return state.loginState===200?true:false;
        //   }
      },
    mutations: {
        /**
         * 添加一组数据到gouwucheArr
         * @param {*} state 
         * @param {*} data 
         */
        push(state,data){
            let target = _.find(state.gouwucheArr,(o)=>{
                return o.footid === data.footid
            })
            console.log(state.gouwucheArr,'--',data.footid,'---------',target)
            if(target){
                target.num+=data.num;
            }else{
                state.gouwucheArr.push(data);
            }
            console.log(state.gouwucheArr,'data')
        }
    },
    actions: {  }
  }
  export default shoppingCart;