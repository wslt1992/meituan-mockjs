<template>
    <div class="discount-container">
        <div 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infnite-scroll-distance="50">
        <div class="discount-header" :class="{'header-bg':bgAndPos}">
            <t-back-button class="discount-back"  slot="left">
                <mt-button class="sett-back" icon="back"></mt-button>
                <p>狠优惠</p>
            </t-back-button>
        </div>
        <div class="banner-img">
            <img class="banner-img" src="../assets/imgs/banner1.jpg" alt="">
        </div>
        <tab-nav class="discount-nav" :class="{'navlist-fixed':bgAndPos}" v-model="activeNav" :acitveIndex="acitveIndex" :navList="navList"></tab-nav>
        <div>{{test}}</div>
        <div class="discount-list">
                <discount-item v-for="(item,index) in discountList" :key="index" :itemMsg="item" class="dis-item"></discount-item>
                <mt-spinner type="triple-bounce"></mt-spinner>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data:function(){
        return {
            navList:["全部","美食","酒店","旅游","电影","休闲"],
            discountList:[],
            bgAndPos:false, //header背景和nav定位切换条件
            activeNav:"", //导航当前被点击对象
            test:"",
            acitveIndex:0 //导航当前高亮对象索引
        }
    },
    mounted:function(){
        let target = document.querySelector(".discount-container");
        target.addEventListener("scroll",this.pageScroll);
    },
    methods:{
        pageScroll:function(evt){
            let scrollTop = evt.target.scrollTop || evt.srcElement.scrollTop;
            if(scrollTop>220){
                this.bgAndPos = true;
            }else if(scrollTop<220){
                this.bgAndPos = false;
            }
        },
        loadMore:function(){
            this.proccessDislist();
        },
        proccessDislist:function(){
            let _this = this;
            axios.get(this.$url.discounts).then((res)=>{
                let data = res.data;
                _this.discountList.push(...data.discounts);
            }).catch((res)=>{
                if(res instanceof Error){
                    console.log(res.message);
                }else{
                    console.log(res.data);
                }
            });
        }
    },
    watch:{
        /**
         * 当点击的不是当前高亮对象，就清空列表数据，重新获取一次
         *  */
        activeNav:function(newval,oldval){
            if(this.acitveIndex!=newval.index){
                this.acitveIndex = newval.index; //保存当前被选菜单
                this.discountList = [];
                this.proccessDislist();
            }
        }
    }
}
</script>
<style scoped lang="scss">
*{margin:0;padding:0;}
.banner-img{font-size:0;max-height:100vw;overflow: hidden;border-bttom:1px solid #00ff00}
.banner-img img{width:100%;}
/deep/.discount-nav{background:#fa4a4a;}
/deep/.discount-nav li{color:rgba(255, 255, 255, 0.65);;position:relative;}
/deep/.discount-nav li.active{color:#fff;border-bottom:none;font-size:4.5vw;}
/deep/.discount-nav li.active::after{content:"";display: inline-block;position: absolute;bottom:2px;left:20%;right:20%;height:2px;border-radius: 2px;background-color:#fff;color:#fff;}
/* 返回按钮 */
.discount-back{display:flex;}
.discount-back p{flex:1;text-align: center;padding-right:6vw;font-weight: bold;font-size:6vw;color:#fff;}
.discount-header{position: fixed;top:0;right:0;height:13vw;left:0;text-align: left;padding:0 3vw;}
.header-bg{background-color:#fa4a4a;}
/deep/.sett-back{background-color:transparent;padding-right:4vw;border:none;color:#fff;box-shadow: none;}
/deep/.mint-button i{font-size:7vw;color:rgba(255,255,255,0.6)}
/deep/.mint-button:not(.is-disabled):active::after{opacity: 0;}
.dis-item{border-bottom:1px solid #eee;padding:0 3vw;}

.discount-container{height:100vh;overflow-y:scroll;}
.navlist-fixed{position:fixed;left:0;right:0;top:13vw;}
</style>


