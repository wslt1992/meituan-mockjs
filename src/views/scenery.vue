<template>
    <div class="scenery-container">
        <div v-infinite-scroll="loadMore"  infinite-scroll-disabled="loading"   infnite-scroll-distance="50">
            <t-back-button class="scenery-back"  slot="left">
                <mt-button class="sett-back" icon="back"></mt-button>
                <p>周末去哪儿</p>
            </t-back-button>
                
            <tab-nav class="scenery-nav" v-model="activeNav" :acitveIndex="acitveIndex" :navList="navList"></tab-nav>
            <div class="scenery-content">
                
                <div class="scenery-list">
                    <!-- <scenery-item class="scenery-item" v-for="(item,index) in sceneryList" :key="index" :itemMsg="item"></scenery-item> -->
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
            sceneryList:[] //列表
        }
    },
    methods:{
        loadMore:function(){
            this.proccessDislist();
        },
        proccessDislist:function(){
            let _this = this;
            axios.get(this.$url.scenerys).then((res)=>{
                let data = res.data;
                _this.sceneryList.push(...data.scenerys);
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
/deep/.scenery-nav{background:transparent;}
/deep/.scenery-nav li{color:#666;;position:relative;}
/deep/.scenery-nav li.active{color:#333;border-bottom:none;font-size:4.5vw;}
/deep/.scenery-nav li.active::after{content:"";display: inline-block;position: absolute;bottom:2px;left:20%;right:20%;height:2px;border-radius: 2px;background-color:#333;}
/* 返回按钮 */
.scenery-back{display:flex;}
.scenery-back p{flex:1;text-align: center;padding-right:6vw;font-weight: bold;font-size:6vw;color:#fff;text-shadow:1px 1px 0 #2980c7,2px 2px 0 #2980c7,3px 3px 0 #383838;}
/deep/.sett-back{background-color:transparent;padding-right:4vw;border:none;color:#fff;box-shadow: none;}
/deep/.mint-button i{font-size:7vw;color:#fff}
/deep/.mint-button:not(.is-disabled):active::after{opacity: 0;}

.scenery-container{height:100vh;overflow-y:scroll;text-align: left;background-image:linear-gradient(180deg,rgba(35, 168, 245, 0.6) 30vw,transparent 60vw),url(../assets/imgs/scenery_bg.png);background-repeat: no-repeat;background-size:100% 100%,100% auto;}
</style>


