import"./index-3f2f397a.js";import{p as w,f as G}from"./index-ea7dbccc.js";function u(t,e){const n=[],r=~~(e/8),o=e%8;for(let x=0,c=t.length;x<c;x++)n[x]=(t[(x+r)%c]<<o&255)+(t[(x+r+1)%c]>>>8-o&255);return n}function l(t,e){const n=[];for(let r=t.length-1;r>=0;r--)n[r]=(t[r]^e[r])&255;return n}function g(t,e){const n=[];for(let r=t.length-1;r>=0;r--)n[r]=t[r]&e[r]&255;return n}function P(t,e){const n=[];for(let r=t.length-1;r>=0;r--)n[r]=(t[r]|e[r])&255;return n}function a(t,e){const n=[];let r=0;for(let o=t.length-1;o>=0;o--){const x=t[o]+e[o]+r;x>255?(r=1,n[o]=x&255):(r=0,n[o]=x&255)}return n}function j(t){const e=[];for(let n=t.length-1;n>=0;n--)e[n]=~t[n]&255;return e}function k(t){return l(l(t,u(t,9)),u(t,17))}function B(t){return l(l(t,u(t,15)),u(t,23))}function C(t,e,n,r){return r>=0&&r<=15?l(l(t,e),n):P(P(g(t,e),g(t,n)),g(e,n))}function E(t,e,n,r){return r>=0&&r<=15?l(l(t,e),n):P(g(t,e),g(j(t),n))}function H(t,e){const n=[],r=[];for(let s=0;s<16;s++){const T=s*4;n.push(e.slice(T,T+4))}for(let s=16;s<68;s++)n.push(l(l(B(l(l(n[s-16],n[s-9]),u(n[s-3],15))),u(n[s-13],7)),n[s-6]));for(let s=0;s<64;s++)r.push(l(n[s],n[s+4]));const o=[121,204,69,25],x=[122,135,157,138];let c=t.slice(0,4),h=t.slice(4,8),f=t.slice(8,12),i=t.slice(12,16),p=t.slice(16,20),d=t.slice(20,24),b=t.slice(24,28),A=t.slice(28,32),S,m,y,F;for(let s=0;s<64;s++){const T=s>=0&&s<=15?o:x;S=u(a(a(u(c,12),p),u(T,s)),7),m=l(S,u(c,12)),y=a(a(a(C(c,h,f,s),i),m),r[s]),F=a(a(a(E(p,d,b,s),A),S),n[s]),i=f,f=u(h,9),h=c,c=y,A=b,b=u(d,19),d=p,p=k(F)}return l([].concat(c,h,f,i,p,d,b,A),t)}function I(t){let e=t.length*8,n=e%512;n=n>=448?512-n%448-1:448-n-1;const r=new Array((n-7)/8);for(let f=0,i=r.length;f<i;f++)r[f]=0;const o=[];e=e.toString(2);for(let f=7;f>=0;f--)if(e.length>8){const i=e.length-8;o[f]=parseInt(e.substr(i),2),e=e.substr(0,i)}else e.length>0?(o[f]=parseInt(e,2),e=""):o[f]=0;const x=[].concat(t,[128],r,o),c=x.length/64;let h=[115,128,22,111,73,20,178,185,23,36,66,215,218,138,6,0,169,111,48,188,22,49,56,170,227,141,238,77,176,251,14,78];for(let f=0;f<c;f++){const i=64*f,p=x.slice(i,i+64);h=H(h,p)}return h}function M(t){return t.map(e=>(e=e.toString(16),e.length===1?"0"+e:e)).join("")}function D(t){const e=[];for(let n=0,r=t.length;n<r;n++){const o=t.codePointAt(n);if(o<=127)e.push(o);else if(o<=2047)e.push(192|o>>>6),e.push(128|o&63);else if(o<=55295||o>=57344&&o<=65535)e.push(224|o>>>12),e.push(128|o>>>6&63),e.push(128|o&63);else if(o>=65536&&o<=1114111)n++,e.push(240|o>>>18&28),e.push(128|o>>>12&63),e.push(128|o>>>6&63),e.push(128|o&63);else throw e.push(o),new Error("input is not supported")}return e}function W(t){return t=typeof t=="string"?D(t):Array.prototype.slice.call(t),M(I(t))}function q(t){const e=String(t||"");return w.test(e)||G.test(e)?e.substr(0,3)+"****"+e.substr(7):e}function v(t){return W(t)}export{v as d,q as h};