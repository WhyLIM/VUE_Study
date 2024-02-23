<script setup>

const msg = "我爱 Vue"
const html = `<h2>我是一段 html 代码</h2>`

const fn = () => {
    console.log("666")
}

</script>

<template>
    <!-- 
        - 在模板中可以直接访问到组件中声明的变量
        - 除了组件中的变量外，Vue 也为我们提供了一些全局对象可以访问：
            比如：Date、Math、RegExp
            除此之外，也可以通过 app 对象来向 Vue 中添加一些全局变量
            app.config.globalProperties
        - 使用插值（双大括号），只能使用表达式
            表达式：有返回值的语句
        - 插值实际上是在修改元素的 textContent
            如果内容中含有标签，标签会被转义显示，不会作为标签生效

        指令：
            - 指令模板中为标签设置的一些特殊属性可以用来设置标签如何显示内容
            - 指令使用 v- 开头
                v-text 将表达式的值作为元素的 textContent 插入，作用同 {{}}
                    使用指令时不需要通过{{}}来制定表达式
                v-html 将表达式的值作为元素的 innerHTML 插入，有 xss 攻击的风险
    -->
    <h1>{{ "hello" + " world" }}</h1>
    <h2>{{ fn }}</h2>
    <div>{{ html }}</div>
    <div v-text="html"></div>
    <div v-html="html"></div>
</template>
