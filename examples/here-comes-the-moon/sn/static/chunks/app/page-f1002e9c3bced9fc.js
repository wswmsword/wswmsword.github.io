(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6718:function(e,r,t){Promise.resolve().then(t.bind(t,4106))},4106:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(7437),u=t(2265);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){if(e){if("string"==typeof e)return i(e,r);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,r):void 0}}var a=(0,u.forwardRef)(function(e,r){var t,n=e.defaultI,a=void 0===n?0:n,c=e.breakI,l=e.moons,s=void 0===l?["\uD83C\uDF11","\uD83C\uDF18","\uD83C\uDF17","\uD83C\uDF16","\uD83C\uDF15","\uD83C\uDF14","\uD83C\uDF13","\uD83C\uDF12"]:l,f=e.frameTm,d=void 0===f?48:f,m=e.dur,y=void 0===m?208:m,p=e.onEnd,v=void 0===p?function(){}:p,h=e.moonClassName,b=function(e){if(Array.isArray(e))return e}(t=(0,u.useState)(s))||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,u,i,o,a=[],c=!0,l=!1;try{for(i=(t=t.call(e)).next;!(c=(n=i.call(t)).done)&&(a.push(n.value),2!==a.length);c=!0);}catch(e){l=!0,u=e}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw u}}return a}}(t,2)||o(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),x=b[0],C=b[1],g=(0,u.useRef)(0),D=(0,u.useRef)([]),j=(0,u.useRef)(!1),I=(0,u.useRef)(!0),k=(0,u.useRef)(0),E=(0,u.useRef)(!1),N=[].concat(void 0===c?[0,4]:c).filter(function(e){return null!=e}),A=(0,u.useRef)(N),F=s.length,R=x.map(function(e,r){var t=a===r;return u.createElement("span",{className:h,onTransitionEnd:function(e){if("opacity"===e.propertyName){var t=(r-1+F)%F;D.current[t].style.visibility="hidden",D.current[t].style.zIndex="",D.current[t].style.transition="",D.current[t].style.opacity=0,A.current.some(function(e){return e===r})&&g.current===r&&(j.current=!1,v())}},style:{position:"absolute",left:0,opacity:t?"":0,visibility:t?"":"hidden"},ref:function(e){return D.current[r]=e},key:r},e)});return(0,u.useImperativeHandle)(r,function(){return{play:S,stop:function(){j.current=!1,I.current=!0},toggle:function(){E.current&&function(){var e=x.toReversed(),r=g.current;if(!0&F&&(F-1)/2===r)x.current=e,C(x.current),A.current=A.current.map(function(e){return(e+F)%F});else{var t=r+1>F/2?2*(r+1)-F:F-2*r,n=function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=F-t+2,a=Math.min(u,t)-1,c=r<F/2&&u<t||r>=F/2&&t<u;A.current=A.current.map(function(e){return c?(e+a-1)%F:(e-a+F-1)%F});for(var l=0;l<a;++l)if(c){var s=n.pop();n.unshift(s)}else{var f=n.shift();n.push(f)}C(n)}}(),S(!0),E.current=!0}}}),u.createElement(u.Fragment,null,u.createElement("span",{style:{position:"relative",transition:"visibility ".concat(y,"ms, opacity ").concat(y,"ms")},role:"presentation"},u.createElement("span",{className:h,"aria-hidden":!0,style:{visibility:"hidden"}},s[0]),R));function S(e){if(e?I.current:!j.current){j.current=!0,I.current=!1;var r=document.timeline.currentTime;D.current[g.current].style.zIndex=0,k.current=0,window.requestAnimationFrame(function t(n){if(e?!I.current:!!j.current){if(n-r>d){var u=(g.current+1)%F;if(g.current=u,k.current+=1,r=n,D.current[u].style.opacity=1,D.current[u].style.visibility="",D.current[u].style.zIndex=k.current,D.current[u].style.transition="inherit",A.current.some(function(e){return e===u}))return I.current=!0}window.requestAnimationFrame(t)}})}}});function c(){let e=(0,u.useRef)(),r=(0,u.useRef)(),[t,i]=(0,u.useState)([]),[o,c]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{o&&(r.current.play(),setTimeout(()=>{c(!1),i(e=>[...e,"more!"]),r.current.stop()},1998))},[o]),(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-center py-8 box-border gap-8",children:[(0,n.jsx)(a,{ref:e,breakI:[0,4],moonClassName:"text-3xl"}),(0,n.jsxs)("div",{style:{display:"flex",gap:9},children:[(0,n.jsx)("button",{onClick:()=>{e.current.play()},children:"play"}),(0,n.jsx)("button",{onClick:()=>{e.current.stop()},children:"stop"}),(0,n.jsx)("button",{onClick:()=>{e.current.toggle()},children:"toggle"}),(0,n.jsx)("button",{onClick:()=>{c(!0)},children:"load more"})]}),o&&(0,n.jsx)("div",{className:"fixed top-4 left-4",children:(0,n.jsx)(a,{ref:r,breakI:null,moonClassName:"text-xl",frameTm:80,dur:196})}),(0,n.jsx)("div",{children:t.map((e,r)=>(0,n.jsx)("div",{className:"text-5xl",children:e},r))})]})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=6718)}),_N_E=e.O()}]);