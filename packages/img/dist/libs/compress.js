var g=this&&this.__awaiter||function(e,i,t,o){return new(t||(t=Promise))((function(n,r){function s(e){try{m(o.next(e))}catch(e){r(e)}}function a(e){try{m(o.throw(e))}catch(e){r(e)}}function m(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(s,a)}m((o=o.apply(e,i||[])).next())}))};import{readFileSync as ae,writeFileSync as ce}from"fs";import{basename as w,join as ei}from"path";import{exit as o}from"process";import{AbsPath as $,CreateDir as rs,RemoveDir as eo,RoundNum as ii,WaitFor as no}from"@yangzw/bruce-us/dist/node.js";import ti from"imagemin";import oi from"imagemin-gifsicle";import ni from"imagemin-jpegtran";import ri from"imagemin-pngquant";import si from"imagemin-svgo";import ai from"imagemin-webp";import co from"is-animated";import oo from"ora";import{COMPRESS_TEXT as tr}from"../langs/index.js";import{OUTPUT_DIR as mi,FilterImg as ci,FormatExt as pi,GetExt as ui,ShowTitle as so}from"../utils/index.js";const li={gif:oi({interlaced:!1,optimizationLevel:3}),jpg:ni({arithmetic:!1,progressive:!0}),png:ri({quality:[.6,.8],speed:1}),svg:si({plugins:[{active:!1,name:"removeViewBox"},{active:!1,name:"cleanupIDs"},{active:!0,name:"removeDimensions"}]}),webp:ai({alphaQuality:100,quality:80})};function fi(e=""){return g(this,void 0,void 0,(function*(){const i=ae(e),t=ui(e);if(co(i)&&"webp"===t)return tr.result2(e,"webp动态图像无法压缩");try{const o=ei(mi.compress,e.replace(w(e),"")),n=$(ei(mi.compress,pi(e))),r=yield ti.buffer(i,{plugins:[li[t]]}),s=ii({num:i.length}),a=ii({num:r.length}),m=ii({num:1-a/s,per:!0});return rs(o),ce(n,r),tr.result1(e,{inputSize:s,outputSize:a,ratio:m})}catch(i){return tr.result2(e,i.message)}}))}export default function fo(){return g(this,void 0,void 0,(function*(){so("compress");const e=oo(tr.doing).start();eo(mi.compress),rs(mi.compress);const{count:i,imgs:t}=ci(),n=t.map((e=>g(this,void 0,void 0,(function*(){return yield fi(e)})))),r=yield Promise.all(n);yield no(2e3),e.stop(),console.log(tr.stats(i)),r.length<=100&&r.forEach((e=>console.log(e))),console.log(tr.done),o(1)}))}