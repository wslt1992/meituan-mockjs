<template>
    <ul>
        <li :class="{'active':active==index}" @click='navListFn' :data-index="index" v-for="(item,index) in lists" :key="index">{{item}}</li>
    </ul>
</template>
<script>
    export default{
        props:{
            navList:{
                default:function(){
                    return ['标签一','标签二','标签三'];
                }
            },
            acitveIndex:{
                default:0
            }
        },
        data:function(){
            return {
                lists:this.navList,
                active:this.acitveIndex
            };
        },
        methods:{
            navListFn:function(evt){
                let index = evt.target.dataset.index;
                let val = evt.target.innerText;
                this.active = index;
                this.$emit("input",{index,val});
            }
        }
    }
</script>
<style scoped>
ul,li{margin:0;padding:0;box-sizing:content-box;}
ul{display:flex;flex-direction: row;background-color: #fff;background-image:linear-gradient(360deg,#ddd 1px,transparent 0)}
li{list-style: none;font-size: 4vw;color:#555;flex-grow: 1;display: flex;align-items: center;height: 12vw;justify-content: center;}
li.active{color:#25abb1;border-bottom: 2px solid #25abb1;}
</style>

