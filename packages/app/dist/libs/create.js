var x=this&&this.__awaiter||function(e,s,t,o){return new(t||(t=Promise))((function(p,n){function r(e){try{a(o.next(e))}catch(e){n(e)}}function d(e){try{a(o.throw(e))}catch(e){n(e)}}function a(e){var s;e.done?p(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(r,d)}a((o=o.apply(e,s||[])).next())}))};import{execSync as ve}from"child_process";import{exit as o}from"process";import no from"ora";import{AppRender as is}from"../generators/index.js";import{CreateAnswer as At}from"../helpers/index.js";import{CREATE_TEXT as y}from"../langs/index.js";import{DEPENDENCE as pe,GetDepsVer as Ne,ShowTitle as io}from"../utils/index.js";export default function c(e){return x(this,void 0,void 0,(function*(){io("init");const{frame:s,install:t,name:p,style:n,typescript:r}=e,d=s||t||p||n||r?{appName:""===p?"unknow":p,deps:[],devdeps:[],ext:r?"ts":"js",frame:""===s?"js":s,style:""===n?"scss":n,useInstaller:t,useTs:r}:yield At(),a=no(y.doing1).start();if(d.deps=pe[d.frame].reduce(((e,s)=>(s.disabled&&e.push(s.value),e)),d.deps).sort(),d.useTs&&(d.devdeps=["@types/node"],"react"===d.frame&&(d.deps=d.deps.filter((e=>"prop-types"!==e)),d.devdeps=[...d.devdeps,d.deps.includes("react-dom")?"@types/react-dom":""]),"ts"===d.ext&&(d.devdeps=[...d.devdeps,"@yangzw/bruce-type"]),d.devdeps=d.devdeps.filter(Boolean).sort()),is({deps:yield Ne(d.deps),devdeps:yield Ne(d.devdeps),ext:d.ext,frame:d.frame,name:d.appName,style:d.style,useTs:d.useTs}),a.stop(),d.useInstaller){const e=no(y.doing2).start();try{ve(`cd ${d.appName} && yarn`),e.stop(),console.log(y.done1(d.appName))}catch(s){try{ve(`cd ${d.appName} && npm i`),e.stop(),console.log(y.done1(d.appName))}catch(s){e.stop(),console.log(y.done2(d.appName))}}}else console.log(y.done2(d.appName));o(1)}))}