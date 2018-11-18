<template>
    <div class="setting-container">
        <mt-header class="sett-header" fixed title="">
            <!-- <router-link to="/" slot="left"> -->
            <t-back-button slot="left">
                <mt-button class="sett-back" icon="back">设置</mt-button>
            </t-back-button>
            <!-- </router-link> -->
        </mt-header>
        <div class="sett-list mt">
            <mt-cell title="个人信息" to="//my.vue" is-link></mt-cell>
            <mt-cell title="换绑手机" to="//my.vue" is-link value="182****5214"></mt-cell>
            <mt-cell title="社交账号绑定" to="//my.vue" is-link value="绑定/解绑"></mt-cell>
            <mt-cell title="设置密码" to="//my.vue" is-link>
                <b class="sett-ruo">弱</b>
                <button class="sett-bind-btn">未绑定</button>
                <span>修改</span>
            </mt-cell>
            <mt-cell title="支付设置" to="//my.vue" is-link></mt-cell>
        </div>
        
        <div class="sett-list">
            <mt-cell title="换肤"></mt-cell>
            <mt-cell title="安全中心"></mt-cell>
            <mt-cell title="通用"></mt-cell>
        </div>

        <div class="sett-list">
            <mt-cell title="关于美团"></mt-cell>
        </div>

        <button class="sett-out-btn">退出账户</button>
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

<style lang="scss" scoped>

/* 顶部导航条 */
.mint-header{background-color:#fff;height:13vw;border-bottom:1px solid #ddd;color:#555;font-size:4.4vw;font-weight:bold;}
/deep/ .sett-header .mint-button-icon i{font-size: 6.5vw;}

/* 列表 */
.sett-list.mt{margin-top: 15.5vw;}
.sett-list{text-align:left;margin-top: 3vw;}
/deep/ .sett-list a:first-of-type .mint-cell-wrapper{background-image:none;}
/deep/ .sett-list .mint-cell-title{font-size:4.3vw;}
/deep/ .sett-list .mint-cell-allow-right{font-family: "iconfont"!important;font-style:normal;color:#888;font-size:3vw;}
/deep/ .sett-list .mint-cell-allow-right::after{content:'\e602';border:none;transform:none;display:inline-block;top:39%;}
/deep/ .sett-list .mint-cell-value{font-size:3.7vw;}
.sett-list .mint-cell:last-child{background-image:none;}
.sett-bind-btn{padding:0.4vw 1.2vw 0.28vw 1.2vw;color:#fff;border:none;border-radius:1vw;font-size:2.8vw;background-color:#ee471d;margin-right:1vw;}

.sett-ruo{display:inline-block;position:absolute;left:84px;color:#e6602b;font-size:4.5vw;}
/* .mint-cell-allow-right{font-size:5vw;color:#666;} */
/* 退出登录 */
.sett-out-btn{width:90%;background-color: #fff;color:#333;font-size:4.5vw;font-weight: bold;height: 12vw;line-height: 12vw;border:1px solid #ddd;border-radius: 1vw;box-shadow: 0 2px 2px rgba(0,0,0,0.3);margin-top: 5vw;margin-bottom:5vw;}
</style>