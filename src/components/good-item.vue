<template>
    <div class="item">
        <div class="item-l">
            <img class="item-img" src="../assets/imgs/shop.jpg" alt="">
        </div>
        <div class="item-r">
            <div class="item-r-title">
                 <h2>标题-------</h2>
                 <span>￥</span>
                 <b>3.7km</b>
            </div>
            <p>
                <star-level :score='3.7'></star-level>
                人均:￥55.0
            </p>
            <p>西乡&emsp;牛肉火锅</p>
        </div>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {

            }
        }
    }
</script>
<style lang="scss" scoped>
div,img,h2,span,b,p{margin:0;padding:0;box-sizing:border-box;}
.item{display:flex;flex-direction: row;padding:3vw;border-bottom:1px solid #eee;}
.item-l{margin-right:3vw;}
.item-img{width:25vw;height:25vw;}
.item-r{text-align: left;}
.item-r-title{display: flex;align-items: center;flex-direction: row;justify-content: space-between;}
.item-r-title h2{font-size: 5vw;color:#333;}
.item-r-title span{line-height:5vw;color:#fff;font-size: 3.8vw;background-color:#fa7166;border-radius: 3px;display: inline-block;width: 5vw; height: 5vw;text-align: center;}
.item-r-title b{display:inline-flex;font-size: 3.6vw;color:#999;margin-left: auto;font-weight: normal;}
.item-r p{font-size: 4vw;color:#777;margin-top: 2vw;display: inline-block;}
</style>
