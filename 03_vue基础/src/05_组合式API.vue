<script setup>
import { reactive } from 'vue';

const msg = "我爱 Vue"
const count = 0
const stu = reactive({
    name: "孙悟空"
})

function fn() {
    alert("666")
}
</script>

<template>
    <h1 @click="fn">组合式 API</h1>
    <h2>{{ msg }} -- {{ count }}</h2>
    <h3>{{ stu.name }}</h3>
</template>