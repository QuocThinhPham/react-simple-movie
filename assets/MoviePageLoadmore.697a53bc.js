import{r as v,u as te,c as H,j as g}from"./vendor.c33075e5.js";import{t as k,f as re,B as ne}from"./index.6682a3f5.js";import{M as ae,a as se}from"./MovieCard.1cd69b08.js";function ie(e,u=500){const[r,s]=v.exports.useState(e);return v.exports.useEffect(()=>{const n=setTimeout(()=>s(e),u);return()=>clearTimeout(n)},[e,u]),r}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var A=function(){return A=Object.assign||function(u){for(var r,s=1,n=arguments.length;s<n;s++){r=arguments[s];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(u[t]=r[t])}return u},A.apply(this,arguments)};function ue(e,u,r,s){function n(t){return t instanceof r?t:new r(function(o){o(t)})}return new(r||(r=Promise))(function(t,o){function i(f){try{a(s.next(f))}catch(b){o(b)}}function h(f){try{a(s.throw(f))}catch(b){o(b)}}function a(f){f.done?t(f.value):n(f.value).then(i,h)}a((s=s.apply(e,u||[])).next())})}function oe(e,u){var r={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},s,n,t,o;return o={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function i(a){return function(f){return h([a,f])}}function h(a){if(s)throw new TypeError("Generator is already executing.");for(;r;)try{if(s=1,n&&(t=a[0]&2?n.return:a[0]?n.throw||((t=n.return)&&t.call(n),0):n.next)&&!(t=t.call(n,a[1])).done)return t;switch(n=0,t&&(a=[a[0]&2,t.value]),a[0]){case 0:case 1:t=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,n=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(t=r.trys,!(t=t.length>0&&t[t.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!t||a[1]>t[0]&&a[1]<t[3])){r.label=a[1];break}if(a[0]===6&&r.label<t[1]){r.label=t[1],t=a;break}if(t&&r.label<t[2]){r.label=t[2],r.ops.push(a);break}t[2]&&r.ops.pop(),r.trys.pop();continue}a=u.call(e,r)}catch(f){a=[6,f],n=0}finally{s=t=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}var le=function(){},Q=le(),B=Object,x=function(e){return e===Q},W=function(e){return typeof e=="function"},ce="undefined",fe=function(){return typeof window!=ce},ve=!fe()||"Deno"in window,X=ve?v.exports.useEffect:v.exports.useLayoutEffect,$=new WeakMap,de=0,K=function(e){var u=typeof e,r=e&&e.constructor,s=r==Date,n,t;if(B(e)===e&&!s&&r!=RegExp){if(n=$.get(e),n)return n;if(n=++de+"~",$.set(e,n),r==Array){for(n="@",t=0;t<e.length;t++)n+=K(e[t])+",";$.set(e,n)}if(r==B){n="#";for(var o=B.keys(e).sort();!x(t=o.pop());)x(e[t])||(n+=t+":"+K(e[t])+",");$.set(e,n)}}else n=s?e.toJSON():u=="symbol"?e.toString():u=="string"?JSON.stringify(e):""+e;return n},U=function(e){if(W(e))try{e=e()}catch{e=""}var u=[].concat(e);e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?K(e):"";var r=e?"$swr$"+e:"";return[e,u,r]},he=function(e){return W(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}]},pe=function(e,u){return function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];var n=he(r),t=n[0],o=n[1],i=n[2],h=(i.use||[]).concat(u);return e(t,o,A(A({},i),{use:h}))}},me="$inf$",ge=function(e){return U(e?e(0,null):null)[0]},be=function(e){return function(u,r,s){var n=v.exports.useState({})[1],t=v.exports.useRef(!1),o=v.exports.useRef(),i=s.cache,h=s.initialSize,a=h===void 0?1:h,f=s.revalidateAll,b=f===void 0?!1:f,L=s.persistSize,M=L===void 0?!1:L,C=s.revalidateFirstPage,O=C===void 0?!0:C,d=s.revalidateOnMount,I=d===void 0?!1:d,w=null;try{w=ge(u)}catch{}var y=null,S=null;w&&(y="$ctx$"+w,S="$len$"+w);var D=v.exports.useCallback(function(){var l=i.get(S);return x(l)?a:l},[S,a]),J=v.exports.useRef(D());X(function(){if(!t.current){t.current=!0;return}w&&i.set(S,M?J.current:a)},[w]);var Y=I&&!t.current,E=e(w?me+w:null,function(){return ue(void 0,void 0,void 0,function(){var l,c,p,m,z,N,P,T,_,V,R,G;return oe(this,function(F){switch(F.label){case 0:l=i.get(y)||[],c=l[0],p=l[1],m=[],z=D(),N=null,P=0,F.label=1;case 1:return P<z?(T=U(u(P,N)),_=T[0],V=T[1],_?(R=i.get(_),G=b||c||x(R)||O&&!P&&!x(o.current)||Y||p&&!x(p[P])&&!s.compare(p[P],R),r&&G?[4,r.apply(void 0,V)]:[3,3]):[3,5]):[3,5];case 2:R=F.sent(),i.set(_,R),F.label=3;case 3:m.push(R),N=R,F.label=4;case 4:return++P,[3,1];case 5:return i.delete(y),[2,m]}})})},s);X(function(){o.current=E.data},[E.data]);var j=v.exports.useCallback(function(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];var p=l[0],m=l[1]!==!1;if(!!y){if(m)if(x(p))i.set(y,[!0]);else{var z=o.current;i.set(y,[!1,z])}return l.length?E.mutate(p,m):E.mutate()}},[y]),Z=function(l){for(var c=[],p=null,m=0;m<l;++m){var z=U(u(m,p))[0],N=z?i.get(z):Q;if(x(N))return o.current;c.push(N),p=N}return c},ee=v.exports.useCallback(function(l){if(!!S){var c;if(W(l)?c=l(D()):typeof l=="number"&&(c=l),typeof c=="number")return i.set(S,c),J.current=c,n({}),j(Z(c))}},[S,D,j]);return{size:D(),setSize:ee,mutate:j,get error(){return E.error},get data(){return E.data},get isValidating(){return E.isValidating}}}},we=pe(te,be);const q=20,Ee=()=>{var C,O;const[e,u]=v.exports.useState(1),[r,s]=v.exports.useState(k.getMovieList("popular",e)),[n,t]=v.exports.useState(""),o=ie(n),{data:i,error:h,size:a,setSize:f}=we(d=>r.replace("page=1",`page=${d+1}`),re);v.exports.useEffect(()=>{s(o?k.getMovieSearch(o,e):k.getMovieList("popular",e))},[o,e]);const b=i?i.reduce((d,I)=>d.concat(I.results),[]):[],M=((C=i==null?void 0:i[0])==null?void 0:C.results.length)===0||i&&((O=i[i.length-1])==null?void 0:O.results.length)<q;return console.log(M),H("div",{className:"py-5 page-container",children:[H("div",{className:"flex items-center",children:[g("div",{className:"flex-1",children:g("input",{type:"text",className:"w-full p-4 bg-slate-800 outline-none tracking-widest",placeholder:"Type here to search...",value:n,onChange:d=>t(d.target.value)})}),g("button",{className:"p-4 bg-indianred text-white",children:g("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),g("div",{className:"grid grid-cols-4 gap-10 mt-10",children:!i&&!h?new Array(q).fill(0).map((d,I)=>g(ae,{},I)):b&&b.map(d=>g(se,{movie:d},d.id))}),g("div",{className:"mt-10",children:g(ne,{primary:!0,className:`block mx-auto w-1/4 ${M?"disabled:bg-slate-500 cursor-no-drop":""}`,onClick:()=>M?{}:f(a+1),disabled:M,children:"Load more"})})]})};export{Ee as default};