<template>
    <div class="home">
        <header>
            <div class="content">
                <img class="logo" src="../../../assets/icon/LOGO.png" alt="logo">
                <div class="user" @click="connect()">
                    <div class="login_in Aideep">{{id || "LOG IN"}}</div>
                    <img src="../../../assets/icon/user.png" alt="" v-if="!id">
                </div>
                <div class="menu">
                    <ul>
                        <li @click="changeMenu(0)" :class="{'active': active == 0}">
                            <span>HOME</span>
                        </li>
                        <li @click="changeMenu(1)" :class="{'active': active == 1}">
                            <span>STORY</span>
                        </li>
                        <li @click="changeMenu(2)" :class="{'active': active == 2}">
                            <span>NEWS</span>
                        </li>
                        <li @click="changeMenu(3)" :class="{'active': active == 3}">
                            <span>SUPPORT</span>
                        </li>
                        <li @click="changeMenu(4)" :class="{'active': active == 4}">
                            <span>ABOUT</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <section>
            <div class="titles">
                <div class="title1">
                    <img src="@/assets/icon/section1_2.png" alt="">
                </div>
                <div class="title2">
                    <img src="@/assets/icon/section1_1.png" alt="">
                </div>
                <div class="title3">
                    COMMING SOON
                </div>
            </div>
        </section>
        <footer>
            <img src="@/assets/icon/section1_buttom.png" alt="" class="buttom">
        </footer>
    </div>
    <div class="welcome">
        <div class="cover_up"></div>
        <div class="warp">
            <div class="title">WELCOME TO THE<span class="yellow">NEW WORLD</span></div>
            <div class="content">
                <div class="left" @click="changeSWiper(0)">
                    <img src="@/assets/icon/left.png" alt="">
                </div>
                <div class="swiper">
                    <div class="swiepr_content" :style="{'left': left + 'px'}" ref="swiperContent">
                        <div class="item1">
                            <img class="bg" src="@/assets/icon/swiper_border.png" alt="">
                            <img class="banner" src="@/assets/image/BK3-2.jpg" alt="">
                            <div class="des">what kind existence <br> is cyberpunk</div>
                            <div class="number">001</div>
                            <div class="outher"></div>
                            <div class="outher2"></div>
                        </div>
                        <div class="item2">
                            <img class="bg" src="@/assets/icon/swiper_border.png" alt="">
                            <img class="banner" src="@/assets/image/BK3-3.jpg" alt="">
                            <div class="des">what kind existence <br> is cyberpunk</div>
                            <div class="black"></div>
                            <div class="number">002</div>
                            <div class="outher"></div>
                            <div class="outher2"></div>
                            <img src="@/assets/icon/play.png" alt="" class="play">
                        </div>
                        <div class="item3"> 
                            <img class="bg" src="@/assets/icon/swiper_border.png" alt="">
                            <img class="banner" src="@/assets/image/BK3-4.png" alt="">
                            <div class="des">what kind existence <br> is cyberpunk</div>
                            <div class="number">003</div>
                            <div class="outher"></div>
                            <div class="outher2"></div>
                        </div>
                    </div>
                </div>
                <div class="right" @click="changeSWiper(1)">
                    <img src="@/assets/icon/left.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="news">
        <div class="cover_up"></div>
        <div class="title">
             <img src="@/assets/icon/section2_2.png" alt="" class="line">
             <div class="news_box">
                 <img src="@/assets/icon/NEWS.png" alt="">
                 <p>NEWS</p>
             </div>
             <img src="@/assets/icon/section2_2.png" alt="" class="line">
        </div>
        <div class="news_content2">
            <div class="news_item">
                <img src="@/assets/image/BK3-2.jpg" alt="" class="img img1">
                <div class="text text1">
                    <p class="title2">CYBERPOP</p>
                    <p class="des">BOPUNK'S EMERGENCE STILL MEANS SOMETHING.</p>
                    <p class="des">WHY DID CYBERPUNK HAPPEN?</p>
                    <p class="des">TURGENEV CASUALLY SAYS, DO YOU WANT TO BE HAPPY?</p>
                    <button class="more">LEARN MORE</button>
                </div>
            </div>
            <div class="news_item">
                <img src="@/assets/image/BK3-3.jpg" alt="" class="img img1">
                <div class="text text1">
                    <p class="title2">CYBERPOP</p>
                    <p class="des">BOPUNK'S EMERGENCE STILL MEANS SOMETHING.</p>
                    <p class="des">WHY DID CYBERPUNK HAPPEN?</p>
                    <p class="des">TURGENEV CASUALLY SAYS, DO YOU WANT TO BE HAPPY?</p>
                    <button class="more">LEARN MORE</button>
                </div>
            </div>
            <div class="news_item">
                <img src="@/assets/image/BK3-5.jpg" alt="" class="img img1">
                <div class="text text1">
                    <p class="title2">CYBERPOP</p>
                    <p class="des">THE OCCURRENCE OF CYBERPUNK,</p>
                    <p class="des">EXACTLY HOW TO ACHIEVE,</p>
                    <p class="des">NOT THE OCCURRENCE OF</p>
                    <p class="des">CYBERPUNK, AND HOW TO PRODUCE.</p>
                    <button class="more">LEARN MORE</button>
                </div>
            </div>
            <div class="news_item">
                <img src="@/assets/image/BK3-4.png" alt="" class="img img1">
                <div class="text text1">
                    <p class="title2">CYBERPOP</p>  
                    <p class="des">THE OCCURRENCE OF CYBERPUNK,</p>
                    <p class="des">EXACTLY HOW TO ACHIEVE,</p>
                    <p class="des">NOT THE OCCURRENCE OF</p>
                    <p class="des">CYBERPUNK, AND HOW TO PRODUCE.</p>
                    <button class="more">LEARN MORE</button>
                </div>
            </div>
        </div>
        <!-- <div class="news_content">
            <img src="@/assets/image/BK3-2.jpg" class="bg1" alt="">
            <img src="@/assets/image/BK3-4.png" class="bg2" alt="">
            <img src="@/assets/image/BK3-5.jpg" class="bg3" alt="">
            <img src="@/assets/image/BK3-3.jpg" class="bg4" alt="">
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
        </div> -->
    </div>
    <div class="about">
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
            <!-- <div class="right"></div> -->
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
                    <img src="@/assets/icon/section2_1.png" class="section" alt="">
                    <img src="@/assets/icon/email_bottm.png" class="email_bottom" alt="">
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
                    <img src="@/assets/icon/pink.png" alt="">
                </div>
                <div>
                    <span>Privacy Notice</span>
                    <img src="@/assets/icon/pink.png" alt="">
                </div>
                <div>
                    <span>user agreement</span>
                    <img src="@/assets/icon/pink.png" alt="">
                </div>
                <div>
                    <span>Share this pace</span>
                    <img src="@/assets/icon/pink.png" alt="">
                </div>
            </div>
            <div class="logos">
                <a href="#" target="view_window">
                    <img src="@/assets/icon/google-logo.png" alt="">
                </a>
                    <a href="#" target="view_window">
                    <img src="@/assets/icon/twitter.png" alt="">
                </a>
                    <a href="#" target="view_window">
                    <img src="@/assets/icon/facebook.png" alt="">
                </a>
                    <a href="#" target="view_window">
                    <img src="@/assets/icon/dianbao.png" alt="">
                </a>
                    <a href="#" target="view_window">
                    <img src="@/assets/icon/discordlogo.png" alt="">
                </a>
            </div>
            <div class="find_us">
                <div class="find_content">
                    <div class="section3">
                        <img src="@/assets/icon/qiu.png" class="qiu" alt="">
                        <div class="language">English</div>
                        <img src="@/assets/icon/bottom.png" class="bottom" alt="">
                    </div>
                    <div class="section1">
                        find us on
                        <img src="@/assets/icon/twitch.png" alt="">
                        <img src="@/assets/icon/YouTube-logo.png" alt="">
                        <img src="@/assets/icon/bilibili.png" alt="">
                    </div>
                    <div class="section2">
                        <span>Cookie Preferences</span>
                        <br>
                        <span>©2021 XXX Games, Inc. ALL Rights Reserved.</span>
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
const left = ref(0)
const swiperContent = ref(null);
const id: any = ref(0)
let count: any = 0
const changeMenu = (type: any) => {
    active.value = type;
}

//连接钱包 type=true 表示上次已经登陆过了，不需要再出来钱包了
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

const chientWidth: any = document.body.clientWidth * 0.7;
const changeSWiper = (type: Number) => {
    if(type){
        count++;
        if(count>2) {
            count--;
            return;
        }
        left.value = -(count * chientWidth);
    }else{
        count--;
        if(count<0) {
            count++;
            return;
        }
        left.value = -(count * chientWidth);
        
    }
    console.log(type);
    
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
        background-image: url('../../../assets/image/BK1.jpg');
        height: 100vh;
        width: 100%;
        background-size: auto 100%;
        // background-repeat: no-repeat;
        background-position: 20% top;
        header{
            height: 24.5px;
            color: #fff;
            .content{
                height: 100%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                .logo{
                    width: 16vw;
                }
                .user{
                    display: flex;
                    align-items: center;
                    .login_in{
                        background-color: #fbec35;
                        padding: 0.5vw 0.5vw;
                        color: #333;
                        border-radius: 8px;
                        font-size: 0.6vw;
                        margin-right: 0.5vw;
                    }
                    img{
                        width: 3.5vw;
                    }
                }
                .menu{
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    width: 60vw;
                    background-image: url('../../../assets/icon/header_menu.png');
                    background-size: 100% 100%;
                    height: 100%;
                    ul{
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                    }
                    ul > li{
                        width: 20%;
                        float: left;
                        font-family: Aideep;
                        font-size: 10px;
                        text-align: center;
                        line-height: 6.6vw;
                        cursor: pointer;
                        span{
                            display: inline-block;
                            transform: scale(0.6);
                        }
                    }
                    li:last-child{
                        background-size: 98% 99% !important;
                    }
                    .active{
                        background-image: url('../../../assets/icon/active_menu.png');
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
                text-align: center;
                left: 0;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                .title1{
                    margin-bottom: 7vw;
                    img{
                        width: 180px;
                    }
                }
                .title2{
                    img{
                        width: 350px;
                    }
                }
                .title3{
                    font-family: Aideep;
                    margin: 0 auto;
                    margin-top: 4vw;
                    background-image: url('../../../assets/icon/section1_3.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    width: 200px;
                    height: 40px;
                    display: flex; 
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    font-size: 3vw;
                }
            }
        }
        .buttom{
            animation: springtimeAniamtScale2 1.6s linear infinite;
            position: absolute;
            bottom: 2vw;
            width: 9vw;
            left: 0;
            right: 0;
            margin: 0 auto;
            z-index: 9999;
        }
    }
    .welcome{
        background-image: url('../../../assets/image/BK2.png');
        background-repeat: no-repeat;
        background-position: -10% top;
        background-size: 100% 100%;
        position: relative;
        width: 100%;
        height: 90vw;
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
            // height: 100px;
            text-align: center;
            .title{
                color: #fff;
                font-family: Aideep;
                font-size: 4vw;
                background-image: url('../../../assets/icon/section2_2.png');
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: 69%;
                position: relative;
                .yellow{
                    color: #feeb36;
                }
            }
            .title::before{
                content: " ";
                background: #e9436b;
                width:  1vw;
                height: 3vw;
                position: absolute;
                margin-left: -1vw;
                margin-top: 0.2vw;
            }
            .title::after{
                content: " ";
                background: #e9436b;
                width:  1vw;
                height: 3vw;
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
                position: relative;
                .right{
                    transform: rotate(180deg);
                }
                .left,
                .right{
                    img{
                        width: 6vw;
                    }
                }
                .swiper{
                    width: 70vw;
                    height: 48vw;
                    // display: flex;
                    // justify-content: center;
                    margin: 0 4vw;
                    overflow: hidden;
                    position: relative;
                    .swiepr_content{
                        width: 500%;
                        height: 100%;
                        position: relative;
                        display: flex;
                        transition-property: all;
                        transition-timing-function: cubic-bezier(.4,0,.2,1);
                        transition-duration: .40s;
                        & > div{
                            background-image: url('../../../assets/icon/swiper_border.png');
                            width: 70vw;
                            height: 48vw;
                            background-size: 100% 100%;
                            background-repeat: no-repeat;
                            overflow: hidden;
                            position: relative;
                            color: #fff;
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
                        bottom: 0;
                        right: 6vw;
                        background-color: #000;
                        height: 3.2vw;
                        line-height: 1.2;
                        font-family: EDIX;
                        color: #fff;
                        z-index: 1000555555011;
                        font-size: 1.4vw;
                        padding: 0 5px;
                    }
                    .des{
                        position: absolute;
                        bottom: 8vw;
                        padding: 0 1vw;
                        text-align: left;
                        font-size: 4vw;
                    }
                    .black{
                        background: #000;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 30.5vw;
                        opacity: 0.8;
                    }
                    .outher{
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 0;
                        height: 0;
                        border-left: 2.5vw solid transparent;
                        border-bottom: 2.5vw solid transparent;
                        border-right: 2.5vw solid #000;
                        border-top: 2.5vw solid #000;
                        opacity: 0.7;
                        z-index: 99;
                    }
                    .outher2{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 0;
                        border-left: 2.5vw solid #000;
                        border-bottom: 2.5vw solid #000;
                        border-right: 2.5vw solid transparent;
                        border-top: 2.5vw solid transparent;
                        // opacity: 0.5;
                    }
                    .play{
                        cursor: pointer;
                        position: absolute;
                        left: 0;
                        right: 0;
                        margin: 0 auto;
                        top: 12vw;
                        width: 10vw;
                        z-index: 99999;
                    }
                }
            }
        }
    }
    .news{
        background-image: url('../../../assets/image/BK3-1.png');
        background-size: 100% auto;
        background-repeat: no-repeat;
        margin-top: -1px;
        width: 100%;
        position: relative;
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
                width: 20vw;
                height: 0.5vw;
            }
            .news_box{
                img{
                    width: 15vw;
                }
                margin: 0 3vw;
                p{
                    font-family: Aideep;
                    color: #fff;
                    text-align: center;
                    font-size: 4vw;
                    padding-top: 1vw;
                    padding-left: 3vw;
                }
            }
        }
        .news_content2{
            position: relative;
            .news_item{
                background-image: url('../../../assets/icon/section3_bg.png');
                width: 90%;
                padding: 2vw 2vw 20vw 2vw; 
                background-size: 100% 100%;
                .img{
                    width: 100%;
                }
                .text{
                    font-family: Aideep;
                    padding: 10px 0;
                    color: #fff;
                    .title2{
                        font-size: 5vw;
                        margin-bottom: 5vw;
                    }
                    .des{
                        font-size: 3vw;
                        margin-bottom: 2vw;
                    }
                    .more{
                        display: flex;
                        font-size: 0.5vw;
                        border: none;
                        font-family: Aideep;
                        background: #f7ee36;
                        padding: 1.2vw 1vw;
                        color: #000;
                        border-radius: 1vw;
                        margin: 0 auto;
                    }
                }
            }
            .news_item:not(:last-child){
                margin: 10vw auto;
            }
            .news_item:last-child{
                margin: 0 auto;
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
                    // white-space: nowrap;
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
        background-image: url('../../../assets/image/BK4_1.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 78vw;
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
            .left{
                font-family: Aideep;
                font-size: 2vw;
                color: #fff;
                z-index: 99;
                background-image: url('../../../assets/icon/section4_1.png');
                background-size: 55% auto;
                background-repeat: no-repeat;
                background-position: center bottom;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                .content{
                    width: 100%;
                    padding: 0 2vw;
                    .title3{
                        text-align: left;
                        font-size: 8vw;
                        margin-bottom: 3vw;
                    }
                    .des{
                        font-size: 10px;
                        margin-bottom: 3vw;
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
                background-image: url('../../../assets/icon/section4_1.png');
                background-repeat: no-repeat;
                background-position: center bottom;
                width: 50%;
                height: 100%;
                background-size: 100% auto;
            }
        }

    }
    .footer{
        background-image: url('../../../assets/icon/footer.png');
        background-size: 100% 100%;
        width: 100%;
        // height: 68vw;  
        margin-top: -18px;
        position: relative;
        z-index: 999 ;
        color: #fff;
        header{
            // height: 14vw;
            border-bottom: 1px solid #cd2e86;
            // display: flex;
            padding: 10vw 5vw;
            // align-items: center;
            // justify-content: space-between; /* 横向中间自动空间 */
            .des{
                width: 100%;
                h2{
                    font-family: EDIX;
                    font-size: 5vw;
                    text-align: center;
                    margin-bottom: 5vw;
                }
                .text{ 
                    font-family: Aideep;
                    font-size: 4vw;
                    text-align: center;
                }
            }
            .address{
                width: 100%;
                .email{
                    position: relative;
                    width: 100%;
                    height: 10vw;
                    margin-right: 2vw;
                    margin-bottom: 6vw;
                    input{
                        width: 100%;
                        margin-left: 3vw;
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
                        width: 1.6vw;
                        height: 4.5vw;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
                .submit{
                    background-image: url('../../../assets/icon/email_box.png');
                    background-size: 100% 100%;
                    width: 40vw;
                    height: 10vw;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: EDIX;
                    font-size: 1.3vw;
                    position: relative;
                    .x{
                        position: absolute;
                        bottom: -1vw;
                        font-size: 0.7vw;
                        right: 2.5vw;
                    }
                }
            }
        }
        section{
            // height: 29vw;
            .share_box{
                width: 100%;
                background-image: url('../../../assets/icon/email_bottm.png');
                background-size: 100% auto;
                & > div{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 8vw;
                    position: relative;
                    span{
                        font-size: 4.2vw;
                        margin-right: 1vw;
                        font-family: Aideep;
                        transition-property: all;
                        transition-timing-function: cubic-bezier(.4,0,.2,1);
                        transition-duration: .25s;
                        cursor: pointer;
                    }
                    img{
                        width: 3vw;
                        margin-left: 1vw;
                    }
                }
            }
            .logos{
                background-image: url('../../../assets/icon/email_bottm.png');
                background-size: 100% auto;
                text-align: center; 
                padding-top: 7vw;
                padding-bottom: 7vw;
                img{
                    margin-right: 3.5vw;
                }
                img:hover{
                    transform: scale(1.2);
                }
            }
            .find_us{
                background-image: url('../../../assets/icon/email_bottm.png');
                background-size: 100% auto;
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
                            margin-left: 3.5vw;
                            width: 8vw;
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
                            width: 7vw;
                        }
                        .bottom{
                            width: 7vw;
                        }
                        .language{
                            margin: 4vw 1vw;
                            border-bottom: 0.2vw solid #fff;
                            cursor: pointer;
                            font-size: 8vw;
                        }
                    }
                }
            }
        }
    }
</style>
