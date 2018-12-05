<template>
    <div>
        <div v-for="(item,index) in items" :key="index" class="list-item" @click="toShop">
            <h6>{{item.id}}</h6>
            <div class="item-left">
                <img :src='item.img' alt="">
                <!-- <img src="../assets/imgs/shop.jpg" alt=""> -->
            </div>
            <div class="item-right">
                <span class="shopname">{{item.shopname}}</span>
                <div class="div-item">
                    <span class="price"><b>￥</b>{{item.price}}</span>
                    <span class="distance">{{item.distance}}km</span>
                </div>
                <div class="div-item">
                    <span class="tips">{{item.tips}}</span>
                    <span class="sold"><b>销量:</b>{{item.sold}}</span>
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
        methods: {
            toShop() {
                this.$router.push(this.$url.navigator.shopPath)
            }
        },
    }
</script>

<style lang='scss' scoped>
*{margin:0;padding:0;box-sizing:border-box;}
// 列表开始
    .list-item{
        display: flex;
        flex-direction: row;
        text-align: start;
        font-size: 4.3vw;
        margin: 2vw 0;
        .item-left{
            img {
                width: 20vw;//txl-modify
                height: 20vw;//txl-modify
            }
        }
        .item-right{
            flex-grow: 1;
            margin-left:2vw;//txl-add
            display: flex;
            flex-direction: column;
            >*{
                margin: 0.6vw 0;
            }
            .shopname{
                margin:0;padding:0;
                font-size: 4.4vw;//txl-modify
                font-weight: bold;
                color: #222;
            }
            .div-item{
                display: flex;
                justify-content: space-between;
                .price{
                    color: #fc9443; //txl-modify
                    font-size:5.4vw;//txl-add
                    font-weight: bold;//txl-add
                    b{
                        font-size: 4vw;
                    }
                }
                .distance{
                    color: #aaa;
                    font-size:3.6vw;//txl-add
                }
                .tips{
                    width: 40vw;
                    color: #aaa;
                    overflow: hidden;    
                    text-overflow:ellipsis;    
                    white-space: nowrap;
                    font-size:3.8vw;//txl-add
                }
                .sold{
                     color: #25abb1;//txl-modify
                     font-size: 3.6vw;//txl-add
                    b{color:#aaa;font-weight: normal}//txl-add
                }
                
            }
            .address{
                font-size: 3.6vw;
                color:#666;
            }
            
            
        }
    }
    //列表结束
/* txl -------start */
.list-item{background-color:#fff;padding:3vw;}
/* txl--------end */
</style>