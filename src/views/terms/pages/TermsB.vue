<template>
    <header-b path="/terms" :type="0"></header-b>
    <div class="termas">
        <div class="termas-wrap">
            <div class="title">Terms of use</div>
            <ul>
                <li>
                    <div class="subtitle">1. ACCEPTANCE OF TERMS.</div>
                    <div class="content">
                        Cyberpop lab Ltd. provides the website https://cyberpop.online(the “Site”) and the game “Cyberpop” (the “Game”). Please read these 
                        Terms of Use (the “Terms” or “Terms of Use”) carefully before using the Game and the Site. By using or otherwise accessing the Game 
                        and the Site, you: (1) accept and agree to be bound by these Terms; (2) accept that the Game is still in testing phase and that you 
                        use at your own risk, as further explained in Section 2 below; (3) represent that you are old enough to use the Game and the Site 
                        pursuant to Sections 3 and 8 below; (4) consent to the collection, use, disclosure and other handling of information as described 
                        in our Privacy Policy, available at https://cyberpop.online/privacy and (5) accept and agree to any additional terms, rules and 
                        conditions of participation issued by Cyberpop lab from time to time. If you do not agree to the Terms, then you must not access or 
                        use the Game or the Site. BTS has no continued obligation to operate the Game and the Site in the future, at its exclusive discretion, 
                        with no liability whatsoever in connection thereto.
                    </div>
                </li>
                <li>
                    <div class="subtitle">2. TESTING DISCLAIMER AND MODIFICATION OF TERMS OF USE.</div>
                    <div class="content">
                        The Game is still in testing phase and is provided on an “as is” and “as available” basis and may contain defects and software bugs. You are advised to safeguard important data, property and content, to use caution, and to not rely in any way on the correct or secure functionality or performance of the Game. Except for Section 17, providing for binding arbitration and waiver of class action rights, Cyberpop lab reserves the right, at its sole discretion, to modify or replace the Terms of Use at any time. The most current version of these Terms will be posted on our Site. You shall be responsible for reviewing and becoming familiar with any such modifications. Use of the Game by you after any modification to the Terms constitutes your acceptance of the Terms of Use as modified.
                    </div>
                </li>
                <li>
                    <div class="subtitle">3. ELIGIBILITY.</div>
                    <div class="content">
                        You hereby represent and warrant that you are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations and warranties set forth in these Terms and to abide by and comply with these Terms. Big Time Studios operates a global platform and by accessing the Site or Game, you are representing and warranting that you are 13 years old or older.
                    </div>
                </li>
                <li>
                    <div class="subtitle">4. ACCOUNT ACCESS AND SECURITY.</div>
                    <div class="content">
                        For accessing the Game you need to create an account (the “Account”), with a user name and a password.<br/>

                        For making deposits or withdrawals from the Vault you need a third party private key manager selected by 
                        you (i.e., a Web3 Provider such as Fortmatic). You and the third party private key manager you select are 
                        entirely responsible for security of the withdrawals and deposits made into and out of the Vault.<br/>
                        Cyberpop lab bears no responsibility for any breach of security or unauthorized access to your Account. 
                        You are advised to: (a) avoid any use of the same password with your selected third party private key manager 
                        that you have ever used outside of the third party private key manager; and (b) keep your password and any 
                        related secret information secure and confidential and do not share them with anyone else.<br/>
                        You are solely responsible for all activities conducted through your Account whether or not you authorize 
                        the activity. In the event that fraud, illegality or other conduct that violates this Agreement is discovered 
                        or reported (whether by you or someone else) that is connected with your Account, Cyberpop lab may terminate 
                        your Account (or Accounts) as described in Section 14.<br/>
                        You are solely responsible for maintaining the confidentiality of your password and for restricting access to 
                        your devices. You are solely responsible for any harm resulting from your disclosure, or authorization of the 
                        disclosure, of your password or from any person's use of your password to gain access to your Account.<br/>
                        Any loss or compromise of your electronic device or your security details may result in unauthorised access 
                        to your Account by third-parties and the loss or theft of any NFT held in your Vault Account. You must keep 
                        your security details safe at all times.<br/>
                        You must immediately notify BTS of any unauthorized use of, or access to, your Account, password, or other 
                        breach of security at admin@cyberpop.online.<br/>
                    </div>
                    <div class="content">
                        Please note that if you lose the password of your third party private key manager, you accept that Cyberpop 
                        lab will be unable to remedy any issues that arise from that incident.<br/>
                        Cyberpop lab will not be liable for any loss or damage (of any kind and under any legal theory) to you or any 
                        third party arising from your inability or failure for any reason to comply with any of the foregoing obligations, 
                        or for any reason whatsoever, except fraud on our part.<br/>
                        Cyberpop lab cannot and will not be liable for any loss or damage arising from your sharing or other loss of your password, private key or related information, or any other damage or loss arising from unauthorized access to your Account.
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <footer-b></footer-b>
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
    store.dispatch('user/showDialog',false);// close message dialog
})

</script>
<style lang="less" scoped>
    .termas{
        padding-top: 55px;
        background-color: #000000;
        color: #fff;
        .termas-wrap{
            padding: 20px;
            .title{
                font-size: 34px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 48px;
                text-align: center;
            }
            .subtitle{
                margin-bottom: 14px;
                font-size: 17px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #ffffff;
                line-height: 48px;
            }
            .content{
                margin-bottom: 14px;
                font-size: 17px;
                line-height: 24px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
            }
        }
    }
</style>
