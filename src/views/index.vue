// 首页
<template>
    <div>
      <p>index首页</p>
      <div class="mt-swipe">
        <mt-swipe :auto='2000'>
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
      <div class="classify">
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          <p>美食</p>
        </div>
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          电影/演出
        </div>
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          酒店住宿
        </div>
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          休闲娱乐
        </div>
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          外卖
        </div>
      </div>
    </div>
    
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import url from '@/global/url'
import {Toast} from 'mint-ui'

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
<style lang="scss" scoped>
.mint-swipe-item{
  img{
    
  }
}
.mt-swipe{
  height: 200px;
}
.classify{
  display: flex;
  flex-wrap:wrap;
}
.classify-item{
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items:center;
  box-sizing: border-box;
  width: 20vw;
  height: 20vw;
  border:1px solid black;
  font-size: 4vw;
  img{
    width: 12vw;
  }
  p{
    margin: 0;
    padding: 0;
  }
}
</style>
