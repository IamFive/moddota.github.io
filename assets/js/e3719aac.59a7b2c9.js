"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[1139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3919:(e,t,r)=>{function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}r.d(t,{b:()=>o,Z:()=>n})},4996:(e,t,r)=>{r.d(t,{C:()=>a,Z:()=>i});var o=r(2263),n=r(3919);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(r,o)=>function(e,t,r,{forcePrependBaseUrl:o=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,n.b)(r))return r;if(o)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,o)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},8215:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(7294);const n=function({children:e,hidden:t,className:r}){return o.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},1395:(e,t,r)=>{r.d(t,{Z:()=>u});var o=r(7294),n=r(944),a=r(6010);const i="tabItem_1uMI",l="tabItemActive_2DSg";const s=37,c=39;const u=function(e){const{lazy:t,block:r,defaultValue:u,values:p,groupId:m,className:d}=e,{tabGroupChoices:f,setTabGroupChoices:b}=(0,n.Z)(),[h,y]=(0,o.useState)(u),v=o.Children.toArray(e.children),g=[];if(null!=m){const e=f[m];null!=e&&e!==h&&p.some((t=>t.value===e))&&y(e)}const k=e=>{const t=e.currentTarget,r=g.indexOf(t),o=p[r].value;y(o),null!=m&&(b(m,o),setTimeout((()=>{(function(e){const{top:t,left:r,bottom:o,right:n}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return t>=0&&n<=i&&o<=a&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},w=e=>{var t;let r;switch(e.keyCode){case c:{const t=g.indexOf(e.target)+1;r=g[t]||g[0];break}case s:{const t=g.indexOf(e.target)-1;r=g[t]||g[g.length-1];break}}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},d)},p.map((({value:e,label:t})=>o.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":h===e}),key:e,ref:e=>g.push(e),onKeyDown:w,onFocus:k,onClick:k},t)))),t?(0,o.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},9443:(e,t,r)=>{r.d(t,{Z:()=>o});const o=(0,r(7294).createContext)(void 0)},944:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(7294),n=r(9443);const a=function(){const e=(0,o.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,r)=>{r.d(t,{s:()=>n});var o=r(7294);function n({id:e,aspectRatio:t=4/3,hd:r="0"}){return o.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},o.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${r}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,r)=>{r.d(t,{s:()=>s});var o=r(2177),n=r(8215),a=r(1395),i=r(7294);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:r}){(0,o.Z)("string"==typeof t||void 0===t);const s=i.Children.toArray(e).map(((e,t)=>{var o;const n=(null==(o=e.props.children.props.className)?void 0:o.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==r&&r.length>0?r.split("|"):[])[t]??l[n]??n,element:e}}));return i.createElement(a.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:s[0].id,values:s.map((({id:e,languageName:t})=>({value:e,label:t})))},s.map((({id:e,element:t})=>i.createElement(n.Z,{key:e,value:e},t))))}},6776:(e,t,r)=>{r.d(t,{X:()=>a});var o=r(4996),n=r(7294);function a({path:e,controls:t=!1}){return n.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},n.createElement("source",{src:(0,o.Z)(e),type:"video/mp4"}))}},8129:(e,t,r)=>{r.d(t,{_:()=>n});var o=r(7294);function n({id:e,playlistId:t,aspectRatio:r=16/9}){const n=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return o.createElement("p",{style:{position:"relative",paddingBottom:1/r*100+"%"}},o.createElement("iframe",{src:n,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},4180:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,metadata:()=>l,toc:()=>s,default:()=>u});var o=r(7462),n=(r(7294),r(3905)),a=(r(1395),r(8215),r(7840));r(8129),r(8173),r(6776);const i={title:"Making skip/clip blocks out of models",author:"Noya",steamId:"76561198046984233",date:"27.06.2015"},l={unversionedId:"assets/maps/making-skip-clip-blocks-out-of-models",id:"assets/maps/making-skip-clip-blocks-out-of-models",isDocsHomePage:!1,title:"Making skip/clip blocks out of models",description:"This is the quickest but one very useful tip for Hammer map design.",source:"@site/_articles/assets/maps/making-skip-clip-blocks-out-of-models.md",sourceDirName:"assets/maps",slug:"/assets/maps/making-skip-clip-blocks-out-of-models",permalink:"/assets/maps/making-skip-clip-blocks-out-of-models",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/assets/maps/making-skip-clip-blocks-out-of-models.md",version:"current",frontMatter:{title:"Making skip/clip blocks out of models",author:"Noya",steamId:"76561198046984233",date:"27.06.2015"},sidebar:"tutorials",previous:{title:"Hammer Tutorials",permalink:"/assets/maps/hammer-tutorials"},next:{title:"Importing custom models",permalink:"/assets/models/importing-custom-models"}},s=[],c={toc:s};function u({components:e,...t}){return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is the quickest but one very useful tip for Hammer map design. "),(0,n.kt)("p",null,"When you drag a prop model into the map, it won't have any collision, so if you want heroes to walk over it or be blocked by it, you need to add a skip or clip block. You could make a very raw block like a neanderthal, but there is a better way that will maintain every edge on the model:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy Paste Special (Ctrl+Shift+V with the model selected)"),(0,n.kt)("li",{parentName:"ol"},"Selected props -> Convert into Editable Mesh (Ctrl+Shift+T with the newly selected pasted model)"),(0,n.kt)("li",{parentName:"ol"},"Apply material (Shift+T)")),(0,n.kt)(a.s,{id:"RemarkableWetDotterel",mdxType:"Gfycat"}),(0,n.kt)("p",null,"That's it."),(0,n.kt)(a.s,{id:"CarefreeScarceEthiopianwolf",mdxType:"Gfycat"}),(0,n.kt)("p",null,"Thanks BMD for the gyfs"))}u.isMDXComponent=!0},6010:(e,t,r)=>{function o(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:()=>n})}}]);