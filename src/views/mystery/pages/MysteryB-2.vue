<template>
    <header-b path="/mystery" :type="2"></header-b>
    <!-- <div class="section">
        <div class="title">{{$t('message.mining.coming')}}</div>
    </div> -->
    <div class="boxBg">
        <div class="titles">
            <div class="title">{{$t('message.box.title_1')}}<br/>{{$t('message.box.title_2')}}</div>
            <div class="round">
                <div>{{$t('message.box.round_2')}}</div>
                <div>{{$t('message.box.round_1')}} #1</div> 
            </div>
            <div class="subtitle">{{$t('message.box.subtitle')}}</div>
            <div class="desc">
                {{$t('message.box.desc')}}
            </div>
        </div>
        <div class="vBg">
            <video-bg 
id="videobg" :sources="[`https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxbanner.mp4`]">
            </video-bg>
            <div class="maskBlur"></div>
        </div>
        <!-- 元素里面必须要有这个，要不然监听readyAssetsF不生效 -->
        <span style="color: #000">{{ readyAssetsF }} </span>
        <div class="blind" v-if="data.length > 0">
            <div class="title">{{ $t('message.box.type_title_1') }} <span>{{ $t('message.box.type_title_2') }}</span> </div>
            <ul>
                <li v-if="data[0].number">
                    <div class="boxVideo" >
                        <img :src="data[0].info.image" v-if="!data[1].info.animation_url" alt="">
                        <video autoplay muted loop v-else>
                            <source :src="data[0].info.animation_url" type="video/mp4">
                        </video>
                    </div>
                    <div class="name">{{ data[0].info.name }} </div>
                    <div class="introduce">
                        {{ data[0].info.description }}
                    </div>
                    <div class="price">
                        <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                        <div class="num">10</div>
                        <div class="exchange">≈$20</div>
                    </div>
                    <div class="btn">
                        <div class="purchase" v-if="Remaining[0] > 0" @click="purchase(0)">{{$t('message.details.box_btn_pur')}}</div>
                        <div class="details" @click="toDetails(1)">{{$t('message.box.btn_det')}}</div>
                    </div>
                </li>
                <li v-if="data[1].number">
                    <div class="boxVideo">
                        <img :src="data[1].info.image" v-if="!data[1].info.animation_url" alt="">
                        <video autoplay muted loop v-else>
                            <source :src="data[1].info.animation_url" type="video/mp4">
                        </video>
                    </div>
                   <div class="name">{{ data[1].info.name }}</div>
                    <div class="introduce">
                        {{ data[1].info.description }}
                    </div>
                    <div class="price">
                        <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                        <div class="num">20</div>
                        <div class="exchange">≈$40</div>
                    </div>
                    <div class="btn">
                        <div class="purchase" v-if="Remaining[1] > 0" @click="purchase(1)">{{$t('message.details.box_btn_pur')}}</div>
                        <div class="details" @click="toDetails(1)">{{$t('message.box.btn_det')}}</div>
                    </div>
                </li>
                <li v-if="data[2].number">
                    <div class="boxVideo">
                        <img :src="data[2].info.image" v-if="!data[1].info.animation_url" alt="">
                        <video autoplay muted loop v-else>
                            <source :src="data[2].info.animation_url" type="video/mp4">
                        </video>
                    </div>
                    <div class="name">{{ data[2].info.name }}</div>
                    <div class="introduce">
                        {{ data[2].info.description }}
                    </div>
                    <div class="price">
                        <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                        <div class="num">— —</div>
                        <div class="exchange">≈$- -</div>
                    </div>
                    <div class="btn">
                        <div class="purchase" v-if="Remaining[2] > 0" @click="purchase(2)">{{$t('message.details.box_btn_pur')}}</div>
                        <div class="details" @click="toDetails(3)">{{$t('message.box.btn_det')}}</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="nothing" v-else>
            <!-- <div class="nothing" v-if="true"> -->
            <div class="txt">{{$t('message.assets.nothing')}}<a href="/">{{$t('message.assets.nothing_home')}}</a></div>
            <img src="@/assets/nwAssets/nothing.svg" alt="">
        </div>
        <footer-b></footer-b>
    </div>
    <msg-popup-a :isShowTips="TipsState" :isLoading="true" :isClose="false" :title="$t('message.box.opening')" :content="$t('message.box.open_text')"/>
    
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const router = useRouter()


const { proxy } = getCurrentInstance() as any;

const { LootBox, GiftBox, cyt, MarketV2 } = Web3.contracts;

const chainId: any = computed(() => store.state.user?.chainId);

const TipsState: any = ref(false as any);

const data: any = ref([]);

const Remaining = ref([]);

const readyAssetsF: any = computed(() => {
    if( store?.state.user?.readyAssets !== -1 && chainId.value == 80001 || chainId.value == 43113){
        getBalance(chainId.value)
    }else{
        data.value = [];
    }
    return store.state.user?.readyAssets
});

const getBalance = async (chainid: number) => {
    if(chainid == 80001){
        var result: any = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, [0, 1, 2]);
    }else{
        var result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, [0, 1, 2]);
    }
    console.log(result, 'result');
    getData(result)
   
}

const getData = async (boxData: any[]) => {
    console.log(boxData);
    console.log(data.value);
    let temp: any = [];
    data.value = [];
    (function loop(index){
        proxy.$api.get(`https://api.cyberpop.online/box/${index}`).then((result: any) => {
            console.log(result);
            temp.push({
                id: index,
                number: boxData[index],
                info: result,
            })
            if (++index < boxData.length) {
                loop(index);
            } else {
                data.value = temp;
                console.log(data._rawValue);
                console.log("over1!!!!!");
            }
        })
    })(0)
    if(chainId.value != 80001) return; // 目前只有mumbai能用购买盒子
    let LootBox_result: any = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, [0, 1, 2], '0x4D0af4041e61Ada9051022B278c1C7aa6cc5DFD7'); // 查询已上架的资产
    Remaining.value = LootBox_result;
}
const toDetails = (type:any) => {
    router.push({ name: 'details',params:{ type }})
}

const purchase = async (boxId: Number) => {
    // let result = Web3.balanceOfBatch(MarketV2.abi, MarketV2.address, [0, 1, 2], true);
    // console.log(result);
    store.dispatch('user/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 0} });
    let allowance_res: any = await Web3.allowance(cyt.abi, cyt.address, '0x4D0af4041e61Ada9051022B278c1C7aa6cc5DFD7'); //用自己的cyt去给授权市场合约授权的个数
    console.log(allowance_res, 'allowance_res');
    if(allowance_res < 30){
        let approve_res = await Web3.approve(cyt.abi, cyt.address, '0x4D0af4041e61Ada9051022B278c1C7aa6cc5DFD7', 31);
        console.log(approve_res, 'approve_res');
        if(!approve_res) { // 授权失败
            store.dispatch('user/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 2} });
            return;
        }
    }
    // 正常流程
    store.dispatch('user/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 3} });
    let reuslt = await Web3.buyLootBox(MarketV2.abi, MarketV2.address, boxId, 30);
    if(reuslt){
        store.dispatch('user/purchaseState', { show: false, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 5} });
    }else{
        store.dispatch('user/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 5} });
    }
}

onMounted(() => {
    window.scrollTo(0,0);
    if(readyAssetsF.value != -1 && chainId.value == 80001 || chainId.value == 43113){
        // getBalance()
    }
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
    .boxBg{
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
        background-color: #000000;
        overflow: hidden;
        .titles{
            z-index: 1;
            margin-left: 31px;
            .title{
                margin-top: 61px;
                height: 95px;
                font-size: 40px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 47px;
                animation: fadeInUp .8s linear;
            }
            .round{
                display: flex;
                align-items: flex-end;
                height: 53px;
                margin-top: 8px;
                div:nth-child(1){
                    width: 140px;
                    font-size: 67px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    line-height: 53px;
                    background: linear-gradient(76deg, #8900FF 0%, #FFFFFF 30%, #00FFBF 46%, #9C3DFF 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                div:nth-child(2){
                    width: 94px;
                    height: 28px;
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    color: #000000;
                    line-height: 30px;
                    text-align: center;
                    background-color: #04FFA2;
                    clip-path: polygon(0 0, 100% 0, 100% 65%, 92% 100%, 0 100%);
                }
            }
            .subtitle{
                width: 273px;
                height: 60px;
                margin: 14px 0 17px;
                font-size: 18px;
                color: #04FFA2;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 30px;
                letter-spacing: 2px;
            }
            .desc{
                width: 188px;
                height: 132px;
                font-size: 14px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 22px;
            }
        }   
        .vBg{
            position: relative;
            height: 348px;
            margin-top: -116px;
            :deep(.VideoBg){
                height: 348px !important;
            }
            :deep(.VideoBg video){
                height: 348px !important;
                position: absolute;
                top: 50%;
                left: 50%;
                visibility: hidden;
                transform: translate(-67%,-50%);
            }
            .maskBlur{
                position: absolute;
                bottom: -50px;
                width: 100%;
                height: 77px;
                background: linear-gradient(180deg, rgba(0, 0, 0,0) 0, rgba(0, 0, 0, 1) 60%);
            }
        }
        .blind{
            position: relative;
            background: #000000;
            .title{
                margin-bottom: 8px;
                font-size: 27px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 63px;
                text-align: center;
                span{
                    background: linear-gradient(254deg, #04FFA2 0%, #37D4BA 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
            ul{
                padding-bottom: 55px;
                background-image: url('../../../assets/nwbox/boxBg-phone.png');
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: 100% auto;
                li{
                    // display: flex;
                    width: 334px;
                    // height: 708px;
                    margin: 0 auto 31px;
                    padding: 24px 30px 27px;
                    background: #1A1728;
                    border-radius: 2px;
                    border: 2px solid #434248;
                    text-align: center;
                    .boxVideo{
                        position: relative;
                        width: 274px;
                        height: 274px;
                        border-radius: 10px;
                        overflow: hidden;
                        video{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                            width: 134%;
                        }
                        .third{
                            width: 176%;
                        }
                    }
                    .name{
                        margin: 14px 0 8px;
                        font-size: 22px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        line-height: 39px;
                    }
                    .introduce{
                        // flex: 1;
                        width: 283px;
                        min-height: 126px;
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFFFFF;
                        line-height: 18px;
                    }
                    .price{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 10px 0 17px;
                        img{
                            width: 35px;
                            height: 35px;
                        }
                        .num{
                            // width: 102px;
                            font-size: 33px;
                            // font-family: AlibabaPuHuiTi_2_105_Heavy;
                            font-family: Oswald-Regular;
                            font-weight: 900;
                            color: #F1BF34;
                            line-height: 46px;
                            text-align: right;
                        }
                        .exchange{
                            margin-left: 16px;
                            font-size: 19px;
                            // font-family: AlibabaPuHuiTi_2_55_Regular;
                            font-family: Oswald-Regular;
                            font-weight: 900;
                            color: #B3B3B3;
                            line-height: 26px;
                        }
                    }
                    .btn{
                        width: 214px;
                        margin: 0 auto;
                        font-size: 20px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        line-height: 54px;
                        .purchase, .open{
                            width: 100%;
                            height: 54px;
                            margin-bottom: 17px;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.png');
                            background-size: 100% 100%;
                            cursor: pointer;
                        }
                        .details{
                            width: 100%;
                            height: 54px;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/cancle.png');
                            background-size: 100% 100%;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .nothing{
            height: 80vh;
            text-align: center;
            padding-bottom: 7.55vw;
            .txt{
                height: 1.04vw;
                font-size: .83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #B1B5C3;
                line-height: 1.04vw;
                text-align: center;
                margin-top: 13vw;
                a{
                    color: #04FFA2;
                    text-decoration: none;
                    cursor: pointer;
                }
            }
            img{
                margin-top: 10vw;
                width: 40.75vw;
            }
        }
    }
</style>
