<script setup>
const stu = {
    name: "小黄鸭",
    age: 18,
    gender: "男"
}

const stuName = "小黄鸭"
const age = 18
const gender = "男"
</script>

<template>
    <div>
        <!-- <h1><slot>插槽的默认内容</slot></h1> -->
        <h1>
            <slot name="s1"></slot>
        </h1>
        <h2>
            <slot name="s2"></slot>
        </h2>
        <div>
        <slot name="s2" :gender="gender" :age="age" :stuName="stuName" :stu="stu"></slot>
    </div>
    <h3>
        <slot></slot>
    </h3>
</div>
</template>