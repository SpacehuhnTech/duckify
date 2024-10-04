"use strict";(self.webpackChunkduckify=self.webpackChunkduckify||[]).push([[612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"basics",title:"Basics"},l=void 0,o={unversionedId:"scripting/basics",id:"scripting/basics",title:"Basics",description:"Duckify's script language is compatible with Ducky Script. However, some functions and keys were added or modified.",source:"@site/docs/scripting/basics.md",sourceDirName:"scripting",slug:"/scripting/basics",permalink:"/docs/scripting/basics",draft:!1,editUrl:"https://github.com/spacehuhntech/duckify/blob/main/docs/scripting/basics.md",tags:[],version:"current",frontMatter:{id:"basics",title:"Basics"},sidebar:"docs",previous:{title:"Edit VID & PID",permalink:"/docs/digispark/change-ids"},next:{title:"Functions",permalink:"/docs/scripting/functions"}},p={},s=[{value:"Basic rules:",id:"basic-rules",level:2},{value:"Example Script:",id:"example-script",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Duckify's script language is compatible with Ducky Script. However, some functions and keys were added or modified.\nYou can find a great Ducky Script quick reference ",(0,a.kt)("a",{parentName:"p",href:"https://docs.hak5.org/usb-rubber-ducky-1/the-ducky-script-language/ducky-script-quick-reference"},"at docs.hak5.org"),".")),(0,a.kt)("h2",{id:"basic-rules"},"Basic rules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A single space separates keys"),(0,a.kt)("li",{parentName:"ul"},"All keys as part of the same line gets pressed and released simultaneously"),(0,a.kt)("li",{parentName:"ul"},"To write text, use the ",(0,a.kt)("inlineCode",{parentName:"li"},"STRING")," function"),(0,a.kt)("li",{parentName:"ul"},"Upper and lower case matters!")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Example"),(0,a.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"WINDOWS R")),(0,a.kt)("td",{parentName:"tr",align:null},"Press the Windows key and the R key simultaneously")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"STRING Hello World")),(0,a.kt)("td",{parentName:"tr",align:null},'Write "Hello World"')))),(0,a.kt)("h2",{id:"example-script"},"Example Script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Hello World Example Script\nDEFAULTDELAY 200\nDELAY 2000\nGUI R\nSTRING notepad\nENTER\nSTRING Hello World!\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Line"),(0,a.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"# This is a comment")),(0,a.kt)("td",{parentName:"tr",align:null},"Comment something.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DEFAULTDELAY 200")),(0,a.kt)("td",{parentName:"tr",align:null},"Set the default delay between each line to 200 milliseconds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DELAY 2000")),(0,a.kt)("td",{parentName:"tr",align:null},"Wait 2 seconds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"GUI R")),(0,a.kt)("td",{parentName:"tr",align:null},"Press the Windows key and the R key simultaneously to open the run window.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"STRING notepad")),(0,a.kt)("td",{parentName:"tr",align:null},'Type "notepad".')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ENTER")),(0,a.kt)("td",{parentName:"tr",align:null},"Press enter key to launch the Windows Notepad application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"STRING Hello World!")),(0,a.kt)("td",{parentName:"tr",align:null},'Type "Hello World!" into the newly opened notepad window.')))))}u.isMDXComponent=!0}}]);