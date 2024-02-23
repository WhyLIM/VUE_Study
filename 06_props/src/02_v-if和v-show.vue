<script setup>
import { ref } from 'vue';

const isShow = ref(true)

</script>

<template>
    <h1>我是 App 根组件</h1>
    <button @click="isShow = !isShow">切换</button>

    <!-- 
        v-show 可以根据值来决定元素是否显示
            通过 css display，不涉及重新渲染，性能高，但初始化时需要对所有组件初始化，初始化性能差
        v-if 可以根据表达式的值来决定是否显示元素
            直接将元素删除，反复渲染组件，性能差，只会初始化需要用到的组件，初始化性能好
            可以和 v-else-if、v-else 结合使用，可以配合 template 使用
     -->
    <!-- <div v-if="isShow">
        <h2>我是 if 中的内容</h2>
    </div>
    <div v-else>
        <h2>我是 else 中的内容</h2>
    </div> -->
    <template v-if="isShow">
        <h2>我是一个 h2</h2>
        <h3>我是 h3</h3>
    </template>
</template>