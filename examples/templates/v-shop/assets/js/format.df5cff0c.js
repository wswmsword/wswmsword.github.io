import{i}from"./is.697638d0.js";function u(r,t=2){const e=Number(r);return Number.isNaN(e)?"":e.toFixed(t)}function o(r,t=2,e="--"){return i(r)&&r>=0?Number(r).toFixed(t):e}function s(r){return r.replace(r.substring(3,7),"****")}function c(r,t){return t&&r!==t?`${u(r)}-${u(t)}`:u(r)}export{o as c,u as d,s as m,c as p};