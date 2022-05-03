<template>
    <div class="container" v-show="isShowTips">
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide') ">
            <img class="close" v-if="props.isClose" src="@/assets/nwhome/close.svg" alt=""  @click="close">
            <div class="content">
                <div class="title">{{ props.title }}</div>
                <!-- <div class="text">{{ props.content == 'netWork' ? $t('message.common.metamask.switch') : props.content }} <a v-if="props.addNetwork" href="https://chainlist.org/" target="_blank">{{ $t('message.common.metamask.add1') }}</a> </div> -->
                <div class="text" v-if="props.addNetwork">{{ $t('message.common.metamask.switch') }} <br/>
                    <span v-if="props.addNetwork" @click="changeChain(43113)">{{ $t('message.common.metamask.add2') }}</span> 
                    <span v-if="props.addNetwork" @click="changeChain(80001)">{{ $t('message.common.metamask.add1') }}</span>  
                </div>
                <!-- 開啟盒子 -->
                <div v-if="boxId != undefined">
                    <div class="tips" v-show="numState == ''">{{$t('message.assets.pop.tips')}}</div>
                    <div class="tips" v-show="numState == 'error'">{{$t('message.assets.pop.tips_err')}}</div>
                    <div class="number">
                        <div class="add" @click="addNft()">+</div>
                        <input id="inputNum" type="text" :value="valueIn" @input="inputNumber($event)">
                        <div class="reduce" @click="reduceNft()">—</div>
                    </div>
                    <div class="btns">
                        <div :class="{'active': active == 0}" @click="active = 0">Mix</div>
                        <div :class="{'active': active == 1}" @click="active = 1">Max</div>
                    </div>
                    <div class="unpack" v-if="!isUnpack" @click="unpack">{{ $t('message.details.box_btn_open') }}</div>
                    <div v-if="props.content && isUnpack" class="text">{{ props.content }}</div>
                    <div v-if="props.content && isUnpack" class="loading">
                        <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                    </div>
                </div>
                <!-- 轉帳狀態 -->
                <div v-if="boxId == undefined && isLoading">
                    <div v-if="props.content" class="text">{{ props.content }}</div>
                    <div v-if="props.content" class="loading">
                        <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, getCurrentInstance } from 'vue'
import store from '@/store/index'
import { useI18n } from 'vue-i18n';
import Web3 from '@/tools/web3' 
const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const numState = ref('');
const canAdd = ref('');
const xplanAni = computed(() => store?.state.user?.xplanAni);
const chainId: any = computed(() => store.state.user?.chainId); // vuex state狀態管理器中獲取chain狀態
const { GiftBox, LootBox, Cyborg, MarketV2, cyt } = Web3.contracts;
const readyAssetsF: any = computed(() => store.state.user?.readyAssets ); // 连接的状态值

//unpack
const isUnpack: any = ref(false)
// 開盒子
const unpack = async () => {
    // getLast(); // 查询资产合约中最后一位为立马开启的资产
    if(numState.value == 'error') return;
    isUnpack.value = true;
    console.log(props.boxId, valueIn.value);
    const { abi, address } = chainId.value == 43113 ? GiftBox : LootBox;
    let result = await Web3.unpack(abi, address, props.boxId, valueIn.value);
    console.log(result, 'result');
    store.dispatch('user/TipsState', {show: false, info: { }});
    if(result) {
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
        store.dispatch('user/dataSumSearch', { flag: readyAssetsF.value + 1 }); // 操作成功 页面监听到，再刷新数据
        store.dispatch('user/boxOpened', true);
        store.dispatch('user/xplanChangeAni', true);
        store.dispatch('user/boxId', props.boxId);
    }else{
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.reject_transaction')}})
    }
}

const props: any = defineProps({
    content: String, // 文案内容
    isLoading: {
        type: Boolean,
        default: false,
    },
    isClose: Boolean,  // 现实叉叉按钮
    title: String,  // 标题
    isShowTips: Boolean, //是否显示
    addNetwork: Boolean,
    boxId: {
        type: Number,
        default: undefined,
    },
    haveNFT: String,
})

const close = () => {
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        store.dispatch('user/TipsState', {show: false, info: { }})
    }, 300);
}

const valueIn: any = ref(0)

// input state
const active = ref(0);
let regExp = new RegExp("^([1-9]|[1-9][0-9]{0," +  +"})$")
let inputState:any = ref('')
const inputNumber = (e:any) => {
    // console.log(e.target.value,regExp.test(e.target.value));
    valueIn.value = e.target.value
    if (e.target.value && !(regExp.test(e.target.value))) {
        numState.value = 'error'
        canAdd.value = 'disable'
        // e.target.value = valueIn.value
    } else if( !e.target.value ){
        numState.value = 'error'
        canAdd.value = 'disable'
    }else{
        numState.value = ''
        canAdd.value = ''
        valueIn.value = e.target.value
        if( inputState.value == 'success' ){
        }
    }
}


const addNft = () => {
    if( valueIn.value < 1 ){
        valueIn.value = 1 ;
    }else if( valueIn.value >= props.haveNFT ){
        
    }else{
        valueIn.value = parseInt(valueIn.value) + 1;
        if( valueIn.value >= props.haveNFT ){
           
        }else{
            
        }
    
    }
}
const reduceNft = () => {
    if( valueIn.value <= 1 ){
        valueIn.value = 1 ;
        
    }else{
        valueIn.value = parseInt(valueIn.value) - 1;
        if( valueIn.value <= 1 ){
        }else{
        }
    }
}

const changeChain = async (value?: any) => {
    let a: any = await Web3.addChain(value)
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
            height: 487px;
            padding: 24px;
            background: linear-gradient(221deg, rgba(132, 120, 255, .8) 0%, rgba(12, 9, 17, .8) 100%),
                        linear-gradient(81deg, rgba(45, 222, 211, .6) 0%, rgba(12, 9, 17, 1) 100%);
            box-shadow: inset 0px 4px 0px 1px #5A5685;
            .close{
                right: 1vw;
                z-index: 11;
                width: 40px;
                margin-left: 300px;
            }
            .content{
                .title{
                    font-size: 28px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    color: #FFFFFF;
                    line-height: 39px;
                }
                .number{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    height: 40px;
                    .add,.reduce{
                        width: 96px;
                        height: 40px;
                        font-size: 24px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFFFFF;
                        line-height: 40px;
                        text-align: center;
                        background-color: #8478FF;
                        cursor: pointer;
                    }
                    input{
                        width: 95px;
                        height: 34px;
                        font-size: 24px;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 34px;
                        text-align: center;
                        background: transparent;
                        border: none;
                        outline: none;
                    }
                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                        -webkit-appearance: none !important;
                        margin: 0;
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
