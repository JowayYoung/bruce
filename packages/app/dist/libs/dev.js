var x=this&&this.__awaiter||function(o,e,n,s){return new(n||(n=Promise))((function(t,i){function r(o){try{u(s.next(o))}catch(o){i(o)}}function c(o){try{u(s.throw(o))}catch(o){i(o)}}function u(o){var e;o.done?t(o.value):(e=o.value,e instanceof n?e:new n((function(o){o(e)}))).then(r,c)}u((s=s.apply(o,e||[])).next())}))};import{exit as o}from"process";import{CheckPath as $t}from"@yangzw/bruce-us/dist/node.js";import{CreateVite as W,ParseConfig as V}from"../configs/index.js";import{DevAnswer as Et}from"../helpers/index.js";import{DEV_TEXT as ro}from"../langs/index.js";import{JudgeFile as U,ShowTitle as io}from"../utils/index.js";export default function u(e){return x(this,void 0,void 0,(function*(){io("dev");const n=U("","configFile"),s=U("src"),{useTs:t}=yield V();n||(console.log(ro.judgeBrucerc),o(1)),$t("node_modules")||(console.log(ro.judgeModules),o(1)),$t("package.json")||(console.log(ro.judgePackage),o(1)),t&&!$t("tsconfig.json")&&(console.log(ro.judgeTsconfig),o(1)),s||(console.log(ro.judgeIndexes),o(1));const{encrypt:i,lintcss:r,lintjs:c,open:u,port:l}=e,d=i||r||c||u||l?{port:0===l?9999:l,useCsslint:r,useHttps:i,useJslint:c,useOpener:u}:yield Et();yield W(d)}))}