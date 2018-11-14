<template>
    <div class="login-box">
        <div class="login-header">
            <div class="login-menu" :class="{'menu-fixed':menuFixed}">
                <router-link class="shezhi" to="/setting">
                    <i class="iconfont icon-shezhi"></i>
                </router-link>
                <i class="iconfont icon-fuwuerji"></i>
                <i class="iconfont icon-youxiang"></i>
            </div>
            <div class="login-entry">
                <router-link to="/login">
                    <!-- <img src="" alt=""> -->
                    <i class="iconfont icon-touxiang-kong"></i>
                    <h2>{{userInfo.username}}</h2>
                </router-link>
            </div>
        </div>
        <ul class="list-box main-list w33 pd30 line">
            <li>
                <a href="#">
                    <i class="iconfont icon-star linear135-red"></i>
                    <p>收藏</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-xiaoxi linear135-blue"></i>
                    <p>评价</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-ico_home_committed linear135-green"></i>
                    <p>最近浏览</p>
                </a></li>     
        </ul>
        <h3 class="login-title pd30">美团钱包</h3>
        <ul class="list-box w25 pd30 line wallet-list">
            <li>
                <a href="#">
                    <i class="iconfont icon-star linear135-orange"></i>
                    <p>我的钱包</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-xiaoxi linear135-orange"></i>
                    <p>红包/卡券</p>
                    <b>领卷</b>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-qian linear135-orange"></i>
                    <p>余额</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-ico_home_committed linear135-orange"></i>
                    <p>美团信用卡</p>
                </a>
            </li>
             <li>
                 <a href="#">
                    <i class="iconfont icon-qiandai linear135-orange"></i>
                    <p>理财</p>
                </a>
            </li>     
             <li>
                 <a href="#">
                    <i class="iconfont icon-chongzhi01 linear135-orange"></i>
                    <p>手机充值</p>
                    <b>抽奖</b>
                </a>
            </li>            
        </ul>
        <h3 class="login-title pd30">美团服务</h3>
        <ul class="list-box w25 pd30 wallet-list">
            <li>
                <a href="#">
                    <i class="iconfont icon-star linear135-orange"></i>
                    <p>会员中心</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-xiaoxi linear135-orange"></i>
                    <p>美团公益</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-qian linear135-green"></i>
                    <p>免流用美团</p>
                </a>
            </li>
            <li>
                 <a href="#">
                    <i class="iconfont icon-ico_home_committed linear135-green"></i>
                    <p>发票助手</p>
                </a>
            </li>
             <li>
                 <a href="#">
                    <i class="iconfont icon-qiandai linear135-green"></i>
                    <p>我要合作</p>
                </a>
            </li>     
             <li>
                 <a href="#">
                    <i class="iconfont icon-meituan linear135-green"></i>
                    <p>关于美团</p>
                </a>
            </li>            
        </ul>
    </div>
</template>

<script>
import Vue from "vue";
export default {
    data:function(){
        return {
            userInfo:{
                username:"请点击登录",
                userphoto:""
            },
            menuFixed:false
        }
    },
    methods:{
        menuScroll:function(evt){
          let scrollTop = evt.target.scrollTop || evt.srcElement.scrollTop;
          if(scrollTop>0){
              this.menuFixed = true;
          }else if(scrollTop<50){
              this.menuFixed = false;
          }
        }
    },
    mounted:function(){
        let loginBox = document.querySelector(".login-box");
        loginBox.addEventListener("scroll",this.menuScroll);
    },
    watch:{
       
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
.line::after{border-bottom:1px solid #ddd;content:"";display:block;height:0;position:absolute;bottom:0;right:3vw;left:3vw;transform:scaleY(0.5);}

/* 135deg渐变色 */
.linear135-red{background-image:linear-gradient(135deg,#fb8297,#e9516c);}
.linear135-green{background-image:linear-gradient(135deg,#03ebd8,#09b8b8);}
.linear135-blue{background-image:linear-gradient(135deg,#7dc5fe,#68acec);}
.linear135-orange{background-image:linear-gradient(135deg,#ffbb86,#fc9443);}

/* 登录 设置 邮箱 耳机 */
.login-box{background-color:#fff;height:100%;overflow-y:scroll;}
.login-header{background-image:linear-gradient(180deg,#25abb1,#b9e7d7);background-repeat:no-repeat;background-size:100% 100%;overflow-x:hidden;padding-top:16vh;position:relative;z-index:10;}
.login-menu{margin-bottom: 14vw;transition:background-color 0.1s linear;top:0;right:0;left:0;position:fixed;display:flex;flex-direction:row;padding:2.5vw 0 2.5vw 2.5vw;z-index:999;}
.login-menu i{margin-right:2.5vw;font-size:6.2vw;color:rgba(255,255,255,0.8);}
.login-menu .shezhi{margin-right:auto;}

.login-entry{background-color:#fff;width:110%;height:22vw;border-radius:50% 50% 0 0/50% 50% 0 0;margin-left:-5%;}
.login-entry i,.login-entry img{font-size:16vw;display:inline-block;color:#aaa;background-color:#fff;border-radius:50%;border:1vw solid #fff;margin-top:-8vw;display:inline-block;width:16vw;height:16vw;}
.login-entry h2{color:#333;font-size:4.2vw;margin-top:0.6vw;}

/* 列表 */
.list-box{display:flex;flex-direction:row;flex-wrap:wrap;position:relative;}
.list-box li i{font-size:6.4vw;display:inline-block;}
.list-box li i.icon-ico_home_committed{filter:drop-shadow(1px 1px 1px rgba(12,213,187,0.3));}
.list-box li i.icon-xiaoxi{filter:drop-shadow(1px 1px 1px rgba(104,172,236,0.3));}
.list-box li i.icon-star{filter:drop-shadow(1px 1px 1px rgba(250,94,119,0.3));}
.list-box li p{color:#333;font-size:3.2vw;margin-top:2vw;}

.main-list{padding:4vw 0;}
.main-list li i{-webkit-background-clip:text;-webkit-text-fill-color: transparent;}

.login-title{color:#333;font-size:3.8vw;margin-top:3.6vw;text-align:left;}

.wallet-list{padding-top: 4vw;}
.wallet-list li{margin-bottom:5vw;position:relative;}
.wallet-list li i{-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.wallet-list li b{display:inline-block;padding:0.4vw 1.3vw;background-image:linear-gradient(90deg,#ff4548,#fe4b44);color:#ffffff;font-size:1.8vw;border-radius:3vw;text-align:center;position:absolute;left:55%;top:-1.4vw;}

.menu-fixed{position: fixed;background-color:#25abb1;}
</style>
