<template>
    <div class="container" v-show="isShowTips">
        <div class="mask">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" v-if="props.isClose" src="@/assets/nwhome/close.svg" alt=""  @click="close">
            <div class="content">
                <div class="title">{{ props.title }}</div>
                <div class="icon">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/metaMask.svg" alt="">
                    <div class="subtitle">{{t('message.common.metamask.logoText')}}</div>
                </div>
                <div class="text">{{ props.content == 'netWork' ? $t('message.common.metamask.switch') : props.content }} <a v-if="props.addNetwork" href="https://chainlist.org/" target="_blank">{{ $t('message.common.metamask.add') }}</a> </div>
                <div class="loading" v-if="isLoading">
                    <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import store from '@/store/index'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
    console.log(999);
    
    store.dispatch('user/TipsState', {show: false, info: { hasLoading: true, hasClose: true, title: 'Network Error', content: t('message.common.metamask.switch'), addNetwork: true}})
}

onMounted(() => {
    console.log(props);
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
            top: 3.8vw;
            left: 0;
            right: 0;
            bottom: 0;
            width: 31.51vw;
            min-width: 380px;
            height: 16vw;
            min-height: 200px;
            margin: auto;
            padding: 2.5vw;
            box-shadow: -1.51vw .83vw .2vw .05vw rgba(0, 0, 0, 0.4);
            background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
            border: .15vw solid;
            border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
            clip-path: polygon(0 0, 100% 0, 100% 89%, 90% 100%, 0 100%);
            .cover{
                position: absolute;
                top: 0vw;
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
                right: 1vw;
                top: 1vw;
                z-index: 11;
            }
            .content{
                position: absolute;
                left: 0;
                right: 0;
                display: inline-block;
                padding: 0 2.5vw;
                .title{
                    font-size: 1.45vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    line-height: 2.08vw;
                }
                .icon{
                    display: flex;
                    margin: .46vw 0 .46vw 0;
                    img{
                        width: 2.81vw;
                        height: 3.28vw;
                        margin-right: .46vw;
                    }
                    .subtitle{
                        height: 3.28vw;
                        font-size: 1.35vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #E6E8EC;
                        line-height: 3.28vw;
                    }
                }
                .text{
                    font-size: 0.83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    line-height: 1vw;
                    a{
                        color: #fff;
                    }
                }
                .loading{
                    margin-top: 1.3vw;
                    text-align: center;
                    img{
                        width: 4vw;
                        height: 4vw;
                        animation: loadingAni 1s linear infinite;
                    }
                }
            }
        }
    }
</style>
