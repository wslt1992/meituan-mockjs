<template>
    <div class="t-popup" :style="computePosition">
        <slot>请添加slot</slot>
    </div>
</template>

<script>
/**
 * 指定相对A组件或者B标签位置弹出
 * 
 * 案例父
 * 
 * <t-popup :target='target' direction='bottom'>
        <div class="pop">这是需要弹出的内容</div>
    </t-popup>
 * 
 *  mounted(){
      this.target = this.$el.querySelector('#target')
    },
    data: function() {
        return {
        target:null
        };
    },
 */
    export default {
        props: {
            direction: {
                type: String,
                default: 'bottom'//bottom top right left
            },
            target:{
                // type:Object,
                // default:()=>{}
                required:true
            },
            spacing:{
                type:Number,
                default:0
            }
        },
        computed: {
            computePosition() {
                //有可能为空，
                if(this.target){
                    console.log(this.direction)
                    let position = this.target.getBoundingClientRect();
                    switch(this.direction){
                        case 'bottom':{
                            let top = position.bottom ;
                            let left = position.left;
                            return {top:top+"px",left:left+'px'}
                        }
                        break;
                        case 'top':
                            let top = position.top - this.$el.offsetHeight;
                            let left = position.left;
                            return {top:top+"px",left:left+'px'}
                        break;
                    }
                }
            }
        },
    }
</script>

<style lang='scss' scoped>
    .t-popup{
        position: fixed;
        top: 20px;
        left: 30px;
    }
</style>