<template>
    <t-page class="t-page-root">
        <t-header-new :back='false' slot="header" class="t-header-default">
            <div slot="center"  class='title-color'>发现</div>
        </t-header-new>

        <!-- tab开始 -->
        <div slot="top-fix" class="top-fix">
            <t-swiper class="t-swiper-default" v-model="selectedIndex">
                <div v-for="item in items" :key="item.id">
                    {{ item.fenlei }}
                </div>
            </t-swiper>
        </div>
        <!-- tab结束 -->

        <div slot="container" >
            <div v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="50">
                    <discovery-item :item='item' v-for="(item,index) in currentListArr" :key="index" ></discovery-item>
                    <mt-spinner type="triple-bounce"></mt-spinner>
            </div>
            
        </div>
    </t-page>
    <!-- tab-container -->
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                selectedIndex: 0,
                items:[],
                currentListArr:null
            };
        },
            methods: {
                handleClick(tab, event) {
                    console.log(tab, event);
                },
                requestData(){
                    axios.get(this.$url.discovery).then((res)=>{
                        console.log(res.data.data);
                        this.items.push(...res.data.data)
                    })
                },
                loadMore(){
                    axios.get(this.$url.discovery).then((res)=>{
                        this.items[this.selectedIndex].arr.push(...res.data.data[this.selectedIndex].arr)
                    })
                }
                
        },
        mounted(){
            this.requestData();
        },
        watch: {
            items(newValue, oldValue) {
                this.currentListArr=this.items[this.selectedIndex].arr
            },
            selectedIndex(){
                this.currentListArr=this.items[this.selectedIndex].arr
            }
        },
    }
</script>

<style lang='scss' scoped>
.title-color{
      color: #eee;
  }
</style>