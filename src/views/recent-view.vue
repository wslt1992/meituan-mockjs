<template>
    <div class="view-container">
       <mt-header class="sett-header" fixed title="">
            <t-back-button slot="left">
                <mt-button class="sett-back" icon="back">最近浏览(6)</mt-button>
            </t-back-button>
            <t-back-button slot="right">
                <mt-button>编辑</mt-button>
            </t-back-button>
        </mt-header>
        <div class="view-list">
            <none-content></none-content>
            <!-- <good-item v-for="(item,index) in listMsg" :key="index" :msg="item"></good-item> -->
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            viewList:[]
        }
    }
}
</script>
<style scoped lang="scss">

</style>


