<template>
    <div class="home">
        <header>
            <div class="content" id="header">
                <img class="logo" v-show="!logoHFlag" :src="logoHSrcP" @mouseenter="logoHFlag = true" alt="">
                <img class="logo" v-show="logoHFlag" :src="logoHSrcG" @mouseleave="logoHFlag = false" alt="">
                <div class="user">
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
                        <img class="portrait" src="@/assets/nwhome/portrait.svg" ref="clickCursor2" alt="" @click="showloggedFlag = !showloggedFlag" >
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
                        <li @mouseover="menuHover(3)" @click="changeMenu(3, '/cyberspace')" :class="{'active': active == 3}">
                            <span>Cyberspace</span>
                        </li>
                        <li @mouseover="menuHover(4)" ref="clickCursor" @click="showDoc = !showDoc" :class="{'active': active == 4}">
                            <span>Doc</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
    <div class="doc_menu" v-show="showDoc" ref="cursor">
        <div class="cover"></div>
        <div class="coverborder"></div>
        <a href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopWhitePaper18thFeb2022.pdf" target="view_window">Whitepaper</a>
        <a href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopTechnologyArchitecture.pdf" target="view_window">Green paper</a>
        <a href="https://d3bhixjyozyk2o.cloudfront.net/(new)CyberPOPNewworlddeck(en).pdf" target="view_window">Deck</a>
    </div>
    <div class="logged_menu" v-show="showloggedFlag" ref="cursor2">
        <div class="cover"></div>
        <div class="coverborder"></div>
        <div>My Assets</div>
        <div>Log out</div>
    </div>
    <div class="privacy">
        <div class="privacy-wrap">
            <div class="title">Privacy Policy</div>
            <ul>
                <li>
                    <div class="subtitle">1. INTRODUCTION</div>
                    <div class="content">
                        1.1 cyberpop lab recognizes that people who use our products value their privacy. This Privacy Policy details important information regarding the collection, use and disclosure of User information collected on the cyberpop website located at https://cyberpop.online (the “Site”), and our game. we provides this Privacy Policy to help you understand how your personal information is used by us and your choices regarding our use of it. By using the Site or Game, you agree that we can collect, use, disclose, and process your information as described in this Privacy Policy. This Privacy Policy only applies to the Site and Game, and not to any other websites, products or services you may be able to access or link to via the Site or Game. We encourage you to read the privacy policies of any other websites you visit before providing your information to them. While our values will not shift, the Site and Game will evolve over time, and this Privacy Policy will change to reflect that evolution. If we make changes, we will notify you by revising the date at the top of this Privacy Policy. In some cases, if we make significant changes, we may give you additional notice by adding a statement to our homepage. We encourage you to review this Privacy Policy periodically to stay informed about our practices.
                        Some third-party providers may place cookies or pixels - small data files stored on your hard drive or in device memory - on your browser or hard drive. Note that this Privacy Policy does not cover the use of cookies or pixels by such third parties. Most web browsers are set to accept cookies and pixels by default, but you can usually set your browser to remove or reject browser cookies or pixels. If you do choose to remove or reject cookies or pixels, however, your ability to use the Site or the Game might be affected.
                    </div>
                    <div class="content">
                        1.2 This Privacy Policy should be read in conjunction with our Terms of Use. By accessing the Game, you are consenting to the information collection and use practices described in this Privacy Policy.    
                    </div>
                    <div class="content">
                        1.3 Your use of the Game and any personal information you provide through the Game remains subject to the terms of this Privacy Policy and our Terms of Use, as each may be updated from time to time.
                    </div>
                    <div class="content">
                        1.4 Any questions, comments or complaints that you might have should be emailed to <a href="mailto:business@cyberpop.online" target="view_window">business@cyberpop.online</a>
                    </div>
                </li>
                <li>
                    <div class="subtitle">2. INFORMATION WE COLLECT</div>
                    <div class="content">
                        The personal information we collect from you generally may include:
                    </div>
                    <div class="content">
                        2.1 Network information regarding transactions, including, among other things, the type of device you use, access times, hardware model, MAC address, IP address, operating system and version, and other unique device identifiers.
                    </div>
                    <div class="content">
                        2.2. Information about plugins you might be using, included but not limited to those related to the management of cryptocurrency assets and any information provided by them., and your Ethereum public address.
                    </div>
                    <div class="content">
                        2.3 We may receive network information from you as a result of your interaction with our Game.
                    </div>
                    <div class="content">
                        2.4 Ethereum public address-2.4 When you register as a user, we may collect the following personal information from you: your email address and user name. We may also receive personal information from third parties, when you sign up to services provided by cyber pop through a social network; in such occasions, we may receive the personal information you have made available to such third parties, and which you have allowed for them to relay via your privacy settings.
                    </div>
                </li>
                <li>
                    <div class="subtitle">3. THE WAY USES YOUR PERSONAL INFORMATION</div>
                    <div class="content">
                        3.1 As with nearly all interactions that take place on the World Wide Web, our servers may receive information by virtue of your interaction with them, including but not limited to IP Addresses.
                    </div>
                    <div class="content">
                        3.2 Some of the services in our Game (such as the Marketplace and the Vault) require permissions that could potentially be used to access additional personal information. Such permissions are used for an extremely limited technical purpose for allowing the Game to properly interact with your browser. No additional information is obtained beyond what is necessary to provide the Game. No information received is shared with any third-party except those affiliated with BTS or as required for provision of the Game.
                    </div>
                    <div class="content">
                        3.3 Public blockchains provide transparency into transactions and cyberpop is not responsible for preventing or managing information broadcasted on a blockchain.
                    </div>
                </li>
                <li>
                    <div class="subtitle">4. WHAT WE DO WITH INFORMATION WE COLLECT</div>
                    <div class="content">
                        4.1 We may use the information we collect in the following ways:
                    </div>
                    <div class="content">
                        To analyze trends for how the Site and Game are being used;<br/>
                        To improve the Site and Game;<br/>
                        To help personalize your experience of the Site and Game; and<br/>
                        If you gave us your contact information, we may use that information to contact you to send you technical notices, updates, confirmations, security alerts, to provide support to you, to tell you about other products and services that we think might interest you, or to respond to your comments or questions.<br/>
                        4.2 We may share the information we collect with third parties who need to access it in order to perform work on our behalf, including doing things like helping us make the Site or Game available, including without limitation payment services providers, anti-fraud services providers, or providing analytics services for us. We work hard to ensure that these third parties only access and use your information as necessary to perform their functions.
                    </div>
                    <div class="content">
                        4.3 We may create aggregations and anonymizations that contain your information in a way that does not directly identify you. We may use and/or share those aggregations and anonymizations for a variety of purposes related to the Site, the Game, or our company and its business.
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer">
        <img class="logo" v-show="!logoFlag" :src="logoHSrcP" @mouseenter="logoFlag = true" alt="">
        <img class="logo" v-show="logoFlag" :src="logoHSrcG" @mouseleave="logoFlag = false" alt="">
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
    <message-a v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 


// docMenu
let showDoc:any = ref(false); 
const cursor:any = ref(null)
const clickCursor:any = ref(null)
//logged_menu
let showloggedFlag:any = ref(false)
const cursor2:any = ref(null)
const clickCursor2:any = ref(null)

const handleOtherClick = (e:any) => {
    if( cursor.value.contains(e.target) || clickCursor.value.contains(e.target)){
        showloggedFlag.value = false;
        return
    }else{
        showDoc.value = false;
    }
    if( cursor2.value.contains(e.target) || clickCursor2.value.contains(e.target)){
        showDoc.value = false;
        return
    }else{
        showloggedFlag.value = false;
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




let logoHSrcP:any = ref('@/assets/nwhome/logo_101.png'); 
let logoHSrcG:any = ref('@/assets/nwhome/logo.gif'); 
const logoHImport = async() => {
    const logoHSrcPng:any = await import('@/assets/nwhome/logo_101.png');
    const logoHSrcGif:any = await import('@/assets/nwhome/logo.gif');
    logoHSrcP.value = logoHSrcPng.default;
    logoHSrcG.value = logoHSrcGif.default;
}

// header
let logoHFlag: any = ref(false) ;
// const changeHGif = () => {
//     logoHFlag.value = true;
// }
// const stopHGif = () => {
//     logoHFlag.value = false;
// }

// footer
let logoFlag: any = ref(false) ;
// const changeGif = () => {
//     logoFlag.value = true;
// }
// const stopGif = () => {
//     logoFlag.value = false;
// }





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
    menuFlag.value = type;
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
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


const id: any = ref(0)
const idTemp: any = ref(0)
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
    idTemp.value = accounts;
    id.value = accounts;
    let len = id.value.length-1;
    id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
}


onUnmounted(() => {
    window.removeEventListener('click', handleOtherClick, true);
})

onMounted(() => {
    connect();
    logoHImport();
    window.addEventListener('click', handleOtherClick, true);
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
                    // margin-top: .88vw;
                    border: none;
                }
                .logo[src=""],.logo:not([src]){
                    opacity:0;
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
                    .active{
                        // background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-titleBg.svg');
                        // background-repeat: no-repeat;
                        // background-size: 180% 120%;
                        // background-position: -3vw bottom;
                        background: linear-gradient(180deg, rgba(0,0,0,0),rgba(255, 24, 255, 0) 65%, rgba(255, 24, 255, 0.62) 100%);
                    }  
                }
            }
        }
    }
    .doc_menu{
        z-index: 9;
        position: fixed;
        top: 4.2vw;
        left: 55vw;
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
        }
    }
    .privacy{
        padding-top:  5.5vw;
        background-color: #000000;
        color: #fff;
        .privacy-wrap{
            padding: 2.7vw 19.375vw 4.11vw;
            .title{
                line-height: 2.5vw;
                font-size: 1.77vw;
                color: #FFFFFF;
                font-family: AlibabaPuHuiTi_2_115_Black;
                text-align: center;
            }
            .subtitle{
                margin-bottom: .9vw;
                font-size: .88vw;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 2.5vw;
            }
            .content{
                margin-bottom: 1.2vw;
                font-size: .88vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                line-height: 1.4vw;
                color: #FFFFFF;
                a{
                    color: #04F39B;
                    text-decoration: none;
                }
            }
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
        font-family: AlibabaPuHuiTi_2_55_Regular;
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
