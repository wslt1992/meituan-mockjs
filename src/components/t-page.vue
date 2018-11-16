<template>
    <div class="t-page-root">
        <div name='header'>
            <slot name='header'></slot>
        </div>
        <div name='container'>
            <slot name='container'></slot>
        </div>
        <div class="footer">
            <slot name='footer'></slot>
        </div>
        
        
    </div>
</template>

<script>
    export default {
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
    .header{
        height: 20vw;
        width: 100%;
    }
    .container{
        flex-grow: 1;
    }
    .footer{
        height: 20vw;
        width: 100%;
    }

}
    
</style>