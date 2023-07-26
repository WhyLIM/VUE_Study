<script>
    import MyButton from "./components/MyButton.vue";
    // 编写组件代码
    export default {
        data() {
            return {
                msg: "VUE 学习",
            };
        },

        components: {
            MyButton,
        },
    };
</script>

<template>
    <h1>{{ msg }}</h1>
    <MyButton></MyButton>
</template>
