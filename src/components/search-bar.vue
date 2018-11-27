<template>
    <div>
        <div class="root">
            <router-link to="/search">
            <i class="iconfont icon-sousuo"></i>
            <span>请输入商家名、品类或商圈名</span>
            </router-link>
        </div>
        
    </div>
</template>

<script>
/**
 * 搜索条，点击后跳转到search.vue
 */
    export default {
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
    a{
        color: #999;
        text-decoration: none;
    }
}
</style>