// 引入 Vue
import { createApp } from "vue/dist/vue.esm-bundler.js"

// 创建一个根组件
const App = {
    data() {
        return {
            message: "Vue 学习"
        }
    },
    template: "<h1>{{message}}</h1>"
}

// 创建应用挂载到页面
createApp(App).mount("#app")