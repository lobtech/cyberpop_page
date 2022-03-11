<template>
    <header-a path="/mystery" :type="2"></header-a>
    <div class="section">
        <div class="title">COMING SOON</div>
    </div>
    <div class="boxBg">
        <div class="video">
            <video-bg 
id="videobg" :sources="[`https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxbanner.mp4`]">
            </video-bg>
            <div class="titles"> 
                <div class="titles-wrap">
                    <div class="title">CYBERPOP <br/>BLIND BOX</div>
                    <div class="round">
                        <div>ROUND #1</div> 
                        <div>NFT</div>
                    </div>
                    <div class="subtitle">INCLUDES SUPER VALUE FOR LIMITED TIME</div>
                    <div class="desc">
                        The blind box of promotional NFTs minted by the Cyberpop DAO marks the beginning of our Cyberspace new world journey.
                    </div>
                </div>
            </div>
            <div class="maskBlur"></div>
        </div>
        <div class="blind">
            <div class="title">BLIND BOX <span> TYPE</span></div>
            <ul>
                <li>
                    <div class="boxVideo">
                        <video autoplay loop>
                            <source src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox1.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="weapon">
                        <div class="name">WEAPON BLIND BOX</div>
                        <div class="introduce">
                            Weapons can give the character better abilities and make the character stronger. Stronger weapons allow you to perform stronger fights . 
                        </div>
                        <div class="price">
                            <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                            <div class="num">— —</div>
                            <div class="exchange">≈$- -</div>
                        </div>
                        <div class="btn">
                            <div class="purchase">PURCHASE</div>
                            <div class="details" @click="toDetails(1)">DETAILS</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="boxVideo">
                        <video autoplay loop>
                            <source src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox2.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="weapon">
                        <div class="name">WEAPON BLIND BOX</div>
                        <div class="introduce">
                            Weapons can give the character better abilities and make the character stronger. Stronger weapons allow you to perform stronger fights . 
                        </div>
                        <div class="price">
                            <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                            <div class="num">— —</div>
                            <div class="exchange">≈$- -</div>
                        </div>
                        <div class="btn">
                            <div class="purchase">PURCHASE</div>
                            <div class="details" @click="toDetails(2)">DETAILS</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="boxVideo">
                        <video class="third" autoplay loop>
                            <source src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox3.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="weapon">
                        <div class="name">WEAPON BLIND BOX</div>
                        <div class="introduce">
                            Weapons can give the character better abilities and make the character stronger. Stronger weapons allow you to perform stronger fights . 
                        </div>
                        <div class="price">
                            <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                            <div class="num">— —</div>
                            <div class="exchange">≈$- -</div>
                        </div>
                        <div class="btn">
                            <div class="purchase">PURCHASE</div>
                            <div class="details" @click="toDetails(3)">DETAILS</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="boxVideo">
                        <video autoplay loop>
                            <source src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox4.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div class="weapon">
                        <div class="name">WEAPON BLIND BOX</div>
                        <div class="introduce">
                            Weapons can give the character better abilities and make the character stronger. Stronger weapons allow you to perform stronger fights .
                        </div>
                        <div class="price">
                            <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                            <div class="num">— —</div>
                            <div class="exchange">≈$- -</div>
                        </div>
                        <div class="btn">
                            <div class="purchase">PURCHASE</div>
                            <div class="details" @click="toDetails(4)">DETAILS</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <footer-a></footer-a>
    </div>
    <!-- <coming-a v-show="showComingFlag"></coming-a> -->
    <message-a v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import router from '@/router';


// // coming soon
// let showComingFlag:any = ref(false)
// const ctimer:any = ref(null)

// const showComing = () => {
//     clearTimeout(ctimer.value);
//     // default animation
//     store.dispatch('user/addComingOut', false)
//     // show coming view
//     showComingFlag.value = true;
//     ctimer.value = setTimeout(() => {
//         // change animation
//         store.dispatch('user/addComingOut', true)
//     },3000)
// }



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

const toDetails = (type:any) => {
    router.push({ name: 'details',params:{ type }})
}


onMounted(() => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',false);// close message dialog
    store.dispatch('user/metaChange',false);
})

</script>
<style lang="less" scoped>
    a {
    text-decoration: none;
    }
    
    .section{
        z-index: 8;
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,.5);
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
    .boxBg{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #080707;
        .VideoBg{
            height: 100% !important;
        }
        .video{
            position: relative;
            width: 100%;
            height: 33.64vw;
            margin-top: 5.5vw;
            background-color: #000000;
            .titles{
                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                .titles-wrap{
                    width: 100%;
                    margin-left: 19.16vw;
                    overflow: hidden;
                    .title{
                        margin-top: 5.46vw;
                        // font-size: 2.6vw;
                        font-size: 4.11vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        // line-height: 3vw;
                        line-height: 4.37vw;
                        animation: fadeInUp .8s linear;
                    }
                    .round{
                        display: flex;
                        align-items: flex-end;
                        height: 4.58vw;
                        margin-top: .625vw;
                        div:nth-child(1){
                            width: 6.77vw;
                            height: 1.92vw;
                            margin-right: 1.77vw;
                            font-size: .98vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            color: #000000;
                            line-height: 2vw;
                            text-align: center;
                            background-color: #04FFA2;
                            clip-path: polygon(0 0, 100% 0, 100% 65%, 92% 100%, 0 100%);
                        }
                        div:nth-child(2){
                            font-size: 5.78vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            line-height: 4.58vw;
                            background: linear-gradient(76deg, #8900FF 0%, #FFFFFF 30%, #00FFBF 46%, #9C3DFF 100%);
                            background-clip: text;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                    }
                    .subtitle{
                        margin: .78vw 0 1.14vw;
                        font-size: 1.45vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #04FFA2;
                        line-height: 1.87vw;
                    }
                    .desc{
                        width: 27.86vw;
                        margin-bottom: 7.03vw;
                        font-size: .88vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFFFFF;
                        line-height: 1.71vw;
                    }
                }
            }
            .maskBlur{
                position: absolute;
                bottom: -1vw;
                width: 100%;
                height: 4vw;
                background: linear-gradient(180deg, rgba(8, 7, 7,0) 0, rgba(8, 7, 7, 1) 50%);
            }
        }
        .blind{
            background: #080707;
            .title{
                margin-top: 1.35vw;
                font-size: 1.77vw;
                color: #ffffff;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 4.06vw;
                text-align: center;
                span{
                    background: linear-gradient(254deg, #04FFA2 0%, #37D4BA 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
            ul{
                padding: .3vw 0 2.91vw;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxBg.png');
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: 100% auto;
                li{
                    display: flex;
                    width: 54.84vw;
                    // height: 23.64vw;
                    margin: 0 auto 2.03vw;
                    padding: 2.16vw 1.97vw;
                    background: #1A1728;
                    border-radius: .42vw;
                    border: .2vw solid #434248;
                    .boxVideo{
                        position: relative;
                        width: 19.32vw;
                        height: 19.32vw;
                        margin-right: 3.2vw;
                        border-radius: 1vw;
                        overflow: hidden;
                        video{
                            position: absolute;
                            top: 50.2%;
                            left: 50%;
                            width: 134%;
                            transform: translate(-50%,-50%);
                        }
                        .third{
                            width: 177%;
                        }
                    }
                    .weapon{
                        // flex: 1;
                        // display: flex;
                        width: 27.86vw;
                        flex-direction: column;
                        color: #ffffff;
                        .name{
                            height: 1.77vw;
                            margin-bottom: 1.77vw;
                            font-size: 1.77vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            line-height: 1.77vw;
                        }
                        .introduce{
                            // flex: 1;
                            width: 25.1vw;
                            min-height: 7.5vw;
                            font-size: .88vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            line-height: 1.35vw;  
                        }
                        .price{
                            display: flex;
                            align-items: center;
                            margin-top: 1vw;
                            img{
                                width: 1.71vw;
                                height: 1.71vw;
                            }
                            .num{
                                // width: 6.3vw;
                                width: 5.4vw;
                                margin-right: .8vw;
                                font-size: 1.71vw;
                                font-family: Oswald-Regular;
                                font-weight: 900;
                                color: #F1BF34;
                                line-height: 2.39vw;
                                text-align: right;
                            }
                            .exchange{
                                font-size: .98vw;
                                font-family: Oswald-Regular;
                                color: #B3B3B3;
                                line-height: 1.35vw;
                            }
                        }
                        .btn{
                            display: flex;
                            justify-content: flex-end;
                            width: 100%;
                            height: 2.81vw;
                            margin-top: 2.08vw;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            line-height: 2.81vw;
                            text-align: center;
                            .purchase{
                                width: 11.09vw;
                                height: 2.81vw;
                                margin-right: 1.25vw;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.png');
                                background-size: 100% 100%;
                                cursor: pointer;
                            }
                            .details{
                                width: 9.89vw;
                                height: 2.81vw;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/cancle.png');
                                background-size: 100% 100%;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
