<script>

import MyButton from './components/MyButton.vue';
import { shallowReactive } from 'vue';

export default {
    data() {
        // data 返回的对象最终会被 Vue 代理
        return {
            msg: "今天天气真不错！",
            // vue 在构建响应式对象时，会同时将对象中的属性也做成响应式属性
            // 深层响应式对象
            stu: {
                name: "孙悟空",
                age: 18,
                gender: "男",
                friend: {
                    name: "猪八戒"
                }
            },
            // 将暂时没有使用到的属性也添加到 data 返回的 对象中，值设置为 null
            hello: null
        }

        // // 有些场景下可以通过 shallowReactive() 创建浅层响应式对象
        // return shallowReactive({
        //     msg: "浅层响应式对象",
        //     stu: {
        //         name: "孙悟空",
        //         age: 18,
        //         gender: "男",
        //         friend: {
        //             name: "猪八戒"
        //         }
        //     }
        // })
    },

    components: {
        MyButton
    }
}
</script>

<template>
    <h1>{{ msg }}</h1>
    <h2>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h2>
    <h3>{{ stu.friend.name }}</h3>

    <MyButton></MyButton>
    <MyButton></MyButton>
</template>