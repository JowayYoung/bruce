import{statSync as wt}from"fs";import{extname as pe}from"path";import{sync as $t}from"glob";import{AbsPath as $}from"@yangzw/bruce-us/dist/node.js";import{ACTION_TEXT as r}from"../langs/index.js";import{OUTPUT_DIR as mi}from"./getting.js";function ci(e="gif,jpg,png,svg,webp,GIF,JPG,PNG,SVG,WEBP"){const t=Object.values(mi),r=$t(`**/*.{${e}}`).filter((e=>wt($(e)).isFile()&&t.every((t=>!e.includes(t)))));return{count:r.length,imgs:r}}function pi(e=""){return e.replace(/\.gif$/i,".gif").replace(/\.jpg$/i,".jpg").replace(/\.png$/i,".png").replace(/\.svg$/i,".svg").replace(/\.webp$/i,".webp")}function ui(e=""){return pe(e).toLowerCase().replace(/^\./,"")}function so(e){console.log(`##### ${r[e]} #####`)}export{ci as FilterImg,pi as FormatExt,ui as GetExt,so as ShowTitle};