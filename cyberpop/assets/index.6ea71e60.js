import{_ as p,s as v}from"./index.19ebbc17.js";import{_ as k,a as C,b as S,c as O,d as x,e as y,f as w}from"./section4-2.1019e5b5.js";import{d as m,t as $,v as f,i as I,o as g,a as u,j as h,m as t,y as N,f as j,z as d,u as r,F as A,p as B,l as E,D as M,b as W}from"./vendor.c9d9242b.js";import{W as D}from"./web3.9ba48200.js";const b=n=>(B("data-v-38efd780"),n=n(),E(),n),L={class:"home"},R={class:"content"},T=b(()=>t("img",{class:"logo",src:"https://d1td2c8hf7fv9k.cloudfront.net/LOGO.png",alt:"logo"},null,-1)),V={class:"login_in Aideep"},z={key:0,src:"https://d1td2c8hf7fv9k.cloudfront.net/user.png",alt:""},F={class:"menu"},G=M('<section data-v-38efd780><div class="titles" data-v-38efd780><div class="title1" data-v-38efd780><img src="https://d1td2c8hf7fv9k.cloudfront.net/section1_2.png" alt="" data-v-38efd780></div><div class="title2" data-v-38efd780><img src="https://d1td2c8hf7fv9k.cloudfront.net/section1_1.png" alt="" data-v-38efd780></div><div class="title3" data-v-38efd780> ECONOMIC MODELS </div></div></section><footer data-v-38efd780><img src="https://d1td2c8hf7fv9k.cloudfront.net/section1_buttom.png" alt="" class="buttom" data-v-38efd780></footer>',2),P=b(()=>t("div",{class:"welcome"},[t("div",{class:"cover_up"}),t("img",{src:k,class:"section2-1 bgimg",alt:""}),t("img",{src:C,class:"section2-2 bgimg",alt:""}),t("img",{src:S,class:"section3-1 bgimg",alt:""}),t("img",{src:O,class:"section3-2 bgimg",alt:""}),t("div",{class:"section4"},[t("div",null,[t("img",{src:x,alt:""})]),t("div",null,[t("img",{src:y,alt:""}),t("img",{src:w,alt:""})])]),t("div",{class:"section5"})],-1)),U=m({setup(n){const c=$(),i=f(()=>{var a,s;return(s=(a=v)==null?void 0:a.state.user)==null?void 0:s.active}),l=(a,s)=>{if(a==2){window.open("https://medium.com/@Cyberpopnewworld");return}v.dispatch("user/changeActive",a),s&&c.push({path:`${s}`})},e=I(0),_=async()=>{const[a]=await D.login().then(o=>o);e.value=a;let s=e.value.length-1;e.value=e.value[0]+e.value[1]+e.value[2]+e.value[3]+e.value[4]+"*****"+e.value[s-3]+e.value[s-2]+e.value[s-1]+e.value[s]};return g(()=>{_()}),(a,s)=>(u(),h(A,null,[t("div",L,[t("header",null,[t("div",R,[T,t("div",{class:"user",onClick:s[0]||(s[0]=o=>_())},[t("div",V,N(e.value||"LOG IN"),1),e.value?j("",!0):(u(),h("img",z))]),t("div",F,[t("ul",null,[t("li",{onClick:s[1]||(s[1]=o=>l(0,"/")),class:d({active:r(i)==0})},"HOME",2),t("li",{onClick:s[2]||(s[2]=o=>l(1,"/about")),class:d({active:r(i)==1})},"STORY",2),t("li",{onClick:s[3]||(s[3]=o=>l(2)),class:d({active:r(i)==2})},"NEWS",2),t("li",{onClick:s[4]||(s[4]=o=>l(3,"/support")),class:d({active:r(i)==3})},"SUPPORT",2),t("li",{onClick:s[5]||(s[5]=o=>l(4,"/about")),class:d({active:r(i)==4})},"ABOUT",2)])])])]),G]),P],64))}});var H=p(U,[["__scopeId","data-v-38efd780"]]);const Y=m({setup(n){return f(()=>{var c;return((c=v.state.sys)==null?void 0:c.innerWidth)||0}),g(()=>{}),(c,i)=>(u(),W(H))}});var X=p(Y,[["__scopeId","data-v-298b0f22"]]);export{X as default};
