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
        margin-right: 1.8vw;
    }
    100%{
        margin-right: -25vw;
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
        margin-right: -25vw;
    }
    100%{
        margin-right: 1.8vw;
    }
}
.message{
    z-index: 10;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    width: 18.75vw;
    height: 4.16vw;
    margin-top: 8vw;
    margin-right: -25vw;
    background: rgba(255, 82, 82, 0.42);
    border-radius: 4px 4px 4px 4px;
    border: 1px solid #FF5CA1;
    animation-fill-mode: forwards;
    .info{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3vw;
        height: 3vw;
        background: rgba(255, 82, 82, 0.16);
        border-radius: 50%;
        margin-left: .5vw;
        img{
            width: 1.4vw;
            height: 1.4vw;
        }
    }
    .text{
        width: 12.6vw;
        // height: 1.04vw;
        margin-left: .6vw;
        font-size: 1.04vw;
        font-family: AlibabaPuHuiTi_2_55_Regular;
        color: #FF5CA1;
        line-height: 1.04vw;
        white-space: normal;
    }
    .close{
        width: 1.04vw;
        height: 1.04vw;
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
