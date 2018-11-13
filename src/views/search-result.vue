<template>

    <div>
        <div class="content" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="50">
 
            <div v-for="(item,index) in items" :key="index" class="list-item">
                <h1>{{item.id}}</h1>
                <div class="item-left">
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
            <mt-spinner type="triple-bounce"></mt-spinner>
        </div>
    </div>
</template>

<script>
/**
 * 搜索后的结果页/搜索列表页
 */
import axios from 'axios';
    export default {
        
        data:function(){
            return {
                loading:false,
                items:[]
            }
        },
        methods:{
            loadMore(){
                setTimeout(() => {
                    this.requestData();
                }, 4000*Math.random());
                
            },
            requestData(){
                axios.get(this.$url.listing).then((res)=>{
                    console.log(res.data.list)
                    this.items.push(...res.data.list)
                })
            }
        },
        mounted:function(){
            this.requestData();
        }
    }
</script>

<style lang='scss' scoped>
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

                    width: 53vw;
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
</style>