var x=this&&this.__awaiter||function(t,n,e,i){return new(e||(e=Promise))((function(o,r){function a(t){try{u(i.next(t))}catch(t){r(t)}}function c(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}u((i=i.apply(t,n||[])).next())}))};import mt from"inquirer";import{MATE_NAME as Nt}from"./qa-input.js";import{TEMPLATE as Ft}from"./qa-select.js";const{prompt:zt}=mt;export default function or(){return x(this,void 0,void 0,(function*(){const{template:t}=yield zt([Ft]),{mateName:n}=yield zt([Nt(t)]);return{mateName:n,template:t}}))}