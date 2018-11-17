<template>
    <ul class="list-box"> 
        <li v-for="item in lists" :style="{'width':listLen}">
            <i  class="iconfont txt-transparent" :class="item.icon"></i>
            <p>{{item.content}}</p>
            <b v-if="item.tips">{{item.tips}}</b>
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        listMsg:{
            default:{
                liW:"25%",
                lists:[{
                    icon:'icon-star',
                    iconColor:'linear135-orange',
                    content:"我的钱包",
                    tips:"提示"
                },
                {
                    icon:'icon-xiaoxi',
                    iconColor:'linear135-orange',
                    content:"红包/卡券",
                    tips:""
                }, {
                    icon:'icon-xiaoxi',
                    iconColor:'linear135-orange',
                    content:"余额",
                    tips:""
                }, {
                    icon:'icon-xiaoxi',
                    iconColor:'linear135-orange',
                    content:"美团信用卡",
                    tips:""
                }, {
                    icon:'icon-xiaoxi',
                    iconColor:'linear135-orange',
                    content:"理财",
                    tips:""
                }, {
                    icon:'icon-xiaoxi',
                    iconColor:'linear135-orange',
                    content:"手机充值",
                    tips:""
                }]
            }
        }
    },
    data:function(){
        return {
            lists:this.listMsg.lists,
            listLen:this.listMsg.liW
        }
    }
}
</script>

<style scoped>
*{margin:0;padding:0;}
li{list-style:none;}
a{text-decoration:none;}
.line::after{border-bottom:1px solid #ddd;content:"";display:block;height:0;position:absolute;bottom:0;right:3vw;left:3vw;transform:scaleY(0.5);}

/* 字体颜色透明 */
.txt-transparent{-webkit-background-clip:text;-webkit-text-fill-color: transparent;}
/* 135deg渐变色 */
.linear135-red{background-image:linear-gradient(135deg,#fb8297,#e9516c);}
.linear135-green{background-image:linear-gradient(135deg,#03ebd8,#09b8b8);}
.linear135-blue{background-image:linear-gradient(135deg,#7dc5fe,#68acec);}
.linear135-orange{background-image:linear-gradient(135deg,#ffbb86,#fc9443);}

/* 投影 */
.red-shadow{filter:drop-shadow(1px 1px 1px rgba(250,94,119,0.3));}
.blue-shadow{filter:drop-shadow(1px 1px 1px rgba(104,172,236,0.3));}
.green-shadow{filter:drop-shadow(1px 1px 1px rgba(12,213,187,0.3));}

/* 列表 */
.list-box{display:flex;flex-direction:row;flex-wrap:wrap;position:relative;padding-top:4vw;}
.list-box li{margin-bottom:5vw;position:relative;}
.list-box li i{font-size:6.4vw;display:inline-block;color:#999;display:flex;justify-content: center;}
.list-box li p{color:#333;font-size:3.2vw;margin-top:2vw;}
.list-box li b{display:inline-block;padding:0.4vw 1.3vw;background-image:linear-gradient(90deg,#ff4548,#fe4b44);color:#ffffff;font-size:1.8vw;border-radius:3vw;text-align:center;position:absolute;left:55%;top:-1.4vw;}
</style>
