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
    <div class="termas">
        <div class="termas-wrap">
            <div class="title">Terms of use</div>
            <ul>
                <li>
                    <div class="subtitle">1. ACCEPTANCE OF TERMS.</div>
                    <div class="content">
                        Cyberpop lab Ltd. provides the website https://cyberpop.online(the “Site”) and the game “Cyberpop” (the “Game”). Please read these 
                        Terms of Use (the “Terms” or “Terms of Use”) carefully before using the Game and the Site. By using or otherwise accessing the Game 
                        and the Site, you: (1) accept and agree to be bound by these Terms; (2) accept that the Game is still in testing phase and that you 
                        use at your own risk, as further explained in Section 2 below; (3) represent that you are old enough to use the Game and the Site 
                        pursuant to Sections 3 and 8 below; (4) consent to the collection, use, disclosure and other handling of information as described 
                        in our Privacy Policy, available at https://cyberpop.online/privacy and (5) accept and agree to any additional terms, rules and 
                        conditions of participation issued by Cyberpop lab from time to time. If you do not agree to the Terms, then you must not access or 
                        use the Game or the Site. BTS has no continued obligation to operate the Game and the Site in the future, at its exclusive discretion, 
                        with no liability whatsoever in connection thereto.
                    </div>
                </li>
                <li>
                    <div class="subtitle">2. TESTING DISCLAIMER AND MODIFICATION OF TERMS OF USE.</div>
                    <div class="content">
                        The Game is still in testing phase and is provided on an “as is” and “as available” basis and may contain defects and software bugs. You are advised to safeguard important data, property and content, to use caution, and to not rely in any way on the correct or secure functionality or performance of the Game. Except for Section 17, providing for binding arbitration and waiver of class action rights, Cyberpop lab reserves the right, at its sole discretion, to modify or replace the Terms of Use at any time. The most current version of these Terms will be posted on our Site. You shall be responsible for reviewing and becoming familiar with any such modifications. Use of the Game by you after any modification to the Terms constitutes your acceptance of the Terms of Use as modified.
                    </div>
                </li>
                <li>
                    <div class="subtitle">3. ELIGIBILITY.</div>
                    <div class="content">
                        You hereby represent and warrant that you are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations and warranties set forth in these Terms and to abide by and comply with these Terms. Big Time Studios operates a global platform and by accessing the Site or Game, you are representing and warranting that you are 13 years old or older.
                    </div>
                </li>
                <li>
                    <div class="subtitle">4. ACCOUNT ACCESS AND SECURITY.</div>
                    <div class="content">
                        For accessing the Game you need to create an account (the “Account”), with a user name and a password.<br/>

                        For making deposits or withdrawals from the Vault you need a third party private key manager selected by 
                        you (i.e., a Web3 Provider such as Fortmatic). You and the third party private key manager you select are 
                        entirely responsible for security of the withdrawals and deposits made into and out of the Vault.<br/>
                        Cyberpop lab bears no responsibility for any breach of security or unauthorized access to your Account. 
                        You are advised to: (a) avoid any use of the same password with your selected third party private key manager 
                        that you have ever used outside of the third party private key manager; and (b) keep your password and any 
                        related secret information secure and confidential and do not share them with anyone else.<br/>
                        You are solely responsible for all activities conducted through your Account whether or not you authorize 
                        the activity. In the event that fraud, illegality or other conduct that violates this Agreement is discovered 
                        or reported (whether by you or someone else) that is connected with your Account, Cyberpop lab may terminate 
                        your Account (or Accounts) as described in Section 14.<br/>
                        You are solely responsible for maintaining the confidentiality of your password and for restricting access to 
                        your devices. You are solely responsible for any harm resulting from your disclosure, or authorization of the 
                        disclosure, of your password or from any person's use of your password to gain access to your Account.<br/>
                        Any loss or compromise of your electronic device or your security details may result in unauthorised access 
                        to your Account by third-parties and the loss or theft of any NFT held in your Vault Account. You must keep 
                        your security details safe at all times.<br/>
                        You must immediately notify BTS of any unauthorized use of, or access to, your Account, password, or other 
                        breach of security at admin@cyberpop.online.<br/>
                    </div>
                    <div class="content">
                        Please note that if you lose the password of your third party private key manager, you accept that Cyberpop 
                        lab will be unable to remedy any issues that arise from that incident.<br/>
                        Cyberpop lab will not be liable for any loss or damage (of any kind and under any legal theory) to you or any 
                        third party arising from your inability or failure for any reason to comply with any of the foregoing obligations, 
                        or for any reason whatsoever, except fraud on our part.<br/>
                        Cyberpop lab cannot and will not be liable for any loss or damage arising from your sharing or other loss of your password, private key or related information, or any other damage or loss arising from unauthorized access to your Account.
                    </div>
                </li>
            </ul>
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

const login = () =>{
    connect();
}

const signout = () => {
    loggined.value = false;
    showloggedFlag.value = false;
    hoverLogged.value = false;
    store.dispatch('user/walletId',0);
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
    store.dispatch('user/changeActive', 0);
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
    .termas{
        padding-top: 5.5vw;
        background-color: #000000;
        color: #fff;
        .termas-wrap{
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
            }
        }
    }
    .footer{
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
