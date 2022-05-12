#!/usr/bin/env node
import { dirname } from "path";
import { argv, exit, version } from "process";
import { fileURLToPath } from "url";
import { ReadJson } from "@yangzw/bruce-us/dist/node.js";
import { Command } from "commander/esm.mjs";
import Semver from "semver";
import UpdateNotifier from "update-notifier";

import { ACTION_TEXT, CMD_TEXT } from "./constants/i18n/index.js";
import { OPTS_TEST, AutoBin, ShowMsg } from "./constants/util/index.js";

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
		.usage("[option]")
		.description(CMD_TEXT.desc)
		.version(CMD_TEXT.version(pkg.version), "-v, --version", ACTION_TEXT.version)
		.helpOption("-h, --help", ACTION_TEXT.help)
		.addHelpCommand(false);
	program
		.option("-s, --src [val]", ACTION_TEXT.src, OPTS_TEST.src, "")
		.option("-w, --watch [val]", ACTION_TEXT.watch, OPTS_TEST.watch, false)
		.action(cmd => AutoBin(cmd));
	program.parse(argv);
})();