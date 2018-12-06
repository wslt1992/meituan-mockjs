
<template>
    <t-page class="classtify-all">
        <!-- <div class="header-bar">
            <mt-header  title="全部分类">
                <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button> -->
                <!-- <mt-button icon="more" slot="right"></mt-button> -->
            <!-- </mt-header>
        </div> -->
        <!-- <search-bar class="search-bar"></search-bar> -->
        <t-header-new slot='header'>
            <search-bar slot='center' class="search-bar"></search-bar>
        </t-header-new>
        <div slot='container' class="namelist-all">
            <div  v-for="(item,index) in namelistAll" :key="item.id">
                <span><i class="icon iconfont" :class="iconClassName[index]"></i>{{item.classtifyName}}</span>
                <classtify-item class="classtify-all-item" :nameArr='item.list'></classtify-item>
            </div>
        </div>
    </t-page>
</template>

<script>
/**
 * 全部的分类页
 * 访问uri '/classtifyall'
 */
export default {
    components:{
    },
    data() {
        return {
            namelistAll:[
                {
                    classtifyName:'为你推荐',
                    list:[
                        'KTV','按摩/足疗','生活服务','火锅',
                        '健身/运动','自助餐','小吃快餐','面包甜点',
                        '生日蛋糕','烧烤烤肉','粤菜','川湘菜',
                        
                    ]
                },
                {
                    classtifyName:'美食',
                    list:[
                        '全部','生日蛋糕','甜点饮料','自助餐',
                        '火锅','西餐','小吃快餐','日韩料理',
                        '聚餐宴请','烧烤烤肉','川湘菜','江浙菜',
                        '香锅烤鱼','粤菜','烤串','西北菜',
                        '咖啡酒吧','云贵菜','生鲜蔬果','东北菜',
                        '东南亚菜','海鲜','素食','台湾/客家菜',
                        '创意菜','汤/粥/炖菜','美团外卖','预定座位',
                    ]
                },
                {
                    classtifyName:'为你推荐',
                    list:[
                        'KTV','按摩/足疗','生活服务','火锅',
                        '健身/运动','自助餐','小吃快餐','面包甜点',
                        '生日蛋糕','烧烤烤肉','粤菜','川湘菜',
                        
                    ]
                },
                {
                    classtifyName:'美食',
                    list:[
                        '全部','生日蛋糕','甜点饮料','自助餐',
                        '火锅','西餐','小吃快餐','日韩料理',
                        '聚餐宴请','烧烤烤肉','川湘菜','江浙菜',
                        '香锅烤鱼','粤菜','烤串','西北菜',
                        '咖啡酒吧','云贵菜','生鲜蔬果','东北菜',
                        '东南亚菜','海鲜','素食','台湾/客家菜',
                        '创意菜','汤/粥/炖菜','美团外卖','预定座位',
                    ]
                },
                {
                    classtifyName:'为你推荐',
                    list:[
                        'KTV','按摩/足疗','生活服务','火锅',
                        '健身/运动','自助餐','小吃快餐','面包甜点',
                        '生日蛋糕','烧烤烤肉','粤菜','川湘菜',
                        
                    ]
                },
                {
                    classtifyName:'美食',
                    list:[
                        '全部','生日蛋糕','甜点饮料','自助餐',
                        '火锅','西餐','小吃快餐','日韩料理',
                        '聚餐宴请','烧烤烤肉','川湘菜','江浙菜',
                        '香锅烤鱼','粤菜','烤串','西北菜',
                        '咖啡酒吧','云贵菜','生鲜蔬果','东北菜',
                        '东南亚菜','海鲜','素食','台湾/客家菜',
                        '创意菜','汤/粥/炖菜','美团外卖','预定座位',
                    ]
                }
                
            ],
            iconClassName:['icon-remen','icon-meishi1','icon-remen','icon-meishi1','icon-remen','icon-meishi1','icon-remen','icon-meishi1','icon-remen','icon-meishi1','icon-remen','icon-meishi1',]
            
        }
    },
}
</script>

<style lang="scss" scoped>
.classtify-all{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #eee;
    position: relative;
    .header-bar{
        
    }
    .namelist-all{
        flex-grow: 1;
        overflow-y: scroll;
        padding:0 3vw;//txl-add
        span{
            font-size: 5vw;
            display: inline-block;
            width: 100%;
            padding-left: 3vw;
            margin: 3vw 0;
            text-align: start;
            box-sizing: border-box;
            i{
                font-size: 5vw;
                margin-right: 2vw;
            }
        }
    }
}
.icon-remen{
    color: #f5413d;
}
.icon-meishi1{
    color: #7f4ce6;
}
/* txl-------------start */
/deep/.lt-header-root .header .mint-header{background-color:#fff;color:#333;height:13vw;}
// /deep/ .search-bar .root{background-color:#f5f5f5;font-size:3.6vw;line-height: 8.7vw;height:8vw;}
/deep/ .lt-header-root .center{position: fixed!important;z-index:10000;top:2.6vw;}
/deep/ .search-bar .root i.icon-sousuo{font-size:3.6vw;font-weight: bold;}
/deep/.lt-header-root .center{top:2.5vw;}
/deep/.classtify-all-item.classtify-item p{font-size:3.6vw;border:none;width:23.2vw;margin:0 1px 1px 0;;}
/* txl-------------end */
</style>

