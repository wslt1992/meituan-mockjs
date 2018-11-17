<template>
    <div>
        <i v-for="{item,index} in stars" :key="index" class="iconfont icon-star"></i>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            stars:5
        }
    }
}
</script>
<style scoped>

</style>


