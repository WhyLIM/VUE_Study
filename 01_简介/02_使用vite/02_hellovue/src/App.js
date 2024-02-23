// 引入组件
import { VueElement } from "vue/dist/vue.esm-browser"
import MyButton from "./components/MyButton"

// 创建根组件
export default {
    data() {
        return {
            msg: "Vue 学习",
            count: 0
        }
    },

    // 在组件中注册子组件
    components: {
        MyButton
    },

    // template 是用字符串的形式在编写模板
    //      1. 这些字符串会在项目运行时在浏览器中被编译为 js 函数
    //      2. 在字符串中编写代码体验很差
    // 为了解决这个问题，VUE 提供了单文件组件（SFC）
    //      - 格式是 .vue
    //      - vue 文件用来编写单文件组件，本身不能被浏览器识别，需要被构建工具打包后才能使用
    //      - vue 文件在打包时，构建工具会直接将 template 转换为函数，无需在浏览器中再编译，提升了性能

    template: `
    <h1>{{msg}}</h1>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
    `
}