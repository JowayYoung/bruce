"use strict";var t=require("axios");function e(){return"undefined"==typeof window?"node":"web"}function n(t){return Object.prototype.toString.call(t).replace(/\[object (\w+)\]/,"$1").toLowerCase()}function r(t){return"object"===n(t)}function o(t){return"function"===n(t)}function i(t){return Array.isArray(t)&&!t.length}function s(t){return r(t)&&!Object.keys(t).length}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function a(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var u={exports:{}},c=a(u.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",o="second",i="minute",s="hour",a="day",u="week",c="month",d="quarter",l="year",f="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,c),i=n-o<0,s=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-s:s-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:a,D:f,h:s,m:i,s:o,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},x="en",y={};y[x]=g;var b="$isDayjsObject",S=function(t){return t instanceof D||!(!t||!t[b])},$=function t(e,n,r){var o;if(!e)return x;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(o=i),n&&(y[i]=n,o=i);var s=e.split("-");if(!o&&s.length>1)return t(s[0])}else{var a=e.name;y[a]=e,o=a}return!r&&o&&(x=o),o||!r&&x},M=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},k=w;k.l=$,k.i=S,k.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function g(t){this.$L=$(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var m=g.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(k.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return k},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return M(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<M(t)},m.$g=function(t,e,n){return k.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!k.u(e)||e,d=k.p(t),p=function(t,e){var o=k.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?o:o.endOf(a)},h=function(t,e){return k.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,g=this.$M,m=this.$D,w="set"+(this.$u?"UTC":"");switch(d){case l:return r?p(1,0):p(31,11);case c:return r?p(1,g):p(0,g+1);case u:var x=this.$locale().weekStart||0,y=(v<x?v+7:v)-x;return p(r?m-y:m+(6-y),g);case a:case f:return h(w+"Hours",0);case s:return h(w+"Minutes",1);case i:return h(w+"Seconds",2);case o:return h(w+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,u=k.p(t),d="set"+(this.$u?"UTC":""),p=(n={},n[a]=d+"Date",n[f]=d+"Date",n[c]=d+"Month",n[l]=d+"FullYear",n[s]=d+"Hours",n[i]=d+"Minutes",n[o]=d+"Seconds",n[r]=d+"Milliseconds",n)[u],h=u===a?this.$D+(e-this.$W):e;if(u===c||u===l){var v=this.clone().set(f,1);v.$d[p](h),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[k.p(t)]()},m.add=function(r,d){var f,p=this;r=Number(r);var h=k.p(d),v=function(t){var e=M(p);return k.w(e.date(e.date()+Math.round(t*r)),p)};if(h===c)return this.set(c,this.$M+r);if(h===l)return this.set(l,this.$y+r);if(h===a)return v(1);if(h===u)return v(7);var g=(f={},f[i]=e,f[s]=n,f[o]=t,f)[h]||1,m=this.$d.getTime()+r*g;return k.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=t||"YYYY-MM-DDTHH:mm:ssZ",o=k.z(this),i=this.$H,s=this.$m,a=this.$M,u=n.weekdays,c=n.months,d=n.meridiem,l=function(t,n,o,i){return t&&(t[n]||t(e,r))||o[n].slice(0,i)},f=function(t){return k.s(i%12||12,t,"0")},h=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(v,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return k.s(e.$y,4,"0");case"M":return a+1;case"MM":return k.s(a+1,2,"0");case"MMM":return l(n.monthsShort,a,c,3);case"MMMM":return l(c,a);case"D":return e.$D;case"DD":return k.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return l(n.weekdaysMin,e.$W,u,2);case"ddd":return l(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(i);case"HH":return k.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return h(i,s,!0);case"A":return h(i,s,!1);case"m":return String(s);case"mm":return k.s(s,2,"0");case"s":return String(e.$s);case"ss":return k.s(e.$s,2,"0");case"SSS":return k.s(e.$ms,3,"0");case"Z":return o}return null}(t)||o.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,f,p){var h,v=this,g=k.p(f),m=M(r),w=(m.utcOffset()-this.utcOffset())*e,x=this-m,y=function(){return k.m(v,m)};switch(g){case l:h=y()/12;break;case c:h=y();break;case d:h=y()/3;break;case u:h=(x-w)/6048e5;break;case a:h=(x-w)/864e5;break;case s:h=x/n;break;case i:h=x/e;break;case o:h=x/t;break;default:h=x}return p?h:k.a(h)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return y[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return k.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},g}(),O=D.prototype;return M.prototype=O,[["$ms",r],["$s",o],["$m",i],["$H",s],["$W",a],["$M",c],["$y",l],["$D",f]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=$,M.isDayjs=S,M.unix=function(t){return M(1e3*t)},M.en=y[x],M.Ls=y,M.p={},M}());function d(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))}function l(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function f(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function p(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function h(t,e){return d(this,void 0,void 0,(function(){return l(this,(function(n){switch(n.label){case 0:return[4,t.then((function(t){return[null,t]})).catch((function(t){return[e?Object.assign({},t,e):t,void 0]}))];case 1:return[2,n.sent()]}}))}))}function v(t,e,n){if(void 0===t&&(t="+"),void 0===e&&(e=0),void 0===n&&(n=0),e=parseFloat(e.toString()),n=parseFloat(n.toString()),isNaN(e)||isNaN(n))return NaN;var r=(e.toString().split(".")[1]||"").length,o=(n.toString().split(".")[1]||"").length,i=Math.max(r,o,0),s=Math.pow(10,i),a=Math.round(e*s),u=Math.round(n*s);return"+"===t?(a+u)/s:"-"===t?(a-u)/s:"*"===t?a*u/(s*s):"/"===t?a/u:(a+u)/s}function g(t,e){return void 0===t&&(t=0),void 0===e&&(e=10),Math.floor(Math.random()*(e-t+1)+t)}"function"==typeof SuppressedError&&SuppressedError;var m={address:{msg:"地址只能由2~200位中文、英文、数字或空格组成",regexp:/^[\u4e00-\u9fa5A-Za-z0-9 ]{2,200}$/},count:{msg:"数量只能由数字组成",regexp:/^\d{1,}$/},date:{msg:"日期只能由YYYY-MM-DD HH:mm:ss形式组成",regexp:/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/},email:{msg:"邮箱只能由xxx@yyy.zzz形式组成",regexp:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/},idcard:{msg:"身份证只能由13位数字或12位数字和X组成",regexp:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/},image:{msg:"图像只能是JPG、PNG、GIF、SVG或WEBP类型",regexp:/\.(jpe?g|png|gif|svg|webp)$/},name:{msg:"名称只能由2~50位中文、英文、数字、下划线或中划线组成",regexp:/^[\u4e00-\u9fa5\w-]{2,50}$/},number:{msg:"计数只能由数字或小数点组成",regexp:/^[+-]?(0|([1-9]\d*))(\.\d+)?$/},password:{msg:"密码只能由8~20位英文、数字或符号至少两种组成",regexp:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,20}$/},phone:{msg:"手机只能由11位数字组成且符合通讯运营商规范",regexp:/^1\d{10}$/}},w="^$.*+-?=!:|\\/()[]{}".split("");function x(t,e,n){void 0===t&&(t=""),void 0===e&&(e=""),void 0===n&&(n=1);var r=new Date;r.setDate(r.getDate()+n),document.cookie="".concat(t,"=").concat(e,";expires=").concat(r.toString())}function y(t){var e,n,r,o;void 0===t&&(t=navigator.userAgent);var i=t.toLowerCase(),s=function(t){return t.test(i)},a=function(t){var e;return t?(null!==(e=i.match(t))&&void 0!==e?e:"").toString().replace(/[^0-9|_.]/g,"").replace(/_/g,"."):"unknow"},u={windows:/windows|win32|win64|wow32|wow64/g,macos:/macintosh|macintel/g,linux:/x11|ubuntu/g,android:/android|adr/g,ios:/ios|iphone|ipad|ipod/g},c=null!==(e=Object.keys(u).find((function(t){return s(u[t])})))&&void 0!==e?e:"unknow",d="unknow"===c?"unknow version":"windows"===c?function(){var t,e,n=(null!==(t=i.match(/(windows nt [\d._]+)|(windows [\w._]+)/g))&&void 0!==t?t:"").toString().replace(/windows( nt)? /g,""),r={2e3:/^(5\.0|2000)/g,xp:/^(5\.1|xp)/g,2003:/^(5\.2|2003)/g,vista:/^(6\.0|vista)/g,7:/^(6\.1|7)/g,8:/^(6\.2|8)/g,8.1:/^(6\.3|8\.1)/g,10:/^(10\.0|10)/g};return null!==(e=Object.keys(r).find((function(t){return r[t].test(n)})))&&void 0!==e?e:"unknow"}():a({macos:/mac os x [\d._]+/g,linux:/ubuntu\/[\d._]+/g,android:/android [\d._]+/g,ios:/os [\d._]+/g}[c])||"unknow version",l=s(/mobile/g)?"mobile":"desktop",f={webkit:[/applewebkit/g,/applewebkit\/[\d._]+/g],gecko:[/gecko\//g,/rv:[\d._]+/g],presto:[/presto/g,/presto\/[\d._]+/g],trident:[/compatible|msie|trident/g,/trident\/[\d._]+/g]},p=null!==(n=Object.keys(f).find((function(t){return s(f[t][0])})))&&void 0!==n?n:"unknow",h="unknow"===p?"unknow version":a(f[p][1])||"unknow version",v={safari:[/.*safari.*version.*|.*version.*safari.*/g,/version\/[\d._]+/g],edge:[/edge?/g,/edge?\/[\d._]+/g],firefox:[/firefox/g,/firefox\/[\d._]+/g],opera:[/op(era|r)/g,/(version|opr)\/[\d._]+/g],iexplore:[/compatible|msie|trident/g,/(msie |rv:)[\d._]+/g],chrome:[/chrome/g,/chrome\/[\d._]+/g]},g=null!==(r=Object.keys(v).find((function(t){return s(v[t][0])})))&&void 0!==r?r:"unknow",m="unknow"===g?"unknow version":a(v[g][1])||"unknow version",w={uc:[/ucweb|uc?browser|uclite/g,/(ucweb|uc?browser\/|uclite\/)[\d._]+/g],qq:[/qqbrowser/g,/qqbrowser\/[\d._]+/g],sougou:[/metasr|sogoumobilebrowser/g,/(metasr |sogoumobilebrowser\/)[\d._]+/],maxthon:[/maxthon/g,/maxthon(\/| )[\d._]+/g],2345:[/2345explorer/g,/2345explorer\/[\d._]+/g],360:[/360se/g],liebao:[/lbbrowser/g],xiaomi:[/xiaomi|miuibrowser/g,/miuibrowser\/[\d._]+/g],huawei:[/huaweibrowser/g,/huaweibrowser\/[\d._]+/g],oppo:[/heytapbrowser/g,/heytapbrowser\/[\d._]+/g],vivo:[/vivobrowser/g,/vivobrowser\/[\d._]+/g],wechat:[/micromessenger/g,/micromessenger\/[\d._]+/g],baidu:[/baiduboxapp/g,/baiduboxapp\/[\d._]+/g],toutiao:[/newsarticle|ttwebview/g,/(newsarticle|ttwebview)\/[\d._]+/g]},x=null!==(o=Object.keys(w).find((function(t){return s(w[t][0])})))&&void 0!==o?o:"none",y="none"===x?"none":w[x][1]&&a(w[x][1])||"unknow version";return Object.assign({engine:p,engineVs:h,platform:l,supporter:g,supporterVs:m,system:c,systemVs:d},"none"===x?{}:{shell:x,shellVs:y})}var b={download:"",downloadAndroid:"",downloadIos:"",downloadYyb:"",host:"",params:{},path:"",protocol:""},S={debug:!1,timeout:3e3},$=function(){function t(t,e){void 0===t&&(t=b),void 0===e&&(e={});var n=y(),r=n.system,o=n.shell,i=Object.assign(b,t),s=i.download,a=i.downloadAndroid,u=i.downloadIos,c=i.downloadYyb,d=i.host,l=i.params,f=i.path,p=i.protocol;this.option=Object.assign(S,e),this.scheme="".concat(p,"://").concat(d).concat(f).concat(k(l)),this.link=("wechat"===o&&c?c:"ios"===r?u:a)||s}return t.prototype.fallback=function(){var t=this,e=this.option,n=e.fail,r=e.timeout,o=void 0===r?3e3:r,i=setTimeout((function(){null==n||n(),window.location.href=t.link}),o);setTimeout((function(){window.addEventListener("blur",(function(){return clearTimeout(i)}))}),o-500)},t.prototype.onCall=function(){var t=y(),e=t.platform,n=t.shell,r=this.option,o=r.debug,i=r.start,s=r.startWechat;o&&console.log("scheme",this.scheme),o&&console.log("link",this.link),"mobile"!==e||("wechat"===n&&s?s():(null==i||i(),window.location.href=this.scheme,this.fallback()))},t}();function M(){var t=location.search;return t?t.replace(/(^\?)|(&$)/g,"").split("&").reduce((function(t,e){var n=f(e.split("="),2),r=n[0],o=n[1];return t[r]=decodeURIComponent(o),t}),{}):{}}function k(t,e){return void 0===t&&(t={}),void 0===e&&(e=!1),Object.entries(t).reduce((function(t,n){return e&&[void 0,null,"",NaN,!1].includes(n[1])?t:"".concat(t).concat(n[0],"=").concat(void 0===n[1]||null===n[1]?"":encodeURIComponent(n[1]),"&")}),s(t)?"":"?").replace(/&$/,"")}exports.Aios=function(e){var n=e.data,r=void 0===n?{}:n,o=e.headers,i=void 0===o?{}:o,s=e.method,a=void 0===s?"get":s,u=e.progress,c=e.timeout,p=void 0===c?1e4:c,v=e.url,g=void 0===v?"":v,m=e.useCookie,w=void 0===m||m,x=e.useJson,y=void 0!==x&&x;return d(this,void 0,void 0,(function(){var e,n,o,s,c;return l(this,(function(d){switch(d.label){case 0:return e="get"===a?{params:r}:y?{data:r}:{data:k(r,!0).replace(/^\?/g,"")},n=Object.assign({headers:i,method:a,onUploadProgress:u,timeout:p,url:g,withCredentials:w},e),[4,h(t(n))];case 1:return o=f.apply(void 0,[d.sent(),2]),s=o[0],c=o[1],[2,[s,!s&&200===(null==c?void 0:c.status)&&(null==c?void 0:c.data)?c.data:null]]}}))}))},exports.Ajax=function(t){var e=t.data,n=void 0===e?{}:e,r=t.error,o=t.success,i=t.type,s=void 0===i?"get":i,a=t.url,u=void 0===a?"":a,c=new XMLHttpRequest,d=s.toUpperCase(),l=k(n);"GET"===d?(c.open("GET",n?"".concat(u).concat(l):"".concat(u,"?t=").concat(+new Date),!0),c.send()):"POST"===d&&(c.open("POST",u,!0),c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c.send(l)),c.onreadystatechange=function(){4===c.readyState&&(200===c.status?null==o||o(c.responseText):null==r||r(c.status))}},exports.AsyncTo=h,exports.AutoResponse=function(t,e){void 0===t&&(t=750),void 0===e&&(e="x");var n=document.documentElement;"y"===e?n.clientHeight>=600?n.style.fontSize="80px":n.style.fontSize="".concat(n.clientHeight/t*100,"px"):n.clientWidth>=600?n.style.fontSize="80px":n.style.fontSize="".concat(n.clientWidth/t*100,"px")},exports.Base64ToFile=function(t,e){var n,r,o;void 0===t&&(t=""),void 0===e&&(e="unknow");for(var i=t.split(","),s=null!==(o=null===(r=null===(n=i[0])||void 0===n?void 0:n.match(/:(.*?);/))||void 0===r?void 0:r[1])&&void 0!==o?o:"jpg",a=s.split("/")[1],u=atob(i[1]),c=u.length,d=new Uint8Array(c);c--;)d[c]=u.charCodeAt(c);return new File([d],"".concat(e,".").concat(a),{type:s})},exports.CalcNum=v,exports.CalcNumPlus=function(t){void 0===t&&(t="+");for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var r={"*":1,"+":0,"/":1,"-":0}[t]||0,o=0;o<e.length;o++)r=0!==o||"-"!==t&&"/"!==t?v(t,r,e[o]):e[o];return r},exports.CallApp=$,exports.CheckObjValidKey=function(t,e){return void 0===t&&(t={}),void 0===e&&(e=""),e in t},exports.CheckText=function(t,e){void 0===t&&(t="phone"),void 0===e&&(e="");var n=m[t],r=n.regexp,o=n.msg,i=r.test(e);return{flag:i,msg:i?"":o}},exports.CheckTextPlus=function(t,e,n){void 0===e&&(e=""),void 0===n&&(n="");var r=t.test(e);return{flag:r,msg:r?"":n}},exports.ChunkArr=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=1),t.length?t.reduce((function(t,n){return t[t.length-1].length===e?t.push([n]):t[t.length-1].push(n),t}),[[]]):[]},exports.ClearLStorage=function(){localStorage.clear()},exports.ClearSStorage=function(){sessionStorage.clear()},exports.CopyPaste=function(t,e){return void 0===t&&(t=""),void 0===e&&(e=document.body),d(this,void 0,void 0,(function(){var n,r,o,i;return l(this,(function(s){switch(s.label){case 0:return n=document.createRange(),(r=getSelection())?(n.selectNodeContents(e),r.removeAllRanges(),r.addRange(n),[4,h(navigator.clipboard.writeText(t))]):[3,2];case 1:return o=f.apply(void 0,[s.sent(),1]),i=o[0],r.removeAllRanges(),[2,!i];case 2:return[2,!1]}}))}))},exports.Debounce=function(t,e){void 0===e&&(e=50);var n,r=null;return function(){for(var o=this,i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return r&&clearTimeout(r),r=setTimeout((function(){n=t.apply(o,i),r=null}),e),n}},exports.DesePhone=function(t){return void 0===t&&(t=""),m.phone.regexp.test(t)?t.toString().replace(/(\d{3})\d*(\d{4})/,"$1****$2"):t},exports.DownloadFile=function(t,e){void 0===t&&(t=""),void 0===e&&(e="unknow");var n=new Event("MouseEvents"),r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("download",e),r.click(),r.dispatchEvent(n)},exports.DownloadText=function(t,e){void 0===t&&(t=""),void 0===e&&(e="unknow");var n=new Event("MouseEvents"),r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,".concat(encodeURIComponent(t))),r.setAttribute("download",e),r.click(),r.dispatchEvent(n)},exports.EnvType=e,exports.FillNum=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=0),t.toString().padStart(e,"0")},exports.FilterObjKey=function(t,e){return void 0===t&&(t={}),void 0===e&&(e=[]),Object.keys(t).reduce((function(n,r){return e.includes(r)&&(n[r]=t[r]),n}),{})},exports.FilterXss=function(t){void 0===t&&(t="");var e=document.createElement("div");return e.innerText=t,e.innerHTML},exports.FixedNum=function(t){var e=t.dec,n=void 0===e?2:e,r=t.num,o=void 0===r?0:r,i=t.type,s=void 0===i?"round":i,a=Math.pow(10,n);return(Math[s]||Math.round)(o*a)/a},exports.FormatByte=function(t){if(void 0===t&&(t=0),0===t)return"0 B";var e=Math.floor(Math.log(t)/Math.log(1024));return(t/Math.pow(1024,e)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][e]},exports.FormatCountdown=function(t){if(!t)return"时间无效";var e=+new Date,n=+new Date(t)-e;if(n>=0){var r=Math.floor(n/1e3/3600/24),o=Math.floor(n/1e3/60/60%24),i=Math.floor(n/1e3/60%60),s=Math.floor(n/1e3%60),a=r?"".concat(r,"天"):"",u=o?"".concat(o,"时"):"",c=i?"".concat(i,"分"):"",d=s?"".concat(s,"秒"):"";return"".concat(a).concat(u).concat(c).concat(d)}return"时间已到"},exports.FormatPhone=function(t,e){return void 0===t&&(t=""),void 0===e&&(e="-"),m.phone.regexp.test(t)&&["-"," "].includes(e)?t.toString().replace(/(\d{3})(\d{4})(\d{4})/,"$1".concat(e,"$2").concat(e,"$3")):t},exports.FormatTimeDiff=function(t,e){if(void 0===e&&(e="YYYY-MM-DD"),!t)return"时间无效";var n=+new Date,r=+new Date(t),o=n-r,i=o>=0?"前":"后",s=Math.abs(o),a=30.4375,u=36e5,d=24*u,l=s/6e4,f=s/u,p=s/d,h=s/26298e5;return s/315576e5>=1||h>=12?c(r).format(e):h>=1&&h<12?"".concat(parseInt(h.toString()),"个月").concat(i):p>=1&&p<a?"".concat(parseInt(p.toString()),"天").concat(i):f>=1&&f<24?"".concat(parseInt(f.toString()),"小时").concat(i):l>=1&&l<60?"".concat(parseInt(l.toString()),"分钟").concat(i):o>=0?"刚刚":"准备"},exports.GetCookie=function(){var t=document.cookie;return t?t.split("; ").reduce((function(t,e){var n=e.split("=");return t[n[0]]=n[1],t}),{}):{}},exports.GetLStorage=function(t){void 0===t&&(t="");var e=localStorage.getItem(t);return e?JSON.parse(e):null},exports.GetSStorage=function(t){void 0===t&&(t="");var e=sessionStorage.getItem(t);return e?JSON.parse(e):null},exports.GroupArr=function(t,e){return void 0===t&&(t=[]),t.reduce((function(t,n){var r=n[e];return null!=r&&(!t[r]&&(t[r]=[]),t[r].push(n)),t}),{})},exports.HighlightText=function(t,e){var n;void 0===t&&(t=""),void 0===e&&(e="");var r=null===(n=t.match(e))||void 0===n?void 0:n[0];return r?t.split(r).join("<span>".concat(r,"</span>")):t},exports.ImgToBase64=function(t,e){return void 0===t&&(t=""),void 0===e&&(e="jpg"),d(this,void 0,void 0,(function(){var n,r,o,i;return l(this,(function(s){switch(s.label){case 0:return n=new Promise((function(n){var r=new Image;"jpg"===e&&(e="jpeg"),r.setAttribute("src",t),r.setAttribute("crossOrigin",""),r.addEventListener("load",(function(){var t,o=document.createElement("canvas");if(o){o.setAttribute("width","".concat(r.width,"px")),o.setAttribute("height","".concat(r.height,"px")),null===(t=o.getContext("2d"))||void 0===t||t.drawImage(r,0,0);var i=o.toDataURL('"image/'.concat(e,'"'));n(i)}else n("")})),r.addEventListener("error",(function(){return n("")}))})),[4,h(n)];case 1:return r=f.apply(void 0,[s.sent(),2]),o=r[0],i=r[1],[2,!o&&i?i:""]}}))}))},exports.IsArguments=function(t){return"arguments"===n(t)},exports.IsArray=function(t){return"array"===n(t)},exports.IsAsyncFunction=function(t){return"asyncfunction"===n(t)},exports.IsBoolean=function(t){return"boolean"===n(t)},exports.IsClass=function(t){return o(t)&&/^class\s+[\dA-Za-z]/.test(t.toString())},exports.IsDate=function(t){return"date"===n(t)},exports.IsElement=function(t){return/^html(.+?)element$/.test(n(t))},exports.IsEmpty=function(t){return!t},exports.IsEmptyArray=i,exports.IsEmptyObject=s,exports.IsError=function(t){return t instanceof Error},exports.IsFunction=o,exports.IsMap=function(t){return"map"===n(t)},exports.IsNode=function(){return"node"===e()},exports.IsNull=function(t){return"null"===n(t)},exports.IsNumber=function(t){return"number"===n(t)},exports.IsObject=r,exports.IsRegExp=function(t){return"regexp"===n(t)},exports.IsSet=function(t){return"set"===n(t)},exports.IsString=function(t){return"string"===n(t)},exports.IsSymbol=function(t){return"symbol"===n(t)},exports.IsSyncFunction=function(t){return"function"===n(t)},exports.IsUndefined=function(t){return"undefined"===n(t)},exports.IsWeakMap=function(t){return"weakmap"===n(t)},exports.IsWeakSet=function(t){return"weakset"===n(t)},exports.IsWeb=function(){return"web"===e()},exports.Jsonp=function(t){var e=t.name,n=void 0===e?"jsonp":e,r=t.onCall,o=t.url,i=void 0===o?"":o;return d(this,void 0,void 0,(function(){var t,e,o;return l(this,(function(s){switch(s.label){case 0:return[4,h(new Promise((function(t){var e=document.createElement("script");e.setAttribute("src",i),e.setAttribute("async","true"),e.addEventListener("load",(function(){return t(!0)})),e.addEventListener("error",(function(){return t(!1)})),window[n]=function(t){return null==r?void 0:r(t)},document.body.appendChild(e)})))];case 1:return t=f.apply(void 0,[s.sent(),2]),e=t[0],o=t[1],[2,!e&&!!o]}}))}))},exports.LoadScript=function(t,e){return void 0===t&&(t=""),void 0===e&&(e="body"),d(this,void 0,void 0,(function(){var n,r,o;return l(this,(function(i){switch(i.label){case 0:return[4,h(new Promise((function(n){p([],f(document.getElementsByTagName("script")),!1).some((function(e){return e.src===t||e.src.includes(t)}))&&n(!1);var r=document.createElement("script");r.setAttribute("src",t),r.addEventListener("load",(function(){return n(!0)})),r.addEventListener("error",(function(){return n(!1)})),"head"===e&&document.head.appendChild(r),"body"===e&&document.body.appendChild(r)})))];case 1:return n=f.apply(void 0,[i.sent(),2]),r=n[0],o=n[1],[2,!r&&!!o]}}))}))},exports.MatchBracketText=function(t,e){var n;void 0===t&&(t="(*)"),void 0===e&&(e="");var r=t.split("*").map((function(t){return w.includes(t)?"\\"+t:t})),o=new RegExp(r[0]+"(.+?)"+r[1],"g");return(null!==(n=e.match(o))&&void 0!==n?n:[]).map((function(t){return t.replace(o,"$1")}))},exports.ParseUrlSearch=M,exports.ProhibitEvent=function(t){void 0===t&&(t=[]),p([],f(new Set(t)),!1).sort().forEach((function(t){return document.addEventListener(t,(function(t){return t.preventDefault()}))}))},exports.RandomColor=function(){return"#"+Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")},exports.RandomId=function(t){return void 0===t&&(t=5),(t<1||t>10)&&(t=5),Math.random().toString(36).substr(3,t)},exports.RandomNum=g,exports.RandomNumPlus=function(t,e,n){void 0===t&&(t=0),void 0===e&&(e=10),void 0===n&&(n=1);for(var r=[];;){for(var o=!1,i=g(t,e),s=0;s<r.length;s++)if(i===r[s]){o=!0;break}if(o||r.push(i),r.length===n)return r}},exports.RecentMonths=function(t,e){void 0===t&&(t=6),void 0===e&&(e="YYYY-MM");for(var n=c(),r=[n.format(e)],o=1;o<t;o++){var i=n.subtract(o,"month");r.unshift(i.format(e))}return r},exports.RemoveCookie=function(t){void 0===t&&(t=""),x(t,"",-1)},exports.RemoveLStorage=function(t){void 0===t&&(t=""),localStorage.removeItem(t)},exports.RemoveObjEmptyKey=function(t,e){for(var n in void 0===t&&(t={}),void 0===e&&(e=!1),t)if({}.hasOwnProperty.call(t,n)){var r=t[n];(e?!r:""===r)&&delete t[n]}},exports.RemoveSStorage=function(t){void 0===t&&(t=""),sessionStorage.removeItem(t)},exports.RemoveTag=function(t){return void 0===t&&(t=""),t.replace(/<[^>]*>/g,"")},exports.RemoveUrlSearch=function(t){if(void 0===t&&(t=[]),!i(t)){var e=location.origin+location.pathname,n=location.hash,r=M();t.forEach((function(t){return Reflect.deleteProperty(r,t)}));var o=k(r);history.pushState({},document.title,e+o+n)}},exports.ReverseText=function(t){return void 0===t&&(t=""),t.split("").reduceRight((function(t,e){return t+e}))},exports.RoundNum=function(t){var e=t.dec,n=void 0===e?2:e,r=t.num,o=void 0===r?0:r,i=t.per;return void 0!==i&&i?"".concat(Math.round(o*Math.pow(10,n)*100)/Math.pow(10,n),"%"):Math.round(o*Math.pow(10,n))/Math.pow(10,n)},exports.SetCookie=x,exports.SetLStorage=function(t,e){void 0===t&&(t=""),localStorage.setItem(t,JSON.stringify(e))},exports.SetSStorage=function(t,e){void 0===t&&(t=""),sessionStorage.setItem(t,JSON.stringify(e))},exports.SetUrlSearch=function(t){if(void 0===t&&(t={}),!s(t)){var e=location.origin+location.pathname,n=location.hash,r=M(),o=k(Object.assign({},r,t));history.pushState({},document.title,e+o+n)}},exports.StartScore=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=5),t<0&&(t=0),t>e&&(t=e),p(p([],f(new Array(e).fill("★")),!1),f(new Array(e).fill("☆")),!1).join("").slice(e-t,2*e-t)},exports.StatArrMemCount=function(t){return void 0===t&&(t=[]),t.reduce((function(t,e){return t[e]=(t[e]||0)+1,t}),{})},exports.StatArrMemKeyword=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=[]),e.reduce((function(e,n){return t.some((function(t){return t.includes(n)}))&&e.push(n),e}),[])},exports.StatArrMemPosition=function(t,e){return void 0===t&&(t=[]),t.reduce((function(t,n,r){return n===e&&t.push(r),t}),[])},exports.StringifyUrlSearch=k,exports.ThousandNum=function(t){return void 0===t&&(t=0),t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},exports.Throttle=function(t,e){void 0===e&&(e=50);var n,r=null,o=!1,i=0;return function(){for(var s=this,a=[],u=0;u<arguments.length;u++)a[u]=arguments[u];if(o){r&&(clearTimeout(r),r=null);var c=Date.now(),d=e-(c-i);d<=0?(n=t.apply(this,a),i=c):r=setTimeout((function(){n=t.apply(s,a),i=Date.now(),r=null}),d)}else n=t.apply(this,a),i=Date.now(),o=!0;return n}},exports.TypeOf=n,exports.WaitFor=function(t){return void 0===t&&(t=1e3),d(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e){return setTimeout((function(){return e(!0)}),t)}))];case 1:return[2,e.sent()]}}))}))},exports.WebType=y;
