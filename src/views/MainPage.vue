<template>
  <div class="main-root">
    <div class="container">
            <router-view></router-view>
    </div>
    <div class="footer-tab">
        <mt-tabbar v-model="selected">
            <mt-tab-item :id="nameArray[0]">
                <img slot="icon" src="../assets/logo.png">
                {{nameArray[0]}}
            </mt-tab-item>
            <mt-tab-item :id="nameArray[1]">
                <img slot="icon" src="../assets/logo.png">
                {{nameArray[1]}}
            </mt-tab-item>
            <mt-tab-item :id="nameArray[2]">
                <img slot="icon" src="../assets/logo.png">
                {{nameArray[2]}}
            </mt-tab-item>
            <mt-tab-item :id="nameArray[3]">
                <img slot="icon" src="../assets/logo.png">
                {{nameArray[3]}}
            </mt-tab-item>
            <mt-tab-item :id="nameArray[4]">
                <img slot="icon" src="../assets/logo.png">
                {{nameArray[4]}}
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
            break;
            case this.nameArray[2]:
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

<style scoped>
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
  /* background-color: bisque; */
}
.mint-tabbar{
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
