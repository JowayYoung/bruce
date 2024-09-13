import e,{useRef as t,useState as n,useMemo as o,useEffect as r,useCallback as i,cloneElement as c}from"react";import{createPortal as a}from"react-dom";import{createRoot as l}from"react-dom/client";var u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)};function s(e,t,n,o){return new(n||(n=Promise))((function(r,i){function c(e){try{l(o.next(e))}catch(e){i(e)}}function a(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}l((o=o.apply(e,t||[])).next())}))}function d(e,t){var n,o,r,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},c=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return c.next=a(0),c.throw=a(1),c.return=a(2),"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function a(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,a[0]&&(i=0)),i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}function f(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)c.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return c}"function"==typeof SuppressedError&&SuppressedError;var v=!1;if("undefined"!=typeof window){var m={get passive(){v=!0}};window.addEventListener("testPassive",null,m),window.removeEventListener("testPassive",null,m)}var p="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),h=[],b=!1,y=-1,g=void 0,w=void 0,C=void 0,E=function(e){return h.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},x=function(e){var t=e||window.event;return!!E(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},k=function(e,t){if(e){if(!h.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:{}};h=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(h),[n]),p?window.requestAnimationFrame((function(){if(void 0===w){w={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===C){var t=!!e,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);C=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===g&&(g=document.body.style.overflow,document.body.style.overflow="hidden")}(t),p&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(y=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-y;!E(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?x(e):e.stopPropagation())}(t,e)},b||(document.addEventListener("touchmove",x,v?{passive:!1}:void 0),b=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},N=function(e){e?(h=h.filter((function(t){return t.targetElement!==e})),p&&(e.ontouchstart=null,e.ontouchmove=null,b&&0===h.length&&(document.removeEventListener("touchmove",x,v?{passive:!1}:void 0),b=!1)),p?function(){if(void 0!==w){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=w.position,document.body.style.top=w.top,document.body.style.left=w.left,window.scrollTo(t,e),w=void 0}}():(void 0!==C&&(document.body.style.paddingRight=C,C=void 0),void 0!==g&&(document.body.style.overflow=g,g=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};function O(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _,T={exports:{}};_=T,function(){var e={}.hasOwnProperty;function t(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,n(r)))}return e}function n(n){if("string"==typeof n||"number"==typeof n)return n;if("object"!=typeof n)return"";if(Array.isArray(n))return t.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var r="";for(var i in n)e.call(n,i)&&n[i]&&(r=o(r,i));return r}function o(e,t){return t?e?e+" "+t:e+t:e}_.exports?(t.default=t,_.exports=t):window.classNames=t}();var j=O(T.exports);function P(e,t){return s(this,void 0,void 0,(function(){return d(this,(function(t){switch(t.label){case 0:return[4,e.then((function(e){return[null,e]})).catch((function(e){return[e,void 0]}))];case 1:return[2,t.sent()]}}))}))}function S(){return s(this,void 0,void 0,(function(){var e,t,n,o,r;return d(this,(function(i){switch(i.label){case 0:return e="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.min.css",t=new Promise((function(t){(function(e,t,n){if(n||2===arguments.length)for(var o,r=0,i=t.length;r<i;r++)!o&&r in t||(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))})([],f(document.getElementsByTagName("link")),!1).some((function(t){return t.href===e||t.href.includes(e)}))&&t(!1);var n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),n.addEventListener("load",(function(){return t(!0)})),n.addEventListener("error",(function(){return t(!1)})),document.head.appendChild(n)})),[4,P(t)];case 1:return n=f.apply(void 0,[i.sent(),2]),o=n[0],r=n[1],[2,!o&&!!r]}}))}))}function A(){return s(this,arguments,void 0,(function(e){return void 0===e&&(e=1e3),d(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout((function(){return t(!0)}),e)}))];case 1:return[2,t.sent()]}}))}))}function D(e){var i,c,a=e.opts,l=void 0===a?{}:a,u=e.position,s=void 0===u?"bottom":u,d=e.ref,v=void 0===d?null:d,m=t(null),p=f(n(!1),2),h=p[0],b=p[1],y=o((function(){return l}),[l]),g=-1*(parseInt(null!==(c=null===(i=null==y?void 0:y.rootMargin)||void 0===i?void 0:i.split(" ")[0])&&void 0!==c?c:"0")||0);return r((function(){m.current=new IntersectionObserver((function(e){var t=f(e,1)[0];b("top"===s?t.boundingClientRect.top<g:t.isIntersecting)}),y)}),[s,y,g]),r((function(){var e;return(null==v?void 0:v.current)&&(null===(e=m.current)||void 0===e||e.observe(v.current)),function(){var e;return null===(e=m.current)||void 0===e?void 0:e.disconnect()}}),[v]),h}function R(){var e=f(n({height:innerHeight,width:innerWidth}),2),t=e[0],o=e[1],i=function(){o({height:innerHeight,width:innerWidth})};return r((function(){return window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}}),[]),t}function W(){var e=function(e){var t,n,o,r;void 0===e&&(e=navigator.userAgent);var i=e.toLowerCase(),c=function(e){return e.test(i)},a=function(e){var t;return e?(null!==(t=i.match(e))&&void 0!==t?t:"").toString().replace(/[^0-9|_.]/g,"").replace(/_/g,"."):"unknow"},l={windows:/windows|win32|win64|wow32|wow64/g,macos:/macintosh|macintel/g,linux:/x11|ubuntu/g,android:/android|adr/g,ios:/ios|iphone|ipad|ipod/g},u=null!==(t=Object.keys(l).find((function(e){return c(l[e])})))&&void 0!==t?t:"unknow",s="unknow"===u?"unknow version":"windows"===u?function(){var e,t,n=(null!==(e=i.match(/(windows nt [\d._]+)|(windows [\w._]+)/g))&&void 0!==e?e:"").toString().replace(/windows( nt)? /g,""),o={2e3:/^(5\.0|2000)/g,xp:/^(5\.1|xp)/g,2003:/^(5\.2|2003)/g,vista:/^(6\.0|vista)/g,7:/^(6\.1|7)/g,8:/^(6\.2|8)/g,8.1:/^(6\.3|8\.1)/g,10:/^(10\.0|10)/g};return null!==(t=Object.keys(o).find((function(e){return o[e].test(n)})))&&void 0!==t?t:"unknow"}():a({macos:/mac os x [\d._]+/g,linux:/ubuntu\/[\d._]+/g,android:/android [\d._]+/g,ios:/os [\d._]+/g}[u])||"unknow version",d=c(/mobile/g)?"mobile":"desktop",f={webkit:[/applewebkit/g,/applewebkit\/[\d._]+/g],gecko:[/gecko\//g,/rv:[\d._]+/g],presto:[/presto/g,/presto\/[\d._]+/g],trident:[/compatible|msie|trident/g,/trident\/[\d._]+/g]},v=null!==(n=Object.keys(f).find((function(e){return c(f[e][0])})))&&void 0!==n?n:"unknow",m="unknow"===v?"unknow version":a(f[v][1])||"unknow version",p={safari:[/.*safari.*version.*|.*version.*safari.*/g,/version\/[\d._]+/g],edge:[/edge?/g,/edge?\/[\d._]+/g],firefox:[/firefox/g,/firefox\/[\d._]+/g],opera:[/op(era|r)/g,/(version|opr)\/[\d._]+/g],iexplore:[/compatible|msie|trident/g,/(msie |rv:)[\d._]+/g],chrome:[/chrome/g,/chrome\/[\d._]+/g]},h=null!==(o=Object.keys(p).find((function(e){return c(p[e][0])})))&&void 0!==o?o:"unknow",b="unknow"===h?"unknow version":a(p[h][1])||"unknow version",y={uc:[/ucweb|uc?browser|uclite/g,/(ucweb|uc?browser\/|uclite\/)[\d._]+/g],qq:[/qqbrowser/g,/qqbrowser\/[\d._]+/g],sougou:[/metasr|sogoumobilebrowser/g,/(metasr |sogoumobilebrowser\/)[\d._]+/],maxthon:[/maxthon/g,/maxthon(\/| )[\d._]+/g],2345:[/2345explorer/g,/2345explorer\/[\d._]+/g],360:[/360se/g],liebao:[/lbbrowser/g],xiaomi:[/xiaomi|miuibrowser/g,/miuibrowser\/[\d._]+/g],huawei:[/huaweibrowser/g,/huaweibrowser\/[\d._]+/g],oppo:[/heytapbrowser/g,/heytapbrowser\/[\d._]+/g],vivo:[/vivobrowser/g,/vivobrowser\/[\d._]+/g],wechat:[/micromessenger/g,/micromessenger\/[\d._]+/g],baidu:[/baiduboxapp/g,/baiduboxapp\/[\d._]+/g],toutiao:[/newsarticle|ttwebview/g,/(newsarticle|ttwebview)\/[\d._]+/g]},g=null!==(r=Object.keys(y).find((function(e){return c(y[e][0])})))&&void 0!==r?r:"none",w="none"===g?"none":y[g][1]&&a(y[g][1])||"unknow version";return Object.assign({engine:v,engineVs:m,platform:d,supporter:h,supporterVs:b,system:u,systemVs:s},"none"===g?{}:{shell:g,shellVs:w})}().platform,t=f(n("desktop"===e),2),o=t[0],i=t[1],c=R(),a=c.height,l=c.width;return r((function(){return i("desktop"===e&&l>=1e3&&a>=800)}),[a,e,l]),o}function I(t){var n=t.className,o=void 0===n?"":n,r=t.color,i=t.disabled,c=void 0!==i&&i,a=t.disabledColor,l=void 0===a?"currentColor":a,s=t.marginLeft,d=t.marginRight,f=t.onClick,v=t.rorate,m=void 0===v?0:v,p=t.size,h=t.value,b=void 0===h?"":h,y=j("icon-component",o,{clickable:!!f,disabled:c}),g=j("icon-item",b?"bi-".concat(b):""),w=u(u({},s?{marginLeft:s}:{}),d?{marginRight:d}:{}),C=u(u(u(u(u({},p&&p>=12?{width:p}:{}),p&&p>=12?{height:p}:{}),p&&p>=12?{fontSize:p}:{}),c?{color:l}:r?{color:r}:{}),[-360,0,360].includes(m)?{}:{transform:"rotate(".concat(m,"deg)")});return b?e.createElement("div",{className:y,style:w,onClick:f},e.createElement("i",{className:g,style:C})):null}function L(t){var n=t.className,o=void 0===n?"":n,r=t.disabled,i=void 0!==r&&r,c=t.href,a=void 0===c?"":c,l=t.icon,u=void 0===l?"":l,s=t.onClick,d=t.style,f=t.target,v=void 0===f?"self":f,m=t.text,p=void 0===m?"":m,h=t.type,b=j("button-component",o,void 0===h?"confirm":h),y=j("button-wrapper",{disabled:i}),g=e.createElement("button",{className:b,disabled:i,style:d,onClick:s},!!u&&e.createElement(I,{className:"button-icon",size:20,value:u}),!!p&&e.createElement("span",{className:"button-text"},p));return a?e.createElement("a",{className:y,href:a,target:"_".concat(v)},g):g}function B(t){var n=this,r=t.btnText,c=void 0===r?"确定":r,l=t.children,u=void 0===l?null:l,f=t.className,v=void 0===f?"":f,m=t.closeWay,p=void 0===m?"mask":m,h=t.onConfirm,b=void 0===h?function(){}:h,y=t.onCancel,g=void 0===y?function(){}:y,w=t.title,C=void 0===w?"标题":w,E=t.visible,x=void 0!==E&&E,k=o((function(){return g}),[g]),N=W(),O=j("actionsheet-component",v,{desktop:N}),_=i((function(){return s(n,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return"btn"!==p?[4,null==k?void 0:k()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))}),[p,k]);return x?a(e.createElement("div",{className:O,"data-title":C,onClick:_},e.createElement("div",{className:"actionsheet-wrapper",onClick:function(e){return e.stopPropagation()}},"mask"!==p&&e.createElement(I,{className:"actionsheet-btn",value:"x-lg",onClick:k}),!!C&&e.createElement("h1",{className:"actionsheet-title"},C),e.createElement("div",{className:"actionsheet-body"},u),e.createElement(L,{className:"actionsheet-handler",text:c,onClick:b}))),document.body):null}function q(){var t=this,o=f(n(!1),2),r=o[0],c=o[1],a=f(n(!1),2),l=a[0],u=a[1],v=i((function(){u(!0),c(!0),k(document.body)}),[]),m=i((function(){return s(t,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return N(document.body),u(!1),[4,A(300)];case 1:return e.sent(),c(!1),[2]}}))}))}),[]),p=i((function(n){var o=n.btnText,i=void 0===o?"确定":o,c=n.children,a=void 0===c?null:c,u=n.className,f=void 0===u?"":u,v=n.closeWay,p=void 0===v?"mask":v,h=n.onCancel,b=void 0===h?function(){return!0}:h,y=n.onCancelCall,g=n.onConfirm,w=void 0===g?function(){return!0}:g,C=n.onConfirmCall,E=n.title,x=void 0===E?"标题":E,k=j(f,{hide:!l,show:l});return e.createElement(B,{btnText:i,className:k,closeWay:p,title:x,visible:r,onCancel:function(){return s(t,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==b?void 0:b()];case 1:return e=t.sent(),e?[4,m()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==y?void 0:y(e)];case 4:return t.sent(),[2]}}))}))},onConfirm:function(){return s(t,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==w?void 0:w()];case 1:return e=t.sent(),e?[4,m()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==C?void 0:C(e)];case 4:return t.sent(),[2]}}))}))}},a)}),[l,r,m]);return[p,v,m,r]}var z={},M=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}},H={"text/plain":"Text","text/html":"Url",default:"Text"};var U=function(e,t){var n,o,r,i,c,a,l=!1;t||(t={}),n=t.debug||!1;try{if(r=M(),i=document.createRange(),c=document.getSelection(),(a=document.createElement("span")).textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=H[t.format]||H.default;window.clipboardData.setData(r,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(a),i.selectNodeContents(a),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),l=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),a&&document.body.removeChild(a),r()}return l};function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}Object.defineProperty(z,"__esModule",{value:!0}),z.CopyToClipboard=void 0;var Y=G(e),F=G(U),X=["text","onCopy","options","children"];function G(e){return e&&e.__esModule?e:{default:e}}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Z(e,t,n){return t&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function $(e,t){return $=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},$(e,t)}function ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=ne(e);if(t){var r=ne(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return te(e)}(this,n)}}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e){return ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ne(e)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}(t,Y["default"].PureComponent);var e=ee(t);function t(){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return oe(te(n=e.call.apply(e,[this].concat(r))),"onClick",(function(e){var t=n.props,o=t.text,r=t.onCopy,i=t.children,c=t.options,a=Y.default.Children.only(i),l=(0,F.default)(o,c);r&&r(o,l),a&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e)})),n}return Z(t,[{key:"render",value:function(){var e=this.props;e.text,e.onCopy,e.options;var t=e.children,n=Q(e,X),o=Y.default.Children.only(t);return Y.default.cloneElement(o,K(K({},n),{},{onClick:this.onClick}))}}]),t}();z.CopyToClipboard=re,oe(re,"defaultProps",{onCopy:void 0,options:void 0});var ie=z.CopyToClipboard;ie.CopyToClipboard=ie;var ce=ie,ae=O(ce);function le(t){var n=this,r=t.children,c=void 0===r?null:r,l=t.className,u=void 0===l?"":l,f=t.closeWay,v=void 0===f?"mask":f,m=t.handler,p=void 0===m?[]:m,h=t.onClose,b=void 0===h?function(){}:h,y=t.root,g=void 0===y?document.body:y,w=t.title,C=void 0===w?"":w,E=t.visible,x=void 0!==E&&E,k=o((function(){return b}),[b]),N=W(),O=p.slice(0,2),_=j("modal-component",u,{desktop:N}),T=i((function(){return s(n,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return"btn"!==v?[4,null==k?void 0:k()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))}),[v,k]);return x?a(e.createElement("div",{className:_,"data-title":C,onClick:T},e.createElement("div",{className:"modal-wrapper",onClick:function(e){return e.stopPropagation()}},e.createElement("div",{className:"modal-container"},"mask"!==v&&e.createElement(I,{className:"modal-btn",value:"x-lg",onClick:k}),!!C&&e.createElement("h1",{className:"modal-title"},C),e.createElement("div",{className:"modal-body"},c),!!O.length&&e.createElement("div",{className:"modal-handler"},O)))),g):null}function ue(){var t=this,o=f(n(!1),2),r=o[0],c=o[1],a=f(n(!1),2),l=a[0],u=a[1],v=i((function(){u(!0),c(!0),k(document.body)}),[]),m=i((function(){return s(t,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return N(document.body),u(!1),[4,A(300)];case 1:return e.sent(),c(!1),[2]}}))}))}),[]),p=i((function(n){var o=n.children,i=void 0===o?null:o,c=n.className,a=void 0===c?"":c,u=n.closeWay,f=void 0===u?"mask":u,v=n.handler,p=void 0===v?[]:v,h=n.onClose,b=n.title,y=void 0===b?"":b,g=j(a,{hide:!l,show:l});return e.createElement(le,{className:g,closeWay:f,handler:p,title:y,visible:r,onClose:function(){return s(t,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return[4,m()];case 1:return e.sent(),[4,null==h?void 0:h()];case 2:return e.sent(),[2]}}))}))}},i)}),[l,r,m]);return[p,v,m,r]}function se(t){return s(this,arguments,void 0,(function(t){var n,o,r,i,a,u,f,v=this,m=t.btnText,p=void 0===m?"确定":m,h=t.children,b=void 0===h?null:h,y=t.className,g=void 0===y?"":y,w=t.closeWay,C=void 0===w?"mask":w,E=t.copyText,x=void 0===E?"":E,O=t.onCancel,_=void 0===O?function(){return!0}:O,T=t.onCancelCall,P=t.onConfirm,S=void 0===P?function(){return!0}:P,D=t.onConfirmCall,R=t.title,W=void 0===R?"":R;return d(this,(function(t){return document.getElementById("alert")||(n=function(){return s(v,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return N(document.body),f.render(c(u,{className:j("hide",g)})),[4,A(300)];case 1:return e.sent(),f.unmount(),i.remove(),[2]}}))}))},o=function(){return s(v,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==S?void 0:S()];case 1:return e=t.sent(),e?[4,n()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==D?void 0:D(e)];case 4:return t.sent(),[2]}}))}))},r=function(){return s(v,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==_?void 0:_()];case 1:return e=t.sent(),e?[4,n()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==T?void 0:T(e)];case 4:return t.sent(),[2]}}))}))},(i=document.createElement("div")).setAttribute("id","alert"),document.body.append(i),a=[x?e.createElement(ae,{key:"confirm",text:x},e.createElement(L,{text:p,onClick:o})):e.createElement(L,{key:"confirm",text:p,onClick:o})],u=e.createElement(le,{className:j("show",g),closeWay:C,handler:a,root:i,title:W,visible:!0,onClose:r},b),(f=l(i)).render(u),k(document.body)),[2]}))}))}function de(){var t=this,o=f(n(!1),2),r=o[0],c=o[1],a=f(n(!1),2),l=a[0],u=a[1],v=i((function(){u(!0),c(!0),k(document.body)}),[]),m=i((function(){return s(t,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return N(document.body),u(!1),[4,A(300)];case 1:return e.sent(),c(!1),[2]}}))}))}),[]),p=i((function(n){var o=n.btnText,i=void 0===o?"确定":o,c=n.children,a=void 0===c?null:c,u=n.className,f=void 0===u?"":u,v=n.closeWay,p=void 0===v?"mask":v,h=n.copyText,b=void 0===h?"":h,y=n.onCancel,g=void 0===y?function(){return!0}:y,w=n.onCancelCall,C=n.onConfirm,E=void 0===C?function(){return!0}:C,x=n.onConfirmCall,k=n.title,N=void 0===k?"":k,O=j(f,{hide:!l,show:l}),_=function(){return s(t,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==E?void 0:E()];case 1:return e=t.sent(),e?[4,m()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==x?void 0:x(e)];case 4:return t.sent(),[2]}}))}))},T=[b?e.createElement(ae,{key:"confirm",text:b},e.createElement(L,{text:i,onClick:_})):e.createElement(L,{key:"confirm",text:i,onClick:_})];return e.createElement(le,{className:O,closeWay:p,handler:T,title:N,visible:r,onClose:function(){return s(t,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==g?void 0:g()];case 1:return e=t.sent(),e?[4,m()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==w?void 0:w(e)];case 4:return t.sent(),[2]}}))}))}},a)}),[l,r,m]);return[p,v,m,r]}function fe(t){return s(this,arguments,void 0,(function(t){var n,o,r,i,a,u,f,v,m=this,p=t.btnTextCancel,h=void 0===p?"取消":p,b=t.btnTextConfirm,y=void 0===b?"确定":b,g=t.children,w=void 0===g?null:g,C=t.className,E=void 0===C?"":C,x=t.closeWay,O=void 0===x?"mask":x,_=t.copyTextCancel,T=void 0===_?"":_,P=t.copyTextConfirm,S=void 0===P?"":P,D=t.onCancel,R=void 0===D?function(){return!0}:D,W=t.onCancelCall,I=t.onConfirm,B=void 0===I?function(){return!0}:I,q=t.onConfirmCall,z=t.title,M=void 0===z?"":z;return d(this,(function(t){return document.getElementById("dialog")||(n=function(){return s(m,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return N(document.body),v.render(c(f,{className:j("hide",E)})),[4,A(300)];case 1:return e.sent(),v.unmount(),a.remove(),[2]}}))}))},o=function(){return s(m,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==B?void 0:B()];case 1:return e=t.sent(),e?[4,n()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==q?void 0:q(e)];case 4:return t.sent(),[2]}}))}))},r=function(){return s(m,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==R?void 0:R()];case 1:return e=t.sent(),e?[4,n()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==W?void 0:W(e)];case 4:return t.sent(),[2]}}))}))},i=function(){return s(m,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==R?void 0:R()];case 1:return e=t.sent(),e?[4,n()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2]}}))}))},(a=document.createElement("div")).setAttribute("id","dialog"),document.body.append(a),u=[T?e.createElement(ae,{key:"cancel",text:T},e.createElement(L,{text:h,type:"cancel",onClick:r})):e.createElement(L,{key:"cancel",text:h,type:"cancel",onClick:r}),S?e.createElement(ae,{key:"confirm",text:S},e.createElement(L,{text:y,onClick:o})):e.createElement(L,{key:"confirm",text:y,onClick:o})],f=e.createElement(le,{className:j("show",E),closeWay:O,handler:u,root:a,title:M,visible:!0,onClose:i},w),(v=l(a)).render(f),k(document.body)),[2]}))}))}function ve(){var t=this,o=f(n(!1),2),r=o[0],c=o[1],a=f(n(!1),2),l=a[0],u=a[1],v=i((function(){u(!0),c(!0),k(document.body)}),[]),m=i((function(){return s(t,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return N(document.body),u(!1),[4,A(300)];case 1:return e.sent(),c(!1),[2]}}))}))}),[]),p=i((function(n){var o=n.btnTextCancel,i=void 0===o?"取消":o,c=n.btnTextConfirm,a=void 0===c?"确定":c,u=n.children,f=void 0===u?null:u,v=n.className,p=void 0===v?"":v,h=n.closeWay,b=void 0===h?"mask":h,y=n.copyTextCancel,g=void 0===y?"":y,w=n.copyTextConfirm,C=void 0===w?"":w,E=n.onCancel,x=void 0===E?function(){return!0}:E,k=n.onCancelCall,N=n.onConfirm,O=void 0===N?function(){return!0}:N,_=n.onConfirmCall,T=n.title,P=void 0===T?"":T,S=j(p,{hide:!l,show:l}),A=function(){return s(t,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==O?void 0:O()];case 1:return e=t.sent(),e?[4,m()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==_?void 0:_(e)];case 4:return t.sent(),[2]}}))}))},D=function(){return s(t,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==x?void 0:x()];case 1:return e=t.sent(),e?[4,m()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==k?void 0:k(e)];case 4:return t.sent(),[2]}}))}))},R=[g?e.createElement(ae,{key:"cancel",text:g},e.createElement(L,{text:i,type:"cancel",onClick:D})):e.createElement(L,{key:"cancel",text:i,type:"cancel",onClick:D}),C?e.createElement(ae,{key:"confirm",text:C},e.createElement(L,{text:a,onClick:A})):e.createElement(L,{key:"confirm",text:a,onClick:A})];return e.createElement(le,{className:S,closeWay:b,handler:R,title:P,visible:r,onClose:function(){return s(t,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==x?void 0:x()];case 1:return e=t.sent(),e?[4,m()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2]}}))}))}},f)}),[l,r,m]);return[p,v,m,r]}function me(t){var n=t.className,o=void 0===n?"":n,r=t.color,i=t.icon,c=void 0===i?"box":i,a=t.text,l=void 0===a?"暂无数据":a,u=t.size,s=j("empty-component",o);return e.createElement("div",{className:s},!!c&&e.createElement(I,{className:"empty-icon",color:r,size:u,value:c}),!!l&&e.createElement("p",{className:"empty-text"},l))}function pe(t){var n=t.className,o=void 0===n?"":n,r=t.dot,i=void 0===r||r,c=t.text,a=void 0===c?"加载中":c,l=j("loading-wrapper",o),u=new Array(12).fill(0).map((function(t,n){return e.createElement("li",{key:n,className:"loading-icon-item",style:{"--line-index":n+1}})}));return e.createElement("div",{className:l},e.createElement("ul",{className:"loading-icon"},u),!!a&&e.createElement("p",{className:"loading-text"},a,i&&e.createElement("span",{className:"loading-text-dot"})))}function he(t){var n=t.className,o=void 0===n?"":n,r=t.dot,i=void 0===r||r,c=t.text,l=void 0===c?"加载中":c,u=t.visible,s=W(),d=j("loading-component",o,{desktop:s});return u?a(e.createElement("div",{className:d},e.createElement(pe,{dot:i,text:l})),document.body):null}function be(){var t=this,o=f(n(!1),2),r=o[0],c=o[1],a=f(n(!1),2),l=a[0],u=a[1],v=i((function(){u(!0),c(!0),k(document.body)}),[]),m=i((function(){return s(t,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return N(document.body),u(!1),[4,A(300)];case 1:return e.sent(),c(!1),[2]}}))}))}),[]),p=i((function(t){var n=t.className,o=void 0===n?"":n,i=t.dot,c=void 0===i||i,a=t.text,u=void 0===a?"加载中":a,s=j("loader",o,{hide:!l,show:l});return e.createElement(he,{className:s,dot:c,text:u,visible:r})}),[l,r]);return[p,v,m,r]}function ye(t){var r=this,c=t.className,l=void 0===c?"":c,u=t.closeWay,v=void 0===u?"mask":u,m=t.list,p=void 0===m?[]:m,h=t.onCancel,b=void 0===h?function(){}:h,y=t.onChange,g=void 0===y?function(){return""}:y,w=t.onConfirm,C=void 0===w?function(){}:w,E=t.text,x=void 0===E?"":E,k=t.title,N=void 0===k?"分享到":k,O=t.visible,_=void 0!==O&&O,T=W(),P=f(n(""),2),S=P[0],A=P[1],D=f(n(location.href),2),R=D[0],B=D[1],q=o((function(){return p.slice(0,4)}),[p]),z=o((function(){return g}),[g]),M=o((function(){return b}),[b]),H=o((function(){return C}),[C]),U=j("sharesheet-component",l,{desktop:T}),V=i((function(){return s(r,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return"btn"!==v?[4,null==M?void 0:M()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))}),[v,M]),Y=i((function(e){return s(r,void 0,void 0,(function(){var t,n;return d(this,(function(o){switch(o.label){case 0:return A(e),[4,null==z?void 0:z(e)];case 1:return t=null!==(n=o.sent())&&void 0!==n?n:"",B(x?"".concat(x).concat(t?"\n\n".concat(t):""):t),[2]}}))}))}),[x,z]),F=i((function(){return s(r,void 0,void 0,(function(){var e,t,n;return d(this,(function(o){switch(o.label){case 0:return e=null!==(n=null===(t=q.find((function(e){return e.name===S})))||void 0===t?void 0:t.link)&&void 0!==n?n:q[0].link,[4,null==H?void 0:H()];case 1:return o.sent(),[4,null==M?void 0:M()];case 2:return o.sent(),open(e),[2]}}))}))}),[S,q,M,H]),X=q.map((function(t){return e.createElement("li",{key:t.name,className:"sharesheet-app-item",onClick:function(){return s(r,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return[4,Y(t.name)];case 1:return[2,e.sent()]}}))}))}},e.createElement("img",{className:"sharesheet-app-icon",src:t.icon}),e.createElement("h3",{className:"sharesheet-app-name"},t.name))})),G=e.createElement("div",{className:"sharesheet-target"},e.createElement("p",{className:"sharesheet-target-link"},R),e.createElement(ce.CopyToClipboard,{text:R},e.createElement(L,{className:"sharesheet-target-btn",text:"复制并分享",onClick:F})));return _?a(e.createElement("div",{className:U,"data-title":N,onClick:V},e.createElement("div",{className:"sharesheet-wrapper",onClick:function(e){return e.stopPropagation()}},"mask"!==v&&e.createElement(I,{className:"sharesheet-btn",value:"x-lg",onClick:M}),!!N&&e.createElement("h1",{className:"sharesheet-title"},N),""===S?e.createElement("ul",{className:"sharesheet-app"},X):G)),document.body):null}function ge(){var t=this,o=f(n(!1),2),r=o[0],c=o[1],a=f(n(!1),2),l=a[0],u=a[1],v=i((function(){u(!0),c(!0),k(document.body)}),[]),m=i((function(){return s(t,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return N(document.body),u(!1),[4,A(300)];case 1:return e.sent(),c(!1),[2]}}))}))}),[]),p=i((function(n){var o=n.className,i=void 0===o?"":o,c=n.closeWay,a=void 0===c?"mask":c,u=n.list,f=void 0===u?[]:u,v=n.onCancel,p=void 0===v?function(){return!0}:v,h=n.onCancelCall,b=n.onChange,y=void 0===b?function(){return""}:b,g=n.onConfirm,w=void 0===g?function(){return!0}:g,C=n.onConfirmCall,E=n.text,x=void 0===E?"":E,k=n.title,N=void 0===k?"分享到":k,O=j(i,{hide:!l,show:l});return e.createElement(ye,{className:O,closeWay:a,list:f,text:x,title:N,visible:r,onCancel:function(){return s(t,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==p?void 0:p()];case 1:return e=t.sent(),e?[4,m()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==h?void 0:h(e)];case 4:return t.sent(),[2]}}))}))},onChange:y,onConfirm:function(){return s(t,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return[4,null==w?void 0:w()];case 1:return e=t.sent(),e?[4,m()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,null==C?void 0:C(e)];case 4:return t.sent(),[2]}}))}))}})}),[l,r,m]);return[p,v,m,r]}function we(t){var n=t.className,o=void 0===n?"":n,r=t.text,i=void 0===r?"提示":r,c=W(),a=j("toast-component",o,{desktop:c});return e.createElement("div",{className:a},e.createElement("div",{className:"toast-wrapper"},e.createElement("p",{className:"toast-container"},e.createElement("span",{className:"toast-text"},i))))}function Ce(t){return s(this,arguments,void 0,(function(t){var n,o,r,i=t.className,a=void 0===i?"":i,u=t.delay,s=void 0===u?2e3:u,f=t.text,v=void 0===f?"提示":f;return d(this,(function(t){switch(t.label){case 0:return document.getElementById("toast")?[2]:((n=document.createElement("div")).setAttribute("id","toast"),document.body.append(n),o=e.createElement(we,{className:j("show",a),text:v}),(r=l(n)).render(o),k(document.body),[4,A(s)]);case 1:return t.sent(),N(document.body),r.render(c(o,{className:j("hide",a)})),[4,A(300)];case 2:return t.sent(),r.unmount(),n.remove(),[2]}}))}))}export{B as Actionsheet,L as Button,me as Empty,I as Icon,S as LoadIcons,he as Loader,pe as Loading,le as Modal,ye as Sharesheet,we as Toast,se as actionAlert,fe as actionDialog,Ce as actionToast,q as useActionsheet,de as useAlert,W as useDesktop,ve as useDialog,be as useLoading,ue as useModal,D as useOnCross,R as useOnResize,ge as useSharesheet};
