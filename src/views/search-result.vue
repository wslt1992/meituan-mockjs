<template>
    <div>
        <lt-header>
            <search-bar class="search-bar"></search-bar>
        </lt-header>

        <!-- 选择器，选择菜分类、地区 、排序开始-->
        <div class="seletor" >
            <bottom-menu class="seletor-bar" :show="isBottomShow[0]">
                <div >
                    <span @click="switchBottom(0)">全部分类</span>
                </div>
                <div slot='bottom'>
                    <div>类型1</div>
                    <div>类型2</div>
                    <div>类型3</div>
                    </div>
            </bottom-menu>
            <bottom-menu class="seletor-bar" bottomleft="-36.3vw" :show="isBottomShow[1]">
                <div>
                    <span @click="switchBottom(1)">全城</span>
                </div>
                <div slot='bottom' class="seletor-bar-bottom">
                    <div>深圳</div>
                    <div>上海</div>
                    <div>南京</div>
                </div>
            </bottom-menu>
            <bottom-menu class="seletor-bar" bottomleft="-64.7vw" :show="isBottomShow[2]">
                <div>
                    <span @click="switchBottom(2)">智能排序</span>
                </div>
                <div slot='bottom' class="seletor-bar-bottom">下拉的列表23333333333333333</div>
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
                items:[],
                isBottomShow:[false,false,false]
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
            },
            switchBottom(num){
                switch (num){
                    case 0:
                    this.$set(this.isBottomShow,0,true)
                    this.$set(this.isBottomShow,1,false)
                    this.$set(this.isBottomShow,2,false)
                        
                    break;
                    case 1:

                    this.$set(this.isBottomShow,0,false)
                    this.$set(this.isBottomShow,1,true)
                    this.$set(this.isBottomShow,2,false)
                    break;
                    case 2:
                        this.$set(this.isBottomShow,0,false)
                        this.$set(this.isBottomShow,1,false)
                        this.$set(this.isBottomShow,2,true)
                    break;
                }
            }
        },
        mounted:function(){
            this.requestData();
        }
    }
</script>

<style lang='scss' scoped>
    // 分类bar开始
    .seletor{
        display: flex;
        // justify-content: space-around;
        .seletor-bar{
            flex-grow: 1;
        }
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