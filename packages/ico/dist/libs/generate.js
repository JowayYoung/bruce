import{readdirSync as $t,readFileSync as le,writeFileSync as ue}from"fs";import{basename as w,extname as ce}from"path";import{exit as o}from"process";import{AbsPath as $,CreateDir as ns}from"@yangzw/bruce-us/dist/node.js";import Ge from"is-animated";import{lookup as qe}from"mime-types";import Ae from"ora";import{GENERATE_TEXT as no}from"../langs/index.js";import{DATA_REGEXP as gt,ShowTitle as Je}from"../utils/index.js";export default function oo({alone:e=!0,input:t="",output:r=""}){e&&Je("generate"),"#ENOENT"===t&&(console.log(no.judgeExist),o(1));const s=$(r?`${r}/icons.css`:"icons.css"),a=$t($(t)).filter((e=>{const o=$(`${t}/${e}`);return gt.img.test(ce(o))&&!Ge(le(o))}));if(a.length){const o=Ae(no.doing).start(),i=a.reduce(((e,o)=>{const r=$(`${t}/${o}`),s=w(r).replace(/\.(.+?)$/,""),a=le(r,"utf8"),i=Buffer.from(a).toString("base64"),n=`data:${qe(r).toString()};base64,${i}`,c=[...a.matchAll(gt.color)].map((e=>e[0])),m=c.length?c[0]:"",l=c.every((e=>e===m))&&!a.includes("gradient");return e+(l?`.icon-${s}{background-color:currentColor;-webkit-mask-image:url("${n}");mask-image:url("${n}");-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:cover;mask-size:cover;}`:`.icon-${s}{background-color:transparent;background-image:url("${n}");background-repeat:no-repeat;background-position:center;background-size:cover;}`)}),".icon{display:block;width:1em;height:1em;transition:all 300ms;}.icon.disabled{pointer-events:none;}");ns(r),ue(s,i,"utf-8"),o.stop(),e&&console.log(no.done(s))}else console.log(no.judgeEmpty);e&&o(1)}