var x=this&&this.__awaiter||function(t,e,o,r){return new(o||(o=Promise))((function(n,a){function i(t){try{s(r.next(t))}catch(t){a(t)}}function l(t){try{s(r.throw(t))}catch(t){a(t)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(i,l)}s((r=r.apply(t,e||[])).next())}))};import{readFileSync as tt}from"fs";import{basename as _,join as ii}from"path";import{exit as o}from"process";import{AbsPath as S,CreateDir as rs,RemoveDir as eo,WaitFor as _e}from"@yangzw/bruce-us/dist/node.js";import ze from"is-animated";import no from"ora";import Yt from"sharp";import{TRANSFORM_TEXT as Re}from"../langs/index.js";import{OUTPUT_DIR as ai,FilterImg as pi,FormatExt as ci,GetExt as ui,ShowTitle as io}from"../utils/index.js";function Pe(t){return[{key:"blur",val:t.blur},{key:"extract",val:t.extract},{key:"flip",val:t.flip},{key:"flop",val:t.flop},{key:"grayscale",val:t.grayscale},{key:"negate",val:t.negate},{key:"normalise",val:t.normalise},{key:"resize",val:t.resize},{key:"rotate",val:t.rotate},{key:"sharpen",val:t.sharpen},{key:"toFormat",val:t.toFormat}].filter((t=>!!t.val))}function Ae(t="",e=[]){var o;return x(this,void 0,void 0,(function*(){const r=tt(S(t)),n=ui(t);if(ze(r)&&"webp"===n)return Re.result2(t,"webp动态图像无法变换");try{const r=ii(ai.transform,t.replace(_(t),"")),n=S(ii(ai.transform,ci(t))),a=e.reduce(((t,e)=>Array.isArray(e.val)?t[e.key](...e.val):!0===e.val?t[e.key]():t[e.key](e.val)),Yt(t).withMetadata()),{val:i}=null!==(o=e.find((t=>"toFormat"===t.key)))&&void 0!==o?o:{};let l=null;if(rs(r),i&&"string"==typeof i){const e=_(t).split(".");e.pop();const o=e.concat(i).join("."),r=n.replace(_(t),o);l=yield a.toFile(r)}else l=yield a.toFile(n);return Re.result1(t,l)}catch(e){return Re.result2(t,e.message)}}))}export default function xo(t){return x(this,void 0,void 0,(function*(){io("transform");const e=Pe(t);e.length||(console.log(Re.empty),o(1));const r=no(Re.doing).start();eo(ai.transform),rs(ai.transform);const{count:n,imgs:a}=pi("jpg,png,webp,JPG,PNG,WEBP"),i=a.map((t=>x(this,void 0,void 0,(function*(){return yield Ae(t,e)})))),l=yield Promise.all(i);yield _e(2e3),r.stop(),console.log(Re.stats(n)),l.length<=100&&l.forEach((t=>console.log(t))),console.log(Re.done),o(1)}))}