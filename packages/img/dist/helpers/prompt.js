var x=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(o,u){function l(e){try{r(n.next(e))}catch(e){u(e)}}function i(e){try{r(n.throw(e))}catch(e){u(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,i)}r((n=n.apply(e,t||[])).next())}))};import{input as Oe,select as ze}from"@inquirer/prompts";import{MARK_TEXT as kt}from"../langs/index.js";import{MARK_REGEXP as Lt}from"../utils/index.js";function bt(){return x(this,void 0,void 0,(function*(){return yield ze({choices:[{name:"add",value:"add"},{name:"atop",value:"atop"},{name:"clear",value:"clear"},{name:"color-burn",value:"color-burn"},{name:"color-dodge",value:"color-dodge"},{name:"colour-burn",value:"colour-burn"},{name:"colour-dodge",value:"colour-dodge"},{name:"darken",value:"darken"},{name:"dest",value:"dest"},{name:"dest-atop",value:"dest-atop"},{name:"dest-in",value:"dest-in"},{name:"dest-out",value:"dest-out"},{name:"dest-over",value:"dest-over"},{name:"difference",value:"difference"},{name:"exclusion",value:"exclusion"},{name:"hard-light",value:"hard-light"},{name:"in",value:"in"},{name:"lighten",value:"lighten"},{name:"multiply",value:"multiply"},{name:"out",value:"out"},{name:"over",value:"over"},{name:"overlay",value:"overlay"},{name:"saturate",value:"saturate"},{name:"screen",value:"screen"},{name:"soft-light",value:"soft-light"},{name:"source",value:"source"},{name:"xor",value:"xor"}],default:"over",message:kt.blend})}))}function xt(){return x(this,void 0,void 0,(function*(){return yield Oe({default:"#000",message:kt.color,validate:(e="")=>!!Lt.color.test(e)||kt.checkColor})}))}function jt(){return x(this,void 0,void 0,(function*(){return yield Oe({default:"JowayYoung",message:kt.label,validate:(e="")=>!!Lt.text.test(e)||kt.checkLabel})}))}function _t(){return x(this,void 0,void 0,(function*(){return yield Oe({default:"10",message:kt.left,validate:(e="")=>!!Lt.left.test(e)||kt.checkLeft})}))}function zt(){return x(this,void 0,void 0,(function*(){return yield ze({choices:[{name:"自定义",value:"none"},{name:"中",value:"center"},{name:"左",value:"west"},{name:"右",value:"east"},{name:"上",value:"north"},{name:"下",value:"south"},{name:"左上",value:"northwest"},{name:"左下",value:"southwest"},{name:"右上",value:"northeast"},{name:"右下",value:"southeast"}],default:"none",message:kt.position})}))}function Ot(){return x(this,void 0,void 0,(function*(){return yield Oe({default:"20",message:kt.size,validate:(e="")=>!!Lt.size.test(e)||kt.checkSize})}))}function Pt(){return x(this,void 0,void 0,(function*(){return yield Oe({default:"10",message:kt.top,validate:(e="")=>!!Lt.top.test(e)||kt.checkTop})}))}export{bt as MarkBlendPrompt,xt as MarkColorPrompt,jt as MarkLabelPrompt,_t as MarkLeftPrompt,zt as MarkPositionPrompt,Ot as MarkSizePrompt,Pt as MarkTopPrompt};