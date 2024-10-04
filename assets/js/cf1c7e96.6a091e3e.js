"use strict";(self.webpackChunkduckify=self.webpackChunkduckify||[]).push([[827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(k,o(o({ref:t},d),{},{components:r})):n.createElement(k,o({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"arduino-setup",title:"Arduino Setup"},o=void 0,s={unversionedId:"digispark/arduino-setup",id:"digispark/arduino-setup",title:"Arduino Setup",description:"Drivers",source:"@site/docs/digispark/arduino-setup.md",sourceDirName:"digispark",slug:"/digispark/arduino-setup",permalink:"/docs/digispark/arduino-setup",draft:!1,editUrl:"https://github.com/spacehuhntech/duckify/blob/main/docs/digispark/arduino-setup.md",tags:[],version:"current",frontMatter:{id:"arduino-setup",title:"Arduino Setup"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/digispark/getting-started"},next:{title:"Usage",permalink:"/docs/digispark/usage"}},l={},p=[{value:"Drivers",id:"drivers",level:2},{value:"Setup Arduino-IDE",id:"setup-arduino-ide",level:2},{value:"Flash example sketch",id:"flash-example-sketch",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"drivers"},"Drivers"),(0,a.kt)("p",null,"To make the Digispark work with Arduino on Windows, you need to install drivers.  "),(0,a.kt)("admonition",{title:"Drivers",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/digistump/DigistumpArduino/releases/download/1.6.7/Digistump.Drivers.zip"},"Download Digispark drivers for Windows"),'. Unzip and run "Install Drivers.exe".')),(0,a.kt)("h2",{id:"setup-arduino-ide"},"Setup Arduino-IDE"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Download and install Arduino IDE")),(0,a.kt)("li",{parentName:"ol"},"Start Arduino IDE"),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"File")," > ",(0,a.kt)("strong",{parentName:"li"},"Preferences")," > ",(0,a.kt)("strong",{parentName:"li"},"Additional Boards Manager URLs")," and paste",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/ArminJo/DigistumpArduino/master/package_digistump_index.json")," then click OK to save and close the Preferences\n",(0,a.kt)("img",{alt:"Digispark Board URL",src:r(2419).Z,width:"1920",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Tools")," > ",(0,a.kt)("strong",{parentName:"li"},"Board")," > ",(0,a.kt)("strong",{parentName:"li"},"Boards Manager"),", search for ",(0,a.kt)("inlineCode",{parentName:"li"},"Digispark"),' and install "Digistump AVR Boards"\n',(0,a.kt)("img",{alt:"Install Digispark Boards",src:r(1399).Z,width:"1920",height:"1080"}))),(0,a.kt)("h2",{id:"flash-example-sketch"},"Flash example sketch"),(0,a.kt)("p",null,"You can upload an example to ensure everything is correctly set up and working."),(0,a.kt)("admonition",{title:"6s delay",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Digispark goes into a bootloader mode for 6 seconds when plugged in. You can only upload new firmware in these 6s. Afterward, it will leave this mode and run the code you flashed onto it. So you ",(0,a.kt)("strong",{parentName:"p"},"always have this 6-second delay")," before your code starts.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Tools")," > ",(0,a.kt)("strong",{parentName:"li"},"Board")," > ",(0,a.kt)("strong",{parentName:"li"},"Digistump Boards")," and select ",(0,a.kt)("strong",{parentName:"li"},"Digispark")),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("strong",{parentName:"li"},"File")," > ",(0,a.kt)("strong",{parentName:"li"},"Examples")," > ",(0,a.kt)("strong",{parentName:"li"},"Digispark_Examples")," > ",(0,a.kt)("strong",{parentName:"li"},"Blink")),(0,a.kt)("li",{parentName:"ol"},"Click Upload (in the top left)"),(0,a.kt)("li",{parentName:"ol"},"Plugin your Digispark when told (check the output at the bottom)")),(0,a.kt)("p",null,"When done, the LED on your Digispark should start blinking."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"One user reported that on Kali Linux, they had to copy the file ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/micronucleus/micronucleus/master/commandline/49-micronucleus.rules"},"https://raw.githubusercontent.com/micronucleus/micronucleus/master/commandline/49-micronucleus.rules")," to the /etc/udev/rules.d folder.")))}c.isMDXComponent=!0},2419:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Digispark-URL-Arduino-bba673ea3224d7cd69402af7f87ac42f.jpg"},1399:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Install-Digispark-49e671ad39edaedcd2bbebe2e5448c9b.jpg"}}]);