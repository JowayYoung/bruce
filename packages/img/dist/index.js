#!/usr/bin/env node
var e;import{dirname as t}from"path";import{argv as s,exit as o,version as i}from"process";import{fileURLToPath as l}from"url";import{ReadJson as a}from"@yangzw/bruce-us/dist/node.js";import{Command as n}from"commander";import p from"semver";import{ACTION_TEXT as r,CMD_TEXT as m}from"./langs/index.js";import{Compress as vo,Group as yo,Mark as jo,Transform as xo}from"./libs/index.js";import{GROUP_TEST as bo,TRANSFORM_TEST as Fo}from"./utils/index.js";p.lt(i,"v16.0.0")&&(console.log(m.judgeNode),o(1));const C=new n,g=t(l(import.meta.url)),{version:H="1.0.0"}=null!==(e=a("../package.json",g))&&void 0!==e?e:{};C.name(m.cmd).usage("<command> [option]").description(m.desc).version(m.version(H),"-v, --version",r.version).helpOption("-h, --help",r.help).addHelpCommand(!1),C.command("compress").alias("c").description(r.compress).action(vo),C.command("group").alias("g").option("-t, --type [val]",r.groupType,bo.type,"format").description(r.group).action(yo),C.command("mark").alias("m").description(r.mark).action(jo),C.command("transform").alias("t").option("-b, --blur [val]",r.transformBlur,Fo.blur,0).option("-e, --extract [val]",r.transformExtract,Fo.extract,!1).option("-f, --toFormat [val]",r.transformFormat,Fo.toFormat,"").option("-fi, --flip [val]",r.transformFlip,Fo.flip,!1).option("-fo, --flop [val]",r.transformFlop,Fo.flop,!1).option("-g, --grayscale [val]",r.transformGrayscale,Fo.grayscale,!1).option("-ne, --negate [val]",r.transformNegate,Fo.negate,!1).option("-no, --normalise [val]",r.transformNormalise,Fo.normalise,!1).option("-re, --resize [val]",r.transformResize,Fo.resize,!1).option("-ro, --rotate [val]",r.transformRotate,Fo.rotate,!1).option("-s, --sharpen [val]",r.transformSharpen,Fo.sharpen,void 0).description(r.transform).action(xo),C.parse(s);