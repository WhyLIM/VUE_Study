<script setup>
import { ref } from 'vue';
import MyButton from './components/MyButton.vue';
import A from './components/A.vue';
import MyWrapper from './components/MyWrapper.vue';

const name = "孙悟空"
</script>

<template>
    <h1>App 组件</h1>
    <!-- 
        希望在父组件中指定子组件的内容
            - 可以通过插槽（slot）来实现
                <MyButton>插槽的入口</MyButton>

                <button>
                    <slot></slot> 插槽的出口
                </button>

              通过插槽引入组件，位于父组件的作用域中
     -->
    <!-- <MyButton><A :name="name"></A></MyButton> -->
    <MyWrapper>
        <!-- 具名插槽的入口 -->
        <template v-slot:h1>一级标题</template>
        <template #h2>一级标题</template>
    </MyWrapper>
</template>