<template>
    <div class="t-header">
        <div class="left">
            <slot name="left">
                <t-back-button v-if="back"><i class="icon iconfont icon-arrowleft"></i></t-back-button>
            </slot>
        </div>
        <div class="center">
            <slot name="center" class="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
/**
 *  props:back:true 默认具有返回按钮
 */
export default {
  props: {
    back: {
      default: true
    }
  }
};
</script>

<style lang='scss' scoped>
.t-header {
  display: flex;
  justify-content: space-between;
  padding-top: 2vw;
  padding-bottom: 2vw;
  background-color: #28bb9b;
  .left{
      display: flex;
        align-items: center;
    i{
        font-size: 6vw;
    }
  } 
  .right{
    //   width: 5vw;
    
  }
  .center {
    flex-grow: 1;
    
  }
}
// .icon-arrowleff:before { content: "\e90e"; }
</style>