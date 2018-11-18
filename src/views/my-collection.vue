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
        <star-level :score="stars"></star-level>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            stars:"3.6",//评分
            navList:['全部','商品','内容'],
            activeNav:"0"
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


