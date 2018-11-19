<template>
    <t-page>
        <t-header-new :back='false' slot="header">
            <div slot="center" class="header" >订单</div>
        </t-header-new>
        <div slot="top-fix" class="top-fix">
            <t-tab checked-clazz='active' class="tab" v-model="selectedIndex" >
                <div>全部</div>
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
  data() {
    return {
      selectedIndex: 0,
      items:[],
      itemsAll: [
        {
          shopname: "正新鸡排",
          state: "已经完成",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "已经完成",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "已经完成",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "已经完成",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "已经完成",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "已经完成",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未付款",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未付款",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未付款",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未付款",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未使用",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未使用",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未使用",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未使用",
          price: 234,
          time: "2018-03-24 18:34"
        },
      ],
      /**
       * 未付款
       */
      itemsNoPayments:[
        {
          shopname: "正新鸡排",
          state: "未付款",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未付款",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未付款",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未付款",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未付款",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未付款",
          price: 234,
          time: "2018-03-24 18:34"
        }
      ],
      /**
       * 未使用
       */
      itemsNoEat:[
        {
          shopname: "正新鸡排",
          state: "未使用",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未使用",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未使用",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未使用",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未使用",
          price: 234,
          time: "2018-03-24 18:34"
        },
        {
          shopname: "正新鸡排",
          state: "未使用",
          price: 234,
          time: "2018-03-24 18:34"
        }
      ],
      /**
       * 未评论
       */
      itemsNoComment:[
        {
          shopname: "正新鸡排",
          state: "未评论",
          price: 234,
          time: "2018-03-24 18:34"
        },
      ],
      /**
       * 售后
       */
      itemsNoAfterSales:[
        {
          shopname: "正新鸡排",
          state: "售后",
          price: 234,
          time: "2018-03-24 18:34"
        },
      ]
    };
  },
  mounted(){
      this.switchTabContainer(0);
  },
  methods:{
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
      }
  },
};
</script>

<style lang='scss' scoped>
@import "../style/color.scss";
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
            height: 12vw;
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
  position: relative;
}
.list{
    overflow: scroll;
}
  
</style>
