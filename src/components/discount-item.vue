<template>
    <div class="item">
        <div class="item-img">
            <img src="../assets/imgs/food1.jpg" alt="">
        </div>
        <div class="item-msg">
            <div class="item-msg-up">
                <h2>{{msg.title.substr(0,8)}}</h2>
                <p class="item-tips">{{msg.tips.substr(0,12)}}</p>
            </div>
            <div class="item-msg-dw">
                <p class="item-tips">
                    <span>{{msg.address.substr(0,12)}}</span>
                    <span>{{msg.num}}万人已买</span>
                </p>
                <div class="item-price">
                    <div>
                        <span class="discount-price"><b>￥</b>{{msg.disPrice}}</span>
                        <span class="original-price">￥{{msg.origPrice}}</span>
                        <i class="discount-icon">{{msg.discount}}折</i>
                    </div>
                    <button>立即购买</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        itemMsg:{
            default:function(){
                return {
                    title:"标题",
                    tips:"说明",
                    address:"地址",
                    disPrice:"5",
                    origPrice:"10",
                    num:"5.4",
                    discount:"5"
                }
            }
        }
    },
    data:function(){
        return{
            msg:this.itemMsg
        }
    },
    watch:{
        itemMsg:function(){
            this.msg = this.itemMsg;
            console.log("组件",this.msg);
        }
    }
}
</script>
<style lang="scss" scoped>
*{margin:0;padding:0;box-sizing:border-box;text-align:left;}
.item{display:flex;background-color:#fff;padding-top: 3vw;padding-bottom:3vw;}
.item-img img{width:22vw;height:22vw;}
.item-msg{margin-left:2vw;flex:1;}
.item-msg-up h2{color:#333;font-size: 4.8vw;margin-top: -4px;}
.item-tips{font-size: 3.2vw;color:#888;}
.item-msg-dw .item-tips,.item-price{display: flex;justify-content: space-between;align-items: center;}
.discount-price{color:#fa4a4a;font-weight: bold;font-size:4.6vw;}
.discount-price b{font-size:3vw;}
.original-price{color:#aaa;text-decoration:line-through;font-size: 3vw;}
.discount-icon{font-style:normal;font-size: 2.8vw;color:#fa4a4a;background-color:#fde7e7;padding:3px 6px 1px 9px;background-image:linear-gradient(135deg,#fff 50%,transparent 0),linear-gradient(45deg,#fff 50%,transparent 0);background-size:8.5px 8.5px;background-repeat:no-repeat;background-position:left top,bottom left;border-radius: 2px;}
button{border:none;color:#fff;font-size:4vw;padding:0.5vw 2.5vw 1vw;border-radius: 4vw;background-image:linear-gradient(90deg,#fa4a4a,#fa6d4a)}
</style>


