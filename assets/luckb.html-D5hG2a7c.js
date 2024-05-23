import{e as i,I as $,f as z,g as w,h as T,i as q,r as x,o as f,c as v,w as S,b as _,F as B,j as C,p as H,k as J,d as I,n as F,t as V,u as N}from"./app-R7pVbBlq.js";import{_ as Z}from"./plugin-vue_export-helper-DlAUqK2U.js";var E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};function A(l){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},c=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(a).filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),c.forEach(function(s){L(l,s,a[s])})}return l}function L(l,t,a){return t in l?Object.defineProperty(l,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[t]=a,l}var g=function(t,a){var c=A({},t,a.attrs);return i($,A({},c,{icon:E}),null)};g.displayName="DeleteOutlined";g.inheritAttrs=!1;const G=l=>(H("data-v-74171b8b"),l=l(),J(),l),K=G(()=>_("h1",{id:"try-their-luck",tabindex:"-1"},[_("a",{class:"header-anchor",href:"#try-their-luck"},[_("span",null,"Try their luck")])],-1)),R={class:"ball-container"},U=z({components:{DeleteOutlined:g}}),Q=z({...U,__name:"luckb.html",setup(l){const t=w([[]]),a=w("dobule"),c=T(()=>a.value==="dobule");q(()=>{M("dobule")});const s=T(()=>c.value?6:5);function O(){const n=c.value?33:35,o=c.value?16:12;return{redMax:n,bluMax:o}}function D(){const{redMax:n,bluMax:o}=O(),u=new Array(n).fill("1").map((m,r)=>r+1),d=new Array(o).fill("1").map((m,r)=>r+1);return{redArr:u,blueArr:d}}function P(){const{redMax:n,bluMax:o}=O(),{redArr:u,blueArr:d}=D(),m=new Set,r=new Set;for(let e=n,p=n-s.value;e>p;e--){const h=Math.random()*e,b=h===0?0:Math.floor(h);m.add(u[b]),u.splice(b,1)}const k=[...m].sort((e,p)=>e-p).map(e=>e<10?`0${e}`:e);for(let e=o,p=o-7+s.value;e>p;e--){const h=Math.random()*e,b=h===0?0:Math.floor(h);r.add(d[b]),d.splice(b,1)}const y=[...r].sort((e,p)=>e-p).map(e=>e<10?`0${e}`:e);t.value.push([...k,...y]),typeof window<"u"?localStorage.setItem(a.value,JSON.stringify(t.value)):(backIndex=Math.floor(Math.random()*backImgs.value.length),console.log(`ssr render, localStorage is unavailable, ${t.value}`))}function M(n){t.value=JSON.parse(localStorage.getItem(n))||[]}function j(n){console.log("delet",n),t.value.splice(n,1),localStorage.setItem(a.value,JSON.stringify(t.value))}return(n,o)=>{const u=x("a-button"),d=x("a-tab-pane"),m=x("a-tabs");return f(),v("div",null,[K,i(u,{type:"primary",onClick:o[0]||(o[0]=r=>P())},{default:S(()=>[I("Start")]),_:1}),i(m,{activeKey:a.value,"onUpdate:activeKey":o[1]||(o[1]=r=>a.value=r),onChange:M},{default:S(()=>[i(d,{key:"dobule",tab:"dobule ball"}),i(d,{key:"lucky",tab:"lucky ball","force-render":""})]),_:1},8,["activeKey"]),_("div",R,[(f(!0),v(B,null,C(t.value,(r,k)=>(f(),v("div",null,[(f(!0),v(B,null,C(r,(y,e)=>(f(),v("span",{class:F(e+1<=s.value?"ball":"lastball")},V(y),3))),256)),i(u,{type:"text",danger:"",onClick:y=>j(k)},{default:S(()=>[i(N(g)),I("删除")]),_:2},1032,["onClick"]),i(N(g))]))),256))])])}}}),Y=Z(Q,[["__scopeId","data-v-74171b8b"],["__file","luckb.html.vue"]]),ee=JSON.parse('{"path":"/tools/luckb.html","title":"Try their luck","lang":"zh-CN","frontmatter":{"description":"Try their luck {{ ball }}","head":[["meta",{"property":"og:url","content":"https://lfange.github.io/tools/luckb.html"}],["meta",{"property":"og:site_name","content":"哓番茄"}],["meta",{"property":"og:title","content":"Try their luck"}],["meta",{"property":"og:description","content":"Try their luck {{ ball }}"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-20T09:59:19.000Z"}],["meta",{"property":"article:author","content":"哓番茄"}],["meta",{"property":"article:modified_time","content":"2023-03-20T09:59:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Try their luck\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-20T09:59:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"哓番茄\\",\\"url\\":\\"https://lfange.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1662017526000,"updatedTime":1679306359000,"contributors":[{"name":"FanGe","email":"653398363@qq.com","commits":14},{"name":"fange","email":"653398363@qq.com","commits":2}]},"readingTime":{"minutes":1.31,"words":393},"filePathRelative":"tools/luckb.md","localizedDate":"2022年9月1日","excerpt":"","autoDesc":true}');export{Y as comp,ee as data};
