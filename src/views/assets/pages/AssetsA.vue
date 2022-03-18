<template>
    <header-a path="javascript:scrollTo(0,0);" :type="0"></header-a>
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
            </div>
            <div class="ecr" v-if="readyAssetsF == 0 || readyAssetsF == 1">
            <!-- <div class="ecr" v-if="false"> -->
                <div class="search">
                    <div class="title">{{$t('message.assets.search_title')}}</div>
                    <div class="input">
                        <input type="text" :placeholder="$t('message.assets.input_pla')">
                    </div>
                    <div class="type">
                        <!-- <div class="name" @click="checkall(1)">Type</div> -->
                        <div class="name">{{$t('message.assets.type1')}}</div>
                        <div class="check">
                            <form action="" class="check">
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type1" value="character">
                                    <label for="type1"><span>{{$t('message.assets.type1_item1')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type2" value="Weapon">
                                    <label for="type2"><span>{{$t('message.assets.type1_item2')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type3" value="Support card">
                                    <label for="type3"><span>{{$t('message.assets.type1_item3')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type4" value="Item">
                                    <label for="type4"><span>{{$t('message.assets.type1_item4')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type5" value="Blind box">
                                    <label for="type5"><span>{{$t('message.assets.type1_item5')}}</span></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="quality">
                        <!-- <div class="name" @click="checkall(2)">Quality</div> -->
                        <div class="name">{{$t('message.assets.type2')}}</div>
                        <form action="" class="check">
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality1" value="Legend">
                                <label for="quality1"><span>{{$t('message.assets.type2_item1')}}</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality2" value="Epic">
                                <label for="quality2"><span>{{$t('message.assets.type2_item2')}}</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality3" value="Rare">
                                <label for="quality3"><span>{{$t('message.assets.type2_item3')}}</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality4" value="Common">
                                <label for="quality4"><span>{{$t('message.assets.type2_item4')}}</span></label>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="ecrchange">
                    <div class="top">
                        <div class="type1" :class="ecrType ? 'active' : ''" @click="ecrType = true">ERC 721</div>
                        <div class="type2" :class="!ecrType ? 'active' : ''" @click="ecrType = false">ERC 1155</div>
                    </div>
                    <div class="ecr721" v-show="ecrType">
                        <!-- <ul class="prince">
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Prince of Shadows<span>x4</span></div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup()">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell">{{$t('message.assets.btn_sell')}}</div>
                                </div>
                            </li>
                        </ul>
                        <ul class="box">
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Mystery box</div>
                                <div class="btn">
                                    <div class="unpack">{{$t('message.assets.btn_unpack')}}</div>
                                </div>
                            </li>
                        </ul> -->
                    </div>
                    <div class="ecr115" v-show="!ecrType">
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
            <!-- <div class="nothing" v-if="true"> -->
                <div class="txt">{{$t('message.assets.nothing')}}<a href="/">{{$t('message.assets.nothing_home')}}</a></div>
                <img src="@/assets/nwAssets/nothing.svg" alt="">
            </div>
        </div>
    </div>
    <footer-a></footer-a>
    <!-- <message-a v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-a> -->
    <popup-a v-show="transferActive" :transferInfo="transferItem" :abi="abiSelect" :address="addressSelect"></popup-a>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { toRaw } from '@vue/reactivity'
const router = useRouter()
const { proxy } = getCurrentInstance() as any
const realId = computed(() => store?.state.user?.realId);


let abi:any = ref(null);
let address:any = ref(null);
let dao_abi:any = ref(null);
let dao_address:any = ref(null);

let dataTemp:any = ref([]);

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

// checkAll (no use)
let selectArr = ref([])
let tbool:any = ref(false)
let qbool:any = ref(false)

let typeRef = ref([])
let qualityRef = ref([])
const typeItem = (el:any) => {
    (typeRef.value as Array<HTMLElement>).push(el)
}
const qualityItem = (el:any) => {
    (qualityRef.value as Array<HTMLElement>).push(el)
}
const checkall = (index:any) => {
    if( index == 1 ){
        // typeRef.value.map( (item:HTMLElement) => {
            // item.toggleAttribute('checked')
            tbool.value = true
        // })
    }else{
        qualityRef.value.map( (item:HTMLElement) => {
            // item.toggleAttribute('checked')
            qbool.value = true
        })
    }
}



// ecr exchange
let ecrType:any = ref(true)


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


onUnmounted(() => {
})




onBeforeMount( () => {
    if( realId.value == -1 && proxy.$route.path == '/assets' ){
        router.push('/')
    }
})

onMounted( () => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',false);// close message dialog
    store.dispatch('user/metaChange',false);
    store.dispatch('user/transferChange',false);

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
        height: 100vh;
        background: rgba(0,0,0,.5);
        overflow: hidden;
        .title{
            width: 39.58vw;
            height: 8.85vw;
            margin-top: 17.4vw;
            font-size: 2.08vw;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            color: #FFFFFF;
            line-height: 8.85vw;
            letter-spacing: 1.04vw;
            text-align: center;
            background-image: url('../../../assets/nwmining/coming-bg.png');
            background-position: center;
            background-size: auto 100%;
        }
    }
    .assets{
        width: 100%;
        // background-color: #000000;
        background-color: #080707;
        .wrap{
            width: 100%;
            padding-top: 5.5vw;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/bodyBg.png');
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 100% auto;
            .welcome{
                text-align: center;
                .icon{
                    width: 8.75vw;
                    height: 7.6vw;
                    margin: 2.5vw auto 0;
                    text-align: center;
                    background-image: url('../../../assets/nwAssets/portraitBg.svg');
                    background-size: 100% auto;
                    img{
                        width: 6.04vw;
                        height: 6.04vw;
                        margin: .57vw 1.09vw 0 1.61vw;
                    }
                }
                .title{
                    // width: 10.46vw;
                    height: 1.77vw;
                    margin: 1.04vw 0;
                    font-size: 1.25vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 1.45vw;
                    white-space: nowrap;
                }
                .id{
                    // width: 12.13vw;
                    height: 1.04vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    letter-spacing: .02vw;
                    line-height: 1.04vw;
                }
                .desc{
                    width: 47.5vw;
                    height: 2.08vw;
                    margin: 1.14vw auto 3.22vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B1B5C3;
                    line-height: 1.04vw;
                }
            }
            .ecr{
                display: flex;
                // padding-bottom: 13vw;
                .search{
                    width: 15.98vw;
                    height: 56.66vw;
                    // margin: 4.27vw 1.66vw 9.68vw 3.43vw;
                    margin: 4.27vw 1.66vw 15vw 3.43vw;
                    padding: 2.08vw 1.04vw;
                    background: #1B1A22;
                    border-radius: 2px;
                    .title{
                        width: 9.58vw;
                        height: 1.61vw;
                        margin-bottom: .78vw;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 1.19vw;
                    }
                    .input{
                        width: 100%;
                        height: 2.5vw;
                        background: #3F3356;
                        box-shadow: 0px 7px 64px 1px rgba(0, 0, 0, 0.07);
                        border-radius: .31vw;
                        input{
                            width: 100%;
                            height: 100%;
                            text-indent: .83vw;
                            font-size: .78vw;
                            background-color: transparent;
                            border: none;
                            outline: none;
                            color: #ffffff;
                            -webkit-text-fill-color: #ffffff;
                        }
                        input::-webkit-input-placeholder{
                            color: #777E90;
                            -webkit-text-fill-color: #777E90;
                        }
                    }
                    .type,.quality{
                        .name{
                            height: 1.61vw;
                            margin: 2.7vw 0 1.25vw 0;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            color: #FFFFFF;
                            line-height: 1.19vw;
                            cursor: pointer;
                        }
                        .check{
                            div{
                                display: flex;
                                align-items: center;
                                position: relative;
                                width: 100%;
                                height: 1.14vw;
                                input[type="radio"] {
                                    width: 1.14vw;
                                    height: 1.14vw;
                                    opacity: 0;
                                }
                                label {
                                    display: flex;
                                    // align-items: flex-start;
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    width: 1.14vw;
                                    height: 1.14vw;
                                    background-color: #ffffff;
                                    border-radius: .31vw;
                                    border: 2px solid #B1B5C3;
                                    span{
                                        height: 1.14vw;
                                        margin-left: 1.7vw;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #FFFFFF;
                                        line-height: 1.04vw;
                                        white-space: nowrap;
                                        cursor: pointer;
                                    }
                                }
                                input:checked + label {
                                    background: #8478FF;
                                    border-radius: .31vw;
                                    border: 2px solid #8478FF;
                                }
                        
                                input:checked + label::after {
                                    content: "";
                                    position: absolute;
                                    top: -.2vw;
                                    right: 0;
                                    bottom: 0;
                                    left: .1vw;
                                    margin: auto;
                                    width: .3vw;
                                    height: .56vw;
                                    color: #FFFFFF;
                                    border: 2px solid #fff;
                                    border-top: none;
                                    border-left: none;
                                    transform: rotate(45deg);
                                }
                            }
                        }
                        div + div{
                            margin-top: 1.25vw;
                        }
                    }
                }
                .ecrchange{
                    width: 57.76vw;
                    .top{
                        display: flex;
                        justify-content: center;
                        margin-bottom: 2.45vw;
                        div{
                            height: 1.87vw;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            color: #ffffff;
                            line-height: 1.19vw;
                            cursor: pointer;
                        }
                        .type1{
                            margin-right: 2vw;
                        }
                        div.active{
                            color: #DE2DCF;
                            background-image: url('../../../assets/nwAssets/ercbot-bg.svg');
                            background-position: center bottom;
                            background-repeat: no-repeat;
                            background-size: 100% auto;
                        }
                    }
                    .ecr721,.ecr115{
                        width: 60vw;
                        ul{
                            display: flex;
                            flex-wrap: wrap;
                            margin-bottom: 2.65vw;
                            li{
                                width: 17.96vw;
                                height: 23.22vw;
                                margin-right: 1.92vw;
                                margin-bottom: 2.65vw;
                                padding: .78vw .83vw;
                                // background-image: url('../../../assets/nwAssets/ecrcard-bg.svg');
                                // background-repeat: no-repeat;
                                // background-position: center;
                                // background-size: 100% 100%;
                                background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                                            linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                                border: 2px solid;
                                border-image: linear-gradient(206deg, rgba(132, 120, 255, 0.48), rgba(71, 57, 128, 1)) 2 2;
                                
                                img{
                                    width: 100%;
                                    height: 16.4vw;
                                }
                                .name{
                                    height: 1.56vw;
                                    margin: .7vw 0 2vw 0;
                                    font-size: 1.04vw;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #FFFFFF;
                                    line-height: 1.56vw;
                                    span{
                                        float: right;
                                        height: 1.04vw;
                                        font-size: 1.56vw;
                                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                        line-height: 1.56vw;
                                    }
                                }
                                .btn{
                                    display: flex;
                                    justify-content: center;
                                    div{
                                        height: 2.5vw;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_115_Black;
                                        color: #FFFFFF;
                                        line-height: 2.5vw;
                                        text-align: center;
                                        cursor: pointer;
                                    }
                                    .transfer{
                                        width: 8.07vw;
                                        background-image: url('../../../assets/nwAssets/blackbg.svg');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                    .sell{
                                        width: 8.22vw;
                                        background-image: url('../../../assets/nwAssets/purplebg.svg');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                    .unpack{
                                        width: 10.93vw;
                                        height: 2.91vw;
                                        margin-top: -.4vw;
                                        line-height: 2.91vw;
                                        background-image: url('../../../assets/nwAssets/unpackbg.svg');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                }
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
                    width: 47.5vw;
                    height: 1.04vw;
                    margin: -1vw auto 7.65vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B1B5C3;
                    line-height: 1.04vw;
                    text-align: center;
                    a{
                        color: #04FFA2;
                        text-decoration: none;
                        cursor: pointer;
                    }
                }
                img{
                    width: 11.71vw;
                    height: 12.5vw;
                }
            }
        }
    }
</style>
