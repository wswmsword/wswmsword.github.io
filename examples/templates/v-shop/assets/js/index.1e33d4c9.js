import{_ as W}from"./index.f89d891c.js";import{_ as q,a as z}from"./index.f958c18e.js";import{x as G,A as H,g as r,M as Z,O as J,o as _,a as u,G as K,H as M,b as t,e as Q,j as X,i as o,z as h,h as P,r as U,P as E,D as d,C as Y,F as L,B as D}from"./vendor.1aafb642.js";import{c as S}from"./format.df5cff0c.js";import{a as B}from"./index.4d464653.js";import{_ as N,u as tt,A as et}from"./index.ce6ac14e.js";import{A as st}from"./index.ccd2f348.js";import{A as ot}from"./index.a51135f2.js";import{u as nt}from"./usePage.0ebad3d8.js";import"./is.697638d0.js";let k;function at(){const p=G({name:"AppClientInfoPopupWrapper",setup(){const g=H({show:!1}),a=b=>{g.show=b},C={open:()=>{a(!0)},close:()=>{a(!1)},toggle:a},f=J();return f&&Object.assign(f.proxy,C),()=>r(q,Z(g,{"onUpdate:show":a}),null)}}),m=document.createElement("div");document.body.appendChild(m),k=p.mount(m)}function it(){return k||at(),k.open(),k}const ct={},lt=c=>(K("data-v-59bc2339"),c=c(),M(),c),dt={id:"svg",width:"100%",height:"100%",viewBox:"0 0 1440 400",xmlns:"http://www.w3.org/2000/svg",class:"transition duration-300 ease-in-out delay-150"},rt=lt(()=>t("path",{d:"M 0,400 C 0,400 0,200 0,200 C 71.55980861244021,216.3062200956938 143.11961722488041,232.61244019138758 251,222 C 358.8803827751196,211.38755980861242 503.08133971291863,173.8564593301435 622,171 C 740.9186602870814,168.1435406698565 834.555023923445,199.9617224880383 909,202 C 983.444976076555,204.0382775119617 1038.6985645933014,176.29665071770333 1124,171 C 1209.3014354066986,165.70334928229667 1324.6507177033493,182.85167464114835 1440,200 C 1440,200 1440,400 1440,400 Z",stroke:"none","stroke-width":"0",fill:"#ffffffff",class:"transition-all duration-300 ease-in-out delay-150 path-0"},null,-1)),_t=[rt];function ut(c,p){return _(),u("svg",dt,_t)}const pt=N(ct,[["render",ut],["__scopeId","data-v-59bc2339"]]),vt="/examples/templates/v-shop/assets/png/icon_art.56ec92e5.png",ht="/examples/templates/v-shop/assets/png/icon_device.649299f6.png",i=c=>(K("data-v-398215a0"),c=c(),M(),c),mt={class:"container"},gt={class:"header"},ft=i(()=>t("div",{class:"header-tag"},"个人资料",-1)),Ct={class:"header-info"},bt={class:"header-nick van-ellipsis mb10"},kt={class:"header-sub"},yt={class:"header-sub-item"},wt=i(()=>t("span",{class:"header-sub-item-separate"},"|",-1)),It={class:"header-sub-item"},xt=i(()=>t("span",{class:"header-sub-item-separate"},"|",-1)),St={key:0,class:"header-sub-item"},$t=i(()=>t("div",{class:"header-info"},[t("div",{class:"header-nick"},"登录/注册")],-1)),At={class:"header-bg"},Pt={class:"header-bg-wave"},Ut={class:"main"},Et=i(()=>t("div",{class:"group"},null,-1)),Lt={class:"group"},Dt={class:"count-list"},Bt={class:"count-list-item-value"},Kt=i(()=>t("div",{class:"count-list-item-label"},"积分",-1)),Mt={class:"count-list-item-value"},Nt=i(()=>t("div",{class:"count-list-item-label"},"优惠券",-1)),Ot={class:"count-list-item-value"},Rt=i(()=>t("div",{class:"count-list-item-label"},"余额",-1)),Tt={class:"group"},Vt=i(()=>t("div",{class:"group-header-hd"},"我的订单",-1)),jt={class:"group-header-bd"},Ft=i(()=>t("span",{class:"group-header-txt"},"查看全部订单",-1)),Wt={class:"order-list"},qt=["onClick"],zt={class:"order-list-item-title"},Gt={class:"group"},Ht=i(()=>t("div",{class:"group-header van-hairline--bottom"},[t("div",{class:"group-header-hd"},"常用功能")],-1)),Zt={class:"tool-list"},Jt=["onClick"],Qt={class:"tool-list-item-title"},Xt={name:"Mine"},Yt=Q({...Xt,setup(c){X(()=>{o(m)&&(p.getUserDetail(),T())});const p=tt(),{hasLogin:m,goLogin:g,goPage:a}=nt(),y=h(0),w=h(void 0),C=h(void 0),f=h(void 0),b=h([{value:"",label:"待付款",icon:"pending-payment",path:"/order/list?status=0",count:void 0,countKey:"count_id_no_pay"},{value:"",label:"待发货",icon:"tosend",path:"/order/list?status=1",count:void 0,countKey:"count_id_no_transfer"},{value:"",label:"待收货",icon:"logistics",path:"/order/list?status=2",count:void 0,countKey:"count_id_no_confirm"},{value:"",label:"评价",icon:"comment-o",path:"/order/list?status=3",count:void 0,countKey:"count_id_no_reputation"},{value:"",label:"退款/售后",icon:"after-sale",path:"/refund",count:void 0}]),O=h([{icon:"balance-o",title:"我的钱包",path:"/wallet"},{icon:"point-gift-o",title:"积分兑换",path:"/integral/exchange"},{icon:"coupon-o",title:"优惠券",path:"/coupon"},{icon:"location-o",title:"收货地址",path:"/address"},{icon:"setting-o",title:"设置",path:"/setting"},{icon:vt,title:"主题",path:"/theme"},{icon:ht,title:"我的设备",value:"device"}]);function R(n){if(n.path){a(n.path);return}n.value==="device"&&it()}const I=P(()=>p.getUserInfo),$=P(()=>p.getUserLevel);function A(){document.querySelector(".header-avatar").classList.toggle("active")}function T(){et.userAmount().then(n=>{var e,l,v;w.value=((e=n.data)==null?void 0:e.balance)??0,y.value=((l=n.data)==null?void 0:l.growth)??0,C.value=((v=n.data)==null?void 0:v.score)??0}),ot.orderStatistics().then(n=>{const e=n.data;b.value.forEach(l=>{e[l.countKey]&&(l.count=e[l.countKey])})}),st.discountsStatistics().then(n=>{var e;f.value=((e=n.data)==null?void 0:e.canUse)??0})}return(n,e)=>{const l=U("van-image"),v=U("van-icon"),V=z,j=W;return _(),u("div",mt,[t("div",gt,[o(m)?(_(),u("div",{key:0,class:"header-inner",onClick:e[0]||(e[0]=s=>o(a)("/profile"))},[ft,r(l,{class:"header-avatar",src:I.value.avatarUrl||o(B).avatar,alt:"",onClick:E(A,["stop"])},null,8,["src","onClick"]),t("div",Ct,[t("div",bt,d(I.value.nick||"还没有昵称"),1),t("div",kt,[t("span",yt,"ID "+d(I.value.id),1),wt,t("span",It,"成长值 "+d(y.value),1),xt,$.value.id?(_(),u("span",St," 段位 "+d($.value.name),1)):Y("",!0)])])])):(_(),u("div",{key:1,class:"header-inner",onClick:e[1]||(e[1]=(...s)=>o(g)&&o(g)(...s))},[r(l,{class:"header-avatar",src:o(B).avatar,alt:"",onClick:E(A,["stop"])},null,8,["src","onClick"]),$t])),t("div",At,[t("div",Pt,[r(pt)])])]),t("div",Ut,[Et,t("div",Lt,[t("div",Dt,[t("div",{class:"count-list-item",onClick:e[2]||(e[2]=s=>o(a)("/integral"))},[t("div",Bt,d(o(S)(C.value,0)),1),Kt]),t("div",{class:"count-list-item",onClick:e[3]||(e[3]=s=>o(a)("/coupon"))},[t("div",Mt,d(o(S)(f.value,0)),1),Nt]),t("div",{class:"count-list-item",onClick:e[4]||(e[4]=s=>o(a)("/wallet"))},[t("div",Ot,d(o(S)(w.value)),1),Rt])])]),t("div",Tt,[t("div",{class:"group-header van-hairline--bottom",onClick:e[5]||(e[5]=s=>o(a)("/order/list"))},[Vt,t("div",jt,[Ft,r(v,{class:"group-header-arrow",name:"arrow"})])]),t("div",Wt,[(_(!0),u(L,null,D(b.value,(s,x)=>(_(),u("div",{key:x,class:"order-list-item",onClick:F=>o(a)(s.path)},[r(v,{class:"order-list-item-icon",name:s.icon,badge:s.count},null,8,["name","badge"]),t("div",zt,d(s.label),1)],8,qt))),128))])]),t("div",Gt,[Ht,t("div",Zt,[(_(!0),u(L,null,D(O.value,(s,x)=>(_(),u("div",{key:x,class:"tool-list-item",onClick:F=>R(s)},[r(v,{class:"tool-list-item-icon",name:s.icon,badge:s.count},null,8,["name","badge"]),t("div",Qt,d(s.title),1)],8,Jt))),128))])])]),r(V),r(j)])}}});const re=N(Yt,[["__scopeId","data-v-398215a0"]]);export{re as default};