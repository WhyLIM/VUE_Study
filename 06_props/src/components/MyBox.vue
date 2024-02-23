<script setup>
/*
    父组件可以通过 props 来向子组件传递数据
    父组件传递给子组件的 props 都是只读的，无法修改。
        即使可以修改，也尽量不要在子组件中修改父组件数据
        如果非要改，具体方法后面再讲（自定义事件）

    属性名
        - 定义属性名时遵循驼峰命名法
*/

// 定义 props
// const props = defineProps(["count", "obj", "maxLength"])
const props = defineProps({
    count: Number,
    obj: Object,
    isCheck: Boolean,
    maxLength: {
        type: String,
        required: true,
        default: "哈哈",
        validator(value) {
            return value !== "嘻嘻"
        }
    }
})

</script>

<template>
    <div>
        <h2>我是子组件 MyBox {{ props.obj.count }}</h2>
        <button @click="props.obj.count++">MB 的按钮</button>
        <hr>
    </div>
</template>

<style scoped>
div {
    color: tomato;
}
</style>