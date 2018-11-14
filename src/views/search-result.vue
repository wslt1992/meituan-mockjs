<template>
    <div>
        <lt-header>
            <search-bar class="search-bar"></search-bar>
        </lt-header>

        <!-- 选择器，选择菜分类、地区 、排序开始-->
        <div class="seletor">
            <bottom-menu>
                <div class="seletor-bar">
                    <span>全部分类</span>
                    <span>全城</span>
                    <span>智能排序</span>
                </div>
                <div slot='bottom'>下拉的列表</div>
            </bottom-menu>
        </div>
        <!-- 选择器，选择菜分类、地区 、排序结束 -->
        <div class="content" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="50">
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
            <mt-spinner type="triple-bounce"></mt-spinner>
        </div>
    </div>
</template>

<script>
/**
 * 搜索后的结果页/搜索列表页
 */
    export default {
        
        data:function(){
            return {
                popupVisible:true,
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
                this.$https.listing.request().then((data)=>{
                    this.items.push(...data.list)
                })
            }
        },
        mounted:function(){
            this.requestData();
        }
    }
</script>

<style lang='scss' scoped>
    // 分类bar开始
    .seletor-bar{
        display: flex;
        justify-content: space-around;
    }
    // 分类bar结束
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