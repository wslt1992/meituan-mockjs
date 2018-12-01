<template>
    <div class="t-popup" :style="styleObject" v-show="show">
        <slot>请添加slot</slot>
    </div>
</template>

<script>
/**
 * 指定相对A组件或者B标签位置弹出
 * 
 * 案例父
 *
 * 
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
            },
            show:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                styleObject:{}
            }
        },
        methods: {
            computePosition() {
                //有可能为空，
                // console.log(this.target)
                this.$nextTick(()=>{
                    if(this.target){
                        // console.log(this.direction)
                        let position = this.target.getBoundingClientRect();
                        // console.log(position)
                        switch(this.direction){
                            case 'bottom':{
                                let top = position.bottom ;
                                let left = position.left;
                                this.styleObject =  {top:top+"px",left:left+'px'}
                            }
                            break;
                            case 'top':
                                // console.log('this.$el.offsetHeight',this.$el.offsetHeight)
                                let top = position.top - this.$el.offsetHeight;
                                let left = position.left;
                                this.styleObject =  {top:top+"px",left:left+'px'}
                            break;
                        }
                    }
                })
                
            }
        },
        computed: {
        },
        watch: {
            show(newValue, oldValue) {
                this.computePosition();
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