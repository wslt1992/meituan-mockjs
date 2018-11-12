<template>
    <div class="login-header">
        <div class="login-menu">
            <!-- 设置 邮箱 耳机 -->
            <!-- <div>设置</div> -->
            <div>邮箱</div>
        </div>
        <div class="login-entry">
            <div class="login-photo">
                <!-- <img src="" alt=""> -->
                <i class="iconfont icon-touxiang-kong"></i>
            </div>
            <h2>请点击登录</h2>
        </div>
    </div>
</template>

<script>

export default {
    data:function(){

    }
}
</script>

<style scoped>
.login-header{background-image:linear-gradient(180deg,#25abb1,#acd1c4);background-repeat:no-repeat;background-size:100% 100%;}
.login-menu{margin-bottom: 20vw;}
.login-entry{background-color:#fff;width:110%;height:40vw;border-radius:50% 50% 0 0/50% 50% 0 0;margin-left:-5%;}
.login-photo{background-color:#fff;border-radius:50%;display:inline-block;margin-top:-50%;width:16vw;height:16vw;text-align:center;line-height:16vw;}
.login-photo i{font-size:20vw;display:inline-block;}
</style>
