import Chalk from "chalk";

import { ACTION_TEXT } from "../i18n/index.js";

async function AutoBin(name = "") {
	const runner = (await import(`../../scripts/${name}.js`)).default;
	runner();
}

function ShowMsg(color = "green", msg = "") {
	console.log(Chalk[`${color}Bright`](msg));
}

function ShowTitle(type = "") {
	console.log(`##### ${ACTION_TEXT[type]} #####`);
}

export {
	AutoBin,
	ShowMsg,
	ShowTitle
};