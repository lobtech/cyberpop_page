<template>
    <div class="home">
        <header>
            <div class="content" id="header">
                <img class="logo" :src="logoHSrc" @mouseover="changeHGif()" @mouseout="stopHGif()" alt="">
                <!-- <img class="logo" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-logo.svg" alt="logo"> -->
                <img class="menu" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/header-menu.svg" @click="showMenu()" alt="">
            </div>
            <div class="menuMask"  :class="isPage && (showMenuAni ? 'menuAnimation' : 'stopMenuAnimation')">
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
    <div class="boxBg">
        <div class="titles"> 
            <div class="left">
                <div class="title">
                    CYBERPOP <span class="purple">NFT</span><br/>MYSTERY BOX
                </div>
                <div class="round">ROUND #1</div>
                <div class="subtitle">INCLUDES SUPER VALUE FOR LIMITED TIME</div>
                <div class="desc">
                    The mystery box of promotional NFTs that have been minted by the Cyberpop DAO which mark the beginning of our journey.
                </div>
            </div>
            <div class="right">
                <video-bg 
id="videobg" :sources="[`https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxbanner.mp4`]">
                </video-bg>
                <div class="title">Sale Start time</div>
                <div class="countDown">
                    <div class="hour">23H</div>:
                    <div class="minute">11M</div>:
                    <div class="millisecond">325</div>
                </div>
            </div>
            <div class="nftCard">
                <ul class="type">
                    <li class="type-common">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-common.png" alt="">
                        <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-commonBorder0.svg" alt="">
                        <div class="mask">Common</div>
                    </li>
                    <li class="type-rare">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-rare.png" alt="">
                        <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-rareBorder0.svg" alt="">
                        <div class="mask">Rare</div>
                    </li>
                    <li class="type-epic">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-epic.png" alt="">
                        <img class="border" src="https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/type-rareBorder0.svg" alt="">
                        <div class="mask">Epic</div>
                    </li>
                </ul>
                <div class="button">
                    <div class="purchase"><div>Purchase</div></div>
                    <div class="detailbtn">Detail</div>
                </div>
            </div>
            <div class="tline"></div>
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



onMounted(() => {
    connect();
    store.dispatch('user/changeActive', 3);
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
    .boxBg{
        position: absolute;
        width: 100%;
        background-color: #000000;
        height: 1361px;
        .titles{
            display: flex;
            flex-direction: column;
            .left{
                z-index: 1;
                margin-left: 31px;
                .title{
                    position: relative;
                    margin-top: 112px;
                    font-size: 40px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 54px;
                    animation: fadeInUp .8s linear;
                    .purple{
                        height: 68px;
                        font-size: 40px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 68px;
                        background: linear-gradient(163deg, #FB52FC 0%, #8953FF 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
                .round{
                    width: 112px;
                    height: 22px;
                    margin-top: 7px;
                    font-size: 15px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    text-align: center;
                    line-height: 22px;
                    background-color: #FFFFFF;
                }
                .subtitle{
                    width: 326px;
                    height: 60px;
                    margin: 6px 0 33px 0;
                    font-size: 18px;
                    font-family: Arial-Black, Arial;
                    font-weight: 900;
                    color: #04FFA2;
                    line-height: 30px;
                }
                .desc{
                    width: 188px;
                    height: 132px;
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 22px;
                }
            }   
            .right{
                position: relative;
                height: 348px;
                margin-top: -42px;
                :deep(.VideoBg){
                    height: 348px !important;
                }
                :deep(.VideoBg video){
                    height: 348px !important;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    visibility: hidden;
                    transform: translate(-67%,-50%);
                }
                .title{
                    position: absolute;
                    right: 27px;
                    bottom: 53px;
                    width: 197px;
                    height: 20px;
                    font-size: 15px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    line-height: 20px;
                    text-align: right;
                }
                .countDown{
                    display: flex;
                    position: absolute;
                    right: 21px;
                    bottom: 20px;
                    width: 168px;
                    height: 32px;
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    line-height: 32px;
                    div{
                        width: 47px;
                        height: 32px;
                        margin: 0 2px;
                        background: #171C28;
                        border-radius: 1px;
                        text-align: center;
                    }
                }
            }
            .nftCard{
                height: 352px;
                ul{
                    display: flex;
                    justify-content: center;
                    margin-bottom: 38px;
                    li{
                        position: relative;
                        width: 94px;
                        height: 89px;
                        margin-right: 9px;
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
                            height: 20px;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 20px;
                            text-align: center;
                            background-color: rgba(255,255,255,.1);
                        }
                    }
                    li:last-child{
                        margin-right: 0;
                    }
                }
                .button{
                    text-align: center;
                    .purchase{
                        width: 100%;
                        height: 74px;
                        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0A0A0A 100%);
                        div{
                            width: 283px;
                            height: 50px;
                            margin: 0 auto;
                            margin-top: 7px;
                            font-size: 18px;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            color: #FFFFFF;
                            line-height: 50px;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/purchase.svg');
                            background-repeat: no-repeat;
                            background-size: 100% auto;
                            background-position: left top;
                        }
                    }
                    .detailbtn{
                        width: 281px;
                        height: 51px;
                        margin: 0 auto ;
                        margin-top: 14px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 51px;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwboxPhone/detailb.svg');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: left top;
                    }
                    .purchase > div:hover{
                        filter: drop-shadow(0 0 0.3rem #AA31DF);
                    }
                    .detailbtn:hover{
                        filter: drop-shadow(0 0 0.3rem #ffffff);
                    }
                }
            }
            .tline{
                width: 100%;
                height: 3px;
                border: 1px solid;
                background: linear-gradient(to right, rgba(50, 211, 123, 0), rgba(40, 18, 69, 1), rgba(6, 255, 161, 0));;
                // border-image: linear-gradient(135deg, rgba(50, 211, 123, 0), rgba(40, 18, 69, 1), rgba(6, 255, 161, 0)) 1 1;
            }
        }
        .footer{
            position: absolute;
            bottom: 0;
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
    }
</style>
