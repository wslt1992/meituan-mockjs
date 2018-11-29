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
 * 
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
                        console.log(index)
                    })})
                let rightShowS = this.rightShowS=this.$el.querySelectorAll('[right-item]');
                let defaultShow =this.$el.querySelector('[default-show]');
                if(defaultShow){
                    this.hideRightALl();
                    $(defaultShow).show();
                }else{
                    this.hideRightOther(0);
                }
                
        },
        methods:{
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
    >*{
        // width: 100%;
    }
}
.top-bottom{
    flex-direction: column;
}
</style>