<template>
    <div>
        <t-header>
            <search-bar class="search-bar"></search-bar>
        </t-header>

        <div class="seletor">
            <t-bottom-menu istopbottom='true'>
                <div slot="top" class="seletor-bar">
                    <p topclick>全部分类</p>
                    <p topclick>全城</p>
                    <p topclick>智能排序</p>
                </div >
                <div slot='bottom' class="bottom-menu-style">
                    <div bottomshow>
                        <t-right-menu >
                            <div slot="left">
                                <p leftclick>美食</p>
                                <p leftclick>休闲娱乐</p>
                                <p leftclick>生活服务</p>
                                <p leftclick>宴会</p>
                                <p leftclick>汽车服务</p>
                                <p leftclick>结婚</p>
                            </div>
                            <div  slot='right'>
                                <div rightshow>
                                    <p >日本菜</p>
                                    <p >饮品店</p>
                                    <p >面包甜点</p>
                                    <p >生日蛋糕</p>
                                    <p >火锅</p>
                                    <p >自助餐</p>
                                    <p >日本料理</p>
                                    <p >西餐</p>
                                </div>
                                <div rightshow>
                                    <p >酒吧</p>
                                </div>
                                <div rightshow>
                                    <p >照片冲洗</p>
                                    <p >其他生活</p>
                                </div>
                                <div rightshow>
                                    <p >特色餐厅</p>
                                </div>
                                <div rightshow>
                                    <p >停车场</p>
                                </div>
                                <div rightshow>
                                    <p >婚宴</p>
                                </div>
                            </div>
                        </t-right-menu>
                    </div>
                    <div bottomshow>
                        <t-right-menu >
                            <div slot="left">
                                <p leftclick>left1</p>
                                <p leftclick>left2</p>
                                <p leftclick>left3</p>
                            </div>
                            <div  slot='right'>
                                <div rightshow>
                                    <p >right21</p>
                                    <p >right22</p>
                                    <p >right23</p>
                                    <p >right24</p>
                                </div>
                                <div rightshow>
                                    <p >right21</p>
                                    <p >right22</p>
                                    <p >right23</p>
                                    <p >right24</p>
                                </div>
                                <div rightshow>
                                    <p >right31</p>
                                    <p >right32</p>
                                    <p >right33</p>
                                    <p >right34</p>
                                </div>
                            </div>
                        </t-right-menu>
                    </div>
                    <div bottomshow>
                        <p >智能排序</p>
                        <p >好评优先</p>
                        <p >离我最近</p>
                        <p >人均最低</p>
                        <p >人气最高</p>
                    </div>
                </div>
            </t-bottom-menu>
        </div>
        <!-- 选择器，选择菜分类、地区 、排序开始-->
        
        <!-- 选择器，选择菜分类、地区 、排序结束 -->
        <div class="content" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="50">
            <search-list-item :items='items'> 

            </search-list-item>
            <!-- <div v-for="(item,index) in items" :key="index" class="list-item">
                <h6>{{item.id}}</h6>
                <div class="item-left"> -->
                    <!-- <img :src='item.img' alt=""> -->
                    <!-- <img src="../assets/imgs/shop.jpg" alt="">
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
            </div> -->
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
                    console.log(this.items)
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
        // justify-content: space-around;
        .seletor-bar{
            display: flex;
            >*{
                flex-grow: 1;
            }
            .left-item{
                
            }
            .right-item{

            }
        }
        .bottom-menu-style{
            width: 100%;
            height: 80vw;
            background-color: #fff;
            position: absolute;
            top:12vw;
        }
    }
    
    // 分类bar结束
    
</style>