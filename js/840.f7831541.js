"use strict";(self["webpackChunkshock"]=self["webpackChunkshock"]||[]).push([[840],{6840:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var s=l(6901),n=l(8146),a=l(1343),i=l(5572);const o=(0,s._)("div",{class:"h-1",style:{"margin-bottom":"20px"}},"写在前面 · Preface",-1),c=(0,s._)("p",null," 你好，我是shock，你可以叫我小勺，我是毕业于“好家伙这东西这么厉害魔法职业学院”的高材生，可以用简单的代码实现神奇的效果。好奇吧，想学吧，嘿嘿，不用说我就知道。放心，我可以教你。 ",-1),r=(0,s._)("p",null," 由于我是第一次讲课，写出的东西肯定不全面，所以如果有什么看不懂的代码，按下 Ctrl 键再把鼠标指上去，我就仔细给你讲讲。 ",-1),u=(0,s._)("p",null,"如果准备好了的话我们就继续吧，希望我们可以相处融洽。",-1);var f={__name:"beforeEverything",setup(e){return(0,a.ltg)("hash").index=0,(e,t)=>((0,s.wg)(),(0,s.iD)("div",null,[o,c,r,u,(0,s.Wm)((0,n.SU)(i.v),null,{default:(0,s.w5)((()=>[(0,s.Uk)(" 由于采用了国外的托管平台，网站的加载速度可能不尽人意，并且由于Monaco编辑器使用webpack打包后出现了各种各样的bug，所以采用了将其作为静态资源加载的方式引入，在这两个因素的联合作用下，可能会出现诸如编辑器加载不出来（静态资源加载慢，组件创建编辑器时还没有注入，导致调用的api仍为undefined，无法创建编辑器），格式错乱（编辑器第一次代码格式化失败）等问题，在浏览器缓存资源之后会好一些，若有问题可以尝试刷新，或者将资源下载后使用。 ")])),_:1})]))}};const p=f;var d=p},5572:function(e,t,l){l.d(t,{v:function(){return _}});var s=l(6901),n=l(8146),a=l(2371),i=l(3265),o=l(5580),c=l(3736);const r=e=>Object.keys(e);var u=l(7466);const f=["light","dark"],p=(0,c.o8)({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:r(u.Rp),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:f,default:"light"}}),d={close:e=>e instanceof MouseEvent};var k=l(9847),v=l(9481);const g=(0,s.aZ)({name:"ElAlert"}),S=(0,s.aZ)({...g,props:p,emits:d,setup(e,{emit:t}){const l=e,{Close:c}=u.f5,r=(0,s.Rr)(),f=(0,v.s)("alert"),p=(0,n.iH)(!0),d=(0,s.Fl)((()=>u.Rp[l.type])),k=(0,s.Fl)((()=>[f.e("icon"),{[f.is("big")]:!!l.description||!!r.default}])),g=(0,s.Fl)((()=>({[f.is("bold")]:l.description||r.default}))),S=e=>{p.value=!1,t("close",e)};return(e,t)=>((0,s.wg)(),(0,s.j4)(a.uT,{name:(0,n.SU)(f).b("fade"),persisted:""},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("div",{class:(0,i.C_)([(0,n.SU)(f).b(),(0,n.SU)(f).m(e.type),(0,n.SU)(f).is("center",e.center),(0,n.SU)(f).is(e.effect)]),role:"alert"},[e.showIcon&&(0,n.SU)(d)?((0,s.wg)(),(0,s.j4)((0,n.SU)(o.gn),{key:0,class:(0,i.C_)((0,n.SU)(k))},{default:(0,s.w5)((()=>[((0,s.wg)(),(0,s.j4)((0,s.LL)((0,n.SU)(d))))])),_:1},8,["class"])):(0,s.kq)("v-if",!0),(0,s._)("div",{class:(0,i.C_)((0,n.SU)(f).e("content"))},[e.title||e.$slots.title?((0,s.wg)(),(0,s.iD)("span",{key:0,class:(0,i.C_)([(0,n.SU)(f).e("title"),(0,n.SU)(g)])},[(0,s.WI)(e.$slots,"title",{},(()=>[(0,s.Uk)((0,i.zw)(e.title),1)]))],2)):(0,s.kq)("v-if",!0),e.$slots.default||e.description?((0,s.wg)(),(0,s.iD)("p",{key:1,class:(0,i.C_)((0,n.SU)(f).e("description"))},[(0,s.WI)(e.$slots,"default",{},(()=>[(0,s.Uk)((0,i.zw)(e.description),1)]))],2)):(0,s.kq)("v-if",!0),e.closable?((0,s.wg)(),(0,s.iD)(s.HY,{key:2},[e.closeText?((0,s.wg)(),(0,s.iD)("div",{key:0,class:(0,i.C_)([(0,n.SU)(f).e("close-btn"),(0,n.SU)(f).is("customed")]),onClick:S},(0,i.zw)(e.closeText),3)):((0,s.wg)(),(0,s.j4)((0,n.SU)(o.gn),{key:1,class:(0,i.C_)((0,n.SU)(f).e("close-btn")),onClick:S},{default:(0,s.w5)((()=>[(0,s.Wm)((0,n.SU)(c))])),_:1},8,["class"]))],64)):(0,s.kq)("v-if",!0)],2)],2),[[a.F8,p.value]])])),_:3},8,["name"]))}});var w=(0,k.Z)(S,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]),U=l(9293);const _=(0,U.nz)(w)}}]);
//# sourceMappingURL=840.f7831541.js.map