import t from"axios";function n(t,n){return void 0===t&&(t=[]),void 0===n&&(n=1),t.length?t.reduce((function(t,e){return t[t.length-1].length===n?t.push([e]):t[t.length-1].push(e),t}),[[]]):[]}function e(t,n){return void 0===t&&(t=[]),t.reduce((function(t,e){var r=e[n];return null!=r&&(!t[r]&&(t[r]=[]),t[r].push(e)),t}),{})}function r(t){return void 0===t&&(t=[]),t.reduce((function(t,n){return t[n]=(t[n]||0)+1,t}),{})}function o(t,n){return void 0===t&&(t=[]),void 0===n&&(n=[]),n.reduce((function(n,e){return t.some((function(t){return t.includes(e)}))&&n.push(e),n}),[])}function i(t,n){return void 0===t&&(t=[]),t.reduce((function(t,e,r){return e===n&&t.push(r),t}),[])}function u(){return"undefined"==typeof window?"node":"web"}function a(){return"web"===u()}function c(){return"node"===u()}function s(t){return Object.prototype.toString.call(t).replace(/\[object (\w+)\]/,"$1").toLowerCase()}function d(t){return"undefined"===s(t)}function l(t){return"null"===s(t)}function f(t){return"string"===s(t)}function h(t){return"number"===s(t)}function v(t){return"boolean"===s(t)}function p(t){return"symbol"===s(t)}function g(t){return"array"===s(t)}function m(t){return"object"===s(t)}function w(t){return"date"===s(t)}function b(t){return"regexp"===s(t)}function y(t){return"function"===s(t)}function $(t){return y(t)&&/^class\s+[\dA-Za-z]/.test(t.toString())}function M(t){return"set"===s(t)}function S(t){return"map"===s(t)}function x(t){return"weakset"===s(t)}function k(t){return"weakmap"===s(t)}function D(t){return/^html(.+?)element$/.test(s(t))}function _(t){return"asyncfunction"===s(t)}function O(t){return"function"===s(t)}function E(t){return"arguments"===s(t)}function A(t){return t instanceof Error}function T(t){return!t}function j(t){return Array.isArray(t)&&!t.length}function Y(t){return m(t)&&!Object.keys(t).length}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function C(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var I={exports:{}},L=C(I.exports=function(){var t=1e3,n=6e4,e=36e5,r="millisecond",o="second",i="minute",u="hour",a="day",c="week",s="month",d="quarter",l="year",f="date",h="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],e=t%100;return"["+t+(n[(e-20)%10]||n[e]||n[0])+"]"}},m=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},w={s:m,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),o=e%60;return(n<=0?"+":"-")+m(r,2,"0")+":"+m(o,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),o=n.clone().add(r,s),i=e-o<0,u=n.clone().add(r+(i?-1:1),s);return+(-(r+(e-o)/(i?o-u:u-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:l,w:c,d:a,D:f,h:u,m:i,s:o,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",y={};y[b]=g;var $="$isDayjsObject",M=function(t){return t instanceof D||!(!t||!t[$])},S=function t(n,e,r){var o;if(!n)return b;if("string"==typeof n){var i=n.toLowerCase();y[i]&&(o=i),e&&(y[i]=e,o=i);var u=n.split("-");if(!o&&u.length>1)return t(u[0])}else{var a=n.name;y[a]=n,o=a}return!r&&o&&(b=o),o||!r&&b},x=function(t,n){if(M(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new D(e)},k=w;k.l=S,k.i=M,k.w=function(t,n){return x(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var D=function(){function g(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[$]=!0}var m=g.prototype;return m.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(k.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(v);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(n)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return k},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(t,n){var e=x(t);return this.startOf(n)<=e&&e<=this.endOf(n)},m.isAfter=function(t,n){return x(t)<this.startOf(n)},m.isBefore=function(t,n){return this.endOf(n)<x(t)},m.$g=function(t,n,e){return k.u(t)?this[n]:this.set(e,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,n){var e=this,r=!!k.u(n)||n,d=k.p(t),h=function(t,n){var o=k.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?o:o.endOf(a)},v=function(t,n){return k.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},p=this.$W,g=this.$M,m=this.$D,w="set"+(this.$u?"UTC":"");switch(d){case l:return r?h(1,0):h(31,11);case s:return r?h(1,g):h(0,g+1);case c:var b=this.$locale().weekStart||0,y=(p<b?p+7:p)-b;return h(r?m-y:m+(6-y),g);case a:case f:return v(w+"Hours",0);case u:return v(w+"Minutes",1);case i:return v(w+"Seconds",2);case o:return v(w+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,n){var e,c=k.p(t),d="set"+(this.$u?"UTC":""),h=(e={},e[a]=d+"Date",e[f]=d+"Date",e[s]=d+"Month",e[l]=d+"FullYear",e[u]=d+"Hours",e[i]=d+"Minutes",e[o]=d+"Seconds",e[r]=d+"Milliseconds",e)[c],v=c===a?this.$D+(n-this.$W):n;if(c===s||c===l){var p=this.clone().set(f,1);p.$d[h](v),p.init(),this.$d=p.set(f,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](v);return this.init(),this},m.set=function(t,n){return this.clone().$set(t,n)},m.get=function(t){return this[k.p(t)]()},m.add=function(r,d){var f,h=this;r=Number(r);var v=k.p(d),p=function(t){var n=x(h);return k.w(n.date(n.date()+Math.round(t*r)),h)};if(v===s)return this.set(s,this.$M+r);if(v===l)return this.set(l,this.$y+r);if(v===a)return p(1);if(v===c)return p(7);var g=(f={},f[i]=n,f[u]=e,f[o]=t,f)[v]||1,m=this.$d.getTime()+r*g;return k.w(m,this)},m.subtract=function(t,n){return this.add(-1*t,n)},m.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",o=k.z(this),i=this.$H,u=this.$m,a=this.$M,c=e.weekdays,s=e.months,d=e.meridiem,l=function(t,e,o,i){return t&&(t[e]||t(n,r))||o[e].slice(0,i)},f=function(t){return k.s(i%12||12,t,"0")},v=d||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(n.$y).slice(-2);case"YYYY":return k.s(n.$y,4,"0");case"M":return a+1;case"MM":return k.s(a+1,2,"0");case"MMM":return l(e.monthsShort,a,s,3);case"MMMM":return l(s,a);case"D":return n.$D;case"DD":return k.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return l(e.weekdaysMin,n.$W,c,2);case"ddd":return l(e.weekdaysShort,n.$W,c,3);case"dddd":return c[n.$W];case"H":return String(i);case"HH":return k.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return v(i,u,!0);case"A":return v(i,u,!1);case"m":return String(u);case"mm":return k.s(u,2,"0");case"s":return String(n.$s);case"ss":return k.s(n.$s,2,"0");case"SSS":return k.s(n.$ms,3,"0");case"Z":return o}return null}(t)||o.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,f,h){var v,p=this,g=k.p(f),m=x(r),w=(m.utcOffset()-this.utcOffset())*n,b=this-m,y=function(){return k.m(p,m)};switch(g){case l:v=y()/12;break;case s:v=y();break;case d:v=y()/3;break;case c:v=(b-w)/6048e5;break;case a:v=(b-w)/864e5;break;case u:v=b/e;break;case i:v=b/n;break;case o:v=b/t;break;default:v=b}return h?v:k.a(v)},m.daysInMonth=function(){return this.endOf(s).$D},m.$locale=function(){return y[this.$L]},m.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=S(t,n,!0);return r&&(e.$L=r),e},m.clone=function(){return k.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},g}(),_=D.prototype;return x.prototype=_,[["$ms",r],["$s",o],["$m",i],["$H",u],["$W",a],["$M",s],["$y",l],["$D",f]].forEach((function(t){_[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),x.extend=function(t,n){return t.$i||(t(n,D,x),t.$i=!0),x},x.locale=S,x.isDayjs=M,x.unix=function(t){return x(1e3*t)},x.en=y[b],x.Ls=y,x.p={},x}());function N(t){if(void 0===t&&(t=""),!t)return"时间无效";var n=+new Date,e=+new Date(t)-n;if(e>=0){var r=Math.floor(e/1e3/3600/24),o=Math.floor(e/1e3/60/60%24),i=Math.floor(e/1e3/60%60),u=Math.floor(e/1e3%60),a=r?"".concat(r,"天"):"",c=o?"".concat(o,"时"):"",s=i?"".concat(i,"分"):"",d=u?"".concat(u,"秒"):"";return"".concat(a).concat(c).concat(s).concat(d)}return"时间已到"}function H(t,n){if(void 0===t&&(t=""),void 0===n&&(n="YYYY-MM-DD"),!t)return"时间无效";var e=+new Date,r=+new Date(t),o=e-r,i=o>=0?"前":"后",u=Math.abs(o),a=30.4375,c=36e5,s=24*c,d=u/6e4,l=u/c,f=u/s,h=u/26298e5;return u/315576e5>=1||h>=12?L(r).format(n):h>=1&&h<12?"".concat(parseInt(h.toString()),"个月").concat(i):f>=1&&f<a?"".concat(parseInt(f.toString()),"天").concat(i):l>=1&&l<24?"".concat(parseInt(l.toString()),"小时").concat(i):d>=1&&d<60?"".concat(parseInt(d.toString()),"分钟").concat(i):o>=0?"刚刚":"准备"}function P(t,n){void 0===t&&(t=6),void 0===n&&(n="YYYY-MM");for(var e=L(),r=[e.format(n)],o=1;o<t;o++){var i=e.subtract(o,"month");r.unshift(i.format(n))}return r}function B(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,a)}c((r=r.apply(t,n||[])).next())}))}function R(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(u=0)),u;)try{if(e=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=n.call(t,u)}catch(t){a=[6,t],r=0}finally{e=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function U(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function W(t,n,e){if(e||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))}function z(t,n){return B(this,void 0,void 0,(function(){return R(this,(function(e){switch(e.label){case 0:return[4,t.then((function(t){return[null,t]})).catch((function(t){return[n?Object.assign({},t,n):t,void 0]}))];case 1:return[2,e.sent()]}}))}))}function J(t,n){void 0===n&&(n=50);var e,r=null;return function(){for(var o=this,i=[],u=0;u<arguments.length;u++)i[u]=arguments[u];return r&&clearTimeout(r),r=setTimeout((function(){e=t.apply(o,i),r=null}),n),e}}function q(t,n){void 0===n&&(n=50);var e,r=null,o=!1,i=0;return function(){for(var u=this,a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];if(o){r&&(clearTimeout(r),r=null);var s=Date.now(),d=n-(s-i);d<=0?(e=t.apply(this,a),i=s):r=setTimeout((function(){e=t.apply(u,a),i=Date.now(),r=null}),d)}else e=t.apply(this,a),i=Date.now(),o=!0;return e}}function Z(){return B(this,arguments,void 0,(function(t){return void 0===t&&(t=1e3),R(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){return setTimeout((function(){return n(!0)}),t)}))];case 1:return[2,n.sent()]}}))}))}function F(t,n,e){if(void 0===t&&(t="+"),void 0===n&&(n=0),void 0===e&&(e=0),n=parseFloat(n.toString()),e=parseFloat(e.toString()),isNaN(n)||isNaN(e))return NaN;var r=(n.toString().split(".")[1]||"").length,o=(e.toString().split(".")[1]||"").length,i=Math.max(r,o,0),u=Math.pow(10,i),a=Math.round(n*u),c=Math.round(e*u);return"+"===t?(a+c)/u:"-"===t?(a-c)/u:"*"===t?a*c/(u*u):"/"===t?a/c:(a+c)/u}function G(t){void 0===t&&(t="+");for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];for(var r={"*":1,"+":0,"/":1,"-":0}[t]||0,o=0;o<n.length;o++)r=0!==o||"-"!==t&&"/"!==t?F(t,r,n[o]):n[o];return r}function V(t,n){return void 0===t&&(t=0),void 0===n&&(n=0),t.toString().padStart(n,"0")}function X(t){var n=t.dec,e=void 0===n?2:n,r=t.num,o=void 0===r?0:r,i=t.type,u=void 0===i?"round":i,a=Math.pow(10,e);return(Math[u]||Math.round)(o*a)/a}function K(t){if(void 0===t&&(t=0),0===t)return"0 B";var n=Math.floor(Math.log(t)/Math.log(1024));return(t/Math.pow(1024,n)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}function Q(t,n){return void 0===t&&(t=0),void 0===n&&(n=10),Math.floor(Math.random()*(n-t+1)+t)}function tt(t,n,e){void 0===t&&(t=0),void 0===n&&(n=10),void 0===e&&(e=1);for(var r=[];;){for(var o=!1,i=Q(t,n),u=0;u<r.length;u++)if(i===r[u]){o=!0;break}if(o||r.push(i),r.length===e)return r}}function nt(t){var n=t.dec,e=void 0===n?2:n,r=t.num,o=void 0===r?0:r,i=t.per;return void 0!==i&&i?"".concat(Math.round(o*Math.pow(10,e)*100)/Math.pow(10,e),"%"):Math.round(o*Math.pow(10,e))/Math.pow(10,e)}function et(t){return void 0===t&&(t=0),t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function rt(t,n){return void 0===t&&(t={}),void 0===n&&(n=""),n in t}function ot(t,n){return void 0===t&&(t={}),void 0===n&&(n=[]),Object.keys(t).reduce((function(e,r){return n.includes(r)&&(e[r]=t[r]),e}),{})}function it(t,n){void 0===t&&(t={}),void 0===n&&(n=!1);var e={};for(var r in t)if({}.hasOwnProperty.call(t,r)){var o=t[r];(n?!o:""===o)&&(e[r]=t[r])}return e}"function"==typeof SuppressedError&&SuppressedError;var ut={address:{msg:"地址只能由2~200位中文、英文、数字或空格组成",regexp:/^[\u4e00-\u9fa5A-Za-z0-9 ]{2,200}$/},count:{msg:"数量只能由数字组成",regexp:/^\d{1,}$/},date:{msg:"日期只能由YYYY-MM-DD HH:mm:ss形式组成",regexp:/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/},email:{msg:"邮箱只能由xxx@yyy.zzz形式组成",regexp:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/},idcard:{msg:"身份证只能由13位数字或12位数字和X组成",regexp:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/},image:{msg:"图像只能是JPG、PNG、GIF、SVG或WEBP类型",regexp:/\.(jpe?g|png|gif|svg|webp)$/},name:{msg:"名称只能由2~50位中文、英文、数字、下划线或中划线组成",regexp:/^[\u4e00-\u9fa5\w-]{2,50}$/},number:{msg:"计数只能由数字或小数点组成",regexp:/^[+-]?(0|([1-9]\d*))(\.\d+)?$/},password:{msg:"密码只能由8~20位英文、数字或符号至少两种组成",regexp:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,20}$/},phone:{msg:"手机只能由11位数字组成且符合通讯运营商规范",regexp:/^1\d{10}$/}},at="^$.*+-?=!:|\\/()[]{}".split("");function ct(t,n){void 0===t&&(t="phone"),void 0===n&&(n="");var e=ut[t],r=e.regexp,o=e.msg,i=r.test(n);return{flag:i,msg:i?"":o}}function st(t,n,e){void 0===n&&(n=""),void 0===e&&(e="");var r=t.test(n);return{flag:r,msg:r?"":e}}function dt(t,n){var e;void 0===t&&(t="(*)"),void 0===n&&(n="");var r=t.split("*").map((function(t){return at.includes(t)?"\\"+t:t})),o=new RegExp(r[0]+"(.+?)"+r[1],"g");return(null!==(e=n.match(o))&&void 0!==e?e:[]).map((function(t){return t.replace(o,"$1")}))}function lt(t){return void 0===t&&(t=""),ut.phone.regexp.test(t)?t.toString().replace(/(\d{3})\d*(\d{4})/,"$1****$2"):t}function ft(t,n){return void 0===t&&(t=""),void 0===n&&(n="-"),ut.phone.regexp.test(t)&&["-"," "].includes(n)?t.toString().replace(/(\d{3})(\d{4})(\d{4})/,"$1".concat(n,"$2").concat(n,"$3")):t}function ht(){return"#"+Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")}function vt(t){return void 0===t&&(t=5),t=Math.min(10,Math.max(1,t)),Math.random().toString(36).slice(2,t+2)}function pt(t){return void 0===t&&(t=""),t.replace(/<[^>]*>/g,"")}function gt(t){return void 0===t&&(t=""),t.split("").reduceRight((function(t,n){return t+n}),"")}function mt(t,n){return void 0===t&&(t=0),void 0===n&&(n=5),t=Math.min(n,Math.max(0,t)),"★".repeat(t)+"☆".repeat(n-t)}function wt(t){var n,e,r,o;void 0===t&&(t="");var i=!t&&a()?navigator.userAgent.toLowerCase():t.toLowerCase(),u=function(t){return t.test(i)},c=function(t){var n;return t?(null!==(n=i.match(t))&&void 0!==n?n:"").toString().replace(/[^0-9|_.]/g,"").replace(/_/g,"."):"unknow"},s={windows:/windows|win32|win64|wow32|wow64/g,macos:/macintosh|macintel/g,linux:/x11|ubuntu/g,android:/android|adr/g,ios:/ios|iphone|ipad|ipod/g},d=null!==(n=Object.keys(s).find((function(t){return u(s[t])})))&&void 0!==n?n:"unknow",l="unknow"===d?"unknow version":"windows"===d?function(){var t,n,e=(null!==(t=i.match(/(windows nt [\d._]+)|(windows [\w._]+)/g))&&void 0!==t?t:"").toString().replace(/windows( nt)? /g,""),r={2e3:/^(5\.0|2000)/g,xp:/^(5\.1|xp)/g,2003:/^(5\.2|2003)/g,vista:/^(6\.0|vista)/g,7:/^(6\.1|7)/g,8:/^(6\.2|8)/g,8.1:/^(6\.3|8\.1)/g,10:/^(10\.0|10)/g};return null!==(n=Object.keys(r).find((function(t){return r[t].test(e)})))&&void 0!==n?n:"unknow"}():c({macos:/mac os x [\d._]+/g,linux:/ubuntu\/[\d._]+/g,android:/android [\d._]+/g,ios:/os [\d._]+/g}[d])||"unknow version",f=u(/mobile/g)?"mobile":"desktop",h={webkit:[/applewebkit/g,/applewebkit\/[\d._]+/g],gecko:[/gecko\//g,/rv:[\d._]+/g],presto:[/presto/g,/presto\/[\d._]+/g],trident:[/compatible|msie|trident/g,/trident\/[\d._]+/g]},v=null!==(e=Object.keys(h).find((function(t){return u(h[t][0])})))&&void 0!==e?e:"unknow",p="unknow"===v?"unknow version":c(h[v][1])||"unknow version",g={safari:[/.*safari.*version.*|.*version.*safari.*/g,/version\/[\d._]+/g],edge:[/edge?/g,/edge?\/[\d._]+/g],firefox:[/firefox/g,/firefox\/[\d._]+/g],opera:[/op(era|r)/g,/(version|opr)\/[\d._]+/g],iexplore:[/compatible|msie|trident/g,/(msie |rv:)[\d._]+/g],chrome:[/chrome/g,/chrome\/[\d._]+/g]},m=null!==(r=Object.keys(g).find((function(t){return u(g[t][0])})))&&void 0!==r?r:"unknow",w="unknow"===m?"unknow version":c(g[m][1])||"unknow version",b={uc:[/ucweb|uc?browser|uclite/g,/(ucweb|uc?browser\/|uclite\/)[\d._]+/g],qq:[/qqbrowser/g,/qqbrowser\/[\d._]+/g],sougou:[/metasr|sogoumobilebrowser/g,/(metasr |sogoumobilebrowser\/)[\d._]+/],maxthon:[/maxthon/g,/maxthon(\/| )[\d._]+/g],2345:[/2345explorer/g,/2345explorer\/[\d._]+/g],360:[/360se/g],liebao:[/lbbrowser/g],xiaomi:[/xiaomi|miuibrowser/g,/miuibrowser\/[\d._]+/g],huawei:[/huaweibrowser/g,/huaweibrowser\/[\d._]+/g],oppo:[/heytapbrowser/g,/heytapbrowser\/[\d._]+/g],vivo:[/vivobrowser/g,/vivobrowser\/[\d._]+/g],wechat:[/micromessenger/g,/micromessenger\/[\d._]+/g],baidu:[/baiduboxapp/g,/baiduboxapp\/[\d._]+/g],toutiao:[/newsarticle|ttwebview/g,/(newsarticle|ttwebview)\/[\d._]+/g]},y=null!==(o=Object.keys(b).find((function(t){return u(b[t][0])})))&&void 0!==o?o:"none",$="none"===y?"none":b[y][1]&&c(b[y][1])||"unknow version";return Object.assign({engine:v,engineVs:p,platform:f,supporter:m,supporterVs:w,system:d,systemVs:l},"none"===y?{}:{shell:y,shellVs:$})}function bt(t){void 0===t&&(t="");var n=!t&&a()?location.search:t;return n?n.replace(/(^\?)|(&$)/g,"").split("&").reduce((function(t,n){var e=U(n.split("="),2),r=e[0],o=e[1];return t[r]=decodeURIComponent(o),t}),{}):{}}function yt(t,n){return void 0===t&&(t={}),void 0===n&&(n=!1),Object.entries(t).reduce((function(t,e){return n&&[void 0,null,"",NaN,!1].includes(e[1])?t:"".concat(t).concat(e[0],"=").concat(void 0===e[1]||null===e[1]?"":encodeURIComponent(e[1]),"&")}),Y(t)?"":"?").replace(/&$/,"")}function $t(){var t=document.cookie;return t?t.split("; ").reduce((function(t,n){var e=n.split("=");return t[e[0]]=e[1],t}),{}):{}}function Mt(t){void 0===t&&(t=""),St(t,"",-1)}function St(t,n,e){void 0===t&&(t=""),void 0===n&&(n=""),void 0===e&&(e=1);var r=new Date;r.setDate(r.getDate()+e),document.cookie="".concat(t,"=").concat(n,";expires=").concat(r.toString())}function xt(t){void 0===t&&(t=750);var n=document.documentElement,e=n.clientWidth,r=n.clientHeight,o=e>r?r:e;n.style.fontSize=o>=600?"80px":"".concat(o/t*100,"px")}function kt(t,n){var e,r,o;void 0===t&&(t=""),void 0===n&&(n="unknow");for(var i=t.split(","),u=null!==(o=null===(r=null===(e=i[0])||void 0===e?void 0:e.match(/:(.*?);/))||void 0===r?void 0:r[1])&&void 0!==o?o:"jpg",a=u.split("/")[1],c=atob(i[1]),s=c.length,d=new Uint8Array(s);s--;)d[s]=c.charCodeAt(s);return new File([d],"".concat(n,".").concat(a),{type:u})}function Dt(){return B(this,arguments,void 0,(function(t,n){var e,r,o,i;return void 0===t&&(t=""),void 0===n&&(n=document.body),R(this,(function(u){switch(u.label){case 0:return e=document.createRange(),(r=getSelection())?(e.selectNodeContents(n),r.removeAllRanges(),r.addRange(e),[4,z(navigator.clipboard.writeText(t))]):[3,2];case 1:return o=U.apply(void 0,[u.sent(),1]),i=o[0],r.removeAllRanges(),[2,!i];case 2:return[2,!1]}}))}))}function _t(t,n){void 0===t&&(t=""),void 0===n&&(n="unknow");var e=new Event("MouseEvents"),r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("download",n),r.click(),r.dispatchEvent(e)}function Ot(t,n){void 0===t&&(t=""),void 0===n&&(n="unknow");var e=new Event("MouseEvents"),r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,".concat(encodeURIComponent(t))),r.setAttribute("download",n),r.click(),r.dispatchEvent(e)}function Et(t){void 0===t&&(t="");var n=document.createElement("div");return n.innerText=t,n.innerHTML}function At(t,n){var e;void 0===t&&(t=""),void 0===n&&(n="");var r=null===(e=t.match(n))||void 0===e?void 0:e[0];return r?t.split(r).join("<span>".concat(r,"</span>")):t}function Tt(){return B(this,arguments,void 0,(function(t,n){var e,r,o,i;return void 0===t&&(t=""),void 0===n&&(n="jpg"),R(this,(function(u){switch(u.label){case 0:return e=new Promise((function(e){var r=new Image;"jpg"===n&&(n="jpeg"),r.setAttribute("src",t),r.setAttribute("crossOrigin",""),r.addEventListener("load",(function(){var t,o=document.createElement("canvas");if(o){o.setAttribute("width","".concat(r.width,"px")),o.setAttribute("height","".concat(r.height,"px")),null===(t=o.getContext("2d"))||void 0===t||t.drawImage(r,0,0);var i=o.toDataURL('"image/'.concat(n,'"'));e(i)}else e("")})),r.addEventListener("error",(function(){return e("")}))})),[4,z(e)];case 1:return r=U.apply(void 0,[u.sent(),2]),o=r[0],i=r[1],[2,!o&&i?i:""]}}))}))}function jt(t){return B(this,arguments,void 0,(function(t){var n,e,r,o=t.name,i=void 0===o?"jsonp":o,u=t.onCall,a=t.url,c=void 0===a?"":a;return R(this,(function(t){switch(t.label){case 0:return[4,z(new Promise((function(t){var n=document.createElement("script");n.setAttribute("src",c),n.setAttribute("async","true"),n.addEventListener("load",(function(){return t(!0)})),n.addEventListener("error",(function(){return t(!1)})),window[i]=function(t){return null==u?void 0:u(t)},document.body.appendChild(n)})))];case 1:return n=U.apply(void 0,[t.sent(),2]),e=n[0],r=n[1],[2,!e&&!!r]}}))}))}function Yt(){return B(this,arguments,void 0,(function(t,n){var e,r,o;return void 0===t&&(t=""),void 0===n&&(n="body"),R(this,(function(i){switch(i.label){case 0:return[4,z(new Promise((function(e){W([],U(document.getElementsByTagName("script")),!1).some((function(n){return n.src===t||n.src.includes(t)}))&&e(!1);var r=document.createElement("script");r.setAttribute("src",t),r.addEventListener("load",(function(){return e(!0)})),r.addEventListener("error",(function(){return e(!1)})),"head"===n&&document.head.appendChild(r),"body"===n&&document.body.appendChild(r)})))];case 1:return e=U.apply(void 0,[i.sent(),2]),r=e[0],o=e[1],[2,!r&&!!o]}}))}))}function Ct(t){void 0===t&&(t=[]),W([],U(new Set(t)),!1).sort().forEach((function(t){return document.addEventListener(t,(function(t){return t.preventDefault()}))}))}function It(n){return B(this,arguments,void 0,(function(n){var e,r,o,i,u,a=n.data,c=void 0===a?{}:a,s=n.headers,d=void 0===s?{}:s,l=n.method,f=void 0===l?"get":l,h=n.progress,v=n.timeout,p=void 0===v?1e4:v,g=n.url,m=void 0===g?"":g,w=n.useCookie,b=void 0===w||w,y=n.useJson,$=void 0!==y&&y;return R(this,(function(n){switch(n.label){case 0:return e="get"===f?{params:c}:$?{data:c}:{data:yt(c,!0).replace(/^\?/g,"")},r=Object.assign({headers:d,method:f,onUploadProgress:h,timeout:p,url:m,withCredentials:b},e),[4,z(t(r))];case 1:return o=U.apply(void 0,[n.sent(),2]),i=o[0],u=o[1],[2,[i,!i&&200===u.status&&(null==u?void 0:u.data)?u.data:null]]}}))}))}function Lt(t){var n=t.data,e=void 0===n?{}:n,r=t.error,o=t.success,i=t.type,u=void 0===i?"get":i,a=t.url,c=void 0===a?"":a,s=new XMLHttpRequest,d=u.toUpperCase(),l=yt(e);"GET"===d?(s.open("GET",e?"".concat(c).concat(l):"".concat(c,"?t=").concat(+new Date),!0),s.send()):"POST"===d&&(s.open("POST",c,!0),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.send(l)),s.onreadystatechange=function(){4===s.readyState&&(200===s.status?null==o||o(s.responseText):null==r||r(s.status))}}function Nt(){return B(this,void 0,void 0,(function(){var t,n,e,r,o,i;return R(this,(function(u){switch(u.label){case 0:return[4,It({url:"https://baidu.com"})];case 1:return t=U.apply(void 0,[u.sent(),2]),n=t[0],e=t[1],[2,{code:null!==(r=null==e?void 0:e.code)&&void 0!==r?r:0,data:null!==(o=null==e?void 0:e.count)&&void 0!==o?o:0,flag:!n&&200===(null==e?void 0:e.code),msg:null!==(i=null==e?void 0:e.message)&&void 0!==i?i:""}]}}))}))}function Ht(){localStorage.clear()}function Pt(){sessionStorage.clear()}function Bt(t){void 0===t&&(t="");var n=localStorage.getItem(t);return n?JSON.parse(n):null}function Rt(t){void 0===t&&(t="");var n=sessionStorage.getItem(t);return n?JSON.parse(n):null}function Ut(t){void 0===t&&(t=""),localStorage.removeItem(t)}function Wt(t){void 0===t&&(t=""),sessionStorage.removeItem(t)}function zt(t,n){void 0===t&&(t=""),localStorage.setItem(t,JSON.stringify(n))}function Jt(t,n){void 0===t&&(t=""),sessionStorage.setItem(t,JSON.stringify(n))}var qt={download:"",downloadAndroid:"",downloadIos:"",downloadYyb:"",host:"",params:{},path:"",protocol:""},Zt={debug:!1,timeout:3e3},Ft=function(){function t(t,n){void 0===t&&(t=qt),void 0===n&&(n={});var e=wt(),r=e.system,o=e.shell,i=Object.assign(qt,t),u=i.download,a=i.downloadAndroid,c=i.downloadIos,s=i.downloadYyb,d=i.host,l=i.params,f=i.path,h=i.protocol;this.option=Object.assign(Zt,n),this.scheme="".concat(h,"://").concat(d).concat(f).concat(yt(l)),this.link=("wechat"===o&&s?s:"ios"===r?c:a)||u}return t.prototype.fallback=function(){var t=this,n=this.option,e=n.fail,r=n.timeout,o=void 0===r?3e3:r,i=setTimeout((function(){null==e||e(),location.href=t.link}),o);setTimeout((function(){window.addEventListener("blur",(function(){return clearTimeout(i)}))}),o-500)},t.prototype.onCall=function(){var t=wt(),n=t.platform,e=t.shell,r=this.option,o=r.debug,i=r.start,u=r.startWechat;o&&console.log("scheme",this.scheme),o&&console.log("link",this.link),"mobile"!==n||("wechat"===e&&u?u():(null==i||i(),location.href=this.scheme,this.fallback()))},t}();function Gt(t){if(void 0===t&&(t=[]),!j(t)){var n=location.origin+location.pathname,e=location.hash,r=bt();t.forEach((function(t){return Reflect.deleteProperty(r,t)}));var o=yt(r);history.pushState({},document.title,n+o+e)}}function Vt(t){if(void 0===t&&(t={}),!Y(t)){var n=location.origin+location.pathname,e=location.hash,r=bt(),o=yt(Object.assign({},r,t));history.pushState({},document.title,n+o+e)}}export{It as Aios,Lt as Ajax,z as AsyncTo,xt as AutoResponse,kt as Base64ToFile,F as CalcNum,G as CalcNumPlus,Ft as CallApp,rt as CheckObjValidKey,ct as CheckText,st as CheckTextPlus,n as ChunkArr,Ht as ClearLStorage,Pt as ClearSStorage,Dt as CopyPaste,J as Debounce,lt as DesePhone,_t as DownloadFile,Ot as DownloadText,u as EnvType,V as FillNum,ot as FilterObjKey,Et as FilterXss,X as FixedNum,K as FormatByte,N as FormatCountdown,ft as FormatPhone,H as FormatTimeDiff,$t as GetCookie,Bt as GetLStorage,Rt as GetSStorage,e as GroupArr,At as HighlightText,Tt as ImgToBase64,E as IsArguments,g as IsArray,_ as IsAsyncFunction,v as IsBoolean,$ as IsClass,w as IsDate,D as IsElement,T as IsEmpty,j as IsEmptyArray,Y as IsEmptyObject,A as IsError,y as IsFunction,S as IsMap,c as IsNode,l as IsNull,h as IsNumber,m as IsObject,b as IsRegExp,M as IsSet,f as IsString,p as IsSymbol,O as IsSyncFunction,d as IsUndefined,k as IsWeakMap,x as IsWeakSet,a as IsWeb,jt as Jsonp,Yt as LoadScript,ut as MATCH,dt as MatchBracketText,bt as ParseUrlSearch,Ct as ProhibitEvent,ht as RandomColor,vt as RandomId,Q as RandomNum,tt as RandomNumPlus,P as RecentMonths,Mt as RemoveCookie,Ut as RemoveLStorage,it as RemoveObjEmptyKey,Wt as RemoveSStorage,pt as RemoveTag,Gt as RemoveUrlSearch,gt as ReverseText,nt as RoundNum,St as SetCookie,zt as SetLStorage,Jt as SetSStorage,Vt as SetUrlSearch,mt as StartScore,r as StatArrMemCount,o as StatArrMemKeyword,i as StatArrMemPosition,yt as StringifyUrlSearch,et as ThousandNum,q as Throttle,s as TypeOf,Z as WaitFor,wt as WebType,Nt as XXX};
