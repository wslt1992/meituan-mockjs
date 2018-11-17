<template>
    <div class="root">
        
        <div class="tag-root">
            <div class="current-tag" @click="switchShow">
                <slot>
                    请放置当前组件
                </slot>
            </div>
            <div class="pop-tag" v-show="isSlot2Show" :style="{left:bottomleft}">
                <slot name='bottom'>
                    请放置下拉组件
                </slot>
                <div class="zhezhao"  @touchmove.prevent @click.stop="switchShow" v-show="isSlot2Show">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
/**
 * 在当前组件下方显示
 * slot1显示在slot2的上面
 * 点击空白处，slot2消失
 */
    export default {
        props:{
            bottomleft:{
                default:'0vw'
            },
            show:{
                default:false
            }
        },
        data:function(){
            return {
                isSlot2Show:this.show
            }
        },
        methods:{
            switchShow(){
                console.log('close')
                this.isSlot2Show = !this.isSlot2Show;
            }
        },
        watch:{
            show(){
                this.isSlot2Show = this.show
            }
        }
    }
</script>

<style lang='scss' scoped>
.root{
    position: relative;
}
.zhezhao{
    position: absolute;
    height: 100vh;
    width:115vw;
    // left:0;
    // right: 0;
    // top:0;
    // bottom: 0;
    background-color: #666;
    opacity: .5;
}
.tag-root{
    position: relative;;
    // top:0;
    // left:0;
    // right: 0;
    // top:0;
    // bottom: 0;
    .current-tag{
        width:100%;
        display: inline-block;
        z-index: 100;
        background-color: #fff;
    }
    .pop-tag{
        position: absolute;
        width:100vw;
        background-color: #fff;
        font-size: 5vw;
    }
}
</style>