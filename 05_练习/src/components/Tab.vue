<script setup>
import { ref } from 'vue';

const current = ref(0)
</script>
<template>
    <div class="tab-wrapper">
        <!-- 选项卡头部 -->
        <header class="tab-head">
            <!-- 定义两个按钮 -->
            <div @click="current = 0" class="tab-button" :class="{ active: current === 0 }">热门球员</div>
            <div @click="current = 1" class="tab-button" :class="{ active: current === 1 }">热门球队</div>
        </header>
        <!-- 选项卡主体 -->
        <!--
            Tab 组件的主要作用是在多个选项卡之间进行切换
            其中显示的主要内容是 TabList，而 TabList 的数据位于 App 组件中，
            如果还按照之前的方式编写代码，必须要在 App 组件中将数据传递给 Tab，再由 Tab 传递给 TabList，
            这样做可以但比较麻烦
        -->
        <div class="main" style="color: #fff;font-size: 20px;">
            <!-- 
                current === 0 显示球员，current === 1 显示球队
                v-show 指令用来设置一个内容是否显示（通过 display 来设置）
            -->

            <div v-show="current === 0">
                <!-- 球员 -->
                <!-- <TabList :items="players" :maxHot="playerMaxHot"></TabList> -->
                <slot name="0"></slot>
            </div>
            <div v-show="current === 1">
                <!-- 球队 -->
                <!-- <TabList :items="teams" :maxHot="teamMaxHot"></TabList> -->
                <slot name="1"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tab-wrapper {
    box-sizing: border-box;
    width: 800px;
    padding: 20px;
    background-color: rgb(45, 83, 211);
}

.tab-head {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
}

.tab-button {
    background-color: #fff;
    font-size: 30px;
    padding: 10px 0;
    text-align: center;
    flex: auto;
    cursor: pointer;
    transition: .5s;
}

.tab-button:not(.active):hover {
    color: rgb(187, 3, 52);
}

.active {
    background-color: rgb(187, 3, 52);
    color: #fff;
}
</style>