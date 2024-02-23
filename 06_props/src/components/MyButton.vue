<script setup>
const age = 18
</script>

<template>
    <button>
        <!-- slot 标签会被组件的标签体替换 -->
        <slot></slot>
    </button>
</template>

<style>
button {
    width: 200px;
    height: 100px;
}
</style>