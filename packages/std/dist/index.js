#!/usr/bin/env node
var e;import{dirname as o}from"node:path";import{argv as t,exit as s,version as i}from"node:process";import{fileURLToPath as l}from"node:url";import{ReadJson as n}from"@yangzw/bruce-us/dist/node.js";import{Command as p}from"commander";import a from"semver";import{ACTION_TEXT as m,CMD_TEXT as d}from"./langs/index.js";import{Copy as To,Init as O,Update as Uo}from"./libs/index.js";a.lt(i,"v18.18.0")&&(console.log(d.judgeNode),s(1));const g=new p,N=o(l(import.meta.url)),{version:z="1.0.0"}=null!==(e=n("../package.json",N))&&void 0!==e?e:{};g.name(d.cmd).usage("<command>").description(d.desc).version(d.version(z),"-v, --version",m.version).helpOption("-h, --help",m.help).helpCommand("help [command]",m.helpCmd),g.command("copy").alias("c").description(m.copy).action(To),g.command("init").alias("i").description(m.init).action(O),g.command("update").alias("u").description(m.update).action(Uo),g.parse(t);