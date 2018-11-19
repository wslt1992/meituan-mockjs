<template>
    <div class="item">
        <div class="item-l">
            <img class="item-img" src="../assets/imgs/shop.jpg" alt="">
        </div>
        <div class="item-r">
            <h2>{{itemMsg.title.length<23 ? itemMsg.title:itemMsg.title.substr(0,23)+"..."}}</h2>
            <p>{{itemMsg.author}}</p>
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
                        author:"新闻内容"
                    }
                }
            }
        },
        data:function(){
            return {
                itemMsg:this.msg
            }
        },
         /**
         * 在父组件值发生变化后，子组件刷新
         * */
        watch:{
            msg:function(){
                this.itemMsg = this.msg;
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
.item-r h2{font-size: 4.8vw;color:#333;line-height: 6vw;}
.item-r p{font-size: 3.6vw;color:#999;margin-top: 1.4vw;}
</style>
