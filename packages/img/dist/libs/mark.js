var x=this&&this.__awaiter||function(t,o,n,r){return new(n||(n=Promise))((function(e,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(t){t(o)}))).then(s,a)}c((r=r.apply(t,o||[])).next())}))};import{readFileSync as tt}from"fs";import{basename as _,join as ii}from"path";import{exit as o}from"process";import{AbsPath as S,CreateDir as rs,RemoveDir as eo,WaitFor as Ze}from"@yangzw/bruce-us/dist/node.js";import co from"is-animated";import no from"ora";import Gt from"sharp";import St from"text-to-svg";import{MarkAnswer as ar}from"../helpers/index.js";import{MARK_TEXT as Lt}from"../langs/index.js";import{OUTPUT_DIR as ai,FilterImg as pi,FormatExt as ci,GetExt as ui,ShowTitle as io}from"../utils/index.js";function Et(t="",o){return x(this,void 0,void 0,(function*(){const n=tt(S(t)),r=ui(t);if(co(n)&&"webp"===r)return Lt.result2(t,"webp动态图像无法标记");try{const{blend:n,color:r,label:e,left:i="",position:s,size:a,top:c=""}=o,l=ii(ai.mark,t.replace(_(t),"")),f=S(ii(ai.mark,ci(t))),m=Object.assign({blend:n,input:Nt(e,+a,r)},"none"===s?{left:+i,top:+c}:{gravity:s});return rs(l),yield Gt(t).composite([m]).toFile(f),Lt.result1(t,e)}catch(o){return Lt.result2(t,o.message)}}))}function Nt(t="",o=12,n=""){const r=St.loadSync().getSVG(t,{anchor:"top",attributes:{fill:n},fontSize:o>=12?o:12});return Buffer.from(r)}export default function xo(){return x(this,void 0,void 0,(function*(){io("mark");const t=yield ar(),n=no(Lt.doing).start();eo(ai.mark),rs(ai.mark);const{count:r,imgs:e}=pi("jpg,png,webp,JPG,PNG,WEBP"),i=e.map((o=>x(this,void 0,void 0,(function*(){return yield Et(o,t)})))),s=yield Promise.all(i);yield Ze(2e3),n.stop(),console.log(Lt.stats(r)),s.length<=100&&s.forEach((t=>console.log(t))),console.log(Lt.done),o(1)}))}