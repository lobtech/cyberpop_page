import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' // 引入vue-router
import store, { key } from './store'
import './index.css' // 自定义全局样式
import MyVideo from './components/video/video.vue'
import ComingA from './components/coming/comingA.vue'
import ComingB from './components/coming/comingB.vue'
import MessageA from './components/dialog/MessageA.vue'
import MessageB from './components/dialog/MessageB.vue'
import PopupA from './components/popup/PopupA.vue'
import XplanproA from './components/xplanpro/xplanproA.vue'
import XplanproB from './components/xplanpro/xplanproB.vue'
import api from './api/request'
import VideoBg from 'vue-videobg'
import 'swiper/css';



const app = createApp(App) // 创建实例
app.config.globalProperties.$api = api;
app.use(router) // 挂载路由
app.use(store, key) // 挂载vuex

app.component('MyVideo', MyVideo) //视频组件
app.component('ComingA', ComingA)
app.component('ComingB', ComingB)
app.component('MessageA', MessageA)
app.component('MessageB', MessageB)
app.component('PopupA', PopupA)
app.component('XplanproA', XplanproA)
app.component('XplanproB', XplanproB)
app.component('video-bg', VideoBg)
app.mount('#app')
