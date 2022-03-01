<template>
    <div class="metamask" :class="metaMaskActive && (metaAni ? 'bounceShow' : 'bounceHide') ">
        <div class="cover"></div>
        <div class="coverborder"></div>
        <img class="close" src="@/assets/nwhome/close.svg" alt="" v-if="isInstall" @click="store.dispatch('user/metaChangeAni',false);">
        <div class="content">
            <div class="title">SELECT A WALLET</div>
            <div class="icon">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/metaMask.svg" alt="">
                <div class="subtitle">MetaMask</div>
            </div>
            <div class="desc" v-if="!isInstall">You will need to install <strong>MetaMask</strong> to continue. Once you have it installed, go ahead and refresh the page.</div>
            <div class="desc" v-if="isInstall">Please login and authorize access to your MetaMask account to continue.</div>
            <div class="btn" v-if="!isInstall">
                <div class="cancel" @click="store.dispatch('user/metaChangeAni',false);">CANCEL</div>
                <div class="open"><a href="https://metamask.io/" target="view_window">OPEN METAMASK</a></div>
            </div>
            <div class="loading" v-if="isInstall">
                <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, readonly, ref } from 'vue'
import store from '@/store'

const props = defineProps({
    isInstall: Boolean
})

const metaMaskActive = computed(() => store?.state.user?.metaMaskActive);
const metaAni = computed(() => store?.state.user?.metaAni);


</script>

<style lang="less" scoped>
@keyframes loadingAni {
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
}
.metamask{
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 314px;
    height: 230px;
    margin: auto;
    padding: 20px;
    box-shadow: -1.51vw .83vw .2vw .05vw rgba(0, 0, 0, 0.4);
    background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
    border: .15vw solid;
    border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
    clip-path: polygon(0 0, 100% 0, 100% 89%, 90% 100%, 0 100%);
    .cover{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
        clip-path: polygon(0 0, 100% 0, 100% 89%, 90% 100%, 0 100%);
    }
    .coverborder{
        z-index: -1;
        position: absolute;
        bottom: 0;
        right: 0;
        content: '';
        display: inline-block;
        width: 8vw;
        height: 8vw;
        background-color: #2d2942;
    }
    .close{
        position: absolute;
        right: 10px;
        top: 8px;
        width: 22px;
        height: 22px;
    }
    .content{
        position: absolute;
        .title{
            height: 20px;
            font-size: 18px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #FFFFFF;
            line-height: 20px;
        }
        .icon{
            display: flex;
            margin: 10px 0 10px 0;
            img{
                width: 40px;
                height: 47px;
                margin-right: 10px;
            }
            .subtitle{
                height: 47px;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #E6E8EC;
                line-height: 47px;
            }
        }
        .desc{
            width: 274px;
            height: 30px;
            font-size: 12px;
            font-family: AlibabaPuHuiTi_2_55_Regular;
            color: #FFFFFF;
            line-height: 16px;
            letter-spacing: .02vw;
            strong{
               font-family: AlibabaPuHuiTi_2_105_Heavy;
            }
        }
        .btn{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 48px;
            margin-top: 30px;
            font-size: 12px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #FFFFFF;
            line-height: 48px;
            text-align: center;
            .cancel{
                width: 100px;
                height: 48px;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/meta-cancle.svg');
                background-size: 100% 100%;
                cursor: pointer;
            }
            .open{
                width: 160px;
                height: 48px;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/meta-open.svg');
                background-size: 100% 100%;
                cursor: pointer;
                a{
                    color: #ffffff;
                    text-decoration: none;
                }
            }
        }
        .loading{
            margin-top: 26px;
            text-align: center;
            img{
                width: 40px;
                height: 40px;
                animation: loadingAni .6s linear infinite;
            }
        }
    }
}
</style>
