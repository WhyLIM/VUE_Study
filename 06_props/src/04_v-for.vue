<script setup>
import { ref } from 'vue';

const arr = ref(["111", "222", "333", "444"])
</script>

<template>
    <ul>
        <li v-for="name in arr">{{ name }}</li>
    </ul>
</template>