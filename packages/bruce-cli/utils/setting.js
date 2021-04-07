import { dirname, join } from "path";
import { fileURLToPath } from "url";
import Chalk from "chalk";

import { ACTION_TEXT } from "../languages/index.js";

const { white } = Chalk;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function AbsPath(path, mode) {
	// mode：0表示当前项目根目录，1表示Bruce根目录
	const rootDir = mode ? __dirname : process.cwd();
	return join(rootDir, path);
}

function ShowMsg(color, msg) {
	console.log(Chalk[`${color}Bright`](msg));
}

function ShowTitle(type) {
	console.log(white.bgMagenta(`### ${ACTION_TEXT[type]} ###`));
}

export {
	AbsPath,
	ShowMsg,
	ShowTitle
};