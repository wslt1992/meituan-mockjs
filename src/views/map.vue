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
                onMapLoad:'onMapLoad',//地图加载完成，回调的函数
                latitude:0,
                longitude:0
            }
        },
        methods: {
            initMap() {
                window[this.onMapLoad]  = function(){
                    let map = this.map = new AMap.Map('container',{
                        zoom:19,
                        // center:[116.39,39.9]
                    });
                    AMap.plugin('AMap.ToolBar',function(){//异步加载插件
                        var toolbar = new AMap.ToolBar();
                        map.addControl(toolbar);
                    });

                    AMap.plugin('AMap.Geolocation', function () {
                        let geolocation = new AMap.Geolocation({
                            enableHighAccuracy: true,//是否使用高精度定位，默认:true
                            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                            convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                            showButton: true,        //显示定位按钮，默认：true
                            buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
                            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                            showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                            zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                        });
                        map.addControl(geolocation);
                        geolocation.getCurrentPosition();
                    // AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
                    // AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
                });

                }
                var url = `https://webapi.amap.com/maps?v=1.4.11&key=${this.key}值&callback=${this.onMapLoad}`;
                var jsapi = document.createElement('script');
                jsapi.charset = 'utf-8';
                jsapi.src = url;
                document.head.appendChild(jsapi);
            },
            geo_success(position) {
                // alert(position.coords.latitude+""+position.coords.longitude);
                var marker = new AMap.Marker({
                    position: [116.481181, 39.989792]
                })
                this.map.add(marker);
            },
            geo_error(msg) {
                alert(msg.code);
                alert(msg.message);
            }
        },
        mounted(){
            this.initMap();
            // navigator.geolocation.getCurrentPosition(this.geo_success, this.geo_error);

            
        }
    }
</script>

<style lang='scss' scoped>
.map-root{
    height: 100%;
}
#container {width:100%; height: 100%;}  
</style>