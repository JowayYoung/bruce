var x=this&&this.__awaiter||function(n,t,e,i){return new(e||(e=Promise))((function(o,r){function c(n){try{a(i.next(n))}catch(n){r(n)}}function u(n){try{a(i.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((i=i.apply(n,t||[])).next())}))};import{NamePrompt as on,ScopePrompt as rn}from"./prompt.js";export default function be(){return x(this,void 0,void 0,(function*(){return{name:yield on(),scope:yield rn()}}))}