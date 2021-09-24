"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[2690],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(t),m=i,p=h["".concat(l,".").concat(m)]||h[m]||c[m]||r;return t?a.createElement(p,o(o({ref:n},d),{},{components:t})):a.createElement(p,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3919:(e,n,t)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}t.d(n,{b:()=>a,Z:()=>i})},4996:(e,n,t)=>{t.d(n,{C:()=>r,Z:()=>o});var a=t(2263),i=t(3919);function r(){const{siteConfig:{baseUrl:e="/",url:n}={}}=(0,a.Z)();return{withBaseUrl:(t,a)=>function(e,n,t,{forcePrependBaseUrl:a=!1,absolute:r=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(a)return n+t;const o=t.startsWith(n)?t:n+t.replace(/^\//,"");return r?e+o:o}(n,e,t,a)}}function o(e,n={}){const{withBaseUrl:t}=r();return t(e,n)}},8215:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294);const i=function({children:e,hidden:n,className:t}){return a.createElement("div",{role:"tabpanel",hidden:n,className:t},e)}},1395:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(7294),i=t(944),r=t(6010);const o="tabItem_1uMI",s="tabItemActive_2DSg";const l=37,u=39;const d=function(e){const{lazy:n,block:t,defaultValue:d,values:c,groupId:h,className:m}=e,{tabGroupChoices:p,setTabGroupChoices:f}=(0,i.Z)(),[w,g]=(0,a.useState)(d),y=a.Children.toArray(e.children),b=[];if(null!=h){const e=p[h];null!=e&&e!==w&&c.some((n=>n.value===e))&&g(e)}const v=e=>{const n=e.currentTarget,t=b.indexOf(n),a=c[t].value;g(a),null!=h&&(f(h,a),setTimeout((()=>{(function(e){const{top:n,left:t,bottom:a,right:i}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return n>=0&&i<=o&&a<=r&&t>=0})(n)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((()=>n.classList.remove(s)),2e3))}),150))},k=e=>{var n;let t;switch(e.keyCode){case u:{const n=b.indexOf(e.target)+1;t=b[n]||b[0];break}case l:{const n=b.indexOf(e.target)-1;t=b[n]||b[b.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},m)},c.map((({value:e,label:n})=>a.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":w===e}),key:e,ref:e=>b.push(e),onKeyDown:k,onFocus:v,onClick:v},n)))),n?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}},9443:(e,n,t)=>{t.d(n,{Z:()=>a});const a=(0,t(7294).createContext)(void 0)},944:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),i=t(9443);const r=function(){const e=(0,a.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7840:(e,n,t)=>{t.d(n,{s:()=>i});var a=t(7294);function i({id:e,aspectRatio:n=4/3,hd:t="0"}){return a.createElement("p",{style:{position:"relative",paddingBottom:1/n*100+"%"}},a.createElement("iframe",{src:`https://gfycat.com/ifr/${e}?hd=${t}`,scrolling:"no",frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},8173:(e,n,t)=>{t.d(n,{s:()=>l});var a=t(2177),i=t(8215),r=t(1395),o=t(7294);const s={lua:"Lua",ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript"};function l({children:e,group:n,titles:t}){(0,a.Z)("string"==typeof n||void 0===n);const l=o.Children.toArray(e).map(((e,n)=>{var a;const i=(null==(a=e.props.children.props.className)?void 0:a.replace(/language-/,""))??`Tab ${n+1}`;return{id:n,languageName:(void 0!==t&&t.length>0?t.split("|"):[])[n]??s[i]??i,element:e}}));return o.createElement(r.Z,{groupId:void 0!==n?`multi-code-block-${n}`:void 0,defaultValue:l[0].id,values:l.map((({id:e,languageName:n})=>({value:e,label:n})))},l.map((({id:e,element:n})=>o.createElement(i.Z,{key:e,value:e},n))))}},6776:(e,n,t)=>{t.d(n,{X:()=>r});var a=t(4996),i=t(7294);function r({path:e,controls:n=!1}){return i.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0,controls:n},i.createElement("source",{src:(0,a.Z)(e),type:"video/mp4"}))}},8129:(e,n,t)=>{t.d(n,{_:()=>i});var a=t(7294);function i({id:e,playlistId:n,aspectRatio:t=16/9}){const i=void 0!==n?`https://www.youtube.com/embed/videoseries?list=${n}`:`https://www.youtube.com/embed/${e}`;return a.createElement("p",{style:{position:"relative",paddingBottom:1/t*100+"%"}},a.createElement("iframe",{src:i,frameBorder:"0",allowFullScreen:!0,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0}}))}},1752:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>r,metadata:()=>o,toc:()=>s,default:()=>u});var a=t(7462),i=(t(7294),t(3905));t(1395),t(8215),t(7840),t(8129),t(8173),t(6776);const r={title:"Adding a Very Simple AI to Units",author:"wigguno",steamId:"76561198004447135",date:"27.07.2015"},o={unversionedId:"units/adding-a-very-simple-ai-to-units",id:"units/adding-a-very-simple-ai-to-units",isDocsHomePage:!1,title:"Adding a Very Simple AI to Units",description:"This tutorial will cover how to issue very simple orders to units. This tutorial uses a move order to make a unit wander inside an area randomly, and a cast order to make a unit cast an untargeted spell randomly.",source:"@site/_articles/units/adding-a-very-simple-ai-to-units.md",sourceDirName:"units",slug:"/units/adding-a-very-simple-ai-to-units",permalink:"/units/adding-a-very-simple-ai-to-units",editUrl:"https://github.com/ModDota/moddota.github.io/edit/source/_articles/units/adding-a-very-simple-ai-to-units.md",version:"current",frontMatter:{title:"Adding a Very Simple AI to Units",author:"wigguno",steamId:"76561198004447135",date:"27.07.2015"},sidebar:"tutorials",previous:{title:"Creating units with a duration",permalink:"/units/creating-units-with-a-duration"},next:{title:"Writing a simple AI for neutrals",permalink:"/units/simple-neutral-ai"}},s=[{value:"Drawbacks",id:"drawbacks",children:[]},{value:"References",id:"references",children:[]},{value:"Hammer Setup",id:"hammer-setup",children:[]},{value:"Lua Setup",id:"lua-setup",children:[]},{value:"Spawning a Wanderer",id:"spawning-a-wanderer",children:[]},{value:"Spawning a Caster",id:"spawning-a-caster",children:[]},{value:"Thinker Function",id:"thinker-function",children:[]},{value:"Finishing Up",id:"finishing-up",children:[]}],l={toc:s};function u({components:e,...n}){return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial will cover how to issue very simple orders to units. This tutorial uses a move order to make a unit wander inside an area randomly, and a cast order to make a unit cast an untargeted spell randomly."),(0,i.kt)("p",null,"This tutorial assumes a basic knowledge of lua scripting."),(0,i.kt)("h2",{id:"drawbacks"},"Drawbacks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This technique should not be used for units which need to perform more than one kind of order each. If a more advanced AI is required, you should check holdout_example's lua ai scripts."),(0,i.kt)("li",{parentName:"ul"},"Some functionality is hard-coded into this script. If you want to iterate on your game and change the behaviour often, I would suggest having some global constants or loading in the values from an external KV file. Doing this allows you to keep all the values in one place.")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"I've copied some units from holdout_example for testing, and copied Berserkers Call from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pizzalol/SpellLibrary"},"Spell Library"),"."),(0,i.kt)("p",null,"If you need help on making your own units or abilities, Noya's documentation is an excellent resource:\n",(0,i.kt)("a",{parentName:"p",href:"unit-keyvalues"},"Datadriven Units"),"\n",(0,i.kt)("a",{parentName:"p",href:"abilities/ability-keyvalues"},"DataDriven Ability Breakdown - Documentation")),(0,i.kt)("h2",{id:"hammer-setup"},"Hammer Setup"),(0,i.kt)("p",null,'In Hammer, I\'ve placed an info_target entity named "spawn_loc_test" which can be found in lua. This allows me to place the units spawn location in Hammer without changing the lua scripts around. If you wish to do this, give each entity a unique name and place them where you want the spawn point on your map.'),(0,i.kt)("h2",{id:"lua-setup"},"Lua Setup"),(0,i.kt)("p",null,"In the InitGameMode() function we do a few things: seed the random number generator, create an empty table in order to keep track of every unit with behaviour, spawn some units, and set a thinker function up."),(0,i.kt)("p",null,"Settings which aren't relevant to this tutorial have been omitted, but in this function you can set up things like GameRules for your game mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function CAITesting:InitGameMode()\n    print( "Loading AI Testing Game Mode." )\n    -- SEEDING RNG IS VERY IMPORTANT\n    math.randomseed(Time())\n\n    -- Set up a table to hold all the units we want to spawn\n    self.UnitThinkerList = {}\n\n    -- Spawn some units\n    for i = 1,5 do\n        self:SpawnAIUnitWanderer()\n    end\n    for i = 1,3 do\n        self:SpawnAIUnitCaster()\n    end\n\n    -- Set the unit thinker function\n    GameRules:GetGameModeEntity():SetThink( "OnUnitThink", self, "UnitThink", 1 )\nend\n')),(0,i.kt)("h2",{id:"spawning-a-wanderer"},"Spawning a Wanderer"),(0,i.kt)("p",null,'This function will spawn a unit with wandering behaviour. The bounds which the unit wanders between are hard coded. An easy way to determine these bounds is to spawn a simple entity in Hammer (such as info_target), move it about and read the coordinates. In this example, my info_target entity is named "spawn_loc_test".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function CAITesting:SpawnAIUnitWanderer()\n    --Start an iteration finding each entity with this name\n    --If you\'ve named everything with a unique name, this will return your entity on the first go\n    local spawnVectorEnt = Entities:FindByName(nil, "spawn_loc_test")\n\n    -- GetAbsOrigin() is a function that can be called on any entity to get its location\n    local spawnVector = spawnVectorEnt:GetAbsOrigin()\n\n    -- Spawn the unit at the location on the neutral team\n    local spawnedUnit = CreateUnitByName("npc_dota_creature_kobold_tunneler", spawnVector, true, nil, nil, DOTA_TEAM_NEUTRALS)\n\n    -- make this unit passive\n    spawnedUnit:SetIdleAcquire(false)\n\n    -- Add some variables to the spawned unit so we know its intended behaviour\n    -- You can store anything here, and any time you get this entity the information will be intact\n    spawnedUnit.ThinkerType = "wander"\n    spawnedUnit.wanderBounds = {}\n    spawnedUnit.wanderBounds.XMin = -768\n    spawnedUnit.wanderBounds.XMax = 768\n    spawnedUnit.wanderBounds.YMin = -64\n    spawnedUnit.wanderBounds.YMax = 768\n\n    -- Add a random amount to the game time to randomise the behaviour a bit\n    spawnedUnit.NextOrderTime = GameRules:GetGameTime() + math.random(5, 10)\n\n    -- finally, insert the unit into the table\n    table.insert(self.UnitThinkerList, spawnedUnit)\nend\n')),(0,i.kt)("h2",{id:"spawning-a-caster"},"Spawning a Caster"),(0,i.kt)("p",null,"This function will spawn a unit with casting behaviour. The bounds which the unit is spawned in are hard coded. The spell is an untargeted spell which requires no additional variables to cast."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function CAITesting:SpawnAIUnitCaster()\n    -- Generate a random location inside the neutrals area\n    local spawnVector = Vector(math.random(-768, 768), math.random(-64, 768), 128)\n\n    -- Spawn the unit at the location on the neutral team\n    local spawnedUnit = CreateUnitByName("npc_dota_creature_gnoll_assassin", spawnVector, true, nil, nil, DOTA_TEAM_NEUTRALS)\n\n    -- make this unit passive\n    spawnedUnit:SetIdleAcquire(false)\n\n    -- Add some variables to the spawned unit so we know its intended behaviour\n    -- You can store anything here, and any time you get this entity the information will be intact\n    spawnedUnit.ThinkerType = "caster"\n    spawnedUnit.CastAbilityIndex = spawnedUnit:GetAbilityByIndex(0):entindex()\n\n    -- Add a random amount to the game time to randomise the behaviour a bit\n    spawnedUnit.NextOrderTime = GameRules:GetGameTime() + math.random(5, 10)\n\n    -- finally, insert the unit into the table\n    table.insert(self.UnitThinkerList, spawnedUnit)\nend\n')),(0,i.kt)("h2",{id:"thinker-function"},"Thinker Function"),(0,i.kt)("p",null,"This function gets called every second. It will read each of the units and determine if they should be issued with a new order, then issue that order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function CAITesting:OnUnitThink()\n    if GameRules:State_Get() == DOTA_GAMERULES_STATE_GAME_IN_PROGRESS then\n\n        local deadUnitCount = 0\n\n        -- Check each of the units in this table for their thinker behaviour\n        for ind, unit in pairs(self.UnitThinkerList) do\n\n            -- The first check should be to see if the units are still alive or not.\n            -- Keep track of how many units are removed from the table, as the indices will change by that amount\n            if unit:IsNull() or not unit:IsAlive() then\n                table.remove(self.UnitThinkerList, ind - deadUnitCount)\n                deadUnitCount = deadUnitCount + 1\n\n            -- Check if the game time has passed our random time for next order\n            elseif GameRules:GetGameTime() > unit.NextOrderTime then\n\n                if unit.ThinkerType == "wander" then\n                    --print("thinker unit is a wanderer")\n                    --print("time: " .. GameRules:GetGameTime() .. ". next wander: " .. unit.NextWanderTime)\n\n                    -- Generate random coordinates to wander to\n                    local x = math.random(unit.wanderBounds.XMin, unit.wanderBounds.XMax)\n                    local y = math.random(unit.wanderBounds.YMin, unit.wanderBounds.YMax)\n                    local z = GetGroundHeight(Vector(x, y, 128), nil)\n\n                    print("wandering to x: " .. x .. " y: " .. y)\n\n                    -- Issue the movement order to the unit\n                    unit:MoveToPosition(Vector(x, y, z))\n\n\n                elseif unit.ThinkerType == "caster" then\n\n                    -- If you want a more complicated order, use this syntax\n                    -- Some more documentation: https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Scripting/API/Global.ExecuteOrderFromTable\n                    -- Unit order list is here: https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Panorama/Javascript/API#dotaunitorder_t\n                    -- (Ignore the dotaunitorder_t. on each one)\n\n                    print("casting ability " .. EntIndexToHScript(unit.CastAbilityIndex):GetName())\n\n                    local order = {\n                        UnitIndex = unit:entindex(),\n                        AbilityIndex = unit.CastAbilityIndex,\n                        OrderType = DOTA_UNIT_ORDER_CAST_NO_TARGET,\n                        Queue = false\n                    }\n                    ExecuteOrderFromTable(order)\n                end\n\n                -- Generate the next time for the order\n                unit.NextOrderTime = GameRules:GetGameTime() + math.random(5, 10)\n            end\n        end\n\n        -- Make sure our testing map stays on day time\n        if not GameRules:IsDaytime() then\n            GameRules:SetTimeOfDay(0.26)\n        end\n\n    elseif GameRules:State_Get() >= DOTA_GAMERULES_STATE_POST_GAME then\n        return nil\n    end\n\n    -- this return statement means that this thinker function will be called again in 1 second\n    -- returning nil will cause the thinker to terminate and no longer be called\n    return 1\nend\n')),(0,i.kt)("h2",{id:"finishing-up"},"Finishing Up"),(0,i.kt)("p",null,"If you need more advanced behaviour, an AI script should be used. The method covered in this tutorial can be extended up to a point however, for example casting a ground-targeted ability in a random area would be possible using only code posted here."),(0,i.kt)("p",null,"The full files for this example can be found here:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Wigguno/AITesting"},"https://github.com/Wigguno/AITesting")),(0,i.kt)("p",null,"If you have any questions, the ",(0,i.kt)("a",{parentName:"p",href:"https://moddota.com/forums/chat"},"#dota2modhelpdesk")," irc channel is always happy to help."))}u.isMDXComponent=!0},6010:(e,n,t)=>{function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:()=>i})}}]);