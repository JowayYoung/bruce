var g=this&&this.__awaiter||function(e,a,t,n){return new(t||(t=Promise))((function(o,u){function r(e){try{i(n.next(e))}catch(e){u(e)}}function l(e){try{i(n.throw(e))}catch(e){u(e)}}function i(e){var a;e.done?o(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(r,l)}i((n=n.apply(e,a||[])).next())}))};import{input as ke,select as Oe}from"@inquirer/prompts";import{MARK_TEXT as ea}from"../langs/index.js";import{MARK_REGEXP as aa}from"../utils/index.js";function Mt(){return g(this,void 0,void 0,(function*(){return yield Oe({choices:[{name:"add",value:"add"},{name:"atop",value:"atop"},{name:"clear",value:"clear"},{name:"color-burn",value:"color-burn"},{name:"color-dodge",value:"color-dodge"},{name:"colour-burn",value:"colour-burn"},{name:"colour-dodge",value:"colour-dodge"},{name:"darken",value:"darken"},{name:"dest",value:"dest"},{name:"dest-atop",value:"dest-atop"},{name:"dest-in",value:"dest-in"},{name:"dest-out",value:"dest-out"},{name:"dest-over",value:"dest-over"},{name:"difference",value:"difference"},{name:"exclusion",value:"exclusion"},{name:"hard-light",value:"hard-light"},{name:"in",value:"in"},{name:"lighten",value:"lighten"},{name:"multiply",value:"multiply"},{name:"out",value:"out"},{name:"over",value:"over"},{name:"overlay",value:"overlay"},{name:"saturate",value:"saturate"},{name:"screen",value:"screen"},{name:"soft-light",value:"soft-light"},{name:"source",value:"source"},{name:"xor",value:"xor"}],default:"over",message:ea.blend})}))}function xt(){return g(this,void 0,void 0,(function*(){return yield ke({default:"#000",message:ea.color,validate:(e="")=>!!aa.color.test(e)||ea.checkColor})}))}function jt(){return g(this,void 0,void 0,(function*(){return yield ke({default:"JowayYoung",message:ea.label,validate:(e="")=>!!aa.text.test(e)||ea.checkLabel})}))}function Lt(){return g(this,void 0,void 0,(function*(){return yield ke({default:"10",message:ea.left,validate:(e="")=>!!aa.left.test(e)||ea.checkLeft})}))}function _t(){return g(this,void 0,void 0,(function*(){return yield Oe({choices:[{name:"自定义",value:"none"},{name:"中",value:"center"},{name:"左",value:"west"},{name:"右",value:"east"},{name:"上",value:"north"},{name:"下",value:"south"},{name:"左上",value:"northwest"},{name:"左下",value:"southwest"},{name:"右上",value:"northeast"},{name:"右下",value:"southeast"}],default:"none",message:ea.position})}))}function Bt(){return g(this,void 0,void 0,(function*(){return yield ke({default:"20",message:ea.size,validate:(e="")=>!!aa.size.test(e)||ea.checkSize})}))}function Ct(){return g(this,void 0,void 0,(function*(){return yield ke({default:"10",message:ea.top,validate:(e="")=>!!aa.top.test(e)||ea.checkTop})}))}export{Mt as MarkBlendPrompt,xt as MarkColorPrompt,jt as MarkLabelPrompt,Lt as MarkLeftPrompt,_t as MarkPositionPrompt,Bt as MarkSizePrompt,Ct as MarkTopPrompt};