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
                        <img class="portrait" src="@/assets/nwhome/portrait.svg" ref="clickCursor2" alt="" @click="showloggedFlag = !showloggedFlag,hoverLogged = false" @mouseenter="hoverLogged = true" @mouseleave="hoverLogged = false">
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
    <!-- <div class="section">
        <div class="title">COMING SOON</div>
    </div> -->
    <div class="doc_menu" v-show="showDoc || hoverDoc" ref="cursor" @mouseenter="hoverDoc = true" @mouseleave="hoverDoc = false">
        <div class="wrap">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <a href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopWhitePaper18thFeb20222.pdf" @click="showDoc = false" target="view_window">Whitepaper</a>
            <a href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopTechnologyArchitecture2.pdf" @click="showDoc = false" target="view_window">Green paper</a>
            <a href="https://d3bhixjyozyk2o.cloudfront.net/(new)CyberPOPNewworlddeck(en)2.pdf" @click="showDoc = false" target="view_window">Deck</a>
        </div>
    </div>
    <div class="logged_menu" v-show="showloggedFlag || hoverLogged" ref="cursor2" @mouseenter="hoverLogged = true" @mouseleave="hoverLogged = false">
        <div class="wrap">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <div>My Assets</div>
            <div @click="signout">Log out</div>
        </div>
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
            </div>
            <div class="ecr">
                <div class="search">
                    <div class="title">Search</div>
                    <div class="input">
                        <input type="text" placeholder="Placeholder">
                    </div>
                    <div class="type">
                        <div class="name">Type</div>
                        <div class="check">
                            <div>
                                <input checked=false type="radio" name="type" id="type1" value="character">
                                <label for="type1"><span>Character</span></label>
                            </div>
                            <div>
                                <input type="radio" name="type" id="type2" value="character">
                                <label for="type2"><span>Weapon</span></label>
                            </div>
                            <div>
                                <input type="radio" name="type" id="type3" value="character">
                                <label for="type3"><span>Support card</span></label>
                            </div>
                            <div>
                                <input type="radio" name="type" id="type4" value="character">
                                <label for="type4"><span>Item</span></label>
                            </div>
                            <div>
                                <input type="radio" name="type" id="type5" value="character">
                                <label for="type5"><span>Blind box</span></label>
                            </div>
                        </div>
                    </div>
                    <div class="quality">
                        <div class="name">Quality</div>
                        <div class="check">
                            <div>
                                <input type="radio" name="quality" id="quality1" value="character">
                                <label for="quality1"><span>Legend</span></label>
                            </div>
                            <div>
                                <input type="radio" name="quality" id="quality2" value="character">
                                <label for="quality2"><span>Epic</span></label>
                            </div>
                            <div>
                                <input type="radio" name="quality" id="quality3" value="character">
                                <label for="quality3"><span>Rare</span></label>
                            </div>
                            <div>
                                <input type="radio" name="quality" id="quality4" value="character">
                                <label for="quality4"><span>Common</span></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ecrchange">
                    <div class="top">
                        <div class="type1" :class="ecrType ? 'active' : ''" @click="ecrType = true">ECR 721</div>
                        <div class="type2" :class="!ecrType ? 'active' : ''" @click="ecrType = false">ECR 115</div>
                    </div>
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
        <!-- <img class="logo" v-show="!logoFlag" :src="logoHSrcP" @mouseenter="logoFlag = true" alt="">
        <img class="logo" v-show="logoFlag" :src="logoHSrcG" @mouseleave="logoFlag = false" alt=""> -->
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
    <metamask-a v-if="metaMaskActive" :isInstall="isInstall"></metamask-a>
    <message-a v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-a>
    <popup-a v-show="transferActive" :addressState="inputInfo"></popup-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 

// ecr exchange
let ecrType:any = ref(true);


// NFT transfer
const transferActive = computed(() => store?.state.user?.transferActive);
let inputInfo:any = ref('');
const transferPopup = () => {
    store.dispatch('user/transferChange',true);
}



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


const login = () =>{
    connect();
}

const signout = () => {
    loggined.value = false;
    showloggedFlag.value = false;
    hoverLogged.value = false;
    store.dispatch('user/walletId',0);
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

let menuFlag:any = ref(1);
const changeMenu = (type: any, route?: any) => {
    menuFlag.value = type;
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
}


// message dialog
const showDialog = computed(() => store?.state.user?.showDialog);
let messageState:any = ref(false)
let messageContent:any = ref('')
const mtimer:any = ref(null)
const messageAlert = (flag:any, message:any) => {
    clearTimeout(mtimer.value)
    messageState.value = flag
    store.dispatch('user/showDialog',true)
    messageContent.value = message
    store.dispatch('user/addComingOut', false)
    mtimer.value = setTimeout(() => {
        store.dispatch('user/addComingOut',true)
    },5000)
}


const realId = computed(() => store?.state.user?.realId);
const idTemp = computed(() => store?.state.user?.idTemp);
const id: any = ref(0)
const metaMaskActive = computed(() => store?.state.user?.metaMaskActive);
const isInstall:any = ref(false);

const loggined: any = ref(false)
const connect: any = async () => {
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



onUnmounted(() => {
    window.removeEventListener('click', handleOtherClick, true);
})

onMounted(() => {
    if( realId.value != 0){
        loggined.value = true;
    }
    logoHImport();
    window.addEventListener('click', handleOtherClick, true);
    store.dispatch('user/changeActive', 0)
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',false);// close message dialog
    store.dispatch('user/metaChange',false);
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
                        background-size: 102% 100%;
                        background-position: -.1vw top;
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
                            background-color: #EDFF00;
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
        top: 5.2vw;
        left: 49vw;
        .wrap{
            position: relative;
            width: 8.3vw;
            height: 7.96vw;
            margin-top: .6vw;
            background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
            border: .15vw solid;
            border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
            clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
            .cover{
                position: absolute;
                top: 0vw;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
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
                width: 7vw;
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
                color: rgb(255, 24, 255);
            }
        }
    }
    .logged_menu{
        z-index: 9;
        position: fixed;
        top: 3.8vw;
        right: 1.8vw;
        .wrap{
            width: 9.27vw;
            height: 5.1vw;
            margin-top: 2vw;
            background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
            border: .15vw solid;
            border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
            clip-path: polygon(0 0, 100% 0, 100% 75%, 93% 100%, 0 100%);

            .cover{
                position: absolute;
                top: 0vw;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
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
                color: rgb(255, 24, 255);
                line-height: 1.3vw;
                text-align: right;
                cursor: pointer;
            }
        }
    }
    .assets{
        width: 100%;
        // background-color: #000000;
        background-color: #080707;
        .wrap{
            width: 100%;
            padding-top: 5.5vw;
            background-image: url('../../../assets/nwAssets/bodyBg.png');
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 100% auto;
            .welcome{
                text-align: center;
                .icon{
                    width: 8.75vw;
                    height: 7.6vw;
                    margin: 2.5vw auto 0;
                    text-align: center;
                    background-image: url('../../../assets/nwAssets/portraitBg.svg');
                    background-size: 100% auto;
                    img{
                        width: 6.04vw;
                        height: 6.04vw;
                        margin: .57vw 1.09vw 0 1.61vw;
                    }
                }
                .title{
                    // width: 10.46vw;
                    height: 1.77vw;
                    margin: 1.04vw 0;
                    font-size: 1.25vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 1.45vw;
                    white-space: nowrap;
                }
                .id{
                    // width: 12.13vw;
                    height: 1.04vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    letter-spacing: .02vw;
                    line-height: 1.04vw;
                }
                .desc{
                    width: 47.5vw;
                    height: 2.08vw;
                    margin: 1.14vw auto 3.22vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B1B5C3;
                    line-height: 1.04vw;
                }
            }
            .ecr{
                display: flex;
                // padding-bottom: 13vw;
                .search{
                    width: 15.98vw;
                    height: 56.66vw;
                    // margin: 4.27vw 1.66vw 9.68vw 3.43vw;
                    margin: 4.27vw 1.66vw 15vw 3.43vw;
                    padding: 2.08vw 1.04vw;
                    background: #1B1A22;
                    border-radius: 2px;
                    .title{
                        width: 9.58vw;
                        height: 1.61vw;
                        margin-bottom: .78vw;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 1.19vw;
                    }
                    .input{
                        width: 100%;
                        height: 2.5vw;
                        background: #3F3356;
                        box-shadow: 0px 7px 64px 1px rgba(0, 0, 0, 0.07);
                        border-radius: .31vw;
                        input{
                            width: 100%;
                            height: 100%;
                            text-indent: .83vw;
                            font-size: .78vw;
                            color: #777E90;
                            background-color: transparent;
                            border: none;
                            outline: none;
                        }
                    }
                    .type,.quality{
                        .name{
                            height: 1.61vw;
                            margin: 2.7vw 0 1.25vw 0;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            color: #FFFFFF;
                            line-height: 1.19vw;
                        }
                        .check{
                            div{
                                display: flex;
                                align-items: center;
                                position: relative;
                                width: 100%;
                                height: 1.14vw;
                                input[type="radio"] {
                                    width: 1.14vw;
                                    height: 1.14vw;
                                    opacity: 0;
                                }
                                label {
                                    display: flex;
                                    align-items: flex-start;
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    width: 1.14vw;
                                    height: 1.14vw;
                                    background-color: #ffffff;
                                    border-radius: .31vw;
                                    border: 2px solid #B1B5C3;
                                    span{
                                        height: 1.14vw;
                                        margin-left: 1.7vw;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #FFFFFF;
                                        line-height: 1.04vw;
                                        white-space: nowrap;
                                        cursor: pointer;
                                    }
                                }
                                input:checked + label {
                                    background: #8478FF;
                                    border-radius: .31vw;
                                    border: 2px solid #8478FF;
                                }
                        
                                input:checked + label::after {
                                    content: "";
                                    position: absolute;
                                    top: .06vw;
                                    left: .3vw;
                                    width: .3vw;
                                    height: .56vw;
                                    color: #FFFFFF;
                                    border: 2px solid #fff;
                                    border-top: none;
                                    border-left: none;
                                    transform: rotate(45deg);
                                }
                            }
                        }
                        div + div{
                            margin-top: 1.25vw;
                        }
                    }
                }
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
        // background-color: #000000;
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
</style>
