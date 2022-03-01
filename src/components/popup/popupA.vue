<template>
    <div class="popup">
        <div class="cover"></div>
        <div class="coverborder"></div>
        <div class="content">
            <div class="title">NFT TRANSFER</div>
            <div class="tips">Please input amount</div>
            <div class="number" :class="addressState == 'empty' ? 'disableNum' : '' || addressState == 'error' ? 'errorNum' : ''">
                <input id="inputNum" type="number" value="1" ref="inputNum">
                <div class="add" @click="addNft()"></div>
                <div class="reduce" @click="reduceNft()"></div>
            </div>
            <div class="desc">NFT #3405454 send to the wallet address</div>
            <div class="address" :class="addressState == 'empty' ? 'disableAddr' : '' || addressState == 'error' ? 'errorAddr' : ''">
                <input class="inputTxt" type="text">
                <div class="mess" v-show="addressState == 'error'">Address is empty</div>
            </div>
            <div class="btn">
                <div class="cancel" @click="store.dispatch('user/transferChange',false);">CANCEL</div>
                <div class="transfer">TRANSFER</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, readonly, ref } from 'vue'
import store from '@/store'
const comingOutFlag = computed(() => store?.state.user?.comingOutFlag);

const props = defineProps({
    addressState: String,
})

// NFT transfer
const inputNum:any = ref(null)
const addNft = () => {
    if( inputNum.value.value <= 1 ){
        inputNum.value.value = 1 ;
    }else{
        inputNum.value.value = parseInt(inputNum.value.value) + 1;
    }
}
const reduceNft = () => {
    if( inputNum.value.value <= 1 ){
        inputNum.value.value = 1 ;
    }else{
        inputNum.value.value = parseInt(inputNum.value.value) - 1;
    }
    
}



const closeDialog = () => {
    store.dispatch('user/addComingOut',true)
}

onMounted(() => {
})
</script>

<style lang="less" scoped>
    .popup{
        // z-index: 9;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 28.125vw;
        height: 25.52vw;
        margin: 18.4vw auto 0;
        padding: 2.5vw 2.5vw 2.23vw;
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
        .content{
            position: absolute;
            .title{
                height: 2.03vw;
                font-size: 1.45vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 1.71vw;
                letter-spacing: .05vw;
            }
            .tips{
                height: 1.14vw;
                margin: 1.25vw 0;
                font-size: .83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: .98vw;
            }
            .number{
                position: relative;
                width: 4.47vw;
                height: 2.81vw;
                padding: .4vw .6vw;
                border: 1px solid #ffffff;
                input{
                    width: 100%;
                    height: 100%;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #ffffff;
                    line-height: .98vw;
                    border: none;
                    outline: none;
                    background: transparent;
                }
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none !important;
                    margin: 0;
                }
                div{
                    position: absolute;
                    right: .7vw;
                    width: 0;
                    height: 0;
                    border-left: .3vw solid transparent;
                    border-right: .3vw solid transparent;
                }
                .add{
                    top: .6vw;
                    border-bottom: .6vw solid #ffffff;
                    cursor: pointer;
                }
                .reduce{
                    bottom: .6vw;
                    border-top: .6vw solid #ffffff;
                    cursor: pointer;
                }
            }
            .desc{
                height: 1.14vw;
                margin: 1.25vw 0;
                font-size: .83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: .98vw;
            }
            .address{
                position: relative;
                width: 23.12vw;
                height: 2.81vw;
                margin-bottom: 2.91vw;
                border: 1px solid #ffffff;
                input{
                    width: 100%;
                    height: 100%;
                    padding: .83vw;
                    color: #ffffff;
                    background: transparent;
                    border: none;
                    outline: none;
                }
                .mess{
                    position: absolute;
                    bottom: -1.45vw;
                    height: 1.04vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    color: #FF5CA1;
                    line-height: 1.04vw;
                }
            }
            .btn{
                float: right;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 18.33vw;
                height: 2.91vw;
                .cancel{    
                    width: 8.54vw;
                    height: 2.91vw;
                    font-size: 1.04vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 2.91vw;
                    text-align: center;
                    cursor: pointer;
                }
                .transfer{    
                    width: 8.54vw;
                    height: 2.91vw;
                    font-size: 1.04vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 2.91vw;
                    text-align: center;
                    cursor: pointer;
                }
            }
        }
    }
    .address.disableAddr{
        border: 1px solid #8478FF !important;
        input{
            color: #73747F !important;
        }
    }
    .number.disableNum{
        border: 1px solid #8478FF !important;
        input{
            color: rgba(255, 255, 255, 0.35) !important;
        }
        .add{
            border-bottom: .6vw solid #8478FF !important;
        }
        .reduce{
            border-top: .6vw solid #8478FF !important;
        }
    }
    .address.errorAddr{
        border: 1px solid #FF5CA1 !important;
        input{
            color: #FF5CA1 !important;
        }
    }
    .number.errorNum{
        position: relative;
        opacity: .5;
        background-color: #52546B;
        border: 1px solid #ffffff !important;
        input{
            color: #ffffff !important;
        }
        .add{
            border-bottom: .6vw solid #ffffff !important;
        }
        .reduce{
            border-top: .6vw solid #ffffff !important;
        }
    }
    .errorNum:after{
        z-index: 2;
        display: inline-block;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        cursor: not-allowed;
    }
</style>
