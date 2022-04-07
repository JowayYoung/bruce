import { basename, join } from "path";
import { exit } from "process";
import { CreateDir, RemoveDir, WaitFor } from "@yangzw/bruce-us/dist/node.js";
import Ora from "ora";
import Sharp from "sharp";

import { TRANSFORM_TEXT } from "../constants/i18n/index.js";
import {
	OUTPUT_DIR,
	FilterImg,
	FormatExt,
	ShowMsg,
	ShowTitle
} from "../constants/util/index.js";

function FormatOpts(cmd = {}) {
	const obj = {
		blur: { cmd: "blur", val: cmd.blur }, // 模糊
		extract: { cmd: "extract", val: cmd.extract }, // 裁剪
		flip: { cmd: "flip", val: cmd.flip }, // 平翻
		flop: { cmd: "flop", val: cmd.flop }, // 对翻
		format: { cmd: "toFormat", val: cmd.format }, // 格式
		grayscale: { cmd: "grayscale", val: cmd.grayscale }, // 灰度
		negate: { cmd: "negate", val: cmd.negate }, // 负片
		normalise: { cmd: "normalise", val: cmd.normalise }, // 对比
		resize: { cmd: "resize", val: cmd.resize }, // 调整
		rotate: { cmd: "rotate", val: cmd.rotate }, // 旋转
		sharpen: { cmd: "sharpen", val: cmd.sharpen } // 锐化
	};
	return Object.entries(obj).reduce((t, v) => (v[1].val && t.push({ name: v[0], ...v[1] }), t), []);
}

async function TransformImg(path = "", opts = []) {
	const dir = join(OUTPUT_DIR.transform, path.replace(basename(path), ""));
	const dpath = join(OUTPUT_DIR.transform, FormatExt(path));
	CreateDir(dir);
	const sharp = opts.reduce((t, v) => Array.isArray(v.val)
		? t[v.cmd](...v.val)
		: v.val === "true" ? t[v.cmd]() : t[v.cmd](v.val)
	, Sharp(path).withMetadata());
	const { val: type } = opts.find(v => v.name === "format") || {};
	try {
		let obj = null;
		if (type) {
			const filename = basename(path).split(".");
			filename.pop();
			const name = filename.concat(type === "jpeg" ? "jpg" : type).join(".");
			const _dpath = dpath.replace(basename(path), name);
			obj = await sharp.toFile(_dpath);
		} else {
			obj = await sharp.toFile(dpath);
		}
		return Promise.resolve(TRANSFORM_TEXT.result1(path, obj));
	} catch (e) {
		return Promise.resolve(TRANSFORM_TEXT.result2(path, e.message));
	}
}

export default function Transform(cmd = {}) {
	ShowTitle("transform");
	const opts = FormatOpts(cmd);
	if (!opts.length) {
		return ShowMsg("red", TRANSFORM_TEXT.empty);
	}
	RemoveDir(OUTPUT_DIR.transform);
	CreateDir(OUTPUT_DIR.transform);
	const spinner = Ora(TRANSFORM_TEXT.doing).start();
	const { count, imgs } = FilterImg();
	const promise = imgs.map(v => TransformImg(v, opts));
	Promise.all(promise).then(async(res) => {
		await WaitFor(2000);
		spinner.stop();
		ShowMsg("green", TRANSFORM_TEXT.stats(count));
		res.forEach(v => console.log(v));
		ShowMsg("green", TRANSFORM_TEXT.done);
		exit(1);
	});
}