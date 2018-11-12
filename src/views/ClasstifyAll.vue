
<template>
    <div class="classtify-all">
        <div class="header-bar">
            <mt-header  title="全部分类">
                <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="namelist-all">
            <div  v-for="item in namelistAll" :key="item.id">
                <span>{{item.classtifyName}}</span>
                <classtify-item :nameArr='item.list'></classtify-item>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * 全部的分类页
 * 访问uri '/classtifyall'
 */
import ClasstifyItem from '../components/classtify-item'
export default {
    components:{
        'classtify-item':ClasstifyItem
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
                
            ]
            
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
    .header-bar{
        
    }
    .namelist-all{
        flex-grow: 1;
        overflow-y: scroll;
        span{
            font-size: 5vw;
            display: inline-block;
            width: 100%;
            padding-left: 3vw;
            margin: 3vw 0;
            text-align: start;
            box-sizing: border-box;
        }
    }
}
</style>

