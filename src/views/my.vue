<template>
    <div class="login-box">
        <div class="login-header">
            <div class="login-menu">
                <i class="iconfont icon-shezhi shezhi"></i>
                <i class="iconfont icon-fuwuerji"></i>
                <i class="iconfont icon-youxiang"></i>
            </div>
            <div class="login-entry">
                <!-- <img src="" alt=""> -->
                <i class="iconfont icon-touxiang-kong"></i>
                <h2>请点击登录</h2>
            </div>
        </div>
        <ul class="list-box main-list w33 pd30 line">
            <li>
                <a href="#">
                    <i class="iconfont icon-star"></i>
                    <p>收藏</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-xiaoxi"></i>
                    <p>评价</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-ico_home_committed"></i>
                    <p>最近浏览</p>
                </a></li>     
        </ul>
        <h3 class="login-title pd30">美团钱包</h3>
        <ul class="list-box w25 pd30 line wallet-list">
            <li>
                <a href="#">
                    <i class="iconfont icon-star"></i>
                    <p>我的钱包</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-xiaoxi"></i>
                    <p>红包/卡券</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-qian"></i>
                    <p>余额</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-ico_home_committed"></i>
                    <p>美团信用卡</p>
                </a>
            </li>
             <li>
                 <a href="#">
                    <i class="iconfont icon-qiandai"></i>
                    <p>理财</p>
                </a>
            </li>     
             <li>
                 <a href="#">
                    <i class="iconfont icon-chongzhi01"></i>
                    <p>手机充值</p>
                </a>
            </li>            
        </ul>
    </div>
</template>

<script>

export default {
    data:function(){
        return {

        }
    }
}
</script>

<style scoped>
*{margin:0;padding:0;}
li{list-style:none;}
a{text-decoration:none;}
.w33 li{width:33.3%}
.w25 li{width:25%;}
.pd30{padding-left:3vw;padding-right:3vw;}
.line::after{border-bottom:1px solid #eee;content:"";display:block;height:0;position:absolute;bottom:0;right:3vw;left:3vw;transform:scaleY(0.5)}

.login-box{background-color:#fff;}
.login-header{background-image:linear-gradient(180deg,#25abb1,#b9e7d7);background-repeat:no-repeat;background-size:100% 100%;overflow-x:hidden;}
.login-menu{margin-bottom: 14vw;}
.login-entry{background-color:#fff;width:110%;height:22vw;border-radius:50% 50% 0 0/50% 50% 0 0;margin-left:-5%;}
.login-entry i,.login-entry img{font-size:16vw;display:inline-block;color:#aaa;background-color:#fff;border-radius:50%;border:1vw solid #fff;margin-top:-8vw;display:inline-block;width:16vw;height:16vw;}
.login-entry h2{color:#333;font-size:4.2vw;margin-top:0.6vw;}
.login-menu{display:flex;flex-direction:row;padding:2.5vw 0 0 2.5vw;}
.login-menu i{margin-right:2.5vw;font-size:6.2vw;color:rgba(255,255,255,0.8);}
.login-menu i.shezhi{margin-right:auto;}

.list-box{display:flex;flex-direction:row;flex-wrap:wrap;position:relative;}
.list-box li i{font-size:6.4vw;display:inline-block;}
.list-box li p{color:#333;font-size:3.2vw;margin-top:2vw;}

.main-list{padding:4vw 0;}
.main-list li i{-webkit-background-clip:text;-webkit-text-fill-color: transparent;}
.main-list li i.icon-star{background-image:linear-gradient(135deg,#fb8297,#e9516c);filter:drop-shadow(1px 1px 1px rgba(250,94,119,0.3));}
.main-list li i.icon-ico_home_committed{background-image:linear-gradient(135deg,#00f3bf,#0cd5bb);filter:drop-shadow(1px 1px 1px rgba(12,213,187,0.3));}
.main-list li i.icon-xiaoxi{background-image:linear-gradient(135deg,#7dc5fe,#68acec);filter:drop-shadow(1px 1px 1px rgba(104,172,236,0.3)
);}

.login-title{color:#333;font-size:3.8vw;margin-top:3vw;text-align:left;}

.wallet-list{padding-top: 4vw;}
.wallet-list li{margin-bottom:5vw;}
</style>
