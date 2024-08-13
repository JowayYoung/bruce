"use strict";function t(){return"undefined"==typeof window?"node":"web"}function e(){return"web"===t()}function n(t){return Object.prototype.toString.call(t).replace(/\[object (\w+)\]/,"$1").toLowerCase()}function r(t){return"object"===n(t)}function o(t){return"function"===n(t)}function i(t){return r(t)&&!Object.keys(t).length}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function u(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var s={exports:{}},a=u(s.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",o="second",i="minute",u="hour",s="day",a="week",c="month",d="quarter",f="year",l="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},w={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,c),i=n-o<0,u=e.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-u:u-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:a,d:s,D:l,h:u,m:i,s:o,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},x="en",y={};y[x]=v;var b="$isDayjsObject",$=function(t){return t instanceof D||!(!t||!t[b])},M=function t(e,n,r){var o;if(!e)return x;if("string"==typeof e){var i=e.toLowerCase();y[i]&&(o=i),n&&(y[i]=n,o=i);var u=e.split("-");if(!o&&u.length>1)return t(u[0])}else{var s=e.name;y[s]=e,o=s}return!r&&o&&(x=o),o||!r&&x},S=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},k=w;k.l=M,k.i=$,k.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function v(t){this.$L=M(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var m=v.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(k.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return k},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return S(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<S(t)},m.$g=function(t,e,n){return k.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!k.u(e)||e,d=k.p(t),p=function(t,e){var o=k.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?o:o.endOf(s)},h=function(t,e){return k.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,v=this.$M,m=this.$D,w="set"+(this.$u?"UTC":"");switch(d){case f:return r?p(1,0):p(31,11);case c:return r?p(1,v):p(0,v+1);case a:var x=this.$locale().weekStart||0,y=(g<x?g+7:g)-x;return p(r?m-y:m+(6-y),v);case s:case l:return h(w+"Hours",0);case u:return h(w+"Minutes",1);case i:return h(w+"Seconds",2);case o:return h(w+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,a=k.p(t),d="set"+(this.$u?"UTC":""),p=(n={},n[s]=d+"Date",n[l]=d+"Date",n[c]=d+"Month",n[f]=d+"FullYear",n[u]=d+"Hours",n[i]=d+"Minutes",n[o]=d+"Seconds",n[r]=d+"Milliseconds",n)[a],h=a===s?this.$D+(e-this.$W):e;if(a===c||a===f){var g=this.clone().set(l,1);g.$d[p](h),g.init(),this.$d=g.set(l,Math.min(this.$D,g.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[k.p(t)]()},m.add=function(r,d){var l,p=this;r=Number(r);var h=k.p(d),g=function(t){var e=S(p);return k.w(e.date(e.date()+Math.round(t*r)),p)};if(h===c)return this.set(c,this.$M+r);if(h===f)return this.set(f,this.$y+r);if(h===s)return g(1);if(h===a)return g(7);var v=(l={},l[i]=e,l[u]=n,l[o]=t,l)[h]||1,m=this.$d.getTime()+r*v;return k.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=t||"YYYY-MM-DDTHH:mm:ssZ",o=k.z(this),i=this.$H,u=this.$m,s=this.$M,a=n.weekdays,c=n.months,d=n.meridiem,f=function(t,n,o,i){return t&&(t[n]||t(e,r))||o[n].slice(0,i)},l=function(t){return k.s(i%12||12,t,"0")},h=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return k.s(e.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return f(n.monthsShort,s,c,3);case"MMMM":return f(c,s);case"D":return e.$D;case"DD":return k.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,a,2);case"ddd":return f(n.weekdaysShort,e.$W,a,3);case"dddd":return a[e.$W];case"H":return String(i);case"HH":return k.s(i,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return h(i,u,!0);case"A":return h(i,u,!1);case"m":return String(u);case"mm":return k.s(u,2,"0");case"s":return String(e.$s);case"ss":return k.s(e.$s,2,"0");case"SSS":return k.s(e.$ms,3,"0");case"Z":return o}return null}(t)||o.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,l,p){var h,g=this,v=k.p(l),m=S(r),w=(m.utcOffset()-this.utcOffset())*e,x=this-m,y=function(){return k.m(g,m)};switch(v){case f:h=y()/12;break;case c:h=y();break;case d:h=y()/3;break;case a:h=(x-w)/6048e5;break;case s:h=(x-w)/864e5;break;case u:h=x/n;break;case i:h=x/e;break;case o:h=x/t;break;default:h=x}return p?h:k.a(h)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return y[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return k.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),_=D.prototype;return S.prototype=_,[["$ms",r],["$s",o],["$m",i],["$H",u],["$W",s],["$M",c],["$y",f],["$D",l]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,D,S),t.$i=!0),S},S.locale=M,S.isDayjs=$,S.unix=function(t){return S(1e3*t)},S.en=y[x],S.Ls=y,S.p={},S}());function c(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,s)}a((r=r.apply(t,e||[])).next())}))}function d(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(u=0)),u;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,r=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){u=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){u.label=s[1];break}if(6===s[0]&&u.label<o[1]){u.label=o[1],o=s;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(s);break}o[2]&&u.ops.pop(),u.trys.pop();continue}s=e.call(t,u)}catch(t){s=[6,t],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function f(t,e,n){if(void 0===t&&(t="+"),void 0===e&&(e=0),void 0===n&&(n=0),e=parseFloat(e.toString()),n=parseFloat(n.toString()),isNaN(e)||isNaN(n))return NaN;var r=(e.toString().split(".")[1]||"").length,o=(n.toString().split(".")[1]||"").length,i=Math.max(r,o,0),u=Math.pow(10,i),s=Math.round(e*u),a=Math.round(n*u);return"+"===t?(s+a)/u:"-"===t?(s-a)/u:"*"===t?s*a/(u*u):"/"===t?s/a:(s+a)/u}function l(t,e){return void 0===t&&(t=0),void 0===e&&(e=10),Math.floor(Math.random()*(e-t+1)+t)}"function"==typeof SuppressedError&&SuppressedError;var p={address:{msg:"地址只能由2~200位中文、英文、数字或空格组成",regexp:/^[\u4e00-\u9fa5A-Za-z0-9 ]{2,200}$/},count:{msg:"数量只能由数字组成",regexp:/^\d{1,}$/},date:{msg:"日期只能由YYYY-MM-DD HH:mm:ss形式组成",regexp:/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/},email:{msg:"邮箱只能由xxx@yyy.zzz形式组成",regexp:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/},idcard:{msg:"身份证只能由13位数字或12位数字和X组成",regexp:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/},image:{msg:"图像只能是JPG、PNG、GIF、SVG或WEBP类型",regexp:/\.(jpe?g|png|gif|svg|webp)$/},name:{msg:"名称只能由2~50位中文、英文、数字、下划线或中划线组成",regexp:/^[\u4e00-\u9fa5\w-]{2,50}$/},number:{msg:"计数只能由数字或小数点组成",regexp:/^[+-]?(0|([1-9]\d*))(\.\d+)?$/},password:{msg:"密码只能由8~20位英文、数字或符号至少两种组成",regexp:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,20}$/},phone:{msg:"手机只能由11位数字组成且符合通讯运营商规范",regexp:/^1\d{10}$/}},h="^$.*+-?=!:|\\/()[]{}".split("");exports.AsyncTo=function(t,e){return c(this,void 0,void 0,(function(){return d(this,(function(n){switch(n.label){case 0:return[4,t.then((function(t){return[null,t]})).catch((function(t){return[e?Object.assign({},t,e):t,void 0]}))];case 1:return[2,n.sent()]}}))}))},exports.CalcNum=f,exports.CalcNumPlus=function(t){void 0===t&&(t="+");for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var r={"*":1,"+":0,"/":1,"-":0}[t]||0,o=0;o<e.length;o++)r=0!==o||"-"!==t&&"/"!==t?f(t,r,e[o]):e[o];return r},exports.CheckObjValidKey=function(t,e){return void 0===t&&(t={}),void 0===e&&(e=""),e in t},exports.CheckText=function(t,e){void 0===t&&(t="phone"),void 0===e&&(e="");var n=p[t],r=n.regexp,o=n.msg,i=r.test(e);return{flag:i,msg:i?"":o}},exports.CheckTextPlus=function(t,e,n){void 0===e&&(e=""),void 0===n&&(n="");var r=t.test(e);return{flag:r,msg:r?"":n}},exports.ChunkArr=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=1),t.length?t.reduce((function(t,n){return t[t.length-1].length===e?t.push([n]):t[t.length-1].push(n),t}),[[]]):[]},exports.Debounce=function(t,e){void 0===e&&(e=50);var n,r=null;return function(){for(var o=this,i=[],u=0;u<arguments.length;u++)i[u]=arguments[u];return r&&clearTimeout(r),r=setTimeout((function(){n=t.apply(o,i),r=null}),e),n}},exports.DesePhone=function(t){return void 0===t&&(t=""),p.phone.regexp.test(t)?t.toString().replace(/(\d{3})\d*(\d{4})/,"$1****$2"):t},exports.EnvType=t,exports.FillNum=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=0),t.toString().padStart(e,"0")},exports.FilterObjKey=function(t,e){return void 0===t&&(t={}),void 0===e&&(e=[]),Object.keys(t).reduce((function(n,r){return e.includes(r)&&(n[r]=t[r]),n}),{})},exports.FixedNum=function(t){var e=t.dec,n=void 0===e?2:e,r=t.num,o=void 0===r?0:r,i=t.type,u=void 0===i?"round":i,s=Math.pow(10,n);return(Math[u]||Math.round)(o*s)/s},exports.FormatByte=function(t){if(void 0===t&&(t=0),0===t)return"0 B";var e=Math.floor(Math.log(t)/Math.log(1024));return(t/Math.pow(1024,e)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][e]},exports.FormatCountdown=function(t){if(void 0===t&&(t=""),!t)return"时间无效";var e=+new Date,n=+new Date(t)-e;if(n>=0){var r=Math.floor(n/1e3/3600/24),o=Math.floor(n/1e3/60/60%24),i=Math.floor(n/1e3/60%60),u=Math.floor(n/1e3%60),s=r?"".concat(r,"天"):"",a=o?"".concat(o,"时"):"",c=i?"".concat(i,"分"):"",d=u?"".concat(u,"秒"):"";return"".concat(s).concat(a).concat(c).concat(d)}return"时间已到"},exports.FormatPhone=function(t,e){return void 0===t&&(t=""),void 0===e&&(e="-"),p.phone.regexp.test(t)&&["-"," "].includes(e)?t.toString().replace(/(\d{3})(\d{4})(\d{4})/,"$1".concat(e,"$2").concat(e,"$3")):t},exports.FormatTimeDiff=function(t,e){if(void 0===t&&(t=""),void 0===e&&(e="YYYY-MM-DD"),!t)return"时间无效";var n=+new Date,r=+new Date(t),o=n-r,i=o>=0?"前":"后",u=Math.abs(o),s=30.4375,c=36e5,d=24*c,f=u/6e4,l=u/c,p=u/d,h=u/26298e5;return u/315576e5>=1||h>=12?a(r).format(e):h>=1&&h<12?"".concat(parseInt(h.toString()),"个月").concat(i):p>=1&&p<s?"".concat(parseInt(p.toString()),"天").concat(i):l>=1&&l<24?"".concat(parseInt(l.toString()),"小时").concat(i):f>=1&&f<60?"".concat(parseInt(f.toString()),"分钟").concat(i):o>=0?"刚刚":"准备"},exports.GroupArr=function(t,e){return void 0===t&&(t=[]),t.reduce((function(t,n){var r=n[e];return null!=r&&(!t[r]&&(t[r]=[]),t[r].push(n)),t}),{})},exports.IsArguments=function(t){return"arguments"===n(t)},exports.IsArray=function(t){return"array"===n(t)},exports.IsAsyncFunction=function(t){return"asyncfunction"===n(t)},exports.IsBoolean=function(t){return"boolean"===n(t)},exports.IsClass=function(t){return o(t)&&/^class\s+[\dA-Za-z]/.test(t.toString())},exports.IsDate=function(t){return"date"===n(t)},exports.IsElement=function(t){return/^html(.+?)element$/.test(n(t))},exports.IsEmpty=function(t){return!t},exports.IsEmptyArray=function(t){return Array.isArray(t)&&!t.length},exports.IsEmptyObject=i,exports.IsError=function(t){return t instanceof Error},exports.IsFunction=o,exports.IsMap=function(t){return"map"===n(t)},exports.IsNode=function(){return"node"===t()},exports.IsNull=function(t){return"null"===n(t)},exports.IsNumber=function(t){return"number"===n(t)},exports.IsObject=r,exports.IsRegExp=function(t){return"regexp"===n(t)},exports.IsSet=function(t){return"set"===n(t)},exports.IsString=function(t){return"string"===n(t)},exports.IsSymbol=function(t){return"symbol"===n(t)},exports.IsSyncFunction=function(t){return"function"===n(t)},exports.IsUndefined=function(t){return"undefined"===n(t)},exports.IsWeakMap=function(t){return"weakmap"===n(t)},exports.IsWeakSet=function(t){return"weakset"===n(t)},exports.IsWeb=e,exports.MATCH=p,exports.MatchBracketText=function(t,e){var n;void 0===t&&(t="(*)"),void 0===e&&(e="");var r=t.split("*").map((function(t){return h.includes(t)?"\\"+t:t})),o=new RegExp(r[0]+"(.+?)"+r[1],"g");return(null!==(n=e.match(o))&&void 0!==n?n:[]).map((function(t){return t.replace(o,"$1")}))},exports.ParseUrlSearch=function(t){void 0===t&&(t="");var n=!t&&e()?location.search:t;return n?n.replace(/(^\?)|(&$)/g,"").split("&").reduce((function(t,e){var n=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}(e.split("="),2),r=n[0],o=n[1];return t[r]=decodeURIComponent(o),t}),{}):{}},exports.RandomColor=function(){return"#"+Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")},exports.RandomId=function(t){return void 0===t&&(t=5),t=Math.min(10,Math.max(1,t)),Math.random().toString(36).slice(2,t+2)},exports.RandomNum=l,exports.RandomNumPlus=function(t,e,n){void 0===t&&(t=0),void 0===e&&(e=10),void 0===n&&(n=1);for(var r=[];;){for(var o=!1,i=l(t,e),u=0;u<r.length;u++)if(i===r[u]){o=!0;break}if(o||r.push(i),r.length===n)return r}},exports.RecentMonths=function(t,e){void 0===t&&(t=6),void 0===e&&(e="YYYY-MM");for(var n=a(),r=[n.format(e)],o=1;o<t;o++){var i=n.subtract(o,"month");r.unshift(i.format(e))}return r},exports.RemoveObjEmptyKey=function(t,e){void 0===t&&(t={}),void 0===e&&(e=!1);var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){var o=t[r];(e?!o:""===o)&&(n[r]=t[r])}return n},exports.RemoveTag=function(t){return void 0===t&&(t=""),t.replace(/<[^>]*>/g,"")},exports.ReverseText=function(t){return void 0===t&&(t=""),t.split("").reduceRight((function(t,e){return t+e}),"")},exports.RoundNum=function(t){var e=t.dec,n=void 0===e?2:e,r=t.num,o=void 0===r?0:r,i=t.per;return void 0!==i&&i?"".concat(Math.round(o*Math.pow(10,n)*100)/Math.pow(10,n),"%"):Math.round(o*Math.pow(10,n))/Math.pow(10,n)},exports.StartScore=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=5),t=Math.min(e,Math.max(0,t)),"★".repeat(t)+"☆".repeat(e-t)},exports.StatArrMemCount=function(t){return void 0===t&&(t=[]),t.reduce((function(t,e){return t[e]=(t[e]||0)+1,t}),{})},exports.StatArrMemKeyword=function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=[]),e.reduce((function(e,n){return t.some((function(t){return t.includes(n)}))&&e.push(n),e}),[])},exports.StatArrMemPosition=function(t,e){return void 0===t&&(t=[]),t.reduce((function(t,n,r){return n===e&&t.push(r),t}),[])},exports.StringifyUrlSearch=function(t,e){return void 0===t&&(t={}),void 0===e&&(e=!1),Object.entries(t).reduce((function(t,n){return e&&[void 0,null,"",NaN,!1].includes(n[1])?t:"".concat(t).concat(n[0],"=").concat(void 0===n[1]||null===n[1]?"":encodeURIComponent(n[1]),"&")}),i(t)?"":"?").replace(/&$/,"")},exports.ThousandNum=function(t){return void 0===t&&(t=0),t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},exports.Throttle=function(t,e){void 0===e&&(e=50);var n,r=null,o=!1,i=0;return function(){for(var u=this,s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];if(o){r&&(clearTimeout(r),r=null);var c=Date.now(),d=e-(c-i);d<=0?(n=t.apply(this,s),i=c):r=setTimeout((function(){n=t.apply(u,s),i=Date.now(),r=null}),d)}else n=t.apply(this,s),i=Date.now(),o=!0;return n}},exports.TypeOf=n,exports.WaitFor=function(){return c(this,arguments,void 0,(function(t){return void 0===t&&(t=1e3),d(this,(function(e){switch(e.label){case 0:return[4,new Promise((function(e){return setTimeout((function(){return e(!0)}),t)}))];case 1:return[2,e.sent()]}}))}))},exports.WebType=function(t){var n,r,o,i;void 0===t&&(t="");var u=!t&&e()?navigator.userAgent.toLowerCase():t.toLowerCase(),s=function(t){return t.test(u)},a=function(t){var e;return t?(null!==(e=u.match(t))&&void 0!==e?e:"").toString().replace(/[^0-9|_.]/g,"").replace(/_/g,"."):"unknow"},c={windows:/windows|win32|win64|wow32|wow64/g,macos:/macintosh|macintel/g,linux:/x11|ubuntu/g,android:/android|adr/g,ios:/ios|iphone|ipad|ipod/g},d=null!==(n=Object.keys(c).find((function(t){return s(c[t])})))&&void 0!==n?n:"unknow",f="unknow"===d?"unknow version":"windows"===d?function(){var t,e,n=(null!==(t=u.match(/(windows nt [\d._]+)|(windows [\w._]+)/g))&&void 0!==t?t:"").toString().replace(/windows( nt)? /g,""),r={2e3:/^(5\.0|2000)/g,xp:/^(5\.1|xp)/g,2003:/^(5\.2|2003)/g,vista:/^(6\.0|vista)/g,7:/^(6\.1|7)/g,8:/^(6\.2|8)/g,8.1:/^(6\.3|8\.1)/g,10:/^(10\.0|10)/g};return null!==(e=Object.keys(r).find((function(t){return r[t].test(n)})))&&void 0!==e?e:"unknow"}():a({macos:/mac os x [\d._]+/g,linux:/ubuntu\/[\d._]+/g,android:/android [\d._]+/g,ios:/os [\d._]+/g}[d])||"unknow version",l=s(/mobile/g)?"mobile":"desktop",p={webkit:[/applewebkit/g,/applewebkit\/[\d._]+/g],gecko:[/gecko\//g,/rv:[\d._]+/g],presto:[/presto/g,/presto\/[\d._]+/g],trident:[/compatible|msie|trident/g,/trident\/[\d._]+/g]},h=null!==(r=Object.keys(p).find((function(t){return s(p[t][0])})))&&void 0!==r?r:"unknow",g="unknow"===h?"unknow version":a(p[h][1])||"unknow version",v={safari:[/.*safari.*version.*|.*version.*safari.*/g,/version\/[\d._]+/g],edge:[/edge?/g,/edge?\/[\d._]+/g],firefox:[/firefox/g,/firefox\/[\d._]+/g],opera:[/op(era|r)/g,/(version|opr)\/[\d._]+/g],iexplore:[/compatible|msie|trident/g,/(msie |rv:)[\d._]+/g],chrome:[/chrome/g,/chrome\/[\d._]+/g]},m=null!==(o=Object.keys(v).find((function(t){return s(v[t][0])})))&&void 0!==o?o:"unknow",w="unknow"===m?"unknow version":a(v[m][1])||"unknow version",x={uc:[/ucweb|uc?browser|uclite/g,/(ucweb|uc?browser\/|uclite\/)[\d._]+/g],qq:[/qqbrowser/g,/qqbrowser\/[\d._]+/g],sougou:[/metasr|sogoumobilebrowser/g,/(metasr |sogoumobilebrowser\/)[\d._]+/],maxthon:[/maxthon/g,/maxthon(\/| )[\d._]+/g],2345:[/2345explorer/g,/2345explorer\/[\d._]+/g],360:[/360se/g],liebao:[/lbbrowser/g],xiaomi:[/xiaomi|miuibrowser/g,/miuibrowser\/[\d._]+/g],huawei:[/huaweibrowser/g,/huaweibrowser\/[\d._]+/g],oppo:[/heytapbrowser/g,/heytapbrowser\/[\d._]+/g],vivo:[/vivobrowser/g,/vivobrowser\/[\d._]+/g],wechat:[/micromessenger/g,/micromessenger\/[\d._]+/g],baidu:[/baiduboxapp/g,/baiduboxapp\/[\d._]+/g],toutiao:[/newsarticle|ttwebview/g,/(newsarticle|ttwebview)\/[\d._]+/g]},y=null!==(i=Object.keys(x).find((function(t){return s(x[t][0])})))&&void 0!==i?i:"none",b="none"===y?"none":x[y][1]&&a(x[y][1])||"unknow version";return Object.assign({engine:h,engineVs:g,platform:l,supporter:m,supporterVs:w,system:d,systemVs:f},"none"===y?{}:{shell:y,shellVs:b})};