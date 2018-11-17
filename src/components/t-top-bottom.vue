<template>
    <div class="t-top-bottom-root">
        <div name='top'>
            <slot name='top'></slot>
        </div>
        <div name='bottom'>
            <slot name='bottom'></slot>
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
    display: inline-flex;
    flex-direction: column;
    .left{
        
    }
    .right{
        
    }
    

}
    
</style>