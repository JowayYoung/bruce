var x=this&&this.__awaiter||function(n,t,r,o){return new(r||(r=Promise))((function(e,i){function u(n){try{a(o.next(n))}catch(n){i(n)}}function c(n){try{a(o.throw(n))}catch(n){i(n)}}function a(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(n){n(t)}))).then(u,c)}a((o=o.apply(n,t||[])).next())}))};import{AsyncTo as Y}from"@yangzw/bruce-us";import{Listr as ln}from"listr2";import{CHECK_AUTH as pn,CHECK_DEPS as hn,CHECK_ENV as mn,CHECK_PUBLISH as dn}from"./qa-task.js";export default function sr(){return x(this,void 0,void 0,(function*(){const n=new ln([mn,hn,pn,dn],{concurrent:!1,rendererOptions:{collapseSubtasks:!1}}),[t,r]=yield Y(n.run());return!t&&!!r}))}