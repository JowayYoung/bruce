var x=this&&this.__awaiter||function(o,e,n,s){return new(n||(n=Promise))((function(i,l){function t(o){try{d(s.next(o))}catch(o){l(o)}}function r(o){try{d(s.throw(o))}catch(o){l(o)}}function d(o){var e;o.done?i(o.value):(e=o.value,e instanceof n?e:new n((function(o){o(e)}))).then(t,r)}d((s=s.apply(o,e||[])).next())}))};import{exit as s}from"node:process";import{CheckPath as qe,ReadJson as n,RemoveDir as eo}from"@yangzw/bruce-us/dist/node.js";import no from"ora";import{CreateWebpack as ae,ParseConfig as W}from"../configs/index.js";import{BuildAnswer as we}from"../helpers/index.js";import{BUILD_TEXT as oo}from"../langs/index.js";import{JudgeFile as L,ShowTitle as io}from"../utils/index.js";export default function c(o){return x(this,void 0,void 0,(function*(){var e;io("build");const i=L("","configFile"),l=L("src"),{buildError:t,buildSuccess:r,useTs:d}=yield W();i||(console.log(oo.judgeBrucerc),s(1)),qe("node_modules")||(console.log(oo.judgeModules),s(1)),qe("package.json")||(console.log(oo.judgePackage),s(1)),d&&!qe("tsconfig.json")&&(console.log(oo.judgeTsconfig),s(1)),l||(console.log(oo.judgeIndexes),s(1));const{analyze:u,compress:c,lintcss:a,lintjs:m,mode:f,named:g,polyfill:p,timed:j}=o,y=u||c||a||m||f||g||p||j?{mode:""===f?"prod":f,polyfill:""===p?"es6":p,useAnalyzer:u,useCompressor:c,useCsslint:a,useHash:g,useJslint:m,useTimer:j}:yield we(),v=no(oo.doing).start(),{mode:h,useAnalyzer:x,useTimer:w}=y,{name:b="unknown",version:k="1.0.0"}=null!==(e=n("package.json"))&&void 0!==e?e:{};!w&&eo(`dist/${h}`),v.stop();const{dist:z,flag:T}=yield ae(y);T?(console.log(oo.done(b,k,h)),yield null==r?void 0:r({dist:z,mode:h})):(console.log(oo.undone),yield null==t?void 0:t({dist:z,mode:h})),!x&&s(1)}))}