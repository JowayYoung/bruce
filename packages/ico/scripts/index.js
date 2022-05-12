import { readdirSync, readFileSync, writeFileSync } from "fs";
import { basename } from "path";
import { AbsPath } from "@yangzw/bruce-us/dist/node.js";
import { lookup } from "mime-types";

import { DATA_REGEXP } from "../constants/util/index.js";

export default function RenderCssIcon(cmd = {}) {
	const { src, watch } = cmd;
	console.log("cmd", cmd);
	const dir = readdirSync(AbsPath(src));
	const css = dir.reduce((t, v) => {
		const path = AbsPath(`${src}/${v}`);
		const name = basename(path).replace(/\.(.+?)$/, "");
		const content = readFileSync(path, "utf8");
		const data = Buffer.from(readFileSync(path)).toString("base64");
		const b64 = `data:${lookup(path)};base64,${data}`;
		// 判断图标色彩类型：单色图标或多色图标
		const colors = [...content.matchAll(DATA_REGEXP.color)].map(v => v[0]);
		const reference = colors.length ? colors[0] : "";
		const isSingleColor = colors.every(v => v === reference);
		const text = isSingleColor
			? `.icon-${name}{background-color:currentColor;-webkit-mask-image:url("${b64}");mask-image:url("${b64}");-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-size:cover;mask-size:cover;}`
			: `.icon-${name}{background-color:transparent;background-image:url("${b64}");background-repeat:no-repeat;background-position:center;background-size:cover;}`;
		return t + text;
	}, ".icon{display:block;width:1em;height:1em;transition:all 300ms;}");
	writeFileSync("icons.css", css, "utf-8");
}