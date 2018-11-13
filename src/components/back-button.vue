<template>
    <div @click="$router.go(-1)">
        <slot></slot>
    </div>
</template>

<script>
/**
 * 返回上一层的按钮
 */
    export default {
        
    }
</script>

<style scoped>

</style>