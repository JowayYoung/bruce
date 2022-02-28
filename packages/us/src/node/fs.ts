/** 文件工具 **/
import { readdirSync, readFileSync, statSync } from "fs";
import { extname, join } from "path";
import { cwd } from "process";
import { copySync, ensureDirSync, removeSync } from "fs-extra";

type FilterFunc = (src: string, dist: string) => boolean;

/**
 * @name 绝对路径
 * @param {string} [path=""] 路径
 * @param {string} [dir=cwd()] 上下文
 */
function AbsPath(path: string = "", dir: string = cwd()): string {
	// const __dirname = dirname(fileURLToPath(import.meta.url)); 在使用该函数的文件里直接获取__dirname
	return join(dir, path);
}

/**
 * @name 复制文件路径
 * @param {string} [src=""] 输入路径
 * @param {string} [dist=""] 输出路径
 * @param {function} [filter] 过滤函数(返回true表示复制，返回false表示不复制)
 */
function CopyDir(src: string = "", dist: string = "", filter: FilterFunc): void {
	copySync(src, dist, { filter });
}

/**
 * @name 创建文件路径
 * @param {string} [dir=""] 路径
 */
function CreateDir(dir: string = ""): void {
	ensureDirSync(dir);
}

/**
 * @name 读取文件路径
 * @param {string} [type="bfs"] 类型：bfs、dfs
 * @param {string} [dir=""] 路径
 * @param {regexp} [filter=/(node_modules|\.git|\.DS_Store)$/] 过滤正则
 */

function ReadDir(type: string = "bfs", dir: string = cwd(), filter: RegExp = /(node_modules|\.git|\.DS_Store)$/): string[] {
	if (type === "bfs") {
		const paths = [];
		const queue = [];
		!filter.test(dir) && queue.unshift(dir);
		while (queue.length) {
			const topPath = queue.shift() ?? "";
			const stat = statSync(topPath);
			if (stat && !filter.test(topPath)) {
				const { isDirectory, isFile } = stat;
				if (isDirectory()) {
					readdirSync(topPath).forEach(v => {
						const spath = join(topPath, v);
						queue.push(spath);
					});
				} else if (isFile()) {
					paths.push(topPath);
				}
			}
		}
		return paths;
	} else if (type === "dfs") {
		const paths: string[] = [];
		const stat = statSync(dir);
		if (!filter.test(dir)) {
			if (stat.isDirectory()) {
				readdirSync(dir).reduce((t, v) => {
					const spath = join(dir, v);
					const spaths = ReadDir("dfs", spath, filter);
					t.push(...spaths);
					return t;
				}, paths);
			} else if (stat.isFile()) {
				paths.push(dir);
			}
		}
		return paths;
	} else {
		return [];
	}
}

/**
 * @name 读取JSON文件
 * @param {string} [path=""] 路径
 * @param {string} [dir=cwd()] 上下文
 */
function ReadJson(path: string = "", dir: string = cwd()): object {
	const _path = AbsPath(path, dir);
	const ext = extname(_path);
	if (!/^\.json$/.test(ext)) return {};
	const text = readFileSync(_path, "utf8");
	return JSON.parse(text);
}

/**
 * @name 删除文件路径
 * @param {string} [dir=""] 路径
 */
function RemoveDir(dir: string = ""): void {
	removeSync(dir);
}

export {
	AbsPath,
	CopyDir,
	CreateDir,
	ReadDir,
	ReadJson,
	RemoveDir
};