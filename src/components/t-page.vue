<template>
    <div class="t-page-root">
        <div class='header'>
            <slot name='header'></slot>
        </div>
        <div class='container'>
            <slot name='container'></slot>
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
    .header{
        height: 20vw;
        width: 100%;
    }
    .container{
        width: 100%;
        flex-grow: 1;
        overflow-y: scroll;
    }
    .footer{
        // height: 20vw;
        width: 100%;
    }

}
    
</style>