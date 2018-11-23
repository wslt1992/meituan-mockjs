<template>
    <t-page class="t-page-root">
        <t-header-new :back='false' slot="header">
            <div slot="center" class="t-header-default" >发现</div>
        </t-header-new>

        <!-- tab开始 -->
        <div slot="top-fix" class="top-fix">
            <t-swiper class="t-swiper-default" v-model="selectedIndex">
                <div>精选</div>
                <div>爱美食</div>
                <div>关注</div>
                <div>出去浪</div>
                <div>健康生活</div>
                <div>精选</div>
                <div>爱美食</div>
                <div>关注</div>
                <div>出去浪</div>
                <div>健康生活</div>
            </t-swiper>
        </div>
        <!-- tab结束 -->

        <div slot="container" >
            <discovery-item :item='item' v-for="(item,index) in items[selectedIndex]" :key="index"></discovery-item>
        </div>
    </t-page>
    <!-- tab-container -->
</template>

<script>
    export default {
        data() {
            return {
                selectedIndex: 0,
                items:[],
            };
        },
            methods: {
                handleClick(tab, event) {
                    console.log(tab, event);
                }
        },
        mounted(){
            // this.items.set(0,[1,2,3,4,5,6,7,8])
            // this.items.set(1,[1,2,3,4,5,6])
            // this.items.set(2,[1,2,3,4,5,6])
            // this.items.set(3,[1,2,3,4,5,6])
            // this.items.set(4,[1])

            this.$set(this.items,0,[
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1],
                    author:'米粒日记',
                    viewCount:253445
                },

            ])
            this.$set(this.items,1,
            [
                
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
            ])
            this.$set(this.items,2,
            [
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1],
                    author:'米粒日记',
                    viewCount:253445
                },

            ])
            this.$set(this.items,3,
            [
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1],
                    author:'米粒日记',
                    viewCount:253445
                },

            ])
            this.$set(this.items,4,
            [
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1,2,3],
                    author:'米粒日记',
                    viewCount:253445
                },
                {
                    title:'大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店大东烧烤店',
                    imgs:[1],
                    author:'米粒日记',
                    viewCount:253445
                },

            ])
        }
    }
</script>

<style lang='scss' scoped>
</style>