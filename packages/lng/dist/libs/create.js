var x=this&&this.__awaiter||function(o,t,e,n){return new(e||(e=Promise))((function(r,i){function a(o){try{c(n.next(o))}catch(o){i(o)}}function s(o){try{c(n.throw(o))}catch(o){i(o)}}function c(o){var t;o.done?r(o.value):(t=o.value,t instanceof e?t:new e((function(o){o(t)}))).then(a,s)}c((n=n.apply(o,t||[])).next())}))};import{exit as s}from"node:process";import{AbsPath as S}from"@yangzw/bruce-us/dist/node.js";import Rt from"exceljs";import no from"ora";import{CreateAnswer as be}from"../helpers/index.js";import{CREATE_TEXT as h}from"../langs/index.js";import{LANG_TEXT as Wt,ShowTitle as io}from"../utils/index.js";export default function u(){return x(this,void 0,void 0,(function*(){io("create");const{cover:o,features:t,jsons:e,langs:n}=yield be();!o&&s(1);const r=no(h.doing).start(),i=new Rt.Workbook,a={bold:!0,color:{argb:"ff333333"},family:3,name:"Microsoft YaHei",size:14};i.creator="JowayYoung",e.length?e.forEach((o=>{var t;const e=i.addWorksheet(o.name,{views:[{state:"frozen",xSplit:1,ySplit:1}]}),r=Object.entries(o.text),s=r.length>199?r.length+51:200;e.addRow(n),r.forEach((o=>e.addRow(n.map((t=>o[1][t]))))),r.length>199&&[...new Array(50).keys()].forEach((()=>e.addRow([]))),n.forEach(((o,t)=>{e.getColumn(t+1).width=50})),(null!==(t=e.getRows(1,s))&&void 0!==t?t:[]).forEach(((o,t)=>{o.alignment={horizontal:"center",vertical:"middle"},o.height=30,o.font=0===t?Object.assign(Object.assign({},a),{color:{argb:"ffff6666"}}):a}))})):t.forEach((o=>{var t;const e=i.addWorksheet(o,{views:[{state:"frozen",xSplit:1,ySplit:1}]});e.addRow(n),e.addRow(n.map((o=>Wt[o]))),[...new Array(198).keys()].forEach((()=>e.addRow([]))),n.forEach(((o,t)=>{e.getColumn(t+1).width=50})),(null!==(t=e.getRows(1,200))&&void 0!==t?t:[]).forEach(((o,t)=>{o.alignment={horizontal:"center",vertical:"middle"},o.height=30,o.font=0===t?Object.assign(Object.assign({},a),{color:{argb:"ffff6666"}}):a}))})),yield i.xlsx.writeFile(S("i18n.xlsx")),r.stop(),console.log(h.done),s(1)}))}