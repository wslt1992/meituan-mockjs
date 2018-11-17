<template>
        <div >
            <i :style="linearColor" :class="iconname">
            </i>
        </div>
</template>

<script>
export default {
    props:{
        startColor:{
            default:'#000',
        },
        endColor:{
            default:'#fff',
        },
        'angle':{
            default:`90deg`
        },
        iconname:{
            default:'iconfont icon-QQ'
        }
    },
   
    computed : {
        linearColor() {
            return {
                'background-image':`linear-gradient(135deg,${this.startColor},${this.endColor})`
                }
        }
        
    },
}
</script>

<style scoped>
.icon-QQ {-webkit-background-clip:text;-webkit-text-fill-color: transparent;display: inline-block;font-size: 5vw;}
</style>
