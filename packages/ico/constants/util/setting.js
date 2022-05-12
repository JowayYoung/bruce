import Chalk from "chalk";

async function AutoBin(cmd) {
	const runner = (await import("../../scripts/index.js")).default;
	runner(cmd);
}

function ShowMsg(color = "green", msg = "") {
	console.log(Chalk[`${color}Bright`](msg));
}

export {
	AutoBin,
	ShowMsg
};