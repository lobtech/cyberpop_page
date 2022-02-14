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
        <section>
            <div class="title">COMING SOON</div>
        </section>
    </div>
    <!-- <div class="mining">
        <div class="banner">
            <div class="title">MINING</div>
            <div class="subtitle">STAKE NFT FOR MINING REWARDS</div>
        </div>
        <div class="total">
            <div class="progressBall">
                <img class="ballBorder" src="https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/ballBorder.svg" alt="">
                <div class="ball-inner"></div>
            </div>
            <div class="right">
                <div class="total-title">TOTAL POOL REWARDS</div>
                <div class="total-subtitle">（BUSD）</div>
                <div class="price">$393,441,130</div>
            </div>
        </div>
        <ul class="data">
            <li>
                <div class="txt">Total Staking NFTs</div>
                <div class="percent">0</div>
            </li>
            <li>
                <div class="txt">Your Weight Percentage</div>
                <div class="percent">0%</div>
            </li>
            <li>
                <div class="txt">Your Mining Rewards</div>
                <div class="percent">≈$0</div>
            </li>
        </ul>
        <div class="pledge">
            <div class="title">Current Pledge <span>1/4</span></div>
            <ul>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img" :src="greenImgSrc" alt="">
                    </div>
                    <div class="top-txt">Position HashRate:1</div>
                    <div class="bot-txt greenNft">
                        <div>APPROVE</div>
                        <img :src="greenBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img" :src="whiteImgSrc" alt="">
                    </div>
                    <div class="top-txt">Position HashRate:1</div>
                    <div class="bot-txt whiteNft">
                        <div>Select NFT to stake</div>
                        <img :src="whiteBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img lockedImg" :src="lockedImgSrc" alt="">
                    </div>
                    <div class="top-txt">Position HashRate:1</div>
                    <div class="bot-txt grayNft">
                        <div>Coming soon</div>
                        <img :src="lockedBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img lockedImg" :src="lockedImgSrc" alt="">
                    </div>
                    <div class="top-txt">Position HashRate:1</div>
                    <div class="bot-txt grayNft">
                        <div>Coming soon</div>
                        <img :src="lockedBorderSrc" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer">
        <div class="mask"></div>
        <div class="footer-wrap">
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
    </div> -->
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { log } from 'util';


// whitepaper
const openPaper = () => {
    window.open("./CyberpopWhitePaper.pdf");
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

// connect
let connectMove: any = ref(false);
const mouseEnter = () => {
    connectMove.value = true;
}

const mouseLeave = () => {
    connectMove.value = false;
}


// pledge
let greenImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/whiteImg.png')
let whiteImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/whiteImg.png')
let lockedImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/locked.svg')

let greenBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/pledge-border1.svg')
let whiteBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/pledge-border2.svg')
let lockedBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/pledge-border3.svg')


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
    store.dispatch('user/changeActive', 1);
})


</script>
<style lang="less" scoped>
    @keyframes wave{
        from {
            -webkit-transform: rotateZ(0deg) ;
            transform: rotateZ(0deg);
        }
        to {
            -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }
    }
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
                animation: menuEnd .3s ease-out;
                animation-fill-mode: forwards;
            }
        }
        section{
            position: relative;
            width: 100%;
            height: 100vh;
            background-color: #000000;
            overflow: hidden;
            .title{
                position: absolute;
                top: 3vw;
                left: 0;
                right: 0;
                width: 254px;
                height: 46px;
                margin: 0 auto;
                margin-top: 44px;
                font-size: 20px;
                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                color: #35F1C8;
                line-height: 46px;
                text-align: center;
                background-image: url('../../../assets/nwcyberspace/comingsoon.svg');
                background-repeat: no-repeat;
                background-position: left top;
                background-size: auto 100%;
            }
        }
    }
    // .mining{
    //     width: 100%;
    //     padding-top: 55px;
    //     background-color: #000000;
    //     .banner{
    //         width: 100%;
    //         height: 387px;
    //         background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/banner.png');
    //         background-repeat: no-repeat;
    //         background-position: -311px top;
    //         background-size: auto 100%; 
    //         text-align: center;
    //         overflow: hidden;
    //         .title{
    //             height: 63px;
    //             margin-top: 24px;
    //             font-size: 45px;
    //             font-family: AlibabaPuHuiTi_2_105_Heavy;
    //             color: #FFFFFF;
    //             line-height: 63px;
    //             letter-spacing: 4px;
    //             animation: fadeInUp .8s linear;
    //         }
    //         .subtitle{
    //             height: 25px;
    //             font-size: 18px;
    //             font-family: AlibabaPuHuiTi_2_75_SemiBold;
    //             color: #FFFFFF;
    //             line-height: 25px;
    //         }
    //     }
    //     .total{
    //         display: flex;
    //         height: 108px;
    //         .progressBall{
    //             display: inline-block;
    //             position: relative;
    //             width: 109px;
    //             height: 110px;
    //             margin-left: 20px;
    //             background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/ballBg.svg');
    //             background-repeat: no-repeat;
    //             background-position: left bottom;
    //             background-size: 100% 100%; 
    //             border-radius: 50%;
    //             overflow: hidden;
    //             transform-style: preserve-3d;
    //             .ballBorder{
    //                 position: absolute;
    //                 margin-top: 2px;
    //                 width: 100%;
    //                 height: 100%;
    //             }
    //             .ball-inner{
    //                 width: 218px;
    //                 height: 220px;    
    //                 border-radius:38%;
    //                 background: radial-gradient(circle,  #9537FF 1%,#1939F1 40%, #00FF49 80%);
    //                 filter: blur(2px);
    //                 position:relative;
    //                 top: 28%;
    //                 left: -48%;
    //                 -webkit-animation: wave 5s linear infinite;
    //                 z-index:66;
    //             }
    //         }
    //         .right{
    //             margin-left: 10px;
    //             .total-title{
    //                 width: 212px;
    //                 height: 22px;
    //                 margin-top: 7px;
    //                 font-size: 16px;
    //                 font-family: AlibabaPuHuiTi_2_105_Heavy;
    //                 color: #FFFFFF;
    //                 line-height: 22px;
    //             }
    //             .total-subtitle{
    //                 height: 17px;
    //                 font-size: 12px;
    //                 font-family: AlibabaPuHuiTi_2_55_Regular;
    //                 color: #B4B4B4;
    //                 line-height: 17px;
    //             }
    //             .price{
    //                 height: 41px;
    //                 margin-top: 5px;
    //                 font-size: 30px;
    //                 font-family: AlibabaPuHuiTi_2_105_Heavy;
    //                 color: #04FF55;
    //                 line-height: 41px;
    //             }
    //         }
    //     }
    //     .data{
    //         width: 338px;
    //         height: 256px;
    //         margin: 0 auto;
    //         margin-top: -12px;
    //         background: #171C28;
    //         overflow: hidden;
    //         li{
    //             margin-top: 23px;
    //             text-align: center;
    //             .txt{
    //                 height: 22px;
    //                 font-size: 16px;
    //                 font-family: AlibabaPuHuiTi_2_55_Regular;
    //                 color: #B3B3B3;
    //                 line-height: 22px;
    //             }
    //             .percent{
    //                 height: 44px;
    //                 font-size: 31px;
    //                 font-family: AlibabaPuHuiTi_2_85_Bold;
    //                 color: #F2F2F2;
    //                 line-height: 44px;
    //             }
    //         }
    //         li + li{
    //             margin-top: 7px;
    //         }
    //     }
    //     .pledge{
    //         height: 1268px;
    //         margin: 0 auto;
    //         .title{
    //             height: 28px;
    //             margin: 30px 0;
    //             font-size: 20px;
    //             font-family: AlibabaPuHuiTi_2_105_Heavy;
    //             color: #FFFFFF;
    //             line-height: 28px;
    //             text-align: center;
    //             span{
    //                 color: #EDFF00;
    //             }
    //         }
    //         ul{
    //             display: flex;
    //             flex-direction: column;
    //             align-items: center;
    //             li{
    //                 position: relative;
    //                 width: 226px;
    //                 height: 260px;
    //                 background: linear-gradient(61deg, rgba(105, 0, 255, .43) 0%, rgba(88, 0, 255, 0) 100%);
    //                 border: 2px solid rgba(62, 65, 68, .43);
    //                 .img-wrap{
    //                     display: flex;
    //                     justify-content: center;
    //                     align-items: center;
    //                     position: absolute;
    //                     top: 0;
    //                     left: 0;
    //                     width: 100%;
    //                     height: 100%;
    //                     img{
    //                         width: 100%;
    //                         height: 100%;
    //                     }
    //                     img:hover{
    //                         transform: scale(1.2);
    //                     }
    //                     .lockedImg{
    //                         width: 97px;
    //                         height: 108px;
    //                         margin-bottom: 30px;
    //                     }
    //                 }
    //                 .top-txt{
    //                     height: 16px;
    //                     margin-top: 10px;
    //                     font-size: 12px;
    //                     font-family: AlibabaPuHuiTi_2_75_SemiBold;
    //                     color: #FFFFFF;
    //                     line-height: 16px;
    //                     text-align: center;
    //                 }
    //                 .bot-txt{
    //                     position: absolute;
    //                     bottom: 0;
    //                     width: 100%;
    //                     height: 52px;
    //                     font-size: 16px;
    //                     font-family: AlibabaPuHuiTi_2_115_Black;
    //                     color: #04FF55;
    //                     line-height: 52px;
    //                     text-align: center;
    //                     img{
    //                         position: absolute;
    //                         bottom: 0;
    //                         left: 0;
    //                         right: 0;
    //                         width: 101%;
    //                         // height: 100%;
    //                     }
    //                 }
    //                 .greenNft > img:hover{
    //                     filter: drop-shadow(0 0 5px #04FF55);
    //                 }
    //                 .whiteNft > img:hover{
    //                     filter: drop-shadow(0 0 .5vw #ffffff);
    //                 }
    //                 .grayNft > img:hover{
    //                     filter: drop-shadow(0 0 .5vw #7E52FF);
    //                 }
    //                 .greenNft{
    //                     color: #04FF55;
    //                 }
    //                 .whiteNft{
    //                     color: #ffffff;
    //                 }
    //                 .grayNft{
    //                     color: #7E52FF;
    //                 }
    //             }
    //             li + li{
    //                 margin-top: 34px;
    //             }
    //         }
    //     }
    // }
    // .footer{
    //     position: relative;
    //     display: flex;
    //     flex-direction: column;
    //     width: 100%;
    //     height: 206px;
    //     background-color: #121122;
    //     align-items: center;
    //     overflow: hidden;
    //     a{
    //         color: #ffffff;
    //         text-decoration: none;
    //     }
    //     .mask{
    //         position: absolute;
    //         width: 96%;
    //         height: 100%;
    //         margin-left: 4%;
    //         // background-color: #121122;
    //         background-color: #121122;
    //     }
    //    .footer-wrap{
    //        position: absolute;
    //        width: 100%;
    //        height: 100%;
    //        text-align: center;
    //        margin-top: 30px;
    //         .logo{
    //             width: 181px;
    //             height: 49px;
    //             margin-top: 10px;
    //             margin-bottom: 5px;
    //         }
    //         .clause{
    //             display: flex;
    //             justify-content: center;
    //             margin-bottom: 25px;
    //             height: 23px;
    //             font-size: 14px;
    //             font-family: Poppins-Regular, Poppins;
    //             font-weight: 400;
    //             color: #FFFFFF;
    //             line-height: 23px;
    //             .policy{
    //                 width: 101px;
    //                 margin-right: 14px;
    //                 white-space: nowrap;
    //             }
    //             .policy > a:hover{
    //                 color: #04FF55;
    //             }
    //             .terms{
    //                 width: 145px;
    //                 white-space: nowrap;
    //             }
    //             .terms > a:hover{
    //                 color: #04FF55;
    //             }
    //         }
    //         .icon{
    //             width: 100%;
    //             display: flex;
    //             justify-content: center;
    //             margin-bottom: 22px;
    //             img{
    //                 width: 41px;
    //                 height: 41px;
    //             }
    //             img:not(.medium){
    //                 margin-left: 31px;
    //             }
    //             img:hover{
    //                 transform: scale(1.1);
    //             }
    //         }
    //         .desc{
    //             height: 13px;
    //             font-size: 8px;
    //             font-family: Poppins-Regular, Poppins;
    //             font-weight: 400;
    //             color: #FFFFFF;
    //             line-height: 13px;
    //         }
    //    }
    // }
</style>
