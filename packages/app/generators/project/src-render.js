import{readFileSync as ar,renameSync as Ce,writeFileSync as De}from"fs";import{dirname as w}from"path";import{fileURLToPath as B}from"url";import{CopyDir as Ae}from"@yangzw/bruce-us/dist/node.js";import{AbsPath as E,JudgeFile as i}from"../../constants/util/index.js";export default function Ie({frame:s="js",name:e="demo",style:t="scss",useTs:o=!1}={}){const c=w(B(import.meta.url)),r=E(`../../templates/src/${s}${o?"-ts":""}`,c),a=`${e}/src`;if(Ae(r,a),"vue"===s){[E(`${a}/app.vue`),E(`${a}/views/home/index.vue`),E(`${a}/views/about/index.vue`)].forEach((s=>{const e=ar(s,"utf8").replace(/scss/g,t);De(s,e,"utf8")}))}else{const e=i(a),o=i(`${a}/views/home`),c=i(`${a}/views/about`);("react"===s?[e,o,c]:[e]).forEach((s=>{const e=ar(s,"utf8").replace(/scss/g,t);De(s,e,"utf8")}));const r=E(`${a}/index.scss`),m=E(`${a}/views/home/index.scss`),n=E(`${a}/views/about/index.scss`);("react"===s?[r,m,n]:[r]).forEach((s=>{const e=s.replace(/scss$/g,t);Ce(s,e)}))}}