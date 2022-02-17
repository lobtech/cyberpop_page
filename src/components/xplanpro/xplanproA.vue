<template>
    <div class="xplanpro">
        <div class="wrap">
            <img class="closexplan" src="@/assets/nwhome/closexplan.svg" alt="" @click="closexplan()">
            <div class="title1">
                X-PLAN IS A PLAN THAT MAKE INVESTORS AND SHAREHOLDERS TO WATCH THE PROGRESS OF THE PROJECT.
            </div>
            <div class="title2">
                The plan will issue a limited number of NFT badge to confirm the view. Contact us to become an investor.
            </div>
            <div class="title3">
                The  midas touch NFT badge
                <div class="desc">
                    'Wealth is not just a change in numbers, or some green papers. Also the Midas touch is not just medieval alchemy, nor is it just an ancient legend from Greek mythology.<br/>
        <span></span>It is to send hand-made hope to believers, to give them authority that can breed a new world from 1 and o. It will bring about the greatest and most precious thing of this age: possibility.’
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, readonly, ref } from 'vue'
import store from '@/store'

// const xplanActive = computed(() => store?.state.user?.xplanActive);

const closexplan = () => {
    store.dispatch('user/changeXplan',false);
}


</script>

<style lang="less" scoped>
.xplanpro{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 59.68vw;
    height: 33.12vw;
    transform: translate(-50%,-50%);
    background-image: url('../../assets/nwhome/xplanpro.png');
    background-size: 100% 100%;
    .wrap{ 
        position: relative;
        overflow: hidden;
        .closexplan{
            position: absolute;
            right: -2.8vw;
            top: -1vw;
            width: 10.72vw;
            height: 10.78vw;
        }
        .title1{
            width: 28.12vw;
            height: 2.91vw;
            margin-top: 9.73vw;
            margin-left: 5.2vw;
            font-size: .93vw;
            font-family: AlibabaPuHuiTi_2_105_Heavy;
            color: #04FFA2;
            line-height: 1.45vw;
        }
        .title2{
            width: 26.61vw;
            height: 2.18vw;
            margin-top: 2vw;
            margin-left: 5.6vw;
            font-size: .78vw;
            font-family: AlibabaPuHuiTi_2_55_Regular;
            color: #FFFFFF;
            line-height: 1.04vw;
        }
        .title3{
            width: 28.12vw;
            margin: 1.25vw 0 .5vw 5.6vw;
            font-size: .93vw;
            font-family: AlibabaPuHuiTi_2_105_Heavy;
            color: #FFFFFF;
            line-height: 1.45vw;
            .desc{
                width: 26.6vw;
                height: 6.56vw;
                font-size: .78vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #C8BBFF;
                line-height: 1.04vw;
                span{
                    display: inline-block;
                    width: 1.4vw;
                }
            }
        }
    }
}
</style>
