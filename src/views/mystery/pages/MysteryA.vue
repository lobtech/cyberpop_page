<template>
    <div class="home">
        <header>
            <div class="content" id="header">
                <div class="logo">
                    <img v-show="!logoHFlag" :src="logoHSrcP" @mouseenter="logoHFlag = true" @click="changeMenu(0, '/')" alt="">
                    <img v-show="logoHFlag" :src="logoHSrcG" @mouseleave="logoHFlag = false" @click="changeMenu(0, '/')" alt="">
                </div>
                <div class="user">
                    <!-- <div class="language">
                        <img @click="changeLanguage()" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-language.svg" alt="" v-if="!id">
                        <ul :class="lang == true ? 'showLang' : ''">
                            <li :class="select == 0 ? 'active' : ''" @click="selectLang(0)">简体中文</li>
                            <li :class="select == 1 ? 'active' : ''" @click="selectLang(1)">English</li>
                            <li :class="select == 2 ? 'active' : ''" @click="selectLang(2)">Japanese</li>
                        </ul>
                    </div> -->
                    <div class="login_in" v-if="!loggined" @click="login()"  @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">
                        <div class="txt">CONNECT WALLET</div>
                        <div class="mask" id="mask"></div>
                    </div>
                    <div class="logged_in" v-if="loggined">
                        <img class="wallet" src="@/assets/nwhome/wallet.svg" alt="">
                        <div class="idtxt">{{realId}}</div>
                        <img class="portrait" src="@/assets/nwhome/portrait.svg" ref="clickCursor2" alt="" @click="showloggedFlag = !showloggedFlag,hoverLogged = false" @mouseenter="hoverLogged = true">
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
                        <li @mouseover="menuHover(2)" @click="changeMenu(2, '/mystery')" :class="{'active': active == 2}">
                            <span>Mystery Box</span>
                        </li>
                        <!-- <li @mouseover="menuHover(3)" @click="changeMenu(3, '/cyberspace')" :class="{'active': active == 3}">
                            <span>Cyberspace</span>
                        </li> -->
                        <li @mouseover="menuHover(4)" @mouseleave="hoverDoc = false" ref="clickCursor" @click="showDoc = !showDoc,hoverDoc = false" :class="{'active': active == 4}">
                            <span @mouseenter="hoverDoc = true">Doc</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
    <div class="section">
        <div class="title">COMING SOON</div>
    </div>
    <div class="doc_menu" v-show="showDoc || hoverDoc" ref="cursor" @mouseenter="hoverDoc = true" @mouseleave="hoverDoc = false">
        <div class="cover"></div>
        <div class="coverborder"></div>
        <a href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopWhitePaper18thFeb20222.pdf" @click="showDoc = false" target="view_window">Whitepaper</a>
        <a href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopTechnologyArchitecture2.pdf" @click="showDoc = false" target="view_window">Green paper</a>
        <a href="https://d3bhixjyozyk2o.cloudfront.net/(new)CyberPOPNewworlddeck(en)2.pdf" @click="showDoc = false" target="view_window">Deck</a>
    </div>
    <div class="logged_menu" v-show="showloggedFlag || hoverLogged" ref="cursor2" @mouseenter="hoverLogged = true" @mouseleave="hoverLogged = false">
        <div class="cover"></div>
        <div class="coverborder"></div>
        <div>My Assets</div>
        <div @click="signout">Log out</div>
    </div>
    <div class="boxBg">
        <div class="video">
            <video-bg 
id="videobg" :sources="[`https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxbanner.mp4`]">
            </video-bg>
            <div class="titles"> 
                <div class="titles-wrap">
                    <div class="left">
                        <div class="title">
                            CYBERPOP <span class="purple">NFT</span><br/>MYSTERY BOX
                            <div class="round">ROUND #1</div>
                        </div>
                        <div class="subtitle">INCLUDES SUPER VALUE FOR LIMITED TIME</div>
                        <div class="desc">
                            The mystery box of promotional NFTs that have been minted by the Cyberpop DAO which mark the beginning of our journey.
                        </div>
                        <div class="type">
                            <div class="type-title">TYPE</div>
                            <ul>
                                <li class="type-common">
                                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-common.png" alt="">
                                    <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-commonBorder.svg" alt="">
                                    <div class="mask">Common</div>
                                </li>
                                <li class="type-rare">
                                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-rare.png" alt="">
                                    <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-rareBorder.svg" alt="">
                                    <div class="mask">Rare</div>
                                </li>
                                <li class="type-epic">
                                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-epic.png" alt="">
                                    <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-rareBorder.svg" alt="">
                                    <div class="mask">Epic</div>
                                </li>
                            </ul>
                        </div>
                        <div class="button">
                            <div class="purchase">Purchase</div>
                            <div class="detailbtn">
                                Detail
                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/detailb.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="title">Sale Start time</div>
                        <div class="countDown">
                            <div class="hour">- -H</div>:
                            <div class="minute">- -M</div>:
                            <div class="millisecond">- -S</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="line"></div>
        <div class="nfts">
            <div class="nfts-wrap">
                <div class="top">
                    <div class="title">Featured NFTS</div>
                    <div class="rights">
                        <select name="" class="select">
                            <option value="All">All</option>
                            <option value="Out">Out</option>
                        </select>
                        <div class="search">
                            <img src="@/assets/nwbox/search.svg" alt="">
                            <input type="text" placeholder="Search">
                        </div>
                    </div>
                </div>
                <ul class="sale">
                    <li class="sale-active">
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="line"></div>
        <div class="recent">
            <div class="recent-wrap">
                <div class="title">Recent Sold</div>
                <ul>
                    <li>
                        <div class="left">
                            <div class="icon"><img src="" alt=""></div>
                            <div class="text">
                                <div class="saletime">Sale Start time <span>| #45o454</span></div>
                                <div class="participant">
                                    <div class="buyer">Buyer <span>0x3434...34de</span></div>
                                    <div class="seller">Seller <span>0x3434...34de</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                            <div class="price">
                                304,30
                                <span>≈$20</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <div class="icon"><img src="" alt=""></div>
                            <div class="text">
                                <div class="saletime">Sale Start time <span>| #45o454</span></div>
                                <div class="participant">
                                    <div class="buyer">Buyer <span>0x3434...34de</span></div>
                                    <div class="seller">Seller <span>0x3434...34de</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                            <div class="price">
                                304,30
                                <span>≈$20</span>
                            </div>
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
    </div>
    <coming-a v-show="showComingFlag"></coming-a>
    <message-a v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { log } from 'util';


// docMenu
let showDoc:any = ref(false); 
let hoverDoc:any = ref(false); 
const cursor:any = ref(null)
const clickCursor:any = ref(null)
//logged_menu
let showloggedFlag:any = ref(false)
let hoverLogged:any = ref(false)
const cursor2:any = ref(null)
const clickCursor2:any = ref(null)

const handleOtherClick = (e:any) => {
    if( cursor.value.contains(e.target) || clickCursor.value.contains(e.target)){
        showloggedFlag.value = false;
        return
    }else{
        showDoc.value = false;
    }
    if( loggined.value ){
        if( cursor2.value.contains(e.target) || clickCursor2.value.contains(e.target) ){
            showDoc.value = false;
            return
        }else{
            showloggedFlag.value = false;
        }
    }
}



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

// footer
let logoFlag: any = ref(false) ;





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

let menuFlag:any = ref(2);
const changeMenu = (type: any, route?: any) => {
    menuFlag.value = type;
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
}


const login = () =>{
    connect();
}

const signout = () => {
    loggined.value = false;
    showloggedFlag.value = false;
    hoverLogged.value = false;
    store.dispatch('user/walletId',0);
}



// message dialog
const showDialog = computed(() => store?.state.user?.showDialog);
let messageState:any = ref(false)
let messageContent:any = ref('')
const messageAlert = (flag:any, message:any) => {
    messageState.value = flag
    store.dispatch('user/showDialog',true)
    messageContent.value = message
    store.dispatch('user/addComingOut', false)
}


const realId = computed(() => store?.state.user?.realId);
const idTemp = computed(() => store?.state.user?.idTemp);
const id: any = ref(0)
const loggined: any = ref(false)
const connect: any = async () => {
    const [accounts]: any = await Web3.login().then((res: any) => {
        if( res == 'not dapp, install MetaMask！' ){
            messageAlert(false, res)
        }else{
            loggined.value = true
            return res
        }
    })
    store.dispatch('user/walletIdTemp',accounts);// 存放完整id
    id.value = accounts;
    let len = id.value.length-1;
    id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
    store.dispatch('user/walletId',id.value);
}



const checkScrollHeightAndLoadAnimation: any = () => {
        // const windowHeight: Number = window.innerHeight;

        // let ele1 = document.getElementById("ele1") as HTMLElement;
        // let ele2 = document.getElementById("ele2") as HTMLElement;
        // let ele3 = document.getElementById("ele3") as HTMLElement;
        // let ele4 = document.getElementById("ele4") as HTMLElement;
        // let ele5 = document.getElementById("ele5") as HTMLElement;
        // let ele6 = document.getElementById("ele6") as HTMLElement;
        // let ele7 = document.getElementById("ele7") as HTMLElement;
        // const ele1Top: Number = ele1.getBoundingClientRect().top;
        // const ele2Top: Number = ele2.getBoundingClientRect().top; 
        // const ele3Top: Number = ele3.getBoundingClientRect().top; 
        // const ele4Top: Number = ele4.getBoundingClientRect().top; 
        // const ele5Top: Number = ele5.getBoundingClientRect().top; 
        // const ele6Top: Number = ele6.getBoundingClientRect().top; 
        // const ele7Top: Number = ele7.getBoundingClientRect().top; 


        // let arr = [
        //     {
        //         el: ele1,
        //         top: ele1Top
        //     },
        //     {
        //         el: ele2,
        //         top: ele2Top
        //     },
        //     {
        //         el: ele3,
        //         top: ele3Top
        //     },
        //     {
        //         el: ele4,
        //         top: ele4Top
        //     },
        //     {
        //         el: ele5,
        //         top: ele5Top
        //     },
        //     {
        //         el: ele6,
        //         top: ele6Top
        //     },
        //     {
        //         el: ele7,
        //         top: ele7Top
        //     }
        // ]
        // for(let i = 0; i < arr.length; i++){
        //     if(arr[i].top < windowHeight){
        //         arr[i].el.classList.add('fadeInUp')
        //     }
            
        // }
}



onUnmounted(() => {
    window.removeEventListener("scroll", checkScrollHeightAndLoadAnimation, true);
    window.removeEventListener('click', handleOtherClick, true);
})

onMounted(() => {
    // connect();
    logoHImport();
    window.addEventListener('scroll', checkScrollHeightAndLoadAnimation, true);
    window.addEventListener('click', handleOtherClick, true);
    store.dispatch('user/changeActive', 3)
    if( realId.value != 0){
        loggined.value = true;
    }
    logoHImport();
    window.addEventListener('scroll', checkScrollHeightAndLoadAnimation, true);
    window.addEventListener('click', handleOtherClick, true);
    store.dispatch('user/changeActive', 3);
    window.scrollTo(0,0);
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
    a {
    text-decoration: none;
    }
    
    .router-link-active {
    text-decoration: none;
    }
    .home{
        position: relative;
        width: 100%;
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
                height: 100%;
                margin: 0 2.91vw 0 0vw;
                display: flex;
                justify-content: space-between;
                position: relative;
                .logo{
                    width: 20.20vw;
                    height: 100%;
                    overflow: hidden;
                    img{
                        width: 100.2%;
                        height: 100.2%;
                        border: none;
                        margin: -.1vw;
                    }
                    img[src=""],img:not([src]){
                        opacity:0;
                    }
                }
                .user{
                    display: flex;
                    .xplan{
                        width: 2.39vw;
                        height: 2.34vw;
                        margin-top: 1.2vw;
                        margin-right: 4px;
                        cursor: pointer;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
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
                        cursor: pointer;
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
                    .login_in:hover > .txt{
                        color: #EDFF00;
                    }
                    .logged_in{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        // width: 12.13vw;
                        height: 2.3vw;
                        margin-top: 1.3vw;
                        .wallet{
                            width: 1.4vw;
                            height: .98vw;
                        }
                        .idtxt{
                            // width: 8vw;
                            margin: 0 .6vw;
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
                                font-family: AlibabaPuHuiTi_2_55_Regular;
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
                    left: 23.5vw;
                    width: 43.6vw;
                    height: 100%;
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
                    li:last-child > span{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                    }
                    .active{
                        background: linear-gradient(180deg, rgba(0,0,0,0),rgba(255, 24, 255, 0) 65%, rgba(255, 24, 255, 0.62) 100%);
                    }  
                }
            }
        }
    }
    .section{
        z-index: 8;
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,.46);
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
    .doc_menu{
        z-index: 9;
        position: fixed;
        top: 4.2vw;
        left: 47vw;
        width: 9.27vw;
        height: 7.96vw;
        background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
        border: .15vw solid;
        border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
        clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
        .cover{
            position: absolute;
            top: 0vw;
            width: 100%;
            height: 100%;
            background: #293041;
            clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
        }
        .coverborder{
            z-index: -1;
            position: absolute;
            bottom: 0;
            right: 0;
            content: '';
            display: inline-block;
            width: 8vw;
            height: 8vw;
            background-color: #2d2942;
        }
        a{
            display: inline-block;
            text-decoration: none;
            position: absolute;
            right: 0;
            width: 8vw;
            height: 1.3vw;
            padding-right: .8vw;
            margin-right: .49vw;
            font-size: .93vw;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            text-align: right;
            color: #fff;
            white-space: nowrap;
        }
        a:nth-child(3){
            top: .8vw;
            cursor: pointer;
        }
        a:nth-child(4){
            top: 2.4vw;
            padding-top: .5vw;
            cursor: pointer;
        }
        a:nth-child(5){
            top: 4.6vw;
            padding-top: .5vw;
            cursor: pointer;
        }
        a + a{
            border-top: 2px solid #534968;
        }
        a:hover{
            color: #35F1C8;
        }
    }
    .logged_menu{
        z-index: 9;
        position: fixed;
        top: 4.2vw;
        right: 1.8vw;
        width: 9.27vw;
        height: 5.1vw;
        background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
        border: .15vw solid;
        border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
        clip-path: polygon(0 0, 100% 0, 100% 75%, 93% 100%, 0 100%);
        .cover{
            position: absolute;
            top: 0vw;
            width: 100%;
            height: 100%;
            background: #293041;
            clip-path: polygon(0 0, 100% 0, 100% 75%, 93% 100%, 0 100%);
        }
        .coverborder{
            z-index: -1;
            position: absolute;
            bottom: 0;
            right: 0;
            content: '';
            display: inline-block;
            width: 8vw;
            height: 8vw;
            background-color: #2d2942;
        }
        div:nth-child(3){
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 8.43vw;
            height: 1.3vw;
            padding-right: .8vw;
            margin: 1vw auto .4vw;
            font-size: .93vw;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            color: #FFFFFF;
            line-height: .4vw;
            text-align: right;
            border-bottom: .15vw solid #534968;
            cursor: pointer;
        }
        div:nth-child(4){
            position: absolute;
            right: 1.1vw;
            bottom: .9vw;
            width: 8.43vw;
            height: 1.3vw;
            font-size: .93vw;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            color: #6D4AFF;
            line-height: 1.3vw;
            text-align: right;
            cursor: pointer;
        }
    }
    .boxBg{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        .video{
            position: relative;
            width: 100%;
            height: 100vh;
            background-color: #000000;
            overflow: hidden;
            .titles{
                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                .titles-wrap{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    // margin-left: 20.98vw;
                    margin-right: 24.37vw;
                    margin-left: 22vw;
                    .left{
                        .title{
                            position: relative;
                            margin-top: 9.71vw;
                            font-size: 2.6vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #FFFFFF;
                            // line-height: 2.81vw;
                            line-height: 3vw;
                            animation: fadeInUp .8s linear;
                            .purple{
                                font-size: 2.6vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #FFFFFF;
                                line-height: 2.81vw;
                                background: linear-gradient(163deg, #FB52FC 0%, #8953FF 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                            }
                            .round{
                                position: absolute;
                                top: 4.3vw;
                                left: 18.7vw;
                                width: 5.83vw;
                                height: 1.14vw;
                                font-size: .78vw;
                                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                color: #000000;
                                line-height: 1.14vw;
                                text-align: center;
                                background-color: #FFFFFF;
                            }
                        }
                        .subtitle{
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            letter-spacing: .08vw;
                            font-weight: 900;
                            color: #04FFA2;
                            // line-height: 2.08vw;
                            line-height: 2.2vw;
                        }
                        .desc{
                            width: 25.57vw;
                            font-size: .83vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 1.14vw;
                        }
                        .type{
                            .type-title{
                                width: 20.36vw;
                                height: 1.35vw;
                                // margin: 3.17vw 0 .2vw .36vw;
                                margin: 4vw 0 .2vw .36vw;
                                font-size: .98vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #B3B3B3;
                                line-height: 1.35vw;
                            }
                        ul{
                            display: flex;
                                li{
                                    position: relative;
                                    width: 5.67vw;
                                    height: 5.31vw;
                                    margin-right: .625vw;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                    .border{
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                    }
                                    .mask{
                                        position: absolute;
                                        bottom: 0;
                                        width: 100%;
                                        height: 1.14vw;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #FFFFFF;
                                        line-height: 1.14vw;
                                        text-align: center;
                                        background-color: rgba(255,255,255,.1);
                                    }
                                }
                        }
                        }
                        .button{
                            display: flex;
                            // margin-top: 2.96vw;
                            margin-top: 4vw;
                            margin-bottom: 5.625vw;
                            text-align: center;
                            .purchase{
                                width: 11.25vw;
                                height: 2.55vw;
                                margin-right: .67vw;
                                font-size: .93vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                color: #FFFFFF;
                                line-height: 2.55vw;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.svg');
                                background-repeat: no-repeat;
                                background-size: 100% auto;
                                background-position: left top;
                            }
                            .detailbtn{
                                position: relative;
                                width: 11.51vw;
                                height: 2.65vw;
                                font-size: .83vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                color: #FFFFFF;
                                line-height: 2.65vw;
                                // background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/detailb.svg');
                                // background-repeat: no-repeat;
                                // background-size: 100% auto;
                                // background-position: left top;
                                img{
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .purchase:hover{
                                filter: drop-shadow(0 0 0.3rem #AA31DF);
                            }
                            .detailbtn > img:hover{
                                filter: drop-shadow(0 0 0.3rem #ffffff);
                            }
                        }
                    }   
                    .right{
                        position: relative;
                        .title{
                            position: absolute;
                            right: 0;
                            bottom: 8vw;
                            width: 14.68vw;
                            height: 1.51vw;
                            font-size: 1.09vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 1.51vw;
                            text-align: right;
                        }
                        .countDown{
                            display: flex;
                            position: absolute;
                            right: -.7vw;
                            bottom: 5.6vw;
                            width: 12.55vw;
                            height: 2.44vw;
                            font-size: 1.51vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 2.13vw;
                            div{
                                width: 3.43vw;
                                height: 2.44vw;
                                margin: 0 .2vw;
                                text-align: center;
                                line-height: 2.44vw;
                                background-color: #171C28;
                            }
                        }
                    }
                }
            }
        }
        .line{
            width: 90vw;
            height: .1vw;
            margin: 2.03vw auto 4.06vw;
            background: linear-gradient(90deg, rgba(111, 38, 190, 0) 0%, rgba(156, 0, 248, 0.33) 38%, #7A00F8 50%,rgba(156, 0, 248, 0.33) 88%,rgba(111, 38, 190, 0) 100%);
            opacity: 0.71;
        }
        .nfts{
            .nfts-wrap{
                margin-left: 21.45vw;
                margin-right: 22.13vw;
                .top{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-left: .93vw;
                    .title{
                        height: 2.18vw;
                        font-size: 1.56vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 2.18vw;
                    }
                    .rights{
                        display: flex;
                        align-items: center;
                        .select{
                            width: 7.76vw;
                            height: 2.03vw;
                            margin-right: .88vw;
                            font-size: .88vw;
                            text-indent: .2vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 2.03vw;
                            background: #171C28;
                            border-radius: .1vw;
                            border: 1px solid #3F4043;
                            outline: none;
                        }
                        .search{
                            display: flex;
                            align-items: center;
                            width: 19.06vw;
                            height: 2.03vw;
                            background: #171C28;
                            border-radius: .1vw;
                            border: 1px solid #3F4043;
                            img{
                                width: 1.09vw;
                                height: 1.14vw;
                                margin: 0 .4vw;
                            }
                            input{
                                width: 16.4vw;
                                height: 100%;
                                color: #ffffff;
                                font-size: .88vw;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #B3B3B3;
                                line-height: 2.03vw;
                                background-color: transparent;
                                border: none;
                                outline: none;
                            }
                        }
                    }

                }
                .sale{
                    display: flex;
                    flex-wrap: wrap;
                    width: 58vw;
                    margin-top: 2.29vw;
                    li{
                        width: 17.86vw;
                        height: 22.81vw;
                        margin-bottom: .83vw;
                        margin-right: 1.4vw;
                        padding: .41vw 1.66vw;
                        background-image: url('../../../assets/nwbox/nfts-cardbg.svg');
                        background-size: 100% 100%;
                        overflow: hidden;
                        .showarea{
                            position: relative;
                            width: 14.53vw;
                            height: 15.05vw;
                            background: #0F0B17;
                            overflow: hidden;
                            img{
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                height: 100%;
                                margin: 0 auto;
                            }
                            .sold{
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%,-50%);
                                width: 11.14vw;
                                height: 2.81vw;
                                font-size: 2.08vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #A09EFB;
                                line-height: 2.81vw;
                                text-align: center;
                            }
                            .legen{
                                margin-left: -.77vw;
                                margin-top: -.8vw;
                                width: 7.39vw;
                                height: 2.7vw;
                                padding-top: .9vw;
                                font-size: .78vw;
                                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                color: #000000;
                                line-height: 1.09vw;
                                text-align: center;
                                background-image: url('../../../assets/nwbox/nfts-legen.svg');
                                background-size: 100% 100%;
                                // display: none;
                            }
                            .id{
                                width: .39vw;
                                height: 1,19vw;
                                margin: .46vw;
                                font-size: .83vw;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #6D4AFF;
                                line-height: 1,19vw;
                            }
                            .countdown{
                                width: 7.39vw;
                                height: 2.65vw;
                                margin-top: 8.6vw;
                                margin-left: 6.6vw;
                                padding: .46vw .26vw .31vw 0;
                                background: rgba(64, 64, 64, 0.33);
                                border-radius: 4p.2vw;
                                backdrop-filter: blur(2px);
                                text-align: right;
                                .name{
                                    height: .93vw;
                                    font-size: .67vw;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #B3B3B3;
                                    line-height: .93vw;
                                }
                                .ctime{
                                    height: .46vw;
                                    margin-top: .4vw;
                                    font-size: .67vw;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    color: #FFFFFF;
                                    line-height: .46vw;
                                }
                            }
                        }
                        .intro{
                            .starttime{
                                height: 1.19vw;
                                margin-top: .46vw;
                                margin-left: .1vw;
                                font-size: .83vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #FFFFFF;
                                line-height: 1.19vw;
                            }
                            .desc{
                                display: flex;
                                align-items: center;
                                img{
                                    width: 1.45vw;
                                    height: 1.45vw;
                                    margin-top: .2vw;
                                    margin-right: .2vw;
                                }
                                .price{
                                    position: relative;
                                    margin-top: .1vw;
                                    height: 1.97vw;
                                    font-size: 1.4vw;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    color: #35F1C8;
                                    line-height: 1.97vw;
                                    span{
                                        position: absolute;
                                        top: 2vw;
                                        height: 1.19vw;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 1.19vw;
                                    }
                                }
                            }
                        }
                    }
                    li.sale-active{
                        filter: drop-shadow(0 0 .3vw #8BDDFF);
                    }
                }
            }
        }
        .recent{
            background: linear-gradient(180deg, rgba(111, 38, 190, 0) 0%, rgba(156, 0, 248, 0.33) 58%, rgba(122, 0, 248,.71) 100%);
            overflow: hidden;
            .recent-wrap{
                margin-left: 21.45vw;
                margin-right: 22.13vw;
                .title{
                    height: 2.18vw;
                    margin-bottom: 3.12vw;
                    margin-left: .8vw;
                    font-size: 1.56vw;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 2.18vw;
                }
                ul{
                    margin-bottom: 7vw;
                    li{
                        display: flex;
                        justify-content: space-between;
                        width: 53.48vw;
                        height: 6.45vw;
                        margin: 0 auto 2.03vw;
                        padding: .98vw 2.13vw 0 .88vw;
                        background: #1A1728;
                        .left{
                            display: flex;
                            .icon{
                                width: 4.63vw;
                                height: 4.73vw;   
                                margin-right: .93vw;
                                background: #0F0B17;
                                img{
                                    height: 100%;
                                    margin: 0 auto;
                                }
                            }
                            .text{
                                .saletime{
                                    width: 30vw;
                                    height: 1.82vw;
                                    margin-bottom: .98vw;
                                    font-size: 1.19vw;
                                    font-family: AlibabaPuHuiTi_2_85_Bold;
                                    color: #FFFFFF;
                                    line-height: 1.66vw;
                                    span{
                                        margin: .6vw;
                                        height: 1.66vw;
                                        font-size: 1.19vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 1.66vw;
                                    }
                                }
                                .participant{
                                    display: flex;
                                    .buyer{
                                        width: 14.2vw;
                                        height: 1.4vw;
                                        font-size: .93vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #35F1C8;
                                        line-height: 1.3vw;
                                        span{
                                            width: 8.54vw;
                                            height: 1.4vw;
                                            margin-left: .36vw;
                                            font-size: .93vw;
                                            font-family: AlibabaPuHuiTi_2_55_Regular;
                                            color: #B3B3B3;
                                            line-height: 1.3vw;
                                        }
                                    }
                                    .seller{
                                        width: 14vw;
                                        height: 1.4vw;
                                        font-size: .93vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #6D4AFF;
                                        line-height: 1.3vw;
                                        span{
                                            width: 8.54vw;
                                            height: 1.4vw;
                                            margin-left: .36vw;
                                            font-size: .93vw;
                                            font-family: AlibabaPuHuiTi_2_55_Regular;
                                            color: #B3B3B3;
                                            line-height: 1.3vw;
                                        }
                                    }
                                }
                            }
                        }
                        .right{
                            display: flex;
                            img{
                                width: 1.61vw;
                                height: 1.61vw;
                                margin-top: .83vw;
                                margin-right: .3vw;
                            }
                            .price{
                                position: relative;
                                width: 5.83vw;
                                height: 2.18vw;
                                margin-top: .52vw;
                                font-size: 1.56vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #FFFFFF;
                                line-height: 2.18vw;
                                text-align: right;
                                span{
                                    position: absolute;
                                    top: 2.6vw;
                                    right: 0;
                                    height: 1.3vw;
                                    font-size: .93vw;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #B3B3B3;
                                    line-height: 1.3vw;
                                }
                            }
                        }
                    }
                }
            }
        }
        .footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 5.54vw;
            padding-right: 6vw;
            // padding-left: 18.9vw;  
            font-size: 1.09vw;
            font-family: AlibabaPuHuiTi_2_55_Regular;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 1.82vw;
            background-color: #121122;
            a{
                color: #ffffff;
                text-decoration: none;
            }
            .logo{
                // width: 12vw;
                height: 5.54vw;
            }
            .policy{
                margin-left: 22vw;
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
    }
</style>
