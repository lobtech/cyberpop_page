<template>
    <div class="home">
        <header>
            <div class="bgdiv"></div>
            <div class="content" id="header">
                <div class="logo">
                    <a :href="path"><img v-show="!logoHFlag" :src="logoHSrcP" @mouseenter="logoHFlag = true" alt=""></a>
                    <a :href="path"><img v-show="logoHFlag" :src="logoHSrcG" @mouseleave="logoHFlag = false" alt=""></a>
                </div>
                <div class="user">
                    <!-- <div class="language" ref="clickCursor3">
                        <img @click="showLanguage = !showLanguage" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-language.svg" alt="">
                        <div class="langUl" v-show="showLanguage" ref="cursor3">
                            <div class="wrap">
                                <div class="cover"></div>
                                <div class="coverborder"></div>
                                <ul>
                                    <li :class="select == 'us' ? 'active' : ''" @click="selectLang('us')">{{$t('message.common.language1')}}</li>
                                    <li :class="select == 'cn' ? 'active' : ''" @click="selectLang('cn')">{{$t('message.common.language2')}}</li>
                                    <li :class="select == 'kr' ? 'active' : ''" @click="selectLang('kr')">{{$t('message.common.language3')}}</li>
                                </ul>
                            </div>
                        </div>
                    </div> -->
                    <div class="login_in" v-if="!loggined" @click="login()" @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">
                        <div class="txt">{{$t('message.common.wallet')}}</div>
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
                            <span>{{$t('message.common.menu1')}}</span>
                        </li>
                        <li @mouseover="menuHover(1)" @click="changeMenu(1, '/mining')" :class="{'active': active == 1}">
                            <span>{{$t('message.common.menu2')}}</span>
                        </li>
                        <li @mouseover="menuHover(2)" @click="changeMenu(2, '/mystery')" :class="{'active': active == 2}">
                            <span>{{$t('message.common.menu3')}}</span>
                        </li>
                        <!-- <li @mouseover="menuHover(3)" @click="changeMenu(3, '/cyberspace')" :class="{'active': active == 3}">
                            <span>Cyberspace</span>
                        </li> -->
                        <li @mouseover="menuHover(4)" @mouseleave="hoverDoc = false" ref="clickCursor" @click="showDoc = !showDoc,hoverDoc = false" :class="{'active': active == 4}">
                            <span @mouseenter="hoverDoc = true">{{$t('message.common.menu4')}}</span>
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
            <a href="https://d3bhixjyozyk2o.cloudfront.net/(new)CyberPOPNewworlddeck(en).pdf.pdf" @click="showDoc = false" target="view_window">{{$t('message.common.doc_whitePaper')}}</a>
            <!-- <a href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopTechnologyArchitecture2.pdf" @click="showDoc = false" target="view_window">{{$t('message.common.doc_greenPaper')}}</a> -->
            <a href="https://d3bhixjyozyk2o.cloudfront.net/(new)CyberPOPNewworlddeck(en).pdf.pdf" @click="showDoc = false" target="view_window">{{$t('message.common.doc_deck')}}</a>
        </div>
    </div>
    <div class="logged_menu" v-show="showloggedFlag || hoverLogged" ref="cursor2" @mouseenter="hoverLogged = true" @mouseleave="hoverLogged = false">
        <div class="wrap">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <div @click="toAssets()">{{$t('message.common.login_myAssets')}}</div>
            <div @click="signout">{{$t('message.common.login_logout')}}</div>
        </div>
    </div>
    <metamask-a v-if="metaMaskActive"></metamask-a>
    <!-- <message-a v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-a> -->
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed, getCurrentInstance, readonly, ref } from 'vue'
import store from '@/store'
import Web3 from '@/tools/web3' 
import {  useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { proxy } = getCurrentInstance() as any;
const router = useRouter()


let abi:any = ref(null);
let address:any = ref(null);
let dao_abi:any = ref(null);
let dao_address:any = ref(null);
const props = defineProps({
    path: String, 
    type: Number
})


// language
let showLanguage:any = ref(false);

const { locale, t } = useI18n()
let select:any = ref('us');
const selectLang = (index:any) => {
    showLanguage.value = false
    select.value = index

    locale.value = index
    localStorage.setItem('lang', index)
    // console.log( proxy.$t('message.common.string_lang') );
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


const active = computed(() => store?.state.user?.active);
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

let menuFlag:any = ref(props.type);
const changeMenu = (type: any, route?: any) => {
    menuFlag.value = type;
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
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
//language
const cursor3:any = ref(null)
const clickCursor3:any = ref(null)

const handleOtherClick = (e:any) => {
    if( cursor.value.contains(e.target) || clickCursor.value.contains(e.target)){
        showloggedFlag.value = false;
        showLanguage.value = false;
        return
    }else{
        showDoc.value = false;
    }
    // if( cursor3.value.contains(e.target) || clickCursor3.value.contains(e.target)){
    //     showDoc.value = false;
    //     showloggedFlag.value = false;
    //     return
    // }else{
    //     showLanguage.value = false;
    // }
    if( loggined.value ){
        if( cursor2.value.contains(e.target) || clickCursor2.value.contains(e.target) ){
            showDoc.value = false;
            showLanguage.value = false;
            return
        }else{
            showloggedFlag.value = false;
        }
    }
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


const realId = computed(() => store?.state.user?.realId);
const idTemp = computed(() => store?.state.user?.idTemp);
const id: any = ref(0)
const metaMaskActive = computed(() => store?.state.user?.metaMaskActive);


const loggined = computed(() => store?.state.user?.loggined);
const connect: any = async () => {
    const ismessage: any = await Web3.hasMetaMask()

    if( ismessage == 'No install' ){
        store.dispatch('user/metaChange',true);
        store.dispatch('user/metaChangeAni',true);
        store.dispatch('user/checkInstall',false);
    }else{
        store.dispatch('user/metaChange',true);
        store.dispatch('user/metaChangeAni',true);
        store.dispatch('user/checkInstall',true);
        const [accounts]: any = await Web3.login().then((res: any) => {
            store.dispatch('user/metaChange',false);
            store.dispatch('user/metaChangeAni',false);
            store.dispatch('user/walletloggined',true);
            Web3.readJSON(proxy); //////
            return res;
        })
        
        id.value = accounts;
        let len = id.value.length-1;
        id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
        store.dispatch('user/connectWallet',{realId:id.value, idTemp:accounts});// 存放星号id、完整id
        // messageAlert(true, proxy.$t('message.common.mess_succ'))
    }
}



const login = () =>{
    connect();
}

const signout = () => {
    showloggedFlag.value = false;
    hoverLogged.value = false;
    store.dispatch('user/connectWallet',{realId: -1});
    store.dispatch('user/walletloggined',false);
    store.dispatch('user/showDialog',false);

    if( proxy.$route.path == '/assets' ){
        router.push('/');
    }
}


const toAssets = () => {
    router.push('/assets');
}



onUnmounted(() => {
    window.removeEventListener('click', handleOtherClick, true);
})


onMounted(() => {
    if( realId.value != -1){
        store.dispatch('user/walletloggined',true);
    }
    logoHImport();
    window.addEventListener('click', handleOtherClick, true)
    store.dispatch('user/changeActive', props.type)
    store.dispatch('user/metaChange',false)
    store.dispatch('user/showDialog',false);
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
            color: #fff;
            .bgdiv{
                position: absolute;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg , rgba(0,0,0,1) 0%, rgba(0, 0, 0, 1) 20% ,rgba(0, 0, 0, .9) 26%,
                        rgba(23, 10, 71, .96) 50%,rgba(10, 8, 15, .9) 65%, rgba(40, 33, 65,.9) 78%,rgba(0,0,0,1) 100%);
                // opacity: .84;
            }
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
                        .langUl{
                            position: absolute;
                            top: 4.4vw;
                            left: -4.22vw;
                            .wrap{
                                position: absolute;
                                width: 8vw;
                                height: 8vw;
                                background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                                border: .15vw solid;
                                border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
                                clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
                                text-align: right;
                                .cover{
                                    position: absolute;
                                    top: 0;
                                    width: 100%;
                                    height: 100%;
                                    background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                                    clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
                                }
                                .coverborder{
                                    z-index: -1;
                                    display: inline-block;
                                    position: absolute;
                                    bottom: -.15vw;
                                    right: -.15vw;
                                    content: '';
                                    width: 1.6vw;
                                    height: 1.6vw;
                                    background-color: #2d2942;
                                }
                                ul{
                                    position: absolute;
                                    width: 100%;
                                    padding: .2vw .4vw;
                                    font-size: .93vw;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #fff;
                                    li{
                                        width: 6.8vw;
                                        padding: .6vw .8vw .6vw 0;
                                        font-size: .93vw;
                                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                        color: #FFFFFF;
                                        cursor: pointer;
                                    }
                                    li + li{
                                        border-top: 2px solid #534968;
                                    }
                                    li:hover{
                                        color: rgb(255, 24, 255);
                                    }
                                    li.active{
                                        color: rgb(255, 24, 255);
                                    }
                                }
                            }
                        
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
            // height: 7.96vw;
            height: 5.1vw;
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
                width: 7.43vw;
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
                right: 1.7vw;
                bottom: .9vw;
                width: 7.43vw;
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
    @media screen {
        @media (max-width: 1000px) {
            .langUl{
                height: 9vw !important;
            }
        }
        @media (max-width: 900px) {
            .langUl{
                height: 9.4vw !important;
                li{
                    margin-left: .3vw !important;
                }
            }
        }
    }

</style>
