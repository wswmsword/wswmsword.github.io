import{_ as Y}from"./Container.vueuvueutypeuscriptusetuputrueulang-CLNoPslE.js";import{c as J,j as c,t as d,n as _,d as G,r as C,f as P,F as R,a3 as X,q as y,E as Z,h as r,a4 as I,a5 as N,x as A,H as z,a6 as $,i as q,y as p,a7 as ee,p as B,a8 as te,a9 as ae,aa as ne,z as le,P as ue,Q as se,R as ie,Y as oe,a2 as ce,S as de,T as re}from"./index-BPvPw3R2.js";const[me,V]=J("stepper"),fe=200,T=(t,l)=>String(t)===String(l),ge={min:c(1),max:c(1/0),name:c(""),step:c(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:d,showMinus:d,showInput:d,longPress:d,autoFixed:d,allowEmpty:Boolean,modelValue:_,inputWidth:_,buttonSize:_,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:c(1),decimalLength:_};var he=G({name:me,props:ge,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(t,{emit:l}){const o=(e,n=!0)=>{const{min:u,max:v,allowEmpty:s,decimalLength:S}=t;return s&&e===""||(e=$(String(e),!t.integer),e=e===""?0:+e,e=Number.isNaN(e)?+u:e,e=n?Math.max(Math.min(+v,e),+u):e,q(S)&&(e=e.toFixed(+S))),e},m=()=>{var e;const n=(e=t.modelValue)!=null?e:t.defaultValue,u=o(n);return T(u,t.modelValue)||l("update:modelValue",u),u};let i;const f=C(),a=C(m()),g=P(()=>t.disabled||t.disableMinus||+a.value<=+t.min),h=P(()=>t.disabled||t.disablePlus||+a.value>=+t.max),H=P(()=>({width:R(t.inputWidth),height:R(t.buttonSize)})),E=P(()=>X(t.buttonSize)),K=()=>{const e=o(a.value);T(e,a.value)||(a.value=e)},F=e=>{t.beforeChange?te(t.beforeChange,{args:[e],done(){a.value=e}}):a.value=e},w=()=>{if(i==="plus"&&h.value||i==="minus"&&g.value){l("overlimit",i);return}const e=i==="minus"?-t.step:+t.step,n=o(ae(+a.value,e));F(n),l(i)},O=e=>{const n=e.target,{value:u}=n,{decimalLength:v}=t;let s=$(String(u),!t.integer);if(q(v)&&s.includes(".")){const D=s.split(".");s="".concat(D[0],".").concat(D[1].slice(0,+v))}t.beforeChange?n.value=String(a.value):T(u,s)||(n.value=s);const S=s===String(+s);F(S?+s:s)},U=e=>{var n;t.disableInput?(n=f.value)==null||n.blur():l("focus",e)},W=e=>{const n=e.target,u=o(n.value,t.autoFixed);n.value=String(u),a.value=u,p(()=>{l("blur",e),ee()})};let x,b;const L=()=>{b=setTimeout(()=>{w(),L()},fe)},j=()=>{t.longPress&&(x=!1,clearTimeout(b),b=setTimeout(()=>{x=!0,w(),L()},ne))},M=e=>{t.longPress&&(clearTimeout(b),x&&B(e))},Q=e=>{t.disableInput&&B(e)},k=e=>({onClick:n=>{B(n),i=e,w()},onTouchstartPassive:()=>{i=e,j()},onTouchend:M,onTouchcancel:M});return y(()=>[t.max,t.min,t.integer,t.decimalLength],K),y(()=>t.modelValue,e=>{T(e,a.value)||(a.value=o(e))}),y(a,e=>{l("update:modelValue",e),l("change",e,{name:t.name})}),Z(()=>t.modelValue),()=>r("div",{role:"group",class:V([t.theme])},[I(r("button",A({type:"button",style:E.value,class:[V("minus",{disabled:g.value}),{[z]:!g.value}],"aria-disabled":g.value||void 0},k("minus")),null),[[N,t.showMinus]]),I(r("input",{ref:f,type:t.integer?"tel":"text",role:"spinbutton",class:V("input"),value:a.value,style:H.value,disabled:t.disabled,readonly:t.disableInput,inputmode:t.integer?"numeric":"decimal",placeholder:t.placeholder,"aria-valuemax":t.max,"aria-valuemin":t.min,"aria-valuenow":a.value,onBlur:W,onInput:O,onFocus:U,onMousedown:Q},null),[[N,t.showInput]]),I(r("button",A({type:"button",style:E.value,class:[V("plus",{disabled:h.value}),{[z]:!h.value}],"aria-disabled":h.value||void 0},k("plus")),null),[[N,t.showPlus]])])}});const be=le(he),_e=G({name:"KeepAlive",__name:"index",setup(t){const l=C(1);return(o,m)=>{const i=be,f=Y;return ie(),ue(f,null,{default:se(()=>[oe("p",null,ce(o.$t("keepAlive.label")),1),r(i,{modelValue:de(l),"onUpdate:modelValue":m[0]||(m[0]=a=>re(l)?l.value=a:null)},null,8,["modelValue"])]),_:1})}}});export{_e as default};