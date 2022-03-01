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
    <div class="assets">
        <div class="wrap">
            <div class="welcome">
                <div class="icon">
                    <img src="@/assets/nwAssets/portrait.svg" alt="">
                </div>
                <div class="title">Hi, Wade Warren</div>
                <div class="id">0xab5801a7d39...259aec9b</div>
                <div class="desc">Your Cyberpop NFT item, which changed in my assets, will be synchronized to opensea and within the game in Multi-
                    terminal. Any small act you do in Cyberpop New World is valuable to Cyberpop DAO.
                </div>
                <div class="search">
                    <div class="input">
                        <input type="text" placeholder="Keywords, name, number">
                        <img src="@/assets/nwAssets/search-icon.svg" alt="">
                    </div>
                    <div class="menuSelect">
                        <ul class="token">
                            <li>ECR 721</li>
                            <li>
                                <div @click="ecrType = true">ECR 721</div>
                                <div @click="ecrType = false">ECR 115</div>
                            </li>
                        </ul>
                        <ul class="type">
                            <li>Character,Weapon,Support Card,Item,Blind Box</li>
                            <li>
                                <div>All type</div>
                                <div>Character</div>
                                <div>Weapon</div>
                                <div>Support Card</div>
                                <div>Item</div>
                                <div>Blind Box</div>
                                <div>
                                    <div class="cancel">CANCEL</div>
                                    <div class="ok">OK</div>
                                </div>
                            </li>
                        </ul>
                        <ul class="quality">
                            <li>All quality</li>
                            <li>Legend</li>
                            <li>Epic</li>
                            <li>Rare</li>
                            <li>Common</li>
                            <li>
                                <div class="cancel">CANCEL</div>
                                <div class="ok">OK</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="ecr">
                <div class="ecrchange">
                    <div class="ecr721" v-show="ecrType">
                        <ul class="prince">
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Prince of Shadows</div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup()">TRANSFER</div>
                                    <div class="sell">SELL</div>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Prince of Shadows</div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup()">TRANSFER</div>
                                    <div class="sell">SELL</div>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Prince of Shadows</div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup()">TRANSFER</div>
                                    <div class="sell">SELL</div>
                                </div>
                            </li>
                        </ul>
                        <ul class="box">
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Mystery box</div>
                                <div class="btn">
                                    <div class="unpack">UNPACK</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="ecr115" v-show="!ecrType">

                    </div>
                </div>
            </div>
            <!-- <div class="nothing">
                <div class="txt">Oops, There‘s nothing left here. Go to <span>Home page</span></div>
                <img src="@/assets/nwAssets/nothing.svg" alt="">
            </div> -->
        </div>
    </div>
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

</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { log } from 'util';



// ecr exchange
let ecrType:any = ref(true);


// NFT transfer
const transferActive = computed(() => store?.state.user?.transferActive);
let inputInfo:any = ref('');
const transferPopup = () => {
    store.dispatch('user/transferChange',true);
}




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

const login = () =>{
    connect();
}

const signout = () => {
    loggined.value = false;
    showMenuAni.value = false;
    store.dispatch('user/walletId',0);
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
const loggined: any = ref(false)
const connect: any = async () => {
    showMenuAni.value = false;
    const [accounts]: any = await Web3.login().then((res: any) => {
        if( res == 'Please install a wallet.' ){
            messageAlert(0, res)
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




onMounted(() => {
    if( realId.value != 0){
        loggined.value = true;
    }
    logoHImport();
    store.dispatch('user/changeActive', 0);
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
    .assets{
        width: 100%;
        // background-color: #000000;
        background-color: #080707;
        .wrap{
            width: 100%;
            padding-top: 55px;
            // background-image: url('../../../assets/nwAssets/bodyBg.png');
            // background-repeat: no-repeat;
            // background-position: left top;
            // background-size: 100% auto;
            .welcome{
                text-align: center;
                .icon{
                    width: 81px;
                    height: 72px;
                    margin: 36px auto 0;
                    text-align: center;
                    background-image: url('../../../assets/nwAssets/portraitBg.svg');
                    background-size: 100% auto;
                    img{
                        width: 58px;
                        height: 58px;
                        margin: 5px 12px 0 11px;
                    }
                }
                .title{
                    // width: 151px;
                    height: 20px;
                    margin: 12px 0;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 20px;
                    white-space: nowrap;
                }
                .id{
                    // width: 184px;
                    height: 20px;
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 16px;
                }
                .desc{
                    width: 303px;
                    height: 64px;
                    margin: 12px auto 28px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B1B5C3;
                    line-height: 16px;
                }
                .search{
                    .input{
                        width: 303px;
                        height: 40px;
                        margin: 0 auto;
                        border-radius: 2px 2px 2px 2px;
                        border: 2px solid #8478FF;
                        input[type='text']{
                            width: 253px;
                            height: 100%;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #8478FF;
                            line-height: 16px;
                            background-color: transparent;
                            border: none;
                            outline: none;
                        }
                        input::-webkit-input-placeholder { 
                            color: #8478FF;
                        }
                        input:-moz-placeholder { 
                            color: #8478FF;
                        }
                        input::-moz-placeholder {
                            color: #8478FF;
                        }
                        input:-ms-input-placeholder {
                            color: #8478FF;
                        }
                        img{
                            width: 16px;
                            height: 16px;
                            margin-left: 10px;
                            vertical-align: middle;
                        }
                    }
                    .menuSelect{
                        display: flex;
                        margin-left: 26px;
                        margin-top: 24px;
                        .token,.type{
                            width: 109px;
                            margin-right: 16px;
                            li{
                                width: 100%;
                                height: 40px;
                                font-size: 14px;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                color: #FFFFFF;
                                line-height: 40px;
                                text-align: left;
                                text-indent: 12px;
                            }
                            li:first-child{
                                background: #8478FF;
                                background-image: url('../../../assets/nwAssets/dropdown.svg');
                                background-repeat: no-repeat;
                                background-position: 77px center;
                                background-size: 20px 20px;
                            }
                            li:last-child{
                                display: flex;
                                flex-direction: column;
                                justify-content: space-around;
                                align-items: center;
                                width: 148px;
                                height: 112px;
                                padding: 10px;
                                margin-top: 8px;
                                background: #514A9C linear-gradient(221deg, rgba(132, 120, 255, 0.54) 0%, rgba(12, 9, 17, 0) 100%) linear-gradient(77deg, rgba(120, 34, 187, 0.19) 0%, rgba(12, 9, 17, 0) 100%);
                                box-shadow: -4px 4px 2px 1px rgba(0, 0, 0, 0.25);
                                border-radius: 2px 2px 2px 2px;
                                opacity: 0.98;
                                background-color: #514A9C;
                                div{
                                    height: 18px;
                                    margin-right: 6px;
                                    font-size: 14px;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    color: #FFFFFF;
                                    line-height: 18px;
                                }
                                div:nth-child(1){
                                    
                                }
                                div:nth-child(2){
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                }
                            }
                        }
                        .type{
                            width: 288px;
                        }
                    }
                }
            }
            .ecr{
                display: flex;
                // padding-bottom: 13vw;
                .ecrchange{
                    width: 57.76vw;
                    .top{
                        display: flex;
                        justify-content: center;
                        margin-bottom: 2.45vw;
                        div{
                            height: 1.87vw;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            color: #ffffff;
                            line-height: 1.19vw;
                            cursor: pointer;
                        }
                        .type1{
                            margin-right: 2vw;
                        }
                        div.active{
                            color: #DE2DCF;
                            background-image: url('../../../assets/nwAssets/ercbot-bg.svg');
                            background-position: center bottom;
                            background-repeat: no-repeat;
                            background-size: 100% auto;
                        }
                    }
                    .ecr721,.ecr115{
                        ul{
                            display: flex;
                            margin-bottom: 2.65vw;
                            li{
                                width: 17.96vw;
                                height: 23.22vw;
                                padding: .78vw .83vw;
                                background-image: url('../../../assets/nwAssets/ecrcard-bg.svg');
                                background-repeat: no-repeat;
                                background-position: center;
                                background-size: 100% 100%;
                                img{
                                    width: 16.61vw;
                                    height: 16.4vw;
                                }
                                .name{
                                    height: 1.61vw;
                                    margin: 1.04vw 0 1.6vw 0;
                                    font-size: 1.04vw;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #FFFFFF;
                                    line-height: 1.19vw;
                                }
                                .btn{
                                    display: flex;
                                    justify-content: center;
                                    div{
                                        height: 2.5vw;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_115_Black;
                                        color: #FFFFFF;
                                        line-height: 2.5vw;
                                        text-align: center;
                                        cursor: pointer;
                                    }
                                    .transfer{
                                        width: 8.07vw;
                                        background-image: url('../../../assets/nwAssets/blackbg.svg');
                                        background-position: left top;
                                        background-size: 100% auto;
                                    }
                                    .sell{
                                        width: 8.22vw;
                                        background-image: url('../../../assets/nwAssets/purplebg.svg');
                                        background-position: left top;
                                        background-size: 100% auto;
                                    }
                                    .unpack{
                                        width: 10.93vw;
                                        height: 2.91vw;
                                        margin-top: -.4vw;
                                        line-height: 2.91vw;
                                        background-image: url('../../../assets/nwAssets/unpackbg.svg');
                                        background-position: left top;
                                        background-size: 100% auto;
                                    }
                                }
                            }
                            li + li{
                                margin-left: 1.92vw;
                            }
                        }
                    }
                }
            }
            .nothing{
                text-align: center;
                padding-bottom: 7.55vw;
                .txt{
                    width: 47.5vw;
                    height: 1.04vw;
                    margin: -2.18vw auto 7.65vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B1B5C3;
                    line-height: 1.04vw;
                    text-align: center;
                    span{
                        color: #04FFA2;
                    }
                }
                img{
                    width: 11.71vw;
                    height: 12.5vw;
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
        background-color: #121122;
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
           text-align: center;
           margin-top: 30px;
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
</style>
