var x=this&&this.__awaiter||function(t,e,a,n){return new(a||(a=Promise))((function(o,i){function m(t){try{r(n.next(t))}catch(t){i(t)}}function p(t){try{r(n.throw(t))}catch(t){i(t)}}function r(t){var e;t.done?o(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(m,p)}r((n=n.apply(t,e||[])).next())}))};import{CheckPath as $t,CheckPort as Ht}from"@yangzw/bruce-us/dist/node.js";import{CHECK_TEXT as It,QUESTION_TEXT as ue}from"../langs/index.js";import{DATA_REGEXP as Jt}from"../utils/index.js";const gt={default:"unknown",message:ue.appName,name:"appName",type:"input",validate:(t="")=>Jt.appName.test(t)?!$t(t)||It.appPath:It.appName},Nt=(t="component")=>({default:"demo",message:ue.mateName,name:"mateName",type:"input",validate:(e="")=>Jt.mateName.test(e)?!$t(`src/${t}s/${e}`)||It.matePath:It.mateName}),Dt={default:9999,message:ue.port,name:"port",type:"input",validate(t=""){return x(this,void 0,void 0,(function*(){const e=+t,a=yield Ht({port:e});return isNaN(e)||e%1!=0||e<0||e>65535?It.portName:!!a||It.portPath}))}};export{gt as APP_NAME,Nt as MATE_NAME,Dt as PORT};