<template>
    <div class="title" :class="outComingAni ? 'comingOut' : ''">COMING SOON</div>
</template>

<script setup lang="ts">
import { computed, readonly, ref } from 'vue'
const props = defineProps({
    outComingAni: Boolean
})
console.log(props.outComingAni)
</script>

<style lang="less" scoped>
@keyframes comingOut {
    0%{
        top: 3vw;
    }
    100%{
        top: -3vw;
    }
}
.comingOut{
    animation: comingOut .4s ease-in;
}
@keyframes comingIn {
    0%{
        top: -3vw;
    }
    100%{
        top: 3vw;
    }
}
.title{
    z-index: 10;
    position: fixed;
    top: -3vw;
    left: 0;
    right: 0;
    width: 13.22vw;
    height: 2.39vw;
    margin: 0 auto;
    margin-top: 2vw;
    font-size: 1.04vw;
    font-family: AlibabaPuHuiTi_2_75_SemiBold;
    color: #35F1C8;
    line-height: 2.39vw;
    text-align: center;
    background-image: url('../../assets/nwcyberspace/comingsoon.svg');
    background-repeat: no-repeat;
    background-position: left top;
    background-size: auto 100%;
    animation: comingIn .4s ease-out;
    animation-fill-mode: forwards;
}
</style>
