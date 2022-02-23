<template>
    <div class="xplanpro" :class="xplanActive && (xplanAni ? 'bounceShow' : 'bounceHide') ">
        <div class="cover"></div>
        <div class="coverborder"></div>
        <div class="top">
            <img class="closexplan" src="@/assets/nwhome/closexplan.svg" alt="" @click="closexplan()">
            <div class="title1">
                X-PLAN IS A PLAN THAT MAKE INVESTORS AND SHAREHOLDERS TO WATCH THE PROGRESS OF THE PROJECT.
            </div>
        </div>
        <div class="bot">
            <div class="line"></div>
             <div class="title2">
                The  midas touch NFT badge
            </div>
            <div class="title3">
                The plan will issue a limited number of NFT badge to confirm the view. Contact us to become an investor.
            </div>
            <div class="desc">
                'Wealth is not just a change in numbers, or some green papers. Also the Midas touch is not just medieval alchemy, nor is it just an ancient legend from Greek mythology.<br/>
    <span></span>It is to send hand-made hope to believers, to give them authority that can breed a new world from 1 and o. It will bring about the greatest and most precious thing of this age: possibility.’
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, readonly, ref } from 'vue'
import store from '@/store'


const xplanAni = computed(() => store?.state.user?.xplanAni);
const xplanActive = computed(() => store?.state.user?.xplanActive);


const closexplan = () => {
    store.dispatch('user/xplanChangeAni',false);
}

</script>

<style lang="less" scoped>
.xplanpro{
    z-index: 8;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 314px;
    height: 354px;
    // background: linear-gradient(180deg, #090223 0%, #090223 52%, #090223 100%);
    border: 4px solid;
    border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 4 4;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%);
    .cover{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, #090223 0%, #090223 52%, #090223 100%);
        clip-path: polygon(0 0, 100% 0, 100% 85%, 92% 100%, 0 100%);
    }
    .coverborder{
        z-index: -1;
        position: absolute;
        bottom: 0;
        right: -8px;
        content: '';
        display: inline-block;
        width: 50px;
        height: 50px;
        background-color: #2d2942;
    }
    .top{ 
        position: relative;
        width: 100%;
        height: 174px;
        background-image: url('../../assets/nwhomePhone/xplanpro.png');
        background-size: 101% 100%;
        background-position: left -11px;
        overflow: hidden;
        .closexplan{
            position: absolute;
            right: -51px;
            top: -49px;
            width: 130px;
            height: 130px
        }
        .title1{
            width: 156px;
            height: 83px;
            margin-top: 59px;
            margin-left: 26px;
            font-size: 11px;
            font-family: AlibabaPuHuiTi_2_105_Heavy;
            color: #04FFA2;
            line-height: 14px;
        }
    }
    .bot{
        position: relative;
        width: 100%;
        padding: 2px 45px 0 15px;
        .line{
            position: absolute;
            top: -14px;
            left: 50%;
            transform: translateX(-50%);
            width: 288px;
            border-top: 2px solid #6D4AFF;
        }
        .title2{
            width: 254px;
            height: 17px;
            margin-top: -7px;
            margin-bottom: 11px;
            font-size: 12px;
            font-family: AlibabaPuHuiTi_2_105_Heavy;
            color: #FFFFFF;
            line-height: 17px;
        }
        .title3{
            width: 280px;
            height: 24px;
            font-size: 8px;
            font-family: AlibabaPuHuiTi_2_55_Regular;
            color: #FFFFFF;
            line-height: 12px;
        }
        .desc{
            width: 280px;
            height: 84px;
            margin-top: 16px;
            font-size: 8px;
            font-family: AlibabaPuHuiTi_2_55_Regular;
            color: #C8BBFF;
            line-height: 12px;
            span{
                display: inline-block;
                width: 18px;
            }
        }
    }
}
</style>
