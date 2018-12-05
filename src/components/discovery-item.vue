<template>
    <div class="discovery-item-root" @click="show">
        <div class="title">
            {{item.title}}
        </div>
        <div class="imgs">
            <img v-for="img in item.imgs" :key="img.id" :src="img"/>
        </div>
        <div class="tips">
            <span>{{item.author}}</span>
            <span>{{item.viewCount}}人看过</span>
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
    color:$color-555;
    align-items: stretch;
    text-align: start;
    border-bottom: 1px solid $color-eee;
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
        img:first-child:nth-last-child(1) {
            width: 100%;
            height: 40vw;
        }
        img:first-child:nth-last-child(1) ~ img{
            width: 100%;
            height: 40vw;
        }
        img:first-child:nth-last-child(3) {
            width: 30vw;
            height: 20vw;
        }
        img:first-child:nth-last-child(3) ~ img{
            width: 30vw;
            height: 20vw;
        }
    }
    
    .tips{
        color:$color-aaa;
        font-size: 3vw;
    }
}
</style>
