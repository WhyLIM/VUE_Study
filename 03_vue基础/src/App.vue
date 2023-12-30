<script>

import { reactive, readonly } from 'vue'

export default {
    // setup 是一个钩子函数，可以通过这个函数向外部暴露组件的配置
    setup() {
        // 定义变量
        // 在组合式 API 中直接声明的变量就是一个普通变量，不是响应式变量，修改属性时不会再视图中产生效果
        let msg = "今天天气真不错！"
        let count = 0

        // 可以通过 reactive() 来创建一个响应式对象
        const stu = reactive({
            name: "孙悟空",
            age: 18,
            gender: "男"
        })

        function changeAge() {
            stu.age = 44
        }

        // 在 setup() 中可以通过返回值来指定哪些内容要暴露给外部
        // 暴露后的内容可以在模板中直接使用
        return {
            msg,
            count,
            stu,
            changeAge
        }
    }
}
</script>

<template>
    <h1>演示组合式 API</h1>
    <h2>{{ msg }}</h2>
    <h3>{{ count }}</h3>
    <button @click="changeAge">点我一下</button>
    <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h2>
</template>