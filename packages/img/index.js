#!/usr/bin/env node
import { dirname } from "path";
import { argv, exit, version } from "process";
import { fileURLToPath } from "url";
import { ReadJson } from "@yangzw/bruce-us/dist/node.js";
import { Command } from "commander/esm.mjs";
import Semver from "semver";
import UpdateNotifier from "update-notifier";

import { ACTION_TEXT, CMD_TEXT } from "./constants/i18n/index.js";
import { GROUP_TEST, TRANSFORM_TEST, AutoBin, ShowMsg } from "./constants/util/index.js";

(async() => {
	if (Semver.lt(version, "v16.0.0")) {
		ShowMsg("red", CMD_TEXT.judge);
		return exit(1);
	}
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const program = new Command();
	const pkg = ReadJson("./package.json", __dirname);
	UpdateNotifier({ pkg }).notify();
	program
		.name(CMD_TEXT.name)
		.usage("<command> [option]") // <>表示必选，[]表示可选
		.description(CMD_TEXT.desc)
		.version(CMD_TEXT.version(pkg.version), "-v, --version", ACTION_TEXT.version)
		.helpOption("-h, --help", ACTION_TEXT.help)
		.addHelpCommand(false);
	program
		.command("compress")
		.alias("c")
		.description(ACTION_TEXT.compress)
		.action(() => AutoBin("compress"));
	program
		.command("group")
		.alias("g")
		.option("-t, --type [val]", ACTION_TEXT.groupType, GROUP_TEST.type, "format")
		.description(ACTION_TEXT.group)
		.action(cmd => AutoBin("group", cmd));
	program
		.command("mark")
		.alias("m")
		.description(ACTION_TEXT.mark)
		.action(() => AutoBin("mark"));
	program
		.command("transform")
		.alias("t")
		.option("-b, --blur [val]", ACTION_TEXT.transformBlur, TRANSFORM_TEST.blur, "")
		.option("-e, --extract [val]", ACTION_TEXT.transformExtract, TRANSFORM_TEST.extract, "")
		.option("-fi, --flip [val]", ACTION_TEXT.transformFlip, TRANSFORM_TEST.flip, "")
		.option("-fo, --flop [val]", ACTION_TEXT.transformFlop, TRANSFORM_TEST.flop, "")
		.option("-f, --format [val]", ACTION_TEXT.transformFormat, TRANSFORM_TEST.format, "")
		.option("-g, --grayscale [val]", ACTION_TEXT.transformGrayscale, TRANSFORM_TEST.grayscale, "")
		.option("-ne, --negate [val]", ACTION_TEXT.transformNegate, TRANSFORM_TEST.negate, "")
		.option("-no, --normalise [val]", ACTION_TEXT.transformNormalise, TRANSFORM_TEST.normalise, "")
		.option("-re, --resize [val]", ACTION_TEXT.transformResize, TRANSFORM_TEST.resize, "")
		.option("-ro, --rotate [val]", ACTION_TEXT.transformRotate, TRANSFORM_TEST.rotate, "")
		.option("-s, --sharpen [val]", ACTION_TEXT.transformSharpen, TRANSFORM_TEST.sharpen, "")
		.description(ACTION_TEXT.transform)
		.action(cmd => AutoBin("transform", cmd));
	program.parse(argv);
})();