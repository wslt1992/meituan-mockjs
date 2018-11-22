<template>
    <t-page class="t-page-root">
        <t-header-new :back='false' slot="header">
            <div slot="center" class="header" >订单</div>
        </t-header-new>
        <div slot="top-fix" class="top-fix">
            <t-tab checked-clazz='active' class="tab" v-model="selectedIndex" >
                <div>全&emsp;部</div>
                <div>待付款</div>
                <div>待使用</div>
                <div>待评价</div>
                <div>退款/售后</div>
            </t-tab>
        </div>
        <div slot="container" class="container1">
            <!-- <div class="container1"> -->
            <order-item :items='items' class="list"></order-item>
            <!-- </div> -->
            
        </div>
    </t-page>
</template>

<script>
export default {
  name: 'order',
  data() {
    return {
      selectedIndex: -1,
      items:[],
      itemsAll: [],
      /**
       * 未付款
       */
      itemsNoPayments:[
      ],
      /**
       * 未使用
       */
      itemsNoEat:[],
      /**
       * 未评论
       */
      itemsNoComment:[],
      /**
       * 售后
       */
      itemsNoAfterSales:[]
    };
  },
  mounted(){
      this.selectedIndex = 0;
      //  请求全部数据
  },
  methods:{
    /**
     * 带上items,去同步问题。
     * 如果使用this.items可能在then返回数据时，this.items已经发生了变化，所以需要固定items值
     */
      requestData(stateNum,items){
        this.$https.order.request(stateNum).then((res)=>{
          items.push(...res.data)
        })
      },
      firstRequestData(stateNum){
        if(this.items.length===0){
          this.requestData(stateNum,this.items);
        }
      },
      /**
       * 切换tab内容
       */
      switchTabContainer(index){
          switch(index){
              case 0:
                this.items = this.itemsAll
                break;
              case 1:
                this.items = this.itemsNoPayments
                break;
              case 2:
                this.items =this.itemsNoEat
                break;
              case 3:
                this.items =this.itemsNoComment
                break;
              case 4:
                this.items =this.itemsNoAfterSales
                break;
          }
      }
  },
  watch: {
      selectedIndex(newValue, oldValue) {
          this.switchTabContainer(newValue);
          this.firstRequestData(newValue)
      }
  },
};
</script>

<style lang='scss' scoped>
@import "../style/color.scss";
.t-page-root{
    color: $font-color;
}
.header {
  font-size: 5vw;
  height: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top-fix{
     // tab开始
    .tab {
       div {
           font-size: 4vw;
            height: 13vw;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            border-bottom: 0.3vw solid $gray;
            padding-bottom: 0.2vw;
        }
        div.active {
            border-bottom: 0.5vw solid $primary-color;
            color: $primary-color;
            padding-bottom: 0vw;
        }
    }
    // tab结束
}
.container1 {
    height: 100%;
}
.list{
    overflow: scroll;
}
  
</style>
