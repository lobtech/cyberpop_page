<template>
    <header-b path="/mystery" :type="2"></header-b>
    <div class="section">
        <div class="title">COMING SOON</div>
    </div>
    <div class="boxBg">
        <div class="titles">
            <div class="title">CYBERPOP <br/>BLIND BOX</div>
            <div class="round">
                <div>NFT</div>
                <div>ROUND #1</div> 
            </div>
            <div class="subtitle">INCLUDES SUPER VALUE FOR LIMITED TIME</div>
            <div class="desc">
                The blind box of promotional NFTs minted by the Cyberpop DAO marks the beginning of our Cyberspace new world journey.
            </div>
        </div>
        <div class="vBg">
            <video-bg 
id="videobg" :sources="[`https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxbanner.mp4`]">
            </video-bg>
            <div class="maskBlur"></div>
        </div>
        <div class="blind">
            <div class="title">BLIND BOX <span> TYPE</span></div>
            <ul>
                <li>
                    <div class="boxVideo">
                        <video autoplay loop>
                            <source src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox1.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="name">WEAPON BLIND BOX</div>
                    <div class="introduce">
                        Weapons can give the character better abilities and make the character stronger. Stronger weapons allow you to perform stronger fights . 
                    </div>
                    <div class="price">
                        <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                        <div class="num">— —</div>
                        <div class="exchange">≈$- -</div>
                    </div>
                    <div class="btn">
                        <div class="purchase">PURCHASE</div>
                        <div class="details" @click="toDetails(1)">DETAILS</div>
                    </div>
                </li>
                <li>
                    <div class="boxVideo">
                        <video autoplay loop>
                            <source src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox2.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="name">WEAPON BLIND BOX</div>
                    <div class="introduce">
                        Weapons can give the character better abilities and make the character stronger. Stronger weapons allow you to perform stronger fights . 
                    </div>
                    <div class="price">
                        <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                        <div class="num">— —</div>
                        <div class="exchange">≈$- -</div>
                    </div>
                    <div class="btn">
                        <div class="purchase">PURCHASE</div>
                        <div class="details" @click="toDetails(2)">DETAILS</div>
                    </div>
                </li>
                <li>
                    <div class="boxVideo">
                        <video class="third" autoplay loop>
                            <source src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox3.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="name">WEAPON BLIND BOX</div>
                    <div class="introduce">
                        Weapons can give the character better abilities and make the character stronger. Stronger weapons allow you to perform stronger fights . 
                    </div>
                    <div class="price">
                        <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                        <div class="num">— —</div>
                        <div class="exchange">≈$- -</div>
                    </div>
                    <div class="btn">
                        <div class="purchase">PURCHASE</div>
                        <div class="details" @click="toDetails(3)">DETAILS</div>
                    </div>
                </li>
                <li>
                    <div class="boxVideo">
                        <video autoplay loop>
                            <source src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox4.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="name">WEAPON BLIND BOX</div>
                    <div class="introduce">
                        Weapons can give the character better abilities and make the character stronger. Stronger weapons allow you to perform stronger fights . 
                    </div>
                    <div class="price">
                        <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                        <div class="num">— —</div>
                        <div class="exchange">≈$- -</div>
                    </div>
                    <div class="btn">
                        <div class="purchase">PURCHASE</div>
                        <div class="details" @click="toDetails(4)">DETAILS</div>
                    </div>
                </li>
            </ul>
        </div>
        <footer-b></footer-b>
    </div>
    <message-b v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-b>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
const router = useRouter()


// message dialog
const showDialog = computed(() => store?.state.user?.showDialog);
let messageState:any = ref(0)
let messageContent:any = ref('')
const mtimer:any = ref(null)
const messageAlert = (flag:any, message:any) => {
    clearTimeout(mtimer.value)
    messageState.value = flag
    store.dispatch('user/showDialog',true)
    messageContent.value = message
    mtimer.value = setTimeout(() => {
        store.dispatch('user/showDialog',false)
    },2000)
}


const toDetails = (type:any) => {
    router.push({ name: 'details',params:{ type }})
}

onMounted(() => {
    window.scrollTo(0,0);
})

</script>
<style lang="less" scoped>
    .section{
        z-index: 8;
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        width: 100%;
        height: 120vh;
        background: rgba(0,0,0,.5);
        overflow: hidden;
        .title{
            width: 100%;
            height: 90px;
            margin-top: 200px;
            font-size: 18px;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            color: #FFFFFF;
            line-height: 90px;
            letter-spacing: 18px;
            text-align: center;
            text-indent: 14px;
            background-image: url('../../../assets/nwmining/coming-bg.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 110% auto;
        }
    }
    .boxBg{
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
        background-color: #000000;
        overflow: hidden;
        .titles{
            z-index: 1;
            margin-left: 31px;
            .title{
                margin-top: 61px;
                height: 95px;
                font-size: 40px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 47px;
                animation: fadeInUp .8s linear;
            }
            .round{
                display: flex;
                align-items: flex-end;
                height: 53px;
                margin-top: 8px;
                div:nth-child(1){
                    width: 140px;
                    font-size: 67px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    line-height: 53px;
                    background: linear-gradient(76deg, #8900FF 0%, #FFFFFF 30%, #00FFBF 46%, #9C3DFF 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                div:nth-child(2){
                    width: 94px;
                    height: 28px;
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    color: #000000;
                    line-height: 30px;
                    text-align: center;
                    background-color: #04FFA2;
                    clip-path: polygon(0 0, 100% 0, 100% 65%, 92% 100%, 0 100%);
                }
            }
            .subtitle{
                width: 273px;
                height: 60px;
                margin: 14px 0 17px;
                font-size: 18px;
                color: #04FFA2;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 30px;
                letter-spacing: 2px;
            }
            .desc{
                width: 188px;
                height: 132px;
                font-size: 14px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 22px;
            }
        }   
        .vBg{
            position: relative;
            height: 348px;
            margin-top: -116px;
            :deep(.VideoBg){
                height: 348px !important;
            }
            :deep(.VideoBg video){
                height: 348px !important;
                position: absolute;
                top: 50%;
                left: 50%;
                visibility: hidden;
                transform: translate(-67%,-50%);
            }
            .maskBlur{
                position: absolute;
                bottom: -50px;
                width: 100%;
                height: 77px;
                background: linear-gradient(180deg, rgba(0, 0, 0,0) 0, rgba(0, 0, 0, 1) 60%);
            }
        }
        .blind{
            position: relative;
            background: #000000;
            .title{
                margin-bottom: 8px;
                font-size: 27px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 63px;
                text-align: center;
                span{
                    background: linear-gradient(254deg, #04FFA2 0%, #37D4BA 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
            ul{
                padding-bottom: 55px;
                background-image: url('../../../assets/nwbox/boxBg-phone.png');
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: 100% auto;
                li{
                    // display: flex;
                    width: 334px;
                    // height: 708px;
                    margin: 0 auto 31px;
                    padding: 24px 30px 27px;
                    background: #1A1728;
                    border-radius: 2px;
                    border: 2px solid #434248;
                    text-align: center;
                    .boxVideo{
                        position: relative;
                        width: 274px;
                        height: 274px;
                        border-radius: 10px;
                        overflow: hidden;
                        video{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                            width: 134%;
                        }
                        .third{
                            width: 176%;
                        }
                    }
                    .name{
                        margin: 14px 0 8px;
                        font-size: 22px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        line-height: 39px;
                    }
                    .introduce{
                        // flex: 1;
                        width: 283px;
                        min-height: 126px;
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFFFFF;
                        line-height: 18px;
                    }
                    .price{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 10px 0 17px;
                        img{
                            width: 35px;
                            height: 35px;
                        }
                        .num{
                            // width: 121px;
                            width: 102px;
                            font-size: 33px;
                            // font-family: AlibabaPuHuiTi_2_105_Heavy;
                            font-family: Oswald-Regular;
                            font-weight: 900;
                            color: #F1BF34;
                            line-height: 46px;
                            text-align: right;
                        }
                        .exchange{
                            margin-left: 16px;
                            font-size: 19px;
                            // font-family: AlibabaPuHuiTi_2_55_Regular;
                            font-family: Oswald-Regular;
                            font-weight: 900;
                            color: #B3B3B3;
                            line-height: 26px;
                        }
                    }
                    .btn{
                        width: 214px;
                        margin: 0 auto;
                        font-size: 20px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        line-height: 54px;
                        .purchase{
                            width: 100%;
                            height: 54px;
                            margin-bottom: 17px;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.png');
                            background-size: 100% 100%;
                            cursor: pointer;
                        }
                        .details{
                            width: 100%;
                            height: 54px;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/cancle.png');
                            background-size: 100% 100%;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
