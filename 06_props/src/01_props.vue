<script setup>
import MyBox from './components/MyBox.vue';
import { ref } from 'vue';

const count = ref(0)
const obj = ref({
    count: 0
})
</script>

<template>
    <h1>我是 App 根组件</h1>
    <MyBox :count="123" :obj="obj" max-length="嘻嘻"></MyBox>
    <button @click="obj.count++">点我一下</button>
</template>