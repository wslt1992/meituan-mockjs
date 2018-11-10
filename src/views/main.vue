<template>
  <div class="main-root">
    <div class="container">
      <router-view/>
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
import { Tabbar, TabItem } from "mint-ui";
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
  name: "main",
  data: function() {
    return {
      nameArray: ["首页", "附近", "发现", "订单", "我的"],
      selected: "首页"
    };
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
  /* height: 90vh; */
  flex-grow:1;
  background-color: red;
  overflow-y: scroll;
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
