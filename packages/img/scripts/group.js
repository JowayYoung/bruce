import { createReadStream, createWriteStream, existsSync, statSync } from "fs";
import { basename, extname, join } from "path";
import { exit } from "process";
import { CreateDir, RandomId, RemoveDir, WaitFor } from "@yangzw/bruce-us/dist/node.js";
import ImageSize from "image-size";
import Ora from "ora";

import { GROUP_TEXT } from "../constants/i18n/index.js";
import { OUTPUT_DIR, VOLUME_RANGE, FilterImg, FormatExt, ShowMsg, ShowTitle } from "../constants/util/index.js";

const formatDir = {
	jpg: join(OUTPUT_DIR.group, "jpg"),
	png: join(OUTPUT_DIR.group, "png")
};

const volumeDir = {
	big: join(OUTPUT_DIR.group, "big"),
	middle: join(OUTPUT_DIR.group, "middle"),
	small: join(OUTPUT_DIR.group, "small")
};

const groupMap = {
	format: GroupForFormat,
	size: GroupForSize,
	volume: GroupForVolume
};

function CopyFile(path = "", dir = "") {
	return new Promise(resolve => {
		const dpath = join(dir, FormatExt(basename(path)));
		CreateDir(dir);
		if (existsSync(dpath)) {
			const filename = basename(path).split(".");
			const ext = filename.pop();
			const name = filename.concat(RandomId(4), ext).join(".");
			const _dpath = dpath.replace(basename(path), name);
			createReadStream(path).pipe(createWriteStream(_dpath));
		} else {
			createReadStream(path).pipe(createWriteStream(dpath));
		}
		resolve(true);
	});
}

async function GroupForFormat(path = "") {
	const ext = extname(path).replace(/(^\.|e)/ig, "").toLowerCase();
	const dir = formatDir[ext];
	await CopyFile(path, dir);
	return Promise.resolve(GROUP_TEXT.result1(path));
}

async function GroupForSize(path = "") {
	const { height, width } = ImageSize(path);
	const dir = join(OUTPUT_DIR.group, `${width}x${height}`);
	await CopyFile(path, dir);
	return Promise.resolve(GROUP_TEXT.result2(path));
}

async function GroupForVolume(path = "") {
	const { size } = statSync(path);
	const volume = size < VOLUME_RANGE.small ? "small" : size >= VOLUME_RANGE.big ? "big" : "middle";
	const dir = volumeDir[volume];
	await CopyFile(path, dir);
	if (volume === "small") return Promise.resolve(GROUP_TEXT.result3(path));
	if (volume === "middle") return Promise.resolve(GROUP_TEXT.result4(path));
	if (volume === "big") return Promise.resolve(GROUP_TEXT.result5(path));
}

export default function Group(cmd = {}) {
	ShowTitle("group");
	RemoveDir(OUTPUT_DIR.group);
	CreateDir(OUTPUT_DIR.group);
	const spinner = Ora(GROUP_TEXT.doing).start();
	const { count, imgs } = FilterImg();
	const promise = imgs.map(v => groupMap[cmd.type](v));
	Promise.all(promise).then(async(res) => {
		await WaitFor(2000);
		spinner.stop();
		ShowMsg("green", GROUP_TEXT.stats(count));
		res.forEach(v => console.log(v));
		ShowMsg("green", GROUP_TEXT.done);
		exit(1);
	});
}