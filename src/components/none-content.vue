<template>
    <div class="none-collection" >
        <img src="../assets/none_collection.png" alt="">
        <h2>{{title}}</h2>
        <p>{{tips}}</p>
        <router-link class="view-btn" :to="btnto">
            {{btntxt}}
        </router-link>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
          title:"暂无收藏",
          tips:"您可以将喜欢的收藏到这里",
          btntxt:"随便逛逛",
          btnto:"/"
        }
    }
}
</script>
<style lang="scss" scoped>
a{text-decoration:none;}
*{margin:0;padding:0;}

/* 暂无收藏 */
.none-collection{margin-top:22vw;}
.none-collection img{width:40vw;}
.none-collection h2{color:#333;font-size:4.6vw;margin-top: 2vw;}
.none-collection p{font-size:4vw;margin-top: 0.2vw;color:#888;}
/* 随便逛逛 按钮 */
.view-btn{color:#25abb1;font-size:4vw;border:1px solid #25abb1;border-radius: 2px;box-shadow: 0 2px 3px rgba(0,0,0,0.2);background-color:#fff;margin-top:4vw;display:inline-block;padding:0 1.4vw;height:7.4vw;line-height: 8vw;}
</style>


