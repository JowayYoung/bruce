#!/usr/bin/env node
var e;import{dirname as o}from"node:path";import{argv as t,exit as s,version as i}from"node:process";import{fileURLToPath as l}from"node:url";import{ReadJson as n}from"@yangzw/bruce-us/dist/node.js";import{Command as p}from"commander";import a from"semver";import{ACTION_TEXT as m,CMD_TEXT as d}from"./langs/index.js";import{Generate as vo,Watch as wo}from"./libs/index.js";import{OPTS_TEST as jo}from"./utils/index.js";a.lt(i,"v18.18.0")&&(console.log(d.judgeNode),s(1));const g=new p,N=o(l(import.meta.url)),{version:z="1.0.0"}=null!==(e=n("../package.json",N))&&void 0!==e?e:{};g.name(d.cmd).usage("[option]").description(d.desc).version(d.version(z),"-v, --version",m.version).helpOption("-h, --help",m.help).helpCommand("help [command]",m.helpCmd),g.option("-i, --input [val]",m.input,jo.input,"").option("-o, --output [val]",m.output,jo.output,"").option("-w, --watch [val]",m.watch,jo.watch,!1).action((o=>o.watch?wo(o):vo(o))),g.parse(t);