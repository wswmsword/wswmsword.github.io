import{q as P,X as k,H as h,z as T,d as x,m as j,x as D,e as n,as as b,a0 as O,A as q,B as K,r as U,c as u,a as f,a5 as v,a4 as $,u as z,o as _,at as H,L as X,_ as G}from"./index-3f2f397a.js";import"./index-89231694.js";import{f as I,F as J}from"./index-ef81349f.js";import{u as M}from"./use-id-6ba71826.js";import"./use-route-44494af9.js";const[Q,o,W]=P("search"),Y=k({},I,{label:String,shape:h("square"),leftIcon:h("search"),clearable:T,actionText:String,background:String,showAction:Boolean});var Z=x({name:Q,props:Y,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(a,{emit:c,slots:t,attrs:p}){const l=M(),s=j(),d=()=>{t.action||(c("update:modelValue",""),c("cancel"))},r=e=>{e.keyCode===13&&(q(e),c("search",a.modelValue))},i=()=>a.id||`${l}-input`,g=()=>{if(t.label||a.label)return n("label",{class:o("label"),for:i()},[t.label?t.label():a.label])},y=()=>{if(a.showAction){const e=a.actionText||W("cancel");return n("div",{class:o("action"),role:"button",tabindex:0,onClick:d},[t.action?t.action():e])}},C=()=>{var e;return(e=s.value)==null?void 0:e.blur()},w=()=>{var e;return(e=s.value)==null?void 0:e.focus()},V=e=>c("blur",e),E=e=>c("focus",e),A=e=>c("clear",e),B=e=>c("clickInput",e),L=e=>c("clickLeftIcon",e),N=e=>c("clickRightIcon",e),R=Object.keys(I),S=()=>{const e=k({},p,b(a,R),{id:i()}),m=F=>c("update:modelValue",F);return n(J,O({ref:s,type:"search",class:o("field"),border:!1,onBlur:V,onFocus:E,onClear:A,onKeypress:r,onClickInput:B,onClickLeftIcon:L,onClickRightIcon:N,"onUpdate:modelValue":m},e),b(t,["left-icon","right-icon"]))};return D({focus:w,blur:C}),()=>{var e;return n("div",{class:o({"show-action":a.showAction}),style:{background:a.background}},[(e=t.left)==null?void 0:e.call(t),n("div",{class:o("content",a.shape)},[g(),S()]),y()])}}});const ee=K(Z);const ce={class:"list flex flex-col"},te={class:"list-item-left flex-shrink-0"},ae={class:"icon-wrap",order:"1"},ne=H('<div class="list-item-right flex flex-1 flex-col justify-between" data-v-88ccccbd><div class="list-item-title flex justify-between" data-v-88ccccbd><span class="list-item-title-text" data-v-88ccccbd>生活号</span><span class="list-item-title-time" data-v-88ccccbd>18:15</span></div><div class="list-item-msg" data-v-88ccccbd>了不起的打工人</div></div>',1),se=x({__name:"index",setup(a){const c=Array.from({length:20}),t=U({keyword:""});return(p,l)=>{const s=ee,d=X;return _(),u(v,null,[n(s,{modelValue:t.keyword,"onUpdate:modelValue":l[0]||(l[0]=r=>t.keyword=r),class:"search",shape:"round",placeholder:"请输入搜索关键词"},null,8,["modelValue"]),f("ul",ce,[(_(!0),u(v,null,$(z(c),(r,i)=>(_(),u("li",{key:i,class:"list-item flex items-center"},[f("div",te,[f("span",ae,[n(d,{class:"icon",name:"star-o"})])]),ne]))),128))])],64)}}});const ue=G(se,[["__scopeId","data-v-88ccccbd"]]);export{ue as default};