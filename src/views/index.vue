// 首页
<template>
    <div>
      <p>index首页</p>
      <div class="mt-swipe">
        <mt-swipe :auto='4000'>
          <mt-swipe-item>a</mt-swipe-item>
          <mt-swipe-item>b</mt-swipe-item>
          <mt-swipe-item>c</mt-swipe-item>
        </mt-swipe>
      </div>
        
    </div>
    
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import url from '@/global/url'
import {Toast, Swipe, SwipeItem} from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  data: function() {
    return {};
  },
  mounted() {
    Toast('提示信息');
    axios.get(url.listing).then(res => {
      console.log(res, url.listing);
    });
  }
};
</script>

<style scoped>
.mt-swipe{
  height: 200px;
}
</style>
