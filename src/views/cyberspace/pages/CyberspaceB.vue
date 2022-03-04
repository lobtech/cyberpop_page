<template>
    <header-b path="/cyberspace" :type="3"></header-b>
    <div class="section">
        <div class="title">COMING SOON</div>
    </div>
    <message-b v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-b>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
const router = useRouter()


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


onMounted(() => {
    window.scrollTo(0,0);
})

</script>
<style lang="less" scoped>
    .section{
        z-index: 8;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,1);
        overflow: hidden;
        .title{
            width: 100%;
            height: 140px;
            font-size: 38px;
            color: #35F1C8;
            line-height: 140px;
            text-align: center;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(84, 2, 131) 38%, rgb(68, 2, 134) 50%,rgb(70, 2, 109) 62%,rgb(0, 0, 0) 100%);
        }
    }
</style>
