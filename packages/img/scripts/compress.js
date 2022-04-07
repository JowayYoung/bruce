import { readFileSync, statSync, writeFileSync } from "fs";
import { request } from "https";
import { basename, join } from "path";
import { exit } from "process";
import { URL } from "url";
import { CreateDir, RandomNum, RemoveDir } from "@yangzw/bruce-us/dist/node.js";
import Ora from "ora";

import { COMPRESS_TEXT } from "../constants/i18n/index.js";
import {
	OUTPUT_DIR,
	TINYIMG_URL,
	FilterImg,
	FormatExt,
	ShowMsg,
	ShowTitle
} from "../constants/util/index.js";

async function CompressImg(path = "") {
	try {
		const obj = await UploadImg(path);
		const data = await DownloadImg(obj.output.url);
		const dir = join(OUTPUT_DIR.compress, path.replace(basename(path), ""));
		const dpath = join(OUTPUT_DIR.compress, FormatExt(path));
		CreateDir(dir);
		writeFileSync(dpath, data, "binary");
		return Promise.resolve(COMPRESS_TEXT.result1(path, obj));
	} catch (e) {
		return Promise.resolve(COMPRESS_TEXT.result2(path, e.message));
	}
}

function DownloadImg(url = "") {
	const opts = new URL(url);
	return new Promise((resolve, reject) => {
		const req = request(opts, res => {
			let file = "";
			res.setEncoding("binary");
			res.on("data", chunk => file += chunk);
			res.on("end", () => resolve(file));
		});
		req.on("error", e => reject(e));
		req.end();
	});
}

function RandomHeader() {
	const ip = new Array(4).fill(0).map(() => parseInt(Math.random() * 255)).join(".");
	const index = RandomNum(0, 1);
	return {
		headers: {
			"Cache-Control": "no-cache",
			"Content-Type": "application/x-www-form-urlencoded",
			"Postman-Token": Date.now(),
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
			"X-Forwarded-For": ip
		},
		hostname: TINYIMG_URL[index],
		method: "POST",
		path: "/web/shrink",
		rejectUnauthorized: false
	};
}

function UploadImg(path = "") {
	const file = readFileSync(path, "binary");
	const opts = RandomHeader();
	return new Promise((resolve, reject) => {
		if (statSync(path).size >= 1024 ** 2 * 5) {
			reject(new Error(COMPRESS_TEXT.limit));
		} else {
			const req = request(opts, res => res.on("data", data => {
				const obj = JSON.parse(data.toString());
				obj.error ? reject(obj.message) : resolve(obj);
			}));
			req.write(file, "binary");
			req.on("error", e => reject(e));
			req.end();
		}
	});
}

export default function Compress() {
	ShowTitle("compress");
	RemoveDir(OUTPUT_DIR.compress);
	CreateDir(OUTPUT_DIR.compress);
	const spinner = Ora(COMPRESS_TEXT.doing).start();
	const { count, imgs } = FilterImg();
	const promise = imgs.map(v => CompressImg(v));
	Promise.all(promise).then(res => {
		spinner.stop();
		ShowMsg("green", COMPRESS_TEXT.stats(count));
		res.forEach(v => console.log(v));
		ShowMsg("green", COMPRESS_TEXT.done);
		exit(1);
	});
}