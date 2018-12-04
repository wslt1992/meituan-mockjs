<template>
    <t-page>
        <t-header-new slot="header">
            <div slot="center">
                下订单
            </div>
        </t-header-new>
        <div slot='container' class="container">
            <div class="shopname">
                神探烧烤(上川店)
            </div>
            <div class="food" v-for="item in gouwucheArr" :key="item.id">
                <img src="../assets/imgs/food1.jpg" alt="">
                <div class="food-center">
                    <span class="foodname">
                        {{item.foodname}}
                    </span>
                    <span class="count">
                        x{{item.num}}
                    </span>
                </div>
                <div class="account">
                    ￥{{item.price}}
                </div>
            </div>
        </div>
        <div slot="bottom-fix">
            <div class="total">
                合计：{{Alltotal}}
            </div>
        </div>
        <div slot="footer">
            <div class="order">下&ensp;&ensp;单</div>
        </div>
    </t-page>
</template>

<script>
    export default {
        computed: {
            gouwucheArr() {
                return this.$store.state.shoppingCart.gouwucheArr;
            },
            /**
             * 总价格
             */
            Alltotal(){
                let count= 0;
                this.gouwucheArr.forEach(element => {
                    count+= element.price*element.num;
                });
                return count;
            }
        },
    }
</script>

<style lang='scss' scoped>

//TODOS 样式
// container开始
.container{
    color: #333;
    text-align: start;
    box-sizing: border-box;
    padding: 0 3vw;
    .food{
        display: flex;
        justify-content: center;
        align-items: stretch;
        margin: 3vw 0;
        img{
            width: 15vw;
            height: 15vw;
        }
        .food-center{
            padding-left: 4vw;
            flex-grow: 1;
            display: flex;
            flex-direction:column;
            justify-content: space-between;
            align-items: flex-start;
            .foodname{
                // color: #333;
                display: inline-block;
            }
            .count{
                color: #999;
                display: inline-block;
            }
        }
        .account{
            font-size: 5vw;
            font-weight: 600;
        }
        
    }
    
}
// container结束
// 合计开始
.total{
    display: flex;justify-content: flex-end;
    padding-right: 10vw;
}
// 合计结束
// footer开始
.order{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 13vw;
    background-color: #ff4c41;
    color:#fff;
    font-size: 5.5vw;
}
// footer结束
</style>