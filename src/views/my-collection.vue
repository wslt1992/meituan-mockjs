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
            <good-item v-if="listMsg.length" v-for="(item,index) in listMsg" :key="index" :msg="item"></good-item>
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
            activeNav:"0",
            shopList:[ //商家收藏
                {
                    title:"三鼎牛肉火锅城（共乐店）",
                    stars:"3.5",//评分
                    address:"地址 分类",
                    distance:"4.2", // 距离
                    price:"55.0"
                },
                {
                    title:"三鼎牛肉火锅城（共乐店）",
                    stars:"3.5",//评分
                    address:"地址 分类",
                    distance:"4.2", // 距离
                    price:"55.0"
                },
                {
                    title:"三鼎牛肉火锅城（共乐店）",
                    stars:"3.5",//评分
                    address:"地址 分类",
                    distance:"4.2", // 距离
                    price:"55.0"
                }
            ],
            goodList:[//商品收藏
                {
                    title:"商品收藏",
                    stars:"3.5",//评分
                    address:"地址 分类",
                    distance:"4.2", // 距离
                    price:"55.0"
                }
            ], 
            contentList:[], //内容收藏
            listMsg:{},
            tabTitle:"商家"
        }
    },
    mounted:function(){
        this.listMsg = this.shopList;
        // this.changeListMsg(this.shopList);
    },
    methods:{
        // changeListMsg:function(newObj){
        //     this.listMsg = newObj;
        // }
    },
    watch:{
        listMsg:function(newVal){
             this.listMsg = newVal;
            //  this.changeListMsg(newVal);
        },
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
                case "2":
                    this.listMsg = this.contentList;
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


