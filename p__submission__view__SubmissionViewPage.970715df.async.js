(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65],{"/vjS":function(e,t,n){"use strict";n.r(t);var r=n("WmNS"),i=n.n(r),a=(n("miYZ"),n("tsqr")),s=n("9og8"),c=(n("DYRE"),n("zeV3")),o=(n("14J3"),n("BMrR")),l=(n("jCWc"),n("kPKH")),d=n("tJVT"),u=(n("fu2T"),n("gK9i")),p=n("q1tI"),m=n("7AqN"),b=n("bx7e"),j=n("Qb08"),h=n("E4Z0"),g=n.n(h),x=n("d5+F"),v=n.n(x),f=n("/xQZ"),O=n.n(f),y=n("LYKr"),w=n("hfhV"),_=n("Urjs"),k=n("foAP"),S=n("Hx64"),C=n("d1CT"),E=n("8Skl"),P=n("UESt"),R=n("f133"),L=n("nKUr"),N=u["a"].Panel,I=()=>Object(L["jsx"])(E["a"],{style:{cursor:"pointer",color:"#3e90cc"}}),F=()=>Object(L["jsx"])(P["a"],{style:{cursor:"pointer",color:"#3e90cc"}}),M=e=>{var t,n=Object(p["useState"])(null===(t=e.defaultVisible)||void 0===t||t),r=Object(d["a"])(n,2),i=r[0],a=r[1];return Object(L["jsx"])(L["Fragment"],{children:Object(L["jsxs"])("div",{style:{borderBottom:i?"":"1px solid #3e90cc",marginBottom:i?"":20},children:[Object(L["jsxs"])(o["a"],{onClick:()=>{a((e=>!e))},style:{cursor:"pointer"},children:[Object(L["jsx"])(l["a"],{xs:12,style:{textAlign:"left"},children:Object(L["jsx"])("h2",{children:e.title})}),Object(L["jsx"])(l["a"],{xs:12,style:{textAlign:"right"},children:(()=>i?Object(L["jsx"])(I,{}):Object(L["jsx"])(F,{}))()})]}),Object(L["jsx"])("div",{style:{display:i?"":"none"},children:e.children})]})})};function T(e,t,n,r){return Object(L["jsxs"])(c["b"],{size:"large",children:[Object(L["jsx"])("span",{children:Object(L["jsx"])("b",{children:"Testcase #".concat(e)})}),Object(L["jsx"])("span",{children:Object(y["a"])(t)}),Object(L["jsx"])("span",{children:Object(L["jsx"])("b",{children:"".concat(n.toFixed(0)," ms")})}),Object(L["jsx"])("span",{children:Object(L["jsx"])("b",{children:Object(w["a"])(r)})})]})}var A=e=>{var t=Object(m["l"])(),n=(Object(_["d"])(0,992),new g.a),r=Object(p["useState"])(null),c=Object(d["a"])(r,2),o=c[0],l=c[1],h=Object(p["useState"])(""),x=Object(d["a"])(h,2),f=x[0],y=x[1],w=Object(p["useState"])({message:"",success:!0}),E=Object(d["a"])(w,2),P=E[0],I=E[1],F=Object(p["useState"])([]),A=Object(d["a"])(F,2),z=A[0],B=A[1],W=Object(p["useState"])(!0),q=Object(d["a"])(W,2),J=q[0],D=q[1];function Q(){return U.apply(this,arguments)}function U(){return U=Object(s["a"])(i.a.mark((function e(){var n,r,s,c,o,d,u,p;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R["c"].submission.getSubmissionDetail({submissionId:t.id,locale:"en_US"});case 2:n=e.sent,r=n.requestError,s=n.response,r?a["default"].error(r):s.error?a["default"].error(s.error):(l(s.meta),y(null===(c=s.content)||void 0===c?void 0:c.code),I(null===(o=s.progress)||void 0===o?void 0:o.compile),(null===(d=s.progress)||void 0===d?void 0:d.testcaseResult)&&(u=s.progress.testcaseResult,p=[],Object.keys(u).forEach((e=>{p.push(u[e])})),p.sort(((e,t)=>{var n=e.testcaseInfo.inputFile,r=t.testcaseInfo.inputFile;return n<r?-1:1})),B(p)),D(!1));case 6:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}return Object(p["useEffect"])((()=>{Q()}),[]),Object(L["jsx"])(b["a"],{current:"submissions",children:Object(L["jsxs"])("div",{className:v.a.root,children:[J&&Object(L["jsx"])("div",{className:v.a.loading,children:Object(L["jsx"])(j["b"],{})}),!1===J&&Object(L["jsxs"])(L["Fragment"],{children:[Object(L["jsx"])(C["a"],{query:{minId:parseInt(t.id),takeCount:1}}),(null===P||void 0===P?void 0:P.message.length)>0&&Object(L["jsx"])("div",{style:{marginTop:20},children:Object(L["jsx"])(M,{title:"Compilation Message",children:Object(L["jsx"])(k["a"],{language:"dangerouslySetInnerHTML",code:n.ansi_to_html(P.message)})})}),f&&Object(L["jsx"])("div",{style:{marginTop:20},children:Object(L["jsx"])(M,{title:"Code",children:Object(L["jsx"])(k["a"],{language:o.codeLanguage,code:f})})}),z.length>0&&Object(L["jsx"])("div",{style:{marginTop:20},children:Object(L["jsx"])(M,{title:"Test Details",children:Object(L["jsx"])("div",{className:"".concat(O.a.codeBoxSegment," ").concat(O.a.codeBoxPre),children:Object(L["jsx"])(u["a"],{defaultActiveKey:[],ghost:!0,children:Object(L["jsx"])(L["Fragment"],{children:z.map(((e,t)=>Object(L["jsx"])(N,{header:T(t+1,e.status,e.time,e.memory),children:Object(L["jsx"])(S["b"],{meta:o,testcaseResult:e})},t+1)))})})})})})]})]})})};t["default"]=A},"/xQZ":function(e,t,n){e.exports={codeBox:"codeBox___uVKvQ",codeBoxSegment:"codeBoxSegment___jwfBB",codeBoxContent:"codeBoxContent___wAGWc",wrap:"wrap___1DR7N",codeBoxPre:"codeBoxPre___2P8-H",omittedLabel:"omittedLabel___3SHXN"}},"0ieP":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return o}));var r=n("nKUr"),i=()=>Object(r["jsx"])("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 496 512",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:Object(r["jsx"])("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})}),a=()=>Object(r["jsx"])("svg",{viewBox:"0 0 1025 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"currentColor","p-id":"1198",strokeWidth:"0",width:"1em",height:"1em",children:Object(r["jsx"])("path",{d:"M879.243325 586.810341c-16.32354-43.266438-79.320268-141.551527-80.064248-190.941723l-0.374548 0c0.125873-2.627976 0.374548-5.253906 0.374548-7.876766 0-179.445349-128.665437-324.870276-287.365328-324.870276-158.764362 0-287.368398 145.424926-287.368398 324.870276 0 2.62286 0.251745 5.248789 0.312123 7.876766l-0.312123 0c-0.742956 49.39122-63.677259 147.675285-80.063224 190.941723-16.386988 43.391287-20.484503 87.1561-12.911674 121.921525 7.572829 34.63546 13.778456 56.144341 20.978783 62.896439 7.137903 6.876948 13.964706 14.13049 35.628114-1.125691 17.376573-14.381212 36.368-43.640986 36.368-43.640986s15.70441 45.3899 50.769679 80.030477c-27.496533 13.002752-67.278447 41.890025-70.133608 60.77093-2.731335 18.759126 41.707868 90.158624 146.102387 91.783712 104.396566 1.500239 139.090357-43.64201 142.50734-47.143931 9.742342-10.252997 18.121575-16.503651 18.121575-16.503651s8.440634 6.250654 18.123622 16.503651c3.410843 3.501922 38.105657 48.64417 142.503247 47.143931 104.392473-1.626112 148.832699-73.024587 146.040986-91.783712-2.794783-18.880905-42.639121-47.768178-70.07323-60.77093 35.002844-34.640576 50.770702-80.030477 50.770702-80.030477s18.992451 29.259774 36.372094 43.640986c21.597913 15.255157 28.423693 8.001615 35.622998 1.125691 7.201351-6.752098 13.3466-28.26098 20.978783-62.896439C899.725781 673.966441 895.569935 630.201629 879.243325 586.810341z","p-id":"1199"})}),s=(n("q1tI"),e=>Object(r["jsx"])("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3441",width:"16",height:"16",children:Object(r["jsx"])("path",{d:"M512.335761 254.730044c102.930418 0 186.859667-56.819386 186.859667-126.757785C699.195428 58.0363 615.271057 1.219352 512.335761 1.219352c-102.925541 0-186.851132 56.819386-186.851132 126.752907C325.489506 197.904562 409.415097 254.730044 512.335761 254.730044L512.335761 254.730044zM846.457844 693.99567l-76.005897-146.417404-104.510699-203.241668c-3.171536-5.467576-11.085133-8.741538-19.004827-8.741538L379.321479 335.595061c-7.909939 0-15.833292 3.278839-18.99995 8.741538L287.48229 484.201203 178.223433 693.999328c-11.090011 21.858112-9.503633 42.617588 6.328439 57.914364 15.841827 15.296777 42.760252 22.948213 77.587397 22.948213l99.76376 0 0 249.138094 0 0 39.589936 0 220.110189 0 39.589936 0 0-27.311056L661.19309 774.861906l98.172505 0c34.8369 0 61.754105-8.741538 77.587397-22.948213C854.376319 736.608381 857.542977 715.853782 846.457844 693.99567L846.457844 693.99567z","p-id":"3442"})})),c=e=>Object(r["jsx"])("svg",{height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","aria-hidden":"true",children:Object(r["jsx"])("path",{fillRule:"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"})}),o=e=>Object(r["jsx"])("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6192",width:"16",height:"16",children:Object(r["jsx"])("path",{d:"M804.43 413.285l-258.228 98.715 258.14 98.715c65.75 25.363 103.75 45.601 113.914 60.801 10.074 15.201 15.201 30.401 15.201 45.601 0 40.563-7.687 63.364-23.067 68.314-15.289 5.125-30.667 7.599-45.955 7.599-15.466 0-30.754-3.801-46.043-11.399-15.377-7.599-33.228-18.999-53.644-34.201l-237.461-212.628 53.731 318.941c5.037 15.201 7.599 29.164 7.599 41.801 0 12.725 0 21.562 0 26.601 0 30.401-7.599 51.964-22.976 64.513-15.377 12.725-33.228 18.999-53.644 18.999-15.643 0-32.522-5.037-50.814-15.201-18.293-10.074-27.307-32.875-27.307-68.314 0-10.074 1.326-20.238 3.889-30.401 2.652-10.074 3.889-22.8 3.889-38.001l62.391-318.941-241.968 212.628c-15.643 10.162-32.522 20.238-50.814 30.401s-35.085 15.201-50.639 15.201c-15.643 0-31.197-5.037-46.837-15.201-15.643-10.074-23.419-30.401-23.419-60.801 0-20.238 7.599-38.001 22.8-53.201s50.55-32.875 106.314-53.201l258.405-98.626-258.228-98.715c-35.438-15.201-65.84-29.075-91.114-41.801-25.363-12.637-38.001-34.201-38.001-64.513 0-25.275 7.599-44.275 22.889-57.001 15.377-12.548 30.578-18.999 46.043-18.999 15.289 0 31.902 3.801 49.842 11.399 17.764 7.599 34.377 18.999 49.842 34.201l237.549 212.628-53.644-318.941c0-15.201-1.326-27.749-3.889-38.001-2.652-10.074-3.801-20.238-3.801-30.401 0-20.238 7.599-39.15 22.976-57.001 15.377-17.586 33.317-26.511 53.644-26.511 31.283 0 51.877 10.162 62.481 30.401 10.339 20.238 15.643 38.001 15.643 53.201 0 10.162 0 21.562 0 34.201 0 12.725-2.652 24.037-7.866 34.201l-62.391 318.852 241.879-212.628c20.769-20.238 38.883-32.875 54.615-38.001 15.643-5.037 31.197-7.599 46.837-7.599 20.769 0 37.648 7.599 50.639 22.8s19.708 32.963 19.708 53.201c0 20.238-5.125 36.763-15.201 49.402-10.252 12.637-48.163 31.637-113.914 56.913z","p-id":"6193"})})},"7ptE":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("WmNS"),i=n.n(r),a=n("9og8");function s(e){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(t);case 3:return e.abrupt("return",!0);case 6:e.prev=6,e.t0=e["catch"](0);case 8:return n=document.createElement("textarea"),n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="2em",n.style.height="2em",n.style.padding="0",n.style.border="none",n.style.outline="none",n.style.boxShadow="none",n.style.background="transparent",n.value=t,document.body.appendChild(n),n.focus(),n.select(),r=document.execCommand("copy"),document.body.removeChild(n),e.abrupt("return",r);case 26:case"end":return e.stop()}}),e,null,[[0,6]])}))),c.apply(this,arguments)}},"8tQ+":function(e,t,n){e.exports={footer:"footer___3EQLU",name:"name___1AcRw",version:"version___3owxy",github:"github___2s1sl"}},Gyry:function(e,t,n){e.exports={Pending:"Pending___3zQJH",ConfigurationError:"ConfigurationError___2_4Eg",SystemError:"SystemError___3QpJp",CompilationError:"CompilationError___3r9Lh",Canceled:"Canceled___3bbf_",FileError:"FileError___2D0PI",RuntimeError:"RuntimeError___1Uw6w",TimeLimitExceeded:"TimeLimitExceeded___20uFb",MemoryLimitExceeded:"MemoryLimitExceeded___u0NLe",OutputLimitExceeded:"OutputLimitExceeded___2X62j",PartiallyCorrect:"PartiallyCorrect___1CU0g",WrongAnswer:"WrongAnswer___XXyjV",Accepted:"Accepted___2ucPz",JudgementFailed:"JudgementFailed___393l9",Waiting:"Waiting___8-aCp",Preparing:"Preparing___GV7c0",Compiling:"Compiling___wOPj4",Running:"Running___2Qx3t",Skipped:"Skipped___2b8Bm",Frozen:"Frozen___2u9DS"}},Hx64:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f}));n("5Dmo");var r=n("3S7+"),i=n("WmNS"),a=n.n(i),s=(n("miYZ"),n("tsqr")),c=n("9og8"),o=(n("q1tI"),n("gCJV")),l=n.n(o),d=n("7ptE"),u=n("rqeN"),p=n("+YFz"),m=n("f133"),b=n("nKUr"),j=e=>{var t=function(){var e=Object(c["a"])(a.a.mark((function e(t){return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["a"])(t);case 2:s["default"].success("Copied!");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b["jsx"])("div",{className:l.a.copyBtn,onClick:()=>{t(e.text)},children:"Copy"})},h=e=>Object(b["jsxs"])("div",{className:l.a.exampleRoot,children:[Object(b["jsxs"])("div",{className:l.a.input,children:[Object(b["jsxs"])("div",{className:l.a.title,children:["input",Object(b["jsx"])(j,{text:e.input})]}),Object(b["jsx"])("pre",{children:e.input})]}),Object(b["jsxs"])("div",{className:l.a.output,children:[Object(b["jsxs"])("div",{className:l.a.title,children:["output",Object(b["jsx"])(j,{text:e.output})]}),Object(b["jsx"])("pre",{children:e.output})]})]});function g(e,t){return x.apply(this,arguments)}function x(){return x=Object(c["a"])(a.a.mark((function e(t,n){var r,i,c;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",s["default"].error("NO_SUCH_FILE"));case 2:return e.next=4,m["c"].problem.downloadProblemFiles({problemId:t,type:"TestData",filenameList:[n]});case 4:if(r=e.sent,i=r.requestError,c=r.response,!i){e.next=11;break}return e.abrupt("return",s["default"].error(i));case 11:if(0!==c.downloadInfo.length){e.next=13;break}return e.abrupt("return",s["default"].error("NO_SUCH_FILE"));case 13:Object(u["a"])(c.downloadInfo[0].downloadUrl);case 14:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}var v=e=>Object(b["jsx"])("div",{className:l.a.downloadBtn,onClick:()=>{g(e.problemId,e.filename)},children:"Download"}),f=e=>{var t,n,i,a,s,c,o,d,u,m,j,h,g,x,f,O,y,w,_,k,S,C,E,P,R,L,N,I,F;return Object(b["jsxs"])("div",{className:l.a.exampleRoot,children:[e.testcaseResult.input&&Object(b["jsxs"])("div",{className:l.a.input,children:[Object(b["jsxs"])("div",{className:l.a.title,children:[Object(b["jsxs"])(b["Fragment"],{children:["input",(null===(t=e.testcaseResult)||void 0===t||null===(n=t.input)||void 0===n?void 0:n.omittedLength)&&Object(b["jsx"])(r["a"],{title:"".concat(null===(i=e.testcaseResult)||void 0===i||null===(a=i.input)||void 0===a?void 0:a.omittedLength," bytes omitted"),children:Object(b["jsx"])(p["a"],{style:{marginLeft:"5px",fontSize:"14px"}})})]}),Object(b["jsx"])(v,{problemId:e.meta.problem.id,filename:e.testcaseResult.testcaseInfo.inputFile})]}),Object(b["jsx"])("pre",{children:null!==(s=null!==(c=null===(o=e.testcaseResult)||void 0===o?void 0:o.input.data)&&void 0!==c?c:null===(d=e.testcaseResult)||void 0===d?void 0:d.input)&&void 0!==s?s:""})]}),(null===(u=e.testcaseResult)||void 0===u?void 0:u.output)&&Object(b["jsxs"])("div",{className:l.a.output,children:[Object(b["jsxs"])("div",{className:l.a.title,children:["output",(null===(m=e.testcaseResult)||void 0===m||null===(j=m.output)||void 0===j?void 0:j.omittedLength)&&Object(b["jsx"])(r["a"],{title:"".concat(null===(h=e.testcaseResult)||void 0===h||null===(g=h.output)||void 0===g?void 0:g.omittedLength," bytes omitted"),children:Object(b["jsx"])(p["a"],{style:{marginLeft:"5px",fontSize:"14px"}})}),Object(b["jsx"])(v,{problemId:e.meta.problem.id,filename:e.testcaseResult.testcaseInfo.outputFile})]}),Object(b["jsx"])("pre",{children:null!==(x=null!==(f=null===(O=e.testcaseResult)||void 0===O?void 0:O.output.data)&&void 0!==f?f:null===(y=e.testcaseResult)||void 0===y?void 0:y.output)&&void 0!==x?x:""})]}),(null===(w=e.testcaseResult)||void 0===w?void 0:w.userOutput)&&Object(b["jsxs"])("div",{className:l.a.yourOutput,children:[Object(b["jsxs"])("div",{className:l.a.title,children:["Your output",(null===(_=e.testcaseResult)||void 0===_||null===(k=_.userOutput)||void 0===k?void 0:k.omittedLength)&&Object(b["jsx"])(r["a"],{title:"".concat(null===(S=e.testcaseResult)||void 0===S||null===(C=S.userOutput)||void 0===C?void 0:C.omittedLength," bytes omitted"),children:Object(b["jsx"])(p["a"],{style:{marginLeft:"5px",fontSize:"14px"}})})]}),Object(b["jsx"])("pre",{children:null!==(E=null!==(P=null===(R=e.testcaseResult)||void 0===R||null===(L=R.userOutput)||void 0===L?void 0:L.data)&&void 0!==P?P:null===(N=e.testcaseResult)||void 0===N?void 0:N.userOutput)&&void 0!==E?E:""})]}),(null===(I=e.testcaseResult)||void 0===I?void 0:I.checkerMessage)&&Object(b["jsxs"])("div",{className:l.a.checkerMessage,children:[Object(b["jsx"])("div",{className:l.a.title,children:"Checker message"}),Object(b["jsx"])("pre",{children:null===(F=e.testcaseResult)||void 0===F?void 0:F.checkerMessage})]})]})}},LYKr:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("Gyry"),i=n.n(r),a=n("nKUr");function s(e){return e.replace(/([A-Z])/g," $1").slice(1)}function c(e){return Object(a["jsx"])("span",{className:i.a[e],style:{fontWeight:"bold"},children:s(e)})}},OUQG:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("jHpe"),i=n.n(r);n("bPOv"),n("ZgVT"),n("y1X9"),n("uM+M"),n("QWvX"),n("XpJP"),n("EbVF"),n("pZMP"),n("LmXF"),n("b6mF"),n("d4OG"),n("dgcb"),n("iB5L"),n("r4oG"),n("sA+S"),n("+FDh"),n("t2Jj"),n("u300"),n("huE1"),n("kfgK"),n("VOcU"),n("8ktg"),n("jOLr"),n("lSgE"),n("drhi"),n("ibSS"),n("Mqv6"),n("Q7+W"),n("gAkk"),n("qVSt"),n("wkPK"),n("HdDD"),n("uN/B"),n("SL6G"),n("pksX"),n("s2Vr"),n("xbA4"),n("56Ue"),n("lD8X"),n("J4HD"),n("OQpq"),n("g0jA"),n("Nd5L"),n("uQnp"),n("1Nty"),n("sTAn"),n("npCj"),n("KJ57"),n("NdPI"),n("hkok"),n("otUN"),n("Gi0s"),n("kAua"),n("ZzuI"),n("GD/k"),n("Yhcd"),n("HGMl"),n("f7nC"),n("2et7"),n("xwaw"),n("B/pZ"),n("YctN"),n("qJTN"),n("9QaP"),n("eIXP"),n("ZwEA"),n("nF1u"),n("00hE"),n("nrL0"),n("0fuW"),n("PUL1"),n("jxYe"),n("E9jH"),n("dBHq"),n("/nb9"),n("8RTI"),n("gRcZ"),n("Q046"),n("Z7/u"),n("qiXI"),n("PEIs"),n("B6Nr"),n("3xzq"),n("GYl3"),n("RX2a"),n("gmzG"),n("Y613"),n("4l/p"),n("+fy4"),n("hnpa"),n("jOTn"),n("weJn"),n("5dm5"),n("T8iE"),n("0WON"),n("9pLb"),n("ZZ/H"),n("85O/"),n("kYdm"),n("zI6Y"),n("xdrT"),n("SN7l"),n("dYyu"),n("0sus"),n("7d9O"),n("vy4m"),n("DB5f"),n("8XF4"),n("ki2X"),n("jpss"),n("c11f"),n("KTUv"),n("PRNa"),n("tkzC"),n("/27n"),n("uYYa"),n("O9Io"),n("XIHC"),n("k4T/"),n("dgIA"),n("+X5Q"),n("R4Wz"),n("MsKQ"),n("IqA8"),n("5M+F"),n("ST66"),n("ZM0j"),n("u1v7"),n("Vj/u"),n("cZAW"),n("HAjR"),n("zxki"),n("9IQp"),n("Ol/B"),n("USa+"),n("hnL7"),n("DV0F"),n("1NVV"),n("+ZwH"),n("ReX+"),n("Kqxr"),n("BbjY"),n("6Kvp"),n("YL/C"),n("jjUo"),n("76db"),n("h7LQ"),n("bDPX"),n("oNmE"),n("8sAH"),n("r4a2"),n("TUlN"),n("TL9f"),n("bEZN"),n("YT+k"),n("9xB9"),n("GF4Z"),n("xdtV"),n("Nuiu"),n("F0Kw"),n("gA1E"),n("5625"),n("mR1r"),n("pC7O"),n("VZmW"),n("4MSv"),n("wqKI"),n("OuMq"),n("8oPf"),n("RzVo"),n("a+kc"),n("9wRM"),n("RZ5y"),n("NymF"),n("9KPv"),n("dVlL"),n("vyez"),n("V9il"),n("Q+2V"),n("31oH"),n("PSGn"),n("aTfN"),n("Ka68"),n("+qzQ"),n("Scwt"),n("9du4"),n("CjHp"),n("pYjL"),n("YD4P"),n("Nhn9"),n("b7ok"),n("EHpB"),n("6GGF"),n("ceB4"),n("BHca"),n("8sVL"),n("eWXi"),n("q/gI"),n("RehC"),n("cnKv"),n("+EFr"),n("ujpa"),n("gV2Z"),n("/s04"),n("6c1m"),n("XJAp"),n("cGNI"),n("rGpf"),n("27LU"),n("hvH5"),n("dC2J"),n("6cul"),n("CTf8"),n("TAbw"),n("1Muh"),n("yrCP"),n("sVKi"),n("2niF"),n("yqz8"),n("/uFR"),n("yam7"),n("WrUs"),n("VMbu"),n("jR7t"),n("tDuG"),n("PFdE"),n("fO3x"),n("bldZ"),n("pweW"),n("ITQp"),n("oCKR"),n("+xhP"),n("YBrI"),n("z/kO"),n("+Nrv"),n("+TXG"),n("/Ab6"),n("wPEV"),n("bMoR");function a(e){return e.split("\r").join("")}function s(e){return e=e.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split(" ").join("&nbsp;"),e}function c(e,t){function n(){if(t)try{var n=t.trim().toLowerCase();if(n in i.a.languages)return i.a.highlight(e,i.a.languages[n],n)}catch(r){console.error("Failed to highlight, language = ".concat(t),r)}return s(e).split("\n").join("<br>")}return e=a(e),'<div class="highlighted">'.concat(n(),"</div>")}},RH92:function(e,t,n){"use strict";n("5Dmo");var r=n("3S7+"),i=n("tJVT"),a=(n("q1tI"),n("acru")),s=n("nKUr"),c=e=>{var t=Object(a["b"])(e.date),n=Object(i["a"])(t,2),c=n[0],o=n[1];return Object(s["jsx"])(r["a"],{placement:"top",title:o,children:Object(s["jsx"])("span",{children:c})})};t["a"]=c},aN5g:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return l}));var r=n("+QwO"),i=n.n(r);function a(e){return/^[a-zA-Z0-9\-_.#$]{3,24}$/.test(e)}function s(e){return e.length>=6&&e.length<=32}function c(e){return i.a.isEmail(e)}function o(e){var t=["/","\0"],n=[".",".."];return t.every((t=>-1===e.indexOf(t)))&&!n.includes(e)}function l(e){return e.replace(/[^\d]/g,"")}},acru:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n("Wgwc"),i=n.n(r),a=n("nKUr");function s(e){return"number"===typeof e&&10===e.toString().length&&(e*=1e3),e instanceof Date||(e=new Date(e)),e}function c(e){return"number"===typeof e&&10===e.toString().length&&(e*=1e3),e instanceof Date||(e=new Date(e)),i()(e).format("MMMM D, YYYY")}function o(e,t){e=s(e);var n=(e.getMonth()+1).toString(),r=e.getDate().toString(),i=e.getHours().toString(),c=e.getMinutes().toString(),o=e.getSeconds().toString();n=1===n.length?"0"+n:n,r=1===r.length?"0"+r:r,i=1===i.length?"0"+i:i,c=1===c.length?"0"+c:c,o=1===o.length?"0"+o:o;var l="".concat(n,"/").concat(r),d=t?l:Object(a["jsxs"])(a["Fragment"],{children:[l,"\xa0\xa0","".concat(i,":").concat(c,":").concat(o)]}),u="".concat(e.getFullYear(),"-").concat(n,"-").concat(r),p=t?u:"".concat(u," ").concat(i,":").concat(c,":").concat(o);return[d,p]}},aoOD:function(e,t,n){e.exports={tableRoot:"tableRoot___3xWj7"}},b2pr:function(e,t,n){"use strict";var r=n("WmNS"),i=n.n(r),a=n("9og8"),s=n("tJVT"),c=n("8tQ+"),o=n.n(c),l=n("kiQV"),d=n("0ieP"),u=n("q1tI"),p=n("f133"),m=n("nKUr"),b=e=>{var t=Object(u["useState"])("Loading"),n=Object(s["a"])(t,2),r=n[0],c=n[1];function b(){return j.apply(this,arguments)}function j(){return j=Object(a["a"])(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p["c"].app.getVersion();case 2:t=e.sent,t.requestError,n=t.response,n&&c(n.version);case 6:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}return Object(u["useEffect"])((()=>{b()}),[]),Object(m["jsxs"])("footer",{className:o.a.footer,children:[Object(m["jsx"])("div",{className:o.a.name,children:"Powered By JudgeQ"}),Object(m["jsxs"])("div",{className:o.a.version,children:["WebApp: ",l.version," | API: ",r]}),Object(m["jsx"])("div",{className:o.a.icon,children:Object(m["jsx"])("a",{className:o.a.github,title:"GitHub",target:"_blank",rel:"noreferrer noopener",href:"https://github.com/JudgeQ-Dev/JudgeQ",children:Object(m["jsx"])(d["b"],{})})})]})};t["a"]=b},bMoR:function(e,t,n){},bnip:function(e,t,n){e.exports={root:"root___75B7Y",secondRoot:"secondRoot___PF0A-",main:"main___3b34R","h-header":"h-header___2IoNM"}},bx7e:function(e,t,n){"use strict";var r=n("9kvl"),i=n("q1tI"),a=n("b2pr"),s=n("Qb08"),c=n("bnip"),o=n.n(c),l=n("nKUr");function d(e,t){var n="";return t.forEach((t=>{n+='<li class="'.concat(e===t.id?"am-active":"",'"><a href="').concat(t.link,'">').concat(t.name,"</a></li>")})),n}function u(e,t){var n="";n+='<li class="am-dropdown" data-am-dropdown>',n+="\n  <a class='am-dropdown-toggle' data-am-dropdown-toggle href='javascript:;'>\n  <span class='am-icon-user'></span>&nbsp;".concat(t,"&nbsp;<span class='am-icon-caret-down'></span>\n  </a>"),n+='<ul class="am-dropdown-content">';for(var r=0;r<e.length;++r)0!==e[r].length&&(e[r].forEach((e=>{n+='<li><a href="'.concat(e.link,'">').concat(e.name,"</a></li>")})),r<e.length-1&&(n+='<li class="am-divider"></li>'));return n+="</ul>",n+="</li>",n}function p(e,t,n,r,i){var a=[{id:"contests",name:"Contests",link:"/contests"},{id:"problem_set",name:"Problem Set",link:"/problemset"},{id:"submissions",name:"Submissions",link:"/submissions"},{id:"users",name:"Users",link:"/users"},{id:"discussions",name:"Discussions",link:"/discussions"}],s=[{id:"enter",name:"Enter",link:"/login"}],c=[[...i?[{id:"my_profile",name:"My Profile",link:"/user/".concat(n)}]:[],{id:"my_submissions",name:"My Submissions",link:"/submissions?username=".concat(null!==n&&void 0!==n?n:"")},...i?[{id:"my_discussions",name:"My Discussions",link:"/discussions?publisherId=".concat(null!==r&&void 0!==r?r:"")}]:[]],i?[{id:"polygon",name:"Polygon",link:"/polygon"},{id:"administration",name:"Administration",link:"/admin"}]:[],[...i?[{id:"settings",name:"Settings",link:"/settings"}]:[],{id:"logout",name:"Logout",link:"/logout"}]];return{__html:'\n    <header class="am-topbar-inverse am-topbar-fixed-toped" style="font-size: 16px; margin-top: 0px;">\n    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-primary am-show-sm-only"\n      data-am-collapse="{target: \'#collapse-head\'}">\n      <span class="am-sr-only">\u5bfc\u822a\u5207\u6362</span>\n      <span class="am-icon-bars"></span>\n    </button>\n    <div class="am-container '.concat(o.a["h-header"],'">\n      <h1 class="am-topbar-brand">\n        <a href="/" >').concat(e,'</a>\n      </h1>\n      <div class="am-collapse am-topbar-collapse" id="collapse-head">\n        <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(d(t,a),'\n        </ul>\n        <div class="am-topbar-right" style="padding-right: 0px;">\n          <ul class="am-nav am-nav-pills am-topbar-nav">\n          ').concat(n?u(c,n):d(t,s),"\n          </ul>\n        </div>\n      </div>\n    </div>\n  </header>\n    ")}}var m=e=>Object(l["jsx"])("div",{dangerouslySetInnerHTML:p("JudgeQ",e.current,e.username,e.id,e.isAdmin)}),b=e=>{var t,n,c,d=Object(r["d"])("@@initialState"),u=d.initialState,p=d.loading;return Object(i["useEffect"])((()=>{window.$(".am-dropdown").dropdown()})),Object(l["jsxs"])(l["Fragment"],{children:[!0===p&&Object(l["jsx"])("div",{style:{height:"calc(100vh)",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(l["jsx"])(s["b"],{})}),!1===p&&Object(l["jsxs"])(l["Fragment"],{children:[Object(l["jsx"])(m,{current:e.current,username:null===u||void 0===u||null===(t=u.userMeta)||void 0===t?void 0:t.username,id:null===u||void 0===u||null===(n=u.userMeta)||void 0===n?void 0:n.id,isAdmin:null===u||void 0===u||null===(c=u.userMeta)||void 0===c?void 0:c.isAdmin}),Object(l["jsx"])("div",{className:o.a.root,style:{maxWidth:e.maxWidth?e.maxWidth:""},children:Object(l["jsxs"])("div",{className:o.a.secondRoot,children:[Object(l["jsx"])("div",{className:o.a.main,children:e.children}),Object(l["jsx"])(a["a"],{})]})})]})]})};t["a"]=b},d1CT:function(e,t,n){"use strict";n("miYZ");var r,i,a=n("tsqr"),s=n("WmNS"),c=n.n(s),o=(n("g9YV"),n("wCAj")),l=n("k1fw"),d=n("9og8"),u=n("tJVT"),p=(n("5Dmo"),n("3S7+")),m=n("q1tI"),b=n("Urjs");n("aN5g");(function(e){e["Cpp"]="cpp",e["C"]="c",e["Java"]="java",e["Kotlin"]="kotlin",e["Pascal"]="pascal",e["Python"]="python",e["Rust"]="rust",e["Swift"]="swift",e["Go"]="go",e["Haskell"]="haskell",e["CSharp"]="csharp",e["FSharp"]="fsharp"})(r||(r={})),function(e){e["Select"]="Select"}(i||(i={}));r.Cpp,r.C,r.Java,r.Kotlin,r.Pascal,r.Python,r.Rust,r.Swift,r.Go,r.Haskell,r.CSharp,r.FSharp;r.Cpp,i.Select,i.Select,i.Select,i.Select,r.C,i.Select,i.Select,i.Select,i.Select,r.Java,r.Kotlin,i.Select,i.Select,r.Pascal,i.Select,r.Python,i.Select,r.Rust,i.Select,i.Select,r.Swift,i.Select,i.Select,r.Go,i.Select,r.Haskell,i.Select,r.CSharp,i.Select,r.FSharp;var j,h,g=n("LYKr");(function(e){e["Accepted"]="Accepted",e["PartiallyCorrect"]="PartiallyCorrect",e["WrongAnswer"]="WrongAnswer",e["RuntimeError"]="RuntimeError",e["TimeLimitExceeded"]="TimeLimitExceeded",e["MemoryLimitExceeded"]="MemoryLimitExceeded",e["CompilationError"]="CompilationError",e["FileError"]="FileError",e["OutputLimitExceeded"]="OutputLimitExceeded",e["JudgementFailed"]="JudgementFailed",e["ConfigurationError"]="ConfigurationError",e["SystemError"]="SystemError",e["Canceled"]="Canceled",e["Pending"]="Pending",e["Frozen"]="Frozen"})(j||(j={})),function(e){e["Pending"]="Pending",e["ConfigurationError"]="ConfigurationError",e["SystemError"]="SystemError",e["Canceled"]="Canceled",e["CompilationError"]="CompilationError",e["FileError"]="FileError",e["RuntimeError"]="RuntimeError",e["TimeLimitExceeded"]="TimeLimitExceeded",e["MemoryLimitExceeded"]="MemoryLimitExceeded",e["OutputLimitExceeded"]="OutputLimitExceeded",e["PartiallyCorrect"]="PartiallyCorrect",e["WrongAnswer"]="WrongAnswer",e["Accepted"]="Accepted",e["JudgementFailed"]="JudgementFailed",e["Waiting"]="Waiting",e["Preparing"]="Preparing",e["Compiling"]="Compiling",e["Running"]="Running",e["Skipped"]="Skipped",e["Frozen"]="Frozen"}(h||(h={}));var x,v,f,O=["Accepted","WrongAnswer","Pending","RuntimeError","TimeLimitExceeded","MemoryLimitExceeded","OutputLimitExceeded","ConfigurationError","SystemError","Canceled","CompilationError","FileError","PartiallyCorrect","JudgementFailed","Waiting","Preparing","Compiling","Running","Skipped","Frozen"],y=n("hfhV"),w=n("RH92"),_=n("aoOD"),k=n.n(_),S=n("yeqW"),C=n.n(S),E=n("f133"),P=n("nKUr");function R(e){var t="#".concat(e.id,". ").concat(e.title);return Object(P["jsx"])("a",{href:"/problem/".concat(e.id),target:"_blank",children:Object(P["jsx"])(p["a"],{title:t,placement:"top",children:Object(P["jsx"])("div",{className:"h-ellipsis",children:t})})})}function L(e){return"".concat(e," ms")}(function(e){e["c"]="C",e["cpp"]="C++",e["java"]="Java",e["python"]="Python"})(x||(x={})),function(e){e["id"]="#",e["status"]="Status",e["who"]="Who",e["when"]="When",e["problem"]="Problem",e["time"]="Time",e["memory"]="Memory",e["answer"]="Answer"}(v||(v={})),function(e){e["Preparing"]="Preparing",e["Compiling"]="Compiling",e["Running"]="Running",e["Finished"]="Finished"}(f||(f={}));var N=e=>{var t,n,r=Object(m["useState"])(!0),i=Object(u["a"])(r,2),s=i[0],j=i[1],h=Object(m["useState"])([]),_=Object(u["a"])(h,2),S=_[0],N=_[1],I=Object(b["g"])({contestId:null}),F=Object(u["a"])(I,2),M=F[0],T=(F[1],null),A=1e3;function z(e){return B.apply(this,arguments)}function B(){return B=Object(d["a"])(c.a.mark((function t(n){var r,i,s,o,u;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=1e6,(null===n||void 0===n?void 0:n.takeCount)&&(r=n.takeCount),t.next=4,Object(d["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isContestSubmission&&null==M.contestId){t.next=7;break}return null!=M.contestId&&(n.contestId=M.contestId),t.next=4,E["c"].contest.getContestSubmissions(Object(l["a"])(Object(l["a"])({},n),{},{locale:"en_US",takeCount:r}));case 4:return t.abrupt("return",t.sent);case 7:return t.next=9,E["c"].submission.querySubmission(Object(l["a"])(Object(l["a"])({},n),{},{locale:"en_US",takeCount:r}));case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})))();case 4:i=t.sent,s=i.requestError,o=i.response,s?a["default"].error(s):o.error?a["default"].error(o.error):(u=[],o.submissions.forEach((e=>{var t,n=null;if("Pending"===e.status)switch(e.progressType){case f.Preparing:n="Preparing";break;case f.Compiling:n="Compiling";break;case f.Running:n="Running";break;default:n="Waiting"}else n=e.status;u.push({id:e.id,status:n,who:{username:e.submitter.username,nickname:e.submitter.nickname},when:e.submitTime,problem:{id:e.problem.id,title:e.problemTitle},time:null!==(t=e.timeUsed)&&void 0!==t?t:0,memory:e.memoryUsed,answer:{id:e.id,lang:e.codeLanguage,codeLength:e.answerSize}})})),N(u),u.some((e=>["Preparing","Compiling","Running","Waiting"].includes(e.status)))&&(null!=T&&clearTimeout(T),T=setTimeout((()=>{z(e.query)}),A)),j(!1));case 8:case"end":return t.stop()}}),t)}))),B.apply(this,arguments)}Object(m["useEffect"])((()=>{z(e.query)}),[]),Object(m["useEffect"])((()=>{null!=T&&clearTimeout(T),T=setTimeout((()=>{z(e.query)}),A)}),[e.query]);var W=[{title:v.id,dataIndex:"id",key:"id",width:"40px",align:"left",sorter:(e,t)=>e.id-t.id},{title:v.problem,dataIndex:"problem",key:"problem",width:"120px",align:"left",render:null!==(t=e.problemRender)&&void 0!==t?t:R},Object(l["a"])(Object(l["a"])({title:v.status,dataIndex:"status",key:"status",width:"100px",align:"center"},Object(b["e"])("status",v.status,O.map((e=>({title:Object(g["a"])(e),value:e}))))),{},{render:g["a"]}),{title:v.time,dataIndex:"time",key:"time",width:"60px",align:"center",sorter:(e,t)=>e.time-t.time,render:L},{title:v.memory,dataIndex:"memory",key:"memory",width:"60px",align:"center",sorter:(e,t)=>e.memory-t.memory,render:e=>Object(y["a"])(1024*e)},{title:v.answer,dataIndex:"answer",key:"answer",width:"80px",align:"center",render:t=>Object(P["jsxs"])(P["Fragment"],{children:[Object(P["jsx"])("a",{href:e.isContestSubmission?"/submission/".concat(t.id,"?contestId=").concat(e.query.contestId):"/submission/".concat(t.id),target:"_blank",children:x[t.lang]}),"/",Object(y["a"])(t.codeLength)]})},{title:v.who,dataIndex:"who",key:"who",width:"80px",align:"center",render:e=>Object(P["jsx"])("a",{href:"/user/".concat(e.username),target:"_blank",children:Object(P["jsx"])(p["a"],{title:e.username,placement:"top",children:Object(P["jsx"])("div",{className:"h-ellipsis",children:e.nickname})})})},{title:v.when,dataIndex:"when",key:"when",width:"80px",align:"center",render:e=>Object(P["jsx"])(w["a"],{date:e})}];return Object(P["jsx"])("div",{className:k.a.tableRoot,children:Object(P["jsx"])(o["a"],{loading:s,size:"small",scroll:null!==(n=e.scroll)&&void 0!==n?n:{x:1100},sticky:!0,columns:W.filter((t=>!(e.excludeColumns&&e.excludeColumns.includes(t.dataIndex)))),dataSource:S,className:C.a.table,rowKey:e=>e.id,pagination:!1!==e.pagination&&Object.assign({},{hideOnSinglePage:!0,showQuickJumper:!0,showSizeChanger:!0,defaultPageSize:16,pageSizeOptions:["8","16","32","64","128","256"]},e.pagination)})})};t["a"]=N},"d5+F":function(e,t,n){e.exports={root:"root___r7IPV",loading:"loading___KDMmm"}},foAP:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));n("q1tI");var r=n("/xQZ"),i=n.n(r),a=n("OUQG"),s=n("nKUr"),c=e=>Object(s["jsx"])("div",{className:"".concat(i.a.codeBoxSegment," ").concat(i.a.codeBoxPre),children:Object(s["jsx"])("pre",{className:"".concat(i.a.codeBoxContent),children:Object(s["jsx"])("div",{className:"language-".concat(e.language),dangerouslySetInnerHTML:{__html:"dangerouslySetInnerHTML"===e.language?e.code:Object(a["a"])(e.code,e.language)}})})}),o={segment:i.a.codeBoxSegment,content:i.a.codeBoxContent,pre:i.a.codeBoxPre}},gCJV:function(e,t,n){e.exports={exampleRoot:"exampleRoot___38k_z",input:"input___1TQHi",output:"output___jysY5",yourOutput:"yourOutput___2gv_d",checkerMessage:"checkerMessage___okmsY",title:"title___3yXDH",copyBtn:"copyBtn___W22Oj",downloadBtn:"downloadBtn___12pGg"}},hfhV:function(e,t,n){"use strict";function r(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=["K","M","G","T"],r="B",i=0,a=n;i<a.length;i++){var s=a[i];e>1024&&(e/=1024,r=s)}var c=e===Math.round(e)?e.toString():e.toFixed(t);return c+" "+r}n.d(t,"a",(function(){return r}))},kiQV:function(e){e.exports=JSON.parse('{"name":"judgeq-webapp","version":"0.0.74.15","description":"The WebApp of JudgeQ","repository":"https://github.com/JudgeQ-Dev/JudgeQ-WebApp","author":"Dup4","license":"AGPL-3.0","scripts":{"start":"cross-env umi dev","start:no-mock":"cross-env MOCK=none umi dev","start:no-ui":"cross-env UMI_UI=none umi dev","build":"cross-env NODE_OPTIONS=--max-old-space-size=4096 umi build","generate-api":"node scripts/generate-api.js http://localhost:3000/api/docs-json","postinstall":"umi generate tmp","prettier":"prettier --write \'src/**/*.{js,jsx,tsx,less,md,json}\' && prettier --write --parser=typescript \'src/**/*.ts?(x)\'","test":"umi-test","test:coverage":"umi-test --coverage"},"gitHooks":{"pre-commit":"lint-staged"},"lint-staged":{"*.{js,jsx,less,md,json}":["prettier --write"],"*.ts?(x)":["prettier --parser=typescript --write"]},"dependencies":{"@ahooksjs/use-url-state":"^2.5.6","@ant-design/pro-layout":"^6.5.0","@fortawesome/fontawesome-svg-core":"^1.2.35","@fortawesome/free-solid-svg-icons":"^5.15.3","@fortawesome/react-fontawesome":"^0.1.14","@hackmd/markdown-it-task-lists":"^2.1.1","@types/array-move":"^2.0.0","@types/react-dnd":"^3.0.2","@types/react-sortable-hoc":"^0.7.1","@types/validator":"^13.1.3","@umijs/preset-react":"1.x","ansi_up":"^5.0.0","antd":"^4.12.3","array-move":"^3.0.1","axios":"^0.21.1","blueimp-md5":"^2.18.0","class-validator":"^0.13.1","css-element-queries":"^1.2.3","dayjs":"^1.10.4","highcharts":"^9.0.1","highcharts-react-official":"^3.0.0","immutability-helper":"^3.1.1","markdown-it":"^12.0.4","markdown-it-container":"^3.0.0","markdown-it-math-loose":"^4.1.1","markdown-it-mentions":"^1.0.0","markdown-it-merge-cells":"^1.0.1","markdown-it-toc-and-anchor":"^4.2.0","mathjax-full":"^3.1.2","monaco-editor-webpack-plugin":"^3.0.0","p-all":"^3.0.0","prismjs":"^1.23.0","react-calendar-heatmap":"^1.8.1","react-dnd":"^14.0.2","react-dnd-html5-backend":"^14.0.0","react-google-recaptcha-v3":"^1.8.0","react-highlight-words":"^0.17.0","react-monaco-editor":"^0.42.0","react-sortable-hoc":"^2.0.0","react-tooltip":"^4.2.15","twemoji":"^13.0.1","umi":"^3.3.7","uuid":"^8.3.2","validator":"^13.5.2","xss":"^1.0.8"},"devDependencies":{"@types/blueimp-md5":"^2.7.0","@types/immutability-helper":"^2.6.3","@types/markdown-it":"^12.0.1","@types/markdown-it-container":"^2.0.3","@types/prismjs":"^1.16.3","@types/react":"^17.0.3","@types/react-calendar-heatmap":"^1.6.2","@types/react-dnd-html5-backend":"^3.0.2","@types/react-dom":"^16.9.0","@types/react-tooltip":"^4.2.4","@types/uuid":"^8.3.0","@umijs/preset-ui":"^2.2.9","@umijs/test":"^3.3.7","babel-plugin-import":"^1.13.3","babel-plugin-prismjs":"^2.0.1","cross-env":"^7.0.3","dtsgenerator":"2.7.0","lint-staged":"^10.0.7","prettier":"^2.2.0","react":"17.x","react-dom":"17.x","typescript":"^4.1.2","yorkie":"^2.0.0"},"engines":{"node":">=16.11.0"}}')},rqeN:function(e,t,n){"use strict";function r(e){var t=document.createElement("a");t.target="_blank",t.href=e,t.download="",t.click()}n.d(t,"a",(function(){return r}))},yeqW:function(e,t,n){e.exports={table:"table___167Jq"}}}]);