
<template>
    <div class="lt-header-root">
        <div class="header">
            <mt-header  title="">
                <!-- <slot name='left' slot="left"></slot> -->
                <slot name='left' slot="left"><mt-button icon="back" @click="$router.go(-1)">返回</mt-button></slot>
                <slot name="right" slot="right"></slot>
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
    接收两个子slot，默认为center，另一个需要接收name='right'
 */
    export default {
        
    }
</script>

<style lang='scss' scoped>
.lt-header-root{
    position: relative;
    .header{
    // height: 20vw;
    display: flex;
    flex-direction: column;
    background-color: #eee;
    position: relative;
    .mint-header{
        height: 16vw;
    /deep/ .mintui.mintui-back{
                font-size: 6vw;
            }
    }
    
}

.center{
        position: absolute;
        top:3vw;
        left:50%;
        // margin-top: 
        margin-left: -27vw;
    }
}



</style>