import{e as H,r as _,o as n,f as R,w as u,b as e,g as i,a as v,B as se,D as a,F as P,G as K,H as Q,z as f,E as d,i as p,K as te,k as oe,l as z,j as ce,y as de,u as re,W as ee,Q as ue,P as D,C as g,V as _e,I as pe}from"./vendor.1aafb642.js";import{_ as W}from"./index.ce6ac14e.js";import{A as J}from"./index.a51135f2.js";import{r as ve}from"./reputation.a195e891.js";import{u as me}from"./usePage.0ebad3d8.js";import{P as he}from"./index.6be6f4f2.js";import{d as F}from"./format.df5cff0c.js";import{u as fe}from"./order.1a54acc5.js";import"./index.4d464653.js";import"./is.697638d0.js";const be=navigator&&"clipboard"in navigator;function ye(t){return be?navigator.clipboard.writeText(t.data):(ge(t.data),Promise.resolve())}function ge(t){const h=document.getElementById("#clipboard");h&&h.remove();const c=document.createElement("textarea");c.value=t,c.id="#clipboard",c.style.position="fixed",c.style.top="-9999px",c.style.zIndex="-9999",document.body.appendChild(c),c.value=t,c.select(),c.setSelectionRange(0,c.value.length),document.execCommand("copy")}function we(t){const{phoneNumber:h}=t;return window.location.href=`tel:${h}`,Promise.resolve()}const ke=t=>(K("data-v-01361a64"),t=t(),Q(),t),Ce=ke(()=>e("div",{class:"steps-header"},"订单跟踪",-1)),xe={class:"steps-body"},Se={class:"steps-item-label"},$e={class:"steps-item-time"},Ie=H({__name:"OrderSteps",props:{show:{type:Boolean},list:{type:Array,default:()=>[]}},emits:["update:show","success"],setup(t,{expose:h,emit:c}){const w={display:"flex","flex-direction":"column","align-items":"stretch","font-size":"14px"};function B(){b(!1)}function C(){b(!0)}function b(x){c("update:show",x)}return h({open:C,close:B,updateShow:b}),(x,L)=>{const V=_("van-step"),A=_("van-steps"),S=_("van-popup");return n(),R(S,{show:t.show,round:"",closeable:"",position:"bottom",style:w,"onUpdate:show":b},{default:u(()=>[Ce,e("div",xe,[i(A,{direction:"vertical",active:t.list.length-1},{default:u(()=>[(n(!0),v(P,null,se(t.list,(k,y)=>(n(),R(V,{key:y},{default:u(()=>[e("div",Se,a(k.typeStr),1),e("div",$e,a(k.dateAdd),1)]),_:2},1024))),128))]),_:1},8,["active"])])]),_:1},8,["show"])}}});const Oe=W(Ie,[["__scopeId","data-v-01361a64"]]),Ne=t=>(K("data-v-d9fba21d"),t=t(),Q(),t),Re=Ne(()=>e("div",{class:"rate-header"},"发表评价",-1)),Ve={class:"rate-body"},De={class:"rate-box"},Pe={class:"rate-actions"},ze=H({__name:"OrderRate",props:{show:{type:Boolean},goods:{type:Array,default:()=>[]},orderInfo:{type:Object,default:()=>{}}},emits:["update:show","success"],setup(t,{expose:h,emit:c}){const w=t,{token:B}=me(),C={display:"flex","flex-direction":"column","align-items":"stretch","font-size":"14px"},b=f(5),x=f("");function L(){const k=w.goods.map($=>({id:$.id,reputation:ve(p(b)),remark:p(x)})),y={token:p(B),orderId:w.orderInfo.id,reputations:k};te({overlay:!0,message:"加载中...",duration:0}),J.orderReputation({postJsonString:JSON.stringify(y)}).then(()=>{oe(),z({message:"评价成功!",duration:1500}),V(),c("success")}).catch($=>{console.error($)})}function V(){S(!1)}function A(){S(!0)}function S(k){c("update:show",k)}return h({open:A,close:V,updateShow:S}),(k,y)=>{const $=_("van-cell"),j=_("van-rate"),I=_("van-field"),T=_("van-button"),U=_("van-popup");return n(),R(U,{show:t.show,round:"",closeable:"",position:"bottom",style:C,"onUpdate:show":S},{default:u(()=>[Re,e("div",Ve,[i($,{title:"请选择您的评分",border:!1}),e("div",De,[i(j,{modelValue:b.value,"onUpdate:modelValue":y[0]||(y[0]=s=>b.value=s),size:24,gutter:8},null,8,["modelValue"])]),i(I,{modelValue:x.value,"onUpdate:modelValue":y[1]||(y[1]=s=>x.value=s),border:!1,label:"备注",type:"textarea",placeholder:"非常愉快的一次购物！",maxlength:"200",rows:"1",autosize:""},null,8,["modelValue"])]),e("div",Pe,[i(T,{type:"primary",round:"",block:"",onClick:L},{default:u(()=>[d("提交评价")]),_:1})])]),_:1},8,["show"])}}});const Be=W(ze,[["__scopeId","data-v-d9fba21d"]]),m=t=>(K("data-v-9765ca06"),t=t(),Q(),t),Le={class:"container"},Ae={class:"header"},Te={class:"order-status-title"},Ue={key:0,class:"order-status-desc"},Ee=m(()=>e("span",{class:"order-step-label"},"订单跟踪",-1)),Fe={class:"address van-hairline--top"},je={class:"address-hd"},Me={class:"address-inner"},qe={class:"address-inner-title"},Ge={class:"address-inner-title"},Je={class:"address-inner-bottom"},He={class:"section"},Ke={class:"section-header van-hairline--bottom"},Qe=m(()=>e("span",{class:"section-header-title"},"商品列表",-1)),We={class:"list"},Xe=["onClick"],Ye={class:"list-item-content"},Ze={class:"list-item-title"},es={class:"list-item-desc"},ss={key:0,class:"list-item-prop"},ts={class:"list-item-bottom"},os={class:"list-item-price text-primary-color"},as=m(()=>e("span",{class:"list-item-price-symbol"},"¥",-1)),ns={class:"list-item-price-integer"},is={class:"list-item-number"},ls={class:"subtotal"},cs=m(()=>e("span",{class:"subtotal-label"},"商品小计：",-1)),ds={class:"subtotal-price"},rs=m(()=>e("span",{class:"subtotal-price-symbol"},"¥",-1)),us={class:"subtotal-price-integer"},_s={class:"section"},ps={class:"section"},vs={class:"amount"},ms=m(()=>e("div",{class:"amount-hd"},"商品金额",-1)),hs={class:"amount-bd"},fs={key:0,class:"amount"},bs=m(()=>e("div",{class:"amount-hd"},"运费",-1)),ys={class:"amount-bd"},gs={class:"amount amount-total-price"},ws={class:"amount-total-price-label"},ks={class:"section"},Cs={class:"order-no"},xs={class:"order-no-p"},Ss={class:"order-no-p-value"},$s={class:"order-no-p"},Is={class:"order-no-p-value"},Os=m(()=>e("div",{class:"order-no-p"},[d(" 支付方式： "),e("span",{class:"order-no-p-value"},"在线支付")],-1)),Ns=m(()=>e("div",{class:"order-no-p"},[d(" 付款方式： "),e("span",{class:"order-no-p-value"},"钱包余额")],-1)),Rs={key:0,class:"order-no-p"},Vs=m(()=>e("span",{class:"order-no-p-value"}," 普通快递",-1)),Ds={class:"action-bar-wrap"},Ps={class:"action-bar"},zs={class:"action-bar-hd"},Bs=m(()=>e("span",{class:"action-bar-total"},"合计：",-1)),Ls={class:"action-bar-price"},As=m(()=>e("span",{class:"action-bar-price-symbol"},"¥",-1)),Ts={class:"action-bar-price-integer"},Us={name:"OrderDetail"},Es=H({...Us,setup(t){ce(()=>{Y()});const h=de(),c=re(),w=f(!1);function B(){w.value=!0}const C=f(!1);function b(){C.value=!0}function x(){I()}const L=fe();function V(r){L.closeOrder({orderId:r}).then(()=>{z({message:"取消订单成功",duration:1500}),I()}).catch(o=>{console.error(o)})}function A(r){L.deleteOrder({orderId:r}).then(()=>{z({message:"删除订单成功",duration:1500}),h.back()}).catch(o=>{console.error(o)})}function S(r){z({message:"未开放：收银台",duration:1500})}function k(){we({phoneNumber:"10086"})}function y(r){pe({title:"提示",message:"确认您已收到商品？"}).then(()=>{te({forbidClick:!1,message:"加载中...",duration:0}),J.orderDelivery({orderId:r}).then(()=>{oe(),z({message:"确认收货成功",duration:1500}),I()})}).catch(()=>{})}function $(r){h.push({path:"/good/detail",query:{id:r}})}function j(r){ye({data:r}).then(()=>{z({message:"复制成功",duration:1500})})}function I(){Y()}const T=f(!1),U=f(!1),s=f({}),M=f([]),O=f({}),X=f([]);function Y(){J.orderDetail({orderNumber:c.query.orderNumber}).then(r=>{var o;if(s.value=r.data.orderInfo,M.value=r.data.goods,X.value=r.data.logs,O.value=((o=r.data)==null?void 0:o.logistics)??{},p(s).status===0&&p(s).dateClose){const G=ee(p(s).dateClose),E=ee();q.value=G.diff(E)}}).finally(()=>{T.value=!1})}const q=f(0);function ae(){I()}return ue(()=>{p(w)||p(C)?U.value=!0:U.value=!1}),(r,o)=>{const G=_("van-count-down"),E=_("van-icon"),Z=_("van-cell"),ne=_("van-image"),N=_("van-button"),ie=_("van-pull-refresh");return n(),v("div",Le,[i(ie,{modelValue:T.value,"onUpdate:modelValue":o[2]||(o[2]=l=>T.value=l),disabled:U.value,onRefresh:I},{default:u(()=>[e("div",Ae,[e("div",{class:_e(["order-status",`order-status--${s.value.status}`])},[e("div",Te,a(s.value.statusStr),1),s.value.status===0&&q.value>0?(n(),v("div",Ue,[d(" 请于"),i(G,{class:"count-down",time:q.value,format:"mm 分 ss 秒",onFinish:ae},null,8,["time"]),d("内付款， 超时订单将自动关闭 ")])):g("",!0)],2),e("div",{class:"order-step",onClick:B},[Ee,i(E,{class:"order-step-icon",name:"arrow"})]),i(Oe,{show:w.value,"onUpdate:show":o[0]||(o[0]=l=>w.value=l),list:X.value},null,8,["show","list"])]),s.value.isNeedLogistics?(n(),v(P,{key:0},[e("div",Fe,[e("div",je,[e("div",Me,[i(E,{name:"location-o",class:"address-inner-icon"}),e("div",qe,"收货人："+a(O.value.linkMan),1),e("div",Ge,a(O.value.mobile),1)]),e("div",Je,"收货地址："+a(O.value.address),1)])]),i(Z,{title:"物流信息",class:"cell"},{default:u(()=>[O.value.trackingNumber?(n(),v(P,{key:0},[d(a(O.value.shipperName)+" "+a(O.value.trackingNumber),1)],64)):(n(),v(P,{key:1},[d("无")],64))]),_:1})],64)):g("",!0),e("div",He,[e("div",Ke,[i(E,{class:"section-header-icon",name:"shop-o"}),Qe]),e("div",We,[(n(!0),v(P,null,se(M.value,(l,le)=>(n(),v("div",{key:le,class:"list-item",onClick:Fs=>$(l.goodsId)},[i(ne,{fit:"contain",class:"list-item-pic",src:l.pic},null,8,["src"]),e("div",Ye,[e("div",Ze,a(l.goodsName),1),e("div",es,[l.property?(n(),v("div",ss,a(l.property),1)):g("",!0)]),e("div",ts,[e("div",os,[as,e("span",ns,a(p(F)(l.amountSingle)),1)]),e("div",is,"x"+a(l.number),1)])])],8,Xe))),128))]),e("div",ls,[cs,e("span",ds,[rs,e("span",us,a(p(F)(s.value.amount)),1)])])]),e("div",_s,[i(Z,{title:"买家留言",class:"cell",value:s.value.remark||"无"},null,8,["value"])]),e("div",ps,[e("div",vs,[ms,e("div",hs,"¥ "+a(p(F)(s.value.amount)),1)]),s.value.isNeedLogistics?(n(),v("div",fs,[bs,e("div",ys,"+ "+a(p(F)(s.value.amountLogistics)),1)])):g("",!0),e("div",gs,[e("span",ws,a(s.value.status===0?"需付款：":"实付款："),1),i(he,{class:"amount-total-price-price",price:s.value.amountReal},null,8,["price"])])]),e("div",ks,[e("div",Cs,[e("div",xs,[d(" 订单编号： "),e("span",Ss,a(s.value.orderNumber),1),i(N,{class:"order-no-copy-btn",plain:"",type:"default",size:"mini",onClick:o[1]||(o[1]=l=>j(s.value.orderNumber))},{default:u(()=>[d(" 复制 ")]),_:1})]),e("div",$s,[d(" 下单时间： "),e("span",Is,a(s.value.dateAdd),1)]),Os,Ns,s.value.isNeedLogistics?(n(),v("div",Rs,[d(" 配送方式： "),Vs])):g("",!0)])])]),_:1},8,["modelValue","disabled"]),e("div",Ds,[e("div",Ps,[s.value.status===-1||s.value.status===3||s.value.status===4?(n(),R(N,{key:0,class:"action-bar-btn",round:"",onClick:o[3]||(o[3]=D(l=>A(s.value.id),["stop"]))},{default:u(()=>[d(" 删除订单 ")]),_:1})):g("",!0),s.value.status===0?(n(),v(P,{key:1},[e("div",zs,[Bs,e("div",Ls,[As,e("span",Ts,a(p(F)(s.value.amountReal)),1)])]),i(N,{class:"action-bar-btn",round:"",plain:"",onClick:o[4]||(o[4]=D(l=>V(s.value.id),["stop"]))},{default:u(()=>[d(" 取消订单 ")]),_:1}),i(N,{class:"action-bar-btn",round:"",type:"primary",onClick:o[5]||(o[5]=D(l=>S(s.value.id),["stop"]))},{default:u(()=>[d(" 去支付 ")]),_:1})],64)):g("",!0),s.value.status===1?(n(),R(N,{key:2,icon:"service",class:"action-bar-btn",round:"",onClick:D(k,["stop"])},{default:u(()=>[d(" 联系客服 ")]),_:1},8,["onClick"])):g("",!0),s.value.status===2?(n(),R(N,{key:3,class:"action-bar-btn",round:"",onClick:o[6]||(o[6]=D(l=>y(s.value.id),["stop"]))},{default:u(()=>[d("确认收货")]),_:1})):g("",!0),s.value.status===3?(n(),R(N,{key:4,class:"action-bar-btn",round:"",onClick:D(b,["stop"])},{default:u(()=>[d("评价")]),_:1},8,["onClick"])):g("",!0)])]),i(Be,{show:C.value,"onUpdate:show":o[7]||(o[7]=l=>C.value=l),goods:M.value,"order-info":s.value,onSuccess:x},null,8,["show","goods","order-info"])])}}});const Ys=W(Es,[["__scopeId","data-v-9765ca06"]]);export{Ys as default};