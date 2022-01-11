<template>
    <div class="container">
        <div class="step">
            <h1>step:</h1>
            <div class="chunk">
                <div class="line inner" :style="{width: percentage + '%'}"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
const percentage: any = ref(0);
setInterval(() => {
    percentage.value = 20;
}, 1000)


</script>

<style scoped lang="less">
.container{
    background-color:rgba(0, 0, 0, 1);
    height: 100vh;
    background-image:
    radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
    radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
    radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .step{
        width: 40%;
        h1{
            font-size: 4vw;
            margin-bottom: 2vw;
        }
        .chunk{
            width: 100%;
            height: 6vw;
            border-radius: 20px;
            border: 2px solid #fff;
            overflow: hidden;
            .inner {
                height: 100%;
                border-radius: 4px;
                transition: all 0.5s cubic-bezier(0, 0.64, 0.36, 1);
            }
            .line {
                width: 90%;
                background-color: blue;
            }
        }
    }
}
</style>