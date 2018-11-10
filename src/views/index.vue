// 首页
<template>
    <div>
      <p>index首页</p>
      <div class="mt-swipe">
        <mt-swipe :auto='4000'>
          <mt-swipe-item>
            <img src="../assets/ds320_220.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/ds50.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/ds320_220.png" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/ds50.png" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页</p><p>index首页4</p><p>index首页3</p><p>index首页2</p><p>index首页end</p>
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
