<template>
    <header-a path="/mining" :type="1"></header-a>
    <!-- <div class="section">
        <div class="title">{{$t('message.mining.coming')}}</div>
    </div> -->
    <div class="mining">
        <div class="banner">
            <div class="title">{{$t('message.mining.title')}}</div>
            <div class="subtitle">{{$t('message.mining.subtitle')}}</div>
            <div class="total">
                <div class="progressBall">
                    <img class="ballBorder" src="https://d2cimmz3cflrbm.cloudfront.net/nwmining/ballBorder.svg" alt="">
                    <div class="ball-inner"></div>
                </div>

                <div class="right">
                    <div class="total-title">{{$t('message.mining.total_title')}}</div>
                    <div class="total-subtitle">{{$t('message.mining.total_subtitle')}}</div>
                    <div class="price">$- -</div>
                </div>
            </div>
        </div>
        <ul class="data">   
            <li>
                <div class="txt">{{$t('message.mining.data_txt1')}}</div>
                <div class="percent">{{ getTotalSupply }}</div>
            </li>
            <li>
                <div class="txt">{{$t('message.mining.data_txt3')}}</div>
                <div class="percent">- -%</div>
            </li>
            <li>
                <div class="txt">{{$t('message.mining.data_txt3')}}</div>
                <div class="percent">≈$- -</div>
            </li>
        </ul>
        <div class="days">
            <div class="title">Days</div>
            <div class="content">
                <div :style="{'width': progress + '%'}"></div>
            </div>
            <div class="total_day">total: 30day</div>
        </div>
        <div class="pledge">
            <div class="title">{{$t('message.mining.pledge_title')}}<span>2/4</span></div>
            <ul>
                <!-- <li>
                    <div class="img-wrap" @mouseenter="flipMove()" @mouseleave="flipEnd()">
                        <img id="pledgeImg" class="pledge-img" :src="greenImgSrc" alt="">
                    </div>
                    <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                    <div class="bot-txt greenNft">
                        <div>{{$t('message.mining.pledge_bot_txt1')}}</div>
                        <img :src="greenBorderSrc" alt="">
                    </div>
                </li> -->
                <li>
                    <div class="not-stak" v-if="myStakCyt == 0">
                        <div class="img-wrap" @click="stakingCyt">
                        <img class="pledge-img" :src="whiteImgSrc" alt="">
                        </div>
                        <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                        <div class="bot-txt whiteNft">
                            <div>{{$t('message.mining.pledge_bot_txt2')}}</div>
                            <img :src="whiteBorderSrc" alt="">
                        </div>
                    </div>
                    <div class="have-stak"  @click="stakingCyt" v-else>
                         Your Staking: {{ myStakCyt }}
                         Current day: {{ 30 }}
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img" :src="whiteImgSrc" alt="">
                    </div>
                    <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                    <div class="bot-txt whiteNft">
                        <div>{{$t('message.mining.pledge_bot_txt2')}}</div>
                        <img :src="whiteBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img lockedImg" :src="lockedImgSrc" alt="">
                    </div>
                    <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                    <div class="bot-txt grayNft">
                        <div>{{$t('message.mining.pledge_bot_txt3')}}</div>
                        <img :src="lockedBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img lockedImg" :src="lockedImgSrc" alt="">
                    </div>
                    <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                    <div class="bot-txt grayNft">
                        <div>{{$t('message.mining.pledge_bot_txt3')}}</div>
                        <img :src="lockedBorderSrc" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <footer-a></footer-a>
    <coming-a v-show="showComingFlag"></coming-a>
    <!-- 切换网络弹窗 -->
    <wrongNetWorkA :isShowTips="isShowTips" @changeSwitch="changeSwitch"></wrongNetWorkA>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 

const { staking, cytV2 } = Web3.contracts;

const router = useRouter()
const realId = computed(() => store?.state.user?.realId);  // 星号地址
const chainId: any = computed(() => store.state.user?.chainId);
watch(chainId, (newVal: any, oldVal: any) => {
    console.log(newVal, oldVal, 'newVal');
    console.log(!oldVal);
    
    if(!oldVal || oldVal == -1) return;
    if(newVal != 43113){
        changeSwitch()
        return;
    }
    init()
}, {immediate:true,deep:true});
watch(realId, (newVal, oldVal: any) => {
    console.log(newVal, oldVal, 'realId');
    if(!oldVal || oldVal == -1) return;
    init()
    console.log('her3');
}, {immediate:true,deep:true});

// component
const isShowTips = ref(false)
const changeSwitch = () => { //子组件，弹窗属性
    isShowTips.value = !isShowTips.value;
}

// progress 进度
const progress = ref(0)

// coming soon
let showComingFlag:any = ref(false)
const ctimer:any = ref(null)

const showComing = () => {
    clearTimeout(ctimer.value);
    // default animation
    store.dispatch('user/addComingOut', false)
    // show coming view
    showComingFlag.value = true;
    ctimer.value = setTimeout(() => {
        // change animation
        store.dispatch('user/addComingOut', true)
    },3000)
}

// pool
const getTotalSupply: any = ref(0)

// card filp
const flipMove = () => {
    const pledgeImg = document.getElementById('pledgeImg') as HTMLElement;
    pledgeImg.classList.add('pledgeAni')
}
const flipEnd = () => {
    const pledgeImg = document.getElementById('pledgeImg') as HTMLElement;
    pledgeImg.classList.remove('pledgeAni')
}


// pledge
let greenImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/whiteImg.png')
let whiteImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/whiteImg.png')
let lockedImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/locked.svg')

let greenBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/pledge-border1.svg')
let whiteBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/pledge-border2.svg')
let lockedBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/pledge-border3.svg')

//  my balance
const mycyt: any = ref(0);
const myStakCyt: any = ref(0);

// start staking
const stakingCyt = async () => {
    store.dispatch('user/stakingState', { show: true, info: { state: 0, haveCTY: mycyt.value }});
    store.dispatch('user/xplanChangeAni', true);
}

// init data
const init = async () => {
    mycyt.value = await Web3.ERC20balanceOf(cytV2.abi, cytV2.address);
    myStakCyt.value = await Web3.getBalanceOf(staking.abi, staking.address)
    console.log(myStakCyt.value, 'myStakCyt.value');
    let DaysResult = await Web3.DaysRemaining(staking.abi, staking.address, 3)
    console.log(DaysResult, 'DaysResult');
    
}

onMounted(async () => {
    let a = await Web3.notifyrewardamount(staking.abi, staking.address)
    console.log(a);
    setTimeout(() => {
        if(chainId.value != 43113){
            changeSwitch()
            return;
        }
        progress.value = 40;
        init() 
    }, 2000);
    getTotalSupply.value = await Web3.getTotalSupply(staking.abi, staking.address)
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
    @keyframes pledgeAni{
        0% {
            transform: rotatYX(0deg);
        }
        100% {
            transform: rotateY(180deg);
        }
    }
    a {
    text-decoration: none;
    }
    .section{
        z-index: 8;
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,.5);
        overflow: hidden;
        .title{
            width: 39.58vw;
            height: 8.85vw;
            margin-top: 17.4vw;
            font-size: 2.08vw;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            color: #FFFFFF;
            line-height: 8.85vw;
            letter-spacing: 1.04vw;
            text-align: center;
            background-image: url('../../../assets/nwmining/coming-bg.png');
            background-position: center;
            background-size: auto 100%;
        }
    }
    .mining{
        width: 100%;
        padding-top: 5.5vw;
        background-color: #000000;
        overflow: hidden;
        .banner{
            width: 100%;
            height: 25.78vw;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwmining/banner-home.png');
            background-repeat: no-repeat;
            background-position: left bottom;
            background-size: 100% 100%; 
            .title{
                height: 6.56vw;
                margin-top: 6.92vw;
                margin-right: 17.65vw;
                font-size: 4.73vw;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 6.56vw;
                letter-spacing: .46vw;
                text-align: right;
                animation: fadeInUp .8s linear;
            }
            .subtitle{
                height: 2.13vw;
                margin-right: 17.55vw;
                font-size: 1.51vw;
                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                color: #FFFFFF;
                line-height: 2.13vw;
                text-align: right;
            }
            .total{
                display: flex;
                margin-top: 2.96vw;
                margin-left: 20.78vw;
                .progressBall{
                    display:inline-block;
                    position: relative;
                    width: 11.30vw;
                    height: 11.45vw;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwmining/ballBg.svg');
                    background-repeat: no-repeat;
                    background-position: left bottom;
                    background-size: 100% 100%; 
                    border-radius: 50%;
                    overflow: hidden;
                    transform-style:preserve-3d;
                    .ballBorder{
                        position: absolute;
                        margin-top: .2vw;
                        width: 100%;
                        height: 100%;
                    }
                    .ball-inner{
                        width: 22vw;
                        height: 22vw;    
                        border-radius:38%;
                        background: radial-gradient(circle,  #9537FF 1%,#1939F1 40%, #00FF49 80%);
                        filter: blur(2px);
                        position:relative;
                        top: 28%;
                        left: -48%;
                        -webkit-animation:wave 5s linear infinite;
                        z-index:66;
                    }
                }
                .right{
                    margin-left: 2.13vw;
                    .total-title{
                        height: 1.71vw;
                        font-size: 1.25vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 1.71vw;
                    }
                    .total-subtitle{
                        height: 1.45vw;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #B4B4B4;
                        line-height: 1.45vw;
                    }
                    .price{
                        height: 3.6vw;
                        font-size: 3.07vw;
                        // font-family: AlibabaPuHuiTi_2_105_Heavy;
                        font-family: Oswald-Regular;
                        font-weight: 900;
                        color: #04FF55;
                        line-height: 3.6vw;
                    }
                }
            }
        }
        .banner:before,.banner:after {
            content:"";
            display: table;
            clear:both;
        }
        .data{
            width: 60.78vw;
            height: 5.1vw;
            margin: 0 auto;
            background: #121122;
            display: flex;
            li{
                margin-top: 1.05vw;
                .txt{
                    font-size: .98vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B3B3B3;
                    line-height: 1.35vw;
                }
                .percent{
                    height: 2vw;
                    font-size: 1.61vw;
                    // font-family: AlibabaPuHuiTi_2_85_Bold;
                    font-family: Oswald-Regular;
                    font-weight: 900;
                    color: #F2F2F2;
                    line-height: 2vw;
                }
            }
            li:first-child{
                margin-left: 14.2vw;
            }
            li + li{
                margin-left: 5.6vw;
            }
        }
        .days{
            width: 60.78vw;
            height: 5.1vw;
            margin: 0 auto;
            color: #fff;
            font-family: AlibabaPuHuiTi_2_105_Heavy;
            .title{
                margin: 2vw 0;
            }
            .content{
                border: 1px solid #fff;
                border-radius: 10px;
                width: 100%;
                height: 2vw;
                display: flex;
                font-size: 1vw;
                overflow: hidden;
                & > div{
                    line-height: 2vw;
                    width: 1%;
                    height: 100%;
                    text-align: center;
                    background: radial-gradient(circle, #1551c2 1%, #10aa7c 40%, #c79c0e 80%);
                    filter: blur(2px);
                    position: relative;
                    transition: all 0.5s ease-in-out;
                }
            }
            .total_day{
                margin-top: 1vw;
                text-align: right;
            }
        }
        .pledge{
            width: 60.78vw;
            height: 28.9vw;
            margin: 0 auto;
            margin-bottom: 26vh;
            .title{
                width: 100%;
                margin-top: 4.53vw;
                padding-right: .625vw;
                height: 1.77vw;
                font-size: 1.45vw;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 1.77vw;
                text-align: right;
                span{
                    color: #EDFF00;
                    // font-family: Oswald-Regular;
                    // font-weight: 900;
                }
            }
            ul{
                width: 100%;
                margin-top: 2.76vw;
                display: flex;
                li{
                    position: relative;
                    width: 13.17vw;
                    height: 15.15vw;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwmining/pledgeBg.png');
                    background-repeat: no-repeat;
                    background-position: left top;
                    background-size: 100% 100%; 
                    .not-stak{
                    }
                    .have-stak{
                        height: 100%;
                        display: flex;
                        color: #DFF;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                    }
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
                            width: 5.62vw;
                            height: 6.19vw;
                            margin-bottom: 1vw;
                        }
                    }
                    .pledgeAni{
                        // animation: pledgeAni 0.2s linear;
                        // animation-fill-mode: forwards;
                    }
                    .top-txt{
                        width: 100%;
                        margin-top: .8vw;
                        font-size: .67vw;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: .93vw;
                        text-align: center;
                        white-space: nowrap;
                    }
                    .bot-txt{
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 3vw;
                        font-size: .93vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 3vw;
                        text-align: center;
                        white-space: nowrap;
                        img{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            width: 100%;
                            opacity: 0.46;
                            // height: 100%;
                        }
                    }
                    .greenNft > img:hover{
                        filter: drop-shadow(0 0 .2vw #04FF55);
                    }
                    .whiteNft > img:hover{
                        filter: drop-shadow(0 0 .2vw #ffffff);
                    }
                    .grayNft > img:hover{
                        filter: drop-shadow(0 0 .2vw #7E52FF);
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
                    margin-left: 2.76vw;
                }
            }
        }
    }
    @media screen {
        @media (max-width: 1020px) {
            .data{
                height: 6.8vw !important;
            }
            .top-txt{
                transform: scale(.8);
            }
            .bot-txt > div{
                transform: scale(.8);
            }
        }
    }
</style>
