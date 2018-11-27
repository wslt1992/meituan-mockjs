<template>
    <div>
        <div class="root" @click="toSearch">
            <!-- <router-link to="/search"> -->
            <div>
                <i class="iconfont icon-sousuo"></i>
                <span>{{keyword}}</span>
            </div>
            
            <!-- </router-link> -->
        </div>
        
    </div>
</template>

<script>
/**
 * 搜索条，点击后跳转到search.vue
 */
    export default {
        props: {
            keyword: {
                type: String,
                default: '请输入商家名、品类或商圈名',
            },
        },
        methods: {
            toSearch() {
                this.$global.toSearch(this.keyword==='请输入商家名、品类或商圈名'?undefined:this.keyword)
            }
        },
        data:function() {
            return {
                // key: value
            }
        },

    }
</script>

<style lang='scss' scoped>
.root{
    // border: 1px solid #ddd;
    display: inline-block;
    font-size: 4vw;
    text-align: center;
    color: #999;
    width: 70vw;
    height: 10vw;
    line-height: 10vw;
    border-radius: 6vw;
    background-color:#f5f5f5;
   
    >div{
        margin: auto;
        text-align: center;
        width: 85%;
        overflow: hidden;
         word-break:keep-all;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis; 
    }
    // a{
    //     color: #999;
    //     text-decoration: none;
    // }
    // span{
    // }
}
</style>