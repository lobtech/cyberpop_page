import{c as F,d as y,o as k,r as x,a,b as m,w as E,K as B,e as w,f as _,g as P,h as R,i as $,j as d,n as g,u as C,k as I,p as L,l as S,m as f,q as u,s as D}from"./vendor.c35e912b.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};j();const O={innerWidth:window.innerWidth,innerHeight:window.innerHeight};var V={namespaced:!0,state:O,mutations:{get_screen_size(e){e.innerWidth=window.innerWidth,e.innerHeight=window.innerHeight}},actions:{get_screen_size({commit:e}){e("get_screen_size")}}};const T={name:"test",age:0,roles:[],active:0};var W={namespaced:!0,state:T,mutations:{init(e,t){console.log("---------->\u65E5\u5FD7\u8F93\u51FA:paylaod",t),e.name=t.name,e.age=t.age,e.roles=t.roles},initRoles(e,t){console.log("---------->\u65E5\u5FD7\u8F93\u51FA:paylaod",t),e.roles=t},addRole(e,t){e.roles.push(t)},changeActive(e,t){e.active=t}},actions:{init({commit:e},t){e("init",t)},initRoles({commit:e},t){e("initRoles",t)},addRole({commit:e},t){e("addRole",t)},changeActive({commit:e},t){e("changeActive",t)}}};const q={serverUrl:"https://iryujqeq3c0k.usemoralis.com:2053/server",appId:"pgxFvaT0RRCnC9efXnb6f6Ck9WxudIoscdigwwpU",chain:"bsc testnet",address:"0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC",user:{accounts:"",username:"",nativeBalance:"",tokenBalances:""}};var z={namespaced:!0,state:q,mutations:{async init(e,t){e.user=t},async logout(e,t){e.user={accounts:"",username:"",nativeBalance:"",tokenBalances:""}}},actions:{init({commit:e},t){e("init",t)},logout({commit:e},t){e("logout",t)}}};const N=Symbol(),b=F({state:{counter:0,vuexIsLogin:!1,vuexTestVar:"\u8FD9\u662Fvuex\u7684\u6D4B\u8BD5\u53D8\u91CF"},mutations:{$changeStore(e,t){const n=t.k.split("."),s=n.length;if(s>=2){let o=e[n[0]];for(let r=1;r<s-1;r++)o=o[n[r]];o[n[s-1]]=t.v}else e[t.k]=t.v}},actions:{set({commit:e},t){if(typeof t.k!="string")return console.log("---------->payload: { k, v }\u53C2\u6570\u9519\u8BEF:",{payload:t});e("$changeStore",t)}},modules:{sys:V,user:W,moralis:z}});const H=y({setup(e){return k(()=>{window.onresize=()=>b.dispatch("sys/get_screen_size")}),(t,n)=>{const s=x("router-view");return a(),m(s,null,{default:E(({Component:o})=>[(a(),m(B,null,[t.$route.meta.keepAlive?(a(),m(w(o),{key:t.$route.path})):_("",!0)],1024)),t.$route.meta.keepAlive?_("",!0):(a(),m(w(o),{key:t.$route.path}))]),_:1})}}}),M="modulepreload",A={},U="/",h=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${U}${s}`,s in A)return;A[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":M,o||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),o)return new Promise((c,l)=>{i.addEventListener("load",c),i.addEventListener("error",l)})})).then(()=>t())},K=[{name:"home",path:"/",component:()=>h(()=>import("./index.0cb35aeb.js"),["assets/index.0cb35aeb.js","assets/index.0bd35146.css","assets/vendor.c35e912b.js","assets/web3.30e79fce.js"]),meta:{keepAlive:!1,showFooter:!0,transition:"slide-right"}},{name:"about",path:"/about",component:()=>h(()=>import("./index.2b2e33b3.js"),["assets/index.2b2e33b3.js","assets/index.db5bbe49.css","assets/vendor.c35e912b.js","assets/web3.30e79fce.js"]),meta:{keepAlive:!1,showFooter:!0,transition:"slide-right"}},{name:"support",path:"/support",component:()=>h(()=>import("./index.816a9326.js"),["assets/index.816a9326.js","assets/index.4a8f6359.css","assets/section4-2.8ba39302.js","assets/vendor.c35e912b.js","assets/web3.30e79fce.js"]),meta:{keepAlive:!1,showFooter:!0,transition:"slide-right"}},{name:"xplan",path:"/xplan",component:()=>h(()=>import("./index.7a3579a1.js"),["assets/index.7a3579a1.js","assets/index.d4dae1cd.css","assets/section4-2.8ba39302.js","assets/vendor.c35e912b.js","assets/web3.30e79fce.js"]),meta:{keepAlive:!1,showFooter:!0,transition:"slide-right"}}],X=P({history:R(),routes:K});var G=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n};const v=e=>(L("data-v-7cb16710"),e=e(),S(),e),J={class:"mask"},Q=v(()=>f("source",{src:"https://d1td2c8hf7fv9k.cloudfront.net/6dff55c4018832a1528ecbc410ec6094.mp4",type:"video/mp4"},null,-1)),Y=[Q],Z=v(()=>f("source",{src:"https://d1td2c8hf7fv9k.cloudfront.net/efce5218ffe7d5bec009c95d7bb92e85.mp4",type:"video/mp4"},null,-1)),ee=[Z],te=v(()=>f("source",{src:"https://d1td2c8hf7fv9k.cloudfront.net/fd9efe5ce1ffcc8f1ae3fd6fdfab31e4.mp4",type:"video/mp4"},null,-1)),oe=[te],se=v(()=>f("img",{src:"https://d1td2c8hf7fv9k.cloudfront.net/play.png",alt:"",class:"play"},null,-1)),ne=[se],re=y({props:{videoSrc:String,videotype:Number,mobel:Boolean},setup(e){const t=e;let n=$(!0),s=document.getElementById("mp4");const o=(r=t.videotype)=>{n.value=!1,(s==null?void 0:s.paused)||(n.value=!1)};return k(()=>{console.log(t),(s==null?void 0:s.paused)||(n.value=!1)}),(r,i)=>(a(),d("div",J,[e.videotype==1?(a(),d("video",{key:0,style:g({width:(e.mobel?100:60)+"%"}),ref:(c,l)=>{l.video=c},id:"mp4",preload:"none",width:"100%",height:"100%",autoplay:"",loop:"",controls:""},Y,4)):e.videotype==2?(a(),d("video",{key:1,style:g({width:(e.mobel?100:60)+"%"}),ref:(c,l)=>{l.video=c},id:"mp4",preload:"none",width:"100%",height:"100%",autoplay:"",loop:"",controls:""},ee,4)):(a(),d("video",{key:2,style:g({width:(e.mobel?100:60)+"%"}),ref:(c,l)=>{l.video=c},id:"mp4",preload:"none",width:"100%",height:"100%",autoplay:"",loop:"",controls:""},oe,4)),e.mobel&&C(n)?(a(),d("div",{key:3,class:"play",onClick:i[0]||(i[0]=I(c=>o(),["stop"]))},ne)):_("",!0)]))}});var ie=G(re,[["__scopeId","data-v-7cb16710"]]);u.defaults.baseURL="";u.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";u.defaults.timeout=1e4;u.interceptors.request.use(e=>e,e=>Promise.reject(e));u.interceptors.response.use(e=>e.status==200?Promise.resolve(e):Promise.reject(e),e=>{console.log(e)});var ae={get(e,t){return new Promise((n,s)=>{u({method:"get",url:e,params:t}).then(o=>{n(o.data)}).catch(o=>{s(o)})})}};const p=D(H);p.config.globalProperties.$api=ae;p.use(X);p.use(b,N);p.component("MyVideo",ie);p.mount("#app");export{G as _,b as s};