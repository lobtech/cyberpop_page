<template>
    <XplanA />
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '@/store'
import XplanA from './pages/XplanA.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // 监听屏幕宽度

onMounted(() => {
})
</script>
<style lang="less" scoped>
</style>
