var x=this&&this.__awaiter||function(o,t,n,i){return new(n||(n=Promise))((function(r,e){function s(o){try{p(i.next(o))}catch(o){e(o)}}function u(o){try{p(i.throw(o))}catch(o){e(o)}}function p(o){var t;o.done?r(o.value):(t=o.value,t instanceof n?t:new n((function(o){o(t)}))).then(s,u)}p((i=i.apply(o,t||[])).next())}))};import{createReadStream as Po,createWriteStream as _o,statSync as wt}from"node:fs";import{basename as _,join as ei}from"node:path";import{exit as s}from"node:process";import{AbsPath as S,AsyncTo as Y,CheckPath as qe,CreateDir as ns,RandomId as Eo,RemoveDir as eo,WaitFor as We}from"@yangzw/bruce-us/dist/node.js";import qo from"image-size";import no from"ora";import{GROUP_TEXT as o$}from"../langs/index.js";import{OUTPUT_DIR as ai,FilterImg as pi,GetExt as ui,ShowTitle as io}from"../utils/index.js";const Ao={gif:ei(ai.group,"gif"),jpg:ei(ai.group,"jpg"),png:ei(ai.group,"png"),svg:ei(ai.group,"svg"),webp:ei(ai.group,"webp")},Do={format:Jo,size:Ko,volume:Lo},Go={big:ei(ai.group,"big"),middle:ei(ai.group,"middle"),small:ei(ai.group,"small")};function Ho(){return x(this,arguments,void 0,(function*(o="",t=""){const n=new Promise((n=>{var i;const r=ei(t,_(o)),e=S(r);if(ns(t),qe(r)){const t=_(e).split("."),r=null!==(i=t.pop())&&void 0!==i?i:"png",s=t.concat(Eo(4),r).join("."),u=e.replace(_(e),s);Po(o).pipe(_o(u)),n(!0)}else Po(o).pipe(_o(e)),n(!1)})),[i,r]=yield Y(n);return yield We(100),!i&&r}))}function Jo(){return x(this,arguments,void 0,(function*(o=""){const t=ui(o),n=Ao[t],i=yield Ho(o,n);return o$.result1(o,t,i)}))}function Ko(){return x(this,arguments,void 0,(function*(o=""){const{height:t=0,width:n=0}=qo(o),i=ei(ai.group,`${n}x${t}`),r=yield Ho(o,i);return o$.result2(o,`${n}x${t}`,r)}))}function Lo(){return x(this,arguments,void 0,(function*(o=""){const{size:t}=wt(S(o)),n=t<10240?"small":t>=102400?"big":"middle",i=Go[n],r=yield Ho(o,i);return o$.result3(o,n,r)}))}export default function zo(o){return x(this,void 0,void 0,(function*(){io("group");const t=no(o$.doing).start();eo(ai.group),ns(ai.group);const{count:n,validImgs:i}=yield pi(),r="boolean"==typeof o.type?"format":o.type,e=[];for(const o of i){const t=yield Do[r](o);e.push(t)}t.stop(),console.log(o$.stats(n)),e.length<=100&&e.forEach((o=>console.log(o))),console.log(o$.done),s(1)}))}