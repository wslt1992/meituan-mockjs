<template>
    <div>
        <div class="header-root">
            <mt-header  title="全部分类">
                <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
                <!-- <mt-button icon="more" slot="right"></mt-button> -->
            </mt-header>
        </div>
        <div class="center">
            <slot ></slot>
        </div>
        
    </div>
</template>

<script>
/**
 * 引用了mint-ui的mt-header
 */
    export default {
        
    }
</script>

<style lang='scss' scoped>
.header-root{
    // height: 20vw;
    display: flex;
    flex-direction: column;
    background-color: #eee;
    position: relative;
    .mint-header{
        height: 16vw;
    }
}
.center{
        position: absolute;
        top:3vw;
        left:50%;
        // margin-top: 
        margin-left: -31vw;
    }
</style>