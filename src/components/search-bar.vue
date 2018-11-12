<template>
    <div>
        <div class="root">
            <router-link to="/search">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索bar</span>
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
    font-size: 4vw;
    text-align: center;
    color: #999;
    background-color: #fff;
    width: 60vw;
    height: 8vw;
    line-height: 8vw;
    border-radius: 4vw;
    a{
        color: #999;
        text-decoration: none;
    }
}
</style>