import{F as S,_ as M,v as N,a as q}from"./inline-px-to-vw-vhOqtW99.js";import{d as B,J as U,W as $,a3 as D,r as v,a4 as y,f as F,M as T,N as z,k as a,O as m,P as e,a5 as G,a6 as p,X as d,a1 as f,a2 as g}from"./index-D_R978jj.js";import"./index-Do6_xoE1.js";import{B as I}from"./index-Ii-rrj43.js";import{b as h}from"./route-block-B_A1xBdJ.js";import"./use-id-BoVhf20j.js";import"./toNumber-BA28v8oo.js";import"./index-D7hx_8B8.js";const J={class:"m-x-a w-7xl text-center"},L={class:"overflow-hidden rounded-3xl"},O={class:"mt-16 overflow-hidden rounded-3xl"},R={class:"mt-16 overflow-hidden rounded-3xl"},W={class:"mt-16 overflow-hidden rounded-3xl"},X={class:"mt-16 overflow-hidden rounded-3xl"},j={class:"mt-16"},A=B({__name:"index",setup(H){const{t:s}=U(),V=$(),w=D(),u=v(!1),o=y({email:"",code:"",nickname:"",password:"",confirmPassword:""}),k=l=>l===o.password,i=y({email:[{required:!0,message:s("register.pleaseEnterEmail")}],code:[{required:!0,message:s("register.pleaseEnterCode")}],nickname:[{required:!0,message:s("register.pleaseEnterNickname")}],password:[{required:!0,message:s("register.pleaseEnterPassword")}],confirmPassword:[{required:!0,message:s("register.pleaseEnterConfirmPassword")},{required:!0,validator:k,message:s("register.passwordsDoNotMatch")}]});async function x(){try{u.value=!0,(await w.register()).code===0&&(p({type:"success",message:s("register.registerSuccess")}),V.push({name:"login"}))}finally{u.value=!1}}const c=v(!1),b=F(()=>c.value?s("register.gettingCode"):s("register.getCode"));async function C(){if(!o.email){p({type:"warning",message:s("register.pleaseEnterEmail")});return}c.value=!0;const l=await w.getCode();l.code===0&&p({type:"success",message:"".concat(s("register.sendCodeSuccess"),": ").concat(l.result)}),c.value=!1}return(l,r)=>{const n=q,_=I,P=S,E=M;return T(),z("div",J,[a(P,{model:e(o),rules:e(i),"validate-trigger":"onSubmit",onSubmit:x},{default:m(()=>[d("div",L,[a(n,{modelValue:e(o).email,"onUpdate:modelValue":r[0]||(r[0]=t=>e(o).email=t),modelModifiers:{trim:!0},rules:e(i).email,name:"email",placeholder:e(s)("register.email")},null,8,["modelValue","rules","placeholder"])]),d("div",O,[a(n,{modelValue:e(o).code,"onUpdate:modelValue":r[1]||(r[1]=t=>e(o).code=t),modelModifiers:{trim:!0},rules:e(i).code,name:"code",placeholder:e(s)("register.code")},{button:m(()=>[a(_,{size:"small",type:"primary",plain:"",onClick:C},{default:m(()=>[f(g(e(b)),1)]),_:1})]),_:1},8,["modelValue","rules","placeholder"])]),d("div",R,[a(n,{modelValue:e(o).nickname,"onUpdate:modelValue":r[2]||(r[2]=t=>e(o).nickname=t),modelModifiers:{trim:!0},rules:e(i).nickname,name:"nickname",placeholder:e(s)("register.nickname")},null,8,["modelValue","rules","placeholder"])]),d("div",W,[a(n,{modelValue:e(o).password,"onUpdate:modelValue":r[3]||(r[3]=t=>e(o).password=t),modelModifiers:{trim:!0},type:"password",rules:e(i).password,name:"password",placeholder:e(s)("register.password")},null,8,["modelValue","rules","placeholder"])]),d("div",X,[a(n,{modelValue:e(o).confirmPassword,"onUpdate:modelValue":r[4]||(r[4]=t=>e(o).confirmPassword=t),modelModifiers:{trim:!0},type:"password",rules:e(i).confirmPassword,name:"confirmPassword",placeholder:e(s)("register.comfirmPassword")},null,8,["modelValue","rules","placeholder"])]),d("div",j,[a(_,{loading:e(u),type:"primary","native-type":"submit",round:"",block:""},{default:m(()=>[f(g(l.$t("register.confirm")),1)]),_:1},8,["loading"])])]),_:1},8,["model","rules"]),a(E,{to:"login",block:"",style:G({"margin-top":e(N)(8)})},{default:m(()=>[f(g(l.$t("register.backToLogin")),1)]),_:1},8,["style"])])}}});typeof h=="function"&&h(A);export{A as default};