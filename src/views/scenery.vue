<template>
    <div class="scenery-container">
        <div v-infinite-scroll="loadMore"  infinite-scroll-disabled="loading"   infnite-scroll-distance="50">
            <t-back-button class="scenery-back" :class="{'bg-blue':backbg}"  slot="left">
                <mt-button class="sett-back" icon="back"></mt-button>
                <p>周末去哪儿</p>
            </t-back-button>
            <div class="scenery-scroll">
                <!-- <card-item></card-item>
                <card-item></card-item>
                <card-item></card-item>
                <card-item></card-item> -->
                <card-item v-for="(item,index2) in packageList" :key="index2" :itemMsg="item"></card-item>
            </div>
            <tab-nav class="scenery-nav" :class="{'nav-pos':navpos}" v-model="activeNav" :acitveIndex="acitveIndex" :navList="navList"></tab-nav>
            <div class="scenery-content">
                <div class="scenery-list">
                    <leisure-item class="leisure-item" v-for="(item,index) in sceneryList" :key="index" :itemMsg="item"></leisure-item>
                </div>
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
            acitveIndex:0, //导航当前高亮对象索引
            sceneryList:[], //列表
            packageList:[], //套餐列表
            navpos:false, //菜单定位
            backbg:false //导航栏背景色
        }
    },
    created:function(){
        this.proccessPackage();
    },
    mounted:function(){
        let target = document.querySelector(".scenery-container");
        target.addEventListener("scroll",this.pageScroll);
    },
    methods:{
        proccessPackage:function(){
            let _this = this;
            axios.get(this.$url.scenerys).then((res)=>{
                let data = res.data;
                _this.packageList.push(...data.scenerys);
            }).catch((res)=>{
                if(res instanceof Error){
                    console.log(res.message);
                }else{
                    console.log(res.data);
                }
            });
        },
         pageScroll:function(evt){
            let scrollTop = evt.target.scrollTop || evt.srcElement.scrollTop;
            if(scrollTop>10){this.backbg = true}else if(scrollTop<10){this.backbg = false}
            if(scrollTop>160){
                this.navpos = true;
            }else if(scrollTop<160){
                this.navpos = false;
            }
        },
        loadMore:function(){
            this.proccessDislist();
        },
        proccessDislist:function(){
            let _this = this;
            axios.get(this.$url.leisures).then((res)=>{
                let data = res.data;
                _this.sceneryList.push(...data.leisures);
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
                this.sceneryList = [];
                this.proccessDislist();
            }
        }
    }
}
</script>
<style scoped lang="scss">
*{margin:0;padding:0;}
/deep/.scenery-nav{background:transparent;transition: background-color 0.5s;z-index:999;}
/deep/.scenery-nav li{color:#666;;position:relative;}
/deep/.scenery-nav li.active{color:#333;border-bottom:none;font-size:4.5vw;font-weight: bold}
/deep/.scenery-nav li.active::after{content:"";display: inline-block;position: absolute;bottom:2px;left:20%;right:20%;height:2px;border-radius: 2px;background-color:#17afeb;}
/* 返回按钮 */
.scenery-back{display:flex;position: fixed;left:0;right:0;top:0;z-index:99999;transition:background-color 0.5s;}
.scenery-back p{flex:1;text-align: center;align-self:center;;padding-right:6vw;font-weight: bold;font-size:5.4vw;color:#fff;text-shadow:1px 1px 0 #2980c7,2px 2px 0 #2980c7,3px 3px 0 #383838;}
/deep/.sett-back{background-color:transparent;padding-right:4vw;border:none;color:#fff;box-shadow: none;height:13vw;}
/deep/.mint-button i{font-size:7vw;color:#fff}
/deep/.mint-button:not(.is-disabled):active::after{opacity: 0;}

.scenery-container{height:100vh;overflow-y:scroll;text-align: left;background-image:linear-gradient(180deg,rgba(35, 168, 245, 0.6) 30vw,transparent 60vw),url(../assets/imgs/scenery_bg.png);background-repeat: no-repeat;background-size:100% 100%,100% auto;}
.scenery-scroll{width:100%;overflow-x: scroll;display: flex;margin-top: 13vw;}
.scenery-list{margin:0 3vw;}
.scenery-content{margin-top: 4vw;text-align: center;}
.scroll-item{width:30vw;border:1px solid rgb(231, 94, 94);margin:0 10vw;height:40vw;}
.leisure-item{margin-bottom:2vw;}
.bg-blue{background-color:#fff;}
/deep/.scenery-back.bg-blue .mint-button i{color:#333}
.scenery-back.bg-blue p{text-shadow: none;color:#333;}
.nav-pos{position: fixed;left:0;right:0;top:13vw;background-color: #fff;}
</style>


