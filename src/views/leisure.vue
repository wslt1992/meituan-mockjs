<template>
    <div class="discount-container">
        <div 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infnite-scroll-distance="50">
        <div class="discount-header">
            <t-back-button class="discount-back"  slot="left">
                <mt-button class="sett-back" icon="back"></mt-button>
                <p>有格调</p>
            </t-back-button>
        </div>
        <tab-nav class="discount-nav" v-model="activeNav" :acitveIndex="acitveIndex" :navList="navList"></tab-nav>
        <div class="discount-list">
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
            navList:["精选","聚餐","丽人","电影演出","旅游"],
            activeNav:"", //导航当前被点击对象
            acitveIndex:0 //导航当前高亮对象索引
        }
    },
    methods:{
        loadMore:function(){
            this.proccessDislist();
        },
        proccessDislist:function(){
            let _this = this;
            axios.get(this.$url.discounts).then((res)=>{
                let data = res.data;
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
                // this.discountList = [];
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


