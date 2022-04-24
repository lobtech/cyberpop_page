<template>
    <div class="container" v-show="isShowTips">
        <div class="mask" :class="isShowTips && (isShowTips ? 'bounceShow' : 'bounceHide') ">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" v-if="props.isClose" src="@/assets/nwhome/close.svg" alt=""  @click="close">
            <div class="content">
                <div class="title">{{ props.title }}</div>
                <div class="icon">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/metaMask.svg" alt="">
                    <div class="subtitle">{{t('message.common.metamask.logoText')}}</div>
                </div>
                <!-- <div class="text">{{ props.content == 'netWork' ? $t('message.common.metamask.switch') : props.content }} <a v-if="props.addNetwork" href="https://chainlist.org/" target="_blank">{{ $t('message.common.metamask.add1') }}</a> </div> -->
                <div class="text">{{ props.content == 'netWork' ? $t('message.common.metamask.switch') : props.content }}  <br/>
                    <span v-if="props.addNetwork" @click="changeChain(43113)">{{ $t('message.common.metamask.add2') }}</span> 
                    <span v-if="props.addNetwork" @click="changeChain(80001)">{{ $t('message.common.metamask.add1') }}</span>  
                </div>
                <div class="loading" v-if="isLoading">
                    <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, getCurrentInstance } from 'vue'
import store from '@/store/index'
import { useI18n } from 'vue-i18n';
import NFT from '@/tools/web3' 
const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;


const props = defineProps({
    content: String, // 文案内容
    isLoading: {
        type: Boolean,
        default: false,
    },
    isClose: Boolean,  // 现实叉叉按钮
    title: String,  // 标题
    isShowTips: Boolean, //是否显示
    addNetwork: Boolean,
})

const close = () => {
    
    store.dispatch('user/TipsState', {show: false, info: { hasLoading: true, hasClose: true, title: 'Network Error', content: t('message.common.metamask.switch'), addNetwork: true}})
}

const changeChain = async (value?: any) => {
    let a: any = await NFT.addChain(value)
    if(a){
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
    }else{
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_stop')}})
    }
}

onMounted(() => {
})


</script>

<style scoped lang="less">
    @keyframes loadingAni {
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .container{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
        z-index: 187;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        .mask{
            position: absolute;
            width: 320px;
            min-height: 200px;
            z-index: 9;
            bottom: 0;
            width: 100%;
            height: 387px;
            padding: 24px;
            background: linear-gradient(221deg, rgba(132, 120, 255, .8) 0%, rgba(12, 9, 17, .8) 100%),
                        linear-gradient(81deg, rgba(45, 222, 211, .6) 0%, rgba(12, 9, 17, 1) 100%);
            box-shadow: inset 0px 4px 0px 1px #5A5685;
            .content{
                position: absolute;
                left: 0;
                right: 0;
                padding: 0 20px;
                .title{
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                }
                .icon{
                    display: flex;
                    margin: 20px 0;
                    img{
                        width: 40px;
                        height: 40px;
                        margin-right: .46vw;
                    }
                    .subtitle{
                        height: 100%;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #E6E8EC;
                        line-height: 40px;
                    }
                }
                .text{
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    line-height: 20px;
                    span{
                        float: right;
                        display: inline-block;
                        padding: 1.4px 3px;
                        margin: 1.4vw .8vw 0 0;
                        background: #30304D;
                        cursor: pointer;
                    }
                    span:hover{
                        color: rgb(255, 24, 255);
                    }
                    a{
                        color: #fff;
                    }
                }
                .loading{
                    margin-top: 1.3vw;
                    text-align: center;
                    img{
                        width: 40px;
                        height: 40px;
                        animation: loadingAni 1s linear infinite;
                    }
                }
            }
        }
    }
</style>
