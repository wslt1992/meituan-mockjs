<template>
    <div>
        <div v-for="(item,index) in items" :key="index" class="list-item">
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
    }
}
</script>

<style lang='scss' scoped>
.list-item{
        display: flex;
        flex-direction: row;
        text-align: start;
        font-size: 3.5vw;
        margin: 2vw 4vw;
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
                color: #222;
            }
            .time{
                // font-size: 3.6vw;
                color: #666;
            }
            .div-item{
                display: flex;
                justify-content: space-between;
                .price{
                    color: #666;
                }
                .state{
                    color: green;
                }
                
                
            }
            
        }
}
</style>
