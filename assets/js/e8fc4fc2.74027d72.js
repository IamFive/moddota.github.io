"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[2094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:(e,t,n)=>{function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,{b:()=>i,Z:()=>a})},4996:(e,t,n)=>{n.d(t,{C:()=>r,Z:()=>l});var i=n(2263),a=n(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,i.Z)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;const l=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+l:l}(t,e,n,i)}}function l(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(7294);const a=function({children:e,hidden:t,className:n}){return i.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(7294),a=n(944),r=n(6010);const l="tabItem_1uMI",o="tabItemActive_2DSg";const s=37,c=39;const u=function(e){const{lazy:t,block:n,defaultValue:u,values:d,groupId:p,className:m}=e,{tabGroupChoices:h,setTabGroupChoices:b}=(0,a.Z)(),[f,y]=(0,i.useState)(u),v=i.Children.toArray(e.children),g=[];if(null!=p){const e=h[p];null!=e&&e!==f&&d.some((t=>t.value===e))&&y(e)}const w=e=>{const t=e.currentTarget,n=g.indexOf(t),i=d[n].value;y(i),null!=p&&(b(p,i),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:i,right:a}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:l}=window;return t>=0&&a<=l&&i<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((()=>t.classList.remove(o)),2e3))}),150))},k=e=>{var t;let n;switch(e.keyCode){case c:{const t=g.indexOf(e.target)+1;n=g[t]||g[0];break}case s:{const t=g.indexOf(e.target)-1;n=g[t]||g[g.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},d.map((({value:e,label:t})=>i.createElement("li",{role:"tab",tabIndex:f===e?0:-1,"aria-selected":f===e,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":f===e}),key:e,ref:e=>g.push(e),onKeyDown:k,onFocus:w,onClick:w},t)))),t?(0,i.cloneElement)(v.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>i});const i=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(7294),a=n(9443);const r=function(){const e=(0,i.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,n)=>{n.d(t,{s:()=>a});var i=n(7294);function a({id:e,aspectRatio:t=4/3,hd:n="0"}){return i.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},i.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,n)=>{n.d(t,{s:()=>s});var i=n(2177),a=n(8215),r=n(1395),l=n(7294);const o={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function s({children:e,group:t,titles:n}){(0,i.Z)("string"==typeof t||void 0===t);const s=l.Children.toArray(e).map(((e,t)=>{var i;const a=(null==(i=e.props.children.props.className)?void 0:i.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==n&&n.length>0?n.split("|"):[])[t]??o[a]??a,element:e}}));return l.createElement(r.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:s[0].id,values:s.map((({id:e,languageName:t})=>({value:e,label:t})))},s.map((({id:e,element:t})=>l.createElement(a.Z,{key:e,value:e},t))))}},6776:(e,t,n)=>{n.d(t,{X:()=>r});var i=n(4996),a=n(7294);function r({path:e,controls:t=!1}){return a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},a.createElement("source",{src:(0,i.Z)(e),type:"video/mp4"}))}},8129:(e,t,n)=>{n.d(t,{_:()=>a});var i=n(7294);function a({id:e,playlistId:t,aspectRatio:n=16/9}){const a=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return i.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},i.createElement("iframe",{src:a,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},2434:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,metadata:()=>l,toc:()=>o,default:()=>c});var i=n(7462),a=(n(7294),n(3905));n(1395),n(8215),n(7840),n(8129),n(8173),n(6776);const r={title:"Creating innate (available from level 1) abilities",author:"DoctorGester",steamId:"76561198046920629",date:"27.09.2019"},l={unversionedId:"abilities/creating-innate-abilities",id:"abilities/creating-innate-abilities",isDocsHomePage:!1,title:"Creating innate (available from level 1) abilities",description:"This article will guide you through creating an ability which is available to the given hero right away, like Earth Spirit's Stone Remnant.",source:"@site/_articles/abilities/creating-innate-abilities.md",sourceDirName:"abilities",slug:"/abilities/creating-innate-abilities",permalink:"/abilities/creating-innate-abilities",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/abilities/creating-innate-abilities.md",version:"current",frontMatter:{title:"Creating innate (available from level 1) abilities",author:"DoctorGester",steamId:"76561198046920629",date:"27.09.2019"},sidebar:"tutorials",previous:{title:"Simple Custom Ability",permalink:"/abilities/simple-custom-ability"},next:{title:"Making any ability use charges",permalink:"/abilities/making-any-ability-use-charges"}},o=[{value:"Lua abilities",id:"lua-abilities",children:[]},{value:"Datadriven and builtin abilities",id:"datadriven-and-builtin-abilities",children:[]}],s={toc:o};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article will guide you through creating an ability which is available to the given hero right away, like Earth Spirit's Stone Remnant.\nThis guide assumes you already have an ability set up on a hero."),(0,a.kt)("h2",{id:"lua-abilities"},"Lua abilities"),(0,a.kt)("p",null,"Lua abilities can define a ",(0,a.kt)("inlineCode",{parentName:"p"},"Spawn")," method, that is invoked by the engine when ability is cretated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"my_innate_ability = my_innate_ability or {}\nfunction my_innate_ability:Spawn()\n    if IsServer() then\n        self:SetLevel(1)\n    end\nend\n")),(0,a.kt)("h2",{id:"datadriven-and-builtin-abilities"},"Datadriven and builtin abilities"),(0,a.kt)("p",null,"The plan is:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Subscribe to the hero spawn event"),(0,a.kt)("li",{parentName:"ol"},"Determine if the spawned hero has a specific ability"),(0,a.kt)("li",{parentName:"ol"},"Level it up")),(0,a.kt)("p",null,"Okay. Since the entry point to every mod is the file ",(0,a.kt)("inlineCode",{parentName:"p"},"addon_game_mode.lua")," go right there and find ",(0,a.kt)("inlineCode",{parentName:"p"},"function Activate()"),".\nActivate is the function called on the very start of our custom game when all the players have loaded.\nWe can subscribe to events using ",(0,a.kt)("inlineCode",{parentName:"p"},"ListenToGameEvent"),"."),(0,a.kt)("p",null,"Put the following code inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Activate")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"ListenToGameEvent('npc_spawned', function(event)\n    HandleNpcSpawned(event.entindex)\nend, nil)\n")),(0,a.kt)("p",null,"This code is subscribing to the ",(0,a.kt)("inlineCode",{parentName:"p"},"npc_spawned")," event and then calling the HandleNpcSpawned function (we will create that later) with the spawned entity index.\nThat entity index is provided to us in the event table when the event is triggered."),(0,a.kt)("p",null,"Let's create the ",(0,a.kt)("inlineCode",{parentName:"p"},"HandleNpcSpawned")," function, put it in the same file just below ",(0,a.kt)("inlineCode",{parentName:"p"},"Activate"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'function HandleNpcSpawned(entityIndex)\n    local entity = EntIndexToHScript(entityIndex)\n    local innateAbilityName = "my_innate_ability"\n    \n    if entity:IsRealHero() and entity:HasAbility(innateAbilityName) then\n        entity:FindAbilityByName(innateAbilityName):SetLevel(1)\n    end\nend\n')),(0,a.kt)("p",null,"Let's go line by line here. After defining a function which accepts our entityIndex parameter we define a variable, which holds the actual entity.\nWe turn entity index into an actual entity using ",(0,a.kt)("inlineCode",{parentName:"p"},"EntIndexToHScript"),". Now we can call methods on our actual entity.\nFirst we declare our innate ability name for easier usage.\nThen we make a condition where we check that our entity is indeed a hero and that it has that ability.\nIf all conditions hold true we get the handle of that ability and set it to level 1 right away."),(0,a.kt)("p",null,"That's it! Now all heroes who have ",(0,a.kt)("inlineCode",{parentName:"p"},"my_innate_ability")," will automatically have it leveled up on spawn."))}c.isMDXComponent=!0},6010:(e,t,n)=>{function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);