<script>

import MyButton from './components/MyButton.vue';
import { shallowReactive } from 'vue';

export default {
    // data 用来指定实例对象中的响应式属性
    data() {
        return {
            msg: "今天天气真不错",
            stu: {
                name: "孙悟空",
                age: 18,
                gender: "男"
            },
            firstName: "悟空",
            lastName: "孙",
            arr: ["孙悟空", "猪八戒", "沙和尚"]
        }
    },

    methods: {
        updateAge() {
            if (this.stu.age === 18) {
                this.stu.age = 17
            } else {
                this.stu.age = 18
            }
        },

        // methods 中的方法每次组件重新渲染都会调用
        getInfo() {
            console.log("getInfo 调用了")
            return this.stu.age >= 18
                ? "你是一个成年人。"
                : "你是一个未成年人。"
        }
    },

    /*
    computed 用来指定计算属性
    {
        属性名: getter方法
    }
    - 计算属性只在其依赖的数据发生变化时才重新执行
    - 会对数据进行缓存
    */
    computed: {
        // info: function() {
        //     return "好好好"
        // },
        info() {
            // 在计算属性的 getter 中，尽量只做读取相关的逻辑
            // 不要执行那些会产生（副）作用的代码
            console.log("---> info调用了")
            return this.stu.age >= 18
                ? "你是一个成年人！" 
                : "你是一个未成年人！"
        },

        // 计算属性的简写（只有 getter）
        // name() {
        //     return this.firstName + this.lastName
        // }
        // 可以为计算属性设置 setter，使得计算属性可写，但不建议这么做
        name: {
            get() {
                return this.firstName + this.lastName
            },
            set() {
                // set 在计算属性被修改时调用
                console.log(value)
                this.lastName = value[0]
                this.firstName = value.slice(1)
            }
        }
    }

}
</script>

<template>
    <p>{{ msg }}</p>
    <h1>{{ stu.name }} -- {{ stu.age }} -- {{ stu.gender }}</h1>
    <!-- <h2>评语：{{ stu.age >= 18 ? "你是一个成年人！" : "你是一个未成年人！" }}</h2> -->
    <h2>评语：{{ info }}</h2>
    <h2>method: {{ getInfo() }}</h2>
    <button @click="updateAge">减龄</button>
    <hr>
    <h3>{{ info }}</h3>
    <h3>{{ name }}</h3>
    <h2>{{ arr[0] }} -- {{ arr[1] }} -- {{ arr[2] }}</h2>
</template>