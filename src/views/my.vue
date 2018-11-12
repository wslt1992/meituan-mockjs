<template>
    <div class="login-box">
        <div class="login-header">
            <div class="login-menu">
                <i class="iconfont icon-shezhi shezhi"></i>
                <i class="iconfont icon-fuwuerji"></i>
                <i class="iconfont icon-youxiang"></i>
            </div>
            <div class="login-entry">
                <div class="login-photo">
                    <!-- <img src="" alt=""> -->
                    <i class="iconfont icon-touxiang-kong"></i>
                </div>
                <h2>请点击登录</h2>
            </div>
        </div>
        <ul class="list-box w33">
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
.w33 li{max-width:33.3%}

.login-box{background-color:#fff;}
.login-header{background-image:linear-gradient(180deg,#25abb1,#b9e7d7);background-repeat:no-repeat;background-size:100% 100%;overflow-x:hidden;}
.login-menu{margin-bottom: 14vw;}
.login-entry{background-color:#fff;width:110%;height:22vw;border-radius:50% 50% 0 0/50% 50% 0 0;margin-left:-5%;}
.login-photo{background-color:#fff;border-radius:50%;display:inline-block;margin-top:-8vw;width:16vw;height:16vw;text-align:center;border:1vw solid #fff;}
.login-photo i{font-size:16vw;display:inline-block;color:#aaa}
.login-entry h2{color:#333;font-size:4.2vw;margin-top:0.6vw;}
.login-menu{display:flex;flex-direction:row;padding:2.5vw 0 0 2.5vw;}
.login-menu i{margin-right:2.5vw;font-size:6.2vw;color:rgba(255,255,255,0.8);}
.login-menu i.shezhi{margin-right:auto;}
.list-box{display:flex;flex-direction:row;justify-content: space-around;}
.list-box li i{font-size:5.4vw;}
.list-box li i.icon-star{color:#fa5e77;filter:drop-shadow(0.7vw 0.7vw 0.7vw rgba(250,94,119,0.3));}
/* .list-box li i.icon-ico_home_committed{color:#11d4bc;} */
.list-box li i.icon-ico_home_committed:before{background-image:linear-gradient(135deg,#11d4bc,#fff);}
.list-box li i.icon-xiaoxi{color:#5eb4fa;}
.list-box li p{color:#333;font-size:3.4vw;margin-top:2vw;}
</style>
