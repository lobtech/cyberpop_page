<template>
    <div class="home">
        <header>
            <div class="content" id="header">
                <div class="logo">
                    <img v-show="!logoHFlag" :src="logoHSrcP" @mouseenter="logoHFlag = true" @click="changeMenu(0, '/')" alt="">
                    <img v-show="logoHFlag" :src="logoHSrcG" @mouseleave="logoHFlag = false" @click="changeMenu(0, '/')" alt="">
                </div>
                <img class="menu" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/header-menu.svg" @click="showMenu()" alt="">
            </div>
            <div class="menuMask" :class="isPage && (showMenuAni ? 'menuAnimation' : 'stopMenuAnimation')">
                <div class="close-menu">
                    <img @click="showMenu()" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/close-menu.svg" alt="">
                </div>
                <div class="login_in" v-if="!loggined" @click="login()">
                    <div class="txt">CONNECT WALLET</div>
                </div>
                <div class="logged_in" v-if="loggined">
                    <img class="portrait" src="@/assets/nwhome/portrait.svg" alt="">
                    <div class="idtxt">{{realId}}</div>
                    <div class="submenu">
                        <div class="myassets">My assets</div>
                        <div class="logout" @click="signout">Logout</div>
                    </div>
                    <div class="mask"></div>
                </div>
                <ul id="menuUl" class="menuul">
                    <li @click="changeMenu(0, '/')" :class="{'active': active == 0}">Home</li>
                    <li @click="changeMenu(1, '/mining')" :class="{'active': active == 1}">Mining</li>
                    <li @click="changeMenu(2, '/mystery')" :class="{'active': active == 2}">Mystery Box</li>
                    <!-- <li @click="showComing()" :class="{'active': active == 4}">Cyberspace</li> -->
                    <!-- <li @click="changeMenu(3, '/cyberspace')" :class="{'active': active == 3}">Cyberspace</li> -->
                    <li :class="{'active': active == 4}">
                        <div class="doc" @click="docMenu()">Doc <span :class="changeArrow ? 'change' : ''"></span></div>
                        <div class="docmenu" v-show="showDoc">
                            <a @click="closeMenu()" href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopWhitePaper18thFeb20222.pdf" target="view_window">Whitepaper</a>
                            <a @click="closeMenu()" href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopTechnologyArchitecture2.pdf" target="view_window">Green paper</a>
                            <a @click="closeMenu()" href="https://d3bhixjyozyk2o.cloudfront.net/(new)CyberPOPNewworlddeck(en)2.pdf" target="view_window">Deck</a>
                        </div>
                    </li>
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
    </div>
    <div class="section">
        <div class="title">COMING SOON</div>
    </div>
    <div class="boxBg">
        <div class="titles"> 
            <div class="left">
                <div class="title">
                    CYBERPOP <span class="purple">NFT</span><br/>MYSTERY BOX
                </div>
                <div class="round">ROUND #1</div>
                <div class="subtitle">INCLUDES SUPER VALUE FOR LIMITED TIME</div>
                <div class="desc">
                    The mystery box of promotional NFTs that have been minted by the Cyberpop DAO which mark the beginning of our journey.
                </div>
            </div>
            <div class="right">
                <video-bg 
id="videobg" :sources="[`https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxbanner.mp4`]">
                </video-bg>
                <div class="title">Sale Start time</div>
                <div class="countDown">
                    <div class="hour">- -H</div>:
                    <div class="minute">- -M</div>:
                    <div class="millisecond">- -S</div>
                </div>
            </div>
            <div class="nftCard">
                <ul class="type">
                    <li class="type-common">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-common.png" alt="">
                        <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-commonBorder0.svg" alt="">
                        <div class="mask">Common</div>
                    </li>
                    <li class="type-rare">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-rare.png" alt="">
                        <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-rareBorder0.svg" alt="">
                        <div class="mask">Rare</div>
                    </li>
                    <li class="type-epic">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-epic.png" alt="">
                        <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-rareBorder0.svg" alt="">
                        <div class="mask">Epic</div>
                    </li>
                </ul>
                <div class="button">
                    <div class="purchase"><div>Purchase</div></div>
                    <div class="detailbtn">Detail</div>
                </div>
            </div>
            <div class="tline"></div>
        </div>
        <!-- <div class="nfts">
            <div class="nfts-wrap">
                <div class="top">
                    <div class="title">Featured NFTS</div>
                    <div class="rights">
                        <select name="" class="select">
                            <option value="All">All</option>
                            <option value="Out">Out</option>
                        </select>
                        <div class="search">
                            <img src="@/assets/nwboxPhone/search.svg" alt="">
                            <input type="text" placeholder="Search">
                        </div>
                    </div>
                </div>
                <ul class="sale">
                    <li class="sale-active">
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">
                                <div class="bg"></div>
                                <div>LEGENDARY</div>
                            </div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwboxPhone/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="sale-active">
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">
                                <div class="bg"></div>
                                <div>LEGENDARY</div>
                            </div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwboxPhone/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="line"></div>
        </div>
        <div class="recent">
            <div class="recent-wrap">
                <div class="title">Recent Sold</div>
                <ul>
                    <li>
                        <div class="left">
                            <div class="icon"><img src="" alt=""></div>
                            <div class="text">
                                <div class="saletime">Sale Start time <span>| #45o454</span></div>
                                <div class="buyer">Buyer <span>0x3434...34de</span></div>
                                <div class="seller">Seller <span>0x3434...34de</span></div>
                                <div class="right bot">
                                    <img src="@/assets/nwboxPhone/nfts-icon.svg" alt="">
                                    <div class="price">
                                        304,30
                                        <span>≈$20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <div class="icon"><img src="" alt=""></div>
                            <div class="text">
                                <div class="saletime">Sale Start time <span>| #45o454</span></div>
                                <div class="buyer">Buyer <span>0x3434...34de</span></div>
                                <div class="seller">Seller <span>0x3434...34de</span></div>
                                <div class="right bot">
                                    <img src="@/assets/nwboxPhone/nfts-icon.svg" alt="">
                                    <div class="price">
                                        304,30
                                        <span>≈$20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div> -->
        <div class="footer">
            <div class="footer-wrap">
                <!-- <img class="logo" v-show="!logoFlag" :src="logoHSrcP" @mouseenter="logoFlag = true" alt="">
                <img class="logo" v-show="logoFlag" :src="logoHSrcG" @mouseleave="logoFlag = false" alt=""> -->
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
    </div>
    <metamask-b v-if="metaMaskActive" :isInstall="isInstall"></metamask-b>
    <coming-b v-show="showComingFlag"></coming-b>
    <message-b v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-b>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { log } from 'util';


// coming soon
let showComingFlag:any = ref(false)
const ctimer:any = ref(null)

const showComing = () => {
    clearTimeout(ctimer.value);
    // Stow menu
    showMenuAni.value = false;
    // default animation
    store.dispatch('user/addComingOut', false)
    // show coming view
    showComingFlag.value = true;
    ctimer.value = setTimeout(() => {
        // change animation
        store.dispatch('user/addComingOut', true)
    },3000)
}




// menu
let showMenuAni:any = ref(false);
let isPage:any = ref(false);
const showMenu = () => {
    isPage.value = true;
    showMenuAni.value = !showMenuAni.value

}

// docMenu
let showDoc:any = ref(false); 
let changeArrow:any = ref(false)
const docMenu = () => {
    showDoc.value = !showDoc.value
    changeArrow.value = !changeArrow.value
}

// pdf click
const closeMenu = () => {
    showMenuAni.value = !showMenuAni.value
}




// connect
let connectMove: any = ref(false);
const mouseEnter = () => {
    connectMove.value = true;
}

const mouseLeave = () => {
    connectMove.value = false;
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

const login = () =>{
    connect();
}

const signout = () => {
    loggined.value = false;
    showMenuAni.value = false;
    store.dispatch('user/walletId',0);
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

let menuFlag:any = ref(2);
const changeMenu = (type: any, route?: any) => {
    showMenuAni.value = false;
    menuFlag.value = type;
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
}




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



const realId = computed(() => store?.state.user?.realId);
const idTemp = computed(() => store?.state.user?.idTemp);
const id: any = ref(0)

const metaMaskActive = computed(() => store?.state.user?.metaMaskActive);
const isInstall:any = ref(false);

const loggined: any = ref(false)
const connect: any = async () => {
    showMenuAni.value = false;
    const ismessage: any = await Web3.hasMetaMask()
    if( ismessage == 'Please install a wallet.' ){
        store.dispatch('user/metaChange',true);
        store.dispatch('user/metaChangeAni',true);
        isInstall.value = false;
    }else{
        store.dispatch('user/metaChange',true);
        store.dispatch('user/metaChangeAni',true);
        isInstall.value = true;
        const [accounts]: any = await Web3.login().then((res: any) => {
            store.dispatch('user/metaChange',false);
            loggined.value = true
            return res;
        })
        store.dispatch('user/walletIdTemp',accounts);// 存放完整id
        id.value = accounts;
        let len = id.value.length-1;
        id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
        store.dispatch('user/walletId',id.value);
    }
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



onMounted(() => {
    if( realId.value != 0){
        loggined.value = true;
    }
    logoHImport();
    store.dispatch('user/changeActive', 2);
    store.dispatch('user/metaChange',false);
    window.scrollTo(0,0);
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
    html,
    body {
        height: 100%;
        overflow-x: hidden;
    }
    .home{
        position: relative;
        width: 100%;
        header{
            z-index: 9;
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
                    overflow: hidden;
                    img{
                        width: 100.2%;
                        height: 100.2%;
                        border: none;
                        margin: -2px;
                    }
                    img[src=""],img:not([src]){
                        opacity:0;
                    }
                }
                .menu{
                    width: 30px;
                    height: 30px;
                    margin-right: 17px;
                }
            }
            .menuMask{
                position: fixed;
                top: 0;
                right: -740px;
                width: 316px;
                min-height: 100vh;
                max-height: 100vh;
                background-color: rgba(0,0,0,.92);
                overflow-x: hidden;
                overflow-y: auto;
                .close-menu{
                    width: 100%;
                    height: 44px;
                    text-align: right;
                    img{
                        width: 30px;
                        height: 30px;
                        margin-top: 12px;
                        margin-right: 17px;
                    }
                }
                .login_in{
                    width: 100%;
                    height: 100px;
                    overflow: hidden;
                    cursor: pointer;
                    text-align: center;
                    .txt{
                        width: 238px;
                        height: 54px;
                        margin: 0 auto;
                        margin-top: 27px;
                        font-size: 20px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #000000;
                        line-height: 54px;
                        text-align: center;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-loginBg.svg');
                        background-size: 100% 100%;
                        background-position: left top;
                        white-space: nowrap;
                    }
                }
                .logged_in{
                    position: relative;
                    width: 100%;
                    height: 180px;
                    margin-top: 10px;
                    text-align: center;
                    .mask{
                        z-index: -1;
                        position: absolute;
                        top: 28px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 287px;
                        height: 150px;
                        background-color: #452CB6;
                        border-radius: 4px;
                    }
                    .portrait{
                        width: 50px;
                        height: 50px;
                    }
                    .idtxt{
                        width: 144px;
                        height: 30px;
                        margin: 12px auto 5px;
                        font-size: 19px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #C8C4C4;
                        line-height: 28px;
                    }
                    .submenu{
                        display: flex;
                        justify-content: space-between;
                        width: 286px;
                        height: 60px;
                        margin-left: 30px;
                        padding-right: 30px;
                        .myassets,.logout{
                            font-size: 16px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 60px;
                            text-align: left;
                            cursor: pointer;
                        }
                    }
                } 
                .menuul{
                    li{
                        position: relative;
                        width: 286px;
                        // height: 60px;
                        margin-left: 30px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 58px;
                        font-size: 16px;
                        border-bottom: 1px solid rgba(255,255,255,.3);
                        cursor: pointer;
                    }
                    .doc > span{
                        position: absolute;
                        top: 21px;
                        right: 17px;
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        border-left: 2px solid #fff;
                        border-bottom: 2px solid #fff;
                        transform: rotateZ(-45deg);
                    }
                    .doc > span.change{
                        transform: rotateZ(135deg);
                        top: 26px;
                    }
                    .docmenu{
                        width: 100%;
                        margin-top: -10px;
                        margin-bottom: 12px;
                        a{
                            display: block;
                            height: 35px;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            font-weight: 400;
                            color: #999999;
                            line-height: 35px;
                            text-decoration: none;
                        }
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
                        font-family: AlibabaPuHuiTi_2_55_Regular;
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
                            font-family: AlibabaPuHuiTi_2_55_Regular;
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
    .section{
        z-index: 8;
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        width: 100%;
        height: 120vh;
        background: rgba(0,0,0,.2);
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
        position: absolute;
        top: 0;
        width: 100%;
        background-color: #000000;
        height: 1361px;
        .titles{
            display: flex;
            flex-direction: column;
            .left{
                z-index: 1;
                margin-left: 31px;
                .title{
                    position: relative;
                    margin-top: 112px;
                    font-size: 40px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 54px;
                    animation: fadeInUp .8s linear;
                    .purple{
                        height: 68px;
                        font-size: 40px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 68px;
                        background: linear-gradient(163deg, #FB52FC 0%, #8953FF 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
                .round{
                    width: 112px;
                    height: 22px;
                    margin-top: 7px;
                    font-size: 15px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    text-align: center;
                    line-height: 22px;
                    background-color: #FFFFFF;
                }
                .subtitle{
                    width: 326px;
                    height: 60px;
                    margin: 6px 0 33px 0;
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    letter-spacing: 1px;
                    font-weight: 900;
                    color: #04FFA2;
                    line-height: 30px;
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
            .right{
                position: relative;
                height: 348px;
                margin-top: -42px;
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
                .title{
                    position: absolute;
                    right: 27px;
                    bottom: 53px;
                    width: 197px;
                    height: 20px;
                    font-size: 15px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    line-height: 20px;
                    text-align: right;
                }
                .countDown{
                    display: flex;
                    position: absolute;
                    right: 21px;
                    bottom: 20px;
                    width: 168px;
                    height: 32px;
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    line-height: 32px;
                    div{
                        width: 47px;
                        height: 32px;
                        margin: 0 2px;
                        background: #171C28;
                        border-radius: 1px;
                        text-align: center;
                        white-space: nowrap;
                    }
                }
            }
            .nftCard{
                height: 352px;
                ul{
                    display: flex;
                    justify-content: center;
                    margin-bottom: 38px;
                    li{
                        position: relative;
                        width: 94px;
                        height: 89px;
                        margin-right: 9px;
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
                            height: 20px;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 20px;
                            text-align: center;
                            background-color: rgba(255,255,255,.1);
                        }
                    }
                    li:last-child{
                        margin-right: 0;
                    }
                }
                .button{
                    text-align: center;
                    .purchase{
                        width: 100%;
                        height: 74px;
                        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0A0A0A 100%);
                        div{
                            width: 283px;
                            height: 50px;
                            margin: 0 auto;
                            margin-top: 7px;
                            font-size: 18px;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            color: #FFFFFF;
                            line-height: 50px;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/purchase.svg');
                            background-repeat: no-repeat;
                            background-size: 100% auto;
                            background-position: left top;
                        }
                    }
                    .detailbtn{
                        width: 281px;
                        height: 51px;
                        margin: 0 auto ;
                        margin-top: 14px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 51px;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/detailb.svg');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: left top;
                    }
                    .purchase > div:hover{
                        filter: drop-shadow(0 0 0.3rem #AA31DF);
                    }
                    .detailbtn:hover{
                        filter: drop-shadow(0 0 0.3rem #ffffff);
                    }
                }
            }
            .tline{
                width: 100%;
                height: 3px;
                border: 1px solid;
                background: linear-gradient(to right, rgba(50, 211, 123, 0), rgba(40, 18, 69, 1), rgba(6, 255, 161, 0));;
                // border-image: linear-gradient(135deg, rgba(50, 211, 123, 0), rgba(40, 18, 69, 1), rgba(6, 255, 161, 0)) 1 1;
            }
        }
        .nfts{
            background-color: #000000;
            .nfts-wrap{
                .top{
                    height: 170px;
                    background-color: #000000;
                    .title{
                        width: 215px;
                        height: 28px;
                        margin: 17px auto 31px;
                        font-size: 20px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 28px;
                        text-align: center;
                    }
                    .rights{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .select{
                            width: 144px;
                            height: 39px;
                            margin-right: 17px;
                            padding: 0 9px 0 20px;
                            font-size: 17px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 39px;
                            background: #171C28;
                            border-radius: 2px;
                            border: 1px solid #3F4043;
                            outline: none;
                        }
                        .search{
                            display: flex;
                            align-items: center;
                            width: 177px;
                            height: 39px;
                            background: #171C28;
                            border-radius: 2px;
                            border: 1px solid #3F4043;
                            img{
                                width: 21px;
                                height: 22px;
                                margin: 0 7px;
                            }
                            input{
                                width: 140px;
                                height: 24px;
                                font-size: 17px;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #B3B3B3;
                                line-height: 24px;
                                background-color: transparent;
                                border: none;
                                outline: none;
                            }
                        }
                    }

                }
                .sale{
                    background-color: #000000;
                    li{
                        width: 349px;
                        height: 443px;
                        margin-bottom: 11px;
                        padding: 8px 33px;
                        background-image: url('../../../assets/nwboxPhone/nfts-cardbg.svg');
                        background-size: 100% 100%;
                        overflow: hidden;
                        .showarea{
                            position: relative;
                            width: 281px;
                            height: 287px;
                            background: #0F0B17;
                            border: 1px solid #0F0B17;
                            // overflow: hidden;
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
                                width: 200px;
                                height: 30px;
                                font-size: 40px;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #A09EFB;
                                line-height: 30px;
                                text-align: center;
                            }
                            .legen{
                                position: absolute;
                                top: -10px;
                                left: -9px;
                                width: 113px;
                                height: 21px;
                                .bg{
                                    width: 113px;
                                    height: 21px;
                                    background: linear-gradient(224deg, #A240FF 0%, #35FFAD 33%, #D9E1FF 75%, #691EFF 100%);
                                    filter: blur(2px);
                                    clip-path: polygon(0 0, 100% 0, 100% 52%, 92% 100%, 0 100%);
                                }
                                div:nth-child(2){
                                    position: absolute;
                                    top: 0;
                                    width: 113px;
                                    font-size: 15px;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #000000;
                                    line-height: 22px;
                                    text-align: center;
                                }
                            }
                            .id{
                                width: 134px;
                                height: 30px;
                                margin-top: 12px;
                                margin-left: 5px;
                                font-size: 21px;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #6D4AFF;
                                line-height: 30px;
                            }
                            .countdown{
                                width: 158px;
                                height: 56px;
                                margin-top: 182px;
                                margin-left: 116px;
                                padding: 10px 4px 6px 0;
                                background: rgba(64, 64, 64, 0.33);
                                border-radius: 4px;
                                backdrop-filter: blur(2.2308000000000003px);
                                text-align: right;
                                .name{
                                    height: 20px;
                                    font-size: 15px;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #B3B3B3;
                                    line-height: 20px;
                                }
                                .ctime{
                                    height: 20px;
                                    font-size: 15px;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    color: #FFFFFF;
                                    line-height: 20px;
                                }
                            }
                        }
                        .intro{
                            .starttime{
                                height: 28px;
                                margin: 11px 0 12px 5px;
                                font-size: 20px;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #FFFFFF;
                                line-height: 28px;
                            }
                            .desc{
                                display: flex;
                                align-items: center;
                                img{
                                    width: 33px;
                                    height: 33px;
                                    margin-top: 2px;
                                    margin-right: 11px;
                                    margin: 2px 11px 0 3px;
                                }
                                .price{
                                    position: relative;
                                    width: 122px;
                                    height: 46px;
                                    font-size: 33px;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    color: #35F1C8;
                                    line-height: 46px;
                                    span{
                                        position: absolute;
                                        top: 40px;
                                        height: 28px;
                                        font-size: 20px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 28px;
                                    }
                                }
                            }
                        }
                    }
                    li.sale-active{
                        filter: drop-shadow(0 0 7px #8BDDFF);
                    }
                }
            }
            .line{
                width: 100%;
                height: 3px;
                border: 1px solid;
                background: linear-gradient(to right, rgba(50, 211, 123, 0), rgba(40, 18, 69, 1), rgba(6, 255, 161, 0));;
            }
        }
        .recent{
            background-color: #000000;
            overflow: hidden;
            .recent-wrap{
                .title{
                    height: 28px;
                    margin: 26px 0 18px 0;
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 28px;
                    text-align: center;
                }
                ul{
                    margin-bottom: 19px;
                    overflow: hidden;
                    li{
                        display: flex;
                        justify-content: space-between;
                        margin: 0 auto;
                        padding: 16px;
                        width: 315px;
                        height: 133px;
                        margin-bottom: 18px;
                        background: #1A1728;
                        .left{
                            display: flex;
                            .icon{
                                width: 69px;
                                height: 70px;
                                margin-right: 11px;
                                background: #0F0B17;
                                img{
                                    height: 100%;
                                    margin: 0 auto;
                                }
                            }
                            .text{
                                .saletime{
                                    width: 180px;
                                    margin-bottom: 7px;
                                    height: 21px;
                                    font-size: 14px;
                                    font-family: AlibabaPuHuiTi_2_85_Bold;
                                    color: #FFFFFF;
                                    line-height: 20px;
                                    span{
                                        margin-left: 8px;
                                        height: 20px;
                                        font-size: 14px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 20px;
                                    }
                                }
                                .buyer{
                                    width: 120px;
                                    height: 18px;
                                    margin-bottom: 6px;
                                    font-size: 11px;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #35F1C8;
                                    line-height: 16px;
                                    span{
                                        height: 18px;
                                        font-size: 11px;
                                        margin-left: 5px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 16px;
                                    }
                                }
                                .seller{
                                    width: 120px;
                                    height: 18px;
                                    margin-bottom: 6px;
                                    font-size: 11px;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #6D4AFF;
                                    line-height: 16px;
                                    span{
                                        height: 18px;
                                        font-size: 11px;
                                        margin-left: 5px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 16px;
                                    }
                                }
                                .right{
                                    display: flex;
                                    img{
                                        width: 20px;
                                        height: 20px;
                                        margin-top: 4px;
                                        margin-right: 3px;
                                    }
                                    .price{
                                        position: relative;
                                        width: 67px;
                                        height: 25px;
                                        margin-top: 3px;
                                        font-size: 18px;
                                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                                        color: #FFFFFF;
                                        line-height: 25px;
                                        text-align: right;
                                        span{
                                            position: absolute;
                                            top: 6px;
                                            right: -40px;
                                            height: 15px;
                                            font-size: 11px;
                                            font-family: AlibabaPuHuiTi_2_55_Regular;
                                            color: #B3B3B3;
                                            line-height: 15px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .footer{
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 206px;
            // background-color: #000000;
            background: #121122;
            align-items: center;
            overflow: hidden;
            a{
                color: #ffffff;
                text-decoration: none;
            }
            .footer-wrap{
                position: absolute;
                width: 100%;
                height: 100%;
                margin-top: 30px;
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
                        font-family: AlibabaPuHuiTi_2_55_Regular;
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
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 13px;
                    }
            }
        }
    }
</style>
