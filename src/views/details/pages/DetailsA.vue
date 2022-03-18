<template>
    <message-a v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-a>
    <header-a path="/details" :type="2"></header-a>
    <div class="details">
        <div class="box">
            <div class="video">
                <video autoplay loop ref="thirdVideo">
                    <source :src="videoUrlType" type="video/mp4">
                </video>
            </div>
            <div class="desc">
                <div class="title">{{$t('message.details.box_title')}}</div>
                <div class="price">
                    <div class="left">
                        <div class="text1">{{$t('message.details.box_price')}} ≈ $4545</div>
                        <div class="text2">
                            <img src="" alt="">
                            <div>0.36 <span>{{$t('message.details.box_eth')}}</span></div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="right">
                        <div class="text1">{{$t('message.details.box_remain')}} <span>238</span></div>
                        <div class="text2">{{$t('message.details.box_sale')}} <div>21<span>H</span>:33<span>M</span>:48<span>S</span></div></div>
                    </div>
                </div>
                <div class="btn">
                    <div class="purchase">{{$t('message.details.box_btn_pur')}}</div>
                    <div class="view">{{$t('message.details.box_btn_view')}}</div>
                </div>
            </div>
        </div>
        <div class="changeMenu">
            <!-- <div class="content" :class="!exMenu ? 'active':''" @click="exMenu = false">CONTENT</div>
            <div class="intro" :class="exMenu ? 'active':''" @click="exMenu = true">INTRODUCTION</div>
            <div class="intro" :class="exMenu ? 'active':''" @click="exMenu = true">INTRODUCTION</div> -->

            <div class="content" :class="exMenu == 0 ? 'active':''" @click="intClick(0)">{{$t('message.details.exMenu1')}}</div>
            <div class="intro" :class="exMenu == 1 ? 'active':''" @click="intClick(1)">{{$t('message.details.exMenu2')}}</div>
            <div class="terms" :class="exMenu == 2 ? 'active':''" @click="intClick(2)">{{$t('message.details.exMenu3')}}</div>
        </div>
        <div class="list">
            <ul class="content" v-show="exMenu == 0">
                <li>
                    <div class="wrap">
                        <div class="pic">
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-img1.png" alt="">
                        </div>
                        <div class="data">
                            <div class="prob">
                                <div class="name">{{$t('message.details.list.name1')}}</div>
                                <div class="num">50%</div>
                            </div>
                            <div class="line"></div>
                            <div class="attr">
                                <div class="name">{{$t('message.details.list.name2')}}</div>
                                <div class="item">
                                    <div>{{$t('message.details.list.name2_item1')}}</div>
                                    <div>5~<span class="yell">12</span></div>
                                    <div>{{$t('message.details.list.name2_item2')}}</div>
                                    <div>5~<span class="yell">12</span></div>
                                </div>
                                <div class="item">
                                    <div>{{$t('message.details.list.name2_item3')}}</div>
                                    <div>5~<span>12</span></div>
                                    <div>{{$t('message.details.list.name2_item4')}}</div>
                                    <div>5~<span>12</span></div>
                                </div>
                                <div class="item">
                                    <div>{{$t('message.details.list.name2_item5')}}</div>
                                    <div>5~<span>12</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="prince">{{$t('message.details.list.prince')}}</div>
                    <div class="princeShadow"></div>
                </li> 
                <li>
                    <div class="wrap">
                        <div class="pic">
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-img1.png" alt="">
                        </div>
                        <div class="data">
                            <div class="prob">
                                <div class="name">{{$t('message.details.list.name1')}}</div>
                                <div class="num">50%</div>
                            </div>
                            <div class="line"></div>
                            <div class="attr">
                                <div class="name">{{$t('message.details.list.name2')}}</div>
                                <div class="item">
                                    <div>{{$t('message.details.list.name2_item1')}}</div>
                                    <div>5~<span class="yell">12</span></div>
                                    <div>{{$t('message.details.list.name2_item2')}}</div>
                                    <div>5~<span class="yell">12</span></div>
                                </div>
                                <div class="item">
                                    <div>{{$t('message.details.list.name2_item3')}}</div>
                                    <div>5~<span>12</span></div>
                                    <div>{{$t('message.details.list.name2_item4')}}</div>
                                    <div>5~<span>12</span></div>
                                </div>
                                <div class="item">
                                    <div>{{$t('message.details.list.name2_item5')}}</div>
                                    <div>5~<span>12</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="prince">{{$t('message.details.list.prince')}}</div>
                    <div class="princeShadow"></div>
                </li> 
            </ul>
            <ul class="introduction" v-show="exMenu == 1">
                <li>
                    <div class="title">{{$t('message.details.intro.title1')}} 1</div>
                    <div class="desc">
                        {{$t('message.details.intro.desc1')}}
                    </div>
                </li>
                <li>
                    <div class="title">{{$t('message.details.intro.title1')}} 2</div>
                    <div class="desc">
                        {{$t('message.details.intro.desc2')}}
                    </div>
                </li>
            </ul>
            <div class="terms" v-show="exMenu == 2"></div>
            <div class="link">
                <a :href="copyText">{{copyText}}</a>
                <div class="copy" @click="copyUrl(copyText)">{{$t('message.details.link')}}</div>
            </div>
        </div>
    </div>
    <footer-a></footer-a>   
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
const router = useRouter()
const { proxy } = getCurrentInstance() as any

// changeMenu
let exMenu:any = ref(0) 
const intClick = (type:any) => {
    exMenu.value = type    
}

// video
let thirdVideo:any = ref(null)
let videoUrlType:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox1.mp4');
const videoUrl = () => {
    const type:any = proxy.$route.params.type;
    switch (type){
        case '1':
            videoUrlType.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox1.mp4';
            break;
        case '2':
            videoUrlType.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox2.mp4';
            break;
        case '3':
            thirdVideo.value.classList.add('third')
            videoUrlType.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox3.mp4';
            break;
        default:
            videoUrlType.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox4.mp4';
            break;
    }
}




const copyText:any = 'https://game.cyberpop.online/'
const copyUrl = (e:any) => {
    const input = document.createElement("input");
    document.body.appendChild(input);
    input.setAttribute("value", e);
    input.select();
    //返回值为一个Boolean，如果是 false 则表示操作不被支持或未被启用
    if (document.execCommand("copy")) {
        document.execCommand("copy");
        messageAlert(true, proxy.$t('message.common.mess_succ'))
    }else{
        messageAlert(false, proxy.$t('message.common.mess_copy_err'))
    }
    //删除这个节点
    document.body.removeChild(input);
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



onMounted( () => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',false);// close message dialog
    store.dispatch('user/metaChange',false);
    videoUrl();
    
})

</script>
<style lang="less" scoped>
    .details{
        padding-top: 7.6vw;
        color: #ffffff;
        background-color: #080707;
        background-image: url('../../../assets/nwAssets/bodyBg.png');
        background-repeat: no-repeat;
        background-position: left top;
        background-size: 100% auto;
        overflow: hidden;
        .box{
            display: flex;
            align-items: center;
            justify-content: center;
            // margin-left: 24.47vw;
            height: 16.97vw;
            .video{
                position: relative;
                width: 16.97vw;
                height: 16.97vw;
                margin-right: 3.125vw;
                border-radius: 1vw;
                overflow: hidden;
                video{
                    position: absolute;
                    top: 50.4%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 134%;
                }
                video.third{
                    top: 49.9%;
                    width: 177%;
                }
            }
            .desc{
                // width: 29.37vw;
                width: 31vw;
                height: 15.98vw;
                .title{
                    height: 3.48vw;
                    font-size: 2.5vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    line-height: 3.48vw;
                }
                .price{
                    display: flex;
                    align-items: center;
                    height: 7.08vw;
                    margin: .41vw 0 1.87vw;
                    .left{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        width: 10.36vw;
                        height: 100%;
                        .text1{
                            height: 1.45vw;
                            margin-top: 1.04vw;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            line-height: 1.45vw;
                            color: rgba(255, 255, 255, 0.7);
                        }
                        .text2{
                            height: 4.37vw;
                            img{

                            }
                            div{
                                display: flex;
                                align-items: flex-end;
                                font-size: 2.91vw;
                                font-family: Oswald-Regular;
                                span{
                                    margin-left: .4vw;
                                    margin-bottom: .1vw;
                                    font-size: 2vw;
                                }
                            }
                        }
                    }
                    .line{
                        width: .05vw;
                        height: 5.2vw;
                        margin: 0 1.45vw;
                        background: #A81BFF;
                    }
                    .right{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        // width: 16.04vw;
                        height: 100%;
                        padding: .4vw 0;
                        .text1{
                            display: flex;
                            align-items: center;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            line-height: 1.04vw;
                            color: rgba(255, 255, 255, 0.7);
                            span{
                                height: 2.76vw;
                                margin-left: .7vw;
                                font-size: 1.87vw;
                                font-family: Oswald-Regular;
                                color: #A81BFF;
                                line-height: 2.76vw;
                            }
                        }
                        .text2{
                            display: flex;
                            align-items: center;
                            height: 2.76vw;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            // line-height: 1.04vw;
                            line-height: 2.76vw;
                            color: rgba(255, 255, 255, 0.7);
                            white-space: nowrap;
                            div{
                                margin-left: .7vw;
                                font-size: 1.87vw;
                                font-family: Oswald-Regular;
                                color: #A81BFF;
                                span{
                                    font-size: 1.25vw;
                                }
                            }
                        }
                    }
                }
            }
            .btn{
                display: flex;
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                line-height: 3.125vw;
                text-align: center;
                div:nth-child(1){
                    width: 9.94vw;
                    height: 3.125vw;
                    margin-right: 1.66vw;
                    background: linear-gradient(300deg, #EDFF00 0%, #CB33DF 58%);
                    clip-path: polygon(0 0, 86% 0, 100% 26%,100% 65%, 100% 100%, 0 100%, 8% 100%, 0% 82%);
                    cursor: pointer;
                }
                div:nth-child(2){
                    width: 13.54vw;
                    height: 3.125vw;
                    color: #DE2DCF;
                    white-space: nowrap;
                    background-image: url('../../../assets/nwbox/viewBorder.png');
                    background-size: 100% 100%;
                    cursor: pointer;
                }
            }
        }
        .changeMenu{
            display: flex;
            justify-content: center;
            height: 1.45vw;
            margin: 4.27vw 0 1.87vw;
            font-size: 1.04vw;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            line-height: 1.45vw;
            text-align: center;
            div{
                margin: 0 .935vw;
                cursor: pointer;
            }
            a{
                text-decoration: none;
                color: #ffffff;
            }
            div.active{
                color: #DE2DCF;
                a{
                    color: #DE2DCF;
                }
            }
            div.active:after{
                content: '';
                display: inline-block;
                width: 100%;
                height: .5vw;
                background: linear-gradient(90deg, rgba(222, 45, 207, 0) 0%, #DE2DCF 51%, rgba(222, 45, 207, 0) 100%);
            }
        }
        .list{
            .content{
                li{
                    position: relative;
                    width: 47.91vw;
                    height: 8.48vw;
                    margin: 0 auto;
                    background-image: url('../../../assets/nwbox/contentBg.png');
                    background-size: 100% 100%;
                    .prince{
                        z-index: 2;
                        position: relative;
                        width: 8.85vw;
                        height: 1.77vw;
                        margin-top: -1.2vw;
                        font-size: 1.25vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        line-height: 1.77vw;
                        background: #8478FF;
                        text-align: center;
                        clip-path: polygon(0 0, 100% 0%, 80% 0%, 100% 100%, 0% 100%);
                    }
                    .princeShadow{
                        width: 8.85vw;
                        height: 1.77vw;
                        margin: -1.2vw 0 0 1.3vw;
                        background: rgba(0,0,0,.8);
                        clip-path: polygon(0 0, 100% 0%, 80% 0%, 100% 100%, 0% 100%);
                    }
                    .wrap{
                        display: flex;
                        position: relative;
                        .pic{
                            position: relative;
                            width: 6.875vw;
                            height: 6.875vw;
                            margin: .83vw 3.22vw .78vw .83vw;
                            background: #140F16;
                            clip-path: polygon(0% 18%, 18% 0%, 100% 0%, 100% 100%, 0% 100%);
                            img{
                                position: absolute;
                                bottom: 0;
                                width: 100%;
                            }
                        }
                        .data{
                            display: flex;
                            .prob{
                                width: 5.52vw;
                                margin-top: 1.19vw;
                                text-align: center;
                                .name{
                                    height: 2.39vw;
                                    font-size: 1.04vw;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #A81BFF;
                                    line-height: 1.19vw;
                                }
                                .num{
                                    height: 3.69vw;
                                    margin-top: .2vw;
                                    font-size: 2.5vw;
                                    font-family: Oswald-Regular;
                                    color: #04FFA2;
                                    line-height: 2.91vw;
                                    letter-spacing: .2vw;
                                }
                            }
                            .line{
                                width: .05vw;
                                height: 3.95vw;
                                margin: auto 1.66vw;
                                background: #A81BFF;
                            }
                            .attr{
                                margin-top: 1.19vw;
                                height: 1.45vw;
                                font-size: 1.04vw;
                                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                line-height: 1.19vw;
                                .name{
                                    margin-bottom: .26vw;
                                    color: #A81BFF;
                                }
                                .item{
                                    display: flex;
                                    height: 1.56vw;
                                    color: rgba(255, 255, 255, 0.7);
                                    div:nth-child(1),div:nth-child(3){
                                        width: 6.66vw;
                                        margin-right: .83vw;
                                    }
                                    div:nth-child(2),div:nth-child(4){
                                        width: 1.97vw;
                                        height: 1.56vw;
                                        margin-right: 1.25vw;
                                        color: #ffffff;
                                        font-family: Oswald-Regular;
                                        font-weight: bold;
                                        span.yell{
                                            color: #EDFF00;
                                        }
                                    }
                                    div:nth-child(4){
                                        margin-right: 0;
                                    }
                                }
                            }
                        }   
                    }
                }
                li + li{
                    margin-top: 1.66vw;
                }
            }
            .introduction{
                width: 47.91vw;
                // height: 22.6vw;
                min-height: 22.6vw;
                margin: 2.6vw auto 0;
                padding: 2.08vw;
                background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                            linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                border: 2px solid;
                border-image: linear-gradient(270deg, rgba(176, 65, 216, 1), rgba(139, 255, 178, 0.5)) 2 2;
                li{
                    .title{
                        height: 1.77vw;
                        margin-bottom: 1.25vw;
                        font-size: 1.25vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #04FFA2;
                        line-height: 1.45vw;
                    }
                    .desc{
                        width: 43.75vw;
                        font-size: .83vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFFFFF;
                        line-height: 1.04vw;
                    }
                }
                li + li{
                    margin-top: 2.08vw;
                }
            }
            .terms{
                
            }
        }
        .link{
            display: flex;
            width: 47.91vw;
            height: 3.75vw;
            // margin: 2.86vw auto 16.51vw;
            margin: 2.86vw auto 46vh;
            line-height: 3.75vw;
            text-align: center;
            clip-path: polygon(0 0, 98% 0%, 100% 20%, 100% 100%, 0% 100%);
            a{
                flex: 1;
                height: 100%;
                text-decoration: none;
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                color: #DE2DCF;
                border: .11vw solid #DE2DCF;
            }
            div{
                width: 14.47vw;
                height: 100%;
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                background: linear-gradient(213deg, #B041D8 0%, #DE2DCF 100%);
                cursor: pointer;
            }
        }
    }
    @media screen {
        @media (max-width: 1000px) {
            .details{
                padding-top: 12vw !important;
            }
            .content > li{
                width: 60vw !important;
                .wrap{
                    .data{
                        .prob{
                            width: 8vw !important;
                        }
                        .attr{
                            .item{
                                margin-left: -1vw;
                                div:nth-child(1),div:nth-child(3){
                                    width: 10vw !important;
                                    transform: scale(.8) !important;
                                }
                                div:nth-child(2),div:nth-child(4){
                                    width: 4vw !important;
                                    transform: scale(.8) !important;
                                }
                            }
                        }
                    }   
                }
            } 
            .introduction{
                width: 60vw !important;
                li{
                    .desc{
                        width: 55.9vw !important;
                    }
                }
            }
            .btn {
                margin-left: -1vw;
                .purchase{
                    width: 11.93vw !important;
                    height: 3.75vw !important;
                    line-height: 3.75vw !important;
                    transform: scale(.8);
                }
                .view{
                    width: 16.248vw !important;
                    height: 3.75vw !important;
                    line-height: 3.75vw !important;
                    transform: scale(.8);
                }  
            }
            .link{
                width: 60vw !important;
                div{
                    width: 18vw !important;
                }
            }
        }
    }
</style>
