#!/usr/bin/env node
var e;import{dirname as t}from"path";import{argv as s,exit as o,version as i}from"process";import{fileURLToPath as l}from"url";import{ReadJson as a}from"@yangzw/bruce-us/dist/node.js";import{Command as n}from"commander";import p from"semver";import{ACTION_TEXT as r,CMD_TEXT as d}from"./langs/index.js";import{Generate as to,Watch as ao}from"./libs/index.js";import{OPTS_TEST as lo}from"./utils/index.js";p.lt(i,"v18.0.0")&&(console.log(d.judgeNode),o(1));const g=new n,H=t(l(import.meta.url)),{version:N="1.0.0"}=null!==(e=a("../package.json",H))&&void 0!==e?e:{};g.name(d.cmd).usage("[option]").description(d.desc).version(d.version(N),"-v, --version",r.version).helpOption("-h, --help",r.help).addHelpCommand(!1),g.option("-i, --input [val]",r.input,lo.input,"").option("-o, --output [val]",r.output,lo.output,"").option("-w, --watch [val]",r.watch,lo.watch,!1).action((o=>o.watch?ao(o):to(o))),g.parse(s);