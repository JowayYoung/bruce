import{dirname as o}from"node:path";import{fileURLToPath as l}from"node:url";import{CopyDir as es,RemoveDir as eo}from"@yangzw/bruce-us/dist/node.js";import Be from"chalk";import Me from"figures";import no from"ora";const to=no("文件正在复制中......").start(),N=o(l(import.meta.url));eo("../dist/assets",N),es({dist:"../../dist/assets",distDir:N,src:"../assets",srcDir:N}),to.stop(),console.log(Be.greenBright(`${Me.tick} 文件复制成功`));