<template>
    <div class="discovery-item-root" @click="show">
        <div class="title">
            大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店
        </div>
        <div class="imgs">
            <img src="../assets/imgs/shop.jpg" alt="">
            <img src="../assets/imgs/shop.jpg" alt="">
            <img src="../assets/imgs/shop.jpg" alt="">
        </div>
        <div class="tips">
            <span>米粒粒日记</span>
            <span>91.5万人看过</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                // default: 
            },
        },
        methods: {
            show() {
                console.log(111111111111111)
            }
        },
    }
</script>

<style lang="scss" scoped>
@import '../style/color.scss';
.discovery-item-root{
    display: flex;
    flex-direction: column;
    color:$font-color;
    align-items: stretch;
    text-align: start;
    border-bottom: 1px solid $font-third-color;
    margin: 0 2vw;
    >*{
        margin: 1.2vw 0;
    }
    .title{
        font-size: 4.5vw;
        font-weight: 600;
    }
    .imgs{
        display: flex;
        justify-content: space-around;
        img {
            width: 30vw;
            height: 20vw;
        }
    }
    
    .tips{
        color:$font-secondary-color;
        font-size: 3vw;
    }
}
</style>
