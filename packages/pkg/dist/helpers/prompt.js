var g=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,a){function r(t){try{c(i.next(t))}catch(t){a(t)}}function s(t){try{c(i.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,s)}c((i=i.apply(t,e||[])).next())}))};import{input as ke}from"@inquirer/prompts";import{CheckPath as _e}from"@yangzw/bruce-us/dist/node.js";import{CREATE_TEXT as C}from"../langs/index.js";import{DATA_REGEXP as qe}from"../utils/index.js";function Nt(){return g(this,void 0,void 0,(function*(){return yield ke({default:"demo",message:C.name,validate:(t="")=>qe.name.test(t)?!_e(`/${t}`)||C.checkPath:C.checkName})}))}function Jt(){return g(this,void 0,void 0,(function*(){return yield ke({default:"",message:C.scope,validate:(t="")=>!(t&&!qe.scope.test(t))||C.checkScope})}))}export{Nt as NamePrompt,Jt as ScopePrompt};