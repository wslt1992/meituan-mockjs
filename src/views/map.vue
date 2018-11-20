<template>
    <div class="map-root">
        <div id="container"></div> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                amapKey: this.$global.key,
                map:null,
                onMapLoad:'onMapLoad'//地图加载完成，回调的函数
            }
        },
        methods: {
            initMap() {
                window[this.onMapLoad]  = function(){
                    let map = this.map = new AMap.Map('container',{
                        zoom:10,
                        // center:[116.39,39.9]
                    });
                    AMap.plugin('AMap.ToolBar',function(){//异步加载插件
                        var toolbar = new AMap.ToolBar();
                        map.addControl(toolbar);
                    });
                }
                var url = `https://webapi.amap.com/maps?v=1.4.11&key=${this.key}值&callback=${this.onMapLoad}`;
                var jsapi = document.createElement('script');
                jsapi.charset = 'utf-8';
                jsapi.src = url;
                document.head.appendChild(jsapi);
            }
        },
        mounted(){
            this.initMap();
        }
    }
</script>

<style lang='scss' scoped>
.map-root{
    height: 100%;
}
#container {width:100%; height: 100%;}  
</style>