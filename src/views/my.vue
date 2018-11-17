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
        <my-list-unit class="wallet-list pd30 line" :listMsg="myList"></my-list-unit>
        <h3 class="login-title pd30">美团钱包</h3>
        <my-list-unit class="wallet-list pd30 line" :listMsg="walletList"></my-list-unit>
        <h3 class="login-title pd30">美团服务</h3>
        <my-list-unit class="wallet-list pd30" :listMsg="serverList"></my-list-unit>
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
            menuFixed:false,
            myList:{ //收藏、评价、最近浏览 列表信息
                liW:"33.3%",
                lists:[{
                    icon:'icon-star linear135-red red-shadow',
                    content:"收藏",
                    url:"/my-collection"
                },
                {
                    icon:'icon-xiaoxi linear135-blue blue-shadow',
                    content:"评价",
                    url:"/my-collection"
                }, {
                    icon:'icon-ico_home_committed linear135-green green-shadow',
                    content:"最近浏览",
                    url:"/my-collection"
                }]
            },
            walletList:{ //美团钱包 列表信息
                liW:"25%",
                lists:[{
                    icon:'icon-star linear135-orange',
                    content:"我的钱包",
                    url:"/my-collection"
                },
                {
                    icon:'icon-xiaoxi linear135-orange',
                    content:"红包/卡券",
                    tips:"领卷",
                    url:"/my-collection"
                }, {
                    icon:'icon-qian linear135-orange',
                    content:"余额",
                    url:"/my-collection"
                }, {
                    icon:'icon-ico_home_committed linear135-orange',
                    content:"美团信用卡",
                    url:"/my-collection"
                }, {
                    icon:'icon-qiandai linear135-orange',
                    content:"理财",
                    url:"/my-collection"
                }, {
                    icon:'icon-meituan linear135-orange',
                    content:"手机充值",
                    tips:"抽奖",
                    url:"/my-collection"
                }]
            },
            serverList:{ //美团服务 列表信息
                liW:"25%",
                lists:[{
                    icon:'icon-star linear135-orange',
                    content:"会员中心",
                    url:"/my-collection"
                },
                {
                    icon:'icon-xiaoxi linear135-orange',
                    content:"美团公益",
                    url:"/my-collection"
                }, {
                    icon:'icon-qian linear135-green',
                    content:"免流用美团",
                    url:"/my-collection"
                }, {
                    icon:'icon-ico_home_committed linear135-green',
                    content:"发票助手",
                    url:"/my-collection"
                }, {
                    icon:'icon-qiandai linear135-green',
                    content:"我要合作",
                    url:"/my-collection"
                }, {
                    icon:'icon-meituan linear135-green',
                    content:"关于美团",
                    url:"/my-collection"
                }]
            }
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
.pd30{padding-left:3vw;padding-right:3vw;}

/* 登录 设置 邮箱 耳机 */
.login-box{background-color:#fff;height:100%;overflow-y:scroll;}
.login-header{background-image:linear-gradient(180deg,#25abb1,#b9e7d7);background-repeat:no-repeat;background-size:100% 100%;overflow-x:hidden;padding-top:16vh;position:relative;z-index:10;}
.login-menu{margin-bottom: 14vw;transition:background-color 0.1s linear;top:0;right:0;left:0;position:fixed;display:flex;flex-direction:row;padding:2.5vw 0 2.5vw 2.5vw;z-index:999;}
.login-menu i{margin-right:2.5vw;font-size:6.2vw;color:rgba(255,255,255,0.8);}
.login-menu .shezhi{margin-right:auto;}

.login-entry{background-color:#fff;width:110%;height:22vw;border-radius:50% 50% 0 0/50% 50% 0 0;margin-left:-5%;}
.login-entry i,.login-entry img{font-size:16vw;display:inline-block;color:#aaa;background-color:#fff;border-radius:50%;border:1vw solid #fff;margin-top:-8vw;display:inline-block;width:16vw;height:16vw;}
.login-entry h2{color:#333;font-size:4.2vw;margin-top:0.6vw;}

.login-title{color:#333;font-size:3.8vw;margin-top:3.6vw;text-align:left;}

.menu-fixed{position: fixed;background-color:#25abb1;}
</style>
