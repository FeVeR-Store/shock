(function(){"use strict";var e={7395:function(e,t,n){var r=n(2371),o=n(6901),i=n(8146),l=n(7348),a=n(5580);const u=(0,o._)("span",null,"写在前面",-1),d=(0,o._)("span",null,"hello World!",-1),c=(0,o._)("span",null,"代码结构与api",-1),s=(0,o._)("span",null,"变量与常量",-1);var f={__name:"asideMenu",setup(e){const t=(0,i.iH)("/");return window.activePage=t,(e,n)=>{const r=(0,o.up)("icon-menu"),f=(0,o.up)("document");return(0,o.wg)(),(0,o.j4)((0,i.SU)(l.Q8),{"default-active":t.value,class:"el-menu",onOpen:e.handleOpen,onClose:e.handleClose,router:!0,style:{"border-right":"none",padding:"20px"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,i.SU)(l.E_),{index:"/"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,i.SU)(a.gn),null,{default:(0,o.w5)((()=>[(0,o.Wm)(r)])),_:1}),u])),_:1}),(0,o.Wm)((0,i.SU)(l.E_),{index:"/helloworld"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,i.SU)(a.gn),null,{default:(0,o.w5)((()=>[(0,o.Wm)(r)])),_:1}),d])),_:1}),(0,o.Wm)((0,i.SU)(l.E_),{index:"/apiAndStructure"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,i.SU)(a.gn),null,{default:(0,o.w5)((()=>[(0,o.Wm)(r)])),_:1}),c])),_:1}),(0,o.Wm)((0,i.SU)(l.E_),{index:"/varandconst"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,i.SU)(a.gn),null,{default:(0,o.w5)((()=>[(0,o.Wm)(f)])),_:1}),s])),_:1})])),_:1},8,["default-active","onOpen","onClose"])}}};const p=f;var h=p,m=n(3265),v=n(678),g=n(1343),w=n(1659),b={__name:"shockHelp",setup(e){const{x:t,y:n}=(0,g.iiK)({type:"client"}),{element:r}=(0,g.dOX)({x:t,y:n}),l=(0,i.iH)(r.value),a=(0,i.qj)((0,g.rBN)(l)),u=(0,g.arn)("Control"),d=(0,i.iH)(),c=(0,i.qj)((0,g.rBN)(d));(0,g.ORN)("scroll",a.update,!0);const s=(0,o.Fl)((()=>{var e=function(t){return null==t?[]:t.dataset.help?((0,w.t8)(l,t),[...t.dataset.help.split("|"),t]):e(t.parentElement)};return e(r.value)})),f=(0,o.Fl)((()=>u.value&&r.value&&s.value?{display:"block",width:`${a.width+5}px`,height:`${a.height+5}px`,left:a.left-2.5+"px",top:a.top-2.5+"px",transition:"all 0.05s linear",position:"fixed","z-index":9999,border:"2px dashed var(--el-color-primary)",backgroundColor:"rgba(var(--el-color-primary-rgb), 0.2)","border-radius":"0.2rem","pointer-events":"none"}:{display:"none"})),p=(0,o.Fl)((()=>({width:"400px",left:`${innerWidth-t.value<422.5?innerWidth-420:t.value+10}px`,top:`${innerHeight-n.value<c.height+22.5?innerHeight-c.height-20:n.value+10}px`,position:"fixed","z-index":9998}))),h=(0,o.Fl)((()=>({transform:`translate(calc(${t.value}px - 50%), calc(${n.value}px - 50%))`})));return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,i.SU)(u)&&0!=(0,i.SU)(s).length?((0,o.wg)(),(0,o.iD)("div",{key:0,style:(0,m.j5)((0,i.SU)(f))},[(0,o._)("div",{ref_key:"card",ref:d,style:(0,m.j5)((0,i.SU)(p))},[(0,o.Wm)((0,i.SU)(v.Kf),{header:(0,i.SU)(s)[0],style:{width:"100%",height:"100%"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)((0,i.SU)(s)[1]),1)])),_:1},8,["header"])],4)],4)):(0,o.kq)("",!0),(0,o._)("div",{style:(0,m.j5)((0,i.SU)(h))},null,4)],64))}};const y=b;var _=y,S=n(4899);const x={class:"common-layout"},k=["src"],U={style:{float:"left"}},W=["src"],E=(0,o._)("div",{style:{float:"left",margin:"35px","font-size":"30px"}}," Design by FeVeR ",-1);var C={__name:"App",setup(e){const t=n(6949),r=n(3580);return(e,n)=>{const l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",x,[(0,o.Wm)((0,i.SU)(S.G4),{style:{height:"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,i.SU)(S.nZ),{style:{border:"1px solid var(--el-border-color)"}},{default:(0,o.w5)((()=>[(0,o._)("img",{src:(0,i.SU)(t),style:{float:"left",margin:"8px",height:"44px","margin-left":"30px"}},null,8,k)])),_:1}),(0,o.Wm)((0,i.SU)(S.G4),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,i.SU)(S.$w),null,{default:(0,o.w5)((()=>[(0,o.Wm)(h)])),_:1}),(0,o.Wm)((0,i.SU)(S.G4),null,{default:(0,o.w5)((()=>[(0,o.Wm)((0,i.SU)(S.b2),null,{default:(0,o.w5)((()=>[(0,o.Wm)(l)])),_:1}),(0,o.Wm)((0,i.SU)(S.F_),{style:{"margin-bottom":"100px"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,i.SU)(v.Kf),{"body-style":"padding:0"},{default:(0,o.w5)((()=>[(0,o._)("div",U,[(0,o._)("img",{height:"100",src:(0,i.SU)(r)},null,8,W)]),E])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(_)])}}};const O=C;var j=O,P=n(341);n(3674),n(2754);const A=()=>Promise.all([n.e(188),n.e(40)]).then(n.bind(n,1294)),N=()=>Promise.all([n.e(188),n.e(907),n.e(54)]).then(n.bind(n,6851)),F=()=>n.e(840).then(n.bind(n,6840)),T=()=>Promise.all([n.e(188),n.e(907),n.e(432)]).then(n.bind(n,4623));var $=[{path:"/",component:F},{path:"/helloWorld",component:A},{path:"/varAndConst",component:N},{path:"/apiAndStructure",component:T}];const H=(0,P.p7)({history:(0,P.r5)(),routes:$});(0,r.ri)(j).use(H).mount("#app");const z=(0,g.y$C)("last-url");setTimeout((()=>{H.replace(z.value)}),500),window.router=H,H.beforeEach(((e,t)=>{"/"==t.fullPath&&t.fullPath==e.path||(z.value=e.path,window.activePage&&(window.activePage.value=e.path),window.setEditorCallback=[])})),window.resizeCallback=[function(){document.documentElement.style.setProperty("--page-height",`${innerHeight}px`),document.documentElement.style.setProperty("--page-width",`${innerWidth}px`)}],window.setEditorCallback=[],window.setEditor=()=>{window.setEditorCallback.forEach((e=>{e()}))},onresize=()=>{window.resizeCallback.forEach((e=>{e()}))},onresize(),document.documentElement.className="dark theme"},3580:function(e,t,n){e.exports=n.p+"img/fever.2530d7f3.jpg"},6949:function(e,t,n){e.exports=n.p+"img/logo.54ce1491.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var l=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,i<l&&(l=i));if(a){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{40:"9623c4db",54:"70c23a35",188:"68a08e23",432:"d88ead9b",840:"f7831541",907:"0ebc0f86"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{40:"8adafe6b",54:"8adafe6b",432:"8adafe6b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="shock:";n.l=function(r,o,i,l){if(e[r])e[r].push(o);else{var a,u;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var s=d[c];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){a=s;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var l=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var l=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=l,u.request=a,i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=l,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){o=l[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var l=n.miniCssF(r),a=n.p+l;if(t(l,a))return o();e(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={40:1,54:1,432:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var l=n.p+n.u(t),a=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",a.name="ChunkLoadError",a.type=i,a.request=l,o[1](a)}};n.l(l,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,l=r[0],a=r[1],u=r[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var c=u(n)}for(t&&t(r);d<l.length;d++)i=l[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkshock"]=self["webpackChunkshock"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7395)}));r=n.O(r)})();
//# sourceMappingURL=app.dc6dd4bd.js.map