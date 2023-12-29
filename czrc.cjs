module.exports = {
	messages: {
		body: "说明描述(可用“|”换行)：",
		breaking: "兼容说明：",
		confirmCommit: "确定继续以上的提交吗？",
		customScope: "影响范围：",
		footer: "关联单号：",
		scope: "请选择主要的影响范围：",
		subject: "说明标题：",
		type: "请选择说明的提交类型："
	},
	scopes: [
		{ name: "bruce-app" },
		{ name: "bruce-ico" },
		{ name: "bruce-img" },
		{ name: "bruce-lng" },
		{ name: "bruce-pkg" },
		{ name: "bruce-std" },
		{ name: "bruce-type" },
		{ name: "bruce-ui" },
		{ name: "bruce-us" },
		{ name: "docs" },
		{ name: "配置文件" },
		{ name: "其它影响" }
	],
	subjectSeparator: "：",
	types: [
		{ key: "build", name: "📦 构建：更新构建，修改构建事务或项目依赖", value: "📦构建" },
		{ key: "chore", name: "💼 事务：变动事务，修改其它不影响代码的事务", value: "💼事务" },
		{ key: "cicd", name: "💻 执行：更新执行，修改CICD或执行脚本的配置", value: "💻执行" },
		{ key: "doc", name: "📝 文档：更新文档，修改其它不影响代码的文档", value: "📝文档" },
		{ key: "feat", name: "✨ 功能：增加功能，迭代项目需求", value: "✨功能" },
		{ key: "fix", name: "🔨 修复：修复缺陷，修复上一版本存在的问题", value: "🔨修复" },
		{ key: "merge", name: "🔗 合并：合并分支，合并分支代码到其它分支中", value: "🔗合并" },
		{ key: "optimize", name: "📈 优化：改进功能，升级功能模块", value: "📈优化" },
		{ key: "pfm", name: "⚡️ 性能：优化性能，提高代码的执行性能", value: "⚡️性能" },
		{ key: "refactor", name: "🧬 重构：重构代码，重写原来功能模块", value: "🧬重构" },
		{ key: "revert", name: "⏪ 回滚：回滚版本，撤销代码提交", value: "⏪回滚" },
		{ key: "style", name: "🎨 样式：更新样式，修改其它不影响逻辑的样式", value: "🎨样式" },
		{ key: "sync", name: "🔄 同步：同步分支，同步分支代码到其它分支中", value: "🔄同步" },
		{ key: "test", name: "✅ 测试：更新测试，修改测试用例验证的代码", value: "✅测试" }
	]
};