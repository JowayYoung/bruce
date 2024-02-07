import { readdirSync, readFileSync, writeFileSync } from "fs";
import { dirname } from "path";
import { argv } from "process";
import { fileURLToPath } from "url";
import { AbsPath, ReadJson } from "@yangzw/bruce-us/dist/node.js";
import Semver from "semver";

const { valid } = Semver;
const root = dirname(fileURLToPath(import.meta.url));
const dirs = readdirSync(AbsPath("../packages", root));
const version = argv[2] || "";

valid(version) ? dirs.forEach((v, i) => {
	const path = `../packages/${v}/package.json`;
	const pkgPath = AbsPath(`../packages/${v}/package.json`, root);
	const docPath = AbsPath(`../docs/src/${v}/index.md`, root);
	const pkg = ReadJson<{ version: string }>(path, root) ?? { version: "1.0.0" };
	const doc = readFileSync(docPath, "utf8");
	if (i === 0) {
		const rmPath = AbsPath("../readme.md", root);
		const rmText = readFileSync(rmPath, "utf8");
		const newRmText = rmText.replaceAll(`@${pkg.version}`, `@${version}`);
		writeFileSync(rmPath, newRmText, "utf8");
	}
	if (!!pkg.version && !!valid(pkg.version)) {
		const newDoc = doc.replaceAll(`version-${pkg.version}`, `version-${version}`);
		pkg.version = version;
		writeFileSync(pkgPath, JSON.stringify(pkg, null, "\t"), "utf8");
		writeFileSync(docPath, newDoc, "utf8");
	}
}) : console.log("输入版本有误");