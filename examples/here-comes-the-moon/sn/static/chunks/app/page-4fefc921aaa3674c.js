(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6718:function(r,e,t){Promise.resolve().then(t.bind(t,4106))},4106:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var n=t(7437),u=t(2265);function i(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function o(r,e){if(r){if("string"==typeof r)return i(r,e);var t=({}).toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(r,e):void 0}}var c=(0,u.forwardRef)(function(r,e){var t,n=r.defaultI,c=void 0===n?0:n,a=r.breakI,l=r.moons,s=void 0===l?["\uD83C\uDF11","\uD83C\uDF18","\uD83C\uDF17","\uD83C\uDF16","\uD83C\uDF15","\uD83C\uDF14","\uD83C\uDF13","\uD83C\uDF12"]:l,f=r.frameTm,y=void 0===f?48:f,m=r.dur,d=void 0===m?208:m,p=r.onEnd,v=void 0===p?function(){}:p,h=r.moonClassName,b=function(r){if(Array.isArray(r))return r}(t=(0,u.useState)(s))||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var n,u,i,o,c=[],a=!0,l=!1;try{for(i=(t=t.call(r)).next;!(a=(n=i.call(t)).done)&&(c.push(n.value),2!==c.length);a=!0);}catch(r){l=!0,u=r}finally{try{if(!a&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw u}}return c}}(t,2)||o(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),g=b[0],C=b[1],D=(0,u.useRef)(0),x=(0,u.useRef)([]),I=(0,u.useRef)(!1),A=(0,u.useRef)(!0),E=(0,u.useRef)(0),F=(0,u.useRef)(!1),j=[].concat(void 0===a?[0,4]:a).filter(function(r){return null!=r}),k=(0,u.useRef)(j),w=s.length,R=g.map(function(r,e){var t=c===e;return u.createElement("span",{className:h,onTransitionEnd:function(r){if("opacity"===r.propertyName){var t=(e-1+w)%w;x.current[t].style.visibility="hidden",x.current[t].style.zIndex="",x.current[t].style.transition="",x.current[t].style.opacity=0,k.current.some(function(r){return r===e})&&D.current===e&&(I.current=!1,v())}},style:{position:"absolute",left:0,opacity:t?"":0,visibility:t?"":"hidden"},ref:function(r){return x.current[e]=r},key:e},r)});return(0,u.useImperativeHandle)(e,function(){return{play:N,stop:function(){I.current=!1,A.current=!0},toggle:function(){F.current&&function(){var r=g.toReversed(),e=D.current;if(!0&w&&(w-1)/2===e)g.current=r,C(g.current),k.current=k.current.map(function(r){return(r+w)%w});else{var t=e+1>w/2?2*(e+1)-w:w-2*e,n=function(r){if(Array.isArray(r))return i(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||o(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=w-t+2,c=Math.min(u,t)-1,a=e<w/2&&u<t||e>=w/2&&t<u;k.current=k.current.map(function(r){return a?(r+c-1)%w:(r-c+w-1)%w});for(var l=0;l<c;++l)if(a){var s=n.pop();n.unshift(s)}else{var f=n.shift();n.push(f)}C(n)}}(),N(!0),F.current=!0}}}),u.createElement(u.Fragment,null,u.createElement("span",{style:{position:"relative",transition:"visibility ".concat(d,"ms, opacity ").concat(d,"ms")},role:"presentation"},u.createElement("span",{className:h,"aria-hidden":!0,style:{visibility:"hidden"}},s[0]),R));function N(r){if(r?A.current:!I.current){I.current=!0,A.current=!1;var e=document.timeline.currentTime;x.current[D.current].style.zIndex=0,E.current=0,window.requestAnimationFrame(function t(n){if(r?!A.current:!!I.current){if(n-e>y){var u=(D.current+1)%w;if(D.current=u,E.current+=1,e=n,x.current[u].style.opacity=1,x.current[u].style.visibility="",x.current[u].style.zIndex=E.current,x.current[u].style.transition="inherit",k.current.some(function(r){return r===u}))return A.current=!0}window.requestAnimationFrame(t)}})}}});function a(){let r=(0,u.useRef)();return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center p-24 gap-8",children:[(0,n.jsx)(c,{ref:r,breakI:[0,4],moonClassName:"text-5xl"}),(0,n.jsxs)("div",{style:{display:"flex",gap:9},children:[(0,n.jsx)("button",{onClick:()=>{r.current.play()},children:"play"}),(0,n.jsx)("button",{onClick:()=>{r.current.stop()},children:"stop"}),(0,n.jsx)("button",{onClick:()=>{r.current.toggle()},children:"toggle"})]})]})}}},function(r){r.O(0,[971,23,744],function(){return r(r.s=6718)}),_N_E=r.O()}]);