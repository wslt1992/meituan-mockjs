<template>
    <div class="right-menu-root">
        <div class="left">
            <slot name='left' >
                1
            </slot>
        </div>
        <div class="right">
            <slot name='right'>
                2
            </slot>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
/**
 * 左边被点击item需要添加‘[leftclick]’属性
 * 
 */
    export default {
        leftclickTag:'div',
        // leftclickTag:'[leftclick]',
        data:function(){
            return {
                show:false,
                leftclicktagS:null,
                rightShowS:null,
            }
        },
        mounted(){
                let leftclicktagS =this.leftclicktagS= this.$el.querySelectorAll('[leftclick]');
                leftclicktagS.forEach((element,index) => {
                    element.addEventListener('click', (event)=>{
                        this.hideRightOther(index);
                        console.log(index)
                    })})
            let rightShowS = this.rightShowS=this.$el.querySelectorAll('[rightshow]');
                rightShowS.forEach((element,index) => {
                    this.hideRightALl();
                    })
            
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
    // flex-direction: column;
    .left{
        width: 50%;
    }
    .right{
        width: 50%;
    }
}
</style>