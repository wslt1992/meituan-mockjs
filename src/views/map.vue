<template>
    <div class="map-root">
        <div id="container"></div> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                amapKey: this.$global.key
            }
        },
        mounted(){
            window.onLoad  = function(){
                var map = new AMap.Map('container');
            }
            var url = `https://webapi.amap.com/maps?v=1.4.11&key=${this.key}值&callback=onLoad`;
            var jsapi = document.createElement('script');
            jsapi.charset = 'utf-8';
            jsapi.src = url;
            document.head.appendChild(jsapi);


            var map = new AMap.Map('container',{
                zoom:12,
                center:[116.39,39.9]
            });
            AMap.plugin('AMap.ToolBar',function(){//异步加载插件
                var toolbar = new AMap.ToolBar();
                map.addControl(toolbar);
            });
        }
    }
</script>

<style lang='scss' scoped>
.map-root{
    height: 100%;
}
#container {width:100%; height: 100%;}  
</style>