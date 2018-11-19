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
            <div v-else>
                <img src="" alt="">
                <h2>暂无{{tabTitle}}收藏</h2>
                <p>您可以将喜欢的{{tabTitle}}收藏到这里</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            stars:"3.6",//评分
            navList:['商家','商品','内容'],
            activeNav:"0", //组件返回的是对象，访问当前被点击对象学历号用activeNav.index
            shopList:[ //商家收藏
                {
                    title:"三鼎牛肉火锅城(共乐店)",
                    stars:"3.5",//评分
                    address:"地址 分类",
                    distance:"4.2", // 距离
                    averageConsume:"55.0"
                },
                {
                    title:"三鼎牛肉火锅城（共乐店）",
                    stars:"3.5",//评分
                    address:"地址 分类",
                    distance:"4.2", // 距离
                    averageConsume:"55.0"
                },
                {
                    title:"三鼎牛肉火锅城（共乐店）",
                    stars:"3.5",//评分
                    address:"地址 分类",
                    distance:"4.2", // 距离
                    averageConsume:"55.0"
                }
            ],
            goodList:[//商品收藏
                {
                    title:"牛益广牛肉火锅",
                    stars:"",//评分
                    address:"",
                    distance:"0.5", // 距离
                    averageConsume:"",
                    discountPrice:"18.8",
                    originalPrice:31,
                    details:"单人工作餐，包间免费，免预约"
                }
            ], 
            newsList:[
                // {
                //     title:"为什么肯德基宁愿让顾客打包走，也不会赶走蹭坐的人？长见识了",
                //     author:"娱乐乐翻天"
                // }
            ], //内容收藏
            listMsg:{},
            tabTitle:"商家"
        }
    },
    created:function(){
        this.listMsg = this.shopList;
    },
    watch:{
        activeNav:function(newVal){
            let obj = newVal;
            this.tabTitle = obj.val;
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
/* 顶部导航条 */
.mint-header{background-color:#fff;height:13vw;border-bottom:1px solid #ddd;color:#555;font-size:4.4vw;font-weight:bold;}
/deep/ .sett-header .mint-button-icon i{font-size: 6.5vw;}

/* 分类菜单 */
.collection-nav{margin-top: 13vw;}
</style>


