<template>
    <my-video v-if="isPlay" @touchmove.prevent :videotype="type2" :videoSrc="'/assets/video/6dff55c4018832a1528ecbc410ec6094.mp4'" @click="playVideo"></my-video>
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
                        <!-- <li @mouseover="menuHover(1)" @click="changeMenu(1, '/mining')" :class="{'active': active == 1}">
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
                        </li> -->
                        <li @mouseover="menuHover(1)" @click="showComing()" :class="{'active': active == 1}">
                            <span>Mining</span>
                        </li>
                        <li @mouseover="menuHover(2)" @click="changeMenu(2)" :class="{'active': active == 2}">
                            <span>Whitepaper</span>
                        </li>
                        <li @mouseover="menuHover(3)" @click="showComing()" :class="{'active': active == 3}">
                            <span>Mystery Box</span>
                        </li>
                        <!-- <li @mouseover="menuHover(3)" @click="changeMenu(3, '/mystery')" :class="{'active': active == 3}">
                            <span>Mystery Box</span>
                        </li> -->
                        <li @mouseover="menuHover(4)" @click="showComing()" :class="{'active': active == 4}">
                            <span>Cyberspace</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <section>
            <video-bg 
id="videobg" :sources="[`https://d3bhixjyozyk2o.cloudfront.net/5c64797a7cb8b72ed6255c8406b7294d.mp4`]" img="https://d2cimmz3cflrbm.cloudfront.net/nwhome/videobg.png">
            </video-bg>
            <div class="titles"> 
                <div class="title-wrap">
                    <!-- <div class="title1" id="magic"></div> -->
                    <div class="title1">FIND REAL YOU <br/> IN THIS NEW WORLD</div>
                    <div class="title2">
                        The Metaverse Combines Exploration, Combat, X-To-Earn and UGC
                    </div>
                    <div class="btnbox">
                        <div class="btn-register">REGISTER</div>
                        <div class="btn-video" @click="playVideo(5)">
                            <div>DEMO VIDEO</div>
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/section-btnPlay.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="botm">#0 <span class="txt1">CYBERSPACE </span><span class="txt2">WILL BE OPENED SOON</span></div>
        </section>
        <footer>
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/section_buttom.svg" alt="" class="buttom">
        </footer>
    </div>
    <div class="nav-logos" ref="myNav">
        <a href="#" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/joinus.svg" alt="" class="joinus">
            <div>JOIN US</div>
        </a>
        <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/discordlogo.svg" alt="" class="nav-img1">
        </a>
        <a href="https://twitter.com/cyberpopnw" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/twitter.svg" alt="" class="nav-img2">
        </a>
        <a href="https://t.me/cyberpopnw" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/dianbao.svg" alt="" class="nav-img3">
        </a>
    </div>
    <div class="welcome">
        <div class="warp">
            <div class="title" id="ele1">WELCOMETO  TO<p class="white">CYBERPOP NEW WORLD</p></div>
            <div class="desc">
                A Metaverse adventure UGC game built on the ethereum blockchain. <br/>
                Travel through diverse cyberspace in search of mysterious digital artifacts <br/>
                and creatures even Legend of the absolute beginning.
            </div>
            <div class="content">
                <div class="left">
                   <div class="start">01</div>
                   <div class="pList">
                        <img id="lImg1" :src="imgIndex == 0 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg2" :src="imgIndex == 1 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg3" :src="imgIndex == 2 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg4" :src="imgIndex == 3 ? imgSrc : imgSrc0" alt="">
                   </div>
                   <div class="end">/04</div>
                </div>
                <div class="swiper1">
                    <div class="swiper-bg">
                        <img :class="imgIndex == 0 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/timeRemnant.png" alt="">
                        <img :class="imgIndex == 1 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/digitalPujas.png" alt="">
                        <img :class="imgIndex == 2 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/moonlightCentury.png" alt="">
                        <img :class="imgIndex == 3 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/futureCity.png" alt="">
                    </div>
                    <div class="swiper-bg2">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/swiper-bg2.png" alt="">
                    </div>
                    <div class="swiper-leftTop">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/swiper-leftTop.svg" alt="">
                        <ul>
                            <li :class="imgIndex == 0 ? 'show' : ''">Time Remnant</li>
                            <li :class="imgIndex == 1 ? 'show' : ''">Digital Pujas</li>
                            <li :class="imgIndex == 2 ? 'show' : ''">Moonlight Century</li>
                            <li :class="imgIndex == 3 ? 'show' : ''">Future City</li>
                        </ul>
                    </div>
                    <div class="swiper-img">
                        <swiper
                            class="swiper-bg3"
                            direction="vertical"
                            :slides-per-view="1"
                            :mousewheel="true" 
                            @slideChangeTransitionEnd="onSlideChangeEnd"
                            :loop="true"
                            :speed="200"
                            :autoplay="true"
                        >
                            <swiper-slide><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/timeRemnant.png" alt=""></swiper-slide>
                            <swiper-slide><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/digitalPujas.png" alt=""></swiper-slide>
                            <swiper-slide><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/moonlightCentury.png" alt=""></swiper-slide>
                            <swiper-slide><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/futureCity.png"  alt=""></swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="nobody">
        <img class="nobody-img" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-bg.png" alt="">
        <div class="nobody-wrap">
            <div class="nobody-left">
                <img id="role" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-leftBg.png" alt="">
                <div class="nobody-left-tip">
                    <div>Scarlet Witch <br/> in #0 cyberspace</div>
                </div>
            </div>
            <div class="nobody-right">
                <div class="title" id="ele2">YOU ARE NOBODY<br/> AND SOMEBODY</div>
                <div class="subtitle">IN DIFFERENT CYBERSPACE</div>
                <div class="desc">
                    By teleporting into different cyberspace， Players will  <br/>
                    become different NFT characters belonging to this space. <br/>
                    Exploring the secrets of space to create your own <br/>
                    personality and gain more assets.You can also compete <br/>
                    with players in the same space or team up with them.
                </div>
                <div class="video">
                    <img class="videoBg" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/yellowBg-r.svg" alt="">
                    <img class="banner" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-playBg.png" alt="">
                    <div class="video-wrap">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-controls.svg" alt="" @click="playVideo(4)">
                    </div>
                    <div class="content">
                        <div class="video-title">#0 Cyberspace <span class="yellow">Exposure</span></div>
                        <div class="video-subtitle">Ancient space in the remnants of time</div>
                    </div>
                </div>
                <div class="getNft-wrap">
                    <div class="getNft"></div>
                    <div class="txt">GET NFT</div>
                </div>
            </div>
        </div>
    </div>
    <div class="make">
        <div class="make-wrap">
            <div class="title" id="ele3">MAKE CYBERSPACE <br/> BELONGS TO YOU</div>
            <div class="subtitle">THE NFT MADE BY YOURSELF</div>
            <div class="desc">
                Through advanced collapse algorithms, cyberpop supports <br/>
                the generation of UGC nft. Based on the security of chain <br/>
                protocols, it effectively ensures the multiple player battles <br/>
                and development of future cybercities. We already support <br/>
                functional city components for assets production, and are <br/>
                continuously being added.
            </div>
            <div class="make-img">
                <ul>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-img1.png" alt="">
                        <div>Product</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-img2.png" alt="">
                        <div>Live</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-img3.png" alt="">
                        <div>Basic</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-img4.png" alt="">
                        <div>Technology</div>
                    </li>
                </ul>
                <div class="mask"></div>
            </div>
            <!-- <div class="opensea" @mouseenter="openseaEnter()" @mouseleave="openseaLeave()"> -->
            <div class="opensea">
                <div class="opensea-title">View the claimed lands on</div>
                <div class="openUrl" target="view_window">
                    <!-- <a href=""> -->
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/openSea.png" alt="">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-rightArrow.svg" alt="">
                    <!-- </a> -->
                </div>
                <div id="openMask" class="mask"></div>
            </div>  
        </div>
    </div>
    <div class="news">
        <div class="news-wrap">
            <div class="title" id="ele4">NEWS</div>
            <div class="content" @click="newsActiveSrc()">
                <div class="hover-img">
                    <img :class="{'newsShow': showNewsImg == 0}" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-bg.png" alt="">
                    <img :class="{'newsShow': showNewsImg == 1}" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-bg2.png" alt="">
                </div>
                <div class="news-left">
                    <div class="news-top" @click="toYoutube($event)">
                        <div class="news-logo">
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-logo.png" alt="">
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/youtube-play.svg" alt="">
                        </div>
                        <div>
                            <div class="channel">CYBERPOP Channel</div>
                            <div class="arrival">NEW ARRIVAL</div>
                        </div>
                    </div>
                    <ul>
                        <li @mouseover="newsHover(0,newsStatictxt1)" @click="newsActive(0,newsStatictxt1)">
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-img1.png" id="myNews1" class="myNews" alt="">
                            <div class="read">
                                <div class="txt">Picante Channel News</div>
                                <div class="date">January 2,2022</div>
                                <div class="toRead">To Read ></div>
                            </div>
                        </li>
                        <li @mouseover="newsHover(1,newsStatictxt2)" @click="newsActive(1,newsStatictxt2)" >
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-img2.png" id="myNews2" class="myNews" alt="">
                            <div class="read">
                                <div class="txt">cyberbump channel news</div>
                                <div class="date">January 2,2022</div>
                                <div class="toRead">To Read ></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="news-right">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-rightBg.png" alt="">
                    <div class="desc">
                        <div>{{newsTitle1}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="roadmap">
        <div class="roadmap-bg">
            <img class="roadmap-bg1" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/roadmap-bg1.png" alt="">
            <div class="roadmap-center">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/roadmap-icon.svg" alt="">
                <div></div>
            </div>
            <img class="roadmap-bg2" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/roadmap-bg2.svg" alt="">
        </div>
        <div class="roadmap-wrap">
            <div class="title" id="ele5">ROADMAP</div>
            <div class="time1 timeWidth-r" id="time1">
                <div class="date"><span class="span-l"></span>2021.03</div>
                <div class="event">
                    Project Concept <br/>
                    Basic gameplay design <br/>
                    Game scene <br/>
                    Development <br/>
                    Game Art Modeling
                </div>
            </div>
            <div class="time2 timeWidth-l" id="time2">
                <div class="date">2021.10<span class="span-r"></span></div>
                <div class="event">
                    UGC project approval <br/>
                    web launched <br/>
                    Game demo online <br/>
                    Character Modeling
                </div>
            </div>
            <div class="time3 timeWidth-r" id="time3">
                <div class="date"><span class="span-l"></span>2022.03</div>
                <div class="event">
                    Game trial launch <br/>
                    Game NFT Mall <br/>
                    Release UGC toolchain <br/>
                    Token CYT released
                </div>
            </div>
            <div class="time4 timeWidth-l" id="time4">
                <div class="date">2022.06<span class="span-r"></span></div>
                <div class="event">
                    The socialFi mechanism <br/>
                    Game unions system
                </div>
            </div>
            <div class="time5 timeWidth-r" id="time5">
                <div class="date"><span class="span-l"></span>2022.10</div>
                <div class="event">
                    Create virtual idols <br/>
                    Support for multiple currency system
                </div>
            </div>
        </div>
    </div>
    <div class="partners">
        <div class="title" id="ele6">ECOLOGICAL PARTNERS</div>
        <div class="logo">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/partners1.png" alt="">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/partners2.png" alt="">
        </div>
    </div>
    <div class="register">
        <div class="title">READY FOR YOUR JOURNEY?</div>
        <div class="subtitle">GET THE LASTEST IN INBOX</div>
        <div class="email">
            <div class="email-wrap">
                <input id="email" class="email-input" type="text" v-model="email" placeholder="Email">
            </div>
            <div class="register" @click="submit()">Register</div>
        </div>
    </div>
    <div class="footer">
        <img class="logo" v-show="!logoFlag" :src="logoHSrcP" @mouseenter="changeGif()" alt="">
        <img class="logo" v-show="logoFlag" :src="logoHSrcG" @mouseleave="stopGif()" alt="">
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
    </div>
    <coming-a v-show="showComingFlag"></coming-a>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
// import 'https://d2cimmz3cflrbm.cloudfront.net/js/titleThree'

import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectFade, Mousewheel, Autoplay} from "swiper";
import { title } from 'process';
import { AnyMxRecord } from 'dns';
SwiperCore.use([EffectFade, Mousewheel, Autoplay]);


// coming soon
let showComingFlag:any = ref(false);
const ctimer:any = ref(null)
const showComing = () => {
    clearTimeout(ctimer.value);
    showComingFlag.value = true;
    ctimer.value = setTimeout(() => {
        showComingFlag.value = false;
    },3000)
}




// language
let lang:any = ref(false);
const changeLanguage = () => {
    lang.value = !lang.value;
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



let select:any = ref(0);
const selectLang = (index:any) => {
    select.value = index;
}

// swiper
let imgSrc0: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhome/welcome-leftGray.svg');
let imgSrc: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhome/welcome-leftYellow.svg');
let imgIndex: any = ref(0);


const onSwiper = (swiper: any) => {
    console.log('swiper',swiper.activeInde);
};


const onSlideChangeEnd = (swiper: any) => {
    imgSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/welcome-leftYellow.svg';
    imgIndex.value = swiper.realIndex;
};





// banner视频播放
// let videoControls: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhome/section-btnPlay.svg') 
// let playFlag: any = ref(false);
// const stopPlay = () => {
//     let videobg = document.querySelector("#videobg") as HTMLElement;
//     let relVideo = <HTMLVideoElement>videobg.querySelector("video");
//     if( playFlag.value == false ){
//         relVideo.pause();
//         playFlag.value = !playFlag.value;
//         videoControls.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/zanting.svg';
//     }else if( playFlag.value == true ){
//         relVideo.play();
//         playFlag.value = !playFlag.value;
//         videoControls.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/section-btnPlay.svg';
//     }
// }
 

// 右侧图标滚动
const myNav:any = ref(null);
const windowScroll: any = () => {
    const navHeight: number = myNav.value.offsetHeight;
    const cHeight: number = document.documentElement.clientHeight;
    const scrollHeight: number = document.documentElement.scrollTop;
    startMove(Math.ceil((cHeight - navHeight - 130) + scrollHeight));
}

let timer: any = null;
const startMove = (target : any) => {
    clearInterval(timer);
    timer = setInterval(() => {
        let speed = (target - myNav.value.offsetTop) / 30;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if( target === myNav.value.offsetTop ){
            clearInterval(timer);
        }else{
            myNav.value.style.top = myNav.value.offsetTop + speed + 'px';
        }
    },5 )
}




// news
let showNewsImg: any = ref(0);
let newsStatictxt1:any = ref('Cyber New World Has Launched Three Maps Of The Open World');
let newsStatictxt2:any = ref('Cyber pop-New blockchain game-New world');


let newsTitle1:any = ref('Cyber New World Has Launched Three Maps Of The Open World');
const newsHover = (index: any, txt1:any) => {
    showNewsImg.value = index;
    newsTitle1.value = txt1;

    let myNews = document.getElementsByClassName('myNews');
    let myNewsLen = myNews.length;
    for(let i = 0; i< myNewsLen;i++){
        myNews[i].addEventListener('mouseout',() => {
            showNewsImg.value = newsFlag.value;
            newsTitle1.value = clickTitle1.value;
        })
    } 
}
let newsFlag:any = ref(0);
let clickTitle1:any = ref('Cyber New World Has Launched Three Maps Of The Open World');
const newsActive = (index: any, txt1:any) => {
    showNewsImg.value = index;
    newsFlag.value = index;
    clickTitle1.value = txt1;


    let myNews = document.getElementsByClassName('myNews');
    let myNewsLen = myNews.length;
    for(let i = 0; i< myNewsLen;i++){
        myNews[i].addEventListener('mouseout',() => {
            showNewsImg.value = index;
            newsTitle1.value = txt1;
        })
    }
}

const newsActiveSrc = () => {
    if(showNewsImg.value === 0){
        window.open('https://finance.yahoo.com/news/cyber-world-launched-three-maps-172500987.html');
    }else if(showNewsImg.value === 1){
        window.open('https://cyberbump.net/cyber-pop-new-blockchain-game-new-world/');
    }
}

const toYoutube= (event:any) => {
    event.stopPropagation();
    window.open('https://www.youtube.com/channel/UCtVpocr6cpS7Ub-WxRSJ3mQ');
}

// openSea
const openseaEnter = () => {
    const openMask = document.getElementById("openMask") as HTMLElement;
    openMask.classList.add('openAnimation');
    openMask.classList.remove('stopOpenAnimation');
}

const openseaLeave = () => {
    const openMask = document.getElementById("openMask") as HTMLElement;
    openMask.classList.add('stopOpenAnimation');
    openMask.classList.remove('openAnimation');
}



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

let menuFlag:any = ref(0);
const changeMenu = (type: any, route?: any) => {
    if(type == 2) {
        window.open('./CyberpopWhitePaper.pdf')
        return
    }
    menuFlag.value = type;
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
}



// play video
const id: any = ref(0)
let type2: any = ref(1);
let isPlay: any = ref(false);
const playVideo = (type: any) => {
    type2.value = type
    isPlay.value = !isPlay.value;
}

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



const down = () => {
    window.location.href = '../cyberpop.docx';
}

const submit = () => {
    let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则
    
    if(email.value === ""){ //输入不能为空
　　　　alert("not null!");
　　　　return false;
　　 }else if(!reg.test(email.value)){ //正则验证不通过，格式不对
　　　　alert("please input email!");
　　　　return false;
　　 }else{
　　　　alert("received!");
    //    email.value = "";
　　 }


    proxy.$api.get('http://127.0.0.1:3001/addUser?email=' + email.value ).then((res: any) => {
        if( res.serverStatus === 2 && res.affectedRows === 1){
            email.value = "";
            // alert('success');
        }else{
            alert(res.message);
        }
    }).catch( (err: any) => {
        console.log(err)
    })
}


const checkScrollHeightAndLoadAnimation: any = () => {
        const windowHeight: Number = window.innerHeight;

        let ele1 = document.getElementById("ele1") as HTMLElement;
        let ele2 = document.getElementById("ele2") as HTMLElement;
        let ele3 = document.getElementById("ele3") as HTMLElement;
        let ele4 = document.getElementById("ele4") as HTMLElement;
        let ele5 = document.getElementById("ele5") as HTMLElement;
        let ele6 = document.getElementById("ele6") as HTMLElement;
        let time1 = document.getElementById("time1") as HTMLElement;
        let time2 = document.getElementById("time2") as HTMLElement;
        let time3 = document.getElementById("time3") as HTMLElement;
        let time4 = document.getElementById("time4") as HTMLElement;
        let time5 = document.getElementById("time5") as HTMLElement;
        let role = document.getElementById("role") as HTMLElement;
        const ele1Top: Number = ele1.getBoundingClientRect().top; //距离屏幕顶部的距离
        const ele2Top: Number = ele2.getBoundingClientRect().top; 
        const ele3Top: Number = ele3.getBoundingClientRect().top; 
        const ele4Top: Number = ele4.getBoundingClientRect().top; 
        const ele5Top: Number = ele5.getBoundingClientRect().top; 
        const ele6Top: Number = ele6.getBoundingClientRect().top; 
        const time1Top: Number = time1.getBoundingClientRect().top; 
        const time2Top: Number = time2.getBoundingClientRect().top; 
        const time3Top: Number = time3.getBoundingClientRect().top; 
        const time4Top: Number = time4.getBoundingClientRect().top; 
        const time5Top: Number = time5.getBoundingClientRect().top; 
        const roleTop: Number = role.getBoundingClientRect().top; 

        let arr = [
            {
                el: ele1,
                top: ele1Top
            },
            {
                el: ele2,
                top: ele2Top
            },
            {
                el: ele3,
                top: ele3Top
            },
            {
                el: ele4,
                top: ele4Top
            },
            {
                el: ele5,
                top: ele5Top
            },
            {
                el: ele6,
                top: ele6Top
            },
            {
                el: role,
                top: roleTop
            },
        ]
        for(let i = 0; i < arr.length; i++){
            if(arr[i].top < windowHeight){
                arr[i].el.classList.add('fadeInUp');
            }
        }
        if(time1Top < windowHeight) time1.classList.add('bounceInRight')
        if(time3Top < windowHeight) time3.classList.add('bounceInRight')
        if(time5Top < windowHeight) time5.classList.add('bounceInRight')
        if(time2Top < windowHeight) time2.classList.add('bounceInLeft')
        if(time4Top < windowHeight) time4.classList.add('bounceInLeft')
        if(role.className == 'fadeInUp'){
            setTimeout(() => {
                if(role.className == 'fadeInUp') role.classList.add('fadeInDown')
            },1000)
        }
}


const deckd = () => {
    window.location.href = 'https://d1td2c8hf7fv9k.cloudfront.net/(new)CyberPOPNewworlddeck(en).pdf';
}

onUnmounted(() => {
    window.removeEventListener("scroll", checkScrollHeightAndLoadAnimation, true);
    window.removeEventListener('scroll', windowScroll, true);
})

onMounted(() => {
    connect();
    window.addEventListener('scroll', checkScrollHeightAndLoadAnimation, true);
    window.addEventListener('scroll', windowScroll, true);
    store.dispatch('user/changeActive', 0);
    logoHImport();
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
    @keyframes openAnimation {
        0%{
            left: -53vw;
        }
        100%{
            left: -5vw;
        }
    }
    @keyframes stopOpenAnimation {
        0%{
            left: -5vw;
        }
        100%{
            left: -53vw;
        }
    }
    html,
    body {
        height: 100%;
        overflow-x: hidden;
    }
    .home{
        position: relative;
        width: 100%;
        height: 100vh;
        header{
            z-index: 9;
            position: fixed;
            top: 0;
            width: 100%;
            height: 5.5vw;
            opacity: .86;
            color: #fff;
            background-color: #000000;
            // background-image: linear-gradient(to right, #000 , #1C0B3D, #000);
            // background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-bg.svg');
            // background-size: auto 100%;
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
            width: 100%;
            height: 100vh;
            background-color: #000000;
            .titles{
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/section-cover.png');
                background-size: 100% 103%;
                background-position: left top;
                .title-wrap{
                    height: 100%;
                    display: flex;
                    flex-direction: column;            
                    justify-content: center;
                    align-items: center;
                    .title1{
                        width: 64.84vw;
                        height: 10.41vw;
                        margin-top: 9vw;
                        font-size: 4.32vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 5.205vw;
                        letter-spacing: .26vw;
                        text-align: center;
                        font-weight: 900;
                        filter: drop-shadow( .155vw 0 0 #D236A5 )
                                drop-shadow( -.15vw 0 0.05rem #72F0D9 );
                        cursor: pointer;
                    }
                    .title2{
                        margin-bottom: 5vw;
                        color: #FFFFFF;
                        font-size: 1.09vw;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        line-height: 1.51vw;
                        // animation: fadeInUp .8s linear;
                    }
                    .btnbox{
                        display: flex;
                        // margin-bottom: 3.85vw;
                        margin-bottom: 6vw;
                        .btn-register{
                            width: 16.56vw;
                            height: 4.21vw;
                            margin: 2.1vw -4vw 0 2.6vw;
                            padding-right: 1.1vw;
                            line-height: 3.2vw;
                            color: #fff;
                            text-align: center;
                            font-size: 1.04vw;
                            font-weight: bold;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/section-btn1.svg');
                            background-position: center;
                            background-size: 100% auto;
                            cursor: pointer;
                        }
                        .btn-video{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 18.75vw;
                            height: 7.24vw;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/section-btn2.svg');
                            background-position: center;
                            background-size: 100% auto;
                            cursor: pointer;
                            div{
                                margin-top: .3vw;
                                margin-left: .7vw;
                                color: #000;
                                font-size: 1.04vw;
                                font-weight: bold;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                // z-index: 1;
                            }
                            img{
                                margin-top: .2vw;
                                margin-left: .5vw;
                                width: 1vw;
                                height: 1vw;
                            }
                        }
                        .btn-register:hover{
                            filter: drop-shadow(0 0 0.75rem #c42edb);
                        }
                        .btn-video:hover{
                            filter: drop-shadow(0 0 0.75rem #c42edb);
                        }
                    }
                }
            }
            .botm{
                position: absolute;
                bottom: 2.8vw;
                width: 100%;
                text-align: center;
                font-size: 1.4vw;
                color: #04FFA2;
                line-height: 1.61vw;
                font-family: Menlo-Regular, Menlo;
                font-weight: 400;
                .txt1{
                    font-size: 1vw;
                    font-weight: 400;
                    color: #04FFA2;
                }
                .txt2{
                    font-size: .85vw;
                    font-weight: bold;
                    color: #fff;
                }
            }
        }
        .buttom{
            position: absolute;
            bottom: .8vw;
            width: 2vw;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
    }
    .nav-logos{
        z-index: 2;
        position: absolute;
        top: 25vw;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 4.4vw;
        height: 29vw;
        padding-bottom: 5.2vw;
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/nav-logoBg.svg');
        background-position: right bottom;
        background-repeat: no-repeat;
        background-size: auto 100%;
        a{
            text-decoration: none;
            text-align: center;
            img{
                margin-top: 1.3vw;
            }
            div{
                font-size: .8vw;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 1.45vw;
            }
            .joinus{
                width: 2.3vw;
                height: 2vw;
            }
            .nav-img1{
                width: 2.27vw;
                height: 2.24vw;
            }
            .nav-img2{
                width: 2.45vw;
                height: 1.99vw;
            }
            .nav-img3{
                width: 2.26vw;
                height: 1.9vw;
            }
            img:not(.joinus):hover{
                filter: drop-shadow(0 0 .5vw #00FF9C);
            }
        }
        a + a::before{
            display: inline-block;
            content: '';
            width: 3.6vw;
            height: 1px;
            border-top: 1px solid #8147FF;
            transform: rotateX(180deg);
        }
        
    }
    .welcome{
        position: relative;
        width: 100%;
        height: 100vh;
        margin-top: -.1vw;
        background-color: #0C0A0A;
        z-index: -1;
        .warp{
            z-index: -1;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
            .title{
                height: 6.25vw;
                line-height: 3vw;
                margin-top: 4vw;
                margin-left: 19.6vw;
                margin-right: auto;
                color: #04FFA2;
                font-size: 2.6vw;
                font-weight: bold;
                font-family: AlibabaPuHuiTi_2_115_Black;
                cursor: pointer;
                .white{
                    color: #fff;
                }
            }
            .desc{
                width: 41vw;
                height: 3.75vw;
                margin-top: .2vw;
                margin-left: 19.58vw;
                color: #fff;
                font-size: 1.04vw;
                line-height: 1.45vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                white-space: nowrap;
            }
            .content{
                display: flex;
                width: 100%;
                height: 37.6vw;
                z-index: -1;
                .left{
                    z-index: 1;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 6vw 4vw 0vw 15.2vw;
                    color: #FFFFFF;
                    font-size: 1.3vw;
                    .start{
                        position: absolute;
                        top: .9vw;
                        left: -1.1vw;
                    }
                    .end{
                        position: absolute;
                        // top: 16.4vw;
                        top: 21.6vw;
                        left: -1.8vw;
                    }
                    .pList{
                        margin-top: 2.4vw;
                        display: flex;
                        flex-direction: column;
                        img{
                            height: 4.47vw;
                            margin-bottom: .35vw;
                        }
                        // p{
                        //     width: .15vw;
                        //     // height: 3.6vw;
                        //     height: 4.42vw;
                        //     margin-bottom: .4vw;
                        //     background-color: #484747;
                        //     transform: skewY(-25deg);
                        //     cursor: pointer;
                        // }

                        .active{
                            width: .3vw;
                            background-color: #EDFF00;
                        }
                    }
                    
                    
                }
                .swiper1{
                    z-index: 1;
                    position: relative;
                    width: 78vw;
                    height: 37.6vw;
                    // height: 37.6vw;
                    margin-top: -2.6vw;
                    .swiper-bg{
                        position: absolute;
                        top: 2.8vw;
                        left: 6vw;
                        width: 66vw;
                        height: 80%;
                        filter: blur(2vw);
                        img{
                            width: 100%;
                            height: 100%;
                            display: none;
                        }
                        img.show{
                            display: block;
                        }

                    }
                    .swiper-bg2{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 69.58vw;
                        height: 32vw;
                        img{
                            width: 100%;
                            z-index: -1;
                        }
                    }
                    .swiper-leftTop{
                        z-index: 2;
                        position: absolute;
                        top: 4.8vw;
                        left: .25vw;
                        width: 17.39vw;
                        height: 3.75vw;
                        img{
                            width: 100%;
                        }
                        ul{
                            position: absolute;
                            top: .6vw;
                            width: 100%;
                            text-align: center;
                            li{
                                font-size: 1.67vw;
                                color: #000000;
                                line-height: 3.02vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                font-weight: lighter;
                                display: none;
                            }
                            .show{
                                display: block;
                            }
                        }
                    }
                    .swiper-img{
                        position: relative;//
                        width: 56.4vw;
                        height: 24.33vw;
                        margin-top: 6.9vw;
                        margin-left: 2.5vw;
                        .swiper-bg3{
                            overflow: hidden;//
                            width: 56.4vw;
                            // height: 24.42vw;
                            height: 24.33vw;
                            img{
                                width: 100.1%;
                                // height: 24.42vw;
                                height: 24.33vw;
                                margin-left: -.1vw;
                            }
                        }
                        :deep(.swiper-vertical > .swiper-wrapper){
                            transition-timing-function: ease-in !important;
                        }
                    }
                }
            }
        }
    }
    .nobody{
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: #000;
        display: flex;
        .nobody-img{
            z-index: 1;
            position: absolute;
            top: 0;
            right: 0;
            width: 80%;
            height: 100%;
        }
        .nobody-wrap{
            width: 100%;
            height: 100%;
            padding-top: 1vw;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .nobody-left{
                width: 45.57vw;
                height: 44vw;
                margin-left: 8vw;
                img{
                    height: 95%;
                    margin-top: 2vw;
                    margin-left: 1vw;
                }
                .nobody-left-tip{
                    z-index: 2;
                    // width: 100%;
                    // height: 100%;
                    width: 10vw;
                    height: 3vw;
                    position: absolute;
                    bottom: 7.8vw;
                    left: 28vw;
                    div{
                        // position: absolute;
                        // right: 8.9vw;
                        // bottom: 6.2vw;
                        width: 10vw;
                        height: 3vw;
                        padding-right: 1vw;
                        font-size: 1.04vw;
                        text-align: right;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        font-weight: bold;
                        color: #FFFFFF;
                        line-height: 1.25vw;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-leftYellow.svg');
                        background-repeat: no-repeat;
                        background-position: right top;
                        background-size: auto 100%;
                    }
                }
            }
            .nobody-right{
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                z-index: 2;
                width: 40vw;
                margin-right: 18vw;
                text-align: right;
                .title{
                    line-height: 3.7vw;
                    font-size: 2.6vw;
                    font-weight: bold;
                    color: #FFFFFF;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    cursor: pointer;
                }
                .subtitle{
                    font-size: 1.45vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #04FFA2;
                    line-height: 2.8vw;
                }
                .desc{
                    font-size: 1.04vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 1.56vw;
                    white-space: nowrap;
                }
                .video{
                    position: relative;
                    width: 25.31vw;
                    height: 13.54vw;
                    margin-top: 2vw;
                    .videoBg{
                        position: absolute;
                        right: -.45vw;
                        bottom: -.6vw;
                        width: 13.96vw;
                        height: 2.81vw;
                    }
                    .banner{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .video-wrap{
                        position: relative;
                        width: 100%;
                        height: 9.38vw;
                        line-height: 11vw;
                        text-align: center;
                        background-color: rgba(0,0,0,.65);
                        img{
                            z-index: 1;
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 3vw;
                            margin: 0 auto;
                            width: 2.91vw;
                            height: 2.91vw;
                            cursor: pointer;
                        }
                    }
                    .content{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 4.16vw;
                        background-color: #000000;
                        .video-title{
                            margin-top: .3vw;
                            margin-right: 1.1vw;
                            font-size: 1.3vw;
                            line-height: 1.56vw;
                            font-family: AlibabaPuHuiTi_2_95_ExtraBold;
                            color: #EDFF00;
                            .yellow{
                                color: #fff;
                            }
                        }
                        .video-title:before{
                            display: inline-block;
                            content: '';
                            width: 1px;
                            height: .3vw;
                            margin-right: 1vw;
                            margin-bottom: .1vw;
                            border: .2vw solid #EDFF00;
                            background-color: #EDFF00;
                            transform: skew(-10deg);
                            z-index: 1;
                        }
                        .video-subtitle{
                            margin-right: 1.6vw;
                            color: #FFFFFF;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            line-height: 1.56vw;
                        }
                    }
                }
                .getNft-wrap{
                    position: relative;
                    width: 18.9vw;
                    height: 4.4vw;
                    margin-top: 2.3vw;
                    margin-right: -.3vw;
                    .getNft{
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/white-border.svg');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;  
                        background-position: left top;
                        // clip-path: polygon(0 0, 100% 0, 100% 67%, 95% 100%, 0 100%);
                        cursor: pointer;
                    }
                    .txt{
                        line-height: 4.4vw;
                        font-size: 1.4vw;
                        text-align: center;
                        color: #FFFFFF;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        cursor: pointer;
                    }
                }
                .getNft:hover{
                    filter: drop-shadow(0 0 .4vw #ffffff);
                }
            }
        }
    }
    .make{
        position: relative;
        width: 100%;
        min-height: 120vh;
        height: 120vh;
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-bg.png');
        background-position: right top;
        background-size: 100% 100%;
        background-color: #000000;
        .make-wrap{
            display: flex;
            flex-direction: column;            
            justify-content: center;
            height: 100%;
            margin-left: 19.53vw;
            .title{
                height: 7.38vw;
                margin-right: auto;
                font-size: 2.6vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 3.69vw;
                font-weight: bold;
                cursor: pointer;
            }
            .subtitle{
                font-size: 1.66vw;
                font-family: Arial-Black, Arial;
                font-weight: 900;
                color: #04FFA2;
                line-height: 3.12vw;
            }
            .desc{
                margin-bottom: 2vw;
                font-size: 1.04vw;
                font-family: OPPOSans-B, OPPOSans;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 1.61vw;
            }
            .make-img{
                position: relative;
                width: 39.42vw;
                height: 14.58vw;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-imgBg.png');
                background-size: 100% 100%;
                ul{
                    display: flex;
                    position: relative;
                    li{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    li:nth-child(1){
                        width: 7.91vw;
                        height: 10.3vw;
                        margin: 2.7vw 2.7vw 0 1.9vw;
                    }
                    li:nth-child(2){
                        width: 5.05vw;
                        height: 12.1vw;
                        margin-top: 1vw;
                    }
                    li:nth-child(3){
                        width: 12.5vw;
                        height: 12.76vw;
                        margin-top: 1.2vw;
                    }
                    li:nth-child(4){
                        width: 5.31vw;
                        height: 16vw;
                        margin-top: -2vw;
                        margin-left: 1.4vw;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    div{
                        position: absolute;
                        bottom: .7vw;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_95_ExtraBold;
                        color: #EDFF00;
                        line-height: 1.56vw;
                        z-index: 1;
                        cursor: pointer;
                    }
                }
                .mask{
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: .7vw;
                    margin: 0 auto;
                    width: 98.8%;
                    height: 2.7vw;
                    background: #000;
                    opacity: 0.64;
                }
            }
            .opensea{
                // z-index: 1;
                position: relative;
                width: 39.1vw;
                height: 7.76vw;
                margin-top: .41vw;
                // background: #EDFF00;
                background-color: #565656;
                clip-path: polygon(0 0, 100% 0, 100% 65%, 93% 100%, 0 100%);
                .opensea-title{
                    height: 1.97vw;
                    margin: .625vw 0;
                    font-size: 1.25vw;
                    font-family: OPPOSans-B, OPPOSans;
                    font-weight: normal;
                    color: #000000;
                    line-height: 1.97vw;
                    text-align: center;
                }
                .openUrl{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 3.38vw;
                    img:nth-child(1){
                        width: 14.58vw;
                        height: 3.38vw;
                    }
                    img:nth-child(2){
                        height: 1.92vw;
                        margin-left: 1.51vw;
                        margin-bottom: 0.5vw;
                    }
                    // img:nth-child(2):hover{
                    //     filter: drop-shadow(0 0 .1vw #373d41);
                    // }
                }
                .mask{
                    z-index: -1;
                    position: absolute;
                    top: 0;
                    left: -53vw;
                    // left: -5vw;
                    width: 48vw;
                    height: 7.76vw;
                    background-color: #29fdfe;
                    opacity: .6;
                    transform: skewX(-46deg);
                }
                .openAnimation{
                    animation: openAnimation 0.2s linear;
                    animation-fill-mode: forwards;
                }
                .stopOpenAnimation{
                    animation: stopOpenAnimation 0.2s linear;
                    animation-fill-mode: forwards;
                }
            }
        }
    }
    .news{
        width: 100%;
        height: 100vh;
        background-color: #000000;
        .news-wrap{
            display: flex;
            flex-direction: column;            
            justify-content: center;
            align-items: center;
            height: 100%;
            .title{
                font-size: 2.6vw;
                font-weight: bold;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 3.69vw;
                margin-bottom: 1.4vw;
                cursor: pointer;
            }
            .content{
                position: relative;
                width: 58.125vw;
                height: 34vw;
                .hover-img{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                        display: none;
                    }
                    img.newsShow{
                        display: block;
                    }
                }
                .news-left{
                    position: absolute;
                    height: 100%;
                    margin-left: 2.08vw;
                    .news-top{
                        display: flex;
                        .news-logo{
                            display: flex;
                            flex-direction: column;
                            cursor: pointer;
                            img:nth-child(1){
                                width: 6.51vw;
                                height: 5.05vw;
                                margin-top: 2.76vw;
                            }
                            img:nth-child(2){
                                width: 2.18vw;
                                height: 2.18vw;
                                margin-top: -1vw;
                                margin-left: 2vw;
                            }
                        }
                        .channel{
                            margin-top: 3.2vw;
                            margin-bottom: .4vw;
                            color: #FFFFFF;
                            font-size: 1.35vw;
                            font-weight: bold;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            line-height: 2.34vw;
                        }
                        .arrival{
                            width: 7.18vw;
                            height: 1.09vw;
                            line-height: 1.09vw;
                            text-align: center;
                            color: #000000;
                            font-size: .78vw;
                            font-weight: bold;
                            background-color: #04FFA2;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        }
                    }
                    ul{
                        li{
                            display: flex;
                            width: 10vw;
                            height: 10vw;
                            margin-top: 1.5vw;
                            background-color: #000000;
                            border: .14vw solid #C434B2;
                            img{
                                width: 10vw;
                                height: 10vw;
                            }
                            .read{
                                margin-left: .9vw;
                                .txt{
                                    width: 10.93vw;
                                    color: #FFFFFF;
                                    font-size: 1.35vw;
                                    line-height: 1.77vw;
                                    font-weight: bold;
                                    font-family: AlibabaPuHuiTi_2_115_Black;
                                }
                                .date{
                                    margin-bottom: 1.45vw;
                                    color: #FFFFFF;
                                    line-height: 1.45vw;
                                    font-size: 1.04vw;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                }
                                .toRead{
                                    color: #FF21FF;
                                    line-height: 1.45vw;
                                    font-size: 1.04vw;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    text-decoration: none;
                                    cursor: pointer;
                                }
                                .toRead:hover{
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
                .news-right{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 38vw;
                    height: 7.91vw;
                    text-align: right;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .desc{
                        position: absolute;
                        top: 1.35vw;
                        right: 1.77vw;
                        font-size: 1.48vw;
                        font-weight: bold;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 2.34vw;
                        div{
                            width: 34.68vw;
                        }
                    }
                }
            }
        }

    }
    .roadmap{
        position: relative;
        width: 100%;
        background-color: #000000;
        overflow: hidden;
        .roadmap-bg{
            position: absolute;
            width: 100%;
            height: 100%;
            .roadmap-bg1{
                position: absolute;
                top: 14.4vw;
                left: 19.21vw;
                width: 26.92vw;
                height: 26.71vw;
            }
            .roadmap-bg2{
                position: absolute;
                top: 36.4vw;
                right: 28.8vw;
                width: 13.9vw;
                height: 12.29vw;
            }
            .roadmap-center{
                position: absolute;
                margin-top: 14vw;
                width: 100%;
                text-align: center;
                img{
                    width: 2.13vw;
                    height: 2.13vw;
                }
                div{
                    position: absolute;
                    top: 2.2vw;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    width: 1px;
                    height: 62vw;
                    background-color: #C689FF;
                    border: 1px solid #C689FF;
                }
            }
        }
        .roadmap-wrap{
            position: relative;
            overflow: hidden;
            margin-top: 3.9vw;
            .title{
                width: 16vw;
                height: 3.69vw;
                margin: 0 auto;
                margin-top: 1vw;
                margin-bottom: 11.66vw;
                color: #FFFFFF;
                font-size: 2.6vw;
                line-height: 3.69vw;
                font-weight: bold;
                font-family: AlibabaPuHuiTi_2_115_Black;
                text-align: center;
                cursor: pointer;
            }
            .timeWidth-l{
                width: 50%;
                text-align: right;
                padding-right: 3vw;
            }
            .timeWidth-r{
                width: 50%;
                margin-left: 50%;
                padding-left: 3vw;
                text-align: left;
            }
            .span-l{
                position: absolute;
                top: 1.3vw;
                left: -2.9vw;
                display: inline-block;
                width: 1.25vw;
                height: .1vw;
                background-color: #C689FF;
                border: 1px solid #C689FF;
            }
             .span-r{
                position: absolute;
                top: 1.3vw;
                right: -2.9vw;
                display: inline-block;
                width: 1.25vw;
                height: .1vw;
                background-color: #C689FF;
                border: 1px solid #C689FF;
            }
            .time1,.time2,.time3,.time4,.time5{
                .date{
                    position: relative;
                    font-size: 2.2vw;
                    font-family: AiDeep-Bold, AiDeep;
                    font-weight: bold;
                    color: #04FFA2;
                    line-height: 2.65vw;
                }
                .event{
                    margin-top: 1.66vw;
                    font-size: 1.04vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 1.56vw;
                }
                
            }
            .time2{
                margin-top: 4.94vw;
            }
            .time3{
                margin-top: -1.6vw;
            }
            .time4{
                margin-top: 2.23vw;
            }
            .time5{
                margin-top: 1.92vw;
                margin-bottom: 8.69vw;
            }
        }
    }
    .partners{
        width: 100%;
        background-color: #000000;
        overflow: hidden;
        .title{
            width: 35vw;
            height: 3.69vw;
            margin: 0 auto;
            text-align: center;
            font-size: 2.6vw;
            font-weight: bold;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #FFFFFF;
            line-height: 3.69vw;
            cursor: pointer;
        }
        .logo{
            display: flex;
            align-items: center;
            margin-bottom: 4.27vw;
            overflow: hidden;
            img:nth-child(1){
                width: 12.29vw;
                height: 9.21vw;
                margin: -.1vw 2vw -.1vw 31.4vw;
            }
            img:nth-child(2){
                width: 19.47vw;
                height: 6.2vw;
                margin-right: 35.15vw;
            }

        }
    }
    .register{
        width: 100%;
        height: 27.44vw;
        background-color: #04FF55;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
            margin-top: 4.73vw;
            font-size: 2.86vw;
            font-weight: bold;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #000000;
            line-height: 3.69vw;
        }
        .subtitle{
            font-size: 2.08vw;
            font-weight: bold;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #000000;
            line-height: 3.69vw;
        }
        .email{
            display: flex;
            width: 33.8vw;
            height: 3.69vw;
            margin-top: 1.61vw;
            .email-wrap{
                width: 69%;
                height: 3.69vw;
                input{
                    width: 100%;
                    height: 100%;
                    padding-right: 1.25vw;
                    font-size: 1.04vw;
                    color: #565656; 
                    text-indent: 1.25vw;
                    line-height: 1.56vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    background-color: #FFFFFF;
                    border: 1px solid #979797;
                    outline: none;
                    text-align: left;
                }
                input:focus::-webkit-input-placeholder {
                    font-size: .8vw;
                    text-align: right;
                }
            }
            .register{
                width: 31%;
                height: 3.69vw;
                line-height: 3.69vw;
                background-color: #0C0A0A;
                font-size: .98vw;
                font-weight: bold;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #04FF84;
                cursor: pointer;
            }
        }
        .email:hover{
            filter: drop-shadow(0 0 0.7vw #000000);
        }
        .email:focus-within {
            filter: drop-shadow(0 0 0.7vw #000000);
        }
    }
    .footer{
        // background-color: #121122;
        background-color: #000000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 5.54vw;
        // padding-left: 2.23vw;
        padding-right: 6vw;
        font-size: 1.09vw;
        font-family: Poppins-Regular, Poppins;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 1.82vw;
        a{
            color: #ffffff;
            text-decoration: none;
        }
        .logo{
            // width: 12vw;
            height: 5.54vw;
        }
        .policy{
            margin-right: 3vw;
            white-space: nowrap;
        }
        .policy > a:hover{
            color: #04FF55;
        }
        .terms{
            white-space: nowrap;
        }
        .terms > a:hover{
            color: #04FF55;
        }
        .desc{
            margin-left: 4vw;
        }
        .icon{
            margin-left: 8vw;
            white-space: nowrap;
            img{
                width: 2.13vw;
                height: 2.13vw;
                margin-left: 1.14vw;
                margin-top: .5vw;
            }
            img:hover{
                transform: scale(1.2);
            }
        }
    }

</style>
