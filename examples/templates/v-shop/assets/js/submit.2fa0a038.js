import{e as G,y as K,z as u,j as Q,i as t,r as v,o as p,f as O,w as x,b as e,C as j,g as r,E as R,G as F,H as q,a as w,D as i,h as T,F as ae,B as ne,l as de,I as ie,K as ce,k as H,N as J}from"./vendor.1aafb642.js";import{A as U,_ as z}from"./index.ce6ac14e.js";import{A as E}from"./index.a51135f2.js";import{A as le}from"./index.ed12fca4.js";import{d as M,m as re}from"./format.df5cff0c.js";import{_ as ue}from"./index.87711403.js";import{u as pe}from"./order.1a54acc5.js";import"./is.697638d0.js";const _e=o=>(F("data-v-03179d6f"),o=o(),q(),o),me=_e(()=>e("div",{class:"address-header"},"选择收货地址",-1)),ve={class:"address-body"},he={class:"address-actions"},fe=G({__name:"SelectAddress",props:{modelValue:Boolean},emits:["update:modelValue","select"],setup(o,{expose:g,emit:h}){const n=K(),b={display:"flex","flex-direction":"column","align-items":"stretch","max-height":"80%","min-height":"50%","overflow-y":"visible","font-size":"14px"},_=u([]),y=u(!1),A=u("");Q(()=>{C()});function B(c,l){h("select",c,l),L()}function C(){y.value=!0,U.userShoppingAddressList().then(c=>{var l;_.value=((l=c.data)==null?void 0:l.result)??[],t(_).length&&(A.value=t(_)[0].id)}).finally(()=>{y.value=!1})}function P(){n.push({path:"/address",query:{origin:"selected"}})}function L(){S(!1)}function N(){S(!0)}function S(c){h("update:modelValue",c)}return g({open:N,close:L,updateShow:S}),(c,l)=>{const f=v("van-button"),k=v("van-popup");return p(),O(k,{show:o.modelValue,round:"",closeable:"",position:"bottom",style:b,"onUpdate:show":S},{default:x(()=>[me,e("div",ve,[_.value.length?(p(),O(ue,{key:0,modelValue:A.value,"onUpdate:modelValue":l[0]||(l[0]=I=>A.value=I),class:"address-list",switchable:"",list:_.value,onSelect:B},null,8,["modelValue","list"])):j("",!0)]),e("div",he,[r(f,{type:"primary",round:"",block:"",onClick:P},{default:x(()=>[R("新增地址")]),_:1})])]),_:1},8,["show"])}}});const ge=z(fe,[["__scopeId","data-v-03179d6f"]]),be=G({name:"GoodCard",props:{good:{type:Object,default:()=>({})}},setup(){function o(g){return g.map(h=>h.childName).join(",")}return{decimalFormat:M,propTitle:o}}});const ye=o=>(F("data-v-03a75c00"),o=o(),q(),o),Se={class:"good-card"},ke={class:"good-card-content"},Ie={class:"good-card-title"},we={class:"good-card-desc"},$e={key:0,class:"good-card-prop"},Ae={class:"good-card-bottom"},Ce={class:"good-card-price"},Ve=ye(()=>e("span",{class:"good-card-price-symbol"},"¥",-1)),xe={class:"good-card-price-integer"},Le={class:"good-card-number"};function Ne(o,g,h,n,b,_){const y=v("van-image");return p(),w("div",Se,[r(y,{fit:"contain",class:"good-card-pic",src:o.good.pic},null,8,["src"]),e("div",ke,[e("div",Ie,i(o.good.name),1),e("div",we,[o.good.propertyList&&o.good.propertyList.length?(p(),w("div",$e,i(o.propTitle(o.good.propertyList)),1)):j("",!0)]),e("div",Ae,[e("div",Ce,[Ve,e("span",xe,i(o.decimalFormat(o.good.price)),1)]),e("div",Le,"x"+i(o.good.number),1)])])])}const Te=z(be,[["render",Ne],["__scopeId","data-v-03a75c00"]]),$=o=>(F("data-v-65bdcd2e"),o=o(),q(),o),Me={class:"container"},Oe={key:0,class:"section"},Be={class:"address-sub van-ellipsis"},Pe={class:"address-title van-ellipsis"},De={class:"address-sub van-ellipsis"},Ee={class:"section"},Re={class:"section-header van-hairline--bottom"},Ue=$(()=>e("span",{class:"section-header-title"},"商品列表",-1)),Ge={class:"list"},je={class:"subtotal"},Fe={class:"subtotal-num"},qe=$(()=>e("span",{class:"subtotal-label"},"商品小计：",-1)),ze={class:"subtotal-price"},He=$(()=>e("span",{class:"subtotal-price-symbol"},"¥",-1)),Je={class:"subtotal-price-integer"},Ke={class:"section"},Qe={class:"section"},We=$(()=>e("div",{class:"section-header van-hairline--bottom"},[e("span",{class:"section-header-title"},"付款方式")],-1)),Xe={class:"submit-bar-wrap"},Ye={class:"submit-bar"},Ze={class:"submit-bar-hd"},es=$(()=>e("span",{class:"submit-bar-total"},"应付：",-1)),ss={class:"submit-bar-price"},os=$(()=>e("span",{class:"submit-bar-price-symbol"},"¥",-1)),ts={class:"submit-bar-price-integer"},as={name:"OrderSubmit"},ns=G({...as,setup(o){Q(()=>{t(I)&&B(),L(),S()});const g=K(),h=pe(),n=u({}),b=u(!1);function _(){b.value=!0}function y(a,s,d){let m=a;return s.length>1&&s!==a&&(m+=`${s}`),d.length>1&&(m+=`${d}`),m}function A(a){n.value=a}function B(){U.userShoppingAddressDefault().then(a=>{var s;n.value=((s=a.data)==null?void 0:s.info)??{}})}const C=u(0),P=u(!0);function L(){U.userAmount().then(a=>{var s;C.value=((s=a.data)==null?void 0:s.balance)??0})}const N=u({});function S(){E.orderSet().then(a=>{N.value=a.data||{}})}const c=u(""),l=T(()=>h.getTradeGoods),f=T(()=>t(l).list),k=u(!1),I=T(()=>t(f).some(a=>a.logisticsId!==0)),D=T(()=>t(f).reduce((a,s)=>J.plus(a,J.times(s.price,s.number)),0));function W(){if(t(I)&&!t(n).linkMan){de({message:"地址栏不能为空",duration:1500});return}if(t(C)<t(D)){ie({title:"余额不足",message:"积分兑换成余额，再来消费",confirmButtonText:"我知道了"}).then(()=>{}).catch(()=>{});return}X()}async function X(){const a=t(f).map(d=>({goodsId:d.goodsId,number:d.number,propertyChildIds:d.propertyList.map(m=>m.propIds).join(",")})),s={calculate:!1,goodsType:0,goodsJsonStr:JSON.stringify(a),expireMinutes:t(N).closeMinute||60,remark:t(c)};t(I)?(s.peisongType="kd",s.linkMan=t(n).linkMan,s.mobile=t(n).mobile,s.address=t(n).address,s.provinceId=t(n).provinceId,s.cityId=t(n).cityId,s.districtId=t(n).districtId):s.autoDeliver=!0,ce({forbidClick:!0,message:"订单创建中...",duration:0}),k.value=!0;try{const d=await E.orderCreate(s);t(l).origin==="cart"&&Z(),await Y(d.data.id),H(),k.value=!1,g.replace({path:"/order/payResult",query:{orderNumber:d.data.orderNumber}})}catch(d){H(),k.value=!1,console.error(d)}}function Y(a){return E.orderPay({orderId:a})}function Z(){le.shoppingCartEmpty().then(()=>{}).catch(a=>{console.log(a)})}return(a,s)=>{const d=v("van-icon"),m=v("van-cell"),ee=v("van-field"),se=v("van-checkbox"),oe=v("van-button");return p(),w("div",Me,[I.value?(p(),w("div",Oe,[n.value.linkMan?(p(),w("div",{key:0,class:"address",onClick:_},[e("div",Be,i(y(n.value.provinceStr,n.value.cityStr,n.value.areaStr)),1),e("div",Pe,i(n.value.address),1),e("div",De,i(n.value.linkMan)+" "+i(t(re)(n.value.mobile)),1),r(d,{class:"address-arrow",name:"arrow"})])):(p(),O(m,{key:1,class:"address-card mb10",title:"新增收货地址",icon:"add-square","is-link":"",onClick:_})),r(m,{title:"配送方式",value:"快递"}),r(ge,{modelValue:b.value,"onUpdate:modelValue":s[0]||(s[0]=V=>b.value=V),onSelect:A},null,8,["modelValue"])])):j("",!0),e("div",Ee,[e("div",Re,[r(d,{class:"section-header-icon",name:"shop-o"}),Ue]),e("div",Ge,[(p(!0),w(ae,null,ne(f.value,(V,te)=>(p(),O(Te,{key:te,good:V},null,8,["good"]))),128))]),e("div",je,[e("span",Fe,"共"+i(f.value.length)+"件",1),qe,e("span",ze,[He,e("span",Je,i(t(M)(D.value)),1)])])]),e("div",Ke,[r(ee,{modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=V=>c.value=V),label:"买家留言",type:"textarea",placeholder:"留言建议提前协商（250字以内）",maxlength:"250",rows:"1",autosize:""},null,8,["modelValue"])]),e("div",Qe,[We,r(m,{title:"余额",center:""},{label:x(()=>[R(" 账户余额："+i(t(M)(C.value)),1)]),"right-icon":x(()=>[r(se,{"model-value":P.value},null,8,["model-value"])]),_:1})]),e("div",Xe,[e("div",Ye,[e("div",Ze,[es,e("div",ss,[os,e("span",ts,i(t(M)(D.value)),1)])]),r(oe,{class:"submit-bar-button",loading:k.value,round:"",type:"primary",onClick:W},{default:x(()=>[R(" 提交订单 ")]),_:1},8,["loading"])])])])}}});const ms=z(ns,[["__scopeId","data-v-65bdcd2e"]]);export{ms as default};