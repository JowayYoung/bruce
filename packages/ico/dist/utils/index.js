import{CheckPath as Nt,VerifyPath as ds}from"@yangzw/bruce-us/dist/node.js";import{ACTION_TEXT as r}from"../langs/index.js";const gt={color:/#([0-9A-F]{6}|[0-9A-F]{3})|rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)|rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\)|hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)|hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\)|white/gi,img:/\.(jpg|png|svg|webp)$/,unimg:/^(?!.*\.(jpg|png|svg|webp)$).*/,watch:/^true$/},to={input:(s="")=>Nt(s)?s:"#ENOENT",output:(s="")=>ds(s).flag?s:"#INVALID",watch:(s="")=>gt.watch.test(s)};function Je(s){console.log(`##### ${r[s]} #####`)}export{gt as DATA_REGEXP,to as OPTS_TEST,Je as ShowTitle};