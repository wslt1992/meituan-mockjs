<template>
    <div class="login-box">
        <div class="login-help">
            <t-back-button>
                <i class="iconfont icon-cha"></i>
            </t-back-button>
            <p>帮助</p>
        </div>
        <div class="login-content">
            <h2 class="login-title">欢迎登录美团</h2>
            <div class="phone-input">
                <p>+86</p>
                <i class="iconfont icon-arrowright"></i>
                <input type="tel" v-model="tellVal" @focus="placeFocus($event,'clearIcon')" @blur="placeBlur" @input="checkTell"  :data-placeholder="placeTell" :placeholder="placeTell">
                <i v-show="clearIcon" @click="clearInput" class="iconfont icon-cha"></i>
            </div>
            <div class="phone-input phone-pass" v-show="showPassInput">
                <input :type="showPass ? 'text':'password'" @focus="placeFocus($event,'')" @blur="placeBlur" :data-placeholder="placePass" :placeholder="placePass">
                <i class="iconfont" @click="showPassFn" :class="{'icon-biyanjing':!showPass,'icon-ai-eye':showPass}"></i>
            </div>
            <p class="login-tips">未注册的手机号验证后自动创建美团账户</p>
            <button class="login-btn" :class="'login-btn-bg'+loginBtnBg" @click="login">{{loginBtnTxt}}</button>
            <p class="login-pass" v-show="!showPassInput" @click="showPassInputFn(1)">密码登录</p>
            <p class="login-code" v-show="showPassInput"><span @click="showPassInputFn(2)">验证码登录</span><span>忘记密码</span></p>
        </div>
        <div class="login-footer">
            <i class="iconfont icon-weixin"></i>
            <i class="iconfont icon-QQ"></i>
            <p>登录代表你已同意<span>美团用户协议</span>、<span>隐私政策</span></p>
        </div>
    </div>
</template>

<script>
export default {
    components:{
    },
    data:function(){
        return {
            placeTell:"请输入手机号", //手机号提示语
            placePass:"请输入密码", //密码提示语
            tellVal:"", // 手机号input的value值
            clearIcon:false, //清除手机号内容 图标
            showPass:false, //密码是否明文显示
            loginBtnTxt:"获取短信验证码", //按钮文字
            loginBtnBg:1, //按钮背景色
            showPassInput:false //是否显示密码输入框
        }
    },
    methods:{
        /*
         * 聚焦placeholder为空
         */
        placeFocus:function(evt,clearIcon){
            let target = evt.target;
            target.placeholder = "";
            if(clearIcon!=''){
                this.clearIcon = true;
            }
        },
        /*
         * 清空input(手机号input)
         */
        clearInput:function(){
            this.tellVal = "";
            this.loginBtnBg = 1; //清空input，按钮背景色为类型1
        },
        /*
         * 失去焦点，placeholder赋值
         */
        placeBlur:function(evt,clearIcon){
            let target = evt.target;
            target.placeholder = target.dataset.placeholder;
             if(clearIcon!=''){
                this.clearIcon = false;
            }
        },
        /*
         * 改变密码是否显示明文状态
         */
        showPassFn:function(){
            this.showPass = !this.showPass;
        },
         /*
         * 改变按钮显示文字
         */
        showPassInputFn:function(type){
            this.showPassInput = !this.showPassInput;
            if(type==1){
                this.loginBtnTxt = "登录";
            }else if(type==2){
                this.loginBtnTxt = "获取短信验证码";
            }
        },
        /*
         * 验证手机号限制11位
         */
        checkTell:function(){
            let val = this.tellVal;
            // 前3为后面加一个空格，后面每四位加一个空格，11位，只会出现两个空格
            if(val.length==3||val.length==8){
                // input type=tel，加空格才有效，如果是type=number，加空格无效
                val = val+" ";
            }

            if(val.length>12){
                val = val.substr(0,13);
                 this.loginBtnBg = 2; //满足手机号验证后，按钮背景色类型为2
            }

            this.tellVal = val;
        },
        /** */
        login(){
             let username =this.$store.state.user.username;//获取状态
             console.log(username,'username')
             //改变状态
             this.$store.commit('user/changeLoginState','登录成功')
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
.login-title{color:#333;font-size:7vw;text-align:left;margin-top:8vw;font-weight: normal;margin-bottom: 12vw;}

/*  */
.login-content{padding:0 7vw;}
/* 手机号 密码*/
.phone-input{display: flex;flex-direction:row;justify-content: left;align-items: center;border-bottom:1px solid #ddd;padding:2.4vw 0;}
.phone-input p{margin-right:1vw;color:#666;font-size:3.6vw;}
.phone-input i{margin-right: 2.5vw;color:#888;font-size:3.2vw;}
.phone-input input{height:8vw;width:58vw;border:none;font-size:5.2vw;}
.phone-input input:focus{color:#07c0b3;-webkit-text-fill-color:transparent;text-shadow:0 0 0 #333;}
.phone-input.phone-pass input{width:90%;}
.phone-input.phone-pass i{font-size:4.2vw;color:#aaa;}
/* 提示 */
.login-tips{color:#999;font-size:3.6vw;margin-top: 2vw;text-align: left;}
/* 获取短信验证码 */
.login-btn{color:#fff;display: block;border:none;width:100%;height:12vw;border-radius:7vw;margin-top: 5.5vw;font-size:4.5vw;}
.login-btn-bg1{background-color:rgba(7, 192, 179,0.3);}
.login-btn-bg2{background-color:rgba(7, 192, 179,1);box-shadow:0 1px 3px rgba(0,0,0,0.2)}
/* 密码登录 */
.login-pass,.login-code{color:#333;font-size: 3.5vw;text-align: left;margin-top: 5vw;}
.login-code{display: flex;justify-content: space-between;}

/* 登录方式  用户协议 */
.login-footer{margin-top: 13vh;}
.login-footer i{width:17vw;height:17vw;border:1px solid #efefef;vertical-align: middle;display: inline-flex;align-items:center;justify-content: center;border-radius: 50%;margin:4.5vw 8.5vw;}
.login-footer i.icon-weixin{font-size: 9vw;color:#54c33b;}
.login-footer i.icon-QQ{font-size: 8vw;color:#0db9e6;}
.login-footer p{font-size: 3.6vw;color:#777;}
.login-footer p span{color:#07c0b3;}
</style>
