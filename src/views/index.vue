// 首页
<template>
    <t-page class="index-root"  id="mainContent">
      <t-header-new slot="header" class="index-header">
        <span slot='left'>选择地区</span>
        <search-bar slot='center'></search-bar>
      </t-header-new>
      <div slot="container">

      
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
        <div @click="$global.toSearch" class="classify-item">
          <i class="icon iconfont icon-peixun1"></i>
        <p>学习培训</p>
        </div>
        <div @click="$global.toSearch" class="classify-item">
          <i class="icon iconfont icon-jiudian1"></i>
          <p>民宿/公寓</p>
        </div>
        <div @click="$global.toSearch" class="classify-item">
          <i class="icon iconfont icon-lvyou"></i>
          <p>周边游/旅游</p>
        </div>
        <div @click="$global.toSearch" class="classify-item">
          <i class="icon iconfont icon-meifa"></i>
          <p>丽人/美发</p>
        </div>
        <div @click="$global.toSearch" class="classify-item">
          <i class="icon iconfont icon-sheying"></i>
          <p>结婚/摄影</p>
        </div>
        <div @click="$global.toSearch" class="classify-item">
          <i class="icon iconfont icon-market"></i>
        <p>闪购超市</p>
        </div>
        <div @click="$global.toSearch" class="classify-item">
          <i class="icon iconfont icon-jingdian"></i>
          <p>景点/门票</p>
        </div>
        <div @click="$global.toSearch" class="classify-item">
          <i class="icon iconfont icon-feijipiao"></i>
          <p>火车票/机票</p>
        </div>
        <div @click="$global.toSearch" class="classify-item">
          <i class="icon iconfont icon-zuliao"></i>
          <p>按摩/足疗</p>
        </div>
        <div class="classify-item" @click="navigatorTo('全部分类')">
          <i class="icon iconfont icon-leimupinleifenleileibie"></i>
          <p>全部分类</p>
        </div>
      </div>
      <!-- 分类全部结束 -->
      <!-- 狠优惠 有格调 电影 红包 start -->
      <div class="index-ad">
        <ad-item :title="'狠优惠'" :content="'重庆江湖烤全羊'" :tips="'中式烧烤'" :type="'烧烤'" :btntxt="'0.1折抢购 >'" class="index-ad-item" :topath="'/discount-price'"></ad-item>
        <ad-item :title="'有格调'" :content="'御品spa桑拿会所'" :tips="'休闲娱乐'" :type="'休闲娱乐'" :showBtn="false" class="index-ad-item" :topath="'/leisure'"></ad-item>
        <ad-item :title="'周末去哪儿'" :content="'小包房包夜'" :tips="'电影'" :type="'亲子'" :showBtn="false" class="index-ad-item single-item" :topath="'/scenery'"></ad-item>
      </div>
      <!-- 狠优惠 有格调 电影 红包 end -->
      <!-- 猜你喜欢 start -->
      <div class="index-recommend">
        <h2>— 猜你喜欢 —</h2>
        <div
        v-infinite-scroll="loadMore" 
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="50">
          <good-item v-for="(item,index) in recommendList" :key="index" :msg="item"></good-item>
          <mt-spinner type="triple-bounce"></mt-spinner>
        </div>
      </div>
      <!-- 猜你喜欢 end -->
      </div>
    </t-page>
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
      ],
      recommendList:[] // 猜你喜欢，同收藏商品
    };
  },
  methods:{
    loadMore:function(){
      this.collectionGoods();
    },
    // 猜你喜欢，同收藏商品
    collectionGoods:function(){
          let goods = [];
          axios.get(this.$url.goods).then((res)=>{
              let data = res.data;
              goods = data.goods;
              // 加入评分 
              let arr = goods.map(function(item,inex){
                  item.stars = "";
                  return item;
              });
              this.recommendList.push(...arr);
              
          }).catch((res)=>{
              if(res instanceof Error){
                  console.log(res.message);
              }else{
                  console.log(res.data);
              }
          });
      },
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
    // 猜你喜欢，同收藏商品
    this.collectionGoods();
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
div.index-header{
  color: #555;
  font-size: 14px;
  background-color: #fff;
  span{
    padding-left: 3vw;
  }
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
// /deep/ .index-header .root{background-color:#f5f5f5;font-size:4vw;line-height: 10.7vw;}//TODO
/deep/ .lt-header-root .center{position: fixed!important;z-index:10000;top:0;}
/deep/ .index-header .root i.icon-sousuo{font-size:3.6vw;font-weight: bold;}
// /deep/ .mt-swipe{margin-top: 16vw;height:44vw;}
  /* 轮播 */
/deep/ .mint-swipe img{max-width:100%;height:100%;}
/deep/ .mint-swipe-indicator.is-active{opacity: 0.6;}
  /* 分类主菜单 */
.classify{background-color:#fff;padding:2vw 0;}
.classify .classify-item i{color:rgba(255,255,255,0.93);font-size:6.6vw;}
.classify-item:first-of-type i{background-image:linear-gradient(135deg,#fc9797,#f73835);filter:drop-shadow(1px 1px 2px rgba(247, 56, 53,0.3))}
.classify-item:nth-of-type(2) i{background-image:linear-gradient(135deg,#aafd7a,#50b615);filter:drop-shadow(1px 1px 2px rgba(80, 182, 21,0.3))}
.classify-item:nth-of-type(3) i{background-image:linear-gradient(135deg,#43fdde,#0aa88e);filter:drop-shadow(1px 1px 2px rgba(10, 168, 142,0.3))}
.classify-item:nth-of-type(4) i{background-image:linear-gradient(135deg,#ff94b4,#e4215b);filter:drop-shadow(1px 1px 2px rgba(228, 33, 91,0.3))}
.classify-item:nth-of-type(5) i{background-image:linear-gradient(135deg,#f0fc89,#9faa08);filter:drop-shadow(1px 1px 2px rgba(159, 170, 8,0.3))}
.classify-item:nth-of-type(6) i{background-image:linear-gradient(135deg,#eb98fc,#b714e9);filter:drop-shadow(1px 1px 2px rgba(183, 20, 233,0.3))}
.classify-item:nth-of-type(7) i{background-image:linear-gradient(135deg,#ffd9a1,#db7908);filter:drop-shadow(1px 1px 2px rgba(219, 121, 8,0.3))}
.classify-item:nth-of-type(8) i{background-image:linear-gradient(135deg,#9ddefc,#0693ca);filter:drop-shadow(1px 1px 2px rgba(6, 147, 202,0.3))}
.classify-item:nth-of-type(9) i{background-image:linear-gradient(135deg,#43fdde,#0aa88e);filter:drop-shadow(1px 1px 2px rgba(10, 168, 142,0.3))}
.classify-item:nth-of-type(10) i{background-image:linear-gradient(135deg,#fcd7b8,#805310);filter:drop-shadow(1px 1px 2px rgba(128, 83, 16,0.3))}
  /* 狠优惠 有格调 电影 红包 */
.index-ad{background-color:#fff;margin-top: 10px;padding:2vw 2vw;display:flex;flex-wrap:wrap;position: relative;justify-content: center;}
.index-ad-item{width:48%;margin: 0.5vw;}
.index-ad-item.single-item{width:100%;border-right:0.5vw solid transparent;border-left:0.5vw solid #fff;box-sizing:content-box;margin:0.5vw 1vw;}
/deep/.index-ad-item:first-of-type{background-image:linear-gradient(150deg,rgba(252, 214, 214, 0.2),#fcb4b4);}
/deep/.index-ad-item:first-of-type h2::after{background-image:linear-gradient(90deg,rgba(250, 74, 74,0.6),#fa4a4a);}
/deep/.index-ad-item:nth-of-type(2){background-image:linear-gradient(150deg,rgba(230, 192, 144,0.2),#e6c090);}
/deep/.index-ad-item:nth-of-type(2) h2::after{background-image:linear-gradient(90deg,rgba(194, 142, 69,0.6),#c28e45);}
/deep/.index-ad-item:nth-of-type(3){background-image:linear-gradient(150deg,rgba(104, 193, 253,0.2),#68adfd);}
/deep/.index-ad-item:nth-of-type(3) h2::after{background-image:linear-gradient(90deg,rgba(64, 164, 231, 0.6),#3098dd);}
/* 猜你喜欢 */
.index-recommend{margin-top: 10px;background-color:#fff;padding:2vw;}
.index-recommend h2{font-size: 3.5vw;color:#aaa;font-weight: normal;border-bottom: 1px solid #eee;margin:0;padding:3vw 0;}
/* 木头----end*/
</style>
