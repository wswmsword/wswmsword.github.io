import{c as J,d as K,r as C,f as P,F as A,a7 as Y,v as I,D as Z,k as r,a8 as x,a9 as N,z as R,H as z,l as c,t as d,n as V,aa as $,i as G,A as p,ab as ee,p as B,ac as te,ad as ae,ae as ne,C as le,M as ue,N as se,X as ie,a2 as oe,P as ce,Q as de,R as re}from"./index-D_R978jj.js";import{b as H}from"./route-block-B_A1xBdJ.js";const[me,T]=J("stepper"),fe=200,_=(t,l)=>String(t)===String(l),be={min:c(1),max:c(1/0),name:c(""),step:c(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:d,showMinus:d,showInput:d,longPress:d,autoFixed:d,allowEmpty:Boolean,modelValue:V,inputWidth:V,buttonSize:V,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:c(1),decimalLength:V};var ge=K({name:me,props:be,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(t,{emit:l}){const o=(e,a=!0)=>{const{min:u,max:v,allowEmpty:s,decimalLength:S}=t;return s&&e===""||(e=$(String(e),!t.integer),e=e===""?0:+e,e=Number.isNaN(e)?+u:e,e=a?Math.max(Math.min(+v,e),+u):e,G(S)&&(e=e.toFixed(+S))),e},m=()=>{var e;const a=(e=t.modelValue)!=null?e:t.defaultValue,u=o(a);return _(u,t.modelValue)||l("update:modelValue",u),u};let i;const f=C(),n=C(m()),b=P(()=>t.disabled||t.disableMinus||+n.value<=+t.min),g=P(()=>t.disabled||t.disablePlus||+n.value>=+t.max),O=P(()=>({width:A(t.inputWidth),height:A(t.buttonSize)})),E=P(()=>Y(t.buttonSize)),U=()=>{const e=o(n.value);_(e,n.value)||(n.value=e)},F=e=>{t.beforeChange?te(t.beforeChange,{args:[e],done(){n.value=e}}):n.value=e},w=()=>{if(i==="plus"&&g.value||i==="minus"&&b.value){l("overlimit",i);return}const e=i==="minus"?-t.step:+t.step,a=o(ae(+n.value,e));F(a),l(i)},W=e=>{const a=e.target,{value:u}=a,{decimalLength:v}=t;let s=$(String(u),!t.integer);if(G(v)&&s.includes(".")){const D=s.split(".");s="".concat(D[0],".").concat(D[1].slice(0,+v))}t.beforeChange?a.value=String(n.value):_(u,s)||(a.value=s);const S=s===String(+s);F(S?+s:s)},q=e=>{var a;t.disableInput?(a=f.value)==null||a.blur():l("focus",e)},Q=e=>{const a=e.target,u=o(a.value,t.autoFixed);a.value=String(u),n.value=u,p(()=>{l("blur",e),ee()})};let y,h;const M=()=>{h=setTimeout(()=>{w(),M()},fe)},X=()=>{t.longPress&&(y=!1,clearTimeout(h),h=setTimeout(()=>{y=!0,w(),M()},ne))},k=e=>{t.longPress&&(clearTimeout(h),y&&B(e))},j=e=>{t.disableInput&&B(e)},L=e=>({onClick:a=>{B(a),i=e,w()},onTouchstartPassive:()=>{i=e,X()},onTouchend:k,onTouchcancel:k});return I(()=>[t.max,t.min,t.integer,t.decimalLength],U),I(()=>t.modelValue,e=>{_(e,n.value)||(n.value=o(e))}),I(n,e=>{l("update:modelValue",e),l("change",e,{name:t.name})}),Z(()=>t.modelValue),()=>r("div",{role:"group",class:T([t.theme])},[x(r("button",R({type:"button",style:E.value,class:[T("minus",{disabled:b.value}),{[z]:!b.value}],"aria-disabled":b.value||void 0},L("minus")),null),[[N,t.showMinus]]),x(r("input",{ref:f,type:t.integer?"tel":"text",role:"spinbutton",class:T("input"),value:n.value,style:O.value,disabled:t.disabled,readonly:t.disableInput,inputmode:t.integer?"numeric":"decimal",placeholder:t.placeholder,autocomplete:"off","aria-valuemax":t.max,"aria-valuemin":t.min,"aria-valuenow":n.value,onBlur:Q,onInput:W,onFocus:q,onMousedown:j},null),[[N,t.showInput]]),x(r("button",R({type:"button",style:E.value,class:[T("plus",{disabled:g.value}),{[z]:!g.value}],"aria-disabled":g.value||void 0},L("plus")),null),[[N,t.showPlus]])])}});const he=le(ge),ve=K({name:"KeepAlive",__name:"index",setup(t){const l=C(1);return(o,m)=>{const i=he;return ue(),se(re,null,[ie("p",null,oe(o.$t("keepAlive.label")),1),r(i,{modelValue:ce(l),"onUpdate:modelValue":m[0]||(m[0]=f=>de(l)?l.value=f:null)},null,8,["modelValue"])],64)}}});typeof H=="function"&&H(ve);export{ve as default};