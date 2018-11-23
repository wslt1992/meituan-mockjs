<template>
    <div class="item-container">
        <div class="item-l">
            <h2>{{msg.title.substr(0,10)}}</h2>
            <span>{{msg.tips.substr(0,12)}}</span>
            <div class="address">
                <p><b>￥</b>{{msg.price}}</p>
                {{msg.address.substr(0,8)}}
            </div>
        </div>
        <div class="item-r">
            <img src="../assets/imgs/card1.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            itemMsg:{
                default:function(){
                return {
                    title:"标题标题标题标题标题标题标题标题标题标题标题",
                    tips:"说明说明说明说明说明说明说明",
                    address:"地址地址地址地址地址地址地址",
                    price:"54",
                }
            }
            }
        },
        data() {
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

<style lang='scss' scoped>
*{margin:0;padding:0;box-sizing:border-box;}
.item-container{background-color:#fff;border-radius: 1vw;display: flex;height:30vw;}
.item-r{width:45vw;}
.item-r img{width:45vw;height:100%;}
.item-l{flex:1;padding:2vw;text-align:left;line-height:normal;}
.item-l h2{font-size:4.6vw;color:#333;}
.item-l span{font-size:3.2vw;color:#fdb754;border:1px solid #fcdcb0;padding:1px 7px;display: inline-block;border-radius: 4px;margin-top: 2vw;}
.address{display:flex;justify-content: space-between;margin-top: 4vw;font-size:3.4vw;color:#999;align-items: center;}
.address p{color:#fc9443;font-size: 6vw;font-weight: bold;}
.address p b{font-size: 4vw;}
</style>