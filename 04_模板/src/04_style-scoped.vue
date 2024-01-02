<script setup>
import MyBox from './components/MyBox.vue';
</script>

<template>
    <div class="app">
        <h1>今天天气真不错</h1>
        <div class="box1">App 中的 box1</div>
        <MyBox></MyBox>
    </div>
</template>

<!-- 
    可以直接通过 style 标签来写样式
        如果直接通过 style 标签编写样式，此时编写的样式是全局样式，会影响所有组件
-->
<!-- <style>
h1 {
    background-color: #bfa;
}

.box1 {
    width: 200px;
    height: 200px;
    background-color: yellowgreen;
}
</style> -->

<!-- 
    可以为 style 标签添加一个 scoped 属性，这样样式将成为局部样式，只对当前组件生效
    如何实现的：
        - 当在组件中使用 scoped 样式时，Vue 会自动为组件中的所有元素生成一个随机属性，形如：data-v-7a7a37b1
          生成后，所有选择器都会在最后添加一个 data-v-7a7a37b1：
            h1 -> h1[data-v-7a7a37b1]
            .box1 -> .box1[data-v-7a7a37b1]
        - 注意：
            随机生成的属性，除了会添加到当前组件内的所有元素上，也会添加到当前组件引入的其他组件的（单）根元素上，这样设计是为了可以通过父组件来为组件设置样式
-->
<style scoped>
h1 {
    background-color: #bfa;
}

.box1 {
    width: 200px;
    height: 200px;
    background-color: yellowgreen;
}

/* 
将组件中所有 h2 的字体颜色设置为黄色
.app h2 -> .app h2[xxx]

.app h2[data-v-7a7a37b1] 没用 deep
.app[data-v-7a7a37b1] h2 用了 deep
*/
.app :deep(h2) {
    color: yellow;
}

/* 全局选择器 */
:global(div) {
    border: 1px red solid;
}
</style>
