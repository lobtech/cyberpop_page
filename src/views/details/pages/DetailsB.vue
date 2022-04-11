<template>
    <header-b path="/details" :type="2"></header-b>
    <div class="section">
        <div class="title">{{$t('message.mining.coming')}}</div>
    </div>
    <div class="details">
        <div class="box">
            <div class="video">
                <video autoplay loop ref="thirdVideo">
                    <source :src="videoUrlType" type="video/mp4">
                </video>
            </div>
            <div class="title">{{$t('message.details.box_title')}}</div>
            <div class="left">
                <div class="text1">{{$t('message.details.box_price')}} ≈ $4545</div>
                <div class="text2">
                    <img src="" alt="">
                    <div>0.36 <span>{{$t('message.details.box_eth')}}</span></div>
                </div>
            </div>
            <div class="right">
                <div class="text1">
                    <div>{{$t('message.details.box_remain')}}</div> 
                    <div>238</div>
                </div>
                <div class="line"></div>
                <div class="text2">
                    <div>{{$t('message.details.box_sale')}}</div>
                    <div>21<span>H</span>:33<span>M</span>:48<span>S</span></div>
                </div>
            </div>
            <div class="btn">
                <div class="purchase">{{$t('message.details.box_btn_pur')}}</div>
                <div class="view">{{$t('message.details.box_btn_view')}}</div>
            </div>
        </div>
        <div class="changeMenu">
            <div class="content" :class="exMenu == 0 ? 'active':''" @click="intClick(0)">{{$t('message.details.exMenu1')}}</div>
            <div class="intro" :class="exMenu == 1 ? 'active':''" @click="intClick(1)">{{$t('message.details.exMenu2')}}</div>
            <div class="terms" :class="exMenu == 2 ? 'active':''" @click="intClick(2)">{{$t('message.details.exMenu3')}}</div>
        </div>
        <div class="list">
            <ul class="content" v-show="exMenu == 0">
                <li>
                    <div class="image">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-img1.png" alt="">
                    </div>
                    <div class="title">{{$t('message.details.list.prince_b')}}</div>
                    <div class="prob">
                        <div class="name1">{{$t('message.details.list.name1')}}</div>
                        <div class="num">50<span>%</span></div>
                    </div>
                    <div class="name2">{{$t('message.details.list.name2')}}</div>
                    <div class="item">
                        <div>{{$t('message.details.list.name2_item1')}}<div>5~<span class="yell">12</span></div></div>
                        <div>{{$t('message.details.list.name2_item2')}}<div>5~<span class="yell">12</span></div></div>
                        <div>{{$t('message.details.list.name2_item3')}}<div>5~<span>12</span></div></div>
                        <div>{{$t('message.details.list.name2_item4')}}<div>5~<span>12</span></div></div>
                        <div>{{$t('message.details.list.name2_item5')}}<div>5~<span>12</span></div></div>
                    </div>
                </li> 
                <li>
                    <div class="image">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-img1.png" alt="">
                    </div>
                    <div class="title">{{$t('message.details.list.prince_b')}}</div>
                    <div class="prob">
                        <div class="name1">{{$t('message.details.list.name1')}}</div>
                        <div class="num">50<span>%</span></div>
                    </div>
                    <div class="name2">{{$t('message.details.list.name2')}}</div>
                    <div class="item">
                        <div>{{$t('message.details.list.name2_item1')}}<div>5~<span class="yell">12</span></div></div>
                        <div>{{$t('message.details.list.name2_item2')}}<div>5~<span class="yell">12</span></div></div>
                        <div>{{$t('message.details.list.name2_item3')}}<div>5~<span>12</span></div></div>
                        <div>{{$t('message.details.list.name2_item4')}}<div>5~<span>12</span></div></div>
                        <div>{{$t('message.details.list.name2_item5')}}<div>5~<span>12</span></div></div>
                    </div>
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
                <div class="title">{{$t('message.details.share_link')}}</div>
                <div class="wrap">
                    <a :href="copyText">{{copyText}}</a>
                    <div class="copy" @click="copyUrl(copyText)">{{$t('message.details.link_b')}}</div>
                </div>
            </div>
        </div>
    </div>
    <footer-b></footer-b>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
const router = useRouter()
const { proxy } = getCurrentInstance() as any;


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
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: proxy.$t('message.common.mess_succ')}})
    }else{
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: proxy.$t('message.common.mess_copy_err')}})
    }
    //删除这个节点
    document.body.removeChild(input);
}



onMounted( () => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
    videoUrl();
})


</script>
<style lang="less" scoped>
    .section{
        z-index: 8;
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        width: 100%;
        height: 120vh;
        background: rgba(0,0,0,.5);
        overflow: hidden;
        .title{
            width: 100%;
            height: 90px;
            margin-top: 200px;
            font-size: 18px;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            color: #FFFFFF;
            line-height: 90px;
            letter-spacing: 18px;
            text-align: center;
            text-indent: 14px;
            background-image: url('../../../assets/nwmining/coming-bg.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 110% auto;
        }
    }
    .details{
        padding: 0 36px;
        color: #ffffff;
        background-color: #000000;
        overflow: hidden;
        .box{
            margin-top: 44px;
            overflow: hidden;
            .video{
                position: relative;
                width: 100%;
                height: 303px;
                margin: 32px auto;
                border-radius: 10px;
                overflow: hidden;
                video{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 133%;
                    // height: 303px;
                }
                video.third{
                    width: 176%;
                }
            }
            .title{
                height: 50px;
                font-size: 36px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                line-height: 42px;
            }
            .left{
                height: 66px;
                margin: 8px 0 16px;
                .text1{
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 16px;
                }
                .text2{
                    display: flex;
                    height: 50px;
                    img{

                    }
                    div{
                        height: 50px;
                        font-size: 36px;
                        font-family: Oswald-Regular;
                        font-weight: 400;
                        line-height: 50px;
                        span{
                            // margin-left: .4vw;
                            // margin-bottom: .1vw;
                            font-size: 18px;
                        }
                    }
                }
            }
            .right{
                display: flex;
                height: 57px;
                .text1,.text2{
                    width: 62px;
                    height: 16px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    line-height: 16px;
                    color: rgba(255, 255, 255, 0.7);
                    div:nth-child(2){
                        height: 40px;
                        font-size: 28px;
                        font-family: Oswald-Regular;
                        font-weight: 400;
                        color: #A81BFF;
                        line-height: 40px;
                        span{
                            font-size: 20px;
                        }
                    }
                }
                .line{
                    width: 1px;
                    height: 48px;
                    margin: auto 24px;
                    background: rgba(168, 27, 255, 0.5);
                }
                .text2{
                    width: 192px;
                }
            }
            .btn{
                margin-top: 25px;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                line-height: 48px;
                text-align: center;
                div:nth-child(1){
                    width: 100%;
                    height: 48px;
                    margin-bottom: 20px;
                    background: linear-gradient(300deg, #EDFF00 0%, #CB33DF 58%);
                    clip-path: polygon(0 0, 86% 0, 100% 26%,100% 65%, 100% 100%, 0 100%, 8% 100%, 0% 82%);
                    cursor: pointer;
                }
                div:nth-child(2){
                    width: 100%;
                    height: 48px;
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
            justify-content: space-between;
            height: 30px;
            margin: 40px 0 24px;
            font-size: 16px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            line-height: 16px;
            text-align: center;
            div{
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
                height: 6px;
                background: linear-gradient(90deg, rgba(222, 45, 207, 0) 0%, #DE2DCF 51%, rgba(222, 45, 207, 0) 100%);
            }
        }
        .list{
            .content{
                li{
                    width: 100%;
                    // height: 450px;
                    padding: 16px 16px 20px;
                    background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                                linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                    border: 2px solid;
                    border-image: linear-gradient(270deg, rgba(176, 65, 216, 1), rgba(139, 255, 178, 0.5)) 2 2;
                    .image{
                        position: relative;
                        width: 100%;
                        height: 270px;
                        background: #000000;
                        img{
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                        }
                    }
                    .title{
                        height: 28px;
                        font-size: 20px;
                        margin: 20px 0;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        line-height: 23px;
                        text-align: center;
                    }
                    .prob{
                        text-align: center;
                        .name1{
                            height: 16px;
                            font-size: 12px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: rgba(255, 255, 255, 0.7);
                            line-height: 16px;
                        }
                        .num{
                            height: 53px;
                            font-size: 36px;
                            font-family: Oswald-Regular;
                            font-weight: 400;
                            color: #04FFA2;
                            line-height: 50px;
                            span{
                                font-size: 12px;
                            }
                        }
                    }
                    .name2{
                        height: 16px;
                        margin: 18px 0;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: rgba(255, 255, 255, 0.7);
                        line-height: 16px;
                        text-align: center;
                    }
                    .item{
                        color: rgba(255, 255, 255, 0.7);
                        & > div{
                            display: flex;
                            justify-content: space-between;
                            width: 80%;
                            margin: 10px auto;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            line-height: 16px;
                            div{
                                color: #ffffff;
                                font-size: 16px;
                                font-family: Oswald-Regular;
                                font-weight: bold;
                                span.yell{
                                    color: #EDFF00;
                                }
                            }
                        }
                    }
                }
                li + li{
                    margin-top: 24px;
                }
            }
            .introduction{
                width: 100%;
                margin-top: 24px;
                padding: 24px 16px;
                background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                            linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                border: 2px solid;
                border-image: linear-gradient(270deg, rgba(176, 65, 216, 1), rgba(139, 255, 178, 0.5)) 2 2;
                li{
                    .title{
                        margin-bottom: 16px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #04FFA2;
                        line-height: 20px;
                    }
                    .desc{
                        width: 271px;
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        font-weight: normal;
                        color: #FFFFFF;
                        line-height: 20px;
                    }
                }
                li + li{
                    margin-top: 36px;
                }
            }
            .terms{
                
            }
        }
        .link{
            margin: 40px 0 60px;
            .title{
                height: 17px;
                font-size: 12px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 14px;
            }
            .wrap{
                display: flex;
                width: 100%;
                height: 40px;
                margin: 8px 0;
                font-size: 14px;
                line-height: 40px;
                text-align: center;
                clip-path: polygon(0 0, 97% 0%, 100% 18%, 100% 100%, 0% 100%);
                a{
                    flex: 1;
                    height: 100%;
                    text-decoration: none;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #DE2DCF;
                    border: 2px solid #DE2DCF;
                }
                div{
                    width: 86px;
                    height: 100%;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    background: linear-gradient(213deg, #B041D8 0%, #DE2DCF 100%);
                    cursor: pointer;
                }
            }
        }
    }
</style>
