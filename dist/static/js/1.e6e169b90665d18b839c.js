webpackJsonp([1],{"5ms6":function(t,i,s){t.exports=s.p+"static/img/swiper2.51e0c55.jpg"},"8hXn":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("Gu7T"),n=s.n(e),o=(s("7+uW"),s("mtWM")),a=s.n(o),c=(s("Au9i"),{data:function(){return{offsetTop:0,items:[1,1,1,1,1,1,1,1],slots:[{flex:1,values:["2015-01","2015-02","2015-04","2015-05"],className:"slot1",textAlign:"right",defaultIndex:2},{divider:!0,content:"-",className:"slot2"},{flex:1,values:["2015-01","2015-02","2015-03","2015-04","2015-05","2015-06"],className:"slot3",textAlign:"left"}],recommendList:[]}},methods:{loadMore:function(){this.collectionGoods()},collectionGoods:function(){var t=this;a.a.get(this.$url.goods).then(function(i){var s,e=i.data,o=e.goods.map(function(t,i){return t.stars="",t});(s=t.recommendList).push.apply(s,n()(o))}).catch(function(t){t instanceof Error?console.log(t.message):console.log(t.data)})},navigatorTo:function(t){switch(t){case"全部分类":this.$router.push(this.$url.navigator.classtifyAll)}},onValuesChange:function(t,i){console.log(i)}},mounted:function(){var t=this;a.a.get(this.$url.listing).then(function(i){console.log(i,t.$url.listing)}),this.collectionGoods()},activated:function(){document.getElementById("mainContent").scrollTop=this.offsetTop},beforeRouteLeave:function(t,i,s){this.offsetTop=document.getElementById("mainContent").scrollTop,s()}}),l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("t-page",{staticClass:"index-root",attrs:{id:"mainContent"}},[e("t-header-new",{staticClass:"index-header",attrs:{slot:"header"},slot:"header"},[e("span",{attrs:{slot:"left"},slot:"left"},[t._v("选择地区")]),t._v(" "),e("search-bar",{attrs:{slot:"center"},slot:"center"})],1),t._v(" "),e("div",{attrs:{slot:"container"},slot:"container"},[e("div",{staticClass:"mt-swipe"},[e("mt-swipe",{attrs:{auto:3e3}},[e("mt-swipe-item",[e("img",{attrs:{src:s("LuuF"),alt:""}})]),t._v(" "),e("mt-swipe-item",[e("img",{attrs:{src:s("5ms6"),alt:""}})]),t._v(" "),e("mt-swipe-item",[e("img",{attrs:{src:s("MUKG"),alt:""}})]),t._v(" "),e("mt-swipe-item",[e("img",{attrs:{src:s("MN/V"),alt:""}})]),t._v(" "),e("mt-swipe-item",[e("img",{attrs:{src:s("dNpm"),alt:""}})])],1)],1),t._v(" "),e("div",{staticClass:"classify classifyAll"},[e("div",{staticClass:"classify-item",on:{click:function(i){t.$global.toSearchResult("学习培训")}}},[e("i",{staticClass:"icon iconfont icon-peixun1"}),t._v(" "),e("p",[t._v("学习培训")])]),t._v(" "),e("div",{staticClass:"classify-item",on:{click:function(i){t.$global.toSearchResult("民宿/公寓")}}},[e("i",{staticClass:"icon iconfont icon-jiudian1"}),t._v(" "),e("p",[t._v("民宿/公寓")])]),t._v(" "),e("div",{staticClass:"classify-item",on:{click:function(i){t.$global.toSearchResult("周边游/旅游")}}},[e("i",{staticClass:"icon iconfont icon-lvyou"}),t._v(" "),e("p",[t._v("周边游/旅游")])]),t._v(" "),e("div",{staticClass:"classify-item",on:{click:function(i){t.$global.toSearchResult("丽人/美发")}}},[e("i",{staticClass:"icon iconfont icon-meifa"}),t._v(" "),e("p",[t._v("丽人/美发")])]),t._v(" "),e("div",{staticClass:"classify-item",on:{click:function(i){t.$global.toSearchResult("结婚/摄影")}}},[e("i",{staticClass:"icon iconfont icon-sheying"}),t._v(" "),e("p",[t._v("结婚/摄影")])]),t._v(" "),e("div",{staticClass:"classify-item",on:{click:function(i){t.$global.toSearchResult("闪购超市")}}},[e("i",{staticClass:"icon iconfont icon-market"}),t._v(" "),e("p",[t._v("闪购超市")])]),t._v(" "),e("div",{staticClass:"classify-item",on:{click:function(i){t.$global.toSearchResult("景点/门票")}}},[e("i",{staticClass:"icon iconfont icon-jingdian"}),t._v(" "),e("p",[t._v("景点/门票")])]),t._v(" "),e("div",{staticClass:"classify-item",on:{click:function(i){t.$global.toSearchResult("火车票/机票")}}},[e("i",{staticClass:"icon iconfont icon-feijipiao"}),t._v(" "),e("p",[t._v("火车票/机票")])]),t._v(" "),e("div",{staticClass:"classify-item",on:{click:function(i){t.$global.toSearchResult("按摩/足疗")}}},[e("i",{staticClass:"icon iconfont icon-zuliao"}),t._v(" "),e("p",[t._v("按摩/足疗")])]),t._v(" "),e("div",{staticClass:"classify-item",on:{click:function(i){t.navigatorTo("全部分类")}}},[e("i",{staticClass:"icon iconfont icon-leimupinleifenleileibie"}),t._v(" "),e("p",[t._v("全部分类")])])]),t._v(" "),e("div",{staticClass:"index-ad"},[e("ad-item",{staticClass:"index-ad-item",attrs:{title:"狠优惠",content:"重庆江湖烤全羊",tips:"中式烧烤",type:"烧烤",btntxt:"0.1折抢购 >",topath:"/discount-price"}}),t._v(" "),e("ad-item",{staticClass:"index-ad-item",attrs:{title:"有格调",content:"御品spa桑拿会所",tips:"休闲娱乐",type:"休闲娱乐",showBtn:!1,topath:"/leisure"}}),t._v(" "),e("ad-item",{staticClass:"index-ad-item single-item",attrs:{title:"周末去哪儿",content:"小包房包夜",tips:"电影",type:"亲子",showBtn:!1,topath:"/scenery"}})],1),t._v(" "),e("div",{staticClass:"index-recommend"},[e("h2",[t._v("— 猜你喜欢 —")]),t._v(" "),e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"50"}},[t._l(t.recommendList,function(t,i){return e("good-item",{key:i,attrs:{msg:t}})}),t._v(" "),e("mt-spinner",{attrs:{type:"triple-bounce"}})],2)])])],1)},staticRenderFns:[]};var r=s("VU/8")(c,l,!1,function(t){s("z3HH")},"data-v-c62de3a2",null);i.default=r.exports},"MN/V":function(t,i,s){t.exports=s.p+"static/img/swiper4.5c32eb0.jpg"},MUKG:function(t,i,s){t.exports=s.p+"static/img/swiper3.f841b0e.jpg"},dNpm:function(t,i,s){t.exports=s.p+"static/img/swiper5.04d6f36.jpg"},z3HH:function(t,i){}});
//# sourceMappingURL=1.e6e169b90665d18b839c.js.map