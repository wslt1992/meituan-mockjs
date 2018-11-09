<template>
  <div class="hello">
  </div>
</template>

<script>
import axios from 'axios'
import url from '@/global/url'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    // axios.get(url.index).then(
    //   (res)=>{
    //     console.log(res,url.index);
    //   }
    // )
    // axios.get(url.indexSwiper).then(
    //   (res)=>{
    //     console.log(res,url.indexSwiper);
    //   }
    // )
    // axios.get(url.indexClass1).then(
    //   (res)=>{
    //     console.log(res,url.indexClass1);
    //   }
    // )
    // axios.get(url.indexClass2).then(
    //   (res)=>{
    //     console.log(res,url.indexClass2);
    //   }
    // )
    axios.get(url.listing).then(
      (res)=>{
        console.log(res,url.listing);
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
