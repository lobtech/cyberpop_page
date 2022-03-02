<template>
    <div class="home">
        <header>
            <div class="content" id="header">
                <div class="logo">
                    <a href="/assets"><img v-show="!logoHFlag" :src="logoHSrcP" @mouseenter="logoHFlag = true" alt=""></a>
                    <a href="/assets"><img v-show="logoHFlag" :src="logoHSrcG" @mouseleave="logoHFlag = false" alt=""></a>
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
                            <!-- <a @click="closeMenu()" href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopTechnologyArchitecture2.pdf" target="view_window">Green paper</a> -->
                            <a @click="closeMenu()" href="https://d3bhixjyozyk2o.cloudfront.net/(new)CyberPOPNewworlddeck(en)3.pdf" target="view_window">Deck</a>
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
                    <div class="input" :class="inputShow ? 'actived' : ''">
                        <input v-model="inputValue" @focus="inputShow = true" ref="myInput" type="text" placeholder="Keywords, name, number">
                        <img v-show="inputShow" @click="clearInput()" class="clear" src="@/assets/nwAssets/clear-input.svg" alt="">
                        <img v-show="!inputShow" src="@/assets/nwAssets/search-icon.svg" alt="">
                        <img v-show="inputShow" @click="searchSubmit()" src="@/assets/nwAssets/search-iconActived.svg" alt="">
                    </div>
                    <div class="menuSelect">
                        <div class="wrapbox">
                            <ul class="token">
                                <li @click="showSelect(1)"><div>ECR 721, ECR 115</div></li>
                                <li v-show="showItem1" class="item" @click="selectItem($event)">
                                    <div class="ecr7 selected">ECR 721</div>
                                    <div class="ecr1">ECR 115</div>
                                </li>
                            </ul>
                            <ul class="type">
                                <li @click="showSelect(2)"><div>Character, Weapon, Support Card, Item, Blind Box</div></li>
                                <li v-show="showItem2" class="item" @click="selectItem($event)">
                                    <div class="selected">All types</div>
                                    <div>Character</div>
                                    <div>Weapon</div>
                                    <div>Support Card</div>
                                    <div>Item</div>
                                    <div>Blind Box</div>
                                    <div class="btn">
                                        <div class="cancel">CANCEL</div>
                                        <div class="ok">OK</div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="quality">
                                <li @click="showSelect(3)"><div>Legend, Epic, Rare, Common</div></li>
                                <li v-show="showItem3" class="item" @click="selectItem($event)">
                                    <div class="selected">All quality</div>
                                    <div>Legend</div>
                                    <div>Epic</div>
                                    <div>Rare</div>
                                    <div>Common</div>
                                    <div class="btn">
                                        <div class="cancel">CANCEL</div>
                                        <div class="ok">OK</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ecr">
                <div class="ecrchange">
                    <div class="ecr721" v-show="ecrType">
                        <ul class="prince">
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Prince of Shadows<span>x4</span></div>
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
    <popup-b v-show="transferActive"></popup-b>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 


// input actived
const myInput:any = ref(null)
let inputShow:any = ref(false)
let inputValue:any = ref('')
const clearInput = () => {
    inputValue.value = ''
    myInput.value.focus()
}
const inputOtherClick = (e:any) => {
    if( myInput.value.contains(e.target) ){
        return
    }else{
        inputValue.value = ''
        inputShow.value = false;
    }
}


const changeText = (parentLi:any) => {
    let longString:string = ''
    let firstLi:string = ''
    const selectedArr = parentLi.querySelectorAll('.selected')
    const selectArrLen = selectedArr.length
    if( selectArrLen == 0 ){
        // 当不选择时，默认勾选第一项
        firstLi = parentLi.parentElement.querySelectorAll('li')[1].querySelector('div').innerText;
        (parentLi.parentElement.querySelector('li').querySelector('div') as HTMLElement).innerText = firstLi;
        parentLi.parentElement.querySelectorAll('li')[1].querySelector('div').classList.add('selected');

    }else{
        for( let i = 0;i < selectArrLen; i++ ){
        
            if( i == selectArrLen-1 ){
                longString += selectedArr[i].innerText
            }else{
                longString += selectedArr[i].innerText + ', '
            }
        }
        (parentLi.parentElement.querySelector('li').querySelector('div') as HTMLElement).innerText = longString;
    }
}

// select
let showItem1:any = ref(false)
let showItem2:any = ref(false)
let showItem3:any = ref(false)
const showSelect = (index:any) => {
    switch (index){
        case 1:
            showItem1.value = !showItem1.value;
            showItem2.value = false;
            showItem3.value = false;
            break;
        case 2:
            showItem2.value = !showItem2.value;
            showItem1.value = false;
            showItem3.value = false;
            break;
        default:
            showItem3.value = !showItem3.value;
            showItem1.value = false;
            showItem2.value = false;
            break;
    }
}
const selectItem = (e:any) => {    
    const parentLi = e.target.parentElement.parentElement
    if( e.target.className == 'ok' ){
        changeText(parentLi);
        showItem1.value = false;
        showItem2.value = false;
        showItem3.value = false;

    }else if( e.target.className == 'cancel' ){
        showItem1.value = false;
        showItem2.value = false;
        showItem3.value = false;
    }else{
        (e.target as HTMLElement).classList.toggle('selected')
        if(  e.target.innerText == 'ECR 721' || e.target.innerText == 'ECR 115' ){
            changeText(parentLi);
            showItem1.value = false;
            showItem2.value = false;
            showItem3.value = false;
        }
    }
}





// ecr exchange
let ecrType:any = ref(true);


// NFT transfer
const transferActive = computed(() => store?.state.user?.transferActive);
const transferPopup = () => { // 预计点击传值（nft拥有的数量）
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


// search submit
const searchSubmit = () => {
    inputShow.value = false
}

onUnmounted(() => {
    window.removeEventListener('click', inputOtherClick, true);
})

onMounted(() => {
    if( realId.value != 0){
        loggined.value = true;
    }
    logoHImport();
    store.dispatch('user/changeActive', 0);
    window.scrollTo(0,0);
    window.addEventListener('click', inputOtherClick, true);
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
        background-color: #121122;
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
                    margin-bottom: 96px;
                    .input{
                        position: relative;
                        width: 303px;
                        height: 40px;
                        margin-left: 36px;
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
                        img:not(.clear){
                            width: 16px;
                            height: 16px;
                            margin-left: 10px;
                            vertical-align: middle;
                        }
                    }
                    .input.actived{
                        border: 2px solid #ffffff;
                        input[type='text']{
                            color: #ffffff;
                        }
                        input::-webkit-input-placeholder { 
                            color: #ffffff;
                        }
                        input:-moz-placeholder { 
                            color: #ffffff;
                        }
                        input::-moz-placeholder {
                            color: #ffffff;
                        }
                        input:-ms-input-placeholder {
                            color: #ffffff;
                        }
                        .clear{
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            right: 40px;
                            margin: auto 0;
                        }
                    }
                    .menuSelect{
                        position: absolute;
                        width: 100%;
                        margin: 24px 0 32px 0;
                        .wrapbox{
                            display: flex;
                            height: 440px;
                            overflow-x: scroll;
                            overflow-y: hidden;
                            white-space: nowrap;
                            .token,.type,.quality{
                                display: inline-block;
                                margin-right: 16px;
                                li{
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
                                    position: relative;
                                }
                                li:first-child::after{
                                    position: absolute;
                                    top: 3vw;
                                    right: 3vw;
                                    display: inline-block;
                                    content: "";
                                    width: 8px;
                                    height: 8px;
                                    border: .8vw solid #fff;
                                    border-top: none;
                                    border-left: none;
                                    transform: rotate(45deg);
                                }
                                li:last-child{
                                    z-index: 3;
                                    position: absolute;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: left;
                                    width: 148px;
                                    height: 132px;
                                    padding: 20px;
                                    margin-top: 8px;
                                    background: linear-gradient(221deg, rgba(132, 120, 255, .85) 0%, rgba(12, 9, 17, 0) 100%),
                                                linear-gradient(77deg, rgba(120, 90, 187, .85) 0%, rgba(12, 9, 17, .9) 100%);
                                    box-shadow: -4px 4px 2px 1px rgba(0, 0, 0, 0.25);
                                    border-radius: 2px 2px 2px 2px;
                                    div:not(.btn){
                                        position: relative;
                                        height: 46px;
                                        padding-left: 20px;
                                        font-size: 14px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #FFFFFF;
                                        line-height: 46px;
                                    }
                                    div.selected{
                                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    }
                                    div.selected::before{
                                        display: inline-block;
                                        content: '';
                                        position: absolute;
                                        top: 4.2vw;
                                        left: 2vw;
                                        width: 1vw;
                                        height: 2vw;
                                        border: 2px solid #fff;
                                        border-top: none;
                                        border-left: none;
                                        transform: rotate(45deg);
                                    }
                                    .btn{
                                        display: flex;
                                        justify-content: flex-end;
                                        width: 100%;
                                        div{
                                            width: 88px;
                                            height: 42px;
                                            padding: 0;
                                            font-size: 14px;
                                            text-indent: 0;
                                            text-align: center;
                                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                                            background: #8478FF;
                                            border-radius: 2px 2px 2px 2px;
                                            cursor: pointer;
                                        }
                                        div + div{
                                            margin-left: 12px;
                                        }
                                    }
                                }
                            }
                            .token{
                                width: 109px;
                                margin-left: 36px;
                                li:first-child{
                                    width: 109px;
                                    div{
                                        width: 75%;
                                        letter-spacing: .04vw;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                }
                                li:last-child{
                                    left: 36px;
                                }
                            }
                            .type{
                                width: 288px;
                                li:first-child{
                                    width: 288px;
                                    div{
                                        width: 90%;
                                        letter-spacing: .04vw;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                }
                                li:last-child{
                                    right: 0px;
                                    width: 288px;
                                    height: 386px;
                                }
                            }
                            .quality{
                                width: 143px;
                                li:first-child{
                                    width: 143px;
                                    div{
                                        width: 80%;
                                        letter-spacing: .04vw;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                }
                                li:last-child{
                                    right: 0px;
                                    width: 228px;
                                    height: 316px;
                                }
                            }
                        }
                        .wrapbox::-webkit-scrollbar {
                            width: 0;
                            height: 0;
                            color: transparent;
                        }
                    }
                }
            }
            .ecr{
                margin-bottom: -2px;
                .ecrchange{
                    .ecr721,.ecr115{
                        ul{
                            display: flex;
                            align-items: center;
                            flex-direction: column;
                            li{
                                width: 303px;
                                height: 387px;
                                padding: 16px;
                                margin-bottom: 35px;
                                background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                                            linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                                border: 2px solid;
                                border-image: linear-gradient(206deg, rgba(132, 120, 255, 0.48), rgba(71, 57, 128, 1)) 2 2;
                                img{
                                    width: 100%;
                                    height: 270px;
                                }
                                .name{
                                    height: 24px;
                                    margin: 20px 0 24px 0;
                                    font-size: 18px;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #FFFFFF;
                                    line-height: 24px;
                                    span{
                                        float: right;
                                        height: 24px;
                                        font-size: 24px;
                                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                        line-height: 24px;
                                    }
                                }
                                .btn{
                                    display: flex;
                                    justify-content: center;
                                    div{
                                        height: 48px;
                                        font-size: 16px;
                                        font-family: AlibabaPuHuiTi_2_115_Black;
                                        color: #FFFFFF;
                                        line-height: 48px;
                                        text-align: center;
                                        cursor: pointer;
                                    }
                                    .transfer{
                                        width: 134px;
                                        background-image: url('../../../assets/nwAssets/blackbg.svg');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                    .sell{
                                        width: 136px;
                                        background-image: url('../../../assets/nwAssets/purplebg.svg');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                    .unpack{
                                        width: 271px;
                                        height: 48px;
                                        margin-top: -2px;
                                        background-image: url('../../../assets/nwAssets/unpackbg-phone.png');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .nothing{
                text-align: center;
                margin-bottom: -2px;
                img{
                    width: 120px;
                    height: 128px;
                    margin: 80px auto;
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

    .popup{
        z-index: 9;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(35, 38, 47, 0.9);
        .content{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 387px;
            padding: 24px;
            background: linear-gradient(221deg, rgba(132, 120, 255, .8) 0%, rgba(12, 9, 17, .8) 100%),
                        linear-gradient(81deg, rgba(45, 222, 211, .6) 0%, rgba(12, 9, 17, 1) 100%);
            box-shadow: inset 0px 4px 0px 1px #5A5685;
            .title{
                height: 39px;
                font-size: 28px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 39px;
            }
            .tips{
                height: 22px;
                margin: 30px 0 16px;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 22px;
            }
            .number{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 40px;
                .add,.reduce{
                    width: 96px;
                    height: 40px;
                    font-size: 24px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 40px;
                    text-align: center;
                    background-color: #8478FF;
                }
                input{
                    width: 95px;
                    height: 34px;
                    font-size: 24px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    color: #FFFFFF;
                    line-height: 34px;
                    text-align: center;
                    background: transparent;
                    border: none;
                    outline: none;
                }
            }
            .desc{
                width: 100%;
                height: 22px;
                margin: 32px 0 16px;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 22px;
            }
            .address{
                position: relative;
                width: 327px;
                height: 40px;
                margin-bottom: 32px;
                padding: 12px;
                border: 1px solid #8478FF;
                input{
                    width: 100%;
                    height: 16px;
                    color: #ffffff;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    line-height: 16px;
                    background: transparent;
                    border: none;
                    outline: none;
                }
                .mess{
                    position: absolute;
                    left: 0;
                    bottom: -18px;
                    height: 16px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    color: #FF5CA1;
                    line-height: 16px;
                }
            }
            .btn{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 48px;
                .cancel{    
                    width: 163px;
                    height: 48px;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 48px;
                    text-align: center;
                    background-image: url('../../../assets/nwAssets/blackbg-phone.svg');
                    background-size: 100% 100%;
                    cursor: pointer;
                }
                .transfer{    
                    width: 164px;
                    height: 48px;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 48px;
                    text-align: center;
                    background-image: url('../../../assets/nwAssets/purplebg-phone.svg');
                    background-size: 100% 100%;
                    cursor: pointer;
                }
            }
        }
    }
</style>
