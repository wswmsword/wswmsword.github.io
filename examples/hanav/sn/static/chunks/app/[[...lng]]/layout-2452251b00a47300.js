(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{1648:function(e,n,t){var r={"./en.json":[8281,281],"./zh-cn.json":[2433,433]};function a(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],a=n[0];return t.e(n[1]).then(function(){return t.t(a,19)})}a.keys=function(){return Object.keys(r)},a.id=1648,e.exports=a},670:function(e,n,t){Promise.resolve().then(t.bind(t,7989)),Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.t.bind(t,9852,23)),Promise.resolve().then(t.t.bind(t,2216,23)),Promise.resolve().then(t.t.bind(t,1078,23)),Promise.resolve().then(t.t.bind(t,9853,23))},7989:function(e,n,t){"use strict";t.d(n,{default:function(){return ez}});var r=t(7437),a=t(6486),s=t.n(a),c=t(2265);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(n){l(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function l(e,n,t){var r;return(n="symbol"==typeof(r=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"))?r:r+"")in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,s,c,o=[],i=!0,l=!1;try{if(s=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;i=!1}else for(;!(i=(r=s.call(t)).done)&&(o.push(r.value),o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{if(!i&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(l)throw a}}return o}}(e,n)||m(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){if(e){if("string"==typeof e)return p(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,n):void 0}}function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var v=(0,c.createContext)({}),x=(0,c.createContext)({}),_=(0,c.createContext)(),y=(0,c.createContext)(),b=["children","dur","gap","dynamicWidth","onlyKeyFocus","close"];function j(e){var n=e.children,t=e.dur,r=void 0===t?.5:t,a=e.gap,s=void 0===a?0:a,o=e.dynamicWidth,i=void 0!==o&&o,l=e.onlyKeyFocus,h=void 0===l||l,m=e.close,p=void 0!==m&&m,y=d(e,b),j=f((0,c.useState)(-1),2),g=j[0],E=j[1],w=(0,c.useRef)(-1),I=(0,c.useRef)(-1),C=(0,c.useRef)([]),k=(0,c.useRef)([]),R=(0,c.useRef)(),N=(0,c.useRef)(!1),F=(0,c.useRef)(!1),M=(0,c.useRef)([]),O=(0,c.useRef)([]),S=(0,c.useRef)(null),P=(0,c.useRef)([]),T=(0,c.useRef)([]),B=(0,c.useCallback)(function(e){F.current=!1,I.current=-1,E(function(n){return e!==n&&(n<0&&w.current>-1&&e>-1&&e!==w.current&&(I.current=w.current),w.current=n),e})},[]),A=(0,c.useCallback)(function(){R.current&&(clearTimeout(R.current),R.current=null)},[]),D=(0,c.useCallback)(function(e){A();var n=e.target,t=C.current.findIndex(function(e){return e===n});t>-1&&t!==g&&(N.current=!1,B(t))},[g]),W=(0,c.useCallback)(function(){R.current&&(clearTimeout(R.current),R.current=null),R.current=setTimeout(function(){N.current=!1,B(-1),R.current=null},600)},[]),K=(0,c.useMemo)(function(){return{openedMenuIdx:g,headFocusItemInContent:M,panelsRef:k}},[g]),L=(0,c.useMemo)(function(){return{openedMenuIdx:g,overMenuPanel:A,leaveMenuPanel:W,dur:r,close:p,gap:s,dynamicWidth:i,onlyKeyFocus:h,contentWrapperRef:S,prevMenuIdxRef:w,collapsePrevMenuIdx2Ref:I,isKeyActive:N,btnsRef:C,panelsRef:k,headFocusItemInContent:M}},[g,s,r,h,p,i]),X=(0,c.useMemo)(function(){return{openedMenuIdx:g,overMenu:D,leaveMenu:W,dur:r,onlyKeyFocus:h,setActivePanel:B,checkedFocusOwnerContent:F,isKeyActive:N,headFocusItemInContent:M,tailFocusItemInContent:O,prevMenuIdxRef:w,contentWrapperRef:S,panelsRef:k,btnsRef:C,triggerAriaIds:P,contentAriaIds:T}},[g,r,h]);return c.createElement(x.Provider,{value:X},c.createElement(v.Provider,{value:L},c.createElement(_.Provider,{value:K},c.createElement("nav",u({"aria-label":"Main",tabIndex:-1},y),n))))}function g(e){var n=e.children,t=e.transRunning,r=(0,c.useContext)(v),a=r.openedMenuIdx,s=r.dur,o=r.prevMenuIdxRef,i=r.panelsRef,l=(0,c.useRef)([]),u=f((0,c.useState)(),2),d=u[0],h=u[1],m=f((0,c.useState)(!1),2),p=m[0],x=m[1];return(0,c.useLayoutEffect)(function(){l.current=i.current.map(function(e){return(null==e?void 0:e.offsetLeft)||0})},[]),(0,c.useLayoutEffect)(function(){h({})},[]),(0,c.useEffect)(function(){null!=d&&requestAnimationFrame(function(){return x(!0)})},[d]),c.Children.map(n,function(e,n){var r,i;return(0,c.cloneElement)(e,{type:"C",orderI:n,contentItemStyle:{transform:(r=o.current,(i=a<0?r:a)<1||null==l.current[i]?null:"translateX(-".concat(l.current[i],"px)")),transition:p?"transform ".concat(s,"s"):null,flexShrink:0,width:"100%"},transRunning:t})})}function E(e,n,t,r,a,s,o,i){(0,c.useEffect)(function(){e<0&&t.current>-1&&(n&&r.current||!n)&&a.current[t.current].focus()},[e,n]),(0,c.useEffect)(function(){if(e>-1&&i&&(n&&r.current||!n)){var t=o.current[e];t?t.focus({preventScroll:!0}):s.current[e].focus({preventScroll:!0})}},[e,n,i])}var w=["children","outer","style","style2","innerStyle2","moveX","tp","onExpanding","onExpanded","onCollapsing","onCollapsed"],I=["style"];function C(e){var n=e.children,t=e.outer,r=void 0===t?{}:t,a=e.style,s=e.style2,o=e.innerStyle2,l=e.moveX,h=e.tp,m=e.onExpanding,p=void 0===m?function(){}:m,x=e.onExpanded,_=void 0===x?function(){}:x,y=e.onCollapsing,b=void 0===y?function(){}:y,j=e.onCollapsed,g=void 0===j?function(){}:j,C=d(e,w),k=(0,c.useContext)(v),R=k.openedMenuIdx,N=k.overMenuPanel,F=k.leaveMenuPanel,M=k.dur,O=k.contentWrapperRef,S=k.onlyKeyFocus,P=k.prevMenuIdxRef,T=k.isKeyActive,B=k.btnsRef,A=k.panelsRef,D=k.headFocusItemInContent,W=k.close,K=k.gap,L=k.dynamicWidth,X=f((0,c.useState)(!1),2),Y=X[0],H=X[1],U=f((0,c.useState)(!1),2),z=U[0],G=U[1],V=R>-1||R<0&&z,Z=(0,c.useRef)([]),q=(0,c.useRef)([]),J=(0,c.useRef)([]),Q=(0,c.useRef)(!1);(0,c.useLayoutEffect)(function(){R>-1&&!1===Y&&(H(!0),Z.current=A.current.map(function(e){return(null==e?void 0:e.clientWidth)||0}),q.current=A.current.map(function(e){return(null==e?void 0:e.clientHeight)||0}),J.current=A.current.map(function(e){return(null==e?void 0:e.clientWidth)||0}))},[R,Y]),(0,c.useEffect)(function(){Y&&(Q.current=!0,G(!0))},[Y]),(0,c.useEffect)(function(){z&&-1===P.current?p():z&&R<0&&b()},[z,R]),E(R,S,P,T,B,A,D,z);var $=(0,c.useCallback)(function(e){var n=O.current;h===e.propertyName&&(e.target!==n&&e.target!==n.parentNode||(Q.current=!1,R<0?(G(!1),H(!1),P.current=-1,g()):_()))},[R,_]);if(V){var ee=R<0&&P.current>-1,en=!z||ee,et=l(en,W,R,P,B,Z,K),er=r.style,ea=d(r,I),es=L?-1===R?J.current[P.current]||0:J.current[R]||0:"100%",ec="function"==typeof o?o(en,K,M):o,eo="function"==typeof s?s(K):s;return c.createElement("div",u({style:i(i({},eo),{},{position:"absolute",left:0,width:es,height:ee?q.current[P.current]:q.current[R],transition:z?"transform ".concat(M,"s, height ").concat(M,"s, width ").concat(M,"s"):null,transform:et},er)},ea),c.createElement("div",u({ref:O,onMouseOver:N,onMouseLeave:F,style:i(i({},ec),{},{width:"100%",height:"100%",overflow:"hidden"},a),onTransitionEnd:$},C),n(Q)))}return null}function k(e,n,t,r){var a=r.current[n],s=t.current[n],c=null==a||null==s?0:s.offsetLeft+s.clientWidth/2-a/2;return"translate(".concat(c,"px, ").concat(e,")")}function R(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return c.Children.map(e,function(e){var t=(e.type||{}).displayName;return"Item"===t?(++n,(0,c.cloneElement)(e,{type:"T",orderI:n})):"Group"===t?(0,c.cloneElement)(e,{children:R(e.props.children,n)}):e})}var N=["children"];function F(e){var n=e.children,t=d(e,N);return c.createElement(C,u({moveX:function(e,n,t,r,a,s,c){if(n){var o=e&&t<0?r.current:t;return k("".concat(c,"px"),o,a,s)}return"translateY(".concat(c,"px)")},style2:function(e){return{clipPath:"inset(-".concat(e,"px -100vw -100vw -100vw)")}},innerStyle2:function(e,n,t){return{display:"flex",alignItems:"flex-start",transform:e?"translateY(calc(-100% - ".concat(n,"px))"):"translateY(0)",transition:"transform ".concat(t,"s")}},tp:"transform"},t),n)}var M=["children","xTrans","yTrans","trans"];function O(e){var n=e.children;e.xTrans,e.yTrans,e.trans;var t=d(e,M);return c.createElement(F,t,function(e){return c.createElement(g,{transRunning:e},n)})}function S(e){var n=e.children,t=e.type,r=e.orderI,a=e.contentItemStyle,s=e.transRunning,o=(0,c.useContext)(x),i=(0,c.useId)(),l=o.triggerAriaIds,u=o.contentAriaIds,d=o.prevMenuIdxRef,h=o.openedMenuIdx,m=o.isKeyActive,p=o.setActivePanel,v=f((0,c.useState)(),2),_=v[0],b=v[1];if((0,c.useEffect)(function(){h>-1&&d.current<0?b(u.current[r]):h<0&&b(null)},[h,r,_]),"T"===t){var j=o.btnsRef,g=o.overMenu,E=o.leaveMenu;l.current[r]=i;var w={ref:function(e){return j.current[r]=e},onClick:function(e){var n=e.target,t=j.current.findIndex(function(e){return e===n});t<0&&(t=j.current.findIndex(function(e){return e.contains(n)})),t>-1&&(m.current=0===e.nativeEvent.offsetX&&0===e.nativeEvent.offsetY,p(t===h?-1:t))},onMouseOver:g,onMouseLeave:E,id:i,"aria-expanded":h===r,"aria-controls":_};return"function"==typeof n?n(w):(0,c.cloneElement)(n,w)}if("C"===t){var I=o.panelsRef,C=o.headFocusItemInContent,k=o.tailFocusItemInContent,R=o.checkedFocusOwnerContent,N=o.prevMenuIdxRef,F=o.onlyKeyFocus,M=o.contentWrapperRef,O=h===r;u.current[r]=i;var S={onKeyDown:function(e){if("Escape"===e.key||"Esc"===e.key||27===e.keyCode)return m.current=!0,void p(-1);if("Tab"===e.key||9===e.keyCode){if(null!=s&&s.current)return void e.preventDefault();if(!R.current&&N.current>-1&&F&&!m.current){var n,t=document.activeElement;if(null!==(n=M.current)&&void 0!==n&&n.contains(t)){var a=I.current[h];if(!a.contains(t))return R.current=!0,a.focus({preventScroll:!0}),void e.preventDefault()}}}var c=C.current[r],o=k.current[r];e.target===I.current[r]&&("Tab"!==e.key&&9!==e.keyCode||(e.shiftKey?o&&o.focus():c&&c.focus(),e.preventDefault())),e.target===c&&("Tab"===e.key||9===e.keyCode)&&e.shiftKey&&(o&&o.focus(),e.preventDefault()),e.target!==o||"Tab"!==e.key&&9!==e.keyCode||e.shiftKey||(c&&c.focus(),e.preventDefault())},ref:function(e){return I.current[r]=e},style:a,id:i,"aria-labelledby":l.current[r],"aria-hidden":!O,tabIndex:-1};return c.createElement(y.Provider,{value:r},"function"==typeof n?n(S,function(e){return C.current[r]=e},function(e){return k.current[r]=e}):(0,c.cloneElement)(n,S))}return n}S.displayName="Item";var P=["children"];function T(e){var n=e.children,t=d(e,P),r=(0,c.useContext)(_),a=r.wrapperRef,s=r.openedMenuIdx,o=r.headFocusItemInContent,i=r.panelsRef,l=R(n);return c.createElement("div",u({},t,{ref:a,onKeyDown:function(e){if(s>-1&&("Tab"===e.key||9===e.keyCode)){var n=o.current[s];e.preventDefault(),n?n.focus({preventScroll:!0}):i.current[s].focus({preventScroll:!0})}}}),l)}T.displayName="Trigger";var B=["transition"];function A(e){var n=e.children,t=e.trans,r=e.transRunning,a=(0,c.useContext)(v),s=a.openedMenuIdx,o=a.dur,u=a.prevMenuIdxRef,m=a.collapsePrevMenuIdx2Ref,p=f((0,c.useState)(),2),x=p[0],_=p[1],y=(0,c.useRef)(!1);(0,c.useEffect)(function(){s>-1&&(u.current>-1||m.current>-1)&&requestAnimationFrame(function(){_({}),y.current=!0})},[s]);var b=(0,c.useMemo)(function(){return Array.from({length:c.Children.count(n)},function(e,n){return n}).map(j)},[s,x]);return c.Children.map(n,function(e,n){return(0,c.cloneElement)(e,{type:"C",orderI:n,contentItemStyle:b[n],transRunning:r})});function j(e){var n={},r=s===e,a=t.transition,c=d(t,B),f=!1!==a;for(var m in f&&(n.transition=function(e,n,t){var r=e||t.map(function(e){return"".concat(e," ").concat(o,"s")}).join(),a=u.current===n;if(a)return r;var c=s===n;return c?y.current?r:null:r}(a,e,Object.keys(c||{}).filter(function(e){return Array.isArray(c[e])}))),c){var p=[].concat(t[m]),v=[p[0],p[1],p[2]].filter(function(e){return null!=e});n=i(i({},n),{},l({},m,v[2]?E.apply(void 0,h(v).concat([e])):v[1]?g.apply(void 0,h(v).concat([e])):v[0]))}return n.position="absolute",n.zIndex=r?1:null,r&&y.current&&(y.current=!1),n}function g(e,n,t){return t===u.current&&s<0?n:u.current===t?e:s===t&&(u.current<0||y.current)?n:e}function E(e,n,t,r){var a=s===r,c=u.current,o=m.current;if(s>-1&&c<0&&o<0||s<0)return e;var i=o>0?s<o:s<c;return a?y.current?e:i?n:t:i?t:n}}var D=["children","trans","xTrans","yTrans"];function W(e){var n=e.children,t=e.trans,r=e.xTrans;e.yTrans;var a=d(e,D);return c.createElement(F,a,function(e){return c.createElement(A,{trans:r||t,transRunning:e},n)})}var K=["children","trans","className"],L=["className","transition"];function X(e){var n=e.children,t=e.trans,r=void 0===t?{}:t,a=e.className,s=d(e,K),o=r.className,h=r.transition,m=d(r,L),p=(void 0===a?"":a).concat(" ",void 0===o?"":o);return c.createElement(C,u({moveX:function(e,n,t,r,a,s,c){if(n){var o=e&&t<0?r.current:t;return k("".concat(c,"px"),o,a,s)}return"translateY(".concat(c,"px")},innerStyle2:function(e,n,t){var a=f(Object.keys(m).reduce(function(e,n){return"string"==typeof r[n]?[e[0],e[1],i(i({},e[2]),{},l({},n,m[n]))]:[i(i({},e[0]),{},l({},n,r[n][0])),i(i({},e[1]),{},l({},n,r[n][1])),e[2]]},[{},{},{}]),3),s=a[0],c=a[1],o=a[2],u=!1!==h;return i(i(i({},e?s:c),o),{},{transition:u?null==h?Object.keys(m||{}).filter(function(e){return Array.isArray(m[e])}).map(function(e){return"".concat(e," ").concat(t,"s")}).join():h:null,display:"flex",alignItems:"flex-start"})},className:p,tp:Object.keys(m).find(function(e){return Array.isArray(m[e])})},s),n)}var Y=["children","yTrans","trans","xTrans"];function H(e){var n=e.children,t=e.yTrans,r=e.trans;e.xTrans;var a=d(e,Y);return c.createElement(X,u({trans:t||r},a),function(e){return c.createElement(g,{transRunning:e},n)})}var U=["children","yTrans","xTrans","trans"];function z(e){var n=e.children,t=e.yTrans,r=e.xTrans;e.trans;var a=d(e,U);return c.createElement(X,u({trans:t},a),function(e){return c.createElement(A,{trans:r,transRunning:e},n)})}var G=["children","inner","xTrans","yTrans","trans","style"],V=["style"];function Z(e){var n=e.children,t=e.inner,r=void 0===t?{}:t;e.xTrans,e.yTrans,e.trans;var a=e.style,s=d(e,G),o=(0,c.useContext)(v),l=o.leaveMenuPanel,h=o.overMenuPanel,m=o.gap,p=o.contentWrapperRef,x=o.openedMenuIdx,_=o.dynamicWidth,y=o.panelsRef,b=o.close,j=o.btnsRef,g=o.onlyKeyFocus,w=o.prevMenuIdxRef,I=o.isKeyActive,C=o.headFocusItemInContent,k=r.style,R=d(r,V),N=c.Children.map(n,function(e,n){return(0,c.cloneElement)(e,{type:"C",orderI:n})}),F=f((0,c.useState)(0),2),M=F[0],O=F[1],S=f((0,c.useState)(0),2),P=S[0],T=S[1];return(0,c.useLayoutEffect)(function(){if(_&&x>-1){var e=y.current[x];O((null==e?void 0:e.clientWidth)||0)}if(x>-1&&b){var n=y.current[x],t=j.current[x];T(null!=t?t.offsetLeft+t.clientWidth/2-n.clientWidth/2:0)}},[x,b,_]),E(x,g,w,I,j,y,C,!0),x<0?null:c.createElement("div",u({ref:p,style:i({position:"absolute",left:0,width:_?M:"100%",visibility:_?0===M?"hidden":"visible":null,transform:b?"translate(".concat(P,"px,").concat(m,"px)"):"translateY(".concat(m,"px)")},a)},s),c.createElement("div",u({onMouseOver:h,onMouseLeave:l,style:i({width:_?M:null},k)},R),N[x]))}function q(e){var n=e.children,t=(0,c.useContext)(x).headFocusItemInContent,r=(0,c.useContext)(y);return null==t?n:(0,c.cloneElement)(n,{ref:function(e){return t.current[r]=e}})}function J(e){var n=e.children,t=(0,c.useContext)(x).tailFocusItemInContent,r=(0,c.useContext)(y);return null==t?n:(0,c.cloneElement)(n,{ref:function(e){return t.current[r]=e}})}var Q=(0,c.createContext)({}),$=(0,c.createContext)({}),ee=(0,c.createContext)({}),en=(0,c.createContext)({}),et=(0,c.createContext)(),er=(0,c.createContext)(),ea=["children"],es=["style"];function ec(e){var n=e.children,t=d(e,ea),r=(0,c.useRef)(null),a=f((0,c.useState)(),2),s=a[0],o=a[1],l=f((0,c.useState)(-1),2),h=l[0],m=l[1],p=(0,c.useRef)(-1),v=(0,c.useRef)([]),x=(0,c.useRef)([]),_=(0,c.useRef)([]),y=(0,c.useId)(),b=(0,c.useRef)([]),j=(0,c.useRef)([]);(0,c.useEffect)(function(){var e,n;s&&(h<0?v.current[p.current].focus():null===(e=x.current[h])||void 0===e||null===(n=e.focus)||void 0===n||n.call(e))},[h]);var g=t.style,E=d(t,es),w=(0,c.useMemo)(function(){return{navRef:r,expanded:s,setE:o,btnsRef:v,openedMenuIdx:h,tailFocusItemInContent:_,headFocusItemInContent:x,menuId:y}},[s,h]),I=(0,c.useMemo)(function(){return{openedMenuIdx:h,openOrCloseContentById:R,btnsRef:v,headFocusItemInContent:x,tailFocusItemInContent:_,triggerIdsRef:b,contentIdsRef:j}},[h]),C=(0,c.useMemo)(function(){return{openedMenuIdx:h}},[h]),k=(0,c.useMemo)(function(){return{setE:o,expanded:s,openOrCloseContentById:R,btnsRef:v,menuId:y}},[s]);return c.createElement(ee.Provider,{value:w},c.createElement($.Provider,{value:I},c.createElement(Q.Provider,{value:C},c.createElement(en.Provider,{value:k},c.createElement(et.Provider,{value:R},c.createElement("nav",u({"aria-label":"Main",tabIndex:-1,ref:r,style:i({position:"fixed",top:0,left:0,width:"100%",zIndex:2},g)},E),n))))));function R(e){m(function(n){return p.current=n,e})}}var eo=["children"],ei=["style"];function el(e){var n=e.children,t=d(e,eo),r=f((0,c.useState)(0),2),a=r[0],s=r[1],o=(0,c.useContext)(ee),l=o.navRef,h=o.expanded,m=o.setE,p=o.btnsRef,v=o.openedMenuIdx,x=o.tailFocusItemInContent,_=o.headFocusItemInContent,y=o.menuId,b=f((0,c.useState)(!1),2),j=b[0],g=b[1],E=(0,c.useRef)();(0,c.useEffect)(function(){var e,n;s(l.current.clientHeight),g(((e=document.createElement("div")).style.height="1dvh",document.body.appendChild(e),n=e.clientHeight>0,document.body.removeChild(e),n))},[]);var w=t.style,I=d(t,ei);return h?c.createElement("div",u({id:y,role:"dialog","aria-modal":!0,"aria-label":"Menu",tabIndex:-1,ref:E,style:i({height:"calc(100".concat(j?"d":"","vh - ").concat(a,"px)"),position:"absolute",left:0,top:"100%",width:"100%"},w),onKeyDown:function(e){if("Escape"===e.key||27===e.keyCode)m(!1);else if("Tab"===e.key||9===e.keyCode){var n=p.current.length;e.shiftKey&&e.target===E.current?(v<0?p.current.slice(-1)[0].focus():x.current[v].focus(),e.preventDefault()):e.shiftKey||e.target!==E.current?e.shiftKey&&v>-1&&e.target===_.current[v]?(x.current[v].focus(),e.preventDefault()):!e.shiftKey&&v>-1&&e.target===x.current[v]?(_.current[v].focus(),e.preventDefault()):e.shiftKey&&v<0&&e.target===p.current[0]?(p.current[n-1].focus(),e.preventDefault()):!e.shiftKey&&v<0&&e.target===p.current[n-1]&&(p.current[0].focus(),e.preventDefault()):v>-1&&(_.current[v].focus(),e.preventDefault())}}},I),n):null}var eu=["children"],ed=["style"];function ef(e){var n=e.children,t=d(e,eu),r=R(n),a=t.style,s=d(t,ed);return c.createElement("div",u({style:i({display:"flex",flexDirection:"column"},a)},s),r)}var eh=["children"],em=["style"];function ep(e){var n=e.children,t=d(e,eh),r=(0,c.useContext)(Q).openedMenuIdx,a=c.Children.map(n,function(e,n){return(0,c.cloneElement)(e,{type:"C",orderI:n})}),s=t.style,o=d(t,em);return r<0?null:c.createElement("div",u({style:i({position:"absolute",width:"100%",height:"100%",top:0},s)},o),a)}function ev(e){var n=e.children,t=e.type,r=e.orderI,a="T"===t,s=(0,c.useContext)($),o=f((0,c.useState)(),2)[1],i=s.openedMenuIdx,l=s.triggerIdsRef,u=s.contentIdsRef,d=i===r,h=(0,c.useId)();if((0,c.useEffect)(function(){i>-1&&a&&o({})},[i]),a){var m=s.openOrCloseContentById,p=s.btnsRef;l.current[r]=h;var v={id:h,"aria-controls":i>-1?u.current[r]:null,"aria-expanded":d,onClick:function(){m(d?-1:r)},ref:function(e){return p.current[r]=e}};return"function"==typeof n?n(v):(0,c.cloneElement)(n,v)}if("C"===t){if(!d)return null;var x=s.headFocusItemInContent,_=s.tailFocusItemInContent;u.current[r]=h;var y={id:h,"aria-labelledby":l.current[r]};return c.createElement(er.Provider,{value:r},"function"==typeof n?n(y,function(e){return x.current[r]=e},function(e){return _.current[r]=e}):(0,c.cloneElement)(n,y))}return c.createElement(c.Fragment,null,n)}ev.displayName="Item";var ex=["children"];function e_(e){var n=e.children,t=d(e,ex),r=(0,c.useContext)(en),a=r.setE,s=r.expanded,o=r.openOrCloseContentById,i=r.btnsRef,l=r.menuId,f=(0,c.useRef)();return(0,c.useEffect)(function(){null!=s&&(s?i.current[0].focus():f.current.focus())},[s]),c.createElement("button",u({"aria-label":s?"Close":"Menu","aria-controls":l,onClick:function(){a(!s),o(-1)},ref:f},t),null==n?s?"Expanded":"Collapsed":"function"==typeof n?n(s):n)}var ey=["children"],eb=(0,c.forwardRef)(function(e,n){var t=e.children,r=d(e,ey),a=(0,c.useContext)(et);return c.createElement("button",u({"aria-label":"Main menu",onClick:function(){return a(-1)}},r,{ref:n}),t||"Back")});function ej(e){var n=e.children,t=(0,c.useContext)($).headFocusItemInContent,r=(0,c.useContext)(er);return null==t?n:(0,c.cloneElement)(n,{ref:function(e){return t.current[r]=e}})}function eg(e){var n=e.children,t=(0,c.useContext)($).tailFocusItemInContent,r=(0,c.useContext)(er);return null==t?n:(0,c.cloneElement)(n,{ref:function(e){return t.current[r]=e}})}var eE=t(89),ew=t(5989),eI=t.n(ew),eC=(0,c.forwardRef)(function(e,n){let{dynamicWidth:t,t:a,miniBack:s,...c}=e;return(0,r.jsxs)("div",{ref:n,className:eI().wrapper,...c,style:{...c.style,width:t?400:"100%",flexShrink:0},children:[s,(0,r.jsx)("p",{className:eI().navDesc,children:a("slate_navbar_desc")}),(0,r.jsxs)("div",{className:eI().feats,children:[(0,r.jsx)(ek,{e:"\uD83C\uDF6F",t:a("smooth_t"),d:a("s_nb_smooth_d")}),(0,r.jsx)(ek,{e:"\uD83C\uDFB9",t:a("key_t"),d:(0,r.jsxs)(eE.cC,{i18nKey:"s_nb_key_d",t:a,children:["0",(0,r.jsx)("kbd",{children:"1"}),"two",(0,r.jsx)("kbd",{children:"3"}),"4"]})}),(0,r.jsx)(ek,{e:"♿️",t:a("a11y_t"),d:a("s_nb_a11y_d")}),(0,r.jsx)(ek,{e:"\uD83C\uDFA8",t:a("style_t"),d:a("s_nb_style_d")})]}),(0,r.jsx)("span",{className:eI().title,children:a("o")}),(0,r.jsxs)("ul",{className:eI().links,children:[(0,r.jsx)("li",{children:s?(0,r.jsx)("a",{id:"n-first",href:a("s_nb_doc_t1_link"),children:a("s_nb_doc_t1")}):(0,r.jsx)(q,{children:(0,r.jsx)("a",{id:"n-first",href:a("s_nb_doc_t1_link"),children:a("s_nb_doc_t1")})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:a("s_nb_doc_t2l"),children:a("s_nb_doc_t2")})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:a("s_nb_doc_t3l"),children:a("s_nb_doc_t3")})}),(0,r.jsx)("li",{children:s?(0,r.jsx)(eg,{children:(0,r.jsx)("a",{id:"n-last",href:a("s_nb_doc_t4l"),children:a("s_nb_doc_t4")})}):(0,r.jsx)(J,{children:(0,r.jsx)("a",{id:"n-last",href:a("s_nb_doc_t4l"),children:a("s_nb_doc_t4")})})})]})]})});function ek(e){let{e:n,t,d:a}=e;return(0,r.jsxs)("div",{className:eI().feat,children:[(0,r.jsx)("div",{className:eI().icon_wrap,children:n}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:eI().title,children:t}),(0,r.jsx)("div",{className:eI().desc,children:a})]})]})}var eR=t(4827),eN=t.n(eR);function eF(e){let{dynamicWidth:n,t,miniBack:a,p:s,head:c,tail:o}=e;return(0,r.jsxs)("div",{className:eN().wrapper,...s,style:{...s.style,width:n?320:"100%",flexShrink:0},children:[a,(0,r.jsx)("p",{className:eN().desc,children:(0,r.jsxs)(eE.cC,{i18nKey:"s_mforever_desc",t:t,children:[(0,r.jsx)("a",{id:"m-first",href:"https://github.com/wswmsword/postcss-mobile-forever",ref:a?null:c,children:"zero"}),"1",(0,r.jsx)("a",{href:"https://github.com/wswmsword/scale-view",children:"2"}),"3"]})}),(0,r.jsxs)("ul",{className:eN().links,children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://wswmsword.github.io/examples/mobile-forever/vanilla/",children:t("s_mf_doc_t1")})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/wswmsword/postcss-mobile-forever?tab=readme-ov-file#%E7%A7%BB%E5%8A%A8%E7%AB%AF%E6%A8%A1%E7%89%88%E5%92%8C%E8%8C%83%E4%BE%8B",children:t("s_mf_doc_t2")})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/wswmsword/postcss-mobile-forever?tab=readme-ov-file#%E5%AE%89%E8%A3%85",children:t("s_mf_doc_t3")})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/wswmsword/postcss-mobile-forever?tab=readme-ov-file#%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0",children:t("s_mf_doc_t4")})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://github.com/wswmsword/postcss-mobile-forever?tab=readme-ov-file#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E4%B8%8E%E5%8F%82%E4%B8%8E%E5%BC%80%E5%8F%91",children:t("s_mf_doc_t5")})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{ref:o,id:"m-last",href:"https://github.com/wswmsword/postcss-mobile-forever?tab=readme-ov-file#%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA%E8%8C%83%E4%BE%8B%E5%92%8C%E5%8E%9F%E7%90%86",children:t("s_mf_doc_t6")})})]})]})}var eM=t(1405),eO=t.n(eM),eS=(0,c.forwardRef)(function(e,n){let{dynamicWidth:t,t:a,className:s,miniBack:c,...o}=e;return(0,r.jsxs)(r.Fragment,{children:[c&&(0,r.jsx)("div",{className:eO().bkWrapper,children:c}),(0,r.jsxs)("ul",{ref:n,className:"".concat(eO().wrapper," ").concat(s),...o,style:{...o.style,width:t?480:"100%",flexShrink:0},children:[(0,r.jsx)("li",{children:c?(0,r.jsx)(eP,{id:"f-first",href:"https://wswmsword.github.io/examples/focus-fly/#h-hot",t:a("s_ffly_t1"),d:a("s_ffly_d1")}):(0,r.jsx)(q,{children:(0,r.jsx)(eP,{id:"f-first",href:"https://wswmsword.github.io/examples/focus-fly/#h-hot",t:a("s_ffly_t1"),d:a("s_ffly_d1")})})}),(0,r.jsx)("li",{children:(0,r.jsx)(eP,{href:"https://wswmsword.github.io/examples/focus-fly/#h-dialog",t:a("s_ffly_t2"),d:a("s_ffly_d2")})}),(0,r.jsx)("li",{children:(0,r.jsx)(eP,{href:"https://wswmsword.github.io/examples/focus-fly/#h-nav",t:a("s_ffly_t3"),d:a("s_ffly_d3")})}),(0,r.jsx)("li",{children:(0,r.jsx)(eP,{href:"https://wswmsword.github.io/examples/focus-fly/#h-tabs",t:a("s_ffly_t4"),d:a("s_ffly_d4")})}),(0,r.jsx)("li",{children:(0,r.jsx)(eP,{href:"https://wswmsword.github.io/examples/focus-fly/#h-player",t:a("s_ffly_t5"),d:a("s_ffly_d5")})}),(0,r.jsx)("li",{children:c?(0,r.jsx)(eg,{children:(0,r.jsx)(eP,{id:"f-last",href:"https://wswmsword.github.io/examples/focus-fly/#h-scroll",t:a("s_ffly_t6"),d:a("s_ffly_d6")})}):(0,r.jsx)(J,{children:(0,r.jsx)(eP,{id:"f-last",href:"https://wswmsword.github.io/examples/focus-fly/#h-scroll",t:a("s_ffly_t6"),d:a("s_ffly_d6")})})})]})]})});let eP=(0,c.forwardRef)(function(e,n){let{href:t,t:a,d:s,id:c}=e;return(0,r.jsxs)("a",{href:t,ref:n,id:c,children:[(0,r.jsx)("div",{className:eO().title,children:a}),(0,r.jsx)("div",{className:eO().desc,children:s})]})});function eT(e){let{mini:n,small:t,onlyKeyFocus:a,dynamicWidth:o,close:i,t:l,motion:u,hasCustomXTrans:d,hasCustomYTrans:f}=e,[h,m]=(0,c.useState)(!1);return(0,r.jsxs)("div",{className:"".concat(s().header," ").concat(null==n?"":n?s().hide:s().show),children:[(0,r.jsxs)(j,{className:s().nav,gap:t?0:16,onlyKeyFocus:a,dur:.4,dynamicWidth:o,close:i,children:[(0,r.jsxs)(T,{className:s().triggerWrapper,children:[(0,r.jsx)("a",{href:"https://github.com/wswmsword/hanav",className:s().navLink,children:"Repo"}),(0,r.jsx)(S,{children:(0,r.jsx)("button",{className:s().navBtn,children:"Hanav"})}),(0,r.jsx)(S,{children:(0,r.jsxs)("button",{className:s().navBtn,children:[(0,r.jsx)("span",{className:s().onlyDesktop,children:"Postcss-"}),"Mobile-Forever"]})}),(0,r.jsx)(S,{children:(0,r.jsx)("button",{className:s().navBtn,children:"Focus-Fly"})})]}),(0,r.jsxs)(u?d&&f?z:d?W:f?H:O:Z,{id:"menu_container",className:s().panelsWrapperInner,xTrans:{opacity:[0,1],transform:["translate(0)","translateX(-280px)","translateX(280px)"]},yTrans:{opacity:[0,1],transform:["rotateX(-30deg) scale(.9)","rotateX(0deg) scale(1)"],transformOrigin:"top center"},onExpanding:()=>m(!0),onCollapsing:()=>m(!1),children:[(0,r.jsx)(S,{children:(0,r.jsx)(eC,{t:l,dynamicWidth:o})}),(0,r.jsx)(S,{children:(e,n,t)=>(0,r.jsx)(eF,{p:e,head:n,tail:t,t:l,dynamicWidth:o})}),(0,r.jsx)(S,{children:(0,r.jsx)(eS,{t:l,className:s().mobileFfSlate,dynamicWidth:o})})]})]}),(0,r.jsx)("div",{className:"".concat(s().blurBg," ").concat(h?s().showBlur:"")})]})}var eB=t(7138);function eA(e){let{mini:n,lowerCaseLng:t,t:a}=e;return(0,r.jsxs)(ec,{className:"".concat(s().miniNav," ").concat(null==n?"":n?s().showFlex:s().hide),children:[(0,r.jsx)("a",{className:s().logoLink,href:"https://github.com/wswmsword/hanav",children:"Hanav Repo"}),(0,r.jsxs)("div",{className:s().right,children:["en"===t?(0,r.jsx)(eB.default,{href:"/zh-cn",className:s().lang_switch,lang:"zh-CN",children:"简体中文"}):(0,r.jsx)(eB.default,{href:"/en",className:s().lang_switch,lang:"en",children:"English"}),(0,r.jsx)(e_,{className:s().toggle,children:e=>(0,r.jsx)("span",{className:"".concat(s().toggleIcon," ").concat(e?s().opened:"")})})]}),(0,r.jsxs)(el,{className:s().miniMenu,children:[(0,r.jsxs)(ef,{className:s().miniTriggerWrapper,children:[(0,r.jsx)(ev,{children:(0,r.jsx)("button",{className:s().miniTrigger,children:"Hanav"})}),(0,r.jsx)(ev,{children:(0,r.jsx)("button",{children:"Postcss-Mobile-Forever"})}),(0,r.jsx)(ev,{children:(0,r.jsx)("button",{children:"Focus-Fly"})})]}),(0,r.jsxs)(ep,{className:s().miniContent,children:[(0,r.jsx)(ev,{children:(0,r.jsx)(eC,{t:a,miniBack:c("Hanav")})}),(0,r.jsx)(ev,{children:(e,n,t)=>(0,r.jsx)(eF,{p:e,head:n,tail:t,t:a,miniBack:c("Mobile-Forever")})}),(0,r.jsx)(ev,{children:(0,r.jsx)(eS,{t:a,miniBack:c("Focus-Fly")})})]})]})]});function c(e){return(0,r.jsx)(ej,{children:(0,r.jsxs)(eb,{className:s().miniBack,children:[(0,r.jsx)("span",{className:s().backIcon}),e]})})}}var eD=t(9853),eW=t.n(eD);function eK(e){let{children:n,className:t,...a}=e;return(0,r.jsx)("div",{className:"".concat(eW().centerBox," ").concat(t),...a,children:n})}var eL=t(6027),eX=t(4312),eY=t(4583);let eH="zh-CN",eU=[eH,"en"];function ez(e){let{lng:n,lowerCaseLng:t}=e,[a,o]=(0,c.useState)(!0),[i,l]=(0,c.useState)(!1),[u,d]=(0,c.useState)(!1),[f,h]=(0,c.useState)(!0),[m,p]=(0,c.useState)(!1),[v,x]=(0,c.useState)(!1),[_,y]=(0,c.useState)(null),[b,j]=(0,c.useState)(!1),{t:g}=function(e,n,t){let r=(0,eE.$G)(void 0,void 0),{i18n:a}=r;{let[n,t]=(0,c.useState)(a.resolvedLanguage);(0,c.useEffect)(()=>{n!==a.resolvedLanguage&&t(a.resolvedLanguage)},[n,a.resolvedLanguage]),(0,c.useEffect)(()=>{e&&a.resolvedLanguage!==e&&a.changeLanguage(e)},[e,a])}return r}(n);return(0,c.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)");t(e),e.addListener(t);let n=window.matchMedia("(max-width: 520px)");return r(n),n.addListener(r),()=>{e.removeListener(t),n.removeListener(r)};function t(e){o(!e.matches)}function r(e){y(e.matches),j(e.matches)}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(eT,{mini:_,small:b,onlyKeyFocus:f,dynamicWidth:i,close:u,t:g,motion:a,hasCustomXTrans:v,hasCustomYTrans:m}),(0,r.jsx)(eA,{mini:_,lowerCaseLng:t,t:g}),(0,r.jsx)("div",{className:"".concat(s().placeholder," ").concat(null==_?"":_?s().smallPlaceholder:"")}),(0,r.jsxs)(eK,{className:s().form,children:[(0,r.jsxs)("label",{className:s().formItem,children:[(0,r.jsx)("input",{type:"checkbox",checked:_||!1,onChange:()=>y(e=>!e)})," ",g("mini")]}),(0,r.jsxs)("label",{className:s().formItem,children:[(0,r.jsx)("input",{disabled:_,type:"checkbox",checked:v,onChange:()=>x(e=>!e)})," xTrans"]}),(0,r.jsxs)("label",{className:s().formItem,children:[(0,r.jsx)("input",{disabled:_,type:"checkbox",checked:m,onChange:()=>p(e=>!e)})," yTrans"]}),(0,r.jsxs)("label",{className:s().formItem,children:[(0,r.jsx)("input",{disabled:_,type:"checkbox",checked:i,onChange:()=>l(e=>!e)})," dynamicWidth"]}),(0,r.jsxs)("label",{className:s().formItem,children:[(0,r.jsx)("input",{disabled:_,type:"checkbox",checked:u,onChange:()=>d(e=>!e)})," close"]}),(0,r.jsxs)("label",{className:s().formItem,children:[(0,r.jsx)("input",{disabled:_,type:"checkbox",checked:f,onChange:()=>h(e=>!e)})," onlyKeyFocus"]}),(0,r.jsxs)("div",{className:s().motionWrapper,children:[(0,r.jsxs)("label",{className:s().formItem,title:g("tooltip"),children:[(0,r.jsx)("input",{disabled:_,type:"checkbox",checked:a,onChange:()=>o(e=>!e)})," ",g("motion")]}),(0,r.jsx)("span",{className:s().tooltip,role:"presentation",children:(0,r.jsxs)(eE.cC,{i18nKey:"tooltip2",t:g,children:["0",(0,r.jsx)("a",{className:s().tLink,href:"https://stackoverflow.com/a/59709067",children:"1"}),"2"]})})]}),(0,r.jsx)("a",{href:"https://codesandbox.io/p/sandbox/rn6r6d",children:(0,r.jsx)("img",{alt:"Edit hanav-demo",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})})]})]})}eL.ZP.use(eE.Db).use(eY.Z).use((0,eX.Z)(e=>t(1648)("./".concat(e.toLowerCase(),".json")))).init({...function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:eH;return{supportedLngs:eU,fallbackLng:eH,lng:e}}(),lng:void 0,detection:{order:["path","htmlTag","cookie","navigator"]},preload:[]})},2216:function(){},9853:function(e){e.exports={centerBox:"center-box_centerBox__RU4Zh"}},1405:function(e){e.exports={bkWrapper:"focus-fly-slate_bkWrapper__bmlcW",wrapper:"focus-fly-slate_wrapper__aYgZU",title:"focus-fly-slate_title__iW8iQ",desc:"focus-fly-slate_desc__Kw_t_"}},1078:function(e){e.exports={footer:"footer_footer__UBABY",hana:"footer_hana__tPLoU"}},6486:function(e){e.exports={header:"header_header__EGZ8i",placeholder:"header_placeholder__rNwHu",smallPlaceholder:"header_smallPlaceholder__8fFta",nav:"header_nav__e_E6s",triggerWrapper:"header_triggerWrapper__hB0bD",navBtn:"header_navBtn__AaVGW",navLink:"header_navLink__eccX4",panelsWrapperInner:"header_panelsWrapperInner__d_55F",form:"header_form__3M_lw",formItem:"header_formItem__0c2N1",motionWrapper:"header_motionWrapper__cT1zi",tooltip:"header_tooltip__poyxw",tLink:"header_tLink__Y_yvc",lang_switch:"header_lang_switch__JCaRL",miniNav:"header_miniNav__Bts_s",logoLink:"header_logoLink__HH6j3",right:"header_right__WdQXR",toggle:"header_toggle__nVE4v",toggleIcon:"header_toggleIcon__CvDDb",opened:"header_opened___76KN",miniMenu:"header_miniMenu__Kzucx",miniContent:"header_miniContent__w9lXj",miniTriggerWrapper:"header_miniTriggerWrapper__te2V9",hide:"header_hide__QuldK",show:"header_show__PxVXN",showFlex:"header_showFlex__7sOUI",miniBack:"header_miniBack__I6EtU",backIcon:"header_backIcon__GpJwK",blurBg:"header_blurBg__Ojy7_",showBlur:"header_showBlur___uqP4",onlyDesktop:"header_onlyDesktop__gFGVG",mobileFfSlate:"header_mobileFfSlate__khNmx"}},4827:function(e){e.exports={wrapper:"mobile-forever-slate_wrapper__4btBM",desc:"mobile-forever-slate_desc__W2IF8",links:"mobile-forever-slate_links__UkDDa"}},5989:function(e){e.exports={wrapper:"navbar-slate_wrapper__5uxCE",feats:"navbar-slate_feats__XXcxF",navDesc:"navbar-slate_navDesc__8fOMF",feat:"navbar-slate_feat__LtSAC",icon_wrap:"navbar-slate_icon_wrap__bCjjy",title:"navbar-slate_title__WDP_e",desc:"navbar-slate_desc__EJAGs",links:"navbar-slate_links__VYlKO"}}},function(e){e.O(0,[514,916,971,23,744],function(){return e(e.s=670)}),_N_E=e.O()}]);