var x=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(o,n){function r(t){try{c(i.next(t))}catch(t){n(t)}}function l(t){try{c(i.throw(t))}catch(t){n(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,l)}c((i=i.apply(t,e||[])).next())}))};import{watch as w}from"fs";import{basename as _,dirname as t}from"path";import{fileURLToPath as l}from"url";import $ from"@vitejs/plugin-basic-ssl";import F from"@vitejs/plugin-react";import{AbsPath as S,IsEmptyObject as P}from"@yangzw/bruce-us/dist/node.js";import z from"eslint-formatter-pretty";import E from"open";import J from"postcss-preset-env";import R from"stylelint-formatter-pretty";import{createServer as k}from"vite";import A from"vite-plugin-eslint";import I from"vite-plugin-html-config";import{viteStaticCopy as L}from"vite-plugin-static-copy";import U from"vite-plugin-stylelint";import{JudgeFile as V}from"../utils/index.js";import W from"./parse-config.js";export default function B(e){return x(this,void 0,void 0,(function*(){const s=t(l(import.meta.url)),{alias:i,browsers:o,copyFiles:n,eslintIgnores:r,eslintRules:c,linkAssets:p,openPages:m,proxy:a,proxyHost:f,publicPath:u,scriptAssets:d,style:y,stylelintIgnores:v,stylelintRules:g}=yield W(),{port:h,useCsslint:j,useHttps:b,useJslint:N,useOpener:O}=e,C=yield k({base:"function"==typeof u?u("dev"):u,configFile:!1,css:{postcss:{plugins:[J({browsers:o})]}},define:{"process.env.NODE_ENV":JSON.stringify("development"),RUN_ENV:JSON.stringify("dev")},mode:"development",plugins:[b?$():null,N?A({cacheLocation:S("node_modules/.cache/eslint-vite-plugin/.eslintcache"),exclude:["node_modules",...r].map((t=>S(t))),extensions:["js","ts","jsx","tsx"],formatter:z,overrideConfig:{rules:c},overrideConfigFile:S("../../node_modules/@yangzw/bruce-std/dist/eslintrc.js",s)}):null,F(),I({favicon:"assets/img/favicon.ico",links:"function"==typeof p?p("dev"):p,scripts:[..."function"==typeof d?d("dev"):d,{src:`./${_(V("src"))}`,type:"module"}]}),L({targets:("function"==typeof n?n("dev"):n).filter((t=>t.from.startsWith("src"))).map((t=>({dest:t.to,src:t.from.replace(/^(src)?\/?/,"")})))}),j?U(Object.assign({cacheLocation:S("node_modules/.cache/stylelint-vite-plugin/.stylelintcache"),configFile:S("../../node_modules/@yangzw/bruce-std/dist/stylelintrc.js",s),customSyntax:`postcss-${y}`,exclude:["node_modules",...v].map((t=>S(t))),formatter:R},P(g)?{}:{config:{rules:g}})):null].filter(Boolean),resolve:{alias:Object.assign({"@":S("src")},i),mainFields:["module","jsnext","jsnext:main","browser","main"]},root:S("./src"),server:{host:f||!0,port:h,proxy:a}});yield C.listen(),C.printUrls();const H=[...new Set(m.length?m:[""])];if(O){const{host:t,port:e}=C.config.server;yield H.reduce(((s,i)=>x(this,void 0,void 0,(function*(){const o=/^https:?/.test(i)?i:`${b?"https":"http"}://${!0===t?"localhost":t}:${e}${i.startsWith("/")?i:`/${i}`}`;yield s,yield E(o,{app:{name:"browser"}})}))),Promise.resolve())}const B=V("","configFile"),D=_(B);w(B,{persistent:!0},((t,e)=>x(this,void 0,void 0,(function*(){"change"===t&&e===D&&(yield C.close(),yield C.restart())}))))}))}