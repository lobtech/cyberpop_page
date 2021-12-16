<template>
    <HomeA v-if="innerWidth > 740"/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import HomeA from '../home/pages/HomeA.vue'
const innerWidth = computed(() => {
    console.log(1);
    return store.state.sys?.innerWidth || 0
}) // 监听屏幕宽度

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
