<template>
    <div class="message" :class="comingOutFlag ? 'comingOut' : 'comingIn'" v-if="!state">
        <div class="info">
            <img src="@/assets/nwhome/warning.svg" alt="">
        </div>
        <div class="text">{{dialogC}}</div>
        <img @click="closeDialog()" class="close" src="@/assets/nwhome/warning-close.svg" alt="">
    </div>

    <div class="message success" :class="comingOutFlag ? 'comingOut' : 'comingIn'" v-else>
        <div class="info successIcon">
            <img src="@/assets/nwhome//success-fill.svg" alt="">
        </div>
        <div class="text successTxt">{{dialogC}}</div>
        <img @click="closeDialog()" class="close" src="@/assets/nwhome/success-close.svg" alt="">
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, readonly, ref } from 'vue'
import store from '@/store'
const comingOutFlag = computed(() => store?.state.user?.comingOutFlag);

const props = defineProps({
    state: Boolean, 
    dialogC: String
})

const closeDialog = () => {
    store.dispatch('user/addComingOut',true)
}

</script>

<style lang="less" scoped>
@keyframes comingOut {
    0%{
        margin-right: 20px;
    }
    100%{
        margin-right: -300px;
    }
}
.comingOut{
    animation: comingOut .2s ease-in;
}
.comingIn{
    animation: comingIn .2s ease-out;
}
@keyframes comingIn {
    0%{
        margin-right: -300px;
    }
    100%{
        margin-right: 20px;
    }
}
.message{
    z-index: 10;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 50px;
    margin-top: 70px;
    margin-right: -300px;
    background: rgba(255, 82, 82, 0.42);
    border-radius: 4px 4px 4px 4px;
    border: 1px solid #FF5CA1;
    animation-fill-mode: forwards;
    .info{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background: rgba(255, 82, 82, 0.16);
        border-radius: 50%;
        margin-left: 5px;
        img{
            width: 14px;
            height: 14px;
        }
    }
    .text{
        width: 138px;
        margin-left: 5px;
        font-size: 12px;
        font-family: AlibabaPuHuiTi_2_55_Regular;
        color: #FF5CA1;
        line-height: 12px;
        white-space: normal;
    }
    .close{
        width: 14px;
        height: 14px;
    }
}

.success{
    background: rgba(108, 252, 200, 0.42) !important;
    border: 1px solid #04FFA2 !important;
}
.successIcon{
    background: rgba(76, 175, 80, 0.16);
}
.successTxt{
    color: #04FFA2 !important;
}
</style>
