<template>
    <div class="top-menu-root" :class="{'top-bottom':istopbottom}">
        <div >
            <slot class="top" name='top' >
                1
            </slot>
        </div>
        <div v-show="currentIndex!==-1">
            <slot  class="bottom" name='bottom'>
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
        props:{
            istopbottom:{
                default:true
            },
            // float:{
            //     default:false
            // }
        },
        data:function(){
            return {
                show:false,
                topclicktagS:null,
                bottomShowS:null,
                currentIndex:-1,
            }
        },
        mounted(){
                let topclicktagS =this.topclicktagS= this.$el.querySelectorAll('[topclick]');
                topclicktagS.forEach((element,index) => {
                    element.addEventListener('click', (event)=>{
                        // console.log(index)
                        if(index===this.currentIndex){
                            this.hideRightALl()
                        }else{
                            this.currentIndex = index;
                            this.hideRightOther(index);
                        }
                        // console.log(index)
                        
                    })})
            let bottomShowS = this.bottomShowS=this.$el.querySelectorAll('[bottomshow]');
                    this.hideRightALl();
            
        },
        methods:{
            leftOnClick(){
                
            },
            
            hideRightALl(){
                this.bottomShowS.forEach(element => {
                    $(element).hide();
                });
                this.currentIndex = -1;
            },
            hideRightOther(num){
                this.bottomShowS.forEach((element,index) => {
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
.top-menu-root{
    display: flex;
    position: relative;
    // flex-direction: column;
    .top{
        // width: 50%;
    }
    .bottom{
        background-color: #fff;
        // width: 50%;
    }
}
.top-bottom{
    flex-direction: column;
}
</style>