#!/usr/bin/env node
var s;import{dirname as e}from"path";import{argv as t,exit as o,version as a}from"process";import{fileURLToPath as i}from"url";import{ReadJson as l}from"@yangzw/bruce-us/dist/node.js";import{Command as n}from"commander";import p from"semver";import{ACTION_TEXT as r,CMD_TEXT as d}from"./langs/index.js";import{Create as u}from"./libs/index.js";p.lt(a,"v16.0.0")&&(console.log(d.judgeNode),o(1));const E=new n,h=e(i(import.meta.url)),{version:I="1.0.0"}=null!==(s=l("../package.json",h))&&void 0!==s?s:{};E.name(d.cmd).usage("<command>").description(d.desc).version(d.version(I),"-v, --version",r.version).helpOption("-h, --help",r.help).addHelpCommand(!1),E.command("create").alias("c").description(r.create).action(u),E.command("transform").alias("t").description(r.transform).action((()=>console.log("转换"))),E.parse(t);