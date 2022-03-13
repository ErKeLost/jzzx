var N=Object.defineProperty;var V=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var A=(i,e,t)=>e in i?N(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,E=(i,e)=>{for(var t in e||(e={}))P.call(e,t)&&A(i,t,e[t]);if(V)for(var t of V(e))T.call(e,t)&&A(i,t,e[t]);return i};import{F as J,o as a,c,a as D,b as u,d as I,r as k,e as H,w as B,t as x,n as q,f as G,g as M,h as K,u as C,i as v,v as W,j as Y,k as h,l as Z,m as R,p as j,q as $,R as Q,s as X}from"./vendor.9f64743b.js";const ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};ee();var te="./assets/jzzx.9ba28061.jpg";const se="modulepreload",z={},ne="./",re=function(e,t){return!t||t.length===0?e():Promise.all(t.map(r=>{if(r=`${ne}${r}`,r in z)return;z[r]=!0;const s=r.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":se,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((l,d)=>{o.addEventListener("load",l),o.addEventListener("error",d)})})).then(()=>e())};var ie=`<!DOCTYPE html>\r
<html lang="en">\r
  <head>\r
    <meta charset="UTF-8" />\r
    <link rel="icon" href="/favicon.ico" />\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
    <title>Vite App</title>\r
  </head>\r
  <body>\r
    <div id="app"></div>\r
    <script type="module" src="/src/main.js"><\/script>\r
  </body>\r
</html>\r
`,oe=`import { createApp } from 'vue'\r
import App from './App.vue'\r
\r
createApp(App).mount('#app')\r
`,ue=`{\r
  "name": "vite-vue-starter",\r
  "version": "0.0.0",\r
  "scripts": {\r
    "dev": "vite",\r
    "build": "vite build",\r
    "serve": "vite preview"\r
  },\r
  "dependencies": {\r
    "vue": "^3.2.0"\r
  },\r
  "devDependencies": {\r
    "@vitejs/plugin-vue": "^1.4.0",\r
    "@vue/compiler-sfc": "^3.2.0",\r
    "vite": "^2.4.4"\r
  }\r
}`,ae=`import { defineConfig } from 'vite'\r
import vue from '@vitejs/plugin-vue'\r
\r
// https://vitejs.dev/config/\r
export default defineConfig({\r
  plugins: [vue()]\r
})\r
`,ce=`# Vite Vue Starter\r
\r
This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.\r
\r
To start:\r
\r
\`\`\`sh\r
npm install\r
npm run dev\r
\r
# if using yarn:\r
yarn\r
yarn dev\r
\`\`\`\r
`;async function le(i){if(!confirm("Download project files?"))return;const{default:e}=await re(()=>import("./jszip.min.40274d7d.js").then(function(o){return o.j}),["assets/jszip.min.40274d7d.js","assets/vendor.9f64743b.js"]),t=new e;t.file("index.html",ie),t.file("package.json",ue),t.file("vite.config.js",ae),t.file("README.md",ce);const r=t.folder("src");r.file("main.js",oe);const s=i.getFiles();for(const o in s)r.file(o,s[o]);const n=await t.generateAsync({type:"blob"});J.exports.saveAs(n,"vue-project.zip")}var y=(i,e)=>{const t=i.__vccOpts||i;for(const[r,s]of e)t[r]=s;return t};const pe={},de={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},me=D('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>',9),fe=[me];function he(i,e){return a(),c("svg",de,fe)}var ve=y(pe,[["render",he]]);const ge={},_e={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ee=u("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"},null,-1),Ce=[Ee];function ye(i,e){return a(),c("svg",_e,Ce)}var we=y(ge,[["render",ye]]);const Fe={},be={width:"1.4em",height:"1.4em",viewBox:"0 0 24 24"},ke=D('<g fill="none" stroke="#666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></g>',1),xe=[ke];function je(i,e){return a(),c("svg",be,xe)}var Be=y(Fe,[["render",je]]);const De={},Ve={width:"1.7em",height:"1.7em",viewBox:"0 0 24 24"},Ae=D('<g fill="#666"><rect x="4" y="18" width="16" height="2" rx="1" ry="1"></rect><rect x="3" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 5 18)"></rect><rect x="17" y="17" width="4" height="2" rx="1" ry="1" transform="rotate(-90 19 18)"></rect><path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39a1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"></path><path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"></path></g>',1),$e=[Ae];function ze(i,e){return a(),c("svg",Ve,$e)}var Se=y(De,[["render",ze]]);const Ie={},Me={width:"1.7em",height:"1.7em",viewBox:"0 0 24 24"},Re=u("path",{fill:"#666",d:"M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"},null,-1),Le=[Re];function Oe(i,e){return a(),c("svg",Me,Le)}var Ue=y(Ie,[["render",Oe]]);const Ne=u("h1",null,[u("img",{alt:"logo",src:te}),u("span",null,"Jzzx Playground")],-1),Pe={class:"links"},Te={key:0},Je=u("a",null,"loading versions...",-1),He=[Je],qe=["onClick"],Ge=u("li",null,[u("a",{href:"https://app.netlify.com/sites/vue-sfc-playground/deploys",target:"_blank"},"Commits History")],-1),Ke={title:"View on GitHub",class:"github"},We={href:"https://github.com/vuejs/core/tree/main/packages/sfc-playground",target:"_blank"},Ye=I({props:["store"],setup(i){const{store:e}=i,t="commit",r=k(`@${t}`),s=k(),n=k(!1);async function o(){n.value=!n.value,s.value||(s.value=await U())}async function l(m){r.value="loading...",await e.setVueVersion(m),r.value=`v${m}`,n.value=!1}function d(){e.resetVueVersion(),r.value=`@${t}`,n.value=!1}async function L(){await navigator.clipboard.writeText(location.href),alert("Sharable URL has been copied to clipboard.")}function O(){const m=document.documentElement.classList;m.toggle("dark"),localStorage.setItem("vue-sfc-playground-prefer-dark",String(m.contains("dark")))}H(async()=>{window.addEventListener("click",()=>{n.value=!1})});async function U(){const f=(await(await fetch("https://api.github.com/repos/vuejs/core/releases?per_page=100")).json()).map(p=>/^v/.test(p.tag_name)?p.tag_name.slice(1):p.tag_name);let b=f[0].includes("-");const w=[];for(const p of f)if(p.includes("-")?b&&w.push(p):(w.push(p),b=!1),w.length>=30||p==="3.0.10")break;return w}return(m,_)=>(a(),c("nav",null,[Ne,u("div",Pe,[u("div",{class:"version",onClick:_[0]||(_[0]=B(()=>{},["stop"]))},[u("span",{class:"active-version",onClick:o}," Version: "+x(r.value),1),u("ul",{class:q(["versions",{expanded:n.value}])},[s.value?G("",!0):(a(),c("li",Te,He)),(a(!0),c(M,null,K(s.value,f=>(a(),c("li",{key:f},[u("a",{onClick:b=>l(f)},"v"+x(f),9,qe)]))),128)),u("li",null,[u("a",{onClick:d},"This Commit ("+x(C(t))+")",1)]),Ge],2)]),u("button",{title:"Toggle dark mode",class:"toggle-dark",onClick:O},[v(ve,{class:"light"}),v(we,{class:"dark"})]),u("button",{title:"Copy sharable URL",class:"share",onClick:L},[v(Be)]),u("button",{title:"Download project files",class:"download",onClick:_[1]||(_[1]=f=>C(le)(i.store))},[v(Se)]),u("button",Ke,[u("a",We,[v(Ue)])])])]))}});function Ze(i){return btoa(unescape(encodeURIComponent(i)))}function Qe(i){return decodeURIComponent(escape(atob(i)))}const g="App.vue",F="varlet-repl-plugin.js",Xe={"@varlet/ui":"https://unpkg.com/@varlet/ui@1.26.2/es/varlet.esm.js","@varlet/touch-emulator":"https://unpkg.com/@varlet/touch-emulator@1.26.2/index.js"},et="https://unpkg.com/@varlet/ui@1.26.2/es/style.css",tt={"vue-devui":"https://unpkg.com/vue-devui@1.0.0-beta.17/vue-devui.es.js"},st={"element-plus":"https://unpkg.com/element-plus@2.0.4/dist/index.full.min.mjs"},nt={"jzzx-utils":"https://unpkg.com/jzzx-utils@1.0.1/dist/utils.es.min.js"},S=`<script setup lang='ts'>
import { ref } from 'vue'
import { installVarletUI } from './${F}'

installVarletUI()

const msg = ref('Hello Varlet!')
const active = ref('\u9009\u98791')
const date = ref('2022-03-10')
<\/script>
<template>
  <d-button>\u6211\u662Fdevui</d-button>
  <el-button>\u6211\u662Felement-plus</el-button>
  <el-image src="https://w.wallhaven.cc/full/8o/wallhaven-8o6rmo.jpg"></el-image>
  <var-button type="primary">{{ msg }}</var-button>
  <var-date-picker v-model="date" />
  <var-tabs
  elevation
  color="#2979ff"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  v-model:active="active"
>
  <var-tab>\u9009\u98791</var-tab>
  <var-tab>\u9009\u98792</var-tab>
  <var-tab>\u9009\u98793</var-tab>
</var-tabs>

<var-tabs-items v-model:active="active">
  <var-tab-item>
    \u545C\u5566\u5566\u5566\u706B\u8F66\u7B1B\uFF0C\u968F\u7740\u5954\u817E\u7684\u9A6C\u8E44\u3002
    \u5C0F\u59B9\u59B9\u5439\u7740\u53E3\u7434\uFF0C\u5915\u9633\u4E0B\u7F8E\u4E86\u526A\u5F71\u3002
    \u6211\u7528\u5B50\u5F39\u5199\u65E5\u8BB0\uFF0C\u4ECB\u7ECD\u5B8C\u4E86\u98CE\u666F\u3002
    \u63A5\u4E0B\u6765\u6362\u4ECB\u7ECD\u6211\u81EA\u5DF1\u3002
    \u6211\u867D\u7136\u662F\u4E2A\u725B\u4ED4\uFF0C\u5728\u9152\u5427\u53EA\u70B9\u725B\u5976\u3002
    \u4E3A\u4EC0\u4E48\u4E0D\u559D\u5564\u9152\uFF0C\u56E0\u4E3A\u5564\u9152\u4F24\u8EAB\u4F53\u3002
  </var-tab-item>
  <var-tab-item>
    \u5F88\u591A\u4EBA\u4E0D\u957F\u773C\u775B\uFF0C\u56A3\u5F20\u90FD\u9760\u6B66\u5668\u3002
    \u8D64\u624B\u7A7A\u62F3\u5C31\u7F29\u6210\u8682\u8681\u3002
    \u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
    \u4E0D\u7528\u9EBB\u70E6\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
  </var-tab-item>
  <var-tab-item>
    \u4F60\u4EEC\u4E00\u8D77\u4E0A\uFF0C\u6211\u5728\u8D76\u65F6\u95F4\u3002
    \u6BCF\u5929\u51B3\u6597\u89C2\u4F17\u90FD\u7D2F\u4E86\uFF0C\u82F1\u96C4\u4E5F\u7D2F\u4E86\u3002
    \u4E0D\u7528\u9EBB\u70E6\u4E86\uFF0C\u4E0D\u7528\u9EBB\u70E6\u4E86\u3002
    \u526F\u6B4C\u4E0D\u957F\u4F60\u4EEC\u6709\u51E0\u4E2A\uFF0C\u4E00\u8D77\u4E0A\u597D\u4E86\u3002
    \u6B63\u4E49\u547C\u5524\u6211\uFF0C\u7F8E\u5973\u9700\u8981\u6211\u3002
    \u725B\u4ED4\u5F88\u5FD9\u7684\u3002
  </var-tab-item>
</var-tabs-items>
</template>
`,rt=`import VarletUI, { Context } from '@varlet/ui'
import ElementPlusUI from 'element-plus'
import {formatDuration} from 'jzzx-utils'
import DevUI from 'vue-devui'
// import Antd from 'ant-design-vue
import '@varlet/touch-emulator'
import { getCurrentInstance } from 'vue'
console.log(formatDuration(666000))
Context.touchmoveForbid = false
await appendStyle()
export {
  formatDuration
}
export function installVarletUI() {
  const instance = getCurrentInstance()
  instance.appContext.app.use(VarletUI)
  instance.appContext.app.use(DevUI)
  instance.appContext.app.use(ElementPlusUI)
  // instance.appContext.app.use(Antd)
}

export function appendStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '${et}'
    link.onload = resolve
    link.onerror = reject
    document.body.appendChild(link)
    const w = document.createElement('link')
    w.rel = 'stylesheet'
    w.href = 'https://unpkg.com/element-plus@2.0.4/dist/index.css'
    w.onload = resolve
    w.onerror = reject
    document.body.appendChild(w)
    const d = document.createElement('link')
    d.rel = 'stylesheet'
    d.href = 'https://unpkg.com/vue-devui@1.0.0-beta.14/style.css'
    d.onload = resolve
    d.onerror = reject
    document.body.appendChild(d)
    const a = document.createElement('link')
    a.rel = 'stylesheet'
    a.href = 'https://unpkg.com/ant-design-vue@3.0.0-beta.13/dist/antd.css'
    a.onload = resolve
    a.onerror = reject
    document.body.appendChild(a)
  })
}
`;class it{constructor({serializedState:e="",defaultVueRuntimeURL:t=`https://unpkg.com/@vue/runtime-dom@${W}/dist/runtime-dom.esm-browser.js`,showOutput:r=!1,outputMode:s="preview"}){this.compiler=Y,this.initialOutputMode="preview";let n={};if(e){const l=JSON.parse(Qe(e));for(const d of Object.keys(l))n[d]=new h(d,l[d])}else n={[g]:new h(g,S)};this.defaultVueRuntimeURL=t,this.initialShowOutput=r,this.initialOutputMode=s;let o=g;n[o]||(o=Object.keys(n)[0]),this.state=Z({mainFile:o,files:n,activeFile:n[o],errors:[],vueRuntimeURL:this.defaultVueRuntimeURL}),this.initImportMap(),this.state.files[F]=new h(F,rt,!0),R(()=>j(this,this.state.activeFile));for(const l in this.state.files)l!==g&&j(this,this.state.files[l])}setActive(e){this.state.activeFile=this.state.files[e]}addFile(e){const t=typeof e=="string"?new h(e):e;this.state.files[t.filename]=t,t.hidden||this.setActive(t.filename)}deleteFile(e){e!==F&&confirm(`Are you sure you want to delete ${e}?`)&&(this.state.activeFile.filename===e&&(this.state.activeFile=this.state.files[this.state.mainFile]),delete this.state.files[e])}serialize(){return"#"+Ze(JSON.stringify(this.getFiles()))}getFiles(){const e={};for(const t in this.state.files)e[t]=this.state.files[t].code;return e}async setFiles(e,t=g){const r={};t===g&&!e[t]&&(r[t]=new h(t,S));for(const[s,n]of Object.entries(e))r[s]=new h(s,n);for(const s of Object.values(r))await j(this,s);this.state.mainFile=t,this.state.files=r,this.initImportMap(),this.setActive(t)}initImportMap(){const e=this.state.files["import-map.json"];if(!e)this.state.files["import-map.json"]=new h("import-map.json",JSON.stringify({imports:E(E(E(E({vue:this.defaultVueRuntimeURL},Xe),tt),nt),st)},null,2));else try{const t=JSON.parse(e.code);t.imports.vue||(t.imports.vue=this.defaultVueRuntimeURL,e.code=JSON.stringify(t,null,2))}catch{}}getImportMap(){try{return console.log(JSON.parse(this.state.files["import-map.json"].code)),JSON.parse(this.state.files["import-map.json"].code)}catch(e){return this.state.errors=[`Syntax error in import-map.json: ${e.message}`],{}}}}const ot=I({setup(i){const e=()=>{document.documentElement.style.setProperty("--vh",window.innerHeight+"px")};window.addEventListener("resize",e),e();const t=new it({serializedState:location.hash.slice(1),defaultVueRuntimeURL:void 0}),r={script:{reactivityTransform:!0}};return R(()=>history.replaceState({},"",t.serialize())),(s,n)=>(a(),c(M,null,[v(Ye,{store:C(t)},null,8,["store"]),v(C(Q),{onKeydown:[n[0]||(n[0]=$(B(()=>{},["ctrl","prevent"]),["s"])),n[1]||(n[1]=$(B(()=>{},["meta","prevent"]),["s"]))],store:C(t),"show-compile-output":!0,"auto-resize":!0,"sfc-options":r,"clear-console":!1},null,8,["store"])],64))}});window.VUE_DEVTOOLS_CONFIG={defaultSelectedAppId:"id:repl"};X(ot).mount("#app");
