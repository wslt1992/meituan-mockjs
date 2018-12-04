<template>
    <div class="right-menu-root" :class="{'top-bottom':istopbottom}">
            <slot name='left' >
                1
            </slot>
            <slot name='right'>
                2
            </slot>
    </div>
</template>

<script>
import $ from 'jquery'
/**
 * 左边被点击item需要添加‘[left-item]’属性
 * t-active 被点击记过后的样式名
 */

    export default {
        leftclickTag:'div',
        // leftclickTag:'[left-item]',
        props:{
            istopbottom:{
                default:false
            }
        },
        data:function(){
            return {
                show:false,
                leftclicktagS:null,
                rightShowS:null,
                initedBool:false//初始化标记位
            }
        },
        mounted(){
                
        },
        updated(){
            //在这里初始化，因为，父组件第一时间没有获取到数据，所以，slot里的div结构是空的。
            // 如果在mounted里面初始化，那么可能
            this.init();
        },
        methods:{
            /**
             * 完成初始化
             */
            init(){
                //如果获取到为空，表示，slot中的数据不能进行初始化
                // initedBool表示已经完成了初始化，不必再次初始化
                if(this.$el.querySelectorAll('[left-item]').length!==0&&!this.initedBool){
                    let leftclicktagS =this.leftclicktagS= this.$el.querySelectorAll('[left-item]');
                    leftclicktagS.forEach((element,index) => {
                        element.addEventListener('click', (event)=>{
                            this.hideRightOther(index);
                            // console.log(index)
                            this.updateActiveStyle(index);
                        })})
                    let rightShowS = this.rightShowS=this.$el.querySelectorAll('[right-item]');
                    
                    this.showDefaultItem();
                    this.showDefaultLeftItem()
                    // 完成初始化，该标记位
                    this.initedBool = true;
                }
            },
            updateActiveStyle(indexParam){
                this.leftclicktagS.forEach((element,index) => {
                    if(indexParam === index){
                        element.classList.add('t-active')
                    }else{
                        element.classList.remove('t-active')
                    }
                });
            },
            /**
             * 显示默认的item
             */
            showDefaultItem(){
                let defaultShow =this.$el.querySelector('.default-show[right-item]');
                if(defaultShow){
                    this.hideRightALl();
                    $(defaultShow).show();
                }else{
                    this.hideRightOther(0);
                }
            },
            /**
             * 显示默认的item
             */
            showDefaultLeftItem(){
                let defaultShow =this.$el.querySelector('.default-show[left-item]');
                if(defaultShow){
                    defaultShow.classList.add('t-active')
                }else{
                    this.updateActiveStyle(0)
                }
            },
            leftOnClick(){
                
            },
            hideRightALl(){
                this.rightShowS.forEach(element => {
                    $(element).hide();
                });
            },
            hideRightOther(num){
                this.rightShowS.forEach((element,index) => {
                    if(index===num){
                        $(element).show();
                    }else{
                        $(element).hide();
                    }
                });
            }
        }
    }
</script>

<style lang='scss' scoped>
.right-menu-root{
    display: flex;
    overflow: hidden;
    height: 100%;
    >*{
        // width: 100%;
    }
}
.top-bottom{
    flex-direction: column;
}
</style>