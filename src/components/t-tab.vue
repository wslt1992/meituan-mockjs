<template>
    <div class="t-tab-root">
        <slot></slot>
    </div>
</template>

<script>
/**
 * 使用案例
    <t-tab checked-clazz='active'><div >456</div><div >456</div></t-tab>
 * 
    .active{
    color: red;
    }
 */
    export default {
        props: {
            checkedClass: {
                type: String,
                default: 't-tab-item-checked'
            },
        },
        data() {
            return {
                //全部的item
                tabItemS:[],
                currentCheckedNum:0,
                /**
                 * 被选中后的样式名，样式需在父定义
                 * 通过 属性方式传入例如：<t-tab checked-clazz='t-tab-item-checked'>
                 */
            }
        },
        methods: {
            changeAddClass(newValue,oldValue) {
                this.tabItemS[oldValue].classList.remove(this.checkedClass);
                this.tabItemS[newValue].classList.add(this.checkedClass);
            },
            chageEmit(newValue){
                this.$emit('input',newValue)
            },
            initStartClass(val){
                this.tabItemS[val].classList.add(this.checkedClass);
            }
        },
        mounted(){
            this.tabItemS = this.$el.querySelectorAll('.t-tab-root>*');
            this.tabItemS.forEach((element,index) => {
                element.addEventListener('click',()=>{
                    this.currentCheckedNum = index;
                })
            });
            this.initStartClass(this.currentCheckedNum);
        },
        watch: {
            currentCheckedNum(newValue, oldValue) {
                this.changeAddClass(newValue,oldValue);
                this.chageEmit(newValue)
            }
        },
    }
</script>

<style lang='scss' scoped>
    .t-tab-root{
        display: flex;
        >*{
            flex-grow: 1;
        }
    }
</style>