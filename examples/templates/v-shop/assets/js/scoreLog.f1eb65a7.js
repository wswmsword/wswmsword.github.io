import{_ as u}from"./index.48a12f4a.js";import{A as g}from"./index.ae5c213b.js";import{I as v}from"./good.905862fe.js";import{e as f,z as S,A as _,o as i,a as n,g as h,w as L,b as t,F as x,B as y,D as s,V as C}from"./vendor.1aafb642.js";import{_ as I}from"./index.ce6ac14e.js";import"./index.6012130b.js";const b={class:"container"},z={class:"list"},A={class:"list-item-hd"},B={class:"list-item-title"},E={class:"list-item-txt"},k=f({__name:"scoreLog",setup(D){const a=S([]),o=_({pageCurrent:1,pageSize:20}),d=_({emptyText:"暂无交易记录",emptyImage:v});function l(){const r={page:o.pageCurrent,pageSize:o.pageSize};return g.scoreLogs(r)}return(r,c)=>{const p=u;return i(),n("div",b,[h(p,{dataSource:a.value,"onUpdate:dataSource":c[0]||(c[0]=e=>a.value=e),mode:"infinite",api:l,pagination:o,meta:d,immediate:""},{default:L(()=>[t("div",z,[(i(!0),n(x,null,y(a.value,(e,m)=>(i(),n("div",{key:m,class:"list-item van-hairline--bottom"},[t("div",A,[t("div",B,s(e.typeStr),1),t("div",E,s(e.dateAdd),1)]),t("div",{class:C(["list-item-bd",e.behavior?"c-red":"c-green"])},[t("span",null,s(e.behavior?"":"+"),1),t("span",null,s(e.score),1)],2)]))),128))])]),_:1},8,["dataSource","pagination","meta"])])}}});const N=I(k,[["__scopeId","data-v-cd5f2d94"]]);export{N as default};