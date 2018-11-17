// 首页
<template>
    <div class="index-root"  id="mainContent">
      
      <t-header>
        <span slot='left'>选择地区</span>
        <search-bar></search-bar>
      </t-header>
      <!-- 轮播开始 -->
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
      <!-- 轮播结束 -->
      <!-- 分类开始 -->
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
      <!-- 分类结束 -->
      <!-- 分类全部开始 -->
      <div class="classify classifyAll">
        <div class="classify-item">
        <img src="../assets/logo.png" alt="">
        <p>学习培训</p>
        </div>
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          <p>民宿/公寓</p>
        </div>
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          <p>周边游/旅游</p>
        </div>
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          <p>丽人/美发</p>
        </div>
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          <p>结婚/摄影</p>
        </div>
        <div class="classify-item">
        <img src="../assets/logo.png" alt="">
        <p>闪购超市</p>
        </div>
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          <p>景点/门票</p>
        </div>
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          <p>火车票/机票</p>
        </div>
        <div class="classify-item">
          <img src="../assets/logo.png" alt="">
          <p>按摩/足疗</p>
        </div>
        <div class="classify-item" @click="navigatorTo('全部分类')">
          <img src="../assets/logo.png" alt="">
          <p>全部分类</p>
        </div>
      </div>
      <!-- 分类全部结束 -->
      <div v-for="{item,index} in items" :key="index">
        <img src="../assets/ds320_220.png" alt="">
        <img src="../assets/ds50.png" alt="">
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import {Toast} from 'mint-ui'

export default {
  data: function() {
    return {
      offsetTop:0,
      items:[1,1,1,1,1,1,1,1,]
    };
  },
  methods:{
    navigatorTo(flag){
      switch(flag){
        case '全部分类':
          this.$router.push(this.$url.navigator.classtifyAll)
          break;

      }
    }
  },
  mounted() {
    Toast('提示信息');
    axios.get(this.$url.listing).then(res => {
      console.log(res, this.$url.listing);
    });
  },
  activated() {
　　// keep-alive组件 页面进入的时候设置滚动高度
    document.getElementById("mainContent").scrollTop = this.offsetTop;
  },
　 beforeRouteLeave(to, from, next) {
   //组件离开的时候，获取页面滚动高度 
   this.offsetTop = document.getElementById('mainContent').scrollTop;
   next() 
　 },
   
};
</script>
<style lang="scss" scoped>
@import '../style/vm_base.scss';
.index-root{
  height: 100%;
  overflow-y: scroll;
}
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
  font-size: 4vw;
    .classify-item{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items:center;
    box-sizing: border-box;
    // width: 20vw;
    width: vw(375*0.2);
    height: 20vw;
    border:1px solid black;
      img{
        width: 12vw;
      }
      p{
        margin: 0;
        padding: 0;
      }
    
    }
}

.classifyAll{
    font-size: 3vw;
}
</style>
