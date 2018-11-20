<template>
    <div>
        <mt-header class="sett-header" fixed title="">
            <t-back-button slot="left">
                <mt-button class="sett-back" icon="back">我的收藏</mt-button>
            </t-back-button>
            <t-back-button slot="right">
                <mt-button>编辑</mt-button>
            </t-back-button>
        </mt-header>
        <tab-nav :navList="navList" v-model="activeNav" class="collection-nav"></tab-nav>
        <div class="collection-list">
            <div v-if="listMsg.length!=0&&activeNav.index!='2'">
                <good-item v-for="(item,index) in listMsg" :key="index" :msg="item"></good-item>
            </div>
            <div v-else-if="newsList.length!=0">
                <news-item v-for="(item,index) in newsList" :key="index" :msg="item"></news-item>
            </div>
            <none-content v-else :title="contitle" :tips="contips"></none-content>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data:function(){
        return {
            stars:"3.6",//评分
            navList:['商家','商品','内容'],
            activeNav:"0", //组件返回的是对象，访问当前被点击对象学历号用activeNav.index
            shopList:[], //商家收藏
            goodList:[], //商品收藏 
            newsList:[
                // {
                //     title:"为什么肯德基宁愿让顾客打包走，也不会赶走蹭坐的人？长见识了",
                //     author:"娱乐乐翻天"
                // }
            ], //内容收藏
            listMsg:[],
            contitle:"",
            contips:""
        }
    },
    created:function(){
        // 1、收藏商家
         axios.get(this.$url.shops).then((res)=>{
            let data = res.data;
            this.shopList = data.shops;
            // 首次进入页面显示的是商家收藏列表
            this.listMsg = this.shopList;
        }).catch((res)=>{
            if(res instanceof Error){
                console.log(res.message);
            }else{
                console.log(res.data);
            }
        });

        // 2、收藏商品
        this.collectionGoods();
    },
    methods:{
        collectionGoods:function(){
            axios.get(this.$url.goods).then((res)=>{
                let data = res.data;
                this.goodList = data.goods;
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
        activeNav:function(newVal){
            let obj = newVal;
            this.contitle = "暂无"+obj.val+"收藏";
            this.contips = "您可以将喜欢的"+obj.val+"收藏到这里";
            switch(obj.index){
                case "0":
                    this.listMsg = this.shopList;
                    break;
                case "1":
                   this.listMsg = this.goodList;
                    break;
                default:
            }
        }
    }
}
</script>
<style lang="scss" scoped>
a{text-decoration:none;}
*{margin:0;padding:0;}
/* 顶部导航条 */
.mint-header{background-color:#fff;height:13vw;border-bottom:1px solid #ddd;color:#555;font-size:4.4vw;font-weight:bold;padding:0 3vw;}
/deep/ .sett-header .mint-button-icon i{font-size: 6.5vw;}

/* 分类菜单 */
.collection-nav{margin-top: 13vw;}
/* 暂无收藏 */
.none-collection{margin-top:22vw;}
.none-collection img{width:40vw;}
.none-collection h2{color:#333;font-size:4.6vw;margin-top: 2vw;}
.none-collection p{font-size:4vw;margin-top: 0.2vw;color:#888;}
/* 随便逛逛 按钮 */
.view-btn{color:#25abb1;font-size:4vw;border:1px solid #25abb1;border-radius: 2px;box-shadow: 0 2px 3px rgba(0,0,0,0.2);background-color:#fff;margin-top:4vw;display:inline-block;padding:0 1.4vw;height:7.4vw;line-height: 8vw;}
</style>


