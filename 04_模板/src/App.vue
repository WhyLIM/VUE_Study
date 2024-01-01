<script setup>

import { ref, reactive, computed } from 'vue'

const msg = ref("Hello Vue")

// {value: obj}
// obj.value.name
const obj = ref({
    name: "孙悟空",
    age: 18
})

// obj2.name.value
const obj2 = {
    name: ref("孙悟空"), // {value: "孙悟空"}
    age: ref(18)
}

const changeMsgHandler = () => {
    // 修改 ref 对象时，必须通过 value
    msg.value = "66"
}

// computed 用来生成计算属性
const newMsg = computed(() => {
    return msg.value + "-我爱 Vue"
})

</script>

<template>
    <!-- ref 对象在模板中可以自动解包（要求 ref 对象必须是顶层对象） -->
    <h1>{{ msg }}</h1>
    <h1>{{ newMsg }}</h1>
    <h2>{{ obj.name }}</h2>
    <!-- name 不是顶层响应式对象，所以不能自动解包 -->
    <h2>{{ obj2.name.value }}</h2>
    <hr>
    <h2>{{ obj.age }}</h2>
    <h2>{{ obj2.age }}</h2>
    <button @click="changeMsgHandler">点我一下</button>
</template>
