<script setup>
import A from './components/A.vue';
import SlotDemo from './components/SlotDemo.vue';
</script>

<template>
    <h1>App 组件</h1>
    <!-- 直接写在组件中的内容是默认插槽的内容，只会出现在默认插槽中（没有 name 属性的插槽） -->
    <SlotDemo>
        App 传递的内容
        <template #s1>s1 插槽</template>
        <template #s2="slotProps"><A :name="slotProps.stuName"></A></template>
    </SlotDemo>
</template>