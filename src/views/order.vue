<template>
    <t-page>
        <t-header-new :back='false' slot="header">
            <div slot="center" class="header" >订单</div>
        </t-header-new>
        <div slot="container">
            <t-tab checked-clazz='active' class="tab" v-model="selectedIndex">
                <div >123</div>
                <div>456</div>
                <div>456</div>
                <div>456</div>
                <div>456</div>
                <div>456</div>
                <div>456</div>
                <div>456</div>
                <div>456</div>
            </t-tab>
        </div>
    </t-page>
</template>

<script>
export default {
    data() {
        return {
            selectedIndex: 0
        }
    },
}
</script>

<style lang='scss' scoped>
@import '../style/color.scss';
.header{
    font-size: 5vw;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container{
    // tab开始
    .tab{
        div{
            height: 10vw;
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            border-bottom: 0.3vw solid $gray;
            padding-bottom: 0.4vw;
        }
        div.active{
            border-bottom: 0.5vw solid $primary-color;
            color: $primary-color;
            padding-bottom: 0vw;
        }
    }
    // tab结束
}
</style>
