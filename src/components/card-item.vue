<template>
    <div class="item-container">
        <div class="item-up">
            <img src="../assets/imgs/swiper1.jpg" alt="">
            <p>{{msg.tips}}</p>
        </div>
        <div class="item-dw">
            <h2>{{msg.title}}</h2>
            <p>{{msg.content}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            itemMsg:{
                default:function(){
                    return {
                        title:"亲自福利",
                        content:"出门遛娃9.9元起",
                        tips:"陪孩子嬉戏"
                    }
                }
            }
        },
        data:function(){
            return {
                msg:this.itemMsg
            }
        },
        watch:{
            itemMsg:function(newVal){
                this.msg = newVal;
            }
        }
    }
</script>
<style lang="scss" scoped>
*{margin:0;padding:0;}
.item-container{margin:0 3vw;}
.item-up{width:50vw;height:32vw;position: relative;overflow: hidden;}
.item-up p{position: absolute;right:2vw;top:2vw;color:#fff;font-size:3vw;background-color:#272727;padding:0.5vw 1.5vw;border-radius: 0.8vw;}
.item-up img{width:100%;height:100%;}
.item-dw{background-color:#fff;padding:2vw;position: relative;z-index: 9;position: relative;}
.item-dw h2{color:#fff;font-size: 4vw;background-color:#f0380a;font-weight: normal;position: absolute;top:-2.6vw;left:2vw;padding:0 2vw 0.45vw;border-radius: 0.8vw;}
.item-dw p{font-size:3.2vw;color:3333;margin-top: 3.5vw;}
</style>
