<template>
    <div>
        <div class="scroll">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
/**
 * 使用实例：
 * <t-swiper class="t-swiper-default" v-model="selectedIndex">//----->类名必须相同1
        <div>精选</div>
        <div>爱美食</div>
        <div>关注</div>
        <div>出去浪</div>
        <div>健康生活</div>
    </t-swiper>

    scss

    .t-swiper-default{//---------------->类名必须相同1
        font-size: 0;
        >div.scroll{
            >*{
                display: inline-flex;
                font-size: 4vw;
                height: 13vw;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                width: 20vw;
                border-bottom: 0.3vw solid $gray;
                padding-bottom: 0.2vw;
            }
            .t-swiper-item-checked{//---------------->点击后激活的样式名，或props[checkedClass]传入
                border-bottom: 0.5vw solid $primary-color;
                color: $primary-color;
                padding-bottom: 0vw;
            }
        }
        
    }
 */
import $ from 'jquery';
    export default {
        props: {
            //item被选中时,激活的样式名
            checkedClass: {
                type: String,
                default: 't-swiper-item-checked',
                initedBool:false
            },
            
            normalClass:{
                type: String,
                // default:'t-swiper-item'
            }
        },
        data() {
            return {
                leftByTargetPoint: 0,
                scrollDiv:null,//scroll对象，
                itemS:null,
                currentCheckedNum:0
            }
        },
        methods: {
            changeAddClass(newValue,oldValue) {
                this.itemS[oldValue].classList.remove(this.checkedClass);
                this.itemS[newValue].classList.add(this.checkedClass);
            },
            // initNormalClass() {
            //     this.itemS.forEach(element => {
            //         element.classList.add(this.normalClass);
            //     });
            // },
            chageEmit(newValue){
                this.$emit('input',newValue)
            },
            initStartClass(val){
                this.itemS[val].classList.add(this.checkedClass);
                // this.initNormalClass();
            },
            /**
             * 是否完成了初始化
             */
            isInit(){
                return this.$el.querySelectorAll('.scroll>*').length>0&&!this.initedBool
            },
            init(){
                if(this.isInit())
                {
                    let _this = this;
                    this.scrollDiv = this.$el.querySelector('.scroll');
                    this.scrollDiv.addEventListener('scroll',function(){
                        // console.log(this.scrollLeft)
                    })

                    //找出目标点
                    let scrollDivMiddle = this.scrollDiv.offsetWidth/2;
                    // 后添加样式，获取的宽错误
                    // let itemWidth = this.$el.querySelector('.scroll>*').offsetWidth;
                    // let targetPoint = scrollDivMiddle - itemWidth/2;
                    // ------->改
                    let targetPoint = scrollDivMiddle - this.scrollDiv.offsetWidth/5;

                    let childs =this.itemS= this.$el.querySelectorAll('.scroll>*')
                    childs.forEach((element,index) => {
                        element.addEventListener('click',function(){
                            _this.currentCheckedNum = index;
                            // console.log(this,this.offsetLeft,'123')
                            /**
                             * scrollDiv需要滚动的距离，
                             * leftByTargetPoint：表示item的x距离target的x之间的距离，
                             * 即item相对于target的left
                             * 
                             * 距离<0：移动到0
                             */
                            _this.leftByTargetPoint = this.offsetLeft-targetPoint;
                            console.log(_this.leftByTargetPoint,this.offsetLeft,targetPoint,'_this.leftByTargetPoint')
                            // console.log(distance,targetPoint,'5')
                        })
                    });
                    this.initStartClass(this.currentCheckedNum);
                    this.initedBool=true;
                }
            }
        },
        mounted(){
            
        },
        updated(){
            this.init();
        },
        watch: {
            /**
             * 滚动到地点
             */
            leftByTargetPoint(newValue, oldValue) {
                // this.scrollDiv.scrollTo(newValue,0)
                $(this.scrollDiv).animate({"scrollLeft":newValue},'fast');
                // console.log(newValue,this.scrollDiv.scrollLeft,'22222222')
            },
            currentCheckedNum(newValue, oldValue) {
                this.changeAddClass(newValue,oldValue);
                this.chageEmit(newValue)
            }
        },
    }
</script>

<style lang='scss' scoped>
    .scroll{
        overflow: scroll;
        color: black;
        white-space:nowrap;
        &::-webkit-scrollbar
        {
            // 隐藏滑块
            display: none;
        }
        // >*{
        //     display: inline-block;
        //     width: 15vw;
        //     margin: 0 2vw;
        //     border: 1px solid #234563;
        // }
    }
</style>