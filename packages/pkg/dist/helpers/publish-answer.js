var g=this&&this.__awaiter||function(n,t,r,o){return new(r||(r=Promise))((function(e,i){function s(n){try{c(o.next(n))}catch(n){i(n)}}function a(n){try{c(o.throw(n))}catch(n){i(n)}}function c(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(n){n(t)}))).then(s,a)}c((o=o.apply(n,t||[])).next())}))};import{AsyncTo as M}from"@yangzw/bruce-us";import{Listr as tn}from"listr2";import{CHECK_AUTH as rn,CHECK_ENV as on,CHECK_PUBLISH as en}from"./task.js";export default function mr(){return g(this,void 0,void 0,(function*(){const n=new tn([on,rn,en],{concurrent:!1,rendererOptions:{collapseSubtasks:!1}}),[t,r]=yield M(n.run());return!t&&!!r}))}