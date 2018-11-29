<template>
    <div class="t-page-root">
        <div class='header'>
            <slot name='header'></slot>
        </div>
        <div class='top-fix'>
            <slot name='top-fix'></slot>
        </div>
        <div class='container'>
            <slot name='container'></slot>
        </div>
        <div class='bottom-fix'>
            <slot name='bottom-fix'></slot>
        </div>
        <div class="footer">
            <slot name='footer'></slot>
        </div>
        
        
    </div>
</template>

<script>
    export default {
        props:{
            
        },
        data() {
            return {
                // key: value
            }
        },
    }
</script>

<style lang='scss' scoped>
.t-page-root{
    display: flex;
    flex-direction: column;
    height: 100%;
    // height: 100vh;//不可以设置，设置后，部分也没有100vh高。让父为100vh高，所以设置app的改的呀
    .header{
        width: 100%;
    }
    .container{
        width: 100%;
        flex-grow: 1;
        // overflow: hidden;
        overflow: scroll;
        height: 100%;
    }
    .footer{
        width: 100%;
    }

}
    
</style>