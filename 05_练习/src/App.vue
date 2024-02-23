<script setup>
import { reactive, ref } from 'vue';
import TabItem from './components/TabItem.vue';
import TabList from './components/TabList.vue';
import Tab from './components/Tab.vue';

// 创建一个变量来记录选项卡的状态，0 表示球员，1 表示球队
const current = ref(0)

const player = reactive({
    name: ":(",
    img: "/images/blackcry.jpg",
    rate: 1,
    hot: 433760
})

const team = reactive({
    name: "法国队",
    img: "/images/framework.jpg",
    rate: 1,
    hot: 333760
})

const players = reactive([
    {
        name: ":(",
        img: "/images/blackcry.jpg",
        rate: 1,
        hot: 433760
    }, 
    {
        name: ":)",
        img: "/images/blackcry.jpg",
        rate: 2,
        hot: 333760
    }, 
    {
        name: ":()",
        img: "/images/blackcry.jpg",
        rate: 3,
        hot: 233760
    }, 
])

const teams = reactive([
    {
        name: "法国",
        img: "/images/framework.jpg",
        rate: 1,
        hot: 433760
    }, 
    {
        name: "巴西",
        img: "/images/framework.jpg",
        rate: 2,
        hot: 333760
    }, 
    {
        name: "荷兰",
        img: "/images/framework.jpg",
        rate: 3,
        hot: 233760
    }, 
])

// 获取最大热度
const playerMaxHot = players[0].hot
const teamMaxHot = players[0].hot
</script>

<template>
    <Tab>
        <template #0><TabList :items="players" :maxHot="playerMaxHot"></TabList></template>
        <template #1><TabList :items="teams" :maxHot="teamMaxHot"></TabList></template>
    </Tab>
</template>

<style scoped></style>