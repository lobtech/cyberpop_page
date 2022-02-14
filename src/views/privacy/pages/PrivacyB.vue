<template>
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
                        1.4 Any questions, comments or complaints that you might have should be emailed to <a href="">support@cyberpop.online</a>
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
    showMenuAni.value = false;
    menuFlag.value = type;
    if(type == 2) {
        window.open('https://medium.com/@Cyberpopnewworld')
        return
    }
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
}




const id: any = ref(0)

const connect: any = async () => {
    const [accounts]: any = await Web3.login().then((res: any) => {
        return res;
    })
    id.value = accounts;
    let len = id.value.length-1;
    id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
}


onMounted(() => {
    connect();
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
                }
                .menu{
                    width: 22px;
                    height: 22px;
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
    }
    .privacy{
        padding-top:  55px;
        background-color: #000000;
        color: #fff;
        .privacy-wrap{
            padding: 20px;
            .title{
                height: 47px;
                font-size: 26px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 26px;
                text-align: center;
            }
            .subtitle{
                margin-bottom: 16px;
                font-size: 14px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #ffffff;
                line-height: 14px;
            }
            .content{
                font-size: 24;
                line-height: 20px;
                margin-bottom: 20px;
                a{
                    color: #04F39B;
                    text-decoration: none;
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
