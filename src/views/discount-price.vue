<template>
    <div class="discount-container">
        <div 
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infnite-scroll-distance="50">
        <div class="test" :class="{'header-bg':headerBg}">
            <t-back-button class="discount-back"  slot="left">
                <mt-button class="sett-back" icon="back"></mt-button>
            </t-back-button>
        </div>
        <div class="banner-img">
            <img class="banner-img" src="../assets/imgs/banner1.jpg" alt="">
        </div>
        <tab-nav class="discount-nav" :navList="navList"></tab-nav>
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
            headerBg:false
        }
    },
    mounted:function(){
        // this.proccessDislist();
        let target = document.querySelector(".discount-container");
        target.addEventListener("scroll",this.pageScroll);
    },
    created:function(){
        
    },
    methods:{
        pageScroll:function(evt){
            // let top = document.documentElement.scrollTop||document.body.scrollTop;
            // if(top>310){
            //     this.headerBg = true;
            //     console.log(this.headerBg,">");
            // }else{
            //     this.headerBg = false;
            //     console.log(this.headerBg,"<");
            // }
            // console.log(top);
            let scrollTop = evt.target.scrollTop || evt.srcElement.scrollTop;
            console.log(scrollTop);
            if(scrollTop>290){
                this.headerBg = true;
            }else if(scrollTop<290){
                this.headerBg = false;
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
// .discount-back{position: fixed;top:0;right:0;height:13vw;left:0;background-color:transparent;text-align: left;padding:0 3vw;}
// .discount-back.header-bg{background-color:#fa4a4a;}
.test{position: fixed;top:0;right:0;height:13vw;left:0;text-align: left;padding:0 3vw;}
.header-bg{background-color:#fa4a4a;}
/deep/.sett-back{background-color:transparent;padding-right:4vw;border:none;color:#fff;box-shadow: none;}
/deep/.mint-button i{font-size:7vw;color:rgba(255,255,255,0.6)}
/deep/.mint-button:not(.is-disabled):active::after{opacity: 0;}
.dis-item{border-bottom:1px solid #eee;padding:0 3vw;}

.discount-container{height:100vh;overflow-y:scroll;}
</style>


