<script setup>
const arr = ["box1", "box2", "box3"]
const arr2 = [{ box1: true }, { box2: false }, { box3: false }]
const style = {
    color: "red",
    backgroundColor: "#bfa"
}
</script>

<template>
    <h1 class="header">我爱 Vue</h1>
    <div :class="arr2" :style="style">我是 div</div>
</template>

<style scoped>
.header {
    background-color: orange;
}
</style>
