<template>
    <div class="mask">
        <!-- <video :style="{'width': (mobel ? 100 : 60) + '%'}" ref="video" id="mp4" preload="none" width="100%" height="100%" autoplay loop controls v-if="videotype == 1">
            <source src="https://d1td2c8hf7fv9k.cloudfront.net/6dff55c4018832a1528ecbc410ec6094.mp4" type="video/mp4">
        </video>
        <video :style="{'width': (mobel ? 100 : 60) + '%'}" ref="video" id="mp4" preload="none" width="100%" height="100%" autoplay loop controls v-else-if="videotype == 2">
            <source src="https://d1td2c8hf7fv9k.cloudfront.net/efce5218ffe7d5bec009c95d7bb92e85.mp4" type="video/mp4">
        </video>
        <video :style="{'width': (mobel ? 100 : 60) + '%'}" ref="video" id="mp4" preload="none" width="100%" height="100%" autoplay loop controls v-else-if="videotype == 3">
            <source src="https://d1td2c8hf7fv9k.cloudfront.net/fd9efe5ce1ffcc8f1ae3fd6fdfab31e4.mp4" type="video/mp4">
        </video> -->
        <video :style="{'width': (mobel ? 100 : 60) + '%'}" id="mp4" preload="auto" width="100%"
                autoplay loop controls 
                webkit-playsinline="true" 
                playsinline="true" 
                x5-playsinline="true" 
                x5-video-player-type="h5"
                x-webkit-airplay="allow" 
                x5-video-orientation="landscape"
                v-if="videotype == 4">
            <source src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/output.mp4" type="video/mp4">
            <!-- <source :src="videoSrc" type="video/WebM">
            <source :src="videoSrc" type="video/Ogg"> -->
        </video>
        <video :style="{'width': (mobel ? 100 : 60) + '%'}" ref="video" id="mp4" preload="auto" width="100%" 
                autoplay loop controls 
                webkit-playsinline="true" 
                playsinline="true" 
                x5-playsinline="true" 
                x5-video-player-type="h5"
                x-webkit-airplay="allow" 
                x5-video-orientation="landscape"
                v-if="videotype == 5">
            <source src="https://d3bhixjyozyk2o.cloudfront.net/banner.mp4" type="video/mp4">
            <!-- <source :src="videoSrc" type="video/WebM">
            <source :src="videoSrc" type="video/Ogg"> -->
        </video>
        <!-- <div class="play" @click.stop="playVideo()" v-if="mobel && isPlay">
            <img src="https://d1td2c8hf7fv9k.cloudfront.net/play.png" alt="" class="play">
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { computed, readonly, ref, defineProps, onMounted } from 'vue'
const props = defineProps({
    videoSrc: String, // 显示隐藏
    videotype: Number,
    mobel: Boolean,
})

// webkit-playsinline="true" playsinline="true" x5-playsinline="true" x5-video-player-type="h5"
// x5-video-player-fullscreen="true" x5-video-ignore-metadata="true" x5-video-orientation="landscape" x-webkit-airplay="true"






// let isPlay = ref(true)
// let mp4: any = document.getElementById('mp4');
// const playVideo = (type: any = props.videotype) => {
//     isPlay.value = false;
//     if(mp4?.paused) {

//     }else{
//         isPlay.value = false;
//     }
// }

onMounted(() => {
    // let flag = 0;
    // window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
    //     if (window.orientation === 180 || window.orientation === 0) {//竖屏
    //         if (flag = 1) {
    //             flag = 0;
    //             window.history.go(-1);//横屏之后再竖屏，则刷新当前页
    //         }            
    //     }
    //     if (window.orientation === 90 || window.orientation === -90) {//横屏
    //         flag = 1;
    //     }
    // }, false)
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
.play{
    position: absolute;
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        height: 100%;
    }
}
 //播放按钮
// video::-webkit-media-controls-play-button {
//     display: none;
// }
//进度条
// video::-webkit-media-controls-timeline {
//     display: none;
// }
//观看的当前时间
// video::-webkit-media-controls-current-time-display{
//     display: none;           
// }
//剩余时间
// video::-webkit-media-controls-time-remaining-display {
//     display: none;           
// }
//音量按钮
// video::-webkit-media-controls-mute-button {
//     display: none;           
// }
// video::-webkit-media-controls-toggle-closed-captions-button {
//     display: none;           
// }
// //音量的控制条
// video::-webkit-media-controls-volume-slider {
//     display: none;           
// }
</style>
