import{exit as o}from"process";import{AbsPath as N,Throttle as co}from"@yangzw/bruce-us/dist/node.js";import fo from"chokidar";import{WATCH_TEXT as uo}from"../langs/index.js";import{ShowTitle as io}from"../utils/index.js";import to from"./generate.js";process.on("SIGINT",(()=>{console.log(uo.undone),o(1)}));export default function ao({input:o="",output:n=""}){io("watch");const e=N(n?`${n}/icons.css`:"icons.css"),s=co((()=>to({alone:!1,input:o,output:n})),1e3);console.log(uo.doing(N(o),e)),fo.watch(o,{ignoreInitial:!0}).on("all",((o,n)=>{"add"===o&&console.log(uo.create(n)),"change"===o&&console.log(uo.update(n)),"unlink"===o&&console.log(uo.remove(n)),s()}))}