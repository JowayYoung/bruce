import { readFileSync, writeFileSync } from "node:fs";
import { dirname, extname, normalize } from "node:path";
import { argv } from "node:process";
import { fileURLToPath } from "node:url";
import { ReadDir } from "@yangzw/bruce-us/dist/node.js";
import { minify } from "terser";

const root = dirname(fileURLToPath(import.meta.url));
const opts = { mangle: { toplevel: true }, nameCache: {} };
const appDirs = ReadDir({ dir: root, path: "../packages/app/dist", regexp: /assets/ });
const icoDirs = ReadDir({ dir: root, path: "../packages/ico/dist" });
const imgDirs = ReadDir({ dir: root, path: "../packages/img/dist" });
const lngDirs = ReadDir({ dir: root, path: "../packages/lng/dist" });
const pkgDirs = ReadDir({ dir: root, path: "../packages/pkg/dist" });
const stdDirs = ReadDir({ dir: root, path: "../packages/std/dist" });
const exts = [".js", ".cjs", ".mjs"];
const pkg = argv[2] || "";
const dirs = [...appDirs, ...icoDirs, ...imgDirs, ...lngDirs, ...pkgDirs, ...stdDirs];
const finalDirs = pkg === "" ? dirs : dirs.filter(v => v.includes(normalize(`packages/${pkg}`)));

finalDirs.forEach(async v => {
	if (exts.includes(extname(v))) {
		const stext = readFileSync(v, "utf8");
		const dtext = (await minify(stext, opts)).code;
		!!dtext && writeFileSync(v, dtext, "utf8");
	}
});