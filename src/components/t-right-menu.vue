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
            }
        },
        mounted(){
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
        },
        methods:{
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
                let defaultShow =this.$el.querySelector('[default-show][right-item]');
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
                let defaultShow =this.$el.querySelector('[default-show][left-item]');
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
    >*{
        // width: 100%;
    }
}
.top-bottom{
    flex-direction: column;
}
</style>