// import { createApp } from "vue/dist/vue.esm-browser"
import { createApp } from "vue"
import App from "./App.vue"

// mount 的返回值是根组件的实例
const vm = createApp(App).mount("#root")