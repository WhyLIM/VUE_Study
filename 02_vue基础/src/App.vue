<script>
// 组件是一个普通的 js 对象
export default {
    // data 是一个函数
    // 在 data 中，this 就是当前的组件实例 vm
    // 如果使用箭头函数，则无法通过 this 来访问组件实例
    // 使用 vue 时，减少使用箭头函数
    data() {
        // console.log("data", this)
        // 直接向组件实例中添加一个属性
        this.name = "孙悟空"
        // data 会返回一个对象作为返回值，vue 会对对象进行代理，将其转换为响应式数据，响应式数据可以直接通过组件实例访问
        return {
            msg: "Vue 基础"
        }
    }
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
</template>