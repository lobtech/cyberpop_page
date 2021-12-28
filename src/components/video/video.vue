<template>
    <div class="mask">
        <video :style="{'width': (mobel ? 100 : 60) + '%'}" ref="video" preload="none" width="100%" height="100%"  autoplay controls v-if="videotype == 1">
            <source src="https://d1td2c8hf7fv9k.cloudfront.net/6dff55c4018832a1528ecbc410ec6094.mp4" type="video/mp4">
            <!-- <source :src="videoSrc" type="video/WebM">
            <source :src="videoSrc" type="video/Ogg"> -->
        </video>
        <video :style="{'width': (mobel ? 100 : 60) + '%'}" ref="video" preload="none" width="100%" height="100%"   autoplay controls v-else-if="videotype == 2">
            <source src="https://d1td2c8hf7fv9k.cloudfront.net/efce5218ffe7d5bec009c95d7bb92e85.mp4" type="video/mp4">
            <!-- <source :src="videoSrc" type="video/WebM">
            <source :src="videoSrc" type="video/Ogg"> -->
        </video>
        <video :style="{'width': (mobel ? 100 : 60) + '%'}" ref="video" preload="none" width="100%" height="100%"   autoplay controls v-else>
            <source src="https://d1td2c8hf7fv9k.cloudfront.net/fd9efe5ce1ffcc8f1ae3fd6fdfab31e4.mp4" type="video/mp4">
            <!-- <source :src="videoSrc" type="video/WebM">
            <source :src="videoSrc" type="video/Ogg"> -->
        </video>
    </div>
</template>

<script setup lang="ts">
import { computed, readonly, ref, defineProps, onMounted } from 'vue'
const props = defineProps({
    videoSrc: String, // 显示隐藏
    videotype: Number,
    mobel: Boolean,
})
onMounted(() => {

})
</script>

<style lang="less" scoped>
.mask{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    z-index: 1005;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    video{
        width: 60%;
        // height: 60%;
        height: auto;
        display: block;
        object-fit: fill;
    }
}
</style>
