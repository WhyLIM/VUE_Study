<script setup>
import { ref } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';

const isShow = ref(true)
</script>

<template>
    <!--
        动态组件
            - 最终以什么标签呈现由 is 属性决定
    -->
    <button @click="isShow = !isShow">切换</button>
    <component :is="isShow ? A : B"></component>
</template>