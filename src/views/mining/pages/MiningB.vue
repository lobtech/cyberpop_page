<template>
    <header-b path="/mining" :type="1"></header-b>
    <div class="section">
        <div class="title">COMING SOON</div>
    </div>
    <div class="mining">
        <div class="banner">
            <div class="title">MINING</div>
            <div class="subtitle">STAKE NFT FOR MINING REWARDS</div>
        </div>
        <div class="total">
            <div class="progressBall">
                <img class="ballBorder" src="https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/ballBorder.svg" alt="">
                <div class="ball-inner"></div>
            </div>
            <div class="right">
                <div class="total-title">TOTAL POOL REWARDS</div>
                <div class="total-subtitle">（BUSD）</div>
                <div class="price">$- -</div>
            </div>
        </div>
        <ul class="data">
            <li>
                <div class="txt">Total Staking NFTs</div>
                <div class="percent">0</div>
            </li>
            <li>
                <div class="txt">Your Weight Percentage</div>
                <div class="percent">- -%</div>
            </li>
            <li>
                <div class="txt">Your Mining Rewards</div>
                <div class="percent">≈$- -</div>
            </li>
        </ul>
        <div class="pledge">
            <div class="title">Current Pledge <span>2/4</span></div>
            <ul>
                <!-- <li>
                    <div class="img-wrap">
                        <img class="pledge-img" :src="greenImgSrc" alt="">
                    </div>
                    <div class="top-txt">Position HashRate:1</div>
                    <div class="bot-txt greenNft">
                        <div>APPROVE</div>
                        <img :src="greenBorderSrc" alt="">
                    </div>
                </li> -->
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img" :src="whiteImgSrc" alt="">
                    </div>
                    <div class="top-txt">Position HashRate:1</div>
                    <div class="bot-txt whiteNft">
                        <div>Select NFT to stake</div>
                        <img :src="whiteBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img" :src="whiteImgSrc" alt="">
                    </div>
                    <div class="top-txt">Position HashRate:1</div>
                    <div class="bot-txt whiteNft">
                        <div>Select NFT to stake</div>
                        <img :src="whiteBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img lockedImg" :src="lockedImgSrc" alt="">
                    </div>
                    <div class="top-txt">Position HashRate:1</div>
                    <div class="bot-txt grayNft">
                        <div>Coming soon</div>
                        <img :src="lockedBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img lockedImg" :src="lockedImgSrc" alt="">
                    </div>
                    <div class="top-txt">Position HashRate:1</div>
                    <div class="bot-txt grayNft">
                        <div>Coming soon</div>
                        <img :src="lockedBorderSrc" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <footer-b></footer-b>
    <message-b v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-b>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
const router = useRouter()

// pledge
let greenImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/whiteImg.png')
let whiteImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/whiteImg.png')
let lockedImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/locked.svg')

let greenBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/pledge-border1.svg')
let whiteBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/pledge-border2.svg')
let lockedBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/pledge-border3.svg')



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



onMounted(() => {
    window.scrollTo(0,0);
})


</script>
<style lang="less" scoped>
    @keyframes wave{
        from {
            -webkit-transform: rotateZ(0deg) ;
            transform: rotateZ(0deg);
        }
        to {
            -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }
    }
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
    .mining{
        width: 100%;
        padding-top: 55px;
        background-color: #000000;
        .banner{
            width: 100%;
            height: 387px;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/banner-phone.png');
            background-repeat: no-repeat;
            background-position: -311px top;
            background-size: auto 100%; 
            text-align: center;
            overflow: hidden;
            .title{
                height: 63px;
                margin-top: 24px;
                font-size: 45px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 63px;
                letter-spacing: 4px;
                animation: fadeInUp .8s linear;
            }
            .subtitle{
                height: 25px;
                font-size: 18px;
                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                color: #FFFFFF;
                line-height: 25px;
            }
        }
        .total{
            display: flex;
            height: 108px;
            .progressBall{
                display: inline-block;
                position: relative;
                width: 109px;
                height: 110px;
                margin-left: 20px;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/ballBg.svg');
                background-repeat: no-repeat;
                background-position: left bottom;
                background-size: 100% 100%; 
                border-radius: 50%;
                overflow: hidden;
                transform-style: preserve-3d;
                .ballBorder{
                    position: absolute;
                    margin-top: 2px;
                    width: 100%;
                    height: 100%;
                }
                .ball-inner{
                    width: 218px;
                    height: 220px;    
                    border-radius:38%;
                    background: radial-gradient(circle,  #9537FF 1%,#1939F1 40%, #00FF49 80%);
                    filter: blur(2px);
                    position:relative;
                    top: 28%;
                    left: -48%;
                    -webkit-animation: wave 5s linear infinite;
                    z-index:66;
                }
            }
            .right{
                margin-left: 10px;
                .total-title{
                    width: 212px;
                    height: 22px;
                    margin-top: 7px;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 22px;
                }
                .total-subtitle{
                    height: 17px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B4B4B4;
                    line-height: 17px;
                }
                .price{
                    height: 41px;
                    margin-top: 5px;
                    font-size: 30px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #04FF55;
                    line-height: 41px;
                }
            }
        }
        .data{
            width: 338px;
            height: 256px;
            margin: 0 auto;
            margin-top: -12px;
            background: #171C28;
            overflow: hidden;
            li{
                margin-top: 23px;
                text-align: center;
                .txt{
                    height: 22px;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B3B3B3;
                    line-height: 22px;
                }
                .percent{
                    height: 44px;
                    font-size: 31px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #F2F2F2;
                    line-height: 44px;
                }
            }
            li + li{
                margin-top: 7px;
            }
        }
        .pledge{
            height: 1268px;
            margin: 0 auto;
            .title{
                height: 28px;
                margin: 30px 0;
                font-size: 20px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 28px;
                text-align: center;
                span{
                    color: #EDFF00;
                }
            }
            ul{
                display: flex;
                flex-direction: column;
                align-items: center;
                li{
                    position: relative;
                    width: 226px;
                    height: 260px;
                    background: linear-gradient(61deg, rgba(105, 0, 255, .43) 0%, rgba(88, 0, 255, 0) 100%);
                    border: 2px solid rgba(62, 65, 68, .43);
                    .img-wrap{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        img:hover{
                            transform: scale(1.2);
                        }
                        .lockedImg{
                            width: 97px;
                            height: 108px;
                            margin-bottom: 30px;
                        }
                    }
                    .top-txt{
                        height: 16px;
                        margin-top: 10px;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 16px;
                        text-align: center;
                    }
                    .bot-txt{
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 52px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #04FF55;
                        line-height: 52px;
                        text-align: center;
                        img{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            width: 101%;
                            opacity: 0.46;
                            // height: 100%;
                        }
                    }
                    .greenNft > img:hover{
                        filter: drop-shadow(0 0 5px #04FF55);
                    }
                    .whiteNft > img:hover{
                        filter: drop-shadow(0 0 .5vw #ffffff);
                    }
                    .grayNft > img:hover{
                        filter: drop-shadow(0 0 .5vw #7E52FF);
                    }
                    .greenNft{
                        color: #04FF55;
                    }
                    .whiteNft{
                        color: #ffffff;
                    }
                    .grayNft{
                        color: #7E52FF;
                    }
                }
                li + li{
                    margin-top: 34px;
                }
            }
        }
    }
</style>
