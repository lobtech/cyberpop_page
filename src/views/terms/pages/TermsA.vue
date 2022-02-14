<template>
    <div class="home">
        <header>
            <div class="content" id="header">
                <img class="logo" :src="logoHSrc" @mouseover="changeHGif()" @mouseout="stopHGif()" alt="">
                <!-- <img class="logo" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-logo.svg" alt="logo"> -->
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
                        <li @mouseover="menuHover(0)" @click="changeMenu(0, '/')" :class="{'active': active == 0}">Home</li>
                        <li @mouseover="menuHover(1)" @click="changeMenu(1, '/mining')" :class="{'active': active == 1}">Mining</li>
                        <!-- <li @mouseover="menuHover(2)" @click="changeMenu(2)" :class="{'active': active == 2}">Whitepaper</li> -->
                        <li @mouseover="menuHover(2)" @click="openPaper()">Whitepaper</li>
                        <li @mouseover="menuHover(3)" @click="changeMenu(3, '/mystery')" :class="{'active': active == 3}">Mystery Box</li>
                        <li @mouseover="menuHover(4)" @click="changeMenu(4, '/cyberspace')" :class="{'active': active == 4}">Cyberspace</li>
                    </ul>
                </div>
            </div>
        </header>
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
        <img class="logo" :src="logoSrc" @mouseover="changeGif()" @mouseout="stopGif()" alt="">
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
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 


// whitepaper
const openPaper = () => {
    window.open("./CyberpopWhitePaper.pdf");
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


//header
let logoHSrc: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhome/logo_101.png') ;
const changeHGif = () => {
    logoHSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/logo.gif';
}
const stopHGif = () => {
    logoHSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/logo_101.png';
}

// footer
let logoSrc: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhome/logo_101.png') ;
const changeGif = () => {
    logoSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/logo.gif';
}
const stopGif = () => {
    logoSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome//logo_101.png';
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

let menuFlag:any = ref(3);
const changeMenu = (type: any, route?: any) => {
    menuFlag.value = type;
    if(type == 2) {
        window.open('https://medium.com/@Cyberpopnewworld')
        return
    }
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
}




const id: any = ref(0)
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
                        overflow: hidden;
                    }
                    ul > li{
                        float: left;
                        width: 8.3vw;
                        height: 100%;
                        margin-top: 1.6vw;
                        text-align: center;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 1.45vw;
                        cursor: pointer;
                    }
                    li:nth-child(3){
                        width: 9.8vw;
                    }
                    .active{
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-titleBg.svg');
                        background-repeat: no-repeat;
                        background-size: 110% 110%;
                        background-position: left -1.6vw;
                    }  
                }
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
