<template>
    <t-page>
        <t-header-new :back='false' slot="header">
            <div slot="center" class="header" >订单</div>
        </t-header-new>
        <div slot="container">
            
        </div>
    </t-page>
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

<style scoped>
.header{
    font-size: 5vw;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
