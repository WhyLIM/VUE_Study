<script setup>
import { ref } from 'vue';

const arr = ref(["111", "222", "333", "444"])
const arr2 = ref([
    {
        id: 1,
        name: "你",
        age: 2.5
    },
    {
        id: 2,
        name: "干",
        age: 5
    },
    {
        id: 3,
        name: "嘛",
        age: 7.5
    },
])
</script>

<template>
    <button @click="arr.push('555')">为什么不点</button>
    <button @click="arr2.unshift({ id: 4, name: '哎', age: 10 })">为什么不点2</button>
    <ul>
        <li v-for="name in arr">{{ name }}</li>
    </ul>

    <ul>
        <li v-for="(name, index) in arr">{{ index }} - {{ name }}</li>
    </ul>

    <div v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</div>
    <hr>
    <template v-for="obj in arr2">{{ obj.name }} -- {{ obj.age }}</template>

    <!--
        使用 v-for 遍历时，旧的结构和新的结构是按顺序对比的
        在使用 v-for 时可以为元素指定一个唯一的 key，有了 key 以后，元素再比较就会按照相同的 key 去比较而不是顺序
    -->
    <div v-for="{ id, name, age } in arr2" :key="id">
        {{ name }} -- {{ age }}
        <input type="text">
    </div>
</template>