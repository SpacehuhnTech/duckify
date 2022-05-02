"use strict";(self.webpackChunkduckify=self.webpackChunkduckify||[]).push([[535],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=l(r),f=o,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(g,a(a({ref:e},s),{},{components:r})):n.createElement(g,a({ref:e},s))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=p;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1171:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={id:"about",title:"About"},c=void 0,l={unversionedId:"about",id:"about",title:"About",description:"Duckify is a free and open-source converter for turning BadUSB scripts into Arduino sketches that can run on development boards like the Digispark.",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/docs/about",editUrl:"https://github.com/spacehuhntech/duckify/docs/about.md",tags:[],version:"current",frontMatter:{id:"about",title:"About"},sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/digispark/getting-started"}},s={},d=[{value:"Usage",id:"usage",level:2}],p={toc:d};function f(t){var e=t.components,r=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("img",{src:"/logo512.png",width:"128px",alt:"Duckify Logo"}),(0,i.kt)("p",null,"Duckify is a free and open-source converter for turning BadUSB scripts into Arduino sketches that can run on development boards like the Digispark."),(0,i.kt)("p",null,"It supports a variety of keyboard layouts, including those for macOS, and is compatible with Ducky Script. \ud83d\ude80"),(0,i.kt)("a",{href:"https://ko-fi.com/G2G75FA4V",target:"_blank"},(0,i.kt)("img",{height:"36",style:{border:0,height:"36px"},src:"/img/kofi_button.png",border:"0",alt:"Buy Me a Coffee at ko-fi.com"})),"\xa0",(0,i.kt)("a",{href:"https://discord.com/invite/238wu8g"},(0,i.kt)("img",{height:"36",style:{border:0,height:"36px"},src:"/img/discord_button.png",alt:"Discord Server button"})),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"1. \u270d\ufe0f Add your BadUSB Script"),(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/Duckify_1_BadUSB_Script.jpg",alt:"Duckify Usage Adding BadUSB Script"}),(0,i.kt)("p",null,"Paste your BadUSB script into the text area on the left. The scripting language is compatible to Ducky Script. You can find a complete reference at ",(0,i.kt)("a",{href:"/docs/scripting/basics"},"Scripting"),"."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"2. \u2699\ufe0f Change layout and other options"),(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/Duckify_2_Settings.jpg",alt:"Duckify Usage Chaning settings"}),(0,i.kt)("p",null,"At the bottom, you can set the keyboard layout according to the target computer. Over 30 different layouts are available for both macOS and Windows. You can also give the script a name, which will be used as the filename if you download your script."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"3. \ud83d\udc47 Hit Convert and download output"),(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/Duckify_3_Convert_Download.jpg",alt:"Duckify Usage Converting"}),(0,i.kt)("p",null,"After clicking Convert, the Arduino code appears in the right text area. A notification tells you if the conversion was successful or errors occurred. You can copy the generated output or download it to open it in Arduino IDE."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"4. \u26a1 Flash Arduino sketch"),(0,i.kt)("div",null,(0,i.kt)("img",{src:"/img/Duckify_4_Arduino.jpg",alt:"Duckify Usage Flashing in Arduino"}),(0,i.kt)("p",null,"Open the downloaded sketch and open it in Arduino IDE. Make sure you selected your board and hit upload. For a more detailed tutorial, see ",(0,i.kt)("a",{href:"/docs/digispark/getting-started"},"Digispark Basics"),"."))))}f.isMDXComponent=!0}}]);