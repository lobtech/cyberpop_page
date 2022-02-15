<template>
    <div class="home">
        <header>
            <div class="content" id="header">
                <img class="logo" v-show="!logoHFlag" :src="logoHSrcP" @mouseenter="changeHGif()" alt="">
                <img class="logo" v-show="logoHFlag" :src="logoHSrcG" @mouseleave="stopHGif()" alt="">
                <div class="user" @click="connect()">
                    <!-- <div class="language">
                        <img @click="changeLanguage()" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-language.svg" alt="" v-if="!id">
                        <ul :class="lang == true ? 'showLang' : ''">
                            <li :class="select == 0 ? 'active' : ''" @click="selectLang(0)">简体中文</li>
                            <li :class="select == 1 ? 'active' : ''" @click="selectLang(1)">English</li>
                            <li :class="select == 2 ? 'active' : ''" @click="selectLang(2)">Japanese</li>
                        </ul>
                    </div> -->
                    <div class="login_in" v-if="!loggined" @click="connect()"  @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">
                        <div class="txt">CONNECT WALLET</div>
                        <div class="mask" id="mask"></div>
                    </div>
                    <div class="logged_in" v-if="loggined">
                        <img class="wallet" src="@/assets/nwhome/wallet.svg" alt="">
                        <div class="idtxt">{{id}}</div>
                        <img class="portrait" src="@/assets/nwhome/portrait.svg" alt="">
                    </div>
                </div>
                <div class="menu">
                    <ul id="menuUl">
                        <li @mouseover="menuHover(0)" @click="changeMenu(0, '/')" :class="{'active': active == 0}">
                            <span>Home</span>
                        </li>
                        <li @mouseover="menuHover(1)" @click="changeMenu(1, '/mining')" :class="{'active': active == 1}">
                            <span>Mining</span>
                        </li>
                        <li @mouseover="menuHover(2)" @click="changeMenu(2)" :class="{'active': active == 2}">
                            <span>Whitepaper</span>
                        </li>
                        <li @mouseover="menuHover(3)" @click="changeMenu(3, '/mystery')" :class="{'active': active == 3}">
                            <span>Mystery Box</span>
                        </li>
                        <li @mouseover="menuHover(4)" @click="changeMenu(4, '/cyberspace')" :class="{'active': active == 4}">
                            <span>Cyberspace</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <section>
            <div class="title">COMING SOON</div>
        </section>
    </div>
    <!-- <div class="mining">
        <div class="banner">
            <div class="title">MINING</div>
            <div class="subtitle">STAKE NFT FOR MINING REWARDS</div>
            <div class="total">
                <div class="progressBall">
                    <img class="ballBorder" src="https://d2cimmz3cflrbm.cloudfront.net/nwmining/ballBorder.svg" alt="">
                    <div class="ball-inner"></div>
                </div>
                <div class="right">
                    <div class="total-title">TOTAL POOL REWARDS</div>
                    <div class="total-subtitle">（BUSD）</div>
                    <div class="price">$393,441,130</div>
                </div>
            </div>
        </div>
        <ul class="data">
            <li>
                <div class="txt">Total Staking NFTs</div>
                <div class="percent">0</div>
            </li>
            <li>
                <div class="txt">Your Weight Percentage</div>
                <div class="percent">0%</div>
            </li>
            <li>
                <div class="txt">Your Mining Rewards</div>
                <div class="percent">≈$0</div>
            </li>
        </ul>
        <div class="pledge">
            <div class="title">Current Pledge <span>1/4</span></div>
            <ul>
                <li>
                    <div class="img-wrap" @mouseenter="flipMove()" @mouseleave="flipEnd()">
                        <img id="pledgeImg" class="pledge-img" :src="greenImgSrc" alt="">
                    </div>
                    <div class="top-txt">Position HashRate:1</div>
                    <div class="bot-txt greenNft">
                        <div>APPROVE</div>
                        <img :src="greenBorderSrc" alt="">
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
    <div class="footer">
        <div class="policy"><router-link to="/privacy">Privacy policy</router-link></div>
        <div class="terms"><router-link to="/terms">Terms of servce</router-link></div>
        <div class="desc">Cyberpop Labs Ltd. Games, Inc. ALL Rights Reserved.</div>
        <div class="icon">
            <a href="https://t.me/cyberpopnw" target="view_window">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/medium.svg" alt="">
            </a>
        <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/discord.svg" alt="" class="navLogo2">
            </a>
            <a href="https://twitter.com/cyberpopnw" target="view_window">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/twitter-footer.svg" alt="">
            </a>
        </div>
    </div> -->
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { log } from 'util';


// card filp
const flipMove = () => {
    const pledgeImg = document.getElementById('pledgeImg') as HTMLElement;
    pledgeImg.classList.add('pledgeAni')
}
const flipEnd = () => {
    const pledgeImg = document.getElementById('pledgeImg') as HTMLElement;
    pledgeImg.classList.remove('pledgeAni')
}


// language
let showLang:any = ref(false);
const changeLanguage = () => {
    showLang.value = !showLang.value;
}

let select:any = ref(0);
const selectLang = (index:any) => {
    select.value = index;
}


// connect
const mouseEnter = () => {
    const mask = document.getElementById("mask") as HTMLElement;
    mask.classList.add('submitAnimation');
    mask.classList.remove('stopSubmitAnimation');
}

const mouseLeave = () => {
    const mask = document.getElementById("mask") as HTMLElement;
    mask.classList.add('stopSubmitAnimation');
    mask.classList.remove('submitAnimation');
}


// pledge
let greenImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/whiteImg.png')
let whiteImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/whiteImg.png')
let lockedImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/locked.svg')

let greenBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/pledge-border1.svg')
let whiteBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/pledge-border2.svg')
let lockedBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwmining/pledge-border3.svg')




let logoHSrcP:any = ref(''); 
let logoHSrcG:any = ref(''); 
const logoHImport = async() => {
    const logoHSrcPng:any = await import('@/assets/nwhome/logo_101.png');
    const logoHSrcGif:any = await import('@/assets/nwhome/logo.gif');
    logoHSrcP.value = logoHSrcPng.default;
    logoHSrcG.value = logoHSrcGif.default;
}

// header
let logoHFlag: any = ref(false) ;
const changeHGif = () => {
    logoHFlag.value = true;
}
const stopHGif = () => {
    logoHFlag.value = false;
}

// footer
let logoFlag: any = ref(false) ;
const changeGif = () => {
    logoFlag.value = true;
}
const stopGif = () => {
    logoFlag.value = false;
}




const { proxy } = getCurrentInstance() as any;

const router = useRouter()

const active = computed(() => store?.state.user?.active);

const email: any = ref("");

const menuHover = (type: any) => {
    let myMenuUl = document.getElementById("menuUl") as HTMLElement;
    let header = document.getElementById("header") as HTMLElement;
    let myMenuLi = myMenuUl.getElementsByTagName("li");
    let myMenuLiLen:number = myMenuLi.length;
    for( let i=0;i<myMenuLiLen;i++){
        myMenuLi[i].addEventListener('mouseout',() => {
            store.dispatch('user/changeActive', menuFlag.value);
        })
    }
    header.addEventListener('mouseout',() => {
        store.dispatch('user/changeActive', menuFlag.value);
    })
    store.dispatch('user/changeActive', type);
}

let menuFlag:any = ref(1);
const changeMenu = (type: any, route?: any) => {
    if(type == 2) {
        window.open('./CyberpopWhitePaper.pdf')
        return
    }
    menuFlag.value = type;
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
}


const id: any = ref(0)
let type2: any = ref(1)
let isPlay: any = ref(false);

const loggined: any = ref(false)
const connect: any = async () => {
    const [accounts]: any = await Web3.login().then((res: any) => {
        return res;
    })
    id.value = accounts;
    let len = id.value.length-1;
    id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
    loggined.value = true;
}




onMounted(() => {
    connect();
    logoHImport();
    store.dispatch('user/changeActive', 1)
})

</script>
<style lang="less" scoped>
    @keyframes submitAnimation {
        0%{
            left: -13vw;
        }
        100%{
            left: -1.4vw;
        }
    }
    @keyframes stopSubmitAnimation {
        0%{
            left: -1.4vw;
        }
        100%{
            left: -13vw;
        }
    }
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
    
    .router-link-active {
    text-decoration: none;
    }
    .home{
        position: relative;
        width: 100%;
        // height: 100vh;
        header{
            z-index: 9;
            position: fixed;
            top: 0;
            width: 100%;
            height: 5.5vw;
            opacity: .86;
            color: #fff;
            background-color: #000000;
            .content{
                height: 98.9%;
                // margin: 0 2vw 0 1.8vw;
                margin: 0 2vw 0 0vw;
                display: flex;
                justify-content: space-between;
                position: relative;
                .logo{
                    width: 20.20vw;
                    height: 100%;
                    // margin-top: .88vw;
                }
                .user{
                    display: flex;
                    cursor: pointer;
                    .login_in{
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 10.3vw;
                        height: 2.3vw;
                        margin-top: 1.1vw;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-loginBg.svg');
                        background-size: 100% 100%;
                        background-position: left top;
                        overflow: hidden;
                        .txt{
                            z-index: 2;
                            color: #000000;
                            font-size: 1vw;
                            transform: scale(.8);
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            // line-height: 2.3vw;
                            font-weight: bold;
                            white-space: nowrap;
                        }
                        .mask{
                            // z-index: -1;
                            position: absolute;
                            top: 0;
                            left: -13vw;
                            width: 12vw;
                            height: 100%;
                            background-color: #cd2e86;
                            opacity: .6;
                            transform: skewX(-38deg);
                        }
                        .submitAnimation{
                            animation: submitAnimation 0.15s linear;
                            animation-fill-mode: forwards;
                        }
                        .stopSubmitAnimation{
                            animation: stopSubmitAnimation 0.15s linear;
                            animation-fill-mode: forwards;
                        }
                    }
                    .logged_in{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 12.13vw;
                        height: 2.3vw;
                        margin-top: 1.1vw;
                        .wallet{
                            width: 1.4vw;
                            height: .98vw;
                        }
                        .idtxt{
                            width: 8vw;
                            height: 1.56vw;
                            font-size: .98vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #C8C4C4;
                            line-height: 1.56vw;
                            text-align: center;
                        }
                        .portrait{
                            width: 2.6vw;
                            height: 2.6vw;
                        }
                    }  
                    .language{
                        position: relative;
                        margin-top: 1.46vw;
                        margin-right: 1.4vw;
                        img{
                            width: 1.56vw;
                            height: 1.56vw;
                        }
                        ul{
                            display: none;
                            position: absolute;
                            top: 3vw;
                            left: -4.22vw;
                            width: 10vw;
                            height: 8vw;
                            padding: 1vw 1.3vw;
                            border-radius: .2vw;
                            background-color: #000000;
                            text-align: left;
                            li{
                                color: #8F8F8F;
                                font-size: .72vw;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                line-height: 2vw;
                            }
                            li:hover{
                                color: #fff;
                            }
                            li.active{
                                color: #fff;
                                font-weight: 600;
                            }
                        }
                        ul::before{
                            position: absolute;
                            top: -1.4vw;
                            left: 4.3vw;
                            content: '';
                            display: inline-block;
                            width: 0;
                            height: 0;
                            border-width: .7vw;
                            border-style: solid;
                            border-color: transparent transparent #000 transparent;
                        }
                        .showLang{
                            display: block;
                        }
                    }
                }
                .menu{
                    position: absolute;
                    top: 0;
                    // left: 21.7vw;
                    left: 23.5vw;
                    width: 43.6vw;
                    height: 102%;
                    ul{
                        width: 100%;
                        height: 100%;
                    }
                    ul > li{
                        float: left;
                        width: 8.3vw;
                        height: 100%;
                        padding-top: 1.6vw;
                        padding-right: .8vw;
                        text-align: center;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 1.45vw;
                        cursor: pointer;
                        transform: skew(-18deg);
                        span{
                            display: inline-block;
                            transform: skew(18deg);
                        }
                    }
                    li:nth-child(3){
                        width: 9.8vw;
                    }
                    .active{
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-titleBg.svg');
                        background-repeat: no-repeat;
                        background-size: 180% 120%;
                        background-position: -3vw bottom;
                    }  
                }
            }
        }
        section{
            position: relative;
            width: 100%;
            height: 100vh;
            background-color: #000000;
            overflow: hidden;
            .title{
                z-index: 10;
                position: absolute;
                top: 3vw;
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
                background-image: url('../../../assets/nwcyberspace/comingsoon.svg');
                background-repeat: no-repeat;
                background-position: left top;
                background-size: auto 100%;
            }
        }
    }
//     .mining{
//         width: 100%;
//         padding-top: 5.5vw;
//         background-color: #000000;
//         .banner{
//             width: 100%;
//             height: 25.78vw;
//             background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwmining/banner.png');
//             background-repeat: no-repeat;
//             background-position: left bottom;
//             background-size: 100% 100%; 
//             .title{
//                 height: 6.56vw;
//                 margin-top: 6.92vw;
//                 margin-right: 17.65vw;
//                 font-size: 4.73vw;
//                 font-family: AlibabaPuHuiTi_2_105_Heavy;
//                 color: #FFFFFF;
//                 line-height: 6.56vw;
//                 letter-spacing: .46vw;
//                 text-align: right;
//                 animation: fadeInUp .8s linear;
//             }
//             .subtitle{
//                 height: 2.13vw;
//                 margin-right: 17.55vw;
//                 font-size: 1.51vw;
//                 font-family: AlibabaPuHuiTi_2_75_SemiBold;
//                 color: #FFFFFF;
//                 line-height: 2.13vw;
//                 text-align: right;
//             }
//             .total{
//                 display: flex;
//                 margin-top: 2.96vw;
//                 margin-left: 20.78vw;
//                 .progressBall{
//                     display:inline-block;
//                     position: relative;
//                     width: 11.30vw;
//                     height: 11.45vw;
//                     background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwmining/ballBg.svg');
//                     background-repeat: no-repeat;
//                     background-position: left bottom;
//                     background-size: 100% 100%; 
//                     border-radius: 50%;
//                     overflow: hidden;
//                     transform-style:preserve-3d;
//                     .ballBorder{
//                         position: absolute;
//                         margin-top: .2vw;
//                         width: 100%;
//                         height: 100%;
//                     }
//                     .ball-inner{
//                         width: 22vw;
//                         height: 22vw;    
//                         border-radius:38%;
//                         background: radial-gradient(circle,  #9537FF 1%,#1939F1 40%, #00FF49 80%);
//                         filter: blur(2px);
//                         position:relative;
//                         top: 28%;
//                         left: -48%;
//                         -webkit-animation:wave 5s linear infinite;
//                         z-index:66;
//                     }
//                 }
//                 .right{
//                     margin-left: 2.13vw;
//                     .total-title{
//                         height: 1.71vw;
//                         font-size: 1.25vw;
//                         font-family: AlibabaPuHuiTi_2_105_Heavy;
//                         color: #FFFFFF;
//                         line-height: 1.71vw;
//                     }
//                     .total-subtitle{
//                         height: 1.45vw;
//                         font-size: 1.04vw;
//                         font-family: AlibabaPuHuiTi_2_55_Regular;
//                         color: #B4B4B4;
//                         line-height: 1.45vw;
//                     }
//                     .price{
//                         height: 3.6vw;
//                         font-size: 3.07vw;
//                         font-family: AlibabaPuHuiTi_2_105_Heavy;
//                         color: #04FF55;
//                         line-height: 3.6vw;
//                     }
//                 }
//             }
//         }
//         .banner:before,.banner:after {
//             content:"";
//             display: table;
//             clear:both;
//         }
//         .data{
//             width: 60.78vw;
//             height: 5.1vw;
//             margin: 0 auto;
//             background: #121122;
//             display: flex;
//             li{
//                 margin-top: 1.05vw;
//                 .txt{
//                     height: 1.35vw;
//                     font-size: .98vw;
//                     font-family: AlibabaPuHuiTi_2_55_Regular;
//                     color: #B3B3B3;
//                     line-height: 1.35vw;
//                 }
//                 .percent{
//                     height: 2vw;
//                     font-size: 1.61vw;
//                     font-family: AlibabaPuHuiTi_2_85_Bold;
//                     color: #F2F2F2;
//                     line-height: 2vw;
//                 }
//             }
//             li:first-child{
//                 margin-left: 14.2vw;
//             }
//             li + li{
//                 margin-left: 5.6vw;
//             }
//         }
//         .pledge{
//             width: 60.78vw;
//             height: 28.9vw;
//             margin: 0 auto;
//             .title{
//                 width: 100%;
//                 margin-top: 4.53vw;
//                 padding-right: .625vw;
//                 height: 1.77vw;
//                 font-size: 1.45vw;
//                 font-family: AlibabaPuHuiTi_2_105_Heavy;
//                 color: #FFFFFF;
//                 line-height: 1.77vw;
//                 text-align: right;
//                 span{
//                     color: #EDFF00;
//                 }
//             }
//             ul{
//                 width: 100%;
//                 margin-top: 2.76vw;
//                 display: flex;
//                 li{
//                     position: relative;
//                     width: 13.17vw;
//                     height: 15.15vw;
//                     background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwmining/pledgeBg.png');
//                     background-repeat: no-repeat;
//                     background-position: left top;
//                     background-size: 100% 100%; 
//                     .img-wrap{
//                         display: flex;
//                         justify-content: center;
//                         align-items: center;
//                         position: absolute;
//                         top: 0;
//                         left: 0;
//                         width: 100%;
//                         height: 100%;
//                         img{
//                             width: 100%;
//                             height: 100%;
//                         }
//                         img:hover{
//                             transform: scale(1.2);
//                         }
//                         .lockedImg{
//                             width: 5.62vw;
//                             height: 6.19vw;
//                             margin-bottom: 1vw;
//                         }
//                     }
//                     .pledgeAni{
//                         // animation: pledgeAni 0.2s linear;
//                         // animation-fill-mode: forwards;
//                     }
//                     .top-txt{
//                         width: 100%;
//                         height: .93vw;
//                         margin-top: .8vw;
//                         font-size: .67vw;
//                         font-family: AlibabaPuHuiTi_2_75_SemiBold;
//                         color: #FFFFFF;
//                         line-height: .93vw;
//                         text-align: center;
//                     }
//                     .bot-txt{
//                         position: absolute;
//                         bottom: 0;
//                         width: 100%;
//                         height: 3vw;
//                         font-family: AlibabaPuHuiTi_2_115_Black;
//                         color: #FFFFFF;
//                         line-height: 3vw;
//                         text-align: center;
//                         img{
//                             position: absolute;
//                             bottom: 0;
//                             left: 0;
//                             right: 0;
//                             width: 100%;
//                             // height: 100%;
//                         }
//                     }
//                     .greenNft > img:hover{
//                         filter: drop-shadow(0 0 .2vw #04FF55);
//                     }
//                     .whiteNft > img:hover{
//                         filter: drop-shadow(0 0 .2vw #ffffff);
//                     }
//                     .grayNft > img:hover{
//                         filter: drop-shadow(0 0 .2vw #7E52FF);
//                     }
//                     .greenNft{
//                         color: #04FF55;
//                     }
//                     .whiteNft{
//                         color: #ffffff;
//                     }
//                     .grayNft{
//                         color: #7E52FF;
//                     }
//                 }
//                 li + li{
//                     margin-left: 2.76vw;
//                 }
//             }
//         }
//     }
//    .footer{
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         width: 100%;
//         height: 5.54vw;
//         padding-right: 6vw;
//         padding-left: 18.9vw;
//         font-size: 1.09vw;
//         font-family: Poppins-Regular, Poppins;
//         font-weight: 400;
//         color: #FFFFFF;
//         line-height: 1.82vw;
//         background-color: #121122;
//         a{
//             color: #ffffff;
//             text-decoration: none;
//         }
//         .logo{
//             // width: 12vw;
//             height: 5.54vw;
//         }
//         .policy{
//             margin-right: 3vw;
//             white-space: nowrap;
//         }
//         .policy > a:hover{
//             color: #04FF55;
//         }
//         .terms{
//             white-space: nowrap;
//         }
//         .terms > a:hover{
//             color: #04FF55;
//         }
//         .desc{
//             margin-left: 4vw;
//         }
//         .icon{
//             margin-left: 8vw;
//             white-space: nowrap;
//             img{
//                 width: 2.13vw;
//                 height: 2.13vw;
//                 margin-left: 1.14vw;
//                 margin-top: .5vw;
//             }
//             img:hover{
//                 transform: scale(1.2);
//             }
//         }
//     }
</style>
