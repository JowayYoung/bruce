var g=this&&this.__awaiter||function(e,i,t,o){return new(t||(t=Promise))((function(n,r){function s(e){try{m(o.next(e))}catch(e){r(e)}}function a(e){try{m(o.throw(e))}catch(e){r(e)}}function m(e){var i;e.done?n(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(s,a)}m((o=o.apply(e,i||[])).next())}))};import{readFileSync as le,writeFileSync as ue}from"fs";import{basename as w,join as We}from"path";import{exit as o}from"process";import{AbsPath as $,CreateDir as ns,RemoveDir as ze,RoundNum as Ze,WaitFor as Fe}from"@yangzw/bruce-us/dist/node.js";import ei from"imagemin";import ii from"imagemin-gifsicle";import ti from"imagemin-jpegtran";import oi from"imagemin-pngquant";import ni from"imagemin-svgo";import ri from"imagemin-webp";import Ge from"is-animated";import Ae from"ora";import{COMPRESS_TEXT as Ue}from"../langs/index.js";import{OUTPUT_DIR as si,FilterImg as ai,FormatExt as mi,GetExt as ci,ShowTitle as Je}from"../utils/index.js";const pi={gif:ii({interlaced:!1,optimizationLevel:3}),jpg:ti({arithmetic:!1,progressive:!0}),png:oi({quality:[.6,.8],speed:1}),svg:ni({plugins:[{active:!1,name:"removeViewBox"},{active:!1,name:"cleanupIDs"},{active:!0,name:"removeDimensions"}]}),webp:ri({alphaQuality:100,quality:80})};function ui(e=""){return g(this,void 0,void 0,(function*(){const i=le(e),t=ci(e);if(Ge(i)&&"webp"===t)return Ue.result2(e,"webp动态图像无法压缩");try{const o=We(si.compress,e.replace(w(e),"")),n=$(We(si.compress,mi(e))),r=yield ei.buffer(i,{plugins:[pi[t]]}),s=Ze({num:i.length}),a=Ze({num:r.length}),m=Ze({num:1-a/s,per:!0});return ns(o),ue(n,r),Ue.result1(e,{inputSize:s,outputSize:a,ratio:m})}catch(i){return Ue.result2(e,i.message)}}))}export default function ro(){return g(this,void 0,void 0,(function*(){Je("compress");const e=Ae(Ue.doing).start();ze(si.compress),ns(si.compress);const{count:i,imgs:t}=ai(),n=t.map((e=>g(this,void 0,void 0,(function*(){return yield ui(e)})))),r=yield Promise.all(n);yield Fe(2e3),e.stop(),console.log(Ue.stats(i)),r.length<=100&&r.forEach((e=>console.log(e))),console.log(Ue.done),o(1)}))}