<template>
    <div>
        <lt-header>
            <div class="search-input">
                <i class="iconfont icon-sousuo"></i>
                <input type="text">
            </div>
        </lt-header>
        <div class="content">
            <div>
                24242
            </div>
        </div>
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
.search-input{
    // border: 1px solid #ddd;
    font-size: 4vw;
    text-align: center;
    color: #999;
    background-color: #fff;
    width: 70vw;
    height: 10vw;
    line-height: 10vw;
    border-radius: 5vw;
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