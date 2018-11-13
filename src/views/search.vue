<template>
    <div>
        <lt-header>
            <div class="root">
                <i class="iconfont icon-sousuo"></i>
                <input type="text">
            </div>
        </lt-header>
    </div>
</template>

<script>
import ltHeader from '../components/lt-header'
    export default {
        components:{
            'lt-header':ltHeader
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
    input{
        border: none;
        outline: none;
    }
}
</style>