<script setup>
const props = defineProps(["name"])
</script>

<template>
    <h1>A 组件 {{ props.name }}</h1>
</template>