var x=this&&this.__awaiter||function(t,n,i,r){return new(i||(i=Promise))((function(e,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(u,c)}a((r=r.apply(t,n||[])).next())}))};import mt from"inquirer";import{LANG as Gt}from"./qa-select.js";export default function er(){return x(this,void 0,void 0,(function*(){return yield mt.prompt([Gt])}))}