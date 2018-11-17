<template>
    <div class="t-left-right-root">
        <div name='left'>
            <slot name='left'></slot>
        </div>
        <div name='right'>
            <slot name='right'></slot>
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
    .left{
        
    }
    .right{
        
    }
    

}
    
</style>