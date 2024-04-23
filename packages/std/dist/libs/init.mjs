var x=this&&this.__awaiter||function(t,n,e,a){return new(e||(e=Promise))((function(o,i){function s(t){try{m(a.next(t))}catch(t){i(t)}}function c(t){try{m(a.throw(t))}catch(t){i(t)}}function m(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,c)}m((a=a.apply(t,n||[])).next())}))};import{writeFileSync as fe}from"node:fs";import{exit as s}from"node:process";import{AbsPath as S,CheckPath as Ke,ReadJson as n,RunCmd as jn}from"@yangzw/bruce-us/dist/node.js";import no from"ora";import{INIT_TEXT as mo}from"../langs/index.mjs";import{ShowTitle as io}from"../utils/index.mjs";const Dt="root = true\n\n[*]\ncharset = utf-8\nend_of_line = lf\nindent_size = 4\nindent_style = tab\ninsert_final_newline = false\nmax_line_length = off\ntrim_trailing_whitespace  = true\n\n[*.{yaml,yml}]\nindent_size = 2\nindent_style = space",It='module.exports = {\n\tmessages: {\n\t\tbody: "说明描述(可用“|”换行)：",\n\t\tbreaking: "兼容说明：",\n\t\tconfirmCommit: "确定继续以上的提交吗？",\n\t\tcustomScope: "影响范围：",\n\t\tfooter: "关联单号：",\n\t\tscope: "请选择主要的影响范围：",\n\t\tsubject: "说明标题：",\n\t\ttype: "请选择说明的提交类型："\n\t},\n\tscopes: [\n\t\t{ name: "业务接口-apis" },\n\t\t{ name: "业务资源-assets" },\n\t\t{ name: "业务组件-components" },\n\t\t{ name: "业务钩子-hooks" },\n\t\t{ name: "业务语言-langs" },\n\t\t{ name: "业务数据-stores" },\n\t\t{ name: "业务类型-types" },\n\t\t{ name: "业务工具-utils" },\n\t\t{ name: "配置文件" },\n\t\t{ name: "其它影响" }\n\t],\n\tsubjectSeparator: "：",\n\ttypes: [\n\t\t{ key: "build", name: "📦 构建：更新构建，修改构建事务或项目依赖", value: "📦构建" },\n\t\t{ key: "chore", name: "💼 事务：变动事务，修改其它不影响代码的事务", value: "💼事务" },\n\t\t{ key: "cicd", name: "💻 执行：更新执行，修改CICD或执行脚本的配置", value: "💻执行" },\n\t\t{ key: "doc", name: "📝 文档：更新文档，修改其它不影响代码的文档", value: "📝文档" },\n\t\t{ key: "feat", name: "✨ 功能：增加功能，迭代项目需求", value: "✨功能" },\n\t\t{ key: "fix", name: "🔨 修复：修复缺陷，修复上一版本存在的问题", value: "🔨修复" },\n\t\t{ key: "merge", name: "🔗 合并：合并分支，合并分支代码到其它分支中", value: "🔗合并" },\n\t\t{ key: "optimize", name: "📈 优化：改进功能，升级功能模块", value: "📈优化" },\n\t\t{ key: "pfm", name: "⚡️ 性能：优化性能，提高代码的执行性能", value: "⚡️性能" },\n\t\t{ key: "refactor", name: "🧬 重构：重构代码，重写原来功能模块", value: "🧬重构" },\n\t\t{ key: "revert", name: "⏪ 回滚：回滚版本，撤销代码提交", value: "⏪回滚" },\n\t\t{ key: "style", name: "🎨 样式：更新样式，修改其它不影响逻辑的样式", value: "🎨样式" },\n\t\t{ key: "sync", name: "🔄 同步：同步分支，同步分支代码到其它分支中", value: "🔄同步" },\n\t\t{ key: "test", name: "✅ 测试：更新测试，修改测试用例验证的代码", value: "✅测试" }\n\t]\n};';export default function O(){return x(this,void 0,void 0,(function*(){io("init"),Ke("package.json")||(console.log(mo.judgePackage),s(1));const t=no(mo.doing).start();let e=n("package.json");(null==e?void 0:e.scripts)?e.scripts.commit="git add --all . && git-cz":e=Object.assign(null!=e?e:{},{scripts:{commit:"git add --all . && git-cz"}}),(null==e?void 0:e.config)?e.config["cz-customizable"]={config:"czrc.cjs"}:e=Object.assign(null!=e?e:{},{config:{"cz-customizable":{config:"czrc.cjs"}}}),fe(S(".editorconfig"),Dt,"utf-8"),fe(S("czrc.cjs"),It,"utf-8"),fe(S("package.json"),JSON.stringify(e,null,"\t"),"utf-8"),jn("npm i -g commitizen cz-customizable"),t.stop(),console.log(mo.done),s(1)}))}