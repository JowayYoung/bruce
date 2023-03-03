"use strict";function t(){return"undefined"==typeof window?"node":"web"}function n(t){return Object.prototype.toString.call(t).replace(/\[object (\w+)\]/,"$1").toLowerCase()}function e(t){return"object"===n(t)}function r(t){return"function"===n(t)}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var o={};({get exports(){return o},set exports(t){o=t}}).exports=function(){var t=1e3,n=6e4,e=36e5,r="millisecond",o="second",i="minute",u="hour",s="day",a="week",c="month",f="quarter",d="year",l="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var n=["th","st","nd","rd"],e=t%100;return"["+t+(n[(e-20)%10]||n[e]||n[0])+"]"}},m=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},x={s:m,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),o=e%60;return(n<=0?"+":"-")+m(r,2,"0")+":"+m(o,2,"0")},m:function t(n,e){if(n.date()<e.date())return-t(e,n);var r=12*(e.year()-n.year())+(e.month()-n.month()),o=n.clone().add(r,c),i=e-o<0,u=n.clone().add(r+(i?-1:1),c);return+(-(r+(e-o)/(i?o-u:u-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:a,d:s,D:l,h:u,m:i,s:o,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=g;var w=function(t){return t instanceof D},M=function t(n,e,r){var o;if(!n)return y;if("string"==typeof n){var i=n.toLowerCase();$[i]&&(o=i),e&&($[i]=e,o=i);var u=n.split("-");if(!o&&u.length>1)return t(u[0])}else{var s=n.name;$[s]=n,o=s}return!r&&o&&(y=o),o||!r&&y},S=function(t,n){if(w(t))return t.clone();var e="object"==typeof n?n:{};return e.date=t,e.args=arguments,new D(e)},b=x;b.l=M,b.i=w,b.w=function(t,n){return S(t,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var D=function(){function g(t){this.$L=M(t.locale,null,!0),this.parse(t)}var m=g.prototype;return m.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(b.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(t,n){var e=S(t);return this.startOf(n)<=e&&e<=this.endOf(n)},m.isAfter=function(t,n){return S(t)<this.startOf(n)},m.isBefore=function(t,n){return this.endOf(n)<S(t)},m.$g=function(t,n,e){return b.u(t)?this[n]:this.set(e,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,n){var e=this,r=!!b.u(n)||n,f=b.p(t),h=function(t,n){var o=b.w(e.$u?Date.UTC(e.$y,n,t):new Date(e.$y,n,t),e);return r?o:o.endOf(s)},p=function(t,n){return b.w(e.toDate()[t].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(n)),e)},v=this.$W,g=this.$M,m=this.$D,x="set"+(this.$u?"UTC":"");switch(f){case d:return r?h(1,0):h(31,11);case c:return r?h(1,g):h(0,g+1);case a:var y=this.$locale().weekStart||0,$=(v<y?v+7:v)-y;return h(r?m-$:m+(6-$),g);case s:case l:return p(x+"Hours",0);case u:return p(x+"Minutes",1);case i:return p(x+"Seconds",2);case o:return p(x+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,n){var e,a=b.p(t),f="set"+(this.$u?"UTC":""),h=(e={},e[s]=f+"Date",e[l]=f+"Date",e[c]=f+"Month",e[d]=f+"FullYear",e[u]=f+"Hours",e[i]=f+"Minutes",e[o]=f+"Seconds",e[r]=f+"Milliseconds",e)[a],p=a===s?this.$D+(n-this.$W):n;if(a===c||a===d){var v=this.clone().set(l,1);v.$d[h](p),v.init(),this.$d=v.set(l,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},m.set=function(t,n){return this.clone().$set(t,n)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var l,h=this;r=Number(r);var p=b.p(f),v=function(t){var n=S(h);return b.w(n.date(n.date()+Math.round(t*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return v(1);if(p===a)return v(7);var g=(l={},l[i]=n,l[u]=e,l[o]=t,l)[p]||1,m=this.$d.getTime()+r*g;return b.w(m,this)},m.subtract=function(t,n){return this.add(-1*t,n)},m.format=function(t){var n=this,e=this.$locale();if(!this.isValid())return e.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",o=b.z(this),i=this.$H,u=this.$m,s=this.$M,a=e.weekdays,c=e.months,f=function(t,e,o,i){return t&&(t[e]||t(n,r))||o[e].slice(0,i)},d=function(t){return b.s(i%12||12,t,"0")},l=e.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:b.s(s+1,2,"0"),MMM:f(e.monthsShort,s,c,3),MMMM:f(c,s),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:f(e.weekdaysMin,this.$W,a,2),ddd:f(e.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(i),HH:b.s(i,2,"0"),h:d(1),hh:d(2),a:l(i,u,!0),A:l(i,u,!1),m:String(u),mm:b.s(u,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:o};return r.replace(v,(function(t,n){return n||p[t]||o.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,l,h){var p,v=b.p(l),g=S(r),m=(g.utcOffset()-this.utcOffset())*n,x=this-g,y=b.m(this,g);return y=(p={},p[d]=y/12,p[c]=y,p[f]=y/3,p[a]=(x-m)/6048e5,p[s]=(x-m)/864e5,p[u]=x/e,p[i]=x/n,p[o]=x/t,p)[v]||x,h?y:b.a(y)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=M(t,n,!0);return r&&(e.$L=r),e},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},g}(),I=D.prototype;return S.prototype=I,[["$ms",r],["$s",o],["$m",i],["$H",u],["$W",s],["$M",c],["$y",d],["$D",l]].forEach((function(t){I[t[1]]=function(n){return this.$g(n,t[0],t[1])}})),S.extend=function(t,n){return t.$i||(t(n,D,S),t.$i=!0),S},S.locale=M,S.isDayjs=w,S.unix=function(t){return S(1e3*t)},S.en=$[y],S.Ls=$,S.p={},S}();var i=o;function u(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function s(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,s)}a((r=r.apply(t,n||[])).next())}))}function s(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(a){return function(s){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(u=0)),u;)try{if(e=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,r=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){u=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){u.label=s[1];break}if(6===s[0]&&u.label<o[1]){u.label=o[1],o=s;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(s);break}o[2]&&u.ops.pop(),u.trys.pop();continue}s=n.call(t,u)}catch(t){s=[6,t],r=0}finally{e=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function a(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function c(t,n,e){if(e||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return t.concat(r||Array.prototype.slice.call(n))}function f(t,n,e){if(void 0===t&&(t="+"),void 0===n&&(n=0),void 0===e&&(e=0),n=parseFloat(n.toString()),e=parseFloat(e.toString()),isNaN(n)||isNaN(e))return NaN;var r=(n.toString().split(".")[1]||"").length,o=(e.toString().split(".")[1]||"").length,i=Math.max(r,o,0),u=Math.pow(10,i),s=Math.round(n*u),a=Math.round(e*u);return"+"===t?(s+a)/u:"-"===t?(s-a)/u:"*"===t?s*a/(u*u):"/"===t?s/a:(s+a)/u}function d(t,n){return void 0===t&&(t=0),void 0===n&&(n=10),Math.floor(Math.random()*(n-t+1)+t)}var l={address:{msg:"地址只能由2~200位中文、英文、数字或空格组成",regexp:/^[\u4e00-\u9fa5A-Za-z0-9 ]{2,200}$/g},count:{msg:"数量只能由数字组成",regexp:/^\d{1,}$/g},date:{msg:"日期只能由YYYY-MM-DD HH:mm:ss形式组成",regexp:/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/g},email:{msg:"邮箱只能由xxx@yyy.zzz形式组成",regexp:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/g},idcard:{msg:"身份证只能由13位数字或12位数字与X组成",regexp:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/g},image:{msg:"图片只能是JPG、PNG、GIF、SVG或WEBP类型",regexp:/\.(jpe?g|png|gif|svg|webp)$/g},name:{msg:"名称只能由2~50位中文、英文、数字、下划线或中划线组成",regexp:/^[\u4e00-\u9fa5\w-]{2,50}$/g},number:{msg:"计数只能由数字或小数点组成",regexp:/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g},password:{msg:"密码只能由8~20位英文、数字或符号至少两种组成",regexp:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,20}$/g},phone:{msg:"手机只能由11位数字组成且符合通讯运营商规范",regexp:/^1\d{10}$/g}},h="^$.*+-?=!:|\\/()[]{}".split("");exports.AsyncTo=function(t,n){return u(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,t.then((function(t){return[null,t]})).catch((function(t){return[n?Object.assign({},t,n):t,void 0]}))];case 1:return[2,e.sent()]}}))}))},exports.CalcNum=f,exports.CalcNumPlus=function(t){void 0===t&&(t="+");for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];for(var r={"*":1,"+":0,"/":1,"-":0}[t]||0,o=0;o<n.length;o++)r=0!==o||"-"!==t&&"/"!==t?f(t,r,n[o]):n[o];return r},exports.CheckObjValidKey=function(t,n){return void 0===t&&(t={}),void 0===n&&(n=""),n in t},exports.CheckText=function(t,n){void 0===t&&(t="phone"),void 0===n&&(n="");var e=l[t],r=e.regexp,o=e.msg,i=r.test(n);return{flag:i,msg:i?"":o}},exports.CheckTextPlus=function(t,n,e){void 0===n&&(n=""),void 0===e&&(e="");var r=t.test(n);return{flag:r,msg:r?"":e}},exports.ChunkArr=function(t,n){return void 0===t&&(t=[]),void 0===n&&(n=1),t.length?t.reduce((function(t,e){return t[t.length-1].length===n?t.push([e]):t[t.length-1].push(e),t}),[[]]):[]},exports.Debounce=function(t,n){var e;return void 0===n&&(n=50),function(){for(var r=this,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];e&&clearTimeout(e),e=setTimeout((function(){return t.apply(r,o)}),n)}},exports.DesePhone=function(t){return void 0===t&&(t=""),l.phone.regexp.test(t)?t.toString().replace(/(\d{3})\d*(\d{4})/g,"$1****$2"):t},exports.EnvType=t,exports.FillNum=function(t,n){return void 0===t&&(t=0),void 0===n&&(n=0),t.toString().padStart(n,"0")},exports.FilterObjKey=function(t,n){return void 0===t&&(t={}),void 0===n&&(n=[]),Object.keys(t).reduce((function(e,r){return n.includes(r)&&(e[r]=t[r]),e}),{})},exports.FixedNum=function(t){var n=t.dec,e=void 0===n?2:n,r=t.num,o=void 0===r?0:r,i=t.type,u=void 0===i?"round":i,s=Math.pow(10,e);return(Math[u]||Math.round)(o*s)/s},exports.FormatByte=function(t){if(void 0===t&&(t=0),0===t)return"0 B";var n=Math.floor(Math.log(t)/Math.log(1024));return(t/Math.pow(1024,n)).toPrecision(3)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},exports.FormatCountdown=function(t){if(!t)return"时间无效";var n=+new Date,e=+new Date(t)-n;if(e>=0){var r=Math.floor(e/1e3/3600/24),o=Math.floor(e/1e3/60/60%24),i=Math.floor(e/1e3/60%60),u=Math.floor(e/1e3%60),s=r?"".concat(r,"天"):"",a=o?"".concat(o,"时"):"",c=i?"".concat(i,"分"):"",f=u?"".concat(u,"秒"):"";return"".concat(s).concat(a).concat(c).concat(f)}return"时间已到"},exports.FormatPhone=function(t,n){return void 0===t&&(t=""),void 0===n&&(n="-"),l.phone.regexp.test(t)&&["-"," "].includes(n)?t.toString().replace(/(\d{3})(\d{4})(\d{4})/g,"$1".concat(n,"$2").concat(n,"$3")):t},exports.FormatTimeDiff=function(t,n){if(void 0===n&&(n="YYYY-MM-DD"),!t)return"时间无效";var e=+new Date,r=+new Date(t),o=e-r,u=o>=0?"前":"后",s=Math.abs(o),a=30.4375,c=36e5,f=24*c,d=s/6e4,l=s/c,h=s/f,p=s/26298e5;return s/315576e5>=1||p>=12?i(r).format(n):p>=1&&p<12?"".concat(parseInt(p.toString()),"个月").concat(u):h>=1&&h<a?"".concat(parseInt(h.toString()),"天").concat(u):l>=1&&l<24?"".concat(parseInt(l.toString()),"小时").concat(u):d>=1&&d<60?"".concat(parseInt(d.toString()),"分钟").concat(u):o>=0?"刚刚":"准备"},exports.GroupArr=function(t,n){return void 0===t&&(t=[]),void 0===n&&(n=""),n?t.reduce((function(t,e){return!t[e[n]]&&(t[e[n]]=[]),t[e[n]].push(e),t}),{}):{}},exports.IsArguments=function(t){return"arguments"===n(t)},exports.IsArray=function(t){return"array"===n(t)},exports.IsAsyncFunction=function(t){return"asyncfunction"===n(t)},exports.IsBoolean=function(t){return"boolean"===n(t)},exports.IsClass=function(t){return r(t)&&/^class\s+[\dA-Za-z]/.test(t.toString())},exports.IsDate=function(t){return"date"===n(t)},exports.IsElement=function(t){return/^html(.+?)element$/.test(n(t))},exports.IsEmpty=function(t){return!t},exports.IsEmptyArray=function(t){return Array.isArray(t)&&!t.length},exports.IsEmptyObject=function(t){return e(t)&&!Object.keys(t).length},exports.IsError=function(t){return t instanceof Error},exports.IsFunction=r,exports.IsMap=function(t){return"map"===n(t)},exports.IsNode=function(){return"node"===t()},exports.IsNull=function(t){return"null"===n(t)},exports.IsNumber=function(t){return"number"===n(t)},exports.IsObject=e,exports.IsRegExp=function(t){return"regexp"===n(t)},exports.IsSet=function(t){return"set"===n(t)},exports.IsString=function(t){return"string"===n(t)},exports.IsSymbol=function(t){return"symbol"===n(t)},exports.IsSyncFunction=function(t){return"function"===n(t)},exports.IsUndefined=function(t){return"undefined"===n(t)},exports.IsWeakMap=function(t){return"weakmap"===n(t)},exports.IsWeakSet=function(t){return"weakset"===n(t)},exports.IsWeb=function(){return"web"===t()},exports.MatchBracketText=function(t,n){var e;void 0===t&&(t="(*)"),void 0===n&&(n="");var r=t.split("*").map((function(t){return h.includes(t)?"\\"+t:t})),o=new RegExp(r[0]+"(.+?)"+r[1],"g");return(null!==(e=n.match(o))&&void 0!==e?e:[]).map((function(t){return t.replace(o,"$1")}))},exports.RandomColor=function(){return"#"+Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")},exports.RandomId=function(t){return void 0===t&&(t=5),(t<1||t>10)&&(t=5),Math.random().toString(36).substr(3,t)},exports.RandomNum=d,exports.RandomNumPlus=function(t,n,e){void 0===t&&(t=0),void 0===n&&(n=10),void 0===e&&(e=1);for(var r=[];;){for(var o=!1,i=d(t,n),u=0;u<r.length;u++)if(i===r[u]){o=!0;break}if(o||r.push(i),r.length===e)return r}},exports.RemoveObjEmptyKey=function(t,n){for(var e in void 0===t&&(t={}),void 0===n&&(n=!1),t)if({}.hasOwnProperty.call(t,e)){var r=t[e];(n?!r:""===r)&&delete t[e]}},exports.RemoveTag=function(t){return void 0===t&&(t=""),t.replace(/<[^>]*>/g,"")},exports.ReverseText=function(t){return void 0===t&&(t=""),t.split("").reduceRight((function(t,n){return t+n}))},exports.RoundNum=function(t){var n=t.dec,e=void 0===n?2:n,r=t.num,o=void 0===r?0:r,i=t.per;return void 0!==i&&i?"".concat(Math.round(o*Math.pow(10,e)*100)/Math.pow(10,e),"%"):Math.round(o*Math.pow(10,e))/Math.pow(10,e)},exports.StartScore=function(t,n){return void 0===t&&(t=0),void 0===n&&(n=5),t<0&&(t=0),t>n&&(t=n),c(c([],a(new Array(n).fill("★")),!1),a(new Array(n).fill("☆")),!1).join("").slice(n-t,2*n-t)},exports.StatArrMemCount=function(t){return void 0===t&&(t=[]),t.reduce((function(t,n){return t[n]=(t[n]||0)+1,t}),{})},exports.StatArrMemKeyword=function(t,n){return void 0===t&&(t=[]),void 0===n&&(n=[]),n.reduce((function(n,e){return t.some((function(t){return t.includes(e)}))&&n.push(e),n}),[])},exports.StatArrMemPosition=function(t,n){return void 0===t&&(t=[]),t.reduce((function(t,e,r){return e===n&&t.push(r),t}),[])},exports.ThousandNum=function(t){return void 0===t&&(t=0),t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},exports.Throttle=function(t,n){var e;void 0===n&&(n=50);var r=!1,o=0;return function(){for(var i=this,u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];r?(clearTimeout(e),e=setTimeout((function(){Date.now()-o>=n&&(t.apply(i,u),o=Date.now())}),Math.max(n-(Date.now()-o),0))):(t.apply(this,u),o=Date.now(),r=!0)}},exports.TypeOf=n,exports.WaitFor=function(t){return void 0===t&&(t=1e3),u(this,void 0,void 0,(function(){return s(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){return setTimeout((function(){return n(!0)}),t)}))];case 1:return[2,n.sent()]}}))}))};
