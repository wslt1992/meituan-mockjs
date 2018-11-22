<template>
    <div class="discount-container">
        <t-back-button class="discount-back" slot="left">
            <mt-button class="sett-back" icon="back"></mt-button>
        </t-back-button>
        <div class="banner-img">
            <img class="banner-img" src="../assets/imgs/banner1.jpg" alt="">
        </div>
        <tab-nav class="discount-nav" :navList="navList"></tab-nav>
        <div class="discount-list">
            <discount-item class="dis-item"></discount-item>
            <discount-item class="dis-item"></discount-item>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data:function(){
        return {
            navList:["全部","美食","酒店","旅游","电影","休闲"]
        }
    },
    mounted:function(){
        this.proccessDislist();
    },
    methods:{
        proccessDislist:function(){
            axios.get(this.$url.discounts).then((res)=>{
                console.log(res,"0000");
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
.banner-img{font-size:0;}
.banner-img img{max-width:100%;}
/deep/.discount-nav{background:#fa4a4a;}
/deep/.discount-nav li{color:rgba(255, 255, 255, 0.65);;position:relative;}
/deep/.discount-nav li.active{color:#fff;border-bottom:none;font-size:4.5vw;}
/deep/.discount-nav li.active::after{content:"";display: inline-block;position: absolute;bottom:2px;left:20%;right:20%;height:2px;border-radius: 2px;background-color:#fff;color:#fff;}
/* 返回按钮 */
.discount-back{position: fixed;top:0;right:0;height:13vw;left:0;background-color:transparent;text-align: left;padding:0 3vw;}
/deep/.sett-back{background-color:transparent;padding-right:4vw;border:none;color:#fff;box-shadow: none;}
/deep/.mint-button i{font-size:7vw;color:rgba(255,255,255,0.6)}
/deep/.mint-button:not(.is-disabled):active::after{opacity: 0;}
.discount-list{}
.dis-item{border-bottom:1px solid #eee;padding:0 3vw;}
</style>


