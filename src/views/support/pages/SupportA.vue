<template>
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
                        <li @click="changeMenu(0, '/')" :class="{'active': active == 0}">HOME</li>
                        <li @click="changeMenu(1, '/about')" :class="{'active': active == 1}">STORY</li>
                        <li @click="changeMenu(2)" :class="{'active': active == 2}">NEWS</li>
                        <li @click="changeMenu(3, '/support')" :class="{'active': active == 3}">SUPPORT</li>
                        <li @click="changeMenu(4, '/about')" :class="{'active': active == 4}">ABOUT</li>
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
                    ECONOMIC MODELS
                </div>
            </div>
        </section>
        <footer>
            <img src="https://d1td2c8hf7fv9k.cloudfront.net/section1_buttom.png" alt="" class="buttom">
        </footer>
    </div>
    <div class="welcome">
        <div class="cover_up"></div>
        <img src="@/assets/support/section2-1.png" class="section2-1 bgimg" alt="">
        <img src="@/assets/support/section2-2.png" class="section2-2 bgimg" alt="">
        <img src="@/assets/support/section3-1.png" class="section3-1 bgimg" alt="">
        <img src="@/assets/support/section3-2.png" class="section3-2 bgimg" alt="">
        <div class="section4">
            <div>
                <img src="@/assets/support/section4-1.png" alt="">
            </div>
            <div>
                <img src="@/assets/support/section3-3.png" alt="">
                <img src="@/assets/support/section4-2.png" alt="">
            </div>
        </div>
        <div class="section5"></div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 

const router = useRouter()

const active = computed(() => store?.state.user?.active);

const changeMenu = (type: any, route?: any) => {
    // active.value = type;
    if(type == 2) {
        window.open('https://medium.com/@Cyberpopnewworld')
        return
    }
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
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


onMounted(() => {
    connect()
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
    a {
        text-decoration: none;
    }
    
    .router-link-active {
        text-decoration: none;
    }
    .home{
        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/BK1.jpg');
        height: 100vh;
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: 20% top;
        animation: home 10s linear;
        header{
            height: 14.5px;
            color: #fff;
            animation: fadeInDown .8s linear;
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
            height: 140px;
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
                    animation: fadeInRight .5s linear;
                    img{
                        width: 80px;
                    }
                }
                .title2{
                    animation: fadeInRight .5s linear;
                    img{
                        width: 200px;
                    }
                }
                .title3{
                    animation: fadeInRight .5s linear;
                    font-family: Aideep;
                    margin: 0 auto;
                    margin-top: 2vw;
                    background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/section1_3.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    display: inline-block;
                    // width: 100px;
                    // height: 20px;
                    color: #fff;
                    font-size: 2.5vw;
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
        position: relative;
        width: 100%;
        // height: 50vw;
        box-shadow: 0px -37px 29px #000;
        margin-top: 2px;
        overflow: hidden;
        .cover_up{
            width: 100%;
            height: 100%;
            position: absolute;
            background: #000;
            opacity: 1;
            z-index: -1;
        }
        .bgimg{
            width: 50%;
            vertical-align: middle;
        }
        .section2-1{
        }
        .section2-2{
        }
        .section4{
            display: flex;
            align-items: center;
            div{
                // align-items: center;
            }
            img{
                width: 50vw;
            }
        }
        .section5{
            background-image: url('../../../assets/support/section5.png');
            background-size: 100% 100%;
            height: 50vw;
        }
    }
</style>
