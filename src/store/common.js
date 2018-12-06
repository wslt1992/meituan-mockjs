const common = {
    /**
     * 开启命名空间
     */
    // namespaced: true,
    state: {
        // 搜索的关键字
        searchKeyword:''
      },
      getters: {
        changeSearchKeyword(state){

        }
      },
    mutations: {
        changeSearchKeyword(state,searchKeyword){
            state.searchKeyword = searchKeyword;
        }
    },
    actions: {  }
  }
  export default common;