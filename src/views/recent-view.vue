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
            <!-- <good-item v-for="(item,index) in listMsg" :key="index" :msg="item"></good-item> -->
            <none-content title="最近还没有浏览" tips="" btntxt="去逛逛吧~~"></none-content>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            viewList:[]
        }
    },
    mounted:function(){
        
    }
}
</script>
<style scoped lang="scss">
a{text-decoration:none;}
*{margin:0;padding:0;}
/* 顶部导航条 */
.mint-header{background-color:#fff;height:13vw;border-bottom:1px solid #ddd;color:#555;font-size:4.4vw;font-weight:bold;padding:0 3vw;}
/deep/ .sett-header .mint-button-icon i{font-size: 6.5vw;}
</style>


