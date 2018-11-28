<template>
        <t-page>
        <t-header-new slot="header">
            <search-bar :keyword='searchKeyword' slot="center" class="search-bar"></search-bar>
        </t-header-new>

        <div class="seletor" slot="top-fix">
            <t-bottom-menu ref="bottomMenu" istopbottom='true' >
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
                                    <p @click='paixuSubItem'>日本菜</p>
                                    <p @click='paixuSubItem'>饮品店</p>
                                    <p @click='paixuSubItem'>面包甜点</p>
                                    <p @click='paixuSubItem'>生日蛋糕</p>
                                    <p @click='paixuSubItem'>火锅</p>
                                    <p @click='paixuSubItem'>自助餐</p>
                                    <p @click='paixuSubItem'>日本料理</p>
                                    <p @click='paixuSubItem'>西餐</p>
                                </div>
                                <div rightshow>
                                    <p @click='paixuSubItem'>酒吧</p>
                                </div>
                                <div rightshow>
                                    <p @click='paixuSubItem'>照片冲洗</p>
                                    <p @click='paixuSubItem'>其他生活</p>
                                </div>
                                <div rightshow>
                                    <p @click='paixuSubItem'>特色餐厅</p>
                                </div>
                                <div rightshow>
                                    <p @click='paixuSubItem'>停车场</p>
                                </div>
                                <div rightshow>
                                    <p @click='paixuSubItem'>婚宴</p>
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
                                    <p @click='paixuSubItem'>right21</p>
                                    <p @click='paixuSubItem'>right22</p>
                                    <p @click='paixuSubItem'>right23</p>
                                    <p @click='paixuSubItem'>right24</p>
                                </div>
                                <div rightshow>
                                    <p @click='paixuSubItem'>right21</p>
                                    <p @click='paixuSubItem'>right22</p>
                                    <p @click='paixuSubItem'>right23</p>
                                    <p @click='paixuSubItem'>right24</p>
                                </div>
                                <div rightshow>
                                    <p @click='paixuSubItem'>right31</p>
                                    <p @click='paixuSubItem'>right32</p>
                                    <p @click='paixuSubItem'>right33</p>
                                    <p @click='paixuSubItem'>right34</p>
                                </div>
                            </div>
                        </t-right-menu>
                    </div>
                    <div bottomshow>
                        <p @click='paixuSubItem'>智能排序</p>
                        <p @click='paixuSubItem'>好评优先</p>
                        <p @click='paixuSubItem'>离我最近</p>
                        <p @click='paixuSubItem'>人均最低</p>
                        <p @click='paixuSubItem'>人气最高</p>
                    </div>
                </div>
            </t-bottom-menu>
        </div>
        <!-- 选择器，选择菜分类、地区 、排序开始-->
        
        <!-- 选择器，选择菜分类、地区 、排序结束 -->
        <div class="content" slot="container"
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
        </t-page>
</template>

<script>
/**
 * 搜索后的结果页/搜索列表页
 */
import {Toast} from 'mint-ui'
    export default {
        
        data:function(){
            return {
                popupVisible:true,
                loading:false,
                items:[],
                isBottomShow:[false,false,false],
                searchKeyword:null
            }
        },
        methods:{
            loadMore(){
                    this.requestData();
            },
            requestData(){
                this.$https.listing.request().then((data)=>{
                    this.items.push(...data.list)
                })
            },
            resetRequestData(){
                this.items.length=0;
                this.requestData();
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
            },
            // 第三项排序的点击事件
            paixuSubItem(event){
                // console.log(event.target.innerText,event)
                this.searchKeyword = event.target.innerText;
                this.resetRequestData()
                Toast({
                    message: event.target.innerText,
                    position: 'bottom',
                    duration: 3000
                });
                this.$refs.bottomMenu.hideAllSubmenu();
            },
            initDataRoute(){
                this.searchKeyword = this.$route.params.searchKeyword;
            }
        },
        created(){
            this.initDataRoute()
            this.requestData();
        },
        mounted:function(){
        }
    }
</script>

<style lang='scss' scoped>
.search-bar{
    // height: 20vw;
}
    // 分类bar开始
    .seletor{
        // justify-content: space-around;
        font-size:3.6vw;
        .seletor-bar{
            display: flex;
            border-bottom: 1px solid #eee;
            p::after{content:"";display:inline-block;width:0;height:0;border:4px solid transparent;border-top-color:#aaa;margin-bottom:-2px;margin-left: 3px;}
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
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
        }
    }
    
    // 分类bar结束
/* txl-------------start */
// /deep/.lt-header-root .mint-header{background-color:#fff;color:#333;position:fixed;top:0;right:0;left:0;z-index:9999;height:13vw!important;}
// /deep/ .search-bar .root{background-color:#f5f5f5;font-size:3.6vw;line-height: 8.7vw;height:8vw;}
// /deep/ .lt-header-root .center{position: fixed!important;z-index:10000;top:2.6vw;}
// /deep/ .search-bar .root i.icon-sousuo{font-size:3.6vw;font-weight: bold;}
// .seletor{top:16vw;position:fixed;top:13vw;right:0;left:0;background-color:#fff;height:10vw;}
// .seletor{font-size:3.6vw;}
// /deep/.seletor .seletor-bar p{line-height: 3.4vw;}
// /deep/.seletor .seletor-bar p::after{content:"";display:inline-block;width:0;height:0;border:4px solid transparent;border-top-color:#aaa;margin-bottom:-2px;margin-left: 3px;}
// /deep/.seletor .bottom-menu-style{top:9.9vw;text-align:left;padding-left:8vw;}
// .content{margin-top:26vw;}
/* txl-------------end */  
</style>