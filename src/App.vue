<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" :key="$route.path" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" :key="$route.path" v-if="!$route.meta.keepAlive" />
        <msg-popup-a v-if="innerWidth > 1025 && TipsState" :addNetwork="TipsInfo.addNetwork" :isShowTips="TipsState" :isLoading="TipsInfo.hasLoading" :isClose="TipsInfo.hasClose" :title="TipsInfo.title" :content="TipsInfo.content"/>
        <msg-popup-b v-else :isShowTips="TipsState" :addNetwork="true" :isLoading="false" :isClose="true" :title="'Network Error'" :content="$t('message.common.metamask.switch')"/>
        <message-a v-if="innerWidth > 1025 && showDialog" :state="alertInfo.state" :txt="alertInfo.txt"></message-a>
        <message-b v-if="innerWidth <= 1025 && showDialog" :state="alertInfo.state" :txt="alertInfo.txt"></message-b>
        <purchaseA :isShowTips="purchaseState" :title="purchaseInfo.title" :content1="purchaseInfo.content1" :content2="purchaseInfo.content2" :state="purchaseInfo.state"/>
    </router-view>
</template>
<script setup lang="ts">
import { onMounted, computed, ref, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import store from '@/store'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const $store: any = useStore()

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
})



const TipsState = computed(() => store.state.user?.TipsState );
const TipsInfo = computed(() => store.state.user?.TipsInfo);
const alertInfo = computed(() => store.state.user?.alertInfo);
const showDialog = computed(() => store.state.user?.showDialog);
const purchaseState = computed(() => store.state.user?.purchaseState );
const purchaseInfo = computed(() => store.state.user?.purchaseInfo);


onMounted(() => {
    const ethereum = (window as any).ethereum 
    window.onresize = () => store.dispatch('sys/get_screen_size') // 监听屏幕尺寸
    
    ethereum.on("accountsChanged", (accounts: any) => {
        console.log(accounts[0]);//一旦切换账号这里就会执行
        let id = accounts[0];
        let len = id.length-1;
        id = id[0]+id[1]+id[2]+id[3]+id[4]+"*****"+id[len-3]+id[len-2]+id[len-1]+id[len];
        store.dispatch('user/connectWallet',{realId:id, idTemp:accounts[0]});// 存放星号id、完整id
        store.dispatch('user/dataSumSearch',{flag:0});
    });
    ethereum.on('chainChanged', (chainId: string) => {
        let id: any = Number(chainId);
        // console.log(id);
        
        store.dispatch('user/chageChainId', Number(chainId))
        
        
        if(id != 80001 && id != 43113) {
            store.dispatch('user/TipsState', {show: true, info: { hasLoading: false, hasClose: true, title: 'Network Error', content: t('message.common.metamask.switch'), addNetwork: true}});
            return;
        }
        store.dispatch('user/TipsState', {show: false, info: { }});
    });
})
</script>
<style>
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
    @keyframes fadeInRight {
        0% {
            opacity: 0;
            -webkit-transform: translateX(30px);
            transform: translateX(30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }
    @keyframes fadeInLeft {
        0% {
            opacity: 0;
            -webkit-transform: translateX(-30px);
            transform: translateX(-30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }
    @keyframes bounceInLeft {
        0% {
            opacity: 0;
            -webkit-transform: translateX(-2000px);
            -ms-transform: translateX(-2000px);
            transform: translateX(-2000px);
        }
        60% {
            opacity: .4;
            -webkit-transform: translateX(-100px);
            -ms-transform: translateX(-100px);
            transform: translateX(-100px);
        }
        80% {
            opacity: .8;
            -webkit-transform: translateX(-30px);
            -ms-transform: translateX(-30px);
            transform: translateX(-30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
        }
    }
    @keyframes bounceInRight {
        0% {
            opacity: 0;
            -webkit-transform: translateX(2000px);
            -ms-transform: translateX(2000px);
            transform: translateX(2000px);
        }
        60% {
            opacity: .4;
            -webkit-transform: translateX(100px);
            -ms-transform: translateX(100px);
            transform: translateX(100px);
        }
        80% {
            opacity: .8;
            -webkit-transform: translateX(30px);
            -ms-transform: translateX(30px);
            transform: translateX(30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
        }
    }
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            -webkit-transform: translateY(30px);
            -ms-transform: translateY(30px);
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
        }
    }
    /* @keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translateY(-30px);
            -ms-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
        }
    } */
    @keyframes fadeInDown {
        0% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
        }
        50% {
            opacity: 1;
            -webkit-transform: translateY(-30px);
            -ms-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
        }
    }
    @keyframes bounceIn {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.3);
            -ms-transform: scale(0.3);
            transform: scale(0.3);
        }
        50% {
            opacity: 1;
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }
        70% {
            -webkit-transform: scale(0.9);
            -ms-transform: scale(0.9);
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
    }
     @keyframes home {
        0% {
            background-size: auto 109%;
        }
        10% {
            background-size: auto 108%;
        }
        20% {
            background-size: auto 107%;
        }
        30%{
            background-size: auto 106%;
        }
        40% {
            background-size: auto 105%;
        }
        50% {
            background-size: auto 104%;
        }
        60% {
            background-size: auto 103%;
        }
        70% {
            background-size: auto 102%;
        }
        80% {
            background-size: auto 101%;
        }
        90% {
            background-size: auto 100%;
        }
        100% {
            background-size: auto 100%;
        }
    }
    @keyframes bounceShow {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.3);
            -ms-transform: scale(0.3);
            transform: scale(0.3);
        }
        50% {
            opacity: 1;
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
    }
    @keyframes bounceHide {
        0% {
            opacity: 1;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
        50% {
            opacity: 1;
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }
        99% {
            opacity: 0;
            -webkit-transform: scale(0.3);
            -ms-transform: scale(0.3);
            transform: scale(0.3);
        }
        100% {
            opacity: 0;
            -webkit-transform: scale(0);
            -ms-transform: scale(0);
            transform: scale(0);
        }
    }

    .fadeInUp{
        animation: fadeInUp 1s linear;
    }
    .fadeInDown{
        animation: fadeInDown 3s linear infinite;
    }
    .bounceIn{
        animation: bounceIn 1s linear;
    }
    .bounceShow{
        animation: bounceShow 0.2s linear;
    }
    .bounceHide{
        animation: bounceHide 0.2s linear;
        animation-fill-mode: forwards;
    }
    .fadeInLeft{
         animation: fadeInLeft 1s linear;
    }
    .fadeInRight{
         animation: fadeInRight 1s linear;
    }
    .bounceInLeft{
        animation: bounceInLeft 1s linear;
    }
    .bounceInRight{
         animation: bounceInRight 1.5s linear;
    }
</style>
