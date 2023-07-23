// 引入组件
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
    // 1. 这些字符串会在项目运行时在浏览器中被编译为 js 函数
    // 2. 在字符串中编写代码体验很差

    template: `
    <h1>{{msg}}</h1>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
    `
}