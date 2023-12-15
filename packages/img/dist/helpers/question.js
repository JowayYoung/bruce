import{MARK_TEXT as Le}from"../langs/index.js";import{MARK_REGEXP as Ce}from"../utils/index.js";const nn={choices:Le.blendList,default:"over",message:Le.blend,name:"blend",type:"list"},tn={default:"#000",message:Le.color,name:"color",type:"input",validate:(e="")=>!!Ce.color.test(e)||Le.checkColor},on={default:"JowayYoung",message:Le.label,name:"label",type:"input",validate:(e="")=>!!Ce.text.test(e)||Le.checkLabel},en={default:"10",message:Le.left,name:"left",type:"input",validate:(e="")=>!!Ce.left.test(e)||Le.checkLeft},rn={choices:Le.positionList,default:"none",message:Le.position,name:"position",type:"list"},cn={default:"20",message:Le.size,name:"size",type:"input",validate:(e="")=>!!Ce.size.test(e)||Le.checkSize},un={default:"10",message:Le.top,name:"markTop",type:"input",validate:(e="")=>!!Ce.top.test(e)||Le.checkTop};export{nn as MARK_BLEND,tn as MARK_COLOR,on as MARK_LABEL,en as MARK_LEFT,rn as MARK_POSITION,cn as MARK_SIZE,un as MARK_TOP};