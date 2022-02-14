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
                    <div class="login_in" @click="connect()"  @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">
                        <div class="txt">{{ id || "CONNECT WALLET" }}</div>
                        <div class="mask" id="mask"></div>
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
        <section>
            <div class="title">COMING SOON</div>
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/videobg.png" alt="">
        </section>
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

let select:any = ref(0);
const selectLang = (index:any) => {
    select.value = index;
}


//header
let logoHSrc: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhome/logo_101.png') ;
const changeHGif = () => {
    logoHSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/logo.gif';
}
const stopHGif = () => {
    logoHSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/logo_101.png';
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

let menuFlag:any = ref(4);
const changeMenu = (type: any, route?: any) => {
    menuFlag.value = type;
    if(type == 2) {
        window.open('https://medium.com/@Cyberpopnewworld')
        return
    }
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
}


onMounted(() => {
    connect()
    store.dispatch('user/changeActive', 4)
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
    html,
    body {
        height: 100%;
        overflow-x: hidden;
    }
    .home{
        position: relative;
        width: 100%;
        height: 100vh;
        header{
            z-index: 9;
            position: fixed;
            top: 0;
            width: 100%;
            height: 5.5vw;
            opacity: .86;
            color: #fff;
            background-color: #000000;
            // background-image: linear-gradient(to right, #000 , #1C0B3D, #000);
            // background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-bg.svg');
            // background-size: auto 100%;
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
        section{
            position: relative;
            width: 100%;
            height: 100vh;
            background-color: #000000;
            .title{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 100%;
                font-size: 4.32vw;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #ffffff;
                background: linear-gradient(163deg, transparent 0%, rgba(0,0,0,.9) 50%, transparent 100%);
                text-align: center;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
