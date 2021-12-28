<template>
    <my-video v-if="isPlay" @touchmove.prevent :videotype="type2" :videoSrc="'/assets/video/6dff55c4018832a1528ecbc410ec6094.mp4'" @click="playVideo"></my-video>
    <div class="home">
        <header>
            <div class="content">
                <img class="logo" src="https://d1td2c8hf7fv9k.cloudfront.net/LOGO.png" alt="logo">
                <div class="user" @click="connect()">
                    <div class="login_in Aideep">{{ id || "LOG IN" }}</div>
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/user.png" alt="" v-if="!id">
                </div>
                <div class="menu">
                    <ul>
                        <li @click="changeMenu(0)" :class="{'active': active == 0}">HOME</li>
                        <li @click="changeMenu(1)" :class="{'active': active == 1}">STORY</li>
                        <li @click="changeMenu(2)" :class="{'active': active == 2}">NEWS</li>
                        <li @click="changeMenu(3)" :class="{'active': active == 3}">SUPPORT</li>
                        <li @click="changeMenu(4)" :class="{'active': active == 4}">ABOUT</li>
                    </ul>
                </div>
            </div>
        </header>
        <section>
            <div class="titles">
                <div class="title1">
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/section1_2.png" alt="">
                </div>
                <div class="title2">
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/section1_1.png" alt="">
                </div>
                <div class="title3">
                    COMMING SOON
                </div>
            </div>
        </section>
        <footer>
            <img src="https://d1td2c8hf7fv9k.cloudfront.net/section1_buttom.png" alt="" class="buttom">
        </footer>
    </div>
    <div class="welcome">
        <div class="cover_up"></div>
        <div class="warp">
            <div class="title">WELCOME TO THE<span class="yellow">NEW WORLD</span></div>
            <div class="content">
                <div class="left">
                    <img src="@/assets/icon/left.png" alt="">
                </div>
                <div class="swiper">
                    <div class="item1">
                        <img class="bg" src="https://d1td2c8hf7fv9k.cloudfront.net/swiper_border.png" alt="">
                        <img class="banner" src="https://d1td2c8hf7fv9k.cloudfront.net/BK3-2.jpg" alt="">
                        <div class="des">The protagonists are in a <br /> real world that is <span>treacherous and changeable.</span></div>
                        <div class="black"></div>
                        <div class="outher"></div>
                        <div class="outher2"></div>
                        <div class="number">001</div>
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/play.png" alt="" class="play" @click="playVideo(1)">
                    </div>
                    <div class="item2">
                        <img class="bg" src="https://d1td2c8hf7fv9k.cloudfront.net/swiper_border.png" alt="">
                        <img class="banner" src="https://d1td2c8hf7fv9k.cloudfront.net/BK3-3.jpg" alt="">
                        <div class="des">Experience the fantastic online cyber world.</div>
                        <div class="black"></div>
                        <div class="outher"></div>
                        <div class="outher2"></div>
                        <div class="number">002</div>
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/play.png" alt="" class="play" @click="playVideo(2)">
                    </div>
                    <div class="item3"> 
                        <img class="bg" src="https://d1td2c8hf7fv9k.cloudfront.net/swiper_border.png" alt="">
                        <img class="banner" src="https://d1td2c8hf7fv9k.cloudfront.net/BK3-4.png" alt="">
                        <div class="des">Welcome to the Cyber Pop New World.</div>
                        <div class="black"></div>
                        <div class="outher"></div>
                        <div class="outher2"></div>
                        <div class="number">003</div>
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/play.png" alt="" class="play" @click="playVideo(3)">
                    </div>
                </div>
                <div class="right">
                    <img src="@/assets/icon/left.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="news">
        <div class="cover_up"></div>
        <div class="title">
             <img src="https://d1td2c8hf7fv9k.cloudfront.net/section2_2.png" alt="" class="line">
             <div class="news_box">
                 <img src="@/assets/icon/NEWS.png" alt="">
                 <p>NEWS</p>
             </div>
             <img src="https://d1td2c8hf7fv9k.cloudfront.net/section2_2.png" alt="" class="line">
        </div>
        <div class="news_content">
            <img src="https://d1td2c8hf7fv9k.cloudfront.net/BK3-2.jpg" class="bg1" alt="">
            <img src="https://d1td2c8hf7fv9k.cloudfront.net/BK3-4.png" class="bg2" alt="">
            <img src="https://d1td2c8hf7fv9k.cloudfront.net/BK3-5.jpg" class="bg3" alt="">
            <img src="https://d1td2c8hf7fv9k.cloudfront.net/BK3-3.jpg" class="bg4" alt="">
            <div class="text1">
                <p class="title2">CYBERPOP</p>
                <p class="des">BOPUNK'S EMERGENCE STILL MEANS SOMETHING.</p>
                <p class="des">WHY DID CYBERPUNK HAPPEN?</p>
                <p class="des">TURGENEV CASUALLY SAYS, DO YOU WANT TO BE HAPPY?</p>
                <button class="more">LEARN MORE</button>
            </div>
            <div class="text2">
                <p class="title2">CYBERPOP</p>
                <p class="des">THE OCCURRENCE OF CYBERPUNK,</p>
                <p class="des">EXACTLY HOW TO ACHIEVE,</p>
                <p class="des">NOT THE OCCURRENCE OF</p>
                <p class="des">CYBERPUNK.</p>
                <button class="more">LEARN MORE</button>
            </div>
            <div class="text3">
                <p class="title2">CYBERPOP</p>
                <p class="des">THE OCCURRENCE OF CYBERPUNK,</p>
                <p class="des">EXACTLY HOW TO ACHIEVE,</p>
                <p class="des">NOT THE OCCURRENCE OF</p>
                <p class="des">CYBERPUNK, AND HOW TO PRODUCE.</p>
                <button class="more">LEARN MORE</button>
            </div>
        </div>
    </div>
    <div class="about">
        <!-- <div class="cover_up"></div> -->
        <div class="about_content">
            <div class="left">
                <div class="content">
                    <div class="title3">ABOUT US</div>
                    <div class="des">THE OCCURRENCE OF CYBERPUNK,EXACTLY HOW TO ACHIEVE,</div>
                    <div class="des">NOT THE OCCURRENCE OF CYBERPUNK, AND HOW TO PRODUCE.</div>
                    <div class="des">WITH THESE QUESTIONS IN MIND, LET'S TAKE A LOOK AT CYBERPUNK.</div>
                    <div class="des">SINCE HOW,I ALSO THROUGH THOUGHTFUL.</div>
                    <button class="more">LEARN MORE</button>
                </div>
            </div>
            <div class="right"></div>
        </div>
    </div>
    <div class="footer">
        <header>
            <div class="des">
                <h2>ALWAYS FIRST!</h2>
                <div class="text">
                    Sign up to Cyberpop New would newsletter.
                </div>
            </div>
            <div class="address">
                <div class="email">
                    <input type="text" placeholder="Enter your email address" >
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/section2_1.png" class="section" alt="">
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/email_bottm.png" class="email_bottom" alt="">
                </div>
                <div class="submit">
                    SUBMIT
                    <div class="x">x</div>
                </div>
            </div>
        </header>
        <section>
            <div class="share_box">
                <div>
                    <span>Terms of Service</span>
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/pink.png" alt="">
                </div>
                <div>
                    <span>Privacy Notice</span>
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/pink.png" alt="">
                </div>
                <div>
                    <span>user agreement</span>
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/pink.png" alt="">
                </div>
                <div>
                    <span>Share this pace</span>
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/pink.png" alt="">
                    <div class="logos">
                        <a href="#" target="view_window">
                            <img src="https://d1td2c8hf7fv9k.cloudfront.net/google-logo.png" alt="">
                        </a>
                         <a href="#" target="view_window">
                            <img src="https://d1td2c8hf7fv9k.cloudfront.net/twitter.png" alt="">
                        </a>
                         <a href="#" target="view_window">
                            <img src="https://d1td2c8hf7fv9k.cloudfront.net/facebook.png" alt="">
                        </a>
                         <a href="#" target="view_window">
                            <img src="https://d1td2c8hf7fv9k.cloudfront.net/dianbao.png" alt="">
                        </a>
                         <a href="#" target="view_window">
                            <img src="https://d1td2c8hf7fv9k.cloudfront.net/discordlogo.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="find_us">
                <div class="find_content">
                    <div class="section1">
                        find us on
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/twitch.png" alt="">
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/YouTube-logo.png" alt="">
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/bilibili.png" alt="">
                    </div>
                    <div class="section2">
                        <span>Cookie Preferences</span>
                        <br>
                        <span>©2021 XXX Games, Inc. ALL Rights Reserved.</span>
                    </div>
                    <div class="section3">
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/qiu.png" class="qiu" alt="">
                        <div class="language">English</div>
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/bottom.png" class="bottom" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import { Moralis, getNativeBalance, getTokenBalances, getNFTOwners, getAllTokenIds, getNFTs, transfer, callCloud, addListing } from '@/tools/moralis';
import store from '@/store'

const active = ref(0);
const changeMenu = (type: any) => {
    active.value = type;
}
const id: any = ref(0)
const connect: any = (type: any) => {
    if(type){
        id.value = type.attributes.ethAddress
        let len = id.value.length-1;
        id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+"***"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
        return;
    }
    Moralis.authenticate().then((res: any) => { 
        console.log(res,'钱包登陆成功--------');
        id.value = res.attributes.ethAddress
        let len = id.value.length-1;
        id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+"***"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
    }).catch((err: any) => {
        console.log(err);
        
    })
}
let type2: any = ref(1);
let isPlay: any = ref(false);
const playVideo = (type: any) => {
    type2.value = type
    isPlay.value = !isPlay.value;
}

onMounted(() => {
    Moralis.User.currentAsync().then((res: any) => {
        console.log(res, 'succes');
        if(res) connect(res);
    }).catch((res: any) => {
        console.log(res, 'err');
    })
    
})

</script>
<style lang="less" scoped>
    @keyframes springtimeAniamtScale2 {
        0% {
            bottom: 2.5vw;
        }
        25% {
            bottom: 0vw;
        }
        50% {
            bottom: -2vw;
        }
        75%{
            bottom: 0vw;
        }
        100% {
            bottom: 2.5vw;
        }
    }
    .home{
        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/BK1.jpg');
        height: 100vh;
        background-size: auto 100%;
        // background-repeat: no-repeat;
        background-position: 20% top;
        header{
            height: 14.5px;
            color: #fff;
            .content{
                width: 80%;
                height: 100%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                .logo{
                    width: 8vw;
                }
                .user{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    .login_in{
                        background-color: #fbec35;
                        padding: 0.5vw 0.5vw;
                        color: #333;
                        border-radius: 8px;
                        font-size: 0.6vw;
                        margin-right: 0.5vw;
                    }
                    img{
                        width: 1.5vw;
                    }
                }
                .menu{
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    width: 50vw;
                    background-image: url('../../../assets/icon/header_menu.png');
                    background-size: 100% 100%;
                    height: 100%;
                    ul{
                        width: 100%;
                        overflow: hidden;
                    }
                    ul > li{
                        width: 20%;
                        float: left;
                        font-family: Aideep;
                        font-size: 1.3vw;
                        text-align: center;
                        line-height: 3.8vw;
                        cursor: pointer;
                    }
                    li:last-child{
                        background-size: 98% 99% !important;
                    }
                    .active{
                        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/active_menu.png');
                        background-size: 108% 100%;
                        background-position: left top;
                    }
                }
            }
        }
        section{
            height: 100px;
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
            .titles{
                position: absolute;
                right: 10vw;
                text-align: center;
                top: 50%;
                transform: translateY(-50%);
                .title1{
                    margin-bottom: 2vw;
                    img{
                        width: 80px;
                    }
                }
                .title2{
                    img{
                        width: 200px;
                    }
                }
                .title3{
                    font-family: Aideep;
                    margin: 0 auto;
                    margin-top: 2vw;
                    background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/section1_3.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    width: 100px;
                    height: 20px;
                    display: flex; 
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    font-size: 1.5vw;
                }
            }
        }
        .buttom{
            animation: springtimeAniamtScale2 1.6s linear infinite;
            position: absolute;
            bottom: 2vw;
            width: 4vw;
            left: 0;
            right: 0;
            margin: 0 auto;
            z-index: 99;
        }
    }
    .welcome{
        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/BK2.png');
        background-repeat: no-repeat;
        background-position: -10% top;
        background-size: 100% 100%;
        position: relative;
        width: 100%;
        height: 50vw;
        box-shadow: 0px -37px 29px #000;
        margin-top: 2px;
        .cover_up{
            width: 100%;
            height: 100%;
            position: absolute;
            background: #000;
            opacity: 1;
            z-index: -1;
        }
        .warp{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            height: 100px;
            text-align: center;
            .title{
                color: #fff;
                font-family: Aideep;
                font-size: 2vw;
                background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/section2_2.png');
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: 35%;
                position: relative;
                .yellow{
                    color: #feeb36;
                }
            }
            .title::before{
                content: " ";
                background: #e9436b;
                width:  0.7vw;
                height: 1.3vw;
                position: absolute;
                margin-left: -1vw;
                margin-top: 0.2vw;
            }
            .title::after{
                content: " ";
                background: #e9436b;
                width:  0.7vw;
                height: 1.3vw;
                position: absolute;
                margin-left: 1vw;
                margin-top: 0.2vw;
            }
            .content{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: nowrap;
                width: 100%;
                margin-top: 5vw;
                .right{
                    transform: rotate(180deg);
                }
                .swiper{
                    width: 70vw;
                    display: flex;
                    justify-content: center;
                    & > div{
                        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/swiper_border.png');
                        width: 21vw;
                        height: 15vw;
                        background-size: 100% 101%;
                        background-repeat: no-repeat;
                        overflow: hidden;
                        position: relative;
                        color: #fff;
                    }
                    & > div:not(:last-child){
                        margin-right: 2vw;
                    }
                    & > div:first-child .des{
                        bottom: 1vw;
                        span{
                            white-space: nowrap;
                        }
                    }
                    .bg{
                        width: 100%;
                    }
                    .banner{
                        width: 100%;
                        position: absolute;
                        left: 0;
                        right: 0;
                        z-index: -1;
                    }
                    .number{
                        position: absolute;
                        bottom: 0vw;
                        right: 2vw;
                        background-color: #000;
                        height: 1.2vw;
                        line-height: 1.2;
                        font-family: EDIX;
                        padding: 0 0.5vw;
                        line-height: 1.2vw;
                    }
                    .des{
                        position: absolute;
                        bottom: 2vw;
                        padding: 0 1vw;
                        text-align: left;
                        font-size: 1.5vw;
                    }
                    .black{
                        background: #000;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 9.5vw;
                        opacity: 0.8;
                    }
                    .outher{
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 0;
                        height: 0;
                        border-left: 0.7vw solid transparent;
                        border-bottom: 0.7vw solid transparent;
                        border-right: 0.7vw solid #000;
                        border-top: 0.7vw solid #000;
                        opacity: 0.7;
                    }
                    .outher2{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 0;
                        border-left: 0.9vw solid #000;
                        border-bottom: 0.7vw solid #000;
                        border-right: 0.7vw solid transparent;
                        border-top: 1vw solid transparent;
                        // opacity: 0.5;
                    }
                    .play{
                        cursor: pointer;
                        position: absolute;
                        left: 0;
                        right: 0;
                        margin: 0 auto;
                        top: 3vw;
                        width: 4vw;
                        z-index: 99999;
                    }
                }
            }
        }
    }
    .news{
        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/BK3-1.png');
        background-size: 100% auto;
        background-repeat: no-repeat;
        margin-top: -1px;
        width: 100%;
        // height: 70vw;
        .cover_up{
            width: 100%;
            height: 100%;
            position: absolute;
            background: #000;
            opacity: 1;
            z-index: -1;
        }
        .title{
            display: flex;
            align-items: center;
            justify-content: center;
            .line{
                width: 15vw;
            }
            .news_box{
                img{
                    width: 7vw;
                }
                margin: 0 3vw;
                p{
                    font-family: Aideep;
                    color: #fff;
                    text-align: center;
                    font-size: 2vw;
                    padding-top: 1vw;
                    padding-left: 1vw;
                }
            }
        }
        .news_content{
            position: relative;
            margin-top: 10vw;
            height: 68vw;
            .bg1{
                width: 270px;
            }
            .bg2{
                width: 200px;
                position: absolute;
                left: -4.6vw;
                z-index: 11;
            }
             .bg3{
                width: 204px;
                height: 113px;
                position: absolute;
                bottom: 0;
                right: 0;
            }
            .bg4{
                width: 105px;
                position: absolute;
                right: 0;
                top: 10vw;
                // z-index: -1;
            }
            .text1,
            .text2,
            .text3{
                color: #fff;
                font-size: 2vw;
                position: absolute;
                width: 100px;
                right: 28.1vw;
                top: 0;
                padding: 3vw 1vw 1vw 1vw;
                background: rgba(16, 43, 87, 0.5);
                text-align: right;
                .title2{
                    font-family: Aideep;
                    margin-bottom: 1vw;
                }
                .des{
                    font-size: 0.8vw;
                    font-family: Aideep;
                    white-space: nowrap;
                    margin-bottom: 1vw;
                }
                .more{
                    display: flex;
                    font-size: 0.5vw;
                    border: none;
                    font-family: Aideep;
                    background: #f7ee36;
                    padding: 0.2vw 0.3vw;
                    color: #000;
                    border-radius: 0.2vw;
                    float: right;
                }
            }
            .text2{
                text-align: center;
                top: 23.5vw;
                padding: 2vw 1vw 1vw 1vw;
                background: rgb(16,43,87);
                .more{
                    float: none;
                    margin: 0 auto;
                }
            }
            .text3{
                background: rgb(16,43,87);
                top: 37vw;
                height: 117px;
                left: 19vw;
                z-index: 99;
                text-align: left;
                .title2{
                    margin-bottom: 4vw;
                }
                .des{
                    margin-bottom: 2vw;
                }
                .more{
                    float: left;
                    margin: 0 auto;
                }
            }
        }
    }
    .about{
        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/BK4_1.png');
        background-repeat: no-repeat;
        background-size: 100% auto;
        width: 100%;
        height: 50vw;
        position: relative;
        margin-top: -1px;
        z-index: 99;
        .cover_up{
            width: 100%;
            height: 100%;
            position: absolute;
            background: #000;
            opacity: 0.8;
            z-index: -1;
        }
        .about_content{
            width: 90vw;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            .left{
                font-family: Aideep;
                font-size: 2vw;
                color: #fff;
                z-index: 99;
                background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/section4_2.png');
                background-repeat: no-repeat;
                background-position: center bottom;
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                .content{
                    width: 100%;
                    padding: 0 2vw;
                    .title3{
                        text-align: left;
                        font-size: 2vw;
                        margin-bottom: 1.5vw;
                    }
                    .des{
                        font-size: 1vw;
                        margin-bottom: 1vw;
                    }
                    .more{
                        display: flex;
                        font-size: 0.5vw;
                        border: none;
                        font-family: Aideep;
                        background: #f7ee36;
                        padding: 0.2vw 0.3vw;
                        color: #000;
                        border-radius: 0.2vw;
                        margin-top: 1vw;
                    }
                }
            }
            .right{
                font-family: Aideep;
                font-size: 2vw;
                color: #fff;
                z-index: 99;
                background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/section4_1.png');
                background-repeat: no-repeat;
                background-position: center bottom;
                width: 50%;
                height: 100%;
                background-size: 100% auto;
            }
        }

    }
    .footer{
        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/footer.png');
        background-size: 100% 100%;
        width: 100%;
        height: 38vw;  
        margin-top: -18px;
        position: relative;
        z-index: 999 ;
        color: #fff;
        header{
            height: 9vw;
            border-bottom: 1px solid #cd2e86;
            display: flex;
            padding: 0 5vw;
            align-items: center;
            justify-content: space-between; /* 横向中间自动空间 */
            .des{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                width: 26vw;
                height: 4vw;
                h2{
                    font-family: EDIX;
                    font-size: 1.6vw;
                }
                .text{ 
                    font-family: Aideep;
                    font-size: 1.2vw;
                }
            }
            .address{
                display: flex;
                height: 3vw;
                .email{
                    position: relative;
                    width: 40vw;
                    height: 80%;
                    margin-right: 2vw;
                    input{
                        width: 39vw;
                        margin-left: 1vw;
                        height: 100%;
                        background: transparent;
                        border: none;
                        outline: none;
                        color: #fff;
                        font-size: 1vw;
                        font-family: Aideep;
                    }
                    input::-webkit-input-placeholder {
                        color: #fff;
                    }
                    .email_bottom{
                        width: 100%;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                    }
                    .section{
                        position: absolute;
                        width: 0.6vw;
                        height: 1.5vw;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
                .submit{
                    background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/email_box.png');
                    background-size: 100% 100%;
                    width: 12vw;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: EDIX;
                    font-size: 1.3vw;
                    position: relative;
                    cursor: pointer;
                    .x{
                        position: absolute;
                        bottom: -0.3vw;
                        font-size: 0.7vw;
                        right: 1vw;
                    }
                }
            }
        }
        section{
            height: 29vw;
            padding-top: 3vw;
            .share_box{
                display: flex;
                width: 100%;
                margin-bottom: 2vw;
                & > div{
                    width: 25%;
                    height: 8vw;
                    display: flex;
                    position: relative;
                    align-items: center;
                    justify-content: center;
                    span{
                        font-size: 1.2vw;
                        margin-right: 1vw;
                        font-family: Aideep;
                        transition-property: all;
                        transition-timing-function: cubic-bezier(.4,0,.2,1);
                        transition-duration: .25s;
                        cursor: pointer;
                    }
                    img{
                        width: 2vw;
                        transition-property: all;
                        transition-timing-function: cubic-bezier(.4,0,.2,1);
                        transition-duration: .25s;
                        cursor: pointer;
                    }
                    img:hover{
                        transform: translateX(-6px);
                    }
                    .logos{
                        position: absolute;
                        bottom: 0;
                        img{
                            margin-right: 0.5vw;
                        }
                        img:hover{
                            transform: scale(1.2);
                        }
                    }
                }
            }
            .find_us{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                .find_content{
                    text-align: center;
                    font-size: 1.2vw;
                    font-family: Aideep;
                    .section1{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 2vw;
                        width: 100%;
                        img{
                            margin-left: 1.5vw;
                            width: 2vw;
                            transition-property: all;
                            transition-timing-function: cubic-bezier(.4,0,.2,1);
                            transition-duration: .25s;
                            cursor: pointer;
                        }
                        img:hover{
                            transform: scale(1.2);
                        }
                    }
                    .section2{
                        span{
                            display: inline-block;
                            margin-bottom: 1vw;
                        }
                    }
                    .section3{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .qiu{
                            width: 2vw;
                        }
                        .bottom{
                            width: 1vw;
                        }
                        .language{
                            margin: 0 1vw;
                            border-bottom: 0.2vw solid #fff;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
