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
                <div class="login_in" v-if="!loggined" @click="connect()">
                    <div class="txt">CONNECT WALLET</div>
                </div>
                <div class="logged_in" v-if="loggined">
                    <img class="portrait" src="@/assets/nwhome/portrait.svg" alt="">
                    <div class="idtxt">{{id}}</div>
                    <div class="submenu">
                        <div class="myassets">My assets</div>
                        <div class="logout">Logout</div>
                    </div>
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
    window.open("./CyberpopWhitePaper.pdf");
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
                .login_in{
                    width: 100%;
                    height: 100px;
                    overflow: hidden;
                    cursor: pointer;
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
                    width: 100%;
                    height: 163px;
                    margin-top: 10px;
                    text-align: center;
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
                            font-family: Poppins-Regular, Poppins;
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
    .termas{
        padding-top: 55px;
        background-color: #000000;
        color: #fff;
        .termas-wrap{
            padding: 20px;
            .title{
                font-size: 34px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 48px;
                text-align: center;
            }
            .subtitle{
                margin-bottom: 14px;
                font-size: 17px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #ffffff;
                line-height: 48px;
            }
            .content{
                margin-bottom: 14px;
                font-size: 17px;
                line-height: 24px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
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
