<template>
    <div class="classtify-item">
        <p @click="$global.toSearch" v-for="(item,index) in nameArr" :key="index">
            {{ item }}
        </p>
    </div>
</template>

<script>
    export default {
        props:['nameArr'],
        data() {
            return {
                // key: value
            }
        },
    }
</script>

<style lang='scss' scoped>
.classtify-item{
    display: flex;
    // flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    p{
        background-color: white;
        box-sizing: border-box;
        border: 1px solid #eee;
        margin: 0px;
        width: 25vw;
        height: 10vw;
        line-height: 10vw;
        color: #666;
        font-size: 4vw;
    }
}
</style>