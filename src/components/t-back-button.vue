<template>
    <div @click="back">
        <slot></slot>
    </div>
</template>

<script>
/**
 * 返回上一层的按钮
 */
    export default {
        methods: {
            back() {
                this.$global.isRouterForward = false;
                this.$router.back()
            }
        },
    }
</script>

<style scoped>

</style>