var x=this&&this.__awaiter||function(t,o,n,r){return new(n||(n=Promise))((function(i,e){function s(t){try{f(r.next(t))}catch(t){e(t)}}function a(t){try{f(r.throw(t))}catch(t){e(t)}}function f(t){var o;t.done?i(t.value):(o=t.value,o instanceof n?o:new n((function(t){t(o)}))).then(s,a)}f((r=r.apply(t,o||[])).next())}))};import{readFileSync as tt,writeFileSync as st}from"fs";import{dirname as t}from"path";import{exit as o}from"process";import{fileURLToPath as l}from"url";import{AbsPath as N,CheckPath as $t,WaitFor as Te}from"@yangzw/bruce-us/dist/node.js";import no from"ora";import{LocaleAnswer as er}from"../helpers/index.js";import{LOCALE_TEXT as po}from"../langs/index.js";import{ShowTitle as io}from"../utils/index.js";export default function O(){return x(this,void 0,void 0,(function*(){io("locale");const{lang:n}=yield er(),r=no(po.doing).start(),i=t(l(import.meta.url)),e=$t("../langs/index.js",i),s=N("../langs/index."+(e?"js":"ts"),i),a=tt(s,"utf8").replace(/"(.+?)"/,`"./${n}.${e?"js":"ts"}"`);st(s,a,"utf8"),yield Te(2e3),r.stop(),console.log(po.done),o(1)}))}