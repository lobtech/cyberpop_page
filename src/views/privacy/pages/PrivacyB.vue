<template>
    <header-b path="/privacy" :type="0"></header-b>
    <div class="privacy">
        <div class="privacy-wrap">
            <div class="title">Privacy Policy</div>
            <ul>
                <li>
                    <div class="subtitle">1. INTRODUCTION</div>
                    <div class="content">
                        1.1 cyberpop lab recognizes that people who use our products value their privacy. This Privacy Policy details important information regarding the collection, use and disclosure of User information collected on the cyberpop website located at https://cyberpop.online (the “Site”), and our game. we provides this Privacy Policy to help you understand how your personal information is used by us and your choices regarding our use of it. By using the Site or Game, you agree that we can collect, use, disclose, and process your information as described in this Privacy Policy. This Privacy Policy only applies to the Site and Game, and not to any other websites, products or services you may be able to access or link to via the Site or Game. We encourage you to read the privacy policies of any other websites you visit before providing your information to them. While our values will not shift, the Site and Game will evolve over time, and this Privacy Policy will change to reflect that evolution. If we make changes, we will notify you by revising the date at the top of this Privacy Policy. In some cases, if we make significant changes, we may give you additional notice by adding a statement to our homepage. We encourage you to review this Privacy Policy periodically to stay informed about our practices.
                        Some third-party providers may place cookies or pixels - small data files stored on your hard drive or in device memory - on your browser or hard drive. Note that this Privacy Policy does not cover the use of cookies or pixels by such third parties. Most web browsers are set to accept cookies and pixels by default, but you can usually set your browser to remove or reject browser cookies or pixels. If you do choose to remove or reject cookies or pixels, however, your ability to use the Site or the Game might be affected.
                    </div>
                    <div class="content">
                        1.2 This Privacy Policy should be read in conjunction with our Terms of Use. By accessing the Game, you are consenting to the information collection and use practices described in this Privacy Policy.    
                    </div>
                    <div class="content">
                        1.3 Your use of the Game and any personal information you provide through the Game remains subject to the terms of this Privacy Policy and our Terms of Use, as each may be updated from time to time.
                    </div>
                    <div class="content">
                        1.4 Any questions, comments or complaints that you might have should be emailed to <a href="mailto:business@cyberpop.online" target="view_window">business@cyberpop.online</a>
                    </div>
                </li>
                <li>
                    <div class="subtitle">2. INFORMATION WE COLLECT</div>
                    <div class="content">
                        The personal information we collect from you generally may include:
                    </div>
                    <div class="content">
                        2.1 Network information regarding transactions, including, among other things, the type of device you use, access times, hardware model, MAC address, IP address, operating system and version, and other unique device identifiers.
                    </div>
                    <div class="content">
                        2.2. Information about plugins you might be using, included but not limited to those related to the management of cryptocurrency assets and any information provided by them., and your Ethereum public address.
                    </div>
                    <div class="content">
                        2.3 We may receive network information from you as a result of your interaction with our Game.
                    </div>
                    <div class="content">
                        2.4 Ethereum public address-2.4 When you register as a user, we may collect the following personal information from you: your email address and user name. We may also receive personal information from third parties, when you sign up to services provided by cyber pop through a social network; in such occasions, we may receive the personal information you have made available to such third parties, and which you have allowed for them to relay via your privacy settings.
                    </div>
                </li>
                <li>
                    <div class="subtitle">3. THE WAY USES YOUR PERSONAL INFORMATION</div>
                    <div class="content">
                        3.1 As with nearly all interactions that take place on the World Wide Web, our servers may receive information by virtue of your interaction with them, including but not limited to IP Addresses.
                    </div>
                    <div class="content">
                        3.2 Some of the services in our Game (such as the Marketplace and the Vault) require permissions that could potentially be used to access additional personal information. Such permissions are used for an extremely limited technical purpose for allowing the Game to properly interact with your browser. No additional information is obtained beyond what is necessary to provide the Game. No information received is shared with any third-party except those affiliated with BTS or as required for provision of the Game.
                    </div>
                    <div class="content">
                        3.3 Public blockchains provide transparency into transactions and cyberpop is not responsible for preventing or managing information broadcasted on a blockchain.
                    </div>
                </li>
                <li>
                    <div class="subtitle">4. WHAT WE DO WITH INFORMATION WE COLLECT</div>
                    <div class="content">
                        4.1 We may use the information we collect in the following ways:
                    </div>
                    <div class="content">
                        To analyze trends for how the Site and Game are being used;<br/>
                        To improve the Site and Game;<br/>
                        To help personalize your experience of the Site and Game; and<br/>
                        If you gave us your contact information, we may use that information to contact you to send you technical notices, updates, confirmations, security alerts, to provide support to you, to tell you about other products and services that we think might interest you, or to respond to your comments or questions.<br/>
                        4.2 We may share the information we collect with third parties who need to access it in order to perform work on our behalf, including doing things like helping us make the Site or Game available, including without limitation payment services providers, anti-fraud services providers, or providing analytics services for us. We work hard to ensure that these third parties only access and use your information as necessary to perform their functions.
                    </div>
                    <div class="content">
                        4.3 We may create aggregations and anonymizations that contain your information in a way that does not directly identify you. We may use and/or share those aggregations and anonymizations for a variety of purposes related to the Site, the Game, or our company and its business.
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


const realId = computed(() => store?.state.user?.realId);
const idTemp = computed(() => store?.state.user?.idTemp);
const id: any = ref(0)


onMounted(() => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',false);// close message dialog
})

</script>
<style lang="less" scoped>
    .privacy{
        padding-top:  55px;
        background-color: #000000;
        color: #fff;
        .privacy-wrap{
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
                font-family: AlibabaPuHuiTi_2_55_Regular;
                line-height: 24px;
                a{
                    color: #04F39B;
                    text-decoration: none;
                }
            }
        }
    }
</style>
