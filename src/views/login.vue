<template>
    <div class="login-box">
        <div class="login-help">
            <back-button>
                <i class="iconfont icon-cha"></i>
            </back-button>
            <p>帮助</p>
        </div>
        <div class="login-content">
            <h2 class="login-title">欢迎登录美团</h2>
            <div class="phone-box">
                <p>+86</p>
                <i class="iconfont icon-arrowright"></i>
                <input type="number" v-model="placeVal" @focus="placeFocus" @blur="placeBlur" :placeholder="placeTell">
                <i v-show="clearIcon" @click="clearInput" class="iconfont icon-cha"></i>
            </div>
            <p class="login-tips">未注册的手机号验证后自动创建美团账户</p>
            <button class="login-btn">获取短信验证码</button>
            <p class="login-pass">密码登录</p>
        </div>
        <div class="login-footer">
            <i class="iconfont icon-weixin"></i>
            <i class="iconfont icon-QQ"></i>
            <p>登录代表你已同意<span>美团用户协议</span>、<span>隐私政策</span></p>
        </div>
    </div>
</template>

<script>
import backButton from "../components/back-button";
export default {
    components:{
        "back-button":backButton
    },
    data:function(){
        return {
            placeTell:"请输入手机号",
            placeVal:"",
            clearIcon:false
        }
    },
    methods:{
        placeFocus:function(evt){
            this.placeTell = "";
            this.clearIcon = true;
        },
        clearInput:function(){
            this.placeVal = ""
        },
        placeBlur:function(){
            this.placeTell = "请输入手机号";
            this.clearIcon = false;
        }
    }
}
</script>

<style scoped>
*{margin:0;padding:0;box-sizing:border-box;}
::placeholder{color:#ccc;}
a{text-decoration: none;}
input:focus{outline: none;border:none;}

.login-box{padding:0 3.5vw;background-color:#fff;height:100vh;}
/* 叉 帮助*/
.login-help{display:flex;flex-direction:row;justify-content: space-between;align-items:center;padding:2vw 0;}
.icon-cha,.login-help p{color:#07c0b3;font-size:4.5vw;}

/* 标题：欢迎登录美团*/
.login-title{color:#333;font-size:7vw;text-align:left;margin-top:8vw;font-weight: normal;}

/*  */
.login-content{padding:0 7vw;}
/* 手机号 */
.phone-box{display: flex;flex-direction:row;justify-content: left;align-items: center;border-bottom:1px solid #ddd;padding:2.4vw 0;margin-top: 12vw;}
.phone-box p{margin-right:1vw;color:#666;font-size:3.6vw;}
.phone-box i{margin-right: 2.5vw;color:#888;font-size:3.2vw;}
.phone-box input{height:8vw;width:58vw;border:none;font-size:5.2vw;}
.phone-box input:focus{color:#07c0b3;-webkit-text-fill-color:transparent;text-shadow:0 0 0 #333;}
/* 提示 */
.login-tips{color:#999;font-size:3.6vw;margin-top: 2vw;text-align: left;}
/* 获取短信验证码 */
.login-btn{color:#fff;display: block;border:none;width:100%;height:12vw;border-radius:7vw;margin-top: 5.5vw;font-size:4.5vw;}
.login-btn-bg1{background-color:rgba(7, 192, 179,0.3);}
.login-btn-bg2{background-color:rgba(7, 192, 179,1);}
/* 密码登录 */
.login-pass{color:#333;font-size: 3.5vw;text-align: left;margin-top: 5vw;}

/* 登录方式  用户协议 */
.login-footer{margin-top: 22.5vh;}
.login-footer i{width:17vw;height:17vw;border:1px solid #efefef;vertical-align: middle;display: inline-flex;align-items:center;justify-content: center;border-radius: 50%;margin:4.5vw 8.5vw;}
.login-footer i.icon-weixin{font-size: 9vw;color:#54c33b;}
.login-footer i.icon-QQ{font-size: 8vw;color:#0db9e6;}
.login-footer p{font-size: 3.6vw;color:#777;}
.login-footer p span{color:#07c0b3;}
</style>
