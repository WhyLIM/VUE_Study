<script setup>
import { reactive } from 'vue';
import Photo from './Photo.vue';
import HotBar from './HotBar.vue';

/*
    子组件中的数据通常不会在子组件中直接定义，这样会导致数据和视图耦合
    子组件中的数据通常会在创建组件实例时确定
    父组件可以通过 props 来将数据传递给子组件

    使用 props
        - 先在子组件中定义 props
*/

const props = defineProps(["item", "maxHot"])
const item = props.item

</script>

<template>
    <div class="tab-item">
        <!-- 图片 -->
        <Photo :src="item.img" :alt="item.name" :rate="item.rate"></Photo>
        <!-- 描述 -->
        <div class="desc">
            <span class="name">{{ item.name }}</span>
            <HotBar :hot="item.hot" :maxHot="props.maxHot"></HotBar>
        </div>
    </div>
</template>

<style scoped>
.tab-item {
    display: flex;
    margin-bottom: 20px;
}

.desc {
    margin-left: 30px;
    display: flex;
    flex: auto;
    flex-flow: column;
    justify-content: space-evenly;
    font-size: 30px;
    color: #fff;
}
</style>