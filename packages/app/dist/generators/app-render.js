import{readFileSync as tt,renameSync as ss,writeFileSync as st}from"node:fs";import{dirname as o}from"node:path";import{fileURLToPath as l}from"node:url";import{AbsPath as S,CopyDir as es,CreateDir as ns,ReadJson as n}from"@yangzw/bruce-us/dist/node.js";import{JudgeFile as L}from"../utils/index.js";const N=o(l(import.meta.url));function rs({name:s="unknown"}={}){es({dist:`${s}/src/assets`,src:"../assets/asset",srcDir:N})}function cs({ext:s="js",frame:e="js",name:n="unknown",style:r="scss",useTs:c=!1}={}){const t=S(`../assets/config/brucerc.${s}`,N),o=S(`${n}/brucerc.${s}`),a=tt(t,"utf8");let i="";"js"===s||"ts"===s?i=a.replace(/frame: "js"/g,`frame: "${e}"`).replace(/style: "scss"/g,`style: "${r}"`).replace(/useTs: false/g,`useTs: ${c}`):"json"===s?i=a.replace(/"frame": "js"/g,`"frame": "${e}"`).replace(/"style": "scss"/g,`"style": "${r}"`).replace(/"useTs": false/g,`"useTs": ${c}`):"yaml"===s&&(i=a.replace(/frame: "js"/g,`frame: ${e}`).replace(/style: "scss"/g,`style: ${r}`).replace(/useTs: FALSE/g,`useTs: ${c.toString().toUpperCase()}`)),st(o,i,"utf8")}function ts({deps:s={},devdeps:e={},name:n="unknown"}={}){const r={name:n,version:"1.0.0",description:"",keywords:[],type:"module",scripts:{build:"bruce-app b -lc -lj -m test","build:pre":"bruce-app b -lc -lj -m pre","build:prod":"bruce-app b -lc -lj",dev:"bruce-app d -e -lc -lj -o"},config:{},engines:{node:">=18.18.0",npm:">=9.8.1"},dependencies:s,devDependencies:e,license:"MIT"},c=S(`${n}/package.json`),t=JSON.stringify(r,null,"\t");st(c,t,"utf8")}function os({frame:s="js",name:e="unknown",style:n="scss",useTs:r=!1}={}){es({dist:`${e}/src`,src:`../assets/app/${s}${r?"-ts":""}`,srcDir:N});const c=L(`${e}/src`),t=L(`${e}/src/views/home`),o=L(`${e}/src/views/about`);("react"===s?[c,t,o]:[c]).forEach((s=>{const e=tt(s,"utf8").replace(/scss/g,n);st(s,e,"utf8")}));const a=S(`${e}/src/index.scss`),i=S(`${e}/src/views/home/index.scss`),u=S(`${e}/src/views/about/index.scss`);("react"===s?[a,i,u]:[a]).forEach((s=>{const e=s.replace(/scss$/g,n);ss(s,e)}))}function as({ext:s="js",frame:e="js",name:r="unknown",useTs:c=!1}={}){var t;if(!c)return;const o=`${r}/tsconfig.json`;es({dist:o,src:"../assets/config/codeconfig.json",srcDir:N});const a=null!==(t=n(o))&&void 0!==t?t:{compilerOptions:{jsx:"preserve"},include:[]};"react"===e&&(a.compilerOptions.jsx="react"),"ts"===s&&(a.include=[...a.include,"brucerc.ts"]),st(S(o),JSON.stringify(a,null,"\t"),"utf8")}export default function is({deps:s={},devdeps:e={},ext:n="js",frame:r="js",name:c="unknown",style:t="scss",useTs:o=!1}={}){ns(`${c}/src`),os({frame:r,name:c,style:t,useTs:o}),rs({name:c}),cs({ext:n,frame:r,name:c,style:t,useTs:o}),ts({deps:s,devdeps:e,name:c}),as({ext:n,frame:r,name:c,useTs:o})}