<template>
    <MysteryA v-if="innerWidth > 740"/>
    <MysteryB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import MysteryA from './pages/MysteryA.vue'
import MysteryB from './pages/MysteryB.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // 监听屏幕宽度

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
