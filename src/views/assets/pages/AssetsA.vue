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
                <div class="contract">
                    <div class="col th">
                        <div class="name">Contarct</div>
                        <div class="Fuji">Fuji</div>
                        <div class="Mumbai">Mumbai</div>
                    </div>
                    <!-- <div class="col td">
                        <div class="name">Badge</div>
                        <div class="Fuji">-----</div>
                        <div class="Mumbai">0x82cCB2FE8f4d07702f7c2F4200f0FBF630C52406</div>
                    </div>
                    <div class="col td">
                        <div class="name">weapons</div>
                        <div class="Fuji">-----</div>
                        <div class="Mumbai">0x8c7afbc6cabb0f97d71a0775b062b333c654fb5b</div>
                    </div> -->
                    <div class="col td">
                        <div class="name">Game</div>
                        <div class="Fuji">0xD4c27B5A5c15B1524FC909F0FE0d191C4e893695</div>
                        <div class="Mumbai">0x3B52df1CAcb5d397f7A23Bf136DE110584d0Cd60</div>
                    </div>
                    <div class="col td">
                        <div class="name">role</div>
                        <div class="Fuji">0x78F66E37e9fE077d2F0126E3a26e6FB0D14F2BB0</div>
                        <div class="Mumbai">0x37e769d34Cb48fb074fDd181bB4d803fBD49C712</div>
                    </div>
                    <div class="col td">
                        <div class="name">head</div>
                        <div class="Fuji">0x4B4cbe55125B48e868AA68E08b7527524C46E8AC</div>
                        <div class="Mumbai">0x04b5D133394F360A3B88600043b8153AaA1C0e59</div>
                    </div>
                    <div class="col td">
                        <div class="name">LootBox</div>
                        <div class="Fuji">0x55eFD6D4cF31F925E36d268C12353848c9e782fD</div>
                        <div class="Mumbai">0xC5FE394692a469BD5789D8247F281403e064E576</div>
                    </div>
                    <!-- <div class="col td">
                        <div class="name">UGC</div>
                        <div class="Fuji">0xB79Be4aF9990304b8b68679c599e5A38a80F5000</div>
                        <div class="Mumbai">-----</div>
                    </div> -->
                </div>
                <div class="desc">
                    {{$t('message.assets.wel_desc')}}
                </div>
            </div>
            <!-- <div style="color: #fff">{{readyAssetsF + chainId}}</div> -->
            <div class="ecr" v-if="readyAssetsF != -1">
            <!-- <div class="ecr" v-if="false"> -->
                <div class="search">
                    <div class="title">{{t('message.assets.search_title')}}</div>
                    <div class="input">
                        <input type="text" :placeholder="t('message.assets.input_pla')">
                    </div>
                    <div class="type">
                        <!-- <div class="name" @click="checkall(1)">Type</div> -->
                        <div class="name">{{t('message.assets.type1')}}</div>
                        <div class="check">
                            <form action="" class="check">
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type1" value="character">
                                    <label for="type1"><span>{{t('message.assets.type1_item1')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type2" value="Weapon">
                                    <label for="type2"><span>{{t('message.assets.type1_item2')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type3" value="Support card">
                                    <label for="type3"><span>{{t('message.assets.type1_item3')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type4" value="Item">
                                    <label for="type4"><span>{{t('message.assets.type1_item4')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" name="type" id="type5" value="Blind box">
                                    <label for="type5"><span>{{t('message.assets.type1_item5')}}</span></label>
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
                                <label for="quality1"><span>{{t('message.assets.type2_item1')}}</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality2" value="Epic">
                                <label for="quality2"><span>{{t('message.assets.type2_item2')}}</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality3" value="Rare">
                                <label for="quality3"><span>{{t('message.assets.type2_item3')}}</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality4" value="Common">
                                <label for="quality4"><span>{{t('message.assets.type2_item4')}}</span></label>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="ecrchange">
                    <div class="top">
                        <div class="typeALL" :class="!ecrType ? 'active' : ''" @click="changeType(0)">ALL</div>
                        <div class="type1" :class="ecrType == 1? 'active' : ''" @click="changeType(1)">ERC 721</div>
                        <div class="type2" :class="ecrType == 2 ? 'active' : ''" @click="changeType(2)">ERC 1155</div>
                    </div>
                    <loading v-if="loadingState != 2" :show="true" :index="0.5"/>
                    <div class="ercType" :style="{'margin-top': loadingState != 2 ? '12vw' : '0'}" v-show="!ecrType">
                        <ul class="prince" v-if="data.length > 0">
                            <li v-for="(item, index) in data" :key="index">
                                <img :src="item.data.image" alt="">
                                <div class="name">{{item.data.name}}<span>x{{item.number}}</span></div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup(item)">{{t('message.assets.btn_tran')}}</div>
                                    <div class="sell">{{$t('message.assets.btn_sell')}}</div>
                                </div>
                            </li>
                        </ul>
                        <div class="noting" v-if="loadingState == 2 && data.length == 0">
                            <p>NOT DATA</p>
                            <img src="@/assets/nwAssets/nothing.svg" alt="">
                        </div>
                    </div>
                    <div class="ercType" :style="{'margin-top': loadingState != 2 ? '12vw' : '0'}" v-show="ecrType == 1">
                        <ul class="prince" v-if="data.length > 0">
                            <li v-for="(item, index) in data" :key="index">
                                <img :src="item.data.image" alt="">
                                <div class="name">{{item.data.name}}<span>x{{item.number}}</span></div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup(item)">{{t('message.assets.btn_tran')}}</div>
                                    <div class="sell">{{$t('message.assets.btn_sell')}}</div>
                                </div>
                            </li>
                        </ul>
                        <div class="noting" v-if="loadingState == 2 && data.length == 0">
                            <p>NOT DATA</p>
                            <img src="@/assets/nwAssets/nothing.svg" alt="">
                        </div>
                    </div>
                    <div class="ercType" :style="{'margin-top': loadingState != 2 ? '12vw' : '0'}" v-show="ecrType == 2">
                        <ul class="prince" v-if="data.length > 0">
                            <li v-for="(item, index) in data" :key="index">
                                <img :src="item.data.image" alt="">
                                <div class="name">{{item.data.name}}<span>x{{item.number}}</span></div>
                                <div class="btn">
                                    <div class="transfer" @click="transferPopup(item)">{{t('message.assets.btn_tran')}}</div>
                                    <div class="sell">{{t('message.assets.btn_sell')}}</div>
                                </div>
                            </li>
                        </ul>
                        <div class="noting" v-if="loadingState == 2 && data.length == 0">
                            <p>NOT DATA</p>
                            <img src="@/assets/nwAssets/nothing.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="nothing" v-if="readyAssetsF == -1">
            <!-- <div class="nothing" v-if="true"> -->
                <div class="txt">{{t('message.assets.nothing')}}<a href="/">{{t('message.assets.nothing_home')}}</a></div>
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
import { useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { toRaw } from '@vue/reactivity'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();


const router = useRouter()
const { proxy } = getCurrentInstance() as any
const realId = computed(() => store?.state.user?.realId);

const TipsState: any = ref(false as any)  // has popup-a 

let data:any = ref([]);

const loadingState: any = ref(0);
const chainId: any = computed(() => store.state.user?.chainId );
const readyAssetsF = computed(() => store.state.user?.readyAssets );
const transferSuccess = computed(() => store.state.user?.transferSuccess);
watch(chainId, (newVal, oldVal) => {
    if(!oldVal) return;
	getData(ecrType.value)
}, {immediate:true,deep:true});

watch(realId, (newVal, oldVal) => {
    if(!oldVal) return;
	getData(ecrType.value)
}, {immediate:true,deep:true});

watch(transferSuccess, (newVal, oldVal) => {
    if(!oldVal) return;
    getData(ecrType.value)
}, {immediate:true,deep:true});

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

// switch erc button
const changeType = (type: Number) => {
    if(loadingState.value == 2 || loadingState.value == 0){
        ecrType.value = type;
        getData(type)
    }
}

const { nft, arms, erc721, gamePool, GiftBox, cyberClub, cyberClub_Fuji, Cyborg, Cyborg_Fuji, game_Fuji } = Web3.contracts;

const getData: any = async (type: Number) => {
    data.value = [];
    loadingState.value = 1;
    console.log(chainId.value);
    
    if(chainId.value == 80001){  //mumbai
        if(!type){
            let result = await Web3.batchBalanceOf(nft.abi, nft.address);
            console.log(result);
            await getNFTData(result, 'server', 'server_mumbai');
            let dao_resulte = await Web3.batchBalanceOf(arms.abi , arms.address);
            console.log(dao_resulte);
            await getNFTData(dao_resulte, 'weapons', 'weapons_mumbai', false, true);
            let role_result = await Web3.tokensOfOwner(erc721.abi, erc721.address);
            console.log(role_result);
            await getNFTData(role_result, 'role', 'role_mumbai', true);
            let cyberClub_result = await Web3.tokensOfOwner(cyberClub.abi, cyberClub.address);
            console.log(cyberClub_result);
            await getHead(cyberClub_result, 'head_mumbai');
        }else if(type == 1){
            let result = await Web3.tokensOfOwner(erc721.abi, erc721.address);
            await getNFTData(result, 'role', 'role_mumbai', true);
            let cyberClub_result = await Web3.tokensOfOwner(cyberClub.abi, cyberClub.address);
            await getHead(cyberClub_result, 'head_mumbai');
        }else{
            let result = await Web3.batchBalanceOf(nft.abi, nft.address);
            console.log(result);
            
            await getNFTData(result, 'server', 'server_mumbai');
            let dao_resulte = await Web3.batchBalanceOf(arms.abi , arms.address);
            console.log(dao_resulte);
            await getNFTData(dao_resulte, 'weapons', 'weapons_mumbai', false, true)
        }
    }
    if(chainId.value == 43113){ // fuji
        if(!type){
            let game_result = await Web3.batchBalanceOf(game_Fuji.abi, game_Fuji.address);
            console.log(game_result);
            await getNFTData(game_result, 'game', 'game_fuji')
            let Cyborg_result = await Web3.tokensOfOwner(Cyborg_Fuji.abi, Cyborg_Fuji.address);
            console.log(Cyborg_result);
            await getNFTData(Cyborg_result, 'role', 'role_fuji', true);
            let cyberClub_result = await Web3.tokensOfOwner(cyberClub_Fuji.abi, cyberClub_Fuji.address);
            console.log(cyberClub_result);
            await getHead(cyberClub_result, 'head_fuji');
            let box_result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, [0, 1, 2]);
            console.log(box_result);
            await getNFTData(box_result, 'box', 'box_fuji');
            
        }else if(type == 1){
            let Cyborg_result = await Web3.tokensOfOwner(Cyborg_Fuji.abi, Cyborg_Fuji.address);
            await getNFTData(Cyborg_result, 'role', 'role_fuji', true);
            let cyberClub_result = await Web3.tokensOfOwner(cyberClub_Fuji.abi, cyberClub_Fuji.address);
            await getHead(cyberClub_result, 'head_fuji');
        }else{
            let game_result = await Web3.batchBalanceOf(game_Fuji.abi, game_Fuji.address);
            await getNFTData(game_result, 'game', 'game_fuji');
            let box_result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, [0, 1, 2]);
            console.log(box_result);
            await getNFTData(box_result, 'box', 'box_fuji');
        }
    }
    loadingState.value = 2;
}

// 头像的nft 数组[0, 1]表示 有两个nft资产，id分别为0和1
const getHead: any = async (res: any, type: any) => {
    return new Promise((resolve, reject) => {
        if(res.length == 0) {
            resolve(1);
            return;
        }
         (function loop(index){
             proxy.$api.get(`https://api.cyberpop.online/head/${res[index]}`).then((result:any) => {
                data.value.push({
                    id: res[index],
                    type: type,
                    number: 1,
                    data: result,
                })
                if (++index<res.length) {
                    loop(index);
                } else {
                    resolve(1)
                }
            }).catch((err:any) => {
                console.log(err); 
            })
         })(0)
    })
}

// 正常的nft 数组[0,1]表示id为0的nft没有资产， id为1的ntf资产为1
const getNFTData: any = async (res: any, path: any, type: any, isRole?: any , isWeapons?: any) => {
    return new Promise((resolve, reject) => {
         (function loop(index){
             if(res[index] == 0) { //为了减少不必要的请求
                 if (++index<res.length) {
                    loop(index);
                } else {
                    resolve(1);
                }
                return;
             }
             proxy.$api.get(`https://api.cyberpop.online/${path}/${isRole ? res[index] : isWeapons ? index + 1 + '01101': index}`).then((result:any) => {
                if(res[index] > 0){
                    data.value.push({
                        id: isRole ? res[index] : index,
                        type: type,
                        number: isRole ? 1 : res[index],
                        data: result || {name: res[index], image: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/ba5fcf2b4854eebdc64dc80089f2cc26.png'},
                    })
                }
                if (++index<res.length) {
                    loop(index);
                } else {
                    resolve(1)
                }
            }).catch((err:any) => {
                console.log(err); 
            })
         })(0)
    })
}

// ecr exchange
let ecrType:any = ref(0)


// NFT transfer
const transferActive = computed(() => store?.state.user?.transferActive)
const transferItem:any = ref(null)
const transferPopup = (item:any) => {
    store.dispatch('user/transferChange',true)
    store.dispatch('user/transferChangeAni',true)
    transferItem.value = JSON.parse(JSON.stringify(item));
    if( item.type == 'server_mumbai' ){
        abiSelect.value = Web3.contracts.nft.abi;
        addressSelect.value = Web3.contracts.nft.address
    }else if( item.type == 'game_mumbai' ){
        abiSelect.value = Web3.contracts.arms.abi
        addressSelect.value = Web3.contracts.arms.address
    }else if( item.type == 'role_mumbai'){
        abiSelect.value = Web3.contracts.erc721.abi
        addressSelect.value = Web3.contracts.erc721.address
    }else if( item.type == 'weapons_mumbai'){
        abiSelect.value = Web3.contracts.weapons.abi
        addressSelect.value = Web3.contracts.weapons.address
    }else if ( item.type == 'game_fuji'){
        abiSelect.value = Web3.contracts.game_Fuji.abi
        addressSelect.value = Web3.contracts.game_Fuji.address
    }else if( item.type == 'role_fuji'){
        abiSelect.value = Web3.contracts.Cyborg_Fuji.abi
        addressSelect.value = Web3.contracts.Cyborg_Fuji.address
    }else if( item.type == 'box_fuji'){
        abiSelect.value = Web3.contracts.GiftBox.abi
        addressSelect.value = Web3.contracts.GiftBox.address
    }else if( item.type == 'head_fuji'){
        abiSelect.value = Web3.contracts.cyberClub_Fuji.abi
        addressSelect.value = Web3.contracts.cyberClub_Fuji.address
    }else if( item.type == 'head_mumbai'){
        abiSelect.value = Web3.contracts.cyberClub.abi
        addressSelect.value = Web3.contracts.cyberClub.address
    }
    console.log(item.type, 'item.type');
    console.log(transferItem.value , 'transferItem.value ');
    
    
}


onUnmounted(() => {
})


onMounted( () => {
    if( realId.value == -1 && proxy.$route.path == '/knapsack' ){
        router.push('/')
        // window.location.href='https://test.cyberpop.online/'
    }

    window.scrollTo(0,0);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
    store.dispatch('user/metaChange',false);
    store.dispatch('user/transferChange',false);

    if(store.state.user?.readyAssets !== -1){
        // data.value = JSON.parse(JSON.stringify(store.state.user?.dataSum));
        getData(ecrType.value)
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
                .contract{
                    color: #333;
                    margin: 3.23vw auto;
                    border: 2px solid;
                    width: 64.74vw;
                    background-color: rgba(255, 0, 0, 0); /* 不支持线性的时候显示 */
                    background-image: linear-gradient(to right, rgba(81, 105, 139, 0.027) , rgba(77, 122, 165, 0.582));
                    border: 2px solid;
                    border-image: linear-gradient(206deg, rgb(255, 255, 255), rgba(139, 255, 178, 0.31)) 2 2;
                    .th{
                        // background: rgba(16, 76, 165, 0.5) !important;
                        color: #fff;
                        border-bottom: 1px solid #0C0911;
                        div{
                            line-height: 3.75vw !important;
                            
                        }
                    }
                    .col{
                        padding: 0 1vw;
                        display: flex;
                        align-items: center;
                        .name{
                            width: 20%;
                            color: #FFFFFF;
                            font-family: AlibabaPuHuiTi_2_55_Regular;   
                            font-size: 0.83vw;
                            text-align: left;
                            line-height: 1vw;
                            margin: 0.83vw 0;
                        }
                        .Fuji, .Mumbai{
                            width: 40%;
                            color: #FFFFFF;
                            font-family: AlibabaPuHuiTi_2_55_Regular;   
                            font-size: 0.83vw;
                            text-align: left;
                            line-height: 1vw;
                            margin: 0.83vw 0;
                        }
                    }
                    .td{
                        div:hover{
                            cursor: pointer;
                            color: red;
                        }   
                    }
                }
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
                        .type1,.typeALL{
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
                    .ercType{
                        width: 60vw;
                        transition: all 430ms ease-out;
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
                        .noting{
                            text-align: center;
                            p{
                                color: #fff;
                                // text-align: center;
                                margin: 3vw 0;
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
