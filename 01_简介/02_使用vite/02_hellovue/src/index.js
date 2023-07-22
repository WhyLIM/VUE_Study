import { createApp } from "vue/dist/vue.esm-browser"

import App from "./App"

// mount 的返回值是根组件的实例
const vm = createApp(App).mount("#root")