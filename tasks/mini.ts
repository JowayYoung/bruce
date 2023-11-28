import { readFileSync, writeFileSync } from "fs";
import { dirname, extname } from "path";
import { fileURLToPath } from "url";
import { ReadDir } from "@yangzw/bruce-us/dist/node.js";
import { minify } from "terser";

const root = dirname(fileURLToPath(import.meta.url));
const opts = { mangle: { toplevel: true }, nameCache: {} };
const appDirs = ReadDir({ dir: root, path: "../packages/app/dist", regexp: /assets/ });
const icoDirs = ReadDir({ dir: root, path: "../packages/ico/dist" });
const imgDirs = ReadDir({ dir: root, path: "../packages/img/dist" });
const pkgDirs = ReadDir({ dir: root, path: "../packages/pkg/dist" });
const stdDirs = ReadDir({ dir: root, path: "../packages/std/dist" });
const dirs = [...appDirs, ...icoDirs, ...imgDirs, ...pkgDirs, ...stdDirs];
const exts = [".js", ".mjs"];

dirs.forEach(async(v) => {
	if (exts.includes((extname(v)))) {
		const stext = readFileSync(v, "utf8");
		const dtext = (await minify(stext, opts)).code;
		!!dtext && writeFileSync(v, dtext, "utf8");
	}
});