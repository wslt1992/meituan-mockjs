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
            <div class="food">
                <img src="../assets/imgs/food1.jpg" alt="">
                <div class="food-center">
                    <span class="foodname">
                        羊肉串(4串)
                    </span>
                    <span class="count">
                        x3
                    </span>
                </div>
                <div class="account">
                    ￥38.4
                </div>
            </div>
            <div class="food">
                <img src="../assets/imgs/food1.jpg" alt="">
                <div class="food-center">
                    <span class="foodname">
                        羊肉串(4串)
                    </span>
                    <span class="count">
                        x3
                    </span>
                </div>
                <div class="account">
                    ￥38.4
                </div>
            </div>
        </div>
    </t-page>
</template>

<script>
    export default {
        
    }
</script>

<style lang='scss' scoped>

//TODOS 样式
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
</style>