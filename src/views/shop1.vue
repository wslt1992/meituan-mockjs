<template>
    <t-page page-root>
        <div slot="header">
            <t-header-new class="header">
                <div slot="center" >
                   正新鸡排
                </div>
            </t-header-new>
        </div>
        <t-right-menu slot="container">
            <div slot="left" class="menu-left">
                <div v-for="(item,index) in leftArr" :key="item.id">
                    <p left-item :class="index===0?'default-show':''">{{item}}</p>
                </div>
            </div>
            <div slot='right' class="menu-right">
                <div right-item class="default-show" v-for="(itemArr) in rightArr" :key="itemArr.id">
                    <div class="food-item" v-for="(item,index) in itemArr" :key="item.id">
                        <img src="../assets/imgs/food1.jpg" alt="">
                            <div>
                                <span class="header">{{item}}</span>
                                <span class="tips">够脆、够香、嘎嘣脆</span>
                                <div><span class="sale">月销：5435</span><span class="like">赞23</span></div>
                                <div class="priceAndaddtoChe"><span class="price">￥23</span><span @click="addToChe(index,item)" class="addToChe">+</span></div>
                            </div>
                    </div>
                </div>
                
            </div>
        </t-right-menu>
        <div slot="footer" >
            <div class="footer" >
                <div class="price-div" @click="popupChe" id="popupTarget"><span></span><span class="price">{{gouwucheArr.length}}份</span></div>
                <div class="account" @click="toPlacingOrder">结算(￥{{this.account}})</div>
            </div>
            <t-popup :target='popupTarget' direction='top' :show="popupShow">
                <div class="zhezhao" @click="closePopup">
                    <div class="popup-che">
                        <div >
                            清空购物者
                        </div>
                        <div class="popup-che-container">
                            <div v-for="item in gouwucheArr" :key="item.id" class="cell">
                                <span class="name">{{item.foodname}}</span>
                                <span class="price">￥{{item.price}}</span>
                                <div class="input">
                                    <span class="input-jian" @click="jianToChe(item.foodid)">-</span>
                                    <span>{{item.num}}</span>
                                    <span class="input-add" @click="addToCheByFoodid(item.foodid,1)">+</span>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </t-popup>
        </div>
        
    </t-page>
</template>

<script>

    export default {
        data() {
            return {
                leftArr:['烤肉类','蔬菜类','海鲜类','锡纸类','小炒类','酒水类'],
                rightArr:[
                    ['烤韭菜','羊肉串','鸡全翅','葱香豆皮','谈烤肥牛','葱香茄子','台湾热狗'],
                    [
                        '羊肉串','蜜汁牛排','滋补羊腰','香辣牛蹄','牛肉串','牛板筋','鸡脆骨','鸡全翅','鸡中翅','鸡腿','鸡爪','骨肉相连','香辣猪蹄','麻辣牛肚','羊肉串','蜜汁牛排','滋补羊腰','香辣牛蹄',
                        '牛肉串','牛板筋','鸡脆骨','鸡全翅','鸡中翅','鸡腿','鸡爪','骨肉相连','香辣猪蹄','麻辣牛肚','羊肉串','蜜汁牛排','滋补羊腰','香辣牛蹄','牛肉串','牛板筋','鸡脆骨','鸡全翅','鸡中翅','鸡腿',
                        '鸡爪','骨肉相连','香辣猪蹄','麻辣牛肚'
                    ],
                    [
                        '烤韭菜','金针菇','娃娃菜','土豆片','四季豆','烤香菇',
                        '青椒','烤面筋','葱香豆皮','香叶豆腐','葱香茄子','烤年糕',
                        '玉米','油炸花生米','烤大葱','白干豆腐'
                    ]                
                ],
                popupTarget:null,
                popupShow:false
            }
        },
        methods: {
            /**
                跳转到下单页
             */
            toPlacingOrder(){
                this.$router.push(this.$url.navigator.placingOrderPath)
            },
            /**
             * 弹出购物车
             */
            popupChe() {
                this.popupShow=!this.popupShow;
            },
            /**
             * 关闭弹出的窗口
             */
            closePopup($event){
                if($event.target===this.$el.querySelector('.zhezhao')){
                    this.popupShow = false;
                }
            },
            /**
             * 添加到购物车
             */
            addToChe(index,foodname){
                let foodid=index;
                console.log(foodid,'foodid');
                let o = {
                    foodid,
                    foodname:foodname,
                    price:_.floor(1+Math.random()*999,2),
                    num:1,//数量
                }
                 this.$store.commit('shoppingCart/push',o);
            },
            addToCheByFoodid(foodid,num){
                let o = {
                    foodid,
                    num:num,//数量
                }
                 this.$store.commit('shoppingCart/push',o);
            },
            jianToChe(foodid){
                this.$store.commit('shoppingCart/jian',foodid);
            }
        },
        computed: {
            /**
             * 结算
             */
            account() {
                let count = 0;
                this.gouwucheArr.forEach(element => {
                    count+=element.price*element.num;
                });
                return _.floor(count,2);
            },
            gouwucheArr(){
                return this.$store.state.shoppingCart.gouwucheArr;
            }
        },
        watch: {
            
        },
        mounted(){
           this.popupTarget = this.$el.querySelector('#popupTarget')
        }
    }
</script>

<style lang='scss' scoped>
// header开始
.header{
    color: #555;
    font-size: 5vw;
    font-weight: bold;
    height: 10vw;
    display: flex;
    align-items: center;
}
// header结束
// 左右菜单开始
.menu-left{
    width: 25%;
    overflow: scroll;
    background-color: #f5f5f5;
    [left-item]{
        padding: 5vw 0;
        background-color: #f5f5f5;
        color: #888;
        margin: 0;
    }
    [left-item].t-active{
        background-color: #ffffff;
        color: #444;
        font-weight: 700;
    }
}
.menu-right{
    text-align: start;
    height: 100%;
    width: 75%;
    overflow: scroll;
    color: #555;
    padding-left: 3vw;
    .food-item{
        display: flex;
        margin-bottom: 4vw;
        >img{
            padding-top: 1vw;
            width: 20vw;
            height: 20vw;
        }
        >div{
            padding-left: 3vw;
            flex-grow: 1;
        }
        .header{
            color: #555;
            font-size: 5vw;
            font-weight: bold;
        }
        .tips{
            color: #aaa;
            display: block;
            font-size: 3.6vw;
        }
        .sale , .like{
            font-size: 3.6vw;
            color: #aaa;
        }
        .like{
            padding-left: 2vw;
        }
        
        .priceAndaddtoChe{
            width: 100%;
            display: flex;
            justify-content:space-between;
            align-items: center;
            .price{
                color: #ff4c41;
                font-weight: 700;
                font-size: 5vw;
            }
            .addToChe{
                box-sizing: border-box;
                padding-top: 1px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                width: 5vw;
                height: 5vw;
                background-color: rgb(240, 186, 9);
                margin-right: 6vw;
                // font-weight: 700;
                font-size: 6vw;
                // border: 1px solid ;
            }
        }
        
    }
    
}
// 左右菜单结束
// footer开始
.footer{
    background-color: #666;
    display: flex;
    height: 15vw;
    justify-content: center;
    align-items: stretch;
    font-size: 6vw;
    .price-div{
        flex-grow: 1;
        max-width: 50vw;
        background-color:#fff;
        font-weight: 700;
        line-height: 15vw;
        font-size: 6vw;
        .price{
            color: #ff4c41;
            font-size: 6vw;
        }
    }
    
    .account{
        flex-grow: 1;
        // padding: 0 8vw;
        max-width: 50vw;
        background-color:#ff4c41;
        color: #f5f5f5;
        height: 15vw;
        line-height: 15vw;

    }
}
// footer结束

// 弹出的框购物数量开始
.zhezhao{
    height: 90vh;
    background-color: #555c;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.popup-che{
    width: 100vw;
    background-color: #fff;
    .cell{
        display: flex;
        .name{
            width: 50vw;

        }
        .price{
            width: 25vw;
        }
        .input{
            width:25vw;
            .input-jian,.input-add{
                display: inline-block;
                width: 6vw;
                border: 1px solid black; 
                // border-radius: 11px 0 0 11px ;
            }
        }
    }
}
// 弹出的框购物数量结束

</style>