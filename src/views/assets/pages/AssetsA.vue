<template>
    <header-a path="/assets" :type="0"></header-a>
    <div class="assets">
        <div class="wrap">
            <div class="welcome">
                <div class="icon">
                    <img src="@/assets/nwAssets/portrait.svg" alt="">
                </div>
                <div class="title">Hi, Wade Warren</div>
                <div class="id">0xab5801a7d39...259aec9b</div>
                <div class="desc">Your Cyberpop NFT item, which changed in my assets, will be synchronized to opensea and within the game in Multi-
                    terminal. Any small act you do in Cyberpop New World is valuable to Cyberpop DAO.
                </div>
            </div>
            <div class="ecr">
                <div class="search">
                    <div class="title">Search</div>
                    <div class="input">
                        <input type="text" placeholder="Placeholder">
                    </div>
                    <div class="type">
                        <!-- <div class="name" @click="checkall(1)">Type</div> -->
                        <div class="name">Type</div>
                        <div class="check">
                            <form action="" class="check">
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type1" value="character">
                                    <label for="type1"><span>Character</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type2" value="Weapon">
                                    <label for="type2"><span>Weapon</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type3" value="Support card">
                                    <label for="type3"><span>Support card</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type4" value="Item">
                                    <label for="type4"><span>Item</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type5" value="Blind box">
                                    <label for="type5"><span>Blind box</span></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="quality">
                        <!-- <div class="name" @click="checkall(2)">Quality</div> -->
                        <div class="name">Quality</div>
                        <form action="" class="check">
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality1" value="Legend">
                                <label for="quality1"><span>Legend</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality2" value="Epic">
                                <label for="quality2"><span>Epic</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality3" value="Rare">
                                <label for="quality3"><span>Rare</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality4" value="Common">
                                <label for="quality4"><span>Common</span></label>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="ecrchange">
                    <div class="top">
                        <div class="type1" :class="ecrType ? 'active' : ''" @click="ecrType = true">ECR 721</div>
                        <div class="type2" :class="!ecrType ? 'active' : ''" @click="ecrType = false">ECR 115</div>
                    </div>
                    <div class="ecr721" v-show="ecrType">
                        <!-- <ul class="prince">
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Prince of Shadows<span>x4</span></div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup()">TRANSFER</div>
                                    <div class="sell">SELL</div>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Prince of Shadows</div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup()">TRANSFER</div>
                                    <div class="sell">SELL</div>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Prince of Shadows</div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup()">TRANSFER</div>
                                    <div class="sell">SELL</div>
                                </div>
                            </li>
                        </ul>
                        <ul class="box">
                            <li>
                                <img src="@/assets/nwAssets/testItem.png" alt="">
                                <div class="name">Mystery box</div>
                                <div class="btn">
                                    <div class="unpack">UNPACK</div>
                                </div>
                            </li>
                        </ul> -->
                    </div>
                    <div class="ecr115" v-show="!ecrType">
                        <ul class="prince">
                            <li v-for="(item, index) in data" :key="index">
                                <img :src="item.image" alt="">
                                <div class="name">{{item.name}}<span>x{{item.number}}</span></div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup(item)">TRANSFER</div>
                                    <div class="sell">SELL</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- <div class="nothing">
                <div class="txt">Oops, There‘s nothing left here. Go to <span>Home page</span></div>
                <img src="@/assets/nwAssets/nothing.svg" alt="">
            </div> -->
        </div>
    </div>
    <footer-a></footer-a>
    <message-a v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-a>
    <popup-a v-show="transferActive" :transferInfo="transferItem"></popup-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import $ from 'jquery'
const { proxy } = getCurrentInstance() as any;

let abi:any = ref(null);
const address:any = ref(0);
const dao_abi:any = ref(null);
const dao_address:any = ref(null);
const data:any = ref([]);


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
const transferItem = ref(null)
const transferPopup = (item:any) => {
    store.dispatch('user/transferChange',true)
    transferItem.value = item
}


const router = useRouter()


// message dialog
const showDialog = computed(() => store?.state.user?.showDialog);
let messageState:any = ref(false)
let messageContent:any = ref('')
const mtimer:any = ref(null)
const messageAlert = (flag:any, message:any) => {
    clearTimeout(mtimer.value)
    messageState.value = flag
    store.dispatch('user/showDialog',true)
    messageContent.value = message
    store.dispatch('user/addComingOut', false)
    mtimer.value = setTimeout(() => {
        store.dispatch('user/addComingOut',true)
    },5000)
}


const dao = async () => {
    await Web3.batchBalanceOf(dao_abi._rawValue, dao_address.value).then(temp => {
        let res = JSON.parse(JSON.stringify(temp));
        (function loop (index){
            proxy.$api.get(`https://api.cyberpop.online/game/${index}`).then( (result:any) => {
                if(res[index] > 0){
                    data.value.push({
                        id: index,
                        type: 1,
                        number: res[index],
                        ...result,
                    })
                }
                if (++index<res.length) {
                    loop(index);
                } else {
                    console.log(data._rawValue);
                    console.log("over2!!!!!");
                }
            }).catch((err:any) => {
                if (++index<res.length) {
                    loop(index);
                } else {
                    console.log("over2!!!!!");
                }
            })
        })(0)
    })
} 




onUnmounted(() => {
})

onMounted( async() => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',false);// close message dialog
    store.dispatch('user/metaChange',false);

    await proxy.$api.get('https://d2cimmz3cflrbm.cloudfront.net/ntflib/abi.json').then((data:any) => {
        abi.value = data;        
    })
    await proxy.$api.get('https://d2cimmz3cflrbm.cloudfront.net/ntflib/address.json').then((result:any) => {
        address.value = result[0].address;        
        setTimeout(() => {  
            Web3.batchBalanceOf(abi._rawValue, address.value).then(temp => {
                let res = JSON.parse(JSON.stringify(temp));
                (function loop (index){
                    proxy.$api.get(`https://api.cyberpop.online/server/${index || 0}`).then( (result:any) => {
                        if(res[index] > 0){
                            data.value.push({
                                id: index,
                                type: 0,
                                number: res[index],
                                ...result,
                            })
                        }
                        if (++index<res.length) {
                            loop(index);
                        } else {
                            dao();
                            console.log(data._rawValue);
                            console.log("over!!!!!");
                        }
                    }).catch((err:any) => {
                        console.log(err); 
                    })
                })(0)
            }) 
        }, 200);
    })
    await proxy.$api.get('https://d2cimmz3cflrbm.cloudfront.net/daolib/abi.json').then((data:any) => {
        dao_abi.value = data;
    })
    await proxy.$api.get('https://d2cimmz3cflrbm.cloudfront.net/daolib/address.json').then((data:any) => {
        dao_address.value = data[0].address;
    })    
    
})

</script>
<style lang="less" scoped>
    .assets{
        width: 100%;
        // background-color: #000000;
        background-color: #080707;
        .wrap{
            width: 100%;
            padding-top: 5.5vw;
            background-image: url('../../../assets/nwAssets/bodyBg.png');
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
                        ul{
                            display: flex;
                            margin-bottom: 2.65vw;
                            li{
                                width: 17.96vw;
                                height: 23.22vw;
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
                            li + li{
                                margin-left: 1.92vw;
                            }
                        }
                    }
                }
            }
            .nothing{
                text-align: center;
                padding-bottom: 7.55vw;
                .txt{
                    width: 47.5vw;
                    height: 1.04vw;
                    margin: -2.18vw auto 7.65vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B1B5C3;
                    line-height: 1.04vw;
                    text-align: center;
                    span{
                        color: #04FFA2;
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
