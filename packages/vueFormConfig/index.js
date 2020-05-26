// 导入组件，组件必须声明 name
import vueFormConfig from './main.vue'

// 为组件添加 install 方法，用于按需引入
vueFormConfig.install = function (Vue) {
    Vue.component(vueFormConfig.name, vueFormConfig)
}

export default vueFormConfig