<template>
    <div>
        <div v-for="(item,index) in items" :key="index" class="list-item">
            <h6>{{item.id}}</h6>
            <div class="item-left">
                <!-- <img :src='item.img' alt=""> -->
                <img src="../assets/imgs/shop.jpg" alt="">
            </div>
            <div class="item-right">
                <span class="shopname">{{item.shopname}}</span>
                <div class="div-item">
                    <span class="price">￥{{item.price}}</span>
                    <span class="distance">{{item.distance}}km</span>
                </div>
                <div class="div-item">
                    <span class="tips">{{item.tips}}</span>
                    <span class="sold">销量:{{item.sold}}</span>
                </div>
                <span class="address">地址:{{item.tips}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            items: {
                type: Array,
                // required
                // default: 
            },
        },
        data() {
            return {
                // key: value
            }
        },
    }
</script>

<style lang='scss' scoped>

// 列表开始
    .list-item{
        display: flex;
        flex-direction: row;
        text-align: start;
        font-size: 4.3vw;
        margin: 2vw 0;
        .item-left{
            img {
                width: 25vw;
                height: 25vw;
            }
        }
        .item-right{
            flex-grow: 1;

            display: flex;
            flex-direction: column;
            >*{
                margin: 0.6vw 0;
            }
            .shopname{
                font-size: 5.5vw;
                font-weight: bold;
                color: #222;
            }
            .div-item{
                display: flex;
                justify-content: space-between;
                .price{
                    color: #666;
                }
                .distance{
                    color: #aaa;
                }
                .tips{
                    width: 40vw;
                    color: #aaa;
                    overflow: hidden;    
                    text-overflow:ellipsis;    
                    white-space: nowrap;
                }
                .sold{
                    color: aquamarine;
                }
                
            }
            .address{
                font-size: 3.6vw;
            }
            
            
        }
    }
    //列表结束

</style>