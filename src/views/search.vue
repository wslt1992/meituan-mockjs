<template>
    <div>
        <lt-header>
            <div class="search-input">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" :placeholder="tips">
            </div>
        </lt-header>
        <div class="content">
            <div>
                <div class="class-tag">热门搜索</div>
                <div class="class-tag-content">
                    <span class="class-tag-item" v-for="item in hotArr" :key="item.id">
                        {{ item }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components:{
        },
        data:function() {
            return {
                tips: '广东长隆野生动物园',
                hotArr:['热门搜索','热门搜索3123','热门4234搜索','热门搜5353索','热门53453搜索','热门搜索','热门搜索3123','热门4234搜索','热门搜5353索','热门53453搜索',]
            }
        },
    }
</script>

<style lang='scss' scoped>
.search-input{
    // border: 1px solid #ddd;
    font-size: 4vw;
    text-align: center;
    color: #999;
    background-color: #fff;
    width: 70vw;
    height: 10vw;
    line-height: 10vw;
    border-radius: 5vw;
    a{
        color: #999;
        text-decoration: none;
    }
    input{
        border: none;
        outline: none;
        font-size: 4.5vw;
        color: #333;
    }
}
.content{
    .class-tag{
            text-align: start;
        }
    .class-tag-content{
        display: flex;
        flex-wrap: wrap;
        .class-tag-item{
            background-color: #ddd;
            margin: 0.5vw;
            border-radius: 1vw;
            padding: 1vw;
        }
    }
    
}
</style>