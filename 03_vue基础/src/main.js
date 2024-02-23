import { createApp } from 'vue'
import App from './App.vue'

/*
App.vue 是根组件
    - createApp(App) 将根组件挂载到应用
        - 会返回一个应用实例
    - app.mount("#app") 将应用挂载到页面
        - 会返回一个根组件的实例，通常可以命名为 vm
        - 组件实例是一个 Proxy 对象（代理对象）
*/

const app = createApp(App)

const vm = app.mount("#app")

// 将 vm 设置为全局变量
window.vm = vm
window.app = app

// createApp(App).mount('#app')

// console.log(vm)

