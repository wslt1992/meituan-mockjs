// 首页
<template>
    <div class="index-root"  id="mainContent">
      <t-header class="index-header">
        <span slot='left'>选择地区</span>
        <search-bar></search-bar>
      </t-header>
      <!-- 轮播开始 -->
      <div class="mt-swipe">
        <mt-swipe :auto='3000'>
          <mt-swipe-item>
            <img src="../assets/imgs/swiper1.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/imgs/swiper2.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/imgs/swiper3.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/imgs/swiper4.jpg" alt="">
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/imgs/swiper5.jpg" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 轮播结束 -->
      <!-- 分类开始 -->
      <!-- <div class="classify">
        <div class="classify-item">
          <i class="icon iconfont icon-meishi1"></i>
          <p>美食</p>
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-dianying1"></i>
          电影/演出
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-jiudian1"></i>
          酒店住宿
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-kafeibei"></i>
          休闲娱乐
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-waimai"></i>
          外卖
        </div>
      </div> -->
      <!-- 分类结束 -->
      <!-- 分类全部开始 -->
      <div class="classify classifyAll">
        <div class="classify-item">
          <i class="icon iconfont icon-peixun1"></i>
        <p>学习培训</p>
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-jiudian1"></i>
          <p>民宿/公寓</p>
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-lvyou"></i>
          <p>周边游/旅游</p>
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-meifa"></i>
          <p>丽人/美发</p>
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-sheying"></i>
          <p>结婚/摄影</p>
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-market"></i>
        <p>闪购超市</p>
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-jingdian"></i>
          <p>景点/门票</p>
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-feijipiao"></i>
          <p>火车票/机票</p>
        </div>
        <div class="classify-item">
          <i class="icon iconfont icon-zuliao"></i>
          <p>按摩/足疗</p>
        </div>
        <div class="classify-item" @click="navigatorTo('全部分类')">
          <i class="icon iconfont icon-leimupinleifenleileibie"></i>
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
      items:[1,1,1,1,1,1,1,1,],
      slots:[
        {
          flex:1,
          values:['2015-01','2015-02','2015-04','2015-05'],
          className:"slot1",
          textAlign:"right",
          defaultIndex:2
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  },
  methods:{
    navigatorTo(flag){
      switch(flag){
        case '全部分类':
          this.$router.push(this.$url.navigator.classtifyAll)
          break;

      }
    },
    onValuesChange:(picker,values)=>{
        console.log(values)
    }
  },
  mounted() {
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
  img{
    width: 100vw;
    height: 60vw;
  }
}
.classify{
  display: flex;
  flex-wrap:wrap;
  font-size: 4vw;
    .classify-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    box-sizing: border-box;
    // width: 20vw;
    width: vw(375*0.2);
    height: 20vw;
    // border:1px solid black;
      i{
        line-height: 12vw;
        font-size: 6vw;
        border-radius: 50%;
        width: 12vw;
        height: 12vw;
        color:#fffe;
        text-shadow: 1px 1px 2px #888a;
        :before{
          display: block;
          
        }
      }
      
      p{
        margin: 0;
        padding: 0;
      }
    
    }
    .classify-item:nth-child(1) i{
        background-color: #7f4ce6;
      }
      .classify-item:nth-child(2) i{
        background-color: #1c91e3;
      }
      .classify-item:nth-child(2) i{
        background-color: #f5413d;
      }
      .classify-item:nth-child(3) i{
        background-color: #6acf30;
      }
      .classify-item:nth-child(4) i{
        background-color: #f73d87;
      }
      .classify-item:nth-child(5) i{
        background-color: #f73d87;
      }
      .classify-item:nth-child(6) i{
        background-color: #6acf30;
      }
      .classify-item:nth-child(7) i{
        background-color: #6acf30;
      }
      .classify-item:nth-child(8) i{
        background-color: #ffb400;
      }
      .classify-item:nth-child(9) i{
        background-color: #00d3be;
      }
      .classify-item:nth-child(10) i{
        background-color: #7f4ce6;
      }
}

.classifyAll{
    font-size: 3vw;
}

/* 木头----start*/
  /* header */
/deep/.index-header .mint-header{background-color:#fff;color:#333;position:fixed;top:0;right:0;left:0;z-index:9999}
/deep/ .index-header .root{background-color:#f5f5f5;font-size:4vw;line-height: 10.7vw;}
/deep/ .lt-header-root .center{position: fixed!important;z-index:10000;top:0;}
/deep/ .index-header .root i.icon-sousuo{font-size:3.6vw;font-weight: bold;}
/deep/ .mt-swipe{margin-top: 16vw;height:44vw;}
  /* 轮播 */
/deep/ .mint-swipe img{max-width:100%;height:100%;}
/deep/ .mint-swipe-indicator.is-active{opacity: 0.6;}
  /* 分类主菜单 */
.classify{background-color:#fff;padding:2vw 0;}
.classify-item i{color:rgba(255,255,255,0.93);}
.classify-item:first-of-type i{background-image:linear-gradient(135deg,#fc9797,#f73835)}
.classify-item:nth-of-type(2) i{background-image:linear-gradient(135deg,#aafd7a,#50b615)}
.classify-item:nth-of-type(3) i{background-image:linear-gradient(135deg,#43fdde,#0aa88e)}
.classify-item:nth-of-type(4) i{background-image:linear-gradient(135deg,#ff94b4,#e4215b)}
.classify-item:nth-of-type(5) i{background-image:linear-gradient(135deg,#f0fc89,#9faa08)}
.classify-item:nth-of-type(6) i{background-image:linear-gradient(135deg,#eb98fc,#b714e9)}
.classify-item:nth-of-type(7) i{background-image:linear-gradient(135deg,#ffd9a1,#db7908)}
.classify-item:nth-of-type(8) i{background-image:linear-gradient(135deg,#9ddefc,#0693ca)}
.classify-item:nth-of-type(9) i{background-image:linear-gradient(135deg,#43fdde,#0aa88e)}
.classify-item:nth-of-type(10) i{background-image:linear-gradient(135deg,#fcd7b8,#805310)}
/* 木头----end*/
</style>
