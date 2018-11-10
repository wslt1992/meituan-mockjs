<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
import mainPage from './views/main'
export default {
  name: 'App',
  components:{
    'main-page':mainPage
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
