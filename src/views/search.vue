<template>
    <div class="search-container">
        <t-header class="search-header">
            <div class="search-input">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" :placeholder="tips">
            </div>
            <span class="sousuo" slot='right' @click="toSearchRulter">搜索</span>
        </t-header>
        <div class="content">
            <div>
                <div class="class-tag">热门搜索</div>
                <div class="class-tag-content">
                    <span class="class-tag-item" v-for="item in hotArr" :key="item.id">
                        {{ item.length>10 ? (item.substr(0,10)+"..."):item }}
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
                hotArr:[
                    '正新鸡排',
                    '撸天下音乐烧烤吧（坪洲店）',
                    '串福居江边渔火（桃园店）',
                    '大汗碳烤羊腿（坂田店）',
                    '原石牛扒（龙华九方店）',
                    '蓬客精品酒店(深圳北站店)',
                    '喜发烧味', '永盛豆浆王（大芬店）',
                    '秋菊螺蛳粉', '虾皇蟹将（泥岗店）',
                    '深南玖月海鲜烧烤音乐餐吧',
                    'Hui Hotel回酒店·La cafe自助餐',
                    'UNIVERSAL CAFFEN BAR环球咖啡厅（海上世界店）'
                    ]
            }
        },
        methods:{
            /**
             * 跳转到搜索结果页
             */
            toSearchRulter:function(){
                this.$router.push(this.$url.navigator.SearchResultPath);
            }
        }
    }
</script>

<style lang='scss' scoped>
.search-input{
    // border: 1px solid #ddd;
    font-size: 4vw;
    text-align: center;
    color: #999;
    background-color: #fff;
    width: 60vw;
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
        width: 50vw;
        color: #333;
    }
    
}
.sousuo{
    margin-right: 2vw;
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
            font-size: 3vw;
        }
    }
    
}
/* txl-------------start */
/deep/.lt-header-root .header .mint-header{background-color:#fff;color:#333;height:13vw;}
/deep/ .search-header .search-input{line-height: 8vw;background-color:#f5f5f5;height:8vw;padding-left: 2vw;}
/deep/ .search-header .search-input input{background-color:transparent;}
/deep/ .search-header .search-input i{font-size: 3.8vw;font-weight: bold;}
/deep/.lt-header-root .center{top:2.5vw;}
.search-container{background-color: #fff;}
.content{padding:3vw;}
.class-tag{color:#999;font-size: 3.6vw;margin:2vw 0;}
.content .class-tag-content .class-tag-item{background-color:#f5f5f5;padding:1.5vw 2.5vw;color:#000;margin:1.1vw;font-size: 3.4vw;}
/* txl-------------end */
</style>