<template>
    <div class="popup">
        <div class="content">
            <div class="title">NFT TRANSFER</div>
            <div class="tips">Please input amount</div>
            <div class="number">
                <div class="add" @click="addNft()" :class="canAdd == 'disable' ? 'disableNum':''">+</div>
                <input id="inputNum" type="number" value="1" ref="inputNum">
                <div class="reduce" @click="reduceNft()" :class="canReduce == 'disable' ? 'disableNum':''">—</div>
            </div>
            <div class="desc">NFT #3405454 send to the wallet address</div>
            <div class="address" :class="inputState == 'activated' ? 'activated':'' || inputState == 'success' ? 'success':'' || ( addressState == 'empty' || addressState == 'error' )? 'empty':''">
                <input class="inputTxt" type="text" v-model="inputAddress" @focus="inputState = 'activated'" @blur="checkAddress()">
                <div class="mess" v-if="addressState == 'empty'">Address is empty</div>
                <div class="mess" v-if="addressState == 'error'">Address format error</div>
            </div>
            <div class="btn">
                <div class="cancel" @click="closeDialog()">CANCEL</div>
                <div class="transfer" @click="transfer()">TRANSFER</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, readonly, ref } from 'vue'
import store from '@/store'
const comingOutFlag = computed(() => store?.state.user?.comingOutFlag);

let canAdd:any = ref('')
let canReduce:any = ref('disable')
let addressState:any = ref('')

// NFT Number
const inputNum:any = ref(null)
const haveNFT:number = 5
const addNft = () => {
    if( inputNum.value.value < 1 ){
        inputNum.value.value = 1 ;
    }else if( inputNum.value.value >= haveNFT ){
        canAdd.value = 'disable'
    }else{
        inputNum.value.value = parseInt(inputNum.value.value) + 1;
        if( inputNum.value.value >= haveNFT ){
            canAdd.value = 'disable'
        }else{
            canAdd.value = ''
        }
        canReduce.value = ''
    }
}
const reduceNft = () => {
    if( inputNum.value.value <= 1 ){
        inputNum.value.value = 1 ;
        canReduce.value = 'disable'
    }else{
        inputNum.value.value = parseInt(inputNum.value.value) - 1;
        if( inputNum.value.value <= 1 ){
            canReduce.value = 'disable'
        }else{
            canReduce.value = ''
        }
        canAdd.value = ''
    }
}

// input state
let inputState:any = ref('')

// check address
const inputAddress:any = ref('')
const checkAddress = () => {
    let reg = /^[a-zA-Z0-9]+\s*$/
    if( inputAddress.value == '' ){
        inputState.value = ''
        addressState.value = 'empty'
    }else if( !reg.test(inputAddress.value) ){
        inputState.value = ''
        addressState.value = 'error'
    }else{
        inputState.value = 'success'
        addressState.value = ''
    }
}

// transfer submit
const transfer = () => {
    if( inputAddress.value == '' ){
        inputState.value = ''
        addressState.value = 'empty'
    }else if( inputState.value == 'success' ){
        let test = 'success'
        if( test == 'disable' ){
            inputState.value = ''
        }else if( test == 'success' ){
            inputState.value = 'success'
        }
    }
}


const closeDialog = () => {
    store.dispatch('user/transferChange',false)
    inputNum.value.value = 1 
    inputAddress.value = ''
    canAdd.value = ''
    canReduce.value = 'disable'
    inputState.value = ''
    addressState.value = ''
}

onMounted(() => {
})
</script>

<style lang="less" scoped>
    .popup{
        z-index: 9;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(35, 38, 47, 0.9);
        .content{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 387px;
            padding: 24px;
            background: linear-gradient(221deg, rgba(132, 120, 255, .8) 0%, rgba(12, 9, 17, .8) 100%),
                        linear-gradient(81deg, rgba(45, 222, 211, .6) 0%, rgba(12, 9, 17, 1) 100%);
            box-shadow: inset 0px 4px 0px 1px #5A5685;
            .title{
                height: 39px;
                font-size: 28px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 39px;
            }
            .tips{
                height: 22px;
                margin: 30px 0 16px;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 22px;
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
            }
            .desc{
                width: 100%;
                height: 22px;
                margin: 32px 0 16px;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 22px;
            }
            .address{
                position: relative;
                width: 327px;
                height: 40px;
                margin-bottom: 32px;
                padding: 12px;
                border: 1px solid #8478FF;
                input{
                    width: 100%;
                    height: 16px;
                    color: rgba(255, 255, 255, 0.35);
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    line-height: 16px;
                    background: transparent;
                    border: none;
                    outline: none;
                }
                .mess{
                    position: absolute;
                    left: 0;
                    bottom: -18px;
                    height: 16px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    color: #FF5CA1;
                    line-height: 16px;
                }
            }
            .btn{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                height: 48px;
                .cancel{    
                    width: 163px;
                    height: 48px;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 48px;
                    text-align: center;
                    background-image: url('../../assets/nwAssets/blackbg-phone.svg');
                    background-size: 100% 100%;
                    cursor: pointer;
                }
                .transfer{    
                    width: 164px;
                    height: 48px;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 48px;
                    text-align: center;
                    background-image: url('../../assets/nwAssets/purplebg-phone.svg');
                    background-size: 100% 100%;
                    cursor: pointer;
                }
            }
        }
    }
    .add.disableNum,.reduce.disableNum{
        background-color: #8478FF;
        color: #8478FF;
        opacity: 0.5;
    }
    .address.activated{
        border: 1px solid #ffffff !important;
        input{
            color: #ffffff !important;
        }
    }
    .address.success{
        border: 1px solid #8478FF !important;
        input{
            color: #ffffff !important;
        }
    }
    .address.empty{
        border: 1px solid #FF5CA1 !important;
        input{
            color: #FF5CA1 !important;
        }
    }
    
</style>
