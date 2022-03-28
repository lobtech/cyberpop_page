<template>
    <header-b path="javascript:scrollTo(0,0);" :type="0"></header-b>
    <!-- <div class="section">
        <div class="title">COMING SOON</div>
    </div> -->
    <div class="assets">
        <div class="wrap">
            <div class="welcome">
                <div class="icon">
                    <img src="@/assets/nwAssets/portrait.svg" alt="">
                </div>
                <div class="title">{{$t('message.assets.wel_name')}}</div>
                <div class="id">{{realId == -1? '':realId}}</div>
                <div class="desc">
                    {{$t('message.assets.wel_desc')}}
                </div>
                <div class="search">
                    <div class="input" :class="inputShow ? 'actived' : ''">
                        <input v-model="inputValue" @focus="inputShow = true" ref="myInput" type="text" :placeholder="$t('message.assets.input_pla')">
                        <img v-show="inputShow" @click="clearInput()" class="clear" src="@/assets/nwAssets/clear-input.svg" alt="">
                        <img v-show="!inputShow" src="@/assets/nwAssets/search-icon.svg" alt="">
                        <img v-show="inputShow" @click="searchSubmit()" src="@/assets/nwAssets/search-iconActived.svg" alt="">
                    </div>
                    <div class="menuSelect">
                        <div class="wrapbox">
                            <ul class="token">
                                <li @click="showSelect(1)"><div>ERC 721, ERC 1155</div></li>
                                <li v-show="showItem1" class="item" @click="selectItem($event)">
                                    <div class="ecr7 selected">ERC 721</div>
                                    <div class="ecr1">ERC 1155</div>
                                </li>
                            </ul>
                            <ul class="type">
                                <li @click="showSelect(2)"><div>{{$t('message.assets.type1_b')}}</div></li>
                                <li v-show="showItem2" class="item" @click="selectItem($event)">
                                    <div class="selected">{{$t('message.assets.type1_item_b')}}</div>
                                    <div>{{$t('message.assets.type1_item1')}}</div>
                                    <div>{{$t('message.assets.type1_item2')}}</div>
                                    <div>{{$t('message.assets.type1_item3')}}</div>
                                    <div>{{$t('message.assets.type1_item4')}}</div>
                                    <div>{{$t('message.assets.type1_item5')}}</div>
                                    <div class="btn">
                                        <div class="cancel">{{$t('message.assets.btn_cancel_b')}}</div>
                                        <div class="ok">{{$t('message.assets.btn_ok_b')}}</div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="quality">
                                <li @click="showSelect(3)"><div>{{$t('message.assets.type2_b')}}</div></li>
                                <li v-show="showItem3" class="item" @click="selectItem($event)">
                                    <div class="selected">{{$t('message.assets.type2_item_b')}}</div>
                                    <div>{{$t('message.assets.type2_item1')}}</div>
                                    <div>{{$t('message.assets.type2_item2')}}</div>
                                    <div>{{$t('message.assets.type2_item3')}}</div>
                                    <div>{{$t('message.assets.type2_item4')}}</div>
                                    <div class="btn">
                                        <div class="cancel">{{$t('message.assets.btn_cancel_b')}}</div>
                                        <div class="ok">{{$t('message.assets.btn_ok_b')}}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ecr" v-if="readyAssetsF == 0 || readyAssetsF == 1">
            <!-- <div class="ecr" v-if="false"> -->
                <div class="ecrchange">
                    <div class="ecr721" v-show="!ecrType">
                        <ul class="prince">
                            <!-- <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Prince of Shadows<span>x4</span></div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup()">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell">{{$t('message.assets.btn_sell')}}</div>
                                </div>
                            </li> -->
                        </ul>
                        <!-- <ul class="box">
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Mystery box</div>
                                <div class="btn">
                                    <div class="unpack">{{$t('message.assets.btn_unpack')}}</div>
                                </div>
                            </li>
                        </ul> -->
                    </div>
                    <div class="ecr115" v-show="ecrType">
                        <ul class="prince">
                            <li v-for="(item, index) in dataTemp" :key="index">
                                <img :src="item.image" alt="">
                                <div class="name">{{item.name}}<span>x{{item.number}}</span></div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell">{{$t('message.assets.btn_sell')}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="nothing" v-if="readyAssetsF == -1">
                <img src="@/assets/nwAssets/nothing.svg" alt="">
            </div>
        </div>
    </div>
    <footer-b></footer-b>
    <popup-b v-show="transferActive" :transferInfo="transferItem" :abi="abiSelect" :address="addressSelect"></popup-b>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
const router = useRouter()
const { proxy } = getCurrentInstance() as any;
const realId = computed(() => store?.state.user?.realId);


let abi:any = ref(null);
let address:any = ref(null);
let dao_abi:any = ref(null);
let dao_address:any = ref(null);
const dataTemp:any = ref([]);

const readyAssetsF = computed(() => {
    if( store?.state.user?.readyAssets !== -1 ){
        dataTemp.value = JSON.parse(JSON.stringify(store.state.user?.dataSum));
        // console.log('computed',dataTemp.value,store.state.user?.readyAssets);

        abi.value = JSON.parse(JSON.stringify(store.state.user?.contract)).abi
        address.value = JSON.parse(JSON.stringify(store.state.user?.contract)).address
        dao_abi.value = JSON.parse(JSON.stringify(store.state.user?.contract)).dao_abi
        dao_address.value = JSON.parse(JSON.stringify(store.state.user?.contract)).dao_address
        
    }
    return store.state.user?.readyAssets
});


// select
let abiSelect:any = ref(null);
const addressSelect:any = ref(null);




// input actived
const myInput:any = ref(null)
let inputShow:any = ref(false)
let inputValue:any = ref('')
const clearInput = () => {
    inputValue.value = ''
    myInput.value.focus()
}
const inputOtherClick = (e:any) => {
    if( myInput.value.contains(e.target) ){
        return
    }else{
        inputValue.value = ''
        inputShow.value = false;
    }
}


const changeText = (parentLi:any) => {
    let longString:string = ''
    let firstLi:string = ''
    const selectedArr = parentLi.querySelectorAll('.selected')
    const selectArrLen = selectedArr.length
    if( selectArrLen == 0 ){
        // 当不选择时，默认勾选第一项
        firstLi = parentLi.parentElement.querySelectorAll('li')[1].querySelector('div').innerText;
        (parentLi.parentElement.querySelector('li').querySelector('div') as HTMLElement).innerText = firstLi;
        parentLi.parentElement.querySelectorAll('li')[1].querySelector('div').classList.add('selected');

    }else{
        for( let i = 0;i < selectArrLen; i++ ){
        
            if( i == selectArrLen-1 ){
                longString += selectedArr[i].innerText
            }else{
                longString += selectedArr[i].innerText + ', '
            }
        }
        (parentLi.parentElement.querySelector('li').querySelector('div') as HTMLElement).innerText = longString;
    }
}

// select
let showItem1:any = ref(false)
let showItem2:any = ref(false)
let showItem3:any = ref(false)
const showSelect = (index:any) => {
    switch (index){
        case 1:
            showItem1.value = !showItem1.value;
            showItem2.value = false;
            showItem3.value = false;
            break;
        case 2:
            showItem2.value = !showItem2.value;
            showItem1.value = false;
            showItem3.value = false;
            break;
        default:
            showItem3.value = !showItem3.value;
            showItem1.value = false;
            showItem2.value = false;
            break;
    }
}
const selectItem = (e:any) => {    
    const parentLi = e.target.parentElement.parentElement
    if( e.target.className == 'ok' ){
        changeText(parentLi);
        showItem1.value = false;
        showItem2.value = false;
        showItem3.value = false;

    }else if( e.target.className == 'cancel' ){
        showItem1.value = false;
        showItem2.value = false;
        showItem3.value = false;
    }else{
        (e.target as HTMLElement).classList.toggle('selected')
        if(  e.target.innerText == 'ERC 721' || e.target.innerText == 'ERC 1155' ){
            changeText(parentLi);
            showItem1.value = false;
            showItem2.value = false;
            showItem3.value = false;
        }
    }
}


// ecr exchange
let ecrType:any = ref(true);


// NFT transfer
const transferActive = computed(() => store?.state.user?.transferActive)
const transferItem:any = ref(null)
const transferPopup = (item:any) => {
    store.dispatch('user/transferChange',true)
    store.dispatch('user/transferChangeAni',true)
    transferItem.value = item
    if( item.type == 0 ){
        abiSelect.value = abi
        addressSelect.value = address
    }else if( item.type == 1 ){
        abiSelect.value = dao_abi
        addressSelect.value = dao_address
    }
}


// message dialog
const showDialog = computed(() => store?.state.user?.showDialog);
let messageState:any = ref(0)
let messageContent:any = ref('')
const mtimer:any = ref(null)
const messageAlert = (flag:any, message:any) => {
    clearTimeout(mtimer.value)
    messageState.value = flag
    store.dispatch('user/showDialog',true)
    messageContent.value = message
    mtimer.value = setTimeout(() => {
        store.dispatch('user/showDialog',false)
    },2000)
}

// search submit
const searchSubmit = () => {
    inputShow.value = false
}



onUnmounted(() => {
    window.removeEventListener('click', inputOtherClick, true);
})



onMounted(async () => {

    if( realId.value == -1 && proxy.$route.path == '/knapsack' ){
        
        router.push('/')
        // window.location.href='https://test.cyberpop.online/'
    }
    window.scrollTo(0,0);
    window.addEventListener('click', inputOtherClick, true);
    store.dispatch('user/transferChange',false)
    store.dispatch('user/transferChangeAni',false)
    if(store.state.user?.readyAssets !== -1){
        dataTemp.value = JSON.parse(JSON.stringify(store.state.user?.dataSum));
        // console.log(11, store.state.user?.dataSum);
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
    .assets{
        width: 100%;
        background-color: #121122;
        .wrap{
            width: 100%;
            padding-top: 55px;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/bodybg-phone.png');
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 100% auto;
            .welcome{
                text-align: center;
                .icon{
                    width: 81px;
                    height: 72px;
                    margin: 36px auto 0;
                    text-align: center;
                    background-image: url('../../../assets/nwAssets/portraitBg.svg');
                    background-size: 100% auto;
                    img{
                        width: 58px;
                        height: 58px;
                        margin: 5px 12px 0 11px;
                    }
                }
                .title{
                    // width: 151px;
                    height: 20px;
                    margin: 12px 0;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 20px;
                    white-space: nowrap;
                }
                .id{
                    // width: 184px;
                    height: 20px;
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 16px;
                }
                .desc{
                    width: 303px;
                    height: 64px;
                    margin: 12px auto 28px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B1B5C3;
                    line-height: 16px;
                }
                .search{
                    margin-bottom: 96px;
                    .input{
                        position: relative;
                        width: 303px;
                        height: 40px;
                        margin-left: 36px;
                        border-radius: 2px 2px 2px 2px;
                        border: 2px solid #8478FF;
                        input[type='text']{
                            width: 253px;
                            height: 100%;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #8478FF;
                            line-height: 16px;
                            background-color: transparent;
                            border: none;
                            outline: none;
                        }
                        input::-webkit-input-placeholder { 
                            color: #8478FF;
                        }
                        input:-moz-placeholder { 
                            color: #8478FF;
                        }
                        input::-moz-placeholder {
                            color: #8478FF;
                        }
                        input:-ms-input-placeholder {
                            color: #8478FF;
                        }
                        img:not(.clear){
                            width: 16px;
                            height: 16px;
                            margin-left: 10px;
                            vertical-align: middle;
                        }
                    }
                    .input.actived{
                        border: 2px solid #ffffff;
                        input[type='text']{
                            color: #ffffff;
                        }
                        input::-webkit-input-placeholder { 
                            color: #ffffff;
                        }
                        input:-moz-placeholder { 
                            color: #ffffff;
                        }
                        input::-moz-placeholder {
                            color: #ffffff;
                        }
                        input:-ms-input-placeholder {
                            color: #ffffff;
                        }
                        .clear{
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            right: 40px;
                            margin: auto 0;
                        }
                    }
                    .menuSelect{
                        position: absolute;
                        width: 100%;
                        margin: 0 0 32px 0;
                        padding-top: 24px;
                        .wrapbox{
                            display: flex;
                            height: 440px;
                            overflow-x: scroll;
                            overflow-y: hidden;
                            white-space: nowrap;
                            .token,.type,.quality{
                                display: inline-block;
                                margin-right: 16px;
                                li{
                                    height: 40px;
                                    font-size: 14px;
                                    font-family: AlibabaPuHuiTi_2_115_Black;
                                    color: #FFFFFF;
                                    line-height: 40px;
                                    text-align: left;
                                    text-indent: 12px;
                                }
                                li:first-child{
                                    background: #8478FF;
                                    position: relative;
                                }
                                li:first-child::after{
                                    position: absolute;
                                    top: 3vw;
                                    right: 3vw;
                                    display: inline-block;
                                    content: "";
                                    width: 8px;
                                    height: 8px;
                                    border: .8vw solid #fff;
                                    border-top: none;
                                    border-left: none;
                                    transform: rotate(45deg);
                                }
                                li:last-child{
                                    z-index: 3;
                                    position: absolute;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: left;
                                    width: 148px;
                                    height: 132px;
                                    padding: 20px;
                                    margin-top: 8px;
                                    background: linear-gradient(221deg, rgba(132, 120, 255, .85) 0%, rgba(12, 9, 17, 0) 100%),
                                                linear-gradient(77deg, rgba(120, 90, 187, .85) 0%, rgba(12, 9, 17, .9) 100%);
                                    box-shadow: -4px 4px 2px 1px rgba(0, 0, 0, 0.25);
                                    border-radius: 2px 2px 2px 2px;
                                    div:not(.btn){
                                        position: relative;
                                        height: 46px;
                                        padding-left: 20px;
                                        font-size: 14px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #FFFFFF;
                                        line-height: 46px;
                                        cursor: pointer;
                                    }
                                    div.selected{
                                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    }
                                    div.selected::before{
                                        display: inline-block;
                                        content: '';
                                        position: absolute;
                                        top: 4.2vw;
                                        left: 2vw;
                                        width: 1vw;
                                        height: 2vw;
                                        border: 2px solid #fff;
                                        border-top: none;
                                        border-left: none;
                                        transform: rotate(45deg);
                                    }
                                    .btn{
                                        display: flex;
                                        justify-content: flex-end;
                                        width: 100%;
                                        div{
                                            width: 88px;
                                            height: 42px;
                                            padding: 0;
                                            font-size: 14px;
                                            text-indent: 0;
                                            text-align: center;
                                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                                            background: #8478FF;
                                            border-radius: 2px 2px 2px 2px;
                                            cursor: pointer;
                                        }
                                        div + div{
                                            margin-left: 12px;
                                        }
                                    }
                                }
                            }
                            .token{
                                width: 109px;
                                margin-left: 36px;
                                li:first-child{
                                    width: 109px;
                                    div{
                                        width: 75%;
                                        letter-spacing: .04vw;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                }
                                li:last-child{
                                    left: 36px;
                                }
                            }
                            .type{
                                width: 288px;
                                li:first-child{
                                    width: 288px;
                                    div{
                                        width: 90%;
                                        letter-spacing: .04vw;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                }
                                li:last-child{
                                    right: 0px;
                                    width: 288px;
                                    height: 386px;
                                }
                            }
                            .quality{
                                width: 143px;
                                li:first-child{
                                    width: 143px;
                                    div{
                                        width: 80%;
                                        letter-spacing: .04vw;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                }
                                li:last-child{
                                    right: 0px;
                                    width: 228px;
                                    height: 316px;
                                }
                            }
                        }
                        .wrapbox::-webkit-scrollbar {
                            width: 0;
                            height: 0;
                            color: transparent;
                        }
                    }
                }
            }
            .ecr{
                margin-bottom: -2px;
                .ecrchange{
                    .ecr721,.ecr115{
                        ul{
                            display: flex;
                            align-items: center;
                            flex-direction: column;
                            li{
                                width: 303px;
                                height: 387px;
                                padding: 16px;
                                margin-bottom: 35px;
                                background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                                            linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                                border: 2px solid;
                                border-image: linear-gradient(206deg, rgba(132, 120, 255, 0.48), rgba(71, 57, 128, 1)) 2 2;
                                img{
                                    width: 100%;
                                    height: 270px;
                                }
                                .name{
                                    height: 24px;
                                    margin: 20px 0 24px 0;
                                    font-size: 18px;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #FFFFFF;
                                    line-height: 24px;
                                    span{
                                        float: right;
                                        height: 24px;
                                        font-size: 24px;
                                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                        line-height: 24px;
                                    }
                                }
                                .btn{
                                    display: flex;
                                    justify-content: center;
                                    div{
                                        height: 48px;
                                        font-size: 16px;
                                        font-family: AlibabaPuHuiTi_2_115_Black;
                                        color: #FFFFFF;
                                        line-height: 48px;
                                        text-align: center;
                                        cursor: pointer;
                                    }
                                    .transfer{
                                        width: 134px;
                                        background-image: url('../../../assets/nwAssets/blackbg.svg');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                    .sell{
                                        width: 136px;
                                        background-image: url('../../../assets/nwAssets/purplebg.svg');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                    .unpack{
                                        width: 271px;
                                        height: 48px;
                                        margin-top: -2px;
                                        background-image: url('../../../assets/nwAssets/unpackbg-phone.png');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                }
                            }
                        }
                    }
                    // .ecr721{
                    //     width: 100%;
                    //     height: 80vh;
                    // }
                }
            }
            .nothing{
                text-align: center;
                margin-bottom: -2px;
                img{
                    width: 120px;
                    height: 128px;
                    margin: 80px auto;
                }
            }
        }
    }
</style>
