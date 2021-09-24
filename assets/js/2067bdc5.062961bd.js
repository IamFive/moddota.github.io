"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[5632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>o,Z:()=>s});var a=n(2263),r=n(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+s:s}(t,e,n,a)}}function s(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),r=n(944),o=n(6010);const s="tabItem_1uMI",l="tabItemActive_2DSg";const i=37,c=39;const u=function(e){const{lazy:t,block:n,defaultValue:u,values:p,groupId:m,className:d}=e,{tabGroupChoices:h,setTabGroupChoices:f}=(0,r.Z)(),[g,y]=(0,a.useState)(u),k=a.Children.toArray(e.children),b=[];if(null!=m){const e=h[m];null!=e&&e!==g&&p.some((t=>t.value===e))&&y(e)}const v=e=>{const t=e.currentTarget,n=b.indexOf(t),a=p[n].value;y(a),null!=m&&(f(m,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:s}=window;return t>=0&&r<=s&&a<=o&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},w=e=>{var t;let n;switch(e.keyCode){case c:{const t=b.indexOf(e.target)+1;n=b[t]||b[0];break}case i:{const t=b.indexOf(e.target)-1;n=b[t]||b[b.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},p.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":g===e}),key:e,ref:e=>b.push(e),onKeyDown:w,onFocus:v,onClick:v},t)))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(9443);const o=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,n)=>{n.d(t,{s:()=>r});var a=n(7294);function r({id:e,aspectRatio:t=4/3,hd:n="0"}){return a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,n)=>{n.d(t,{s:()=>i});var a=n(2177),r=n(8215),o=n(1395),s=n(7294);const l={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function i({children:e,group:t,titles:n}){(0,a.Z)("string"==typeof t||void 0===t);const i=s.Children.toArray(e).map(((e,t)=>{var a;const r=(null==(a=e.props.children.props.className)?void 0:a.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==n&&n.length>0?n.split("|"):[])[t]??l[r]??r,element:e}}));return s.createElement(o.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:i[0].id,values:i.map((({id:e,languageName:t})=>({value:e,label:t})))},i.map((({id:e,element:t})=>s.createElement(r.Z,{key:e,value:e},t))))}},6776:(e,t,n)=>{n.d(t,{X:()=>o});var a=n(4996),r=n(7294);function o({path:e,controls:t=!1}){return r.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},r.createElement("source",{src:(0,a.Z)(e),type:"video/mp4"}))}},8129:(e,t,n)=>{n.d(t,{_:()=>r});var a=n(7294);function r({id:e,playlistId:t,aspectRatio:n=16/9}){const r=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.createElement("iframe",{src:r,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},7849:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>i,toc:()=>c,default:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(1395),s=n(8215);n(7840),n(8129),n(8173),n(6776);const l={title:"React in Panorama",author:"ark120202"},i={unversionedId:"panorama/react",id:"panorama/react",isDocsHomePage:!1,title:"React in Panorama",description:"React is a JavaScript library for building user interfaces. It allows you to break down UI into small reusable building blocks (components) and simplifies state management.",source:"@site/_articles/panorama/react.md",sourceDirName:"panorama",slug:"/panorama/react",permalink:"/panorama/react",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/panorama/react.md",version:"current",frontMatter:{title:"React in Panorama",author:"ark120202"},sidebar:"tutorials",previous:{title:"Bundling scripts with webpack",permalink:"/panorama/webpack"},next:{title:"Asset File Type Reference",permalink:"/assets/asset-file-type-reference"}},c=[{value:"Installation",id:"installation",children:[]},{value:"JSX",id:"jsx",children:[]},{value:"Components",id:"components",children:[]},{value:"State",id:"state",children:[]},{value:"Listening to events",id:"listening-to-events",children:[{value:"Custom hooks",id:"custom-hooks",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],u={toc:c};function p({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React is a JavaScript library for building user interfaces. It allows you to break down UI into small reusable building blocks (components) and simplifies state management."),(0,r.kt)("p",null,"Usually React is used for building websites and web applications, but ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ark120202/react-panorama"},(0,r.kt)("inlineCode",{parentName:"a"},"react-panorama"))," allows you to use the power of React in Dota 2."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To avoid wasting time on configuration, it's recommended to start with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ark120202/dota-templates/tree/webpack-react"},"JavaScript")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ark120202/dota-templates/tree/webpack-typescript-react"},"TypeScript")," templates, even if you're integrating it into an existing project."),(0,r.kt)("p",null,"Alternatively, if you want to configure build tools yourself, or you want to use it without any build steps (UMD), you can check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ark120202/react-panorama#installation"},(0,r.kt)("inlineCode",{parentName:"a"},"react-panorama")," installation guide"),"."),(0,r.kt)("h2",{id:"jsx"},"JSX"),(0,r.kt)("p",null,"Here's a basic hello-world application built with React:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { render } from 'react-panorama';\n\nrender(<Label text=\"Hello, world!\" />, $.GetContextPanel());\n")),(0,r.kt)("p",null,"The first parameter that gets passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," function is a tree of components constructed using JSX - an extension to the JavaScript syntax."),(0,r.kt)("p",null,"JSX tree is a regular JavaScript expression, just like a string, or object literal. That means you can manipulate it like any regular JS value - store it in variables, use it in conditions, or return it from functions."),(0,r.kt)("p",null,"For more information about JSX you can check out ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/introducing-jsx.html"},"official React documentation"),"."),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"Instead of having all your UI in a monolithic XML file, React encourages you to split functionality into small building blocks - components."),(0,r.kt)("p",null,"In React, components are simple functions that return JSX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { render } from 'react-panorama';\n\nfunction App() {\n  return <Label text=\"Hello, world!\" />;\n}\n\nrender(<App />, $.GetContextPanel());\n")),(0,r.kt)("p",null,"Components can accept parameters as a function argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { render } from 'react-panorama';\n\n// highlight-next-line\nfunction HeroRow({ heroName }: { heroName: string }) {\n  return (\n    <Panel style={{ flowChildren: 'right' }}>\n      <DOTAHeroImage heroimagestyle=\"icon\" heroname={heroName} />\n      <Label style={{ marginLeft: '5px' }} localizedText={heroName} />\n    </Panel>\n  );\n}\n\nfunction HeroList() {\n  return (\n    <Panel style={{ flowChildren: 'down' }}>\n      {/* highlight-start */}\n      <HeroRow heroName=\"npc_dota_hero_abaddon\" />\n      <HeroRow heroName=\"npc_dota_hero_abyssal_underlord\" />\n      <HeroRow heroName=\"npc_dota_hero_alchemist\" />\n      {/* highlight-end */}\n    </Panel>\n  );\n}\n\nrender(<HeroList />, $.GetContextPanel());\n")),(0,r.kt)("h2",{id:"state"},"State"),(0,r.kt)("p",null,"In modern React applications, state is usually managed using ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"hooks"),". One of the basic hooks, ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-state.html"},(0,r.kt)("inlineCode",{parentName:"a"},"useState")),", allows you to declare a component-scoped variable, which re-renders the component every time its value gets changed. Here's a basic counter example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { render } from 'react-panorama';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const increment = () => setCount(count + 1);\n\n  return (\n    <Panel style={{ flowChildren: 'down' }}>\n      <Label text={`Count: ${count}`} />\n      <TextButton className=\"ButtonBevel\" text=\"Increment\" onactivate={increment} />\n    </Panel>\n  );\n}\n\nrender(<Counter />, $.GetContextPanel());\n")),(0,r.kt)("p",null,"Similarly, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," to bind state to input elements:"),(0,r.kt)(o.Z,{defaultValue:"ToggleButton",values:[{label:"ToggleButton",value:"ToggleButton"},{label:"Slider",value:"Slider"},{label:"TextEntry",value:"TextEntry"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ToggleButton",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { render } from 'react-panorama';\n\nfunction ConditionalRendering() {\n  const [showDetails, setShowDetails] = useState(false);\n\n  return (\n    <Panel style={{ flowChildren: 'down' }}>\n      <ToggleButton\n        text=\"Show details\"\n        selected={showDetails}\n        onactivate={() => setShowDetails(!showDetails)}\n      />\n\n      {showDetails && <Label text=\"Details!\" />}\n    </Panel>\n  );\n}\n\nrender(<ConditionalRendering />, $.GetContextPanel());\n"))),(0,r.kt)(s.Z,{value:"Slider",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { render } from 'react-panorama';\n\nfunction ColorPicker() {\n  const [red, setRed] = useState(0.5);\n  const [green, setGreen] = useState(0.5);\n  const [blue, setBlue] = useState(0.5);\n\n  return (\n    <Panel style={{ flowChildren: 'right' }}>\n      <Slider value={red} onvaluechanged={(p) => setRed(p.value)} />\n      <Slider value={green} onvaluechanged={(p) => setGreen(p.value)} />\n      <Slider value={blue} onvaluechanged={(p) => setBlue(p.value)} />\n      <Panel\n        style={{\n          backgroundColor: `rgb(${red * 255}, ${green * 255}, ${blue * 255})`,\n          width: '125px',\n          height: '125px',\n        }}\n      />\n    </Panel>\n  );\n}\n\nrender(<ColorPicker />, $.GetContextPanel());\n"))),(0,r.kt)(s.Z,{value:"TextEntry",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { render } from 'react-panorama';\n\nfunction ReservedText() {\n  const [text, setText] = useState('');\n\n  return (\n    <Panel style={{ flowChildren: 'down' }}>\n      <TextEntry text={text} ontextentrychange={(p) => setText(p.text)} />\n      <Label text={`Reversed text: ${[...text].reverse().join('')}`} />\n    </Panel>\n  );\n}\n\nrender(<ReservedText />, $.GetContextPanel());\n")))),(0,r.kt)("h2",{id:"listening-to-events"},"Listening to events"),(0,r.kt)("p",null,"In React, the only things that should affect what component shows are its props and state. So, in order to make component update data when a certain game event happens, you need to make event listener update component's state."),(0,r.kt)("p",null,"Since we can update component state only within the component itself, we also have to put our ",(0,r.kt)("inlineCode",{parentName:"p"},"GameEvents.Subscribe")," call inside the component. However you can't register it in the render function itself, because it gets executed more often than we need to, since we need to register our listener only when the component gets mounted for the first time. That's when we have to use another builtin hook - ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-effect.html"},(0,r.kt)("inlineCode",{parentName:"a"},"useEffect")),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," hook is a function that usually gets called with 2 parameters. First one is the callback we want to execute, which would register our listener. The second is the list of state variable that our . Since we don't use any state for our listener, we can just use an empty array (",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"). Also, optionally our callback can return a cleanup function, which is called either when one of dependencies changes, or when component gets unmounted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useEffect, useState } from 'react';\nimport { render } from 'react-panorama';\n\nfunction KDA() {\n  const [kills, setKills] = useState(() => Game.GetLocalPlayerInfo().player_kills);\n  const [deaths, setDeaths] = useState(() => Game.GetLocalPlayerInfo().player_deaths);\n  const [assists, setAssists] = useState(() => Game.GetLocalPlayerInfo().player_assists);\n\n  // highlight-start\n  useEffect(() => {\n    const handle = GameEvents.Subscribe('dota_player_kill', () => {\n      const playerInfo = Game.GetLocalPlayerInfo();\n      setKills(playerInfo.player_kills);\n      setDeaths(playerInfo.player_deaths);\n      setAssists(playerInfo.player_assists);\n    });\n\n    return () => GameEvents.Unsubscribe(handle);\n  }, []);\n  // highlight-end\n\n  return <Label style={{ color: 'white' }} text={`KDA: ${kills}/${deaths}/${assists}`} />;\n}\n\nrender(<KDA />, $.GetContextPanel());\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-panorama")," provides a custom hook that makes listening to game events a little easier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { render, useGameEvent } from 'react-panorama';\n\nfunction KDA() {\n  const [kills, setKills] = useState(() => Game.GetLocalPlayerInfo().player_kills);\n  const [deaths, setDeaths] = useState(() => Game.GetLocalPlayerInfo().player_deaths);\n  const [assists, setAssists] = useState(() => Game.GetLocalPlayerInfo().player_assists);\n  // highlight-start\n  useGameEvent('dota_player_kill', () => {\n    const playerInfo = Game.GetLocalPlayerInfo();\n    setKills(playerInfo.player_kills);\n    setDeaths(playerInfo.player_deaths);\n    setAssists(playerInfo.player_assists);\n  }, []);\n  // highlight-end\n\n  return <Label style={{ color: 'white' }} text={`KDA: ${kills}/${deaths}/${assists}`} />;\n}\n\nrender(<KDA />, $.GetContextPanel());\n")),(0,r.kt)("p",null,"Just like that, you can listen to UI events, custom net table updates, or just time passing. ",(0,r.kt)("inlineCode",{parentName:"p"},"react-panorama")," provides ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ark120202/react-panorama#hooks"},"a few more custom hooks")," for common use cases."),(0,r.kt)("h3",{id:"custom-hooks"},"Custom hooks"),(0,r.kt)("p",null,"One of things that React Hooks make easier is code reuse. For example, we can extract logic used to listen to KDA changes into a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"useKDA")," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { render, useGameEvent } from 'react-panorama';\n\n// highlight-next-line\nfunction useKDA() {\n  // Since both initializing and updating state is the same process,\n  // we can extract it into a regular function\n  function getKDA() {\n    const playerInfo = Game.GetLocalPlayerInfo();\n    return {\n      kills: playerInfo.player_kills,\n      deaths: playerInfo.player_deaths,\n      assists: playerInfo.player_assists,\n    };\n  }\n\n  const [kda, setKDA] = useState(getKDA);\n\n  useGameEvent('dota_player_kill', () => setKDA(getKDA()), []);\n\n  return kda;\n}\n\nfunction KDA() {\n  // highlight-next-line\n  const { kills, deaths, assists } = useKDA();\n\n  return <Label style={{ color: 'white' }} text={`KDA: ${kills}/${deaths}/${assists}`} />;\n}\n\nfunction KDARatio() {\n  // highlight-next-line\n  const { kills, deaths, assists } = useKDA();\n  const ratio = (kills + assists) / (deaths || 1);\n\n  return <Label style={{ color: 'white' }} text={`KDA Ratio: ${ratio}`} />;\n}\n\nfunction App() {\n  return (\n    <Panel style={{ flowChildren: 'down' }}>\n      <KDA />\n      <KDARatio />\n    </Panel>\n  );\n}\n\nrender(<App />, $.GetContextPanel());\n")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"This tutorial have covered only basics of React. React has a large ecosystem of libraries, patterns and articles, lots of which would apply to Panorama. As a starting point you can check out ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"the official React website")," (although some parts of it are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reactjs/reactjs.org/issues/1782"},"a little")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reactjs/reactjs.org/issues/1788"},"outdated"),")."))}p.isMDXComponent=!0},6010:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);