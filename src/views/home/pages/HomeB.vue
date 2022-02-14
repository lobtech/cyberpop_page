<template>
    <my-video v-if="isPlay" @touchmove.prevent :videotype="type2" :videoSrc="'/assets/video/6dff55c4018832a1528ecbc410ec6094.mp4'" @click="playVideo"></my-video>
    <div class="home">
        <header>
            <div class="content" id="header">
                <img class="logo" :src="logoHSrc" @mouseover="changeHGif()" @mouseout="stopHGif()" alt="">
                <!-- <img class="logo" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-logo.svg" alt="logo"> -->
                <img class="menu" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/header-menu.svg" @click="showMenu()" alt="">
            </div>
            <div class="menuMask" :class="isPage && (showMenuAni ? 'menuAnimation' : 'stopMenuAnimation')">
                <div class="close-menu">
                    <img @click="showMenu()" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/close-menu.svg" alt="">
                </div>
                <ul id="menuUl" class="menuul">
                    <li @click="changeMenu(0, '/')" :class="{'active': active == 0}">Home</li>
                    <li @click="changeMenu(1, '/mining')" :class="{'active': active == 1}">Mining</li>
                    <!-- <li @click="changeMenu(2)" :class="{'active': active == 2}">Whitepaper</li> -->
                    <li @mouseover="menuHover(2)" @click="openPaper()">Whitepaper</li>
                    <li @click="changeMenu(3, '/mystery')" :class="{'active': active == 3}">Mystery Box</li>
                    <li @click="changeMenu(4, '/cyberspace')" :class="{'active': active == 4}">Cyberspace</li>
                </ul>
                <!-- <div class="language">
                    <div @click="showUl()">Language switch</div>
                    <ul v-show="showul">
                        <li>简体中文</li>
                        <li>Engliah</li>
                        <li>Japanese</li>
                    </ul>
                </div> -->
            </div>
        </header>
        <section>
            <video-bg 
id="videobg" :sources="[`https://d3bhixjyozyk2o.cloudfront.net/5c64797a7cb8b72ed6255c8406b7294d.mp4`]" img="https://d2cimmz3cflrbm.cloudfront.net/nwhome/videobg.png">
            </video-bg>
            <div class="titles"> 
                <div class="title-wrap">
                    <div class="title1" id="title1">FIND REAL YOU <br/> IN THIS NEW WORLD</div>
                    <div class="title2">
                        THE GAMEFI TO THE FUTURE <br/> CYBERSPACE CAN NOT BE MISSED
                    </div>
                    <div class="btnbox">
                        <div class="btn-register"><div>REGISTER</div></div>
                        <div class="btn-video" @click="playVideo(5)">
                            <div>DEMO VIDEO</div>
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/section-btnPlay.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="botm">#0 <span class="txt1">CYBERSPACE </span><span class="txt2">WILL BE OPENED SOON</span></div>
        </section>
        <footer>
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/section_buttom.svg" alt="" class="buttom">
        </footer>
    </div>
    <div class="nav-logos" ref="myNav">
        <a href="" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/joinus.svg" alt="" class="joinus">
            <div>JOIN US</div>
        </a>
        <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/discordlogo.svg" alt="" class="nav-img1">
        </a>
        <a href="https://twitter.com/cyberpopnw" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/twitter.svg" alt="" class="nav-img2">
        </a>
        <a href="https://t.me/cyberpopnw" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/dianbao.svg" alt="" class="nav-img3">
        </a>
    </div>
    <div class="welcome">
        <div class="warp">
            <div class="title" id="ele1">WELCOMETO  TO<p class="white">CYBERPOP NEW WORLD</p></div>
            <div class="desc">
                A Metaverse adventure UGC game built on the <br/> 
                ethereum blockchain.Travel through diverse <br/> 
                cyberspace in search of mysterious digital artifacts <br/>
                and creatures even Legend of the absolute <br/>
                beginning.
            </div>
            <div class="content">
                <div class="left">
                   <!-- <div class="start">01</div> -->
                   <img class="start" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/01-icon.svg" alt="">
                   <div class="pList">
                        <img id="lImg1" :src="imgIndex == 0 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg2" :src="imgIndex == 1 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg3" :src="imgIndex == 2 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg4" :src="imgIndex == 3 ? imgSrc : imgSrc0" alt="">
                   </div>
                   <!-- <div class="end">/04</div> -->
                   <img class="end" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/04-icon.svg" alt="">
                </div>
                <div class="swiper1">
                    <div class="swiper-bg">
                        <img :class="imgIndex == 0 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/timeRemnant.png" alt="">
                        <img :class="imgIndex == 1 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/digitalPujas.png" alt="">
                        <img :class="imgIndex == 2 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/moonlightCentury.png" alt="">
                        <img :class="imgIndex == 3 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/futureCity.png" alt="">
                    </div>
                    <div class="swiper-bg2">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/swiper-bgBlack.png" alt="">
                    </div>
                    <div class="swiper-leftTop">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/swiper-leftTop.svg" alt="">
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
                            <swiper-slide><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/timeRemnant.png" alt=""></swiper-slide>
                            <swiper-slide><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/digitalPujas.png" alt=""></swiper-slide>
                            <swiper-slide><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/moonlightCentury.png" alt=""></swiper-slide>
                            <swiper-slide><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/futureCity.png"  alt=""></swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="nobody">
        <div class="nobody-wrap">
            <div class="nobody-left">
                <img id="role" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-leftBg.png" alt="">
                <div class="nobody-img"></div>
                <div class="nobody-left-tip">
                    <div>Scarlet Witch <br/> in cyberspace</div>
                </div>
            </div>
            <div class="nobody-right">
                <div class="title" id="ele2">YOU ARE NOBODY AND <br/> SOMEBODY</div>
                <div class="subtitle">IN DIFFERENT CYBERSPACE</div>
                <div class="desc">
                    By teleporting into different cyberspace， Players <br/>
                    will become different NFT characters belonging to <br/>
                    this space. Exploring the secrets of space to <br/>
                    create your own personality and gain more <br/>
                    assets.You can also compete with players in the <br/>
                    same space or team up with them.
                </div>
                <div class="video">
                    <img class="videoBg" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/yellowBg-r.svg" alt="">
                    <img class="banner" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/nobody-videoBg.png" alt="">
                    <div class="video-wrap">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/nobody-controls.svg" alt="" @click="playVideo(4)">
                    </div>>
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
            <img class="title-bg" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/title-bg.png" alt="">
            <div class="title" id="ele3">MAKE CYBERSPACE BELONGS TO YOU</div>
            <div class="subtitle">THE NFT MADE BY YOURSELF</div>
            <div class="desc">
                Through advanced collapse algorithms, cyberpop supports
                the generation of UGC nft. Based on the security of chain
                protocols, it effectively ensures the multiple player battles
                and development of future cybercities. We already support
                functional city components for assets production, and are
                continuously being added.
            </div>
            <div class="make-img">
                <img class="yellowBg-r" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/yellowBg-r.svg" alt="">
                <img class="yellowBg-l" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/yellowBg-l.svg" alt="">
                <ul>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-img1.png" alt="">
                        <div>Product</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-img2.png" alt="">
                        <div>Live</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-img3.png" alt="">
                        <div>Basic</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-img4.png" alt="">
                        <div class="tech">Technology</div>
                    </li>
                </ul>
            </div>
            <div class="opensea" @mouseenter="openseaEnter()" @mouseleave="openseaLeave()">
                <div class="opensea-title">View the claimed lands on</div>
                <div class="openUrl" target="view_window">
                    <a href="">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/openSea.png" alt="">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-rightArrow.svg" alt="">
                    </a>
                </div>
                <div id="openMask" class="mask"></div>
            </div>  
        </div>
    </div>
    <div class="news">
        <div class="news-wrap">
            <div class="title" id="ele4">NEWS</div>
            <div class="news-top" @click="toYoutube($event)">
                <div class="channel">CYBERPOP Channel</div>
                <div class="arrival">NEW ARRIVAL</div>
                <div class="news-logo">
                    <img class="news-img1" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-logo.svg" alt="">
                    <a href=""><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/youtube-play.svg" alt=""></a>
                </div>
            </div>
            <div class="news-img" @click="newsActiveSrc()">
                <img :class="{'newsShow': showNewsImg == 0}" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-bg.png" alt="">
                <img :class="{'newsShow': showNewsImg == 1}" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-bg2.png" alt="">
                <div class="desc">
                    <div>{{newsTitle1}}</div>
                </div>
            </div>
            <ul @click="newsActiveSrc()">
                <li>
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-img1.png" id="myNews1" class="myNews" @mouseover="newsHover(0,newsStatictxt1)" @click="newsActive(0,newsStatictxt1)" alt="">
                    <div class="read">
                        <div class="txt">Picante Channel News</div>
                        <div class="date">January 2,2022</div>
                        <div class="toRead">To Read ></div>
                    </div>
                </li>
                <li>
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-img2.png" id="myNews2" class="myNews" @mouseover="newsHover(1,newsStatictxt2)" @click="newsActive(1,newsStatictxt2)" alt="">
                    <div class="read">
                        <div class="txt">cyberbump channel news</div>
                        <div class="date">January 2,2022</div>
                        <div class="toRead">To Read ></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="roadmap">
        <div class="roadmap-bg">
            <img class="roadmap-bg1" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/roadmap-bg1.png" alt="">
            <div class="roadmap-center">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/roadmap-icon.svg" alt="">
                <div></div>
            </div>
            <img class="roadmap-bg2" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/roadmap-bg2.svg" alt="">
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
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/partners1.png" alt="">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/partners2.png" alt="">
        </div>
    </div>
    <div class="register">
        <div class="title">READY FOR YOUR JOURNEY?</div>
        <div class="subtitle">GET THE LASTEST IN INBOX</div>
        <div class="email">
            <div class="email-wrap">
                <input class="email-input" type="text" v-model="email" placeholder="Email">
            </div>
            <div class="register" @click="submit()">Register</div>
        </div>
    </div>
    <div class="footer">
        <div class="mask"></div>
        <div class="footer-wrap">
            <img class="logo" :src="logoSrc" @mouseover="changeGif()" @mouseout="stopGif()" alt="">
            <div class="clause">
                <div class="policy"><router-link to="/privacy">Privacy policy</router-link></div>
                <div class="terms"><router-link to="/terms">Terms of servce</router-link></div>
            </div>
            <div class="icon">
                <a href="https://t.me/cyberpopnw" target="view_window">
                    <img class="medium" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/medium-footer.svg" alt="">
                </a>
            <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/discord-footer.svg" alt="" class="navLogo2">
                </a>
                <a href="https://twitter.com/cyberpopnw" target="view_window">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/twitter-footer0.svg" alt="">
                </a>
            </div>
            <div class="desc">Cyberpop Labs Ltd. Games, Inc. ALL Rights Reserved.</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 

import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectFade, Mousewheel, Autoplay} from "swiper";
SwiperCore.use([EffectFade, Mousewheel, Autoplay]);


// whitepaper
const openPaper = () => {
    window.open("public/whitepaper.pdf");
}


// language
let lang:any = ref(false);
const changeLanguage = () => {
    lang.value = !lang.value;
}

let select:any = ref(0);
const selectLang = (index:any) => {
    select.value = index;
}

// menu
let showMenuAni:any = ref(false);
let isPage:any = ref(false);
const showMenu = () => {
    isPage.value = true;
    showMenuAni.value = !showMenuAni.value
}
let showul:any = ref(true);
const showUl = () => {
    showul.value = !showul.value;
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
let newsStatictxt1:any = ref('CYBER NEW WORLD HAS LAUNCHED THREE MAPS OF THE OPEN WORLD');
let newsStatictxt2:any = ref('CYBER NEW MAPS OF THE OPEN WORLD THE OPEN WORLD');


let newsTitle1:any = ref('CYBER NEW WORLD HAS LAUNCHED THREE MAPS OF THE OPEN WORLD');
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
let clickTitle1:any = ref('CYBER NEW WORLD HAS LAUNCHED THREE MAPS OF THE OPEN WORLD');
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
    window.open('https://twitter.com/cyberpopnw');
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



//header
let logoHSrc: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/logo_101.png') ;
const changeHGif = () => {
    logoHSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/logo.gif';
}
const stopHGif = () => {
    logoHSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/logo_101.png';
}

// footer
let logoSrc: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/logo_101.png') ;
const changeGif = () => {
    logoSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/logo.gif';
}
const stopGif = () => {
    logoSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone//logo_101.png';
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
    showMenuAni.value = false;
    menuFlag.value = type;
    if(type == 2) {
        window.open('https://medium.com/@Cyberpopnewworld')
        return
    }
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

const connect: any = async () => {
    const [accounts]: any = await Web3.login().then((res: any) => {
        return res;
    })
    id.value = accounts;
    let len = id.value.length-1;
    id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
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



let submitMove: any = ref(false);
const mouseEnter = () => {
    submitMove.value = true;
}

const mouseLeave = () => {
    submitMove.value = false;
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
            }
        ]
        for(let i = 0; i < arr.length; i++){
            if(arr[i].top < windowHeight){
                arr[i].el.classList.add('fadeInUp')
            }
            
        }
        if(time1Top < windowHeight) time1.classList.add('fadeInRight')
        if(time3Top < windowHeight) time3.classList.add('fadeInRight')
        if(time5Top < windowHeight) time5.classList.add('fadeInRight')
        if(time2Top < windowHeight) time2.classList.add('fadeInLeft')
        if(time4Top < windowHeight) time4.classList.add('fadeInLeft')
}


const deckd = () => {
    window.location.href = 'https://d1td2c8hf7fv9k.cloudfront.net/(new)CyberPOPNewworlddeck(en).pdf';
}

onUnmounted(() => {
    window.removeEventListener("scroll", checkScrollHeightAndLoadAnimation, true);
})

onMounted(() => {
    connect()
    window.addEventListener('scroll', checkScrollHeightAndLoadAnimation, true);
    window.addEventListener('scroll', windowScroll, true);
})

</script>
<style lang="less" scoped>
    @keyframes menuStart{
        0% {
            right: -740px;
        }
        100%{
            right: 0;
        }
    }
    @keyframes menuEnd{
        0% {
            right: 0;
        }
        100%{
            right: -740px;
        }
    }
    @keyframes openAnimation {
        0%{
            left: -500px;
        }
        100%{
            left: -80px;
        }
    }
    @keyframes stopOpenAnimation {
        0%{
            left: -80px;
        }
        100%{
            left: -920px;
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
        overflow: hidden;
        header{
            z-index: 9;
            position: relative;
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 55px;
            color: #fff;
            background-color: #000000;
            .content{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .logo{
                    width: 151px;
                    height: 41px;
                }
                .menu{
                    width: 22px;
                    height: 22px;
                    // margin: 12px 17px 0 0;
                    margin-right: 17px;
                }
            }
            .menuMask{
                position: fixed;
                top: 0;
                right: -316px;
                width: 316px;
                height: 100vh;
                background: #000000;
                opacity: 0.92;
                .close-menu{
                    width: 100%;
                    height: 44px;
                    text-align: right;
                    img{
                        width: 22px;
                        height: 22px;
                        margin-top: 12px;
                        margin-right: 18px;
                    }
                }
                .menuul{
                    li{
                        width: 286px;
                        height: 60px;
                        margin-left: 30px;
                        font-family: Poppins-Regular, Poppins;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 60px;
                        font-size: 16px;
                        border-bottom: 1px solid rgba(255,255,255,.3);
                        cursor: pointer;
                    }
                    .active{
                        color: #04FF55;
                    }
                }
                .language{
                    position: relative;
                    width: 286px;
                    margin-left: 30px;
                    div{
                        width: 100%;
                        height: 30px;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        font-size: 16px;
                        font-family: Poppins-Regular, Poppins;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 30px;
                    }
                    div:after{
                        position: absolute;
                        top: 8px;
                        content: '';
                        display: inline-block;
                        width: 8px;
                        height: 8px;
                        margin-left: 33px;
                        border-left: 2px solid #fff;
                        border-bottom: 2px solid #fff;
                        transform: rotateZ(-45deg);
                    }
                    ul{
                        li{
                            height: 40px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 20px;
                        }
                    }
                }
            }
            .menuAnimation{
                animation: menuStart .2s ease-out;
                animation-fill-mode: forwards;
            }
            .stopMenuAnimation{
                animation: menuEnd .4s ease-out;
                animation-fill-mode: forwards;
            }
        }
        section{
            width: 100%;
            // height: 284px;
            height: 100vh;
            overflow: hidden;
            .titles{
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/section-cover.png');
                background-size: 101% 101%;
                // background-size: 100% 100%;
                // background-position: left top;
                background-position: -1vw 1vw;
                .title-wrap{
                    height: 100%;
                    display: flex;
                    flex-direction: column;            
                    justify-content: center;
                    align-items: center;
                    .title1{
                        width: 273px;
                        height: 47px;
                        font-size: 26px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 23px;
                        text-align: center;
                        filter: drop-shadow( .155vw 0 0 #D236A5 )
                                drop-shadow( -.15vw 0 0.05rem #72F0D9 );
                    }
                    .title2{
                        width: 227px;
                        height: 34px;
                        margin-top: 11px;
                        margin-bottom: 24px;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 17px;
                        text-align: center;
                    }
                    .btnbox{
                        display: flex;
                        justify-content: center;
                        .btn-register{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 213px;
                            height: 75px;
                            margin-right: -6%;
                            color: #fff;
                            text-align: center;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/section-btn1.svg');
                            background-position: center;
                            background-size: 100% auto;
                            cursor: pointer;
                            div{
                                font-size: 12px;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #FFFFFF;
                            }
                        }
                        .btn-video{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 213px;
                            height: 75px;
                            margin-left: -6%;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/section-btn2.svg');
                            background-position: center;
                            background-size: 100% auto;
                            cursor: pointer;
                            div{
                                font-size: 12px;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #000000;
                                line-height: 17px;
                            }
                            img{
                                margin-left: 4px;
                                width: 12px;
                                height: 12px;
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
                bottom: 38px;
                width: 100%;
                text-align: center;
                font-size: 14px;
                font-family: Menlo-Regular, Menlo;
                font-weight: 400;
                color: #04FFA2;
                line-height: 16px;
                .txt1{
                }
                .txt2{
                    font-size: 12px;
                    color: #ffffff;
                    font-weight: bold;
                }
            }
        }
        .buttom{
            position: absolute;
            bottom: 7px;
            left: 0;
            right: 0;
            width: 18px;
            height: 18px;
            margin: 0 auto;
        }
    }
    .nav-logos{
        z-index: 2;
        position: absolute;
        top: 580px;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 47px;
        height: 280px;
        padding-bottom: 40px;
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/nav-logoBg.svg');
        background-position: right bottom;
        background-repeat: no-repeat;
        background-size: auto 100%;
        a{
            text-decoration: none;
            text-align: center;
            img{
                margin-top: 3vw;
            }
            div{
                font-size: 10px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 14px;
            }
            .joinus{
                width: 24px;
                height: 21px;
            }
            .nav-img1{
                width: 22px;
                height: 16px;
            }
            .nav-img2{
                width: 24px;
                height: 19px;
            }
            .nav-img3{
                width: 22px;
                height: 19px;
            }
            img:not(.joinus):hover{
                filter: drop-shadow(0 0 .5vw #00FF9C);
            }
        }
        a + a::before{
            display: inline-block;
            content: '';
            width: 40px;
            height: 1px;
            border-top: 1px solid #8147FF;
            transform: rotateX(180deg);
        }
        
    }
    .welcome{
        position: relative;
        width: 100%;
        height: 472px;
        // margin-top: -.1vw;
        background-color: #0C0A0A;
        z-index: -1;
        .warp{
            z-index: -1;
            position: absolute;
            display: flex;
            flex-direction: column;
            // justify-content: center;
            width: 100%;
            height: 100%;
            .title{
                height: 67px;
                margin-top: 38px;
                font-size: 22px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #04FFA2;
                line-height: 33px;
                text-align: center;
                .white{
                    color: #fff;
                }
            }
            .desc{
                margin-top: 17px;
                font-size: 12px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 17px;
                text-align: center;
            }
            .content{
                display: flex;
                width: 100%;
                height: 265px;
                z-index: -1;
                .left{
                    z-index: 1;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 74px 5px 0vw 24px;
                    .start{
                        position: absolute;
                        top: 7px;
                        left: -9px;
                        width: 10px;
                        height: 7px;
                    }
                    .end{
                        position: absolute;
                        top: 117px;
                        left: -13px;
                        width: 14px;
                        height: 8px;
                    }
                    .pList{
                        margin-top: 15px;
                        display: flex;
                        flex-direction: column;
                        img{
                            width: 2px;
                            height: 24px;
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
                            width: 3px;
                            background-color: #EDFF00;
                        }
                    }
                    
                    
                }
                .swiper1{
                    z-index: 1;
                    position: relative;
                    height: 265px;
                    width: 340px;
                    // margin-top: 58px;
                    overflow: hidden;
                    .swiper-bg{
                        position: absolute;
                        top: 40px;
                        left: 32px;
                        width: 326px;
                        height: 164px;
                        filter: blur(4vw);
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
                        top: 34px;
                        width: 326px;
                        height: 170px;
                        overflow: hidden;
                        img{
                            width: 108%;
                            height: 106%;
                            z-index: -1;
                        }
                    }
                    .swiper-leftTop{
                        z-index: 2;
                        position: absolute;
                        top: 58px;
                        width: 93px;
                        height: 20px;
                        img{
                            width: 100%;
                        }
                        ul{
                            position: absolute;
                            top: 7px;
                            width: 100%;
                            text-align: center;
                            li{
                                font-size: 8px;
                                color: #000000;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                display: none;
                            }
                            .show{
                                display: block;
                            }
                        }
                    }
                    .swiper-img{
                        width: 290px;
                        height: 126px;
                        margin-top: 68px;
                        margin-left: 12px;
                        .swiper-bg3{
                            width: 290px;
                            height: 126px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        // ::v-deep .swiper-vertical > .swiper-wrapper{
                        //     transition-timing-function: ease-in !important;
                        // }
                        :deep(.swiper-vertical > .swiper-wrapper){
                            transition-timing-function: ease-in !important;
                        }
                    }
                }
            }
        }
    }
    .nobody{
        width: 100%;
        height: 881px;
        background-color: #000;
        display: flex;
        .nobody-wrap{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .nobody-left{
                position: relative;
                width: 100%;
                height: 321px;
                // background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/nobody-leftBg.png');
                // background-repeat: no-repeat;
                // background-position: left top;
                // background-size: auto 100%;
                img{
                    height: 100%;
                }
                .nobody-img{
                    position: absolute;
                    top: 39px;
                    right: 0;
                    width: 146px;
                    height: 235px;
                    background: linear-gradient(90deg, rgba(111, 38, 190, 0) 0%, rgba(156, 0, 248, 0.64) 64%, #7A00F8 100%);
                }
                .nobody-left-tip{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    div{
                        position: absolute;
                        top: 160px;
                        right: 40px;
                        padding-right: 9px;
                        width: 145px;
                        height: 29px;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 14px;
                        text-align: right;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/nobody-leftYellow.svg');
                        background-repeat: no-repeat;
                        background-position: right top;
                        background-size: 64px 64px;
                    }
                }
            }
            .nobody-right{
                display: flex;
                flex-direction: column;
                align-items: center;
                z-index: 0;
                width: 100%;
                height: 560px;
                .title{
                    width: 340px;
                    height: 67px;
                    font-size: 22px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 33px;
                    text-align: center;
                }
                .subtitle{
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #04FFA2;
                    line-height: 12px;
                }
                .desc{
                    margin-top: 32px;
                    margin-bottom: 33px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 17px;
                    white-space: nowrap;
                    text-align: center;
                }
                .video{
                    position: relative;
                    width: 284px;
                    height: 149px;
                    background: #000000;
                    background: chartreuse;
                    .videoBg{
                        position: absolute;
                        right: -4.4px;
                        bottom: -6px;
                        width: 157px;
                        height: 31px;
                    }
                    .banner{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .video-wrap{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 105px;
                        background: #000000;
                        opacity: 0.65;
                        img{
                            z-index: 1;
                            width: 33px;
                            height: 33px;
                            cursor: pointer;
                        }
                    }
                    .content{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        height: 44px;
                        background-color: #000000;
                        text-align: right;
                        .video-title{
                            margin-top: 3px;
                            margin-right: 12px;
                            font-size: 15px;
                            font-family: AlibabaPuHuiTi_2_95_ExtraBold;
                            color: #EDFF00;
                            line-height: 18px;
                            .yellow{
                                color: #fff;
                            }
                        }
                        .video-title:before{
                            display: inline-block;
                            content: '';
                            width: 2px;
                            height: 5px;
                            margin-right: 10px;
                            margin-bottom: 2px;
                            border: 1px solid #EDFF00;
                            background-color: #EDFF00;
                            transform: skew(-10deg);
                            z-index: 1;
                        }
                        .video-subtitle{
                            margin-right: 15px;
                            font-size: 12px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 18px;
                        }
                    }
                }
                .getNft-wrap{
                    position: relative;
                    width: 173px;
                    height: 40px;
                    margin-top: 31px;
                    margin-bottom: 85px;
                    .getNft{
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/white-border.svg');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;  
                        background-position: left top;
                        cursor: pointer;
                    }
                    .txt{
                        font-size: 13px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 40px;
                        text-align: center;
                        cursor: pointer;
                    }
                }
                .getNft:hover{
                    filter: drop-shadow(0 0 4px #fff);
                }
            }
        }
    }
    .make{
        position: relative;
        width: 100%;
        // height: 1391px;
        height: 1670px;
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-bg.png');
        background-position: left top;
        background-size: 100% 100%;
        overflow: hidden;
        .make-wrap{
            position: relative;
            display: flex;
            flex-direction: column;            
            // justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            height: 100%;
            .title-bg{
                z-index: 0;
                position: absolute;
                top: -4px;
                width: 100%;
                height: 400px;
            }
            .title{
                z-index: 1;
                width: 338px;
                height: 66px;
                margin-top: 32px;
                font-size: 22px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 33px;
            }
            .subtitle{
                z-index: 1;
                width: 338px;
                height: 15px;
                margin-bottom: 34px;
                font-size: 14px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #04FFA2;
                line-height: 12px;
            }
            .desc{
                z-index: 1;
                margin-bottom: 101px;
                width: 332px;
                height: 118px;
                font-size: 14px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 20px;
            }
            .make-img{
                position: relative;
                width: 319px;
                height: 988px;
                background: linear-gradient(90deg, #000000 0%, #000000 100%);
                opacity: 0.83;
                .yellowBg-r{
                    position: absolute;
                    top: -3px;
                    right: -5px;
                    width: 115px;
                    height: 22px;
                    transform: rotateX(180deg);
                }
                .yellowBg-l{
                    position: absolute;
                    bottom: -2px;
                    left: -3px;
                    width: 115px;
                    height: 22px;
                }
                ul{
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 29px;
                    li{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 14px;
                    }
                    li:nth-child(1){
                        width: 131px;
                        width: 155px;
                    }
                    li:nth-child(2){
                        width: 84px;
                        height: 199px;
                        margin-top: -28px;
                    }
                    li:nth-child(3){
                        width: 205px;
                        height: 210px;
                        margin-bottom: 48px;
                    }
                    li:nth-child(4){
                        width: 89px;
                        height: 230px;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                        margin: 10px 0;
                    }
                    div{
                        width: 61px;
                        height: 13px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_95_ExtraBold;
                        color: #EDFF00;
                        line-height: 13px;
                        z-index: 1;
                        cursor: pointer;
                    }
                    .tech{
                        margin-right: 28px;
                    }
                }
            }
            .opensea{
                position: relative;
                width: 357px;
                height: 175px;
                margin-top: 60px;
                background: #EDFF00;
                clip-path: polygon(0 0, 100% 0, 100% 66%, 94% 100%, 0 100%);
                .opensea-title{
                    height: 26px;
                    margin-top: 18px;
                    margin-bottom: 12px;
                    font-size: 17px;
                    font-family: OPPOSans-B, OPPOSans;
                    font-weight: normal;
                    color: #000000;
                    line-height: 26px;
                    text-align: center;
                }
                .openUrl{
                    a{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        img:nth-child(1){
                            width: 276px;
                            height: 63px;
                        }
                        img:nth-child(2){
                            width: 41px;
                            height: 42px;
                            margin-top: 4px;
                        }
                        img:nth-child(2):hover{
                            filter: drop-shadow(0 0 2px #373d41);
                        }
                    }
                }
                .mask{
                    z-index: -1;
                    position: absolute;
                    top: 0;
                    left: -500px;
                    width: 450px;
                    height: 175px;
                    background-color: #29fdfe;
                    opacity: .6;
                    transform: skewX(-20deg);
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
        // height: 1089px;
        height: 1165px;
        margin-top: -2px;
        background-color: #000000;
        overflow: hidden;
        .news-wrap{
            height: 100%;
            .title{
                height: 14px;
                margin-top: 73px;
                margin-bottom: 41px;
                font-size: 30px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 14px;
                text-align: center;
            }
            .news-top{
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                .channel{
                    height: 28px;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 28px;
                }
                .arrival{
                    width: 86px;
                    height: 17px;
                    margin: 8px 0 20px 0;
                    line-height: 1.09vw;
                    font-size: 9px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    color: #000000;
                    line-height: 17px;
                    text-align: center;
                    background: #04FFA2;
                }
                .news-logo{
                    display: flex;
                    flex-direction: column;
                    .news-img1{
                        width: 157px;
                        height: 120px;
                    }
                    a > img{
                        width: 53px;
                        height: 52px;
                        margin-top: -20px;
                        margin-bottom: 58px;
                        cursor: pointer;
                    }
                }
            }
            .news-img{
                position: relative;
                width: 100%;
                height: 463px;
                img{
                    position: absolute;
                    right: -6px;
                    height: 421px;
                    display: none;
                }
                img.newsShow{
                    display: block;
                }
                .desc{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    height: 76px;
                    padding-top: 14px;
                    padding-right: 11px;
                    background: linear-gradient(81deg, rgba(200, 53, 185, 0) 0%, rgba(199, 53, 183, 0.7) 33%, #C635B4 100%);
                    font-size: 15px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 22px;
                    text-align: right;
                }
            }
            ul{
                height: 290px;
                background: #000000;
                li{
                    display: flex;
                    width: 124px;
                    height: 124px;
                    margin: 21px 0 21px 43px;
                    border: 2px solid #C434B2;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .read{
                        margin-left: 10px;
                        margin-top: 2px;
                        .txt{
                            width: 131px;
                            height: 44px;
                            font-size: 16px;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            color: #FFFFFF;
                            line-height: 21px;
                        }
                        .date{
                            width: 167px;
                            height: 17px;
                            margin-top: 2px;
                            margin-bottom: 17px;
                            font-size: 12px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 17px;
                        }
                        .toRead{
                            font-size: 12px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FF21FF;
                            line-height: 17px;
                            text-decoration: none;
                        }
                    }
                }
            }
        }

    }
    .roadmap{
        width: 100%;
        // height: 731px;
        height: 770px;
        background-color: #000000;
        overflow: hidden;
        .roadmap-bg{
            position: absolute;
            width: 100%;
            height: 100%;
            .roadmap-bg1{
                position: absolute;
                top: 185px;
                left: 0;
                width: 177px;
                height: 201px;
            }
            .roadmap-bg2{
                position: absolute;
                top: 344px;
                right: 27px;
                width: 106px;
                height: 94px;
            }
            .roadmap-center{
                position: absolute;
                top: 178px;
                width: 100%;
                text-align: center;
                img{
                    width: 17px;
                    height: 16px;
                }
                div{
                    position: absolute;
                    top: 16px;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    width: 1px;
                    height: 485px;
                    background-color: #C689FF;
                    border: 1px solid #C689FF;
                }
            }
        }
        .roadmap-wrap{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            .title{
                width: 100%;
                height: 16px;
                margin-top: 99px;
                margin-bottom: 63px;
                font-size: 26px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 14px;
                text-align: center;
            }
            .timeWidth-l{
                width: 50%;
                text-align: right;
                padding-right: 17px;
            }
            .timeWidth-r{
                width: 50%;
                margin-left: 50%;
                padding-left: 17px;
                text-align: left;
            }
            .span-l{
                position: absolute;
                top: 8px;
                left: -16px;
                display: inline-block;
                width: 9px;
                height: 0px;
                background-color: #C689FF;
                border: 1px solid #C689FF;
            }
             .span-r{
                position: absolute;
                top: 8px;
                right: -16px;
                display: inline-block;
                width: 9px;
                height: 0px;
                background-color: #C689FF;
                border: 1px solid #C689FF;
            }
            .time1,.time2,.time3,.time4,.time5{
                .date{
                    position: relative;
                    font-size: 20px;
                    font-family: AiDeep-Bold, AiDeep;
                    font-weight: bold;
                    color: #04FFA2;
                    line-height: 18px;
                }
                .event{
                    margin-top: 16px;
                    font-size: 8px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 12px;
                }
            }
            .time1{
                margin-top: 47px;
            }
            .time2{
                margin-top: 38px;
            }
            .time3{
                margin-top: -20px;
            }
            .time4{
                margin-top: 18px;
            }
            .time5{
                margin-top: 15px;
            }
        }
    }
    .partners{
        width: 100%;
        height: 200px;
        background-color: #000000;
        overflow: hidden;
        .title{
            height: 31px;
            margin-bottom: 7px;
            font-size: 22px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #FFFFFF;
            line-height: 28px;
            text-align: center;
        }
        .logo{
            display: flex;
            align-items: center;
            overflow: hidden;
            img:nth-child(1){
                width: 93px;
                height: 71px;
                margin-left: 66px;
                margin-bottom: -2px;
            }
            img:nth-child(2){
                width: 147px;
                height: 47px;
            }

        }
    }
    .register{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 222px;
        background: #04FF55;
        .title{
            height: 28px;
            margin-top: 30px;
            margin-bottom: 3px;
            font-size: 22px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #000000;
            line-height: 28px;
        }
        .subtitle{
            height: 14px;
            margin-bottom: 34px;
            font-size: 16px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #000000;
            line-height: 14px;
        }
        .email{
            display: flex;
            width: 342px;
            height: 37px;
            .email-wrap{
                width: 69%;
                height: 100%;
                input{
                    width: 100%;
                    height: 100%;
                    padding-right: 10px;
                    text-indent: 12px;
                    font-size: 11px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #565656;
                    line-height: 16px;
                    background-color: #FFFFFF;
                    border: 1px solid #979797;;
                    outline: none;
                    text-align: left;

                }
                input:focus::-webkit-input-placeholder {
                    font-size: 9px;
                    text-align: right;
                }
            }
            .register{
                width: 31%;
                height: 100%;
                background-color: #0C0A0A;
                font-size: 10px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #04FF84;
                line-height: 35px;
                cursor: pointer;
            }
        }
        .email:hover{
            filter: drop-shadow(0 0 6px #000000);
        }
        .email:focus-within {
            filter: drop-shadow(0 0 6px #000000);
        }
    }
    .footer{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 206px;
        background-color: #000000;
        align-items: center;
        a{
            color: #ffffff;
            text-decoration: none;
        }
        .mask{
            position: absolute;
            width: 96%;
            height: 100%;
            margin-left: 4%;
            // background-color: #121122;
            background-color: #000000;
        }
       .footer-wrap{
           position: absolute;
           width: 100%;
           height: 100%;
           text-align: center;
            .logo{
                width: 181px;
                height: 49px;
                margin-top: 10px;
                margin-bottom: 5px;
            }
            .clause{
                display: flex;
                justify-content: center;
                margin-bottom: 25px;
                height: 23px;
                font-size: 14px;
                font-family: Poppins-Regular, Poppins;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 23px;
                .policy{
                    width: 101px;
                    margin-right: 14px;
                    white-space: nowrap;
                }
                .policy > a:hover{
                    color: #04FF55;
                }
                .terms{
                    width: 145px;
                    white-space: nowrap;
                }
                .terms > a:hover{
                    color: #04FF55;
                }
            }
            .icon{
                width: 100%;
                display: flex;
                justify-content: center;
                margin-bottom: 22px;
                img{
                    width: 41px;
                    height: 41px;
                }
                img:not(.medium){
                    margin-left: 31px;
                }
                img:hover{
                    transform: scale(1.1);
                }
            }
            .desc{
                height: 13px;
                font-size: 8px;
                font-family: Poppins-Regular, Poppins;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 13px;
            }
       }
    }
</style>
