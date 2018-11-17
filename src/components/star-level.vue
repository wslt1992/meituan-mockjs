<template>
    <div class="stars">
        <!-- 高亮星星 -->
        <i v-for="{item,index} in starInt" :key="index" class="iconfont icon-star light-star"></i>
        <!-- 部分高亮星星 -->
        <i class="iconfont icon-star half-star" v-if="starFloat!=0" :style="halfStar()"></i>
        <!-- 灰色星星 -->
        <i class="iconfont icon-star gray-star" v-for="{item,index} in grayStar" :key="index"></i>
    </div>
</template>
<script>
export default {
    props:{
        score:{
            type:[Number,String],
            default:4.5
        }
    },
    data:function(){
        return {
            stars:this.score,
            maxStar:5,
            grayStar:0,//灰色星星数量
            starInt:4, //评分整数部分，范围：1-5
            starFloat:50, //评分小数部分,范围：0-100,表示百分比
        }
    },
    created:function(){
        this.processSocre(this.stars);
        this.grayStarFn();
    },
    methods:{
        /**
         * 分离评分正数与小数
         * */
        processSocre:function(num){
            console.log(Number(num));
            // 1、不是数值,评分改为默认值，并返回，是数值则进行后面的计算
            if(!Number(num)&&Number(num)!=0){
                this.starInt = 4; //更新整数为默认值4
                this.starFloat = 50; //更新小数值为默认值0
                console.log("请输入正确数值");
                return ;
            }
            
            let arr = Math.abs(num).toString().split(".");//保证数值是正数，并根据 小数点符号分离整数和小数
            let numFloat = 0; //临时存放小数
            let numInt = 0; //临时存放整数

            //  2、整数
            numInt = arr[0]>this.maxStar ? this.maxStar:Number.parseInt(arr[0]);//更新整数，若超出范围5，则直接赋值5 

            //  3、小数
            if(arr.length>1&&numInt<this.maxStar){ //有小数,并且整数小于最多星星数量
                numFloat = Number.parseInt(arr[1].toString().substr(0,1)+"0"); //更新小数,小数位数>1时，直接裁剪前1位，不做四舍五入运算
            }

            // 4、赋值
            this.starFloat = numFloat;
            this.starInt = numInt;
            console.log(this.starInt,this.starFloat);
        },
         /**
         * 部分高亮星星样式，利用背景渐变色实现，2中颜色百分比不同实现部分高亮部分灰色
         * */
        halfStar:function(){
            let per = this.starFloat;
            let str = `background-image:linear-gradient(90deg,#f36b1c ${per}%,#bbb ${per+1}%);`;
            return str;
        },
        grayStarFn:function(){
            let i = 0;
            if(this.starFloat!=0){
                i = 1;
            }
            this.grayStar = this.maxStar-this.starInt-i;
            console.log(this.grayStar);
        }
    }
}
</script>
<style scoped>
*{margin:0;padding:0;box-sizing:border-box;}
.stars{display: inline-flex;}
i{display: inline-block;margin:0 0.5vw;}
.light-star{color:#f36b1c;}
.gray-star{color:#bbb;}
.half-star{-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-image:linear-gradient(90deg,#f36b1c 50%,#bbb 51%);}
</style>


