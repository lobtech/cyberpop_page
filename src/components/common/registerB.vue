<template>
    <div class="container">
        <div class="mask" :class="register && (registerTrans ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt="" @click="closeDialog">
            <div class="content">
                <div class="title">REGISTER</div>
                <p class="level">level: {{ level }}</p>
                <div class="item">
                    <label for="nickname">NickName</label>
                    <div class="content1" :class="{'error': nicknameErr}">
                        <input type="text" id="nickname" placeholder="input your nickname" @input="input" @blur="blur(0)" v-model="nickname">
                    </div>
                </div>
                <!-- <div class="item">
                    <label for="Email">Email</label>
                    <div class="content1" :class="{'error': emailErr}">
                        <input type="text" id="Email" placeholder="input your email" @input="emailInput" @blur="blur(1)" v-model="email">
                    </div>
                </div> -->
            </div>
            <div class="btn">
                <div class="btn-wrap">
                    <div class="cancel" @click="submit()">{{$t('message.assets.pop.btn_submit')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance, computed } from 'vue'
import store from '@/store'
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const emit = defineEmits(['closeRegister']);
const { proxy } = getCurrentInstance() as any;
const level = ref(1);
const props = defineProps({
    register: {  //是否显示
        type: Boolean,
        default: false
    }, 
    registerTrans: {
        type: Boolean,
        default: false
    },
    code: {
        type: String,
        default: ''
    }
})
const idTemp = computed(() => store?.state.user?.idTemp);
const nickname = ref('');
const email = ref('');
const nicknameErr = ref(false);
const emailErr = ref(false);

//REACT_APP_BACKEND_URL=http://13.250.39.184:8612
const getPublicAddress = (publicAddress: any, email: any, nikename: any) => {
    proxy.$api.post(`/code/level/invitation?addr=${publicAddress}&icode=${props.code}&email=${email}&nikename=${nikename}`).then((res: any) => {
        if(res.code != 55555) {
            store.dispatch('user/messSing', props.code);
            store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}});
            closeDialog()
            return
        }
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.reject_transaction')}})
        messgSing(publicAddress)
    }).catch( (err: any) => {
        console.log(err)
    })
}


// login
const messgSing = async (publicAddress: any) => {
    try {
        const Web3 = (window as any).Web3;
        const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
        const result = await web3.eth.personal.sign(
            `cyber-business`,
            publicAddress,
            '' // MetaMask will ignore the password argument here
        );
        if(result) getPublicAddress(idTemp.value, email.value, nickname.value);
        console.log(result);
    } catch (err) {
        throw new Error(
            'You need to sign the message to be able to log in.'
        );
    }
}

const submit = () => {
    let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则
    if(nickname.value.trim() != '' && nickname.value.trim().length <= 50){
        messgSing(idTemp.value)
    }else{
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: 'name or email error'}})
    }
}


const closeDialog = () => {
    emit('closeRegister')
}


const blur = (type: any) => {
    if(!type){
        nicknameErr.value = false;
        if(nickname.value.trim().length == 0 || nickname.value.trim().length > 50) nicknameErr.value = true;
    }else{
        // let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则
        // emailErr.value = false;
        // if(!reg.test(email.value)) emailErr.value = true;
    }
}

const input = (e: any) => {
    let result = e.target.value
    nicknameErr.value = false;
    if(result.trim().length == 0 || result.trim().length > 50) nicknameErr.value = true;
}

const emailInput = (e: any) => {
    let result = e.target.value
    let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则
    emailErr.value = false;
    if(!reg.test(email.value)) emailErr.value = true;
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
            top: 3.8vw;
            left: 0;
            right: 0;
            bottom: 0;
            width: 350px;
            height: 290px;
            margin: auto;
            padding: 2.5vw;
            box-shadow: -1.51vw .83vw .2vw .05vw rgba(0, 0, 0, 0.4);
            background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
            border: .15vw solid;
            border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
            clip-path: polygon(0 0, 100% 0, 100% 89%, 90% 100%, 0 100%);
            .cover{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
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
                right: 10px;
                top: 10px;
                z-index: 11;
                width: 40px;
                cursor: pointer;
            }
            .content{
                position: absolute;
                left: 0;
                right: 0;
                padding: 0 2.5vw;
                .level{
                    margin: 10px 0;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                }
                .title{
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    line-height: 2.08vw;
                    margin-top: 10px;
                }
                .icon{
                    display: flex;
                    margin: .46vw 0;
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
                .item{
                    margin: 20px 0;
                    label{
                        display: inline-block;
                        margin: 0.5vw 0;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                    }
                    .content1, .content2{
                        border: 1px solid #fff;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 30px;
                        box-sizing: border-box;
                        input{
                            width: 100%;
                            height: 100%;
                            outline: none;
                            border: none;
                            background: transparent;
                            padding: 0 1vw;
                            color: #fff;
                        }
                        input::-webkit-input-placeholder{
                            color: #fff;
                            opacity: .5;
                        }
                    }
                    .error{
                        border: 1px solid #FF5CA1 !important;
                        input{
                            color: #FF5CA1 !important;
                        }
                        input::-webkit-input-placeholder{
                            color: #FF5CA1;
                            opacity: .5;
                        }
                    }
                    .ok{
                        color: #8478FF;
                    }
                    .Nok{
                        color: #FF5CA1;
                    }
                    .success{
                        border: 1px solid #8478FF;
                        color: #8478FF;
                    }
                    .reject{
                        border: 1px solid #FF5CA1;
                        color: #FF5CA1;
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
                        width: 8.47vw;
                        height: 2.81vw;
                        padding: .4vw .6vw;
                        margin-bottom: 1vw;
                        border: 1px solid #8478FF;
                        input{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            padding: 0 1.2vw 0 .4vw;
                            font-size: .83vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: rgba(255, 255, 255, 0.35);
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
                            border-bottom: .6vw solid #8478FF;
                            cursor: pointer;
                        }
                        .reduce{
                            bottom: .6vw;
                            border-top: .6vw solid #8478FF;
                            cursor: pointer;
                        }
                    }
                    .number.error{
                        border: 1px solid #FF5CA1 !important;
                        input{
                            color: #FF5CA1 !important;
                        }
                        .add{
                            border-bottom: .6vw solid #FF5CA1 !important;
                        }
                        .reduce{
                            border-top: .6vw solid #FF5CA1 !important;
                        }
                    }
                }
                .text{
                    font-size: 0.83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    line-height: 1vw;
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
            }
            .btn{
                position: absolute;
                bottom: 30px;
                .cancel{    
                    width: 320px;
                    height: 40px;
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 40px;
                    text-align: center;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.png');
                    background-size: 100% 100%;
                    cursor: pointer;
                    transition: all .2s ease-in-out;
                }
                .not-allowed{
                    cursor: not-allowed !important;
                    opacity: .4;
                }
            }
        }
    }

    @media screen {
        @media (max-width: 900px) {
            .mask{
                padding: 4vw !important;
                .icon{
                    margin: 1vw 0 !important;
                }
            }
        }
    }
</style>