<template>
  <div class="main-root">
    <div class="container">
        <keep-alive include="order">
            <router-view></router-view>
        </keep-alive>
    </div>
    <div class="footer-tab">
        <mt-tabbar v-model="selected">
            <mt-tab-item :id="nameArray[0]">
                <i class="icon iconfont icon-shouye"></i>
                <span>{{nameArray[0]}}</span>
            </mt-tab-item>
            <mt-tab-item :id="nameArray[1]">
                <i class="icon iconfont icon-icon-dingwei"></i>
                <span>{{nameArray[1]}}</span>
            </mt-tab-item>
            <mt-tab-item :id="nameArray[2]">
                <i class="icon iconfont icon-faxian1123"></i>
                <span>{{nameArray[2]}}</span>
            </mt-tab-item>
            <mt-tab-item :id="nameArray[3]">
                <i class="icon iconfont icon-icon-"></i>
                <span>{{nameArray[3]}}</span>
            </mt-tab-item>
            <mt-tab-item :id="nameArray[4]">
                <i class="icon iconfont icon-wo"></i>
                <span class="pan">{{nameArray[4]}}</span>
            </mt-tab-item>
        </mt-tabbar>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: 'mainpage',
  data: function() {
    return {
      nameArray: ["首页", "附近", "发现", "订单", "我的"],
      selected: "首页",
    //   offsetTop:0,
    };
  },
  watch:{
      selected:function(newVal){
          let children = this.$url.navigator.mainPage.children
          switch(newVal){
            case this.nameArray[0]:
            this.$router.push(children.indexFullPath);
            break;
            case this.nameArray[1]:
            this.$router.push(children.mapFullPath);
            break;
            case this.nameArray[2]:
            this.$router.push(children.discoveryFullPath);
            break;
            case this.nameArray[3]:
            this.$router.push(children.orderFullPath);
            break;
            case this.nameArray[4]:
            this.$router.push(children.myFullPath);
            break;
          }
      }
  }
};
</script>

<style lang='scss' scoped>
.main-root{
    display: flex;
    height: 100vh;
    flex-direction: column;
}
.container {
  height: 90vh;
  flex-grow:1;
  /* background-color: red; */
  overflow-y: hidden;
}
.footer-tab {
    height: 9vh;
    i{
        display: block;
        font-size: 6vw;
        margin-bottom: 2vw;
    }
    span{
        font-size: 3.6vw;
    }
  /* background-color: bisque; */
}
.mint-tabbar{
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
