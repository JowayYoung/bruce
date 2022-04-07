import { statSync } from "fs";
import Chalk from "chalk";
import Glob from "glob";

import { ACTION_TEXT } from "../i18n/index.js";
import { COMPRESS_EXTS, OUTPUT_DIR } from "./getting.js";

async function AutoBin(name = "", ...arg) {
	const runner = (await import(`../../scripts/${name}.js`)).default;
	runner(...arg);
}

function FilterImg() {
	const ignore = Object.values(OUTPUT_DIR);
	const regexp = `**/*.{${COMPRESS_EXTS.join(",")}}`;
	const imgs = Glob.sync(regexp).filter(v => statSync(v).isFile() && ignore.every(w => !v.includes(w)));
	return { count: imgs.length, imgs };
}

function FormatExt(path = "") {
	const newPath = path.replace(/\.jpe?g$/ig, ".jpg").replace(/\.png$/ig, ".png");
	return newPath;
}

function ShowMsg(color = "green", msg = "") {
	console.log(Chalk[`${color}Bright`](msg));
}

function ShowTitle(type = "") {
	console.log(`##### ${ACTION_TEXT[type]} #####`);
}

export {
	AutoBin,
	FilterImg,
	FormatExt,
	ShowMsg,
	ShowTitle
};