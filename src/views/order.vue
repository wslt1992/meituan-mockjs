<template>
    <t-page class="t-page-root">
        <t-header-new :back='false' slot="header" class="t-header-default">
            <div slot="center" class="order-color">订单</div>
        </t-header-new>
        <div slot="top-fix" class="top-fix">
            <t-tab class="t-tab-default" v-model="selectedIndex" >
                <div>全&emsp;部</div>
                <div>待付款</div>
                <div>待使用</div>
                <div>待评价</div>
                <div>退款/售后</div>
            </t-tab>
        </div>
        
            <search-list-item :items='items'> 

            </search-list-item>
            <!-- <div v-for="(item,index) in items" :key="index" class="list-item">
                <h6>{{item.id}}</h6>
                <div class="item-left"> -->
                    <!-- <img :src='item.img' alt=""> -->
                    <!-- <img src="../assets/imgs/shop.jpg" alt="">
                </div>
                <div class="item-right">
                    <span class="shopname">{{item.shopname}}</span>
                    <div class="div-item">
                        <span class="price">￥{{item.price}}</span>
                        <span class="distance">{{item.distance}}km</span>
                    </div>
                    <div class="div-item">
                        <span class="tips">{{item.tips}}</span>
                        <span class="sold">销量:{{item.sold}}</span>
                    </div>
                    <span class="address">地址:{{item.tips}}</span>
                </div>
            </div> -->
        
        <div slot="container" class="container1">
            <div v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="50">
                    <order-item :items='items' class="list"></order-item>
                    <mt-spinner type="triple-bounce"></mt-spinner>
            </div>
            
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
      loadMore(){
          this.requestData(this.selectedIndex,this.items);
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
    color: color-555;
}
// .header {
//   font-size: 5vw;
//   height: 10vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #25abb1;
// }
.top-fix{
     // tab开始
    // .tab {
    //    div {
    //        font-size: 4vw;
    //         height: 13vw;
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         box-sizing: border-box;
    //         border-bottom: 0.3vw solid $gray;
    //         margin-bottom: 0.2vw;
    //     }
    //     div.active {
    //         border-bottom: 0.5vw solid $primary-color;
    //         color: $primary-color;
    //         padding-bottom: 0vw;
    //     }
    // }
    // tab结束
}
.container1 {
    height: 100%;
}
.list{
    overflow: scroll;
}
  .order-color{
      color: #eee;
  }
</style>
