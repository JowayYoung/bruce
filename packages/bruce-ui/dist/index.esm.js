import t,{useState as e,cloneElement as r}from"react";import n from"prop-types";import{render as o,createPortal as i,unmountComponentAtNode as a}from"react-dom";function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){var e={exports:{}};return t(e,e.exports),e.exports}var l=u((function(t){!function(){var e={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var i=c(o);if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)){if(o.length){var a=r.apply(null,o);a&&t.push(a)}}else if("object"===i)if(o.toString===Object.prototype.toString)for(var u in o)e.call(o,u)&&o[u]&&t.push(u);else t.push(o.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()}));function s(e){var r=e.className,n=e.disabled,o=e.href,i=e.onClick,a=e.size,c=e.text,u=l("bruce-button-component",r,a);return o?t.createElement("a",{className:u,href:o},c):t.createElement("button",{className:u,disabled:n,onClick:i},c)}function f(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,c,"next",t)}function c(t){f(i,n,o,a,c,"throw",t)}a(void 0)}))}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}s.propTypes={className:n.string,disabled:n.bool,href:n.string,onClick:n.func,size:n.oneOf(["small","middle","large"]),text:n.string},s.defaultProps={className:"",disabled:!1,href:"",onClick:null,size:"middle",text:"按钮"};var y=u((function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===m)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?y:p,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h="suspendedStart",p="suspendedYield",m="executing",y="completed",d={};function v(){}function g(){}function w(){}var b={};b[i]=function(){return this};var x=Object.getPrototypeOf,E=x&&x(x(j([])));E&&E!==r&&n.call(E,i)&&(b=E);var N=w.prototype=v.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,u){var l=f(t[o],t,i);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"===c(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(l.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=N.constructor=w,w.constructor=g,g.displayName=l(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(N),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(N),l(N,u,"Generator"),N[i]=function(){return this},N.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function d(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){d(i,n,o,a,c,"next",t)}function c(t){d(i,n,o,a,c,"throw",t)}a(void 0)}))}}function g(t){return(g="function"==typeof Symbol&&"symbol"==c(Symbol.iterator)?function(t){return c(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":c(t)})(t)}var w,b=(function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?m:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",y={};function d(){}function v(){}function w(){}var b={};b[i]=function(){return this};var x=Object.getPrototypeOf,E=x&&x(x(j([])));E&&E!==r&&n.call(E,i)&&(b=E);var N=w.prototype=d.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===g(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=N.constructor=w,w.constructor=v,v.displayName=u(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,c,"GeneratorFunction")),t.prototype=Object.create(N),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(N),u(N,c,"Generator"),N[i]=function(){return this},N.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}(w={exports:{}}),w.exports);function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Promise.resolve(!0);return t&&t instanceof Promise?t.then((function(t){return[null,t]})).catch((function(t){return[t]})):[null,null]}function E(){return N.apply(this,arguments)}function N(){return(N=v(b.mark((function t(){var e,r=arguments;return b.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1e3,t.abrupt("return",new Promise((function(t){return setTimeout((function(){return t(!0)}),e)})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(e){var r=e.children,n=e.className,o=e.handler,i=e.onClose,a=e.title,c=l("bruce-modal-component",n),u=null!=o&&o.length?o:null;return t.createElement("div",{className:c},t.createElement("div",{className:"bruce-modal-wrapper",onClick:function(t){return t.stopPropagation()}},t.createElement("h3",{className:"bruce-modal-title"},a,t.createElement("i",{className:"bruce-modal-close-btn",onClick:i})),t.createElement("div",{className:"bruce-modal-body"},t.createElement("div",{className:"bruce-modal-custom"},r),t.createElement("div",{className:"bruce-modal-btns"},u))))}function k(){var r=m(e(!1),2),o=r[0],a=r[1],c=m(e(!1),2),u=c[0],f=c[1],p=function(){var t=h(y.mark((function t(){return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!1),t.next=3,E(300);case 3:a(!1);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function d(e){var r=e.children,n=e.className,a=e.onConfirm,c=e.title,f=l(n,{hide:!u,show:u}),h=[t.createElement(s,{key:"confirm",text:"确定",onClick:function(){p(),a&&a()}})];return o&&i(t.createElement(L,{className:f,title:c,handler:h,onClose:p},r),document.body)}return d.propTypes={children:n.element,className:n.string,onConfirm:n.func,title:n.string},d.defaultProps={children:null,className:"",onConfirm:null,title:"警告模态框"},[d,function(){f(!0),a(!0)},p]}function C(){var r=m(e(!1),2),o=r[0],a=r[1],c=m(e(!1),2),u=c[0],f=c[1],p=function(){var t=h(y.mark((function t(){return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!1),t.next=3,E(300);case 3:a(!1);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function d(e){var r=e.children,n=e.className,a=e.onCancel,c=e.onConfirm,f=e.title,h=l(n,{hide:!u,show:u}),m=[t.createElement(s,{key:"cancel",className:"muted",text:"取消",onClick:function(){p(),a&&a()}}),t.createElement(s,{key:"confirm",text:"确定",onClick:function(){p(),c&&c()}})];return o&&i(t.createElement(L,{className:h,title:f,handler:m,onClose:p},r),document.body)}return d.propTypes={children:n.element,className:n.string,onCancel:n.func,onConfirm:n.func,title:n.string},d.defaultProps={children:null,className:"",onCancel:null,onConfirm:null,title:"对话模态框"},[d,function(){f(!0),a(!0)},p]}function O(){var r=m(e(!1),2),o=r[0],a=r[1],c=m(e(!1),2),u=c[0],s=c[1],f=function(){var t=h(y.mark((function t(){return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!1),t.next=3,E(300);case 3:a(!1);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function p(e){var r=e.children,n=e.className,a=e.handler,c=e.title,s=l(n,{hide:!u,show:u});return o&&i(t.createElement(L,{className:s,title:c,handler:a,onClose:f},r),document.body)}return p.propTypes={children:n.element,className:n.string,handler:n.arrayOf(n.element),title:n.string},p.defaultProps={children:null,className:"",handler:[],title:"模态框"},[p,function(){s(!0),a(!0)},f]}function S(t){return _.apply(this,arguments)}function _(){return(_=h(y.mark((function e(n){var i,c,u,l,f,p,m,d,v,g,w;return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.onConfirm,c=void 0===i?null:i,u=n.text,l=void 0===u?"警告":u,f=n.title,p=void 0===f?"警告模态框":f,m=function(){var t=h(y.mark((function t(){return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(r(g,{className:"hide"}),w),t.next=3,E(300);case 3:a(w),w.remove();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){m(),c&&c()},v=[t.createElement(s,{key:"confirm",text:"确定",onClick:d})],g=t.createElement(L,{className:"show",title:p,handler:v,onClose:m},t.createElement("p",null,l)),w=document.createElement("div"),document.body.append(w),o(g,w);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(t){return P.apply(this,arguments)}function P(){return(P=h(y.mark((function e(n){var i,c,u,l,f,p,m,d,v,g,w,b,x,N;return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.onCancel,c=void 0===i?null:i,u=n.onConfirm,l=void 0===u?null:u,f=n.text,p=void 0===f?"对话":f,m=n.title,d=void 0===m?"对话模态框":m,v=function(){var t=h(y.mark((function t(){return y.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(r(x,{className:"hide"}),N),t.next=3,E(300);case 3:a(N),N.remove();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){v(),c&&c()},w=function(){v(),l&&l()},b=[t.createElement(s,{key:"cancel",className:"muted",text:"取消",onClick:g}),t.createElement(s,{key:"confirm",text:"确定",onClick:w})],x=t.createElement(L,{className:"show",title:d,handler:b,onClose:v},t.createElement("p",null,p)),N=document.createElement("div"),document.body.append(N),o(x,N);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(t){return G.apply(this,arguments)}function G(){return(G=h(y.mark((function e(i){var c,u,s,f,p,d,v;return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=i.text,u=void 0===c?"":c,s=new Promise(function(){var e=h(y.mark((function e(i){var c,s;return y.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=function(e){var r=e.className,n=l("bruce-modal-component",r);return t.createElement("div",{className:n},t.createElement("div",{className:"bruce-modal-toast"},u))}).propTypes={className:n.string},c.defaultProps={className:""},s=document.createElement("div"),document.body.append(s),o(t.createElement(c,{className:"show"}),s),e.next=9,E(2e3);case 9:return o(r(t.createElement(c,null),{className:"hide"}),s),e.next=12,E(300);case 12:a(s),s.remove(),i(!0);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,x(s);case 4:return f=e.sent,p=m(f,2),d=p[0],v=p[1],e.abrupt("return",!d&&v);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}L.propTypes={children:n.element,className:n.string,handler:n.arrayOf(n.element),onClose:n.func,title:n.string},L.defaultProps={children:null,className:"",handler:[],onClose:null,title:"模态框"};export{s as Button,L as Modal,S as actionAlert,j as actionDialog,T as actionToast,k as useAlert,C as useDialog,O as useModal};