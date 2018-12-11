<template>
    <div class="order-item-root">
        <template v-if="items.length > 0">
            <div  v-for="(item,index) in items" :key="index" class="list-item">
                <h6>{{item.id}}</h6>
                <div class="item-left">
                    <!-- <img :src='item.img' alt=""> -->
                    <img src="../assets/imgs/shop.jpg" alt="">
                </div>
                <div class="item-right">
                    <div class="div-item">
                        <span class="shopname">{{item.shopname}}</span>
                        <span class="state">{{item.state}}</span>
                    </div>
                    <span class="time">下单时间：{{item.time}}</span>
                    <div class="div-item">
                        <span class="price">￥{{item.price}}</span>
                    </div>
                </div>
            </div>
        </template>
        <div v-else class="none-data">
            <img src="../assets/none_collection.png" alt="">
            <span>暂无内容</span>
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: []
        }
    },
    data () {
        return {
        }
    },
    methods: {
        paduan() {
            console.log(items.length>0,'items.length>-1')
            return items.length > 0
        }
    },
}
</script>

<style lang='scss' scoped>
.order-item-root{
    height: 100%;
}
.list-item{
        display: flex;
        flex-direction: row;
        text-align: start;
        font-size: 3.5vw;
        margin: 2vw 4vw;
        border-bottom: 1px solid #eee;
        .item-left{
            img {
                margin-top: 1.6vw;
                width: 12vw;
                height: 12vw;
                border-radius: 1vw;
            }
        }
    .item-right{
            margin: 0 4vw;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            >*{
                margin: 0.6vw 0;
            }
            .shopname{
                font-size: 4.5vw;
                font-weight: 600;
            }
            .time{
                // font-size: 3.6vw;
                color: #666;
            }
            .div-item{
                display: flex;
                justify-content: space-between;
                .price{
                    color: #fa8328;
                    font-size: 4.6vw;
                    font-weight: bold;
                }
                .state{
                    color: green;
                }
                
                
            }
            
        }
}
.none-data{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    img{
        width: 40vw;
    }
}
</style>
