import{CheckPath as He,VerifyPath as ds}from"@yangzw/bruce-us/dist/node.js";import{ACTION_TEXT as r}from"../langs/index.js";const Le={color:/#([0-9A-F]{6}|[0-9A-F]{3})|rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)|rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\)|hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)|hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\)|white/gi,img:/\.(jpg|png|svg|webp)$/,unimg:/^(?!.*\.(jpg|png|svg|webp)$).*/,watch:/^true$/},lo={input:(s="")=>He(s)?s:"#ENOENT",output:(s="")=>ds(s).flag?s:"#INVALID",watch:(s="")=>Le.watch.test(s)};function io(s){console.log(`##### ${r[s]} #####`)}export{Le as DATA_REGEXP,lo as OPTS_TEST,io as ShowTitle};