var g=this&&this.__awaiter||function(o,n,t,i){return new(t||(t=Promise))((function(e,r){function a(o){try{c(i.next(o))}catch(o){r(o)}}function s(o){try{c(i.throw(o))}catch(o){r(o)}}function c(o){var n;o.done?e(o.value):(n=o.value,n instanceof t?n:new t((function(o){o(n)}))).then(a,s)}c((i=i.apply(o,n||[])).next())}))};import{exit as o}from"process";import _o from"clipboardy";import Je from"ora";import{COPY_TEXT as Bo,UPDATE_TEXT as Xo}from"../langs/index.mjs";import{GenerateConfig as So,ShowTitle as De}from"../utils/index.mjs";function Eo(){return g(this,void 0,void 0,(function*(){De("copy");const n=Je(Bo.doing).start(),{config:t,flag:i,path:e}=So(n);n.stop(),i&&_o.writeSync(t),console.log(i?Bo.done(e):Bo.undone),o(1)}))}function No(){return g(this,void 0,void 0,(function*(){De("update");const n=Je(Xo.doing).start(),{flag:t}=So(n,!0);n.stop(),console.log(t?Xo.done:Xo.undone),o(1)}))}export{Eo as Copy,No as Update};