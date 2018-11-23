<template>
    <div class="leisure-container">
        <div v-infinite-scroll="loadMore"  infinite-scroll-disabled="loading"   infnite-scroll-distance="50">
            <div class="leisure-header">
                <t-back-button class="leisure-back"  slot="left">
                    <mt-button class="sett-back" icon="back"></mt-button>
                    <p>有格调</p>
                </t-back-button>
                <tab-nav class="leisure-nav" v-model="activeNav" :acitveIndex="acitveIndex" :navList="navList"></tab-nav>
            </div>
            <div class="leisure-content">
                <div class="leisure-card">
                    <div class="card-unit">
                        <img src="../assets/imgs/card1.jpg" alt="">
                    </div>
                    <div class="card-unit">
                        <img src="../assets/imgs/card2.jpg" alt="">
                    </div>
                </div>
                <div class="leisure-list">
                    <leisure-item></leisure-item>
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
            acitveIndex:0 //导航当前高亮对象索引
        }
    },
    methods:{
        loadMore:function(){
            this.proccessDislist();
        },
        proccessDislist:function(){
            let _this = this;
            axios.get(this.$url.leisures).then((res)=>{
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
                // this.leisureList = [];
                this.proccessDislist();
            }
        }
    }
}
</script>
<style scoped lang="scss">
*{margin:0;padding:0;}
/deep/.leisure-nav{background:transparent;}
/deep/.leisure-nav li{color:#c28e45;;position:relative;}
/deep/.leisure-nav li.active{color:#fcbd65;border-bottom:none;font-size:4.5vw;}
/deep/.leisure-nav li.active::after{content:"";display: inline-block;position: absolute;bottom:2px;left:20%;right:20%;height:2px;border-radius: 2px;background-color:#fcbd65;}
/* 返回按钮 */
.leisure-back{display:flex;}
.leisure-back p{flex:1;text-align: center;padding-right:6vw;font-weight: bold;font-size:6vw;color:#fab452;text-shadow:1px 1px 0 #7c4e0c,2px 2px 0 #6e450a,3px 3px 0 #643d07;}
.leisure-header{position: fixed;top:0;right:0;left:0;text-align: left;padding:0 3vw;background-color:#1f1f1f;}
/deep/.sett-back{background-color:transparent;padding-right:4vw;border:none;color:#c28e45;box-shadow: none;}
/deep/.mint-button i{font-size:7vw;color:rgba(253, 200, 127,0.5)}
/deep/.mint-button:not(.is-disabled):active::after{opacity: 0;}

.leisure-container{height:100vh;overflow-y:scroll;background-image:linear-gradient(180deg,#1f1f1f 35vw,transparent 65vw);}

.leisure-content{margin-top: 33vw;}

.leisure-card{margin:0 2vw;display:flex;justify-content: space-between;}
.card-unit{height:30vw;border-radius: 2vw;width:48.8%;filter:drop-shadow(0 2px 3px rgba(0,0,0,0.3))}
.card-unit img{width:100%;height:100%;border-radius: 1vw;}

.leisure-list{margin-top: 20px;}
</style>


