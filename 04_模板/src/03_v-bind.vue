<script setup>
import { ref } from 'vue'
const imgPath = ref("./images/framework.jpg")
const changeImg = () => {
    imgPath.value = "./images/blackcry.jpg"
}
const attrs = {
    id: "box1",
    class: "hello"
}

const attrName = "title"
const attrValue = "这是一个 title 属性"

const isDisabled = true

</script>

<template>
    <!-- 
        当需要为标签动态设置属性时，需要使用 v-bind 指令，v-bind 可以简写为 :
        当为一个布尔值设置属性时，
            如果值为 true 则元素上具有该属性（转换后为 true 也算 true）
            如果值为 false 则元素没有该属性（转换后为 false 也算 false）
            特殊情况： "" 空串会被当成 true
    -->
    <!-- <button @click="changeImg">切换图片</button> -->
    <!-- <img v-bind:src="imgPath" alt="framework" /> -->
    <img v-bind:[attrName]="attrValue" :src="imgPath" alt="framework" />
    <div :="attrs"></div>
    <input type="text" :disabled="isDisabled">
</template>
