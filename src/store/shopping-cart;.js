const shoppingCart = {
    /**
     * 开启命名空间
     */
    namespaced: true,
    state: {
        /**
         * foodid,
            foodname:'烧烤面包',
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
                return o.foodid === data.foodid
            })
            if(target){
                target.num+=data.num;
            }else{
                state.gouwucheArr.push(data);
            }
        },
        jian(state,foodid){
            let target = _.find(state.gouwucheArr,(o)=>{
                return o.foodid === foodid;
            });
            if(target&&target.num>1){
                target.num-=1;
            }
        }
    },
    actions: {  }
  }
  export default shoppingCart;