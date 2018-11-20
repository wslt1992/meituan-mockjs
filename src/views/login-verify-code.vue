<template>
    <div class="verify-container">
       <mt-header class="sett-header" fixed title="">
            <t-back-button slot="left">
                <mt-button class="sett-back" icon="back"></mt-button>
            </t-back-button>
            <t-back-button slot="right">
                <mt-button class="verify-help">帮助</mt-button>
            </t-back-button>
        </mt-header>
        <h2>输入验证码</h2>
        <p>验证码已发送至<span class="tell">+86 177 8874 8825</span></p>
        <div class="verify-input">
            <input autofocus type="number">
            <input type="number">
            <input type="number">
            <input type="number">
        </div>
        <p>55s后重新获取验证码</p>
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
a{text-decoration:none;}
*{margin:0;padding:0;}
/* 顶部导航条 */
.verify-container{text-align:left;padding:0 11vw;margin-top: 25vw;}
.mint-header{background-color:#fff;height:13vw;color:#555;font-size:4.4vw;font-weight:bold;padding:0 3vw;}
/deep/ .sett-header .mint-button-icon i{font-size: 6.5vw;}
.verify-help{color:#25abb1;}
h2{font-size: 6vw;color:#333;font-weight:normal;}
p{color:#333;font-size:3.4vw;margin-top:3vw;}
.tell{font-size:4.4vw;margin-left: 1vw;}
.verify-input{margin-top: 7vw;margin-bottom:9vw;}
.verify-input input{width:12vw;border:none;border-bottom:1px solid #ccc;margin-right:4vw;height:6vw;font-size:5vw;color:#333;background-color:transparent;}
.verify-input input:focus{border-bottom-color:#999;}
</style>



