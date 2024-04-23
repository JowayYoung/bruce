var x=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(u,s){function o(e){try{a(i.next(e))}catch(e){s(e)}}function r(e){try{a(i.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?u(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}a((i=i.apply(e,t||[])).next())}))};import{checkbox as Oe,confirm as Se,input as Le,select as Re}from"@inquirer/prompts";import{CheckPath as Ke,CheckPort as Me}from"@yangzw/bruce-us/dist/node.js";import{CHECK_TEXT as Qe,MAP_TEXT as Ue,QUESTION_TEXT as Ve}from"../langs/index.js";import{DATA_REGEXP as We,DEPENDENCE as Xe}from"../utils/index.js";function Ie(){return x(this,void 0,void 0,(function*(){return yield Le({default:"unknown",message:Ve.appName,validate:(e="")=>We.appName.test(e)?!Ke(e)||Qe.appPath:Qe.appName})}))}function Ye(){return x(this,void 0,void 0,(function*(){return yield Oe({choices:[{name:"dist",value:"dist"},{name:"node_modules",value:"node_modules"},{name:"package-lock.json",value:"package-lock.json"},{name:"yarn.lock",value:"yarn.lock"}],message:Ve.cache,required:!0})}))}function Ne(){return x(this,arguments,void 0,(function*(e="js"){return yield Oe({choices:Xe[e],message:Ve.deps})}))}function qe(){return x(this,arguments,void 0,(function*(e=!1){return yield Re({choices:e?Object.entries(Ue.ext).filter((e=>"js"!==e[0])).map((e=>({name:e[1],value:e[0]}))):Object.entries(Ue.ext).filter((e=>"ts"!==e[0])).map((e=>({name:e[1],value:e[0]}))),default:"json",message:Ve.ext})}))}function Be(){return x(this,void 0,void 0,(function*(){return yield Re({choices:[{name:"JavaScript",value:"js"},{name:"React",value:"react"}],default:"js",message:Ve.frame})}))}function nn(){return x(this,void 0,void 0,(function*(){return yield Re({choices:[{name:"简体中文",value:"zh-chs"},{name:"繁體中文",value:"zh-cht"}],default:"zh-chs",message:Ve.lang})}))}function ot(){return x(this,arguments,void 0,(function*(e="component"){return yield Le({default:"demo",message:Ve.mateName,validate:(t="")=>We.mateName.test(t)?!Ke(`src/${e}s/${t}`)||Qe.matePath:Qe.mateName})}))}function we(){return x(this,void 0,void 0,(function*(){return yield Re({choices:Object.entries(Ue.mode).map((e=>({name:e[1],value:e[0]}))).slice(1),default:"prod",message:Ve.mode})}))}function _e(){return x(this,void 0,void 0,(function*(){return yield Re({choices:Object.entries(Ue.polyfill).map((e=>({name:e[1],value:e[0]}))),default:"es6",message:Ve.polyfill})}))}function tt(){return x(this,void 0,void 0,(function*(){const e=+(yield Le({default:"9999",message:Ve.port,validate(){return x(this,arguments,void 0,(function*(e=""){const t=+e,n=yield Me({port:t});return isNaN(t)||t%1!=0||t<0||t>65535?Qe.portName:!!n||Qe.portPath}))}}));return e}))}function De(){return x(this,void 0,void 0,(function*(){return yield Re({choices:[{name:"Scss",value:"scss"},{name:"Less",value:"less"}],default:"scss",message:Ve.style})}))}function rt(){return x(this,void 0,void 0,(function*(){return yield Re({choices:Object.entries(Ue.template).map((e=>({name:e[1],value:e[0]}))),default:"component",message:Ve.template})}))}function ze(){return x(this,void 0,void 0,(function*(){return yield Se({default:!1,message:Ve.useAnalyzer})}))}function Ae(){return x(this,void 0,void 0,(function*(){return yield Se({default:!1,message:Ve.useCompressor})}))}function He(){return x(this,void 0,void 0,(function*(){return yield Se({default:!1,message:Ve.useCsslint})}))}function Je(){return x(this,void 0,void 0,(function*(){return yield Se({default:!1,message:Ve.useHash})}))}function nt(){return x(this,void 0,void 0,(function*(){return yield Se({default:!1,message:Ve.useHttps})}))}function Ee(){return x(this,void 0,void 0,(function*(){return yield Se({default:!1,message:Ve.useInstaller})}))}function Pe(){return x(this,void 0,void 0,(function*(){return yield Se({default:!1,message:Ve.useJslint})}))}function et(){return x(this,void 0,void 0,(function*(){return yield Se({default:!1,message:Ve.useOpener})}))}function Te(){return x(this,void 0,void 0,(function*(){return yield Se({default:!1,message:Ve.useTimer})}))}function Fe(){return x(this,void 0,void 0,(function*(){return yield Se({default:!1,message:Ve.useTs})}))}export{Ie as AppNamePrompt,Ye as CachesPrompt,Ne as DepsPrompt,qe as ExtPrompt,Be as FramePrompt,nn as LangPrompt,ot as MateNamePrompt,we as ModePrompt,_e as PolyfillPrompt,tt as PortPrompt,De as StylePrompt,rt as TemplatePrompt,ze as UseAnalyzerPrompt,Ae as UseCompressorPrompt,He as UseCsslintPrompt,Je as UseHashPrompt,nt as UseHttpsPrompt,Ee as UseInstallerPrompt,Pe as UseJslintPrompt,et as UseOpenerPrompt,Te as UseTimerPrompt,Fe as UseTsPrompt};