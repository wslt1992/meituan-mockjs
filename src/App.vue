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
