import { basename, join } from "path";
import { exit } from "process";
import { CreateDir, RemoveDir, WaitFor } from "@yangzw/bruce-us/dist/node.js";
import Ora from "ora";
import Sharp from "sharp";
import TextToSvg from "text-to-svg";

import { MARK_TEXT } from "../constants/i18n/index.js";
import { OUTPUT_DIR, FilterImg, FormatExt, ShowMsg, ShowTitle } from "../constants/util/index.js";
import { MarkAnswer } from "../helpers/answer/index.js";

async function MarkImg(path = "", opts = {}) {
	const { markBlend, markColor, markLeft, markPosition, markSize, markText, markTop } = opts;
	const dir = join(OUTPUT_DIR.mark, path.replace(basename(path), ""));
	const dpath = join(OUTPUT_DIR.mark, FormatExt(path));
	CreateDir(dir);
	const composeOpt = Object.assign({
		blend: markBlend,
		input: ParseText({
			color: markColor,
			size: markSize,
			text: markText
		})
	}, markPosition === "none" ? {
		left: +markLeft,
		top: +markTop
	} : { gravity: markPosition });
	try {
		await Sharp(path).composite([composeOpt]).toFile(dpath);
		return Promise.resolve(MARK_TEXT.result1(path, markText));
	} catch (e) {
		return Promise.resolve(MARK_TEXT.result2(path, e.message));
	}
}

function ParseText({ color, size, text } = {}) {
	const t2s = TextToSvg.loadSync();
	const opts = {
		anchor: "top",
		attributes: { fill: color },
		fontSize: +size
	};
	const svg = t2s.getSVG(text, opts);
	return Buffer.from(svg);
}

export default async function Mark() {
	ShowTitle("mark");
	const answer = await MarkAnswer();
	RemoveDir(OUTPUT_DIR.mark);
	CreateDir(OUTPUT_DIR.mark);
	const spinner = Ora(MARK_TEXT.doing).start();
	const { count, imgs } = FilterImg();
	const promise = imgs.map(v => MarkImg(v, answer));
	Promise.all(promise).then(async(res) => {
		await WaitFor(2000);
		spinner.stop();
		ShowMsg("green", MARK_TEXT.stats(count));
		res.forEach(v => console.log(v));
		ShowMsg("green", MARK_TEXT.done);
		exit(1);
	});
}