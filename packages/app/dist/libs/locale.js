var x=this&&this.__awaiter||function(o,t,n,r){return new(n||(n=Promise))((function(e,i){function s(o){try{f(r.next(o))}catch(o){i(o)}}function a(o){try{f(r.throw(o))}catch(o){i(o)}}function f(o){var t;o.done?e(o.value):(t=o.value,t instanceof n?t:new n((function(o){o(t)}))).then(s,a)}f((r=r.apply(o,t||[])).next())}))};import{readFileSync as tt,writeFileSync as st}from"node:fs";import{dirname as o}from"node:path";import{exit as s}from"node:process";import{fileURLToPath as l}from"node:url";import{AbsPath as S,CheckPath as qe,WaitFor as We}from"@yangzw/bruce-us/dist/node.js";import no from"ora";import{LocaleAnswer as er}from"../helpers/index.js";import{LOCALE_TEXT as po}from"../langs/index.js";import{ShowTitle as io}from"../utils/index.js";export default function f(){return x(this,void 0,void 0,(function*(){io("locale");const{lang:t}=yield er(),n=no(po.doing).start(),r=o(l(import.meta.url)),e=qe("../langs/index.js",r),i=S("../langs/index."+(e?"js":"ts"),r),a=tt(i,"utf8").replace(/"(.+?)"/,`"./${t}.${e?"js":"ts"}"`);st(i,a,"utf8"),yield We(2e3),n.stop(),console.log(po.done),s(1)}))}