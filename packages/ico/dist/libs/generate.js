import{readdirSync as Vt,readFileSync as tt,writeFileSync as st}from"fs";import{basename as _,extname as rt}from"path";import{exit as o}from"process";import{AbsPath as S,CreateDir as rs}from"@yangzw/bruce-us/dist/node.js";import ze from"is-animated";import{lookup as Ee}from"mime-types";import no from"ora";import{GENERATE_TEXT as go}from"../langs/index.js";import{DATA_REGEXP as Jt,ShowTitle as io}from"../utils/index.js";export default function to({alone:e=!0,input:t="",output:r=""}){e&&io("generate"),"#ENOENT"===t&&(console.log(go.judgeExist),o(1));const n=S(r?`${r}/icons.css`:"icons.css"),i=Vt(S(t)).filter((e=>{const o=S(`${t}/${e}`);return Jt.img.test(rt(o))&&!ze(tt(o))}));if(i.length){const o=no(go.doing).start(),s=i.reduce(((e,o)=>{const r=S(`${t}/${o}`),n=_(r).replace(/\.(.+?)$/,""),i=tt(r,"utf8"),s=Buffer.from(i).toString("base64"),a=`data:${Ee(r).toString()};base64,${s}`,m=[...i.matchAll(Jt.color)].map((e=>e[0])),c=m.length?m[0]:"",p=m.every((e=>e===c))&&!i.includes("gradient");return e+(p?`.icon-${n}{background-color:currentColor;-webkit-mask-image:url("${a}");mask-image:url("${a}");-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:cover;mask-size:cover;}`:`.icon-${n}{background-color:transparent;background-image:url("${a}");background-repeat:no-repeat;background-position:center;background-size:cover;}`)}),".icon{display:block;width:1em;height:1em;transition:all 300ms;}.icon.disabled{pointer-events:none;}");rs(r),st(n,s,"utf-8"),o.stop(),e&&console.log(go.done(n))}else console.log(go.judgeEmpty);e&&o(1)}