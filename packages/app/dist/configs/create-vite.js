var g=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,n){function r(e){try{c(i.next(e))}catch(e){n(e)}}function l(e){try{c(i.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,l)}c((i=i.apply(e,t||[])).next())}))};import{watch as x}from"fs";import{basename as w,dirname as e}from"path";import{fileURLToPath as i}from"url";import _ from"@vitejs/plugin-basic-ssl";import F from"@vitejs/plugin-react";import{AbsPath as $,IsEmptyObject as N}from"@yangzw/bruce-us/dist/node.js";import S from"eslint-formatter-pretty";import P from"open";import J from"postcss-preset-env";import R from"stylelint-formatter-pretty";import{createServer as z}from"vite";import A from"vite-plugin-eslint";import L from"vite-plugin-html-config";import{viteStaticCopy as U}from"vite-plugin-static-copy";import k from"vite-plugin-stylelint";import{JudgeFile as H}from"../utils/index.js";import V from"./parse-config.js";export default function W(t){return g(this,void 0,void 0,(function*(){const s=e(i(import.meta.url)),{alias:o,browsers:n,copyFiles:r,eslintIgnores:l,eslintRules:c,linkAssets:a,openPages:p,proxy:m,proxyHost:f,scriptAssets:u,style:d,stylelintIgnores:y,stylelintRules:v}=yield V(),{port:h,useCsslint:j,useHttps:b,useJslint:O,useOpener:C}=t,E=yield z({configFile:!1,css:{postcss:{plugins:[J({browsers:n})]}},define:{"process.env.NODE_ENV":JSON.stringify("development"),RUN_ENV:JSON.stringify("dev")},mode:"development",plugins:[b?_():null,O?A({cacheLocation:$("node_modules/.cache/eslint-vite-plugin/.eslintcache"),exclude:["node_modules",...l].map((e=>$(e))),extensions:["js","ts","jsx","tsx"],formatter:S,overrideConfig:{rules:c},overrideConfigFile:$("../../node_modules/@yangzw/bruce-std/dist/eslintrc.js",s)}):null,F(),L({favicon:"assets/img/favicon.ico",links:"function"==typeof a?a("dev"):a,scripts:[..."function"==typeof u?u("dev"):u,{src:`./${w(H("src"))}`,type:"module"}]}),U({targets:("function"==typeof r?r("dev"):r).filter((e=>e.from.startsWith("src"))).map((e=>({dest:e.to,src:e.from.replace(/^(src)?\/?/,"")})))}),j?k(Object.assign({cacheLocation:$("node_modules/.cache/stylelint-vite-plugin/.stylelintcache"),configFile:$("../../node_modules/@yangzw/bruce-std/dist/stylelintrc.js",s),customSyntax:`postcss-${d}`,exclude:["node_modules",...y].map((e=>$(e))),formatter:R},N(v)?{}:{config:{rules:v}})):null].filter(Boolean),resolve:{alias:Object.assign({"@":$("src")},o),mainFields:["module","jsnext","jsnext:main","browser","main"]},root:$("./src"),server:{host:b&&f||"127.0.0.1",port:h,proxy:m}});yield E.listen(),E.printUrls();const I=[...new Set(p.length?p:[""])];if(C){const{host:e,port:t}=E.config.server;yield I.reduce(((s,i)=>g(this,void 0,void 0,(function*(){const o=/^https:?/.test(i)?i:`${b?"https":"http"}://${e}:${t}${i.startsWith("/")?i:`/${i}`}`;yield s,yield P(o,{app:{name:"browser"}})}))),Promise.resolve())}const W=H("","configFile"),B=w(W);x(W,{persistent:!0},((e,t)=>g(this,void 0,void 0,(function*(){"change"===e&&t===B&&(yield E.close(),yield E.restart())}))))}))}