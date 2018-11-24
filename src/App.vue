<template>
  <div id="app">
    <!-- <main-page></main-page> -->
    <keep-alive include="mainpage">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainPage from './views/MainPage'
export default {
  name: 'App',
  components:{
    'main-page':MainPage
  },
  methods: {
    /**
     * 监听文件
     */
    initKeyEventback() {
      let _this = this;
      document.addEventListener("plusready", function () {
        plus.key.addEventListener("backbutton", function () {
            // alert("BackButton Key pressed!");
            _this.$router.back();
          });
        });
    }
  },
  mounted(){
    this.initKeyEventback()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
