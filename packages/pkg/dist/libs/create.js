var x=this&&this.__awaiter||function(n,e,o,t){return new(o||(o=Promise))((function(i,s){function r(n){try{c(t.next(n))}catch(n){s(n)}}function a(n){try{c(t.throw(n))}catch(n){s(n)}}function c(n){var e;n.done?i(n.value):(e=n.value,e instanceof o?e:new o((function(n){n(e)}))).then(r,a)}c((t=t.apply(n,e||[])).next())}))};import{writeFileSync as st}from"node:fs";import{exit as s}from"node:process";import{AbsPath as S,CreateDir as ns,RunCmd as ln}from"@yangzw/bruce-us/dist/node.js";import no from"ora";import{CreateAnswer as be}from"../helpers/index.js";import{CREATE_TEXT as h}from"../langs/index.js";import{ShowTitle as io}from"../utils/index.js";export default function u(){return x(this,void 0,void 0,(function*(){io("create");const{name:n,scope:e}=yield be(),o=no(h.loading).start(),t=e?`@${e}/${n}`:n;try{ln(`npm view ${t} version`),o.stop(),console.log(h.judgeInvalid(t)),s(1)}catch(i){o.stop(),console.log(h.judgeValid(t));const r=no(h.doing).start();ns(n);const a=Object.assign({name:t,version:"1.0.0",description:"",keywords:[],author:{name:"",email:""},homepage:"",repository:{type:"git",url:""},bugs:{email:"",url:""},main:"index.js",bin:{[n]:"index.js"},scripts:{remove:"rimraf dist node_modules package-lock.json pnpm-lock.yaml yarn.lock",test:"node index.js"},engines:{node:">=16.0.0",npm:">=7.10.0"},dependencies:{},devDependencies:{},license:"MIT"},e?{publishConfig:{access:"public"}}:{}),c=S(`${n}/package.json`),l=JSON.stringify(a,null,"\t"),d=S(`${n}/index.js`),m='const name = "JowayYoung";\nconsole.log("Hello", name);';st(c,l,"utf8"),st(d,m,"utf8"),r.stop(),console.log(h.done),s(1)}}))}