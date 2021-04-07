#!/usr/bin/env node

import Chalk from "chalk";
import Commander from "commander";
import LatestVersion from "latest-version";
import Semver from "semver";

import { ACTION_TEXT, GLOB_TEXT } from "../i18n/index.js";
import Locale from "../lib/locale.js";
import Remove from "../lib/remove.js";
import { ShowMsg } from "../util/setting.js";

const { blueBright, greenBright, yellowBright } = Chalk;
const { lt, neq } = Semver;
const version = "0.0.1";

(async() => {
	const tgtVersion = await LatestVersion("bruce-cli");
	if (lt(process.version, "v14.0.0")) {
		ShowMsg("red", GLOB_TEXT.judgeVerNode);
		process.exit(1);
	}
	if (neq(version, tgtVersion)) {
		ShowMsg("red", GLOB_TEXT.judgeVerBruce);
	}
	// 版本和用法
	Commander
		.usage(yellowBright("<command> [option]"))
		.version(version, "-v, --version", greenBright(GLOB_TEXT.version))
		.helpOption("-h, --help", greenBright(GLOB_TEXT.help))
		.description(GLOB_TEXT.desc);
	// 构建项目
	Commander
		.command("build")
		.alias("b")
		.description(blueBright(ACTION_TEXT.build))
		.action(() => console.log("build"));
	// 初始项目
	Commander
		.command("init")
		.alias("i")
		.description(blueBright(ACTION_TEXT.init))
		.action(() => console.log("init"));
	// 切换语言
	Commander
		.command("locale")
		.alias("l")
		.description(blueBright(ACTION_TEXT.locale))
		.action(Locale);
	// 创建组件
	Commander
		.command("new")
		.alias("n")
		.description(blueBright(ACTION_TEXT.new))
		.action(() => console.log("new"));
	// 删除依赖
	Commander
		.command("remove")
		.alias("r")
		.description(blueBright(ACTION_TEXT.remove))
		.action(Remove);
	// 帮助
	Commander.parse(process.argv);
})();