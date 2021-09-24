"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>i})},4996:(e,t,n)=>{n.d(t,{C:()=>r,Z:()=>o});var a=n(2263),i=n(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.Z)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+o:o}(t,e,n,a)}}function o(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},8215:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const i=function({children:e,hidden:t,className:n}){return a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}},1395:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),i=n(944),r=n(6010);const o="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,u=39;const c=function(e){const{lazy:t,block:n,defaultValue:c,values:d,groupId:h,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=(0,i.Z)(),[g,v]=(0,a.useState)(c),k=a.Children.toArray(e.children),y=[];if(null!=h){const e=m[h];null!=e&&e!==g&&d.some((t=>t.value===e))&&v(e)}const w=e=>{const t=e.currentTarget,n=y.indexOf(t),a=d[n].value;v(a),null!=h&&(f(h,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return t>=0&&i<=o&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((()=>t.classList.remove(s)),2e3))}),150))},T=e=>{var t;let n;switch(e.keyCode){case u:{const t=y.indexOf(e.target)+1;n=y[t]||y[0];break}case l:{const t=y.indexOf(e.target)-1;n=y[t]||y[y.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},p)},d.map((({value:e,label:t})=>a.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":g===e}),key:e,ref:e=>y.push(e),onKeyDown:T,onFocus:w,onClick:w},t)))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(9443);const r=function(){const e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,t,n)=>{n.d(t,{s:()=>i});var a=n(7294);function i({id:e,aspectRatio:t=4/3,hd:n="0"}){return a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${n}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,t,n)=>{n.d(t,{s:()=>l});var a=n(2177),i=n(8215),r=n(1395),o=n(7294);const s={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function l({children:e,group:t,titles:n}){(0,a.Z)("string"==typeof t||void 0===t);const l=o.Children.toArray(e).map(((e,t)=>{var a;const i=(null==(a=e.props.children.props.className)?void 0:a.replace(/language-/,""))??`Tab ${t+1}`;return{id:t,languageName:(void 0!==n&&n.length>0?n.split("|"):[])[t]??s[i]??i,element:e}}));return o.createElement(r.Z,{groupId:void 0!==t?`multi-code-block-${t}`:void 0,defaultValue:l[0].id,values:l.map((({id:e,languageName:t})=>({value:e,label:t})))},l.map((({id:e,element:t})=>o.createElement(i.Z,{key:e,value:e},t))))}},6776:(e,t,n)=>{n.d(t,{X:()=>r});var a=n(4996),i=n(7294);function r({path:e,controls:t=!1}){return i.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:t},i.createElement("source",{src:(0,a.Z)(e),type:"video/mp4"}))}},8129:(e,t,n)=>{n.d(t,{_:()=>i});var a=n(7294);function i({id:e,playlistId:t,aspectRatio:n=16/9}){const i=void 0!==t?`https://www.youtube.com/embed/videoseries?list=${t}`:`https://www.youtube.com/embed/${e}`;return a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},1746:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,metadata:()=>o,toc:()=>s,default:()=>u});var a=n(7462),i=(n(7294),n(3905));n(1395),n(8215),n(7840),n(8129),n(8173),n(6776);const r={title:"Writing a simple AI for neutrals",author:"Perry",steamId:"76561198046986723",date:"25.01.2020"},o={unversionedId:"units/simple-neutral-ai",id:"units/simple-neutral-ai",isDocsHomePage:!1,title:"Writing a simple AI for neutrals",description:"NOTE http://yrrep.me/dota/dota-simple-ai.html",source:"@site/_articles/units/simple-neutral-ai.md",sourceDirName:"units",slug:"/units/simple-neutral-ai",permalink:"/units/simple-neutral-ai",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/simple-neutral-ai.md",version:"current",frontMatter:{title:"Writing a simple AI for neutrals",author:"Perry",steamId:"76561198046986723",date:"25.01.2020"},sidebar:"tutorials",previous:{title:"Adding a Very Simple AI to Units",permalink:"/units/adding-a-very-simple-ai-to-units"},next:{title:"Create Creature AttachWearable blocks directly from the keyvalues",permalink:"/units/create-creature-attachwearable-blocks-directly-from-the-keyvalues"}},s=[{value:"What are we making",id:"what-are-we-making",children:[]},{value:"Implementing a single state",id:"implementing-a-single-state",children:[]},{value:"AI as Lua modifier",id:"ai-as-lua-modifier",children:[]},{value:"Complete AI modifier",id:"complete-ai-modifier",children:[]},{value:"Your next (more complicated) AI",id:"your-next-more-complicated-ai",children:[]}],l={toc:s};function u({components:e,...t}){return(0,i.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," This article is a rewrite of a very old AI tutorial: ",(0,i.kt)("a",{parentName:"p",href:"http://yrrep.me/dota/dota-simple-ai.html"},"http://yrrep.me/dota/dota-simple-ai.html")),(0,i.kt)("p",null,"I have encountered many questions about AI on the modding irc over the time, so I decided to write up a tutorial for a very basic AI that can be used in Lua. The term AI might seem intimidating as a programmer that has little to no experience with it, I will try however to lay out the process for a simple state-driven AI in a way that is as clear as possible. Hopefully by the end of this article writing your own AI does not seem as scary anymore."),(0,i.kt)("h2",{id:"what-are-we-making"},"What are we making"),(0,i.kt)("p",null,"We will make a little state-driven AI that mimics how neutrals behave in DotA 2. This means it will do these things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It will stand idle in its location until an enemy comes in range."),(0,i.kt)("li",{parentName:"ul"},"After spotting an enemy it will run to attack them."),(0,i.kt)("li",{parentName:"ul"},"If the neutral runs too far from its initial 'idle location' it will return back to it."),(0,i.kt)("li",{parentName:"ul"},"Repeat from the first point.")),(0,i.kt)("p",null,"The first phase to making reliable AI (in the sense that it will always do what you expect it to) is planning. I personally think that making a diagram representing the different states and the transitions between these states are a big help when making an AI like this. The more effort you put into this diagram, the easier the actual implementation of your AI will be."),(0,i.kt)("p",null,"For our neutral example I have translated the text describing the unit's behaviour into a state diagram, which contains all possible states and the conditions for transitioning between these states. The result is the following diagram:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/TWgPSJx.png",alt:"State transition diagram"})),(0,i.kt)("p",null,"These diagrams can be made with any software with drawing possibilities such as paint, photoshop or word. I really like using ",(0,i.kt)("a",{parentName:"p",href:"https://www.draw.io/"},"https://www.draw.io/"),", which is an online drawing tool specialised for drawing diagrams and graphs."),(0,i.kt)("p",null,"In the diagram you can see the different states represented by boxes and transitions represented by arrows. The labels on the arrows describe when this transition happens."),(0,i.kt)("h2",{id:"implementing-a-single-state"},"Implementing a single state"),(0,i.kt)("p",null,"To show how to translate one state to code I will give the example implementation of the aggressive state. I am implementing each state as a 'think' function that will check if any of the transition conditions are true, and execute that transition if they are true. "),(0,i.kt)("p",null,"Look at the 'Aggressive' state in the above diagram. It has two transitions, so I would expect the 'AggressiveThink' function to contain one check for 'Target died', one check for 'Out of leash range', and some aggressive behavior that happens inside the state."),(0,i.kt)("p",null,"This translates to the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function modifier_ai:AggressiveThink()\n    -- Check if the unit has walked outside its leash range\n    if (self.spawnPos - self.unit:GetAbsOrigin()):Length() > self.leashRange then\n        self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint\n        self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)\n        return -- Stop processing this state\n    end\n    \n    -- Check if the target has died\n    if not self.aggroTarget:IsAlive() then\n        self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint\n        self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)\n        return -- Stop processing this state\n    end\n    \n    -- Still in the aggressive state, so do some aggressive stuff.\n    self.unit:MoveToTargetToAttack(self.aggroTarget)\nend\n")),(0,i.kt)("p",null,"This way of translating your state diagram to code will always work as long as you can write code describing your transition conditions."),(0,i.kt)("h2",{id:"ai-as-lua-modifier"},"AI as Lua modifier"),(0,i.kt)("p",null,"Now we have one function that describes one 'tick' of one of our AI states, how do we make sure this is called?"),(0,i.kt)("p",null,"The easiest way to create an AI tied to one unit is to make the AI a Lua modifier. This modifier has some very convenient properties built in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The AI will stop once the unit dies"),(0,i.kt)("li",{parentName:"ul"},"The modifier provides convenient created/destroyed handlers to setup/cleanup your AI"),(0,i.kt)("li",{parentName:"ul"},"The modifier provides an interval think")),(0,i.kt)("p",null,"So really, the very core of your AI comes down to calling ",(0,i.kt)("inlineCode",{parentName:"p"},"StartIntervalThink(interval)")," in your modifier's ",(0,i.kt)("inlineCode",{parentName:"p"},"OnCreated"),", and then in the ",(0,i.kt)("inlineCode",{parentName:"p"},"OnIntervalThink")," calling the correct 'state' function that you created like in the previous section."),(0,i.kt)("h2",{id:"complete-ai-modifier"},"Complete AI modifier"),(0,i.kt)("p",null,"Below is the complete state diagram from above implemented as AI. This AI can be added to ",(0,i.kt)("inlineCode",{parentName:"p"},"unit")," by calling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'unit:AddNewModifier(nil, nil, "modifier_ai", { aggroRange = 600, leashRange = 600 });\n')),(0,i.kt)("p",null,"I pass in some parameters to the AI behavior when I apply it, allowing for customization per-unit. Keep in mind this modifier is just like any other Lua modifier, so you can execute any code you can also call in regular modifiers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"modifier_ai = class({})\n\nlocal AI_STATE_IDLE = 0\nlocal AI_STATE_AGGRESSIVE = 1\nlocal AI_STATE_RETURNING = 2\n\nlocal AI_THINK_INTERVAL = 0.5\n\nfunction modifier_ai:OnCreated(params)\n    -- Only do AI on server\n    if IsServer() then\n        -- Set initial state\n        self.state = AI_STATE_IDLE\n\n        -- Store parameters from AI creation:\n        -- unit:AddNewModifier(caster, ability, \"modifier_ai\", { aggroRange = X, leashRange = Y })\n        self.aggroRange = params.aggroRange\n        self.leashRange = params.leashRange\n\n        -- Store unit handle so we don't have to call self:GetParent() every time\n        self.unit = self:GetParent()\n\n        -- Set state -> action mapping\n        self.stateActions = {\n            [AI_STATE_IDLE] = self.IdleThink,\n            [AI_STATE_AGGRESSIVE] = self.AggressiveThink,\n            [AI_STATE_RETURNING] = self.ReturningThink,\n        }\n\n        -- Start thinking\n        self:StartIntervalThink(AI_THINK_INTERVAL)\n    end\nend\n\nfunction modifier_ai:OnIntervalThink()\n    -- Execute action corresponding to the current state\n    self.stateActions[self.state](self)    \nend\n\nfunction modifier_ai:IdleThink()\n    -- Find any enemy units around the AI unit inside the aggroRange\n    local units = FindUnitsInRadius(self.unit:GetTeam(), self.unit:GetAbsOrigin(), nil,\n        self.aggroRange, DOTA_UNIT_TARGET_TEAM_ENEMY, DOTA_UNIT_TARGET_ALL, DOTA_UNIT_TARGET_FLAG_NONE, \n        FIND_ANY_ORDER, false)\n\n    -- If one or more units were found, start attacking the first one\n    if #units > 0 then\n        self.spawnPos = self.unit:GetAbsOrigin() -- Remember position to return to\n        self.aggroTarget = units[1] -- Remember who to attack\n        self.unit:MoveToTargetToAttack(self.aggroTarget) --Start attacking\n        self.state = AI_STATE_AGGRESSIVE --State transition\n        return -- Stop processing this state\n    end\n\n    -- Nothing else to do in Idle state\nend\n\nfunction modifier_ai:AggressiveThink()\n    -- Check if the unit has walked outside its leash range\n    if (self.spawnPos - self.unit:GetAbsOrigin()):Length() > self.leashRange then\n        self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint\n        self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)\n        return -- Stop processing this state\n    end\n    \n    -- Check if the target has died\n    if not self.aggroTarget:IsAlive() then\n        self.unit:MoveToPosition(self.spawnPos) --Move back to the spawnpoint\n        self.state = AI_STATE_RETURNING --Transition the state to the 'Returning' state(!)\n        return -- Stop processing this state\n    end\n    \n    -- Still in the aggressive state, so do some aggressive stuff.\n    self.unit:MoveToTargetToAttack(self.aggroTarget)\nend\n\nfunction modifier_ai:ReturningThink()\n    -- Check if the AI unit has reached its spawn location yet\n    if (self.spawnPos - self.unit:GetAbsOrigin()):Length() < 10 then\n        self.state = AI_STATE_IDLE -- Transition the state to the 'Idle' state(!)\n        return -- Stop processing this state\n    end\n\n    -- If not at return position yet, try to move there again\n    self.unit:MoveToPosition(self.spawnPos)\nend\n")),(0,i.kt)("h2",{id:"your-next-more-complicated-ai"},"Your next (more complicated) AI"),(0,i.kt)("p",null,"This tutorial only covers a very basic concepts for making your first AI, but if you want to extend this here are some more interesting ideas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Since you are using a lua modifier, you do not have to change state in a think function, you can also just register a modifier event listener and change state inside those!"),(0,i.kt)("li",{parentName:"ul"},"Generalize state classes and give each state ",(0,i.kt)("inlineCode",{parentName:"li"},"OnStateEnter"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"OnStateThink")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"OnStateLeave")," functions."),(0,i.kt)("li",{parentName:"ul"},"You can nest these AIs! You could make the internal behavior of one state be its own AI built in the same way.")))}u.isMDXComponent=!0},6010:(e,t,n)=>{function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:()=>i})}}]);