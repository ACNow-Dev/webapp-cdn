(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{CTc0:function(e,t,n){"use strict";n.r(t);n("q1tI");var r=n("7AqN"),i=n("SDKw"),a=n.n(i),o=n("Ecwe"),c=n("d7U/"),s=n("nKUr"),l=e=>{var t=Object(r["l"])();return Object(s["jsx"])(o["b"],{current:"submissions",children:Object(s["jsx"])("div",{className:a.a.root,children:Object(s["jsx"])(c["a"],{username:null,contestId:parseInt(t.id)})})})};t["default"]=l},Gyry:function(e,t,n){e.exports={Pending:"Pending___3zQJH",ConfigurationError:"ConfigurationError___2_4Eg",SystemError:"SystemError___3QpJp",CompilationError:"CompilationError___3r9Lh",Canceled:"Canceled___3bbf_",FileError:"FileError___2D0PI",RuntimeError:"RuntimeError___1Uw6w",TimeLimitExceeded:"TimeLimitExceeded___20uFb",MemoryLimitExceeded:"MemoryLimitExceeded___u0NLe",OutputLimitExceeded:"OutputLimitExceeded___2X62j",PartiallyCorrect:"PartiallyCorrect___1CU0g",WrongAnswer:"WrongAnswer___XXyjV",Accepted:"Accepted___2ucPz",JudgementFailed:"JudgementFailed___393l9",Waiting:"Waiting___8-aCp",Preparing:"Preparing___GV7c0",Compiling:"Compiling___wOPj4",Running:"Running___2Qx3t",Skipped:"Skipped___2b8Bm",Frozen:"Frozen___2u9DS"}},LYKr:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("Gyry"),i=n.n(r),a=n("nKUr");function o(e){return e.replace(/([A-Z])/g," $1").slice(1)}function c(e){return Object(a["jsx"])("span",{className:i.a[e],style:{fontWeight:"bold"},children:o(e)})}},SDKw:function(e,t,n){e.exports={root:"root___1brP-"}},aN5g:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return l}));var r=n("+QwO"),i=n.n(r);function a(e){return/^[a-zA-Z0-9\-_.#$]{3,24}$/.test(e)}function o(e){return e.length>=6&&e.length<=32}function c(e){return i.a.isEmail(e)}function s(e){var t=["/","\0"],n=[".",".."];return t.every((t=>-1===e.indexOf(t)))&&!n.includes(e)}function l(e){return e.replace(/[^\d]/g,"")}},aoOD:function(e,t,n){e.exports={tableRoot:"tableRoot___3xWj7"}},d1CT:function(e,t,n){"use strict";n("miYZ");var r,i,a=n("tsqr"),o=n("WmNS"),c=n.n(o),s=(n("g9YV"),n("wCAj")),l=n("k1fw"),u=n("9og8"),d=n("tJVT"),m=(n("5Dmo"),n("3S7+")),p=n("q1tI"),g=n("Urjs");n("aN5g");(function(e){e["Cpp"]="cpp",e["C"]="c",e["Java"]="java",e["Kotlin"]="kotlin",e["Pascal"]="pascal",e["Python"]="python",e["Rust"]="rust",e["Swift"]="swift",e["Go"]="go",e["Haskell"]="haskell",e["CSharp"]="csharp",e["FSharp"]="fsharp"})(r||(r={})),function(e){e["Select"]="Select"}(i||(i={}));r.Cpp,r.C,r.Java,r.Kotlin,r.Pascal,r.Python,r.Rust,r.Swift,r.Go,r.Haskell,r.CSharp,r.FSharp;r.Cpp,i.Select,i.Select,i.Select,i.Select,r.C,i.Select,i.Select,i.Select,i.Select,r.Java,r.Kotlin,i.Select,i.Select,r.Pascal,i.Select,r.Python,i.Select,r.Rust,i.Select,i.Select,r.Swift,i.Select,i.Select,r.Go,i.Select,r.Haskell,i.Select,r.CSharp,i.Select,r.FSharp;var b,h,f=n("LYKr");(function(e){e["Accepted"]="Accepted",e["PartiallyCorrect"]="PartiallyCorrect",e["WrongAnswer"]="WrongAnswer",e["RuntimeError"]="RuntimeError",e["TimeLimitExceeded"]="TimeLimitExceeded",e["MemoryLimitExceeded"]="MemoryLimitExceeded",e["CompilationError"]="CompilationError",e["FileError"]="FileError",e["OutputLimitExceeded"]="OutputLimitExceeded",e["JudgementFailed"]="JudgementFailed",e["ConfigurationError"]="ConfigurationError",e["SystemError"]="SystemError",e["Canceled"]="Canceled",e["Pending"]="Pending",e["Frozen"]="Frozen"})(b||(b={})),function(e){e["Pending"]="Pending",e["ConfigurationError"]="ConfigurationError",e["SystemError"]="SystemError",e["Canceled"]="Canceled",e["CompilationError"]="CompilationError",e["FileError"]="FileError",e["RuntimeError"]="RuntimeError",e["TimeLimitExceeded"]="TimeLimitExceeded",e["MemoryLimitExceeded"]="MemoryLimitExceeded",e["OutputLimitExceeded"]="OutputLimitExceeded",e["PartiallyCorrect"]="PartiallyCorrect",e["WrongAnswer"]="WrongAnswer",e["Accepted"]="Accepted",e["JudgementFailed"]="JudgementFailed",e["Waiting"]="Waiting",e["Preparing"]="Preparing",e["Compiling"]="Compiling",e["Running"]="Running",e["Skipped"]="Skipped",e["Frozen"]="Frozen"}(h||(h={}));var _,x,C,j=["Accepted","WrongAnswer","Pending","RuntimeError","TimeLimitExceeded","MemoryLimitExceeded","OutputLimitExceeded","ConfigurationError","SystemError","Canceled","CompilationError","FileError","PartiallyCorrect","JudgementFailed","Waiting","Preparing","Compiling","Running","Skipped","Frozen"],y=n("hfhV"),E=n("RH92"),S=n("aoOD"),w=n.n(S),O=n("yeqW"),k=n.n(O),v=n("f133"),P=n("nKUr");function F(e){var t="#".concat(e.id,". ").concat(e.title);return Object(P["jsx"])("a",{href:"/problem/".concat(e.id),target:"_blank",children:Object(P["jsx"])(m["a"],{title:t,placement:"top",children:Object(P["jsx"])("div",{className:"h-ellipsis",children:t})})})}function L(e){return"".concat(e," ms")}(function(e){e["c"]="C",e["cpp"]="C++",e["java"]="Java",e["python"]="Python"})(_||(_={})),function(e){e["id"]="#",e["status"]="Status",e["who"]="Who",e["when"]="When",e["problem"]="Problem",e["time"]="Time",e["memory"]="Memory",e["answer"]="Answer"}(x||(x={})),function(e){e["Preparing"]="Preparing",e["Compiling"]="Compiling",e["Running"]="Running",e["Finished"]="Finished"}(C||(C={}));var I=e=>{var t,n,r=Object(p["useState"])(!0),i=Object(d["a"])(r,2),o=i[0],b=i[1],h=Object(p["useState"])([]),S=Object(d["a"])(h,2),O=S[0],I=S[1],R=Object(g["g"])({contestId:null}),W=Object(d["a"])(R,2),T=W[0],A=(W[1],null),J=1e3;function q(e){return z.apply(this,arguments)}function z(){return z=Object(u["a"])(c.a.mark((function t(n){var r,i,o,s,d;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=1e6,(null===n||void 0===n?void 0:n.takeCount)&&(r=n.takeCount),t.next=4,Object(u["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isContestSubmission&&null==T.contestId){t.next=7;break}return null!=T.contestId&&(n.contestId=T.contestId),t.next=4,v["c"].contest.getContestSubmissions(Object(l["a"])(Object(l["a"])({},n),{},{locale:"en_US",takeCount:r}));case 4:return t.abrupt("return",t.sent);case 7:return t.next=9,v["c"].submission.querySubmission(Object(l["a"])(Object(l["a"])({},n),{},{locale:"en_US",takeCount:r}));case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t)})))();case 4:i=t.sent,o=i.requestError,s=i.response,o?a["default"].error(o):s.error?a["default"].error(s.error):(d=[],s.submissions.forEach((e=>{var t,n=null;if("Pending"===e.status)switch(e.progressType){case C.Preparing:n="Preparing";break;case C.Compiling:n="Compiling";break;case C.Running:n="Running";break;default:n="Waiting"}else n=e.status;d.push({id:e.id,status:n,who:{username:e.submitter.username,nickname:e.submitter.nickname},when:e.submitTime,problem:{id:e.problem.id,title:e.problemTitle},time:null!==(t=e.timeUsed)&&void 0!==t?t:0,memory:e.memoryUsed,answer:{id:e.id,lang:e.codeLanguage,codeLength:e.answerSize}})})),I(d),d.some((e=>["Preparing","Compiling","Running","Waiting"].includes(e.status)))&&(null!=A&&clearTimeout(A),A=setTimeout((()=>{q(e.query)}),J)),b(!1));case 8:case"end":return t.stop()}}),t)}))),z.apply(this,arguments)}Object(p["useEffect"])((()=>{q(e.query)}),[]),Object(p["useEffect"])((()=>{null!=A&&clearTimeout(A),A=setTimeout((()=>{q(e.query)}),J)}),[e.query]);var K=[{title:x.id,dataIndex:"id",key:"id",width:"40px",align:"left",sorter:(e,t)=>e.id-t.id},{title:x.problem,dataIndex:"problem",key:"problem",width:"120px",align:"left",render:null!==(t=e.problemRender)&&void 0!==t?t:F},Object(l["a"])(Object(l["a"])({title:x.status,dataIndex:"status",key:"status",width:"100px",align:"center"},Object(g["e"])("status",x.status,j.map((e=>({title:Object(f["a"])(e),value:e}))))),{},{render:f["a"]}),{title:x.time,dataIndex:"time",key:"time",width:"60px",align:"center",sorter:(e,t)=>e.time-t.time,render:L},{title:x.memory,dataIndex:"memory",key:"memory",width:"60px",align:"center",sorter:(e,t)=>e.memory-t.memory,render:e=>Object(y["a"])(1024*e)},{title:x.answer,dataIndex:"answer",key:"answer",width:"80px",align:"center",render:t=>Object(P["jsxs"])(P["Fragment"],{children:[Object(P["jsx"])("a",{href:e.isContestSubmission?"/submission/".concat(t.id,"?contestId=").concat(e.query.contestId):"/submission/".concat(t.id),target:"_blank",children:_[t.lang]}),"/",Object(y["a"])(t.codeLength)]})},{title:x.who,dataIndex:"who",key:"who",width:"80px",align:"center",render:e=>Object(P["jsx"])("a",{href:"/user/".concat(e.username),target:"_blank",children:Object(P["jsx"])(m["a"],{title:e.username,placement:"top",children:Object(P["jsx"])("div",{className:"h-ellipsis",children:e.nickname})})})},{title:x.when,dataIndex:"when",key:"when",width:"80px",align:"center",render:e=>Object(P["jsx"])(E["a"],{date:e})}];return Object(P["jsx"])("div",{className:w.a.tableRoot,children:Object(P["jsx"])(s["a"],{loading:o,size:"small",scroll:null!==(n=e.scroll)&&void 0!==n?n:{x:1100},sticky:!0,columns:K.filter((t=>!(e.excludeColumns&&e.excludeColumns.includes(t.dataIndex)))),dataSource:O,className:k.a.table,rowKey:e=>e.id,pagination:!1!==e.pagination&&Object.assign({},{hideOnSinglePage:!0,showQuickJumper:!0,showSizeChanger:!0,defaultPageSize:16,pageSizeOptions:["8","16","32","64","128","256"]},e.pagination)})})};t["a"]=I},"d7U/":function(e,t,n){"use strict";var r=n("q1tI"),i=n("d1CT"),a=n("Ecwe"),o=n("YjBB"),c=n("nKUr"),s=e=>{var t=Object(r["useContext"])(a["a"]);return Object(c["jsx"])(i["a"],{query:{submitter:e.username,contestId:e.contestId,problemId:e.problemId},problemRender:Object(o["e"])(t),isContestSubmission:!0,excludeColumns:e.excludeColumns,scroll:e.scroll,pagination:e.pagination})};t["a"]=s},hfhV:function(e,t,n){"use strict";function r(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=["K","M","G","T"],r="B",i=0,a=n;i<a.length;i++){var o=a[i];e>1024&&(e/=1024,r=o)}var c=e===Math.round(e)?e.toString():e.toFixed(t);return c+" "+r}n.d(t,"a",(function(){return r}))},yeqW:function(e,t,n){e.exports={table:"table___167Jq"}}}]);