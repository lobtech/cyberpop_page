<template>
    <header-a path="/cyberspace" :type="3"></header-a>
    <footer-a></footer-a>
    <message-a v-show="showDialog" :state="messageState" :dialogC="messageContent"></message-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 



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




onUnmounted(() => {
    // window.removeEventListener('click', handleOtherClick, true);
})

onMounted(() => {
    // if( realId.value != 0){
    //     loggined.value = true;
    // }
    // logoHImport();
    // window.addEventListener('click', handleOtherClick, true);
    // store.dispatch('user/changeActive', 0)
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',false);// close message dialog
    store.dispatch('user/metaChange',false);
})

</script>
<style lang="less" scoped>
</style>
