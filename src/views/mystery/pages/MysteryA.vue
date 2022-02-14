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
    </div>
    <div class="boxBg">
        <div class="video">
            <video-bg 
id="videobg" :sources="[`https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxbanner.mp4`]">
            </video-bg>
            <div class="titles"> 
                <div class="titles-wrap">
                    <div class="left">
                        <div class="title">
                            CYBERPOP <span class="purple">NFT</span><br/>MYSTERY BOX
                            <div class="round">ROUND #1</div>
                        </div>
                        <div class="subtitle">INCLUDES SUPER VALUE FOR LIMITED TIME</div>
                        <div class="desc">
                            The mystery box of promotional NFTs that have been minted by the Cyberpop DAO which mark the beginning of our journey.
                        </div>
                        <div class="type">
                            <div class="type-title">TYPE</div>
                            <ul>
                                <li class="type-common">
                                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-common.png" alt="">
                                    <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-commonBorder.svg" alt="">
                                    <div class="mask">Common</div>
                                </li>
                                <li class="type-rare">
                                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-rare.png" alt="">
                                    <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-rareBorder.svg" alt="">
                                    <div class="mask">Rare</div>
                                </li>
                                <li class="type-epic">
                                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-epic.png" alt="">
                                    <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/type-rareBorder.svg" alt="">
                                    <div class="mask">Epic</div>
                                </li>
                            </ul>
                        </div>
                        <div class="button">
                            <div class="purchase">Purchase</div>
                            <div class="detailbtn">
                                Detail
                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/detailb.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="title">Sale Start time</div>
                        <div class="countDown">
                            <div class="hour">23H</div>:
                            <div class="minute">11M</div>:
                            <div class="millisecond">325</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="box">
            <img class="box-rightbg" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/box-rightBg.png" alt="">
            <div class="box-wrap">
                <div class="left">
                    <div class="title">BUY AND SELL DIGITAL<br/><span class="green">ART NFT </span>COLLECTION</div>
                    <div class="subtitle">They all have a very special light that gives people a sense of healing</div>
                    <img class="allbox" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/allbox.png" alt="">
                </div>
                <div class="boxImg">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/box-rightImg.png" alt="">
                </div>
            </div>
        </div>
        <div class="top">
            <div class="top-wrap">
                <div class="title">TOP SALES</div>
                <ul>
                    <li id="ele1">
                        <img class="card-img" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/top-img1.png" alt="">
                        <div class="card-title">
                            <div>THE LITILE PURPLE</div>
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/collect.svg" alt="">
                        </div>
                        <div class="card-subtitle">Active Remaining Time</div>
                        <div class="time">
                            <span>11</span> : <span>46</span> : <span>30</span>
                        </div>
                        <div class="price">
                            <div class="num"><span>$ </span>400.00</div>
                            <div class="buyCard">Buy</div>
                        </div>
                    </li>
                    <li id="ele2">
                        <img class="card-img" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/top-img2.png" alt="">
                        <div class="card-title">
                            <div>THE LITILE PURPLE</div>
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/collect.svg" alt="">
                        </div>
                        <div class="card-subtitle">Active Remaining Time</div>
                        <div class="time">
                            <span>11</span> : <span>46</span> : <span>30</span>
                        </div>
                        <div class="price">
                            <div class="num"><span>$ </span>400.00</div>
                            <div class="buyCard">Buy</div>
                        </div>
                    </li>
                    <li id="ele3">
                        <img class="card-img" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/top-img3.png" alt="">
                        <div class="card-title">
                            <div>THE LITILE PURPLE</div>
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/collect.svg" alt="">
                        </div>
                        <div class="card-subtitle">Active Remaining Time</div>
                        <div class="time">
                            <span>11</span> : <span>46</span> : <span>30</span>
                        </div>
                        <div class="price">
                            <div class="num"><span>$ </span>400.00</div>
                            <div class="buyCard">Buy</div>
                        </div>
                    </li>
                    <li id="ele4">
                        <img class="card-img" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/top-img4.png" alt="">
                        <div class="card-title">
                            <div>THE LITILE PURPLE</div>
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/collect.svg" alt="">
                        </div>
                        <div class="card-subtitle">Active Remaining Time</div>
                        <div class="time">
                            <span>11</span> : <span>46</span> : <span>30</span>
                        </div>
                        <div class="price">
                            <div class="num"><span>$ </span>400.00</div>
                            <div class="buyCard">Buy</div>
                        </div>
                    </li>
                    <li id="ele5">
                        <img class="card-img" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/top-img5.png" alt="">
                        <div class="card-title">
                            <div>THE LITILE PURPLE</div>
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/collect.svg" alt="">
                        </div>
                        <div class="card-subtitle">Active Remaining Time</div>
                        <div class="time">
                            <span>11</span> : <span>46</span> : <span>30</span>
                        </div>
                        <div class="price">
                            <div class="num"><span>$ </span>400.00</div>
                            <div class="buyCard">Buy</div>
                        </div>
                    </li>
                    <li id="ele6">
                        <img class="card-img" src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/top-img6.png" alt="">
                        <div class="card-title">
                            <div>THE LITILE PURPLE</div>
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/collect.svg" alt="">
                        </div>
                        <div class="card-subtitle">Active Remaining Time</div>
                        <div class="time">
                            <span>11</span> : <span>46</span> : <span>30</span>
                        </div>
                        <div class="price">
                            <div class="num"><span>$ </span>400.00</div>
                            <div class="buyCard">Buy</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="save" id="ele7">
            <div class="save-wrap">
                <div class="title">SAVE YOUT TIME</div>
                <div class="txt">WELCOMe TO THE WORLD OF BLIND BOXES</div>
            </div>
        </div>
        <div class="register">
            <div class="title">READY FOR YOUR JOURNEY?</div>
            <div class="subtitle">GET THE LASTEST IN INBOX</div>
            <div class="email">
                <div class="email-wrap">
                    <input type="text" v-model="email" placeholder="Email">
                </div>
                <div class="register" @click="submit()">Register</div>
            </div>
        </div> -->
        <div class="footer">
            <!-- <img class="logo" :src="logoSrc" @mouseover="changeGif()" @mouseout="stopGif()" alt=""> -->
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
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { log } from 'util';


// whitepaper
const openPaper = () => {
    window.open("public/whitepaper.pdf");
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




const submit = () => {
    let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则
    
    if(email.value === ""){ //输入不能为空
　　　　alert("not null!");
　　　　return false;
　　 }else if(!reg.test(email.value)){ //正则验证不通过，格式不对
　　　　alert("please input email!");
　　　　return false;
　　 }else{
　　　　alert("received!");
    //    email.value = "";
　　 }


    proxy.$api.get('http://127.0.0.1:3001/addUser?email=' + email.value ).then((res: any) => {
        if( res.serverStatus === 2 && res.affectedRows === 1){
            email.value = "";
            // alert('success');
        }else{
            alert(res.message);
        }
    }).catch( (err: any) => {
        console.log(err)
    })
}






const id: any = ref(0)
let type2: any = ref(1);
let isPlay: any = ref(false);

const connect: any = async () => {
    const [accounts]: any = await Web3.login().then((res: any) => {
        return res;
    })
    id.value = accounts;
    let len = id.value.length-1;
    id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
}




const checkScrollHeightAndLoadAnimation: any = () => {
        // const windowHeight: Number = window.innerHeight;

        // let ele1 = document.getElementById("ele1") as HTMLElement;
        // let ele2 = document.getElementById("ele2") as HTMLElement;
        // let ele3 = document.getElementById("ele3") as HTMLElement;
        // let ele4 = document.getElementById("ele4") as HTMLElement;
        // let ele5 = document.getElementById("ele5") as HTMLElement;
        // let ele6 = document.getElementById("ele6") as HTMLElement;
        // let ele7 = document.getElementById("ele7") as HTMLElement;
        // const ele1Top: Number = ele1.getBoundingClientRect().top;
        // const ele2Top: Number = ele2.getBoundingClientRect().top; 
        // const ele3Top: Number = ele3.getBoundingClientRect().top; 
        // const ele4Top: Number = ele4.getBoundingClientRect().top; 
        // const ele5Top: Number = ele5.getBoundingClientRect().top; 
        // const ele6Top: Number = ele6.getBoundingClientRect().top; 
        // const ele7Top: Number = ele7.getBoundingClientRect().top; 


        // let arr = [
        //     {
        //         el: ele1,
        //         top: ele1Top
        //     },
        //     {
        //         el: ele2,
        //         top: ele2Top
        //     },
        //     {
        //         el: ele3,
        //         top: ele3Top
        //     },
        //     {
        //         el: ele4,
        //         top: ele4Top
        //     },
        //     {
        //         el: ele5,
        //         top: ele5Top
        //     },
        //     {
        //         el: ele6,
        //         top: ele6Top
        //     },
        //     {
        //         el: ele7,
        //         top: ele7Top
        //     }
        // ]
        // for(let i = 0; i < arr.length; i++){
        //     if(arr[i].top < windowHeight){
        //         arr[i].el.classList.add('fadeInUp')
        //     }
            
        // }
}



onUnmounted(() => {
    window.removeEventListener("scroll", checkScrollHeightAndLoadAnimation, true);
})

onMounted(() => {
    connect();
    window.addEventListener('scroll', checkScrollHeightAndLoadAnimation, true);
    store.dispatch('user/changeActive', 3)
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
        // height: 100vh;
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
    .boxBg{
        position: absolute;
        width: 100%;
        // height: 200.57vw;
        // background: #210737;
        // background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxbg.png');
        // background-repeat: no-repeat;
        // background-size: 100% auto;
        // background-position: left 5.5vw;
        background-color: #080707;
        // background-image: linear-gradient(rgba(111, 38, 190, 0) 0%, rgba(156, 0, 248, 0.33) 58%, rgba(122,0,248,1) 100%);
        // height: 329.47vw;
        height: 100vh;
        .video{
            width: 100%;
            height: 100vh;
            background-color: #000000;
            .titles{
                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                .titles-wrap{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    // margin-left: 20.98vw;
                    margin-right: 24.37vw;
                    margin-left: 22vw;
                    .left{
                        .title{
                            position: relative;
                            margin-top: 9.71vw;
                            font-size: 2.6vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #FFFFFF;
                            // line-height: 2.81vw;
                            line-height: 3vw;
                            animation: fadeInUp .8s linear;
                            .purple{
                                font-size: 2.6vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #FFFFFF;
                                line-height: 2.81vw;
                                background: linear-gradient(163deg, #FB52FC 0%, #8953FF 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                            }
                            .round{
                                position: absolute;
                                top: 4.3vw;
                                left: 18.7vw;
                                width: 5.83vw;
                                height: 1.14vw;
                                font-size: .78vw;
                                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                color: #000000;
                                line-height: 1.14vw;
                                text-align: center;
                                background-color: #FFFFFF;
                            }
                        }
                        .subtitle{
                            font-size: .98vw;
                            font-family: Arial-Black, Arial;
                            font-weight: 900;
                            color: #04FFA2;
                            // line-height: 2.08vw;
                            line-height: 2.2vw;
                        }
                        .desc{
                            width: 25.57vw;
                            font-size: .83vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 1.14vw;
                        }
                        .type{
                            .type-title{
                                width: 20.36vw;
                                height: 1.35vw;
                                // margin: 3.17vw 0 .2vw .36vw;
                                margin: 4vw 0 .2vw .36vw;
                                font-size: .98vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #B3B3B3;
                                line-height: 1.35vw;
                            }
                           ul{
                               display: flex;
                                li{
                                    position: relative;
                                    width: 5.67vw;
                                    height: 5.31vw;
                                    margin-right: .625vw;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                    .border{
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                    }
                                    .mask{
                                        position: absolute;
                                        bottom: 0;
                                        width: 100%;
                                        height: 1.14vw;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #FFFFFF;
                                        line-height: 1.14vw;
                                        text-align: center;
                                        background-color: rgba(255,255,255,.1);
                                    }
                                }
                           }
                        }
                        .button{
                            display: flex;
                            // margin-top: 2.96vw;
                            margin-top: 4vw;
                            margin-bottom: 5.625vw;
                            text-align: center;
                            .purchase{
                                width: 11.25vw;
                                height: 2.55vw;
                                margin-right: .67vw;
                                font-size: .93vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                color: #FFFFFF;
                                line-height: 2.55vw;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.svg');
                                background-repeat: no-repeat;
                                background-size: 100% auto;
                                background-position: left top;
                            }
                            .detailbtn{
                                position: relative;
                                width: 11.51vw;
                                height: 2.65vw;
                                font-size: .83vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                color: #FFFFFF;
                                line-height: 2.65vw;
                                // background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/detailb.svg');
                                // background-repeat: no-repeat;
                                // background-size: 100% auto;
                                // background-position: left top;
                                img{
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .purchase:hover{
                                filter: drop-shadow(0 0 0.3rem #AA31DF);
                            }
                            .detailbtn > img:hover{
                                filter: drop-shadow(0 0 0.3rem #ffffff);
                            }
                        }
                    }   
                    .right{
                        position: relative;
                        .title{
                            position: absolute;
                            right: 0;
                            bottom: 8vw;
                            width: 14.68vw;
                            height: 1.51vw;
                            font-size: 1.09vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 1.51vw;
                            text-align: right;
                        }
                        .countDown{
                            display: flex;
                            position: absolute;
                            right: -.7vw;
                            bottom: 5.6vw;
                            width: 12.55vw;
                            height: 2.44vw;
                            font-size: 1.51vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 2.13vw;
                            div{
                                width: 3.43vw;
                                height: 2.44vw;
                                margin: 0 .2vw;
                                text-align: center;
                                line-height: 2.44vw;
                                background-color: #171C28;
                            }
                        }
                    }
                }
            }
        }
        // .box{
        //     position: relative;
        //     width: 100%;
        //     height: 45.36vw;
        //     .box-rightbg{
        //         position: absolute;
        //         top: 0;
        //         right: 0;
        //         height: 110%;
        //         width: 75vw;
        //     }
        //     .box-wrap{
        //         position: absolute;
        //         display: flex;
        //         // justify-content: center;
        //         width: 100%;
        //         height: 100%;
        //         margin-top: 5.5vw;
        //         overflow: hidden;
        //         .left{
        //             margin-left: 19.02vw;
        //             margin-right: 4vw;
        //             .title{
        //                 width: 33.33vw;
        //                 margin-top: 7.23vw;
        //                 font-size: 3.07vw;
        //                 font-family: AlibabaPuHuiTi_2_85_Bold;
        //                 color: #EFD8FB;
        //                 line-height: 4.21vw;
        //                 white-space: nowrap;
        //                 animation: fadeInUp .5s linear;
        //                 .green{
        //                     color: #03FF56;
        //                 }
        //             }
        //             .subtitle{
        //                 width: 30.02vw;
        //                 margin-top: 2.08vw;
        //                 margin-bottom: 6.71vw;
        //                 font-size: 1.04vw;
        //                 font-family: AlibabaPuHuiTi_2_65_Medium;
        //                 color: #FFFFFF;
        //                 line-height: 1.45vw;
        //                 animation: fadeInUp .5s linear;
        //             }
        //             .allbox{
        //                 width: 13.48vw;
        //                 height: 4.68vw;
        //                 margin-left: -.3vw;
        //             }
        //             .allbox:hover{
        //                 filter: drop-shadow(0 0 0.3rem #c42edb);
        //             }
        //         }
        //         .boxImg{
        //             height: 24.58vw;
        //             margin-top: 10.41vw;
        //             animation: fadeInUp .5s linear;
        //             img{
        //                 width: 100%;
        //                 height: 100%;
        //             }
        //         }
        //     }
        // }
        // .top{
        //     height: 95.93vw;
        //     margin-left: 19.27vw;
        //     .top-wrap{
        //         .title{
        //             height: 4.21vw;
        //             margin-bottom: 6.25vw;
        //             font-size: 3.02vw;
        //             font-family: AlibabaPuHuiTi_2_85_Bold;
        //             color: #FFFFFF;
        //             line-height: 4.21vw;
        //             background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/top-titlebg.svg');
        //             background-repeat: no-repeat;
        //             background-size: auto 13.8%;
        //             background-position: left 3.5vw;
        //             animation: fadeInUp .5s linear;
        //         }
        //         ul{
        //             display: flex;
        //             flex-wrap: wrap;
        //             width: 62.49vw;
        //             height: 73.43vw;
        //             li{
        //                 width: 19.79vw;
        //                 height: 33.59vw;
        //                 padding: .62vw;
        //                 margin-right: 1.04vw;
        //                 margin-bottom: 6.25vw;
        //                 background: #3E1362;
        //                 box-shadow: 0px 2px 11px 2px rgba(0, 0, 0, 0.36);
        //                 .card-img{
        //                     width: 100%;
        //                     height: 22.91vw;
        //                 }
        //                 .card-title{
        //                     display: flex;
        //                     justify-content: space-between;
        //                     align-items: center;
        //                     margin: .83vw 0;
        //                     font-size: 1.14vw;
        //                     font-family: AlibabaPuHuiTi_2_55_Regular;
        //                     color: #FEFFFF;
        //                     line-height: 1.56vw;
        //                     img{
        //                         width: 1.25vw;
        //                         height: 1.25vw;
        //                     }
        //                 }
        //                 .card-subtitle{
        //                     font-size: .72vw;
        //                     font-family: PTSans-Caption, PTSans;
        //                     font-weight: normal;
        //                     color: #FEFFFF;
        //                     line-height: .8vw;
        //                     zoom: .8;
        //                 }
        //                 .time{
        //                     margin: .72vw 0 1.1vw 0;
        //                     font-size: 1.35vw;
        //                     font-family: PingFangSC-Medium, PingFang SC;
        //                     font-weight: 500;
        //                     color: #FEFFFF;
        //                     line-height: 1.92vw;
        //                     span{
        //                         display: inline-block;
        //                         width: 3.22vw;
        //                         height: 1.4vw;
        //                         background-color: #000000;
        //                         font-size: 1.25vw;
        //                         font-family: VT323-Regular, VT323;
        //                         font-weight: 400;
        //                         color: #03FF56;
        //                         line-height: 1.4vw;
        //                         text-align: center;
        //                     }
        //                 }
        //                 .price{
        //                     display: flex;
        //                     justify-content: space-between;
        //                     align-items: center;
        //                     .num{
        //                         font-size: 1.25vw;
        //                         font-family: AlibabaPuHuiTi_2_75_SemiBold;
        //                         color: #FFFFFF;
        //                         line-height: 1.71vw;
        //                         span{
        //                             color: #03FF56;
        //                             font-weight: bold;
        //                         }
        //                     }
        //                     .buyCard{
        //                         width: 5.05vw;
        //                         height: 1.45vw;
        //                         font-size: .72vw;
        //                         font-weight: bold;
        //                         line-height: 1.45vw;
        //                         text-align: center;
        //                         color: #fff;
        //                         background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/top-buy.svg');
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
        // .save{
        //     height: 31.09vw;
        //     .save-wrap{
        //         width: 61vw;
        //         height: 22.81vw;
        //         margin-left: 19.27vw;
        //         background: linear-gradient(135deg, rgba(69,27,94,.48) 0%, rgba(0,0,0,.48) 53%, rgba(50,0,91,.48) 100%);
        //         // opacity: 0.48;
        //         border: 2px solid;
        //         border-image: linear-gradient(135deg, rgba(203, 120, 255, .48), rgba(209, 152, 255, .48), rgba(81, 48, 100, .7)) 2 2;
        //         text-align: center;
        //         .title{
        //             margin-top: 6.82vw;
        //             margin-bottom: 3.12vw;
        //             font-size: 1.87vw;
        //             font-family: AlibabaPuHuiTi_2_65_Medium;
        //             color: #FFFFFF;
        //             line-height: 2.6vw;
        //         }
        //         .txt{
        //             font-size: 2.5vw;
        //             font-family: AlibabaPuHuiTi_2_65_Medium;
        //             color: #FFFFFF;
        //             line-height: 3.48vw;
        //             background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/save-green.png');
        //             background-repeat: no-repeat;
        //             background-position: 2.6vw .3vw;
        //             background-size: auto 92%;
        //         }
        //     }
        // }
        // .register{
        //     width: 100%;
        //     height: 27.44vw;
        //     background-color: #04FF55;
        //     overflow: hidden;
        //     display: flex;
        //     flex-direction: column;
        //     align-items: center;
        //     .title{
        //         margin-top: 4.73vw;
        //         font-size: 2.86vw;
        //         font-weight: bold;
        //         font-family: AlibabaPuHuiTi_2_115_Black;
        //         color: #000000;
        //         line-height: 3.69vw;
        //     }
        //     .subtitle{
        //         font-size: 2.08vw;
        //         font-weight: bold;
        //         font-family: AlibabaPuHuiTi_2_115_Black;
        //         color: #000000;
        //         line-height: 3.69vw;
        //     }
        //     .email{
        //         display: flex;
        //         width: 33.8vw;
        //         height: 3.69vw;
        //         margin-top: 1.61vw;
        //         .email-wrap{
        //             width: 69%;
        //             height: 3.69vw;
        //             position: relative;
        //             input{
        //                 width: 100%;
        //                 height: 100%;
        //                 padding-right: 1.25vw;
        //                 font-size: 1.04vw;
        //                 color: #565656; 
        //                 text-indent: 1.25vw;
        //                 line-height: 1.56vw;
        //                 font-family: AlibabaPuHuiTi_2_55_Regular;
        //                 background-color: #FFFFFF;
        //                 border: 1px solid #979797;
        //                 outline: none;
        //                 text-align: left;
        //             }
        //             input:focus::-webkit-input-placeholder {
        //                 font-size: .8vw;
        //                 text-align: right;
        //             }
        //         }
        //         .register{
        //             width: 31%;
        //             height: 3.69vw;
        //             line-height: 3.69vw;
        //             background-color: #0C0A0A;
        //             font-size: .98vw;
        //             font-weight: bold;
        //             font-family: AlibabaPuHuiTi_2_115_Black;
        //             color: #04FF84;
        //             cursor: pointer;
        //         }
        //     }
        // }
        .footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 5.54vw;
            padding-right: 6vw;
            padding-left: 18.9vw;  
            font-size: 1.09vw;
            font-family: Poppins-Regular, Poppins;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 1.82vw;
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
    }
</style>
