<template>
    <div class="ad-contanier">
        <router-link :to="topath">
            <h2>{{adTitle}}</h2>
            <p>{{content}}</p>
            <span>{{type}}</span>
            <button class="pay-btn" v-if="showBtn">{{btntxt}}</button>
            <img class="ad-img" src="../assets/imgs/shop.jpg" alt="">
        </router-link>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            default:"标题"
        },
         content:{
            default:"内容"
        },
         type:{
            default:"类型"
        },
         btntxt:{
            default:"抢购"
        },
         topath:{
            default:"/"
        },
        showBtn:{
            default:true
        }
    },
    data:function(){
        return {
            adTitle:this.title
        }
    }
}
</script>
<style lang="scss" scoped>
div,h2,a,p,span,img{padding:0;margin:0;box-sizing:border-box;}
a{text-decoration: none;display: block;height:100%;}
a:focus{-webkit-tap-highlight-color: transparent;}
.ad-contanier{position: relative;background-color:#fff;height: 33vw;overflow: hidden;text-align:left;background-image:linear-gradient(150deg,rgba(190, 236, 235,0.2),#a3dfde);}
.ad-img{width:24vw;height:24vw;position: absolute;right:-3vw;bottom:-7vw;;border-radius:50%;border:4px solid rgba(255, 255, 255,0.8);box-shadow:0 0 0 4px rgba(255, 255, 255,0.3);}
p,span,h2{padding-left:2vw;display: block;}
h2{height:4.6vw;font-size:3.2vw;line-height: 4.2vw;display: inline-block;color:#fff;font-weight: normal;perspective:200px;position: relative;letter-spacing: 1px;}
h2::after{position: absolute;background-color:#fff;background-image:linear-gradient(90deg,rgba(52, 202, 190,0.65),#34cabe);display: inline-block;content: "";z-index: -1;border-radius: 0 0 3px 0;transform: skewX(-25deg);font-size:0;margin:0;padding:0;left:-2vw;top:-3px;right:-2vw;bottom:-2px;}
p{color:#333;font-size:3.6vw;margin-top: 1.7vw;font-weight:bold;}
span{color:#666;font-size:3.2vw;margin-top: 0.5vw;}
.pay-btn{background-color:#fc7575;color:#fff;font-size: 2.8vw;border-radius: 2px;display: inline-block;padding:1px 1vw;margin-left:2vw;margin-top: 1vw;border:none;}
</style>


