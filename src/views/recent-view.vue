<template>
    <div class="view-container">
       <mt-header class="sett-header" fixed title="">
            <t-back-button slot="left">
                <mt-button class="sett-back" icon="back">最近浏览(6)</mt-button>
            </t-back-button>
            <t-back-button slot="right">
                <mt-button>编辑</mt-button>
            </t-back-button>
        </mt-header>
        <div class="view-list">
            <div
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="50">
                <good-item v-for="(item,index) in viewList" :key="index" :msg="item"></good-item>
                <mt-spinner type="triple-bounce"></mt-spinner>
            </div>
            
            <!-- <div v-if="viewList.length!=0">
                <good-item v-for="(item,index) in viewList" :key="index" :msg="item"></good-item>
            </div>
            <div v-else>
                <none-content title="最近还没有浏览" tips="" btntxt="去逛逛吧~~"></none-content>
            </div> -->
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data:function(){
        return {
            viewList:[],
        }
    },
    mounted:function(){
         this.processViewList();
    },
    methods:{
        loadMore:()=>{
            this.processViewList();
        },
        processViewList:function(){
            axios.get(this.$url.shops).then((res)=>{
                let data = res.data;
                console.log(data);
                this.viewList.push(...data.shops);
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
a{text-decoration:none;}
*{margin:0;padding:0;}
/* 顶部导航条 */
.mint-header{background-color:#fff;height:13vw;border-bottom:1px solid #ddd;color:#555;font-size:4.4vw;font-weight:bold;padding:0 3vw;}
/deep/ .sett-header .mint-button-icon i{font-size: 6.5vw;}
.view-list{margin-top:13vw;}
/* 加载动画 */
.show-load{margin-top: 10vw;display: inline-block;}
</style>


