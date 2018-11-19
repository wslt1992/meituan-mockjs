/**
 * 自动全局注册componentS下的组件
 */
import {camelCase,upperFirst} from 'lodash'
import Vue from 'vue';
const requireComponent = require.context(
  '@/components', //当前基础组件相对与main.js的相对位置
  false, //是否查询子目录
  /\.(vue|js)$/ //匹配基础组件的名字的正则，如果base里面的组件都是基础组件，那么只需要将所有包含即可，这里因为我的组件都是base开头的
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName) //获取组建配置
  const componentName = 
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1') // 剥去文件名开头的 `'./` 和结尾的扩展名
  
  // const componentName = upperFirst( //获取组件的 PascalCase 命名
  //   camelCase(
  //     fileName.replace(/^\.\/(.*)\.\w+$/, '$1') // 剥去文件名开头的 `'./` 和结尾的扩展名
  //   )
  // )
  // 全局注册组件
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})