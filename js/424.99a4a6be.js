"use strict";(self["webpackChunkshock"]=self["webpackChunkshock"]||[]).push([[424],{6851:function(e,l,n){n.r(l),n.d(l,{default:function(){return M}});var o=n(6901),t=n(8146),a=n(5572),u=n(678),d=n(9747),c=n(9777),m=n(2504);const s=(0,o._)("p",{class:"h-1"},"变量与常量 · variate and constant",-1),_=(0,o._)("p",null,"经过了前几章的学习，相信冰雪聪明的小可爱一定学到了不少东西，并且产生一些疑问，譬如：函数里面的内容只能放那一个嘛，不能整的动态一些吗？",-1),p=(0,o._)("p",null,"很好，既然大家这么热情，我就向大家隆重介绍：常量和变量，这两位在之后将时常露面，成为我们不可或缺的好伙伴",-1),r=(0,o._)("p",{class:"h-3"},"声明和赋值",-1),U=(0,o._)("p",null,"声明（也可以称之为定义）是指告诉JavaScript引擎创建一个内存区域用于储存数据，并将这块区域命名，赋值则是向指定的内存区域写入值，无论是变量还是常量，都需要先声明，再赋值。（看不懂？等一会给你举个例子）",-1),i=(0,o._)("p",null,[(0,o.Uk)("常量：常量使用const关键词声明，必须在声明的同时赋值，格式为"),(0,o._)("code",null,"const 常量名 = 值;")],-1),g=(0,o._)("p",null,[(0,o.Uk)("变量：变量使用let关键字声明，可以在声明时赋值，格式为"),(0,o._)("code",null,"let 变量名 = 值;")],-1),f=(0,o._)("p",null,[(0,o.Uk)("常量和变量在同一"),(0,o._)("div",{class:"no-br","data-help":"作用域|即常量、变量、函数等可用的区域，在相应的作用域内，这些内容才可以被调用"},"作用域"),(0,o.Uk)("中都只能声明一次，在声明后再次声明会报错")],-1),w=(0,o._)("p",null,"可以使用一个关键字为多个常量或变量声明并赋值",-1),k=(0,o._)("p",{class:"h-3"},"对于常量与变量的形象解释",-1),h=(0,o._)("p",null,"啊哈哈，例子来咯！",-1),V=(0,o._)("p",null,"变量与常量就像卡片一样，不过一个用铅笔写，一个用中性笔写（不可擦的那种）",-1),y=(0,o._)("div",null,"2",-1),W=(0,o._)("p",null,"声明就相当于拿出一张卡片，写上变量或常量的名字；赋值相当于在相应的卡片上写上内容，如果是用铅笔写的（变量）那么可以修改这个值，如果是中性笔写的（常量）就不能再改动了（不要试图划了重写）",-1),v=(0,o._)("p",null,"变量不管怎么赋值，它指向的都是同一块内存区域，就像卡片上的内容再改，它还是同一张卡片。",-1),b=(0,o._)("p",null,"而读取变量的值，就相当于看着卡片的名称读卡片上的内容，没错，就这么简单。",-1),S=(0,o._)("p",{class:"h-3"},"变量和常量的命名",-1),D=(0,o._)("p",null,"如果你需要声明有一个常量和一个变量，你会给它们取什么名字呢？",-1),N=(0,o._)("p",null,"还有一些命名，符合条件，但是不建议使用",-1),C=(0,o._)("p",null,"1、编程是一件国际化很高的事情，使用英文可以让你的代码更容易被看懂（尤其是开源项目）",-1),A=(0,o._)("p",null,"2、中文在Unicode编码处理不当的情况下可能出现问题（锟斤拷锟斤拷...）导致无法运行",-1),B=(0,o._)("p",null,"3、在没有安装中文字体的设备中，口口口口口口",-1),O=(0,o._)("p",null,"4、在没有中文输入法的设备上，无法编辑",-1),Z=(0,o._)("p",null,"5、一直换输入法是很不爽的事情（亲身经历）",-1),x=(0,o._)("p",null,"推荐的变量命名法：",-1),E=(0,o._)("p",null,[(0,o.Uk)("小驼峰法：即第一个单词以小写字母开始；从第二个单词开始以后的每个单词的首字母都采用大写字母，一般用于命名变量，比如："),(0,o._)("code",null,"goodBoy"),(0,o.Uk)(","),(0,o._)("code",null,"dearShock")],-1),K=(0,o._)("p",null,[(0,o.Uk)("大驼峰法（帕斯卡命名法）：将每个单词的首字母都大写，包括第一个，一般用于命名构造函数和类名，比如"),(0,o._)("code",null,"BufferBuilder"),(0,o.Uk)(","),(0,o._)("code",null,"DataLoader")],-1),L=(0,o._)("p",null,[(0,o.Uk)('将字母与字母之间用下划线"_"连接，字母全部小写，比如'),(0,o._)("code",null,"my_dog"),(0,o.Uk)(","),(0,o._)("code",null,"my_age")],-1),R=(0,o._)("p",null,"推荐的常量命名法：",-1),Q=(0,o._)("p",null,"常量命名分为两种情况：",-1),J=(0,o._)("p",null,[(0,o.Uk)("1、当常量值不确定，但是确定后不会修改时，使用小驼峰法，比如"),(0,o._)("code",null,"userName"),(0,o.Uk)("（用户名称，当没有获取到时未知，但是获取到之后不会变化（没有改名卡！））")],-1),j=(0,o._)("p",null,"2、当常量值确定时，使用全大写命名，单词之间用下划线隔开，这种情况一般用于储存以后要用的数据，比如COLOR（颜色，用于储存16进制颜色代码）",-1),q=(0,o.uE)('<p class="h-3">推荐的命名规则：</p><p>1、变量名应该清晰，明显，可以一眼看出其含义</p><p>2、变量名应尽量简洁，不要刻意使用长单词，比如<code>userName</code>不要写成<code>subscriberName</code>或<code>nameOfUser</code></p><p>3、与第一条对应，不要使用含义模糊不清的单词，比如<code>value</code>，<code>data</code>（几乎所有东西都有值和数据），除非这个变量在作用域内可以明显的知道其含义，这个以后会讲解。</p><p>4、对于含义相同的内容，统一使用相同的名称，比如使用user代指用户，就不要再用visitor之类的，统一使用user，比如：<code>userName</code>，<code>userId</code></p>',5);var F={__name:"varAndConst",setup(e){const l=(0,t.iH)(1),n=(0,t.qj)([]);function F(e){document.documentElement.style.setProperty("--el-bg-color",e),setTimeout((()=>{document.documentElement.style.setProperty("--el-bg-color","#141414")}),5e3)}n[0]="//常量的声明（常量声明时必须赋值）\nconst A = 1; //在要声明的常量名前加关键词 const（全小写，JavaScript大小写敏感），然后使用等号= 赋值\n//变量的声明\nlet b = 2; //在要声明的变量前加关键词 let，然后用等号赋值\n//变量先声明，再赋值\nlet c;\nc=3 //与常量不同，变量可以先声明，再赋值，赋值之前的值为undefined（未定义）\nconsole.log(A,b,c)",n[1]="//常量的重复声明\nconst A = 1;\nconst A = 2;\n//变量的重复声明\n// let b = 1;\n// let b = 2;",n[2]='//单行同时声明\nconst A=1,B=2,C=3; //可以在一行，但是可读性较低\nlet a=1,b,c=3\n//多行同时声明\nconst D=4,\nE=5,\nF=6; //记得加分号，否则下一行内容会被认为是声明常量\nlet d=4\n,e //也可以将逗号写到前面\n,f=6; \nb=2,e=5;//变量赋值也可以缩写到一行\nconsole.log("变量：",a,b,c,d,e,f);\nconsole.log("常量：",A,B,C,D,E,F);\n//这些写法都是合法的，只与个人审美有关',n[3]='const 1st = "shock" //不能以数字开头;\nlet No.1 = "shock" //符号只能包含"$","_"，不能包含"." , "-" , "@" , "#" ,"%", "^" ,"&" , "*" , "?"等西文符号以及"——","《","》"，"？"等中文符号。',n[4]='const 什么是 = "What is"; //没错你可以使用中文命名变量和常量，函数也可以\nlet 君の名は="Your Name"; //甚至可以用稻妻语\nlet อิ_อิ = "?" //甚至颜文字\nconsole.log(什么是,君の名は,อิ_อิ); //console.log()接受多个参数时可以同时输出\n//但是这种命名可能会让编辑器反感（或许接手你代码的同志会更反感）',n[5]='//变量使用小驼峰法命名\nlet myDogName = "黄豆", myAge = 18, myDog, me\n//构造函数\nfunction Man(age) {\n    this.age = age\n}\n//类名\nclass Dog {\n    constructor(name) {\n        this.dogName = name\n    }\n}\nme = new Man(myAge);\nmyDog = new Dog(myDogName);\nconsole.log(me, myDog)\n//不用在意内容，以后都会讲的',n[6]='let my_name = "shock";\nconsole.log(my_name);',n[7]='const userName = getName();//在获取到名字前不确定其值，但是获取到之后不会修改，因此使用小驼峰命名法定义常量。\nconst BACKGROUD_COLOR = "#6272a4";//背景颜色确定，使用全大写和下划线命名\nconsole.log(userName);\nchangeBgColor(BACKGROUD_COLOR);';const G=(0,t.qj)({names:["getName","changeBgColor"],func:[()=>"王小美",F]});return(0,o.Y3)().then((()=>{window.setEditor(),setTimeout((()=>{window.pageLoading.close()}),500)})),(e,F)=>((0,o.wg)(),(0,o.iD)("div",null,[s,_,p,r,U,i,g,(0,o.Wm)((0,t.SU)(a.v),{type:"warning",style:{"margin-bottom":"15px"}},{default:(0,o.w5)((()=>[(0,o.Uk)("如果你接触过JavaScript，你可能知道var关键字，关于let和var区别将在后面详细讲解，没有特殊情况，请使用let")])),_:1}),(0,o.Wm)(m.Z,{modelValue:n[0],"onUpdate:modelValue":F[0]||(F[0]=e=>n[0]=e)},{default:(0,o.w5)((()=>[(0,o.Uk)("常量与变量的声明和赋值")])),_:1},8,["modelValue"]),f,(0,o.Wm)(m.Z,{modelValue:n[1],"onUpdate:modelValue":F[1]||(F[1]=e=>n[1]=e)},{default:(0,o.w5)((()=>[(0,o.Uk)("常量与变量的重复声明")])),_:1},8,["modelValue"]),w,(0,o.Wm)(m.Z,{modelValue:n[2],"onUpdate:modelValue":F[2]||(F[2]=e=>n[2]=e)},{default:(0,o.w5)((()=>[(0,o.Uk)("同时声明多个变量或常量")])),_:1},8,["modelValue"]),k,h,V,(0,o._)("div",null,[(0,o.Wm)((0,t.SU)(u.Kf),{style:{width:"150px","margin-right":"15px",float:"left"},"body-style":"padding:13px"},{header:(0,o.w5)((()=>[(0,o.Wm)((0,t.SU)(d.Q0),{content:"行不更名，坐不改姓"},{default:(0,o.w5)((()=>[(0,o.Uk)("变量名")])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)((0,t.SU)(d.Q0),{content:"我是可改的"},{default:(0,o.w5)((()=>[(0,o.Wm)((0,t.SU)(c.EZ),{modelValue:l.value,"onUpdate:modelValue":F[3]||(F[3]=e=>l.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.Wm)((0,t.SU)(u.Kf),{style:{width:"150px"}},{header:(0,o.w5)((()=>[(0,o.Wm)((0,t.SU)(d.Q0),{content:"行不更名，坐不改姓"},{default:(0,o.w5)((()=>[(0,o.Uk)("常量名")])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)((0,t.SU)(d.Q0),{content:"改不了，没这个能力知道吧"},{default:(0,o.w5)((()=>[y])),_:1})])),_:1})]),W,v,b,S,D,(0,o.Wm)(m.Z,{modelValue:n[3],"onUpdate:modelValue":F[4]||(F[4]=e=>n[3]=e)},{default:(0,o.w5)((()=>[(0,o.Uk)("错误示范")])),_:1},8,["modelValue"]),N,(0,o.Wm)(m.Z,{modelValue:n[4],"onUpdate:modelValue":F[5]||(F[5]=e=>n[4]=e)},{default:(0,o.w5)((()=>[(0,o.Uk)("不建议使用的命名")])),_:1},8,["modelValue"]),(0,o.Wm)((0,t.SU)(a.v),{style:{"margin-top":"15px"},type:"warning",title:"不建议使用中文作为变量和函数名的原因"},{default:(0,o.w5)((()=>[C,A,B,O,Z])),_:1}),x,(0,o.Wm)((0,t.SU)(u.Kf),{style:{"margin-bottom":"15px"},header:"驼峰命名法",title:"驼峰命名法"},{default:(0,o.w5)((()=>[E,K,(0,o.Wm)(m.Z,{modelValue:n[5],"onUpdate:modelValue":F[6]||(F[6]=e=>n[5]=e)},{default:(0,o.w5)((()=>[(0,o.Uk)("示例")])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)((0,t.SU)(u.Kf),{header:"下划线命名法",title:"下划线命名法"},{default:(0,o.w5)((()=>[L,(0,o.Wm)(m.Z,{modelValue:n[6],"onUpdate:modelValue":F[7]||(F[7]=e=>n[6]=e)},{default:(0,o.w5)((()=>[(0,o.Uk)("示例")])),_:1},8,["modelValue"])])),_:1}),R,(0,o.Wm)((0,t.SU)(u.Kf),{header:"常量命名法",title:"常量命名法"},{default:(0,o.w5)((()=>[Q,J,j,(0,o.Wm)(m.Z,{modelValue:n[7],"onUpdate:modelValue":F[8]||(F[8]=e=>n[7]=e),innerData:G},{default:(0,o.w5)((()=>[(0,o.Uk)("示例")])),_:1},8,["modelValue","innerData"])])),_:1}),q]))}};const G=F;var M=G}}]);
//# sourceMappingURL=424.99a4a6be.js.map