var x=this&&this.__awaiter||function(o,t,n,e){return new(n||(n=Promise))((function(r,i){function c(o){try{a(e.next(o))}catch(o){i(o)}}function s(o){try{a(e.throw(o))}catch(o){i(o)}}function a(o){var t;o.done?r(o.value):(t=o.value,t instanceof n?t:new n((function(o){o(t)}))).then(c,s)}a((e=e.apply(o,t||[])).next())}))};import{exit as o}from"process";import{RemoveDir as eo,WaitFor as _e}from"@yangzw/bruce-us/dist/node.js";import no from"ora";import{RemoveAnswer as mr}from"../helpers/index.js";import{REMOVE_TEXT as so}from"../langs/index.js";import{ShowTitle as io}from"../utils/index.js";export default function b(){return x(this,void 0,void 0,(function*(){io("remove");const{cache:t}=yield mr(),n=no(so.doing).start();t.forEach((o=>eo(o))),yield _e(2e3),n.stop(),console.log(so.done),o(1)}))}