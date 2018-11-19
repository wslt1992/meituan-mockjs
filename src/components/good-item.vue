<template>
    <div class="item">
        <div class="item-l">
            <img class="item-img" src="../assets/imgs/shop.jpg" alt="">
        </div>
        <div class="item-r">
            <div class="item-r-title">
                 <h2>{{itemMsg.title}}</h2>
                 <span>￥</span>
                 <b>{{itemMsg.distance}}km</b>
            </div>
            <p>
                <star-level class="item-score" :score='itemMsg.stars'></star-level>
                人均:￥{{itemMsg.distance}}
            </p>
            <p>{{itemMsg.address}}</p>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            msg:{
                default:function(){
                    return {
                        title:"标题",
                        stars:"3.5",//评分
                        address:"地址 分类",
                        distance:"4.2", // 距离
                        price:"55.0"
                    }
                }
            }
        },
        data:function(){
            return {
                itemMsg:this.msg
            }
        }
    }
</script>
<style lang="scss" scoped>
div,img,h2,span,b,p{margin:0;padding:0;box-sizing:border-box;}
.item{display:flex;flex-direction: row;padding:3vw;border-bottom:1px solid #eee;background-color:#fff;border-bottom:1px solid #eee;}
.item-l{margin-right:3vw;font-size:0;}
.item-img{width:23vw;height:23vw;}
.item-r{text-align: left;flex:1;}
.item-r-title{display: flex;align-items: center;flex-direction: row;justify-content: space-between;}
.item-r-title h2{font-size: 5vw;color:#333;}
.item-r-title span{line-height:5vw;color:#fff;font-size: 3.8vw;background-color:#fa7166;border-radius: 1px;display: inline-block;width: 4vw; height: 4.6vw;text-align: center;margin-left:3px;}
.item-r-title b{display:inline-flex;font-size: 3.6vw;color:#999;margin-left: auto;font-weight: normal;}
.item-r p{font-size: 3.6vw;color:#999;margin-top: 2vw;}
/deep/ .item-score i{font-size: 3.4vw;}
</style>
